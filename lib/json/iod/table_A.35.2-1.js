var data = {
   "tags" : {
      "(0040,a730)[<0>](0008,1199)[<1>](0062,000b)" : {
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1"
         ],
         "req" : "1C",
         "desc" : "Identifies the segments to which the reference applies identified by Segment Number (0062,0004). Required if the Referenced SOP Instance is a Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present.",
         "name" : "Referenced Segment Number",
         "usage" : "M",
         "module" : "SR Document Content",
         "entity" : "Document"
      },
      "(0040,a385)[<0>](0008,1115)[<1>](0088,0140)" : {
         "name" : "Storage Media File-Set UID",
         "desc" : "Uniquely identifies the Storage Media on which the Composite Object(s) reside.",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "3",
         "entity" : "Document",
         "module" : "SR Document General",
         "usage" : "M"
      },
      "(0040,a078)[<0>](0008,1090)" : {
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3b"
         ],
         "req" : "1C",
         "desc" : [
            "Model Name of the device observer.",
            "Required if Observer Type value is DEV."
         ],
         "name" : "Manufacturer's Model Name",
         "usage" : "M",
         "module" : "SR Document General",
         "entity" : "Document"
      },
      "(0100,0424)" : {
         "name" : "SOP Authorization Comment",
         "desc" : "Any comments associated with the setting of the SOP Instance Status (0100,0410) to AO.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "entity" : "Document",
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0040,a07a)[<0>](0008,0070)" : {
         "module" : "SR Document General",
         "entity" : "Document",
         "usage" : "M",
         "desc" : [
            "Manufacturer of the device observer.",
            "Required if Observer Type value is DEV."
         ],
         "name" : "Manufacturer",
         "req" : "1C",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3b"
         ]
      },
      "(0038,0014)[<0>](0040,0031)" : {
         "usage" : "U",
         "module" : "Patient Study",
         "entity" : "Study",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "name" : "Local Namespace Entity ID"
      },
      "(0400,0561)[<0>](0400,0563)" : {
         "usage" : "M",
         "entity" : "Document",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "name" : "Modifying System",
         "desc" : "Identification of the system that removed and/or replaced the attributes."
      },
      "(0010,0024)[<0>](0040,0035)" : {
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
         "name" : "Identifier Type Code",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "req" : "3",
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M"
      },
      "(0008,0051)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "3",
         "name" : "Issuer of Accession Number Sequence",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this sequence."
         ],
         "usage" : "M",
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0040,a078)[<0>](0008,0080)" : {
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3b"
         ],
         "req" : "2",
         "desc" : "Institution or organization to which the identified person is responsible or accountable, or that manages the identified device.",
         "name" : "Institution Name",
         "usage" : "M",
         "module" : "SR Document General",
         "entity" : "Document"
      },
      "(0010,0021)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
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
         "name" : "Issuer of Patient ID",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0008,0110)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme Identification Sequence",
         "desc" : [
            "Sequence of items that map values of Coding Scheme Designator (0008,0102) to an external coding system registration, or to a private or local coding scheme.",
            "One or more Items are permitted in this sequence."
         ],
         "usage" : "M",
         "entity" : "Document",
         "module" : "SOP Common"
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0120)" : {
         "module" : "SR Document General",
         "entity" : "Document",
         "usage" : "M",
         "desc" : "The Signature Value identified by the Digital Signature UID within the Referenced SOP Instance UID.",
         "name" : "Signature",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "1"
      },
      "(0040,a360)[<0>](0008,1115)" : {
         "usage" : "M",
         "module" : "SR Document General",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3"
         ],
         "req" : "1",
         "desc" : [
            "Sequence of Items where each Item includes the Attributes of a Series containing referenced Composite Object(s).",
            "One or more Items shall be included in this sequence"
         ],
         "name" : "Referenced Series Sequence"
      },
      "(fffa,fffa)" : {
         "module" : "SOP Common",
         "entity" : "Document",
         "usage" : "M",
         "desc" : [
            "Sequence holding Digital Signatures.",
            "One or more items are permitted in this sequence."
         ],
         "name" : "Digital Signatures Sequence",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0040,a385)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1155)" : {
         "module" : "SR Document General",
         "entity" : "Document",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "req" : "1"
      },
      "(0008,1049)[<0>](0040,1103)" : {
         "desc" : "Person's telephone number(s)",
         "name" : "Person's Telephone Numbers",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "3",
         "module" : "General Study",
         "entity" : "Study",
         "usage" : "M"
      },
      "(0040,a032)" : {
         "entity" : "Document",
         "module" : "SR Document Content",
         "usage" : "M",
         "name" : "Observation DateTime",
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
         "req" : "1C",
         "mod_tables" : [
            "table_C.17-6"
         ]
      },
      "(0012,0083)[<0>](0012,0085)" : {
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
         "name" : "Consent for Distribution Flag",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "req" : "1",
         "module" : "Clinical Trial Study",
         "entity" : "Study",
         "usage" : "U"
      },
      "(0040,a171)" : {
         "mod_tables" : [
            "table_C.17-6"
         ],
         "req" : "3",
         "desc" : "Unique identifier for the observation Content Item (and its subsidiary Content Items, if any). The UID represents the semantic content of the observation; an encoding of the same observation with the same context into another representation (e.g., a CDA Entry) may use the same UID.",
         "name" : "Observation UID",
         "usage" : "M",
         "module" : "SR Document Content",
         "entity" : "Document"
      },
      "(0008,1080)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "req" : "3",
         "desc" : "Description of the admitting diagnosis (diagnoses)",
         "name" : "Admitting Diagnoses Description",
         "usage" : "U",
         "module" : "Patient Study",
         "entity" : "Study"
      },
      "(0008,0033)" : {
         "desc" : "The time the document content creation started.",
         "name" : "Content Time",
         "req" : "1",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "module" : "SR Document General",
         "entity" : "Document",
         "usage" : "M"
      },
      "(0040,a730)[<0>](0040,a504)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.8-1"
         ],
         "name" : "Content Template Sequence",
         "desc" : [
            "Template that describes the content of this Content Item and its subsidiary Content Items.",
            "Only a single Item shall be included in this sequence.",
            [
               "Required if a template was used to define the content of this Item, and the template consists of a single CONTAINER with nested content, and it is the outermost invocation of a set of nested templates that start with the same CONTAINER (see ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.18.8.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               ")."
            ]
         ],
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document Content"
      },
      "(0018,a001)[<0>](0018,1000)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "desc" : "Manufacturer's serial number of the equipment that contributed to the composite instance.",
         "name" : "Device Serial Number"
      },
      "(0040,a07a)[<0>](0040,a082)" : {
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document General",
         "req" : "2",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "name" : "Participation DateTime",
         "desc" : "DateTime of participation with respect to the clinical content of this document."
      },
      "(0040,a385)[<0>](0008,1115)[<1>](0020,000e)" : {
         "module" : "SR Document General",
         "entity" : "Document",
         "usage" : "M",
         "desc" : "Unique identifier of a Series that is part of this Study and contains the referenced Composite Object(s).",
         "name" : "Series Instance UID",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "1"
      },
      "(0040,a525)[<0>](0020,000d)" : {
         "usage" : "M",
         "module" : "SR Document General",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3"
         ],
         "req" : "1",
         "desc" : "Unique identifier for the Study",
         "name" : "Study Instance UID"
      },
      "(0008,1062)[<0>](0040,1102)" : {
         "module" : "General Study",
         "entity" : "Study",
         "usage" : "M",
         "desc" : "Person's mailing address",
         "name" : "Person's Address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "3"
      },
      "(0040,a078)[<0>](0018,1002)" : {
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3b"
         ],
         "req" : "1C",
         "desc" : [
            "Unique identifier of device observer.",
            "Required if Observer Type value is DEV."
         ],
         "name" : "Device UID",
         "usage" : "M",
         "module" : "SR Document General",
         "entity" : "Document"
      },
      "(0020,9172)[<0>](0008,1160)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
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
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "usage" : "M",
         "entity" : "Document",
         "module" : "SOP Common"
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0088,0140)" : {
         "desc" : "Uniquely identifies the Storage Media on which the Composite Object(s) reside.",
         "name" : "Storage Media File-Set UID",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "3",
         "module" : "SR Document General",
         "entity" : "Document",
         "usage" : "M"
      },
      "(0008,0110)[<0>](0008,0103)" : {
         "name" : "Coding Scheme Version",
         "desc" : "The coding scheme version associated with the Coding Scheme Designator (0008,0102).",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "entity" : "Document",
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,0070)" : {
         "usage" : "M",
         "entity" : "Document",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "name" : "Manufacturer",
         "desc" : "Manufacturer of the equipment that contributed to the composite instance."
      },
      "(0040,1012)" : {
         "desc" : [
            "Coded reason(s) for performing this procedure.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "May differ from the values in Reason for the Requested Procedure (0040,100A) in Request Attribute Sequence (0040,0275), for example if what was performed differs from what was requested."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            },
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Reason For Performed Procedure Code Sequence",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "3",
         "module" : "General Study",
         "entity" : "Study",
         "usage" : "M"
      },
      "(0040,a730)[<0>](0040,a120)" : {
         "module" : "SR Document Content",
         "entity" : "Document",
         "usage" : "M",
         "desc" : [
            "This is the value of the Content Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "name" : "DateTime",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5"
         ],
         "req" : "1C"
      },
      "(0008,0110)[<0>](0008,0116)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "desc" : "Name of the organization responsible for the Coding Scheme. May include organizational contact information.",
         "name" : "Coding Scheme Responsible Organization",
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Document"
      },
      "(0400,0500)[<0>](0400,0510)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
         "name" : "Encrypted Content Transfer Syntax UID",
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Document"
      },
      "(0010,0024)[<0>](0040,0039)" : {
         "req" : "3",
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
         "name" : "Assigning Jurisdiction Code Sequence",
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0040,a730)[<0>](0070,0023)" : {
         "desc" : [
            "See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.18.9.1.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for Enumerated Values."
         ],
         "name" : "Graphic Type",
         "req" : "1",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.9-1"
         ],
         "module" : "SR Document Content",
         "entity" : "Document",
         "usage" : "M"
      },
      "(0040,a385)[<0>](0008,1115)[<1>](0040,e011)" : {
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document General",
         "req" : "3",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "name" : "Retrieve Location UID",
         "desc" : "Unique identifier of the system where the Composite Object(s) may be retrieved on the network."
      },
      "(0038,0010)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "req" : "3",
         "name" : "Admission ID",
         "desc" : "Identifier of the visit as assigned by the healthcare provider",
         "usage" : "U",
         "entity" : "Study",
         "module" : "Patient Study"
      },
      "(0008,0013)" : {
         "module" : "SOP Common",
         "entity" : "Document",
         "usage" : "M",
         "desc" : [
            "Time the SOP Instance was created.",
            "This is the time that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "name" : "Instance Creation Time",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0012,0021)" : {
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
         "usage" : "U",
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
         "name" : "Clinical Trial Protocol Name",
         "req" : "2",
         "mod_tables" : [
            "table_C.7-2b"
         ]
      },
      "(0040,a073)" : {
         "usage" : "M",
         "module" : "SR Document General",
         "entity" : "Document",
         "req" : "1C",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "desc" : [
            "The person or persons authorized to verify documents of this type and accept responsibility for the content of this document.",
            "One or more Items shall be included in this sequence.",
            "Required if Verification Flag (0040,A493) is VERIFIED.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "content" : [
                        "In HL7 Structured Documents, the comparable attribute is the \"legalAuthenticator\"."
                     ]
                  },
                  "\n                "
               ]
            }
         ],
         "name" : "Verifying Observer Sequence"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,1101)" : {
         "desc" : [
            "Specifies the format of the Red Palette Color Lookup Table Data (0028,1201). Required if Photometric Interpretation (0028,0004) has a value of PALETTE COLOR or Pixel Presentation (0008,9205) at the image level equals COLOR or MIXED. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.3.1.5"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "name" : "Red Palette Color Lookup Table Descriptor",
         "req" : "1C",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "module" : "SR Document Content",
         "entity" : "Document",
         "usage" : "M"
      },
      "(0010,4000)" : {
         "name" : "Patient Comments",
         "desc" : "User-defined additional information about the patient.",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3",
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M"
      },
      "(0038,0014)[<0>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "entity" : "Study",
         "module" : "Patient Study",
         "usage" : "U"
      },
      "(0040,a370)[<0>](0040,0026)[<1>](0040,0031)" : {
         "usage" : "M",
         "module" : "SR Document General",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-2",
            "table_10-17"
         ],
         "req" : "1C",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "name" : "Local Namespace Entity ID"
      },
      "(4ffe,0001)[<0>](0400,0010)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
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
                     ]
                  },
                  "\n                    "
               ]
            }
         ],
         "name" : "MAC Calculation Transfer Syntax UID"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,0100)" : {
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "req" : "1",
         "name" : "Bits Allocated",
         "desc" : [
            "Number of bits allocated for each pixel sample. Each sample shall have the same number of bits allocated. See ",
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
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document Content"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0033)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "name" : "Universal Entity ID Type",
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
         "req" : "1C"
      },
      "(0008,0051)[<0>](0040,0032)" : {
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "name" : "Universal Entity ID",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "module" : "General Study",
         "entity" : "Study",
         "usage" : "M"
      },
      "(0038,0064)[<0>](0040,0031)" : {
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "name" : "Local Namespace Entity ID",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "module" : "Patient Study",
         "entity" : "Study",
         "usage" : "U"
      },
      "(0040,a492)" : {
         "usage" : "M",
         "module" : "SR Document General",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "req" : "3",
         "desc" : "Explanation of the value sent in Completion Flag (0040,A491).",
         "name" : "Completion Flag Description"
      },
      "(0040,a078)" : {
         "module" : "SR Document General",
         "entity" : "Document",
         "usage" : "M",
         "desc" : [
            "The person or device that created the clinical content of this document. This attribute sets the default Observer Context for the root of the content tree.",
            "One or more Items are permitted in this sequence."
         ],
         "name" : "Author Observer Sequence",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "req" : "3"
      },
      "(0040,a730)[<0>](0040,a122)" : {
         "entity" : "Document",
         "module" : "SR Document Content",
         "usage" : "M",
         "name" : "Time",
         "desc" : [
            "This is the value of the Content Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5"
         ],
         "req" : "1C"
      },
      "(0040,a390)[<0>](0040,e001)" : {
         "desc" : "Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
         "name" : "HL7 Instance Identifier",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "module" : "SOP Common",
         "entity" : "Document",
         "usage" : "M"
      },
      "(0040,a730)[<0>](0040,a121)" : {
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document Content",
         "req" : "1C",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5"
         ],
         "name" : "Date",
         "desc" : [
            "This is the value of the Content Item.",
            "Required if Value Type (0040,A040) is DATE."
         ]
      },
      "(0040,a730)" : {
         "usage" : "M",
         "module" : "SR Document Content",
         "entity" : "Document",
         "req" : "1C",
         "mod_tables" : [
            "table_C.17-6"
         ],
         "desc" : [
            "A potentially recursively nested Sequence of Items that conveys content that is the Target of Relationships with the enclosing Source Content Item.",
            "One or more Items shall be included in this sequence.",
            "Required if the enclosing Content Item has relationships.",
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
                                    "If this Attribute is not present then the enclosing Item is a leaf."
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
                                    "The order of Items within this Sequence is semantically significant for presentation."
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
         "name" : "Content Sequence"
      },
      "(0020,9172)[<0>](0008,1150)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID"
      },
      "(0040,a073)[<0>](0040,a027)" : {
         "mod_tables" : [
            "table_C.17-2"
         ],
         "req" : "1",
         "desc" : "Organization to which the Verifying Observer Name (0040,A075) is accountable in the current interpretation procedure.",
         "name" : "Verifying Organization",
         "usage" : "M",
         "module" : "SR Document General",
         "entity" : "Document"
      },
      "(0008,0096)[<0>](0040,1103)" : {
         "usage" : "M",
         "module" : "General Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "3",
         "desc" : "Person's telephone number(s)",
         "name" : "Person's Telephone Numbers"
      },
      "(0040,a730)[<0>](0040,a504)[<1>](0008,0105)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.8-1"
         ],
         "name" : "Mapping Resource",
         "desc" : [
            [
               "Mapping Resource that defines the template. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_8.4",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
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
               "type" : "variablelist",
               "title" : "Defined Terms:"
            }
         ],
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document Content"
      },
      "(0040,a078)[<0>](0040,1101)" : {
         "module" : "SR Document General",
         "entity" : "Document",
         "usage" : "M",
         "desc" : [
            "Coded identifier of person observer.",
            "Zero or one Item shall be included in this sequence.",
            "Required if Observer Type value is PSN."
         ],
         "name" : "Person Identification Code Sequence",
         "req" : "2C",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3b"
         ]
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,0106)" : {
         "entity" : "Document",
         "module" : "SR Document Content",
         "usage" : "M",
         "name" : "Smallest Image Pixel Value",
         "desc" : "The minimum actual pixel value encountered in this image.",
         "req" : "3",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ]
      },
      "(0012,0020)" : {
         "usage" : "U",
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "req" : "1",
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
         "name" : "Clinical Trial Protocol ID"
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0100)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "name" : "Digital Signature UID",
         "desc" : "The Unique Identifier of a Digital Signature held in the referenced SOP Instance.",
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document General"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,0004)" : {
         "module" : "SR Document Content",
         "entity" : "Document",
         "usage" : "M",
         "desc" : [
            "Specifies the intended interpretation of the pixel data. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.3.1.2"
               }
            },
            " for further explanation."
         ],
         "name" : "Photometric Interpretation",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "req" : "1"
      },
      "(fffa,fffa)[<0>](0400,0115)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Document",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
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
                     "el" : "orderedlist",
                     "attrs" : {
                        "numeration" : "arabic"
                     }
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ],
         "name" : "Certificate of Signer"
      },
      "(0040,a390)[<0>](0008,1150)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Document"
      },
      "(0010,1002)[<0>](0010,0020)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "1",
         "desc" : "An identification number or code used to identify the patient.",
         "name" : "Patient ID",
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0008,103e)" : {
         "usage" : "M",
         "entity" : "Series",
         "module" : "SR Document Series",
         "req" : "3",
         "mod_tables" : [
            "table_C.17-1"
         ],
         "name" : "Series Description",
         "desc" : "Description of the Series"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,0107)" : {
         "name" : "Largest Image Pixel Value",
         "desc" : "The maximum actual pixel value encountered in this image.",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "req" : "3",
         "entity" : "Document",
         "module" : "SR Document Content",
         "usage" : "M"
      },
      "(0008,0050)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "2",
         "name" : "Accession Number",
         "desc" : "A RIS generated number that identifies the order for the Study.",
         "usage" : "M",
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0010,1021)" : {
         "usage" : "U",
         "entity" : "Study",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "req" : "3",
         "name" : "Patient's Size Code Sequence",
         "desc" : [
            "Patient's size category code",
            "One or more Items are permitted in this sequence."
         ]
      },
      "(0008,1049)[<0>](0040,1101)" : {
         "module" : "General Study",
         "entity" : "Study",
         "usage" : "M",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Person Identification Code Sequence",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "1"
      },
      "(0010,1002)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "desc" : [
            "A sequence of identification numbers or codes used to identify the patient, which may or may not be human readable, and may or may not have been obtained from an implanted or attached device such as an RFID or barcode.",
            "One or more Items are permitted in this sequence."
         ],
         "name" : "Other Patient IDs Sequence",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "req" : "1C",
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0080)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "req" : "1C",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "name" : "Institution Name"
      },
      "(0040,a493)" : {
         "entity" : "Document",
         "module" : "SR Document General",
         "usage" : "M",
         "name" : "Verification Flag",
         "desc" : [
            "Indicates whether this SR Document is Verified.",
            {
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            },
            "A value of \"VERIFIED\" shall be used only when the value of Completion Flag (0040,A491) is \"COMPLETE\".",
            {
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "The intent of this specification is that the \"prevailing final version\" of an SR Document is the version having the most recent Verification DateTime (0040,A030), Verification Flag (0040,A493) of VERIFIED and Preliminary Flag (0040,A496) of FINAL."
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
         "req" : "1"
      },
      "(0040,a07c)[<0>](0008,0082)" : {
         "entity" : "Document",
         "module" : "SR Document General",
         "usage" : "M",
         "name" : "Institution Code Sequence",
         "desc" : [
            "Coded identifier of Custodial Institution or Organization.",
            "Zero or one Item shall be included in this sequence."
         ],
         "req" : "2",
         "mod_tables" : [
            "table_C.17-2"
         ]
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
         "name" : "Clinical Trial Subject Reading ID",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "req" : "1C",
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
         "usage" : "U"
      },
      "(fffa,fffa)[<0>](0400,0110)" : {
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
               ],
               "el" : "note"
            }
         ],
         "name" : "Certificate Type",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1",
         "module" : "SOP Common",
         "entity" : "Document",
         "usage" : "M"
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0010)" : {
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
         "name" : "MAC Calculation Transfer Syntax UID",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "1",
         "module" : "SR Document General",
         "entity" : "Document",
         "usage" : "M"
      },
      "(0040,a07a)[<0>](0040,a080)" : {
         "name" : "Participation Type",
         "desc" : [
            [
               "Participant's role with respect to the clinical content of this document. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.17.2.5"
                  }
               },
               "."
            ],
            {
               "title" : "Defined Terms:",
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
               ]
            },
            {
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "content" : [
                        "In HL7 Structured Documents, the participation comparable to Attestor is the \"Authenticator\"."
                     ]
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "entity" : "Document",
         "module" : "SR Document General",
         "usage" : "M"
      },
      "(0010,0032)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "desc" : "Birth time of the Patient.",
         "name" : "Patient's Birth Time",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0040,a730)[<0>](0040,a300)" : {
         "name" : "Measured Value Sequence",
         "desc" : [
            "This is the value of the Content Item.",
            "Shall consist of a Sequence of Items conveying the measured value(s), which represent integers or real numbers and units of measurement.",
            "Zero or one Item shall be included in this sequence."
         ],
         "req" : "2",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.1-1"
         ],
         "entity" : "Document",
         "module" : "SR Document Content",
         "usage" : "M"
      },
      "(0040,a385)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0015)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "name" : "MAC Algorithm",
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
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document General"
      },
      "(0008,1062)[<0>](0008,0081)" : {
         "usage" : "M",
         "module" : "General Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "3",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "name" : "Institution Address"
      },
      "(0040,a385)[<0>](0008,1115)[<1>](0088,0130)" : {
         "module" : "SR Document General",
         "entity" : "Document",
         "usage" : "M",
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the Composite Object (s) reside.",
         "name" : "Storage Media File-Set ID",
         "req" : "3",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)" : {
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
         "name" : "Assigning Facility Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "req" : "3",
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M"
      },
      "(0040,a073)[<0>](0040,a088)" : {
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document General",
         "req" : "2",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "name" : "Verifying Observer Identification Code Sequence",
         "desc" : [
            "Coded identifier of Verifying Observer.",
            "Zero or one Item shall be included in this sequence."
         ]
      },
      "(0040,a385)[<0>](0008,1115)" : {
         "entity" : "Document",
         "module" : "SR Document General",
         "usage" : "M",
         "name" : "Referenced Series Sequence",
         "desc" : [
            "Sequence of Items where each Item includes the Attributes of a Series containing referenced Composite Object(s).",
            "One or more Items shall be included in this sequence"
         ],
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3"
         ],
         "req" : "1"
      },
      "(0008,0020)" : {
         "usage" : "M",
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "2",
         "name" : "Study Date",
         "desc" : "Date the Study started."
      },
      "(0040,a360)[<0>](0008,1115)[<1>](0088,0130)" : {
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "3",
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the Composite Object (s) reside.",
         "name" : "Storage Media File-Set ID",
         "usage" : "M",
         "module" : "SR Document General",
         "entity" : "Document"
      },
      "(0008,0096)[<0>](0040,1101)" : {
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Person Identification Code Sequence",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "1",
         "module" : "General Study",
         "entity" : "Study",
         "usage" : "M"
      },
      "(0008,114a)[<0>](0008,1150)" : {
         "usage" : "M",
         "module" : "SR Document General",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-2",
            "table_10-11"
         ],
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID"
      },
      "(0040,a372)" : {
         "mod_tables" : [
            "table_C.17-2"
         ],
         "req" : "2",
         "desc" : "A Sequence that conveys the codes of the performed procedures pertaining to this SOP Instance. Zero or more Items shall be included in this sequence.",
         "name" : "Performed Procedure Code Sequence",
         "usage" : "M",
         "module" : "SR Document General",
         "entity" : "Document"
      },
      "(0040,a385)[<0>](0008,1115)[<1>](0008,1199)" : {
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "1",
         "desc" : [
            "References to Composite Object SOP Class/SOP Instance pairs that are part of the Study defined by Study Instance UID and the Series defined by Series Instance UID (0020,000E).",
            "One or more Items shall be included in this sequence."
         ],
         "name" : "Referenced SOP Sequence",
         "usage" : "M",
         "module" : "SR Document General",
         "entity" : "Document"
      },
      "(0020,0013)" : [
         {
            "name" : "Instance Number",
            "desc" : "A number that identifies the SR Document.",
            "req" : "1",
            "mod_tables" : [
               "table_C.17-2"
            ],
            "entity" : "Document",
            "module" : "SR Document General",
            "usage" : "M"
         },
         {
            "usage" : "M",
            "entity" : "Document",
            "module" : "SOP Common",
            "mod_tables" : [
               "table_C.12-1"
            ],
            "req" : "3",
            "name" : "Instance Number",
            "desc" : "A number that identifies this Composite object instance."
         }
      ],
      "(0040,a730)[<0>](0008,1199)[<1>](0008,114b)[<2>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_10-11"
         ],
         "req" : "1",
         "entity" : "Document",
         "module" : "SR Document Content",
         "usage" : "M"
      },
      "(0040,a07a)" : {
         "module" : "SR Document General",
         "entity" : "Document",
         "usage" : "M",
         "desc" : [
            "Persons or devices related to the clinical content of this document.",
            "One or more Items are permitted in this sequence."
         ],
         "name" : "Participant Sequence",
         "req" : "3",
         "mod_tables" : [
            "table_C.17-2"
         ]
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0020,000e)" : {
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "1",
         "name" : "Series Instance UID",
         "desc" : "Unique identifier of a Series that is part of this Study and contains the referenced Composite Object(s)."
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0088,0130)" : {
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the Composite Object (s) reside.",
         "name" : "Storage Media File-Set ID",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "3",
         "module" : "SR Document General",
         "entity" : "Document",
         "usage" : "M"
      },
      "(0012,0064)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "desc" : [
            "A code describing the mechanism or method use to remove the patient's identity.",
            "One or more Items shall be included in this sequence. Multiple items are used if successive de-identification steps have been performed or to describe options of a defined profile.",
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method (0012,0063) is not present. May be present otherwise."
         ],
         "name" : "De-identification Method Code Sequence",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "1C"
      },
      "(0040,a07a)[<0>](0008,0082)" : {
         "module" : "SR Document General",
         "entity" : "Document",
         "usage" : "M",
         "desc" : [
            "Institution or organization to which the identified person is responsible or accountable, or that manages the identified device.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "name" : "Institution Code Sequence",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3b"
         ],
         "req" : "2"
      },
      "(0040,a360)" : {
         "usage" : "M",
         "module" : "SR Document General",
         "entity" : "Document",
         "req" : "1C",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "desc" : [
            "Shall refer to SR SOP Instances (e.g., prior or preliminary reports) whose content has been wholly or partially included in this document with or without modification.",
            "One or more Items shall be included in this sequence.",
            "Required if this document includes content from other documents.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "The amendment process of an existing SR Document may be described using the Purpose of Reference Code Sequence."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ]
            }
         ],
         "name" : "Predecessor Documents Sequence"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,0011)" : {
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document Content",
         "req" : "1",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "name" : "Columns",
         "desc" : "Number of columns in the image"
      },
      "(0008,1111)[<0>](0008,1155)" : {
         "module" : "SR Document Series",
         "entity" : "Series",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.17-1",
            "table_10-11"
         ],
         "req" : "1"
      },
      "(0008,0090)" : {
         "usage" : "M",
         "module" : "General Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "2",
         "desc" : "Name of the patient's referring physician",
         "name" : "Referring Physician's Name"
      },
      "(0008,1110)[<0>](0008,1150)" : {
         "entity" : "Study",
         "module" : "General Study",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ]
      },
      "(0010,1001)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3",
         "name" : "Other Patient Names",
         "desc" : "Other names used to identify the patient.",
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0018,a001)[<0>](0018,a003)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "name" : "Contribution Description",
         "desc" : "Description of the contribution the equipment made to the composite instance.",
         "usage" : "M",
         "entity" : "Document",
         "module" : "SOP Common"
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)" : {
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "3",
         "name" : "Referenced Digital Signature Sequence",
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
      "(0010,0020)" : {
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "2",
         "name" : "Patient ID",
         "desc" : "Primary hospital identification number or code for the patient."
      },
      "(0040,a730)[<0>](0040,a504)[<1>](0040,db00)" : {
         "name" : "Template Identifier",
         "desc" : "Template identifier.",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.8-1"
         ],
         "req" : "1",
         "entity" : "Document",
         "module" : "SR Document Content",
         "usage" : "M"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,1201)" : {
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
         ],
         "name" : "Red Palette Color Lookup Table Data",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "req" : "1C",
         "module" : "SR Document Content",
         "entity" : "Document",
         "usage" : "M"
      },
      "(0038,0064)[<0>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "entity" : "Study",
         "module" : "Patient Study",
         "usage" : "U"
      },
      "(0018,a001)[<0>](0008,0080)" : {
         "module" : "SOP Common",
         "entity" : "Document",
         "usage" : "M",
         "desc" : "Institution where the equipment that contributed to the composite instance is located.",
         "name" : "Institution Name",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)" : {
         "module" : "SR Document Content",
         "entity" : "Document",
         "usage" : "M",
         "desc" : [
            "This Icon Image is representative of the Image.",
            "Only a single Item is permitted in this Sequence.",
            "The Icon Image may be no greater than 128 rows by 128 columns."
         ],
         "name" : "Icon Image Sequence",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1"
         ],
         "req" : "3"
      },
      "(0008,1120)" : {
         "desc" : [
            "A sequence that provides reference to a Patient SOP Class/Instance pair.",
            "Only a single Item is permitted in this Sequence."
         ],
         "name" : "Referenced Patient Sequence",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M"
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0008,1199)[<2>](0040,a170)" : {
         "entity" : "Document",
         "module" : "SR Document General",
         "usage" : "M",
         "name" : "Purpose of Reference Code Sequence",
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "One or more Items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "3"
      },
      "(0040,a370)[<0>](0008,0051)[<1>](0040,0031)" : {
         "module" : "SR Document General",
         "entity" : "Document",
         "usage" : "M",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "name" : "Local Namespace Entity ID",
         "req" : "1C",
         "mod_tables" : [
            "table_C.17-2",
            "table_10-17"
         ]
      },
      "(4ffe,0001)[<0>](0400,0005)" : {
         "module" : "SOP Common",
         "entity" : "Document",
         "usage" : "M",
         "desc" : "A number, unique within this SOP Instance, used to identify this MAC Parameters Sequence (4FFE,0001) item from an Item of the Digital Signatures Sequence (FFFA,FFFA).",
         "name" : "MAC ID Number",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0018,a001)[<0>](0018,1050)" : {
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "name" : "Spatial Resolution",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "module" : "SOP Common",
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
                     "content" : [
                        "This Attribute may be multi-valued."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ]
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "name" : "Referenced Frame Number",
         "req" : "1C",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1"
         ],
         "module" : "SR Document Content",
         "entity" : "Document",
         "usage" : "M"
      },
      "(fffa,fffa)[<0>](0400,0005)" : {
         "name" : "MAC ID Number",
         "desc" : "A number used to identify which MAC Parameters Sequence item was used in the calculation of this Digital Signature.",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1",
         "entity" : "Document",
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0040,a385)[<0>](0008,1115)[<1>](0008,0054)" : {
         "desc" : "Title of the DICOM Application Entity where the Composite Object(s) may be retrieved on the network.",
         "name" : "Retrieve AE Title",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "3",
         "module" : "SR Document General",
         "entity" : "Document",
         "usage" : "M"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0008,1155)" : {
         "entity" : "Document",
         "module" : "SR Document Content",
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.5-1",
            "table_C.18.3-1",
            "table_10-11"
         ]
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0008,1199)" : {
         "desc" : [
            "References to Composite Object SOP Class/SOP Instance pairs that are part of the Study defined by Study Instance UID and the Series defined by Series Instance UID (0020,000E).",
            "One or more Items shall be included in this sequence."
         ],
         "name" : "Referenced SOP Sequence",
         "req" : "1",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "SR Document General",
         "entity" : "Document",
         "usage" : "M"
      },
      "(0040,a370)[<0>](0040,2016)" : {
         "usage" : "M",
         "module" : "SR Document General",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "req" : "2",
         "desc" : "The order number assigned to the Imaging Service Request by the party placing the order.",
         "name" : "Placer Order Number/Imaging Service Request"
      },
      "(0100,0410)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
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
                     "el" : "para"
                  },
                  "\n                "
               ]
            }
         ],
         "name" : "SOP Instance Status",
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Document"
      },
      "(0008,0201)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Document",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Contains the offset from UTC to the timezone for all DA and TM Attributes present in this SOP Instance, and for all DT Attributes present in this SOP Instance that do not contain an explicitly encoded timezone offset.",
            "Encoded as an ASCII string in the format \"&ZZXX\". The components of this string, from left to right, are & = \"+\" or \"-\", and ZZ = Hours and XX = Minutes of offset. Leading space characters shall not be present.",
            "The offset for UTC shall be +0000; -0000 shall not be used.",
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
                                 "content" : [
                                    "This encoding is the same as described in ",
                                    {
                                       "el" : "olink",
                                       "attrs" : {
                                          "targetptr" : "PS3.5",
                                          "xrefstyle" : "select: labelnumber",
                                          "targetdoc" : "PS3.5"
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
                           "el" : "listitem",
                           "content" : [
                              "\n                      ",
                              {
                                 "content" : [
                                    "This Attribute does not apply to values with a DT Value Representation, that contains an explicitly encoded timezone offset."
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
                                    "The corrected time may cross a 24 hour boundary. For example, if Local Time = 1.00 a.m. and Offset = +0200, then UTC = 11.00 p.m. (23.00) the day before."
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
                     "el" : "orderedlist",
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
               "el" : "note",
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
               ]
            },
            "The local timezone offset is undefined if this Attribute is absent."
         ],
         "name" : "Timezone Offset From UTC"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0008,1199)[<2>](0008,1155)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document Content"
      },
      "(0008,114a)[<0>](0008,1155)" : {
         "usage" : "M",
         "module" : "SR Document General",
         "entity" : "Document",
         "req" : "1",
         "mod_tables" : [
            "table_C.17-2",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID"
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0008,0054)" : {
         "entity" : "Document",
         "module" : "SR Document General",
         "usage" : "M",
         "name" : "Retrieve AE Title",
         "desc" : "Title of the DICOM Application Entity where the Composite Object(s) may be retrieved on the network.",
         "req" : "3",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0012,0050)" : {
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "req" : "2",
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
         "name" : "Clinical Trial Time Point ID",
         "usage" : "U",
         "module" : "Clinical Trial Study",
         "entity" : "Study"
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0015)" : {
         "name" : "MAC Algorithm",
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
               "type" : "variablelist",
               "title" : "Defined Terms:"
            },
            {
               "el" : "note",
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
               ]
            }
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "entity" : "Document",
         "module" : "SR Document General",
         "usage" : "M"
      },
      "(0010,1010)" : {
         "usage" : "U",
         "entity" : "Study",
         "module" : "Patient Study",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Patient's Age",
         "desc" : "Age of the Patient."
      },
      "(0100,0426)" : {
         "usage" : "M",
         "entity" : "Document",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "name" : "Authorization Equipment Certification Number",
         "desc" : "The certification number issued to the Application Entity that set the SOP Instance Status (0100,0410) to AO."
      },
      "(0040,a385)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0100)" : {
         "desc" : "The Unique Identifier of a Digital Signature held in the referenced SOP Instance.",
         "name" : "Digital Signature UID",
         "req" : "1",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "SR Document General",
         "entity" : "Document",
         "usage" : "M"
      },
      "(0008,0110)[<0>](0008,010c)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme UID",
         "desc" : "The coding scheme UID identifier. Required if coding scheme is identified by an ISO 8824 object identifier compatible with the UI VR.",
         "usage" : "M",
         "entity" : "Document",
         "module" : "SOP Common"
      },
      "(0040,a730)[<0>](0040,a124)" : {
         "module" : "SR Document Content",
         "entity" : "Document",
         "usage" : "M",
         "desc" : [
            "This is the value of the Content Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "name" : "UID",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5"
         ],
         "req" : "1C"
      },
      "(0010,2292)" : {
         "module" : "Patient",
         "entity" : "Patient",
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
            "Required if the patient is an animal and if Patient Breed Code Sequence (0010,2293) is empty. May be present otherwise."
         ],
         "name" : "Patient Breed Description",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "2C"
      },
      "(0010,0024)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this sequence."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0040,a370)[<0>](0040,0026)[<1>](0040,0032)" : {
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "name" : "Universal Entity ID",
         "req" : "1C",
         "mod_tables" : [
            "table_C.17-2",
            "table_10-17"
         ],
         "module" : "SR Document General",
         "entity" : "Document",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,0081)" : {
         "usage" : "M",
         "entity" : "Document",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "name" : "Institution Address",
         "desc" : "Address of the institution where the equipment that contributed to the composite instance is located."
      },
      "(0008,0081)" : {
         "usage" : "M",
         "entity" : "Equipment",
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "req" : "3",
         "name" : "Institution Address",
         "desc" : "Mailing address of the institution where the equipment that produced the composite instances is located."
      },
      "(0040,a360)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0404)" : {
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
                  "linkend" : "sect_C.12.1.1.3.1.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "name" : "MAC",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "1",
         "module" : "SR Document General",
         "entity" : "Document",
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
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
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ]
      },
      "(0040,a360)[<0>](0008,1115)[<1>](0008,0054)" : {
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "3",
         "name" : "Retrieve AE Title",
         "desc" : "Title of the DICOM Application Entity where the Composite Object(s) may be retrieved on the network.",
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document General"
      },
      "(0012,0083)[<0>](0012,0084)" : {
         "usage" : "U",
         "entity" : "Study",
         "module" : "Clinical Trial Study",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "name" : "Distribution Type",
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
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.2.3.1.2"
                  }
               },
               "."
            ],
            "Required if Consent for Distribution Flag (0012,0085) equals YES or WITHDRAWN."
         ]
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,0034)" : {
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document Content",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "req" : "1C",
         "name" : "Pixel Aspect Ratio",
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
         ]
      },
      "(0040,a078)[<0>](0040,a123)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3b"
         ],
         "desc" : [
            "Name of the person observer for this document Instance.",
            "Required if Observer Type value is PSN."
         ],
         "name" : "Person Name",
         "usage" : "M",
         "module" : "SR Document General",
         "entity" : "Document"
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0404)" : {
         "entity" : "Document",
         "module" : "SR Document General",
         "usage" : "M",
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
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.12.1.1.3.1.2"
               },
               "el" : "xref"
            },
            "."
         ],
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "1"
      },
      "(0008,0096)[<0>](0040,1102)" : {
         "module" : "General Study",
         "entity" : "Study",
         "usage" : "M",
         "desc" : "Person's mailing address",
         "name" : "Person's Address",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "entity" : "Document",
         "module" : "SR Document General",
         "usage" : "M"
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "entity" : "Document",
         "module" : "SR Document General",
         "usage" : "M"
      },
      "(0012,0082)" : {
         "desc" : "Approval number issued by committee described in Clinical Trial Protocol Ethics Committee Name (0012,0081).",
         "name" : "Clinical Trial Protocol Ethics Committee Approval Number",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "req" : "3",
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
         "usage" : "U"
      },
      "(0040,a385)" : {
         "mod_tables" : [
            "table_C.17-2"
         ],
         "req" : "1C",
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
         ],
         "name" : "Pertinent Other Evidence Sequence",
         "usage" : "M",
         "module" : "SR Document General",
         "entity" : "Document"
      },
      "(0040,a730)[<0>](0008,1199)" : {
         "usage" : "M",
         "module" : "SR Document Content",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.5-1",
            "table_C.18.3-1"
         ],
         "req" : "1",
         "desc" : [
            "References to Composite Object SOP Class/SOP Instance pairs.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Referenced SOP Sequence"
      },
      "(0008,1110)[<0>](0008,1155)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "module" : "General Study",
         "entity" : "Study"
      },
      "(0008,1049)[<0>](0008,0080)" : {
         "usage" : "M",
         "module" : "General Study",
         "entity" : "Study",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "name" : "Institution Name"
      },
      "(0040,a360)[<0>](0008,1115)[<1>](0088,0140)" : {
         "name" : "Storage Media File-Set UID",
         "desc" : "Uniquely identifies the Storage Media on which the Composite Object(s) reside.",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "3",
         "entity" : "Document",
         "module" : "SR Document General",
         "usage" : "M"
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)" : {
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "3",
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
         "name" : "Referenced SOP Instance MAC Sequence",
         "usage" : "M",
         "module" : "SR Document General",
         "entity" : "Document"
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0010)" : {
         "module" : "SR Document General",
         "entity" : "Document",
         "usage" : "M",
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
                                 "el" : "para",
                                 "content" : [
                                    "This does not constrain the transfer syntax used to transmit the object."
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
         "name" : "MAC Calculation Transfer Syntax UID",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "1"
      },
      "(0040,a360)[<0>](0008,1115)[<1>](0040,e011)" : {
         "module" : "SR Document General",
         "entity" : "Document",
         "usage" : "M",
         "desc" : "Unique identifier of the system where the Composite Object(s) may be retrieved on the network.",
         "name" : "Retrieve Location UID",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "3"
      },
      "(0010,21b0)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "req" : "3",
         "name" : "Additional Patient History",
         "desc" : "Additional information about the Patient's medical history.",
         "usage" : "U",
         "entity" : "Study",
         "module" : "Patient Study"
      },
      "(0040,a730)[<0>](0070,031a)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.9-1"
         ],
         "name" : "Fiducial UID",
         "desc" : [
            "The globally unique identifier for this fiducial item.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "The fiducial UID can be used to associate this set of graphics with other Content Items."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document Content"
      },
      "(0010,2180)" : {
         "usage" : "U",
         "module" : "Patient Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "req" : "3",
         "desc" : "Occupation of the Patient.",
         "name" : "Occupation"
      },
      "(0040,a370)[<0>](0020,000d)" : {
         "desc" : "Unique identifier for the Study.",
         "name" : "Study Instance UID",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "req" : "1",
         "module" : "SR Document General",
         "entity" : "Document",
         "usage" : "M"
      },
      "(0040,a385)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0020)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "name" : "Data Elements Signed",
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
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document General"
      },
      "(0008,1062)[<0>](0040,1103)" : {
         "usage" : "M",
         "module" : "General Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "3",
         "desc" : "Person's telephone number(s)",
         "name" : "Person's Telephone Numbers"
      },
      "(0008,0021)" : {
         "name" : "Series Date",
         "desc" : "Date the Series started.",
         "mod_tables" : [
            "table_C.17-1"
         ],
         "req" : "3",
         "entity" : "Series",
         "module" : "SR Document Series",
         "usage" : "M"
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0088,0140)" : {
         "name" : "Storage Media File-Set UID",
         "desc" : "Uniquely identifies the Storage Media on which the Composite Object(s) reside.",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "3",
         "entity" : "Document",
         "module" : "SR Document General",
         "usage" : "M"
      },
      "(fffa,fffa)[<0>](0400,0105)" : {
         "entity" : "Document",
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Digital Signature DateTime",
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
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1"
      },
      "(0400,0561)" : {
         "entity" : "Document",
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Original Attributes Sequence",
         "desc" : [
            "Sequence of Items containing all attributes that were removed or replaced by other values in the main data set.",
            "One or more Items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3"
      },
      "(0040,a730)[<0>](0040,a138)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.7-1"
         ],
         "desc" : [
            "Specifies temporal points for reference by number of seconds after start of data.",
            "Required if Referenced Sample Positions (0040,A132) and Referenced DateTime (0040,A13A) are not present."
         ],
         "name" : "Referenced Time Offsets",
         "usage" : "M",
         "module" : "SR Document Content",
         "entity" : "Document"
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0015)" : {
         "name" : "MAC Algorithm",
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
         "req" : "1",
         "entity" : "Document",
         "module" : "SR Document General",
         "usage" : "M"
      },
      "(0040,a730)[<0>](0040,a13a)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.7-1"
         ],
         "desc" : [
            "Specifies temporal points for reference by absolute time.",
            "Required if Referenced Sample Positions (0040,A132) and Referenced Time Offsets (0040,A138) are not present."
         ],
         "name" : "Referenced DateTime",
         "usage" : "M",
         "module" : "SR Document Content",
         "entity" : "Document"
      },
      "(0008,001a)" : {
         "module" : "SOP Common",
         "entity" : "Document",
         "usage" : "M",
         "desc" : [
            "Uniquely identifies a Related General SOP Class for the SOP Class of this Instance. See ",
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
         "name" : "Related General SOP Class UID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3"
      },
      "(0040,a730)[<0>](0040,a300)[<1>](0040,a162)" : {
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.1-1"
         ],
         "req" : "1C",
         "name" : "Rational Numerator Value",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. Only a single value shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document Content"
      },
      "(0008,0031)" : {
         "name" : "Series Time",
         "desc" : "Time the Series started.",
         "mod_tables" : [
            "table_C.17-1"
         ],
         "req" : "3",
         "entity" : "Series",
         "module" : "SR Document Series",
         "usage" : "M"
      },
      "(0008,0015)" : {
         "name" : "Instance Coercion DateTime",
         "desc" : [
            "Date and time that the SOP Instance was last coerced by a Storage SCP (see ",
            {
               "el" : "olink",
               "attrs" : {
                  "targetptr" : "PS3.4",
                  "xrefstyle" : "select: labelnumber",
                  "targetdoc" : "PS3.4"
               }
            },
            ")."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Document",
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1010)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Document",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "User defined name identifying the machine that contributed to the composite instance.",
         "name" : "Station Name"
      },
      "(0040,a730)[<0>](0040,a132)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.7-1"
         ],
         "desc" : [
            "List of samples within a multiplex group specifying temporal points of the referenced data. Position of first sample is 1.",
            "Required if the Referenced SOP Instance is a Waveform and Referenced Time Offsets (0040,A138) and Referenced DateTime (0040,A13A) are not present.",
            "May be used only if Referenced Channels (0040,A0B0) refers to channels within a single multiplex group."
         ],
         "name" : "Referenced Sample Positions",
         "usage" : "M",
         "module" : "SR Document Content",
         "entity" : "Document"
      },
      "(0008,1062)[<0>](0040,1101)" : {
         "module" : "General Study",
         "entity" : "Study",
         "usage" : "M",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Person Identification Code Sequence",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0040,a525)" : {
         "mod_tables" : [
            "table_C.17-2"
         ],
         "req" : "1C",
         "name" : "Identical Documents Sequence",
         "desc" : [
            "Duplicates of this document, stored with different SOP Instance UIDs.",
            "One or more Items shall be included in this sequence.",
            "Required if this document is stored with different SOP Instance UIDs in one or more other Studies.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.17.2.2"
                  }
               },
               " for further explanation."
            ]
         ],
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document General"
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1150)" : {
         "entity" : "Document",
         "module" : "SR Document General",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "req" : "1"
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0008,0054)" : {
         "module" : "SR Document General",
         "entity" : "Document",
         "usage" : "M",
         "desc" : "Title of the DICOM Application Entity where the Composite Object(s) may be retrieved on the network.",
         "name" : "Retrieve AE Title",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "3"
      },
      "(0040,a385)[<0>](0020,000d)" : {
         "usage" : "M",
         "module" : "SR Document General",
         "entity" : "Document",
         "req" : "1",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3"
         ],
         "desc" : "Unique identifier for the Study",
         "name" : "Study Instance UID"
      },
      "(0018,1000)" : {
         "entity" : "Equipment",
         "module" : "General Equipment",
         "usage" : "M",
         "name" : "Device Serial Number",
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
         "req" : "3",
         "mod_tables" : [
            "table_C.7-8"
         ]
      },
      "(0010,1002)[<0>](0010,0024)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "req" : "3"
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0008,1199)[<2>](0040,a170)" : {
         "name" : "Purpose of Reference Code Sequence",
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "One or more Items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "3",
         "entity" : "Document",
         "module" : "SR Document General",
         "usage" : "M"
      },
      "(0040,a385)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0120)" : {
         "module" : "SR Document General",
         "entity" : "Document",
         "usage" : "M",
         "desc" : "The Signature Value identified by the Digital Signature UID within the Referenced SOP Instance UID.",
         "name" : "Signature",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "1"
      },
      "(0040,a370)[<0>](0040,0027)" : {
         "name" : "Order Filler Identifier Sequence",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Filler Order Number.",
            "Only a single Item is permitted in this sequence."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "entity" : "Document",
         "module" : "SR Document General",
         "usage" : "M"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0032)" : {
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "req" : "1C",
         "name" : "Universal Entity ID",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise."
      },
      "(0400,0500)[<0>](0400,0520)" : {
         "usage" : "M",
         "entity" : "Document",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
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
         ]
      },
      "(0010,2201)" : {
         "name" : "Patient Species Description",
         "desc" : [
            "The species of the patient.",
            "Required if the patient is an animal and if Patient Species Code Sequence (0010,2202) is not present. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "1C",
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M"
      },
      "(0040,a491)" : {
         "name" : "Completion Flag",
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
               "list" : [
                  [
                     "PARTIAL",
                     "Partial content."
                  ],
                  [
                     "COMPLETE",
                     "Complete content."
                  ]
               ],
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "mod_tables" : [
            "table_C.17-2"
         ],
         "req" : "1",
         "entity" : "Document",
         "module" : "SR Document General",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0018,1201)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Document",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
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
         "name" : "Time of Last Calibration"
      },
      "(0018,1200)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
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
         ],
         "name" : "Date of Last Calibration",
         "usage" : "M",
         "module" : "General Equipment",
         "entity" : "Equipment"
      },
      "(0400,0561)[<0>](0400,0550)[0](gggg,eeee)" : {
         "desc" : "May include Sequence Attributes and their Items.",
         "name" : "Any Attribute from the main data set that was modified or removed.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "module" : "SOP Common",
         "entity" : "Document",
         "usage" : "M"
      },
      "(0032,1034)" : {
         "module" : "General Study",
         "entity" : "Study",
         "usage" : "M",
         "desc" : [
            "Institutional department where the request initiated.",
            "Only a single item is permitted in this sequence."
         ],
         "name" : "Requesting Service Code Sequence",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0018,1030)" : {
         "module" : "SR Document Series",
         "entity" : "Series",
         "usage" : "M",
         "desc" : [
            "Description of the conditions under which the Series was performed.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "This may represent the type of analysis used in creation of the SR SOP Instances."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "name" : "Protocol Name",
         "req" : "3",
         "mod_tables" : [
            "table_C.17-1"
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0081)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "name" : "Institution Address",
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Document"
      },
      "(0018,a001)[<0>](0018,a002)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "name" : "Contribution DateTime",
         "desc" : "The Date & Time when the equipment contributed to the composite instance.",
         "usage" : "M",
         "entity" : "Document",
         "module" : "SOP Common"
      },
      "(0028,0120)" : {
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
               ]
            }
         ],
         "name" : "Pixel Padding Value",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "req" : "1C",
         "module" : "General Equipment",
         "entity" : "Equipment",
         "usage" : "M"
      },
      "(0400,0561)[<0>](0400,0562)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Date and time the attributes were removed and/or replaced.",
         "name" : "Attribute Modification DateTime",
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Document"
      },
      "(0040,a730)[<0>](0040,a160)" : {
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document Content",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5"
         ],
         "req" : "1C",
         "name" : "Text Value",
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
                     "content" : [
                        "The text may contain single or multi-byte characters and use code extension techniques as described in ",
                        {
                           "el" : "olink",
                           "attrs" : {
                              "xrefstyle" : "select: labelnumber",
                              "targetptr" : "PS3.5",
                              "targetdoc" : "PS3.5"
                           }
                        },
                        " if permitted by the values of Specific Character Set (0008,0005)."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ]
            }
         ]
      },
      "(0040,a360)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0015)" : {
         "entity" : "Document",
         "module" : "SR Document General",
         "usage" : "M",
         "name" : "MAC Algorithm",
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
               "type" : "variablelist",
               "title" : "Defined Terms:"
            },
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
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
                  "\n                  "
               ]
            }
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0040,e011)" : {
         "entity" : "Document",
         "module" : "SR Document General",
         "usage" : "M",
         "name" : "Retrieve Location UID",
         "desc" : "Unique identifier of the system where the Composite Object(s) may be retrieved on the network.",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "3"
      },
      "(0040,a07a)[<0>](0008,0080)" : {
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3b"
         ],
         "req" : "2",
         "name" : "Institution Name",
         "desc" : "Institution or organization to which the identified person is responsible or accountable, or that manages the identified device."
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0082)" : {
         "entity" : "Document",
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Institution Code Sequence",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "req" : "1C"
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
         "name" : "Referenced SOP Instance MAC Sequence",
         "req" : "3",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "SR Document General",
         "entity" : "Document",
         "usage" : "M"
      },
      "(0040,a07a)[<0>](0008,1090)" : {
         "desc" : [
            "Model Name of the device observer.",
            "Required if Observer Type value is DEV."
         ],
         "name" : "Manufacturer's Model Name",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3b"
         ],
         "req" : "1C",
         "module" : "SR Document General",
         "entity" : "Document",
         "usage" : "M"
      },
      "(0040,a730)[<0>](0040,a300)[<1>](0040,a30a)" : {
         "entity" : "Document",
         "module" : "SR Document Content",
         "usage" : "M",
         "name" : "Numeric Value",
         "desc" : [
            "Numeric measurement value.",
            "Only a single value shall be present."
         ],
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.1-1"
         ],
         "req" : "1"
      },
      "(0010,2298)" : {
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
         "name" : "Responsible Person Role",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "1C",
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M"
      },
      "(0040,a07a)[<0>](0008,1010)" : {
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3b"
         ],
         "req" : "2C",
         "name" : "Station Name",
         "desc" : [
            "Name of the device observer for this document instance.",
            "Required if Observer Type value is DEV."
         ]
      },
      "(0040,a730)[<0>](0040,db73)" : {
         "module" : "SR Document Content",
         "entity" : "Document",
         "usage" : "M",
         "desc" : [
            "An ordered set of one or more integers that uniquely identifies the Target Content Item of the relationship.",
            "The root Content Item is referenced by a single value of 1.",
            "Each subsequent integer represents an ordinal position of a Content Item in the Content Sequence (0040,A730) in which it belongs. The Referenced Content Item Identifier is the set of these ordinal positions along the by-value relationship path. The number of values in this Multi-Value Attribute is exactly the number of relationships traversed in the SR content tree plus one.",
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
                           "content" : [
                              "\n                      ",
                              {
                                 "el" : "para",
                                 "content" : [
                                    "See ",
                                    {
                                       "attrs" : {
                                          "xrefstyle" : "select: label",
                                          "linkend" : "sect_C.17.3.2.5"
                                       },
                                       "el" : "xref"
                                    },
                                    "."
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
                                    "Content Items are ordered in a Content Sequence starting from 1 as defined in VR of SQ (see ",
                                    {
                                       "attrs" : {
                                          "targetdoc" : "PS3.5",
                                          "targetptr" : "PS3.5",
                                          "xrefstyle" : "select: labelnumber"
                                       },
                                       "el" : "olink"
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
                     "el" : "orderedlist"
                  },
                  "\n                "
               ]
            },
            "Required if the Target Content Item is denoted by-reference, i.e., the Document Relationship Macro and Document Content Macro are not included."
         ],
         "name" : "Referenced Content Item Identifier",
         "mod_tables" : [
            "table_C.17-6"
         ],
         "req" : "1C"
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0088,0130)" : {
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the Composite Object (s) reside.",
         "name" : "Storage Media File-Set ID",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "3",
         "module" : "SR Document General",
         "entity" : "Document",
         "usage" : "M"
      },
      "(0040,a385)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0010)" : {
         "module" : "SR Document General",
         "entity" : "Document",
         "usage" : "M",
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
         "name" : "MAC Calculation Transfer Syntax UID",
         "req" : "1",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0040,a073)[<0>](0040,a030)" : {
         "name" : "Verification DateTime",
         "desc" : "Date and Time of verification by the Verifying Observer Name (0040,A075).",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "req" : "1",
         "entity" : "Document",
         "module" : "SR Document General",
         "usage" : "M"
      },
      "(0010,2202)" : {
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "1C",
         "name" : "Patient Species Code Sequence",
         "desc" : [
            "The species of the patient.",
            "Only a single Item shall be included in this sequence.",
            "Required if the patient is an animal and if Patient Species Description (0010,2201) is not present. May be present otherwise."
         ]
      },
      "(0012,0060)" : {
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "req" : "2",
         "name" : "Clinical Trial Coordinating Center Name",
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
         "usage" : "U",
         "entity" : "Series",
         "module" : "Clinical Trial Series"
      },
      "(0008,1048)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3"
         ],
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
         "usage" : "M",
         "module" : "General Study",
         "entity" : "Study"
      },
      "(0012,0072)" : {
         "entity" : "Series",
         "module" : "Clinical Trial Series",
         "usage" : "U",
         "name" : "Clinical Trial Series Description",
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
         "req" : "3"
      },
      "(0040,a730)[<0>](0040,a010)" : {
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
               "type" : "variablelist",
               "title" : "Defined Terms:"
            },
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.17.3.2.4"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "name" : "Relationship Type",
         "req" : "1",
         "mod_tables" : [
            "table_C.17-6"
         ],
         "module" : "SR Document Content",
         "entity" : "Document",
         "usage" : "M"
      },
      "(0010,0024)[<0>](0040,003a)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
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
         "name" : "Assigning Agency or Department Code Sequence",
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0040,a730)[<0>](0040,a300)[<1>](0040,a161)" : {
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.1-1"
         ],
         "req" : "1C",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). Only a single value shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "name" : "Floating Point Value",
         "usage" : "M",
         "module" : "SR Document Content",
         "entity" : "Document"
      },
      "(0008,1110)" : {
         "entity" : "Study",
         "module" : "General Study",
         "usage" : "M",
         "name" : "Referenced Study Sequence",
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
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "3"
      },
      "(0040,a370)[<0>](0040,2017)" : {
         "module" : "SR Document General",
         "entity" : "Document",
         "usage" : "M",
         "desc" : "The order number assigned to the Imaging Service Request by the party filling the order.",
         "name" : "Filler Order Number/Imaging Service Request",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "req" : "2"
      },
      "(0008,1111)[<0>](0008,1150)" : {
         "mod_tables" : [
            "table_C.17-1",
            "table_10-11"
         ],
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M",
         "entity" : "Series",
         "module" : "SR Document Series"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0032)" : {
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
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
         "name" : "Universal Entity ID"
      },
      "(0008,0096)[<0>](0008,0082)" : {
         "module" : "General Study",
         "entity" : "Study",
         "usage" : "M",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Institution Code Sequence",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0400,0561)[<0>](0400,0550)" : {
         "entity" : "Document",
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Modified Attributes Sequence",
         "desc" : [
            "Sequence that contains all the Attributes, with their previous values, that were modified or removed from the main data set.",
            "Only a single Item shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1"
      },
      "(0012,0030)" : {
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "req" : "2",
         "desc" : [
            "The identifier of the site responsible for submitting clinical trial data. See ",
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
         "usage" : "U",
         "module" : "Clinical Trial Subject",
         "entity" : "Patient"
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)" : {
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "3",
         "name" : "Referenced Digital Signature Sequence",
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
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document General"
      },
      "(0012,0083)[<0>](0012,0020)" : {
         "usage" : "U",
         "module" : "Clinical Trial Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "req" : "1C",
         "desc" : [
            "The identifier of the protocol for which consent to distribute has been granted.",
            "Required if Distribution Type (0012,0084) is NAMED_PROTOCOL and the protocol is not that which is specified in Clinical Trial Protocol ID (0012,0020) in the Clinical Trial Subject Module."
         ],
         "name" : "Clinical Trial Protocol ID"
      },
      "(0012,0010)" : {
         "name" : "Clinical Trial Sponsor Name",
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
         "req" : "1",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "entity" : "Patient",
         "module" : "Clinical Trial Subject",
         "usage" : "U"
      },
      "(0040,a078)[<0>](0040,a084)" : {
         "entity" : "Document",
         "module" : "SR Document General",
         "usage" : "M",
         "name" : "Observer Type",
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
            "type" : "variablelist",
            "title" : "Enumerated Values:"
         },
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3b"
         ],
         "req" : "1"
      },
      "(0008,0016)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
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
                  "targetdoc" : "PS3.4",
                  "targetptr" : "PS3.4",
                  "xrefstyle" : "select: labelnumber"
               }
            },
            "."
         ],
         "name" : "SOP Class UID",
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Document"
      },
      "(0038,0014)[<0>](0040,0033)" : {
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
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
         "name" : "Universal Entity ID Type",
         "usage" : "U",
         "module" : "Patient Study",
         "entity" : "Study"
      },
      "(0012,0040)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "name" : "Clinical Trial Subject ID",
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
         "usage" : "U",
         "entity" : "Patient",
         "module" : "Clinical Trial Subject"
      },
      "(0040,a07a)[<0>](0040,a123)" : {
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3b"
         ],
         "req" : "1C",
         "desc" : [
            "Name of the person observer for this document Instance.",
            "Required if Observer Type value is PSN."
         ],
         "name" : "Person Name",
         "usage" : "M",
         "module" : "SR Document General",
         "entity" : "Document"
      },
      "(0008,0051)[<0>](0040,0033)" : {
         "module" : "General Study",
         "entity" : "Study",
         "usage" : "M",
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
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ]
      },
      "(0040,a078)[<0>](0008,0082)" : {
         "module" : "SR Document General",
         "entity" : "Document",
         "usage" : "M",
         "desc" : [
            "Institution or organization to which the identified person is responsible or accountable, or that manages the identified device.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "name" : "Institution Code Sequence",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3b"
         ],
         "req" : "2"
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0020,000e)" : {
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "1",
         "name" : "Series Instance UID",
         "desc" : "Unique identifier of a Series that is part of this Study and contains the referenced Composite Object(s)."
      },
      "(0008,0018)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
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
                  "targetptr" : "PS3.4",
                  "xrefstyle" : "select: labelnumber",
                  "targetdoc" : "PS3.4"
               },
               "el" : "olink"
            },
            "."
         ],
         "name" : "SOP Instance UID",
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Document"
      },
      "(0040,a370)[<0>](0008,1110)" : {
         "module" : "SR Document General",
         "entity" : "Document",
         "usage" : "M",
         "desc" : [
            "Uniquely identifies the Study SOP Instance.",
            "Zero or one Item shall be included in this sequence.",
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
         "name" : "Referenced Study Sequence",
         "req" : "2",
         "mod_tables" : [
            "table_C.17-2"
         ]
      },
      "(0038,0060)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "req" : "3",
         "desc" : "Identifier of the Service Episode as assigned by the healthcare provider",
         "name" : "Service Episode ID",
         "usage" : "U",
         "module" : "Patient Study",
         "entity" : "Study"
      },
      "(0008,1040)" : {
         "usage" : "M",
         "module" : "General Equipment",
         "entity" : "Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "req" : "3",
         "desc" : "Department in the institution where the equipment that produced the composite instances is located.",
         "name" : "Institutional Department Name"
      },
      "(0020,9172)[<0>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "entity" : "Document",
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0008,1030)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Study Description",
         "desc" : "Institution-generated description or classification of the Study (component) performed.",
         "usage" : "M",
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0040,a730)[<0>](0040,a168)" : {
         "desc" : [
            "This is the value of the Content Item.",
            "Only a single Item shall be included in this sequence."
         ],
         "name" : "Concept Code Sequence",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.2-1"
         ],
         "req" : "1",
         "module" : "SR Document Content",
         "entity" : "Document",
         "usage" : "M"
      },
      "(0020,0011)" : {
         "name" : "Series Number",
         "desc" : [
            "A number that identifies the Series.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "No SR-specific semantics are specified."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.17-1"
         ],
         "req" : "1",
         "entity" : "Series",
         "module" : "SR Document Series",
         "usage" : "M"
      },
      "(0010,2294)[<0>](0010,2295)" : {
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Breed Registration Number",
         "desc" : "Identification number of an animal within the registry."
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,003a)" : {
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
         "name" : "Assigning Agency or Department Code Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "req" : "3",
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M"
      },
      "(0010,2294)[<0>](0010,2296)" : {
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "1",
         "desc" : [
            "Identification of the organization with which an animal is registered.",
            "Only a single Item shall be included in this sequence."
         ],
         "name" : "Breed Registry Code Sequence"
      },
      "(0010,0030)" : {
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "2",
         "name" : "Patient's Birth Date",
         "desc" : "Birth date of the patient."
      },
      "(0040,a375)[<0>](0020,000d)" : {
         "name" : "Study Instance UID",
         "desc" : "Unique identifier for the Study",
         "req" : "1",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3"
         ],
         "entity" : "Document",
         "module" : "SR Document General",
         "usage" : "M"
      },
      "(0040,a730)[<0>](0040,a301)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.1-1"
         ],
         "desc" : [
            "Qualification of Numeric Value in Measured Value Sequence, or reason for absence of Measured Value Sequence Item.",
            "Only a single Item is permitted in this sequence."
         ],
         "name" : "Numeric Value Qualifier Code Sequence",
         "usage" : "M",
         "module" : "SR Document Content",
         "entity" : "Document"
      },
      "(0040,a078)[<0>](0008,1010)" : {
         "desc" : [
            "Name of the device observer for this document instance.",
            "Required if Observer Type value is DEV."
         ],
         "name" : "Station Name",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3b"
         ],
         "req" : "2C",
         "module" : "SR Document General",
         "entity" : "Document",
         "usage" : "M"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,0006)" : {
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "req" : "1C",
         "desc" : [
            "Indicates whether the pixel data are sent color-by-plane or color-by-pixel. Required if Samples per Pixel (0028,0002) has a value greater than 1. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.6.3.1.3",
                  "xrefstyle" : "select: label"
               }
            },
            " for further explanation."
         ],
         "name" : "Planar Configuration",
         "usage" : "M",
         "module" : "SR Document Content",
         "entity" : "Document"
      },
      "(0400,0561)[<0>](0400,0564)" : {
         "entity" : "Document",
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Source of Previous Values",
         "desc" : "The source that provided the SOP Instance prior to the removal or replacement of the values. For example, this might be the Institution from which imported SOP Instances were received.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "2"
      },
      "(0100,0420)" : {
         "module" : "SOP Common",
         "entity" : "Document",
         "usage" : "M",
         "desc" : "The date and time when the SOP Instance Status (0100,0410) was set to AO.",
         "name" : "SOP Authorization DateTime",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(4ffe,0001)[<0>](0400,0015)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1",
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
         "usage" : "M",
         "entity" : "Document",
         "module" : "SOP Common"
      },
      "(0012,0071)" : {
         "usage" : "U",
         "module" : "Clinical Trial Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5b"
         ],
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
         "name" : "Clinical Trial Series ID"
      },
      "(0008,1049)[<0>](0008,0081)" : {
         "entity" : "Study",
         "module" : "General Study",
         "usage" : "M",
         "name" : "Institution Address",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1102)" : {
         "entity" : "Document",
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Person's Address",
         "desc" : "Person's mailing address",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "req" : "3"
      },
      "(0040,a385)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1150)" : {
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document General",
         "req" : "1",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0010,2294)" : {
         "desc" : [
            "Information identifying an animal within a breed registry.",
            "Zero or more Items shall be included in this sequence.",
            "Required if the patient is an animal."
         ],
         "name" : "Breed Registration Sequence",
         "req" : "2C",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M"
      },
      "(0010,2297)" : {
         "name" : "Responsible Person",
         "desc" : [
            "Name of person with medical decision making authority for the patient.",
            "Required if the patient is an animal. May be present otherwise."
         ],
         "req" : "2C",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M"
      },
      "(0400,0561)[<0>](0400,0565)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
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
         "name" : "Reason for the Attribute Modification"
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
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "req" : "1C",
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M"
      },
      "(0400,0500)" : {
         "entity" : "Document",
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Encrypted Attributes Sequence",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1C"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,0010)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "name" : "Rows",
         "desc" : "Number of rows in the image.",
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document Content"
      },
      "(0008,1049)[<0>](0008,0082)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "1C",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Institution Code Sequence",
         "usage" : "M",
         "module" : "General Study",
         "entity" : "Study"
      },
      "(0040,a730)[<0>](3006,0024)" : {
         "module" : "SR Document Content",
         "entity" : "Document",
         "usage" : "M",
         "desc" : "Uniquely identifies the Frame of Reference within which the coordinates are defined.",
         "name" : "Referenced Frame of Reference UID",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.9-1"
         ],
         "req" : "1"
      },
      "(0040,a360)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1155)" : {
         "module" : "SR Document General",
         "entity" : "Document",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "req" : "1"
      },
      "(0018,a001)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Document"
      },
      "(0018,a001)[<0>](0008,1070)" : {
         "usage" : "M",
         "entity" : "Document",
         "module" : "SOP Common",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Operators' Name",
         "desc" : "Name(s) of the operator(s) of the contributing equipment."
      },
      "(0008,1084)" : {
         "desc" : [
            "A sequence that conveys the admitting diagnosis (diagnoses).",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Admitting Diagnoses Code Sequence",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "req" : "3",
         "module" : "Patient Study",
         "entity" : "Study",
         "usage" : "U"
      },
      "(0040,a385)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)" : {
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
         "name" : "Referenced SOP Instance MAC Sequence",
         "req" : "3",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "SR Document General",
         "entity" : "Document",
         "usage" : "M"
      },
      "(0040,a370)[<0>](0040,1001)" : {
         "req" : "2",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "name" : "Requested Procedure ID",
         "desc" : "Identifier of the related Requested Procedure",
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document General"
      },
      "(0040,a730)[<0>](0048,0301)" : {
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document Content",
         "req" : "1C",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.6-1"
         ],
         "name" : "Pixel Origin Interpretation",
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
               ]
            },
            "If not present, Graphic Data values are defined relative to the frame pixel origin."
         ]
      },
      "(0040,a370)[<0>](0008,0051)" : {
         "module" : "SR Document General",
         "entity" : "Document",
         "usage" : "M",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this sequence."
         ],
         "name" : "Issuer of Accession Number Sequence",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "req" : "3"
      },
      "(4ffe,0001)[<0>](0400,0020)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Data Elements Signed",
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
         "usage" : "M",
         "entity" : "Document",
         "module" : "SOP Common"
      },
      "(0040,a730)[<0>](0040,a123)" : {
         "name" : "Person Name",
         "desc" : [
            "This is the value of the Content Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5"
         ],
         "req" : "1C",
         "entity" : "Document",
         "module" : "SR Document Content",
         "usage" : "M"
      },
      "(0008,0012)" : {
         "usage" : "M",
         "entity" : "Document",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "name" : "Instance Creation Date",
         "desc" : [
            "Date the SOP Instance was created.",
            "This is the date that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ]
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0040,a0b0)" : {
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.5-1"
         ],
         "req" : "1C",
         "desc" : [
            [
               "List of channels in Waveform to which the reference applies. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.18.5.1.1"
                  }
               }
            ],
            "Required if the Referenced SOP Instance is a Waveform that contains multiple Channels and not all Channels in the Waveform are referenced."
         ],
         "name" : "Referenced Waveform Channels",
         "usage" : "M",
         "module" : "SR Document Content",
         "entity" : "Document"
      },
      "(0040,a370)[<0>](0032,1060)" : {
         "name" : "Requested Procedure Description",
         "desc" : "Institution-generated administrative description or classification of Requested Procedure.",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "req" : "2",
         "entity" : "Document",
         "module" : "SR Document General",
         "usage" : "M"
      },
      "(0008,0023)" : {
         "mod_tables" : [
            "table_C.17-2"
         ],
         "req" : "1",
         "name" : "Content Date",
         "desc" : "The date the document content creation started.",
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document General"
      },
      "(0040,a730)[<0>](0040,a040)" : {
         "module" : "SR Document Content",
         "entity" : "Document",
         "usage" : "M",
         "desc" : [
            "The type of the value encoded in this Content Item.",
            {
               "type" : "variablelist",
               "title" : "Defined Terms:",
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
                     "linkend" : "sect_C.17.3.2.1",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ]
         ],
         "name" : "Value Type",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5"
         ],
         "req" : "1"
      },
      "(0040,a390)" : {
         "usage" : "M",
         "entity" : "Document",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1C",
         "name" : "HL7 Structured Document Reference Sequence",
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
         ]
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0404)" : {
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
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.12.1.1.3.1.2"
               },
               "el" : "xref"
            },
            "."
         ],
         "name" : "MAC",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "1",
         "module" : "SR Document General",
         "entity" : "Document",
         "usage" : "M"
      },
      "(0008,114a)[<0>](0040,a170)" : {
         "name" : "Purpose of Reference Code Sequence",
         "desc" : [
            "Code describing the purpose of the reference to the Instance(s).",
            "Only a single Item shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.17-2"
         ],
         "req" : "1",
         "entity" : "Document",
         "module" : "SR Document General",
         "usage" : "M"
      },
      "(0040,a360)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0100)" : {
         "module" : "SR Document General",
         "entity" : "Document",
         "usage" : "M",
         "desc" : "The Unique Identifier of a Digital Signature held in the referenced SOP Instance.",
         "name" : "Digital Signature UID",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "1"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0035)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
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
         "name" : "Identifier Type Code",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0008,0096)" : {
         "usage" : "M",
         "module" : "General Study",
         "entity" : "Study",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : [
            "Identification of the patient's referring physician.",
            "Only a single item is permitted in this sequence."
         ],
         "name" : "Referring Physician Identification Sequence"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0008,1150)" : {
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document Content",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.5-1",
            "table_C.18.3-1",
            "table_10-11"
         ],
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0008,0080)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "desc" : "Institution where the equipment that produced the composite instances is located.",
         "name" : "Institution Name",
         "usage" : "M",
         "module" : "General Equipment",
         "entity" : "Equipment"
      },
      "(0020,9172)[<0>](0062,000b)" : {
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "name" : "Referenced Segment Number",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "req" : "1C",
         "module" : "SOP Common",
         "entity" : "Document",
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0022)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
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
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "The identifier is coded as a string regardless of the type, not as a binary value."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "1"
      },
      "(0040,a370)[<0>](0008,0051)[<1>](0040,0033)" : {
         "usage" : "M",
         "module" : "SR Document General",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-2",
            "table_10-17"
         ],
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
         "name" : "Universal Entity ID Type"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,0102)" : {
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "req" : "1",
         "desc" : [
            "Most significant bit for pixel sample data. Each sample shall have the same high bit. See ",
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
         "name" : "High Bit",
         "usage" : "M",
         "module" : "SR Document Content",
         "entity" : "Document"
      },
      "(0008,0005)" : {
         "usage" : "M",
         "entity" : "Document",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1C",
         "name" : "Specific Character Set",
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
         ]
      },
      "(0018,a001)[<0>](0018,1200)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
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
         "usage" : "M",
         "entity" : "Document",
         "module" : "SOP Common"
      },
      "(0008,0110)[<0>](0008,0114)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Document",
         "req" : "2C",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The coding scheme identifier as defined in an external registry. Required if coding scheme is registered and Coding Scheme UID (0008,010C) is not present.",
         "name" : "Coding Scheme External ID"
      },
      "(0010,1002)[<0>](0010,0021)" : {
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient",
         "req" : "3",
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
                     "content" : [
                        "Equivalent to HL7 v2 CX component 4 subcomponent 1."
                     ],
                     "el" : "para"
                  },
                  "\n              "
               ]
            }
         ]
      },
      "(fffa,fffa)[<0>](0400,0120)" : {
         "name" : "Signature",
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
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Document",
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0010,0024)[<0>](0040,0036)" : {
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "req" : "3",
         "name" : "Assigning Facility Sequence",
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
         ]
      },
      "(0040,a07a)[<0>](0040,a084)" : {
         "usage" : "M",
         "module" : "SR Document General",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3b"
         ],
         "req" : "1",
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
            "type" : "variablelist",
            "title" : "Enumerated Values:"
         },
         "name" : "Observer Type"
      },
      "(0008,1032)" : {
         "module" : "General Study",
         "entity" : "Study",
         "usage" : "M",
         "desc" : [
            "A Sequence that conveys the type of procedure performed.",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Procedure Code Sequence",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(4ffe,0001)" : {
         "name" : "MAC Parameters Sequence",
         "desc" : [
            "A sequence of items that describe the parameters used to calculate a MAC for use in Digital Signatures.",
            "One or more Items shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "3",
         "entity" : "Document",
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,1103)" : {
         "name" : "Blue Palette Color Lookup Table Descriptor",
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
         "req" : "1C",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "entity" : "Document",
         "module" : "SR Document Content",
         "usage" : "M"
      },
      "(0008,0096)[<0>](0008,0081)" : {
         "name" : "Institution Address",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "3",
         "entity" : "Study",
         "module" : "General Study",
         "usage" : "M"
      },
      "(0010,2293)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "name" : "Patient Breed Code Sequence",
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
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0008,0110)[<0>](0008,0115)" : {
         "usage" : "M",
         "entity" : "Document",
         "module" : "SOP Common",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme Name",
         "desc" : "The coding scheme full common name"
      },
      "(0040,a370)[<0>](0040,1002)" : {
         "usage" : "M",
         "module" : "SR Document General",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "req" : "3",
         "desc" : "Reason for requesting this procedure.",
         "name" : "Reason for the Requested Procedure"
      },
      "(0040,a525)[<0>](0008,1115)" : {
         "desc" : [
            "Sequence of Items where each Item includes the Attributes of a Series containing referenced Composite Object(s).",
            "One or more Items shall be included in this sequence"
         ],
         "name" : "Referenced Series Sequence",
         "req" : "1",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3"
         ],
         "module" : "SR Document General",
         "entity" : "Document",
         "usage" : "M"
      },
      "(0040,a370)[<0>](0008,1110)[<1>](0008,1155)" : {
         "module" : "SR Document General",
         "entity" : "Document",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "mod_tables" : [
            "table_C.17-2",
            "table_10-11"
         ]
      },
      "(0040,a390)[<0>](0008,1155)" : {
         "usage" : "M",
         "entity" : "Document",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(fffa,fffa)[<0>](0400,0310)" : {
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
         "name" : "Certified Timestamp",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "3",
         "module" : "SOP Common",
         "entity" : "Document",
         "usage" : "M"
      },
      "(0040,a360)[<0>](0008,1115)[<1>](0008,1199)" : {
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document General",
         "req" : "1",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "name" : "Referenced SOP Sequence",
         "desc" : [
            "References to Composite Object SOP Class/SOP Instance pairs that are part of the Study defined by Study Instance UID and the Series defined by Series Instance UID (0020,000E).",
            "One or more Items shall be included in this sequence."
         ]
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,0103)" : {
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "req" : "1",
         "name" : "Pixel Representation",
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
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document Content"
      },
      "(0008,0060)" : {
         "name" : "Modality",
         "desc" : [
            "Modality type.",
            {
               "title" : "Enumerated Values:",
               "type" : "variablelist",
               "list" : [
                  [
                     "SR",
                     "SR Document"
                  ]
               ]
            }
         ],
         "mod_tables" : [
            "table_C.17-1"
         ],
         "req" : "1",
         "entity" : "Series",
         "module" : "SR Document Series",
         "usage" : "M"
      },
      "(0012,0051)" : {
         "module" : "Clinical Trial Study",
         "entity" : "Study",
         "usage" : "U",
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
         "name" : "Clinical Trial Time Point Description",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "req" : "3"
      },
      "(0008,1090)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "desc" : "Manufacturer's model name of the equipment that produced the composite instances.",
         "name" : "Manufacturer's Model Name",
         "usage" : "M",
         "module" : "General Equipment",
         "entity" : "Equipment"
      },
      "(0040,a360)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0010)" : {
         "usage" : "M",
         "module" : "SR Document General",
         "entity" : "Document",
         "req" : "1",
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
                                 "el" : "para",
                                 "content" : [
                                    "Certain Transfer Syntaxes, particularly those that are used with compressed data, allow the fragmentation of the pixel data to change. If such fragmentation changes, Digital Signatures generated with such Transfer Syntaxes could become invalid."
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
                                 "content" : [
                                    "This does not constrain the transfer syntax used to transmit the object."
                                 ],
                                 "el" : "para"
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
         "name" : "MAC Calculation Transfer Syntax UID"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0008,114b)" : {
         "entity" : "Document",
         "module" : "SR Document Content",
         "usage" : "M",
         "name" : "Referenced Real World Value Mapping Instance Sequence",
         "desc" : [
            "Reference to a Real World Value Mapping SOP Class/SOP Instance pair.",
            "Only a single Item is permitted in this sequence."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1"
         ]
      },
      "(0008,1062)[<0>](0008,0080)" : {
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "name" : "Institution Name",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "1C",
         "module" : "General Study",
         "entity" : "Study",
         "usage" : "M"
      },
      "(0008,0110)[<0>](0008,0102)" : {
         "module" : "SOP Common",
         "entity" : "Document",
         "usage" : "M",
         "desc" : "The value of a Coding Scheme Designator, used in this SOP Instance, which is being mapped.",
         "name" : "Coding Scheme Designator",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1103)" : {
         "desc" : "Person's telephone number(s)",
         "name" : "Person's Telephone Numbers",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "req" : "3",
         "module" : "SOP Common",
         "entity" : "Document",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1090)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Document",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Manufacturer's model name of the equipment that contributed to the composite instance.",
         "name" : "Manufacturer's Model Name"
      },
      "(0008,0110)[<0>](0008,0112)" : {
         "name" : "Coding Scheme Registry",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Document",
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "req" : "1C",
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M"
      },
      "(0010,2203)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "req" : "2C",
         "name" : "Patient's Sex Neutered",
         "desc" : [
            "Whether or not a procedure has been performed in an effort to render the patient sterile.",
            {
               "type" : "variablelist",
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
               ]
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
         "usage" : "U",
         "entity" : "Study",
         "module" : "Patient Study"
      },
      "(0040,a730)[<0>](0040,a130)" : {
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document Content",
         "req" : "1",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.7-1"
         ],
         "name" : "Temporal Range Type",
         "desc" : [
            "See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.18.7.1.1"
               },
               "el" : "xref"
            },
            " for Enumerated Values."
         ]
      },
      "(0040,a07a)[<0>](0040,1101)" : {
         "entity" : "Document",
         "module" : "SR Document General",
         "usage" : "M",
         "name" : "Person Identification Code Sequence",
         "desc" : [
            "Coded identifier of person observer.",
            "Zero or one Item shall be included in this sequence.",
            "Required if Observer Type value is PSN."
         ],
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3b"
         ],
         "req" : "2C"
      },
      "(0040,a730)[<0>](0040,a300)[<1>](0040,08ea)" : {
         "name" : "Measurement Units Code Sequence",
         "desc" : [
            "Units of measurement.",
            "Only a single Item shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.1-1"
         ],
         "req" : "1",
         "entity" : "Document",
         "module" : "SR Document Content",
         "usage" : "M"
      },
      "(0018,1008)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "req" : "3",
         "name" : "Gantry ID",
         "desc" : "Identifier of the gantry or positioner.",
         "usage" : "M",
         "entity" : "Equipment",
         "module" : "General Equipment"
      },
      "(0010,0040)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "desc" : [
            "Sex of the named patient.",
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
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
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "2"
      },
      "(0040,a370)[<0>](0040,100a)" : {
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document General",
         "req" : "3",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "name" : "Reason for Requested Procedure Code Sequence",
         "desc" : [
            "Coded Reason for requesting this procedure.",
            "One or more Items are permitted in this sequence."
         ]
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,1202)" : {
         "entity" : "Document",
         "module" : "SR Document Content",
         "usage" : "M",
         "name" : "Green Palette Color Lookup Table Data",
         "desc" : [
            "Green Palette Color Lookup Table Data. Required if Photometric Interpretation (0028,0004) has a value of PALETTE COLOR or Pixel Presentation (0008,9205) at the image level equals COLOR or MIXED. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.3.1.6"
               }
            },
            " for further explanation."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ]
      },
      "(0040,a730)[<0>](0040,a300)[<1>](0040,a163)" : {
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document Content",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.1-1"
         ],
         "req" : "1C",
         "name" : "Rational Denominator Value",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. Only a single value shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ]
      },
      "(0040,a07c)" : {
         "module" : "SR Document General",
         "entity" : "Document",
         "usage" : "M",
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
         "name" : "Custodial Organization Sequence",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "req" : "3"
      },
      "(0012,0062)" : {
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3",
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "name" : "Patient Identity Removed"
      },
      "(0012,0031)" : {
         "desc" : [
            "Name of the site responsible for submitting clinical trial data. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.3.1.5"
               },
               "el" : "xref"
            }
         ],
         "name" : "Clinical Trial Site Name",
         "req" : "2",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
         "usage" : "U"
      },
      "(0008,0051)[<0>](0040,0031)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "name" : "Local Namespace Entity ID",
         "usage" : "M",
         "module" : "General Study",
         "entity" : "Study"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,1102)" : {
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "req" : "1C",
         "desc" : [
            "Specifies the format of the Green Palette Color Lookup Table Data (0028,1202). Required if Photometric Interpretation (0028,0004) has a value of PALETTE COLOR or Pixel Presentation (0008,9205) at the image level equals COLOR or MIXED. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.3.1.5"
               }
            },
            " for further explanation."
         ],
         "name" : "Green Palette Color Lookup Table Descriptor",
         "usage" : "M",
         "module" : "SR Document Content",
         "entity" : "Document"
      },
      "(0018,a001)[<0>](0018,1020)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
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
         "usage" : "M",
         "entity" : "Document",
         "module" : "SOP Common"
      },
      "(0008,1111)" : {
         "usage" : "M",
         "entity" : "Series",
         "module" : "SR Document Series",
         "req" : "2",
         "mod_tables" : [
            "table_C.17-1"
         ],
         "name" : "Referenced Performed Procedure Step Sequence",
         "desc" : [
            "Uniquely identifies the Performed Procedure Step SOP Instance for which the Series is created.",
            "Zero or one item shall be included in this sequence.",
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
                           "el" : "listitem",
                           "content" : [
                              "\n                      ",
                              {
                                 "content" : [
                                    "The Performed Procedure Step referred to by this Attribute is the Step during which this Document is generated."
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
                                 "el" : "para",
                                 "content" : [
                                    "This Sequence may be sent zero length if the Performed Procedure Step is unknown."
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
         ]
      },
      "(0008,1120)[<0>](0008,1150)" : {
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID"
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0100)" : {
         "module" : "SR Document General",
         "entity" : "Document",
         "usage" : "M",
         "desc" : "The Unique Identifier of a Digital Signature held in the referenced SOP Instance.",
         "name" : "Digital Signature UID",
         "req" : "1",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0038,0014)" : {
         "usage" : "U",
         "module" : "Patient Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "req" : "3",
         "desc" : [
            "Identifier of the Assigning Authority that issued Admission ID (0038,0010).",
            "Only a single Item is permitted in this sequence."
         ],
         "name" : "Issuer of Admission ID Sequence"
      },
      "(0010,1000)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "desc" : "Other identification numbers or codes used to identify the patient.",
         "name" : "Other Patient IDs",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3"
      },
      "(0008,0070)" : {
         "usage" : "M",
         "module" : "General Equipment",
         "entity" : "Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "req" : "2",
         "desc" : "Manufacturer of the equipment that produced the composite instances.",
         "name" : "Manufacturer"
      },
      "(fffa,fffa)[<0>](0400,0305)" : {
         "usage" : "M",
         "entity" : "Document",
         "module" : "SOP Common",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Certified Timestamp Type",
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
         ]
      },
      "(0040,a370)[<0>](0008,0051)[<1>](0040,0032)" : {
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.17-2",
            "table_10-17"
         ],
         "req" : "1C",
         "module" : "SR Document General",
         "entity" : "Document",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1072)" : {
         "name" : "Operator Identification Sequence",
         "desc" : [
            "Identification of the operator(s) of the contributing equipment.",
            "One or more items are permitted in this sequence.",
            "The number and order of Items shall correspond to the number and order of values of Operators' Name (0008,1070), if present."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Document",
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0040,a370)[<0>](0040,0026)[<1>](0040,0033)" : {
         "entity" : "Document",
         "module" : "SR Document General",
         "usage" : "M",
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
         "mod_tables" : [
            "table_C.17-2",
            "table_10-17"
         ],
         "req" : "1C"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1101)" : {
         "name" : "Person Identification Code Sequence",
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
         "entity" : "Document",
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(fffa,fffa)[<0>](0400,0100)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1",
         "name" : "Digital Signature UID",
         "desc" : "A UID that can be used to uniquely reference this signature.",
         "usage" : "M",
         "entity" : "Document",
         "module" : "SOP Common"
      },
      "(0008,1062)[<0>](0008,0082)" : {
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Institution Code Sequence",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "entity" : "Study",
         "usage" : "M"
      },
      "(0008,114a)" : {
         "entity" : "Document",
         "module" : "SR Document General",
         "usage" : "M",
         "name" : "Referenced Instance Sequence",
         "desc" : [
            "Sequence specifying SOP Instances significantly related to the current SOP Instance. Such referenced Instances may include equivalent documents or renderings of this document.",
            "One or more Items shall be included in this sequence.",
            [
               "Required if the identity of a CDA Document equivalent to the current SOP Instance is known at the time of creation of this SOP Instance (see ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.17.2.6"
                  },
                  "el" : "xref"
               },
               "). May be present otherwise."
            ]
         ],
         "mod_tables" : [
            "table_C.17-2"
         ],
         "req" : "1C"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,2000)" : {
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document Content",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "req" : "3",
         "name" : "ICC Profile",
         "desc" : [
            "An ICC Profile encoding the transformation of device-dependent color stored pixel values into PCS-Values.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.11.15.1.1",
                     "xrefstyle" : "select: label"
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
                     "content" : [
                        "The profile applies only to Pixel Data (7FE0,0010) at the same level of the Data Set and not to any icons nested within sequences, which may or may not have their own ICC profile specified."
                     ]
                  },
                  "\n                  "
               ]
            }
         ]
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0008,114b)[<2>](0008,1155)" : {
         "module" : "SR Document Content",
         "entity" : "Document",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_10-11"
         ]
      },
      "(0008,1049)[<0>](0040,1102)" : {
         "name" : "Person's Address",
         "desc" : "Person's mailing address",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "module" : "General Study",
         "usage" : "M"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0008,1199)[<2>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_10-11"
         ],
         "module" : "SR Document Content",
         "entity" : "Document",
         "usage" : "M"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,0002)" : {
         "req" : "1",
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
         "name" : "Samples per Pixel",
         "usage" : "M",
         "module" : "SR Document Content",
         "entity" : "Document"
      },
      "(0040,a370)[<0>](0040,0027)[<1>](0040,0032)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.17-2",
            "table_10-17"
         ],
         "name" : "Universal Entity ID",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document General"
      },
      "(0018,1201)" : {
         "usage" : "M",
         "module" : "General Equipment",
         "entity" : "Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
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
         "name" : "Time of Last Calibration"
      },
      "(0008,1049)" : {
         "module" : "General Study",
         "entity" : "Study",
         "usage" : "M",
         "desc" : [
            "Identification of the physician(s) who are responsible for overall patient care at time of Study.",
            "One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Physician(s) of Record (0008,1048), if present."
         ],
         "name" : "Physician(s) of Record Identification Sequence",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0008,1060)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Name of Physician(s) Reading Study",
         "desc" : "Names of the physician(s) reading the Study.",
         "usage" : "M",
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0018,a001)[<0>](0040,a170)" : {
         "name" : "Purpose of Reference Code Sequence",
         "desc" : [
            "Describes the purpose for which the related equipment is being reference.",
            "Only a single Item shall be included in this sequence.",
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
         "req" : "1",
         "entity" : "Document",
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0040,a07c)[<0>](0008,0080)" : {
         "module" : "SR Document General",
         "entity" : "Document",
         "usage" : "M",
         "desc" : "Name of Custodial Institution or Organization.",
         "name" : "Institution Name",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "req" : "2"
      },
      "(0008,1010)" : {
         "usage" : "M",
         "entity" : "Equipment",
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "req" : "3",
         "name" : "Station Name",
         "desc" : "User defined name identifying the machine that produced the composite instances."
      },
      "(0010,1030)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "req" : "3",
         "desc" : "Weight of the Patient, in kilograms.",
         "name" : "Patient's Weight",
         "usage" : "U",
         "module" : "Patient Study",
         "entity" : "Study"
      },
      "(0040,a360)[<0>](0020,000d)" : {
         "desc" : "Unique identifier for the Study",
         "name" : "Study Instance UID",
         "req" : "1",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3"
         ],
         "module" : "SR Document General",
         "entity" : "Document",
         "usage" : "M"
      },
      "(0008,0030)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "2",
         "desc" : "Time the Study started.",
         "name" : "Study Time",
         "usage" : "M",
         "module" : "General Study",
         "entity" : "Study"
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0120)" : {
         "usage" : "M",
         "module" : "SR Document General",
         "entity" : "Document",
         "req" : "1",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "The Signature Value identified by the Digital Signature UID within the Referenced SOP Instance UID.",
         "name" : "Signature"
      },
      "(0040,a370)[<0>](0008,1110)[<1>](0008,1150)" : {
         "entity" : "Document",
         "module" : "SR Document General",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.17-2",
            "table_10-11"
         ],
         "req" : "1"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,0101)" : {
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document Content",
         "req" : "1",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "name" : "Bits Stored",
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
         ]
      },
      "(0008,0014)" : {
         "entity" : "Document",
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Instance Creator UID",
         "desc" : "Uniquely identifies device that created the SOP Instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M"
      },
      "(0040,a370)[<0>](0032,1064)" : {
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document General",
         "req" : "2",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "name" : "Requested Procedure Code Sequence",
         "desc" : "A sequence that conveys the requested procedure. Zero or one Item shall be included in this sequence."
      },
      "(0040,a375)[<0>](0008,1115)" : {
         "module" : "SR Document General",
         "entity" : "Document",
         "usage" : "M",
         "desc" : [
            "Sequence of Items where each Item includes the Attributes of a Series containing referenced Composite Object(s).",
            "One or more Items shall be included in this sequence"
         ],
         "name" : "Referenced Series Sequence",
         "req" : "1",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3"
         ]
      },
      "(0040,a078)[<0>](0008,0070)" : {
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3b"
         ],
         "req" : "1C",
         "desc" : [
            "Manufacturer of the device observer.",
            "Required if Observer Type value is DEV."
         ],
         "name" : "Manufacturer",
         "usage" : "M",
         "module" : "SR Document General",
         "entity" : "Document"
      },
      "(0040,a370)" : {
         "usage" : "M",
         "module" : "SR Document General",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "req" : "1C",
         "desc" : [
            "Identifies Requested Procedures that are being fulfilled (completely or partially) by creation of this Document.",
            "One or more Items shall be included in this sequence.",
            "Required if this Document fulfills at least one Requested Procedure. May be present otherwise."
         ],
         "name" : "Referenced Request Sequence"
      },
      "(fffa,fffa)[<0>](0400,0401)" : {
         "desc" : [
            "The purpose of this Digital Signature.",
            "Only a single Item is permitted in this sequence."
         ],
         "name" : "Digital Signature Purpose Code Sequence",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "entity" : "Document",
         "usage" : "M"
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)" : {
         "req" : "3",
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
         "name" : "Referenced SOP Instance MAC Sequence",
         "usage" : "M",
         "module" : "SR Document General",
         "entity" : "Document"
      },
      "(0008,103f)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.17-1"
         ],
         "name" : "Series Description Code Sequence",
         "desc" : [
            "A coded description of the Series.",
            "Only a single Item is permitted in this sequence."
         ],
         "usage" : "M",
         "entity" : "Series",
         "module" : "SR Document Series"
      },
      "(0040,a390)[<0>](0040,e010)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Document",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Retrieval access path to HL7 Structured Document. Includes fully specified scheme, authority, path, and query in accordance with RFC 2396",
         "name" : "Retrieve URI"
      },
      "(0040,a385)[<0>](0008,1115)[<1>](0008,1199)[<2>](0040,a170)" : {
         "name" : "Purpose of Reference Code Sequence",
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "One or more Items are permitted in this sequence."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "entity" : "Document",
         "module" : "SR Document General",
         "usage" : "M"
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0020)" : {
         "name" : "Data Elements Signed",
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
         "req" : "1",
         "entity" : "Document",
         "module" : "SR Document General",
         "usage" : "M"
      },
      "(0010,2160)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3",
         "desc" : "Ethnic group or race of the patient.",
         "name" : "Ethnic Group",
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0040,a073)[<0>](0040,a075)" : {
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document General",
         "req" : "1",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "name" : "Verifying Observer Name",
         "desc" : "The person authorized by the Verifying Organization (0040,A027) to verify documents of this type and who accepts responsibility for the content of this document."
      },
      "(0040,a360)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0120)" : {
         "module" : "SR Document General",
         "entity" : "Document",
         "usage" : "M",
         "desc" : "The Signature Value identified by the Digital Signature UID within the Referenced SOP Instance UID.",
         "name" : "Signature",
         "req" : "1",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0020,0010)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "2",
         "name" : "Study ID",
         "desc" : "User or equipment generated Study identifier.",
         "usage" : "M",
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0020,9172)" : {
         "entity" : "Document",
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Conversion Source Attributes Sequence",
         "desc" : [
            "The set of images or other composite SOP Instances that were converted to this instance.",
            "If this instance was converted from a specific frame in the source instance, the reference shall include the Frame Number.",
            "One or more Items shall be included in this sequence.",
            "Required if this instance was created by conversion, and Conversion Source Attributes Sequence (0020,9172) is not present in an Item of Shared Functional Groups Sequence (5200,9229) or Per-Frame Functional Groups Sequence (5200,9230)."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1C"
      },
      "(0010,0024)[<0>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M"
      },
      "(0038,0062)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Service Episode Description",
         "desc" : "Description of the type of service episode.",
         "usage" : "U",
         "entity" : "Study",
         "module" : "Patient Study"
      },
      "(0040,a730)[<0>](0070,0022)" : {
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.9-1"
         ],
         "req" : "1",
         "name" : "Graphic Data",
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
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document Content"
      },
      "(0008,0096)[<0>](0008,0080)" : {
         "usage" : "M",
         "entity" : "Study",
         "module" : "General Study",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Name",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present."
      },
      "(0040,a730)[<0>](0040,a043)" : {
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5"
         ],
         "req" : "1C",
         "name" : "Concept Name Code Sequence",
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
                     "content" : [
                        "That is, containers without headings do not require Concept Name Code Sequence"
                     ],
                     "el" : "para"
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
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document Content"
      },
      "(0040,a370)[<0>](0008,0050)" : {
         "mod_tables" : [
            "table_C.17-2"
         ],
         "req" : "2",
         "desc" : "A departmental IS generated number that identifies the order for the Study.",
         "name" : "Accession Number",
         "usage" : "M",
         "module" : "SR Document General",
         "entity" : "Document"
      },
      "(0008,1120)[<0>](0008,1155)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0040,a07a)[<0>](0018,1002)" : {
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3b"
         ],
         "req" : "1C",
         "name" : "Device UID",
         "desc" : [
            "Unique identifier of device observer.",
            "Required if Observer Type value is DEV."
         ],
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document General"
      },
      "(0040,a370)[<0>](0040,0027)[<1>](0040,0031)" : {
         "usage" : "M",
         "module" : "SR Document General",
         "entity" : "Document",
         "req" : "1C",
         "mod_tables" : [
            "table_C.17-2",
            "table_10-17"
         ],
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "name" : "Local Namespace Entity ID"
      },
      "(0040,a360)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)" : {
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "3",
         "name" : "Referenced Digital Signature Sequence",
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
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document General"
      },
      "(0038,0064)" : {
         "usage" : "U",
         "entity" : "Study",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "req" : "3",
         "name" : "Issuer of Service Episode ID Sequence",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Service Episode ID (0038,0060).",
            "Only a single Item is permitted in this sequence."
         ]
      },
      "(0040,a496)" : {
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "req" : "3",
         "name" : "Preliminary Flag",
         "desc" : [
            "Indicates whether this SR Document is intended to be regarded as a preliminary or final report.",
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "PRELIMINARY",
                     "This report precedes the final report and may contain limited information; it may be time sensitive, and it is not expected to contain all the reportable findings."
                  ],
                  [
                     "FINAL",
                     "This report is the definitive means of communicating the results of a procedure."
                  ]
               ]
            },
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "content" : [
                        "The definitions of the Enumerated Values are derived from the ACR Practice Guideline for Communication of Diagnostic Imaging Findings, Revised 2005."
                     ]
                  },
                  "\n                "
               ]
            }
         ]
      },
      "(0008,0053)" : {
         "name" : "Query/Retrieve View",
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
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1C",
         "entity" : "Document",
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0040,a360)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0020)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "name" : "Data Elements Signed",
         "desc" : [
            "A list of Data Element Tags in the order they appear at the top level of the referenced SOP Instance that identify the Data Elements used in creating the MAC. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.12.1.1.3.1.1"
               },
               "el" : "xref"
            },
            "."
         ],
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document General"
      },
      "(0010,0010)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "desc" : "Patient's full name.",
         "name" : "Patient's Name",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "2"
      },
      "(0012,0083)" : {
         "desc" : [
            "A Sequence that conveys information about consent for Clinical Trial use of the composite instances within this Study.",
            "One or more Items are permitted in this sequence.",
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
         "name" : "Consent for Clinical Trial Use Sequence",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "req" : "3",
         "module" : "Clinical Trial Study",
         "entity" : "Study",
         "usage" : "U"
      },
      "(0040,a370)[<0>](0040,0026)" : {
         "mod_tables" : [
            "table_C.17-2"
         ],
         "req" : "3",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Placer Order Number.",
            "Only a single Item is permitted in this sequence."
         ],
         "name" : "Order Placer Identifier Sequence",
         "usage" : "M",
         "module" : "SR Document General",
         "entity" : "Document"
      },
      "(0040,a360)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "entity" : "Document",
         "module" : "SR Document General",
         "usage" : "M"
      },
      "(0040,a385)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0404)" : {
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
                  "linkend" : "sect_C.12.1.1.3.1.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "name" : "MAC",
         "req" : "1",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "SR Document General",
         "entity" : "Document",
         "usage" : "M"
      },
      "(0010,0200)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "name" : "Quality Control Subject",
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
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3"
      },
      "(0040,a730)[<0>](0040,a050)" : {
         "usage" : "M",
         "module" : "SR Document Content",
         "entity" : "Document",
         "req" : "1",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.8-1"
         ],
         "desc" : [
            "This flag specifies for a CONTAINER whether or not its contained Content Items are logically linked in a continuous textual flow, or are separate items.",
            {
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            },
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.18.8.1.1"
                  }
               },
               " for further explanation."
            ]
         ],
         "name" : "Continuity of Content"
      },
      "(0018,a001)[<0>](0008,1040)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Institutional Department Name",
         "desc" : "Department in the institution where the equipment that contributed to the composite instance is located.",
         "usage" : "M",
         "entity" : "Document",
         "module" : "SOP Common"
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1155)" : {
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0018,1050)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Spatial Resolution",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "usage" : "M",
         "entity" : "Equipment",
         "module" : "General Equipment"
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0008,1199)" : {
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "1",
         "name" : "Referenced SOP Sequence",
         "desc" : [
            "References to Composite Object SOP Class/SOP Instance pairs that are part of the Study defined by Study Instance UID and the Series defined by Series Instance UID (0020,000E).",
            "One or more Items shall be included in this sequence."
         ]
      },
      "(0012,0063)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "De-identification Method",
         "desc" : [
            "A description or label of the mechanism or method use to remove the patient's identity. May be multi-valued if successive de-identification steps have been performed.",
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
                     "attrs" : {
                        "numeration" : "arabic"
                     }
                  },
                  "\n                  "
               ]
            },
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method Code Sequence (0012,0064) is not present. May be present otherwise."
         ],
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,1203)" : {
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document Content",
         "req" : "1C",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
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
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](7fe0,0010)" : {
         "entity" : "Document",
         "module" : "SR Document Content",
         "usage" : "M",
         "name" : "Pixel Data",
         "desc" : [
            [
               "A data stream of the pixel samples that comprise the Image. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.3.1.4",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ],
            "Required if Pixel Data Provider URL (0028,7FE0) is not present."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ]
      },
      "(0008,1062)" : {
         "module" : "General Study",
         "entity" : "Study",
         "usage" : "M",
         "desc" : "Identification of the physician(s) reading the Study. One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Name of Physician(s) Reading Study (0008,1060), if present.",
         "name" : "Physician(s) Reading Study Identification Sequence",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "3"
      },
      "(0020,000d)" : {
         "module" : "General Study",
         "entity" : "Study",
         "usage" : "M",
         "desc" : "Unique identifier for the Study.",
         "name" : "Study Instance UID",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0010,2299)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "2C",
         "desc" : [
            "Name of organization with medical decision making authority for the patient.",
            "Required if patient is an animal. May be present otherwise."
         ],
         "name" : "Responsible Organization",
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0039)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
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
         "name" : "Assigning Jurisdiction Code Sequence",
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0010,1020)" : {
         "usage" : "U",
         "entity" : "Study",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "req" : "3",
         "name" : "Patient's Size",
         "desc" : "Length or size of the Patient, in meters."
      },
      "(0008,001b)" : {
         "usage" : "M",
         "entity" : "Document",
         "module" : "SOP Common",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Original Specialized SOP Class UID",
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
         ]
      },
      "(0010,0024)[<0>](0040,0032)" : {
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "req" : "3",
         "name" : "Universal Entity ID",
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
                     "el" : "para"
                  },
                  "\n              "
               ]
            }
         ]
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0020)" : {
         "entity" : "Document",
         "module" : "SR Document General",
         "usage" : "M",
         "name" : "Data Elements Signed",
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
         "req" : "1",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0040,a385)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)" : {
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "3",
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
         "name" : "Referenced Digital Signature Sequence",
         "usage" : "M",
         "module" : "SR Document General",
         "entity" : "Document"
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
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "req" : "1C",
         "module" : "Patient Study",
         "entity" : "Study",
         "usage" : "U"
      },
      "(0020,000e)" : {
         "name" : "Series Instance UID",
         "desc" : [
            "Unique identifier of the Series.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "content" : [
                        "No SR-specific semantics are specified."
                     ]
                  },
                  "\n                "
               ]
            }
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.17-1"
         ],
         "entity" : "Series",
         "module" : "SR Document Series",
         "usage" : "M"
      },
      "(0040,a360)[<0>](0008,1115)[<1>](0008,1199)[<2>](0040,a170)" : {
         "usage" : "M",
         "module" : "SR Document General",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "3",
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "One or more Items are permitted in this sequence."
         ],
         "name" : "Purpose of Reference Code Sequence"
      },
      "(0040,a375)" : {
         "entity" : "Document",
         "module" : "SR Document General",
         "usage" : "M",
         "name" : "Current Requested Procedure Evidence Sequence",
         "desc" : [
            "Full set of Composite SOP Instances, of which the creator is aware, which were created to satisfy the current Requested Procedure(s) for which this SR Document is generated or that are referenced in the content tree.",
            "One or more Items shall be included in this sequence.",
            "Required if the creator is aware of Composite Objects acquired in order to satisfy the Requested Procedure(s) for which the SR Document is or if instances are referenced in the content tree. May be present otherwise.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.17.2.3",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "mod_tables" : [
            "table_C.17-2"
         ],
         "req" : "1C"
      },
      "(0028,0303)" : {
         "entity" : "Document",
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Longitudinal Temporal Information Modified",
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
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,a360)[<0>](0008,1115)[<1>](0020,000e)" : {
         "entity" : "Document",
         "module" : "SR Document General",
         "usage" : "M",
         "name" : "Series Instance UID",
         "desc" : "Unique identifier of a Series that is part of this Study and contains the referenced Composite Object(s).",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "1"
      },
      "(0012,0081)" : {
         "usage" : "U",
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "req" : "1C",
         "desc" : "Name of the Ethics Committee or Institutional Review Board (IRB) responsible for approval of the Clinical Trial. Required if Clinical Trial Protocol Ethics Committee Approval Number (0012,0082) is present.",
         "name" : "Clinical Trial Protocol Ethics Committee Name"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0008,1199)" : {
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document Content",
         "req" : "3",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1"
         ],
         "name" : "Referenced SOP Sequence",
         "desc" : [
            "Reference to a Softcopy Presentation State SOP Class/SOP Instance pair.",
            "Only a single Item is permitted in this sequence."
         ]
      },
      "(0040,a370)[<0>](0040,0027)[<1>](0040,0033)" : {
         "module" : "SR Document General",
         "entity" : "Document",
         "usage" : "M",
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
         "name" : "Universal Entity ID Type",
         "req" : "1C",
         "mod_tables" : [
            "table_C.17-2",
            "table_10-17"
         ]
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0040,e011)" : {
         "entity" : "Document",
         "module" : "SR Document General",
         "usage" : "M",
         "name" : "Retrieve Location UID",
         "desc" : "Unique identifier of the system where the Composite Object(s) may be retrieved on the network.",
         "req" : "3",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0018,1020)" : {
         "name" : "Software Versions",
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
         "req" : "3",
         "entity" : "Equipment",
         "module" : "General Equipment",
         "usage" : "M"
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