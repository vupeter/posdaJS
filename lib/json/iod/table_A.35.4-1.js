var data = {
   "tags" : {
      " (0010,0027) " : {
         "desc" : [
            [
               "A sequence containing the identifiers and locations of the individual subjects whose data was acquired at the same time (as a group) and encoded in this composite instance. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.1.4.1.1",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ],
            "One or more Items are permitted in this sequence."
         ],
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "module" : "Patient",
         "name" : "Group of Patients Identification Sequence",
         "req" : "\n                  3 "
      },
      "(0400,0500)[<0>](0400,0520)" : {
         "name" : "Encrypted Content",
         "req" : "1",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
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
         ]
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "usage" : "M",
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
                     "linkend" : "sect_10.14",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for Defined Terms."
            ]
         ]
      },
      "(0008,0105)" : {
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
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "name" : "Mapping Resource"
      },
      "(0040,a730)[<0>](0040,a040)" : {
         "req" : "1",
         "name" : "Value Type",
         "module" : "SR Document Content",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5"
         ],
         "entity" : "Document",
         "usage" : "M",
         "desc" : [
            "The type of the value encoded in this Content Item.",
            {
               "title" : "Enumerated Values:",
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
               ]
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
         ]
      },
      "(0008,0300)[<0>](0008,0304)" : {
         "req" : "1C",
         "name" : "Nonidentifying Private Elements",
         "desc" : [
            "List of Private Data Elements in block that do not contain identifying\n                  information (are safe from identity leakage).",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once.",
            "Required if Block Identifying Information Status (0008,0303) equals MIXED."
         ],
         "module" : "SOP Common",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0040,a730)[<0>](0040,a120)" : {
         "desc" : [
            "This is the value of the Content Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "usage" : "M",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5"
         ],
         "module" : "SR Document Content",
         "name" : "DateTime",
         "req" : "1C"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0008,1199)" : {
         "req" : "3",
         "name" : "Referenced SOP Sequence",
         "desc" : [
            "Reference to a Softcopy Presentation State SOP Class/SOP Instance pair.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "SR Document Content",
         "usage" : "M",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1"
         ],
         "entity" : "Document"
      },
      "(0040,a730)[<0>](0040,a130)" : {
         "entity" : "Document",
         "usage" : "M",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.7-1"
         ],
         "module" : "SR Document Content",
         "desc" : [
            "See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.18.7.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for Enumerated Values."
         ],
         "name" : "Temporal Range Type",
         "req" : "1"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)" : {
         "req" : "3",
         "name" : "Assigning Facility Sequence",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "usage" : "M",
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
         ]
      },
      "(0100,0410)" : {
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
                     "attrs" : {
                        "xml:id" : "para_b6227994-ee87-4d4f-9ba4-c3a82f2a705d"
                     },
                     "content" : [
                        "Proper use of these flags is specified in Security Profiles. Implementations that do not conform to such Security Profiles may not necessarily handle these flags properly."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "entity" : "Document",
         "module" : "SOP Common",
         "name" : "SOP Instance Status",
         "req" : "3"
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)" : {
         "desc" : [
            "A MAC Calculation from data in the referenced SOP Instance that can be used as a data integrity check.",
            "Only a single Item is permitted in this Sequence.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_85131baf-ebaa-41ca-b044-07c75698df97"
                     },
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
         "module" : "Key Object Document",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17.6-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Referenced SOP Instance MAC Sequence"
      },
      "(0010,1100)[<0>](0008,1199)" : {
         "desc" : [
            "References to object instances.",
            "One or more Items shall be included in this Sequence"
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "module" : "Patient",
         "name" : "Referenced SOP Sequence",
         "req" : "1"
      },
      "(0008,0300)[<0>](0008,0305)" : {
         "desc" : "Actions to be performed on element within the block that are not safe from identify leakage.",
         "entity" : "Document",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Deidentification Action Sequence",
         "req" : "3"
      },
      "(0008,1010)" : {
         "desc" : "User defined name identifying the machine that produced the composite instances.",
         "module" : "General Equipment",
         "entity" : "Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Station Name"
      },
      "(0008,0013)" : {
         "req" : "3",
         "name" : "Instance Creation Time",
         "desc" : [
            "Time the SOP Instance was created.",
            "This is the time that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "module" : "SOP Common",
         "entity" : "Document",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0008,114b)[<2>](0008,1150)" : {
         "usage" : "M",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_10-11"
         ],
         "module" : "SR Document Content",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "req" : "1"
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1150)" : {
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "Key Object Document",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17.6-2",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "usage" : "M"
      },
      "(fffa,fffa)[<0>](0400,0110)" : {
         "req" : "1",
         "name" : "Certificate Type",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Document",
         "usage" : "M",
         "desc" : [
            "The type of certificate used in (0400,0115).",
            {
               "list" : [
                  [
                     "X509_1993_SIG",
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
                        "xml:id" : "para_fe92f60f-2615-4c9b-bab0-86d640bd9af4"
                     },
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
                     ],
                     "el" : "para"
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ]
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0020,000e)" : {
         "req" : "1",
         "name" : "Series Instance UID",
         "module" : "Key Object Document",
         "usage" : "M",
         "mod_tables" : [
            "table_C.17.6-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "entity" : "Document",
         "desc" : "Unique identifier of a Series that is part of this Study and contains the referenced Composite Object(s)."
      },
      "(0018,a001)[<0>](0008,0081)" : {
         "req" : "3",
         "name" : "Institution Address",
         "module" : "SOP Common",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "desc" : "Address of the institution where the equipment that contributed to the composite instance is located."
      },
      "(0040,a730)[<0>](0040,a13a)" : {
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.7-1"
         ],
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document Content",
         "desc" : [
            "Specifies temporal points for reference by absolute time.",
            "Required if Referenced Sample Positions (0040,A132) and Referenced Time Offsets (0040,A138) are not present."
         ],
         "name" : "Referenced DateTime",
         "req" : "1C"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0062,000b)" : {
         "req" : "1C",
         "name" : "Referenced Segment Number",
         "desc" : "Identifies the segments to which the reference applies identified by Segment Number (0062,0004). Required if the Referenced SOP Instance is a Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present.",
         "module" : "SR Document Content",
         "usage" : "M",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1"
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1103)" : {
         "req" : "3",
         "name" : "Person's Telephone Numbers",
         "module" : "SOP Common",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "M",
         "desc" : "Person's telephone number(s)"
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0020,000e)" : {
         "req" : "1",
         "name" : "Series Instance UID",
         "module" : "Key Object Document",
         "usage" : "M",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17.6-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "Unique identifier of a Series that is part of this Study and contains the referenced Composite Object(s)."
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,003a)" : {
         "req" : "3",
         "name" : "Assigning Agency or Department Code Sequence",
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
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0010,1001)" : {
         "name" : "Other Patient Names",
         "req" : "3",
         "desc" : "Other names used to identify the patient.",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "module" : "Patient"
      },
      "(0012,0040)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "entity" : "Patient",
         "module" : "Clinical Trial Subject",
         "desc" : [
            "The assigned identifier for the clinical trial or research subject. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.3.1.6"
               }
            },
            ". Shall be present if Clinical Trial Subject Reading ID (0012,0042) is absent. May be present otherwise."
         ],
         "name" : "Clinical Trial Subject ID",
         "req" : "1C"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,1102)" : {
         "name" : "Green Palette Color Lookup Table Descriptor",
         "req" : "1C",
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
         "entity" : "Document",
         "usage" : "M",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "module" : "SR Document Content"
      },
      "(0008,1048)" : {
         "module" : "General Study",
         "entity" : "Study",
         "usage" : "M",
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
         ],
         "req" : "3",
         "name" : "Physician(s) of Record"
      },
      "(0008,0031)" : {
         "req" : "3",
         "name" : "Series Time",
         "module" : "Key Object Document Series",
         "mod_tables" : [
            "table_C.17.6-1"
         ],
         "entity" : "Series",
         "usage" : "M",
         "desc" : "Time the Series started."
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,0107)" : {
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document Content",
         "desc" : "The maximum actual pixel value encountered in this image.",
         "name" : "Largest Image Pixel Value",
         "req" : "3"
      },
      "(0008,009d)[<0>](0008,0080)" : {
         "name" : "Institution Name",
         "req" : "1C",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "entity" : "Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study"
      },
      "(0040,a730)[<0>](0040,a123)" : {
         "entity" : "Document",
         "usage" : "M",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5"
         ],
         "module" : "SR Document Content",
         "desc" : [
            "This is the value of the Content Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "name" : "Person Name",
         "req" : "1C"
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0040,e011)" : {
         "usage" : "M",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17.6-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Key Object Document",
         "desc" : "Unique identifier of the system where the Composite Object(s) may be retrieved on the network.",
         "name" : "Retrieve Location UID",
         "req" : "3"
      },
      "(0018,a001)" : {
         "name" : "Contributing Equipment Sequence",
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
         "entity" : "Document",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0010,0032)" : {
         "req" : "3",
         "name" : "Patient's Birth Time",
         "desc" : "Birth time of the Patient.",
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient"
      },
      "(0038,0010)" : {
         "desc" : "Identifier of the visit as assigned by the healthcare provider",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "entity" : "Study",
         "req" : "3",
         "name" : "Admission ID"
      },
      "(0040,a370)[<0>](0040,0027)[<1>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "req" : "1C",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.17.6-2",
            "table_10-17"
         ],
         "usage" : "M",
         "entity" : "Document",
         "module" : "Key Object Document"
      },
      "(0008,0118)" : {
         "name" : "Mapping Resource UID",
         "req" : "3",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : "The unique identifier of the Mapping Resource"
      },
      "(0010,0040)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
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
         "req" : "2",
         "name" : "Patient's Sex"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0032)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M",
         "entity" : "Patient",
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
         ],
         "req" : "3",
         "name" : "Universal Entity ID"
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
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "entity" : "Document",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Person's Telecom Information",
         "req" : "3"
      },
      "(0020,0010)" : {
         "module" : "General Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "desc" : "User or equipment generated Study identifier.",
         "req" : "2",
         "name" : "Study ID"
      },
      "(0040,a370)[<0>](0008,0051)[<1>](0040,0031)" : {
         "module" : "Key Object Document",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17.6-2",
            "table_10-17"
         ],
         "usage" : "M",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C",
         "name" : "Local Namespace Entity ID"
      },
      "(0040,a370)[<0>](0040,0027)[<1>](0040,0032)" : {
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "usage" : "M",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17.6-2",
            "table_10-17"
         ],
         "module" : "Key Object Document",
         "name" : "Universal Entity ID",
         "req" : "1C"
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1150)" : {
         "module" : "Key Object Document",
         "usage" : "M",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17.6-2",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "name" : "Referenced SOP Class UID"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "req" : "1C",
         "name" : "Local Namespace Entity ID",
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise."
      },
      "(0008,1111)[<0>](0008,1150)" : {
         "module" : "Key Object Document Series",
         "mod_tables" : [
            "table_C.17.6-1",
            "table_10-11"
         ],
         "entity" : "Series",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "name" : "Referenced SOP Class UID"
      },
      "(0008,0051)[<0>](0040,0031)" : {
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "entity" : "Study",
         "usage" : "M",
         "req" : "1C",
         "name" : "Local Namespace Entity ID"
      },
      "(4ffe,0001)[<0>](0400,0015)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "entity" : "Document",
         "module" : "SOP Common",
         "desc" : [
            "The algorithm used in generating the MAC to be encrypted to form the Digital Signature.",
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
                  "\n                      ",
                  {
                     "el" : "para",
                     "content" : [
                        "Digital Signature Security Profiles (see ",
                        {
                           "attrs" : {
                              "xrefstyle" : "select: labelnumber",
                              "targetdoc" : "PS3.15",
                              "targetptr" : "PS3.15"
                           },
                           "el" : "olink"
                        },
                        ") may require the use of a restricted subset of these terms."
                     ],
                     "attrs" : {
                        "xml:id" : "para_c0347aea-ecd8-4c0b-8e2f-cedadc2aacd5"
                     }
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ],
         "name" : "MAC Algorithm",
         "req" : "1"
      },
      "(0038,0064)[<0>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "usage" : "U",
         "entity" : "Study",
         "module" : "Patient Study",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise."
      },
      "(0008,1049)" : {
         "module" : "General Study",
         "entity" : "Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : [
            "Identification of the physician(s) who are responsible for overall patient care at time of Study.",
            "One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Physician(s) of Record (0008,1048), if present."
         ],
         "req" : "3",
         "name" : "Physician(s) of Record Identification Sequence"
      },
      "(0040,a370)[<0>](0040,0026)[<1>](0040,0031)" : {
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.17.6-2",
            "table_10-17"
         ],
         "usage" : "M",
         "entity" : "Document",
         "module" : "Key Object Document",
         "name" : "Local Namespace Entity ID",
         "req" : "1C"
      },
      "(0040,a370)[<0>](0032,1064)" : {
         "req" : "2",
         "name" : "Requested Procedure Code Sequence",
         "module" : "Key Object Document",
         "mod_tables" : [
            "table_C.17.6-2"
         ],
         "usage" : "M",
         "entity" : "Document",
         "desc" : [
            "A sequence that conveys the requested procedure.",
            "Zero or one Item shall be included in this Sequence."
         ]
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
         "req" : "3"
      },
      "(0400,0561)[<0>](0400,0550)[0](gggg,eeee)" : {
         "name" : "Any Attribute from the main data set that was modified or removed.",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Document",
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : "May include Sequence Attributes and their Items."
      },
      "(0040,a525)" : {
         "name" : "Identical Documents Sequence",
         "req" : "1C",
         "desc" : [
            "Duplicates of this document, stored with different SOP Instance UIDs.",
            "One or more Items shall be included in this Sequence.",
            "Required if this Key Object Selection document references instances in more than one Study.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.17.2.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " and ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.17.6.2.1"
                  }
               },
               " for further explanation and conditions."
            ]
         ],
         "mod_tables" : [
            "table_C.17.6-2"
         ],
         "entity" : "Document",
         "usage" : "M",
         "module" : "Key Object Document"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0033)" : {
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M",
         "module" : "Patient",
         "name" : "Universal Entity ID Type",
         "req" : "1C"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0035)" : {
         "module" : "Patient",
         "usage" : "M",
         "entity" : "Patient",
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
         "req" : "3",
         "name" : "Identifier Type Code"
      },
      "(0018,a001)[<0>](0018,a002)" : {
         "module" : "SOP Common",
         "entity" : "Document",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The Date & Time when the equipment contributed to the composite instance.",
         "req" : "3",
         "name" : "Contribution DateTime"
      },
      "(0040,a730)[<0>](3006,0024)" : {
         "name" : "Referenced Frame of Reference UID",
         "req" : "1",
         "desc" : [
            "Uniquely identifies the Frame of Reference within which the coordinates are defined.",
            {
               "content" : [
                  "\n",
                  {
                     "content" : [
                        "There is no requirement that the Frame of Reference be the same for all SCOORD3D Content Items in the same SR SOP Instance, nor is there any requirement that the ",
                        {
                           "attrs" : {
                              "linkend" : "sect_C.7.4.1",
                              "xrefstyle" : "select: title"
                           },
                           "el" : "xref"
                        },
                        " be present."
                     ],
                     "attrs" : {
                        "xml:id" : "para_5de7a5aa-e19a-4de1-a387-ccdc605c83cc"
                     },
                     "el" : "para"
                  },
                  "\n"
               ],
               "el" : "note"
            }
         ],
         "entity" : "Document",
         "usage" : "M",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.9-1"
         ],
         "module" : "SR Document Content"
      },
      "(0012,0083)[<0>](0012,0020)" : {
         "entity" : "Study",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "module" : "Clinical Trial Study",
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
         "req" : "1C"
      },
      "(0008,1120)[<0>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "module" : "Patient",
         "name" : "Referenced SOP Instance UID",
         "req" : "1"
      },
      "(0018,1030)" : {
         "req" : "3",
         "name" : "Protocol Name",
         "desc" : [
            "Description of the conditions under which the Series was performed.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_25eab41f-5a73-4d4a-a4de-9d30b42d6ae9"
                     },
                     "content" : [
                        "This may represent the type of analysis used in creation of the KO SOP Instances."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "module" : "Key Object Document Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.17.6-1"
         ],
         "usage" : "M"
      },
      "(0040,a730)[<0>](0040,a504)[<1>](0040,db00)" : {
         "req" : "1",
         "name" : "Template Identifier",
         "module" : "SR Document Content",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.8-1"
         ],
         "usage" : "M",
         "entity" : "Document",
         "desc" : "Template identifier."
      },
      "(0040,a730)[<0>](0040,a504)[<1>](0008,0105)" : {
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
               "title" : "Defined Terms:",
               "list" : [
                  [
                     "DCMR",
                     "DICOM Content Mapping Resource"
                  ]
               ],
               "type" : "variablelist"
            }
         ],
         "module" : "SR Document Content",
         "entity" : "Document",
         "usage" : "M",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.8-1"
         ],
         "req" : "1",
         "name" : "Mapping Resource"
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0120)" : {
         "name" : "Signature",
         "req" : "1",
         "mod_tables" : [
            "table_C.17.6-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "entity" : "Document",
         "usage" : "M",
         "module" : "Key Object Document",
         "desc" : "The Signature Value identified by the Digital Signature UID within the Referenced SOP Instance UID."
      },
      "(0010,1030)" : {
         "name" : "Patient's Weight",
         "req" : "3",
         "desc" : "Weight of the Patient, in kilograms.",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "entity" : "Study",
         "module" : "Patient Study"
      },
      "(0012,0062)" : {
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
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "module" : "Patient",
         "name" : "Patient Identity Removed",
         "req" : "3"
      },
      "(0040,a730)[<0>](0040,a300)[<1>](0040,a163)" : {
         "req" : "1C",
         "name" : "Rational Denominator Value",
         "module" : "SR Document Content",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.1-1"
         ],
         "usage" : "M",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. Only a single value shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ]
      },
      "(0040,a370)[<0>](0020,000d)" : {
         "name" : "Study Instance UID",
         "req" : "1",
         "desc" : "Unique identifier for the Study.",
         "usage" : "M",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17.6-2"
         ],
         "module" : "Key Object Document"
      },
      "(0008,0070)" : {
         "name" : "Manufacturer",
         "req" : "2",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "entity" : "Equipment",
         "module" : "General Equipment",
         "desc" : "Manufacturer of the equipment that produced the composite instances."
      },
      "(0008,1049)[<0>](0008,0081)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "usage" : "M",
         "module" : "General Study",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "name" : "Institution Address",
         "req" : "3"
      },
      "(0010,1100)[<0>](0040,e021)" : {
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "module" : "Patient",
         "desc" : [
            "Details for retrieving instances via the DICOM Retrieve Service.",
            "Required if DICOM Media Retrieval Sequence (0040,E022), WADO Retrieval Sequence (0040,E023), WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "This sequence shall only identify sources known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "DICOM Retrieval Sequence",
         "req" : "1C"
      },
      "(0040,a390)[<0>](0040,e001)" : {
         "entity" : "Document",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : "Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
         "name" : "HL7 Instance Identifier",
         "req" : "1"
      },
      "(0040,a390)[<0>](0008,1150)" : {
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "usage" : "M",
         "entity" : "Document"
      },
      "(0038,0014)[<0>](0040,0031)" : {
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "Study",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "module" : "Patient Study",
         "name" : "Local Namespace Entity ID",
         "req" : "1C"
      },
      "(0008,0012)" : {
         "desc" : [
            "Date the SOP Instance was created.",
            "This is the date that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "entity" : "Document",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Instance Creation Date",
         "req" : "3"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0035)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "usage" : "M",
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
         "name" : "Identifier Type Code"
      },
      "(fffa,fffa)[<0>](0400,0100)" : {
         "desc" : "A UID that can be used to uniquely reference this signature.",
         "module" : "SOP Common",
         "entity" : "Document",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1",
         "name" : "Digital Signature UID"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "req" : "1C",
         "name" : "Local Namespace Entity ID",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise."
      },
      "(0018,a001)[<0>](0018,1200)" : {
         "name" : "Date of Last Calibration",
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
            "table_C.12-1"
         ],
         "entity" : "Document",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(fffa,fffa)[<0>](0400,0310)" : {
         "name" : "Certified Timestamp",
         "req" : "3",
         "entity" : "Document",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
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
         ]
      },
      "(fffa,fffa)[<0>](0400,0120)" : {
         "req" : "1",
         "name" : "Signature",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Document",
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
         ]
      },
      "(0008,1084)" : {
         "desc" : [
            "A sequence that conveys the admitting diagnosis (diagnoses).",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "Patient Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "req" : "3",
         "name" : "Admitting Diagnoses Code Sequence"
      },
      "(0040,a730)[<0>](0040,a124)" : {
         "req" : "1C",
         "name" : "UID",
         "desc" : [
            "This is the value of the Content Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "module" : "SR Document Content",
         "usage" : "M",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5"
         ]
      },
      "(0010,21b0)" : {
         "req" : "3",
         "name" : "Additional Patient History",
         "module" : "Patient Study",
         "usage" : "U",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Additional information about the Patient's medical history."
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)" : {
         "name" : "Assigning Facility Sequence",
         "req" : "3",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M",
         "module" : "Patient",
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
         ]
      },
      "(4ffe,0001)[<0>](0400,0020)" : {
         "name" : "Data Elements Signed",
         "req" : "1",
         "entity" : "Document",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "desc" : [
            "A list of Data Element Tags in the order they appear in the Data Set that identify the Data Elements used in creating the MAC for the Digital Signature. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.12.1.1.3.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ]
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](7fe0,0010)" : {
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
         "module" : "SR Document Content",
         "usage" : "M",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "entity" : "Document",
         "req" : "1C",
         "name" : "Pixel Data"
      },
      "(0040,a370)[<0>](0040,1001)" : {
         "name" : "Requested Procedure ID",
         "req" : "2",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17.6-2"
         ],
         "usage" : "M",
         "module" : "Key Object Document",
         "desc" : "Identifier of the related Requested Procedure"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,1202)" : {
         "desc" : [
            "Green Palette Color Lookup Table Data. Required if Photometric Interpretation (0028,0004) has a value of PALETTE COLOR or Pixel Presentation (0008,9205) at the image level equals COLOR or MIXED. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.3.1.6"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "module" : "SR Document Content",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "entity" : "Document",
         "usage" : "M",
         "req" : "1C",
         "name" : "Green Palette Color Lookup Table Data"
      },
      "(0010,0216)[<0>](0010,0215)" : {
         "name" : "Strain Source Registry Code Sequence",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "module" : "Patient",
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
      "(0008,0096)[<0>](0040,1103)" : {
         "req" : "3",
         "name" : "Person's Telephone Numbers",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "usage" : "M",
         "desc" : "Person's telephone number(s)"
      },
      "(0040,a730)[<0>](0040,a300)[<1>](0040,08ea)" : {
         "name" : "Measurement Units Code Sequence",
         "req" : "1",
         "desc" : [
            "Units of measurement.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.1-1"
         ],
         "entity" : "Document",
         "module" : "SR Document Content"
      },
      "(0012,0083)[<0>](0012,0085)" : {
         "module" : "Clinical Trial Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "usage" : "U",
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
                  "attrs" : {
                     "linkend" : "sect_C.7.2.3.1.2",
                     "xrefstyle" : "select: label"
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
         ],
         "req" : "1",
         "name" : "Consent for Distribution Flag"
      },
      "(0010,2293)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "desc" : [
            [
               "The breed of the patient. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.1.1.1.1",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ],
            "Zero or more Items shall be included in this Sequence.",
            "Required if the patient is an animal."
         ],
         "name" : "Patient Breed Code Sequence",
         "req" : "2C"
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
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "req" : "1C",
         "name" : "Universal Entity ID Type"
      },
      "(0008,009d)[<0>](0040,1103)" : {
         "entity" : "Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "desc" : "Person's telephone number(s)",
         "name" : "Person's Telephone Numbers",
         "req" : "3"
      },
      "(0008,0050)" : {
         "req" : "2",
         "name" : "Accession Number",
         "desc" : "A RIS generated number that identifies the order for the Study.",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "usage" : "M"
      },
      "(0040,1012)" : {
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "name" : "Reason For Performed Procedure Code Sequence",
         "req" : "3"
      },
      "(0010,0216)[<0>](0010,0214)" : {
         "name" : "Strain Stock Number",
         "req" : "1",
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
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0008,0300)" : {
         "desc" : "Characteristics of Private Data Elements within the current SOP Instance",
         "module" : "SOP Common",
         "entity" : "Document",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "name" : "Private Data Element Characteristics Sequence"
      },
      "(0100,0426)" : {
         "req" : "3",
         "name" : "Authorization Equipment Certification Number",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Document",
         "usage" : "M",
         "desc" : "The certification number issued to the Application Entity that set the SOP Instance Status (0100,0410) to AO."
      },
      "(0018,a001)[<0>](0018,a003)" : {
         "entity" : "Document",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : "Description of the contribution the equipment made to the composite instance.",
         "name" : "Contribution Description",
         "req" : "3"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,0101)" : {
         "name" : "Bits Stored",
         "req" : "1",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document Content",
         "desc" : [
            "Number of bits stored for each pixel sample. Each sample shall have the same number of bits stored. See ",
            {
               "el" : "olink",
               "attrs" : {
                  "targetptr" : "PS3.5",
                  "targetdoc" : "PS3.5",
                  "xrefstyle" : "select: labelnumber"
               }
            },
            " for further explanation."
         ]
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0033)" : {
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
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Universal Entity ID Type",
         "req" : "1C"
      },
      "(0040,a730)[<0>](0040,a050)" : {
         "module" : "SR Document Content",
         "usage" : "M",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.8-1"
         ],
         "entity" : "Document",
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
         "req" : "1",
         "name" : "Continuity of Content"
      },
      "(0010,1020)" : {
         "req" : "3",
         "name" : "Patient's Size",
         "desc" : "Length or size of the Patient, in meters.",
         "module" : "Patient Study",
         "entity" : "Study",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0008,0054)" : {
         "module" : "Key Object Document",
         "mod_tables" : [
            "table_C.17.6-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M",
         "entity" : "Document",
         "desc" : "Title of the DICOM Application Entity where the Composite Object(s) may be retrieved on the network.",
         "req" : "3",
         "name" : "Retrieve AE Title"
      },
      "(0040,a525)[<0>](0008,1115)" : {
         "desc" : [
            "Sequence of Items where each Item includes the Attributes of a Series containing referenced Composite Object(s).",
            "One or more Items shall be included in this Sequence"
         ],
         "module" : "Key Object Document",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17.6-2",
            "table_C.17-3"
         ],
         "usage" : "M",
         "req" : "1",
         "name" : "Referenced Series Sequence"
      },
      "(0008,0096)" : {
         "name" : "Referring Physician Identification Sequence",
         "req" : "3",
         "desc" : [
            "Identification of the patient's referring physician.",
            "Only a single item is permitted in this Sequence."
         ],
         "usage" : "M",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,0006)" : {
         "module" : "SR Document Content",
         "usage" : "M",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "desc" : [
            "Indicates whether the pixel data are sent color-by-plane or color-by-pixel. Required if Samples per Pixel (0028,0002) has a value greater than 1. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.3.1.3"
               }
            },
            " for further explanation."
         ],
         "req" : "1C",
         "name" : "Planar Configuration"
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
         "usage" : "M",
         "entity" : "Document",
         "module" : "SOP Common",
         "name" : "Digital Signature Purpose Code Sequence",
         "req" : "3"
      },
      "(0008,0051)" : {
         "req" : "3",
         "name" : "Issuer of Accession Number Sequence",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "usage" : "M",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this Sequence."
         ]
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0088,0130)" : {
         "name" : "Storage Media File-Set ID",
         "req" : "3",
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the Composite Object (s) reside.",
         "mod_tables" : [
            "table_C.17.6-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "entity" : "Document",
         "usage" : "M",
         "module" : "Key Object Document"
      },
      "(0010,1100)" : {
         "req" : "3",
         "name" : "Referenced Patient Photo Sequence",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "entity" : "Patient",
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
         ]
      },
      "(0010,2160)" : {
         "req" : "3",
         "name" : "Ethnic Group",
         "desc" : "Ethnic group or race of the patient.",
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(0008,0033)" : {
         "desc" : "The time the document content creation started.",
         "mod_tables" : [
            "table_C.17.6-2"
         ],
         "usage" : "M",
         "entity" : "Document",
         "module" : "Key Object Document",
         "name" : "Content Time",
         "req" : "1"
      },
      "(0040,a730)[<0>](0070,0022)" : {
         "name" : "Graphic Data",
         "req" : "1",
         "desc" : [
            [
               "An ordered set of (x,y,z) triplets (in mm and may be negative) that define a region of interest in the patient-relative Reference Coordinate System defined by Referenced Frame of Reference UID (3006,0024). See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "glossentry_RCS"
                  }
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
         "entity" : "Document",
         "usage" : "M",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.9-1"
         ],
         "module" : "SR Document Content"
      },
      "(0010,0024)" : {
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "req" : "3",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "module" : "Patient"
      },
      "(0008,1090)" : {
         "entity" : "Equipment",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
         "desc" : "Manufacturer's model name of the equipment that produced the composite instances.",
         "name" : "Manufacturer's Model Name",
         "req" : "3"
      },
      "(0018,9004)" : {
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
                     "linkend" : "sect_C.8.13.2.1.1",
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
         "entity" : "Document",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Content Qualification",
         "req" : "3"
      },
      "(0010,1100)[<0>](0040,e022)[<1>](0088,0130)" : {
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "module" : "Patient",
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the referenced instance(s) reside.",
         "name" : "Storage Media File-Set ID",
         "req" : "2"
      },
      "(0040,a032)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.17-6"
         ],
         "entity" : "Document",
         "module" : "SR Document Content",
         "desc" : [
            "The date and time on which this Content Item was completed. For the purpose of recording measurements or logging events, completion time is defined as the time of data acquisition of the measurement, or the time of occurrence of the event.",
            "Required if the date and time are different from Content Date (0008,0023) and Content Time (0008,0033) or Observation DateTime (0040,A032) defined in higher items. May be present otherwise.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "content" : [
                        "When Content Items are copied into successor reports, Content Date (0008,0023) and Content Time (0008,0033) of the new report are likely to be different than the date and time of the original observation. Therefore this attribute may need to be included in any copied Content Items to satisfy the condition."
                     ],
                     "attrs" : {
                        "xml:id" : "para_33c43a57-e522-49b3-8e95-01f599a58842"
                     }
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "name" : "Observation DateTime",
         "req" : "1C"
      },
      "(0020,000d)" : {
         "name" : "Study Instance UID",
         "req" : "1",
         "desc" : "Unique identifier for the Study.",
         "usage" : "M",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study"
      },
      "(0040,a730)[<0>](0040,a121)" : {
         "desc" : [
            "This is the value of the Content Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "entity" : "Document",
         "usage" : "M",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5"
         ],
         "module" : "SR Document Content",
         "name" : "Date",
         "req" : "1C"
      },
      "(0040,a730)[<0>](0040,a301)" : {
         "name" : "Numeric Value Qualifier Code Sequence",
         "req" : "3",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.1-1"
         ],
         "entity" : "Document",
         "usage" : "M",
         "module" : "SR Document Content",
         "desc" : [
            "Qualification of Numeric Value in Measured Value Sequence, or reason for absence of Measured Value Sequence Item.",
            "Only a single Item is permitted in this Sequence."
         ]
      },
      "(0038,0014)" : {
         "req" : "3",
         "name" : "Issuer of Admission ID Sequence",
         "desc" : [
            "Identifier of the Assigning Authority that issued Admission ID (0038,0010).",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "Patient Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U"
      },
      "(0010,0024)[<0>](0040,0039)" : {
         "name" : "Assigning Jurisdiction Code Sequence",
         "req" : "3",
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
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient"
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Document",
         "module" : "SOP Common",
         "name" : "Context Group Version",
         "req" : "1"
      },
      "(0100,0420)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Document",
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : "The date and time when the SOP Instance Status (0100,0410) was set to AO.",
         "name" : "SOP Authorization DateTime",
         "req" : "3"
      },
      " (0010,0027) [<0>](0018,5100)" : {
         "req" : "3",
         "name" : "Patient Position",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "usage" : "M",
         "entity" : "Patient",
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
         ]
      },
      "(0010,0026)" : {
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "usage" : "M",
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
         "name" : "Source Patient Group Identification Sequence",
         "req" : "3"
      },
      "(0008,0051)[<0>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "req" : "1C",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "usage" : "M",
         "module" : "General Study"
      },
      "(0012,0081)" : {
         "name" : "Clinical Trial Protocol Ethics Committee Name",
         "req" : "1C",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "entity" : "Patient",
         "module" : "Clinical Trial Subject",
         "desc" : "Name of the Ethics Committee or Institutional Review Board (IRB) or Institutional Animal Care and Use Committees (IACUC) responsible for approval of the Clinical Trial or research. Required if Clinical Trial Protocol Ethics Committee Approval Number (0012,0082) is present."
      },
      "(0010,0026)[<0>](0010,0024)" : {
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "req" : "3"
      },
      "(0008,0005)" : {
         "req" : "1C",
         "name" : "Specific Character Set",
         "module" : "SOP Common",
         "entity" : "Document",
         "usage" : "M",
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
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.12.1.1.2"
                  },
                  "el" : "xref"
               },
               " for Defined Terms."
            ]
         ]
      },
      "(fffa,fffa)[<0>](0400,0005)" : {
         "req" : "1",
         "name" : "MAC ID Number",
         "module" : "SOP Common",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "desc" : "A number used to identify which MAC Parameters Sequence item was used in the calculation of this Digital Signature."
      },
      "(0012,0051)" : {
         "module" : "Clinical Trial Study",
         "usage" : "U",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "desc" : [
            "A description of a set of one or more studies that are grouped together to represent a clinical time point or submission in a clinical trial or research. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.2.3.1.1"
               }
            },
            "."
         ],
         "req" : "3",
         "name" : "Clinical Trial Time Point Description"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0035)" : {
         "name" : "Identifier Type Code",
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
                     ],
                     "attrs" : {
                        "xml:id" : "para_dc68c1a1-46db-4a55-bcba-f75b9d9a8ab4"
                     }
                  },
                  "\n              "
               ]
            }
         ],
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M",
         "module" : "Patient"
      },
      "(0010,4000)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "desc" : "User-defined additional information about the patient.",
         "name" : "Patient Comments",
         "req" : "3"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0062,000b)" : {
         "desc" : "Identifies the Segment Number to which the reference applies. Required if the Referenced SOP Instance is a Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present.",
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "module" : "Patient",
         "name" : "Referenced Segment Number",
         "req" : "1C"
      },
      "(0040,a370)[<0>](0040,2016)" : {
         "name" : "Placer Order Number/Imaging Service Request",
         "req" : "2",
         "usage" : "M",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17.6-2"
         ],
         "module" : "Key Object Document",
         "desc" : "The order number assigned to the Imaging Service Request by the party placing the order."
      },
      "(0008,0080)" : {
         "module" : "General Equipment",
         "usage" : "M",
         "entity" : "Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "desc" : "Institution where the equipment that produced the composite instances is located.",
         "req" : "3",
         "name" : "Institution Name"
      },
      "(0008,0110)[<0>](0008,010c)" : {
         "desc" : "The coding scheme UID identifier. Required if coding scheme is identified by an ISO 8824 object identifier compatible with the UI VR.",
         "module" : "SOP Common",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "1C",
         "name" : "Coding Scheme UID"
      },
      "(0010,0216)" : {
         "name" : "Strain Stock Sequence",
         "req" : "3",
         "desc" : [
            "Information identifying an animal within a strain stock.",
            "Only a single Item is permitted in this sequence."
         ],
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient"
      },
      "(0040,a375)" : {
         "module" : "Key Object Document",
         "usage" : "M",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17.6-2"
         ],
         "desc" : [
            "List of all Composite SOP Instances referenced in Content Sequence (0040,A730), including all presentation states, real world value maps and other accompanying composite instances that are referenced from the content items.",
            "One or more Items shall be included in this Sequence.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "In the context of the Key Object Selection, the current evidence is considered to be only the set of instances referenced within the Key Object Selection."
                     ],
                     "attrs" : {
                        "xml:id" : "para_3273b66c-22ac-4fb8-8a5d-27e7338ce0c5"
                     }
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "req" : "1",
         "name" : "Current Requested Procedure Evidence Sequence"
      },
      "(0008,1040)" : {
         "desc" : "Department in the institution where the equipment that produced the composite instances is located.",
         "usage" : "M",
         "entity" : "Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
         "name" : "Institutional Department Name",
         "req" : "3"
      },
      "(0010,2297)" : {
         "req" : "2C",
         "name" : "Responsible Person",
         "desc" : [
            "Name of person with medical or welfare decision making authority for the patient.",
            "Required if the patient is an animal. May be present otherwise."
         ],
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "entity" : "Patient"
      },
      "(0010,0035)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient",
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
         "name" : "Patient's Alternative Calendar",
         "req" : "1C"
      },
      "(0008,1062)[<0>](0040,1104)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "usage" : "M",
         "module" : "General Study",
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
                     ]
                  },
                  "\n              "
               ]
            }
         ],
         "name" : "Person's Telecom Information",
         "req" : "3"
      },
      "(0010,1100)[<0>](0040,e022)[<1>](0088,0140)" : {
         "req" : "1",
         "name" : "Storage Media File-Set UID",
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "desc" : "Uniquely identifies the Storage Media on which the referenced instance(s) reside."
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0008,1199)[<2>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "SR Document Content",
         "usage" : "M",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_10-11"
         ],
         "req" : "1",
         "name" : "Referenced SOP Instance UID"
      },
      "(0008,0051)[<0>](0040,0033)" : {
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
         "module" : "General Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "entity" : "Study",
         "req" : "1C",
         "name" : "Universal Entity ID Type"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,003a)" : {
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
         "name" : "Assigning Agency or Department Code Sequence",
         "req" : "3"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,0010)" : {
         "desc" : "Number of rows in the image.",
         "module" : "SR Document Content",
         "entity" : "Document",
         "usage" : "M",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "req" : "1",
         "name" : "Rows"
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
               "attrs" : {
                  "targetdoc" : "PS3.4",
                  "xrefstyle" : "select: labelnumber",
                  "targetptr" : "PS3.4"
               },
               "el" : "olink"
            },
            "."
         ],
         "usage" : "M",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "SOP Instance UID",
         "req" : "1"
      },
      " (0010,0027) [<0>](0010,0020)" : {
         "req" : "1",
         "name" : "Patient ID",
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "usage" : "M",
         "desc" : "Primary identifier for an individual subject."
      },
      "(0010,1100)[<0>](0040,e023)" : {
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "module" : "Patient",
         "desc" : [
            "Details for retrieving instances available via WADO-URI.",
            {
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
               ],
               "el" : "note"
            },
            "Required if DICOM Retrieval Sequence (0040,E021), DICOM Media Retrieval Sequence (0040,E022), WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "WADO Retrieval Sequence",
         "req" : "1C"
      },
      "(0018,1020)" : {
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
         "mod_tables" : [
            "table_C.7-8"
         ],
         "entity" : "Equipment",
         "usage" : "M",
         "module" : "General Equipment",
         "name" : "Software Versions",
         "req" : "3"
      },
      "(0010,0024)[<0>](0040,0035)" : {
         "name" : "Identifier Type Code",
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
                     "attrs" : {
                        "xml:id" : "para_dc68c1a1-46db-4a55-bcba-f75b9d9a8ab4"
                     },
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
         "entity" : "Patient",
         "usage" : "M",
         "module" : "Patient"
      },
      "(0040,a370)[<0>](0008,0051)[<1>](0040,0033)" : {
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
         "entity" : "Document",
         "usage" : "M",
         "mod_tables" : [
            "table_C.17.6-2",
            "table_10-17"
         ],
         "module" : "Key Object Document"
      },
      "(0040,a370)[<0>](0008,1110)[<1>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.17.6-2",
            "table_10-11"
         ],
         "usage" : "M",
         "entity" : "Document",
         "module" : "Key Object Document",
         "name" : "Referenced SOP Instance UID",
         "req" : "1"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1160)" : {
         "req" : "1C",
         "name" : "Referenced Frame Number",
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
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
      "(0020,0013)" : [
         {
            "desc" : "A number that identifies the Document.",
            "module" : "Key Object Document",
            "entity" : "Document",
            "mod_tables" : [
               "table_C.17.6-2"
            ],
            "usage" : "M",
            "req" : "1",
            "name" : "Instance Number"
         },
         {
            "req" : "3",
            "name" : "Instance Number",
            "desc" : "A number that identifies this Composite object instance.",
            "module" : "SOP Common",
            "entity" : "Document",
            "usage" : "M",
            "mod_tables" : [
               "table_C.12-1"
            ]
         }
      ],
      "(0040,a525)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0010)" : {
         "name" : "MAC Calculation Transfer Syntax UID",
         "req" : "1",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17.6-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M",
         "module" : "Key Object Document",
         "desc" : [
            "The Transfer Syntax UID used to encode the values of the Data Elements included in the MAC calculation. When computing the MAC, only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
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
                                 "content" : [
                                    "Certain Transfer Syntaxes, particularly those that are used with compressed data, allow the fragmentation of the pixel data to change. If such fragmentation changes, Digital Signatures generated with such Transfer Syntaxes could become invalid."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_d3b7f806-4134-47a2-bf65-131f44d9fa2a"
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
                                 "content" : [
                                    "This does not constrain the transfer syntax used to transmit the object."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_2a42563c-d7f6-4749-9a5a-b563109dea18"
                                 }
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
      "(0008,0096)[<0>](0040,1102)" : {
         "desc" : "Person's mailing address",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "entity" : "Study",
         "req" : "3",
         "name" : "Person's Address"
      },
      "(0038,0062)" : {
         "name" : "Service Episode Description",
         "req" : "3",
         "desc" : "Description of the type of service episode.",
         "usage" : "U",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study"
      },
      "(0008,0110)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Document",
         "usage" : "M",
         "desc" : [
            "Sequence of items that map values of Coding Scheme Designator (0008,0102) to an external coding system registration, or to a private or local coding scheme.",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "name" : "Coding Scheme Identification Sequence"
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0015)" : {
         "req" : "1",
         "name" : "MAC Algorithm",
         "module" : "Key Object Document",
         "mod_tables" : [
            "table_C.17.6-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "entity" : "Document",
         "usage" : "M",
         "desc" : [
            "The algorithm used in generating the MAC.",
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
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_07b64781-f4ca-4d53-9b0b-e3d8032bb048"
                     },
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
         ]
      },
      "(0040,a171)" : {
         "desc" : "Unique identifier for the observation Content Item (and its subsidiary Content Items, if any). The UID represents the semantic content of the observation; an encoding of the same observation with the same context into another representation (e.g., a CDA Entry) may use the same UID.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.17-6"
         ],
         "entity" : "Document",
         "module" : "SR Document Content",
         "name" : "Observation UID",
         "req" : "3"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.5-1",
            "table_C.18.3-1",
            "table_10-11"
         ],
         "usage" : "M",
         "module" : "SR Document Content",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0008,1110)" : {
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
         "module" : "General Study",
         "usage" : "M",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "3",
         "name" : "Referenced Study Sequence"
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0010)" : {
         "desc" : [
            "The Transfer Syntax UID used to encode the values of the Data Elements included in the MAC calculation. When computing the MAC, only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
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
                                 "attrs" : {
                                    "xml:id" : "para_d3b7f806-4134-47a2-bf65-131f44d9fa2a"
                                 },
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
                           "el" : "listitem",
                           "content" : [
                              "\n                        ",
                              {
                                 "content" : [
                                    "This does not constrain the transfer syntax used to transmit the object."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_2a42563c-d7f6-4749-9a5a-b563109dea18"
                                 },
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
         "usage" : "M",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17.6-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Key Object Document",
         "name" : "MAC Calculation Transfer Syntax UID",
         "req" : "1"
      },
      "(0010,1100)[<0>](0020,000d)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "desc" : [
            "Unique identifier for the Study.",
            "Required if Type of Instances (0040,E020) is DICOM"
         ],
         "req" : "1C",
         "name" : "Study Instance UID"
      },
      "(0010,2294)[<0>](0010,2295)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "desc" : "Identification number of an animal within the registry.",
         "req" : "1",
         "name" : "Breed Registration Number"
      },
      "(0010,1100)[<0>](0040,e024)[<1>](0040,e031)" : {
         "desc" : "Uniquely identifies a Community to which requests for the referenced instances can be directed.",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "entity" : "Patient",
         "req" : "3",
         "name" : "Home Community ID"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0039)" : {
         "name" : "Assigning Jurisdiction Code Sequence",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "module" : "Patient",
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
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "module" : "Patient",
         "name" : "Universal Entity ID",
         "req" : "1C"
      },
      "(0012,0021)" : {
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U",
         "module" : "Clinical Trial Subject",
         "desc" : [
            "The name of the clinical trial or research protocol. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.3.1.3"
               },
               "el" : "xref"
            },
            "."
         ],
         "name" : "Clinical Trial Protocol Name",
         "req" : "2"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0008,114b)[<2>](0008,1155)" : {
         "entity" : "Document",
         "usage" : "M",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_10-11"
         ],
         "module" : "SR Document Content",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "req" : "1"
      },
      "(0018,1000)" : {
         "module" : "General Equipment",
         "entity" : "Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "desc" : [
            "Manufacturer's serial number of the equipment that produced the composite instances.",
            {
               "el" : "note",
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
               ]
            }
         ],
         "req" : "3",
         "name" : "Device Serial Number"
      },
      "(0008,1120)" : {
         "req" : "3",
         "name" : "Referenced Patient Sequence",
         "desc" : [
            "A sequence that provides reference to a Patient SOP Class/Instance pair.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0018,1020)" : {
         "module" : "SOP Common",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "desc" : [
            "Manufacturer's designation of the software version of the equipment that contributed to the composite instance. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.5.1.1.3",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "req" : "3",
         "name" : "Software Versions"
      },
      "(0010,1100)[<0>](0040,e020)" : {
         "req" : "1",
         "name" : "Type of Instances",
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
         "module" : "Patient",
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ]
      },
      "(0400,0561)[<0>](0400,0550)" : {
         "name" : "Modified Attributes Sequence",
         "req" : "1",
         "desc" : [
            "Sequence that contains all the Attributes, with their previous values, that were modified or removed from the main data set.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "entity" : "Document",
         "module" : "SOP Common"
      },
      "(0040,a370)[<0>](0008,0051)[<1>](0040,0032)" : {
         "module" : "Key Object Document",
         "usage" : "M",
         "mod_tables" : [
            "table_C.17.6-2",
            "table_10-17"
         ],
         "entity" : "Document",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C",
         "name" : "Universal Entity ID"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0081)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "entity" : "Document",
         "module" : "SOP Common",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "name" : "Institution Address",
         "req" : "3"
      },
      "(0010,0030)" : {
         "name" : "Patient's Birth Date",
         "req" : "2",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "desc" : "Birth date of the patient."
      },
      "(0008,0110)[<0>](0008,0103)" : {
         "req" : "3",
         "name" : "Coding Scheme Version",
         "desc" : "The coding scheme version associated with the Coding Scheme Designator (0008,0102).",
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,1062)[<0>](0008,0080)" : {
         "name" : "Institution Name",
         "req" : "1C",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "usage" : "M",
         "module" : "General Study"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0040,e001)" : {
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "entity" : "Patient",
         "desc" : [
            "Instance Identifier of the encapsulated HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
            "Required if Type of Instances (0040,E020) is CDA."
         ],
         "req" : "1C",
         "name" : "HL7 Instance Identifier"
      },
      "(0008,001a)" : {
         "req" : "3",
         "name" : "Related General SOP Class UID",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Document",
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
         ]
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,2000)" : {
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_d69f5d22-89f7-4927-ba3e-806a769850dc"
                     },
                     "content" : [
                        "The profile applies only to Pixel Data (7FE0,0010) at the same level of the Data Set and not to any icons nested within sequences, which may or may not have their own ICC profile specified."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "usage" : "M",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "module" : "SR Document Content",
         "name" : "ICC Profile",
         "req" : "3"
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)" : {
         "req" : "3",
         "name" : "Referenced Digital Signature Sequence",
         "module" : "Key Object Document",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17.6-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M",
         "desc" : [
            "Sequence of references to Digital Signatures in the referenced SOP Instance.",
            "One or more Items are permitted in this Sequence.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "The Attributes in this Sequence can be used to detect if the referenced SOP Instance has been altered."
                     ],
                     "attrs" : {
                        "xml:id" : "para_1bb4c66e-0b5e-4f69-b0f2-4e353dc73212"
                     },
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ]
      },
      "(0020,9172)[<0>](0008,1160)" : {
         "desc" : [
            "Identifies the frame numbers within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "attrs" : {
                        "xml:id" : "para_68450e47-9448-4ac5-82e8-4015a854968a"
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
         "module" : "SOP Common",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "usage" : "M",
         "req" : "1C",
         "name" : "Referenced Frame Number"
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0307)" : {
         "module" : "SOP Common",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
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
                           "el" : "listitem",
                           "content" : [
                              "\n                      ",
                              {
                                 "attrs" : {
                                    "xml:id" : "para_62b4d252-a377-4a7b-9905-82f5437ccd6c"
                                 },
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
                                 "el" : "para"
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
            }
         ],
         "req" : "1",
         "name" : "Deidentification Action"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0008,114b)" : {
         "name" : "Referenced Real World Value Mapping Instance Sequence",
         "req" : "3",
         "desc" : [
            "Reference to a Real World Value Mapping SOP Class/SOP Instance pair.",
            "Only a single Item is permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1"
         ],
         "entity" : "Document",
         "usage" : "M",
         "module" : "SR Document Content"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,0102)" : {
         "req" : "1",
         "name" : "High Bit",
         "module" : "SR Document Content",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "usage" : "M",
         "entity" : "Document",
         "desc" : [
            "Most significant bit for pixel sample data. Each sample shall have the same high bit. High Bit (0028,0102) shall be one less than Bits Stored (0028,0101). See ",
            {
               "attrs" : {
                  "targetdoc" : "PS3.5",
                  "xrefstyle" : "select: labelnumber",
                  "targetptr" : "PS3.5"
               },
               "el" : "olink"
            },
            " for further explanation."
         ]
      },
      "(0008,0117)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Document",
         "usage" : "M",
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
         "name" : "Context UID",
         "req" : "3"
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0306)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "entity" : "Document",
         "desc" : [
            "List of Private Data Elements in block that may contain identifying\n                  information (are unsafe from identity leakage)..",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once."
         ],
         "req" : "1",
         "name" : "Identifying Private Elements"
      },
      "(0008,0020)" : {
         "module" : "General Study",
         "entity" : "Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "Date the Study started.",
         "req" : "2",
         "name" : "Study Date"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0040,a0b0)" : {
         "name" : "Referenced Waveform Channels",
         "req" : "1C",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.5-1"
         ],
         "entity" : "Document",
         "module" : "SR Document Content"
      },
      "(0008,1062)[<0>](0008,0082)" : {
         "name" : "Institution Code Sequence",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "module" : "General Study",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0008,1049)[<0>](0008,0082)" : {
         "entity" : "Study",
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
         "name" : "Institution Code Sequence",
         "req" : "1C"
      },
      "(0040,a370)[<0>](0040,0027)" : {
         "module" : "Key Object Document",
         "usage" : "M",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17.6-2"
         ],
         "desc" : [
            "Identifier of the Assigning Authority that issued the Filler Order Number.",
            "Only a single Item is permitted in this Sequence."
         ],
         "req" : "3",
         "name" : "Order Filler Identifier Sequence"
      },
      "(0008,1060)" : {
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "entity" : "Study",
         "desc" : "Names of the physician(s) reading the Study.",
         "req" : "3",
         "name" : "Name of Physician(s) Reading Study"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0032)" : {
         "module" : "Patient",
         "usage" : "M",
         "entity" : "Patient",
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
         ],
         "req" : "3",
         "name" : "Universal Entity ID"
      },
      "(0040,a730)" : {
         "name" : "Content Sequence",
         "req" : "1C",
         "desc" : [
            "A potentially recursively nested Sequence of Items that conveys content that is the Target of Relationships with the enclosing Source Content Item.",
            "One or more Items shall be included in this Sequence.",
            "Required if the enclosing Content Item has relationships.",
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
                                    "If this Attribute is not present then the enclosing Item is a leaf."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_36251a81-22f9-49c3-b2d1-98edaf74bc0f"
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
                                    "xml:id" : "para_07e0d7fe-7c2f-4043-b73e-5b5a5c63847e"
                                 },
                                 "content" : [
                                    "The order of Items within this Sequence is semantically significant for presentation."
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
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.17.3.2.4"
                  }
               },
               " for further explanation."
            ]
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.17-6"
         ],
         "entity" : "Document",
         "module" : "SR Document Content"
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0088,0140)" : {
         "desc" : "Uniquely identifies the Storage Media on which the Composite Object(s) reside.",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17.6-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M",
         "module" : "Key Object Document",
         "name" : "Storage Media File-Set UID",
         "req" : "3"
      },
      "(0010,1002)[<0>](0010,0024)" : {
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ]
      },
      "(0040,a375)[<0>](0008,1115)" : {
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17.6-2",
            "table_C.17-3"
         ],
         "usage" : "M",
         "module" : "Key Object Document",
         "desc" : [
            "Sequence of Items where each Item includes the Attributes of a Series containing referenced Composite Object(s).",
            "One or more Items shall be included in this Sequence"
         ],
         "name" : "Referenced Series Sequence",
         "req" : "1"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)" : {
         "name" : "Assigning Facility Sequence",
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
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "module" : "Patient"
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0008,1199)[<2>](0040,a170)" : {
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "One or more Items are permitted in this Sequence."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.17.6-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "entity" : "Document",
         "module" : "Key Object Document",
         "name" : "Purpose of Reference Code Sequence",
         "req" : "3"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "Patient",
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "req" : "1",
         "name" : "Referenced SOP Class UID"
      },
      "(0010,0024)[<0>](0040,003a)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
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
         ],
         "req" : "3",
         "name" : "Assigning Agency or Department Code Sequence"
      },
      "(0018,a001)[<0>](0008,1040)" : {
         "req" : "3",
         "name" : "Institutional Department Name",
         "desc" : "Department in the institution where the equipment that contributed to the composite instance is located.",
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,0300)[<0>](0008,0301)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Document",
         "desc" : "Odd group number within which the Private Data Element block is reserved.",
         "req" : "1",
         "name" : "Private Group Reference"
      },
      "(0028,0120)" : {
         "name" : "Pixel Padding Value",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "entity" : "Equipment",
         "usage" : "M",
         "module" : "General Equipment",
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
                                 "attrs" : {
                                    "xml:id" : "para_6f2fdee2-7dad-437a-8654-b37b23363d43"
                                 },
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
                                 "attrs" : {
                                    "xml:id" : "para_b999d6e3-1cd0-4d28-8dc1-b515149c6197"
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
                                 "content" : [
                                    "This Attribute does apply to RT Dose and Segmentation instances, since they include Pixel Data."
                                 ],
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
                           "content" : [
                              "\n                        ",
                              {
                                 "el" : "para",
                                 "content" : [
                                    "This Attribute does\n                          not apply when Float Pixel Data (7FE0,0008) or Double Float Pixel Data\n                          (7FE0,0009) are used instead of Pixel Data (7FE0,0010); Float Pixel\n                          Padding Value (0028,0122) or Double Float Pixel Padding Value\n                          (0028,0123), respectively, are used instead, and defined at the Image,\n                          not the Equipment, level."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_77a29ed0-edb8-45c2-a3d1-d07bc572e485"
                                 }
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
         ]
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,1103)" : {
         "desc" : [
            "Specifies the format of the Blue Palette Color Lookup Table Data (0028,1203). Required if Photometric Interpretation (0028,0004) has a value of PALETTE COLOR or Pixel Presentation (0008,9205) at the image level equals COLOR or MIXED. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.3.1.5"
               }
            },
            " for further explanation."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "entity" : "Document",
         "module" : "SR Document Content",
         "name" : "Blue Palette Color Lookup Table Descriptor",
         "req" : "1C"
      },
      "(0040,a730)[<0>](0040,a132)" : {
         "req" : "1C",
         "name" : "Referenced Sample Positions",
         "desc" : [
            "List of samples within a multiplex group specifying temporal points of the referenced data. Position of first sample is 1.",
            "Required if the Referenced SOP Instance is a Waveform and Referenced Time Offsets (0040,A138) and Referenced DateTime (0040,A13A) are not present.",
            "May be used only if Referenced Channels (0040,A0B0) refers to channels within a single multiplex group."
         ],
         "module" : "SR Document Content",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.7-1"
         ],
         "usage" : "M",
         "entity" : "Document"
      },
      "(0012,0082)" : {
         "name" : "Clinical Trial Protocol Ethics Committee Approval Number",
         "req" : "3",
         "desc" : "Approval number issued by committee described in Clinical Trial Protocol Ethics Committee Name (0012,0081).",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "entity" : "Patient",
         "module" : "Clinical Trial Subject"
      },
      "(0008,1111)[<0>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.17.6-1",
            "table_10-11"
         ],
         "entity" : "Series",
         "module" : "Key Object Document Series",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0040,a525)[<0>](0020,000d)" : {
         "desc" : "Unique identifier for the Study",
         "usage" : "M",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17.6-2",
            "table_C.17-3"
         ],
         "module" : "Key Object Document",
         "name" : "Study Instance UID",
         "req" : "1"
      },
      "(0008,0023)" : {
         "req" : "1",
         "name" : "Content Date",
         "module" : "Key Object Document",
         "entity" : "Document",
         "usage" : "M",
         "mod_tables" : [
            "table_C.17.6-2"
         ],
         "desc" : "The date the document content creation started."
      },
      "(0008,1062)[<0>](0040,1102)" : {
         "name" : "Person's Address",
         "req" : "3",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "module" : "General Study",
         "desc" : "Person's mailing address"
      },
      "(0012,0072)" : {
         "module" : "Clinical Trial Series",
         "usage" : "U",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5b"
         ],
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
         "req" : "3",
         "name" : "Clinical Trial Series Description"
      },
      "(0018,a001)[<0>](0008,1090)" : {
         "desc" : "Manufacturer's model name of the equipment that contributed to the composite instance.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Document",
         "module" : "SOP Common",
         "name" : "Manufacturer's Model Name",
         "req" : "3"
      },
      "(0010,2202)" : {
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
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "name" : "Patient Species Code Sequence",
         "req" : "1C"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,1101)" : {
         "name" : "Red Palette Color Lookup Table Descriptor",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "entity" : "Document",
         "module" : "SR Document Content",
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
         ]
      },
      "(0008,103e)" : {
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.17.6-1"
         ],
         "module" : "Key Object Document Series",
         "desc" : "Description of the Series",
         "name" : "Series Description",
         "req" : "3"
      },
      "(0008,1049)[<0>](0040,1101)" : {
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "usage" : "M",
         "req" : "1",
         "name" : "Person Identification Code Sequence"
      },
      "(0010,0020)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "desc" : [
            "Primary identifier for the patient.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "In the case of imaging a group of small animals simultaneously, the single value of this identifier corresponds to the identification of the entire group. See also ",
                        {
                           "el" : "xref",
                           "attrs" : {
                              "xrefstyle" : "select: label",
                              "linkend" : "sect_C.7.1.4.1.1"
                           }
                        },
                        "."
                     ],
                     "attrs" : {
                        "xml:id" : "para_bd933dd8-c95a-459e-a9cd-8b9c90650099"
                     },
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "req" : "2",
         "name" : "Patient ID"
      },
      "(0008,0096)[<0>](0040,1104)" : {
         "req" : "3",
         "name" : "Person's Telecom Information",
         "module" : "General Study",
         "usage" : "M",
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
      "(0040,a730)[<0>](0040,a043)" : {
         "name" : "Concept Name Code Sequence",
         "req" : "1C",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5"
         ],
         "usage" : "M",
         "module" : "SR Document Content",
         "desc" : [
            "Code describing the concept represented by this Content Item. Also conveys the value of Document Title and section headings in documents.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is TEXT, NUM, CODE, DATETIME, DATE, TIME, UIDREF or PNAME.",
            "Required if Value Type (0040,A040) is CONTAINER and a heading is present, or this is the Root Content Item.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "That is, containers without headings do not require Concept Name Code Sequence"
                     ],
                     "attrs" : {
                        "xml:id" : "para_492e892b-e54e-4e09-bee8-da77ef297bff"
                     },
                     "el" : "para"
                  },
                  "\n                "
               ],
               "el" : "note"
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
         ]
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)" : {
         "req" : "3",
         "name" : "Referenced SOP Instance MAC Sequence",
         "module" : "Key Object Document",
         "usage" : "M",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17.6-2",
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
                     "attrs" : {
                        "xml:id" : "para_85131baf-ebaa-41ca-b044-07c75698df97"
                     },
                     "content" : [
                        "This Attribute may be used in place of Referenced Digital Signature Sequence (0400,0402), particularly if the SOP Instance does not have appropriate Digital Signatures that can be referenced."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ]
      },
      "(0010,1100)[<0>](0040,e025)" : {
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "module" : "Patient",
         "desc" : [
            "Details for retrieving instances via WADO-RS.",
            {
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
               ],
               "el" : "note"
            },
            "Required if DICOM Retrieval Sequence (0040,E021), DICOM Media Retrieval Sequence (0040,E022), WADO Retrieval Sequence (0040,E023) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "WADO-RS Retrieval Sequence",
         "req" : "1C"
      },
      "(0008,1049)[<0>](0040,1103)" : {
         "usage" : "M",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "desc" : "Person's telephone number(s)",
         "name" : "Person's Telephone Numbers",
         "req" : "3"
      },
      "(0040,a370)[<0>](0040,0026)[<1>](0040,0032)" : {
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "usage" : "M",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17.6-2",
            "table_10-17"
         ],
         "module" : "Key Object Document",
         "name" : "Universal Entity ID",
         "req" : "1C"
      },
      "(0400,0500)[<0>](0400,0510)" : {
         "req" : "1",
         "name" : "Encrypted Content Transfer Syntax UID",
         "desc" : "Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
         "module" : "SOP Common",
         "entity" : "Document",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Document",
         "module" : "SOP Common",
         "name" : "Time of Last Calibration",
         "req" : "3"
      },
      " (0010,0027) [<0>](0010,0024)" : {
         "req" : "3",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ]
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0020)" : {
         "req" : "1",
         "name" : "Data Elements Signed",
         "module" : "Key Object Document",
         "usage" : "M",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17.6-2",
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
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1102)" : {
         "req" : "3",
         "name" : "Person's Address",
         "desc" : "Person's mailing address",
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ]
      },
      "(0018,a001)[<0>](0018,1050)" : {
         "entity" : "Document",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "name" : "Spatial Resolution",
         "req" : "3"
      },
      "(0008,010f)" : {
         "req" : "1",
         "name" : "Context Identifier",
         "desc" : [
            "The identifier of the Context Group.",
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
         "module" : "SOP Common",
         "entity" : "Document",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0010,0218)" : {
         "req" : "3",
         "name" : "Strain Additional Information",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "entity" : "Patient",
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
         ]
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,1201)" : {
         "name" : "Red Palette Color Lookup Table Data",
         "req" : "1C",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "entity" : "Document",
         "module" : "SR Document Content"
      },
      "(0012,0030)" : {
         "req" : "2",
         "name" : "Clinical Trial Site ID",
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U",
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
      "(0038,0060)" : {
         "desc" : "Identifier of the Service Episode as assigned by the healthcare provider",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "entity" : "Study",
         "module" : "Patient Study",
         "name" : "Service Episode ID",
         "req" : "3"
      },
      "(0010,1000)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "entity" : "Patient",
         "desc" : "Other identification numbers or codes used to identify the patient.",
         "req" : "3",
         "name" : "Other Patient IDs"
      },
      "(0008,009d)[<0>](0008,0081)" : {
         "name" : "Institution Address",
         "req" : "3",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "entity" : "Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study"
      },
      "(0020,0011)" : {
         "req" : "1",
         "name" : "Series Number",
         "desc" : [
            "A number that identifies the Series.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_6c46a656-cc77-48f7-a0b7-76786fce24b3"
                     },
                     "content" : [
                        "No specific semantics are specified."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "module" : "Key Object Document Series",
         "mod_tables" : [
            "table_C.17.6-1"
         ],
         "entity" : "Series",
         "usage" : "M"
      },
      "(0010,0010)" : {
         "desc" : "Patient's full name.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Patient's Name",
         "req" : "2"
      },
      "(0100,0424)" : {
         "desc" : "Any comments associated with the setting of the SOP Instance Status (0100,0410) to AO.",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Document",
         "req" : "3",
         "name" : "SOP Authorization Comment"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0008,1199)[<2>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_10-11"
         ],
         "module" : "SR Document Content",
         "name" : "Referenced SOP Class UID",
         "req" : "1"
      },
      "(0020,9172)" : {
         "desc" : [
            "The set of images or other composite SOP Instances that were converted to this instance.",
            "If this instance was converted from a specific frame in the source instance, the reference shall include the Frame Number.",
            "One or more Items shall be included in this Sequence.",
            "Required if this instance was created by conversion, and Conversion Source Attributes Sequence (0020,9172) is not present in an Item of Shared Functional Groups Sequence (5200,9229) or Per-Frame Functional Groups Sequence (5200,9230)."
         ],
         "module" : "SOP Common",
         "entity" : "Document",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1C",
         "name" : "Conversion Source Attributes Sequence"
      },
      "(0008,001b)" : {
         "desc" : [
            "The SOP Class in which the Instance was originally encoded that has been replaced during a fall-back conversion to the current Related General SOP Class. See ",
            {
               "attrs" : {
                  "targetptr" : "PS3.4",
                  "targetdoc" : "PS3.4",
                  "xrefstyle" : "select: labelnumber"
               },
               "el" : "olink"
            },
            "."
         ],
         "module" : "SOP Common",
         "entity" : "Document",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "name" : "Original Specialized SOP Class UID"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,0011)" : {
         "entity" : "Document",
         "usage" : "M",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "module" : "SR Document Content",
         "desc" : "Number of columns in the image",
         "name" : "Columns",
         "req" : "1"
      },
      "(0038,0014)[<0>](0040,0033)" : {
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "entity" : "Study",
         "usage" : "U",
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
         "name" : "Universal Entity ID Type"
      },
      "(0010,2292)" : {
         "name" : "Patient Breed Description",
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
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "module" : "Patient"
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0404)" : {
         "req" : "1",
         "name" : "MAC",
         "desc" : [
            "The MAC generated as described in ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.12.1.1.3",
                  "xrefstyle" : "select: label"
               }
            },
            ", but unencrypted and without inclusion of fields from the Digital Signatures Sequence. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.12.1.1.3.1.2"
               },
               "el" : "xref"
            },
            "."
         ],
         "module" : "Key Object Document",
         "usage" : "M",
         "mod_tables" : [
            "table_C.17.6-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "entity" : "Document"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,0002)" : {
         "module" : "SR Document Content",
         "usage" : "M",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "desc" : [
            "Number of samples (planes) in this image. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.6.3.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "req" : "1",
         "name" : "Samples per Pixel"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,0103)" : {
         "req" : "1",
         "name" : "Pixel Representation",
         "module" : "SR Document Content",
         "usage" : "M",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "desc" : [
            "Data representation of the pixel samples. Each sample shall have the same pixel representation.",
            {
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
               ],
               "type" : "variablelist"
            }
         ]
      },
      "(0040,a370)[<0>](0008,0050)" : {
         "name" : "Accession Number",
         "req" : "2",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17.6-2"
         ],
         "usage" : "M",
         "module" : "Key Object Document",
         "desc" : "A departmental IS generated number that identifies the order for the Study."
      },
      "(0012,0060)" : {
         "entity" : "Series",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-5b"
         ],
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
         "name" : "Clinical Trial Coordinating Center Name",
         "req" : "2"
      },
      "(0008,1110)[<0>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "entity" : "Study",
         "module" : "General Study",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0010,1100)[<0>](0040,e022)" : {
         "req" : "1C",
         "name" : "DICOM Media Retrieval Sequence",
         "module" : "Patient",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "entity" : "Patient",
         "req" : "3",
         "name" : "Issuer of Patient ID"
      },
      "(0010,0026)[<0>](0010,0020)" : {
         "desc" : "Primary identifier for the group of subjects.",
         "module" : "Patient",
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "req" : "1",
         "name" : "Patient ID"
      },
      "(0008,0081)" : {
         "desc" : "Mailing address of the institution where the equipment that produced the composite instances is located.",
         "entity" : "Equipment",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
         "name" : "Institution Address",
         "req" : "3"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0039)" : {
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "module" : "Patient",
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
         ],
         "name" : "Assigning Jurisdiction Code Sequence",
         "req" : "3"
      },
      "(0010,1100)[<0>](0040,e024)[<1>](0040,e030)" : {
         "req" : "1",
         "name" : "Repository Unique ID",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "entity" : "Patient",
         "desc" : "Uniquely identifies a Repository from which the referenced instances can be retrieved."
      },
      "(0038,0064)[<0>](0040,0033)" : {
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
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "entity" : "Study",
         "usage" : "U",
         "req" : "1C",
         "name" : "Universal Entity ID Type"
      },
      "(0018,a001)[<0>](0008,1010)" : {
         "name" : "Station Name",
         "req" : "3",
         "usage" : "M",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : "User defined name identifying the machine that contributed to the composite instance."
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,0034)" : {
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
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "entity" : "Document",
         "usage" : "M",
         "module" : "SR Document Content",
         "name" : "Pixel Aspect Ratio",
         "req" : "1C"
      },
      "(0018,a001)[<0>](0018,1000)" : {
         "name" : "Device Serial Number",
         "req" : "3",
         "desc" : "Manufacturer's serial number of the equipment that contributed to the composite instance.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Document",
         "module" : "SOP Common"
      },
      "(0012,0063)" : {
         "req" : "1C",
         "name" : "De-identification Method",
         "desc" : [
            "A description or label of the mechanism or method use to remove the patient's identity. May be multi-valued if successive de-identification steps have been performed.",
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
                                 "content" : [
                                    "This may be used to describe the extent or thoroughness of the de-identification, for example whether or not the de-identification is for a \"Limited Data Set\" (as per HIPAA Privacy Rule)."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_1b4a5ea4-66da-478b-901c-5f7d6b806d29"
                                 },
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
                                       "attrs" : {
                                          "targetptr" : "DCM_109104",
                                          "targetdoc" : "PS3.16"
                                       },
                                       "content" : [
                                          "(109104, DCM, \"De-identifying Equipment\")"
                                       ],
                                       "el" : "olink"
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
               ]
            },
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method Code Sequence (0012,0064) is not present. May be present otherwise."
         ],
         "module" : "Patient",
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0008,009d)" : {
         "desc" : [
            "Identification of the consulting physician(s).",
            "One or more Items shall be included in this Sequence. If more than one Item, the number and order shall correspond to the value of Consulting Physician's Name (0008,009C), if present."
         ],
         "module" : "General Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "req" : "3",
         "name" : "Consulting Physician Identification Sequence"
      },
      "(0008,0110)[<0>](0008,0114)" : {
         "desc" : "The coding scheme identifier as defined in an external registry. Required if coding scheme is registered and Coding Scheme UID (0008,010C) is not present.",
         "module" : "SOP Common",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "2C",
         "name" : "Coding Scheme External ID"
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17.6-2",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "usage" : "M",
         "module" : "Key Object Document",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0008,009d)[<0>](0040,1102)" : {
         "desc" : "Person's mailing address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "usage" : "M",
         "module" : "General Study",
         "name" : "Person's Address",
         "req" : "3"
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0008,1190)" : {
         "req" : "3",
         "name" : "Retrieve URL",
         "module" : "Key Object Document",
         "mod_tables" : [
            "table_C.17.6-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "entity" : "Document",
         "usage" : "M",
         "desc" : "URL specifying the location of the referenced instance(s)."
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0008,1190)" : {
         "module" : "Key Object Document",
         "usage" : "M",
         "mod_tables" : [
            "table_C.17.6-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "entity" : "Document",
         "desc" : "URL specifying the location of the referenced instance(s).",
         "req" : "3",
         "name" : "Retrieve URL"
      },
      "(0010,0034)" : {
         "req" : "3",
         "name" : "Patient's Death Date in Alternative Calendar",
         "desc" : [
            "Date of death of the named patient in the Alternative Calendar (0010,0035).",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "No format is specified for alternative calendar dates so none should be assumed."
                     ],
                     "attrs" : {
                        "xml:id" : "para_9f9d00e7-4c3c-4ecd-9b0f-c6dc916409e9"
                     }
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "entity" : "Patient"
      },
      "(0040,a730)[<0>](0040,a010)" : {
         "req" : "1",
         "name" : "Relationship Type",
         "module" : "SR Document Content",
         "usage" : "M",
         "mod_tables" : [
            "table_C.17-6"
         ],
         "entity" : "Document",
         "desc" : [
            "The type of relationship between the (enclosing) Source Content Item and the Target Content Item.",
            "IODs specify additional constraints on Relationships (including lists of Enumerated Values).",
            {
               "type" : "variablelist",
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
               "title" : "Enumerated Values:"
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
         ]
      },
      "(0012,0064)" : {
         "name" : "De-identification Method Code Sequence",
         "req" : "1C",
         "desc" : [
            "A code describing the mechanism or method use to remove the patient's identity.",
            "One or more Items shall be included in this Sequence. Multiple items are used if successive de-identification steps have been performed or to describe options of a defined profile.",
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method (0012,0063) is not present. May be present otherwise."
         ],
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient"
      },
      "(0008,0300)[<0>](0008,0302)" : {
         "name" : "Private Creator Reference",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Document",
         "usage" : "M",
         "module" : "SOP Common"
      },
      " (0010,0027) [<0>](0010,0021)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "desc" : [
            "Identifier of the Assigning Authority (system, organization, agency, or department) that issued the Patient ID.",
            {
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
               ],
               "el" : "note"
            }
         ],
         "req" : "3",
         "name" : "Issuer of Patient ID"
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0020)" : {
         "usage" : "M",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17.6-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Key Object Document",
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
         "name" : "Data Elements Signed",
         "req" : "1"
      },
      "(0020,9172)[<0>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "entity" : "Document",
         "req" : "1",
         "name" : "Referenced SOP Class UID"
      },
      "(0032,1034)" : {
         "name" : "Requesting Service Code Sequence",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "module" : "General Study",
         "desc" : [
            "Institutional department where the request initiated.",
            "Only a single item is permitted in this Sequence."
         ]
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0015)" : {
         "name" : "MAC Algorithm",
         "req" : "1",
         "desc" : [
            "The algorithm used in generating the MAC.",
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
                  "\n                    ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_07b64781-f4ca-4d53-9b0b-e3d8032bb048"
                     },
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
                  "\n                  "
               ]
            }
         ],
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17.6-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M",
         "module" : "Key Object Document"
      },
      "(0010,1100)[<0>](0040,e025)[<1>](0008,1190)" : {
         "name" : "Retrieve URL",
         "req" : "1",
         "desc" : "URL specifying the location of the referenced instance(s).",
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "module" : "Patient"
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Document",
         "usage" : "M",
         "mod_tables" : [
            "table_C.17.6-2",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "module" : "Key Object Document",
         "name" : "Referenced SOP Instance UID",
         "req" : "1"
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0404)" : {
         "req" : "1",
         "name" : "MAC",
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
               "attrs" : {
                  "linkend" : "sect_C.12.1.1.3.1.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "module" : "Key Object Document",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17.6-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M"
      },
      "(0008,1062)[<0>](0040,1101)" : {
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
         "usage" : "M",
         "module" : "General Study",
         "name" : "Person Identification Code Sequence",
         "req" : "1"
      },
      "(0012,0083)[<0>](0012,0084)" : {
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
         "usage" : "U",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "module" : "Clinical Trial Study",
         "name" : "Distribution Type",
         "req" : "1C"
      },
      "(0010,2294)[<0>](0010,2296)" : {
         "desc" : [
            "Identification of the organization with which an animal is registered.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "Patient",
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "1",
         "name" : "Breed Registry Code Sequence"
      },
      "(0040,a370)[<0>](0008,1110)" : {
         "name" : "Referenced Study Sequence",
         "req" : "2",
         "usage" : "M",
         "mod_tables" : [
            "table_C.17.6-2"
         ],
         "entity" : "Document",
         "module" : "Key Object Document",
         "desc" : [
            "Uniquely identifies the Study SOP Instance.",
            "Zero or one Item shall be included in this Sequence.",
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
         ]
      },
      "(0008,1049)[<0>](0040,1102)" : {
         "module" : "General Study",
         "usage" : "M",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Person's mailing address",
         "req" : "3",
         "name" : "Person's Address"
      },
      "(0018,1200)" : {
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "entity" : "Equipment",
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
         "req" : "3",
         "name" : "Date of Last Calibration"
      },
      "(0010,1002)[<0>](0010,0020)" : {
         "req" : "1",
         "name" : "Patient ID",
         "desc" : [
            "An identifier for the patient.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "In the case of imaging a group of small animals simultaneously, the single value of this identifier corresponds to the identification of the entire group. See also ",
                        {
                           "el" : "xref",
                           "attrs" : {
                              "xrefstyle" : "select: label",
                              "linkend" : "sect_C.7.1.4.1.1"
                           }
                        },
                        "."
                     ],
                     "attrs" : {
                        "xml:id" : "para_f0c2cfdd-2ad9-4f36-9f8d-a8723d825eae"
                     }
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0020,9172)[<0>](0008,1155)" : {
         "entity" : "Document",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "module" : "SOP Common",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "req" : "1"
      },
      "(0008,0021)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.17.6-1"
         ],
         "usage" : "M",
         "module" : "Key Object Document Series",
         "desc" : "Date the Series started.",
         "name" : "Series Date",
         "req" : "3"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "module" : "Patient"
      },
      "(0400,0561)[<0>](0400,0564)" : {
         "req" : "2",
         "name" : "Source of Previous Values",
         "desc" : "The source that provided the SOP Instance prior to the removal or replacement of the values. For example, this might be the Institution from which imported SOP Instances were received.",
         "module" : "SOP Common",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0040,a730)[<0>](0040,a300)" : {
         "module" : "SR Document Content",
         "usage" : "M",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.1-1"
         ],
         "entity" : "Document",
         "desc" : [
            "This is the value of the Content Item.",
            "Shall consist of a Sequence of Items conveying the measured value(s), which represent integers or real numbers and units of measurement.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "req" : "2",
         "name" : "Measured Value Sequence"
      },
      "(0040,a370)[<0>](0040,2017)" : {
         "name" : "Filler Order Number/Imaging Service Request",
         "req" : "2",
         "desc" : "The order number assigned to the Imaging Service Request by the party filling the order.",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17.6-2"
         ],
         "usage" : "M",
         "module" : "Key Object Document"
      },
      "(0040,a730)[<0>](0070,0023)" : {
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
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.9-1"
         ],
         "usage" : "M",
         "module" : "SR Document Content",
         "name" : "Graphic Type",
         "req" : "1"
      },
      "(0008,1032)" : {
         "name" : "Procedure Code Sequence",
         "req" : "3",
         "desc" : [
            "A Sequence that conveys the type of procedure performed.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study"
      },
      "(0040,a370)[<0>](0008,1110)[<1>](0008,1150)" : {
         "mod_tables" : [
            "table_C.17.6-2",
            "table_10-11"
         ],
         "entity" : "Document",
         "usage" : "M",
         "module" : "Key Object Document",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "req" : "1"
      },
      "(0008,0096)[<0>](0008,0081)" : {
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "usage" : "M",
         "module" : "General Study",
         "name" : "Institution Address",
         "req" : "3"
      },
      "(0008,0016)" : {
         "module" : "SOP Common",
         "entity" : "Document",
         "usage" : "M",
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
               "el" : "olink",
               "attrs" : {
                  "targetptr" : "PS3.4",
                  "targetdoc" : "PS3.4",
                  "xrefstyle" : "select: labelnumber"
               }
            },
            "."
         ],
         "req" : "1",
         "name" : "SOP Class UID"
      },
      "(0010,0021)" : {
         "name" : "Issuer of Patient ID",
         "req" : "3",
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
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient"
      },
      "(0008,0090)" : {
         "req" : "2",
         "name" : "Referring Physician's Name",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "entity" : "Study",
         "desc" : "Name of the patient's referring physician"
      },
      "(0040,a370)[<0>](0040,0027)[<1>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
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
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17.6-2",
            "table_10-17"
         ],
         "usage" : "M",
         "module" : "Key Object Document"
      },
      "(0010,0024)[<0>](0040,0036)" : {
         "name" : "Assigning Facility Sequence",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "module" : "Patient"
      },
      "(0008,0096)[<0>](0040,1101)" : {
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "General Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "req" : "1",
         "name" : "Person Identification Code Sequence"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0008,1150)" : {
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "SR Document Content",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.5-1",
            "table_C.18.3-1",
            "table_10-11"
         ],
         "usage" : "M",
         "entity" : "Document"
      },
      "(0040,a730)[<0>](0040,a300)[<1>](0040,a30a)" : {
         "desc" : [
            "Numeric measurement value.",
            "Only a single value shall be present."
         ],
         "module" : "SR Document Content",
         "usage" : "M",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.1-1"
         ],
         "req" : "1",
         "name" : "Numeric Value"
      },
      "(0010,2201)" : {
         "name" : "Patient Species Description",
         "req" : "1C",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
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
            "Required if the patient is an animal and if Patient Species Code Sequence (0010,2202) is not present. May be present otherwise."
         ]
      },
      "(0008,0124)" : {
         "module" : "SOP Common",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "desc" : [
            "Sequence of items that map values of Mapping Resource (0008,0105) to an external, private or local Mapping Resource.",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "name" : "Mapping Resource Identification Sequence"
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0100)" : {
         "desc" : "The Unique Identifier of a Digital Signature held in the referenced SOP Instance.",
         "entity" : "Document",
         "usage" : "M",
         "mod_tables" : [
            "table_C.17.6-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Key Object Document",
         "name" : "Digital Signature UID",
         "req" : "1"
      },
      "(0010,2294)" : {
         "name" : "Breed Registration Sequence",
         "req" : "2C",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "module" : "Patient",
         "desc" : [
            "Information identifying an animal within a breed registry.",
            "Zero or more Items shall be included in this Sequence.",
            "Required if the patient is an animal."
         ]
      },
      "(0008,0014)" : {
         "name" : "Instance Creator UID",
         "req" : "3",
         "desc" : "Uniquely identifies device that created the SOP Instance.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Document",
         "module" : "SOP Common"
      },
      "(0010,0033)" : {
         "name" : "Patient's Birth Date in Alternative Calendar",
         "req" : "3",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "module" : "Patient",
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
         ]
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)" : {
         "desc" : [
            "Sequence of references to Digital Signatures in the referenced SOP Instance.",
            "One or more Items are permitted in this Sequence.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "The Attributes in this Sequence can be used to detect if the referenced SOP Instance has been altered."
                     ],
                     "attrs" : {
                        "xml:id" : "para_1bb4c66e-0b5e-4f69-b0f2-4e353dc73212"
                     }
                  },
                  "\n                  "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.17.6-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M",
         "entity" : "Document",
         "module" : "Key Object Document",
         "name" : "Referenced Digital Signature Sequence",
         "req" : "3"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0033)" : {
         "desc" : [
            "Standard defining the format of the Universal Entity ID (0040,0032). Required if Universal Entity ID (0040,0032) is present.",
            {
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
         "entity" : "Patient",
         "req" : "1C",
         "name" : "Universal Entity ID Type"
      },
      "(0018,a001)[<0>](0008,0080)" : {
         "name" : "Institution Name",
         "req" : "3",
         "desc" : "Institution where the equipment that contributed to the composite instance is located.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Document",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0008,0123)" : {
         "desc" : [
            "Sequence of items that map values of Context Identifier (0008,010F) to an external, private or local Context Group.",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "SOP Common",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Context Group Identification Sequence"
      },
      "(0010,0024)[<0>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "entity" : "Patient",
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
                     "content" : [
                        "Equivalent to HL7 v2 CX component 4 subcomponent 2 (Universal ID)."
                     ],
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ]
      },
      "(0040,a390)[<0>](0040,e010)" : {
         "name" : "Retrieve URI",
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
                     "attrs" : {
                        "xml:id" : "para_398d64f0-0a7e-4cfe-b480-b482ee2cb7a7"
                     },
                     "el" : "para"
                  },
                  "\n"
               ]
            }
         ],
         "usage" : "M",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "req" : "1C",
         "name" : "Universal Entity ID",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise."
      },
      "(0040,a730)[<0>](0040,a168)" : {
         "name" : "Concept Code Sequence",
         "req" : "1",
         "entity" : "Document",
         "usage" : "M",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.2-1"
         ],
         "module" : "SR Document Content",
         "desc" : [
            "This is the value of the Content Item.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0010,2203)" : {
         "name" : "Patient's Sex Neutered",
         "req" : "2C",
         "entity" : "Study",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
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
         ]
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0120)" : {
         "req" : "1",
         "name" : "Signature",
         "module" : "Key Object Document",
         "entity" : "Document",
         "usage" : "M",
         "mod_tables" : [
            "table_C.17.6-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "The Signature Value identified by the Digital Signature UID within the Referenced SOP Instance UID."
      },
      "(0040,a730)[<0>](0048,0301)" : {
         "req" : "1C",
         "name" : "Pixel Origin Interpretation",
         "module" : "SR Document Content",
         "entity" : "Document",
         "usage" : "M",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.6-1"
         ],
         "desc" : [
            [
               "For a referenced multi-frame image, specifies whether the Graphic Data (0070,0022) values are to be interpreted relative to the individual frame pixel origins, or relative to the Total Pixel Matrix origin (see ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.12.4.1.4",
                     "xrefstyle" : "select: label"
                  }
               },
               ")."
            ],
            "Required if the value of Referenced SOP Class UID (0008,1150) of the referenced image is 1.2.840.10008.5.1.4.1.1.77.1.6 (VL Whole Slide Microscopy Image). May be present otherwise.",
            {
               "title" : "Enumerated Values:",
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
               "type" : "variablelist"
            },
            "If not present, Graphic Data values are defined relative to the frame pixel origin."
         ]
      },
      "(0008,1062)" : {
         "req" : "3",
         "name" : "Physician(s) Reading Study Identification Sequence",
         "desc" : "Identification of the physician(s) reading the Study. One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Name of Physician(s) Reading Study (0008,1060), if present.",
         "module" : "General Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M"
      },
      "(0008,0110)[<0>](0008,0115)" : {
         "desc" : "The coding scheme full common name",
         "usage" : "M",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Coding Scheme Name",
         "req" : "3"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,0100)" : {
         "req" : "1",
         "name" : "Bits Allocated",
         "desc" : [
            "Number of bits allocated for each pixel sample. Each sample shall have the same number of bits allocated. Bits Allocated (0028,0100) shall be either 1, or a multiple of 8. See ",
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
         "module" : "SR Document Content",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "entity" : "Document",
         "usage" : "M"
      },
      "(0008,0201)" : {
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
                     "content" : [
                        "\n                    ",
                        {
                           "content" : [
                              "\n                      ",
                              {
                                 "attrs" : {
                                    "xml:id" : "para_526f07aa-0b79-4c2d-8362-049aceaf5696"
                                 },
                                 "content" : [
                                    "This encoding is the same as described in ",
                                    {
                                       "el" : "olink",
                                       "attrs" : {
                                          "targetptr" : "PS3.5",
                                          "targetdoc" : "PS3.5",
                                          "xrefstyle" : "select: labelnumber"
                                       }
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
                                 "attrs" : {
                                    "xml:id" : "para_155b097e-395f-4748-981c-0255b00fe9a8"
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
                                 "attrs" : {
                                    "xml:id" : "para_1ab95f54-00ed-4128-a3f9-96f3f05669d0"
                                 },
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
                                 "attrs" : {
                                    "xml:id" : "para_6500ab52-60e5-4f8a-a3e5-fcedc8ddc8fc"
                                 },
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
                     "attrs" : {
                        "numeration" : "arabic"
                     }
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
                     "el" : "para",
                     "content" : [
                        "UTC = 5.00 a.m."
                     ],
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
         "entity" : "Document",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Timezone Offset From UTC",
         "req" : "3"
      },
      "(0008,009c)" : {
         "module" : "General Study",
         "entity" : "Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "Consulting physician(s) for this patient visit.",
         "req" : "3",
         "name" : "Consulting Physician's Name"
      },
      "(0018,a001)[<0>](0008,0070)" : {
         "desc" : "Manufacturer of the equipment that contributed to the composite instance.",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Document",
         "req" : "1",
         "name" : "Manufacturer"
      },
      "(0010,1002)" : {
         "name" : "Other Patient IDs Sequence",
         "req" : "3",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "module" : "Patient",
         "desc" : [
            "A sequence of identification numbers or codes used to identify the patient, which may or may not be human readable, and may or may not have been obtained from an implanted or attached device such as an RFID or barcode.",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0010,2180)" : {
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "module" : "Patient Study",
         "desc" : "Occupation of the Patient.",
         "name" : "Occupation",
         "req" : "3"
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
                     "content" : [
                        "The identifier is coded as a string regardless of the type, not as a binary value."
                     ],
                     "attrs" : {
                        "xml:id" : "para_0c5465f7-fe2f-460e-8394-64ad149bdd60"
                     },
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "req" : "1",
         "name" : "Type of Patient ID"
      },
      "(0010,0216)[<0>](0010,0217)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "module" : "Patient",
         "desc" : [
            "Identification of the organization that is the source of the animal, issued by the registry identified by Strain Source Registry Code Sequence (0010,0215). See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.1.1.1.4",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "name" : "Strain Source",
         "req" : "1"
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0008,1199)[<2>](0040,a170)" : {
         "module" : "Key Object Document",
         "usage" : "M",
         "mod_tables" : [
            "table_C.17.6-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "entity" : "Document",
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "name" : "Purpose of Reference Code Sequence"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0082)" : {
         "name" : "Institution Code Sequence",
         "req" : "1C",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Document",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0040,a730)[<0>](0040,a138)" : {
         "module" : "SR Document Content",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.7-1"
         ],
         "entity" : "Document",
         "usage" : "M",
         "desc" : [
            "Specifies temporal points for reference by number of seconds after start of data.",
            "Required if Referenced Sample Positions (0040,A132) and Referenced DateTime (0040,A13A) are not present."
         ],
         "req" : "1C",
         "name" : "Referenced Time Offsets"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "req" : "1C",
         "name" : "Local Namespace Entity ID",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "entity" : "Patient",
         "usage" : "M"
      },
      "(fffa,fffa)" : {
         "req" : "3",
         "name" : "Digital Signatures Sequence",
         "module" : "SOP Common",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "desc" : [
            "Sequence holding Digital Signatures.",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,0106)" : {
         "req" : "3",
         "name" : "Smallest Image Pixel Value",
         "desc" : "The minimum actual pixel value encountered in this image.",
         "module" : "SR Document Content",
         "entity" : "Document",
         "usage" : "M",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ]
      },
      "(0018,1201)" : {
         "module" : "General Equipment",
         "entity" : "Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
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
         "name" : "Time of Last Calibration"
      },
      "(0040,a370)[<0>](0040,0026)" : {
         "name" : "Order Placer Identifier Sequence",
         "req" : "3",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Placer Order Number.",
            "Only a single Item is permitted in this Sequence."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.17.6-2"
         ],
         "entity" : "Document",
         "module" : "Key Object Document"
      },
      "(4ffe,0001)[<0>](0400,0005)" : {
         "usage" : "M",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "desc" : "A number, unique within this SOP Instance, used to identify this MAC Parameters Sequence (4FFE,0001) item from an Item of the Digital Signatures Sequence (FFFA,FFFA).",
         "name" : "MAC ID Number",
         "req" : "1"
      },
      "(0040,a730)[<0>](0040,a504)" : {
         "desc" : [
            "Template that describes the content of this Content Item and its subsidiary Content Items.",
            "Only a single Item shall be included in this Sequence.",
            [
               "Required if a template defined and known to the implementation at the time of encoding was used to define the content of this Item, and the template consists of a single CONTAINER with nested content, and it is the outermost invocation of a set of nested templates that start with the same CONTAINER (see ",
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
         "module" : "SR Document Content",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.8-1"
         ],
         "usage" : "M",
         "req" : "1C",
         "name" : "Content Template Sequence"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0032)" : {
         "req" : "1C",
         "name" : "Universal Entity ID",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M"
      },
      "(0040,a730)[<0>](0040,db73)" : {
         "name" : "Referenced Content Item Identifier",
         "req" : "1C",
         "mod_tables" : [
            "table_C.17-6"
         ],
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document Content",
         "desc" : [
            "An ordered set of one or more integers that uniquely identifies the Target Content Item of the relationship.",
            "The root Content Item is referenced by a single value of 1.",
            "Each subsequent integer represents an ordinal position of a Content Item in the Content Sequence (0040,A730) in which it belongs. The Referenced Content Item Identifier is the set of these ordinal positions along the by-value relationship path. The number of values in this Multi-Value Attribute is exactly the number of relationships traversed in the SR content tree plus one.",
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
                                 "attrs" : {
                                    "xml:id" : "para_657ff039-3a0b-4f27-9b94-e819bcade216"
                                 },
                                 "content" : [
                                    "See ",
                                    {
                                       "el" : "xref",
                                       "attrs" : {
                                          "linkend" : "sect_C.17.3.2.5",
                                          "xrefstyle" : "select: label"
                                       }
                                    },
                                    "."
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
                                    "Content Items are ordered in a Content Sequence starting from 1 as defined in VR of SQ (see ",
                                    {
                                       "el" : "olink",
                                       "attrs" : {
                                          "targetptr" : "PS3.5",
                                          "targetdoc" : "PS3.5",
                                          "xrefstyle" : "select: labelnumber"
                                       }
                                    },
                                    ")."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_2b9d8cd2-5f38-413c-be12-72fe558f1bc9"
                                 }
                              },
                              "\n                    "
                           ]
                        },
                        "\n                  "
                     ],
                     "attrs" : {
                        "numeration" : "arabic"
                     },
                     "el" : "orderedlist"
                  },
                  "\n                "
               ]
            },
            "Required if the Target Content Item is denoted by-reference, i.e., the Document Relationship Macro and Document Content Macro are not included."
         ]
      },
      "(0008,0060)" : {
         "req" : "1",
         "name" : "Modality",
         "module" : "Key Object Document Series",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.17.6-1"
         ],
         "desc" : [
            "Modality type.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "KO",
                     "Key Object Selection"
                  ]
               ],
               "title" : "Enumerated Values:"
            }
         ]
      },
      "(0008,0110)[<0>](0008,0112)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Document",
         "module" : "SOP Common",
         "desc" : [
            "The name of the external registry where further definition of the identified coding scheme may be obtained. Required if coding scheme is registered.",
            {
               "title" : "Defined Terms:",
               "list" : [
                  [
                     "HL7",
                     null
                  ]
               ],
               "type" : "variablelist"
            }
         ],
         "name" : "Coding Scheme Registry",
         "req" : "1C"
      },
      "(0018,1050)" : {
         "entity" : "Equipment",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "name" : "Spatial Resolution",
         "req" : "3"
      },
      "(0012,0083)" : {
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
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "entity" : "Study",
         "usage" : "U",
         "module" : "Clinical Trial Study",
         "name" : "Consent for Clinical Trial Use Sequence",
         "req" : "3"
      },
      "(0040,a730)[<0>](0040,a300)[<1>](0040,a161)" : {
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). Only a single value shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "usage" : "M",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.1-1"
         ],
         "module" : "SR Document Content",
         "name" : "Floating Point Value",
         "req" : "1C"
      },
      "(0008,009d)[<0>](0040,1101)" : {
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "General Study",
         "entity" : "Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "1",
         "name" : "Person Identification Code Sequence"
      },
      "(0012,0042)" : {
         "name" : "Clinical Trial Subject Reading ID",
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
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject"
      },
      "(0008,1049)[<0>](0040,1104)" : {
         "req" : "3",
         "name" : "Person's Telecom Information",
         "module" : "General Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
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
               ]
            }
         ]
      },
      "(0038,0064)[<0>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "req" : "1C",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "Study",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "module" : "Patient Study"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0032)" : {
         "name" : "Universal Entity ID",
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
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "module" : "Patient"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0031)" : {
         "req" : "1C",
         "name" : "Local Namespace Entity ID",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "entity" : "Patient"
      },
      "(0018,1008)" : {
         "usage" : "M",
         "entity" : "Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
         "desc" : "Identifier of the gantry or positioner.",
         "name" : "Gantry ID",
         "req" : "3"
      },
      "(0400,0561)" : {
         "desc" : [
            "Sequence of Items containing all attributes that were removed or replaced by other values in the main data set.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Document",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Original Attributes Sequence",
         "req" : "3"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
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
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "entity" : "Patient",
         "usage" : "M"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,2002)" : {
         "req" : "3",
         "name" : "Color Space",
         "desc" : [
            "A label that identifies the well-known color space of the image. Shall be consistent with any ICC Profile (0028,2000) that is also present.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.11.15.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "module" : "SR Document Content",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "entity" : "Document",
         "usage" : "M"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0008,1160)" : {
         "desc" : [
            "Identifies the frame numbers within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "content" : [
                        "This Attribute may be multi-valued."
                     ],
                     "attrs" : {
                        "xml:id" : "para_c572337d-ddf5-4f67-a971-4f9655f578db"
                     }
                  },
                  "\n                "
               ]
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "module" : "SR Document Content",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1"
         ],
         "usage" : "M",
         "entity" : "Document",
         "req" : "1C",
         "name" : "Referenced Frame Number"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)" : {
         "name" : "Icon Image Sequence",
         "req" : "3",
         "usage" : "M",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1"
         ],
         "module" : "SR Document Content",
         "desc" : [
            "This Icon Image is representative of the Image.",
            "Only a single Item is permitted in this Sequence.",
            "The Icon Image shall be no greater than 128 rows by 128 columns."
         ]
      },
      "(0008,0122)" : {
         "name" : "Mapping Resource Name",
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
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Document",
         "module" : "SOP Common"
      },
      "(0040,a730)[<0>](0040,a160)" : {
         "req" : "1C",
         "name" : "Text Value",
         "module" : "SR Document Content",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5"
         ],
         "usage" : "M",
         "desc" : [
            "This is the value of the Content Item.",
            "Required if Value Type (0040,A040) is TEXT.",
            "Text data that is unformatted and whose manner of display is implementation dependent.",
            "The text value may contain spaces, as well as multiple lines separated by CR LF, but otherwise no format control characters (such as horizontal or vertical tab and form feed) shall be present, even if permitted by the Value Representation of UT.",
            [
               "The text shall be interpreted as specified by Specific Character Set (0008,0005) if present in the ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.12.1",
                     "xrefstyle" : "select: title"
                  },
                  "el" : "xref"
               },
               "."
            ],
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "The text may contain single or multi-byte characters and use code extension techniques as described in ",
                        {
                           "el" : "olink",
                           "attrs" : {
                              "targetptr" : "PS3.5",
                              "xrefstyle" : "select: labelnumber",
                              "targetdoc" : "PS3.5"
                           }
                        },
                        " if permitted by the values of Specific Character Set (0008,0005)."
                     ],
                     "attrs" : {
                        "xml:id" : "para_8a3089bc-77c4-4908-b44b-d2c9f8e01359"
                     },
                     "el" : "para"
                  },
                  "\n                "
               ]
            }
         ]
      },
      "(0040,a370)[<0>](0032,1060)" : {
         "req" : "2",
         "name" : "Requested Procedure Description",
         "module" : "Key Object Document",
         "usage" : "M",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17.6-2"
         ],
         "desc" : "Institution-generated administrative description or classification of Requested Procedure."
      },
      "(0400,0561)[<0>](0400,0565)" : {
         "name" : "Reason for the Attribute Modification",
         "req" : "1",
         "entity" : "Document",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
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
         ]
      },
      "(0040,a390)[<0>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Document",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "module" : "SOP Common"
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
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "req" : "3",
         "name" : "Strain Nomenclature"
      },
      "(0010,0219)" : {
         "name" : "Strain Code Sequence",
         "req" : "3",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "module" : "Patient",
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
      "(0010,0026)[<0>](0010,0024)[<1>](0040,003a)" : {
         "name" : "Assigning Agency or Department Code Sequence",
         "req" : "3",
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "desc" : [
            "The agency or department that assigned the patient identifier. Only a single Item is permitted in this Sequence.",
            {
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
               ],
               "el" : "note"
            }
         ]
      },
      "(0040,a375)[<0>](0020,000d)" : {
         "desc" : "Unique identifier for the Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.17.6-2",
            "table_C.17-3"
         ],
         "entity" : "Document",
         "module" : "Key Object Document",
         "name" : "Study Instance UID",
         "req" : "1"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1155)" : {
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M"
      },
      "(0008,0110)[<0>](0008,0102)" : {
         "req" : "1",
         "name" : "Coding Scheme Designator",
         "module" : "SOP Common",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "desc" : "The value of a Coding Scheme Designator, used in this SOP Instance, which is being mapped."
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,0004)" : {
         "req" : "1",
         "name" : "Photometric Interpretation",
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
         "module" : "SR Document Content",
         "entity" : "Document",
         "usage" : "M",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ]
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
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
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "module" : "Patient",
         "name" : "Universal Entity ID Type",
         "req" : "1C"
      },
      "(0010,1010)" : {
         "name" : "Patient's Age",
         "req" : "3",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "module" : "Patient Study",
         "desc" : "Age of the Patient."
      },
      "(0028,0303)" : {
         "req" : "3",
         "name" : "Longitudinal Temporal Information Modified",
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
                     "xrefstyle" : "select: labelnumber",
                     "targetptr" : "PS3.15"
                  },
                  "el" : "olink"
               },
               "."
            ]
         ],
         "module" : "SOP Common",
         "entity" : "Document",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,0015)" : {
         "entity" : "Document",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : [
            "Date and time that the SOP Instance was last coerced by a Storage SCP (see ",
            {
               "attrs" : {
                  "xrefstyle" : "select: labelnumber",
                  "targetdoc" : "PS3.4",
                  "targetptr" : "PS3.4"
               },
               "el" : "olink"
            },
            ")."
         ],
         "name" : "Instance Coercion DateTime",
         "req" : "3"
      },
      "(0018,a001)[<0>](0040,a170)" : {
         "req" : "1",
         "name" : "Purpose of Reference Code Sequence",
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
         "entity" : "Document",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0400,0500)" : {
         "module" : "SOP Common",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
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
         "req" : "1C",
         "name" : "Encrypted Attributes Sequence"
      },
      "(0012,0020)" : {
         "module" : "Clinical Trial Subject",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U",
         "entity" : "Patient",
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
         "name" : "Clinical Trial Protocol ID"
      },
      "(0012,0071)" : {
         "module" : "Clinical Trial Series",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "usage" : "U",
         "entity" : "Series",
         "desc" : [
            "An identifier of the series in the context of a clinical trial or research. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.3.2.1.2",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "req" : "3",
         "name" : "Clinical Trial Series ID"
      },
      "(4ffe,0001)[<0>](0400,0010)" : {
         "name" : "MAC Calculation Transfer Syntax UID",
         "req" : "1",
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
                     ],
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
         "usage" : "M",
         "entity" : "Document",
         "module" : "SOP Common"
      },
      "(0400,0561)[<0>](0400,0562)" : {
         "name" : "Attribute Modification DateTime",
         "req" : "1",
         "desc" : "Date and time the attributes were removed and/or replaced.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Document",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0010,1100)[<0>](0020,000e)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "desc" : [
            "Unique identifier for the Series that is part of the Study identified in Study Instance UID (0020,000D), if present, and contains the referenced object instance(s).",
            "Required if Type of Instances (0040,E020) is DICOM"
         ],
         "name" : "Series Instance UID",
         "req" : "1C"
      },
      "(0008,1062)[<0>](0040,1103)" : {
         "desc" : "Person's telephone number(s)",
         "module" : "General Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "req" : "3",
         "name" : "Person's Telephone Numbers"
      },
      "(0012,0010)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "entity" : "Patient",
         "module" : "Clinical Trial Subject",
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
         "name" : "Clinical Trial Sponsor Name",
         "req" : "1"
      },
      "(0018,a001)[<0>](0008,1070)" : {
         "desc" : "Name(s) of the operator(s) of the contributing equipment.",
         "usage" : "M",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Operators' Name",
         "req" : "3"
      },
      "(0008,0110)[<0>](0008,0116)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Document",
         "usage" : "M",
         "desc" : "Name of the organization responsible for the Coding Scheme. May include organizational contact information.",
         "req" : "3",
         "name" : "Coding Scheme Responsible Organization"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "req" : "1C",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "module" : "Patient"
      },
      "(0008,009d)[<0>](0040,1104)" : {
         "req" : "3",
         "name" : "Person's Telecom Information",
         "module" : "General Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
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
               ],
               "el" : "note"
            }
         ]
      },
      "(0008,1030)" : {
         "req" : "3",
         "name" : "Study Description",
         "desc" : "Institution-generated description or classification of the Study (component) performed.",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "usage" : "M"
      },
      "(0040,a730)[<0>](0008,1199)" : {
         "desc" : [
            "References to Composite Object SOP Class/SOP Instance pairs.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "M",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.5-1",
            "table_C.18.3-1"
         ],
         "module" : "SR Document Content",
         "name" : "Referenced SOP Sequence",
         "req" : "1"
      },
      "(0040,a730)[<0>](0040,a122)" : {
         "module" : "SR Document Content",
         "usage" : "M",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5"
         ],
         "desc" : [
            "This is the value of the Content Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "req" : "1C",
         "name" : "Time"
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
         "module" : "Patient",
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "req" : "1",
         "name" : "Retrieve URI"
      },
      "(0040,a730)[<0>](0070,031a)" : {
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.9-1"
         ],
         "usage" : "M",
         "module" : "SR Document Content",
         "desc" : [
            "The globally unique identifier for this fiducial item.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "The fiducial UID can be used to associate this set of graphics with other Content Items."
                     ],
                     "attrs" : {
                        "xml:id" : "para_998c59ec-8216-4d36-a678-e8ad63ab7276"
                     },
                     "el" : "para"
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "name" : "Fiducial UID",
         "req" : "3"
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0040,e011)" : {
         "mod_tables" : [
            "table_C.17.6-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "entity" : "Document",
         "usage" : "M",
         "module" : "Key Object Document",
         "desc" : "Unique identifier of the system where the Composite Object(s) may be retrieved on the network.",
         "name" : "Retrieve Location UID",
         "req" : "3"
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0088,0140)" : {
         "req" : "3",
         "name" : "Storage Media File-Set UID",
         "desc" : "Uniquely identifies the Storage Media on which the Composite Object(s) reside.",
         "module" : "Key Object Document",
         "entity" : "Document",
         "usage" : "M",
         "mod_tables" : [
            "table_C.17.6-2",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0038,0014)[<0>](0040,0032)" : {
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "usage" : "U",
         "entity" : "Study",
         "req" : "1C",
         "name" : "Universal Entity ID"
      },
      "(0010,0026)[<0>](0010,0021)" : {
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
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Issuer of Patient ID"
      },
      "(0040,a370)[<0>](0008,0051)" : {
         "entity" : "Document",
         "usage" : "M",
         "mod_tables" : [
            "table_C.17.6-2"
         ],
         "module" : "Key Object Document",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this Sequence."
         ],
         "name" : "Issuer of Accession Number Sequence",
         "req" : "3"
      },
      "(0400,0561)[<0>](0400,0563)" : {
         "desc" : "Identification of the system that removed and/or replaced the attributes.",
         "module" : "SOP Common",
         "entity" : "Document",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "name" : "Modifying System"
      },
      "(0008,0096)[<0>](0008,0080)" : {
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "module" : "General Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "req" : "1C",
         "name" : "Institution Name"
      },
      "(0008,1080)" : {
         "req" : "3",
         "name" : "Admitting Diagnoses Description",
         "module" : "Patient Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "desc" : "Description of the admitting diagnosis (diagnoses)"
      },
      "(0008,009d)[<0>](0008,0082)" : {
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "usage" : "M",
         "req" : "1C",
         "name" : "Institution Code Sequence"
      },
      "(0008,0300)[<0>](0008,0303)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Document",
         "module" : "SOP Common",
         "desc" : [
            [
               "Specifies whether some or all of the Private Data Elements in the block are safe from identity leakage as defined by ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "targetptr" : "sect_E.3.10",
                     "targetdoc" : "PS3.15",
                     "xrefstyle" : "template:PS3.15 Section %n %t"
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "name" : "Block Identifying Information Status",
         "req" : "1"
      },
      "(0008,0030)" : {
         "name" : "Study Time",
         "req" : "2",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "entity" : "Study",
         "module" : "General Study",
         "desc" : "Time the Study started."
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0008,1199)" : {
         "name" : "Referenced SOP Sequence",
         "req" : "1",
         "entity" : "Document",
         "usage" : "M",
         "mod_tables" : [
            "table_C.17.6-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Key Object Document",
         "desc" : [
            "References to Composite Object SOP Class/SOP Instance pairs that are part of the Study defined by Study Instance UID and the Series defined by Series Instance UID (0020,000E).",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0010,0212)" : {
         "name" : "Strain Description",
         "req" : "3",
         "desc" : [
            "The strain of the patient. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.1.1.4"
               }
            },
            "."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "module" : "Patient"
      },
      "(0008,1049)[<0>](0008,0080)" : {
         "req" : "1C",
         "name" : "Institution Name",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "entity" : "Study",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present."
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0088,0130)" : {
         "req" : "3",
         "name" : "Storage Media File-Set ID",
         "module" : "Key Object Document",
         "entity" : "Document",
         "usage" : "M",
         "mod_tables" : [
            "table_C.17.6-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the Composite Object (s) reside."
      },
      "(0010,1100)[<0>](0040,e024)" : {
         "name" : "XDS Retrieval Sequence",
         "req" : "1C",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "module" : "Patient",
         "desc" : [
            "Details for retrieving instances using WADO-WS or IHE XDS transactions.",
            {
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_020ae95c-9384-49b9-b460-e9625c404c63"
                     },
                     "content" : [
                        "Retrieval via WADO-URI is addressed by the WADO Retrieval Sequence (0040,E023). Retrieval via WADO-RS is addressed by the WADO-RS Retrieval Sequence (0040,E025)."
                     ]
                  },
                  "\n              "
               ],
               "el" : "note"
            },
            "Required if DICOM Retrieval Sequence (0040,E021), DICOM Media Retrieval Sequence (0040,E022), WADO-RS Retrieval Sequence (0040,E025) and WADO Retrieval Sequence (0040,E023) are not present. May be present otherwise.",
            "This sequence shall only identify repositories known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(fffa,fffa)[<0>](0400,0115)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Document",
         "usage" : "M",
         "desc" : [
            [
               "A certificate that holds the identity of the entity producing this Digital Signature, that entity's public key or key identifier, and the algorithm and associated parameters with which that public key is to be used. Algorithms allowed are specified in Digital Signature Security Profiles (see ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "targetptr" : "PS3.15",
                     "xrefstyle" : "select: labelnumber",
                     "targetdoc" : "PS3.15"
                  }
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
                           "el" : "listitem",
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
               ]
            }
         ],
         "req" : "1",
         "name" : "Certificate of Signer"
      },
      "(0008,1110)[<0>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "entity" : "Study",
         "usage" : "M",
         "req" : "1",
         "name" : "Referenced SOP Instance UID"
      },
      "(0038,0064)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "entity" : "Study",
         "module" : "Patient Study",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Service Episode ID (0038,0060).",
            "Only a single Item is permitted in this Sequence."
         ],
         "name" : "Issuer of Service Episode ID Sequence",
         "req" : "3"
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0008,1199)" : {
         "name" : "Referenced SOP Sequence",
         "req" : "1",
         "desc" : [
            "References to Composite Object SOP Class/SOP Instance pairs that are part of the Study defined by Study Instance UID and the Series defined by Series Instance UID (0020,000E).",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.17.6-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "entity" : "Document",
         "usage" : "M",
         "module" : "Key Object Document"
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0100)" : {
         "req" : "1",
         "name" : "Digital Signature UID",
         "desc" : "The Unique Identifier of a Digital Signature held in the referenced SOP Instance.",
         "module" : "Key Object Document",
         "mod_tables" : [
            "table_C.17.6-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "entity" : "Document",
         "usage" : "M"
      },
      "(0012,0050)" : {
         "module" : "Clinical Trial Study",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "entity" : "Study",
         "usage" : "U",
         "desc" : [
            "An identifier specifying the one or more studies that are grouped together as a clinical time point or submission in a clinical trial or research. See ",
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
         "name" : "Clinical Trial Time Point ID"
      },
      "(0020,9172)[<0>](0062,000b)" : {
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "entity" : "Document",
         "usage" : "M",
         "req" : "1C",
         "name" : "Referenced Segment Number"
      },
      "(0010,0200)" : {
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
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
         "name" : "Quality Control Subject",
         "req" : "3"
      },
      "(0010,2299)" : {
         "name" : "Responsible Organization",
         "req" : "2C",
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "desc" : [
            "Name of organization with medical or welfare decision making authority for the patient.",
            "Required if patient is an animal. May be present otherwise."
         ]
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0008,0054)" : {
         "req" : "3",
         "name" : "Retrieve AE Title",
         "desc" : "Title of the DICOM Application Entity where the Composite Object(s) may be retrieved on the network.",
         "module" : "Key Object Document",
         "usage" : "M",
         "mod_tables" : [
            "table_C.17.6-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "entity" : "Document"
      },
      "(0040,a370)[<0>](0040,0026)[<1>](0040,0033)" : {
         "module" : "Key Object Document",
         "entity" : "Document",
         "usage" : "M",
         "mod_tables" : [
            "table_C.17.6-2",
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
         "req" : "1C",
         "name" : "Universal Entity ID Type"
      },
      "(0010,1021)" : {
         "req" : "3",
         "name" : "Patient's Size Code Sequence",
         "module" : "Patient Study",
         "usage" : "U",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : [
            "Patient's size category code",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0008,1062)[<0>](0008,0081)" : {
         "req" : "3",
         "name" : "Institution Address",
         "module" : "General Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable."
      },
      "(0040,a730)[<0>](0040,a300)[<1>](0040,a162)" : {
         "name" : "Rational Numerator Value",
         "req" : "1C",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. Only a single value shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "entity" : "Document",
         "usage" : "M",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.1-1"
         ],
         "module" : "SR Document Content"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1101)" : {
         "req" : "1",
         "name" : "Person Identification Code Sequence",
         "module" : "SOP Common",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "M",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(fffa,fffa)[<0>](0400,0305)" : {
         "req" : "1C",
         "name" : "Certified Timestamp Type",
         "module" : "SOP Common",
         "entity" : "Document",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : [
            "The type of certified timestamp used in Certified Timestamp (0400,0310). Required if Certified Timestamp (0400,0310) is present.",
            {
               "list" : [
                  [
                     "CMS_TSP",
                     "Internet X.509 Public Key Infrastructure Time Stamp Protocol"
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
                     "attrs" : {
                        "xml:id" : "para_cae60b6b-4fad-4c20-981d-247bbf9c6471"
                     },
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
                     "el" : "para"
                  },
                  "\n                    "
               ]
            }
         ]
      },
      "(0020,000e)" : {
         "name" : "Series Instance UID",
         "req" : "1",
         "desc" : [
            "Unique identifier of the Series.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_ae047c71-7f69-480e-b05a-6920a5670924"
                     },
                     "content" : [
                        "No specific semantics are specified."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.17.6-1"
         ],
         "module" : "Key Object Document Series"
      },
      "(0010,1100)[<0>](0040,e021)[<1>](0008,0054)" : {
         "req" : "1",
         "name" : "Retrieve AE Title",
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "desc" : "Title of a DICOM Application Entity where the referenced instance(s) may be retrieved on the network."
      },
      "(0040,a390)" : {
         "req" : "1C",
         "name" : "HL7 Structured Document Reference Sequence",
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
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0012,0031)" : {
         "desc" : [
            "Name of the site responsible for submitting clinical trial or research data. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.3.1.5"
               },
               "el" : "xref"
            }
         ],
         "entity" : "Patient",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject",
         "name" : "Clinical Trial Site Name",
         "req" : "2"
      },
      "(0008,0096)[<0>](0008,0082)" : {
         "req" : "1C",
         "name" : "Institution Code Sequence",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "General Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study"
      },
      "(0040,a730)[<0>](0040,a504)[<1>](0008,0118)" : {
         "name" : "Mapping Resource UID",
         "req" : "3",
         "usage" : "M",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.8-1"
         ],
         "module" : "SR Document Content",
         "desc" : [
            "Uniquely identifies the Mapping Resource that defines the template.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "attrs" : {
                        "xml:id" : "para_3ffe96c5-7cb8-4765-b26d-0cdb12354845"
                     },
                     "content" : [
                        "The unique identifier for the DICOM Content Mapping Resource \"DCMR\" is defined in ",
                        {
                           "attrs" : {
                              "targetdoc" : "PS3.6",
                              "xrefstyle" : "select: labelnumber",
                              "targetptr" : "PS3.6"
                           },
                           "el" : "olink"
                        },
                        "."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ]
            }
         ]
      },
      " (0010,0027) [<0>](0010,0028)" : {
         "desc" : [
            "The position in the image pixel data of the individual subject identified in this sequence relative to the other subjects. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.1.4.1.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "usage" : "M",
         "entity" : "Patient",
         "req" : "3",
         "name" : "Subject Relative Position in Image"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,1203)" : {
         "desc" : [
            "Blue Palette Color Lookup Table Data. Required if Photometric Interpretation (0028,0004) has a value of PALETTE COLOR or Pixel Presentation (0008,9205) at the image level equals COLOR or MIXED. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.6.3.1.6",
                  "xrefstyle" : "select: label"
               }
            },
            " for further explanation."
         ],
         "entity" : "Document",
         "usage" : "M",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "module" : "SR Document Content",
         "name" : "Blue Palette Color Lookup Table Data",
         "req" : "1C"
      },
      "(4ffe,0001)" : {
         "entity" : "Document",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "desc" : [
            "A sequence of items that describe the parameters used to calculate a MAC for use in Digital Signatures.",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "MAC Parameters Sequence",
         "req" : "3"
      },
      "(0010,2298)" : {
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
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "name" : "Responsible Person Role",
         "req" : "1C"
      },
      "(0040,a370)" : {
         "desc" : [
            "Identifies Requested Procedures to which this Document pertains.",
            "One or more Items shall be included in this Sequence.",
            "Required if this Document pertains to at least one Requested Procedure."
         ],
         "module" : "Key Object Document",
         "entity" : "Document",
         "usage" : "M",
         "mod_tables" : [
            "table_C.17.6-2"
         ],
         "req" : "1C",
         "name" : "Referenced Request Sequence"
      },
      "(0008,1111)" : {
         "req" : "2",
         "name" : "Referenced Performed Procedure Step Sequence",
         "module" : "Key Object Document Series",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.17.6-1"
         ],
         "desc" : [
            "Uniquely identifies the Performed Procedure Step SOP Instance for which the Series is created.",
            "Zero or one Item shall be included in this Sequence.",
            {
               "content" : [
                  "\n                    \n                      \n                        ",
                  {
                     "el" : "para",
                     "content" : [
                        "See notes on this attribute in ",
                        {
                           "attrs" : {
                              "linkend" : "sect_C.17.1",
                              "xrefstyle" : "select: label"
                           },
                           "el" : "xref"
                        },
                        "\n"
                     ],
                     "attrs" : {
                        "xml:id" : "para_2206d5fb-4bf1-4daa-957d-9150c691be3a"
                     }
                  },
                  "\n                      \n                    \n                  "
               ],
               "el" : "note"
            }
         ]
      },
      "(0008,103f)" : {
         "desc" : [
            "A coded description of the Series.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "Key Object Document Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.17.6-1"
         ],
         "entity" : "Series",
         "req" : "3",
         "name" : "Series Description Code Sequence"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0080)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "entity" : "Document",
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "name" : "Institution Name",
         "req" : "1C"
      },
      "(0008,0053)" : {
         "name" : "Query/Retrieve View",
         "req" : "1C",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            },
            "Required if the instance has ever been converted from its source form as the result of a C-MOVE operation with a specific view."
         ]
      },
      "(0008,1120)[<0>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "desc" : "Uniquely identifies the referenced SOP Class."
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
         "entity" : "Document",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Operator Identification Sequence",
         "req" : "3"
      },
      "(fffa,fffa)[<0>](0400,0105)" : {
         "name" : "Digital Signature DateTime",
         "req" : "1",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "module" : "SOP Common",
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
      "Can't handle table_8.8-1 (in table_C.17.6-1 after (0008,103F))",
      "Can't handle table_8.8-1 (in table_C.17.6-2 after (0032,1064))",
      "Can't handle table_8.8-1 (in table_C.17.6-2:table_C.17-3:table_C.17-3a after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.17.6-2:table_C.17-3:table_C.17-3a after (0040,A170))",
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
