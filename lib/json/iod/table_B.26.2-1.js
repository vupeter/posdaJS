var data = {
   "errors" : [
      "Can't handle table_8.8-1 (in table_C.12-1 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_C.12-6 after (0400,0401))",
      "Can't handle table_8.8-1 (in table_C.30.4-1:table_10-18 after (0040,0039))",
      "Can't handle table_8.8-1 (in table_C.30.4-1:table_10-18 after (0040,003A))",
      "Can't handle table_8.8-1 (in table_C.30.4-1:table_10-18 after (0040,0039))",
      "Can't handle table_8.8-1 (in table_C.30.4-1:table_10-18 after (0040,003A))",
      "Can't handle table_8.8-1 (in table_C.30.4-1 after (0008,1084))",
      "Can't handle table_8.8-1 (in table_C.30.4-1 after (0032,1064))",
      "Can't handle table_8.8-1 (in table_C.30.4-1 after (0040,100A))",
      "Can't handle table_8.8-1 (in table_C.30.2-1 after (0040,4025))",
      "Can't handle table_8.8-1 (in table_C.30.2-1 after (0040,4026))",
      "Can't handle table_8.8-1 (in table_C.30.2-1 after (0040,4027))",
      "Can't handle table_8.8-1 (in table_C.30.2-1 after (0040,4009))",
      "Can't handle table_8.8-1 (in table_C.30.2-1 after (0040,4018))",
      "Can't handle table_8.8-1 (in table_C.30.2-1:table_10-2 after (0040,A043))",
      "Can't handle table_8.8-1 (in table_C.30.2-1:table_10-2 after (0040,A168))",
      "Can't handle table_8.8-1 (in table_C.30.2-1:table_10-2 after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.30.2-1:table_10-2 after (0040,A043))",
      "Can't handle table_8.8-1 (in table_C.30.2-1:table_10-2 after (0040,A168))",
      "Can't handle table_8.8-1 (in table_C.30.2-1:table_10-2 after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.30.1-1 after (0074,100e))",
      "Can't handle table_8.8-1 (in table_C.30.3-1 after (0040,4009))",
      "Can't handle table_8.8-1 (in table_C.30.3-1 after (0040,4028))",
      "Can't handle table_8.8-1 (in table_C.30.3-1 after (0040,4029))",
      "Can't handle table_8.8-1 (in table_C.30.3-1 after (0040,4030))",
      "Can't handle table_8.8-1 (in table_C.30.3-1 after (0040,4019))",
      "Can't handle table_8.8-1 (in table_C.30.3-1:table_10-2 after (0040,A043))",
      "Can't handle table_8.8-1 (in table_C.30.3-1:table_10-2 after (0040,A168))",
      "Can't handle table_8.8-1 (in table_C.30.3-1:table_10-2 after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.30.3-1:table_10-2 after (0040,A043))",
      "Can't handle table_8.8-1 (in table_C.30.3-1:table_10-2 after (0040,A168))",
      "Can't handle table_8.8-1 (in table_C.30.3-1:table_10-2 after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.2-4 after (0040,A170))"
   ],
   "tags" : {
      "(0074,1210)[<0>](0040,0441)" : {
         "name" : "Content Item Modifier Sequence",
         "entity" : "",
         "desc" : null,
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "mod_tables" : [
            "table_C.30.2-1"
         ],
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "req" : "Sequence that specifies modifiers for a Protocol Context Content Item. One or more Items are permitted in this Sequence."
      },
      "(0040,4041)" : {
         "desc" : null,
         "entity" : "",
         "name" : "Input Readiness State",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "req" : [
            "Readiness state of the Input Information Sequence (0040,4021) and the referenced instances.",
            {
               "title" : "Enumerated Values:",
               "type" : "variablelist",
               "list" : [
                  [
                     "INCOMPLETE",
                     "The Input Information Sequence is not yet complete and additional instance references might be added."
                  ],
                  [
                     "UNAVAILABLE",
                     "The Input Information Sequence is complete but one or more of the referenced instances might not yet be available from the referenced source(s)."
                  ],
                  [
                     "READY",
                     "The Input Information Sequence is complete and the referenced instances are available from the referenced sources."
                  ]
               ]
            },
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
                                 "attrs" : {
                                    "xml:id" : "para_ea2c3aa7-a740-4db1-8292-dfb90f52ca2e"
                                 },
                                 "content" : [
                                    "If the Procedure Step does not require input information, the Input Readiness State may be READY when the Input Information Sequence is empty."
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
                                    "xml:id" : "para_d482cc64-046d-4c5a-9aa1-ce4c9b6643d6"
                                 },
                                 "content" : [
                                    "There is no guarantee that the referenced instances will still be available at the referenced location when retrieval is attempted."
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
                                 "attrs" : {
                                    "xml:id" : "para_43e64d6e-ee11-4c66-9c99-68cb98426908"
                                 },
                                 "el" : "para",
                                 "content" : [
                                    "There is no requirement to confirm the presence of referenced media prior to setting the Input Readiness State to READY."
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
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.30.2-1"
         ],
         "module" : "Unified Procedure Step Scheduled Procedure Information"
      },
      "(0008,0015)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "req" : "3",
         "name" : "Instance Coercion DateTime",
         "entity" : "",
         "desc" : [
            "Date and time that the SOP Instance was last coerced by a Storage SCP (see ",
            {
               "attrs" : {
                  "targetdoc" : "PS3.4",
                  "xrefstyle" : "select: labelnumber",
                  "targetptr" : "PS3.4"
               },
               "el" : "olink"
            },
            ")."
         ]
      },
      "(fffa,fffa)[<0>](0400,0310)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "req" : "3",
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
         "entity" : ""
      },
      "(0008,0014)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP common information",
         "req" : "3",
         "name" : "Instance Creator UID",
         "desc" : "Uniquely identifies device that created the SOP Instance.",
         "entity" : ""
      },
      "(0020,9172)[<0>](0062,000b)" : {
         "name" : "Referenced Segment Number",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "module" : "SOP Common",
         "req" : "1C",
         "usage" : "Contains SOP common information"
      },
      "(0008,0300)[<0>](0008,0302)" : {
         "entity" : "",
         "desc" : [
            "The value of the Private Creator Data Element value used to reserve the block\n                  of Private Data Elements whose characteristics are described in this Item.",
            {
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
               ],
               "el" : "note"
            }
         ],
         "name" : "Private Creator Reference",
         "usage" : "Contains SOP common information",
         "req" : "1",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1101)" : {
         "name" : "Person Identification Code Sequence",
         "entity" : "",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "req" : "1"
      },
      "(0040,a370)[<0>](0008,0090)" : {
         "name" : "Referring Physician's Name",
         "desc" : null,
         "entity" : "",
         "mod_tables" : [
            "table_C.30.4-1"
         ],
         "module" : "Unified Procedure Step Relationship",
         "usage" : "References the related SOPs and IEs",
         "req" : [
            "The physician who referred the Patient to the physician or service issuing the Service Request.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_3d3d0d24-8011-4e81-b4ca-738053d8576e"
                     },
                     "content" : [
                        "This is generally the recipient of any report generated by the Service Request."
                     ]
                  },
                  "\n                "
               ]
            }
         ]
      },
      "(0074,1210)[<0>](0040,a120)" : {
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2"
         ],
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "entity" : "",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "name" : "DateTime"
      },
      "(0038,0502)[<0>](0012,0031)" : {
         "usage" : "Describes the patient's medical state or history",
         "req" : "Name of the site responsible for submitting clinical trial or research data.",
         "module" : "Patient Medical",
         "mod_tables" : [
            "table_C.2-4"
         ],
         "desc" : null,
         "entity" : "",
         "name" : "Clinical Trial Site Name"
      },
      "(0010,1100)[<0>](0008,1199)" : {
         "name" : "Referenced SOP Sequence",
         "desc" : [
            "References to object instances.",
            "One or more Items shall be included in this Sequence"
         ],
         "entity" : "",
         "module" : "Unified Procedure Step Relationship",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-3b"
         ],
         "usage" : "References the related SOPs and IEs",
         "req" : "1"
      },
      "(0010,0024)[<0>](0040,0035)" : {
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-18"
         ],
         "module" : "Unified Procedure Step Relationship",
         "req" : "3",
         "usage" : "References the related SOPs and IEs",
         "name" : "Identifier Type Code",
         "entity" : "",
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
         ]
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0040,08ea)" : {
         "name" : "Measurement Units Code Sequence",
         "entity" : "",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "module" : "Unified Procedure Step Performed Procedure Information",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2"
         ],
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "req" : "1C"
      },
      "(0040,a370)[<0>](0040,1002)" : {
         "name" : "Reason for the Requested Procedure",
         "entity" : "",
         "desc" : null,
         "mod_tables" : [
            "table_C.30.4-1"
         ],
         "module" : "Unified Procedure Step Relationship",
         "usage" : "References the related SOPs and IEs",
         "req" : "Reason for requesting this procedure."
      },
      "(0074,1210)[<0>](0040,0441)[<1>](0040,a160)" : {
         "name" : "Text Value",
         "entity" : "",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data"
      },
      "(0040,4027)" : {
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "mod_tables" : [
            "table_C.30.2-1"
         ],
         "req" : [
            "Geographic locations of the equipment for which the Procedure Step is scheduled.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "name" : "Scheduled Station Geographic Location Code Sequence",
         "desc" : null,
         "entity" : ""
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0081)" : {
         "req" : "3",
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "entity" : "",
         "name" : "Institution Address"
      },
      "(0074,1216)[<0>](0040,4033)[<1>](0040,e022)[<2>](0088,0130)" : {
         "req" : "2",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "module" : "Unified Procedure Step Performed Procedure Information",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-3b"
         ],
         "entity" : "",
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the referenced instance(s) reside.",
         "name" : "Storage Media File-Set ID"
      },
      "(0074,1216)[<0>](0040,4033)[<1>](0008,1199)[<2>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "entity" : "",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "Unified Procedure Step Performed Procedure Information",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-3b"
         ],
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "req" : "1"
      },
      "(0040,a370)[<0>](0040,2400)" : {
         "name" : "Imaging Service Request Comments",
         "entity" : "",
         "desc" : null,
         "mod_tables" : [
            "table_C.30.4-1"
         ],
         "module" : "Unified Procedure Step Relationship",
         "req" : "User-defined comments on the Service Request.",
         "usage" : "References the related SOPs and IEs"
      },
      "(0074,1210)[<0>](0040,0441)[<1>](0040,a043)" : {
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "req" : "1",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2"
         ],
         "entity" : "",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Concept Name Code Sequence"
      },
      "(0010,1100)[<0>](0020,000e)" : {
         "desc" : [
            "Unique identifier for the Series that is part of the Study identified in Study Instance UID (0020,000D), if present, and contains the referenced object instance(s).",
            "Required if Type of Instances (0040,E020) is DICOM"
         ],
         "entity" : "",
         "name" : "Series Instance UID",
         "req" : "1C",
         "usage" : "References the related SOPs and IEs",
         "module" : "Unified Procedure Step Relationship",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-3b"
         ]
      },
      "(0040,a370)[<0>](0040,0027)[<1>](0040,0033)" : {
         "module" : "Unified Procedure Step Relationship",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-17"
         ],
         "req" : "1C",
         "usage" : "References the related SOPs and IEs",
         "name" : "Universal Entity ID Type",
         "entity" : "",
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
      "(0074,1216)[<0>](0074,1212)[<1>](0040,0441)[<2>](0040,a124)" : {
         "name" : "UID",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "entity" : "",
         "module" : "Unified Procedure Step Performed Procedure Information",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2"
         ],
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "req" : "1C"
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0008,1199)[<2>](0008,1160)" : {
         "module" : "Unified Procedure Step Performed Procedure Information",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2"
         ],
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "req" : "1C",
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
         "entity" : ""
      },
      "(0008,0300)[<0>](0008,0304)" : {
         "usage" : "Contains SOP common information",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : [
            "List of Private Data Elements in block that do not contain identifying\n                  information (are safe from identity leakage).",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once.",
            "Required if Block Identifying Information Status (0008,0303) equals MIXED."
         ],
         "entity" : "",
         "name" : "Nonidentifying Private Elements"
      },
      "(0040,a370)[<0>](0008,0050)" : {
         "usage" : "References the related SOPs and IEs",
         "req" : "An identifier of the order for the Study.",
         "mod_tables" : [
            "table_C.30.4-1"
         ],
         "module" : "Unified Procedure Step Relationship",
         "entity" : "",
         "desc" : null,
         "name" : "Accession Number"
      },
      "(0010,0024)[<0>](0040,0036)" : {
         "usage" : "References the related SOPs and IEs",
         "req" : "3",
         "module" : "Unified Procedure Step Relationship",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-18"
         ],
         "entity" : "",
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
         "name" : "Assigning Facility Sequence"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1160)" : {
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-3b"
         ],
         "module" : "Unified Procedure Step Relationship",
         "usage" : "References the related SOPs and IEs",
         "req" : "1C",
         "name" : "Referenced Frame Number",
         "desc" : [
            "Identifies the frame numbers within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1.",
            {
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "This Attribute may be multi-valued."
                     ],
                     "attrs" : {
                        "xml:id" : "para_e2359edc-51fe-4f62-abc5-a7447e377de7"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "entity" : ""
      },
      "(0038,0101)[<0>](0038,0102)" : {
         "name" : "Resource Description",
         "entity" : "",
         "desc" : null,
         "mod_tables" : [
            "table_C.2-4"
         ],
         "module" : "Patient Medical",
         "usage" : "Describes the patient's medical state or history",
         "req" : "Description or title of the resource."
      },
      "(4ffe,0001)[<0>](0400,0020)" : {
         "name" : "Data Elements Signed",
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
         "entity" : "",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "Contains SOP common information",
         "req" : "1"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1103)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "req" : "3",
         "name" : "Person's Telephone Numbers",
         "desc" : "Person's telephone number(s)",
         "entity" : ""
      },
      "(0008,0300)" : {
         "req" : "3",
         "usage" : "Contains SOP common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "",
         "desc" : "Characteristics of Private Data Elements within the current SOP Instance",
         "name" : "Private Data Element Characteristics Sequence"
      },
      "(0074,1210)[<0>](0040,0441)[<1>](0040,08ea)" : {
         "name" : "Measurement Units Code Sequence",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "entity" : "",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2"
         ],
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "req" : "1C"
      },
      "(0010,0033)" : {
         "mod_tables" : [
            "table_C.30.4-1"
         ],
         "module" : "Unified Procedure Step Relationship",
         "usage" : "References the related SOPs and IEs",
         "req" : [
            "Date of birth of the named patient in the Alternative Calendar (0010,0035).",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "No format is specified for alternative calendar dates so none should be assumed."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_bdb95ec9-5918-4428-b0b6-f9690a98b91d"
                     }
                  },
                  "\n                "
               ]
            }
         ],
         "name" : "Patient's Birth Date in Alternative Calendar",
         "desc" : null,
         "entity" : ""
      },
      "(0020,0013)" : {
         "desc" : "A number that identifies this Composite object instance.",
         "entity" : "",
         "name" : "Instance Number",
         "usage" : "Contains SOP common information",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0400,0561)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "req" : "3",
         "name" : "Original Attributes Sequence",
         "entity" : "",
         "desc" : [
            "Sequence of Items containing all attributes that were removed or replaced by other values in the main data set.",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1150)" : {
         "req" : "1",
         "usage" : "References the related SOPs and IEs",
         "module" : "Unified Procedure Step Relationship",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-3b"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "",
         "name" : "Referenced SOP Class UID"
      },
      "(0040,4070)[<0>](0040,4074)" : {
         "req" : "1C",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-3c"
         ],
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "desc" : [
            "Details for storing instances via the IHE Provide and Register Document Set-b (ITI-41) transaction [IHE ITI-TF 2.b].",
            "Required if STOW-RS Storage Sequence (0040,4072) and DICOM Storage Sequence (0040,4071) are not present. May be present otherwise.",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "",
         "name" : "XDS Storage Sequence"
      },
      "(0008,0123)" : {
         "name" : "Context Group Identification Sequence",
         "entity" : "",
         "desc" : [
            "Sequence of items that map values of Context Identifier (0008,010F) to an external, private or local Context Group.",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "req" : "3"
      },
      "(0010,1100)[<0>](0040,e023)[<1>](0040,e010)" : {
         "entity" : "",
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
               ],
               "el" : "note"
            }
         ],
         "name" : "Retrieve URI",
         "usage" : "References the related SOPs and IEs",
         "req" : "1",
         "module" : "Unified Procedure Step Relationship",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-3b"
         ]
      },
      "(0018,a001)[<0>](0008,0070)" : {
         "entity" : "",
         "desc" : "Manufacturer of the equipment that contributed to the composite instance.",
         "name" : "Manufacturer",
         "usage" : "Contains SOP common information",
         "req" : "1",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(4ffe,0001)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "3",
         "usage" : "Contains SOP common information",
         "name" : "MAC Parameters Sequence",
         "entity" : "",
         "desc" : [
            "A sequence of items that describe the parameters used to calculate a MAC for use in Digital Signatures.",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0038,0502)[<0>](0012,0042)" : {
         "name" : "Clinical Trial Subject Reading ID",
         "entity" : "",
         "desc" : null,
         "mod_tables" : [
            "table_C.2-4"
         ],
         "module" : "Patient Medical",
         "usage" : "Describes the patient's medical state or history",
         "req" : "Identifies the patient as a clinical trial or research subject for blinded evaluations."
      },
      "(0074,1210)[<0>](0040,0441)[<1>](0040,a162)" : {
         "entity" : "",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "name" : "Rational Numerator Value",
         "req" : "1C",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2"
         ]
      },
      "(0010,1100)[<0>](0040,e021)[<1>](0008,0054)" : {
         "module" : "Unified Procedure Step Relationship",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-3b"
         ],
         "usage" : "References the related SOPs and IEs",
         "req" : "1",
         "name" : "Retrieve AE Title",
         "desc" : "Title of a DICOM Application Entity where the referenced instance(s) may be retrieved on the network.",
         "entity" : ""
      },
      "(fffa,fffa)[<0>](0400,0305)" : {
         "entity" : "",
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
                        "xml:id" : "para_cae60b6b-4fad-4c20-981d-247bbf9c6471"
                     }
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ],
         "name" : "Certified Timestamp Type",
         "req" : "1C",
         "usage" : "Contains SOP common information",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0033)" : {
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "module" : "Unified Procedure Step Relationship",
         "req" : "1C",
         "usage" : "References the related SOPs and IEs",
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
         ],
         "entity" : ""
      },
      "(0074,1210)[<0>](0040,0441)[<1>](0040,a121)" : {
         "name" : "Date",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "entity" : "",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data"
      },
      "(0074,1210)[<0>](0040,0441)[<1>](0040,a168)" : {
         "name" : "Concept Code Sequence",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "entity" : "",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2"
         ],
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "req" : "1C"
      },
      "(0074,1216)[<0>](0040,4033)[<1>](0040,e024)" : {
         "desc" : [
            "Details for retrieving instances using WADO-WS or IHE XDS transactions.",
            {
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "Retrieval via WADO-URI is addressed by the WADO Retrieval Sequence (0040,E023). Retrieval via WADO-RS is addressed by the WADO-RS Retrieval Sequence (0040,E025)."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_020ae95c-9384-49b9-b460-e9625c404c63"
                     }
                  },
                  "\n              "
               ],
               "el" : "note"
            },
            "Required if DICOM Retrieval Sequence (0040,E021), DICOM Media Retrieval Sequence (0040,E022), WADO-RS Retrieval Sequence (0040,E025) and WADO Retrieval Sequence (0040,E023) are not present. May be present otherwise.",
            "This sequence shall only identify repositories known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "",
         "name" : "XDS Retrieval Sequence",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "req" : "1C",
         "module" : "Unified Procedure Step Performed Procedure Information",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-3b"
         ]
      },
      "(0010,21c0)" : {
         "desc" : null,
         "entity" : "",
         "name" : "Pregnancy Status",
         "req" : [
            "Describes pregnancy state of patient.",
            {
               "list" : [
                  [
                     "0001",
                     "not pregnant"
                  ],
                  [
                     "0002",
                     "possibly pregnant"
                  ],
                  [
                     "0003",
                     "definitely pregnant"
                  ],
                  [
                     "0004",
                     "unknown"
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "usage" : "Describes the patient's medical state or history",
         "module" : "Patient Medical",
         "mod_tables" : [
            "table_C.2-4"
         ]
      },
      "(0008,0105)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "req" : "1",
         "usage" : "Contains SOP common information",
         "name" : "Mapping Resource",
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
         "entity" : ""
      },
      "(0040,a370)[<0>](0032,1033)" : {
         "name" : "Requesting Service",
         "desc" : null,
         "entity" : "",
         "mod_tables" : [
            "table_C.30.4-1"
         ],
         "module" : "Unified Procedure Step Relationship",
         "req" : "Institutional department where the request initiated.",
         "usage" : "References the related SOPs and IEs"
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0040,0441)[<2>](0008,1199)[<3>](0062,000b)" : {
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2"
         ],
         "module" : "Unified Procedure Step Performed Procedure Information",
         "entity" : "",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "name" : "Referenced Segment Number"
      },
      "(0040,a370)[<0>](0008,0051)[<1>](0040,0031)" : {
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "",
         "name" : "Local Namespace Entity ID",
         "usage" : "References the related SOPs and IEs",
         "req" : "1C",
         "module" : "Unified Procedure Step Relationship",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-17"
         ]
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0040,0441)[<2>](0040,a168)" : {
         "name" : "Concept Code Sequence",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "entity" : "",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2"
         ],
         "module" : "Unified Procedure Step Performed Procedure Information",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "req" : "1C"
      },
      "(0074,1216)[<0>](0040,4033)[<1>](0040,e021)" : {
         "desc" : [
            "Details for retrieving instances via the DICOM Retrieve Service.",
            "Required if DICOM Media Retrieval Sequence (0040,E022), WADO Retrieval Sequence (0040,E023), WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "This sequence shall only identify sources known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "",
         "name" : "DICOM Retrieval Sequence",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-3b"
         ],
         "module" : "Unified Procedure Step Performed Procedure Information"
      },
      "(0038,0500)" : {
         "module" : "Patient Medical",
         "mod_tables" : [
            "table_C.2-4"
         ],
         "usage" : "Describes the patient's medical state or history",
         "req" : "Description of patient state (comatose, disoriented, vision impaired, etc.)",
         "name" : "Patient State",
         "entity" : "",
         "desc" : null
      },
      "(0040,4011)" : {
         "name" : "Expected Completion DateTime",
         "desc" : null,
         "entity" : "",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "mod_tables" : [
            "table_C.30.2-1"
         ],
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "req" : "Date and time at which the Procedure Step is expected to be completed."
      },
      "(0074,1210)[<0>](0008,1199)[<1>](0062,000b)" : {
         "name" : "Referenced Segment Number",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "entity" : "",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2"
         ],
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "req" : "1C"
      },
      "(0074,1216)[<0>](0040,0254)" : {
         "mod_tables" : [
            "table_C.30.3-1"
         ],
         "module" : "Unified Procedure Step Performed Procedure Information",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "req" : "Institution-generated description or classification of the Procedure Step that was performed.",
         "name" : "Performed Procedure Step Description",
         "desc" : null,
         "entity" : ""
      },
      "(0018,a001)[<0>](0018,1020)" : {
         "req" : "3",
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
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
         "name" : "Software Versions"
      },
      "(0074,1210)[<0>](0040,a124)" : {
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2"
         ],
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "req" : "1C",
         "name" : "UID",
         "entity" : "",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ]
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0040,0441)[<2>](0040,a163)" : {
         "req" : "1C",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2"
         ],
         "module" : "Unified Procedure Step Performed Procedure Information",
         "entity" : "",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "name" : "Rational Denominator Value"
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0040,0441)[<2>](0040,a123)" : {
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2"
         ],
         "module" : "Unified Procedure Step Performed Procedure Information",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "req" : "1C",
         "name" : "Person Name",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "entity" : ""
      },
      "(0074,1216)[<0>](0040,4033)[<1>](0040,e022)" : {
         "req" : "1C",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-3b"
         ],
         "module" : "Unified Procedure Step Performed Procedure Information",
         "entity" : "",
         "desc" : [
            "Details for retrieving instances from Media.",
            "Required if DICOM Retrieval Sequence (0040,E021), WADO Retrieval Sequence (0040,E023), and WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "This sequence shall only identify media known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "DICOM Media Retrieval Sequence"
      },
      "(0074,1210)[<0>](0008,1199)[<1>](0008,1160)" : {
         "desc" : [
            "Identifies the frame numbers within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1.",
            {
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
               ],
               "el" : "note"
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "entity" : "",
         "name" : "Referenced Frame Number",
         "req" : "1C",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2"
         ]
      },
      "(0008,0300)[<0>](0008,0301)" : {
         "name" : "Private Group Reference",
         "entity" : "",
         "desc" : "Odd group number within which the Private Data Element block is reserved.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP common information",
         "req" : "1"
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_fe92f60f-2615-4c9b-bab0-86d640bd9af4"
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
                     ]
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ],
         "entity" : "",
         "name" : "Certificate Type",
         "usage" : "Contains SOP common information",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common"
      },
      "(0074,1002)[<0>](0074,1008)[<1>](0074,100c)" : {
         "entity" : "",
         "desc" : null,
         "name" : "Contact Display Name",
         "usage" : "Describes the progress of a UPS task",
         "req" : "Name of the person, department or organization to contact for more information about the performance of the Procedure Step.",
         "mod_tables" : [
            "table_C.30.1-1"
         ],
         "module" : "Unified Procedure Step Progress Information"
      },
      "(0074,1210)[<0>](0040,0441)[<1>](0008,1199)[<2>](0008,1155)" : {
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "req" : "1",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2",
            "table_10-11"
         ],
         "entity" : "",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID"
      },
      "(0040,4021)[<0>](0040,e024)" : {
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
         "entity" : "",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-3b"
         ],
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "req" : "1C"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1104)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "Contains SOP common information",
         "name" : "Person's Telecom Information",
         "entity" : "",
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
                     ],
                     "el" : "orderedlist"
                  },
                  "\n              "
               ]
            }
         ]
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0040,a161)" : {
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "entity" : "",
         "name" : "Floating Point Value",
         "req" : "1C",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2"
         ],
         "module" : "Unified Procedure Step Performed Procedure Information"
      },
      "(0074,1210)[<0>](0040,0441)[<1>](0040,a163)" : {
         "name" : "Rational Denominator Value",
         "entity" : "",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2"
         ],
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "req" : "1C"
      },
      "(0074,1210)" : {
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "mod_tables" : [
            "table_C.30.2-1"
         ],
         "req" : [
            "Processing parameters to be used by the performing system when carrying out the Procedure Step.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "name" : "Scheduled Processing Parameters Sequence",
         "entity" : "",
         "desc" : null
      },
      "(0040,a390)" : {
         "name" : "HL7 Structured Document Reference Sequence",
         "desc" : [
            "Sequence of items defining mapping between HL7 Instance Identifiers of unencapsulated HL7 Structured Documents referenced from the current SOP Instance as if they were DICOM Composite SOP Class Instances defined by SOP Class and Instance UID pairs. May also define a means of accessing the Documents.",
            "One or more Items shall be included in this Sequence.",
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
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "req" : "1C",
         "usage" : "Contains SOP common information"
      },
      "(0008,0016)" : {
         "entity" : "",
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
                  "targetptr" : "PS3.4",
                  "targetdoc" : "PS3.4",
                  "xrefstyle" : "select: labelnumber"
               }
            },
            "."
         ],
         "name" : "SOP Class UID",
         "usage" : "Contains SOP common information",
         "req" : "1",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,4070)[<0>](0040,4071)[<1>](2100,0140)" : {
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "req" : "1",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-3c"
         ],
         "entity" : "",
         "desc" : "Title of a DICOM Application Entity to which instances will be stored.",
         "name" : "Destination AE"
      },
      "(0040,4021)[<0>](0020,000d)" : {
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-3b"
         ],
         "req" : "1C",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "name" : "Study Instance UID",
         "entity" : "",
         "desc" : [
            "Unique identifier for the Study.",
            "Required if Type of Instances (0040,E020) is DICOM"
         ]
      },
      "(0040,4070)[<0>](0040,4072)" : {
         "name" : "STOW-RS Storage Sequence",
         "entity" : "",
         "desc" : [
            "Details for storing instances via STOW-RS.",
            "Required if DICOM Storage Sequence (0040,4071) and XDS Storage Sequence (0040,4074) are not present. May be present otherwise.",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-3c"
         ],
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "req" : "1C"
      },
      "(0018,a001)[<0>](0018,a003)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP common information",
         "req" : "3",
         "name" : "Contribution Description",
         "entity" : "",
         "desc" : "Description of the contribution the equipment made to the composite instance."
      },
      "(0010,0010)" : {
         "mod_tables" : [
            "table_C.30.4-1"
         ],
         "module" : "Unified Procedure Step Relationship",
         "usage" : "References the related SOPs and IEs",
         "req" : "Patient's full legal name.",
         "name" : "Patient's Name",
         "entity" : "",
         "desc" : null
      },
      "(0008,0013)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "Contains SOP common information",
         "name" : "Instance Creation Time",
         "entity" : "",
         "desc" : [
            "Time the SOP Instance was created.",
            "This is the time that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ]
      },
      "(0010,0020)" : {
         "usage" : "References the related SOPs and IEs",
         "req" : [
            "Primary identifier for the patient.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_e4db4051-3f71-4c78-9472-361ed65fbddf"
                     },
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
                  "\n                "
               ]
            },
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.30.4.1"
                  },
                  "el" : "xref"
               }
            ]
         ],
         "mod_tables" : [
            "table_C.30.4-1"
         ],
         "module" : "Unified Procedure Step Relationship",
         "desc" : null,
         "entity" : "",
         "name" : "Patient ID"
      },
      "(0074,1210)[<0>](0040,0441)[<1>](0008,1199)" : {
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "name" : "Referenced SOP Sequence",
         "entity" : "",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ]
      },
      "(0074,1216)[<0>](0040,4033)[<1>](0040,e024)[<2>](0040,e030)" : {
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "req" : "1",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-3b"
         ],
         "module" : "Unified Procedure Step Performed Procedure Information",
         "desc" : "Uniquely identifies a Repository from which the referenced instances can be retrieved.",
         "entity" : "",
         "name" : "Repository Unique ID"
      },
      "(0100,0420)" : {
         "desc" : "The date and time when the SOP Instance Status (0100,0410) was set to AO.",
         "entity" : "",
         "name" : "SOP Authorization DateTime",
         "usage" : "Contains SOP common information",
         "req" : "3",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,a370)[<0>](0008,0051)" : {
         "desc" : null,
         "entity" : "",
         "name" : "Issuer of Accession Number Sequence",
         "usage" : "References the related SOPs and IEs",
         "req" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.30.4-1"
         ],
         "module" : "Unified Procedure Step Relationship"
      },
      "(0010,0035)[<0>](0010,0024)[<1>](0040,003a)" : {
         "module" : "Unified Procedure Step Relationship",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-18"
         ],
         "usage" : "References the related SOPs and IEs",
         "req" : "3",
         "name" : "Assigning Agency or Department Code Sequence",
         "entity" : "",
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
         ]
      },
      "(0040,a370)[<0>](0040,100a)" : {
         "entity" : "",
         "desc" : null,
         "name" : " Reason for Requested Procedure Code Sequence",
         "req" : [
            "Coded reason for requesting this procedure.",
            "Zero or more Items shall be included in the sequence."
         ],
         "usage" : "References the related SOPs and IEs",
         "module" : "Unified Procedure Step Relationship",
         "mod_tables" : [
            "table_C.30.4-1"
         ]
      },
      "(0010,1100)[<0>](0040,e020)" : {
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
         "entity" : "",
         "name" : "Type of Instances",
         "usage" : "References the related SOPs and IEs",
         "req" : "1",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-3b"
         ],
         "module" : "Unified Procedure Step Relationship"
      },
      "(0008,010f)" : {
         "name" : "Context Identifier",
         "entity" : "",
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
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "usage" : "Contains SOP common information"
      },
      "(0074,1216)[<0>](0040,4033)[<1>](0040,e023)" : {
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "req" : "1C",
         "module" : "Unified Procedure Step Performed Procedure Information",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-3b"
         ],
         "entity" : "",
         "desc" : [
            "Details for retrieving instances available via WADO-URI.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_87c7f326-107c-4a18-88b9-60712a9f7041"
                     },
                     "content" : [
                        "This sequence addresses use of the URI-based Web Access to DICOM Objects. Retrieval via the Web Services-based WADO-WS is addressed in the XDS Retrieval Sequence (0040,E024)."
                     ]
                  },
                  "\n              "
               ]
            },
            "Required if DICOM Retrieval Sequence (0040,E021), DICOM Media Retrieval Sequence (0040,E022), WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "WADO Retrieval Sequence"
      },
      "(0010,0035)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "module" : "Unified Procedure Step Relationship",
         "req" : "1C",
         "usage" : "References the related SOPs and IEs",
         "name" : "Universal Entity ID Type",
         "entity" : "",
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
         ]
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0307)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "req" : "1",
         "name" : "Deidentification Action",
         "entity" : "",
         "desc" : [
            "Recommended action to be performed during de-identification on elements listed in Identifying Private Elements (0008,0306) within this Item.",
            {
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
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_79bc3e05-de52-489c-8337-4fe4bb188ec4"
                                 },
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
                           "el" : "listitem",
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
                           ]
                        },
                        "\n                    ",
                        {
                           "content" : [
                              "\n                      ",
                              {
                                 "content" : [
                                    "Further explanation of these actions can be found in ",
                                    {
                                       "el" : "olink",
                                       "attrs" : {
                                          "targetdoc" : "PS3.15",
                                          "xrefstyle" : "template:PS3.15 Section %n %t",
                                          "targetptr" : "sect_E.3.1"
                                       }
                                    },
                                    "."
                                 ],
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_62b4d252-a377-4a7b-9905-82f5437ccd6c"
                                 }
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
         ]
      },
      "(0074,1002)[<0>](0074,1238)" : {
         "module" : "Unified Procedure Step Progress Information",
         "mod_tables" : [
            "table_C.30.1-1"
         ],
         "usage" : "Describes the progress of a UPS task",
         "req" : "A textual description of the reason a procedure step was discontinued.",
         "name" : "Reason For Cancellation",
         "entity" : "",
         "desc" : null
      },
      "(0038,0101)[<0>](0040,e010)" : {
         "name" : "Retrieve URI",
         "desc" : null,
         "entity" : "",
         "mod_tables" : [
            "table_C.2-4"
         ],
         "module" : "Patient Medical",
         "usage" : "Describes the patient's medical state or history",
         "req" : [
            [
               "Retrieval access path to resource. Includes fully specified scheme, authority, path, and query in accordance with ",
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
                     "content" : [
                        "The VR of this attribute has changed from UT to UR."
                     ],
                     "attrs" : {
                        "xml:id" : "para_561ec3ce-b9d6-4e89-84b5-681fe4092bd8"
                     },
                     "el" : "para"
                  },
                  "\n"
               ],
               "el" : "note"
            }
         ]
      },
      "(0008,1084)" : {
         "name" : "Admitting Diagnoses Code Sequence",
         "desc" : null,
         "entity" : "",
         "mod_tables" : [
            "table_C.30.4-1"
         ],
         "module" : "Unified Procedure Step Relationship",
         "usage" : "References the related SOPs and IEs",
         "req" : [
            "Coded admitting diagnosis (diagnoses) for the patient.",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0074,1216)[<0>](0040,4033)[<1>](0040,e023)[<2>](0040,e010)" : {
         "name" : "Retrieve URI",
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
               ],
               "el" : "note"
            }
         ],
         "entity" : "",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-3b"
         ],
         "module" : "Unified Procedure Step Performed Procedure Information",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "req" : "1"
      },
      "(0018,a001)[<0>](0018,1200)" : {
         "usage" : "Contains SOP common information",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "entity" : "",
         "name" : "Date of Last Calibration"
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "Unified Procedure Step Performed Procedure Information"
      },
      "(0400,0561)[<0>](0400,0564)" : {
         "name" : "Source of Previous Values",
         "desc" : "The source that provided the SOP Instance prior to the removal or replacement of the values. For example, this might be the Institution from which imported SOP Instances were received.",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "req" : "2",
         "usage" : "Contains SOP common information"
      },
      "(0040,4025)" : {
         "name" : "Scheduled Station Name Code Sequence",
         "entity" : "",
         "desc" : null,
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "mod_tables" : [
            "table_C.30.2-1"
         ],
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "req" : [
            "Identifying names within the enterprise of the equipment for which the Procedure Step is scheduled. The names conveyed in Code Value (0008,0100) may be the same as the AE Titles, but do not have to be.",
            "Zero or more Items shall be included in this Sequence."
         ]
      },
      "(0020,9172)[<0>](0008,1160)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "usage" : "Contains SOP common information",
         "req" : "1C",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_68450e47-9448-4ac5-82e8-4015a854968a"
                     }
                  },
                  "\n              "
               ]
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "entity" : ""
      },
      "(0010,0035)[<0>](0010,0024)[<1>](0040,0033)" : {
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-18"
         ],
         "module" : "Unified Procedure Step Relationship",
         "usage" : "References the related SOPs and IEs",
         "req" : "1C",
         "name" : "Universal Entity ID Type",
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
                  "attrs" : {
                     "linkend" : "sect_10.14",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for Defined Terms."
            ]
         ],
         "entity" : ""
      },
      "(0040,4070)[<0>](0040,4072)[<1>](0040,4073)" : {
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-3c"
         ],
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "req" : "1",
         "name" : "Storage URL",
         "entity" : "",
         "desc" : [
            "URI/URL specifying the location of the STOW-RS storage service to which instances will be stored.",
            [
               "The value shall be a fully specified URI with protocol, authority and path, in accordance with ",
               {
                  "attrs" : {
                     "linkend" : "biblio_RFC_3986"
                  },
                  "el" : "xref"
               },
               " and ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: labelnumber quotedtitle",
                     "targetdoc" : "PS3.18",
                     "targetptr" : "sect_6.6"
                  },
                  "el" : "olink"
               },
               "."
            ]
         ]
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0040,0441)[<2>](0040,a160)" : {
         "name" : "Text Value",
         "entity" : "",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "module" : "Unified Procedure Step Performed Procedure Information",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "Describes the work performed including information about status, place, time and result data"
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0008,1199)[<2>](0008,1150)" : {
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "Unified Procedure Step Performed Procedure Information",
         "req" : "1",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : ""
      },
      "(0018,a001)[<0>](0008,1070)" : {
         "name" : "Operators' Name",
         "desc" : "Name(s) of the operator(s) of the contributing equipment.",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "Contains SOP common information"
      },
      "(0074,1216)[<0>](0040,4035)[<1>](0040,4036)" : {
         "name" : "Human Performer's Organization",
         "desc" : null,
         "entity" : "",
         "module" : "Unified Procedure Step Performed Procedure Information",
         "mod_tables" : [
            "table_C.30.3-1"
         ],
         "req" : "Organization to which the human performer is accountable for the activities in the Procedure Step.",
         "usage" : "Describes the work performed including information about status, place, time and result data"
      },
      "(0040,a390)[<0>](0040,e010)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "Contains SOP common information",
         "name" : "Retrieve URI",
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
         "entity" : ""
      },
      "(0074,1210)[<0>](0040,a160)" : {
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "name" : "Text Value",
         "entity" : "",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ]
      },
      "(0074,1210)[<0>](0040,a122)" : {
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2"
         ],
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "req" : "1C",
         "name" : "Time",
         "entity" : "",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ]
      },
      "(0040,4018)" : {
         "req" : [
            "Coded description of the Procedure Step.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "mod_tables" : [
            "table_C.30.2-1"
         ],
         "desc" : null,
         "entity" : "",
         "name" : "Scheduled Workitem Code Sequence"
      },
      "(0400,0500)" : {
         "name" : "Encrypted Attributes Sequence",
         "entity" : "",
         "desc" : [
            "Sequence of Items containing encrypted DICOM data.",
            "One or more Items shall be included in this Sequence.",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "req" : "1C"
      },
      "(0040,a370)[<0>](0040,2017)" : {
         "entity" : "",
         "desc" : null,
         "name" : "Filler Order Number / Imaging Service Request",
         "req" : "The order number assigned to the Service Request by the party filling the order.",
         "usage" : "References the related SOPs and IEs",
         "mod_tables" : [
            "table_C.30.4-1"
         ],
         "module" : "Unified Procedure Step Relationship"
      },
      "(0040,4070)[<0>](0040,4071)" : {
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "req" : "1C",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-3c"
         ],
         "entity" : "",
         "desc" : [
            "Details for storing instances via the DICOM Storage Service.",
            "Required if STOW-RS Storage Sequence (0040,4072) or XDS Storage Sequence (0040,4074) is not present. May be present otherwise.",
            "One or more Items shall be included in this sequence."
         ],
         "name" : "DICOM Storage Sequence"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "entity" : "",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-3b"
         ],
         "module" : "Unified Procedure Step Relationship",
         "req" : "1",
         "usage" : "References the related SOPs and IEs"
      },
      "(0010,0040)" : {
         "desc" : null,
         "entity" : "",
         "name" : "Patient's Sex",
         "usage" : "References the related SOPs and IEs",
         "req" : [
            "Sex of the named Patient.",
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
         "module" : "Unified Procedure Step Relationship",
         "mod_tables" : [
            "table_C.30.4-1"
         ]
      },
      "(0040,4021)[<0>](0040,e023)[<1>](0040,e010)" : {
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-3b"
         ],
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "req" : "1",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "name" : "Retrieve URI",
         "entity" : "",
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
         ]
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0040,a123)" : {
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "entity" : "",
         "name" : "Person Name",
         "req" : "1C",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "module" : "Unified Procedure Step Performed Procedure Information",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2"
         ]
      },
      "(0010,1100)[<0>](0040,e022)[<1>](0088,0140)" : {
         "name" : "Storage Media File-Set UID",
         "entity" : "",
         "desc" : "Uniquely identifies the Storage Media on which the referenced instance(s) reside.",
         "module" : "Unified Procedure Step Relationship",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-3b"
         ],
         "usage" : "References the related SOPs and IEs",
         "req" : "1"
      },
      "(4ffe,0001)[<0>](0400,0005)" : {
         "name" : "MAC ID Number",
         "desc" : "A number, unique within this SOP Instance, used to identify this MAC Parameters Sequence (4FFE,0001) item from an Item of the Digital Signatures Sequence (FFFA,FFFA).",
         "entity" : "",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1",
         "usage" : "Contains SOP common information"
      },
      "(0074,1216)[<0>](0040,4035)[<1>](0040,4037)" : {
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "req" : "Name of the human performer.",
         "mod_tables" : [
            "table_C.30.3-1"
         ],
         "module" : "Unified Procedure Step Performed Procedure Information",
         "desc" : null,
         "entity" : "",
         "name" : "Human Performer's Name"
      },
      "(0040,4021)" : {
         "req" : [
            "References to information objects needed to perform the scheduled Procedure Step.",
            [
               "Referencing unencapsulated HL7 documents is described further in ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.12.1.1.6"
                  }
               },
               ". See also Input Readiness State (0040,4041)."
            ],
            "Zero or more Items shall be included in this Sequence."
         ],
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "mod_tables" : [
            "table_C.30.2-1"
         ],
         "entity" : "",
         "desc" : null,
         "name" : "Input Information Sequence"
      },
      "(0018,a001)[<0>](0008,1090)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP common information",
         "req" : "3",
         "name" : "Manufacturer's Model Name",
         "desc" : "Manufacturer's model name of the equipment that contributed to the composite instance.",
         "entity" : ""
      },
      "(0074,1210)[<0>](0040,0441)[<1>](0040,a30a)" : {
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "entity" : "",
         "name" : "Numeric Value",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "req" : "1C",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2"
         ]
      },
      "(0018,a001)" : {
         "req" : "3",
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
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
         "name" : "Contributing Equipment Sequence"
      },
      "(0038,0100)" : {
         "usage" : "Describes the patient's medical state or history",
         "req" : [
            "List of Documents (e.g., SR, or CDA) that contain information considered pertinent for the patient medical condition.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.2-4"
         ],
         "module" : "Patient Medical",
         "desc" : null,
         "entity" : "",
         "name" : "Pertinent Documents Sequence"
      },
      "(0040,a370)[<0>](0040,1010)" : {
         "name" : "Names of Intended Recipients of Results",
         "desc" : null,
         "entity" : "",
         "module" : "Unified Procedure Step Relationship",
         "mod_tables" : [
            "table_C.30.4-1"
         ],
         "usage" : "References the related SOPs and IEs",
         "req" : "Names of the physicians, who are intended recipients of results."
      },
      "(0040,4034)" : {
         "desc" : null,
         "entity" : "",
         "name" : "Scheduled Human Performers Sequence",
         "req" : [
            "Human performers that are scheduled to be involved or responsible for performing the Procedure Step.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "mod_tables" : [
            "table_C.30.2-1"
         ],
         "module" : "Unified Procedure Step Scheduled Procedure Information"
      },
      "(0040,4005)" : {
         "req" : "Date and time at which the Procedure Step is scheduled to start.",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "mod_tables" : [
            "table_C.30.2-1"
         ],
         "desc" : null,
         "entity" : "",
         "name" : "Scheduled Procedure Step Start DateTime"
      },
      "(0040,4021)[<0>](0040,e020)" : {
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
         "entity" : "",
         "name" : "Type of Instances",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "req" : "1",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-3b"
         ],
         "module" : "Unified Procedure Step Scheduled Procedure Information"
      },
      "(0074,1210)[<0>](0040,a040)" : {
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
         "entity" : "",
         "name" : "Value Type",
         "req" : "1",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2"
         ],
         "module" : "Unified Procedure Step Scheduled Procedure Information"
      },
      "(0040,4021)[<0>](0008,1199)[<1>](0040,e001)" : {
         "entity" : "",
         "desc" : [
            "Instance Identifier of the encapsulated HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
            "Required if Type of Instances (0040,E020) is CDA."
         ],
         "name" : "HL7 Instance Identifier",
         "req" : "1C",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-3b"
         ]
      },
      "(0010,1100)[<0>](0040,e024)[<1>](0040,e031)" : {
         "req" : "3",
         "usage" : "References the related SOPs and IEs",
         "module" : "Unified Procedure Step Relationship",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-3b"
         ],
         "desc" : "Uniquely identifies a Community to which requests for the referenced instances can be directed.",
         "entity" : "",
         "name" : "Home Community ID"
      },
      "(0400,0500)[<0>](0400,0510)" : {
         "desc" : "Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
         "entity" : "",
         "name" : "Encrypted Content Transfer Syntax UID",
         "usage" : "Contains SOP common information",
         "req" : "1",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0074,1002)[<0>](0074,100e)" : {
         "usage" : "Describes the progress of a UPS task",
         "req" : [
            "Coded Reason(s) for Discontinuing the Procedure Step.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "module" : "Unified Procedure Step Progress Information",
         "mod_tables" : [
            "table_C.30.1-1"
         ],
         "entity" : "",
         "desc" : null,
         "name" : "Procedure Step Discontinuation Reason Code Sequence"
      },
      "(0074,1210)[<0>](0040,0441)[<1>](0040,a161)" : {
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "entity" : "",
         "name" : "Floating Point Value",
         "req" : "1C",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2"
         ],
         "module" : "Unified Procedure Step Scheduled Procedure Information"
      },
      "(0074,1216)[<0>](0040,4033)[<1>](0040,e022)[<2>](0088,0140)" : {
         "name" : "Storage Media File-Set UID",
         "desc" : "Uniquely identifies the Storage Media on which the referenced instance(s) reside.",
         "entity" : "",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-3b"
         ],
         "module" : "Unified Procedure Step Performed Procedure Information",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "req" : "1"
      },
      "(0008,0053)" : {
         "entity" : "",
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
         "req" : "1C",
         "usage" : "Contains SOP common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0040,4021)[<0>](0040,e021)" : {
         "desc" : [
            "Details for retrieving instances via the DICOM Retrieve Service.",
            "Required if DICOM Media Retrieval Sequence (0040,E022), WADO Retrieval Sequence (0040,E023), WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "This sequence shall only identify sources known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "",
         "name" : "DICOM Retrieval Sequence",
         "req" : "1C",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-3b"
         ],
         "module" : "Unified Procedure Step Scheduled Procedure Information"
      },
      "(0018,a001)[<0>](0008,1010)" : {
         "name" : "Station Name",
         "entity" : "",
         "desc" : "User defined name identifying the machine that contributed to the composite instance.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "Contains SOP common information"
      },
      "(0400,0561)[<0>](0400,0563)" : {
         "name" : "Modifying System",
         "entity" : "",
         "desc" : "Identification of the system that removed and/or replaced the attributes.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP common information",
         "req" : "1"
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0040,0441)" : {
         "req" : "Sequence that specifies modifiers for a Protocol Context Content Item. One or more Items are permitted in this Sequence.",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "mod_tables" : [
            "table_C.30.3-1"
         ],
         "module" : "Unified Procedure Step Performed Procedure Information",
         "entity" : "",
         "desc" : null,
         "name" : "Content Item Modifier Sequence"
      },
      "(fffa,fffa)[<0>](0400,0401)" : {
         "name" : "Digital Signature Purpose Code Sequence",
         "entity" : "",
         "desc" : [
            "The purpose of this Digital Signature.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "3",
         "usage" : "Contains SOP common information"
      },
      "(0074,1210)[<0>](0040,a162)" : {
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "entity" : "",
         "name" : "Rational Numerator Value",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "req" : "1C",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2"
         ]
      },
      "(0010,21a0)" : {
         "req" : [
            "Indicates whether patient smokes.",
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
                  ],
                  [
                     "UNKNOWN",
                     null
                  ]
               ]
            }
         ],
         "usage" : "Describes the patient's medical state or history",
         "mod_tables" : [
            "table_C.2-4"
         ],
         "module" : "Patient Medical",
         "desc" : null,
         "entity" : "",
         "name" : "Smoking Status"
      },
      "(0074,1210)[<0>](0008,1199)[<1>](0008,1155)" : {
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2",
            "table_10-11"
         ],
         "req" : "1",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "name" : "Referenced SOP Instance UID",
         "entity" : "",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0008,0110)" : {
         "desc" : [
            "Sequence of items that map values of Coding Scheme Designator (0008,0102) to an external coding system registration, or to a private or local coding scheme.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "",
         "name" : "Coding Scheme Identification Sequence",
         "req" : "3",
         "usage" : "Contains SOP common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0008,1199)[<2>](0062,000b)" : {
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2"
         ],
         "module" : "Unified Procedure Step Performed Procedure Information",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "req" : "1C",
         "name" : "Referenced Segment Number",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "entity" : ""
      },
      "(0074,1002)" : {
         "desc" : null,
         "entity" : "",
         "name" : "Progress Information Sequence",
         "usage" : "Describes the progress of a UPS task",
         "req" : [
            "Information about work progress for the Procedure Step.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.30.1-1"
         ],
         "module" : "Unified Procedure Step Progress Information"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "",
         "module" : "Unified Procedure Step Relationship",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "req" : "1C",
         "usage" : "References the related SOPs and IEs"
      },
      "(0008,0122)" : {
         "entity" : "",
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
         ],
         "name" : "Mapping Resource Name",
         "req" : "3",
         "usage" : "Contains SOP common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0400,0561)[<0>](0400,0550)[0](gggg,eeee)" : {
         "entity" : "",
         "desc" : "May include Sequence Attributes and their Items.",
         "name" : "Any Attribute from the main data set that was modified or removed.",
         "req" : "1",
         "usage" : "Contains SOP common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0010,0024)" : {
         "usage" : "References the related SOPs and IEs",
         "req" : "3",
         "module" : "Unified Procedure Step Relationship",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-18"
         ],
         "entity" : "",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "name" : "Issuer of Patient ID Qualifiers Sequence"
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0040,0441)[<2>](0040,a161)" : {
         "name" : "Floating Point Value",
         "entity" : "",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2"
         ],
         "module" : "Unified Procedure Step Performed Procedure Information",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "req" : "1C"
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0040,0441)[<2>](0040,a122)" : {
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "entity" : "",
         "name" : "Time",
         "req" : "1C",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "module" : "Unified Procedure Step Performed Procedure Information",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2"
         ]
      },
      "(0074,1210)[<0>](0008,1199)[<1>](0008,1150)" : {
         "entity" : "",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(0074,1210)[<0>](0040,a123)" : {
         "req" : "1C",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2"
         ],
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "entity" : "",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "name" : "Person Name"
      },
      "(0010,0035)[<0>](0010,0024)[<1>](0040,0036)" : {
         "entity" : "",
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
                     "attrs" : {
                        "xml:id" : "para_6a16f809-6605-41ac-8d02-b6104b0bc0ad"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "name" : "Assigning Facility Sequence",
         "usage" : "References the related SOPs and IEs",
         "req" : "3",
         "module" : "Unified Procedure Step Relationship",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-18"
         ]
      },
      "(0010,1100)[<0>](0040,e022)" : {
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-3b"
         ],
         "module" : "Unified Procedure Step Relationship",
         "req" : "1C",
         "usage" : "References the related SOPs and IEs",
         "name" : "DICOM Media Retrieval Sequence",
         "entity" : "",
         "desc" : [
            "Details for retrieving instances from Media.",
            "Required if DICOM Retrieval Sequence (0040,E021), WADO Retrieval Sequence (0040,E023), and WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "This sequence shall only identify media known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(fffa,fffa)[<0>](0400,0120)" : {
         "entity" : "",
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
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.12.1.1.3.1.2"
               },
               "el" : "xref"
            },
            "."
         ],
         "name" : "Signature",
         "usage" : "Contains SOP common information",
         "req" : "1",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0074,1216)[<0>](0040,4035)[<1>](0040,4009)" : {
         "desc" : null,
         "entity" : "",
         "name" : "Human Performer Code Sequence",
         "req" : [
            "Human performer that is involved or responsible for performing the Procedure Step.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "mod_tables" : [
            "table_C.30.3-1"
         ],
         "module" : "Unified Procedure Step Performed Procedure Information"
      },
      "(0008,0124)" : {
         "name" : "Mapping Resource Identification Sequence",
         "desc" : [
            "Sequence of items that map values of Mapping Resource (0008,0105) to an external, private or local Mapping Resource.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "req" : "3"
      },
      "(0074,1210)[<0>](0040,0441)[<1>](0008,1199)[<2>](0008,1160)" : {
         "entity" : "",
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
         "name" : "Referenced Frame Number",
         "req" : "1C",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2"
         ]
      },
      "(0010,1100)[<0>](0040,e024)[<1>](0040,e030)" : {
         "name" : "Repository Unique ID",
         "desc" : "Uniquely identifies a Repository from which the referenced instances can be retrieved.",
         "entity" : "",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-3b"
         ],
         "module" : "Unified Procedure Step Relationship",
         "usage" : "References the related SOPs and IEs",
         "req" : "1"
      },
      "(0040,a370)[<0>](0032,1032)" : {
         "name" : "Requesting Physician",
         "desc" : null,
         "entity" : "",
         "mod_tables" : [
            "table_C.30.4-1"
         ],
         "module" : "Unified Procedure Step Relationship",
         "req" : "Physician who requested the Service Request.",
         "usage" : "References the related SOPs and IEs"
      },
      "(0010,0035)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "module" : "Unified Procedure Step Relationship",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "References the related SOPs and IEs",
         "req" : "1C",
         "name" : "Universal Entity ID",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : ""
      },
      "(0038,0050)" : {
         "name" : "Special Needs",
         "desc" : null,
         "entity" : "",
         "mod_tables" : [
            "table_C.2-4"
         ],
         "module" : "Patient Medical",
         "req" : "Medical and social needs (e.g., wheelchair, oxygen, translator, etc.)",
         "usage" : "Describes the patient's medical state or history"
      },
      "(0040,a370)[<0>](0032,1060)" : {
         "module" : "Unified Procedure Step Relationship",
         "mod_tables" : [
            "table_C.30.4-1"
         ],
         "usage" : "References the related SOPs and IEs",
         "req" : "Institution-generated description or classification of the Requested Procedure.",
         "name" : "Requested Procedure Description",
         "entity" : "",
         "desc" : null
      },
      "(0040,4021)[<0>](0020,000e)" : {
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "req" : "1C",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-3b"
         ],
         "desc" : [
            "Unique identifier for the Series that is part of the Study identified in Study Instance UID (0020,000D), if present, and contains the referenced object instance(s).",
            "Required if Type of Instances (0040,E020) is DICOM"
         ],
         "entity" : "",
         "name" : "Series Instance UID"
      },
      "(0074,1210)[<0>](0040,a121)" : {
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2"
         ],
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "req" : "1C",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "name" : "Date",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "entity" : ""
      },
      "(0008,0110)[<0>](0008,0114)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "2C",
         "usage" : "Contains SOP common information",
         "name" : "Coding Scheme External ID",
         "desc" : "The coding scheme identifier as defined in an external registry. Required if coding scheme is registered and Coding Scheme UID (0008,010C) is not present.",
         "entity" : ""
      },
      "(0010,1100)[<0>](0040,e022)[<1>](0088,0130)" : {
         "module" : "Unified Procedure Step Relationship",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-3b"
         ],
         "req" : "2",
         "usage" : "References the related SOPs and IEs",
         "name" : "Storage Media File-Set ID",
         "entity" : "",
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the referenced instance(s) reside."
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0008,1199)[<2>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "entity" : "",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "Unified Procedure Step Performed Procedure Information",
         "req" : "1",
         "usage" : "Describes the work performed including information about status, place, time and result data"
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0040,a160)" : {
         "req" : "1C",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "module" : "Unified Procedure Step Performed Procedure Information",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2"
         ],
         "entity" : "",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "name" : "Text Value"
      },
      "(0008,1080)" : {
         "name" : "Admitting Diagnoses Description",
         "entity" : "",
         "desc" : null,
         "module" : "Unified Procedure Step Relationship",
         "mod_tables" : [
            "table_C.30.4-1"
         ],
         "req" : "Description of admitting diagnosis (diagnoses) for the patient.",
         "usage" : "References the related SOPs and IEs"
      },
      "(0400,0561)[<0>](0400,0550)" : {
         "req" : "1",
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Sequence that contains all the Attributes, with their previous values, that were modified or removed from the main data set.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "",
         "name" : "Modified Attributes Sequence"
      },
      "(0074,1224)[<0>](0008,1150)" : {
         "module" : "Unified Procedure Step Relationship",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-11"
         ],
         "req" : "1",
         "usage" : "References the related SOPs and IEs",
         "name" : "Referenced SOP Class UID",
         "entity" : "",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0040,4034)[<0>](0040,4009)" : {
         "entity" : "",
         "desc" : null,
         "name" : "Human Performer Code Sequence",
         "req" : [
            "Human performer that is involved or responsible for performing the Procedure Step.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "mod_tables" : [
            "table_C.30.2-1"
         ]
      },
      "(0074,1202)" : {
         "desc" : null,
         "entity" : "",
         "name" : "Worklist Label",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "req" : "A label identifying the worklist to which the Procedure Step instance belongs.",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "mod_tables" : [
            "table_C.30.2-1"
         ]
      },
      "(0040,4021)[<0>](0040,e023)" : {
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-3b"
         ],
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "req" : "1C",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "name" : "WADO Retrieval Sequence",
         "entity" : "",
         "desc" : [
            "Details for retrieving instances available via WADO-URI.",
            {
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_87c7f326-107c-4a18-88b9-60712a9f7041"
                     },
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
         ]
      },
      "(0010,1100)[<0>](0020,000d)" : {
         "req" : "1C",
         "usage" : "References the related SOPs and IEs",
         "module" : "Unified Procedure Step Relationship",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-3b"
         ],
         "desc" : [
            "Unique identifier for the Study.",
            "Required if Type of Instances (0040,E020) is DICOM"
         ],
         "entity" : "",
         "name" : "Study Instance UID"
      },
      "(0040,a370)[<0>](0032,1064)" : {
         "name" : "Requested Procedure Code Sequence",
         "entity" : "",
         "desc" : null,
         "module" : "Unified Procedure Step Relationship",
         "mod_tables" : [
            "table_C.30.4-1"
         ],
         "req" : [
            "Procedure Type of the Requested Procedure.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "usage" : "References the related SOPs and IEs"
      },
      "(0074,1216)[<0>](0040,4033)[<1>](0008,1199)[<2>](0062,000b)" : {
         "entity" : "",
         "desc" : "Identifies the Segment Number to which the reference applies. Required if the Referenced SOP Instance is a Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present.",
         "name" : "Referenced Segment Number",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-3b"
         ],
         "module" : "Unified Procedure Step Performed Procedure Information"
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0040,0441)[<2>](0040,08ea)" : {
         "name" : "Measurement Units Code Sequence",
         "entity" : "",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2"
         ],
         "module" : "Unified Procedure Step Performed Procedure Information",
         "req" : "1C",
         "usage" : "Describes the work performed including information about status, place, time and result data"
      },
      "(0074,1216)[<0>](0074,1212)" : {
         "name" : "Performed Processing Parameters Sequence",
         "desc" : null,
         "entity" : "",
         "mod_tables" : [
            "table_C.30.3-1"
         ],
         "module" : "Unified Procedure Step Performed Procedure Information",
         "req" : [
            "Parameters used to perform the procedure.",
            "Zero or more items shall be present in this Sequence"
         ],
         "usage" : "Describes the work performed including information about status, place, time and result data"
      },
      "(0040,a370)[<0>](0008,0051)[<1>](0040,0033)" : {
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
         ],
         "entity" : "",
         "module" : "Unified Procedure Step Relationship",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-17"
         ],
         "usage" : "References the related SOPs and IEs",
         "req" : "1C"
      },
      "(0040,a370)[<0>](0040,1008)" : {
         "name" : "Confidentiality Code",
         "desc" : null,
         "entity" : "",
         "mod_tables" : [
            "table_C.30.4-1"
         ],
         "module" : "Unified Procedure Step Relationship",
         "usage" : "References the related SOPs and IEs",
         "req" : "Confidentiality Constraints on the Requested Procedure by the party filling the order."
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0040,a043)" : {
         "name" : "Concept Name Code Sequence",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2"
         ],
         "module" : "Unified Procedure Step Performed Procedure Information",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "req" : "1"
      },
      "(0008,0110)[<0>](0008,0115)" : {
         "name" : "Coding Scheme Name",
         "entity" : "",
         "desc" : "The coding scheme full common name",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP common information",
         "req" : "3"
      },
      "(0040,a370)[<0>](0008,0051)[<1>](0040,0032)" : {
         "entity" : "",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "name" : "Universal Entity ID",
         "usage" : "References the related SOPs and IEs",
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-17"
         ],
         "module" : "Unified Procedure Step Relationship"
      },
      "(fffa,fffa)[<0>](0400,0005)" : {
         "name" : "MAC ID Number",
         "desc" : "A number used to identify which MAC Parameters Sequence item was used in the calculation of this Digital Signature.",
         "entity" : "",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "Contains SOP common information",
         "req" : "1"
      },
      "(0010,1002)[<0>](0010,0020)" : {
         "name" : "Patient ID",
         "entity" : "",
         "desc" : null,
         "mod_tables" : [
            "table_C.30.4-1"
         ],
         "module" : "Unified Procedure Step Relationship",
         "req" : "An identifier for the patient.",
         "usage" : "References the related SOPs and IEs"
      },
      "(0074,1002)[<0>](0074,1008)[<1>](0074,100a)" : {
         "entity" : "",
         "desc" : null,
         "name" : "Contact URI",
         "req" : [
            "URI to communicate with performer of the procedure in progress. Any URI (telephone number, URL, etc.) is permitted.",
            {
               "content" : [
                  "\n",
                  {
                     "content" : [
                        "The VR of this attribute has changed from UT to UR."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_8d080487-6496-4a0b-a7a1-85916a3bafde"
                     }
                  },
                  "\n"
               ],
               "el" : "note"
            }
         ],
         "usage" : "Describes the progress of a UPS task",
         "mod_tables" : [
            "table_C.30.1-1"
         ],
         "module" : "Unified Procedure Step Progress Information"
      },
      "(0010,1100)[<0>](0040,e024)" : {
         "name" : "XDS Retrieval Sequence",
         "desc" : [
            "Details for retrieving instances using WADO-WS or IHE XDS transactions.",
            {
               "el" : "note",
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
               ]
            },
            "Required if DICOM Retrieval Sequence (0040,E021), DICOM Media Retrieval Sequence (0040,E022), WADO-RS Retrieval Sequence (0040,E025) and WADO Retrieval Sequence (0040,E023) are not present. May be present otherwise.",
            "This sequence shall only identify repositories known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "",
         "module" : "Unified Procedure Step Relationship",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-3b"
         ],
         "usage" : "References the related SOPs and IEs",
         "req" : "1C"
      },
      "(0008,0117)" : {
         "usage" : "Contains SOP common information",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : [
            "The unique identifier of the Context Group.",
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
         "entity" : "",
         "name" : "Context UID"
      },
      "(0074,1002)[<0>](0074,1006)" : {
         "desc" : null,
         "entity" : "",
         "name" : "Procedure Step Progress Description",
         "usage" : "Describes the progress of a UPS task",
         "req" : [
            "A textual description of progress.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_39e2d1bd-d560-4857-a51c-75273f24cc94"
                     },
                     "content" : [
                        "For example, it might contain \"Annealing complete\"."
                     ]
                  },
                  "\n                "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.30.1-1"
         ],
         "module" : "Unified Procedure Step Progress Information"
      },
      "(fffa,fffa)[<0>](0400,0100)" : {
         "name" : "Digital Signature UID",
         "entity" : "",
         "desc" : "A UID that can be used to uniquely reference this signature.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1",
         "usage" : "Contains SOP common information"
      },
      "(0008,0005)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "req" : "1C",
         "usage" : "Contains SOP common information",
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
         "entity" : ""
      },
      "(0010,0035)[<0>](0010,0024)" : {
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "",
         "module" : "Unified Procedure Step Relationship",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-18"
         ],
         "usage" : "References the related SOPs and IEs",
         "req" : "3"
      },
      "(0074,1216)[<0>](0040,4033)[<1>](0008,1199)[<2>](0008,1160)" : {
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "req" : "1C",
         "module" : "Unified Procedure Step Performed Procedure Information",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-3b"
         ],
         "entity" : "",
         "desc" : [
            "Identifies the frame numbers within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "attrs" : {
                        "xml:id" : "para_e2359edc-51fe-4f62-abc5-a7447e377de7"
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
         "name" : "Referenced Frame Number"
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0040,a121)" : {
         "name" : "Date",
         "entity" : "",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2"
         ],
         "module" : "Unified Procedure Step Performed Procedure Information",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "req" : "1C"
      },
      "(0074,1216)[<0>](0040,4019)" : {
         "desc" : null,
         "entity" : "",
         "name" : "Performed Workitem Code Sequence",
         "req" : [
            "A sequence that conveys the type of procedure performed.",
            "Zero or more items shall be present in this Sequence."
         ],
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "module" : "Unified Procedure Step Performed Procedure Information",
         "mod_tables" : [
            "table_C.30.3-1"
         ]
      },
      "(0074,1210)[<0>](0040,a161)" : {
         "req" : "1C",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2"
         ],
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "entity" : "",
         "name" : "Floating Point Value"
      },
      "(0074,1210)[<0>](0040,0441)[<1>](0040,a123)" : {
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "entity" : "",
         "name" : "Person Name",
         "req" : "1C",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2"
         ],
         "module" : "Unified Procedure Step Scheduled Procedure Information"
      },
      "(0074,1216)[<0>](0040,4035)" : {
         "req" : [
            "Human performers that are/were actually involved or responsible for performing the Procedure Step.",
            "Zero or more Items shall be included in this Sequence.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "attrs" : {
                        "xml:id" : "para_ea0722aa-130c-498a-b7c2-adbc19ff5a83"
                     },
                     "el" : "para",
                     "content" : [
                        "Initially this list will be empty. Items may be added to the list at or after the status transition of the Procedure Step State (0074,1000) to \"IN PROGRESS\""
                     ]
                  },
                  "\n                "
               ]
            }
         ],
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "module" : "Unified Procedure Step Performed Procedure Information",
         "mod_tables" : [
            "table_C.30.3-1"
         ],
         "entity" : "",
         "desc" : null,
         "name" : "Actual Human Performers Sequence"
      },
      "(0100,0426)" : {
         "usage" : "Contains SOP common information",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "",
         "desc" : "The certification number issued to the Application Entity that set the SOP Instance Status (0100,0410) to AO.",
         "name" : "Authorization Equipment Certification Number"
      },
      "(0010,0035)[<0>](0010,0024)[<1>](0040,0035)" : {
         "module" : "Unified Procedure Step Relationship",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-18"
         ],
         "usage" : "References the related SOPs and IEs",
         "req" : "3",
         "name" : "Identifier Type Code",
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
         "entity" : ""
      },
      "(0010,0035)" : {
         "usage" : "References the related SOPs and IEs",
         "req" : [
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
         "module" : "Unified Procedure Step Relationship",
         "mod_tables" : [
            "table_C.30.4-1"
         ],
         "entity" : "",
         "desc" : null,
         "name" : "Patient's Alternative Calendar"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0040,e001)" : {
         "module" : "Unified Procedure Step Relationship",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-3b"
         ],
         "req" : "1C",
         "usage" : "References the related SOPs and IEs",
         "name" : "HL7 Instance Identifier",
         "desc" : [
            "Instance Identifier of the encapsulated HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
            "Required if Type of Instances (0040,E020) is CDA."
         ],
         "entity" : ""
      },
      "(0010,0024)[<0>](0040,0032)" : {
         "module" : "Unified Procedure Step Relationship",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-18"
         ],
         "req" : "3",
         "usage" : "References the related SOPs and IEs",
         "name" : "Universal Entity ID",
         "entity" : "",
         "desc" : [
            "Universal or unique identifier for the Patient ID Assigning Authority. The authority identified by this attribute shall be the same as that of Issuer of Patient ID (0010,0021), if present.",
            {
               "el" : "note",
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
               ]
            }
         ]
      },
      "(0010,0035)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "entity" : "",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "module" : "Unified Procedure Step Relationship",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "req" : "1C",
         "usage" : "References the related SOPs and IEs"
      },
      "(0074,1216)[<0>](0040,4050)" : {
         "mod_tables" : [
            "table_C.30.3-1"
         ],
         "module" : "Unified Procedure Step Performed Procedure Information",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "req" : "Date and Time at which the Procedure Step started.",
         "name" : "Performed Procedure Step Start DateTime",
         "desc" : null,
         "entity" : ""
      },
      "(0040,4070)[<0>](0008,1150)" : {
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-3c"
         ],
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "req" : "1C",
         "name" : "Referenced SOP Class UID",
         "desc" : [
            "Uniquely identifies the referenced SOP Class.",
            "Required if the storage request only applies to a specific SOP Class."
         ],
         "entity" : ""
      },
      "(0074,1224)[<0>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "usage" : "References the related SOPs and IEs",
         "module" : "Unified Procedure Step Relationship",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-11"
         ]
      },
      "(0400,0561)[<0>](0400,0565)" : {
         "req" : "1",
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
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
         ],
         "name" : "Reason for the Attribute Modification"
      },
      "(0040,4021)[<0>](0008,1199)" : {
         "req" : "1",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-3b"
         ],
         "entity" : "",
         "desc" : [
            "References to object instances.",
            "One or more Items shall be included in this Sequence"
         ],
         "name" : "Referenced SOP Sequence"
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0040,0441)[<2>](0040,a040)" : {
         "name" : "Value Type",
         "entity" : "",
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
         "module" : "Unified Procedure Step Performed Procedure Information",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2"
         ],
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "req" : "1"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0032)" : {
         "req" : "1C",
         "usage" : "References the related SOPs and IEs",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "module" : "Unified Procedure Step Relationship",
         "entity" : "",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "name" : "Universal Entity ID"
      },
      "(0010,2000)" : {
         "name" : "Medical Alerts",
         "entity" : "",
         "desc" : null,
         "module" : "Patient Medical",
         "mod_tables" : [
            "table_C.2-4"
         ],
         "req" : "Conditions to which medical staff should be alerted (e.g., contagious condition, drug allergies, etc.)",
         "usage" : "Describes the patient's medical state or history"
      },
      "(0040,a370)[<0>](0040,0026)[<1>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "entity" : "",
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
            "table_C.30.4-1",
            "table_10-17"
         ],
         "module" : "Unified Procedure Step Relationship",
         "usage" : "References the related SOPs and IEs",
         "req" : "1C"
      },
      "(0074,1210)[<0>](0040,0441)[<1>](0040,a120)" : {
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "entity" : "",
         "name" : "DateTime",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2"
         ],
         "module" : "Unified Procedure Step Scheduled Procedure Information"
      },
      "(0018,a001)[<0>](0018,1201)" : {
         "entity" : "",
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
         "name" : "Time of Last Calibration",
         "req" : "3",
         "usage" : "Contains SOP common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0074,1216)[<0>](0040,4033)[<1>](0040,e021)[<2>](0008,0054)" : {
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "req" : "1",
         "module" : "Unified Procedure Step Performed Procedure Information",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-3b"
         ],
         "entity" : "",
         "desc" : "Title of a DICOM Application Entity where the referenced instance(s) may be retrieved on the network.",
         "name" : "Retrieve AE Title"
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0040,a162)" : {
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "req" : "1C",
         "module" : "Unified Procedure Step Performed Procedure Information",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2"
         ],
         "entity" : "",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "name" : "Rational Numerator Value"
      },
      "(0074,1210)[<0>](0040,a163)" : {
         "req" : "1C",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2"
         ],
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "entity" : "",
         "name" : "Rational Denominator Value"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0062,000b)" : {
         "module" : "Unified Procedure Step Relationship",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-3b"
         ],
         "usage" : "References the related SOPs and IEs",
         "req" : "1C",
         "name" : "Referenced Segment Number",
         "entity" : "",
         "desc" : "Identifies the Segment Number to which the reference applies. Required if the Referenced SOP Instance is a Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
      },
      "(0038,0100)[<0>](0042,0010)" : {
         "name" : "Document Title",
         "desc" : null,
         "entity" : "",
         "module" : "Patient Medical",
         "mod_tables" : [
            "table_C.2-4"
         ],
         "usage" : "Describes the patient's medical state or history",
         "req" : "Title of the referenced document."
      },
      "(0074,1216)[<0>](0040,4028)" : {
         "module" : "Unified Procedure Step Performed Procedure Information",
         "mod_tables" : [
            "table_C.30.3-1"
         ],
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "req" : [
            "Names within the enterprise of the equipment that performed the Procedure Step. This name may be the same as the AE Title, but does not have to be.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "name" : "Performed Station Name Code Sequence",
         "entity" : "",
         "desc" : null
      },
      "(0040,4021)[<0>](0008,1199)[<1>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-3b"
         ],
         "module" : "Unified Procedure Step Scheduled Procedure Information"
      },
      "(0010,1100)[<0>](0040,e025)[<1>](0008,1190)" : {
         "name" : "Retrieve URL",
         "desc" : "URL specifying the location of the referenced instance(s).",
         "entity" : "",
         "module" : "Unified Procedure Step Relationship",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-3b"
         ],
         "usage" : "References the related SOPs and IEs",
         "req" : "1"
      },
      "(0008,0110)[<0>](0008,0112)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "req" : "1C",
         "name" : "Coding Scheme Registry",
         "entity" : "",
         "desc" : [
            "The name of the external registry where further definition of the identified coding scheme may be obtained. Required if coding scheme is registered.",
            {
               "list" : [
                  [
                     "HL7",
                     null
                  ]
               ],
               "type" : "variablelist",
               "title" : "Defined Terms:"
            }
         ]
      },
      "(4ffe,0001)[<0>](0400,0010)" : {
         "entity" : "",
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
         "name" : "MAC Calculation Transfer Syntax UID",
         "req" : "1",
         "usage" : "Contains SOP common information",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common"
      },
      "(0010,1100)[<0>](0040,e023)" : {
         "req" : "1C",
         "usage" : "References the related SOPs and IEs",
         "module" : "Unified Procedure Step Relationship",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-3b"
         ],
         "entity" : "",
         "desc" : [
            "Details for retrieving instances available via WADO-URI.",
            {
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "This sequence addresses use of the URI-based Web Access to DICOM Objects. Retrieval via the Web Services-based WADO-WS is addressed in the XDS Retrieval Sequence (0040,E024)."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_87c7f326-107c-4a18-88b9-60712a9f7041"
                     }
                  },
                  "\n              "
               ],
               "el" : "note"
            },
            "Required if DICOM Retrieval Sequence (0040,E021), DICOM Media Retrieval Sequence (0040,E022), WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "WADO Retrieval Sequence"
      },
      "(0074,1210)[<0>](0040,a043)" : {
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "req" : "1",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2"
         ],
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "",
         "name" : "Concept Name Code Sequence"
      },
      "(0038,0100)[<0>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "",
         "name" : "Referenced SOP Instance UID",
         "usage" : "Describes the patient's medical state or history",
         "req" : "1",
         "module" : "Patient Medical",
         "mod_tables" : [
            "table_C.2-4",
            "table_10-11"
         ]
      },
      "(0074,1224)" : {
         "module" : "Unified Procedure Step Relationship",
         "mod_tables" : [
            "table_C.30.4-1"
         ],
         "usage" : "References the related SOPs and IEs",
         "req" : [
            "Canceled procedure step(s) that are replaced by this procedure step.",
            "Zero or more Items shall be included in the sequence."
         ],
         "name" : "Replaced Procedure Step Sequence",
         "desc" : null,
         "entity" : ""
      },
      "(0040,4010)" : {
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "mod_tables" : [
            "table_C.30.2-1"
         ],
         "req" : [
            "Date and time when the Scheduled Procedure Information was last modified or first created (whichever is most recent).",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_469fd37e-734d-468b-ac28-1ca5a906f7b1"
                     },
                     "content" : [
                        "This attribute should be automatically updated by the worklist management system whenever any modification is made to ",
                        {
                           "attrs" : {
                              "linkend" : "sect_C.30.2",
                              "xrefstyle" : "select: title"
                           },
                           "el" : "xref"
                        },
                        " Attributes of a Unified Procedure Step."
                     ]
                  },
                  "\n                "
               ]
            }
         ],
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "name" : "Scheduled Procedure Step Modification Date and Time",
         "entity" : "",
         "desc" : null
      },
      "(0010,0021)" : {
         "module" : "Unified Procedure Step Relationship",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-18"
         ],
         "usage" : "References the related SOPs and IEs",
         "req" : "3",
         "name" : "Issuer of Patient ID",
         "entity" : "",
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
         ]
      },
      "(0010,21b0)" : {
         "req" : "Additional information about the patient's medical history",
         "usage" : "Describes the patient's medical state or history",
         "module" : "Patient Medical",
         "mod_tables" : [
            "table_C.2-4"
         ],
         "desc" : null,
         "entity" : "",
         "name" : "Additional Patient History"
      },
      "(0038,0010)" : {
         "desc" : null,
         "entity" : "",
         "name" : "Admission ID",
         "usage" : "References the related SOPs and IEs",
         "req" : "Identification number of the visit as assigned by the healthcare provider",
         "module" : "Unified Procedure Step Relationship",
         "mod_tables" : [
            "table_C.30.4-1"
         ]
      },
      "(0074,1216)" : {
         "name" : "Unified Procedure Step Performed Procedure Sequence",
         "desc" : null,
         "entity" : "",
         "module" : "Unified Procedure Step Performed Procedure Information",
         "mod_tables" : [
            "table_C.30.3-1"
         ],
         "req" : [
            "Details of the Procedure Step as performed.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "usage" : "Describes the work performed including information about status, place, time and result data"
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0040,a122)" : {
         "entity" : "",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "name" : "Time",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "req" : "1C",
         "module" : "Unified Procedure Step Performed Procedure Information",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2"
         ]
      },
      "(0038,0100)[<0>](0008,1150)" : {
         "usage" : "Describes the patient's medical state or history",
         "req" : "1",
         "mod_tables" : [
            "table_C.2-4",
            "table_10-11"
         ],
         "module" : "Patient Medical",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "",
         "name" : "Referenced SOP Class UID"
      },
      "(0040,4034)[<0>](0040,4036)" : {
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "req" : "Organization to which the human performer is accountable for the activities in the Procedure Step.",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "mod_tables" : [
            "table_C.30.2-1"
         ],
         "entity" : "",
         "desc" : null,
         "name" : "Human Performer's Organization"
      },
      "(0074,1216)[<0>](0040,4033)[<1>](0040,e024)[<2>](0040,e031)" : {
         "desc" : "Uniquely identifies a Community to which requests for the referenced instances can be directed.",
         "entity" : "",
         "name" : "Home Community ID",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "req" : "3",
         "module" : "Unified Procedure Step Performed Procedure Information",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-3b"
         ]
      },
      "(0040,a370)[<0>](0040,0026)" : {
         "desc" : null,
         "entity" : "",
         "name" : "Order Placer Identifier Sequence",
         "req" : [
            "Identifier of the Assigning Authority that issued the Placer Order Number.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "References the related SOPs and IEs",
         "module" : "Unified Procedure Step Relationship",
         "mod_tables" : [
            "table_C.30.4-1"
         ]
      },
      "(0074,1216)[<0>](0040,4033)[<1>](0040,e025)" : {
         "desc" : [
            "Details for retrieving instances via WADO-RS.",
            {
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "Retrieval via WADO-URI is addressed in the WADO Retrieval Sequence (0040,E023). Retrieval via  WADO-WS is addressed in the XDS Retrieval Sequence (0040,E024)."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_6afb22cc-92e8-4ec8-9a23-820f4c4a769b"
                     }
                  },
                  "\n              "
               ],
               "el" : "note"
            },
            "Required if DICOM Retrieval Sequence (0040,E021), DICOM Media Retrieval Sequence (0040,E022), WADO Retrieval Sequence (0040,E023) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "",
         "name" : "WADO-RS Retrieval Sequence",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "req" : "1C",
         "module" : "Unified Procedure Step Performed Procedure Information",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-3b"
         ]
      },
      "(0018,a001)[<0>](0018,a002)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP common information",
         "req" : "3",
         "name" : "Contribution DateTime",
         "entity" : "",
         "desc" : "The Date & Time when the equipment contributed to the composite instance."
      },
      "(0018,a001)[<0>](0018,1050)" : {
         "name" : "Spatial Resolution",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "req" : "3"
      },
      "(0040,a390)[<0>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "req" : "1",
         "usage" : "Contains SOP common information"
      },
      "(0100,0410)" : {
         "req" : "3",
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
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
         "name" : "SOP Instance Status"
      },
      "(0040,4021)[<0>](0040,e021)[<1>](0008,0054)" : {
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-3b"
         ],
         "req" : "1",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "name" : "Retrieve AE Title",
         "entity" : "",
         "desc" : "Title of a DICOM Application Entity where the referenced instance(s) may be retrieved on the network."
      },
      "(0074,1216)[<0>](0040,4033)[<1>](0008,1199)[<2>](0040,e001)" : {
         "req" : "1C",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "module" : "Unified Procedure Step Performed Procedure Information",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-3b"
         ],
         "entity" : "",
         "desc" : [
            "Instance Identifier of the encapsulated HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
            "Required if Type of Instances (0040,E020) is CDA."
         ],
         "name" : "HL7 Instance Identifier"
      },
      "(0040,4070)[<0>](0040,4074)[<1>](0040,e031)" : {
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "req" : "3",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-3c"
         ],
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "entity" : "",
         "desc" : "Uniquely identifies a Community to which requests for the referenced instances can be directed.",
         "name" : "Home Community ID"
      },
      "(0074,1002)[<0>](0074,1008)" : {
         "req" : [
            "Contact Information to communicate with performers of the Procedure Step.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "usage" : "Describes the progress of a UPS task",
         "mod_tables" : [
            "table_C.30.1-1"
         ],
         "module" : "Unified Procedure Step Progress Information",
         "entity" : "",
         "desc" : null,
         "name" : "Procedure Step Communications URI Sequence"
      },
      "(0008,0118)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "Contains SOP common information",
         "name" : "Mapping Resource UID",
         "entity" : "",
         "desc" : "The unique identifier of the Mapping Resource"
      },
      "(0038,0014)[<0>](0040,0033)" : {
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
         "entity" : "",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-17"
         ],
         "module" : "Unified Procedure Step Relationship",
         "usage" : "References the related SOPs and IEs",
         "req" : "1C"
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0040,a168)" : {
         "req" : "1C",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "module" : "Unified Procedure Step Performed Procedure Information",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2"
         ],
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "entity" : "",
         "name" : "Concept Code Sequence"
      },
      "(0010,21d0)" : {
         "mod_tables" : [
            "table_C.2-4"
         ],
         "module" : "Patient Medical",
         "usage" : "Describes the patient's medical state or history",
         "req" : "Date of onset of last menstrual period",
         "name" : "Last Menstrual Date",
         "desc" : null,
         "entity" : ""
      },
      "(0074,1210)[<0>](0040,0441)[<1>](0040,a124)" : {
         "name" : "UID",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "entity" : "",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2"
         ],
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "req" : "1C"
      },
      "(0040,a370)[<0>](0040,2005)" : {
         "req" : "Time at which the Service Request was issued by the requester.",
         "usage" : "References the related SOPs and IEs",
         "module" : "Unified Procedure Step Relationship",
         "mod_tables" : [
            "table_C.30.4-1"
         ],
         "desc" : null,
         "entity" : "",
         "name" : "Issue Time of Imaging Service Request"
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0040,a163)" : {
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2"
         ],
         "module" : "Unified Procedure Step Performed Procedure Information",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "entity" : "",
         "name" : "Rational Denominator Value"
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0040,a120)" : {
         "req" : "1C",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2"
         ],
         "module" : "Unified Procedure Step Performed Procedure Information",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "entity" : "",
         "name" : "DateTime"
      },
      "(0074,1210)[<0>](0040,0441)[<1>](0040,a122)" : {
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2"
         ],
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "entity" : "",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "name" : "Time"
      },
      "(0040,4034)[<0>](0040,4037)" : {
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "req" : "Name of the human performer.",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "mod_tables" : [
            "table_C.30.2-1"
         ],
         "desc" : null,
         "entity" : "",
         "name" : "Human Performer's Name"
      },
      "(0040,4021)[<0>](0008,1199)[<1>](0062,000b)" : {
         "name" : "Referenced Segment Number",
         "entity" : "",
         "desc" : "Identifies the Segment Number to which the reference applies. Required if the Referenced SOP Instance is a Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present.",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-3b"
         ],
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "req" : "1C"
      },
      "(0018,a001)[<0>](0008,0081)" : {
         "name" : "Institution Address",
         "desc" : "Address of the institution where the equipment that contributed to the composite instance is located.",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "req" : "3"
      },
      "(0018,a001)[<0>](0008,1040)" : {
         "req" : "3",
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Department in the institution where the equipment that contributed to the composite instance is located.",
         "entity" : "",
         "name" : "Institutional Department Name"
      },
      "(fffa,fffa)[<0>](0400,0115)" : {
         "name" : "Certificate of Signer",
         "entity" : "",
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
               "el" : "note",
               "content" : [
                  "\n                      ",
                  {
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
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_cbf16d70-7dfc-44e9-85f6-9cf9aea9f0eb"
                                 }
                              },
                              "\n                        "
                           ]
                        },
                        "\n                        ",
                        {
                           "el" : "listitem",
                           "content" : [
                              "\n                          ",
                              {
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_2d3ce9c9-555a-4be1-9e6d-e07eb84c4852"
                                 },
                                 "content" : [
                                    "When symmetric encryption is used, the certificate merely identifies which key was used by which entity, but not the actual key itself. Some other means (e.g., a trusted third party) must be used to obtain the key."
                                 ]
                              },
                              "\n                        "
                           ]
                        },
                        "\n                      "
                     ],
                     "el" : "orderedlist",
                     "attrs" : {
                        "numeration" : "arabic"
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
         "module" : "SOP Common",
         "req" : "1",
         "usage" : "Contains SOP common information"
      },
      "(0040,4021)[<0>](0040,e024)[<1>](0040,e031)" : {
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-3b"
         ],
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "req" : "3",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "name" : "Home Community ID",
         "entity" : "",
         "desc" : "Uniquely identifies a Community to which requests for the referenced instances can be directed."
      },
      "(0040,a370)[<0>](0020,000d)" : {
         "usage" : "References the related SOPs and IEs",
         "req" : "Unique identifier for the Study.",
         "module" : "Unified Procedure Step Relationship",
         "mod_tables" : [
            "table_C.30.4-1"
         ],
         "entity" : "",
         "desc" : null,
         "name" : "Study Instance UID"
      },
      "(0010,0034)" : {
         "name" : "Patient's Death Date in Alternative Calendar",
         "desc" : null,
         "entity" : "",
         "mod_tables" : [
            "table_C.30.4-1"
         ],
         "module" : "Unified Procedure Step Relationship",
         "usage" : "References the related SOPs and IEs",
         "req" : [
            "Date of death of the named patient in the Alternative Calendar (0010,0035).",
            {
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_df170e84-ce15-4659-8075-492d2437dca2"
                     },
                     "content" : [
                        "No format is specified for alternative calendar dates so none should be assumed."
                     ]
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ]
      },
      "(fffa,fffa)" : {
         "req" : "3",
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : [
            "Sequence holding Digital Signatures.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "",
         "name" : "Digital Signatures Sequence"
      },
      "(0400,0561)[<0>](0400,0562)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP common information",
         "req" : "1",
         "name" : "Attribute Modification DateTime",
         "desc" : "Date and time the attributes were removed and/or replaced.",
         "entity" : ""
      },
      "(0038,0014)" : {
         "desc" : null,
         "entity" : "",
         "name" : "Issuer of Admission ID Sequence",
         "usage" : "References the related SOPs and IEs",
         "req" : [
            "Identifier of the Assigning Authority that issued the Admission ID.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.30.4-1"
         ],
         "module" : "Unified Procedure Step Relationship"
      },
      "(0020,000d)" : {
         "req" : "Unique Study identification that shall be used for the created Composite SOP Instances resulting from this Unified Procedure Step.",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "mod_tables" : [
            "table_C.30.2-1"
         ],
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "desc" : null,
         "entity" : "",
         "name" : "Study Instance UID"
      },
      "(0040,4026)" : {
         "name" : "Scheduled Station Class Code Sequence",
         "entity" : "",
         "desc" : null,
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "mod_tables" : [
            "table_C.30.2-1"
         ],
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "req" : [
            "Classes of the equipment for which the Procedure Step is scheduled.",
            "Zero or more Items shall be included in this Sequence."
         ]
      },
      "(0008,0110)[<0>](0008,0102)" : {
         "name" : "Coding Scheme Designator",
         "entity" : "",
         "desc" : "The value of a Coding Scheme Designator, used in this SOP Instance, which is being mapped.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "usage" : "Contains SOP common information"
      },
      "(0008,0110)[<0>](0008,0103)" : {
         "usage" : "Contains SOP common information",
         "req" : "3",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "desc" : "The coding scheme version associated with the Coding Scheme Designator (0008,0102).",
         "name" : "Coding Scheme Version"
      },
      "(0010,0035)[<0>](0010,0024)[<1>](0040,0032)" : {
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
         "entity" : "",
         "name" : "Universal Entity ID",
         "req" : "3",
         "usage" : "References the related SOPs and IEs",
         "module" : "Unified Procedure Step Relationship",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-18"
         ]
      },
      "(fffa,fffa)[<0>](0400,0105)" : {
         "name" : "Digital Signature DateTime",
         "desc" : [
            "The date and time the Digital Signature was created. The time shall include an offset (i.e., time zone indication) from Coordinated Universal Time.",
            {
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
               ],
               "el" : "note"
            }
         ],
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "req" : "1",
         "usage" : "Contains SOP common information"
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0306)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "usage" : "Contains SOP common information",
         "name" : "Identifying Private Elements",
         "desc" : [
            "List of Private Data Elements in block that may contain identifying\n                  information (are unsafe from identity leakage)..",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once."
         ],
         "entity" : ""
      },
      "(0010,1100)" : {
         "mod_tables" : [
            "table_C.30.4-1"
         ],
         "module" : "Unified Procedure Step Relationship",
         "usage" : "References the related SOPs and IEs",
         "req" : [
            "A photo to confirm the identity of a patient.",
            "Only a single Item is permitted in this Sequence.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: labelnumber",
                     "linkend" : "sect_C.2.2.1.1"
                  }
               },
               "."
            ]
         ],
         "name" : "Referenced Patient Photo Sequence",
         "entity" : "",
         "desc" : null
      },
      "(0074,1210)[<0>](0040,0441)[<1>](0040,a040)" : {
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
         "entity" : "",
         "name" : "Value Type",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "req" : "1",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2"
         ],
         "module" : "Unified Procedure Step Scheduled Procedure Information"
      },
      "(0074,1216)[<0>](0040,4033)[<1>](0040,e020)" : {
         "module" : "Unified Procedure Step Performed Procedure Information",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-3b"
         ],
         "req" : "1",
         "usage" : "Describes the work performed including information about status, place, time and result data",
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
         "entity" : ""
      },
      "(0018,a001)[<0>](0008,1072)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "Contains SOP common information",
         "name" : "Operator Identification Sequence",
         "entity" : "",
         "desc" : [
            "Identification of the operator(s) of the contributing equipment.",
            "One or more Items are permitted in this Sequence.",
            "The number and order of Items shall correspond to the number and order of values of Operators' Name (0008,1070), if present."
         ]
      },
      "(0040,4021)[<0>](0008,1199)[<1>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "entity" : "",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-3b"
         ],
         "req" : "1",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data"
      },
      "(0040,a370)[<0>](0040,0027)[<1>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "entity" : "",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-17"
         ],
         "module" : "Unified Procedure Step Relationship",
         "req" : "1C",
         "usage" : "References the related SOPs and IEs"
      },
      "(0074,1216)[<0>](0040,4033)" : {
         "desc" : null,
         "entity" : "",
         "name" : "Output Information Sequence",
         "req" : [
            "References to information created as part of the Procedure Step.",
            [
               "Referencing unencapsulated HL7 documents is described further in ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.12.1.1.6",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ],
            "Zero or more Items shall be included in this Sequence."
         ],
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "mod_tables" : [
            "table_C.30.3-1"
         ],
         "module" : "Unified Procedure Step Performed Procedure Information"
      },
      "(0008,0110)[<0>](0008,010c)" : {
         "name" : "Coding Scheme UID",
         "desc" : "The coding scheme UID identifier. Required if coding scheme is identified by an ISO 8824 object identifier compatible with the UI VR.",
         "entity" : "",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP common information",
         "req" : "1C"
      },
      "(0074,1216)[<0>](0040,4051)" : {
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "req" : "Date and Time at which the Procedure Step ended.",
         "mod_tables" : [
            "table_C.30.3-1"
         ],
         "module" : "Unified Procedure Step Performed Procedure Information",
         "desc" : null,
         "entity" : "",
         "name" : "Performed Procedure Step End DateTime"
      },
      "(0040,a370)[<0>](0040,0026)[<1>](0040,0032)" : {
         "usage" : "References the related SOPs and IEs",
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-17"
         ],
         "module" : "Unified Procedure Step Relationship",
         "entity" : "",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "name" : "Universal Entity ID"
      },
      "(0008,001a)" : {
         "name" : "Related General SOP Class UID",
         "entity" : "",
         "desc" : [
            "Uniquely identifies a Related General SOP Class for the SOP Class of this Instance. See ",
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
         "req" : "3",
         "usage" : "Contains SOP common information"
      },
      "(0038,0502)[<0>](0012,0030)" : {
         "req" : "The identifier, issued by the Clinical Trial Sponsor, of the site responsible for submitting clinical trial or research data.",
         "usage" : "Describes the patient's medical state or history",
         "module" : "Patient Medical",
         "mod_tables" : [
            "table_C.2-4"
         ],
         "entity" : "",
         "desc" : null,
         "name" : "Clinical Trial Site ID"
      },
      "(0010,0024)[<0>](0040,0039)" : {
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
         "entity" : "",
         "name" : "Assigning Jurisdiction Code Sequence",
         "usage" : "References the related SOPs and IEs",
         "req" : "3",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-18"
         ],
         "module" : "Unified Procedure Step Relationship"
      },
      "(0008,0300)[<0>](0008,0305)" : {
         "name" : "Deidentification Action Sequence",
         "entity" : "",
         "desc" : "Actions to be performed on element within the block that are not safe from identify leakage.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "Contains SOP common information"
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0040,a30a)" : {
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2"
         ],
         "module" : "Unified Procedure Step Performed Procedure Information",
         "entity" : "",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "name" : "Numeric Value"
      },
      "(0074,1002)[<0>](0074,1004)" : {
         "mod_tables" : [
            "table_C.30.1-1"
         ],
         "module" : "Unified Procedure Step Progress Information",
         "usage" : "Describes the progress of a UPS task",
         "req" : [
            "A numerical indicator of progress expressed as percentage complete.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "attrs" : {
                        "xml:id" : "para_8ac83bba-c50c-42be-afd6-0d6b60f73662"
                     },
                     "el" : "para",
                     "content" : [
                        "This is primarily for status rendering (e.g., progress bar). The percentage is not necessarily an accurate indication of total time."
                     ]
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "name" : "Procedure Step Progress",
         "entity" : "",
         "desc" : null
      },
      "(0038,0014)[<0>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "",
         "module" : "Unified Procedure Step Relationship",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-17"
         ],
         "req" : "1C",
         "usage" : "References the related SOPs and IEs"
      },
      "(0010,1100)[<0>](0040,e021)" : {
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-3b"
         ],
         "module" : "Unified Procedure Step Relationship",
         "req" : "1C",
         "usage" : "References the related SOPs and IEs",
         "name" : "DICOM Retrieval Sequence",
         "entity" : "",
         "desc" : [
            "Details for retrieving instances via the DICOM Retrieve Service.",
            "Required if DICOM Media Retrieval Sequence (0040,E022), WADO Retrieval Sequence (0040,E023), WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "This sequence shall only identify sources known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0074,1210)[<0>](0040,0441)[<1>](0008,1199)[<2>](0062,000b)" : {
         "name" : "Referenced Segment Number",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "entity" : "",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2"
         ],
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "req" : "1C",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data"
      },
      "(0040,a370)[<0>](0040,1400)" : {
         "name" : "Requested Procedure Comments",
         "desc" : null,
         "entity" : "",
         "mod_tables" : [
            "table_C.30.4-1"
         ],
         "module" : "Unified Procedure Step Relationship",
         "usage" : "References the related SOPs and IEs",
         "req" : "User-defined comments on the Requested Procedure."
      },
      "(0040,a370)" : {
         "entity" : "",
         "desc" : null,
         "name" : "Referenced Request Sequence",
         "req" : [
            "Requested Procedures to which the Procedure Step contributes.",
            "Zero or more Items shall be included in the sequence."
         ],
         "usage" : "References the related SOPs and IEs",
         "mod_tables" : [
            "table_C.30.4-1"
         ],
         "module" : "Unified Procedure Step Relationship"
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1160)" : {
         "req" : "1C",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2"
         ],
         "module" : "Unified Procedure Step Performed Procedure Information",
         "entity" : "",
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
         "name" : "Referenced Frame Number"
      },
      "(0020,9172)" : {
         "req" : "1C",
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "The set of images or other composite SOP Instances that were converted to this instance.",
            "If this instance was converted from a specific frame in the source instance, the reference shall include the Frame Number.",
            "One or more Items shall be included in this Sequence.",
            "Required if this instance was created by conversion, and Conversion Source Attributes Sequence (0020,9172) is not present in an Item of Shared Functional Groups Sequence (5200,9229) or Per-Frame Functional Groups Sequence (5200,9230)."
         ],
         "entity" : "",
         "name" : "Conversion Source Attributes Sequence"
      },
      "(0074,1216)[<0>](0040,4030)" : {
         "name" : "Performed Station Geographic Location Code Sequence",
         "desc" : null,
         "entity" : "",
         "mod_tables" : [
            "table_C.30.3-1"
         ],
         "module" : "Unified Procedure Step Performed Procedure Information",
         "req" : [
            "Geographic locations of the equipment that created Procedure Step.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "usage" : "Describes the work performed including information about status, place, time and result data"
      },
      "(0010,2110)" : {
         "usage" : "Describes the patient's medical state or history",
         "req" : "Description of prior reaction to contrast agents, or other patient allergies or adverse reactions.",
         "module" : "Patient Medical",
         "mod_tables" : [
            "table_C.2-4"
         ],
         "entity" : "",
         "desc" : null,
         "name" : "Allergies"
      },
      "(0074,1210)[<0>](0040,08ea)" : {
         "name" : "Measurement Units Code Sequence",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "entity" : "",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2"
         ],
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "req" : "1C"
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
         "entity" : "",
         "name" : "Context Group Version",
         "req" : "1",
         "usage" : "Contains SOP common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0040,a370)[<0>](0040,2016)" : {
         "entity" : "",
         "desc" : null,
         "name" : "Placer Order Number / Imaging Service Request",
         "usage" : "References the related SOPs and IEs",
         "req" : "The order number assigned to the Service Request by the party placing the order.",
         "mod_tables" : [
            "table_C.30.4-1"
         ],
         "module" : "Unified Procedure Step Relationship"
      },
      "(0074,1216)[<0>](0040,4033)[<1>](0020,000d)" : {
         "desc" : [
            "Unique identifier for the Study.",
            "Required if Type of Instances (0040,E020) is DICOM"
         ],
         "entity" : "",
         "name" : "Study Instance UID",
         "req" : "1C",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-3b"
         ],
         "module" : "Unified Procedure Step Performed Procedure Information"
      },
      "(0010,2203)" : {
         "req" : [
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
            }
         ],
         "usage" : "Describes the patient's medical state or history",
         "mod_tables" : [
            "table_C.2-4"
         ],
         "module" : "Patient Medical",
         "desc" : null,
         "entity" : "",
         "name" : "Patient's Sex Neutered"
      },
      "(0020,9172)[<0>](0008,1150)" : {
         "usage" : "Contains SOP common information",
         "req" : "1",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "entity" : "",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID"
      },
      "(0018,a001)[<0>](0018,1000)" : {
         "desc" : "Manufacturer's serial number of the equipment that contributed to the composite instance.",
         "entity" : "",
         "name" : "Device Serial Number",
         "req" : "3",
         "usage" : "Contains SOP common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0074,1216)[<0>](0040,4033)[<1>](0008,1199)" : {
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-3b"
         ],
         "module" : "Unified Procedure Step Performed Procedure Information",
         "req" : "1",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "name" : "Referenced SOP Sequence",
         "entity" : "",
         "desc" : [
            "References to object instances.",
            "One or more Items shall be included in this Sequence"
         ]
      },
      "(0010,1100)[<0>](0040,e025)" : {
         "name" : "WADO-RS Retrieval Sequence",
         "entity" : "",
         "desc" : [
            "Details for retrieving instances via WADO-RS.",
            {
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
               ],
               "el" : "note"
            },
            "Required if DICOM Retrieval Sequence (0040,E021), DICOM Media Retrieval Sequence (0040,E022), WADO Retrieval Sequence (0040,E023) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "Unified Procedure Step Relationship",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-3b"
         ],
         "req" : "1C",
         "usage" : "References the related SOPs and IEs"
      },
      "(0028,0303)" : {
         "entity" : "",
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
         "name" : "Longitudinal Temporal Information Modified",
         "usage" : "Contains SOP common information",
         "req" : "3",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0074,1210)[<0>](0040,0441)[<1>](0008,1199)[<2>](0008,1150)" : {
         "req" : "1",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2",
            "table_10-11"
         ],
         "entity" : "",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID"
      },
      "(4ffe,0001)[<0>](0400,0015)" : {
         "name" : "MAC Algorithm",
         "entity" : "",
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
                     "attrs" : {
                        "xml:id" : "para_c0347aea-ecd8-4c0b-8e2f-cedadc2aacd5"
                     },
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
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "Contains SOP common information",
         "req" : "1"
      },
      "(0040,4021)[<0>](0040,e025)[<1>](0008,1190)" : {
         "entity" : "",
         "desc" : "URL specifying the location of the referenced instance(s).",
         "name" : "Retrieve URL",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "req" : "1",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-3b"
         ],
         "module" : "Unified Procedure Step Scheduled Procedure Information"
      },
      "(0040,4021)[<0>](0040,e022)[<1>](0088,0140)" : {
         "entity" : "",
         "desc" : "Uniquely identifies the Storage Media on which the referenced instance(s) reside.",
         "name" : "Storage Media File-Set UID",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "req" : "1",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-3b"
         ]
      },
      "(0040,4021)[<0>](0008,1199)[<1>](0008,1160)" : {
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-3b"
         ],
         "req" : "1C",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
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
         "entity" : ""
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0040,0441)[<2>](0040,a30a)" : {
         "req" : "1C",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "module" : "Unified Procedure Step Performed Procedure Information",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2"
         ],
         "entity" : "",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "name" : "Numeric Value"
      },
      "(0038,0014)[<0>](0040,0032)" : {
         "module" : "Unified Procedure Step Relationship",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-17"
         ],
         "req" : "1C",
         "usage" : "References the related SOPs and IEs",
         "name" : "Universal Entity ID",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : ""
      },
      "(0010,1002)" : {
         "usage" : "References the related SOPs and IEs",
         "req" : [
            "Identification numbers or codes used to identify the patient, which may or may not be human readable, and may or may not have been obtained from an implanted or attached device such as an RFID or barcode.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "module" : "Unified Procedure Step Relationship",
         "mod_tables" : [
            "table_C.30.4-1"
         ],
         "entity" : "",
         "desc" : null,
         "name" : "Other Patient IDs Sequence"
      },
      "(0074,1002)[<0>](0040,4052)" : {
         "entity" : "",
         "desc" : null,
         "name" : "Procedure Step Cancellation DateTime",
         "usage" : "Describes the progress of a UPS task",
         "req" : "Date and Time at which the procedure step was discontinued.",
         "module" : "Unified Procedure Step Progress Information",
         "mod_tables" : [
            "table_C.30.1-1"
         ]
      },
      "(0074,1216)[<0>](0040,4029)" : {
         "desc" : null,
         "entity" : "",
         "name" : "Performed Station Class Code Sequence",
         "req" : [
            "Classes of the equipment that created the Procedure Step.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "mod_tables" : [
            "table_C.30.3-1"
         ],
         "module" : "Unified Procedure Step Performed Procedure Information"
      },
      "(0010,0024)[<0>](0040,0033)" : {
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
                  "attrs" : {
                     "linkend" : "sect_10.14",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for Defined Terms."
            ]
         ],
         "entity" : "",
         "name" : "Universal Entity ID Type",
         "usage" : "References the related SOPs and IEs",
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-18"
         ],
         "module" : "Unified Procedure Step Relationship"
      },
      "(0074,1204)" : {
         "entity" : "",
         "desc" : null,
         "name" : "Procedure Step Label",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "req" : "A label describing the task of the Procedure Step in text appropriate for displaying in the user selection interface.",
         "mod_tables" : [
            "table_C.30.2-1"
         ],
         "module" : "Unified Procedure Step Scheduled Procedure Information"
      },
      "(0038,0502)" : {
         "mod_tables" : [
            "table_C.2-4"
         ],
         "module" : "Patient Medical",
         "req" : [
            "Sequence of identifiers for clinical trials or research in which the patient participates.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "usage" : "Describes the patient's medical state or history",
         "name" : "Patient Clinical Trial Participation Sequence",
         "desc" : null,
         "entity" : ""
      },
      "(0040,4021)[<0>](0040,e022)" : {
         "entity" : "",
         "desc" : [
            "Details for retrieving instances from Media.",
            "Required if DICOM Retrieval Sequence (0040,E021), WADO Retrieval Sequence (0040,E023), and WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "This sequence shall only identify media known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "DICOM Media Retrieval Sequence",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-3b"
         ],
         "module" : "Unified Procedure Step Scheduled Procedure Information"
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0040,a040)" : {
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "req" : "1",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2"
         ],
         "module" : "Unified Procedure Step Performed Procedure Information",
         "entity" : "",
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
      "(0074,1210)[<0>](0040,a168)" : {
         "name" : "Concept Code Sequence",
         "entity" : "",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data"
      },
      "(0038,0502)[<0>](0012,0010)" : {
         "entity" : "",
         "desc" : null,
         "name" : "Clinical Trial Sponsor Name",
         "usage" : "Describes the patient's medical state or history",
         "req" : "The name of the clinical trial or research sponsor, responsible for conducting the clinical trial and for defining the Clinical Trial Protocol.",
         "module" : "Patient Medical",
         "mod_tables" : [
            "table_C.2-4"
         ]
      },
      "(0018,a001)[<0>](0008,0080)" : {
         "entity" : "",
         "desc" : "Institution where the equipment that contributed to the composite instance is located.",
         "name" : "Institution Name",
         "usage" : "Contains SOP common information",
         "req" : "3",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,0110)[<0>](0008,0116)" : {
         "usage" : "Contains SOP common information",
         "req" : "3",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Name of the organization responsible for the Coding Scheme. May include organizational contact information.",
         "entity" : "",
         "name" : "Coding Scheme Responsible Organization"
      },
      "(0010,0035)[<0>](0010,0021)" : {
         "usage" : "References the related SOPs and IEs",
         "req" : "3",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-18"
         ],
         "module" : "Unified Procedure Step Relationship",
         "entity" : "",
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
         "name" : "Issuer of Patient ID"
      },
      "(0040,a390)[<0>](0040,e001)" : {
         "name" : "HL7 Instance Identifier",
         "desc" : "Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "req" : "1"
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0040,0441)[<2>](0040,a120)" : {
         "module" : "Unified Procedure Step Performed Procedure Information",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "name" : "DateTime",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "entity" : ""
      },
      "(0040,a370)[<0>](0040,0027)[<1>](0040,0032)" : {
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "",
         "name" : "Universal Entity ID",
         "req" : "1C",
         "usage" : "References the related SOPs and IEs",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-17"
         ],
         "module" : "Unified Procedure Step Relationship"
      },
      "(0040,a370)[<0>](0040,2004)" : {
         "module" : "Unified Procedure Step Relationship",
         "mod_tables" : [
            "table_C.30.4-1"
         ],
         "req" : "Date on which the Service Request was issued by the requester.",
         "usage" : "References the related SOPs and IEs",
         "name" : "Issue Date of Imaging Service Request",
         "entity" : "",
         "desc" : null
      },
      "(0100,0424)" : {
         "desc" : "Any comments associated with the setting of the SOP Instance Status (0100,0410) to AO.",
         "entity" : "",
         "name" : "SOP Authorization Comment",
         "req" : "3",
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,001b)" : {
         "usage" : "Contains SOP common information",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : [
            "The SOP Class in which the Instance was originally encoded that has been replaced during a fall-back conversion to the current Related General SOP Class. See ",
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
         "entity" : "",
         "name" : "Original Specialized SOP Class UID"
      },
      "(0040,a390)[<0>](0008,1150)" : {
         "usage" : "Contains SOP common information",
         "req" : "1",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "entity" : "",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID"
      },
      "(0074,1000)" : {
         "module" : "Unified Procedure Step Progress Information",
         "mod_tables" : [
            "table_C.30.1-1"
         ],
         "usage" : "Describes the progress of a UPS task",
         "req" : [
            "State of the Procedure Step.",
            {
               "list" : [
                  [
                     "SCHEDULED",
                     null
                  ],
                  [
                     "IN PROGRESS",
                     null
                  ],
                  [
                     "CANCELED",
                     null
                  ],
                  [
                     "COMPLETED",
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
                     "targetdoc" : "PS3.4",
                     "xrefstyle" : "select: labelnumber",
                     "targetptr" : "PS3.4"
                  }
               },
               " for details on Unified Procedure Step states."
            ]
         ],
         "name" : "Procedure Step State",
         "entity" : "",
         "desc" : null
      },
      "(0038,0502)[<0>](0012,0040)" : {
         "req" : "The assigned identifier for the patient as a clinical trial or research subject.",
         "usage" : "Describes the patient's medical state or history",
         "module" : "Patient Medical",
         "mod_tables" : [
            "table_C.2-4"
         ],
         "entity" : "",
         "desc" : null,
         "name" : "Clinical Trial Subject ID"
      },
      "(0020,9172)[<0>](0008,1155)" : {
         "entity" : "",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "usage" : "Contains SOP common information",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "module" : "SOP Common"
      },
      "(0040,4021)[<0>](0040,e025)" : {
         "req" : "1C",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-3b"
         ],
         "entity" : "",
         "desc" : [
            "Details for retrieving instances via WADO-RS.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_6afb22cc-92e8-4ec8-9a23-820f4c4a769b"
                     },
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
         "name" : "WADO-RS Retrieval Sequence"
      },
      "(0008,0300)[<0>](0008,0303)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "req" : "1",
         "name" : "Block Identifying Information Status",
         "desc" : [
            [
               "Specifies whether some or all of the Private Data Elements in the block are safe from identity leakage as defined by ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "targetptr" : "sect_E.3.10",
                     "xrefstyle" : "template:PS3.15 Section %n %t",
                     "targetdoc" : "PS3.15"
                  }
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "entity" : ""
      },
      "(0040,4070)" : {
         "name" : "Output Destination Sequence",
         "desc" : null,
         "entity" : "",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "mod_tables" : [
            "table_C.30.2-1"
         ],
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "req" : [
            "The destination to which the performer is requested to store the output objects generated",
            "Zero or more Items shall be included in this Sequence.",
            "Each item constitutes a separate storage request.",
            "The performing system might not support the requested storage protocol or not be configured for the desired destination. The performing system may, additionally or as a fallback, be configured to store output objects to a default destination or retain them locally.",
            "The actual location(s) to which instances are successfully stored is recorded in the Output Information Sequence (0040,4033).",
            "Whether to report failure of one or more of the storage requests as a failure of the work item is at the discretion of the performing system."
         ]
      },
      "(0040,4021)[<0>](0040,e024)[<1>](0040,e030)" : {
         "entity" : "",
         "desc" : "Uniquely identifies a Repository from which the referenced instances can be retrieved.",
         "name" : "Repository Unique ID",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "req" : "1",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-3b"
         ]
      },
      "(0010,0035)[<0>](0010,0024)[<1>](0040,0039)" : {
         "module" : "Unified Procedure Step Relationship",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-18"
         ],
         "req" : "3",
         "usage" : "References the related SOPs and IEs",
         "name" : "Assigning Jurisdiction Code Sequence",
         "entity" : "",
         "desc" : [
            "The geo-political body that assigned the patient identifier. Typically a code for a country or a state/province. Only a single Item is permitted in this Sequence.",
            {
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
               ],
               "el" : "note"
            }
         ]
      },
      "(0008,0201)" : {
         "req" : "3",
         "usage" : "Contains SOP common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
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
                                    "xml:id" : "para_155b097e-395f-4748-981c-0255b00fe9a8"
                                 },
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
                     ]
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_5346ad4e-84cd-47ed-bc69-c2b41005345d"
                     },
                     "content" : [
                        "For example:"
                     ]
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
                     "el" : "para",
                     "content" : [
                        "Local Time = 3.00 a.m."
                     ]
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
         ],
         "entity" : "",
         "name" : "Timezone Offset From UTC"
      },
      "(0038,0502)[<0>](0012,0020)" : {
         "usage" : "Describes the patient's medical state or history",
         "req" : "Identifier for the noted protocol, used by the Clinical Trial Sponsor to uniquely identify the investigational protocol.",
         "module" : "Patient Medical",
         "mod_tables" : [
            "table_C.2-4"
         ],
         "desc" : null,
         "entity" : "",
         "name" : "Clinical Trial Protocol ID"
      },
      "(0074,1216)[<0>](0040,4033)[<1>](0040,e025)[<2>](0008,1190)" : {
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-3b"
         ],
         "module" : "Unified Procedure Step Performed Procedure Information",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "req" : "1",
         "name" : "Retrieve URL",
         "entity" : "",
         "desc" : "URL specifying the location of the referenced instance(s)."
      },
      "(0074,1210)[<0>](0008,1199)" : {
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2"
         ],
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "req" : "1C",
         "name" : "Referenced SOP Sequence",
         "entity" : "",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1102)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "Contains SOP common information",
         "req" : "3",
         "name" : "Person's Address",
         "entity" : "",
         "desc" : "Person's mailing address"
      },
      "(0038,0101)" : {
         "usage" : "Describes the patient's medical state or history",
         "req" : [
            "List of resources that contain information considered pertinent for the patient medical condition.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.2-4"
         ],
         "module" : "Patient Medical",
         "entity" : "",
         "desc" : null,
         "name" : "Pertinent Resources Sequence"
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1155)" : {
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "req" : "1",
         "module" : "Unified Procedure Step Performed Procedure Information",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "",
         "name" : "Referenced SOP Instance UID"
      },
      "(0018,9004)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "Contains SOP common information",
         "name" : "Content Qualification",
         "entity" : "",
         "desc" : [
            "Content Qualification Indicator",
            {
               "title" : "Enumerated Values:",
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
               ]
            },
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.13.2.1.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ]
      },
      "(0074,1210)[<0>](0040,a30a)" : {
         "name" : "Numeric Value",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "entity" : "",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0080)" : {
         "usage" : "Contains SOP common information",
         "req" : "1C",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "entity" : "",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "name" : "Institution Name"
      },
      "(0040,a370)[<0>](0040,1001)" : {
         "name" : "Requested Procedure ID",
         "desc" : null,
         "entity" : "",
         "module" : "Unified Procedure Step Relationship",
         "mod_tables" : [
            "table_C.30.4-1"
         ],
         "usage" : "References the related SOPs and IEs",
         "req" : "Identifier of the related Requested Procedure."
      },
      "(0018,a001)[<0>](0040,a170)" : {
         "req" : "1",
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "entity" : "",
         "name" : "Purpose of Reference Code Sequence"
      },
      "(0008,0018)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "req" : "1",
         "name" : "SOP Instance UID",
         "entity" : "",
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
      "(0074,1216)[<0>](0074,1212)[<1>](0040,a124)" : {
         "name" : "UID",
         "entity" : "",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "module" : "Unified Procedure Step Performed Procedure Information",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2"
         ],
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "req" : "1C"
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0040,0441)[<2>](0040,a162)" : {
         "req" : "1C",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2"
         ],
         "module" : "Unified Procedure Step Performed Procedure Information",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "entity" : "",
         "name" : "Rational Numerator Value"
      },
      "(0008,0012)" : {
         "req" : "3",
         "usage" : "Contains SOP common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "",
         "desc" : [
            "Date the SOP Instance was created.",
            "This is the date that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "name" : "Instance Creation Date"
      },
      "(0010,0030)" : {
         "req" : "Date of birth of the named patient.",
         "usage" : "References the related SOPs and IEs",
         "mod_tables" : [
            "table_C.30.4-1"
         ],
         "module" : "Unified Procedure Step Relationship",
         "desc" : null,
         "entity" : "",
         "name" : "Patient's Birth Date"
      },
      "(0040,4021)[<0>](0040,e022)[<1>](0088,0130)" : {
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "req" : "2",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-3b"
         ],
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the referenced instance(s) reside.",
         "entity" : "",
         "name" : "Storage Media File-Set ID"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0082)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common",
         "req" : "1C",
         "usage" : "Contains SOP common information",
         "name" : "Institution Code Sequence",
         "entity" : "",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0074,1216)[<0>](0040,4033)[<1>](0020,000e)" : {
         "req" : "1C",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "module" : "Unified Procedure Step Performed Procedure Information",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-3b"
         ],
         "entity" : "",
         "desc" : [
            "Unique identifier for the Series that is part of the Study identified in Study Instance UID (0020,000D), if present, and contains the referenced object instance(s).",
            "Required if Type of Instances (0040,E020) is DICOM"
         ],
         "name" : "Series Instance UID"
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0040,0441)[<2>](0040,a121)" : {
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "entity" : "",
         "name" : "Date",
         "req" : "1C",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "module" : "Unified Procedure Step Performed Procedure Information",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2"
         ]
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0040,0441)[<2>](0008,1199)" : {
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2"
         ],
         "module" : "Unified Procedure Step Performed Procedure Information",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "req" : "1C",
         "name" : "Referenced SOP Sequence",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "entity" : ""
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0008,1199)" : {
         "name" : "Referenced SOP Sequence",
         "entity" : "",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2"
         ],
         "module" : "Unified Procedure Step Performed Procedure Information",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "req" : "1C"
      },
      "(0074,1216)[<0>](0040,0280)" : {
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "req" : "User-defined comments on the Performed Procedure Step.",
         "module" : "Unified Procedure Step Performed Procedure Information",
         "mod_tables" : [
            "table_C.30.3-1"
         ],
         "desc" : null,
         "entity" : "",
         "name" : "Comments on the Performed Procedure Step"
      },
      "(0400,0500)[<0>](0400,0520)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "usage" : "Contains SOP common information",
         "name" : "Encrypted Content",
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
         "entity" : ""
      },
      "(0040,a370)[<0>](0040,0026)[<1>](0040,0031)" : {
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-17"
         ],
         "module" : "Unified Procedure Step Relationship",
         "req" : "1C",
         "usage" : "References the related SOPs and IEs",
         "name" : "Local Namespace Entity ID",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : ""
      },
      "(0038,0502)[<0>](0012,0021)" : {
         "mod_tables" : [
            "table_C.2-4"
         ],
         "module" : "Patient Medical",
         "usage" : "Describes the patient's medical state or history",
         "req" : "The name or title of the clinical trial or research protocol.",
         "name" : "Clinical Trial Protocol Name",
         "entity" : "",
         "desc" : null
      },
      "(0040,a370)[<0>](0040,0027)" : {
         "module" : "Unified Procedure Step Relationship",
         "mod_tables" : [
            "table_C.30.4-1"
         ],
         "req" : [
            "Identifier of the Assigning Authority that issued the Filler Order Number.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "References the related SOPs and IEs",
         "name" : "Order Filler Identifier Sequence",
         "desc" : null,
         "entity" : ""
      },
      "(0040,0400)" : {
         "name" : "Comments on the Scheduled Procedure Step",
         "desc" : null,
         "entity" : "",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "mod_tables" : [
            "table_C.30.2-1"
         ],
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "req" : "User-defined comments on the scheduled Procedure Step."
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0040,0441)[<2>](0040,a043)" : {
         "name" : "Concept Name Code Sequence",
         "entity" : "",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2"
         ],
         "module" : "Unified Procedure Step Performed Procedure Information",
         "req" : "1",
         "usage" : "Describes the work performed including information about status, place, time and result data"
      },
      "(0074,1216)[<0>](0040,4033)[<1>](0008,1199)[<2>](0008,1155)" : {
         "entity" : "",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "module" : "Unified Procedure Step Performed Procedure Information",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-3b"
         ]
      },
      "(0010,0024)[<0>](0040,003a)" : {
         "req" : "3",
         "usage" : "References the related SOPs and IEs",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-18"
         ],
         "module" : "Unified Procedure Step Relationship",
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
         ],
         "entity" : "",
         "name" : "Assigning Agency or Department Code Sequence"
      },
      "(0040,4070)[<0>](0040,4074)[<1>](0040,e030)" : {
         "desc" : "Uniquely identifies a Repository from which the referenced instances can be retrieved.",
         "entity" : "",
         "name" : "Repository Unique ID",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "req" : "1",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-3c"
         ]
      },
      "(0038,0100)[<0>](0040,a170)" : {
         "entity" : "",
         "desc" : null,
         "name" : "Purpose of Reference Code Sequence",
         "usage" : "Describes the patient's medical state or history",
         "req" : "Describes the purpose for which the document reference is made. Zero or more Items shall be included in this Sequence.",
         "mod_tables" : [
            "table_C.2-4"
         ],
         "module" : "Patient Medical"
      },
      "(0074,1200)" : {
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "req" : [
            "Priority of the scheduled Procedure Step",
            {
               "list" : [
                  [
                     "HIGH",
                     "used to indicate an urgent or emergent work item, equivalent to a STAT request."
                  ],
                  [
                     "MEDIUM",
                     "used to indicate a work item that has a priority less than HIGH and higher than LOW. It can be used to further stratify work items."
                  ],
                  [
                     "LOW",
                     "used to indicate a routine or non-urgent work item."
                  ]
               ],
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "mod_tables" : [
            "table_C.30.2-1"
         ],
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "entity" : "",
         "desc" : null,
         "name" : "Scheduled Procedure Step Priority"
      }
   }
}
