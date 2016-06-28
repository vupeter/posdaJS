var data = {
   "tags" : {
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1150)" : {
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "General Series",
         "req" : "1",
         "entity" : "Series",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(0008,0110)[<0>](0008,0103)" : {
         "req" : "3",
         "desc" : "The coding scheme version associated with the Coding Scheme Designator (0008,0102).",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme Version",
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a30a)" : {
         "entity" : "Image",
         "name" : "Numeric Value",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "usage" : "M",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "req" : "1C"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a122)" : {
         "req" : "1C",
         "module" : "Specimen",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Time",
         "entity" : "Image"
      },
      "(0008,2112)[<0>](0008,1155)" : {
         "module" : "General Image",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "M",
         "req" : "1",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID"
      },
      "(0008,1052)" : {
         "req" : "3",
         "desc" : [
            "Identification of the physician(s) administering the Series.",
            "One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Performing Physician's Name (0008,1050), if present."
         ],
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Performing Physician Identification Sequence",
         "entity" : "Series"
      },
      "(0088,0200)[<0>](7fe0,0010)" : {
         "name" : "Pixel Data",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "entity" : "Image",
         "req" : "1C",
         "module" : "General Image",
         "usage" : "M",
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
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0008,1150)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "entity" : "Image",
         "req" : "1",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "Specimen"
      },
      "(0018,0015)" : {
         "module" : "General Series",
         "desc" : [
            [
               "Text description of the part of the body examined. See ",
               {
                  "attrs" : {
                     "targetdoc" : "PS3.16",
                     "targetptr" : "chapter_L",
                     "xrefstyle" : "template: Annex %n \u201c%t\u201d in PS3.16"
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
                     "el" : "para",
                     "content" : [
                        "Some IODs support the Anatomic Region Sequence (0008,2218), which can provide a more comprehensive mechanism for specifying the body part being examined."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "usage" : "M",
         "req" : "3",
         "entity" : "Series",
         "name" : "Body Part Examined",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0048,0013)" : {
         "module" : "Whole Slide Microscopy Image",
         "desc" : [
            "Number acquisition focal planes used for extended depth of field.",
            "Required if Extended Depth of Field (0048,0012) value is YES"
         ],
         "usage" : "M",
         "req" : "1C",
         "entity" : "Image",
         "name" : "Number of Focal Planes",
         "mod_tables" : [
            "table_C.8.12.4-1"
         ]
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0031)" : {
         "module" : "Patient",
         "usage" : "M",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "name" : "Local Namespace Entity ID"
      },
      "(0010,0024)[<0>](0040,0033)" : {
         "entity" : "Patient",
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
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
         "usage" : "M",
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a168)" : {
         "req" : "1C",
         "module" : "General Series",
         "usage" : "M",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "name" : "Concept Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series"
      },
      "(0008,0090)" : {
         "name" : "Referring Physician's Name",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "req" : "2",
         "module" : "General Study",
         "desc" : "Name of the patient's referring physician",
         "usage" : "M"
      },
      "(0008,0096)[<0>](0040,1103)" : {
         "module" : "General Study",
         "desc" : "Person's telephone number(s)",
         "usage" : "M",
         "req" : "3",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person's Telephone Numbers"
      },
      "(0040,0555)[<0>](0040,a168)" : {
         "name" : "Concept Code Sequence",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "entity" : "Image",
         "req" : "1C",
         "module" : "Acquisition Context",
         "usage" : "M",
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a Coded Value.",
            "Only a single Item shall be included in this sequence.",
            "Required if Date (0040,A121), Time (0040,A122), Person Name (0040,A123), Text Value (0040,A160), and the pair of Numeric Value (0040,A30A) and Measurement Units Code Sequence (0040,08EA) are not present."
         ]
      },
      "(0038,0064)[<0>](0040,0033)" : {
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "name" : "Universal Entity ID Type",
         "entity" : "Study",
         "req" : "1C",
         "module" : "Patient Study",
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
         ]
      },
      "(0010,2299)" : {
         "req" : "2C",
         "module" : "Patient",
         "desc" : [
            "Name of organization with medical decision making authority for the patient.",
            "Required if patient is an animal. May be present otherwise."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Responsible Organization",
         "entity" : "Patient"
      },
      "(0020,000d)" : {
         "name" : "Study Instance UID",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "req" : "1",
         "module" : "General Study",
         "desc" : "Unique identifier for the Study.",
         "usage" : "M"
      },
      "(0400,0561)[<0>](0400,0550)[0](gggg,eeee)" : {
         "usage" : "M",
         "desc" : "May include Sequence Attributes and their Items.",
         "module" : "SOP Common",
         "req" : "1",
         "entity" : "Image",
         "name" : "Any Attribute from the main data set that was modified or removed.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0048,0105)[<0>](0022,0055)" : {
         "mod_tables" : [
            "table_C.8.12.5-1"
         ],
         "name" : "Illumination Wave Length",
         "entity" : "Image",
         "req" : "1C",
         "desc" : "Nominal wavelength of the illuminator in nm. Required if Illumination Color Code Sequence (0048,ee08) is not present. May be present otherwise.",
         "usage" : "M",
         "module" : "Optical Path"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1102)" : {
         "req" : "3",
         "desc" : "Person's mailing address",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "name" : "Person's Address",
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a162)" : {
         "entity" : "Image",
         "name" : "Rational Numerator Value",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "usage" : "M",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "req" : "1C"
      },
      "(0088,0200)[<0>](0028,0004)" : {
         "req" : "1",
         "module" : "General Image",
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
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "entity" : "Image"
      },
      "(0028,1102)" : {
         "entity" : "Image",
         "name" : "Green Palette Color Lookup Table Descriptor",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "usage" : "M",
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
         "module" : "Image Pixel",
         "req" : "1C"
      },
      "(0008,0110)[<0>](0008,0102)" : {
         "name" : "Coding Scheme Designator",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "req" : "1",
         "desc" : "The value of a Coding Scheme Designator, used in this SOP Instance, which is being mapped.",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0040,0275)[<0>](0040,1001)" : {
         "name" : "Requested Procedure ID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "entity" : "Series",
         "req" : "1C",
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
         "usage" : "M",
         "module" : "General Series"
      },
      "(0008,2111)" : {
         "name" : "Derivation Description",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "entity" : "Image",
         "req" : "3",
         "usage" : "M",
         "desc" : [
            "A text description of how this image was derived. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.6.1.1.3",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "module" : "General Image"
      },
      "(0008,0110)[<0>](0008,0116)" : {
         "req" : "3",
         "usage" : "M",
         "desc" : "Name of the organization responsible for the Coding Scheme. May include organizational contact information.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme Responsible Organization",
         "entity" : "Image"
      },
      "(0018,a001)[<0>](0018,a002)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Contribution DateTime",
         "desc" : "The Date & Time when the equipment contributed to the composite instance.",
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "3"
      },
      "(0008,1049)" : {
         "entity" : "Study",
         "name" : "Physician(s) of Record Identification Sequence",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "usage" : "M",
         "desc" : [
            "Identification of the physician(s) who are responsible for overall patient care at time of Study.",
            "One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Physician(s) of Record (0008,1048), if present."
         ],
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a040)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
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
         ],
         "usage" : "M",
         "module" : "General Series",
         "req" : "1"
      },
      "(0010,0024)[<0>](0040,0035)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Identifier Type Code",
         "entity" : "Patient",
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
                     "el" : "para"
                  },
                  "\n              "
               ]
            }
         ],
         "module" : "Patient"
      },
      "(0040,9096)" : {
         "req" : "3",
         "desc" : [
            "The mapping of stored values to associated Real World values.",
            "One or more Items are permitted in this sequence."
         ],
         "usage" : "M",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "name" : "Real World Value Mapping Sequence",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0008,0051)" : {
         "usage" : "M",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this sequence."
         ],
         "module" : "General Series",
         "req" : "3",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "name" : "Issuer of Accession Number Sequence"
      },
      "(0008,1072)[<0>](0040,1103)" : {
         "desc" : "Person's telephone number(s)",
         "usage" : "M",
         "module" : "General Series",
         "req" : "3",
         "entity" : "Series",
         "name" : "Person's Telephone Numbers",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a168)" : {
         "req" : "1C",
         "module" : "General Series",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "usage" : "M",
         "name" : "Concept Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series"
      },
      "(0008,0033)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "name" : "Content Time",
         "desc" : [
            "The time the image pixel data creation started.",
            "Required if image is part of a series in which the images are temporally related. May be present otherwise."
         ],
         "usage" : "M",
         "module" : "General Image",
         "req" : "2C"
      },
      "(0088,0200)[<0>](0028,0103)" : {
         "entity" : "Image",
         "name" : "Pixel Representation",
         "mod_tables" : [
            "table_C.7-9",
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
         ],
         "usage" : "M",
         "module" : "General Image",
         "req" : "1"
      },
      "(0018,1000)" : [
         {
            "req" : "3",
            "module" : "General Equipment",
            "usage" : "M",
            "desc" : [
               "Manufacturer's serial number of the equipment that produced the composite instances.",
               {
                  "content" : [
                     "\n                    ",
                     {
                        "el" : "para",
                        "content" : [
                           "This identifier corresponds to the device that actually created the images, such as a CR plate reader or a CT console, and may not be sufficient to identify all of the equipment in the imaging chain, such as the generator or gantry or plate."
                        ]
                     },
                     "\n                  "
                  ],
                  "el" : "note"
               }
            ],
            "name" : "Device Serial Number",
            "mod_tables" : [
               "table_C.7-8"
            ],
            "entity" : "Equipment"
         },
         {
            "module" : "Enhanced General Equipment",
            "usage" : "M",
            "desc" : "Manufacturer's serial number of the equipment that produced the composite instances.",
            "req" : "1",
            "entity" : "Equipment",
            "name" : "Device Serial Number",
            "mod_tables" : [
               "table_C.7-8b"
            ]
         }
      ],
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a30a)" : {
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "usage" : "M",
         "module" : "General Series",
         "req" : "1C",
         "entity" : "Series",
         "name" : "Numeric Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0008,1200)[<0>](0020,000d)" : {
         "req" : "1",
         "module" : "Common Instance Reference",
         "desc" : "Unique identifier of the Study containing the referenced Instances.",
         "usage" : "M",
         "name" : "Study Instance UID",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a168)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Concept Code Sequence",
         "usage" : "M",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "module" : "Specimen",
         "req" : "1C"
      },
      "(0088,0200)[<0>](0028,0011)" : {
         "req" : "1",
         "desc" : "Number of columns in the image",
         "usage" : "M",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "name" : "Columns",
         "entity" : "Image"
      },
      "(0028,0006)" : [
         {
            "req" : "1C",
            "module" : "Image Pixel",
            "usage" : "M",
            "desc" : [
               "Indicates whether the pixel data are sent color-by-plane or color-by-pixel. Required if Samples per Pixel (0028,0002) has a value greater than 1. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.6.3.1.3",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            "name" : "Planar Configuration",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "entity" : "Image"
         },
         {
            "req" : "1C",
            "desc" : [
               "Indicates whether the pixel data are sent color-by-plane or color-by-pixel. Required if Samples per Pixel (0028,0002) has a value greater than 1.",
               {
                  "title" : "Enumerated Values:",
                  "list" : [
                     [
                        "0",
                        "color-by-pixel"
                     ]
                  ],
                  "type" : "variablelist"
               }
            ],
            "usage" : "M",
            "module" : "Whole Slide Microscopy Image",
            "name" : "Planar Configuration",
            "mod_tables" : [
               "table_C.8.12.4-1"
            ],
            "entity" : "Image"
         }
      ],
      "(0048,0105)[<0>](0048,0120)[<1>](0028,1199)" : {
         "mod_tables" : [
            "table_C.8.12.5-1",
            "table_C.7-22a"
         ],
         "name" : "Palette Color Lookup Table UID",
         "entity" : "Image",
         "req" : "3",
         "desc" : [
            "Palette Color Lookup Table UID. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.9.1"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "usage" : "M",
         "module" : "Optical Path"
      },
      "(0018,1200)" : {
         "req" : "3",
         "module" : "General Equipment",
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
         "usage" : "M",
         "name" : "Date of Last Calibration",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "entity" : "Equipment"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a161)" : {
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Floating Point Value",
         "entity" : "Series"
      },
      "(0048,0011)" : {
         "req" : "1",
         "module" : "Whole Slide Microscopy Image",
         "usage" : "M",
         "desc" : [
            "Method of focusing image",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "AUTO",
                     "autofocus"
                  ],
                  [
                     "MANUAL",
                     "includes any human adjustment or verification of autofocus"
                  ]
               ],
               "title" : "Enumerated Values:"
            }
         ],
         "name" : "Focus Method",
         "mod_tables" : [
            "table_C.8.12.4-1"
         ],
         "entity" : "Image"
      },
      "(0040,9096)[<0>](0040,9224)" : {
         "name" : "Real World Value Intercept",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "entity" : "Image",
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "The Intercept value in relationship between stored values (SV) and the Real World values.",
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
            "Required if Real World Value LUT Data (0040,9212) is not present."
         ],
         "module" : "General Image"
      },
      "(0048,0105)[<0>](0028,2000)" : {
         "req" : "1C",
         "desc" : [
            [
               "An ICC Profile encoding the transformation of device-dependent stored pixel values into PCS-Values. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.12.5.1.4"
                  },
                  "el" : "xref"
               }
            ],
            "Required if Photometric Interpretation (0028,0004) is not MONOCHROME2, or if Palette Color Lookup Table Sequence (0048,0120) is present."
         ],
         "usage" : "M",
         "module" : "Optical Path",
         "name" : "ICC Profile",
         "mod_tables" : [
            "table_C.8.12.5-1"
         ],
         "entity" : "Image"
      },
      "(0008,0018)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "SOP Instance UID",
         "module" : "SOP Common",
         "usage" : "M",
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
                  "targetptr" : "PS3.4",
                  "xrefstyle" : "select: labelnumber"
               },
               "el" : "olink"
            },
            "."
         ],
         "req" : "1"
      },
      "(0100,0426)" : {
         "req" : "3",
         "module" : "SOP Common",
         "usage" : "M",
         "desc" : "The certification number issued to the Application Entity that set the SOP Instance Status (0100,0410) to AO.",
         "name" : "Authorization Equipment Certification Number",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image"
      },
      "(0010,2202)" : {
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient Species Code Sequence",
         "module" : "Patient",
         "desc" : [
            "The species of the patient.",
            "Only a single Item shall be included in this sequence.",
            "Required if the patient is an animal and if Patient Species Description (0010,2201) is not present. May be present otherwise."
         ],
         "usage" : "M",
         "req" : "1C"
      },
      "(0040,0560)[<0>](0040,0600)" : {
         "entity" : "Image",
         "name" : "Specimen Short Description",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "M",
         "desc" : "Short textual specimen description (may include ancestor specimen descriptions).",
         "module" : "Specimen",
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a168)" : {
         "module" : "General Series",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "name" : "Concept Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0040,0560)[<0>](0040,0554)" : {
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Specimen UID",
         "entity" : "Image",
         "req" : "1",
         "usage" : "M",
         "desc" : [
            "Unique Identifier for Specimen. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.6.22.1.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "module" : "Specimen"
      },
      "(0040,9096)[<0>](0040,9216)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "name" : "Real World Value First Value Mapped",
         "usage" : "M",
         "desc" : [
            "Specifies the first stored value mapped for the Real Word Value Intercept (0040,9224) and Real World Value Slope (0040,9225) or Real World Value LUT (0040,9212) of this Item.",
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
         "module" : "General Image",
         "req" : "1"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,08ea)" : {
         "name" : "Measurement Units Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "req" : "1C",
         "module" : "General Series",
         "usage" : "M",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ]
      },
      "(0010,1002)[<0>](0010,0022)" : {
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
         "usage" : "M",
         "module" : "Patient",
         "req" : "1",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Type of Patient ID"
      },
      "(0048,0200)[<0>](0028,0002)" : {
         "name" : "Samples per Pixel",
         "mod_tables" : [
            "table_C.8.12.7-1"
         ],
         "entity" : "Image",
         "req" : "1",
         "module" : "Multi-Resolution Navigation",
         "desc" : "The number of samples (color planes) containing information in the referenced image.",
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is LOCALIZER"
      },
      "(0012,0042)" : {
         "req" : "1C",
         "usage" : "U",
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
         "module" : "Clinical Trial Subject",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "name" : "Clinical Trial Subject Reading ID",
         "entity" : "Patient"
      },
      "(0028,0107)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "name" : "Largest Image Pixel Value",
         "module" : "Image Pixel",
         "usage" : "M",
         "desc" : "The maximum actual pixel value encountered in this image.",
         "req" : "3"
      },
      "(0038,0010)" : {
         "module" : "Patient Study",
         "usage" : "U",
         "desc" : "Identifier of the visit as assigned by the healthcare provider",
         "req" : "3",
         "entity" : "Study",
         "name" : "Admission ID",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0010,2201)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient Species Description",
         "entity" : "Patient",
         "req" : "1C",
         "module" : "Patient",
         "usage" : "M",
         "desc" : [
            "The species of the patient.",
            "Required if the patient is an animal and if Patient Species Code Sequence (0010,2202) is not present. May be present otherwise."
         ]
      },
      "(0040,0520)[<0>](0050,0015)" : {
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Container Component Width",
         "entity" : "Image",
         "req" : "3",
         "desc" : "Width in mm of container component.",
         "usage" : "M",
         "module" : "Specimen"
      },
      "(0008,0053)" : {
         "entity" : "Image",
         "name" : "Query/Retrieve View",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         ],
         "usage" : "M",
         "req" : "1C"
      },
      "(0040,0555)[<0>](0040,a30a)" : {
         "name" : "Numeric Value",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "entity" : "Image",
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a set of one or more numeric values.",
            "Required if the value that Concept Name Code Sequence (0040,A043) requires (implies) is a set of one or more integers or real numbers. Shall not be present otherwise."
         ],
         "module" : "Acquisition Context"
      },
      "(0048,0200)[<0>](0008,1160)" : {
         "desc" : "Referenced Frame Number within Referenced Image. Only a single value shall be present.",
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is LOCALIZER",
         "module" : "Multi-Resolution Navigation",
         "req" : "1",
         "entity" : "Image",
         "name" : "Referenced Frame Number",
         "mod_tables" : [
            "table_C.8.12.7-1"
         ]
      },
      "(0040,0275)[<0>](0008,0050)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "name" : "Accession Number",
         "module" : "General Series",
         "usage" : "M",
         "desc" : "An identifier of the Imaging Service Request for this Requested Procedure.",
         "req" : "3"
      },
      "(0008,1052)[<0>](0040,1102)" : {
         "entity" : "Series",
         "name" : "Person's Address",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "desc" : "Person's mailing address",
         "usage" : "M",
         "module" : "General Series",
         "req" : "3"
      },
      "(0048,0105)[<0>](0022,0002)" : {
         "name" : "Light Path Filter Pass Band",
         "mod_tables" : [
            "table_C.8.12.5-1"
         ],
         "entity" : "Image",
         "req" : "3",
         "desc" : [
            "Pass band of light path filter(s) in nm. This Attribute has two Values. The first is the shorter and the second the longer wavelength relative to the peak. The values are for the - 3dB nominal (1/2 of peak) pass through intensity.",
            "One of the two Values may be zero length, in which case it is a cutoff filter."
         ],
         "usage" : "M",
         "module" : "Optical Path"
      },
      "(0008,1072)[<0>](0008,0082)" : {
         "module" : "General Series",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "name" : "Institution Code Sequence"
      },
      "(0048,0105)[<0>](0022,0019)" : {
         "name" : "Lenses Code Sequence",
         "mod_tables" : [
            "table_C.8.12.5-1"
         ],
         "entity" : "Image",
         "req" : "3",
         "usage" : "M",
         "desc" : [
            "Lenses that were used in this optical path.",
            "One or more items are permitted in this sequence."
         ],
         "module" : "Optical Path"
      },
      "(0048,0105)[<0>](0048,0100)" : {
         "name" : "Illuminator Type Code Sequence",
         "mod_tables" : [
            "table_C.8.12.5-1"
         ],
         "entity" : "Image",
         "req" : "3",
         "desc" : [
            "Type of illuminator.",
            "Only a single Item is permitted in this sequence."
         ],
         "usage" : "M",
         "module" : "Optical Path"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a162)" : {
         "module" : "General Series",
         "usage" : "M",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "entity" : "Series",
         "name" : "Rational Numerator Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0040,0555)[<0>](0040,a162)" : {
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "usage" : "M",
         "module" : "Acquisition Context",
         "req" : "1C",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "name" : "Rational Numerator Value"
      },
      "(0038,0060)" : {
         "name" : "Service Episode ID",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "entity" : "Study",
         "req" : "3",
         "module" : "Patient Study",
         "desc" : "Identifier of the Service Episode as assigned by the healthcare provider",
         "usage" : "U"
      },
      "(0040,0555)[<0>](0040,a121)" : {
         "name" : "Date",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "entity" : "Image",
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a date.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "The purpose or role of the date value could be specified in Concept Name Code Sequence (0040,A043)."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            },
            "Required if the value that Concept Name Code Sequence (0040,A043) requires (implies) is a date. Shall not be present otherwise."
         ],
         "module" : "Acquisition Context"
      },
      "(0008,0023)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "name" : "Content Date",
         "module" : "General Image",
         "usage" : "M",
         "desc" : [
            "The date the image pixel data creation started.",
            "Required if image is part of a series in which the images are temporally related. May be present otherwise.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "This Attribute was formerly known as Image Date."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "req" : "2C"
      },
      "(fffa,fffa)" : {
         "entity" : "Image",
         "name" : "Digital Signatures Sequence",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "desc" : [
            "Sequence holding Digital Signatures.",
            "One or more items are permitted in this sequence."
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0012,0064)" : {
         "entity" : "Patient",
         "name" : "De-identification Method Code Sequence",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "desc" : [
            "A code describing the mechanism or method use to remove the patient's identity.",
            "One or more Items shall be included in this sequence. Multiple items are used if successive de-identification steps have been performed or to describe options of a defined profile.",
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method (0012,0063) is not present. May be present otherwise."
         ],
         "usage" : "M",
         "req" : "1C"
      },
      "(0010,1002)[<0>](0010,0020)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient ID",
         "entity" : "Patient",
         "req" : "1",
         "desc" : "An identification number or code used to identify the patient.",
         "usage" : "M",
         "module" : "Patient"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "entity" : "Patient",
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
                     "el" : "para"
                  },
                  "\n              "
               ]
            }
         ],
         "usage" : "M",
         "module" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)" : {
         "req" : "3",
         "usage" : "M",
         "desc" : "Sequence that specifies the context for the Performed Protocol Code Sequence Item. One or more Items are permitted in this sequence.",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "name" : "Protocol Context Sequence",
         "entity" : "Series"
      },
      "(0008,1062)[<0>](0008,0082)" : {
         "module" : "General Study",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "M",
         "req" : "1C",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Code Sequence"
      },
      "(0048,0200)[<0>](0048,0202)" : {
         "mod_tables" : [
            "table_C.8.12.7-1"
         ],
         "name" : "Bottom Right Hand Corner of Localizer Area",
         "entity" : "Image",
         "req" : "1",
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is LOCALIZER",
         "desc" : "Bottom Right Hand Corner of Localizer image pixel area corresponding to referenced frame,specified as column\\row. Column is the horizontal offset and row is the vertical offset.",
         "module" : "Multi-Resolution Navigation"
      },
      "(0018,a001)[<0>](0018,1050)" : {
         "module" : "SOP Common",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "usage" : "M",
         "req" : "3",
         "entity" : "Image",
         "name" : "Spatial Resolution",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,1049)[<0>](0040,1103)" : {
         "desc" : "Person's telephone number(s)",
         "usage" : "M",
         "module" : "General Study",
         "req" : "3",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person's Telephone Numbers"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a160)" : {
         "module" : "Specimen",
         "usage" : "M",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "req" : "1C",
         "entity" : "Image",
         "name" : "Text Value",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0040,0520)[<0>](0050,001b)" : {
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Container Component ID",
         "entity" : "Image",
         "req" : "3",
         "desc" : "Manufacturer's identifier of the container component, e.g., Lot Number and/or Version.",
         "usage" : "M",
         "module" : "Specimen"
      },
      "(0040,a390)[<0>](0040,e001)" : {
         "req" : "1",
         "desc" : "Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "HL7 Instance Identifier",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image"
      },
      "(0012,0031)" : {
         "entity" : "Patient",
         "name" : "Clinical Trial Site Name",
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
         ],
         "usage" : "U",
         "module" : "Clinical Trial Subject",
         "req" : "2"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a122)" : {
         "entity" : "Series",
         "name" : "Time",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "usage" : "M",
         "module" : "General Series",
         "req" : "1C"
      },
      "(0048,0105)" : {
         "module" : "Optical Path",
         "desc" : [
            "Describes the optical paths used during the acquisition of this image.",
            "One or more Items shall be included in this sequence.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.12.5.1.1"
                  },
                  "el" : "xref"
               }
            ]
         ],
         "usage" : "M",
         "req" : "1",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8.12.5-1"
         ],
         "name" : "Optical Path Sequence"
      },
      "(0040,0560)[<0>](0040,0551)" : {
         "usage" : "M",
         "desc" : [
            [
               "A departmental information system identifier for the Specimen. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.22.1.1"
                  },
                  "el" : "xref"
               },
               " and ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.22.1.2",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ],
            "If a single specimen is present in a container, the value of the Specimen Identifier and the value of the Container Identifier are typically the same."
         ],
         "module" : "Specimen",
         "req" : "1",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Specimen Identifier"
      },
      "(0008,1140)[<0>](0008,1160)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3"
         ],
         "name" : "Referenced Frame Number",
         "usage" : "M",
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
         "module" : "General Image",
         "req" : "1C"
      },
      "(0020,9222)[<0>](0020,9238)" : {
         "module" : "Multi-frame Dimension",
         "usage" : "M",
         "desc" : [
            "Identification of the creator of a group of private data elements.",
            "Required if the Functional Group Pointer 0020,9167) value is the Data Element Tag of a Private Attribute."
         ],
         "req" : "1C",
         "entity" : "Image",
         "name" : "Functional Group Private Creator",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ]
      },
      "(0018,1400)" : {
         "entity" : "Image",
         "name" : "Acquisition Device Processing Description",
         "mod_tables" : [
            "table_C.8.12.4-1"
         ],
         "module" : "Whole Slide Microscopy Image",
         "desc" : "Description of visual processing performed on the image prior to exchange. Examples of this processing are: edge enhanced, gamma corrected, convolved (spatially filtered)",
         "usage" : "M",
         "req" : "3"
      },
      "(0008,3010)" : {
         "usage" : "M",
         "desc" : [
            "Unique identification of the irradiation event(s) associated with the acquisition of this image. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.6.1.1.7",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "module" : "General Image",
         "req" : "3",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "name" : "Irradiation Event UID"
      },
      "(0008,0110)[<0>](0008,010c)" : {
         "req" : "1C",
         "usage" : "M",
         "desc" : "The coding scheme UID identifier. Required if coding scheme is identified by an ISO 8824 object identifier compatible with the UI VR.",
         "module" : "SOP Common",
         "name" : "Coding Scheme UID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a043)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Concept Name Code Sequence",
         "module" : "Specimen",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "M",
         "req" : "1"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a161)" : {
         "name" : "Floating Point Value",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "entity" : "Image",
         "req" : "1C",
         "module" : "Specimen",
         "usage" : "M",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ]
      },
      "(0040,0560)[<0>](0040,059a)" : {
         "usage" : "M",
         "desc" : [
            "Specimen Type.",
            "Only a single Item is permitted in this sequence."
         ],
         "module" : "Specimen",
         "req" : "3",
         "entity" : "Image",
         "name" : "Specimen Type Code Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      "(0008,0096)[<0>](0008,0080)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Name",
         "entity" : "Study",
         "req" : "1C",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "usage" : "M",
         "module" : "General Study"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a161)" : {
         "usage" : "M",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "module" : "General Series",
         "req" : "1C",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Floating Point Value"
      },
      "(0040,0513)" : {
         "entity" : "Image",
         "name" : "Issuer of the Container Identifier Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "desc" : [
            "Organization that assigned the Container Identifier.",
            "Zero or one Item shall be included in this sequence."
         ],
         "usage" : "M",
         "module" : "Specimen",
         "req" : "2"
      },
      "(0040,0275)[<0>](0020,000d)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "name" : "Study Instance UID",
         "entity" : "Series",
         "req" : "3",
         "desc" : "The unique identifier for the Study provided for this Requested Procedure.",
         "usage" : "M",
         "module" : "General Series"
      },
      "(0018,a001)[<0>](0018,1200)" : {
         "module" : "SOP Common",
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
         "req" : "3",
         "entity" : "Image",
         "name" : "Date of Last Calibration",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a30a)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Numeric Value",
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "module" : "General Series"
      },
      "(0100,0420)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "SOP Authorization DateTime",
         "module" : "SOP Common",
         "desc" : "The date and time when the SOP Instance Status (0100,0410) was set to AO.",
         "usage" : "M",
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a124)" : {
         "module" : "General Series",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "name" : "UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0008,0096)[<0>](0008,0081)" : {
         "req" : "3",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "usage" : "M",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Address",
         "entity" : "Study"
      },
      "(0048,0200)[<0>](0028,0030)" : {
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is LOCALIZER",
         "desc" : "Pixel Spacing in Referenced Image,specified as a numeric pair - adjacent row spacing \\ adjacent column spacing, in mm.",
         "module" : "Multi-Resolution Navigation",
         "req" : "1",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8.12.7-1"
         ],
         "name" : "Pixel Spacing"
      },
      "(0008,1111)[<0>](0008,1155)" : [
         {
            "usage" : "M",
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "module" : "General Series",
            "req" : "1",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-11"
            ],
            "name" : "Referenced SOP Instance UID"
         },
         {
            "name" : "Referenced SOP Instance UID",
            "mod_tables" : [
               "table_C.8.12.3-1",
               "table_10-11"
            ],
            "entity" : "Series",
            "req" : "1",
            "usage" : "M",
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "module" : "Whole Slide Microscopy Series"
         }
      ],
      "(0038,0064)[<0>](0040,0032)" : {
         "module" : "Patient Study",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "usage" : "U",
         "req" : "1C",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "name" : "Universal Entity ID"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a160)" : {
         "name" : "Text Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "req" : "1C",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "usage" : "M",
         "module" : "General Series"
      },
      "(0040,0515)[<0>](0040,0513)[<1>](0040,0033)" : {
         "module" : "Specimen",
         "usage" : "M",
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
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "name" : "Universal Entity ID Type"
      },
      "(0040,0515)[<0>](0040,0513)" : {
         "req" : "2",
         "module" : "Specimen",
         "desc" : [
            "Organization that assigned the Container Identifier.",
            "Zero or one Item shall be included in this sequence."
         ],
         "usage" : "M",
         "name" : "Issuer of the Container Identifier Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "entity" : "Image"
      },
      "(0088,0200)[<0>](0028,0101)" : {
         "desc" : [
            "Number of bits stored for each pixel sample. Each sample shall have the same number of bits stored. See ",
            {
               "attrs" : {
                  "targetdoc" : "PS3.5",
                  "targetptr" : "PS3.5",
                  "xrefstyle" : "select: labelnumber"
               },
               "el" : "olink"
            },
            " for further explanation."
         ],
         "usage" : "M",
         "module" : "General Image",
         "req" : "1",
         "entity" : "Image",
         "name" : "Bits Stored",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ]
      },
      "(2050,0020)" : [
         {
            "req" : "3",
            "usage" : "M",
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
            "module" : "General Image",
            "name" : "Presentation LUT Shape",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "entity" : "Image"
         },
         {
            "desc" : [
               "Specifies an identity transformation for the Presentation LUT, such that the output of all grayscale transformations defined in the IOD containing this Module are defined to be P-Values.",
               {
                  "type" : "variablelist",
                  "list" : [
                     [
                        "IDENTITY",
                        "output is in P-Values."
                     ]
                  ],
                  "title" : "Enumerated Values:"
               },
               "Required if Photometric Interpretation (0028,0004) is MONOCHROME2."
            ],
            "usage" : "M",
            "module" : "Whole Slide Microscopy Image",
            "req" : "1C",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.8.12.4-1"
            ],
            "name" : "Presentation LUT Shape"
         }
      ],
      "(0040,0513)[<0>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "entity" : "Image",
         "req" : "1C",
         "module" : "Specimen",
         "usage" : "M",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise."
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a163)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Rational Denominator Value",
         "entity" : "Image",
         "req" : "1C",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "usage" : "M",
         "module" : "Specimen"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a043)" : {
         "name" : "Concept Name Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "req" : "1",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "M",
         "module" : "General Series"
      },
      "(0010,2294)[<0>](0010,2296)" : {
         "module" : "Patient",
         "desc" : [
            "Identification of the organization with which an animal is registered.",
            "Only a single Item shall be included in this sequence."
         ],
         "usage" : "M",
         "req" : "1",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Breed Registry Code Sequence"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,08ea)" : {
         "entity" : "Series",
         "name" : "Measurement Units Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "usage" : "M",
         "req" : "1C"
      },
      "(0008,0022)" : {
         "req" : "3",
         "module" : "General Image",
         "desc" : "The date the acquisition of data that resulted in this image started",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "name" : "Acquisition Date",
         "entity" : "Image"
      },
      "(0400,0561)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Original Attributes Sequence",
         "module" : "SOP Common",
         "usage" : "M",
         "desc" : [
            "Sequence of Items containing all attributes that were removed or replaced by other values in the main data set.",
            "One or more Items are permitted in this sequence."
         ],
         "req" : "3"
      },
      "(0008,1070)" : {
         "req" : "3",
         "usage" : "M",
         "desc" : "Name(s) of the operator(s) supporting the Series.",
         "module" : "General Series",
         "name" : "Operators' Name",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a160)" : {
         "req" : "1C",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "usage" : "M",
         "module" : "General Series",
         "name" : "Text Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series"
      },
      "(0020,000e)" : {
         "req" : "1",
         "module" : "General Series",
         "desc" : "Unique identifier of the Series.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Series Instance UID",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1160)" : {
         "module" : "General Series",
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
         "req" : "1C",
         "entity" : "Series",
         "name" : "Referenced Frame Number",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0048,0012)" : {
         "mod_tables" : [
            "table_C.8.12.4-1"
         ],
         "name" : "Extended Depth of Field",
         "entity" : "Image",
         "req" : "1",
         "desc" : [
            "Image pixels were created through combining of image acquisition at multiple focal planes (focus stacking).",
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
         "usage" : "M",
         "module" : "Whole Slide Microscopy Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a122)" : {
         "usage" : "M",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "module" : "General Series",
         "req" : "1C",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Time"
      },
      "(0008,0020)" : {
         "req" : "2",
         "module" : "General Study",
         "desc" : "Date the Study started.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Study Date",
         "entity" : "Study"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0008,1150)" : {
         "entity" : "Image",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M",
         "module" : "Specimen",
         "req" : "1"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1155)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "module" : "General Series",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1101)" : {
         "entity" : "Image",
         "name" : "Person Identification Code Sequence",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "M",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "SOP Common",
         "req" : "1"
      },
      "(0048,0105)[<0>](0048,0120)[<1>](0028,1103)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8.12.5-1",
            "table_C.7-22a"
         ],
         "name" : "Blue Palette Color Lookup Table Descriptor",
         "usage" : "M",
         "desc" : [
            "Specifies the format of the Blue Palette Color Lookup table Data (0028,1203). See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.3.1.5"
               }
            },
            " for further explanation."
         ],
         "module" : "Optical Path",
         "req" : "1"
      },
      "(0008,0008)" : [
         {
            "desc" : [
               "Image identification characteristics. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.1.1.2",
                     "xrefstyle" : "select: label"
                  }
               },
               " for Defined Terms and further explanation."
            ],
            "usage" : "M",
            "module" : "General Image",
            "req" : "3",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "name" : "Image Type"
         },
         {
            "module" : "Whole Slide Microscopy Image",
            "desc" : [
               "Image identification characteristics.",
               [
                  "See ",
                  {
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.8.12.4.1.1"
                     },
                     "el" : "xref"
                  },
                  " for specialization."
               ]
            ],
            "usage" : "M",
            "req" : "1",
            "entity" : "Image",
            "name" : "Image Type",
            "mod_tables" : [
               "table_C.8.12.4-1"
            ]
         }
      ],
      "(0028,0002)" : [
         {
            "name" : "Samples per Pixel",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "entity" : "Image",
            "req" : "1",
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
            "usage" : "M",
            "module" : "Image Pixel"
         },
         {
            "entity" : "Image",
            "name" : "Samples Per Pixel",
            "mod_tables" : [
               "table_C.8.12.4-1"
            ],
            "module" : "Whole Slide Microscopy Image",
            "desc" : [
               "Number of samples (color planes) per frame in this image.",
               {
                  "title" : "Enumerated Values:",
                  "list" : [
                     [
                        "1",
                        null
                     ],
                     [
                        "3",
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
                        "linkend" : "sect_C.8.12.4.1.5",
                        "xrefstyle" : "select: label"
                     }
                  },
                  " for further explanation."
               ]
            ],
            "usage" : "M",
            "req" : "1"
         }
      ],
      "(0018,1210)" : {
         "name" : "Convolution Kernel",
         "mod_tables" : [
            "table_C.8.12.4-1"
         ],
         "entity" : "Image",
         "req" : "3",
         "usage" : "M",
         "desc" : "Label for convolution kernel used in acquisition device visual processing",
         "module" : "Whole Slide Microscopy Image"
      },
      "(0008,114a)[<0>](0040,a170)" : {
         "usage" : "M",
         "desc" : [
            "Code describing the purpose of the reference to the Instance(s).",
            "Only a single Item shall be included in this sequence."
         ],
         "module" : "General Image",
         "req" : "1",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "name" : "Purpose of Reference Code Sequence"
      },
      "(0008,114a)[<0>](0008,1155)" : {
         "mod_tables" : [
            "table_C.7-9",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "entity" : "Image",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "M",
         "module" : "General Image"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1155)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "module" : "Common Instance Reference",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "M",
         "req" : "1"
      },
      "(0048,0105)[<0>](0048,0113)" : {
         "entity" : "Image",
         "name" : "Objective Lens Numerical Aperture",
         "mod_tables" : [
            "table_C.8.12.5-1"
         ],
         "module" : "Optical Path",
         "usage" : "M",
         "desc" : "Nominal numerical aperture of the objective lens.",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a163)" : {
         "module" : "General Series",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Rational Denominator Value"
      },
      "(0008,0012)" : {
         "req" : "3",
         "module" : "SOP Common",
         "desc" : [
            "Date the SOP Instance was created.",
            "This is the date that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "usage" : "M",
         "name" : "Instance Creation Date",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image"
      },
      "(0048,0105)[<0>](0048,0120)" : {
         "name" : "Palette Color Lookup Table Sequence",
         "mod_tables" : [
            "table_C.8.12.5-1"
         ],
         "entity" : "Image",
         "req" : "3",
         "module" : "Optical Path",
         "desc" : [
            "For MONOCHROME2 images, provides a transform of the pixel values with this optical path into an RGB color representation. The LUT provides a mapping to an appropriate color or pseudo-color for display purposes.",
            "Only a single Item is permitted in this sequence."
         ],
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0081)" : {
         "req" : "3",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "name" : "Institution Address",
         "entity" : "Image"
      },
      "(0012,0083)[<0>](0012,0020)" : {
         "req" : "1C",
         "usage" : "U",
         "desc" : [
            "The identifier of the protocol for which consent to distribute has been granted.",
            "Required if Distribution Type (0012,0084) is NAMED_PROTOCOL and the protocol is not that which is specified in Clinical Trial Protocol ID (0012,0020) in the Clinical Trial Subject Module."
         ],
         "module" : "Clinical Trial Study",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "name" : "Clinical Trial Protocol ID",
         "entity" : "Study"
      },
      "(0028,0004)" : [
         {
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "name" : "Photometric Interpretation",
            "entity" : "Image",
            "req" : "1",
            "module" : "Image Pixel",
            "usage" : "M",
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
            ]
         },
         {
            "req" : "1",
            "module" : "Whole Slide Microscopy Image",
            "desc" : [
               "Specifies the intended interpretation of the pixel data.",
               [
                  "See ",
                  {
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.8.12.4.1.5"
                     },
                     "el" : "xref"
                  },
                  " for Enumerated Values."
               ]
            ],
            "usage" : "M",
            "mod_tables" : [
               "table_C.8.12.4-1"
            ],
            "name" : "Photometric Interpretation",
            "entity" : "Image"
         }
      ],
      "(0012,0020)" : {
         "req" : "1",
         "usage" : "U",
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
         "module" : "Clinical Trial Subject",
         "name" : "Clinical Trial Protocol ID",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "entity" : "Patient"
      },
      "(0400,0561)[<0>](0400,0563)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Modifying System",
         "module" : "SOP Common",
         "usage" : "M",
         "desc" : "Identification of the system that removed and/or replaced the attributes.",
         "req" : "1"
      },
      "(0028,1053)" : {
         "desc" : [
            "m in the equation specified by Rescale Intercept (0028,1052).",
            "Required if Photometric Interpretation (0028,0004) is MONOCHROME2.",
            {
               "title" : "Enumerated Values:",
               "type" : "variablelist",
               "list" : [
                  [
                     "1",
                     null
                  ]
               ]
            }
         ],
         "usage" : "M",
         "module" : "Whole Slide Microscopy Image",
         "req" : "1C",
         "entity" : "Image",
         "name" : "Rescale Slope",
         "mod_tables" : [
            "table_C.8.12.4-1"
         ]
      },
      "(0088,0200)[<0>](0028,1103)" : {
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
         "module" : "General Image",
         "req" : "1C",
         "entity" : "Image",
         "name" : "Blue Palette Color Lookup Table Descriptor",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ]
      },
      "(0008,0110)" : {
         "desc" : [
            "Sequence of items that map values of Coding Scheme Designator (0008,0102) to an external coding system registration, or to a private or local coding scheme.",
            "One or more Items are permitted in this sequence."
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "3",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme Identification Sequence"
      },
      "(0008,1049)[<0>](0040,1102)" : {
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person's Address",
         "desc" : "Person's mailing address",
         "usage" : "M",
         "module" : "General Study",
         "req" : "3"
      },
      "(0040,0251)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "name" : "Performed Procedure Step End Time",
         "entity" : "Series",
         "req" : "3",
         "module" : "General Series",
         "desc" : "Time at which the Performed Procedure Step ended.",
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a161)" : {
         "entity" : "Image",
         "name" : "Floating Point Value",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "M",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "module" : "Specimen",
         "req" : "1C"
      },
      "(0012,0081)" : {
         "module" : "Clinical Trial Subject",
         "usage" : "U",
         "desc" : "Name of the Ethics Committee or Institutional Review Board (IRB) responsible for approval of the Clinical Trial. Required if Clinical Trial Protocol Ethics Committee Approval Number (0012,0082) is present.",
         "req" : "1C",
         "entity" : "Patient",
         "name" : "Clinical Trial Protocol Ethics Committee Name",
         "mod_tables" : [
            "table_C.7-2b"
         ]
      },
      "(0028,0300)" : {
         "entity" : "Image",
         "name" : "Quality Control Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M",
         "desc" : [
            "Indicates whether or not this image is a quality control or phantom image.",
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
            },
            [
               "If this Attribute is absent, then the image may or may not be a quality control or phantom image. The phantom device in the image can be described using the Device Module. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.6.12",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               }
            ]
         ],
         "module" : "General Image",
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a162)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Rational Numerator Value",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "usage" : "M",
         "module" : "General Series",
         "req" : "1C"
      },
      "(0040,9096)[<0>](0040,08ea)" : {
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "name" : "Measurement Units Code Sequence",
         "entity" : "Image",
         "req" : "1",
         "module" : "General Image",
         "usage" : "M",
         "desc" : [
            "Units of measurement.",
            "Only a single Item shall be included in this sequence.",
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
         ]
      },
      "(0028,0301)" : [
         {
            "name" : "Burned In Annotation",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "entity" : "Image",
            "req" : "3",
            "desc" : [
               "Indicates whether or not image contains sufficient burned in annotation to identify the patient and date the image was acquired.",
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
               "If this Attribute is absent, then the image may or may not contain burned in annotation."
            ],
            "usage" : "M",
            "module" : "General Image"
         },
         {
            "usage" : "M",
            "desc" : [
               "Indicates whether or not image contains sufficient burned in annotation to identify the patient.",
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
               {
                  "el" : "note",
                  "content" : [
                     "\n                    ",
                     {
                        "content" : [
                           "If Specimen Label in Image (0048,0010) value is YES, Burned In Annotation (0028,0301) might be NO if the label includes only a specimen identifier and not patient identifying data."
                        ],
                        "el" : "para"
                     },
                     "\n                  "
                  ]
               }
            ],
            "module" : "Whole Slide Microscopy Image",
            "req" : "1",
            "entity" : "Image",
            "name" : "Burned In Annotation",
            "mod_tables" : [
               "table_C.8.12.4-1"
            ]
         }
      ],
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1160)" : {
         "req" : "1C",
         "usage" : "M",
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
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Referenced Frame Number",
         "entity" : "Series"
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
         "usage" : "M",
         "module" : "Patient",
         "req" : "3",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Identifier Type Code"
      },
      "(0018,a001)[<0>](0018,1000)" : {
         "entity" : "Image",
         "name" : "Device Serial Number",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "desc" : "Manufacturer's serial number of the equipment that contributed to the composite instance.",
         "module" : "SOP Common",
         "req" : "3"
      },
      "(0088,0200)[<0>](0028,1102)" : {
         "entity" : "Image",
         "name" : "Green Palette Color Lookup Table Descriptor",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image",
         "usage" : "M",
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
         "req" : "1C"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1155)" : {
         "req" : "1",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "General Series",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "entity" : "Series"
      },
      "(0048,0105)[<0>](0048,0120)[<1>](0028,1222)" : {
         "name" : "Segmented Green Palette Color Lookup Table Data",
         "mod_tables" : [
            "table_C.8.12.5-1",
            "table_C.7-22a"
         ],
         "entity" : "Image",
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "Segmented Green Palette Color Lookup Table Data. Required if segmented data is used in an Image IOD; shall not be present in a Presentation State IOD. or Color Palette IOD See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.9.2"
               }
            },
            " for further explanation."
         ],
         "module" : "Optical Path"
      },
      "(0008,1111)" : [
         {
            "mod_tables" : [
               "table_C.7-5a"
            ],
            "name" : "Referenced Performed Procedure Step Sequence",
            "entity" : "Series",
            "req" : "3",
            "desc" : [
               "Uniquely identifies the Performed Procedure Step SOP Instance to which the Series is related.",
               "Only a single Item is permitted in this sequence."
            ],
            "usage" : "M",
            "module" : "General Series"
         },
         {
            "module" : "Whole Slide Microscopy Series",
            "desc" : [
               "Uniquely identifies the Performed Procedure Step SOP Instance to which the Series is related.",
               "Only a single Item shall be included in this sequence.",
               "Required if a Performed Procedure Step SOP Class was involved in the creation of this Series."
            ],
            "usage" : "M",
            "req" : "1C",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.8.12.3-1"
            ],
            "name" : "Referenced Performed Procedure Step Sequence"
         }
      ],
      "(0018,1020)" : [
         {
            "req" : "3",
            "usage" : "M",
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
            "module" : "General Equipment",
            "mod_tables" : [
               "table_C.7-8"
            ],
            "name" : "Software Versions",
            "entity" : "Equipment"
         },
         {
            "req" : "1",
            "module" : "Enhanced General Equipment",
            "usage" : "M",
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
            "mod_tables" : [
               "table_C.7-8b"
            ],
            "name" : "Software Versions",
            "entity" : "Equipment"
         }
      ],
      "(0040,0275)[<0>](0032,1064)" : {
         "req" : "3",
         "module" : "General Series",
         "desc" : [
            "A sequence that conveys the Procedure Type of the requested procedure.",
            "Only a single Item is permitted in this sequence."
         ],
         "usage" : "M",
         "name" : "Requested Procedure Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "entity" : "Series"
      },
      "(0010,2294)" : {
         "name" : "Breed Registration Sequence",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "req" : "2C",
         "module" : "Patient",
         "usage" : "M",
         "desc" : [
            "Information identifying an animal within a breed registry.",
            "Zero or more Items shall be included in this sequence.",
            "Required if the patient is an animal."
         ]
      },
      "(0048,0008)[<0>](0040,073a)" : {
         "req" : "1",
         "desc" : "The Y offset in millimeters from the Origin of the Slide Coordinate System.",
         "usage" : "M",
         "module" : "Whole Slide Microscopy Image",
         "name" : "Y Offset in Slide Coordinate System",
         "mod_tables" : [
            "table_C.8.12.4-1"
         ],
         "entity" : "Image"
      },
      "(0048,0002)" : {
         "name" : "Imaged Volume Height",
         "mod_tables" : [
            "table_C.8.12.4-1"
         ],
         "entity" : "Image",
         "req" : "1",
         "usage" : "M",
         "desc" : [
            "Height of total imaged volume (distance in the direction of columns in each frame) in mm. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.12.4.1.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            }
         ],
         "module" : "Whole Slide Microscopy Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a124)" : {
         "name" : "UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "req" : "1C",
         "module" : "General Series",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "usage" : "M"
      },
      "(0008,1052)[<0>](0008,0080)" : {
         "req" : "1C",
         "module" : "General Series",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "name" : "Institution Name",
         "entity" : "Series"
      },
      "(0048,0007)" : {
         "req" : "1",
         "module" : "Whole Slide Microscopy Image",
         "usage" : "M",
         "desc" : [
            "Total number of rows in pixel matrix; i.e., height of total imaged volume in pixels. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.12.4.1.3"
               },
               "el" : "xref"
            }
         ],
         "name" : "Total Pixel Matrix Rows",
         "mod_tables" : [
            "table_C.8.12.4-1"
         ],
         "entity" : "Image"
      },
      "(0048,0200)[<0>](0048,0201)" : {
         "req" : "1",
         "desc" : "Top Left Hand Corner of Localizer image pixel area corresponding to referenced frame,specified as column\\row. Column is the horizontal offset and row is the vertical offset.",
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is LOCALIZER",
         "module" : "Multi-Resolution Navigation",
         "name" : "Top Left Hand Corner of Localizer Area",
         "mod_tables" : [
            "table_C.8.12.7-1"
         ],
         "entity" : "Image"
      },
      "(0008,2112)[<0>](0020,0020)" : {
         "req" : "1C",
         "module" : "General Image",
         "desc" : [
            "The Patient Orientation values of the source image.",
            "Required if the value of Spatial Locations Preserved (0028,135A) is REORIENTED_ONLY."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "name" : "Patient Orientation",
         "entity" : "Image"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0033)" : {
         "entity" : "Patient",
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "module" : "Patient",
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
         "usage" : "M",
         "req" : "1C"
      },
      "(4ffe,0001)[<0>](0400,0005)" : {
         "entity" : "Image",
         "name" : "MAC ID Number",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "desc" : "A number, unique within this SOP Instance, used to identify this MAC Parameters Sequence (4FFE,0001) item from an Item of the Digital Signatures Sequence (FFFA,FFFA).",
         "usage" : "M",
         "req" : "1"
      },
      "(0010,0200)" : {
         "entity" : "Patient",
         "name" : "Quality Control Subject",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
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
            "This attribute describes a characteristic of the Imaging Subject. It is distinct from Quality Control Image (0028,0300) in the General Image Module, which is used to describe an image acquired."
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0008,1140)[<0>](0008,1155)" : {
         "req" : "1",
         "module" : "General Image",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3",
            "table_10-11"
         ],
         "entity" : "Image"
      },
      "(0008,1164)[<0>](0008,1163)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-9"
         ],
         "name" : "Time Range",
         "desc" : [
            "The start and end times of the frames that were extracted.",
            "Required if object extraction is based on a Frame Level Retrieve using Time Range (0008,1163).",
            [
               "See ",
               {
                  "attrs" : {
                     "targetptr" : "PS3.4",
                     "targetdoc" : "PS3.4",
                     "xrefstyle" : "select: labelnumber"
                  },
                  "el" : "olink"
               },
               " \"Instance and Frame Level Retrieve SOP Classes\""
            ]
         ],
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "module" : "Frame Extraction",
         "req" : "1C"
      },
      "(fffa,fffa)[<0>](0400,0005)" : {
         "module" : "SOP Common",
         "desc" : "A number used to identify which MAC Parameters Sequence item was used in the calculation of this Digital Signature.",
         "usage" : "M",
         "req" : "1",
         "entity" : "Image",
         "name" : "MAC ID Number",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
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
         "usage" : "M",
         "module" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a121)" : {
         "module" : "General Series",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "name" : "Date",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0048,0105)[<0>](0048,0106)" : {
         "module" : "Optical Path",
         "usage" : "M",
         "desc" : "Identifier for the optical path specified in the Sequence Item. The identifier shall be unique for each Item within the Optical Path Sequence.",
         "req" : "1",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8.12.5-1"
         ],
         "name" : "Optical Path Identifier"
      },
      "(0008,1110)[<0>](0008,1155)" : {
         "module" : "General Study",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID"
      },
      "(0048,0105)[<0>](0048,0120)[<1>](0028,1223)" : {
         "usage" : "M",
         "desc" : [
            "Segmented Blue Palette Color Lookup Table Data. Required if segmented data is used in an Image IOD; shall not be present in a Presentation State IOD or Color Palette IOD. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.9.2"
               }
            },
            " for further explanation."
         ],
         "module" : "Optical Path",
         "req" : "1C",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8.12.5-1",
            "table_C.7-22a"
         ],
         "name" : "Segmented Blue Palette Color Lookup Table Data"
      },
      "(0010,2210)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Anatomical Orientation Type",
         "usage" : "M",
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
                  "attrs" : {
                     "linkend" : "sect_C.7.6.2.1.1",
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
         "module" : "General Series",
         "req" : "1C"
      },
      "(fffa,fffa)[<0>](0400,0310)" : {
         "usage" : "M",
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
         "module" : "SOP Common",
         "req" : "3",
         "entity" : "Image",
         "name" : "Certified Timestamp",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)" : {
         "module" : "Patient",
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
         "usage" : "M",
         "req" : "3",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Assigning Facility Sequence"
      },
      "(0048,0105)[<0>](0048,0107)" : {
         "req" : "3",
         "usage" : "M",
         "desc" : "Description of the optical path specified in the Sequence Item.",
         "module" : "Optical Path",
         "mod_tables" : [
            "table_C.8.12.5-1"
         ],
         "name" : "Optical Path Description",
         "entity" : "Image"
      },
      "(0008,1080)" : {
         "module" : "Patient Study",
         "usage" : "U",
         "desc" : "Description of the admitting diagnosis (diagnoses)",
         "req" : "3",
         "entity" : "Study",
         "name" : "Admitting Diagnoses Description",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0062,000b)" : {
         "module" : "General Series",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "name" : "Referenced Segment Number",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,08ea)" : {
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "usage" : "M",
         "module" : "General Series",
         "req" : "1C",
         "entity" : "Series",
         "name" : "Measurement Units Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0008,1250)[<0>](0020,000d)" : {
         "usage" : "M",
         "desc" : "Instance UID of Study to which the related Series belongs",
         "module" : "General Series",
         "req" : "1",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Study Instance UID"
      },
      "(0040,0275)[<0>](0040,0007)" : {
         "name" : "Scheduled Procedure Step Description",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "entity" : "Series",
         "req" : "3",
         "desc" : "Institution-generated description or classification of the Scheduled Procedure Step to be performed.",
         "usage" : "M",
         "module" : "General Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,08ea)" : {
         "module" : "General Series",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "name" : "Measurement Units Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0040,0555)[<0>](0040,a040)" : {
         "name" : "Value Type",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "entity" : "Image",
         "req" : "3",
         "usage" : "M",
         "desc" : [
            "The type of the value encoded in this Item.",
            {
               "type" : "variablelist",
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
               "title" : "Defined Terms:"
            },
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_10.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "module" : "Acquisition Context"
      },
      "(0048,0105)[<0>](0022,0004)" : {
         "usage" : "M",
         "desc" : [
            "Pass band of image path filter(s) in nm. This Attribute has two Values. The first is the shorter and the second the longer wavelength relative to the peak. The values are for the - 3dB nominal (1/2 of peak) pass through intensity.",
            "One of the two Values may be zero length, in which case it is a cutoff filter"
         ],
         "module" : "Optical Path",
         "req" : "3",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8.12.5-1"
         ],
         "name" : "Image Path Filter Pass Band"
      },
      "(0008,1200)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "name" : "Studies Containing Other Referenced Instances Sequence",
         "desc" : [
            "Sequence of items each identifying a Study other than the Study of which this Instance is a part, which Studies contain Instances that are referenced elsewhere in this Instance.",
            "One or more Items shall be included in this sequence.",
            "Required if this Instance references Instances in other Studies."
         ],
         "usage" : "M",
         "module" : "Common Instance Reference",
         "req" : "1C"
      },
      "(0010,1002)" : {
         "req" : "3",
         "desc" : [
            "A sequence of identification numbers or codes used to identify the patient, which may or may not be human readable, and may or may not have been obtained from an implanted or attached device such as an RFID or barcode.",
            "One or more Items are permitted in this sequence."
         ],
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Other Patient IDs Sequence",
         "entity" : "Patient"
      },
      "(0018,a001)[<0>](0008,0081)" : {
         "req" : "3",
         "desc" : "Address of the institution where the equipment that contributed to the composite instance is located.",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Institution Address",
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0008,2228)" : {
         "desc" : [
            "Sequence of Items that identifies the primary anatomic structure(s) of interest in this Instance.",
            "One or more Items are permitted in this sequence."
         ],
         "usage" : "M",
         "module" : "Specimen",
         "req" : "3",
         "entity" : "Image",
         "name" : "Primary Anatomic Structure Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-8"
         ]
      },
      "(0008,0051)[<0>](0040,0033)" : {
         "usage" : "M",
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
         "module" : "General Study",
         "req" : "1C",
         "entity" : "Study",
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ]
      },
      "(0040,0520)[<0>](0050,001d)" : {
         "usage" : "M",
         "desc" : "Diameter in mm of container component for cylindrical or circular components.",
         "module" : "Specimen",
         "req" : "3",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Container Component Diameter"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a040)" : {
         "req" : "1",
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
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Value Type",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,100a)" : {
         "desc" : [
            "Coded Reason for requesting this procedure.",
            "One or more Items are permitted in this sequence."
         ],
         "usage" : "M",
         "module" : "General Series",
         "req" : "3",
         "entity" : "Series",
         "name" : "Reason for Requested Procedure Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ]
      },
      "(0018,a001)[<0>](0008,1072)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Operator Identification Sequence",
         "module" : "SOP Common",
         "desc" : [
            "Identification of the operator(s) of the contributing equipment.",
            "One or more items are permitted in this sequence.",
            "The number and order of Items shall correspond to the number and order of values of Operators' Name (0008,1070), if present."
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0008,1040)" : {
         "entity" : "Equipment",
         "name" : "Institutional Department Name",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
         "desc" : "Department in the institution where the equipment that produced the composite instances is located.",
         "usage" : "M",
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a120)" : {
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "usage" : "M",
         "module" : "General Series",
         "req" : "1C",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "DateTime"
      },
      "(0040,0513)[<0>](0040,0033)" : {
         "entity" : "Image",
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
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
         "module" : "Specimen",
         "req" : "1C"
      },
      "(0032,1034)" : {
         "req" : "3",
         "usage" : "M",
         "desc" : [
            "Institutional department where the request initiated.",
            "Only a single item is permitted in this sequence."
         ],
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Requesting Service Code Sequence",
         "entity" : "Study"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a163)" : {
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "usage" : "M",
         "module" : "General Series",
         "req" : "1C",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Rational Denominator Value"
      },
      "(0008,0051)" : {
         "usage" : "M",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this sequence."
         ],
         "module" : "General Study",
         "req" : "3",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Issuer of Accession Number Sequence"
      },
      "(0088,0200)[<0>](0028,0100)" : {
         "usage" : "M",
         "desc" : [
            "Number of bits allocated for each pixel sample. Each sample shall have the same number of bits allocated. See ",
            {
               "el" : "olink",
               "attrs" : {
                  "xrefstyle" : "select: labelnumber",
                  "targetptr" : "PS3.5",
                  "targetdoc" : "PS3.5"
               }
            },
            " for further explanation."
         ],
         "module" : "General Image",
         "req" : "1",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "name" : "Bits Allocated"
      },
      "(0020,9222)[<0>](0020,9421)" : {
         "req" : "3",
         "module" : "Multi-frame Dimension",
         "desc" : "Free text description that explains the meaning of the dimension.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "name" : "Dimension Description Label",
         "entity" : "Image"
      },
      "(0040,0555)" : {
         "req" : "2",
         "module" : "Acquisition Context",
         "desc" : [
            "A sequence of Items that describes the conditions present during the acquisition of the data of the SOP Instance.",
            "Zero or more items shall be included in this sequence."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "name" : "Acquisition Context Sequence",
         "entity" : "Image"
      },
      "(0008,1072)[<0>](0040,1102)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "name" : "Person's Address",
         "desc" : "Person's mailing address",
         "usage" : "M",
         "module" : "General Series",
         "req" : "3"
      },
      "(0008,1052)[<0>](0040,1101)" : {
         "req" : "1",
         "module" : "General Series",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "usage" : "M",
         "name" : "Person Identification Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "entity" : "Series"
      },
      "(0040,0555)[<0>](0040,a160)" : {
         "req" : "1C",
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a Text Observation Value.",
            "Required if Date (0040,A121), Time (0040,A122), and Person Name (0040,A123) do not fully describe the concept specified by Concept Name Code Sequence (0040,A043). Shall not be present otherwise."
         ],
         "usage" : "M",
         "module" : "Acquisition Context",
         "name" : "Text Value",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0008,1160)" : {
         "entity" : "Image",
         "name" : "Referenced Frame Number",
         "mod_tables" : [
            "table_C.7.6.22-2",
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
         "usage" : "M",
         "module" : "Specimen",
         "req" : "1C"
      },
      "(0040,a390)[<0>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "1",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID"
      },
      "(0012,0083)[<0>](0012,0085)" : {
         "name" : "Consent for Distribution Flag",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "entity" : "Study",
         "req" : "1",
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
         "usage" : "U",
         "module" : "Clinical Trial Study"
      },
      "(0012,0050)" : {
         "module" : "Clinical Trial Study",
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
         "usage" : "U",
         "req" : "2",
         "entity" : "Study",
         "name" : "Clinical Trial Time Point ID",
         "mod_tables" : [
            "table_C.7-4b"
         ]
      },
      "(0012,0071)" : {
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "name" : "Clinical Trial Series ID",
         "entity" : "Series",
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
         "usage" : "U",
         "module" : "Clinical Trial Series"
      },
      "(0088,0200)" : {
         "req" : "3",
         "usage" : "M",
         "desc" : [
            "This icon image is representative of the Image.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "name" : "Icon Image Sequence",
         "entity" : "Image"
      },
      "(0040,0520)" : {
         "name" : "Container Component Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "entity" : "Image",
         "req" : "3",
         "module" : "Specimen",
         "desc" : [
            "Description of one or more components of the container (e.g., description of the slide and of the coverslip).",
            "One or more Items are permitted in this sequence."
         ],
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0562)[<1>](0040,0031)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "name" : "Local Namespace Entity ID",
         "usage" : "M",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "module" : "Specimen",
         "req" : "1C"
      },
      "(0008,0031)" : {
         "name" : "Series Time",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series",
         "req" : "3",
         "desc" : "Time the Series started.",
         "usage" : "M",
         "module" : "General Series"
      },
      "(4ffe,0001)[<0>](0400,0015)" : {
         "name" : "MAC Algorithm",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Image",
         "req" : "1",
         "module" : "SOP Common",
         "usage" : "M",
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
                     "el" : "para"
                  },
                  "\n                    "
               ]
            }
         ]
      },
      "(0010,0032)" : {
         "name" : "Patient's Birth Time",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "req" : "3",
         "desc" : "Birth time of the Patient.",
         "usage" : "M",
         "module" : "Patient"
      },
      "(0008,1050)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Performing Physician's Name",
         "entity" : "Series",
         "req" : "3",
         "usage" : "M",
         "desc" : "Name of the physician(s) administering the Series.",
         "module" : "General Series"
      },
      "(0008,1072)[<0>](0040,1101)" : {
         "module" : "General Series",
         "usage" : "M",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "name" : "Person Identification Code Sequence"
      },
      "(0010,2293)" : {
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient Breed Code Sequence",
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
         "usage" : "M",
         "module" : "Patient",
         "req" : "2C"
      },
      "(0040,0560)[<0>](0040,0620)" : {
         "req" : "1C",
         "module" : "Specimen",
         "usage" : "M",
         "desc" : [
            [
               "Sequence of Content Items identifying the location of the specimen in the container and/or in the image. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.22.1.4"
                  }
               },
               "."
            ],
            "One or more Items shall be included in this sequence.",
            "Required if multiple specimens present in the image. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Specimen Localization Content Item Sequence",
         "entity" : "Image"
      },
      "(0008,1115)[<0>](0008,114a)" : {
         "req" : "1",
         "module" : "Common Instance Reference",
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this sequence."
         ],
         "usage" : "M",
         "name" : "Referenced Instance Sequence",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "entity" : "Image"
      },
      "(0048,0105)[<0>](0048,0120)[<1>](0028,1203)" : {
         "module" : "Optical Path",
         "usage" : "M",
         "desc" : [
            "Blue Palette Color Lookup Table Data. Required if segmented data is NOT used in an Image IOD, or if the IOD is a Presentation State IOD or Color Palette IOD. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.3.1.6"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "req" : "1C",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8.12.5-1",
            "table_C.7-22a"
         ],
         "name" : "Blue Palette Color Lookup Table Data"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a123)" : {
         "req" : "1C",
         "module" : "Specimen",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "usage" : "M",
         "name" : "Person Name",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a124)" : {
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "UID",
         "entity" : "Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a162)" : {
         "name" : "Rational Numerator Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "req" : "1C",
         "module" : "General Series",
         "usage" : "M",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ]
      },
      "(0018,a001)[<0>](0008,0070)" : {
         "entity" : "Image",
         "name" : "Manufacturer",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "desc" : "Manufacturer of the equipment that contributed to the composite instance.",
         "req" : "1"
      },
      "(0018,a001)[<0>](0018,1020)" : {
         "entity" : "Image",
         "name" : "Software Versions",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "3"
      },
      "(0040,0520)[<0>](0008,1090)" : {
         "name" : "Manufacturer's Model Name",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "entity" : "Image",
         "req" : "3",
         "module" : "Specimen",
         "desc" : "Manufacturer's model name of the container component.",
         "usage" : "M"
      },
      "(0008,1062)[<0>](0040,1101)" : {
         "module" : "General Study",
         "usage" : "M",
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
         ]
      },
      "(0028,0106)" : {
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "name" : "Smallest Image Pixel Value",
         "entity" : "Image",
         "req" : "3",
         "desc" : "The minimum actual pixel value encountered in this image.",
         "usage" : "M",
         "module" : "Image Pixel"
      },
      "(0088,0200)[<0>](0028,2000)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "name" : "ICC Profile",
         "module" : "General Image",
         "usage" : "M",
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
         "req" : "3"
      },
      "(0018,1008)" : {
         "module" : "General Equipment",
         "desc" : "Identifier of the gantry or positioner.",
         "usage" : "M",
         "req" : "3",
         "entity" : "Equipment",
         "name" : "Gantry ID",
         "mod_tables" : [
            "table_C.7-8"
         ]
      },
      "(0008,103e)" : {
         "req" : "3",
         "usage" : "M",
         "desc" : "Description of the Series",
         "module" : "General Series",
         "name" : "Series Description",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series"
      },
      "(0038,0064)" : {
         "name" : "Issuer of Service Episode ID Sequence",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "entity" : "Study",
         "req" : "3",
         "usage" : "U",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Service Episode ID (0038,0060).",
            "Only a single Item is permitted in this sequence."
         ],
         "module" : "Patient Study"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a120)" : {
         "name" : "DateTime",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "module" : "General Series"
      },
      "(0020,0013)" : [
         {
            "entity" : "Image",
            "name" : "Instance Number",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "usage" : "M",
            "desc" : [
               "A number that identifies this image.",
               {
                  "content" : [
                     "\n                    ",
                     {
                        "content" : [
                           "This Attribute was named Image Number in earlier versions of this Standard."
                        ],
                        "el" : "para"
                     },
                     "\n                  "
                  ],
                  "el" : "note"
               }
            ],
            "module" : "General Image",
            "req" : "2"
         },
         {
            "usage" : "M",
            "desc" : "A number that identifies this Composite object instance.",
            "module" : "SOP Common",
            "req" : "3",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.12-1"
            ],
            "name" : "Instance Number"
         }
      ],
      "(0008,0051)[<0>](0040,0032)" : {
         "entity" : "Study",
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "module" : "General Study",
         "usage" : "M",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a121)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Date",
         "module" : "General Series",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "usage" : "M",
         "req" : "1C"
      },
      "(fffa,fffa)[<0>](0400,0115)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Certificate of Signer",
         "usage" : "M",
         "desc" : [
            [
               "A certificate that holds the identity of the entity producing this Digital Signature, that entity's public key or key identifier, and the algorithm and associated parameters with which that public key is to be used. Algorithms allowed are specified in Digital Signature Security Profiles (see ",
               {
                  "attrs" : {
                     "targetptr" : "PS3.15",
                     "targetdoc" : "PS3.15",
                     "xrefstyle" : "select: labelnumber"
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
                     ],
                     "el" : "orderedlist"
                  },
                  "\n                    "
               ]
            }
         ],
         "module" : "SOP Common",
         "req" : "1"
      },
      "(0040,9096)[<0>](0040,9210)" : {
         "req" : "1",
         "desc" : "Label that is used to identify the transformation of this Item.",
         "usage" : "M",
         "module" : "General Image",
         "name" : "LUT Label",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "entity" : "Image"
      },
      "(0048,0006)" : {
         "desc" : [
            "Total number of columns in pixel matrix; i.e., width of total imaged volume in pixels. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.12.4.1.3"
               }
            }
         ],
         "usage" : "M",
         "module" : "Whole Slide Microscopy Image",
         "req" : "1",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8.12.4-1"
         ],
         "name" : "Total Pixel Matrix Columns"
      },
      "(0020,0010)" : {
         "usage" : "M",
         "desc" : "User or equipment generated Study identifier.",
         "module" : "General Study",
         "req" : "2",
         "entity" : "Study",
         "name" : "Study ID",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0008,1084)" : {
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Admitting Diagnoses Code Sequence",
         "module" : "Patient Study",
         "usage" : "U",
         "desc" : [
            "A sequence that conveys the admitting diagnosis (diagnoses).",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3"
      },
      "(0008,1052)[<0>](0008,0082)" : {
         "module" : "General Series",
         "usage" : "M",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1C",
         "entity" : "Series",
         "name" : "Institution Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ]
      },
      "(0048,0105)[<0>](0048,0120)[<1>](0028,1221)" : {
         "usage" : "M",
         "desc" : [
            "Segmented Red Palette Color Lookup Table Data. Required if segmented data is used in an Image IOD; shall not be present in a Presentation State IOD or Color Palette IOD. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.9.2"
               }
            },
            " for further explanation."
         ],
         "module" : "Optical Path",
         "req" : "1C",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8.12.5-1",
            "table_C.7-22a"
         ],
         "name" : "Segmented Red Palette Color Lookup Table Data"
      },
      "(0020,9172)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Conversion Source Attributes Sequence",
         "module" : "SOP Common",
         "usage" : "M",
         "desc" : [
            "The set of images or other composite SOP Instances that were converted to this instance.",
            "If this instance was converted from a specific frame in the source instance, the reference shall include the Frame Number.",
            "One or more Items shall be included in this sequence.",
            "Required if this instance was created by conversion, and Conversion Source Attributes Sequence (0020,9172) is not present in an Item of Shared Functional Groups Sequence (5200,9229) or Per-Frame Functional Groups Sequence (5200,9230)."
         ],
         "req" : "1C"
      },
      "(0040,0275)[<0>](0008,1110)" : {
         "entity" : "Series",
         "name" : "Referenced Study Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "module" : "General Series",
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
         "req" : "3"
      },
      "(0048,0105)[<0>](0022,0016)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8.12.5-1"
         ],
         "name" : "Illumination Type Code Sequence",
         "usage" : "M",
         "desc" : [
            [
               "Coded value for illumination method. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.12.5.1.2"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "One or more Items shall be included in this sequence."
         ],
         "module" : "Optical Path",
         "req" : "1"
      },
      "(0008,2112)[<0>](0028,135a)" : {
         "req" : "3",
         "module" : "General Image",
         "usage" : "M",
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            },
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
                                    "This applies not only to images with a known relationship to a 3D space, but also to projection images. For example, a projection radiograph such as a mammogram that is processed by a point image processing operation such as contrast enhancement, or a smoothing or edge enhancing convolution, would have a value of YES for this attribute. A projection radiograph that had been magnified or warped geometrically would have a value of NO for this attribute. A projection radiograph that has been flipped, and/or rotated by a multiple of 90 degrees, such that transformation of pixel locations is possible by comparison of the values of Patient Orientation (0020,0020) would have a value of REORIENTED_ONLY. This attribute is typically of importance in relating images with Presentation Intent Type (0008,0068) values of FOR PROCESSING and FOR PRESENTATION."
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
                                    "When the value of this attribute is NO, it is not possible to locate on the current image any pixel coordinates that are referenced relative to the source image, such as for example, might be required for rendering CAD findings derived from a referenced FOR PROCESSING image on the current FOR PRESENTATION image."
                                 ]
                              },
                              "\n                      "
                           ]
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
         "mod_tables" : [
            "table_C.7-9"
         ],
         "name" : "Spatial Locations Preserved",
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)" : {
         "req" : "1C",
         "module" : "Specimen",
         "usage" : "M",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Referenced SOP Sequence",
         "entity" : "Image"
      },
      "(0020,9172)[<0>](0008,1150)" : {
         "entity" : "Image",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1"
      },
      "(0048,0200)[<0>](0048,0106)" : {
         "req" : "1",
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is LOCALIZER",
         "desc" : [
            "Identifies the optical path used in acquiring the referenced Frame by reference to an Item in the Optical Path Sequence (0048,0105) of the current SOP Instance. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.12.5",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "module" : "Multi-Resolution Navigation",
         "mod_tables" : [
            "table_C.8.12.7-1"
         ],
         "name" : "Optical Path Identifier",
         "entity" : "Image"
      },
      "(0008,2112)[<0>](0008,1150)" : {
         "req" : "1",
         "module" : "General Image",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3",
            "table_10-11"
         ],
         "entity" : "Image"
      },
      "(fffa,fffa)[<0>](0400,0401)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Digital Signature Purpose Code Sequence",
         "entity" : "Image",
         "req" : "3",
         "usage" : "M",
         "desc" : [
            "The purpose of this Digital Signature.",
            "Only a single Item is permitted in this sequence."
         ],
         "module" : "SOP Common"
      },
      "(0048,0014)" : {
         "mod_tables" : [
            "table_C.8.12.4-1"
         ],
         "name" : "Distance Between Focal Planes",
         "entity" : "Image",
         "req" : "1C",
         "module" : "Whole Slide Microscopy Image",
         "desc" : [
            "Distance between acquisition focal planes used for extended depth of field, in \u00b5m.",
            "Required if Extended Depth of Field (0048,0012) value is YES"
         ],
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,003a)" : {
         "req" : "3",
         "usage" : "M",
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
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Assigning Agency or Department Code Sequence",
         "entity" : "Patient"
      },
      "(2200,0002)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8.12.8-1"
         ],
         "name" : "Label Text",
         "desc" : "Label text interpreted from the scanned slide label, e.g., by optical character recognition.",
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is LABEL; may be present otherwise",
         "module" : "Slide Label",
         "req" : "2"
      },
      "(0010,1000)" : {
         "module" : "Patient",
         "usage" : "M",
         "desc" : "Other identification numbers or codes used to identify the patient.",
         "req" : "3",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Other Patient IDs"
      },
      "(0008,0096)" : {
         "module" : "General Study",
         "desc" : [
            "Identification of the patient's referring physician.",
            "Only a single item is permitted in this sequence."
         ],
         "usage" : "M",
         "req" : "3",
         "entity" : "Study",
         "name" : "Referring Physician Identification Sequence",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0010,2160)" : {
         "req" : "3",
         "module" : "Patient",
         "usage" : "M",
         "desc" : "Ethnic group or race of the patient.",
         "name" : "Ethnic Group",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient"
      },
      "(0010,1010)" : {
         "req" : "3",
         "module" : "Patient Study",
         "usage" : "U",
         "desc" : "Age of the Patient.",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Patient's Age",
         "entity" : "Study"
      },
      "(0018,a001)" : {
         "req" : "3",
         "usage" : "M",
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
         "module" : "SOP Common",
         "name" : "Contributing Equipment Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image"
      },
      "(0028,0109)" : {
         "usage" : "M",
         "desc" : "The maximum value of all images in this Series.",
         "module" : "General Series",
         "req" : "3",
         "entity" : "Series",
         "name" : "Largest Pixel Value in Series",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0012,0063)" : {
         "entity" : "Patient",
         "name" : "De-identification Method",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "usage" : "M",
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
                                 "el" : "para",
                                 "content" : [
                                    "This may be used to describe the extent or thoroughness of the de-identification, for example whether or not the de-identification is for a \"Limited Data Set\" (as per HIPAA Privacy Rule)."
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
                                    "The characteristics of the de-identifying equipment and/or the responsible operator of that equipment may be recorded as an additional item of the Contributing Equipment Sequence (0018,A001) in the SOP Common Module. De-identifying equipment may use a Purpose of Reference of (109104,DCM,\"De-identifying Equipment\")."
                                 ]
                              },
                              "\n                      "
                           ]
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
            },
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method Code Sequence (0012,0064) is not present. May be present otherwise."
         ],
         "req" : "1C"
      },
      "(0048,0200)[<0>](0008,1150)" : {
         "entity" : "Image",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.8.12.7-1",
            "table_10-11"
         ],
         "module" : "Multi-Resolution Navigation",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is LOCALIZER",
         "req" : "1"
      },
      "(0012,0083)[<0>](0012,0084)" : {
         "module" : "Clinical Trial Study",
         "usage" : "U",
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
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.2.3.1.2"
                  }
               },
               "."
            ],
            "Required if Consent for Distribution Flag (0012,0085) equals YES or WITHDRAWN."
         ],
         "req" : "1C",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "name" : "Distribution Type"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0039)" : {
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
         "module" : "Patient",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a123)" : {
         "req" : "1C",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "usage" : "M",
         "module" : "General Series",
         "name" : "Person Name",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series"
      },
      "(0028,0011)" : {
         "entity" : "Image",
         "name" : "Columns",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "usage" : "M",
         "desc" : "Number of columns in the image",
         "module" : "Image Pixel",
         "req" : "1"
      },
      "(0008,1010)" : {
         "req" : "3",
         "module" : "General Equipment",
         "usage" : "M",
         "desc" : "User defined name identifying the machine that produced the composite instances.",
         "name" : "Station Name",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "entity" : "Equipment"
      },
      "(0028,0120)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Pixel Padding Value",
         "entity" : "Equipment",
         "req" : "1C",
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
                                    "The Value Representation of this Attribute is determined by the value of Pixel Representation (0028,0103)."
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
                     },
                     "el" : "orderedlist"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "usage" : "M",
         "module" : "General Equipment"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)" : {
         "module" : "General Series",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "name" : "Referenced SOP Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0020,1040)" : {
         "entity" : "Frame of Reference",
         "name" : "Position Reference Indicator",
         "mod_tables" : [
            "table_C.7-6"
         ],
         "module" : "Frame of Reference",
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
         "usage" : "M",
         "req" : "2"
      },
      "(0020,9222)[<0>](0020,9167)" : {
         "module" : "Multi-frame Dimension",
         "usage" : "M",
         "desc" : [
            "Contains the Data Element Tag of the Functional Group Sequence that contains the Attribute that is referenced by the Dimension Index Pointer (0020,9165).",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.17.1"
                  }
               },
               " for further explanation."
            ],
            "Required if the value of Dimension Index Pointer (0020,9165) is the Data Element Tag of an Attribute that is contained within a Functional Group Sequence."
         ],
         "req" : "1C",
         "entity" : "Image",
         "name" : "Functional Group Pointer",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ]
      },
      "(0012,0060)" : {
         "name" : "Clinical Trial Coordinating Center Name",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "entity" : "Series",
         "req" : "2",
         "module" : "Clinical Trial Series",
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
         "usage" : "U"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1150)" : {
         "entity" : "Series",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "General Series",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M",
         "req" : "1"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1160)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Referenced Frame Number",
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
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
         "module" : "General Series"
      },
      "(0048,0200)" : {
         "module" : "Multi-Resolution Navigation",
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is LOCALIZER",
         "desc" : [
            "Identification of correspondence between areas of Pixel Data (07FE,0010) and frames of higher resolution images.",
            "One or more Items shall be included in this sequence."
         ],
         "req" : "1",
         "entity" : "Image",
         "name" : "Referenced Image Navigation Sequence",
         "mod_tables" : [
            "table_C.8.12.7-1"
         ]
      },
      "(0012,0010)" : {
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "name" : "Clinical Trial Sponsor Name",
         "module" : "Clinical Trial Subject",
         "usage" : "U",
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
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a121)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Date",
         "usage" : "M",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "module" : "Specimen",
         "req" : "1C"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a168)" : {
         "req" : "1C",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Concept Code Sequence",
         "entity" : "Series"
      },
      "(0008,1072)[<0>](0008,0081)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "name" : "Institution Address",
         "module" : "General Series",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "usage" : "M",
         "req" : "3"
      },
      "(0010,4000)" : {
         "module" : "Patient",
         "desc" : "User-defined additional information about the patient.",
         "usage" : "M",
         "req" : "3",
         "entity" : "Patient",
         "name" : "Patient Comments",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0008,103f)" : {
         "req" : "3",
         "module" : "General Series",
         "desc" : [
            "A coded description of the Series.",
            "Only a single Item is permitted in this sequence."
         ],
         "usage" : "M",
         "name" : "Series Description Code Sequence",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series"
      },
      "(0010,0010)" : {
         "module" : "Patient",
         "desc" : "Patient's full name.",
         "usage" : "M",
         "req" : "2",
         "entity" : "Patient",
         "name" : "Patient's Name",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0008,1049)[<0>](0008,0080)" : {
         "module" : "General Study",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Study",
         "name" : "Institution Name",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a043)" : {
         "entity" : "Image",
         "name" : "Concept Name Code Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "M",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "Specimen",
         "req" : "1"
      },
      "(0008,1062)[<0>](0008,0081)" : {
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Address",
         "usage" : "M",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "module" : "General Study",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a161)" : {
         "entity" : "Series",
         "name" : "Floating Point Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "usage" : "M",
         "req" : "1C"
      },
      "(0040,0520)[<0>](0050,0013)" : {
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Container Component Thickness",
         "entity" : "Image",
         "req" : "3",
         "module" : "Specimen",
         "desc" : "Thickness in mm of container component",
         "usage" : "M"
      },
      "(0008,0201)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Timezone Offset From UTC",
         "entity" : "Image",
         "req" : "3",
         "module" : "SOP Common",
         "usage" : "M",
         "desc" : [
            "Contains the offset from UTC to the timezone for all DA and TM Attributes present in this SOP Instance, and for all DT Attributes present in this SOP Instance that do not contain an explicitly encoded timezone offset.",
            "Encoded as an ASCII string in the format \"&ZZXX\". The components of this string, from left to right, are & = \"+\" or \"-\", and ZZ = Hours and XX = Minutes of offset. Leading space characters shall not be present.",
            "The offset for UTC shall be +0000; -0000 shall not be used.",
            {
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
                                    "This encoding is the same as described in ",
                                    {
                                       "el" : "olink",
                                       "attrs" : {
                                          "targetdoc" : "PS3.5",
                                          "targetptr" : "PS3.5",
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
                           "el" : "listitem",
                           "content" : [
                              "\n                      ",
                              {
                                 "el" : "para",
                                 "content" : [
                                    "The corrected time may cross a 24 hour boundary. For example, if Local Time = 1.00 a.m. and Offset = +0200, then UTC = 11.00 p.m. (23.00) the day before."
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
         ]
      },
      "(0008,2112)[<0>](0008,1160)" : {
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3"
         ],
         "name" : "Referenced Frame Number",
         "entity" : "Image",
         "req" : "1C",
         "module" : "General Image",
         "usage" : "M",
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
      "(0040,051a)" : {
         "entity" : "Image",
         "name" : "Container Description",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "desc" : "Description of the container.",
         "usage" : "M",
         "req" : "3"
      },
      "(0048,0105)[<0>](0048,0120)[<1>](0028,1202)" : {
         "desc" : [
            "Green Palette Color Lookup Table Data. Required if segmented data is NOT used in an Image IOD, or if the IOD is a Presentation State IOD or Color Palette IOD. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.6.3.1.6",
                  "xrefstyle" : "select: label"
               }
            },
            " for further explanation."
         ],
         "usage" : "M",
         "module" : "Optical Path",
         "req" : "1C",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8.12.5-1",
            "table_C.7-22a"
         ],
         "name" : "Green Palette Color Lookup Table Data"
      },
      "(0100,0410)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "SOP Instance Status",
         "usage" : "M",
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
                     "content" : [
                        "Proper use of these flags is specified in Security Profiles. Implementations that do not conform to such Security Profiles may not necessarily handle these flags properly."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ]
            }
         ],
         "module" : "SOP Common",
         "req" : "3"
      },
      "(0040,0520)[<0>](0050,001e)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Container Component Description",
         "desc" : "Container component text description.",
         "usage" : "M",
         "module" : "Specimen",
         "req" : "3"
      },
      "(0040,0250)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "name" : "Performed Procedure Step End Date",
         "entity" : "Series",
         "req" : "3",
         "module" : "General Series",
         "usage" : "M",
         "desc" : "Date on which the Performed Procedure Step ended."
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0062,000b)" : {
         "req" : "1C",
         "module" : "Specimen",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Referenced Segment Number",
         "entity" : "Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a30a)" : {
         "entity" : "Series",
         "name" : "Numeric Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "usage" : "M",
         "module" : "General Series",
         "req" : "1C"
      },
      "(0012,0072)" : {
         "req" : "3",
         "usage" : "U",
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
         "module" : "Clinical Trial Series",
         "name" : "Clinical Trial Series Description",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "entity" : "Series"
      },
      "(0028,1202)" : {
         "req" : "1C",
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
         "usage" : "M",
         "module" : "Image Pixel",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "name" : "Green Palette Color Lookup Table Data",
         "entity" : "Image"
      },
      "(0010,0024)[<0>](0040,0032)" : {
         "entity" : "Patient",
         "name" : "Universal Entity ID",
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
         ],
         "usage" : "M",
         "module" : "Patient",
         "req" : "3"
      },
      "(2200,0005)" : {
         "req" : "2",
         "module" : "Slide Label",
         "desc" : [
            "Barcode interpreted from the scanned slide label.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "This may be the same as Container Identifier (0040,0512)."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is LABEL; may be present otherwise",
         "mod_tables" : [
            "table_C.8.12.8-1"
         ],
         "name" : "Barcode Value",
         "entity" : "Image"
      },
      "(0400,0500)" : {
         "req" : "1C",
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
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Encrypted Attributes Sequence",
         "entity" : "Image"
      },
      "(0008,1140)[<0>](0062,000b)" : {
         "entity" : "Image",
         "name" : "Referenced Segment Number",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3"
         ],
         "module" : "General Image",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "usage" : "M",
         "req" : "1C"
      },
      "(0048,0105)[<0>](0048,0108)" : {
         "desc" : [
            "Color of the illuminator.",
            "Only a single Item shall be included in this sequence.",
            "Required if Illumination Wave Length (0022,0055) is not present. May be present otherwise."
         ],
         "usage" : "M",
         "module" : "Optical Path",
         "req" : "1C",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8.12.5-1"
         ],
         "name" : "Illumination Color Code Sequence"
      },
      "(0018,a001)[<0>](0040,a170)" : {
         "req" : "1",
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
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Purpose of Reference Code Sequence",
         "entity" : "Image"
      },
      "(0038,0014)[<0>](0040,0032)" : {
         "req" : "1C",
         "module" : "Patient Study",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "name" : "Universal Entity ID",
         "entity" : "Study"
      },
      "(0008,1200)[<0>](0008,1115)" : {
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "name" : "Referenced Series Sequence",
         "entity" : "Image",
         "req" : "1",
         "usage" : "M",
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this sequence."
         ],
         "module" : "Common Instance Reference"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0008,1160)" : {
         "usage" : "M",
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
         "module" : "Specimen",
         "req" : "1C",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Referenced Frame Number"
      },
      "(0010,1002)[<0>](0010,0024)" : {
         "module" : "Patient",
         "usage" : "M",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this sequence."
         ],
         "req" : "3",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Issuer of Patient ID Qualifiers Sequence"
      },
      "(0020,9221)[<0>](0020,9164)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "name" : "Dimension Organization UID",
         "desc" : [
            "Uniquely identifies a set of dimensions referenced within the containing SOP Instance. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.6.17.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "usage" : "M",
         "module" : "Multi-frame Dimension",
         "req" : "1"
      },
      "(0008,9206)" : {
         "req" : "1",
         "module" : "Whole Slide Microscopy Image",
         "usage" : "M",
         "desc" : [
            [
               "Indication if geometric manipulations are possible with frames in the SOP Instance. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.16.2.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ],
            {
               "list" : [
                  [
                     "VOLUME",
                     "pixels represent the volume specified for the image, and may be geometrically manipulated"
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "mod_tables" : [
            "table_C.8.12.4-1"
         ],
         "name" : "Volumetric Properties",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a124)" : {
         "name" : "UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "module" : "General Series"
      },
      "(0008,0021)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Series Date",
         "entity" : "Series",
         "req" : "3",
         "module" : "General Series",
         "desc" : "Date the Series started.",
         "usage" : "M"
      },
      "(0040,0515)[<0>](0040,0513)[<1>](0040,0032)" : {
         "entity" : "Image",
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "usage" : "M",
         "module" : "Specimen",
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a040)" : {
         "req" : "1",
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
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Value Type",
         "entity" : "Series"
      },
      "(0040,0513)[<0>](0040,0031)" : {
         "entity" : "Image",
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "module" : "Specimen",
         "usage" : "M",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C"
      },
      "(0008,0016)" : {
         "req" : "1",
         "module" : "SOP Common",
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
               "attrs" : {
                  "targetptr" : "PS3.4",
                  "targetdoc" : "PS3.4",
                  "xrefstyle" : "select: labelnumber"
               },
               "el" : "olink"
            },
            "."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "SOP Class UID",
         "entity" : "Image"
      },
      "(0040,0556)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "name" : "Acquisition Context Description",
         "module" : "Acquisition Context",
         "usage" : "M",
         "desc" : "Free-text description of the image-acquisition context.",
         "req" : "3"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)" : {
         "module" : "Common Instance Reference",
         "usage" : "M",
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this sequence."
         ],
         "req" : "1",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "name" : "Referenced Instance Sequence"
      },
      "(0008,1120)[<0>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "entity" : "Patient",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M",
         "module" : "Patient"
      },
      "(0010,0040)" : {
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient's Sex",
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
         "usage" : "M",
         "module" : "Patient",
         "req" : "2"
      },
      "(0040,0520)[<0>](0008,0070)" : {
         "desc" : "Manufacturer of the container component.",
         "usage" : "M",
         "module" : "Specimen",
         "req" : "3",
         "entity" : "Image",
         "name" : "Manufacturer",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      "(0008,0110)[<0>](0008,0114)" : {
         "req" : "2C",
         "usage" : "M",
         "desc" : "The coding scheme identifier as defined in an external registry. Required if coding scheme is registered and Coding Scheme UID (0008,010C) is not present.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme External ID",
         "entity" : "Image"
      },
      "(fffa,fffa)[<0>](0400,0100)" : {
         "name" : "Digital Signature UID",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Image",
         "req" : "1",
         "module" : "SOP Common",
         "usage" : "M",
         "desc" : "A UID that can be used to uniquely reference this signature."
      },
      "(0048,0015)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8.12.4-1"
         ],
         "name" : "Recommended Absent Pixel CIELab Value",
         "desc" : [
            "A color value with which it is recommended to display the pixels of the Total Pixel Matrix that are not encoded. The units are specified in PCS-Values, and the value is encoded as CIELab. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.10.7.1.1"
               }
            },
            "."
         ],
         "usage" : "M",
         "module" : "Whole Slide Microscopy Image",
         "req" : "3"
      },
      "(0008,1049)[<0>](0008,0082)" : {
         "module" : "General Study",
         "usage" : "M",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1C",
         "entity" : "Study",
         "name" : "Institution Code Sequence",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0018,a001)[<0>](0008,0080)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Institution Name",
         "entity" : "Image",
         "req" : "3",
         "desc" : "Institution where the equipment that contributed to the composite instance is located.",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0018,a001)[<0>](0018,1201)" : {
         "name" : "Time of Last Calibration",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "req" : "3",
         "module" : "SOP Common",
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
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a120)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "DateTime",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "usage" : "M",
         "module" : "Specimen",
         "req" : "1C"
      },
      "(0012,0051)" : {
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "name" : "Clinical Trial Time Point Description",
         "entity" : "Study",
         "req" : "3",
         "module" : "Clinical Trial Study",
         "usage" : "U",
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
         ]
      },
      "(0088,0200)[<0>](0028,0010)" : {
         "desc" : "Number of rows in the image.",
         "usage" : "M",
         "module" : "General Image",
         "req" : "1",
         "entity" : "Image",
         "name" : "Rows",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ]
      },
      "(0020,4000)" : {
         "desc" : "User-defined comments about the image",
         "usage" : "M",
         "module" : "General Image",
         "req" : "3",
         "entity" : "Image",
         "name" : "Image Comments",
         "mod_tables" : [
            "table_C.7-9"
         ]
      },
      "(0008,1250)[<0>](0040,a170)" : {
         "usage" : "M",
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "Zero or more Items shall be included in this sequence.",
            "When absent, implies that the reason for the reference is unknown."
         ],
         "module" : "General Series",
         "req" : "2",
         "entity" : "Series",
         "name" : "Purpose of Reference Code Sequence",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0008,1120)" : {
         "entity" : "Patient",
         "name" : "Referenced Patient Sequence",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "usage" : "M",
         "desc" : [
            "A sequence that provides reference to a Patient SOP Class/Instance pair.",
            "Only a single Item is permitted in this Sequence."
         ],
         "req" : "3"
      },
      "(0010,0030)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient's Birth Date",
         "entity" : "Patient",
         "req" : "2",
         "module" : "Patient",
         "desc" : "Birth date of the patient.",
         "usage" : "M"
      },
      "(0038,0014)[<0>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "entity" : "Study",
         "req" : "1C",
         "module" : "Patient Study",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "usage" : "U"
      },
      "(0008,1120)[<0>](0008,1155)" : {
         "module" : "Patient",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "entity" : "Patient",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ]
      },
      "(0008,114a)[<0>](0008,1150)" : {
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "General Image",
         "req" : "1",
         "entity" : "Image",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-11"
         ]
      },
      "(0040,9096)[<0>](0040,9211)" : {
         "name" : "Real World Value Last Value Mapped",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "entity" : "Image",
         "req" : "1",
         "module" : "General Image",
         "usage" : "M",
         "desc" : [
            "Specifies the last stored value mapped for the Real Word Value Intercept (0040,9224) and Real World Value Slope (0040,9225) or Real World Value LUT (0040,9212) of this Item.",
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
         ]
      },
      "(0012,0062)" : {
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient Identity Removed",
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
         ],
         "usage" : "M",
         "module" : "Patient",
         "req" : "3"
      },
      "(0008,0060)" : [
         {
            "entity" : "Series",
            "name" : "Modality",
            "mod_tables" : [
               "table_C.7-5a"
            ],
            "module" : "General Series",
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
            "usage" : "M",
            "req" : "1"
         },
         {
            "req" : "1",
            "module" : "Whole Slide Microscopy Series",
            "usage" : "M",
            "desc" : [
               "Type of equipment that originally acquired the data used to create the images in this Series.",
               {
                  "title" : "Enumerated Values:",
                  "type" : "variablelist",
                  "list" : [
                     [
                        "SM",
                        null
                     ]
                  ]
               },
               [
                  "See ",
                  {
                     "attrs" : {
                        "linkend" : "sect_C.7.3.1.1.1",
                        "xrefstyle" : "select: label"
                     },
                     "el" : "xref"
                  },
                  " for further explanation."
               ]
            ],
            "mod_tables" : [
               "table_C.8.12.3-1"
            ],
            "name" : "Modality",
            "entity" : "Series"
         }
      ],
      "(0008,1110)[<0>](0008,1150)" : {
         "req" : "1",
         "module" : "General Study",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "entity" : "Study"
      },
      "(0038,0014)" : {
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Issuer of Admission ID Sequence",
         "module" : "Patient Study",
         "usage" : "U",
         "desc" : [
            "Identifier of the Assigning Authority that issued Admission ID (0038,0010).",
            "Only a single Item is permitted in this sequence."
         ],
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a043)" : {
         "usage" : "M",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "General Series",
         "req" : "1",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Concept Name Code Sequence"
      },
      "(0018,a001)[<0>](0008,1090)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Manufacturer's Model Name",
         "usage" : "M",
         "desc" : "Manufacturer's model name of the equipment that contributed to the composite instance.",
         "module" : "SOP Common",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "name" : "Protocol Context Sequence",
         "desc" : "Sequence that specifies the context for the Scheduled Protocol Code Sequence Item. One or more Items are permitted in this sequence.",
         "usage" : "M",
         "module" : "General Series",
         "req" : "3"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,08ea)" : {
         "entity" : "Image",
         "name" : "Measurement Units Code Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "usage" : "M",
         "req" : "1C"
      },
      "(0008,1062)[<0>](0008,0080)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Name",
         "entity" : "Study",
         "req" : "1C",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "usage" : "M",
         "module" : "General Study"
      },
      "(0008,0081)" : {
         "name" : "Institution Address",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "entity" : "Equipment",
         "req" : "3",
         "module" : "General Equipment",
         "usage" : "M",
         "desc" : "Mailing address of the institution where the equipment that produced the composite instances is located."
      },
      "(0018,5100)" : {
         "req" : "2C",
         "module" : "General Series",
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
         "name" : "Patient Position",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series"
      },
      "(0012,0030)" : {
         "name" : "Clinical Trial Site ID",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "entity" : "Patient",
         "req" : "2",
         "desc" : [
            "The identifier of the site responsible for submitting clinical trial data. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.1.3.1.4",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "usage" : "U",
         "module" : "Clinical Trial Subject"
      },
      "(0010,0024)[<0>](0040,003a)" : {
         "module" : "Patient",
         "usage" : "M",
         "desc" : [
            "The agency or department that assigned the patient identifier. Only a single Item is permitted in this sequence.",
            {
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 10 (Identifier Type Code)."
                     ]
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "req" : "3",
         "entity" : "Patient",
         "name" : "Assigning Agency or Department Code Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0008,9215)" : {
         "entity" : "Image",
         "name" : "Derivation Code Sequence",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "desc" : [
            [
               "A coded description of how this image was derived. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.1.1.3"
                  }
               },
               " for further explanation."
            ],
            "One or more Items are permitted in this Sequence. More than one Item indicates that successive derivation steps have been applied."
         ],
         "usage" : "M",
         "module" : "General Image",
         "req" : "3"
      },
      "(0008,0005)" : {
         "name" : "Specific Character Set",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "req" : "1C",
         "module" : "SOP Common",
         "usage" : "M",
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
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0062,000b)" : {
         "name" : "Referenced Segment Number",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "req" : "1C",
         "module" : "General Series",
         "usage" : "M",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ]
      },
      "(0010,1030)" : {
         "req" : "3",
         "usage" : "U",
         "desc" : "Weight of the Patient, in kilograms.",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Patient's Weight",
         "entity" : "Study"
      },
      "(0008,1115)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "name" : "Referenced Series Sequence",
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this sequence.",
            "Required if this Instance references Instances in this Study."
         ],
         "usage" : "M",
         "module" : "Common Instance Reference",
         "req" : "1C"
      },
      "(0008,1140)[<0>](0040,a170)" : {
         "req" : "3",
         "module" : "General Image",
         "usage" : "M",
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "Only a single Item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-9"
         ],
         "name" : "Purpose of Reference Code Sequence",
         "entity" : "Image"
      },
      "(0008,0030)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Study Time",
         "entity" : "Study",
         "req" : "2",
         "module" : "General Study",
         "desc" : "Time the Study started.",
         "usage" : "M"
      },
      "(0028,0010)" : {
         "req" : "1",
         "desc" : "Number of rows in the image.",
         "usage" : "M",
         "module" : "Image Pixel",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "name" : "Rows",
         "entity" : "Image"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1103)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "name" : "Person's Telephone Numbers",
         "entity" : "Image",
         "req" : "3",
         "usage" : "M",
         "desc" : "Person's telephone number(s)",
         "module" : "SOP Common"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0033)" : {
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
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
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_10.14"
                  },
                  "el" : "xref"
               },
               " for Defined Terms."
            ]
         ],
         "usage" : "M",
         "module" : "Patient",
         "req" : "1C"
      },
      "(0040,0518)" : {
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Container Type Code Sequence",
         "entity" : "Image",
         "req" : "2",
         "module" : "Specimen",
         "usage" : "M",
         "desc" : [
            "Type of container that contains the specimen(s) being imaged.",
            "Zero or one Item shall be included in this sequence."
         ]
      },
      "(0008,1062)" : {
         "req" : "3",
         "usage" : "M",
         "desc" : "Identification of the physician(s) reading the Study. One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Name of Physician(s) Reading Study (0008,1060), if present.",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Physician(s) Reading Study Identification Sequence",
         "entity" : "Study"
      },
      "(0040,a390)[<0>](0008,1155)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "module" : "SOP Common",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a120)" : {
         "module" : "Specimen",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "usage" : "M",
         "req" : "1C",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "DateTime"
      },
      "(0028,1103)" : {
         "req" : "1C",
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
         "usage" : "M",
         "module" : "Image Pixel",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "name" : "Blue Palette Color Lookup Table Descriptor",
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a160)" : {
         "req" : "1C",
         "module" : "Specimen",
         "usage" : "M",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Text Value",
         "entity" : "Image"
      },
      "(0048,0003)" : {
         "usage" : "M",
         "desc" : [
            "Depth of total imaged volume (distance in the Z direction of focal planes) in \u00b5m. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.12.4.1.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            }
         ],
         "module" : "Whole Slide Microscopy Image",
         "req" : "1",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8.12.4-1"
         ],
         "name" : "Imaged Volume Depth"
      },
      "(0008,0110)[<0>](0008,0112)" : {
         "req" : "1C",
         "module" : "SOP Common",
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
         ],
         "usage" : "M",
         "name" : "Coding Scheme Registry",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a124)" : {
         "req" : "1C",
         "module" : "Specimen",
         "usage" : "M",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "UID",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-11"
         ],
         "entity" : "Series",
         "req" : "1",
         "module" : "General Series",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a163)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Rational Denominator Value",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "usage" : "M",
         "module" : "General Series",
         "req" : "1C"
      },
      "(0008,0096)[<0>](0040,1102)" : {
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person's Address",
         "desc" : "Person's mailing address",
         "usage" : "M",
         "module" : "General Study",
         "req" : "3"
      },
      "(0018,a001)[<0>](0018,a003)" : {
         "name" : "Contribution Description",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "req" : "3",
         "usage" : "M",
         "desc" : "Description of the contribution the equipment made to the composite instance.",
         "module" : "SOP Common"
      },
      "(0040,0520)[<0>](0050,0012)" : {
         "module" : "Specimen",
         "desc" : [
            "Type of container component.",
            "Only a single Item shall be included in this sequence."
         ],
         "usage" : "M",
         "req" : "1",
         "entity" : "Image",
         "name" : "Container Component Type Code Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)" : {
         "entity" : "Series",
         "name" : "Content Item Modifier Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M",
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
         "module" : "General Series",
         "req" : "3"
      },
      "(0028,0303)" : {
         "entity" : "Image",
         "name" : "Longitudinal Temporal Information Modified",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Indicates whether or not the date and time attributes in the instance have been modified during de-identification.",
            {
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
               ],
               "type" : "variablelist"
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
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "3"
      },
      "(0008,1048)" : {
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Physician(s) of Record",
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
         "usage" : "M",
         "req" : "3"
      },
      "(0008,1030)" : {
         "usage" : "M",
         "desc" : "Institution-generated description or classification of the Study (component) performed.",
         "module" : "General Study",
         "req" : "3",
         "entity" : "Study",
         "name" : "Study Description",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0040,0560)[<0>](0040,0562)[<1>](0040,0033)" : {
         "entity" : "Image",
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7.6.22-2",
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
         ],
         "usage" : "M",
         "module" : "Specimen",
         "req" : "1C"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a121)" : {
         "entity" : "Series",
         "name" : "Date",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "module" : "General Series",
         "req" : "1C"
      },
      "(fffa,fffa)[<0>](0400,0305)" : {
         "entity" : "Image",
         "name" : "Certified Timestamp Type",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "usage" : "M",
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
               "content" : [
                  "\n                      ",
                  {
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
               ],
               "el" : "note"
            }
         ],
         "req" : "1C"
      },
      "(0018,1030)" : {
         "req" : "3",
         "desc" : [
            "User-defined description of the conditions under which the Series was performed.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "This attribute conveys series-specific protocol identification and may or may not be identical to the one presented in the Performed Protocol Code Sequence (0040,0260)."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Protocol Name",
         "entity" : "Series"
      },
      "(0028,1201)" : {
         "entity" : "Image",
         "name" : "Red Palette Color Lookup Table Data",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "usage" : "M",
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
         "module" : "Image Pixel",
         "req" : "1C"
      },
      "(0012,0083)" : {
         "entity" : "Study",
         "name" : "Consent for Clinical Trial Use Sequence",
         "mod_tables" : [
            "table_C.7-4b"
         ],
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
         "usage" : "U",
         "module" : "Clinical Trial Study",
         "req" : "3"
      },
      "(0010,2180)" : {
         "name" : "Occupation",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "entity" : "Study",
         "req" : "3",
         "usage" : "U",
         "desc" : "Occupation of the Patient.",
         "module" : "Patient Study"
      },
      "(0400,0500)[<0>](0400,0520)" : {
         "name" : "Encrypted Content",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
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
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a043)" : {
         "name" : "Concept Name Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "req" : "1",
         "module" : "General Series",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "M"
      },
      "(0048,0105)[<0>](0022,0017)" : {
         "req" : "3",
         "module" : "Optical Path",
         "desc" : [
            "Filters used in the light source (excitation) path.",
            "One or more Items are permitted in this sequence.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.12.5.1.3",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.12.5-1"
         ],
         "name" : "Light Path Filter Type Stack Code Sequence",
         "entity" : "Image"
      },
      "(0008,0096)[<0>](0008,0082)" : {
         "entity" : "Study",
         "name" : "Institution Code Sequence",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "General Study",
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a163)" : {
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "usage" : "M",
         "module" : "General Series",
         "req" : "1C",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Rational Denominator Value"
      },
      "(0008,114a)" : {
         "module" : "General Image",
         "usage" : "M",
         "desc" : [
            "Non-image composite SOP Instances that are significantly related to this Image, including waveforms that may or may not be temporally synchronized with this image.",
            "One or more Items are permitted in this sequence."
         ],
         "req" : "3",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "name" : "Referenced Instance Sequence"
      },
      "(0010,1001)" : {
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Other Patient Names",
         "module" : "Patient",
         "desc" : "Other names used to identify the patient.",
         "usage" : "M",
         "req" : "3"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "usage" : "M",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "module" : "Patient",
         "req" : "1C",
         "entity" : "Patient",
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a121)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Date",
         "module" : "Specimen",
         "usage" : "M",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "req" : "1C"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a160)" : {
         "req" : "1C",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Text Value",
         "entity" : "Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1155)" : {
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "General Series",
         "req" : "1",
         "entity" : "Series",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(0038,0062)" : {
         "module" : "Patient Study",
         "desc" : "Description of the type of service episode.",
         "usage" : "U",
         "req" : "3",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Service Episode Description"
      },
      "(0008,0013)" : {
         "req" : "3",
         "module" : "SOP Common",
         "desc" : [
            "Time the SOP Instance was created.",
            "This is the time that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Instance Creation Time",
         "entity" : "Image"
      },
      "(0088,0200)[<0>](0028,0006)" : {
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
         "usage" : "M",
         "module" : "General Image",
         "req" : "1C",
         "entity" : "Image",
         "name" : "Planar Configuration",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ]
      },
      "(0048,0105)[<0>](0048,0120)[<1>](0028,1201)" : {
         "module" : "Optical Path",
         "usage" : "M",
         "desc" : [
            "Red Palette Color Lookup Table Data. Required if segmented data is NOT used in an Image IOD, or if the IOD is a Presentation State IOD or Color Palette IOD. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.3.1.6"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "req" : "1C",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8.12.5-1",
            "table_C.7-22a"
         ],
         "name" : "Red Palette Color Lookup Table Data"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0062,000b)" : {
         "req" : "1C",
         "module" : "General Series",
         "usage" : "M",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Referenced Segment Number",
         "entity" : "Series"
      },
      "(0008,1140)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "name" : "Referenced Image Sequence",
         "module" : "General Image",
         "desc" : [
            "Other images significantly related to this image (e.g., post-localizer CT image or Mammographic biopsy or partial view images).",
            "One or more Items are permitted in this sequence."
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0088,0200)[<0>](0028,1202)" : {
         "entity" : "Image",
         "name" : "Green Palette Color Lookup Table Data",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image",
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
         "usage" : "M",
         "req" : "1C"
      },
      "(0088,0200)[<0>](0028,0106)" : {
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "name" : "Smallest Image Pixel Value",
         "entity" : "Image",
         "req" : "3",
         "usage" : "M",
         "desc" : "The minimum actual pixel value encountered in this image.",
         "module" : "General Image"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0008,1155)" : {
         "entity" : "Image",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "Specimen",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "M",
         "req" : "1"
      },
      "(0040,0555)[<0>](0040,08ea)" : {
         "entity" : "Image",
         "name" : "Measurement Units Code Sequence",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "usage" : "M",
         "desc" : [
            "Units of measurement.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Numeric Value (0040,A30A) is sent. Shall not be present otherwise."
         ],
         "module" : "Acquisition Context",
         "req" : "1C"
      },
      "(0008,2112)[<0>](0040,a170)" : {
         "name" : "Purpose of Reference Code Sequence",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "entity" : "Image",
         "req" : "3",
         "module" : "General Image",
         "usage" : "M",
         "desc" : [
            "Describes the purpose for which the reference is made, that is what role the source image or frame(s) played in the derivation of this image.",
            "Only a single Item is permitted in this sequence."
         ]
      },
      "(0008,2112)" : {
         "entity" : "Image",
         "name" : "Source Image Sequence",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image",
         "usage" : "M",
         "desc" : [
            "The set of Image SOP Class/Instance pairs of the Images that were used to derive this Image.",
            "One or more Items are permitted in this Sequence.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.1.1.4"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "req" : "3"
      },
      "(0040,0275)[<0>](0032,1060)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "name" : "Requested Procedure Description",
         "entity" : "Series",
         "req" : "3",
         "usage" : "M",
         "desc" : "Institution-generated administrative description or classification of Requested Procedure.",
         "module" : "General Series"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "entity" : "Patient",
         "req" : "1C",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "usage" : "M",
         "module" : "Patient"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a124)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "UID",
         "module" : "Specimen",
         "usage" : "M",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "req" : "1C"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)" : {
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "module" : "Specimen",
         "name" : "Referenced SOP Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "entity" : "Image"
      },
      "(0008,002a)" : [
         {
            "entity" : "Image",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "name" : "Acquisition DateTime",
            "module" : "General Image",
            "usage" : "M",
            "desc" : [
               "The date and time that the acquisition of data that resulted in this image started.",
               {
                  "el" : "note",
                  "content" : [
                     "\n                    ",
                     {
                        "el" : "para",
                        "content" : [
                           "The synchronization of this time with an external clock is specified in the Synchronization Module in Acquisition Time Synchronized (0018,1800)."
                        ]
                     },
                     "\n                  "
                  ]
               }
            ],
            "req" : "3"
         },
         {
            "req" : "1",
            "module" : "Whole Slide Microscopy Image",
            "desc" : "The date and time that the acquisition of data that resulted in this image started.",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8.12.4-1"
            ],
            "name" : "Acquisition DateTime",
            "entity" : "Image"
         }
      ],
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a162)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Rational Numerator Value",
         "module" : "Specimen",
         "usage" : "M",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "req" : "1C"
      },
      "(0008,1140)[<0>](0008,1150)" : {
         "entity" : "Image",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M",
         "module" : "General Image",
         "req" : "1"
      },
      "(0040,a390)[<0>](0040,e010)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Retrieve URI",
         "entity" : "Image",
         "req" : "3",
         "desc" : "Retrieval access path to HL7 Structured Document. Includes fully specified scheme, authority, path, and query in accordance with RFC 2396",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0031)" : {
         "req" : "1C",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "name" : "Local Namespace Entity ID",
         "entity" : "Series"
      },
      "(0400,0561)[<0>](0400,0565)" : {
         "name" : "Reason for the Attribute Modification",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "req" : "1",
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
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0010,0024)[<0>](0040,0036)" : {
         "module" : "Patient",
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
         "usage" : "M",
         "req" : "3",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Assigning Facility Sequence"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a120)" : {
         "module" : "General Series",
         "usage" : "M",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "req" : "1C",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "DateTime"
      },
      "(0028,0302)" : {
         "name" : "Recognizable Visual Features",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "entity" : "Image",
         "req" : "3",
         "module" : "General Image",
         "desc" : [
            "Indicates whether or not the image contains sufficiently recognizable visual features to allow the image or a reconstruction from a set of images to identify the patient.",
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
            "If this Attribute is absent, then the image may or may not contain recognizable visual features."
         ],
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0082)" : {
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "SOP Common",
         "name" : "Institution Code Sequence",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "entity" : "Image"
      },
      "(0400,0500)[<0>](0400,0510)" : {
         "name" : "Encrypted Content Transfer Syntax UID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "req" : "1",
         "module" : "SOP Common",
         "usage" : "M",
         "desc" : "Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used."
      },
      "(0012,0021)" : {
         "name" : "Clinical Trial Protocol Name",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "entity" : "Patient",
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
         "module" : "Clinical Trial Subject"
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
                     "linkend" : "sect_10.6.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "usage" : "M",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Referenced Study Sequence",
         "entity" : "Study"
      },
      "(0008,1250)" : {
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
                     "content" : [
                        "\n                      ",
                        {
                           "el" : "listitem",
                           "content" : [
                              "\n                        ",
                              {
                                 "content" : [
                                    "For example, for a combined CT and PET acquisition, the CT images and PET images would be in separate series that could cross-reference each other with multiple purpose of reference codes meaning same anatomy, simultaneously acquired and same indication."
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
                                    "The related series may have different Frames of Reference and hence require some sort of registration before spatial coordinates can be directly compared."
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
                                    "This attribute is not intended for conveying localizer reference information, for which Referenced Image Sequence (0008,1140) should be used."
                                 ],
                                 "el" : "para"
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
         "usage" : "M",
         "module" : "General Series",
         "req" : "3",
         "entity" : "Series",
         "name" : "Related Series Sequence",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0028,0102)" : [
         {
            "entity" : "Image",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "name" : "High Bit",
            "desc" : [
               "Most significant bit for pixel sample data. Each sample shall have the same high bit. See ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "xrefstyle" : "select: labelnumber",
                     "targetdoc" : "PS3.5",
                     "targetptr" : "PS3.5"
                  }
               },
               " for further explanation."
            ],
            "usage" : "M",
            "module" : "Image Pixel",
            "req" : "1"
         },
         {
            "entity" : "Image",
            "name" : "High Bit",
            "mod_tables" : [
               "table_C.8.12.4-1"
            ],
            "module" : "Whole Slide Microscopy Image",
            "usage" : "M",
            "desc" : [
               "Most significant bit for pixel sample data.",
               {
                  "title" : "Enumerated Values:",
                  "list" : [
                     [
                        "7",
                        null
                     ],
                     [
                        "15",
                        null
                     ]
                  ],
                  "type" : "variablelist"
               }
            ],
            "req" : "1"
         }
      ],
      "(0008,0096)[<0>](0040,1101)" : {
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person Identification Code Sequence",
         "usage" : "M",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "General Study",
         "req" : "1"
      },
      "(0008,1072)" : {
         "entity" : "Series",
         "name" : "Operator Identification Sequence",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "desc" : [
            "Identification of the operator(s) supporting the Series.",
            "One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Operators' Name (0008,1070), if present."
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0010,0024)" : {
         "entity" : "Patient",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this sequence."
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0010,2297)" : {
         "req" : "2C",
         "module" : "Patient",
         "desc" : [
            "Name of person with medical decision making authority for the patient.",
            "Required if the patient is an animal. May be present otherwise."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Responsible Person",
         "entity" : "Patient"
      },
      "(0008,1115)[<0>](0020,000e)" : {
         "name" : "Series Instance UID",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "entity" : "Image",
         "req" : "1",
         "module" : "Common Instance Reference",
         "usage" : "M",
         "desc" : "Unique identifier of the Series containing the referenced Instances."
      },
      "(fffa,fffa)[<0>](0400,0120)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Signature",
         "entity" : "Image",
         "req" : "1",
         "usage" : "M",
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
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.12.1.1.3.1.2"
               }
            },
            "."
         ],
         "module" : "SOP Common"
      },
      "(0008,1062)[<0>](0040,1103)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person's Telephone Numbers",
         "entity" : "Study",
         "req" : "3",
         "module" : "General Study",
         "usage" : "M",
         "desc" : "Person's telephone number(s)"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)" : {
         "name" : "Content Item Modifier Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "entity" : "Series",
         "req" : "3",
         "module" : "General Series",
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
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a168)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Concept Code Sequence",
         "module" : "Specimen",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "usage" : "M",
         "req" : "1C"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M",
         "module" : "Common Instance Reference",
         "req" : "1",
         "entity" : "Image",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a120)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "DateTime",
         "usage" : "M",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "module" : "General Series",
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a121)" : {
         "req" : "1C",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Date",
         "entity" : "Series"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a040)" : {
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
         "module" : "Specimen",
         "req" : "1",
         "entity" : "Image",
         "name" : "Value Type",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0048,0008)[<0>](0040,072a)" : {
         "desc" : "The X offset in millimeters from the Origin of the Slide Coordinate System.",
         "usage" : "M",
         "module" : "Whole Slide Microscopy Image",
         "req" : "1",
         "entity" : "Image",
         "name" : "X Offset in Slide Coordinate System",
         "mod_tables" : [
            "table_C.8.12.4-1"
         ]
      },
      "(0040,1012)" : {
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Reason For Performed Procedure Code Sequence",
         "usage" : "M",
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
         "req" : "3"
      },
      "(0048,0200)[<0>](0008,1155)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8.12.7-1",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "module" : "Multi-Resolution Navigation",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is LOCALIZER",
         "req" : "1"
      },
      "(0048,0105)[<0>](0048,0112)" : {
         "entity" : "Image",
         "name" : "Objective Lens Power",
         "mod_tables" : [
            "table_C.8.12.5-1"
         ],
         "module" : "Optical Path",
         "usage" : "M",
         "desc" : "Nominal power of the objective lens. If a single lens is used as both condenser and objective, its power is specified in this attribute.",
         "req" : "3"
      },
      "(0020,0020)" : {
         "name" : "Patient Orientation",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "entity" : "Image",
         "req" : "2C",
         "module" : "General Image",
         "desc" : [
            [
               "Patient direction of the rows and columns of the image. Required if image does not require Image Orientation (Patient) (0020,0037) and Image Position (Patient) (0020,0032). May be present otherwise. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.6.1.1.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "IODs may have attributes other than Patient Orientation, Image Orientation, or Image Position (Patient) to describe orientation in which case this attribute will be zero length."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "usage" : "M"
      },
      "(0048,0105)[<0>](0048,0111)" : {
         "entity" : "Image",
         "name" : "Condenser Lens Power",
         "mod_tables" : [
            "table_C.8.12.5-1"
         ],
         "usage" : "M",
         "desc" : "Nominal power of the condenser lens",
         "module" : "Optical Path",
         "req" : "3"
      },
      "(0048,0102)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8.12.4-1"
         ],
         "name" : "Image Orientation (Slide)",
         "module" : "Whole Slide Microscopy Image",
         "desc" : [
            "The direction cosines of the first row and the first column of the total pixel matrix with respect to the Slide Coordinate System Frame of Reference. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.12.4.1.4"
               },
               "el" : "xref"
            }
         ],
         "usage" : "M",
         "req" : "1"
      },
      "(0048,0105)[<0>](0022,0018)" : {
         "req" : "3",
         "desc" : [
            "Describes stack of filters used in image (emission) path between the imaging target and the optical sensor.",
            "One or more items are permitted in this sequence.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.12.5.1.3"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "usage" : "M",
         "module" : "Optical Path",
         "name" : "Image Path Filter Type Stack Code Sequence",
         "mod_tables" : [
            "table_C.8.12.5-1"
         ],
         "entity" : "Image"
      },
      "(0040,0244)" : {
         "req" : "3",
         "usage" : "M",
         "desc" : "Date on which the Performed Procedure Step started.",
         "module" : "General Series",
         "name" : "Performed Procedure Step Start Date",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "entity" : "Series"
      },
      "(0040,0560)[<0>](0040,0562)[<1>](0040,0032)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "name" : "Universal Entity ID",
         "entity" : "Image",
         "req" : "1C",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "usage" : "M",
         "module" : "Specimen"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0020,000e)" : {
         "name" : "Series Instance UID",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "entity" : "Image",
         "req" : "1",
         "usage" : "M",
         "desc" : "Unique identifier of the Series containing the referenced Instances.",
         "module" : "Common Instance Reference"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0062,000b)" : {
         "module" : "General Series",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Referenced Segment Number"
      },
      "(0040,0555)[<0>](0040,a136)" : {
         "req" : "1C",
         "module" : "Acquisition Context",
         "desc" : [
            "References one or more frames in a Multi-frame SOP Instance. The first frame shall be denoted as frame number one.",
            "Required if this SOP Instance is a Multi-frame SOP Instance and the values in this sequence item do not apply to all frames."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "name" : "Referenced Frame Numbers",
         "entity" : "Image"
      },
      "(0008,0032)" : {
         "mod_tables" : [
            "table_C.7-9"
         ],
         "name" : "Acquisition Time",
         "entity" : "Image",
         "req" : "3",
         "module" : "General Image",
         "desc" : "The time the acquisition of data that resulted in this image started",
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a040)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Value Type",
         "entity" : "Image",
         "req" : "1",
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
         "usage" : "M",
         "module" : "Specimen"
      },
      "(0028,0101)" : [
         {
            "entity" : "Image",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "name" : "Bits Stored",
            "module" : "Image Pixel",
            "desc" : [
               "Number of bits stored for each pixel sample. Each sample shall have the same number of bits stored. See ",
               {
                  "attrs" : {
                     "targetptr" : "PS3.5",
                     "targetdoc" : "PS3.5",
                     "xrefstyle" : "select: labelnumber"
                  },
                  "el" : "olink"
               },
               " for further explanation."
            ],
            "usage" : "M",
            "req" : "1"
         },
         {
            "entity" : "Image",
            "name" : "Bits Stored",
            "mod_tables" : [
               "table_C.8.12.4-1"
            ],
            "module" : "Whole Slide Microscopy Image",
            "desc" : [
               "Number of bits stored for each pixel sample.",
               {
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
                  ],
                  "type" : "variablelist"
               }
            ],
            "usage" : "M",
            "req" : "1"
         }
      ],
      "(0008,0014)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Instance Creator UID",
         "entity" : "Image",
         "req" : "3",
         "module" : "SOP Common",
         "desc" : "Uniquely identifies device that created the SOP Instance.",
         "usage" : "M"
      },
      "(0008,1164)" : {
         "name" : "Frame Extraction Sequence",
         "mod_tables" : [
            "table_C.12-9"
         ],
         "entity" : "Image",
         "req" : "1",
         "module" : "Frame Extraction",
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "desc" : [
            "Sequence containing details of how this SOP Instance was extracted from a source multi-frame SOP Instance.",
            "If this instance was created from an instance that contains a Frame Extraction Sequence, then this sequence shall contain all of the items from the parent's Frame Extraction Sequence and a new item that describes this extraction.",
            "One or more Items shall be included in this sequence."
         ]
      },
      "(0040,0280)" : {
         "module" : "General Series",
         "usage" : "M",
         "desc" : "User-defined comments on the Performed Procedure Step.",
         "req" : "3",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "name" : "Comments on the Performed Procedure Step"
      },
      "(0048,0105)[<0>](0048,0120)[<1>](0028,1102)" : {
         "name" : "Green Palette Color Lookup Table Descriptor",
         "mod_tables" : [
            "table_C.8.12.5-1",
            "table_C.7-22a"
         ],
         "entity" : "Image",
         "req" : "1",
         "usage" : "M",
         "desc" : [
            "Specifies the format of the Green Palette Color Lookup Table Data (0028,1202). See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.3.1.5"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "module" : "Optical Path"
      },
      "(4ffe,0001)[<0>](0400,0020)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
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
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "1"
      },
      "(0008,0015)" : {
         "req" : "3",
         "module" : "SOP Common",
         "usage" : "M",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Instance Coercion DateTime",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a162)" : {
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "usage" : "M",
         "module" : "General Series",
         "req" : "1C",
         "entity" : "Series",
         "name" : "Rational Numerator Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0048,0105)[<0>](0022,0003)" : {
         "entity" : "Image",
         "name" : "Image Path Filter Pass-Through Wavelength",
         "mod_tables" : [
            "table_C.8.12.5-1"
         ],
         "module" : "Optical Path",
         "usage" : "M",
         "desc" : "Nominal pass-through wavelength of image path filter(s) in nm",
         "req" : "3"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)" : {
         "entity" : "Image",
         "name" : "Specimen Preparation Step Content Item Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "usage" : "M",
         "desc" : [
            "Sequence of Content Items identifying the processes used in one preparation step to prepare the specimen for image acquisition.",
            "One or more Items shall be included in this sequence."
         ],
         "req" : "1"
      },
      "(0028,0108)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Smallest Pixel Value in Series",
         "module" : "General Series",
         "usage" : "M",
         "desc" : "The minimum value of all images in this Series.",
         "req" : "3"
      },
      "(fffa,fffa)[<0>](0400,0110)" : {
         "req" : "1",
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
               "el" : "note",
               "content" : [
                  "\n                      ",
                  {
                     "content" : [
                        "Digital Signature Security Profiles (see ",
                        {
                           "el" : "olink",
                           "attrs" : {
                              "targetptr" : "PS3.15",
                              "targetdoc" : "PS3.15",
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
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Certificate Type",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Image"
      },
      "(0088,0200)[<0>](0028,0002)" : {
         "entity" : "Image",
         "name" : "Samples per Pixel",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image",
         "usage" : "M",
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
         "req" : "1"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a123)" : {
         "req" : "1C",
         "module" : "General Series",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Person Name",
         "entity" : "Series"
      },
      "(0018,a001)[<0>](0008,1010)" : {
         "req" : "3",
         "usage" : "M",
         "desc" : "User defined name identifying the machine that contributed to the composite instance.",
         "module" : "SOP Common",
         "name" : "Station Name",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image"
      },
      "(0040,0515)" : {
         "name" : "Alternate Container Identifier Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "entity" : "Image",
         "req" : "3",
         "usage" : "M",
         "desc" : "Sequence of alternate identifiers for the container that contains the specimen(s) being imaged. These may have been assigned, e.g., by the manufacturer, or by another institution that collected the specimen. One or more Items are permitted in this sequence.",
         "module" : "Specimen"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "entity" : "Patient",
         "req" : "1C",
         "module" : "Patient",
         "usage" : "M",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise."
      },
      "(0008,1049)[<0>](0008,0081)" : {
         "req" : "3",
         "module" : "General Study",
         "usage" : "M",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Address",
         "entity" : "Study"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0033)" : {
         "module" : "General Series",
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
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "name" : "Universal Entity ID Type"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a30a)" : {
         "entity" : "Series",
         "name" : "Numeric Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "usage" : "M",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "req" : "1C"
      },
      "(0010,1021)" : {
         "req" : "3",
         "desc" : [
            "Patient's size category code",
            "One or more Items are permitted in this sequence."
         ],
         "usage" : "U",
         "module" : "Patient Study",
         "name" : "Patient's Size Code Sequence",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "entity" : "Study"
      },
      "(0048,0010)" : {
         "module" : "Whole Slide Microscopy Image",
         "usage" : "M",
         "desc" : [
            "Indicates whether the specimen label is captured in the image.",
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
         "entity" : "Image",
         "name" : "Specimen Label in Image",
         "mod_tables" : [
            "table_C.8.12.4-1"
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0080)" : {
         "req" : "1C",
         "usage" : "M",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "module" : "SOP Common",
         "name" : "Institution Name",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "entity" : "Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a122)" : {
         "req" : "1C",
         "module" : "General Series",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "usage" : "M",
         "name" : "Time",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series"
      },
      "(0028,0100)" : [
         {
            "req" : "1",
            "usage" : "M",
            "desc" : [
               "Number of bits allocated for each pixel sample. Each sample shall have the same number of bits allocated. See ",
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
            "module" : "Image Pixel",
            "name" : "Bits Allocated",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "entity" : "Image"
         },
         {
            "req" : "1",
            "desc" : [
               "Number of bits allocated for each pixel sample.",
               {
                  "title" : "Enumerated Values:",
                  "type" : "variablelist",
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
            "usage" : "M",
            "module" : "Whole Slide Microscopy Image",
            "name" : "Bits Allocated",
            "mod_tables" : [
               "table_C.8.12.4-1"
            ],
            "entity" : "Image"
         }
      ],
      "(0012,0082)" : {
         "module" : "Clinical Trial Subject",
         "usage" : "U",
         "desc" : "Approval number issued by committee described in Clinical Trial Protocol Ethics Committee Name (0012,0081).",
         "req" : "3",
         "entity" : "Patient",
         "name" : "Clinical Trial Protocol Ethics Committee Approval Number",
         "mod_tables" : [
            "table_C.7-2b"
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a122)" : {
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "module" : "Specimen",
         "name" : "Time",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "entity" : "Image"
      },
      "(0010,2298)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Responsible Person Role",
         "entity" : "Patient",
         "req" : "1C",
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
         "module" : "Patient"
      },
      "(0008,0070)" : [
         {
            "entity" : "Equipment",
            "mod_tables" : [
               "table_C.7-8"
            ],
            "name" : "Manufacturer",
            "module" : "General Equipment",
            "desc" : "Manufacturer of the equipment that produced the composite instances.",
            "usage" : "M",
            "req" : "2"
         },
         {
            "entity" : "Equipment",
            "mod_tables" : [
               "table_C.7-8b"
            ],
            "name" : "Manufacturer",
            "desc" : "Manufacturer of the equipment that produced the composite instances.",
            "usage" : "M",
            "module" : "Enhanced General Equipment",
            "req" : "1"
         }
      ],
      "(0008,1072)[<0>](0008,0080)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "name" : "Institution Name",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "usage" : "M",
         "module" : "General Series",
         "req" : "1C"
      },
      "(0020,9172)[<0>](0062,000b)" : {
         "entity" : "Image",
         "name" : "Referenced Segment Number",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "1C"
      },
      "(0040,a390)" : {
         "name" : "HL7 Structured Document Reference Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "Sequence of items defining mapping between HL7 Instance Identifiers of unencapsulated HL7 Structured Documents referenced from the current SOP Instance as if they were DICOM Composite SOP Class Instances defined by SOP Class and Instance UID pairs. May also define a means of accessing the Documents.",
            "One or more Items shall be included in this sequence.",
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
      "(0088,0200)[<0>](0028,0102)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "name" : "High Bit",
         "module" : "General Image",
         "usage" : "M",
         "desc" : [
            "Most significant bit for pixel sample data. Each sample shall have the same high bit. See ",
            {
               "attrs" : {
                  "targetdoc" : "PS3.5",
                  "targetptr" : "PS3.5",
                  "xrefstyle" : "select: labelnumber"
               },
               "el" : "olink"
            },
            " for further explanation."
         ],
         "req" : "1"
      },
      "(0020,9172)[<0>](0008,1155)" : {
         "entity" : "Image",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "1"
      },
      "(0010,0021)" : {
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
                     "el" : "para"
                  },
                  "\n              "
               ]
            }
         ],
         "usage" : "M",
         "req" : "3",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Issuer of Patient ID"
      },
      "(0040,0275)[<0>](0040,1002)" : {
         "entity" : "Series",
         "name" : "Reason for the Requested Procedure",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "module" : "General Series",
         "usage" : "M",
         "desc" : "Reason for requesting this procedure.",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1150)" : {
         "req" : "1",
         "module" : "General Series",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "entity" : "Series"
      },
      "(0400,0561)[<0>](0400,0564)" : {
         "req" : "2",
         "usage" : "M",
         "desc" : "The source that provided the SOP Instance prior to the removal or replacement of the values. For example, this might be the Institution from which imported SOP Instances were received.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Source of Previous Values",
         "entity" : "Image"
      },
      "(0020,9221)" : {
         "module" : "Multi-frame Dimension",
         "usage" : "M",
         "desc" : [
            [
               "Sequence that lists the Dimension Organization UIDs referenced by the containing SOP Instance. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.17.2",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ],
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "name" : "Dimension Organization Sequence"
      },
      "(0048,0105)[<0>](0022,001a)" : {
         "mod_tables" : [
            "table_C.8.12.5-1"
         ],
         "name" : "Channel Description Code Sequence",
         "entity" : "Image",
         "req" : "1C",
         "desc" : [
            "Describes the light color sensed for each channel to generate the image.",
            "Required if this differs from the natural interpretation.",
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
                                 "content" : [
                                    "For MONOCHROME2, the natural interpretation is the full visible light spectrum. A full spectrum sensor may be presented with light of only a single color based on illumination and filters."
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
                                    "Equipment may use a color Photometric Interpretation (RGB, YBR) as a container representing up to 3 channels of any detected wavelength."
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
            },
            "Shall have the same number of Items as the value of Samples per Pixel Used (0028,0003) if present, or otherwise the value of Samples per Pixel (0028,0002). The channels shall be described in the order in which the channels are encoded."
         ],
         "usage" : "M",
         "module" : "Optical Path"
      },
      "(0040,0520)[<0>](0050,001c)" : {
         "module" : "Specimen",
         "usage" : "M",
         "desc" : "Length in mm of container component.",
         "req" : "3",
         "entity" : "Image",
         "name" : "Container Component Length",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      "(0010,0024)[<0>](0040,0039)" : {
         "name" : "Assigning Jurisdiction Code Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "req" : "3",
         "module" : "Patient",
         "usage" : "M",
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
         ]
      },
      "(0028,1101)" : {
         "entity" : "Image",
         "name" : "Red Palette Color Lookup Table Descriptor",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "usage" : "M",
         "desc" : [
            "Specifies the format of the Red Palette Color Lookup Table Data (0028,1201). Required if Photometric Interpretation (0028,0004) has a value of PALETTE COLOR or Pixel Presentation (0008,9205) at the image level equals COLOR or MIXED. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.3.1.5"
               }
            },
            " for further explanation."
         ],
         "module" : "Image Pixel",
         "req" : "1C"
      },
      "(0010,2294)[<0>](0010,2295)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Breed Registration Number",
         "entity" : "Patient",
         "req" : "1",
         "module" : "Patient",
         "desc" : "Identification number of an animal within the registry.",
         "usage" : "M"
      },
      "(0040,0555)[<0>](0040,a163)" : {
         "module" : "Acquisition Context",
         "usage" : "M",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "req" : "1C",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "name" : "Rational Denominator Value"
      },
      "(0008,1049)[<0>](0040,1101)" : {
         "name" : "Person Identification Code Sequence",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "req" : "1",
         "module" : "General Study",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "usage" : "M"
      },
      "(0038,0064)[<0>](0040,0031)" : {
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "usage" : "U",
         "module" : "Patient Study",
         "req" : "1C",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "name" : "Local Namespace Entity ID"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a043)" : {
         "entity" : "Series",
         "name" : "Concept Name Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "usage" : "M",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1"
      },
      "(0008,001b)" : {
         "entity" : "Image",
         "name" : "Original Specialized SOP Class UID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
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
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a122)" : {
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "usage" : "M",
         "module" : "General Series",
         "req" : "1C",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Time"
      },
      "(0040,0520)[<0>](0050,001a)" : {
         "name" : "Container Component Material",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "entity" : "Image",
         "req" : "3",
         "module" : "Specimen",
         "usage" : "M",
         "desc" : [
            "Material of container component.",
            {
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
               ],
               "type" : "variablelist",
               "title" : "Defined Terms:"
            }
         ]
      },
      "(0008,1060)" : {
         "name" : "Name of Physician(s) Reading Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "req" : "3",
         "desc" : "Names of the physician(s) reading the Study.",
         "usage" : "M",
         "module" : "General Study"
      },
      "(0400,0561)[<0>](0400,0550)" : {
         "req" : "1",
         "desc" : [
            "Sequence that contains all the Attributes, with their previous values, that were modified or removed from the main data set.",
            "Only a single Item shall be included in this sequence."
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Modified Attributes Sequence",
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ],
         "entity" : "Image",
         "req" : "1",
         "module" : "Specimen",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "M"
      },
      "(0008,1111)[<0>](0008,1150)" : [
         {
            "req" : "1",
            "usage" : "M",
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "module" : "General Series",
            "name" : "Referenced SOP Class UID",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-11"
            ],
            "entity" : "Series"
         },
         {
            "name" : "Referenced SOP Class UID",
            "mod_tables" : [
               "table_C.8.12.3-1",
               "table_10-11"
            ],
            "entity" : "Series",
            "req" : "1",
            "module" : "Whole Slide Microscopy Series",
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "usage" : "M"
         }
      ],
      "(7fe0,0010)" : {
         "module" : "Image Pixel",
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
         "usage" : "M",
         "req" : "1C",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "name" : "Pixel Data"
      },
      "(0008,0080)" : {
         "req" : "3",
         "desc" : "Institution where the equipment that produced the composite instances is located.",
         "usage" : "M",
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Institution Name",
         "entity" : "Equipment"
      },
      "(0040,0275)[<0>](0040,0009)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "name" : "Scheduled Procedure Step ID",
         "entity" : "Series",
         "req" : "1C",
         "module" : "General Series",
         "usage" : "M",
         "desc" : [
            "Identifier that identifies the Scheduled Procedure Step.",
            "Required if procedure was scheduled.",
            {
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
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
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1150)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M",
         "module" : "General Series",
         "req" : "1"
      },
      "(0020,0060)" : {
         "req" : "2C",
         "desc" : [
            "Laterality of (paired) body part examined. Required if the body part examined is a paired structure and Image Laterality (0020,0062) or Frame Laterality (0020,9072) are not sent.",
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
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "usage" : "M",
         "module" : "General Series",
         "name" : "Laterality",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series"
      },
      "(0028,1203)" : {
         "req" : "1C",
         "module" : "Image Pixel",
         "usage" : "M",
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
         "name" : "Blue Palette Color Lookup Table Data",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "entity" : "Image"
      },
      "(0048,0200)[<0>](0040,074a)" : {
         "req" : "1",
         "module" : "Multi-Resolution Navigation",
         "desc" : "The Z offset of the referenced frame from the Slide Coordinates System reference plane, in microns",
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is LOCALIZER",
         "mod_tables" : [
            "table_C.8.12.7-1"
         ],
         "name" : "Z Offset in Slide Coordinate System",
         "entity" : "Image"
      },
      "(0010,0020)" : {
         "module" : "Patient",
         "desc" : "Primary hospital identification number or code for the patient.",
         "usage" : "M",
         "req" : "2",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient ID"
      },
      "(0010,1002)[<0>](0010,0021)" : {
         "entity" : "Patient",
         "name" : "Issuer of Patient ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
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
         "req" : "3"
      },
      "(0008,2112)[<0>](0062,000b)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3"
         ],
         "name" : "Referenced Segment Number",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "usage" : "M",
         "module" : "General Image",
         "req" : "1C"
      },
      "(0040,0560)[<0>](0040,0610)" : {
         "name" : "Specimen Preparation Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "entity" : "Image",
         "req" : "2",
         "module" : "Specimen",
         "desc" : [
            "Sequence of Items identifying the process steps used to prepare the specimen for image acquisition. This includes description of all processing necessary to interpret the image.",
            "Zero or more Items shall be included in this sequence.",
            "This Sequence includes description of the specimen sampling step from an ancestor specimen, potentially back to the original part collection.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.22.1.3"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "usage" : "M"
      },
      "(0038,0014)[<0>](0040,0033)" : {
         "req" : "1C",
         "module" : "Patient Study",
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
         "usage" : "U",
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "entity" : "Study"
      },
      "(0008,1052)[<0>](0040,1103)" : {
         "req" : "3",
         "module" : "General Series",
         "usage" : "M",
         "desc" : "Person's telephone number(s)",
         "name" : "Person's Telephone Numbers",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "entity" : "Series"
      },
      "(0040,0560)[<0>](0040,0562)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Issuer of the Specimen Identifier Sequence",
         "desc" : [
            "The name or code for the institution that has assigned the Specimen Identifier.",
            "Zero or one Item shall be included in this sequence."
         ],
         "usage" : "M",
         "module" : "Specimen",
         "req" : "2"
      },
      "(0040,0512)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Container Identifier",
         "module" : "Specimen",
         "desc" : [
            "The identifier for the container that contains the specimen(s) being imaged. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.22.1.1"
               },
               "el" : "xref"
            },
            "."
         ],
         "usage" : "M",
         "req" : "1"
      },
      "(0020,0011)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Series Number",
         "module" : "General Series",
         "usage" : "M",
         "desc" : "A number that identifies this Series.",
         "req" : "2"
      },
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1150)" : {
         "entity" : "Image",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ],
         "module" : "Common Instance Reference",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1"
      },
      "(fffa,fffa)[<0>](0400,0105)" : {
         "name" : "Digital Signature DateTime",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Image",
         "req" : "1",
         "module" : "SOP Common",
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
         ]
      },
      "(0008,0110)[<0>](0008,0115)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme Name",
         "entity" : "Image",
         "req" : "3",
         "module" : "SOP Common",
         "desc" : "The coding scheme full common name",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1150)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "entity" : "Series",
         "req" : "1",
         "module" : "General Series",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M"
      },
      "(0040,0254)" : {
         "desc" : "Institution-generated description or classification of the Procedure Step that was performed.",
         "usage" : "M",
         "module" : "General Series",
         "req" : "3",
         "entity" : "Series",
         "name" : "Performed Procedure Step Description",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ]
      },
      "(0020,9222)[<0>](0020,9164)" : {
         "name" : "Dimension Organization UID",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "entity" : "Image",
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            [
               "Uniquely identifies a set of dimensions referenced within the containing SOP Instance. In particular the dimension described by this sequence item is associated with this Dimension Organization UID. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.6.17.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            "Required if the value of Dimension Organization Sequence (0020,9221) contains Items"
         ],
         "module" : "Multi-frame Dimension"
      },
      "(0020,9222)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "name" : "Dimension Index Sequence",
         "desc" : [
            "Identifies the sequence containing the indices used to specify the dimension of the multi-frame object.",
            "One or more Items shall be included in this sequence."
         ],
         "usage" : "M",
         "module" : "Multi-frame Dimension",
         "req" : "1"
      },
      "(0008,1250)[<0>](0020,000e)" : {
         "name" : "Series Instance UID",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series",
         "req" : "1",
         "module" : "General Series",
         "desc" : "Instance UID of Related Series",
         "usage" : "M"
      },
      "(0400,0561)[<0>](0400,0562)" : {
         "name" : "Attribute Modification DateTime",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "req" : "1",
         "desc" : "Date and time the attributes were removed and/or replaced.",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0028,2112)" : [
         {
            "name" : "Lossy Image Compression Ratio",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "entity" : "Image",
            "req" : "3",
            "module" : "General Image",
            "desc" : [
               "Describes the approximate lossy compression ratio(s) that have been applied to this image.",
               [
                  "See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.7.6.1.1.5"
                     }
                  },
                  " for further explanation."
               ],
               "May be multivalued if successive lossy compression steps have been applied.",
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
                                    "content" : [
                                       "For example, a compression ratio of 30:1 would be described in this Attribute with a single value of 30."
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
                                       "For historical reasons, the lossy compression ratio may also be described in Derivation Description (0008,2111)."
                                    ],
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
            "usage" : "M"
         },
         {
            "name" : "Lossy Image Compression Ratio",
            "mod_tables" : [
               "table_C.8.12.4-1"
            ],
            "entity" : "Image",
            "req" : "1C",
            "module" : "Whole Slide Microscopy Image",
            "usage" : "M",
            "desc" : [
               [
                  "See ",
                  {
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.7.6.1.1.5"
                     },
                     "el" : "xref"
                  },
                  " for further explanation."
               ],
               "Required if Lossy Image Compression (0028,2110) equals 01."
            ]
         }
      ],
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a160)" : {
         "entity" : "Series",
         "name" : "Text Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "module" : "General Series",
         "req" : "1C"
      },
      "(0008,1032)" : {
         "name" : "Procedure Code Sequence",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "req" : "3",
         "desc" : [
            "A Sequence that conveys the type of procedure performed.",
            "One or more Items are permitted in this Sequence."
         ],
         "usage" : "M",
         "module" : "General Study"
      },
      "(0040,0260)" : {
         "module" : "General Series",
         "desc" : "Sequence describing the Protocol performed for this Procedure Step. One or more Items are permitted in this sequence.",
         "usage" : "M",
         "req" : "3",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "name" : "Performed Protocol Code Sequence"
      },
      "(0010,2203)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Patient's Sex Neutered",
         "entity" : "Study",
         "req" : "2C",
         "usage" : "U",
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
         "module" : "Patient Study"
      },
      "(0040,0555)[<0>](0040,a161)" : {
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "name" : "Floating Point Value",
         "entity" : "Image",
         "req" : "1C",
         "module" : "Acquisition Context",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a123)" : {
         "name" : "Person Name",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "entity" : "Image",
         "req" : "1C",
         "module" : "Specimen",
         "usage" : "M",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ]
      },
      "(0020,0012)" : {
         "req" : "3",
         "desc" : "A number identifying the single continuous gathering of data over a period of time that resulted in this image.",
         "usage" : "M",
         "module" : "General Image",
         "name" : "Acquisition Number",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "entity" : "Image"
      },
      "(0008,1062)[<0>](0040,1102)" : {
         "req" : "3",
         "desc" : "Person's mailing address",
         "usage" : "M",
         "module" : "General Study",
         "name" : "Person's Address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a123)" : {
         "name" : "Person Name",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "req" : "1C",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "usage" : "M",
         "module" : "General Series"
      },
      "(0018,a001)[<0>](0008,1040)" : {
         "name" : "Institutional Department Name",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "req" : "3",
         "module" : "SOP Common",
         "desc" : "Department in the institution where the equipment that contributed to the composite instance is located.",
         "usage" : "M"
      },
      "(0100,0424)" : {
         "req" : "3",
         "usage" : "M",
         "desc" : "Any comments associated with the setting of the SOP Instance Status (0100,0410) to AO.",
         "module" : "SOP Common",
         "name" : "SOP Authorization Comment",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a040)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Value Type",
         "usage" : "M",
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
         "module" : "General Series",
         "req" : "1"
      },
      "(0088,0200)[<0>](0028,1203)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "name" : "Blue Palette Color Lookup Table Data",
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
         "usage" : "M",
         "module" : "General Image",
         "req" : "1C"
      },
      "(0088,0200)[<0>](0028,1101)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "name" : "Red Palette Color Lookup Table Descriptor",
         "module" : "General Image",
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
         "usage" : "M",
         "req" : "1C"
      },
      "(0018,1201)" : {
         "req" : "3",
         "usage" : "M",
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
         "module" : "General Equipment",
         "name" : "Time of Last Calibration",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "entity" : "Equipment"
      },
      "(0040,0245)" : {
         "req" : "3",
         "usage" : "M",
         "desc" : "Time on which the Performed Procedure Step started.",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "name" : "Performed Procedure Step Start Time",
         "entity" : "Series"
      },
      "(0018,a001)[<0>](0008,1070)" : {
         "entity" : "Image",
         "name" : "Operators' Name",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : "Name(s) of the operator(s) of the contributing equipment.",
         "usage" : "M",
         "req" : "3"
      },
      "(0040,0515)[<0>](0040,0512)" : {
         "req" : "1",
         "desc" : "The identifier for the container that contains the specimen(s) being imaged.",
         "usage" : "M",
         "module" : "Specimen",
         "name" : "Container Identifier",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "entity" : "Image"
      },
      "(4ffe,0001)" : {
         "req" : "3",
         "module" : "SOP Common",
         "desc" : [
            "A sequence of items that describe the parameters used to calculate a MAC for use in Digital Signatures.",
            "One or more Items shall be included in this sequence."
         ],
         "usage" : "M",
         "name" : "MAC Parameters Sequence",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Image"
      },
      "(0040,0253)" : {
         "desc" : "User or equipment generated identifier of that part of a Procedure that has been carried out within this step.",
         "usage" : "M",
         "module" : "General Series",
         "req" : "3",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "name" : "Performed Procedure Step ID"
      },
      "(0040,0515)[<0>](0040,0513)[<1>](0040,0031)" : {
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "usage" : "M",
         "module" : "Specimen",
         "req" : "1C",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "name" : "Local Namespace Entity ID"
      },
      "(0008,1090)" : [
         {
            "req" : "3",
            "module" : "General Equipment",
            "usage" : "M",
            "desc" : "Manufacturer's model name of the equipment that produced the composite instances.",
            "mod_tables" : [
               "table_C.7-8"
            ],
            "name" : "Manufacturer's Model Name",
            "entity" : "Equipment"
         },
         {
            "mod_tables" : [
               "table_C.7-8b"
            ],
            "name" : "Manufacturer's Model Name",
            "entity" : "Equipment",
            "req" : "1",
            "desc" : "Manufacturer's model name of the equipment that produced the composite instances.",
            "usage" : "M",
            "module" : "Enhanced General Equipment"
         }
      ],
      "(0008,0051)[<0>](0040,0031)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "name" : "Local Namespace Entity ID",
         "entity" : "Study",
         "req" : "1C",
         "module" : "General Study",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "usage" : "M"
      },
      "(0028,2114)" : [
         {
            "entity" : "Image",
            "name" : "Lossy Image Compression Method",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "usage" : "M",
            "desc" : [
               "A label for the lossy compression method(s) that have been applied to this image.",
               [
                  "See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "linkend" : "sect_C.7.6.1.1.5",
                        "xrefstyle" : "select: label"
                     }
                  },
                  " for further explanation."
               ],
               "May be multivalued if successive lossy compression steps have been applied; the value order shall correspond to the values of Lossy Image Compression Ratio (0028,2112).",
               {
                  "el" : "note",
                  "content" : [
                     "\n                    ",
                     {
                        "el" : "para",
                        "content" : [
                           "For historical reasons, the lossy compression method may also be described in Derivation Description (0008,2111)."
                        ]
                     },
                     "\n                  "
                  ]
               }
            ],
            "module" : "General Image",
            "req" : "3"
         },
         {
            "entity" : "Image",
            "name" : "Lossy Image Compression Method",
            "mod_tables" : [
               "table_C.8.12.4-1"
            ],
            "usage" : "M",
            "desc" : [
               "A label for the lossy compression method(s) that have been applied to this image.",
               [
                  "See ",
                  {
                     "attrs" : {
                        "linkend" : "sect_C.7.6.1.1.5",
                        "xrefstyle" : "select: label"
                     },
                     "el" : "xref"
                  },
                  " for further explanation."
               ],
               "May be multi valued if successive lossy compression steps have been applied; the value order shall correspond to the values of Lossy Image Compression Ratio (0028,2112).",
               "Required if Lossy Image Compression (0028,2110) equals 01."
            ],
            "module" : "Whole Slide Microscopy Image",
            "req" : "1C"
         }
      ],
      "(0088,0200)[<0>](0028,1201)" : {
         "entity" : "Image",
         "name" : "Red Palette Color Lookup Table Data",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
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
         "usage" : "M",
         "module" : "General Image",
         "req" : "1C"
      },
      "(0028,0103)" : [
         {
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "name" : "Pixel Representation",
            "entity" : "Image",
            "req" : "1",
            "usage" : "M",
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
            "module" : "Image Pixel"
         },
         {
            "module" : "Whole Slide Microscopy Image",
            "desc" : [
               "Data representation of pixel samples.",
               {
                  "title" : "Enumerated Values:",
                  "list" : [
                     [
                        "0",
                        "unsigned integer"
                     ]
                  ],
                  "type" : "variablelist"
               }
            ],
            "usage" : "M",
            "req" : "1",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.8.12.4-1"
            ],
            "name" : "Pixel Representation"
         }
      ],
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1155)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "M",
         "module" : "General Series",
         "req" : "1"
      },
      "(0040,0555)[<0>](0040,a123)" : {
         "name" : "Person Name",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "entity" : "Image",
         "req" : "1C",
         "module" : "Acquisition Context",
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a Person Name.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "The role of the person could be specified in Concept Name Code Sequence (0040,A043)."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            },
            "Required if the value that Concept Name Code Sequence (0040,A043) requires (implies) is a person name. Shall not be present otherwise."
         ],
         "usage" : "M"
      },
      "(0018,1050)" : {
         "req" : "3",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "usage" : "M",
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Spatial Resolution",
         "entity" : "Equipment"
      },
      "(0012,0040)" : {
         "entity" : "Patient",
         "name" : "Clinical Trial Subject ID",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "desc" : [
            "The assigned identifier for the clinical trial subject. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.3.1.6"
               },
               "el" : "xref"
            },
            ". Shall be present if Clinical Trial Subject Reading ID (0012,0042) is absent. May be present otherwise."
         ],
         "usage" : "U",
         "module" : "Clinical Trial Subject",
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,0008)" : {
         "name" : "Scheduled Protocol Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "entity" : "Series",
         "req" : "3",
         "module" : "General Series",
         "desc" : "Sequence describing the Scheduled Protocol following a specific coding scheme. One or more Items are permitted in this sequence.",
         "usage" : "M"
      },
      "(0020,1002)" : {
         "mod_tables" : [
            "table_C.7-9"
         ],
         "name" : "Images in Acquisition",
         "entity" : "Image",
         "req" : "3",
         "desc" : "Number of images that resulted from this acquisition of data",
         "usage" : "M",
         "module" : "General Image"
      },
      "(0018,9073)" : {
         "module" : "Whole Slide Microscopy Image",
         "desc" : "Duration of the image acquisition in seconds.",
         "usage" : "M",
         "req" : "1",
         "entity" : "Image",
         "name" : "Acquisition Duration",
         "mod_tables" : [
            "table_C.8.12.4-1"
         ]
      },
      "(0010,21b0)" : {
         "desc" : "Additional information about the Patient's medical history.",
         "usage" : "U",
         "module" : "Patient Study",
         "req" : "3",
         "entity" : "Study",
         "name" : "Additional Patient History",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0008,1164)[<0>](0008,1161)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-9"
         ],
         "name" : "Simple Frame List",
         "module" : "Frame Extraction",
         "desc" : [
            "A list of Frames that were extracted in the form of a simple list.",
            "Required if object extraction is based on a Frame Level Retrieve using the Simple Frame List (0008,1161) attribute.",
            [
               "See ",
               {
                  "attrs" : {
                     "targetptr" : "PS3.4",
                     "targetdoc" : "PS3.4",
                     "xrefstyle" : "select: labelnumber"
                  },
                  "el" : "olink"
               },
               " \"Instance and Frame Level Retrieve SOP Classes\""
            ]
         ],
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "req" : "1C"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a30a)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Numeric Value",
         "entity" : "Image",
         "req" : "1C",
         "module" : "Specimen",
         "usage" : "M",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0062,000b)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Referenced Segment Number",
         "entity" : "Image",
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "module" : "Specimen"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,08ea)" : {
         "name" : "Measurement Units Code Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "entity" : "Image",
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "module" : "Specimen"
      },
      "(0028,0034)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "name" : "Pixel Aspect Ratio",
         "module" : "Image Pixel",
         "usage" : "M",
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
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Referenced SOP Sequence",
         "entity" : "Series",
         "req" : "1C",
         "module" : "General Series",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "usage" : "M"
      },
      "(0040,9096)[<0>](0040,9225)" : {
         "name" : "Real World Value Slope",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "entity" : "Image",
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "The Slope value in relationship between stored values (SV) and the real world values.",
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
            "Required if Real World Value LUT Data (0040,9212) is not present."
         ],
         "module" : "General Image"
      },
      "(0020,0052)" : {
         "mod_tables" : [
            "table_C.7-6"
         ],
         "name" : "Frame of Reference UID",
         "entity" : "Frame of Reference",
         "req" : "1",
         "usage" : "M",
         "desc" : [
            "Uniquely identifies the frame of reference for a Series. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.4.1.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "module" : "Frame of Reference"
      },
      "(0048,0105)[<0>](0022,0001)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8.12.5-1"
         ],
         "name" : "Light Path Filter Pass-Through Wavelength",
         "module" : "Optical Path",
         "desc" : "Nominal pass-through wavelength of light path filter(s) in nm",
         "usage" : "M",
         "req" : "3"
      },
      "(0040,0555)[<0>](0040,a043)" : {
         "module" : "Acquisition Context",
         "desc" : [
            "A concept that constrains the meaning of (i.e., defines the role of) the Observation Value. The \"Name\" component of a Name/Value pair.",
            "Only a single Item shall be included in this sequence."
         ],
         "usage" : "M",
         "req" : "1",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "name" : "Concept Name Code Sequence"
      },
      "(0008,001a)" : {
         "req" : "3",
         "module" : "SOP Common",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Related General SOP Class UID",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a123)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Person Name",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "usage" : "M",
         "module" : "General Series",
         "req" : "1C"
      },
      "(0040,0560)[<0>](0008,2228)[<1>](0008,2230)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-8"
         ],
         "name" : "Primary Anatomic Structure Modifier Sequence",
         "desc" : [
            "Sequence of Items that modifies the primary anatomic structure of interest in this Instance.",
            "One or more Items are permitted in this sequence."
         ],
         "usage" : "M",
         "module" : "Specimen",
         "req" : "3"
      },
      "(0040,0275)" : {
         "desc" : [
            "Sequence that contains attributes from the Imaging Service Request.",
            "One or more Items are permitted in this sequence."
         ],
         "usage" : "M",
         "module" : "General Series",
         "req" : "3",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Request Attributes Sequence"
      },
      "(0008,0050)" : {
         "req" : "2",
         "module" : "General Study",
         "desc" : "A RIS generated number that identifies the order for the Study.",
         "usage" : "M",
         "name" : "Accession Number",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a163)" : {
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "usage" : "M",
         "module" : "Specimen",
         "req" : "1C",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Rational Denominator Value"
      },
      "(0020,9172)[<0>](0008,1160)" : {
         "entity" : "Image",
         "name" : "Referenced Frame Number",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "module" : "SOP Common",
         "usage" : "M",
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
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a161)" : {
         "entity" : "Series",
         "name" : "Floating Point Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "usage" : "M",
         "req" : "1C"
      },
      "(0020,9311)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "name" : "Dimension Organization Type",
         "module" : "Multi-frame Dimension",
         "usage" : "M",
         "desc" : [
            "Dimension organization of the instance.",
            {
               "list" : [
                  [
                     "3D",
                     "Spatial Multi-frame image of parallel planes (3D volume set)"
                  ],
                  [
                     "3D_TEMPORAL",
                     "Temporal loop of parallel-plane 3D volume sets."
                  ]
               ],
               "type" : "variablelist",
               "title" : "Defined Terms:"
            }
         ],
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)" : {
         "req" : "1C",
         "usage" : "M",
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
         "entity" : "Series"
      },
      "(0088,0200)[<0>](0028,0107)" : {
         "req" : "3",
         "module" : "General Image",
         "desc" : "The maximum actual pixel value encountered in this image.",
         "usage" : "M",
         "name" : "Largest Image Pixel Value",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "entity" : "Image"
      },
      "(0028,2110)" : [
         {
            "desc" : [
               "Specifies whether an Image has undergone lossy compression (at a point in its lifetime).",
               {
                  "title" : "Enumerated Values:",
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
                  "type" : "variablelist"
               },
               "Once this value has been set to 01 it shall not be reset.",
               [
                  "See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "linkend" : "sect_C.7.6.1.1.5",
                        "xrefstyle" : "select: label"
                     }
                  },
                  "."
               ]
            ],
            "usage" : "M",
            "module" : "General Image",
            "req" : "3",
            "entity" : "Image",
            "name" : "Lossy Image Compression",
            "mod_tables" : [
               "table_C.7-9"
            ]
         },
         {
            "entity" : "Image",
            "name" : "Lossy Image Compression",
            "mod_tables" : [
               "table_C.8.12.4-1"
            ],
            "desc" : [
               "Specifies whether an Image has undergone lossy compression (at a point in its lifetime).",
               {
                  "title" : "Enumerated Values:",
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
                  "type" : "variablelist"
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
                  }
               ]
            ],
            "usage" : "M",
            "module" : "Whole Slide Microscopy Image",
            "req" : "1"
         }
      ],
      "(0040,0560)" : {
         "entity" : "Image",
         "name" : "Specimen Description Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "desc" : [
            "Sequence of identifiers and detailed description of the specimen(s) being imaged.",
            "One or more Items shall be included in this sequence.",
            "Each specimen imaged in the Pixel Data shall be identified by an Item in this Sequence. Other specimens in/on the container, but not imaged in the Pixel Data, may also be identified by Items in this Sequence."
         ],
         "usage" : "M",
         "module" : "Specimen",
         "req" : "1"
      },
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1155)" : {
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "Common Instance Reference",
         "req" : "1",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID"
      },
      "(0040,0560)[<0>](0040,0602)" : {
         "module" : "Specimen",
         "desc" : "Detailed textual specimen description (may include ancestor specimen descriptions).",
         "usage" : "M",
         "req" : "3",
         "entity" : "Image",
         "name" : "Specimen Detailed Description",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      "(0040,9096)[<0>](0040,9212)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "name" : "Real World Value LUT Data",
         "module" : "General Image",
         "usage" : "M",
         "desc" : [
            "LUT Data in this Sequence.",
            "Required if Real World Value Intercept (0040,9224) is not present."
         ],
         "req" : "1C"
      },
      "(0008,1052)[<0>](0008,0081)" : {
         "name" : "Institution Address",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "entity" : "Series",
         "req" : "3",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "usage" : "M",
         "module" : "General Series"
      },
      "(0088,0200)[<0>](0028,0034)" : {
         "entity" : "Image",
         "name" : "Pixel Aspect Ratio",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M",
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
         "module" : "General Image",
         "req" : "1C"
      },
      "(0020,9222)[<0>](0020,9165)" : {
         "req" : "1",
         "usage" : "M",
         "desc" : [
            "Contains the Data Element Tag that is used to identify the Attribute connected with the index. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.17.1"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "module" : "Multi-frame Dimension",
         "name" : "Dimension Index Pointer",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "entity" : "Image"
      },
      "(0048,0105)[<0>](0048,0120)[<1>](0028,1101)" : {
         "module" : "Optical Path",
         "usage" : "M",
         "desc" : [
            "Specifies the format of the Red Palette Color Lookup Table Data (0028,1201). See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.6.3.1.5",
                  "xrefstyle" : "select: label"
               }
            },
            " for further explanation."
         ],
         "req" : "1",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8.12.5-1",
            "table_C.7-22a"
         ],
         "name" : "Red Palette Color Lookup Table Descriptor"
      },
      "(0040,9096)[<0>](0028,3003)" : {
         "req" : "1",
         "module" : "General Image",
         "usage" : "M",
         "desc" : "Free form text explanation of the meaning of the transformation in this Item.",
         "name" : "LUT Explanation",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "entity" : "Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1160)" : {
         "name" : "Referenced Frame Number",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
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
         "module" : "General Series"
      },
      "(0008,1164)[<0>](0008,1162)" : {
         "req" : "1C",
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "desc" : [
            "A list of Frames that were extracted in the form of one or more triplets",
            "Required if object extraction is based on a Frame Level Retrieve using the Calculated Frame List (0008,1162) attribute.",
            [
               "See ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "xrefstyle" : "select: labelnumber",
                     "targetdoc" : "PS3.4",
                     "targetptr" : "PS3.4"
                  }
               },
               " \"Instance and Frame Level Retrieve SOP Classes\""
            ]
         ],
         "module" : "Frame Extraction",
         "name" : "Calculated Frame List",
         "mod_tables" : [
            "table_C.12-9"
         ],
         "entity" : "Image"
      },
      "(0028,1052)" : {
         "usage" : "M",
         "desc" : [
            "The value b in relationship between stored values (SV) and the output units.",
            "Output units = m*SV + b.",
            "Required if Photometric Interpretation (0028,0004) is MONOCHROME2.",
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "0",
                     null
                  ]
               ],
               "type" : "variablelist"
            }
         ],
         "module" : "Whole Slide Microscopy Image",
         "req" : "1C",
         "entity" : "Image",
         "name" : "Rescale Intercept",
         "mod_tables" : [
            "table_C.8.12.4-1"
         ]
      },
      "(0028,2000)" : {
         "entity" : "Image",
         "name" : "ICC Profile",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "usage" : "M",
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
         "module" : "Image Pixel",
         "req" : "3"
      },
      "(0048,0001)" : {
         "req" : "1",
         "module" : "Whole Slide Microscopy Image",
         "desc" : [
            "Width of total imaged volume (distance in the direction of rows in each frame) in mm. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.12.4.1.2"
               }
            }
         ],
         "usage" : "M",
         "name" : "Imaged Volume Width",
         "mod_tables" : [
            "table_C.8.12.4-1"
         ],
         "entity" : "Image"
      },
      "(0040,0555)[<0>](0040,a122)" : {
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a time.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "The purpose or role of the time value could be specified in Concept Name Code Sequence (0040,A043)."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            },
            "Required if the value that Concept Name Code Sequence (0040,A043) requires (implies) is a time. Shall not be present otherwise."
         ],
         "module" : "Acquisition Context",
         "name" : "Time",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "entity" : "Image"
      },
      "(0048,0008)" : {
         "module" : "Whole Slide Microscopy Image",
         "desc" : [
            "Location of pixel 1\\1 of the total pixel matrix in the Slide Coordinate System Frame of Reference.",
            "Only a single Item shall be included in this sequence.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.12.4.1.4",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " and ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.12.2.1.1"
                  },
                  "el" : "xref"
               },
               " for further explanation"
            ]
         ],
         "usage" : "M",
         "req" : "1",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8.12.4-1"
         ],
         "name" : "Total Pixel Matrix Origin Sequence"
      },
      "(0020,9222)[<0>](0020,9213)" : {
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "Identification of the creator of a group of private data elements.",
            "Required if the Dimension Index Pointer (0020,9165) value is the Data Element Tag of a Private Attribute."
         ],
         "module" : "Multi-frame Dimension",
         "name" : "Dimension Index Private Creator",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "entity" : "Image"
      },
      "(4ffe,0001)[<0>](0400,0010)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "desc" : [
            "The Transfer Syntax UID used to encode the values of the Data Elements included in the MAC calculation. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
            {
               "content" : [
                  "\n                      ",
                  {
                     "content" : [
                        "Certain Transfer Syntaxes, particularly those that are used with compressed data, allow the fragmentation of the pixel data to change. If such fragmentation changes, Digital Signatures generated with such Transfer Syntaxes could become invalid."
                     ],
                     "el" : "para"
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ],
         "req" : "1",
         "entity" : "Image",
         "name" : "MAC Calculation Transfer Syntax UID",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)" : {
         "usage" : "M",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "module" : "General Series",
         "req" : "1C",
         "entity" : "Series",
         "name" : "Referenced SOP Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0010,1020)" : {
         "desc" : "Length or size of the Patient, in meters.",
         "usage" : "U",
         "module" : "Patient Study",
         "req" : "3",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Patient's Size"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0032)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "name" : "Universal Entity ID",
         "usage" : "M",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "module" : "General Series",
         "req" : "1C"
      },
      "(0008,1164)[<0>](0008,1167)" : {
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "desc" : "SOP Instance from which the frames of this instance are extracted.",
         "module" : "Frame Extraction",
         "req" : "1",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-9"
         ],
         "name" : "Multi-frame Source SOP Instance UID"
      },
      "(0028,0008)" : {
         "name" : "Number of Frames",
         "mod_tables" : [
            "table_C.8.12.4-1"
         ],
         "entity" : "Image",
         "req" : "1",
         "usage" : "M",
         "desc" : [
            "Number of frames in a multi-frame image.",
            {
               "list" : [
                  [
                     "1",
                     null
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values if Image Type (0008,0008) Value 3 is LOCALIZER or LABEL:"
            }
         ],
         "module" : "Whole Slide Microscopy Image"
      },
      "(0010,2292)" : {
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient Breed Description",
         "module" : "Patient",
         "usage" : "M",
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
         "req" : "2C"
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
      "Can't handle table_8.8-1 (in table_C.7-9 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.7-9 after (0008,9215))",
      "Can't handle table_8.8-1 (in table_C.7-9 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.7-9 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.7-9:table_C.7.6.16-12b after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.7.6.14-1 after (0040,A043))",
      "Can't handle table_8.8-1 (in table_C.7.6.14-1 after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.7.6.14-1 after (0040,A168))",
      "Can't handle processing of table_C.7.6.16-1 in Image:Multi-frame Functional Groups of table_A.32.8-1",
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
      "Can't handle table_8.8-1 (in table_C.8.12.5-1 after (0048,0100))",
      "Can't handle table_8.8-1 (in table_C.8.12.5-1 after (0048,0108))",
      "Can't handle table_8.8-1 (in table_C.8.12.5-1 after (0022,0016))",
      "Can't handle table_8.8-1 (in table_C.8.12.5-1 after (0022,0017))",
      "Can't handle table_8.8-1 (in table_C.8.12.5-1 after (0022,0018))",
      "Can't handle table_8.8-1 (in table_C.8.12.5-1 after (0022,0019))",
      "Can't handle table_8.8-1 (in table_C.8.12.5-1 after (0022,001A))",
      "Can't handle table_8.8-1 (in table_C.12-1 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_C.12-6 after (0400,0401))"
   ]
}