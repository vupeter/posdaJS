var data = {
   "tags" : {
      "(0010,0200)" : {
         "entity" : "Patient",
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
                     "xrefstyle" : "select: title",
                     "linkend" : "sect_C.7.6.1"
                  },
                  "el" : "xref"
               },
               ", which is used to describe an image acquired."
            ]
         ],
         "name" : "Quality Control Subject",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3",
         "module" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a121)" : {
         "entity" : "Series",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "name" : "Date",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "module" : "General Series"
      },
      "(0400,0561)[<0>](0400,0565)" : {
         "module" : "SOP Common",
         "name" : "Reason for the Attribute Modification",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "1",
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
         "entity" : "Plan"
      },
      "(0008,0020)" : {
         "module" : "General Study",
         "name" : "Study Date",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "2",
         "usage" : "M",
         "desc" : "Date the Study started.",
         "entity" : "Study"
      },
      "(0018,a001)[<0>](0008,1070)" : {
         "desc" : "Name(s) of the operator(s) of the contributing equipment.",
         "entity" : "Plan",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Operators' Name"
      },
      "(0008,1062)[<0>](0040,1102)" : {
         "entity" : "Study",
         "desc" : "Person's mailing address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Person's Address",
         "module" : "General Study"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a124)" : {
         "module" : "General Series",
         "name" : "UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "entity" : "Series"
      },
      "(0012,0072)" : {
         "desc" : [
            "A description of the series in the context of a clinical trial or research. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.3.2.1.2",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "entity" : "Series",
         "module" : "Clinical Trial Series",
         "name" : "Clinical Trial Series Description",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "req" : "3",
         "usage" : "U"
      },
      "(300c,0002)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Plan",
         "module" : "RT Brachy Application Setup Delivery Instruction",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.8.8.30-1",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ]
      },
      "(0010,1002)[<0>](0010,0020)" : {
         "desc" : [
            "An identifier for the patient.",
            {
               "el" : "note",
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
               ]
            }
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Patient ID",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "1",
         "usage" : "M"
      },
      "(0008,1052)[<0>](0008,0080)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "req" : "1C",
         "name" : "Institution Name",
         "module" : "General Series",
         "entity" : "Series",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present."
      },
      "(0028,0303)" : {
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
                     "targetptr" : "PS3.15",
                     "targetdoc" : "PS3.15"
                  },
                  "el" : "olink"
               },
               "."
            ]
         ],
         "entity" : "Plan",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Longitudinal Temporal Information Modified"
      },
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ],
         "module" : "Common Instance Reference Module",
         "entity" : "Plan",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0038,0014)[<0>](0040,0032)" : {
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "Study",
         "module" : "Patient Study",
         "name" : "Universal Entity ID",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "req" : "1C"
      },
      "(0010,1100)[<0>](0040,e021)" : {
         "entity" : "Patient",
         "desc" : [
            "Details for retrieving instances via the DICOM Retrieve Service.",
            "Required if DICOM Media Retrieval Sequence (0040,E022), WADO Retrieval Sequence (0040,E023), WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "This sequence shall only identify sources known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "DICOM Retrieval Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "req" : "1C",
         "usage" : "M",
         "module" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a163)" : {
         "name" : "Rational Denominator Value",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ]
      },
      "(0008,1120)" : {
         "entity" : "Patient",
         "desc" : [
            "A sequence that provides reference to a Patient SOP Class/Instance pair.",
            "Only a single Item is permitted in this Sequence."
         ],
         "name" : "Referenced Patient Sequence",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3",
         "usage" : "M",
         "module" : "Patient"
      },
      "(0008,0110)[<0>](0008,0112)" : {
         "module" : "SOP Common",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme Registry",
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
         "entity" : "Plan"
      },
      "(0012,0031)" : {
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U",
         "req" : "2",
         "name" : "Clinical Trial Site Name",
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
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
      "(0010,0033)" : {
         "entity" : "Patient",
         "desc" : [
            "Date of birth of the named patient in the Alternative Calendar (0010,0035).",
            {
               "el" : "note",
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
               ]
            }
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "Patient's Birth Date in Alternative Calendar",
         "module" : "Patient"
      },
      "(0010,1100)" : {
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
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Referenced Patient Photo Sequence"
      },
      "(0008,1048)" : {
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
         "entity" : "Study",
         "module" : "General Study",
         "name" : "Physician(s) of Record",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M"
      },
      "(300c,0002)" : {
         "module" : "RT Brachy Application Setup Delivery Instruction",
         "name" : "Referenced RT Plan Sequence",
         "mod_tables" : [
            "table_C.8.8.30-1"
         ],
         "usage" : "M",
         "req" : "1",
         "desc" : [
            "Reference to a single RT Plan SOP Instance containing all the brachy application setups and the fraction group referenced in this SOP Instance.",
            "Only a single item shall be included in this sequence."
         ],
         "entity" : "Plan"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1150)" : {
         "module" : "Patient",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "req" : "1",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Patient"
      },
      "(0008,1090)" : [
         {
            "mod_tables" : [
               "table_C.7-8"
            ],
            "usage" : "M",
            "req" : "3",
            "name" : "Manufacturer's Model Name",
            "module" : "General Equipment",
            "entity" : "Equipment",
            "desc" : "Manufacturer's model name of the equipment that produced the composite instances."
         },
         {
            "entity" : "Equipment",
            "desc" : "Manufacturer's model name of the equipment that produced the composite instances.",
            "mod_tables" : [
               "table_C.7-8b"
            ],
            "usage" : "M",
            "req" : "1",
            "name" : "Manufacturer's Model Name",
            "module" : "Enhanced General Equipment"
         }
      ],
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,08ea)" : {
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Measurement Units Code Sequence",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0012,0082)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "req" : "3",
         "name" : "Clinical Trial Protocol Ethics Committee Approval Number",
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
         "desc" : "Approval number issued by committee described in Clinical Trial Protocol Ethics Committee Name (0012,0081)."
      },
      "(0008,0300)" : {
         "name" : "Private Data Element Characteristics Sequence",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Plan",
         "desc" : "Characteristics of Private Data Elements within the current SOP Instance"
      },
      "(0008,1120)[<0>](0008,1150)" : {
         "entity" : "Patient",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "usage" : "M",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "module" : "Patient"
      },
      "(0010,2297)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "req" : "2C",
         "name" : "Responsible Person",
         "desc" : [
            "Name of person with medical or welfare decision making authority for the patient.",
            "Required if the patient is an animal. May be present otherwise."
         ],
         "entity" : "Patient"
      },
      "(0010,0216)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3",
         "name" : "Strain Stock Sequence",
         "module" : "Patient",
         "entity" : "Patient",
         "desc" : [
            "Information identifying an animal within a strain stock.",
            "Only a single Item is permitted in this sequence."
         ]
      },
      "(300c,0022)" : {
         "entity" : "Plan",
         "desc" : "Indicates which fraction group of the referenced RT Plan in the Referenced RT Plan Sequence (300C,0002) is to be treated in the treatment session.",
         "req" : "1",
         "mod_tables" : [
            "table_C.8.8.30-1"
         ],
         "usage" : "M",
         "name" : "Referenced Fraction Group Number",
         "module" : "RT Brachy Application Setup Delivery Instruction"
      },
      "(0018,a001)[<0>](0018,a003)" : {
         "name" : "Contribution Description",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "3",
         "module" : "SOP Common",
         "entity" : "Plan",
         "desc" : "Description of the contribution the equipment made to the composite instance."
      },
      "(0074,140e)[<0>](0074,1409)[<1>](0074,1406)" : {
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.8.30-1"
         ],
         "name" : "Referenced Channel Number",
         "module" : "RT Brachy Application Setup Delivery Instruction",
         "entity" : "Plan",
         "desc" : "Channel to be omitted,specified by the value of Channel Number (300A,0282) in the referenced RT Plan."
      },
      "(0010,4000)" : {
         "name" : "Patient Comments",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "desc" : "User-defined additional information about the patient."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a122)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "name" : "Time",
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ]
      },
      "(0008,0005)" : {
         "name" : "Specific Character Set",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Plan",
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
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a30a)" : {
         "name" : "Numeric Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1155)" : {
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "General Series"
      },
      "(0074,1401)[<0>](300a,00ce)" : {
         "desc" : [
            "Delivery Type of treatment.",
            {
               "title" : "Enumerated Values:",
               "type" : "variablelist",
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
            },
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.8.30.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "entity" : "Plan",
         "module" : "RT Brachy Application Setup Delivery Instruction",
         "req" : "1",
         "mod_tables" : [
            "table_C.8.8.30-1"
         ],
         "usage" : "M",
         "name" : "Treatment Delivery Type"
      },
      "(0020,9172)" : {
         "module" : "SOP Common",
         "name" : "Conversion Source Attributes Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "The set of images or other composite SOP Instances that were converted to this instance.",
            "If this instance was converted from a specific frame in the source instance, the reference shall include the Frame Number.",
            "One or more Items shall be included in this Sequence.",
            "Required if this instance was created by conversion, and Conversion Source Attributes Sequence (0020,9172) is not present in an Item of Shared Functional Groups Sequence (5200,9229) or Per-Frame Functional Groups Sequence (5200,9230)."
         ],
         "entity" : "Plan"
      },
      "(0008,1120)[<0>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Patient",
         "module" : "Patient",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "usage" : "M",
         "name" : "Referenced SOP Instance UID"
      },
      "(0010,0032)" : {
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient's Birth Time",
         "module" : "Patient",
         "entity" : "Patient",
         "desc" : "Birth time of the Patient."
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,003a)" : {
         "name" : "Assigning Agency or Department Code Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M",
         "req" : "3",
         "module" : "Patient",
         "entity" : "Patient",
         "desc" : [
            "The agency or department that assigned the patient identifier. Only a single Item is permitted in this Sequence.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_d5f050e9-c374-464c-bbc6-c76b57d065fd"
                     },
                     "content" : [
                        "Equivalent to HL7 v2 CX component 10 (Assigning Agency or Department)."
                     ]
                  },
                  "\n              "
               ]
            }
         ]
      },
      "(0010,1020)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "req" : "3",
         "name" : "Patient's Size",
         "module" : "Patient Study",
         "entity" : "Study",
         "desc" : "Length or size of the Patient, in meters."
      },
      "(0018,5100)" : {
         "entity" : "Series",
         "desc" : [
            "Patient position descriptor relative to the equipment. Required for images where Patient Orientation Code Sequence (0054,0410) is not present and whose SOP Class is one of the following: CT (\"1.2.840.10008.5.1.4.1.1.2\") or MR (\"1.2.840.10008.5.1.4.1.1.4\") or Enhanced CT (\"1.2.840.10008.5.1.4.1.1.2.1\") or Enhanced MR Image (\"1.2.840.10008.5.1.4.1.1.4.1\") or Enhanced Color MR Image (\"1.2.840.10008.5.1.4.1.1.4.3\") or MR Spectroscopy (\"1.2.840.10008.5.1.4.1.1.4.2\") Storage SOP Classes.",
            "May be present for other SOP Classes if Patient Orientation Code Sequence (0054,0410) is not present.",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "req" : "2C",
         "name" : "Patient Position",
         "module" : "General Series"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)" : {
         "name" : "Assigning Facility Sequence",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "entity" : "Patient",
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
         ]
      },
      "(0040,a390)[<0>](0040,e001)" : {
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "HL7 Instance Identifier",
         "module" : "SOP Common",
         "entity" : "Plan",
         "desc" : "Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier)."
      },
      "(4ffe,0001)[<0>](0400,0005)" : {
         "entity" : "Plan",
         "desc" : "A number, unique within this SOP Instance, used to identify this MAC Parameters Sequence (4FFE,0001) item from an Item of the Digital Signatures Sequence (FFFA,FFFA).",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "MAC ID Number",
         "module" : "SOP Common"
      },
      "(0012,0021)" : {
         "entity" : "Patient",
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
         ],
         "name" : "Clinical Trial Protocol Name",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "req" : "2",
         "usage" : "U",
         "module" : "Clinical Trial Subject"
      },
      "(0010,1100)[<0>](0040,e024)" : {
         "name" : "XDS Retrieval Sequence",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "module" : "Patient",
         "entity" : "Patient",
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
      "(0100,0410)" : {
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
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "Proper use of these flags is specified in Security Profiles. Implementations that do not conform to such Security Profiles may not necessarily handle these flags properly."
                     ],
                     "attrs" : {
                        "xml:id" : "para_b6227994-ee87-4d4f-9ba4-c3a82f2a705d"
                     },
                     "el" : "para"
                  },
                  "\n                "
               ]
            }
         ],
         "entity" : "Plan",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "name" : "SOP Instance Status"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a168)" : {
         "entity" : "Series",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "name" : "Concept Code Sequence",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series"
      },
      "(0040,0275)[<0>](0008,0050)" : {
         "desc" : "An identifier of the Imaging Service Request for this Requested Procedure.",
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Accession Number",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "req" : "3",
         "usage" : "M"
      },
      "(0008,1032)" : {
         "desc" : [
            "A Sequence that conveys the type of procedure performed.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Study",
         "module" : "General Study",
         "name" : "Procedure Code Sequence",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a124)" : {
         "entity" : "Series",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "req" : "1C",
         "name" : "UID",
         "module" : "General Series"
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
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Type of Instances",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ]
      },
      "(3008,0022)" : {
         "module" : "RT Brachy Application Setup Delivery Instruction",
         "name" : "Current Fraction Number",
         "req" : "1",
         "mod_tables" : [
            "table_C.8.8.30-1"
         ],
         "usage" : "M",
         "desc" : [
            "The index of the fraction that is to be delivered or completed in this treatment session.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.8.30.3",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "entity" : "Plan"
      },
      "(0008,0300)[<0>](0008,0302)" : {
         "name" : "Private Creator Reference",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Plan",
         "desc" : [
            "The value of the Private Creator Data Element value used to reserve the block\n                  of Private Data Elements whose characteristics are described in this Item.",
            {
               "el" : "note",
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
               ]
            }
         ]
      },
      "(0010,2160)" : {
         "desc" : "Ethnic group or race of the patient.",
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Ethnic Group"
      },
      "(0074,1401)[<0>](0074,140d)[<1>](0074,1408)" : {
         "entity" : "Plan",
         "desc" : [
            "Cumulative Time Weight where to stop the delivery of the referenced channel.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.8.15.6",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ]
         ],
         "name" : "End Cumulative Time Weight",
         "req" : "1",
         "mod_tables" : [
            "table_C.8.8.30-1"
         ],
         "usage" : "M",
         "module" : "RT Brachy Application Setup Delivery Instruction"
      },
      "(0040,0275)[<0>](0032,1064)" : {
         "entity" : "Series",
         "desc" : [
            "A sequence that conveys the Procedure Type of the requested procedure.",
            "Only a single Item is permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Requested Procedure Code Sequence",
         "module" : "General Series"
      },
      "(0008,0016)" : {
         "entity" : "Plan",
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
                  "xrefstyle" : "select: labelnumber",
                  "targetdoc" : "PS3.4",
                  "targetptr" : "PS3.4"
               },
               "el" : "olink"
            },
            "."
         ],
         "name" : "SOP Class UID",
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(300c,0002)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1150)" : {
         "entity" : "Plan",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.8.30-1",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "module" : "RT Brachy Application Setup Delivery Instruction"
      },
      "(0008,009d)[<0>](0040,1101)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "1",
         "name" : "Person Identification Code Sequence",
         "module" : "General Study",
         "entity" : "Study",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0012,0062)" : {
         "module" : "Patient",
         "name" : "Patient Identity Removed",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3",
         "usage" : "M",
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
         "entity" : "Patient"
      },
      "(0020,9172)[<0>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Plan",
         "module" : "SOP Common",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ]
      },
      "(0008,1072)[<0>](0040,1102)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Person's Address",
         "module" : "General Series",
         "entity" : "Series",
         "desc" : "Person's mailing address"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,08ea)" : {
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "name" : "Measurement Units Code Sequence",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1160)" : {
         "entity" : "Series",
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
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "req" : "1C",
         "name" : "Referenced Frame Number",
         "module" : "General Series"
      },
      "(0010,0035)" : {
         "entity" : "Patient",
         "desc" : [
            "The Alternative Calendar used for Patient's Birth Date in Alternative Calendar (0010,0033) and Patient's Death Date in Alternative Calendar (0010,0034).",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.1.5"
                  },
                  "el" : "xref"
               },
               " for Defined Terms."
            ],
            "Required if either Patient's Birth Date in Alternative Calendar (0010,0033) or Patient's Alternative Death Date in Calendar (0010,0034) is present."
         ],
         "name" : "Patient's Alternative Calendar",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "1C",
         "module" : "Patient"
      },
      "(0020,0013)" : {
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Instance Number",
         "desc" : "A number that identifies this Composite object instance.",
         "entity" : "Plan"
      },
      "(0400,0561)[<0>](0400,0550)[0](gggg,eeee)" : {
         "entity" : "Plan",
         "desc" : "May include Sequence Attributes and their Items.",
         "name" : "Any Attribute from the main data set that was modified or removed.",
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0040,0275)[<0>](0020,000d)" : {
         "desc" : "The unique identifier for the Study provided for this Requested Procedure.",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "req" : "3",
         "name" : "Study Instance UID"
      },
      "(0008,1072)[<0>](0008,0080)" : {
         "module" : "General Series",
         "name" : "Institution Name",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0031)" : {
         "module" : "General Series",
         "name" : "Local Namespace Entity ID",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "usage" : "M",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "Series"
      },
      "(0012,0050)" : {
         "module" : "Clinical Trial Study",
         "usage" : "U",
         "req" : "2",
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
      "(0010,1002)[<0>](0010,0024)" : {
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "module" : "Patient",
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "req" : "1C",
         "usage" : "M",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "Patient"
      },
      "(0018,1008)" : {
         "entity" : "Equipment",
         "desc" : "Identifier of the gantry or positioner.",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Gantry ID",
         "module" : "General Equipment"
      },
      "(0010,1100)[<0>](0040,e022)" : {
         "desc" : [
            "Details for retrieving instances from Media.",
            "Required if DICOM Retrieval Sequence (0040,E021), WADO Retrieval Sequence (0040,E023), and WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "This sequence shall only identify media known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "DICOM Media Retrieval Sequence",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ]
      },
      "(0012,0051)" : {
         "module" : "Clinical Trial Study",
         "name" : "Clinical Trial Time Point Description",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "usage" : "U",
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
         "entity" : "Study"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)" : {
         "module" : "General Series",
         "name" : "Content Item Modifier Sequence",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "usage" : "M",
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
         ],
         "entity" : "Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1155)" : {
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "General Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a161)" : {
         "module" : "General Series",
         "name" : "Floating Point Value",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "entity" : "Series"
      },
      "(0008,1070)" : {
         "desc" : "Name(s) of the operator(s) supporting the Series.",
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Operators' Name",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0008,1115)" : {
         "entity" : "Plan",
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this Sequence.",
            "Required if this Instance references Instances in this Study."
         ],
         "mod_tables" : [
            "table_C.12-8"
         ],
         "req" : "1C",
         "usage" : "M",
         "name" : "Referenced Series Sequence",
         "module" : "Common Instance Reference Module"
      },
      "(0010,1100)[<0>](0040,e021)[<1>](0008,0054)" : {
         "module" : "Patient",
         "name" : "Retrieve AE Title",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "req" : "1",
         "desc" : "Title of a DICOM Application Entity where the referenced instance(s) may be retrieved on the network.",
         "entity" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a168)" : {
         "entity" : "Series",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "name" : "Concept Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "M",
         "module" : "General Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0062,000b)" : {
         "module" : "General Series",
         "name" : "Referenced Segment Number",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "entity" : "Series"
      },
      "(0008,0080)" : {
         "entity" : "Equipment",
         "desc" : "Institution where the equipment that produced the composite instances is located.",
         "name" : "Institution Name",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment"
      },
      "(0040,a390)[<0>](0008,1155)" : {
         "entity" : "Plan",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "usage" : "M",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "module" : "SOP Common"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)" : {
         "name" : "Assigning Facility Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "req" : "3",
         "module" : "Patient",
         "entity" : "Patient",
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
         ]
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1155)" : {
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-11"
         ],
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "module" : "General Series"
      },
      "(300c,0002)[<0>](0008,1115)[<1>](0008,1199)[<2>](0040,a170)" : {
         "entity" : "Plan",
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Purpose of Reference Code Sequence",
         "mod_tables" : [
            "table_C.8.8.30-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M",
         "req" : "3",
         "module" : "RT Brachy Application Setup Delivery Instruction"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1160)" : {
         "name" : "Referenced Frame Number",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
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
         ]
      },
      "(0008,009c)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Consulting Physician's Name",
         "module" : "General Study",
         "entity" : "Study",
         "desc" : "Consulting physician(s) for this patient visit."
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0035)" : {
         "entity" : "Patient",
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
         "name" : "Identifier Type Code",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "req" : "3",
         "module" : "Patient"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0032)" : {
         "entity" : "Patient",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "name" : "Universal Entity ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "req" : "1C",
         "module" : "Patient"
      },
      "(0008,1111)[<0>](0008,1155)" : {
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-11"
         ],
         "req" : "1",
         "usage" : "M",
         "module" : "General Series"
      },
      "(0010,1030)" : {
         "name" : "Patient's Weight",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "req" : "3",
         "module" : "Patient Study",
         "entity" : "Study",
         "desc" : "Weight of the Patient, in kilograms."
      },
      "(0008,0096)[<0>](0040,1104)" : {
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
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person's Telecom Information",
         "module" : "General Study"
      },
      "(300c,0002)[<0>](0008,1115)[<1>](0008,1190)" : {
         "module" : "RT Brachy Application Setup Delivery Instruction",
         "mod_tables" : [
            "table_C.8.8.30-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Retrieve URL",
         "desc" : "URL specifying the location of the referenced instance(s).",
         "entity" : "Plan"
      },
      "(300c,0002)[<0>](0020,000d)" : {
         "name" : "Study Instance UID",
         "mod_tables" : [
            "table_C.8.8.30-1",
            "table_C.17-3"
         ],
         "usage" : "M",
         "req" : "1",
         "module" : "RT Brachy Application Setup Delivery Instruction",
         "entity" : "Plan",
         "desc" : "Unique identifier for the Study"
      },
      "(0018,a001)[<0>](0008,1072)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "name" : "Operator Identification Sequence",
         "desc" : [
            "Identification of the operator(s) of the contributing equipment.",
            "One or more Items are permitted in this Sequence.",
            "The number and order of Items shall correspond to the number and order of values of Operators' Name (0008,1070), if present."
         ],
         "entity" : "Plan"
      },
      "(0008,009d)[<0>](0040,1102)" : {
         "entity" : "Study",
         "desc" : "Person's mailing address",
         "name" : "Person's Address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "3",
         "usage" : "M",
         "module" : "General Study"
      },
      "(0008,1040)" : {
         "desc" : "Department in the institution where the equipment that produced the composite instances is located.",
         "entity" : "Equipment",
         "module" : "General Equipment",
         "name" : "Institutional Department Name",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M"
      },
      "(0008,001a)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Related General SOP Class UID",
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
         "entity" : "Plan"
      },
      "(0010,0020)" : {
         "entity" : "Patient",
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
               ]
            }
         ],
         "name" : "Patient ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "2",
         "module" : "Patient"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M",
         "req" : "1C",
         "module" : "Patient",
         "entity" : "Patient",
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
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Content Item Modifier Sequence",
         "module" : "General Series",
         "entity" : "Series",
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
      "(0008,1050)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Performing Physician's Name",
         "module" : "General Series",
         "entity" : "Series",
         "desc" : "Name of the physician(s) administering the Series."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a043)" : {
         "entity" : "Series",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Concept Name Code Sequence",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "module" : "General Series"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "name" : "Local Namespace Entity ID"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a162)" : {
         "name" : "Rational Numerator Value",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a122)" : {
         "module" : "General Series",
         "req" : "1C",
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
      "(0012,0071)" : {
         "module" : "Clinical Trial Series",
         "name" : "Clinical Trial Series ID",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "req" : "3",
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
         "entity" : "Series"
      },
      "(0008,0050)" : {
         "module" : "General Study",
         "name" : "Accession Number",
         "req" : "2",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "desc" : "A RIS generated number that identifies the order for the Study.",
         "entity" : "Study"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1102)" : {
         "desc" : "Person's mailing address",
         "entity" : "Plan",
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "name" : "Person's Address"
      },
      "(0028,0108)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "name" : "Smallest Pixel Value in Series",
         "module" : "General Series",
         "entity" : "Series",
         "desc" : "The minimum value of all images in this Series."
      },
      "(0040,0251)" : {
         "module" : "General Series",
         "name" : "Performed Procedure Step End Time",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "req" : "3",
         "desc" : "Time at which the Performed Procedure Step ended.",
         "entity" : "Series"
      },
      "(0010,1100)[<0>](0040,e023)[<1>](0040,e010)" : {
         "entity" : "Patient",
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
               "el" : "note",
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
               ]
            }
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "req" : "1",
         "name" : "Retrieve URI",
         "module" : "Patient"
      },
      "(0040,0250)" : {
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "req" : "3",
         "name" : "Performed Procedure Step End Date",
         "desc" : "Date on which the Performed Procedure Step ended.",
         "entity" : "Series"
      },
      "(0008,0300)[<0>](0008,0305)" : {
         "desc" : "Actions to be performed on element within the block that are not safe from identify leakage.",
         "entity" : "Plan",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "name" : "Deidentification Action Sequence"
      },
      "(0010,1010)" : {
         "desc" : "Age of the Patient.",
         "entity" : "Study",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "req" : "3",
         "name" : "Patient's Age"
      },
      " (0010,0027) [<0>](0010,0021)" : {
         "desc" : [
            "Identifier of the Assigning Authority (system, organization, agency, or department) that issued the Patient ID.",
            {
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
               ],
               "el" : "note"
            }
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Issuer of Patient ID",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M"
      },
      "(0010,0030)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "2",
         "usage" : "M",
         "name" : "Patient's Birth Date",
         "module" : "Patient",
         "entity" : "Patient",
         "desc" : "Birth date of the patient."
      },
      "(0018,a001)[<0>](0008,1090)" : {
         "desc" : "Manufacturer's model name of the equipment that contributed to the composite instance.",
         "entity" : "Plan",
         "module" : "SOP Common",
         "name" : "Manufacturer's Model Name",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0008,1010)" : {
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Station Name",
         "module" : "General Equipment",
         "entity" : "Equipment",
         "desc" : "User defined name identifying the machine that produced the composite instances."
      },
      "(0018,1200)" : {
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
         "entity" : "Equipment",
         "module" : "General Equipment",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "req" : "3",
         "name" : "Date of Last Calibration"
      },
      "(0040,0275)[<0>](0040,1002)" : {
         "name" : "Reason for the Requested Procedure",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "req" : "3",
         "module" : "General Series",
         "entity" : "Series",
         "desc" : "Reason for requesting this procedure."
      },
      "(0018,a001)[<0>](0018,1000)" : {
         "desc" : "Manufacturer's serial number of the equipment that contributed to the composite instance.",
         "entity" : "Plan",
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Device Serial Number"
      },
      "(0018,9004)" : {
         "entity" : "Plan",
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
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.13.2.1.1",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ]
         ],
         "name" : "Content Qualification",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0020,9172)[<0>](0008,1160)" : {
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
                        "xml:id" : "para_68450e47-9448-4ac5-82e8-4015a854968a"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ]
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "entity" : "Plan",
         "module" : "SOP Common",
         "name" : "Referenced Frame Number",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "usage" : "M",
         "req" : "1C"
      },
      "(0008,0096)[<0>](0008,0082)" : {
         "module" : "General Study",
         "name" : "Institution Code Sequence",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Study"
      },
      "(0020,0060)" : {
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            },
            {
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_46e9d782-b47b-4339-b6ff-a11691e830db"
                     },
                     "el" : "para",
                     "content" : [
                        "Some IODs support Image Laterality (0020,0062) at the Image level or Frame Laterality (0020,9072) at the Frame level in the Frame Anatomy functional group macro or Measurement Laterality (0024,0113) at the Measurement level, which can provide a more comprehensive mechanism for specifying the laterality of the body part(s) being examined."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Laterality",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "req" : "2C"
      },
      "(0010,1100)[<0>](0040,e022)[<1>](0088,0140)" : {
         "desc" : "Uniquely identifies the Storage Media on which the referenced instance(s) reside.",
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Storage Media File-Set UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "req" : "1"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(0010,0034)" : {
         "name" : "Patient's Death Date in Alternative Calendar",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3",
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
         "desc" : [
            "Date of death of the named patient in the Alternative Calendar (0010,0035).",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "No format is specified for alternative calendar dates so none should be assumed."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_9f9d00e7-4c3c-4ecd-9b0f-c6dc916409e9"
                     }
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ]
      },
      "(0018,a001)[<0>](0018,1201)" : {
         "module" : "SOP Common",
         "name" : "Time of Last Calibration",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
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
         "entity" : "Plan"
      },
      "(0008,1110)[<0>](0008,1150)" : {
         "entity" : "Study",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "req" : "1",
         "module" : "General Study"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "module" : "Patient",
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "req" : "1C",
         "usage" : "M",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "Patient"
      },
      "(0008,1250)[<0>](0020,000e)" : {
         "module" : "General Series",
         "name" : "Series Instance UID",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "req" : "1",
         "usage" : "M",
         "desc" : "Instance UID of Related Series",
         "entity" : "Series"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)" : {
         "name" : "Referenced Instance Sequence",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "usage" : "M",
         "req" : "1",
         "module" : "Common Instance Reference Module",
         "entity" : "Plan",
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0400,0500)" : {
         "name" : "Encrypted Attributes Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "1C",
         "module" : "SOP Common",
         "entity" : "Plan",
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
         ]
      },
      "(0012,0063)" : {
         "desc" : [
            "A description or label of the mechanism or method use to remove the patient's identity. May be multi-valued if successive de-identification steps have been performed.",
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
                                    "This may be used to describe the extent or thoroughness of the de-identification, for example whether or not the de-identification is for a \"Limited Data Set\" (as per HIPAA Privacy Rule)."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_1b4a5ea4-66da-478b-901c-5f7d6b806d29"
                                 },
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
                                       "content" : [
                                          "(109104, DCM, \"De-identifying Equipment\")"
                                       ],
                                       "attrs" : {
                                          "targetptr" : "DCM_109104",
                                          "targetdoc" : "PS3.16"
                                       },
                                       "el" : "olink"
                                    },
                                    "."
                                 ],
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_adf0139e-d0e5-457a-ac4d-5c9e20c50e35"
                                 }
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
            },
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method Code Sequence (0012,0064) is not present. May be present otherwise."
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "De-identification Method",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a161)" : {
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Floating Point Value",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(300c,0002)[<0>](0008,1115)[<1>](0088,0140)" : {
         "desc" : "Uniquely identifies the Storage Media on which the Composite Object(s) reside.",
         "entity" : "Plan",
         "module" : "RT Brachy Application Setup Delivery Instruction",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.8.30-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "3",
         "name" : "Storage Media File-Set UID"
      },
      "(0040,0275)[<0>](0008,0051)" : {
         "module" : "General Series",
         "name" : "Issuer of Accession Number Sequence",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "Series"
      },
      "(0008,0123)" : {
         "module" : "SOP Common",
         "name" : "Context Group Identification Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "3",
         "desc" : [
            "Sequence of items that map values of Context Identifier (0008,010F) to an external, private or local Context Group.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Plan"
      },
      "(0008,1049)[<0>](0008,0081)" : {
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "entity" : "Study",
         "module" : "General Study",
         "name" : "Institution Address",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a168)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "req" : "1C",
         "name" : "Concept Code Sequence",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "entity" : "Series"
      },
      "(0010,21b0)" : {
         "desc" : "Additional information about the Patient's medical history.",
         "entity" : "Study",
         "module" : "Patient Study",
         "name" : "Additional Patient History",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "req" : "3",
         "usage" : "U"
      },
      "(0020,0010)" : {
         "module" : "General Study",
         "name" : "Study ID",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "2",
         "usage" : "M",
         "desc" : "User or equipment generated Study identifier.",
         "entity" : "Study"
      },
      "(0400,0561)[<0>](0400,0562)" : {
         "entity" : "Plan",
         "desc" : "Date and time the attributes were removed and/or replaced.",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Attribute Modification DateTime",
         "module" : "SOP Common"
      },
      "(0008,0012)" : {
         "desc" : [
            "Date the SOP Instance was created.",
            "This is the date that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "entity" : "Plan",
         "module" : "SOP Common",
         "name" : "Instance Creation Date",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "M"
      },
      "(0040,0245)" : {
         "entity" : "Series",
         "desc" : "Time on which the Performed Procedure Step started.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Performed Procedure Step Start Time",
         "module" : "General Series"
      },
      "(0038,0064)[<0>](0040,0033)" : {
         "req" : "1C",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "name" : "Universal Entity ID Type",
         "module" : "Patient Study",
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ]
      },
      "(0008,0096)[<0>](0008,0081)" : {
         "module" : "General Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "3",
         "name" : "Institution Address",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "entity" : "Study"
      },
      "(0010,0024)[<0>](0040,0032)" : {
         "module" : "Patient",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_8933ed06-5a13-4f47-a4fd-9e2d7cc913a6"
                     }
                  },
                  "\n              "
               ]
            }
         ],
         "entity" : "Patient"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0031)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M",
         "name" : "Local Namespace Entity ID",
         "module" : "Patient",
         "entity" : "Patient",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise."
      },
      "(0010,0024)[<0>](0040,0033)" : {
         "module" : "Patient",
         "name" : "Universal Entity ID Type",
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
                     "linkend" : "sect_10.14",
                     "xrefstyle" : "select: label"
                  }
               },
               " for Defined Terms."
            ]
         ],
         "entity" : "Patient"
      },
      "(0040,0260)" : {
         "desc" : "Sequence describing the Protocol performed for this Procedure Step. One or more Items are permitted in this Sequence.",
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Performed Protocol Code Sequence",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ]
      },
      "(0008,1111)" : {
         "entity" : "Series",
         "desc" : [
            "Uniquely identifies the Performed Procedure Step SOP Instance to which the Series is related.",
            "Only a single Item is permitted in this Sequence."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "name" : "Referenced Performed Procedure Step Sequence",
         "module" : "General Series"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "module" : "General Series",
         "entity" : "Series",
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
      "(0038,0064)[<0>](0040,0032)" : {
         "module" : "Patient Study",
         "name" : "Universal Entity ID",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "req" : "1C",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "Study"
      },
      "(0008,009d)[<0>](0008,0082)" : {
         "module" : "General Study",
         "name" : "Institution Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "1C",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Study"
      },
      "(0008,1110)[<0>](0008,1155)" : {
         "entity" : "Study",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "module" : "General Study"
      },
      "(0074,1401)[<0>](300c,000c)" : {
         "desc" : [
            "Brachy Application Setup Number (300A,0234) within Brachy Application Setup Sequence (300A,0230) in the referenced RT Plan.",
            "One or more Items shall be included in this sequence."
         ],
         "entity" : "Plan",
         "module" : "RT Brachy Application Setup Delivery Instruction",
         "name" : "Referenced Brachy Application Setup Number",
         "req" : "1",
         "mod_tables" : [
            "table_C.8.8.30-1"
         ],
         "usage" : "M"
      },
      "(0074,1401)[<0>](0074,1402)" : {
         "module" : "RT Brachy Application Setup Delivery Instruction",
         "req" : "1C",
         "mod_tables" : [
            "table_C.8.8.30-1"
         ],
         "usage" : "M",
         "name" : "Continuation Start Total Reference Air Kerma",
         "desc" : [
            "Total Reference Air Kermawithin the Application Setup referenced by Referenced Brachy Application Setup Number (300C,000C) at which treatment delivery starts.",
            "Required if Delivery Type (300A,00CE) is CONTINUATION."
         ],
         "entity" : "Plan"
      },
      "(0010,1100)[<0>](0040,e024)[<1>](0040,e031)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "req" : "3",
         "name" : "Home Community ID",
         "module" : "Patient",
         "entity" : "Patient",
         "desc" : "Uniquely identifies a Community to which requests for the referenced instances can be directed."
      },
      "(0012,0042)" : {
         "req" : "1C",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "name" : "Clinical Trial Subject Reading ID",
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
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
         ]
      },
      "(0008,1030)" : {
         "name" : "Study Description",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "3",
         "usage" : "M",
         "module" : "General Study",
         "entity" : "Study",
         "desc" : "Institution-generated description or classification of the Study (component) performed."
      },
      "(0010,1002)[<0>](0010,0022)" : {
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
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "req" : "1",
         "name" : "Type of Patient ID"
      },
      "(0008,0124)" : {
         "name" : "Mapping Resource Identification Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "3",
         "module" : "SOP Common",
         "entity" : "Plan",
         "desc" : [
            "Sequence of items that map values of Mapping Resource (0008,0105) to an external, private or local Mapping Resource.",
            "One or more Items are permitted in this Sequence."
         ]
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "req" : "1C",
         "usage" : "M",
         "name" : "Universal Entity ID",
         "module" : "Patient",
         "entity" : "Patient",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a123)" : {
         "name" : "Person Name",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ]
      },
      "(0008,0031)" : {
         "module" : "General Series",
         "name" : "Series Time",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : "Time the Series started.",
         "entity" : "Series"
      },
      "(0040,a390)[<0>](0008,1150)" : {
         "module" : "SOP Common",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Plan"
      },
      "(0400,0561)[<0>](0400,0564)" : {
         "module" : "SOP Common",
         "name" : "Source of Previous Values",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "2",
         "desc" : "The source that provided the SOP Instance prior to the removal or replacement of the values. For example, this might be the Institution from which imported SOP Instances were received.",
         "entity" : "Plan"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Plan",
         "module" : "Common Instance Reference Module",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ],
         "req" : "1",
         "usage" : "M"
      },
      "(0008,1049)[<0>](0040,1104)" : {
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
         "entity" : "Study",
         "module" : "General Study",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person's Telecom Information"
      },
      "(0008,103e)" : {
         "module" : "General Series",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Series Description",
         "desc" : "Description of the Series",
         "entity" : "Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1160)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "M",
         "name" : "Referenced Frame Number",
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
         "entity" : "Series"
      },
      "(0010,2299)" : {
         "entity" : "Patient",
         "desc" : [
            "Name of organization with medical or welfare decision making authority for the patient.",
            "Required if patient is an animal. May be present otherwise."
         ],
         "name" : "Responsible Organization",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "req" : "2C",
         "module" : "Patient"
      },
      "(0008,0051)[<0>](0040,0032)" : {
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "Study",
         "module" : "General Study",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "usage" : "M",
         "name" : "Universal Entity ID"
      },
      "(fffa,fffa)[<0>](0400,0310)" : {
         "entity" : "Plan",
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
         "name" : "Certified Timestamp",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common"
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
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "usage" : "M",
         "req" : "\n                  3 ",
         "module" : "Patient"
      },
      "(0010,1002)[<0>](0010,0021)" : {
         "module" : "Patient",
         "name" : "Issuer of Patient ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "req" : "3",
         "usage" : "M",
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
         "entity" : "Patient"
      },
      "(0008,0096)[<0>](0040,1101)" : {
         "entity" : "Study",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "1",
         "usage" : "M",
         "name" : "Person Identification Code Sequence",
         "module" : "General Study"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a043)" : {
         "entity" : "Series",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Concept Name Code Sequence",
         "module" : "General Series"
      },
      "(0008,0110)[<0>](0008,0116)" : {
         "entity" : "Plan",
         "desc" : "Name of the organization responsible for the Coding Scheme. May include organizational contact information.",
         "name" : "Coding Scheme Responsible Organization",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,08ea)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Measurement Units Code Sequence",
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ]
      },
      "(0008,0096)[<0>](0008,0080)" : {
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "entity" : "Study",
         "module" : "General Study",
         "name" : "Institution Name",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "1C"
      },
      "(0008,1062)[<0>](0008,0082)" : {
         "name" : "Institution Code Sequence",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "1C",
         "usage" : "M",
         "module" : "General Study",
         "entity" : "Study",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0074,1401)[<0>](0074,140d)[<1>](0074,1407)" : {
         "name" : "Start Cumulative Time Weight",
         "mod_tables" : [
            "table_C.8.8.30-1"
         ],
         "req" : "1",
         "usage" : "M",
         "module" : "RT Brachy Application Setup Delivery Instruction",
         "entity" : "Plan",
         "desc" : [
            "Cumulative Time Weight where to start/continue the delivery of the referenced channel.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.8.15.6",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ]
         ]
      },
      "(0008,1049)[<0>](0040,1103)" : {
         "module" : "General Study",
         "name" : "Person's Telephone Numbers",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "req" : "3",
         "desc" : "Person's telephone number(s)",
         "entity" : "Study"
      },
      "(4ffe,0001)[<0>](0400,0010)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1",
         "name" : "MAC Calculation Transfer Syntax UID",
         "module" : "SOP Common",
         "entity" : "Plan",
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
                     "el" : "para",
                     "content" : [
                        "Certain Transfer Syntaxes, particularly those that are used with compressed data, allow the fragmentation of the pixel data to change. If such fragmentation changes, Digital Signatures generated with such Transfer Syntaxes could become invalid."
                     ]
                  },
                  "\n                    "
               ]
            }
         ]
      },
      "(0040,0275)[<0>](0040,0007)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Scheduled Procedure Step Description",
         "module" : "General Series",
         "entity" : "Series",
         "desc" : "Institution-generated description or classification of the Scheduled Procedure Step to be performed."
      },
      "(0008,1250)[<0>](0020,000d)" : {
         "name" : "Study Instance UID",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "req" : "1",
         "module" : "General Series",
         "entity" : "Series",
         "desc" : "Instance UID of Study to which the related Series belongs"
      },
      "(0020,9172)[<0>](0008,1150)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "usage" : "M",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "module" : "SOP Common",
         "entity" : "Plan",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0020,000e)" : {
         "name" : "Series Instance UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "req" : "1",
         "module" : "Common Instance Reference Module",
         "entity" : "Plan",
         "desc" : "Unique identifier of the Series containing the referenced Instances."
      },
      "(0012,0083)[<0>](0012,0085)" : {
         "entity" : "Study",
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
         "name" : "Consent for Distribution Flag",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "req" : "1",
         "usage" : "U",
         "module" : "Clinical Trial Study"
      },
      "(0400,0561)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Original Attributes Sequence",
         "module" : "SOP Common",
         "entity" : "Plan",
         "desc" : [
            "Sequence of Items containing all attributes that were removed or replaced by other values in the main data set.",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0008,1049)[<0>](0008,0080)" : {
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "entity" : "Study",
         "module" : "General Study",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Name"
      },
      "(0010,0010)" : {
         "module" : "Patient",
         "name" : "Patient's Name",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "2",
         "desc" : "Patient's full name.",
         "entity" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)" : {
         "entity" : "Series",
         "desc" : "Sequence that specifies the context for the Scheduled Protocol Code Sequence Item. One or more Items are permitted in this Sequence.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Protocol Context Sequence",
         "module" : "General Series"
      },
      " (0010,0027) [<0>](0010,0028)" : {
         "module" : "Patient",
         "name" : "Subject Relative Position in Image",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "req" : "3",
         "usage" : "M",
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
         ],
         "entity" : "Patient"
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0306)" : {
         "desc" : [
            "List of Private Data Elements in block that may contain identifying\n                  information (are unsafe from identity leakage)..",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once."
         ],
         "entity" : "Plan",
         "module" : "SOP Common",
         "name" : "Identifying Private Elements",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "usage" : "M"
      },
      "(0032,1034)" : {
         "name" : "Requesting Service Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "3",
         "module" : "General Study",
         "entity" : "Study",
         "desc" : [
            "Institutional department where the request initiated.",
            "Only a single item is permitted in this Sequence."
         ]
      },
      "(0100,0420)" : {
         "entity" : "Plan",
         "desc" : "The date and time when the SOP Instance Status (0100,0410) was set to AO.",
         "name" : "SOP Authorization DateTime",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "module" : "SOP Common"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)" : {
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Referenced SOP Sequence",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a122)" : {
         "module" : "General Series",
         "name" : "Time",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
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
      "(0008,1250)" : {
         "desc" : [
            "Identification of Series significantly related to this Series.",
            "One or more Items are permitted in this Sequence.",
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
                                 "content" : [
                                    "This attribute is not intended for conveying localizer reference information, for which Referenced Image Sequence (0008,1140) should be used."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_7ef219a6-dfda-4b92-a778-37d54ca1cc2c"
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
               ],
               "el" : "note"
            }
         ],
         "entity" : "Series",
         "module" : "General Series",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "name" : "Related Series Sequence"
      },
      "(fffa,fffa)[<0>](0400,0100)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1",
         "name" : "Digital Signature UID",
         "desc" : "A UID that can be used to uniquely reference this signature.",
         "entity" : "Plan"
      },
      "(0008,1052)[<0>](0040,1103)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Person's Telephone Numbers",
         "desc" : "Person's telephone number(s)",
         "entity" : "Series"
      },
      "(0008,0013)" : {
         "desc" : [
            "Time the SOP Instance was created.",
            "This is the time that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "entity" : "Plan",
         "module" : "SOP Common",
         "name" : "Instance Creation Time",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a30a)" : {
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "name" : "Numeric Value"
      },
      "(0018,a001)[<0>](0018,1020)" : {
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
         "entity" : "Plan",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Software Versions"
      },
      "(0008,0300)[<0>](0008,0304)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "1C",
         "name" : "Nonidentifying Private Elements",
         "module" : "SOP Common",
         "entity" : "Plan",
         "desc" : [
            "List of Private Data Elements in block that do not contain identifying\n                  information (are safe from identity leakage).",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once.",
            "Required if Block Identifying Information Status (0008,0303) equals MIXED."
         ]
      },
      "(0008,1115)[<0>](0008,114a)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "req" : "1",
         "name" : "Referenced Instance Sequence",
         "module" : "Common Instance Reference Module",
         "entity" : "Plan",
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a040)" : {
         "module" : "General Series",
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Value Type",
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
         "entity" : "Series"
      },
      "(0008,0081)" : {
         "entity" : "Equipment",
         "desc" : "Mailing address of the institution where the equipment that produced the composite instances is located.",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Institution Address",
         "module" : "General Equipment"
      },
      "(0010,1100)[<0>](0008,1199)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "req" : "1",
         "name" : "Referenced SOP Sequence",
         "module" : "Patient",
         "entity" : "Patient",
         "desc" : [
            "References to object instances.",
            "One or more Items shall be included in this Sequence"
         ]
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0062,000b)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "req" : "1C",
         "name" : "Referenced Segment Number",
         "desc" : "Identifies the Segment Number to which the reference applies. Required if the Referenced SOP Instance is a Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present.",
         "entity" : "Patient"
      },
      "(0400,0561)[<0>](0400,0563)" : {
         "name" : "Modifying System",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Plan",
         "desc" : "Identification of the system that removed and/or replaced the attributes."
      },
      "(0008,009d)[<0>](0008,0081)" : {
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "entity" : "Study",
         "module" : "General Study",
         "name" : "Institution Address",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "3"
      },
      "(0010,2298)" : {
         "entity" : "Patient",
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
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "Responsible Person Role",
         "module" : "Patient"
      },
      "(300c,0002)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0015)" : {
         "module" : "RT Brachy Application Setup Delivery Instruction",
         "name" : "MAC Algorithm",
         "mod_tables" : [
            "table_C.8.8.30-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "1",
         "usage" : "M",
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
                        "xml:id" : "para_07b64781-f4ca-4d53-9b0b-e3d8032bb048"
                     }
                  },
                  "\n                  "
               ]
            }
         ],
         "entity" : "Plan"
      },
      "(0010,0219)" : {
         "name" : "Strain Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3",
         "module" : "Patient",
         "entity" : "Patient",
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
         ]
      },
      "(0074,140e)" : {
         "entity" : "Plan",
         "desc" : [
            "Application Setups of the current RT Plan containing channels not to be delivered.",
            "Required if Delivery Type (300A,00CE) is CONTINUATION and one or more channels of any Application Setup are omitted.",
            "One or more items shall be included in this sequence."
         ],
         "name" : "Omitted Application Setup Sequence",
         "mod_tables" : [
            "table_C.8.8.30-1"
         ],
         "req" : "1C",
         "usage" : "M",
         "module" : "RT Brachy Application Setup Delivery Instruction"
      },
      "(0008,0106)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "1",
         "name" : "Context Group Version",
         "module" : "SOP Common",
         "entity" : "Plan",
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
      "(0010,0026)[<0>](0010,0021)" : {
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
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Issuer of Patient ID"
      },
      "(0074,1404)" : {
         "module" : "RT Brachy Application Setup Delivery Instruction",
         "req" : "1C",
         "mod_tables" : [
            "table_C.8.8.30-1"
         ],
         "usage" : "M",
         "name" : "Continuation Pulse Number",
         "desc" : [
            "The index of the pulse that is to be delivered or completed in this treatment session.",
            "Required if Brachy Treatment Type (300A,0202) of the referenced RT Plan in the Referenced RT Plan Sequence (300C,0002) is PDR and if Treatment Delivery Type (300A,00CE) is CONTINUATION in any of the items in the Brachy Task Sequence (0074,1401).",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.8.30.4",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ]
         ],
         "entity" : "Plan"
      },
      "(0010,0024)[<0>](0040,003a)" : {
         "name" : "Assigning Agency or Department Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "req" : "3",
         "module" : "Patient",
         "entity" : "Patient",
         "desc" : [
            "The agency or department that assigned the patient identifier. Only a single Item is permitted in this Sequence.",
            {
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
               ],
               "el" : "note"
            }
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0062,000b)" : {
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "M",
         "name" : "Referenced Segment Number"
      },
      "(0010,1001)" : {
         "module" : "Patient",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "Other Patient Names",
         "desc" : "Other names used to identify the patient.",
         "entity" : "Patient"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0039)" : {
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "req" : "3",
         "name" : "Assigning Jurisdiction Code Sequence",
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
         "entity" : "Patient"
      },
      "(0008,1049)[<0>](0008,0082)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "1C",
         "name" : "Institution Code Sequence",
         "module" : "General Study",
         "entity" : "Study",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0008,0105)" : {
         "desc" : [
            "The identifier of the Mapping Resource.",
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
         "entity" : "Plan",
         "module" : "SOP Common",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Mapping Resource"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,003a)" : {
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "name" : "Assigning Agency or Department Code Sequence",
         "module" : "Patient"
      },
      "(0008,0015)" : {
         "entity" : "Plan",
         "desc" : [
            "Date and time that the SOP Instance was last coerced by a Storage SCP (see ",
            {
               "attrs" : {
                  "targetptr" : "PS3.4",
                  "targetdoc" : "PS3.4",
                  "xrefstyle" : "select: labelnumber"
               },
               "el" : "olink"
            },
            ")."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Instance Coercion DateTime",
         "module" : "SOP Common"
      },
      "(0010,1100)[<0>](0040,e022)[<1>](0088,0130)" : {
         "entity" : "Patient",
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the referenced instance(s) reside.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "req" : "2",
         "name" : "Storage Media File-Set ID",
         "module" : "Patient"
      },
      "(0020,0011)" : {
         "entity" : "Series",
         "desc" : "A number that identifies this Series.",
         "name" : "Series Number",
         "req" : "2",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series"
      },
      "(0018,0015)" : {
         "entity" : "Series",
         "desc" : [
            [
               "Text description of the part of the body examined. See ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "targetdoc" : "PS3.16",
                     "targetptr" : "chapter_L",
                     "xrefstyle" : "template:Annex %n \u201c%t\u201d in PS3.16"
                  }
               },
               " for Defined Terms"
            ],
            {
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_c8ff54a1-69e9-4623-abb8-672af78baddf"
                     },
                     "el" : "para",
                     "content" : [
                        "Some IODs support the Anatomic Region Sequence (0008,2218), which can provide a more comprehensive mechanism for specifying the body part being examined."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Body Part Examined",
         "module" : "General Series"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0033)" : {
         "entity" : "Patient",
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
         "usage" : "M",
         "req" : "1C",
         "module" : "Patient"
      },
      "(0010,1100)[<0>](0040,e024)[<1>](0040,e030)" : {
         "entity" : "Patient",
         "desc" : "Uniquely identifies a Repository from which the referenced instances can be retrieved.",
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "Repository Unique ID",
         "module" : "Patient"
      },
      "(0008,0110)[<0>](0008,010c)" : {
         "module" : "SOP Common",
         "name" : "Coding Scheme UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1C",
         "desc" : "The coding scheme UID identifier. Required if coding scheme is identified by an ISO 8824 object identifier compatible with the UI VR.",
         "entity" : "Plan"
      },
      "(0008,1072)[<0>](0008,0081)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "req" : "3",
         "name" : "Institution Address",
         "module" : "General Series",
         "entity" : "Series",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable."
      },
      "(0040,a390)[<0>](0040,e010)" : {
         "name" : "Retrieve URI",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Plan",
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
                     "content" : [
                        "The VR of this attribute has changed from UT to UR."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_398d64f0-0a7e-4cfe-b480-b482ee2cb7a7"
                     }
                  },
                  "\n"
               ],
               "el" : "note"
            }
         ]
      },
      "(300c,0002)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)" : {
         "entity" : "Plan",
         "desc" : [
            "Sequence of references to Digital Signatures in the referenced SOP Instance.",
            "One or more Items are permitted in this Sequence.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_1bb4c66e-0b5e-4f69-b0f2-4e353dc73212"
                     },
                     "content" : [
                        "The Attributes in this Sequence can be used to detect if the referenced SOP Instance has been altered."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "name" : "Referenced Digital Signature Sequence",
         "mod_tables" : [
            "table_C.8.8.30-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M",
         "req" : "3",
         "module" : "RT Brachy Application Setup Delivery Instruction"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
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
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "req" : "1C",
         "usage" : "M"
      },
      "(0012,0030)" : {
         "module" : "Clinical Trial Subject",
         "name" : "Clinical Trial Site ID",
         "req" : "2",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U",
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
         "entity" : "Patient"
      },
      "(0008,0030)" : {
         "desc" : "Time the Study started.",
         "entity" : "Study",
         "module" : "General Study",
         "req" : "2",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Study Time"
      },
      "(0008,1080)" : {
         "desc" : "Description of the admitting diagnosis (diagnoses)",
         "entity" : "Study",
         "module" : "Patient Study",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "req" : "3",
         "name" : "Admitting Diagnoses Description"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a122)" : {
         "entity" : "Series",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Time",
         "module" : "General Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a040)" : {
         "module" : "General Series",
         "name" : "Value Type",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
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
      "(0400,0500)[<0>](0400,0510)" : {
         "desc" : "Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
         "entity" : "Plan",
         "module" : "SOP Common",
         "name" : "Encrypted Content Transfer Syntax UID",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
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
         "req" : "3",
         "name" : "Assigning Agency or Department Code Sequence",
         "module" : "Patient",
         "entity" : "Patient",
         "desc" : [
            "The agency or department that assigned the patient identifier. Only a single Item is permitted in this Sequence.",
            {
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_d5f050e9-c374-464c-bbc6-c76b57d065fd"
                     },
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
      "(0074,1401)[<0>](0074,140d)[<1>](0074,1406)" : {
         "module" : "RT Brachy Application Setup Delivery Instruction",
         "name" : "Referenced Channel Number",
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.8.8.30-1"
         ],
         "desc" : "The channel to be delivered,specified by the value of Channel Number (300A,0282) in referenced RT Plan.",
         "entity" : "Plan"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a160)" : {
         "module" : "General Series",
         "name" : "Text Value",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "entity" : "Series"
      },
      "(0018,1030)" : {
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Protocol Name",
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "User-defined description of the conditions under which the Series was performed.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "This attribute conveys series-specific protocol identification and may or may not be identical to the one presented in the Performed Protocol Code Sequence (0040,0260)."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_0dde755c-c6af-40da-92ed-f526337bb396"
                     }
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a163)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "req" : "1C",
         "name" : "Rational Denominator Value",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "entity" : "Series"
      },
      "(0008,0300)[<0>](0008,0301)" : {
         "entity" : "Plan",
         "desc" : "Odd group number within which the Private Data Element block is reserved.",
         "name" : "Private Group Reference",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(4ffe,0001)[<0>](0400,0015)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1",
         "name" : "MAC Algorithm",
         "module" : "SOP Common",
         "entity" : "Plan",
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
                        "xml:id" : "para_c0347aea-ecd8-4c0b-8e2f-cedadc2aacd5"
                     }
                  },
                  "\n                    "
               ]
            }
         ]
      },
      "(300c,0002)[<0>](0008,1115)" : {
         "entity" : "Plan",
         "desc" : [
            "Sequence of Items where each Item includes the Attributes of a Series containing referenced Composite Object(s).",
            "One or more Items shall be included in this Sequence"
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.8.8.30-1",
            "table_C.17-3"
         ],
         "usage" : "M",
         "name" : "Referenced Series Sequence",
         "module" : "RT Brachy Application Setup Delivery Instruction"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)" : {
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Referenced SOP Sequence",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a162)" : {
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Rational Numerator Value",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C"
      },
      "(0010,0216)[<0>](0010,0214)" : {
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
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "Strain Stock Number"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0033)" : {
         "entity" : "Patient",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "req" : "1C",
         "name" : "Universal Entity ID Type",
         "module" : "Patient"
      },
      "(0008,1062)[<0>](0008,0080)" : {
         "module" : "General Study",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Institution Name",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "entity" : "Study"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a123)" : {
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Person Name"
      },
      "(0400,0500)[<0>](0400,0520)" : {
         "module" : "SOP Common",
         "name" : "Encrypted Content",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "usage" : "M",
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
         "entity" : "Plan"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "entity" : "Patient",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M",
         "req" : "1C",
         "module" : "Patient"
      },
      "(0012,0020)" : {
         "module" : "Clinical Trial Subject",
         "name" : "Clinical Trial Protocol ID",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U",
         "req" : "1",
         "desc" : [
            "Identifier for the noted protocol. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.3.1.2"
               }
            },
            "."
         ],
         "entity" : "Patient"
      },
      "(0012,0010)" : {
         "name" : "Clinical Trial Sponsor Name",
         "usage" : "U",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
         "desc" : [
            "The name of the clinical trial or research sponsor. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.3.1.1"
               },
               "el" : "xref"
            },
            "."
         ]
      },
      "(0008,1200)[<0>](0008,1115)" : {
         "entity" : "Plan",
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Referenced Series Sequence",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "usage" : "M",
         "module" : "Common Instance Reference Module"
      },
      "(0008,1072)[<0>](0040,1101)" : {
         "module" : "General Series",
         "name" : "Person Identification Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "req" : "1",
         "usage" : "M",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Series"
      },
      "(0018,a001)[<0>](0018,1050)" : {
         "entity" : "Plan",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "name" : "Spatial Resolution",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0035)" : {
         "module" : "Patient",
         "name" : "Identifier Type Code",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "req" : "3",
         "usage" : "M",
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
      "(0008,1052)[<0>](0040,1104)" : {
         "entity" : "Series",
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
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Person's Telecom Information",
         "module" : "General Series"
      },
      "(0010,0212)" : {
         "entity" : "Patient",
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
         "name" : "Strain Description",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3",
         "usage" : "M",
         "module" : "Patient"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)" : {
         "module" : "Patient",
         "name" : "Assigning Facility Sequence",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M",
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
         "entity" : "Patient"
      },
      "(0040,0244)" : {
         "module" : "General Series",
         "name" : "Performed Procedure Step Start Date",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "desc" : "Date on which the Performed Procedure Step started.",
         "entity" : "Series"
      },
      "(300c,0002)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0020)" : {
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
         "entity" : "Plan",
         "module" : "RT Brachy Application Setup Delivery Instruction",
         "name" : "Data Elements Signed",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.8.30-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "1"
      },
      "(0038,0060)" : {
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "req" : "3",
         "name" : "Service Episode ID",
         "desc" : "Identifier of the Service Episode as assigned by the healthcare provider",
         "entity" : "Study"
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
                           "el" : "listitem",
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
                           ]
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
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_77a29ed0-edb8-45c2-a3d1-d07bc572e485"
                                 },
                                 "content" : [
                                    "This Attribute does\n                          not apply when Float Pixel Data (7FE0,0008) or Double Float Pixel Data\n                          (7FE0,0009) are used instead of Pixel Data (7FE0,0010); Float Pixel\n                          Padding Value (0028,0122) or Double Float Pixel Padding Value\n                          (0028,0123), respectively, are used instead, and defined at the Image,\n                          not the Equipment, level."
                                 ]
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
         "entity" : "Equipment",
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "req" : "1C",
         "usage" : "M",
         "name" : "Pixel Padding Value"
      },
      "(0008,1200)[<0>](0020,000d)" : {
         "module" : "Common Instance Reference Module",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "req" : "1",
         "name" : "Study Instance UID",
         "desc" : "Unique identifier of the Study containing the referenced Instances.",
         "entity" : "Plan"
      },
      "(0012,0064)" : {
         "module" : "Patient",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "De-identification Method Code Sequence",
         "desc" : [
            "A code describing the mechanism or method use to remove the patient's identity.",
            "One or more Items shall be included in this Sequence. Multiple items are used if successive de-identification steps have been performed or to describe options of a defined profile.",
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method (0012,0063) is not present. May be present otherwise."
         ],
         "entity" : "Patient"
      },
      "(0010,2201)" : {
         "name" : "Patient Species Description",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "1C",
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
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
            "Required if the patient is an animal and if Patient Species Code Sequence (0010,2202) is not present. May be present otherwise."
         ]
      },
      "(0008,0070)" : [
         {
            "desc" : "Manufacturer of the equipment that produced the composite instances.",
            "entity" : "Equipment",
            "module" : "General Equipment",
            "name" : "Manufacturer",
            "mod_tables" : [
               "table_C.7-8"
            ],
            "req" : "2",
            "usage" : "M"
         },
         {
            "module" : "Enhanced General Equipment",
            "mod_tables" : [
               "table_C.7-8b"
            ],
            "req" : "1",
            "usage" : "M",
            "name" : "Manufacturer",
            "desc" : "Manufacturer of the equipment that produced the composite instances.",
            "entity" : "Equipment"
         }
      ],
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a043)" : {
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "req" : "1",
         "name" : "Concept Name Code Sequence"
      },
      "(0008,0096)[<0>](0040,1102)" : {
         "desc" : "Person's mailing address",
         "entity" : "Study",
         "module" : "General Study",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Person's Address"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0062,000b)" : {
         "name" : "Referenced Segment Number",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ]
      },
      "(0008,1084)" : {
         "entity" : "Study",
         "desc" : [
            "A sequence that conveys the admitting diagnosis (diagnoses).",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Admitting Diagnoses Code Sequence",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "module" : "Patient Study"
      },
      "(0008,0051)[<0>](0040,0031)" : {
         "entity" : "Study",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "req" : "1C",
         "name" : "Local Namespace Entity ID",
         "module" : "General Study"
      },
      "(0040,1012)" : {
         "entity" : "Study",
         "desc" : [
            "Coded reason(s) for performing this procedure.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "May differ from the values in Reason for the Requested Procedure (0040,100A) in Request Attribute Sequence (0040,0275), for example if what was performed differs from what was requested."
                     ],
                     "attrs" : {
                        "xml:id" : "para_dcfce3fc-57ae-49c6-9700-37334726e8eb"
                     },
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
         "usage" : "M",
         "req" : "3",
         "module" : "General Study"
      },
      "(0008,0122)" : {
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
         ],
         "entity" : "Plan",
         "module" : "SOP Common",
         "name" : "Mapping Resource Name",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "M"
      },
      "(0008,103f)" : {
         "entity" : "Series",
         "desc" : [
            "A coded description of the Series.",
            "Only a single Item is permitted in this Sequence."
         ],
         "name" : "Series Description Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "req" : "3",
         "module" : "General Series"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0080)" : {
         "module" : "SOP Common",
         "name" : "Institution Name",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "req" : "1C",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "entity" : "Plan"
      },
      "(0018,a001)[<0>](0018,1200)" : {
         "entity" : "Plan",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "module" : "SOP Common"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)" : {
         "entity" : "Series",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "name" : "Referenced SOP Sequence",
         "module" : "General Series"
      },
      "(0008,1052)[<0>](0040,1101)" : {
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "name" : "Person Identification Code Sequence",
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0008,1062)[<0>](0040,1101)" : {
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Study",
         "module" : "General Study",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person Identification Code Sequence"
      },
      "(0008,1049)[<0>](0040,1101)" : {
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "1",
         "usage" : "M",
         "name" : "Person Identification Code Sequence"
      },
      "(0008,1062)" : {
         "entity" : "Study",
         "desc" : "Identification of the physician(s) reading the Study. One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Name of Physician(s) Reading Study (0008,1060), if present.",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Physician(s) Reading Study Identification Sequence",
         "module" : "General Study"
      },
      "(0010,0216)[<0>](0010,0217)" : {
         "entity" : "Patient",
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
         "name" : "Strain Source",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "1",
         "module" : "Patient"
      },
      "(0008,1072)[<0>](0008,0082)" : {
         "entity" : "Series",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Institution Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "req" : "1C",
         "usage" : "M",
         "module" : "General Series"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1101)" : {
         "module" : "SOP Common",
         "name" : "Person Identification Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "req" : "1",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Plan"
      },
      "(0008,0110)[<0>](0008,0103)" : {
         "name" : "Coding Scheme Version",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "3",
         "module" : "SOP Common",
         "entity" : "Plan",
         "desc" : "The coding scheme version associated with the Coding Scheme Designator (0008,0102)."
      },
      "(0008,1115)[<0>](0020,000e)" : {
         "entity" : "Plan",
         "desc" : "Unique identifier of the Series containing the referenced Instances.",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "usage" : "M",
         "req" : "1",
         "name" : "Series Instance UID",
         "module" : "Common Instance Reference Module"
      },
      "(0008,1052)" : {
         "entity" : "Series",
         "desc" : [
            "Identification of the physician(s) administering the Series.",
            "One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Performing Physician's Name (0008,1050), if present."
         ],
         "name" : "Performing Physician Identification Sequence",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "module" : "General Series"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "entity" : "Patient",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M",
         "name" : "Universal Entity ID",
         "module" : "Patient"
      },
      "(0038,0064)[<0>](0040,0031)" : {
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "Study",
         "module" : "Patient Study",
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "usage" : "U",
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,0009)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "req" : "1C",
         "usage" : "M",
         "name" : "Scheduled Procedure Step ID",
         "module" : "General Series",
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
         ]
      },
      "(fffa,fffa)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Digital Signatures Sequence",
         "module" : "SOP Common",
         "entity" : "Plan",
         "desc" : [
            "Sequence holding Digital Signatures.",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0010,1100)[<0>](0040,e023)" : {
         "module" : "Patient",
         "name" : "WADO Retrieval Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "req" : "1C",
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
         "entity" : "Patient"
      },
      "(0018,1050)" : {
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Spatial Resolution",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "entity" : "Equipment"
      },
      "(0018,a001)[<0>](0008,1010)" : {
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Station Name",
         "module" : "SOP Common",
         "entity" : "Plan",
         "desc" : "User defined name identifying the machine that contributed to the composite instance."
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0039)" : {
         "name" : "Assigning Jurisdiction Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "req" : "3",
         "module" : "Patient",
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
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a120)" : {
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "req" : "1C",
         "name" : "DateTime"
      },
      "(0010,0026)[<0>](0010,0020)" : {
         "entity" : "Patient",
         "desc" : "Primary identifier for the group of subjects.",
         "name" : "Patient ID",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "usage" : "M",
         "module" : "Patient"
      },
      "(0010,0024)" : {
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "req" : "3"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0032)" : {
         "entity" : "Series",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "req" : "1C",
         "name" : "Universal Entity ID",
         "module" : "General Series"
      },
      "(0074,1401)[<0>](0074,140d)" : {
         "module" : "RT Brachy Application Setup Delivery Instruction",
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.8.8.30-1"
         ],
         "name" : "Channel Delivery Continuation Sequence",
         "desc" : [
            "The treatment time weights for channels to be delivered to complete a previously interrupted fraction.",
            "Required if Delivery Type (300A,00CE) is CONTINUATION.",
            "One or more items shall be included in this sequence."
         ],
         "entity" : "Plan"
      },
      "(0040,0254)" : {
         "desc" : "Institution-generated description or classification of the Procedure Step that was performed.",
         "entity" : "Series",
         "module" : "General Series",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "name" : "Performed Procedure Step Description"
      },
      "(0010,2202)" : {
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
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Patient Species Code Sequence",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "req" : "1C"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0040,e001)" : {
         "module" : "Patient",
         "name" : "HL7 Instance Identifier",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "desc" : [
            "Instance Identifier of the encapsulated HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
            "Required if Type of Instances (0040,E020) is CDA."
         ],
         "entity" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)" : {
         "desc" : "Sequence that specifies the context for the Performed Protocol Code Sequence Item. One or more Items are permitted in this Sequence.",
         "entity" : "Series",
         "module" : "General Series",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "usage" : "M",
         "name" : "Protocol Context Sequence"
      },
      "(0008,1049)" : {
         "desc" : [
            "Identification of the physician(s) who are responsible for overall patient care at time of Study.",
            "One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Physician(s) of Record (0008,1048), if present."
         ],
         "entity" : "Study",
         "module" : "General Study",
         "name" : "Physician(s) of Record Identification Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "3"
      },
      "(0008,0053)" : {
         "module" : "SOP Common",
         "name" : "Query/Retrieve View",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1C",
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
         "entity" : "Plan"
      },
      "(0010,0021)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "name" : "Issuer of Patient ID",
         "module" : "Patient",
         "entity" : "Patient",
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
         ]
      },
      "(0012,0060)" : {
         "module" : "Clinical Trial Series",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "usage" : "U",
         "req" : "2",
         "name" : "Clinical Trial Coordinating Center Name",
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
         "entity" : "Series"
      },
      "(0038,0014)[<0>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "usage" : "U",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "module" : "Patient Study",
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
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a124)" : {
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
         "req" : "1C",
         "usage" : "M",
         "module" : "General Series"
      },
      "(fffa,fffa)[<0>](0400,0105)" : {
         "desc" : [
            "The date and time the Digital Signature was created. The time shall include an offset (i.e., time zone indication) from Coordinated Universal Time.",
            {
               "el" : "note",
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
               ]
            }
         ],
         "entity" : "Plan",
         "module" : "SOP Common",
         "name" : "Digital Signature DateTime",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "req" : "1"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0033)" : {
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
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_10.14"
                  },
                  "el" : "xref"
               },
               " for Defined Terms."
            ]
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "req" : "1C",
         "name" : "Universal Entity ID Type"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a121)" : {
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "name" : "Date",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "entity" : "Series"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
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
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "req" : "1C",
         "usage" : "M",
         "name" : "Universal Entity ID Type"
      },
      "(0018,1020)" : [
         {
            "req" : "3",
            "mod_tables" : [
               "table_C.7-8"
            ],
            "usage" : "M",
            "name" : "Software Versions",
            "module" : "General Equipment",
            "entity" : "Equipment",
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
            ]
         },
         {
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
            "entity" : "Equipment",
            "module" : "Enhanced General Equipment",
            "name" : "Software Versions",
            "mod_tables" : [
               "table_C.7-8b"
            ],
            "req" : "1",
            "usage" : "M"
         }
      ],
      "(0018,a001)[<0>](0040,a170)" : {
         "entity" : "Plan",
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
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Purpose of Reference Code Sequence",
         "module" : "SOP Common"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1150)" : {
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "module" : "General Series"
      },
      "(0018,a001)[<0>](0008,0080)" : {
         "name" : "Institution Name",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "module" : "SOP Common",
         "entity" : "Plan",
         "desc" : "Institution where the equipment that contributed to the composite instance is located."
      },
      "(4ffe,0001)[<0>](0400,0020)" : {
         "module" : "SOP Common",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
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
         "entity" : "Plan"
      },
      "(0040,0275)[<0>](0040,100a)" : {
         "module" : "General Series",
         "name" : "Reason for Requested Procedure Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M",
         "req" : "3",
         "desc" : [
            "Coded Reason for requesting this procedure.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Series"
      },
      "(0018,a001)[<0>](0018,a002)" : {
         "desc" : "The Date & Time when the equipment contributed to the composite instance.",
         "entity" : "Plan",
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Contribution DateTime"
      },
      "(0100,0426)" : {
         "entity" : "Plan",
         "desc" : "The certification number issued to the Application Entity that set the SOP Instance Status (0100,0410) to AO.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "name" : "Authorization Equipment Certification Number",
         "module" : "SOP Common"
      },
      "(0008,1060)" : {
         "module" : "General Study",
         "name" : "Name of Physician(s) Reading Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "req" : "3",
         "desc" : "Names of the physician(s) reading the Study.",
         "entity" : "Study"
      },
      "(300c,0002)[<0>](0008,1115)[<1>](0008,0054)" : {
         "entity" : "Plan",
         "desc" : "Title of the DICOM Application Entity where the Composite Object(s) may be retrieved on the network.",
         "mod_tables" : [
            "table_C.8.8.30-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Retrieve AE Title",
         "module" : "RT Brachy Application Setup Delivery Instruction"
      },
      "(0040,0275)" : {
         "desc" : [
            "Sequence that contains attributes from the Imaging Service Request.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Request Attributes Sequence",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M"
      },
      "(0074,140e)[<0>](300c,000c)" : {
         "entity" : "Plan",
         "desc" : "Brachy Application Setup Number (300A,0234) within Brachy Application Setup Sequence (300A,0230) in referenced RT Plan.",
         "name" : "Referenced Brachy Application Setup Number",
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.8.8.30-1"
         ],
         "module" : "RT Brachy Application Setup Delivery Instruction"
      },
      "(0018,a001)[<0>](0008,1040)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Institutional Department Name",
         "module" : "SOP Common",
         "entity" : "Plan",
         "desc" : "Department in the institution where the equipment that contributed to the composite instance is located."
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0307)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Deidentification Action",
         "module" : "SOP Common",
         "entity" : "Plan",
         "desc" : [
            "Recommended action to be performed during de-identification on elements listed in Identifying Private Elements (0008,0306) within this Item.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "A specific type of action is suggested in order to minimize the impact of\n                    de-identification on the behavior of recipients that use the Private Data\n                    Elements."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_d169d5a7-02bb-4199-80d3-99e87cbc8c6d"
                     }
                  },
                  "\n                "
               ]
            },
            {
               "type" : "variablelist",
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
               ]
            },
            {
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
                                 "content" : [
                                    "No C (clean) action is specified, since replacement with values of\n                        similar meaning known not to contain identifying information and consistent\n                        with the VR requires an understanding of the meaning of the value of the\n                        element. Whether or not to clean rather than remove or replace values is at\n                        the discretion of the implementer."
                                 ],
                                 "el" : "para",
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
               ],
               "el" : "note"
            }
         ]
      },
      "(0008,0110)[<0>](0008,0114)" : {
         "desc" : "The coding scheme identifier as defined in an external registry. Required if coding scheme is registered and Coding Scheme UID (0008,010C) is not present.",
         "entity" : "Plan",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "2C",
         "name" : "Coding Scheme External ID"
      },
      "(0008,010f)" : {
         "name" : "Context Identifier",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Plan",
         "desc" : [
            "The identifier of the Context Group.",
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
         ]
      },
      "(0100,0424)" : {
         "desc" : "Any comments associated with the setting of the SOP Instance Status (0100,0410) to AO.",
         "entity" : "Plan",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "name" : "SOP Authorization Comment"
      },
      "(0008,009d)[<0>](0008,0080)" : {
         "module" : "General Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "1C",
         "name" : "Institution Name",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "entity" : "Study"
      },
      "(0018,a001)[<0>](0008,0081)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Institution Address",
         "module" : "SOP Common",
         "entity" : "Plan",
         "desc" : "Address of the institution where the equipment that contributed to the composite instance is located."
      },
      "(0012,0083)[<0>](0012,0084)" : {
         "desc" : [
            "The type of distribution for which consent to distribute has been granted.",
            {
               "title" : "Defined Terms:",
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
               ]
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
         "entity" : "Study",
         "module" : "Clinical Trial Study",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "usage" : "U",
         "name" : "Distribution Type"
      },
      "(0400,0561)[<0>](0400,0550)" : {
         "desc" : [
            "Sequence that contains all the Attributes, with their previous values, that were modified or removed from the main data set.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Plan",
         "module" : "SOP Common",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Modified Attributes Sequence"
      },
      " (0010,0027) [<0>](0010,0020)" : {
         "entity" : "Patient",
         "desc" : "Primary identifier for an individual subject.",
         "name" : "Patient ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "req" : "1",
         "module" : "Patient"
      },
      "(0008,0051)[<0>](0040,0033)" : {
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "usage" : "M",
         "req" : "1C",
         "name" : "Universal Entity ID Type",
         "module" : "General Study"
      },
      "(300c,0002)[<0>](0008,1115)[<1>](0088,0130)" : {
         "entity" : "Plan",
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the Composite Object (s) reside.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.8.30-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "3",
         "name" : "Storage Media File-Set ID",
         "module" : "RT Brachy Application Setup Delivery Instruction"
      },
      "(0040,0280)" : {
         "module" : "General Series",
         "name" : "Comments on the Performed Procedure Step",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "desc" : "User-defined comments on the Performed Procedure Step.",
         "entity" : "Series"
      },
      "(0010,1100)[<0>](0040,e025)" : {
         "name" : "WADO-RS Retrieval Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "req" : "1C",
         "module" : "Patient",
         "entity" : "Patient",
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
         ]
      },
      "(0008,1111)[<0>](0008,1150)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-11"
         ],
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "module" : "General Series",
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(300c,0002)[<0>](0008,1115)[<1>](0040,e011)" : {
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.8.30-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "name" : "Retrieve Location UID",
         "module" : "RT Brachy Application Setup Delivery Instruction",
         "entity" : "Plan",
         "desc" : "Unique identifier of the system where the Composite Object(s) may be retrieved on the network."
      },
      "(0020,9172)[<0>](0062,000b)" : {
         "module" : "SOP Common",
         "name" : "Referenced Segment Number",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "entity" : "Plan"
      },
      "(0008,1072)[<0>](0040,1103)" : {
         "desc" : "Person's telephone number(s)",
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Person's Telephone Numbers",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0062,000b)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "req" : "1C",
         "name" : "Referenced Segment Number",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "entity" : "Series"
      },
      "(0008,0096)[<0>](0040,1103)" : {
         "desc" : "Person's telephone number(s)",
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Person's Telephone Numbers"
      },
      "(0010,0040)" : {
         "name" : "Patient's Sex",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "req" : "2",
         "module" : "Patient",
         "entity" : "Patient",
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
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1103)" : {
         "entity" : "Plan",
         "desc" : "Person's telephone number(s)",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Person's Telephone Numbers",
         "module" : "SOP Common"
      },
      "(fffa,fffa)[<0>](0400,0305)" : {
         "module" : "SOP Common",
         "name" : "Certified Timestamp Type",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "req" : "1C",
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
               "content" : [
                  "\n                      ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_cae60b6b-4fad-4c20-981d-247bbf9c6471"
                     },
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
         "entity" : "Plan"
      },
      "(0008,0110)[<0>](0008,0115)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "name" : "Coding Scheme Name",
         "module" : "SOP Common",
         "entity" : "Plan",
         "desc" : "The coding scheme full common name"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1160)" : {
         "entity" : "Patient",
         "desc" : [
            "Identifies the frame numbers within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1.",
            {
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
               ],
               "el" : "note"
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "name" : "Referenced Frame Number",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "req" : "1C",
         "usage" : "M",
         "module" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a120)" : {
         "entity" : "Series",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "name" : "DateTime",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "M",
         "module" : "General Series"
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
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Patient Breed Code Sequence",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "req" : "2C"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a30a)" : {
         "module" : "General Series",
         "name" : "Numeric Value",
         "req" : "1C",
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
         "entity" : "Series"
      },
      "(300c,0002)[<0>](0008,1115)[<1>](0008,1199)" : {
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.8.30-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "name" : "Referenced SOP Sequence",
         "module" : "RT Brachy Application Setup Delivery Instruction",
         "entity" : "Plan",
         "desc" : [
            "References to Composite Object SOP Class/SOP Instance pairs that are part of the Study defined by Study Instance UID and the Series defined by Series Instance UID (0020,000E).",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0010,2292)" : {
         "req" : "2C",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "Patient Breed Description",
         "module" : "Patient",
         "entity" : "Patient",
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
         ]
      },
      "(0074,1401)[<0>](0074,1403)" : {
         "desc" : [
            "Total Reference Air Kermawithin the Application Setup referenced by Referenced Brachy Application Setup Number (300C,000C) at which treatment delivery ends.",
            "Required if Delivery Type (300A,00CE) is CONTINUATION."
         ],
         "entity" : "Plan",
         "module" : "RT Brachy Application Setup Delivery Instruction",
         "name" : "Continuation End Total Reference Air Kerma",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.8.30-1"
         ]
      },
      "(0038,0014)[<0>](0040,0031)" : {
         "module" : "Patient Study",
         "name" : "Local Namespace Entity ID",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "usage" : "U",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "Study"
      },
      "(0074,1401)[<0>](0074,1405)[<1>](0074,140c)" : {
         "entity" : "Plan",
         "desc" : "The order of delivery of this channel, monotonically increasing by 1, starting from 1, where number 1 is the first channel to be delivered.",
         "mod_tables" : [
            "table_C.8.8.30-1"
         ],
         "usage" : "M",
         "req" : "1",
         "name" : "Channel Delivery Order Index",
         "module" : "RT Brachy Application Setup Delivery Instruction"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a163)" : {
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "req" : "1C",
         "name" : "Rational Denominator Value"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a123)" : {
         "entity" : "Series",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Person Name",
         "module" : "General Series"
      },
      "(0008,009d)" : {
         "module" : "General Study",
         "name" : "Consulting Physician Identification Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "3",
         "desc" : [
            "Identification of the consulting physician(s).",
            "One or more Items shall be included in this Sequence. If more than one Item, the number and order shall correspond to the value of Consulting Physician's Name (0008,009C), if present."
         ],
         "entity" : "Study"
      },
      "(0074,1401)[<0>](0074,1405)[<1>](0074,1406)" : {
         "entity" : "Plan",
         "desc" : "The channel to be delivered,specified by the value of Channel Number (300A,0282) in referenced RT Plan.",
         "req" : "1",
         "mod_tables" : [
            "table_C.8.8.30-1"
         ],
         "usage" : "M",
         "name" : "Referenced Channel Number",
         "module" : "RT Brachy Application Setup Delivery Instruction"
      },
      "(4ffe,0001)" : {
         "name" : "MAC Parameters Sequence",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "req" : "3",
         "module" : "SOP Common",
         "entity" : "Plan",
         "desc" : [
            "A sequence of items that describe the parameters used to calculate a MAC for use in Digital Signatures.",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0008,001b)" : {
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Original Specialized SOP Class UID",
         "module" : "SOP Common",
         "entity" : "Plan",
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
         ]
      },
      "(0010,0026)[<0>](0010,0024)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "Patient"
      },
      "(0008,0018)" : {
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
                  "targetptr" : "PS3.4",
                  "targetdoc" : "PS3.4",
                  "xrefstyle" : "select: labelnumber"
               }
            },
            "."
         ],
         "entity" : "Plan",
         "module" : "SOP Common",
         "name" : "SOP Instance UID",
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0275)[<0>](0040,0008)" : {
         "desc" : "Sequence describing the Scheduled Protocol following a specific coding scheme. One or more Items are permitted in this Sequence.",
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Scheduled Protocol Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "req" : "3"
      },
      "(0008,1062)[<0>](0008,0081)" : {
         "module" : "General Study",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Institution Address",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "entity" : "Study"
      },
      "(300c,0002)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)" : {
         "module" : "RT Brachy Application Setup Delivery Instruction",
         "name" : "Referenced SOP Instance MAC Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.8.30-1",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_85131baf-ebaa-41ca-b044-07c75698df97"
                     },
                     "content" : [
                        "This Attribute may be used in place of Referenced Digital Signature Sequence (0400,0402), particularly if the SOP Instance does not have appropriate Digital Signatures that can be referenced."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "entity" : "Plan"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a160)" : {
         "name" : "Text Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ]
      },
      "(0008,0096)" : {
         "name" : "Referring Physician Identification Sequence",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "req" : "3",
         "module" : "General Study",
         "entity" : "Study",
         "desc" : [
            "Identification of the patient's referring physician.",
            "Only a single item is permitted in this Sequence."
         ]
      },
      "(0074,1401)" : {
         "module" : "RT Brachy Application Setup Delivery Instruction",
         "name" : "Brachy Task Sequence",
         "mod_tables" : [
            "table_C.8.8.30-1"
         ],
         "req" : "1",
         "usage" : "M",
         "desc" : [
            "Specification of Brachy Application Setups to be delivered.",
            "One or more Items shall be included in this Sequence.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.8.30.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "entity" : "Plan"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a120)" : {
         "module" : "General Series",
         "name" : "DateTime",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "entity" : "Series"
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
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3",
         "name" : "Strain Additional Information"
      },
      "(0018,a001)[<0>](0008,0070)" : {
         "module" : "SOP Common",
         "name" : "Manufacturer",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "desc" : "Manufacturer of the equipment that contributed to the composite instance.",
         "entity" : "Plan"
      },
      "(0010,2210)" : {
         "entity" : "Series",
         "desc" : [
            "The anatomical orientation type used in instances generated by this equipment.",
            {
               "list" : [
                  [
                     "BIPED",
                     null
                  ],
                  [
                     "QUADRUPED",
                     null
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
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
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.2.1.1"
                  }
               },
               "."
            ],
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "If this Attribute is not present, the default human standard anatomical position is used to define the patient orientation of projection images and the patient coordinate system of cross-sectional images."
                     ],
                     "attrs" : {
                        "xml:id" : "para_6250224a-3316-415a-9bc4-04999c343dd9"
                     },
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "name" : "Anatomical Orientation Type",
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a040)" : {
         "module" : "General Series",
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Value Type",
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
         "entity" : "Series"
      },
      "(0010,2294)" : {
         "desc" : [
            "Information identifying an animal within a breed registry.",
            "Zero or more Items shall be included in this Sequence.",
            "Required if the patient is an animal."
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Breed Registration Sequence",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "req" : "2C"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a30a)" : {
         "name" : "Numeric Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ]
      },
      "(0008,0117)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "M",
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
         "entity" : "Plan"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a162)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Rational Numerator Value",
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Series",
         "module" : "General Series",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID"
      },
      "(0040,a390)" : {
         "module" : "SOP Common",
         "name" : "HL7 Structured Document Reference Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1C",
         "usage" : "M",
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
         "entity" : "Plan"
      },
      "(0010,0024)[<0>](0040,0036)" : {
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
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Assigning Facility Sequence"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a163)" : {
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "M",
         "name" : "Rational Denominator Value"
      },
      "(0012,0083)" : {
         "name" : "Consent for Clinical Trial Use Sequence",
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
         "entity" : "Plan",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "req" : "1",
         "name" : "Signature"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0032)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "req" : "3",
         "name" : "Universal Entity ID",
         "module" : "Patient",
         "entity" : "Patient",
         "desc" : [
            "Universal or unique identifier for the Patient ID Assigning Authority. The authority identified by this attribute shall be the same as that of Issuer of Patient ID (0010,0021), if present.",
            {
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
               ],
               "el" : "note"
            }
         ]
      },
      " (0010,0027) [<0>](0018,5100)" : {
         "entity" : "Patient",
         "desc" : [
            [
               "Patient position descriptor relative to the equipment.  See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.1.4.1.1.1",
                     "xrefstyle" : "select: label"
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
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "usage" : "M",
         "name" : "Patient Position",
         "module" : "Patient"
      },
      "(0038,0010)" : {
         "desc" : "Identifier of the visit as assigned by the healthcare provider",
         "entity" : "Study",
         "module" : "Patient Study",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "req" : "3",
         "name" : "Admission ID"
      },
      "(0008,1062)[<0>](0040,1103)" : {
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Person's Telephone Numbers",
         "desc" : "Person's telephone number(s)",
         "entity" : "Study"
      },
      "(0038,0062)" : {
         "entity" : "Study",
         "desc" : "Description of the type of service episode.",
         "name" : "Service Episode Description",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "module" : "Patient Study"
      },
      "(0010,0024)[<0>](0040,0035)" : {
         "name" : "Identifier Type Code",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "req" : "3",
         "module" : "Patient",
         "entity" : "Patient",
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
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "req" : "1",
         "usage" : "M",
         "name" : "Referenced SOP Instance UID"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0082)" : {
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Plan",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "M",
         "req" : "1C",
         "name" : "Institution Code Sequence"
      },
      "(fffa,fffa)[<0>](0400,0110)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1",
         "usage" : "M",
         "name" : "Certificate Type",
         "module" : "SOP Common",
         "entity" : "Plan",
         "desc" : [
            "The type of certificate used in (0400,0115).",
            {
               "list" : [
                  [
                     "X509_1993_SIG",
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
                     ]
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ]
      },
      "(0010,1021)" : {
         "name" : "Patient's Size Code Sequence",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "req" : "3",
         "module" : "Patient Study",
         "entity" : "Study",
         "desc" : [
            "Patient's size category code",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0010,2294)[<0>](0010,2296)" : {
         "desc" : [
            "Identification of the organization with which an animal is registered.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "req" : "1",
         "name" : "Breed Registry Code Sequence"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a162)" : {
         "module" : "General Series",
         "name" : "Rational Numerator Value",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "entity" : "Series"
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
         "req" : "3",
         "usage" : "M",
         "module" : "General Study"
      },
      "(0008,0090)" : {
         "entity" : "Study",
         "desc" : "Name of the patient's referring physician",
         "name" : "Referring Physician's Name",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "req" : "2",
         "module" : "General Study"
      },
      "(fffa,fffa)[<0>](0400,0005)" : {
         "entity" : "Plan",
         "desc" : "A number used to identify which MAC Parameters Sequence item was used in the calculation of this Digital Signature.",
         "name" : "MAC ID Number",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0074,140e)[<0>](0074,1409)[<1>](0074,140a)" : {
         "desc" : [
            "Reason why the referenced channel is not to be delivered.",
            {
               "list" : [
                  [
                     "ALREADY_TREATED",
                     "The channel has been already delivered."
                  ],
                  [
                     "OTHER",
                     "This channel is not to be delivered for other reasons."
                  ]
               ],
               "title" : "Defined Terms:",
               "type" : "variablelist"
            }
         ],
         "entity" : "Plan",
         "module" : "RT Brachy Application Setup Delivery Instruction",
         "req" : "1",
         "mod_tables" : [
            "table_C.8.8.30-1"
         ],
         "usage" : "M",
         "name" : "Reason for Channel Omission"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a124)" : {
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "req" : "1C",
         "name" : "UID"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)" : {
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Referenced SOP Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C"
      },
      "(0012,0083)[<0>](0012,0020)" : {
         "entity" : "Study",
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
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "req" : "1C",
         "module" : "Clinical Trial Study"
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
                     "attrs" : {
                        "xml:id" : "para_5deccc65-f9a8-49d5-8b85-1d58535d1119"
                     },
                     "el" : "para",
                     "content" : [
                        "The condition is to allow the contents of this macro to be present (e.g., to convey the reason for the procedure, such as whether a mammogram is for screening or diagnostic purposes) even when the procedure was not formally scheduled and a value for this identifier is unknown, rather than making up a dummy value."
                     ]
                  },
                  "\n              "
               ]
            }
         ],
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Requested Procedure ID",
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1150)" : {
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "module" : "General Series"
      },
      "(0008,1062)[<0>](0040,1104)" : {
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
         "name" : "Person's Telecom Information",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "module" : "General Study"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a040)" : {
         "module" : "General Series",
         "name" : "Value Type",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
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
         "entity" : "Series"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0032)" : {
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
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Universal Entity ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a121)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Date",
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ]
      },
      "(0018,1000)" : [
         {
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
                        "el" : "para",
                        "content" : [
                           "This identifier corresponds to the device that actually created the images, such as a CR plate reader or a CT console, and may not be sufficient to identify all of the equipment in the imaging chain, such as the generator or gantry or plate."
                        ]
                     },
                     "\n                  "
                  ]
               }
            ],
            "entity" : "Equipment",
            "module" : "General Equipment",
            "name" : "Device Serial Number",
            "req" : "3",
            "mod_tables" : [
               "table_C.7-8"
            ],
            "usage" : "M"
         },
         {
            "desc" : "Manufacturer's serial number of the equipment that produced the composite instances.",
            "entity" : "Equipment",
            "module" : "Enhanced General Equipment",
            "req" : "1",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-8b"
            ],
            "name" : "Device Serial Number"
         }
      ],
      "(0020,000d)" : {
         "desc" : "Unique identifier for the Study.",
         "entity" : "Study",
         "module" : "General Study",
         "name" : "Study Instance UID",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "req" : "1"
      },
      "(300c,0002)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0010)" : {
         "module" : "RT Brachy Application Setup Delivery Instruction",
         "mod_tables" : [
            "table_C.8.8.30-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M",
         "req" : "1",
         "name" : "MAC Calculation Transfer Syntax UID",
         "desc" : [
            "The Transfer Syntax UID used to encode the values of the Data Elements included in the MAC calculation. When computing the MAC, only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
            {
               "el" : "note",
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
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_2a42563c-d7f6-4749-9a5a-b563109dea18"
                                 },
                                 "content" : [
                                    "This does not constrain the transfer syntax used to transmit the object."
                                 ]
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
         "entity" : "Plan"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a168)" : {
         "module" : "General Series",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Concept Code Sequence",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "entity" : "Series"
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
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
         "entity" : "Study",
         "module" : "Patient Study",
         "name" : "Patient's Sex Neutered",
         "req" : "2C",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U"
      },
      "(300c,0002)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0120)" : {
         "module" : "RT Brachy Application Setup Delivery Instruction",
         "name" : "Signature",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.8.30-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "1",
         "desc" : "The Signature Value identified by the Digital Signature UID within the Referenced SOP Instance UID.",
         "entity" : "Plan"
      },
      "(0010,2294)[<0>](0010,2295)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "1",
         "name" : "Breed Registration Number",
         "module" : "Patient",
         "entity" : "Patient",
         "desc" : "Identification number of an animal within the registry."
      },
      "(0074,140e)[<0>](0074,1409)" : {
         "module" : "RT Brachy Application Setup Delivery Instruction",
         "name" : "Omitted Channel Sequence",
         "mod_tables" : [
            "table_C.8.8.30-1"
         ],
         "usage" : "M",
         "req" : "1",
         "desc" : [
            "Channels defined for this Application Setup not to be delivered.",
            "One or more items shall be included in this sequence."
         ],
         "entity" : "Plan"
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1150)" : {
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-11"
         ],
         "usage" : "M",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "module" : "General Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a161)" : {
         "entity" : "Series",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "name" : "Floating Point Value",
         "module" : "General Series"
      },
      "(0012,0040)" : {
         "entity" : "Patient",
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
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U",
         "req" : "1C",
         "module" : "Clinical Trial Subject"
      },
      "(300c,0002)[<0>](0008,1115)[<1>](0020,000e)" : {
         "entity" : "Plan",
         "desc" : "Unique identifier of a Series that is part of this Study and contains the referenced Composite Object(s).",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.8.30-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "1",
         "name" : "Series Instance UID",
         "module" : "RT Brachy Application Setup Delivery Instruction"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0033)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "req" : "1C",
         "name" : "Universal Entity ID Type",
         "module" : "Patient",
         "entity" : "Patient",
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
      "(0008,1072)[<0>](0040,1104)" : {
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
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Person's Telecom Information"
      },
      "(0010,0216)[<0>](0010,0215)" : {
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
         "entity" : "Patient",
         "module" : "Patient",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "Strain Source Registry Code Sequence"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a120)" : {
         "module" : "General Series",
         "name" : "DateTime",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "entity" : "Series"
      },
      "(0008,0021)" : {
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Series Date",
         "module" : "General Series",
         "entity" : "Series",
         "desc" : "Date the Series started."
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0039)" : {
         "name" : "Assigning Jurisdiction Code Sequence",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "module" : "Patient",
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
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1160)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "M",
         "name" : "Referenced Frame Number",
         "module" : "General Series",
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
         ]
      },
      "(0010,0213)" : {
         "module" : "Patient",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "Strain Nomenclature",
         "desc" : [
            "The nomenclature used for Strain Description (0010,0212). See ",
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
      "(0008,1110)" : {
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Referenced Study Sequence",
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
         "entity" : "Study"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a043)" : {
         "entity" : "Series",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Concept Name Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "req" : "1",
         "module" : "General Series"
      },
      "(0008,009d)[<0>](0040,1103)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Person's Telephone Numbers",
         "module" : "General Study",
         "entity" : "Study",
         "desc" : "Person's telephone number(s)"
      },
      "(0008,1250)[<0>](0040,a170)" : {
         "entity" : "Series",
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "Zero or more Items shall be included in this Sequence.",
            "When absent, implies that the reason for the reference is unknown."
         ],
         "req" : "2",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Purpose of Reference Code Sequence",
         "module" : "General Series"
      },
      "(0010,2180)" : {
         "desc" : "Occupation of the Patient.",
         "entity" : "Study",
         "module" : "Patient Study",
         "name" : "Occupation",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U"
      },
      "(0008,1052)[<0>](0040,1102)" : {
         "desc" : "Person's mailing address",
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Person's Address",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a161)" : {
         "module" : "General Series",
         "name" : "Floating Point Value",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "entity" : "Series"
      },
      "(0074,1401)[<0>](0074,1405)" : {
         "desc" : [
            "The order in which the channels are to be delivered.",
            "One or more Items are permitted in this sequence."
         ],
         "entity" : "Plan",
         "module" : "RT Brachy Application Setup Delivery Instruction",
         "name" : "Channel Delivery Order Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.8.30-1"
         ],
         "req" : "3"
      },
      "(fffa,fffa)[<0>](0400,0115)" : {
         "entity" : "Plan",
         "desc" : [
            [
               "A certificate that holds the identity of the entity producing this Digital Signature, that entity's public key or key identifier, and the algorithm and associated parameters with which that public key is to be used. Algorithms allowed are specified in Digital Signature Security Profiles (see ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: labelnumber",
                     "targetdoc" : "PS3.15",
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
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Certificate of Signer",
         "module" : "SOP Common"
      },
      "(0010,0024)[<0>](0040,0039)" : {
         "name" : "Assigning Jurisdiction Code Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "req" : "3",
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
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
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1155)" : {
         "entity" : "Plan",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ],
         "req" : "1",
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "module" : "Common Instance Reference Module"
      },
      "(0040,0253)" : {
         "name" : "Performed Procedure Step ID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "usage" : "M",
         "req" : "3",
         "module" : "General Series",
         "entity" : "Series",
         "desc" : "User or equipment generated identifier of that part of a Procedure that has been carried out within this step."
      },
      "(0010,1100)[<0>](0020,000d)" : {
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "Study Instance UID",
         "module" : "Patient",
         "entity" : "Patient",
         "desc" : [
            "Unique identifier for the Study.",
            "Required if Type of Instances (0040,E020) is DICOM"
         ]
      },
      "(0018,a001)" : {
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
         "entity" : "Plan",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Contributing Equipment Sequence"
      },
      "(0008,0110)[<0>](0008,0102)" : {
         "desc" : "The value of a Coding Scheme Designator, used in this SOP Instance, which is being mapped.",
         "entity" : "Plan",
         "module" : "SOP Common",
         "name" : "Coding Scheme Designator",
         "req" : "1",
         "usage" : "M",
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
         "usage" : "M",
         "req" : "3",
         "name" : "Universal Entity ID",
         "module" : "Patient",
         "entity" : "Patient",
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
         ]
      },
      "(0038,0064)" : {
         "desc" : [
            "Identifier of the Assigning Authority that issued the Service Episode ID (0038,0060).",
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "Study",
         "module" : "Patient Study",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "name" : "Issuer of Service Episode ID Sequence"
      },
      "(0008,0118)" : {
         "module" : "SOP Common",
         "name" : "Mapping Resource UID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "3",
         "desc" : "The unique identifier of the Mapping Resource",
         "entity" : "Plan"
      },
      "(0008,009d)[<0>](0040,1104)" : {
         "module" : "General Study",
         "name" : "Person's Telecom Information",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
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
               ]
            }
         ],
         "entity" : "Study"
      },
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1150)" : {
         "entity" : "Plan",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "module" : "Common Instance Reference Module"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0035)" : {
         "entity" : "Patient",
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
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "name" : "Identifier Type Code",
         "module" : "Patient"
      },
      "(0012,0081)" : {
         "entity" : "Patient",
         "desc" : "Name of the Ethics Committee or Institutional Review Board (IRB) or Institutional Animal Care and Use Committees (IACUC) responsible for approval of the Clinical Trial or research. Required if Clinical Trial Protocol Ethics Committee Approval Number (0012,0082) is present.",
         "name" : "Clinical Trial Protocol Ethics Committee Name",
         "req" : "1C",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject"
      },
      "(0010,1002)" : {
         "entity" : "Patient",
         "desc" : [
            "A sequence of identification numbers or codes used to identify the patient, which may or may not be human readable, and may or may not have been obtained from an implanted or attached device such as an RFID or barcode.",
            "One or more Items are permitted in this Sequence."
         ],
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Other Patient IDs Sequence",
         "module" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "req" : "1",
         "module" : "General Series",
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a160)" : {
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "M",
         "name" : "Text Value"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a160)" : {
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "M",
         "name" : "Text Value"
      },
      "(0028,0109)" : {
         "desc" : "The maximum value of all images in this Series.",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "req" : "3",
         "name" : "Largest Pixel Value in Series"
      },
      "(0040,0275)[<0>](0008,1110)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Referenced Study Sequence",
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
         "entity" : "Series"
      },
      "(0008,1052)[<0>](0008,0082)" : {
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "req" : "1C",
         "name" : "Institution Code Sequence"
      },
      "(0008,0060)" : {
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Modality",
         "module" : "General Series",
         "entity" : "Series",
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
         ]
      },
      "(0008,1072)" : {
         "desc" : [
            "Identification of the operator(s) supporting the Series.",
            "One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Operators' Name (0008,1070), if present."
         ],
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Operator Identification Sequence"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1104)" : {
         "entity" : "Plan",
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
               ]
            }
         ],
         "name" : "Person's Telecom Information",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common"
      },
      "(0008,0201)" : {
         "entity" : "Plan",
         "desc" : [
            "Contains the offset from UTC to the timezone for all DA and TM Attributes present in this SOP Instance, and for all DT Attributes present in this SOP Instance that do not contain an explicitly encoded timezone offset.",
            "Encoded as an ASCII string in the format \"&ZZXX\". The components of this string, from left to right, are & = \"+\" or \"-\", and ZZ = Hours and XX = Minutes of offset. Leading space characters shall not be present.",
            "The offset for UTC shall be +0000; -0000 shall not be used.",
            {
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
                                 "attrs" : {
                                    "xml:id" : "para_526f07aa-0b79-4c2d-8362-049aceaf5696"
                                 },
                                 "el" : "para",
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
                                 "attrs" : {
                                    "xml:id" : "para_155b097e-395f-4748-981c-0255b00fe9a8"
                                 },
                                 "el" : "para",
                                 "content" : [
                                    "This Attribute does not apply to values with a DT Value Representation, that contains an explicitly encoded timezone offset."
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
                                 "attrs" : {
                                    "xml:id" : "para_1ab95f54-00ed-4128-a3f9-96f3f05669d0"
                                 },
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
               "content" : [
                  "\n                  ",
                  {
                     "attrs" : {
                        "xml:id" : "para_5346ad4e-84cd-47ed-bc69-c2b41005345d"
                     },
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
                     "attrs" : {
                        "xml:id" : "para_a41cecaa-0d35-48a8-b71a-99ab42511778"
                     },
                     "el" : "para"
                  },
                  "\n                  ",
                  {
                     "content" : [
                        "Local Time = 3.00 a.m."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_50578448-3e31-49d4-87db-a9b392279794"
                     }
                  },
                  "\n                  ",
                  {
                     "content" : [
                        "Offset = -0200"
                     ],
                     "attrs" : {
                        "xml:id" : "para_16002fc2-2776-41b6-b49f-74eb5e06324a"
                     },
                     "el" : "para"
                  },
                  "\n                "
               ],
               "el" : "note"
            },
            "The local timezone offset is undefined if this Attribute is absent."
         ],
         "name" : "Timezone Offset From UTC",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(300c,0002)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0100)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.8.8.30-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M",
         "name" : "Digital Signature UID",
         "module" : "RT Brachy Application Setup Delivery Instruction",
         "entity" : "Plan",
         "desc" : "The Unique Identifier of a Digital Signature held in the referenced SOP Instance."
      },
      "(0018,1201)" : {
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "req" : "3",
         "usage" : "M",
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
         "entity" : "Equipment"
      },
      " (0010,0027) [<0>](0010,0024)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "Patient"
      },
      "(0008,1052)[<0>](0008,0081)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Institution Address",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "entity" : "Series"
      },
      "(0010,1100)[<0>](0020,000e)" : {
         "name" : "Series Instance UID",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
         "desc" : [
            "Unique identifier for the Series that is part of the Study identified in Study Instance UID (0020,000D), if present, and contains the referenced object instance(s).",
            "Required if Type of Instances (0040,E020) is DICOM"
         ]
      },
      "(0020,000e)" : {
         "desc" : "Unique identifier of the Series.",
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "req" : "1",
         "name" : "Series Instance UID"
      },
      "(0008,0014)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Instance Creator UID",
         "module" : "SOP Common",
         "entity" : "Plan",
         "desc" : "Uniquely identifies device that created the SOP Instance."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a121)" : {
         "name" : "Date",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ]
      },
      "(300c,0002)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0404)" : {
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
         "entity" : "Plan",
         "module" : "RT Brachy Application Setup Delivery Instruction",
         "name" : "MAC",
         "mod_tables" : [
            "table_C.8.8.30-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "1",
         "usage" : "M"
      },
      "(0010,1000)" : {
         "desc" : "Other identification numbers or codes used to identify the patient.",
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Other Patient IDs",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3"
      },
      "(0008,1049)[<0>](0040,1102)" : {
         "desc" : "Person's mailing address",
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Person's Address"
      },
      "(0074,140e)[<0>](0074,1409)[<1>](0074,140b)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.8.8.30-1"
         ],
         "usage" : "M",
         "name" : "Reason for Channel Omission Description",
         "module" : "RT Brachy Application Setup Delivery Instruction",
         "entity" : "Plan",
         "desc" : "Description of reason for omission."
      },
      "(0008,1200)" : {
         "entity" : "Plan",
         "desc" : [
            "Sequence of items each identifying a Study other than the Study of which this Instance is a part, which Studies contain Instances that are referenced elsewhere in this Instance.",
            "One or more Items shall be included in this Sequence.",
            "Required if this Instance references Instances in other Studies."
         ],
         "name" : "Studies Containing Other Referenced Instances Sequence",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "usage" : "M",
         "req" : "1C",
         "module" : "Common Instance Reference Module"
      },
      "(0008,0110)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "name" : "Coding Scheme Identification Sequence",
         "desc" : [
            "Sequence of items that map values of Coding Scheme Designator (0008,0102) to an external coding system registration, or to a private or local coding scheme.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Plan"
      },
      "(fffa,fffa)[<0>](0400,0401)" : {
         "name" : "Digital Signature Purpose Code Sequence",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Plan",
         "desc" : [
            "The purpose of this Digital Signature.",
            "Only a single Item is permitted in this Sequence."
         ]
      },
      "(0010,0026)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Source Patient Group Identification Sequence",
         "module" : "Patient",
         "entity" : "Patient",
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
         ]
      },
      "(0008,0300)[<0>](0008,0303)" : {
         "entity" : "Plan",
         "desc" : [
            [
               "Specifies whether some or all of the Private Data Elements in the block are safe from identity leakage as defined by ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "targetdoc" : "PS3.15",
                     "targetptr" : "sect_E.3.10",
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "name" : "Block Identifying Information Status",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0040,0275)[<0>](0032,1060)" : {
         "desc" : "Institution-generated administrative description or classification of Requested Procedure.",
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Requested Procedure Description",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a123)" : {
         "module" : "General Series",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Person Name",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "entity" : "Series"
      },
      "(0010,1100)[<0>](0040,e025)[<1>](0008,1190)" : {
         "module" : "Patient",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "Retrieve URL",
         "desc" : "URL specifying the location of the referenced instance(s).",
         "entity" : "Patient"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0081)" : {
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "entity" : "Plan",
         "module" : "SOP Common",
         "name" : "Institution Address",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,08ea)" : {
         "entity" : "Series",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Measurement Units Code Sequence",
         "module" : "General Series"
      },
      "(0038,0014)" : {
         "desc" : [
            "Identifier of the Assigning Authority that issued Admission ID (0038,0010).",
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "Study",
         "module" : "Patient Study",
         "name" : "Issuer of Admission ID Sequence",
         "req" : "3",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
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
      "Can't handle table_8.8-1 (in table_C.8.8.30-1:table_C.17-3:table_C.17-3a after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.12-1 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_C.12-6 after (0400,0401))"
   ]
}
