var data = {
   "tags" : {
      "(0028,0102)" : [
         {
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
            "entity" : "Image",
            "name" : "High Bit",
            "usage" : "M",
            "module" : "Image Pixel",
            "mod_tables" : [
               "table_C.7-11b"
            ]
         },
         {
            "req" : "1",
            "desc" : [
               "Most significant bit for pixel sample data. Each sample shall have the same high bit.",
               [
                  "See ",
                  {
                     "el" : "olink",
                     "attrs" : {
                        "targetptr" : "PS3.5",
                        "targetdoc" : "PS3.5",
                        "xrefstyle" : "select: labelnumber"
                     }
                  },
                  " for further explanation."
               ],
               {
                  "list" : [
                     [
                        "7",
                        "if Bits Stored (0028,0101) = 8"
                     ],
                     [
                        "15",
                        "if Bits Stored (0028,0101) = 16"
                     ]
                  ],
                  "type" : "variablelist",
                  "title" : "Enumerated Values:"
               }
            ],
            "entity" : "Image",
            "name" : "High Bit",
            "usage" : "M",
            "module" : "Corneal Topography Map Image",
            "mod_tables" : [
               "table_C.8.30.2-1"
            ]
         }
      ],
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a162)" : {
         "entity" : "Series",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "usage" : "M",
         "name" : "Rational Numerator Value"
      },
      "(0040,0555)[<0>](0040,a168)" : {
         "usage" : "M",
         "name" : "Concept Code Sequence",
         "module" : "Acquisition Context",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "req" : "1C",
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a Coded Value.",
            "Only a single Item shall be included in this sequence.",
            "Required if Date (0040,A121), Time (0040,A122), Person Name (0040,A123), Text Value (0040,A160), and the pair of Numeric Value (0040,A30A) and Measurement Units Code Sequence (0040,08EA) are not present."
         ],
         "entity" : "Image"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1103)" : {
         "req" : "3",
         "entity" : "Image",
         "desc" : "Person's telephone number(s)",
         "usage" : "M",
         "name" : "Person's Telephone Numbers",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common"
      },
      "(0028,0301)" : [
         {
            "usage" : "M",
            "name" : "Burned In Annotation",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "module" : "General Image",
            "req" : "3",
            "entity" : "Image",
            "desc" : [
               "Indicates whether or not image contains sufficient burned in annotation to identify the patient and date the image was acquired.",
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
               "If this Attribute is absent, then the image may or may not contain burned in annotation."
            ]
         },
         {
            "req" : "1",
            "desc" : [
               "Indicates that the image does not contain burned in annotation to identify the patient and date the image was acquired.",
               {
                  "title" : "Enumerated Values:",
                  "type" : "variablelist",
                  "list" : [
                     [
                        "NO",
                        null
                     ]
                  ]
               }
            ],
            "entity" : "Image",
            "name" : "Burned In Annotation",
            "usage" : "M",
            "module" : "Corneal Topography Map Image",
            "mod_tables" : [
               "table_C.8.30.2-1"
            ]
         }
      ],
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1155)" : {
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "General Series",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M"
      },
      "(0008,0031)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Series Time",
         "usage" : "M",
         "desc" : "Time the Series started.",
         "entity" : "Series",
         "req" : "3"
      },
      "(0046,0215)[<0>](0046,0076)" : {
         "req" : "1",
         "desc" : "The refractive power of the cornea at the principal meridian, measured in diopters.",
         "entity" : "Image",
         "usage" : "M",
         "name" : "Keratometric Power",
         "module" : "Corneal Topography Map Analysis",
         "mod_tables" : [
            "table_C.8.30.3-1"
         ]
      },
      "(fffa,fffa)[<0>](0400,0100)" : {
         "name" : "Digital Signature UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "req" : "1",
         "entity" : "Image",
         "desc" : "A UID that can be used to uniquely reference this signature."
      },
      "(0040,0275)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "name" : "Request Attributes Sequence",
         "usage" : "M",
         "entity" : "Series",
         "desc" : [
            "Sequence that contains attributes from the Imaging Service Request.",
            "One or more Items are permitted in this sequence."
         ],
         "req" : "3"
      },
      "(0008,1090)" : [
         {
            "mod_tables" : [
               "table_C.7-8"
            ],
            "module" : "General Equipment",
            "usage" : "M",
            "name" : "Manufacturer's Model Name",
            "entity" : "Equipment",
            "desc" : "Manufacturer's model name of the equipment that produced the composite instances.",
            "req" : "3"
         },
         {
            "req" : "1",
            "desc" : "Manufacturer's model name of the equipment that produced the composite instances.",
            "entity" : "Equipment",
            "name" : "Manufacturer's Model Name",
            "usage" : "M",
            "module" : "Enhanced General Equipment",
            "mod_tables" : [
               "table_C.7-8b"
            ]
         }
      ],
      "(0010,2298)" : {
         "entity" : "Patient",
         "desc" : [
            "Relationship of Responsible Person to the patient.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.1.1.1.2"
                  }
               },
               " for Defined Terms."
            ],
            "Required if Responsible Person is present and has a value."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "usage" : "M",
         "name" : "Responsible Person Role"
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
         "req" : "3"
      },
      "(0020,9172)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Conversion Source Attributes Sequence",
         "usage" : "M",
         "desc" : [
            "The set of images or other composite SOP Instances that were converted to this instance.",
            "If this instance was converted from a specific frame in the source instance, the reference shall include the Frame Number.",
            "One or more Items shall be included in this sequence.",
            "Required if this instance was created by conversion, and Conversion Source Attributes Sequence (0020,9172) is not present in an Item of Shared Functional Groups Sequence (5200,9229) or Per-Frame Functional Groups Sequence (5200,9230)."
         ],
         "entity" : "Image",
         "req" : "1C"
      },
      "(0046,0218)" : {
         "name" : "Simulated Keratometric Cylinder Sequence",
         "usage" : "M",
         "module" : "Corneal Topography Map Analysis",
         "mod_tables" : [
            "table_C.8.30.3-1"
         ],
         "req" : "1",
         "desc" : [
            "A sequence that specifies simulated keratometric cylinder power of the corneal surface, measured in diopters.",
            "Only one item shall be permitted.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "This information is obtained from the Steep and Flat Keratometric Axis readings."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "entity" : "Image"
      },
      "(0018,a001)[<0>](0008,0080)" : {
         "req" : "3",
         "entity" : "Image",
         "desc" : "Institution where the equipment that contributed to the composite instance is located.",
         "usage" : "M",
         "name" : "Institution Name",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0040,a390)[<0>](0040,e010)" : {
         "name" : "Retrieve URI",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "req" : "3",
         "entity" : "Image",
         "desc" : "Retrieval access path to HL7 Structured Document. Includes fully specified scheme, authority, path, and query in accordance with RFC 2396"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a124)" : {
         "entity" : "Series",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "usage" : "M",
         "name" : "UID"
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-11"
         ],
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Series"
      },
      "(0008,0051)[<0>](0040,0033)" : {
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
         "req" : "1C",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "usage" : "M",
         "name" : "Universal Entity ID Type"
      },
      "(0008,1111)[<0>](0008,1155)" : [
         {
            "name" : "Referenced SOP Instance UID",
            "usage" : "M",
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-11"
            ],
            "req" : "1",
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "entity" : "Series"
         },
         {
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "entity" : "Series",
            "req" : "1",
            "module" : "Corneal Topography Map Series",
            "mod_tables" : [
               "table_C.8.30.1-1",
               "table_10-11"
            ],
            "name" : "Referenced SOP Instance UID",
            "usage" : "M"
         }
      ],
      "(0040,0260)[<0>](0040,0440)" : {
         "req" : "3",
         "entity" : "Series",
         "desc" : "Sequence that specifies the context for the Performed Protocol Code Sequence Item. One or more Items are permitted in this sequence.",
         "usage" : "M",
         "name" : "Protocol Context Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "module" : "General Series"
      },
      "(0012,0050)" : {
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "module" : "Clinical Trial Study",
         "usage" : "U",
         "name" : "Clinical Trial Time Point ID",
         "entity" : "Study",
         "desc" : [
            "An identifier specifying the one or more studies that are grouped together as a clinical time point or submission in a clinical trial. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.2.3.1.1"
               }
            },
            "."
         ],
         "req" : "2"
      },
      "(0008,1062)[<0>](0008,0082)" : {
         "entity" : "Study",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "usage" : "M",
         "name" : "Institution Code Sequence"
      },
      "(0008,1049)[<0>](0040,1103)" : {
         "req" : "3",
         "desc" : "Person's telephone number(s)",
         "entity" : "Study",
         "usage" : "M",
         "name" : "Person's Telephone Numbers",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,08ea)" : {
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "usage" : "M",
         "name" : "Measurement Units Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series"
      },
      "(0012,0020)" : {
         "usage" : "U",
         "name" : "Clinical Trial Protocol ID",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject",
         "req" : "1",
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
         ]
      },
      "(0040,0555)[<0>](0040,a160)" : {
         "module" : "Acquisition Context",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "name" : "Text Value",
         "usage" : "M",
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a Text Observation Value.",
            "Required if Date (0040,A121), Time (0040,A122), and Person Name (0040,A123) do not fully describe the concept specified by Concept Name Code Sequence (0040,A043). Shall not be present otherwise."
         ],
         "entity" : "Image",
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a30a)" : {
         "req" : "1C",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "entity" : "Series",
         "usage" : "M",
         "name" : "Numeric Value",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0008,2111)" : {
         "entity" : "Image",
         "desc" : [
            "A text description of how this image was derived. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.1.1.3"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image",
         "name" : "Derivation Description",
         "usage" : "M"
      },
      "(0008,2112)[<0>](0020,0020)" : {
         "name" : "Patient Orientation",
         "usage" : "M",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "req" : "1C",
         "desc" : [
            "The Patient Orientation values of the source image.",
            "Required if the value of Spatial Locations Preserved (0028,135A) is REORIENTED_ONLY."
         ],
         "entity" : "Image"
      },
      "(0010,0021)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Issuer of Patient ID",
         "usage" : "M",
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
         "entity" : "Patient",
         "req" : "3"
      },
      "(0008,0096)[<0>](0008,0082)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "usage" : "M",
         "name" : "Institution Code Sequence",
         "entity" : "Study",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1C"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a168)" : {
         "req" : "1C",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "entity" : "Series",
         "usage" : "M",
         "name" : "Concept Code Sequence",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0008,0096)[<0>](0040,1103)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "name" : "Person's Telephone Numbers",
         "usage" : "M",
         "entity" : "Study",
         "desc" : "Person's telephone number(s)",
         "req" : "3"
      },
      "(0028,1202)" : {
         "module" : "Image Pixel",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "usage" : "M",
         "name" : "Green Palette Color Lookup Table Data",
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
         "entity" : "Image",
         "req" : "1C"
      },
      "(0038,0014)[<0>](0040,0031)" : {
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "name" : "Local Namespace Entity ID",
         "usage" : "U",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "Study",
         "req" : "1C"
      },
      "(0028,2114)" : [
         {
            "usage" : "M",
            "name" : "Lossy Image Compression Method",
            "module" : "General Image",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "req" : "3",
            "desc" : [
               "A label for the lossy compression method(s) that have been applied to this image.",
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
               "May be multivalued if successive lossy compression steps have been applied; the value order shall correspond to the values of Lossy Image Compression Ratio (0028,2112).",
               {
                  "el" : "note",
                  "content" : [
                     "\n                    ",
                     {
                        "content" : [
                           "For historical reasons, the lossy compression method may also be described in Derivation Description (0008,2111)."
                        ],
                        "el" : "para"
                     },
                     "\n                  "
                  ]
               }
            ],
            "entity" : "Image"
         },
         {
            "mod_tables" : [
               "table_C.8.30.2-1"
            ],
            "module" : "Corneal Topography Map Image",
            "name" : "Lossy Image Compression Method",
            "usage" : "M",
            "entity" : "Image",
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
               "Required if Lossy Images Compression (0028,2110) is \"01\"."
            ],
            "req" : "1C"
         }
      ],
      "(7fe0,0010)" : {
         "req" : "1C",
         "desc" : [
            [
               "A data stream of the pixel samples that comprise the Image. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.3.1.4"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            "Required if Pixel Data Provider URL (0028,7FE0) is not present."
         ],
         "entity" : "Image",
         "name" : "Pixel Data",
         "usage" : "M",
         "module" : "Image Pixel",
         "mod_tables" : [
            "table_C.7-11b"
         ]
      },
      "(0008,0096)[<0>](0008,0081)" : {
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Institution Address",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "entity" : "Study",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a30a)" : {
         "entity" : "Series",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "usage" : "M",
         "name" : "Numeric Value"
      },
      "(0010,2210)" : {
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "The anatomical orientation type used in instances generated by this equipment.",
            {
               "title" : "Enumerated Values:",
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
               "type" : "variablelist"
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
                  "attrs" : {
                     "linkend" : "sect_C.7.6.2.1.1",
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
                     "content" : [
                        "If this Attribute is not present, the default human standard anatomical position is used to define the patient orientation of projection images and the patient coordinate system of cross-sectional images."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "usage" : "M",
         "name" : "Anatomical Orientation Type",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series"
      },
      "(0018,a001)[<0>](0008,1070)" : {
         "req" : "3",
         "entity" : "Image",
         "desc" : "Name(s) of the operator(s) of the contributing equipment.",
         "usage" : "M",
         "name" : "Operators' Name",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(fffa,fffa)[<0>](0400,0120)" : {
         "entity" : "Image",
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
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Signature"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a161)" : {
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "entity" : "Series",
         "req" : "1C",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Floating Point Value"
      },
      "(0022,0058)[<0>](0022,001c)" : {
         "req" : "1",
         "entity" : "Image",
         "desc" : [
            "The actual agent administered to dilate the pupil.",
            "Only a single Item shall be included in this sequence."
         ],
         "name" : "Mydriatic Agent Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.17.4-1",
            "table_C.8.17.8-2"
         ],
         "module" : "Ophthalmic Photography Acquisition Parameters"
      },
      "(0018,a001)[<0>](0008,1010)" : {
         "entity" : "Image",
         "desc" : "User defined name identifying the machine that contributed to the composite instance.",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Station Name",
         "usage" : "M"
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
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.7.6.1.1.5"
                     }
                  },
                  "."
               ]
            ],
            "entity" : "Image",
            "req" : "3",
            "module" : "General Image",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "usage" : "M",
            "name" : "Lossy Image Compression"
         },
         {
            "entity" : "Image",
            "desc" : [
               "Specifies whether an Image has undergone lossy compression.",
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
               ]
            ],
            "req" : "1",
            "mod_tables" : [
               "table_C.8.30.2-1"
            ],
            "module" : "Corneal Topography Map Image",
            "name" : "Lossy Image Compression",
            "usage" : "M"
         }
      ],
      "(0088,0200)[<0>](7fe0,0010)" : {
         "desc" : [
            [
               "A data stream of the pixel samples that comprise the Image. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.3.1.4"
                  }
               },
               " for further explanation."
            ],
            "Required if Pixel Data Provider URL (0028,7FE0) is not present."
         ],
         "entity" : "Image",
         "req" : "1C",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "name" : "Pixel Data",
         "usage" : "M"
      },
      "(0010,0040)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "name" : "Patient's Sex",
         "usage" : "M",
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "req" : "2"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a040)" : {
         "req" : "1",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series"
      },
      "(0010,2294)[<0>](0010,2296)" : {
         "name" : "Breed Registry Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "req" : "1",
         "entity" : "Patient",
         "desc" : [
            "Identification of the organization with which an animal is registered.",
            "Only a single Item shall be included in this sequence."
         ]
      },
      "(0028,2000)" : [
         {
            "req" : "3",
            "desc" : [
               "An ICC Profile encoding the transformation of device-dependent color stored pixel values into PCS-Values.",
               [
                  "See ",
                  {
                     "attrs" : {
                        "linkend" : "sect_C.11.15.1.1",
                        "xrefstyle" : "select: label"
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
                        "el" : "para"
                     },
                     "\n                  "
                  ],
                  "el" : "note"
               }
            ],
            "entity" : "Image",
            "name" : "ICC Profile",
            "usage" : "M",
            "module" : "Image Pixel",
            "mod_tables" : [
               "table_C.7-11b"
            ]
         },
         {
            "usage" : "U",
            "name" : "ICC Profile",
            "mod_tables" : [
               "table_C.11.15-1"
            ],
            "module" : "ICC Profile",
            "req" : "1",
            "entity" : "Image",
            "desc" : "An ICC Profile encoding the transformation of device-dependent color stored pixel values into PCS-Values."
         }
      ],
      "(0046,0244)[<0>](0046,0253)" : {
         "req" : "1",
         "entity" : "Image",
         "desc" : [
            "Corneal wavefront, in micrometers, is calculated from the elevation data by fitting with the Zernike Series expansion.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "This permits measurement of both low and higher order aberrations and provides the total amount of distortion of the Corneal Wavefront with a Root Mean Square (RMS) value."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "name" : "Corneal Wavefront",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.30.3-1"
         ],
         "module" : "Corneal Topography Map Analysis"
      },
      "(0046,0232)" : {
         "req" : "3",
         "desc" : "This index sums the meridional mire-to-mire power changes over the entire corneal surface, increasing as topographic irregularities increase (no units).",
         "entity" : "Image",
         "name" : "Surface Asymmetry Index",
         "usage" : "M",
         "module" : "Corneal Topography Map Analysis",
         "mod_tables" : [
            "table_C.8.30.3-1"
         ]
      },
      "(0008,1049)" : {
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "name" : "Physician(s) of Record Identification Sequence",
         "desc" : [
            "Identification of the physician(s) who are responsible for overall patient care at time of Study.",
            "One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Physician(s) of Record (0008,1048), if present."
         ],
         "entity" : "Study",
         "req" : "3"
      },
      "(0008,103e)" : {
         "req" : "3",
         "desc" : "Description of the Series",
         "entity" : "Series",
         "name" : "Series Description",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a123)" : {
         "name" : "Person Name",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "entity" : "Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a160)" : {
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "entity" : "Series",
         "req" : "1C",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Text Value",
         "usage" : "M"
      },
      "(0088,0200)[<0>](0028,0034)" : {
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image",
         "name" : "Pixel Aspect Ratio",
         "usage" : "M",
         "entity" : "Image",
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
         "req" : "1C"
      },
      "(0018,0015)" : [
         {
            "entity" : "Series",
            "desc" : [
               [
                  "Text description of the part of the body examined. See ",
                  {
                     "el" : "olink",
                     "attrs" : {
                        "targetdoc" : "PS3.16",
                        "targetptr" : "chapter_L",
                        "xrefstyle" : "template: Annex %n \u201c%t\u201d in PS3.16"
                     }
                  },
                  " for Defined Terms"
               ],
               {
                  "content" : [
                     "\n                    ",
                     {
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
            "req" : "3",
            "mod_tables" : [
               "table_C.7-5a"
            ],
            "module" : "General Series",
            "name" : "Body Part Examined",
            "usage" : "M"
         },
         {
            "req" : "1",
            "entity" : "Series",
            "desc" : [
               "Text description of the part of the body examined.",
               {
                  "list" : [
                     [
                        "EYE",
                        null
                     ]
                  ],
                  "type" : "variablelist",
                  "title" : "Enumerated Values:"
               },
               {
                  "content" : [
                     "\n                    ",
                     {
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
            "name" : "Body Part Examined",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8.30.1-1"
            ],
            "module" : "Corneal Topography Map Series"
         }
      ],
      "(0018,a001)[<0>](0008,1072)" : {
         "desc" : [
            "Identification of the operator(s) of the contributing equipment.",
            "One or more items are permitted in this sequence.",
            "The number and order of Items shall correspond to the number and order of values of Operators' Name (0008,1070), if present."
         ],
         "entity" : "Image",
         "req" : "3",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Operator Identification Sequence",
         "usage" : "M"
      },
      "(0046,0211)[<0>](0046,0212)" : {
         "usage" : "M",
         "name" : "Maximum Corneal Curvature",
         "mod_tables" : [
            "table_C.8.30.3-1"
         ],
         "module" : "Corneal Topography Map Analysis",
         "req" : "1",
         "entity" : "Image",
         "desc" : "Maximum curvature in diopters of the measured corneal topography."
      },
      "(0008,1062)[<0>](0040,1101)" : {
         "name" : "Person Identification Code Sequence",
         "usage" : "M",
         "module" : "General Study",
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
      "(0012,0021)" : {
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject",
         "name" : "Clinical Trial Protocol Name",
         "usage" : "U",
         "entity" : "Patient",
         "desc" : [
            "The name of the clinical trial protocol. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.3.1.3"
               }
            },
            "."
         ],
         "req" : "2"
      },
      "(0008,0008)" : [
         {
            "entity" : "Image",
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
            ],
            "req" : "3",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "module" : "General Image",
            "usage" : "M",
            "name" : "Image Type"
         },
         {
            "name" : "Image Type",
            "usage" : "M",
            "module" : "Corneal Topography Map Image",
            "mod_tables" : [
               "table_C.8.30.2-1"
            ],
            "req" : "1",
            "desc" : [
               "Image identification characteristics.",
               [
                  "See ",
                  {
                     "attrs" : {
                        "linkend" : "sect_C.8.30.2.1.1",
                        "xrefstyle" : "select: label"
                     },
                     "el" : "xref"
                  },
                  " for specialization."
               ]
            ],
            "entity" : "Image"
         }
      ],
      "(0008,1032)" : {
         "name" : "Procedure Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "req" : "3",
         "entity" : "Study",
         "desc" : [
            "A Sequence that conveys the type of procedure performed.",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0008,0051)" : {
         "usage" : "M",
         "name" : "Issuer of Accession Number Sequence",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "3",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this sequence."
         ],
         "entity" : "Study"
      },
      "(0038,0060)" : {
         "usage" : "U",
         "name" : "Service Episode ID",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "req" : "3",
         "entity" : "Study",
         "desc" : "Identifier of the Service Episode as assigned by the healthcare provider"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "module" : "Patient",
         "usage" : "M",
         "name" : "Universal Entity ID",
         "entity" : "Patient",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C"
      },
      "(0046,0080)" : {
         "req" : "1",
         "entity" : "Image",
         "desc" : [
            "A sequence that specifies the flattest meridian as defined by the least power of curvature and longest radius of curvature.",
            "Only a single item shall be included in this sequence."
         ],
         "usage" : "M",
         "name" : "Flat Keratometric Axis Sequence",
         "mod_tables" : [
            "table_C.8.30.3-1",
            "table_C.8.25.10-2"
         ],
         "module" : "Corneal Topography Map Analysis"
      },
      "(0400,0500)" : {
         "entity" : "Image",
         "desc" : [
            "Sequence of Items containing encrypted DICOM data.",
            "One or more Items shall be included in this sequence.",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Encrypted Attributes Sequence"
      },
      "(0008,1072)[<0>](0040,1102)" : {
         "req" : "3",
         "entity" : "Series",
         "desc" : "Person's mailing address",
         "usage" : "M",
         "name" : "Person's Address",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series"
      },
      "(0008,0110)[<0>](0008,010c)" : {
         "req" : "1C",
         "desc" : "The coding scheme UID identifier. Required if coding scheme is identified by an ISO 8824 object identifier compatible with the UI VR.",
         "entity" : "Image",
         "usage" : "M",
         "name" : "Coding Scheme UID",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(fffa,fffa)[<0>](0400,0310)" : {
         "entity" : "Image",
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
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "name" : "Certified Timestamp",
         "usage" : "M"
      },
      "(0046,0242)" : {
         "desc" : [
            "Identifies the quality of the topography examination.",
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "ACCEPTABLE",
                     null
                  ],
                  [
                     "MARGINAL",
                     null
                  ],
                  [
                     "NOT_ACCEPTABLE",
                     null
                  ]
               ],
               "type" : "variablelist"
            },
            "Required if a quality rating value exists for the corneal topography map"
         ],
         "entity" : "Image",
         "req" : "1C",
         "module" : "Corneal Topography Map Analysis",
         "mod_tables" : [
            "table_C.8.30.3-1"
         ],
         "usage" : "M",
         "name" : "Corneal Topography Map Quality Evaluation"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a163)" : {
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "name" : "Rational Denominator Value",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series"
      },
      "(0018,a001)" : {
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
         "entity" : "Image",
         "name" : "Contributing Equipment Sequence",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,0096)[<0>](0008,0080)" : {
         "name" : "Institution Name",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "req" : "1C",
         "entity" : "Study",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present."
      },
      "(0008,0110)[<0>](0008,0114)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Coding Scheme External ID",
         "entity" : "Image",
         "desc" : "The coding scheme identifier as defined in an external registry. Required if coding scheme is registered and Coding Scheme UID (0008,010C) is not present.",
         "req" : "2C"
      },
      "(0046,0210)[<0>](0024,0308)" : {
         "name" : "Data Set Source",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.30.3-1",
            "table_10-22"
         ],
         "module" : "Corneal Topography Map Analysis",
         "req" : "1",
         "entity" : "Image",
         "desc" : "Source of the data set e.g., the name of the manufacturer, researcher, university, etc."
      },
      "(0012,0082)" : {
         "name" : "Clinical Trial Protocol Ethics Committee Approval Number",
         "usage" : "U",
         "module" : "Clinical Trial Subject",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "req" : "3",
         "desc" : "Approval number issued by committee described in Clinical Trial Protocol Ethics Committee Name (0012,0081).",
         "entity" : "Patient"
      },
      "(0046,0074)[<0>](0046,0076)" : {
         "entity" : "Image",
         "desc" : "The refractive power of the cornea at the principal meridians, measured in diopters.",
         "req" : "1",
         "mod_tables" : [
            "table_C.8.30.3-1",
            "table_C.8.25.10-2"
         ],
         "module" : "Corneal Topography Map Analysis",
         "name" : "Keratometric Power",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Referenced SOP Sequence",
         "usage" : "M",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "entity" : "Series",
         "req" : "1C"
      },
      "(0018,a001)[<0>](0040,a170)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Purpose of Reference Code Sequence",
         "usage" : "M",
         "entity" : "Image",
         "desc" : [
            "Describes the purpose for which the related equipment is being reference.",
            "Only a single Item shall be included in this sequence.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.12.1.1.5"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "req" : "1"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a162)" : {
         "entity" : "Series",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "name" : "Rational Numerator Value",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0018,a003)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Contribution Description",
         "usage" : "M",
         "entity" : "Image",
         "desc" : "Description of the contribution the equipment made to the composite instance.",
         "req" : "3"
      },
      "(0046,0238)" : {
         "desc" : [
            "The range of best spectacle-corrected distance that might be expected from a functionally normal eye with the topographical characteristics of the analyzed cornea, measured in decimal.",
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
                                    "Typical examples: reference standard is 1, severe vision loss is 0.1."
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
                                    "See ",
                                    {
                                       "attrs" : {
                                          "targetdoc" : "PS3.17",
                                          "targetptr" : "chapter_RR",
                                          "xrefstyle" : "template: Annex %n \u201c%t\u201d in PS3.17"
                                       },
                                       "el" : "olink"
                                    },
                                    " for guidance in converting Decimal Potential Visual Acuity to other customarily used display notation such as 20/20 in the US and 6/6 in Britain."
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
         ],
         "entity" : "Image",
         "req" : "3",
         "module" : "Corneal Topography Map Analysis",
         "mod_tables" : [
            "table_C.8.30.3-1"
         ],
         "usage" : "M",
         "name" : "Decimal Potential Visual Acuity"
      },
      "(0012,0064)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "usage" : "M",
         "name" : "De-identification Method Code Sequence",
         "entity" : "Patient",
         "desc" : [
            "A code describing the mechanism or method use to remove the patient's identity.",
            "One or more Items shall be included in this sequence. Multiple items are used if successive de-identification steps have been performed or to describe options of a defined profile.",
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method (0012,0063) is not present. May be present otherwise."
         ],
         "req" : "1C"
      },
      "(0046,0201)" : {
         "req" : "1",
         "entity" : "Image",
         "desc" : [
            "Identifies the surface of the corneal topography map.",
            {
               "title" : "Enumerated Values:",
               "type" : "variablelist",
               "list" : [
                  [
                     "A",
                     "Anterior"
                  ],
                  [
                     "P",
                     "Posterior"
                  ]
               ]
            }
         ],
         "name" : "Corneal Topography Surface",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.30.3-1"
         ],
         "module" : "Corneal Topography Map Analysis"
      },
      "(0008,001b)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Original Specialized SOP Class UID",
         "usage" : "M",
         "entity" : "Image",
         "desc" : [
            "The SOP Class in which the Instance was originally encoded that has been replaced during a fall-back conversion to the current Related General SOP Class. See ",
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
         "req" : "3"
      },
      "(0088,0200)[<0>](0028,0100)" : {
         "entity" : "Image",
         "desc" : [
            "Number of bits allocated for each pixel sample. Each sample shall have the same number of bits allocated. See ",
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
         "req" : "1",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image",
         "usage" : "M",
         "name" : "Bits Allocated"
      },
      "(0400,0561)[<0>](0400,0565)" : {
         "req" : "1",
         "entity" : "Image",
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
         "name" : "Reason for the Attribute Modification",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0018,1030)" : {
         "name" : "Protocol Name",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "req" : "3",
         "desc" : [
            "User-defined description of the conditions under which the Series was performed.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "This attribute conveys series-specific protocol identification and may or may not be identical to the one presented in the Performed Protocol Code Sequence (0040,0260)."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "entity" : "Series"
      },
      "(0010,0030)" : {
         "desc" : "Birth date of the patient.",
         "entity" : "Patient",
         "req" : "2",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient's Birth Date",
         "usage" : "M"
      },
      "(0010,2160)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "usage" : "M",
         "name" : "Ethnic Group",
         "entity" : "Patient",
         "desc" : "Ethnic group or race of the patient.",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "module" : "General Series",
         "name" : "Scheduled Protocol Code Sequence",
         "usage" : "M",
         "entity" : "Series",
         "desc" : "Sequence describing the Scheduled Protocol following a specific coding scheme. One or more Items are permitted in this sequence.",
         "req" : "3"
      },
      "(0010,1002)[<0>](0010,0021)" : {
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
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "usage" : "M",
         "name" : "Issuer of Patient ID"
      },
      "(0008,1052)[<0>](0040,1101)" : {
         "name" : "Person Identification Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series",
         "req" : "1",
         "entity" : "Series",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0046,0074)" : {
         "name" : "Steep Keratometric Axis Sequence",
         "usage" : "M",
         "module" : "Corneal Topography Map Analysis",
         "mod_tables" : [
            "table_C.8.30.3-1",
            "table_C.8.25.10-2"
         ],
         "req" : "1",
         "desc" : [
            "A sequence that specifies the steepest meridian as defined by the greatest power of curvature and shortest radius of curvature.",
            "Only a single item shall be included in this sequence."
         ],
         "entity" : "Image"
      },
      "(0028,0108)" : {
         "usage" : "M",
         "name" : "Smallest Pixel Value in Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "req" : "3",
         "desc" : "The minimum value of all images in this Series.",
         "entity" : "Series"
      },
      "(0022,0058)[<0>](0022,004e)" : {
         "entity" : "Image",
         "desc" : "The concentration of the agent.",
         "req" : "3",
         "mod_tables" : [
            "table_C.8.17.4-1",
            "table_C.8.17.8-2"
         ],
         "module" : "Ophthalmic Photography Acquisition Parameters",
         "name" : "Mydriatic Agent Concentration",
         "usage" : "M"
      },
      "(0022,000d)" : {
         "req" : "2",
         "desc" : [
            "Whether or not the patient's pupils were pharmacologically dilated for this acquisition.",
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
            "If this tag is empty, no information is available."
         ],
         "entity" : "Image",
         "name" : "Pupil Dilated",
         "usage" : "M",
         "module" : "Ophthalmic Photography Acquisition Parameters",
         "mod_tables" : [
            "table_C.8.17.4-1",
            "table_C.8.17.8-2"
         ]
      },
      "(0018,1050)" : {
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "entity" : "Equipment",
         "req" : "3",
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "name" : "Spatial Resolution"
      },
      "(0040,0275)[<0>](0008,0050)" : {
         "req" : "3",
         "desc" : "An identifier of the Imaging Service Request for this Requested Procedure.",
         "entity" : "Series",
         "usage" : "M",
         "name" : "Accession Number",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ]
      },
      "(0008,0081)" : {
         "req" : "3",
         "desc" : "Mailing address of the institution where the equipment that produced the composite instances is located.",
         "entity" : "Equipment",
         "usage" : "M",
         "name" : "Institution Address",
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ]
      },
      "(0022,001b)[<0>](0022,0009)" : {
         "mod_tables" : [
            "table_C.8.17.4-1",
            "table_C.8.17.8-2"
         ],
         "module" : "Ophthalmic Photography Acquisition Parameters",
         "name" : "Cylinder Axis",
         "usage" : "M",
         "entity" : "Image",
         "desc" : "Axis value in degrees",
         "req" : "1"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a124)" : {
         "entity" : "Series",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "usage" : "M",
         "name" : "UID"
      },
      "(0010,1002)" : {
         "req" : "3",
         "desc" : [
            "A sequence of identification numbers or codes used to identify the patient, which may or may not be human readable, and may or may not have been obtained from an implanted or attached device such as an RFID or barcode.",
            "One or more Items are permitted in this sequence."
         ],
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Other Patient IDs Sequence",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0028,0109)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "name" : "Largest Pixel Value in Series",
         "desc" : "The maximum value of all images in this Series.",
         "entity" : "Series",
         "req" : "3"
      },
      "(0008,1250)[<0>](0040,a170)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "name" : "Purpose of Reference Code Sequence",
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "Zero or more Items shall be included in this sequence.",
            "When absent, implies that the reason for the reference is unknown."
         ],
         "entity" : "Series",
         "req" : "2"
      },
      "(0008,0110)[<0>](0008,0103)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme Version",
         "usage" : "M",
         "desc" : "The coding scheme version associated with the Coding Scheme Designator (0008,0102).",
         "entity" : "Image",
         "req" : "3"
      },
      "(0046,0211)" : {
         "module" : "Corneal Topography Map Analysis",
         "mod_tables" : [
            "table_C.8.30.3-1"
         ],
         "usage" : "M",
         "name" : "Maximum Corneal Curvature Sequence",
         "desc" : "A Sequence to convey the maximum curvature and location of the measured corneal topography. Only a single Item is permitted in this sequence.",
         "entity" : "Image",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a160)" : {
         "usage" : "M",
         "name" : "Text Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ]
      },
      "(0046,0203)" : {
         "req" : "1C",
         "entity" : "Image",
         "desc" : [
            [
               "The horizontal coordinate of the centroid of the pupil relative to location of the cornea vertex specified in the Attribute Corneal Vertex Location (0046,0202), in mm, such that toward the right is positive. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.30.3.1.4",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ],
            "Required if Attribute Corneal Topography Surface (0046,0201) is A (Anterior).",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "This Attribute is conveyed in mm from the corneal vertex because display applications will have zoom and 3-D rotational capabilities."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "usage" : "M",
         "name" : "Pupil Centroid X-Coordinate",
         "mod_tables" : [
            "table_C.8.30.3-1"
         ],
         "module" : "Corneal Topography Map Analysis"
      },
      "(0046,0244)[<0>](0046,0251)" : {
         "mod_tables" : [
            "table_C.8.30.3-1"
         ],
         "module" : "Corneal Topography Map Analysis",
         "usage" : "M",
         "name" : "Refractive Power",
         "entity" : "Image",
         "desc" : [
            "Conveys the optical refraction properties of the cornea, in diopters. It is determined from ray tracing using Snell's Law to calculate the true refractive power.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "It is used to evaluate ocular optics."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "req" : "1"
      },
      "(0088,0200)[<0>](0028,1103)" : {
         "name" : "Blue Palette Color Lookup Table Descriptor",
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
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.6.3.1.5",
                  "xrefstyle" : "select: label"
               }
            },
            " for further explanation."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Series"
      },
      "(0028,0002)" : [
         {
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "module" : "Image Pixel",
            "name" : "Samples per Pixel",
            "usage" : "M",
            "entity" : "Image",
            "desc" : [
               "Number of samples (planes) in this image. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.3.1.1"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            "req" : "1"
         },
         {
            "mod_tables" : [
               "table_C.8.30.2-1"
            ],
            "module" : "Corneal Topography Map Image",
            "name" : "Samples Per Pixel",
            "usage" : "M",
            "entity" : "Image",
            "desc" : [
               "Number of samples (planes) in this image.",
               [
                  "See ",
                  {
                     "attrs" : {
                        "linkend" : "sect_C.7.6.3.1.1",
                        "xrefstyle" : "select: label"
                     },
                     "el" : "xref"
                  },
                  " for further explanation."
               ],
               {
                  "list" : [
                     [
                        "1",
                        null
                     ]
                  ],
                  "type" : "variablelist",
                  "title" : "Enumerated Values:"
               }
            ],
            "req" : "1"
         }
      ],
      "(0010,1002)[<0>](0010,0024)" : {
         "usage" : "M",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "req" : "3",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this sequence."
         ],
         "entity" : "Patient"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0039)" : {
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
         "req" : "3",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "name" : "Assigning Jurisdiction Code Sequence"
      },
      "(0040,0275)[<0>](0040,1001)" : {
         "usage" : "M",
         "name" : "Requested Procedure ID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "module" : "General Series",
         "req" : "1C",
         "entity" : "Series",
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
                     ]
                  },
                  "\n              "
               ]
            }
         ]
      },
      "(0020,0062)" : {
         "module" : "Corneal Topography Map Image",
         "mod_tables" : [
            "table_C.8.30.2-1"
         ],
         "name" : "Image Laterality",
         "usage" : "M",
         "desc" : [
            "Laterality of object imaged (as described in Anatomic Region Sequence (0008,2218)) examined.",
            {
               "title" : "Enumerated Values:",
               "type" : "variablelist",
               "list" : [
                  [
                     "R",
                     "right eye"
                  ],
                  [
                     "L",
                     "left eye"
                  ]
               ]
            },
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "This Attribute is mandatory, in order to ensure that images may be positioned correctly relative to one another for display."
                     ]
                  },
                  "\n                  "
               ]
            },
            "Shall be consistent with any laterality information contained in Primary Anatomic Structure Modifier Sequence (0008,2230), if present.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "Laterality (0020,0060) is a Series level Attribute and must be the same for all Images in the Series, hence it must be absent."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "entity" : "Image",
         "req" : "1"
      },
      "(0012,0030)" : {
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
         "entity" : "Patient",
         "name" : "Clinical Trial Site ID",
         "usage" : "U",
         "module" : "Clinical Trial Subject",
         "mod_tables" : [
            "table_C.7-2b"
         ]
      },
      "(0010,4000)" : {
         "desc" : "User-defined additional information about the patient.",
         "entity" : "Patient",
         "req" : "3",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient Comments",
         "usage" : "M"
      },
      "(0012,0010)" : {
         "entity" : "Patient",
         "desc" : [
            "The name of the clinical trial sponsor. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.1.3.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject",
         "name" : "Clinical Trial Sponsor Name",
         "usage" : "U"
      },
      "(0088,0200)[<0>](0028,0107)" : {
         "name" : "Largest Image Pixel Value",
         "usage" : "M",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "req" : "3",
         "desc" : "The maximum actual pixel value encountered in this image.",
         "entity" : "Image"
      },
      "(0400,0561)[<0>](0400,0563)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Modifying System",
         "entity" : "Image",
         "desc" : "Identification of the system that removed and/or replaced the attributes.",
         "req" : "1"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)" : {
         "req" : "3",
         "entity" : "Series",
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
         "name" : "Content Item Modifier Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "module" : "General Series"
      },
      "(0020,1040)" : {
         "desc" : [
            "Part of the imaging target used as a reference. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.4.1.1.2"
               }
            },
            " for further explanation."
         ],
         "entity" : "Frame of Reference",
         "req" : "2",
         "module" : "Frame of Reference",
         "mod_tables" : [
            "table_C.7-6"
         ],
         "name" : "Position Reference Indicator",
         "usage" : "M"
      },
      "(0008,1140)[<0>](0008,1160)" : {
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
         "entity" : "Image",
         "req" : "1C",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3"
         ],
         "name" : "Referenced Frame Number",
         "usage" : "M"
      },
      "(0046,0244)[<0>](0046,0249)" : {
         "mod_tables" : [
            "table_C.8.30.3-1"
         ],
         "module" : "Corneal Topography Map Analysis",
         "name" : "Axial Power",
         "usage" : "M",
         "entity" : "Image",
         "desc" : [
            "Conveys corneal shape characteristics, in diopters. It is determined from the curvature, \n                  ",
            "r",
            " in mm, of the equivalent sphere with the same slope at a given point on the surface. Axial power = \n                  ",
            "Km/r,",
            " where Km is the Keratometric Index."
         ],
         "req" : "1"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1155)" : {
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Series"
      },
      "(0020,0052)" : {
         "req" : "1",
         "entity" : "Frame of Reference",
         "desc" : [
            "Uniquely identifies the frame of reference for a Series. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.4.1.1.1"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "name" : "Frame of Reference UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-6"
         ],
         "module" : "Frame of Reference"
      },
      "(0008,2112)[<0>](0028,135a)" : {
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
                                    "This applies not only to images with a known relationship to a 3D space, but also to projection images. For example, a projection radiograph such as a mammogram that is processed by a point image processing operation such as contrast enhancement, or a smoothing or edge enhancing convolution, would have a value of YES for this attribute. A projection radiograph that had been magnified or warped geometrically would have a value of NO for this attribute. A projection radiograph that has been flipped, and/or rotated by a multiple of 90 degrees, such that transformation of pixel locations is possible by comparison of the values of Patient Orientation (0020,0020) would have a value of REORIENTED_ONLY. This attribute is typically of importance in relating images with Presentation Intent Type (0008,0068) values of FOR PROCESSING and FOR PRESENTATION."
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
                                    "When the value of this attribute is NO, it is not possible to locate on the current image any pixel coordinates that are referenced relative to the source image, such as for example, might be required for rendering CAD findings derived from a referenced FOR PROCESSING image on the current FOR PRESENTATION image."
                                 ]
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
         "entity" : "Image",
         "req" : "3",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M",
         "name" : "Spatial Locations Preserved"
      },
      "(0038,0014)" : {
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "name" : "Issuer of Admission ID Sequence",
         "desc" : [
            "Identifier of the Assigning Authority that issued Admission ID (0038,0010).",
            "Only a single Item is permitted in this sequence."
         ],
         "entity" : "Study",
         "req" : "3"
      },
      "(0008,2112)[<0>](0062,000b)" : [
         {
            "req" : "1C",
            "entity" : "Image",
            "desc" : [
               "Identifies the Segment Number to which the reference applies.",
               "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
            ],
            "name" : "Referenced Segment Number",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-9",
               "table_10-3"
            ],
            "module" : "General Image"
         },
         {
            "usage" : "M",
            "name" : "Referenced Segment Number",
            "module" : "Corneal Topography Map Analysis",
            "mod_tables" : [
               "table_C.8.30.3-1",
               "table_10-3"
            ],
            "req" : "1C",
            "desc" : [
               "Identifies the Segment Number to which the reference applies.",
               "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
            ],
            "entity" : "Image"
         }
      ],
      "(0028,1203)" : {
         "module" : "Image Pixel",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "usage" : "M",
         "name" : "Blue Palette Color Lookup Table Data",
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
         "entity" : "Image",
         "req" : "1C"
      },
      "(0028,0120)" : {
         "entity" : "Equipment",
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
                     "el" : "orderedlist",
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
                           "el" : "listitem",
                           "content" : [
                              "\n                        ",
                              {
                                 "content" : [
                                    "This Attribute is not used in Presentation State Instances; there is no means in a Presentation State to \"override\" any Pixel Padding Value specified in the referenced images."
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
                                    "This Attribute does apply to RT Dose and Segmentation instances, since they include Pixel Data."
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
                     }
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
         "name" : "Pixel Padding Value",
         "usage" : "M"
      },
      "(0008,1084)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "usage" : "U",
         "name" : "Admitting Diagnoses Code Sequence",
         "entity" : "Study",
         "desc" : [
            "A sequence that conveys the admitting diagnosis (diagnoses).",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3"
      },
      "(0008,3010)" : {
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image",
         "name" : "Irradiation Event UID",
         "usage" : "M",
         "entity" : "Image",
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
         "req" : "3"
      },
      "(0088,0200)[<0>](0028,0006)" : {
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image",
         "name" : "Planar Configuration",
         "usage" : "M",
         "entity" : "Image",
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
         "req" : "1C"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1160)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "name" : "Referenced Frame Number",
         "usage" : "M",
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
         "req" : "1C"
      },
      "(0018,1008)" : {
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "name" : "Gantry ID",
         "desc" : "Identifier of the gantry or positioner.",
         "entity" : "Equipment",
         "req" : "3"
      },
      "(0046,0205)" : {
         "module" : "Corneal Topography Map Analysis",
         "mod_tables" : [
            "table_C.8.30.3-1"
         ],
         "name" : "Equivalent Pupil Radius",
         "usage" : "M",
         "desc" : [
            "The average physical distance in mm from the pupil centroid specified in the Attributes Pupil Centroid X-Coordinate (0046,0203) and Pupil Centroid Y-Coordinate (0046,0204) to the measured perimeter of the pupil.",
            "Required if Attribute Corneal Topography Surface (0046,0201) is A (Anterior).",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "When the pupil is not able to be determined the typical estimate is 4mm."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "entity" : "Image",
         "req" : "1C"
      },
      "(0032,1034)" : {
         "entity" : "Study",
         "desc" : [
            "Institutional department where the request initiated.",
            "Only a single item is permitted in this sequence."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "usage" : "M",
         "name" : "Requesting Service Code Sequence"
      },
      "(0020,000e)" : {
         "usage" : "M",
         "name" : "Series Instance UID",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "req" : "1",
         "entity" : "Series",
         "desc" : "Unique identifier of the Series."
      },
      "(0018,a001)[<0>](0008,0081)" : {
         "req" : "3",
         "entity" : "Image",
         "desc" : "Address of the institution where the equipment that contributed to the composite instance is located.",
         "usage" : "M",
         "name" : "Institution Address",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0022,001b)[<0>](0022,0008)" : {
         "name" : "Cylinder Lens Power",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.17.4-1",
            "table_C.8.17.8-2"
         ],
         "module" : "Ophthalmic Photography Acquisition Parameters",
         "req" : "1",
         "entity" : "Image",
         "desc" : "Cylinder value in diopters"
      },
      "(0008,1052)[<0>](0040,1103)" : {
         "req" : "3",
         "entity" : "Series",
         "desc" : "Person's telephone number(s)",
         "name" : "Person's Telephone Numbers",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series"
      },
      "(0018,1020)" : [
         {
            "name" : "Software Versions",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-8"
            ],
            "module" : "General Equipment",
            "req" : "3",
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
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.5.1.1.3"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "entity" : "Equipment",
            "req" : "1",
            "module" : "Enhanced General Equipment",
            "mod_tables" : [
               "table_C.7-8b"
            ],
            "usage" : "M",
            "name" : "Software Versions"
         }
      ],
      "(0028,0300)" : {
         "req" : "3",
         "entity" : "Image",
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
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.12",
                     "xrefstyle" : "select: label"
                  }
               }
            ]
         ],
         "usage" : "M",
         "name" : "Quality Control Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image"
      },
      "(0088,0200)[<0>](0028,0002)" : {
         "usage" : "M",
         "name" : "Samples per Pixel",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "req" : "1",
         "desc" : [
            "Number of samples (planes) in this image. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.3.1.1"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0020,000d)" : {
         "name" : "Study Instance UID",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "req" : "3",
         "desc" : "The unique identifier for the Study provided for this Requested Procedure.",
         "entity" : "Series"
      },
      "(0008,0051)[<0>](0040,0031)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "module" : "General Study",
         "name" : "Local Namespace Entity ID",
         "usage" : "M",
         "entity" : "Study",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a043)" : {
         "entity" : "Series",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "usage" : "M",
         "name" : "Concept Name Code Sequence"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,08ea)" : {
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "name" : "Measurement Units Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series"
      },
      "(0008,1052)[<0>](0040,1102)" : {
         "req" : "3",
         "desc" : "Person's mailing address",
         "entity" : "Series",
         "name" : "Person's Address",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ]
      },
      "(0008,1110)" : {
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
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
         "entity" : "Study",
         "req" : "3"
      },
      "(0040,0275)[<0>](0032,1060)" : {
         "req" : "3",
         "entity" : "Series",
         "desc" : "Institution-generated administrative description or classification of Requested Procedure.",
         "name" : "Requested Procedure Description",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "module" : "General Series"
      },
      "(0028,2112)" : [
         {
            "entity" : "Image",
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
                                       "For example, a compression ratio of 30:1 would be described in this Attribute with a single value of 30."
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
                                    "el" : "para",
                                    "content" : [
                                       "For historical reasons, the lossy compression ratio may also be described in Derivation Description (0008,2111)."
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
            "req" : "3",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "module" : "General Image",
            "usage" : "M",
            "name" : "Lossy Image Compression Ratio"
         },
         {
            "req" : "1C",
            "desc" : [
               "Describes the approximate lossy compression ratio(s) that have been applied to this image.",
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
               "May be multivalued if successive lossy compression steps have been applied.",
               {
                  "content" : [
                     "\n                    ",
                     {
                        "content" : [
                           "For example, a compression ratio of 30:1 would be described in this Attribute with a single value of 30."
                        ],
                        "el" : "para"
                     },
                     "\n                  "
                  ],
                  "el" : "note"
               },
               "Required if Lossy Images Compression (0028,2110) is \"01\"."
            ],
            "entity" : "Image",
            "name" : "Lossy Image Compression Ratio",
            "usage" : "M",
            "module" : "Corneal Topography Map Image",
            "mod_tables" : [
               "table_C.8.30.2-1"
            ]
         }
      ],
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1150)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "General Series",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1"
      },
      "(0008,0096)[<0>](0040,1101)" : {
         "entity" : "Study",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "name" : "Person Identification Code Sequence",
         "usage" : "M"
      },
      "(0012,0083)" : {
         "entity" : "Study",
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
         "req" : "3",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "module" : "Clinical Trial Study",
         "name" : "Consent for Clinical Trial Use Sequence",
         "usage" : "U"
      },
      "(0400,0561)[<0>](0400,0562)" : {
         "req" : "1",
         "entity" : "Image",
         "desc" : "Date and time the attributes were removed and/or replaced.",
         "name" : "Attribute Modification DateTime",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0046,0210)" : {
         "entity" : "Image",
         "desc" : [
            "Identifies the data set used for corneal topography mapping values from a normative data base. Required if a normative data base was used.",
            "Only a single Item shall be permitted in this sequence."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.8.30.3-1"
         ],
         "module" : "Corneal Topography Map Analysis",
         "name" : "Corneal Topography Mapping Normals Sequence",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a040)" : {
         "req" : "1",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series"
      },
      "(0088,0200)[<0>](0028,0010)" : {
         "name" : "Rows",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image",
         "req" : "1",
         "entity" : "Image",
         "desc" : "Number of rows in the image."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a122)" : {
         "usage" : "M",
         "name" : "Time",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "entity" : "Series"
      },
      "(0028,0011)" : {
         "req" : "1",
         "desc" : "Number of columns in the image",
         "entity" : "Image",
         "name" : "Columns",
         "usage" : "M",
         "module" : "Image Pixel",
         "mod_tables" : [
            "table_C.7-11b"
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1101)" : {
         "req" : "1",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Image",
         "name" : "Person Identification Code Sequence",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ]
      },
      "(0028,0004)" : [
         {
            "module" : "Image Pixel",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "usage" : "M",
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
            "entity" : "Image",
            "req" : "1"
         },
         {
            "req" : "1",
            "desc" : [
               "Specified the intended interpretation of the pixel data.",
               [
                  "See ",
                  {
                     "attrs" : {
                        "linkend" : "sect_C.7.6.3.1.2",
                        "xrefstyle" : "select: label"
                     },
                     "el" : "xref"
                  },
                  " for further explanation."
               ],
               {
                  "title" : "Enumerated Values:",
                  "type" : "variablelist",
                  "list" : [
                     [
                        "PALETTE COLOR",
                        null
                     ]
                  ]
               }
            ],
            "entity" : "Image",
            "name" : "Photometric Interpretation",
            "usage" : "M",
            "module" : "Corneal Topography Map Image",
            "mod_tables" : [
               "table_C.8.30.2-1"
            ]
         }
      ],
      "(0008,1049)[<0>](0040,1102)" : {
         "usage" : "M",
         "name" : "Person's Address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "req" : "3",
         "entity" : "Study",
         "desc" : "Person's mailing address"
      },
      "(0008,1072)[<0>](0008,0081)" : {
         "name" : "Institution Address",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "req" : "3",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "entity" : "Series"
      },
      "(4ffe,0001)[<0>](0400,0005)" : {
         "desc" : "A number, unique within this SOP Instance, used to identify this MAC Parameters Sequence (4FFE,0001) item from an Item of the Digital Signatures Sequence (FFFA,FFFA).",
         "entity" : "Image",
         "req" : "1",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "MAC ID Number",
         "usage" : "M"
      },
      "(0046,0080)[<0>](0046,0076)" : {
         "name" : "Keratometric Power",
         "usage" : "M",
         "module" : "Corneal Topography Map Analysis",
         "mod_tables" : [
            "table_C.8.30.3-1",
            "table_C.8.25.10-2"
         ],
         "req" : "1",
         "desc" : "The refractive power of the cornea at the principal meridians, measured in diopters.",
         "entity" : "Image"
      },
      "(0008,1062)" : {
         "name" : "Physician(s) Reading Study Identification Sequence",
         "usage" : "M",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "3",
         "desc" : "Identification of the physician(s) reading the Study. One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Name of Physician(s) Reading Study (0008,1060), if present.",
         "entity" : "Study"
      },
      "(0010,0024)[<0>](0040,0036)" : {
         "usage" : "M",
         "name" : "Assigning Facility Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "req" : "3",
         "entity" : "Patient",
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
      "(4ffe,0001)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "MAC Parameters Sequence",
         "entity" : "Image",
         "desc" : [
            "A sequence of items that describe the parameters used to calculate a MAC for use in Digital Signatures.",
            "One or more Items shall be included in this sequence."
         ],
         "req" : "3"
      },
      "(2050,0020)" : {
         "desc" : [
            "When present, specifies an identity transformation for the Presentation LUT such that the output of all grayscale transformations, if any, are defined to be in P-Values.",
            {
               "list" : [
                  [
                     "IDENTITY",
                     "output is in P-Values - shall be used if Photometric Interpretation (0028,0004) is MONOCHROME2 or any color photometric interpretation."
                  ],
                  [
                     "INVERSE",
                     "output after inversion is in P-Values - shall be used if Photometric Interpretation (0028,0004) is MONOCHROME1."
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            },
            "When this attribute is used with a color photometric interpretation then the luminance component is in P-Values."
         ],
         "entity" : "Image",
         "req" : "3",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M",
         "name" : "Presentation LUT Shape"
      },
      "(0400,0561)[<0>](0400,0564)" : {
         "name" : "Source of Previous Values",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "2",
         "desc" : "The source that provided the SOP Instance prior to the removal or replacement of the values. For example, this might be the Institution from which imported SOP Instances were received.",
         "entity" : "Image"
      },
      "(0028,0303)" : {
         "req" : "3",
         "entity" : "Image",
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
                     "xrefstyle" : "select: labelnumber",
                     "targetdoc" : "PS3.15",
                     "targetptr" : "PS3.15"
                  },
                  "el" : "olink"
               },
               "."
            ]
         ],
         "name" : "Longitudinal Temporal Information Modified",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Referenced SOP Sequence",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "entity" : "Series",
         "req" : "1C"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a120)" : {
         "entity" : "Series",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "name" : "DateTime",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1155)" : {
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Series",
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "usage" : "M",
         "name" : "Assigning Facility Sequence",
         "entity" : "Patient",
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
         "req" : "3"
      },
      "(0008,0021)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Series Date",
         "usage" : "M",
         "desc" : "Date the Series started.",
         "entity" : "Series",
         "req" : "3"
      },
      "(0010,1010)" : {
         "req" : "3",
         "desc" : "Age of the Patient.",
         "entity" : "Study",
         "usage" : "U",
         "name" : "Patient's Age",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0008,2218)[<0>](0008,2220)" : {
         "desc" : [
            "Sequence of Items that modifies the anatomic region of interest of this Instance.",
            "One or more Items are permitted in this sequence."
         ],
         "entity" : "Image",
         "req" : "3",
         "module" : "Corneal Topography Map Image",
         "mod_tables" : [
            "table_C.8.30.2-1",
            "table_10-5"
         ],
         "name" : "Anatomic Region Modifier Sequence",
         "usage" : "M"
      },
      "(0022,000a)" : {
         "req" : "2",
         "entity" : "Image",
         "desc" : "Emmetropic magnification value (dimensionless). Zero length means the emmetropic magnification was not measured.",
         "usage" : "M",
         "name" : "Emmetropic Magnification",
         "mod_tables" : [
            "table_C.8.17.4-1",
            "table_C.8.17.8-2"
         ],
         "module" : "Ophthalmic Photography Acquisition Parameters"
      },
      "(0020,0010)" : {
         "entity" : "Study",
         "desc" : "User or equipment generated Study identifier.",
         "req" : "2",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "name" : "Study ID",
         "usage" : "M"
      },
      "(4ffe,0001)[<0>](0400,0010)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "name" : "MAC Calculation Transfer Syntax UID",
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
         "entity" : "Image",
         "req" : "1"
      },
      "(0008,1062)[<0>](0008,0080)" : {
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "entity" : "Study",
         "req" : "1C",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Name",
         "usage" : "M"
      },
      "(0012,0083)[<0>](0012,0084)" : {
         "name" : "Distribution Type",
         "usage" : "U",
         "module" : "Clinical Trial Study",
         "mod_tables" : [
            "table_C.7-4b"
         ],
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
                     "linkend" : "sect_C.7.2.3.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Required if Consent for Distribution Flag (0012,0085) equals YES or WITHDRAWN."
         ],
         "entity" : "Study"
      },
      "(0010,2299)" : {
         "req" : "2C",
         "desc" : [
            "Name of organization with medical decision making authority for the patient.",
            "Required if patient is an animal. May be present otherwise."
         ],
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Responsible Organization",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0018,a001)[<0>](0018,1020)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Software Versions",
         "usage" : "M",
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
         "entity" : "Image",
         "req" : "3"
      },
      "(0040,0250)" : {
         "name" : "Performed Procedure Step End Date",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "module" : "General Series",
         "req" : "3",
         "entity" : "Series",
         "desc" : "Date on which the Performed Procedure Step ended."
      },
      "(0010,0024)[<0>](0040,0039)" : {
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
         "entity" : "Patient",
         "req" : "3",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "name" : "Assigning Jurisdiction Code Sequence"
      },
      "(0012,0042)" : {
         "usage" : "U",
         "name" : "Clinical Trial Subject Reading ID",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject",
         "req" : "1C",
         "entity" : "Patient",
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
         ]
      },
      "(0040,0253)" : {
         "usage" : "M",
         "name" : "Performed Procedure Step ID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "module" : "General Series",
         "req" : "3",
         "entity" : "Series",
         "desc" : "User or equipment generated identifier of that part of a Procedure that has been carried out within this step."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a122)" : {
         "usage" : "M",
         "name" : "Time",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ]
      },
      "(0046,0220)" : {
         "mod_tables" : [
            "table_C.8.30.3-1"
         ],
         "module" : "Corneal Topography Map Analysis",
         "name" : "Average Corneal Power",
         "usage" : "M",
         "entity" : "Image",
         "desc" : [
            "The area-corrected average of the corneal power ahead of the entrance pupil, measured in diopters.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "It is generally equal to the keratometric spherical equivalent except for decentered refractive surgical procedures. It is used in intraocular lens calculations."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "req" : "1"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
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
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a124)" : {
         "name" : "UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ]
      },
      "(0040,9096)[<0>](0040,08ea)" : [
         {
            "desc" : [
               "Units of measurement.",
               "Only a single Item shall be included in this sequence.",
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
            ],
            "entity" : "Image",
            "req" : "1",
            "module" : "General Image",
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7.6.16-12b"
            ],
            "usage" : "M",
            "name" : "Measurement Units Code Sequence"
         },
         {
            "module" : "Corneal Topography Map Image",
            "mod_tables" : [
               "table_C.8.30.2-1",
               "table_C.7.6.16-12",
               "table_C.7.6.16-12b"
            ],
            "name" : "Measurement Units Code Sequence",
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
            ],
            "entity" : "Image",
            "req" : "1"
         }
      ],
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a043)" : {
         "req" : "1",
         "entity" : "Series",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "M",
         "name" : "Concept Name Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series"
      },
      "(0012,0051)" : {
         "name" : "Clinical Trial Time Point Description",
         "usage" : "U",
         "module" : "Clinical Trial Study",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "req" : "3",
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
         "entity" : "Study"
      },
      "(0020,1002)" : {
         "req" : "3",
         "desc" : "Number of images that resulted from this acquisition of data",
         "entity" : "Image",
         "name" : "Images in Acquisition",
         "usage" : "M",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ]
      },
      "(0038,0014)[<0>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "usage" : "U",
         "module" : "Patient Study",
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
      "(0008,0050)" : {
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "name" : "Accession Number",
         "desc" : "A RIS generated number that identifies the order for the Study.",
         "entity" : "Study",
         "req" : "2"
      },
      "(0008,0110)[<0>](0008,0112)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme Registry",
         "usage" : "M",
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
         "entity" : "Image",
         "req" : "1C"
      },
      "(0018,a001)[<0>](0008,1040)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Institutional Department Name",
         "desc" : "Department in the institution where the equipment that contributed to the composite instance is located.",
         "entity" : "Image",
         "req" : "3"
      },
      "(0018,5100)" : {
         "req" : "2C",
         "entity" : "Series",
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
         "usage" : "M",
         "name" : "Patient Position",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1102)" : {
         "req" : "3",
         "desc" : "Person's mailing address",
         "entity" : "Image",
         "name" : "Person's Address",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ]
      },
      "(0008,0070)" : [
         {
            "entity" : "Equipment",
            "desc" : "Manufacturer of the equipment that produced the composite instances.",
            "req" : "2",
            "mod_tables" : [
               "table_C.7-8"
            ],
            "module" : "General Equipment",
            "name" : "Manufacturer",
            "usage" : "M"
         },
         {
            "req" : "1",
            "desc" : "Manufacturer of the equipment that produced the composite instances.",
            "entity" : "Equipment",
            "usage" : "M",
            "name" : "Manufacturer",
            "module" : "Enhanced General Equipment",
            "mod_tables" : [
               "table_C.7-8b"
            ]
         }
      ],
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a122)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "name" : "Time",
         "usage" : "M",
         "entity" : "Series",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "req" : "1C"
      },
      "(0028,0101)" : [
         {
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "module" : "Image Pixel",
            "usage" : "M",
            "name" : "Bits Stored",
            "entity" : "Image",
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
            ],
            "req" : "1"
         },
         {
            "req" : "1",
            "entity" : "Image",
            "desc" : [
               "Number of bits stored for each pixel sample.",
               {
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
                  ],
                  "title" : "Enumerated Values:"
               }
            ],
            "usage" : "M",
            "name" : "Bits Stored",
            "mod_tables" : [
               "table_C.8.30.2-1"
            ],
            "module" : "Corneal Topography Map Image"
         }
      ],
      "(0046,0227)" : {
         "mod_tables" : [
            "table_C.8.30.3-1"
         ],
         "module" : "Corneal Topography Map Analysis",
         "usage" : "M",
         "name" : "Analyzed Area",
         "entity" : "Image",
         "desc" : "The corneal surface area that can be analyzed, measured in mm squared.",
         "req" : "1"
      },
      "(0040,0555)[<0>](0040,a30a)" : {
         "req" : "1C",
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a set of one or more numeric values.",
            "Required if the value that Concept Name Code Sequence (0040,A043) requires (implies) is a set of one or more integers or real numbers. Shall not be present otherwise."
         ],
         "entity" : "Image",
         "usage" : "M",
         "name" : "Numeric Value",
         "module" : "Acquisition Context",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ]
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
         "entity" : "Study",
         "req" : "1C",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "name" : "Universal Entity ID Type",
         "usage" : "U"
      },
      "(0018,a001)[<0>](0018,a002)" : {
         "req" : "3",
         "desc" : "The Date & Time when the equipment contributed to the composite instance.",
         "entity" : "Image",
         "name" : "Contribution DateTime",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,001a)" : {
         "usage" : "M",
         "name" : "Related General SOP Class UID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "req" : "3",
         "entity" : "Image",
         "desc" : [
            "Uniquely identifies a Related General SOP Class for the SOP Class of this Instance. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: labelnumber",
                  "targetptr" : "PS3.4",
                  "targetdoc" : "PS3.4"
               },
               "el" : "olink"
            },
            "."
         ]
      },
      "(0022,0006)" : {
         "entity" : "Image",
         "desc" : [
            "Coded value for patient movement or orientation, which is the intent, and not necessarily the result, based on what the patient is capable of.",
            "Required if the value of Patient Eye Movement Commanded (0022,0005) is YES.",
            "Only a single item shall be included in this sequence."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.8.17.4-1"
         ],
         "module" : "Ophthalmic Photography Acquisition Parameters",
         "usage" : "M",
         "name" : "Patient Eye Movement Command Code Sequence"
      },
      "(0008,1250)[<0>](0020,000e)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "name" : "Series Instance UID",
         "usage" : "M",
         "entity" : "Series",
         "desc" : "Instance UID of Related Series",
         "req" : "1"
      },
      "(0008,103f)" : {
         "usage" : "M",
         "name" : "Series Description Code Sequence",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "req" : "3",
         "entity" : "Series",
         "desc" : [
            "A coded description of the Series.",
            "Only a single Item is permitted in this sequence."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a162)" : {
         "req" : "1C",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "entity" : "Series",
         "usage" : "M",
         "name" : "Rational Numerator Value",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0040,0280)" : {
         "name" : "Comments on the Performed Procedure Step",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "req" : "3",
         "desc" : "User-defined comments on the Performed Procedure Step.",
         "entity" : "Series"
      },
      "(0028,0034)" : [
         {
            "req" : "1C",
            "entity" : "Image",
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
            "name" : "Pixel Aspect Ratio",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "module" : "Image Pixel"
         },
         {
            "req" : "1",
            "desc" : "Ratio of the vertical size and horizontal size of the pixels in the image specified by a pair of integer values where the first value is the vertical pixel size, and the second value is the horizontal pixel size.",
            "entity" : "Image",
            "name" : "Pixel Aspect Ratio",
            "usage" : "M",
            "module" : "Corneal Topography Map Image",
            "mod_tables" : [
               "table_C.8.30.2-1"
            ]
         }
      ],
      "(0028,1101)" : {
         "name" : "Red Palette Color Lookup Table Descriptor",
         "usage" : "M",
         "module" : "Image Pixel",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "req" : "1C",
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
         "entity" : "Image"
      },
      "(fffa,fffa)[<0>](0400,0105)" : {
         "usage" : "M",
         "name" : "Digital Signature DateTime",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "req" : "1",
         "entity" : "Image",
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
         ]
      },
      "(0046,0215)" : {
         "entity" : "Image",
         "desc" : [
            "A sequence that specifies the lowest power obtained when averaging individual meridian.",
            "Only one item shall be permitted.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "The measurement is typically taken at 3-4 mm from the corneal vertex."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.8.30.3-1"
         ],
         "module" : "Corneal Topography Map Analysis",
         "name" : "Minimum Keratometric Sequence",
         "usage" : "M"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0032)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "name" : "Universal Entity ID",
         "usage" : "M",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "Patient",
         "req" : "1C"
      },
      "(0012,0031)" : {
         "module" : "Clinical Trial Subject",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "name" : "Clinical Trial Site Name",
         "usage" : "U",
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
         "entity" : "Patient",
         "req" : "2"
      },
      "(0008,2228)" : {
         "entity" : "Image",
         "desc" : [
            "Sequence of Items that identifies the primary anatomic structure(s) of interest in this Instance.",
            "One or more Items are permitted in this sequence."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.8.30.2-1",
            "table_10-5",
            "table_10-8"
         ],
         "module" : "Corneal Topography Map Image",
         "name" : "Primary Anatomic Structure Sequence",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a168)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "usage" : "M",
         "name" : "Concept Code Sequence",
         "entity" : "Series",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "req" : "1C"
      },
      "(0008,0030)" : {
         "desc" : "Time the Study started.",
         "entity" : "Study",
         "req" : "2",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Study Time",
         "usage" : "M"
      },
      "(0040,0555)[<0>](0040,a163)" : {
         "req" : "1C",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "entity" : "Image",
         "usage" : "M",
         "name" : "Rational Denominator Value",
         "module" : "Acquisition Context",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0062,000b)" : {
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "entity" : "Series",
         "req" : "1C",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Referenced Segment Number",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a30a)" : {
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "name" : "Numeric Value",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series"
      },
      "(0008,0013)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Instance Creation Time",
         "desc" : [
            "Time the SOP Instance was created.",
            "This is the time that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "entity" : "Image",
         "req" : "3"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0031)" : {
         "usage" : "M",
         "name" : "Local Namespace Entity ID",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "req" : "1C",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "Series"
      },
      "(0040,9096)[<0>](0040,9224)" : [
         {
            "name" : "Real World Value Intercept",
            "usage" : "M",
            "module" : "General Image",
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7.6.16-12b"
            ],
            "req" : "1C",
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
               "Required if Real World Value LUT Data (0040,9212) is not present."
            ],
            "entity" : "Image"
         },
         {
            "req" : "1C",
            "desc" : [
               "The Intercept value in relationship between stored values (SV) and the Real World values.",
               [
                  "See ",
                  {
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.7.6.16.2.11.1.2"
                     },
                     "el" : "xref"
                  },
                  " for further explanation."
               ],
               "Required if Real World Value LUT Data (0040,9212) is not present."
            ],
            "entity" : "Image",
            "name" : "Real World Value Intercept",
            "usage" : "M",
            "module" : "Corneal Topography Map Image",
            "mod_tables" : [
               "table_C.8.30.2-1",
               "table_C.7.6.16-12",
               "table_C.7.6.16-12b"
            ]
         }
      ],
      "(0010,1002)[<0>](0010,0022)" : {
         "usage" : "M",
         "name" : "Type of Patient ID",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "1",
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
                     "el" : "para",
                     "content" : [
                        "The identifier is coded as a string regardless of the type, not as a binary value."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "entity" : "Patient"
      },
      "(0088,0200)[<0>](0028,0004)" : {
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "name" : "Photometric Interpretation",
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
         "entity" : "Image",
         "req" : "1"
      },
      "(0008,1062)[<0>](0008,0081)" : {
         "entity" : "Study",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "name" : "Institution Address",
         "usage" : "M"
      },
      "(0040,9096)[<0>](0040,9216)" : [
         {
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7.6.16-12b"
            ],
            "module" : "General Image",
            "usage" : "M",
            "name" : "Real World Value First Value Mapped",
            "entity" : "Image",
            "desc" : [
               "Specifies the first stored value mapped for the Real Word Value Intercept (0040,9224) and Real World Value Slope (0040,9225) or Real World Value LUT (0040,9212) of this Item.",
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
            ],
            "req" : "1"
         },
         {
            "mod_tables" : [
               "table_C.8.30.2-1",
               "table_C.7.6.16-12",
               "table_C.7.6.16-12b"
            ],
            "module" : "Corneal Topography Map Image",
            "usage" : "M",
            "name" : "Real World Value First Value Mapped",
            "entity" : "Image",
            "desc" : [
               "Specifies the first stored value mapped for the Real Word Value Intercept (0040,9224) and Real World Value Slope (0040,9225) or Real World Value LUT (0040,9212) of this Item.",
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
            "req" : "1"
         }
      ],
      "(0018,a001)[<0>](0018,1200)" : {
         "req" : "3",
         "entity" : "Image",
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
         "name" : "Date of Last Calibration",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0028,0006)" : {
         "name" : "Planar Configuration",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "module" : "Image Pixel",
         "req" : "1C",
         "entity" : "Image",
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
         ]
      },
      "(0028,0302)" : [
         {
            "req" : "3",
            "entity" : "Image",
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
            "name" : "Recognizable Visual Features",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "module" : "General Image"
         },
         {
            "name" : "Recognizable Visual Features",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8.30.2-1"
            ],
            "module" : "Corneal Topography Map Image",
            "req" : "1",
            "entity" : "Image",
            "desc" : [
               "Indicates whether or not the image contains sufficiently recognizable visual features to allow the image or a reconstruction from a set of images to identify the patient.",
               {
                  "title" : "Enumerated Values:",
                  "list" : [
                     [
                        "YES",
                        null
                     ]
                  ],
                  "type" : "variablelist"
               },
               {
                  "content" : [
                     "\n                    ",
                     {
                        "content" : [
                           "Corneal topography is similar to finger prints as it is unique to individuals. Therefore, it could be used by a trained person or an expert system to identify the patient."
                        ],
                        "el" : "para"
                     },
                     "\n                  "
                  ],
                  "el" : "note"
               }
            ]
         }
      ],
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
                                 "el" : "para",
                                 "content" : [
                                    "The \"+\" sign may not be omitted."
                                 ]
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
         "entity" : "Image",
         "req" : "3",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Timezone Offset From UTC",
         "usage" : "M"
      },
      "(0008,1052)[<0>](0008,0081)" : {
         "usage" : "M",
         "name" : "Institution Address",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series",
         "req" : "3",
         "entity" : "Series",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable."
      },
      "(0100,0424)" : {
         "name" : "SOP Authorization Comment",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "req" : "3",
         "entity" : "Image",
         "desc" : "Any comments associated with the setting of the SOP Instance Status (0100,0410) to AO."
      },
      "(0020,0012)" : {
         "entity" : "Image",
         "desc" : "A number identifying the single continuous gathering of data over a period of time that resulted in this image.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image",
         "name" : "Acquisition Number",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a122)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "usage" : "M",
         "name" : "Time",
         "entity" : "Series",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "req" : "1C"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,08ea)" : {
         "name" : "Measurement Units Code Sequence",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
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
      "(0040,0555)[<0>](0040,a040)" : {
         "req" : "3",
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
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_10.2"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "entity" : "Image",
         "name" : "Value Type",
         "usage" : "M",
         "module" : "Acquisition Context",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ]
      },
      "(0040,0555)[<0>](0040,a043)" : {
         "name" : "Concept Name Code Sequence",
         "usage" : "M",
         "module" : "Acquisition Context",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "req" : "1",
         "desc" : [
            "A concept that constrains the meaning of (i.e., defines the role of) the Observation Value. The \"Name\" component of a Name/Value pair.",
            "Only a single Item shall be included in this sequence."
         ],
         "entity" : "Image"
      },
      "(0008,1110)[<0>](0008,1155)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "module" : "General Study",
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "entity" : "Study",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1"
      },
      "(0088,0200)[<0>](0028,0102)" : {
         "name" : "High Bit",
         "usage" : "M",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
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
         "entity" : "Image"
      },
      "(0008,1060)" : {
         "usage" : "M",
         "name" : "Name of Physician(s) Reading Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "req" : "3",
         "entity" : "Study",
         "desc" : "Names of the physician(s) reading the Study."
      },
      "(0020,0011)" : {
         "usage" : "M",
         "name" : "Series Number",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "req" : "2",
         "desc" : "A number that identifies this Series.",
         "entity" : "Series"
      },
      "(0010,0010)" : {
         "name" : "Patient's Name",
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "2",
         "desc" : "Patient's full name.",
         "entity" : "Patient"
      },
      "(0028,0010)" : {
         "name" : "Rows",
         "usage" : "M",
         "module" : "Image Pixel",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "req" : "1",
         "desc" : "Number of rows in the image.",
         "entity" : "Image"
      },
      "(0008,1072)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "usage" : "M",
         "name" : "Operator Identification Sequence",
         "entity" : "Series",
         "desc" : [
            "Identification of the operator(s) supporting the Series.",
            "One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Operators' Name (0008,1070), if present."
         ],
         "req" : "3"
      },
      "(0008,2112)" : [
         {
            "usage" : "M",
            "name" : "Source Image Sequence",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "module" : "General Image",
            "req" : "3",
            "entity" : "Image",
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
            ]
         },
         {
            "mod_tables" : [
               "table_C.8.30.3-1"
            ],
            "module" : "Corneal Topography Map Analysis",
            "usage" : "M",
            "name" : "Source Image Sequence",
            "entity" : "Image",
            "desc" : [
               "The Image SOP Class/Instance pair of the Image that was used to generate this corneal topography map.",
               {
                  "content" : [
                     "\n                    ",
                     {
                        "content" : [
                           "Attribute Corneal Vertex Location (0046,0202) in this corneal topography map has been generated by the source image and provides the registration of the Corneal Topography Map to the Source Image."
                        ],
                        "el" : "para"
                     },
                     "\n                  "
                  ],
                  "el" : "note"
               },
               [
                  "See ",
                  {
                     "attrs" : {
                        "linkend" : "sect_C.8.30.3.1.2",
                        "xrefstyle" : "select: label"
                     },
                     "el" : "xref"
                  },
                  " for further explanation."
               ],
               "Only a single Item shall be permitted in this sequence."
            ],
            "req" : "1"
         }
      ],
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1160)" : {
         "usage" : "M",
         "name" : "Referenced Frame Number",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "Identifies the frame numbers within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1.",
            {
               "content" : [
                  "\n                ",
                  {
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
      "(0046,0224)" : {
         "entity" : "Image",
         "desc" : [
            "Quantifies the inferior-superior dioptric asymmetry along the vertical meridian to discriminate Keratoconus, measured in diopters.",
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
                                    "See Rabinowitz YS and McDonnell PJ. \"Computer-assisted corneal topography in keratoconus. Refract Corneal Surg. 1989 Nov-Dec;5(6):400-8\"."
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
                                    "If I-S > 1.4 D, the cornea may be classified as Keratoconus Suspect. If I-S > 1.9, enough asymmetry is present in the topography to classify the cornea as clinical Keratoconus."
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
               ]
            }
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.8.30.3-1"
         ],
         "module" : "Corneal Topography Map Analysis",
         "name" : "Corneal I-S Value",
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0020)" : {
         "usage" : "M",
         "name" : "Patient ID",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "req" : "1",
         "entity" : "Patient",
         "desc" : "An identification number or code used to identify the patient."
      },
      "(0046,0234)" : {
         "req" : "3",
         "desc" : "Index used to measure the eccentricity of the cornea (no units).",
         "entity" : "Image",
         "usage" : "M",
         "name" : "Corneal Eccentricity Index",
         "module" : "Corneal Topography Map Analysis",
         "mod_tables" : [
            "table_C.8.30.3-1"
         ]
      },
      "(0012,0040)" : {
         "req" : "1C",
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
         "entity" : "Patient",
         "usage" : "U",
         "name" : "Clinical Trial Subject ID",
         "module" : "Clinical Trial Subject",
         "mod_tables" : [
            "table_C.7-2b"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a161)" : {
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "entity" : "Series",
         "req" : "1C",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Floating Point Value"
      },
      "(0022,000b)" : {
         "req" : "2",
         "entity" : "Image",
         "desc" : [
            "Value of intraocular pressure in mmHg.",
            "Zero length means the pressure was not measured"
         ],
         "name" : "Intra Ocular Pressure",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.17.4-1",
            "table_C.8.17.8-2"
         ],
         "module" : "Ophthalmic Photography Acquisition Parameters"
      },
      "(0010,0024)[<0>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "req" : "1C",
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
         "entity" : "Patient"
      },
      "(0010,1020)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "usage" : "U",
         "name" : "Patient's Size",
         "entity" : "Study",
         "desc" : "Length or size of the Patient, in meters.",
         "req" : "3"
      },
      "(0040,0244)" : {
         "usage" : "M",
         "name" : "Performed Procedure Step Start Date",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "module" : "General Series",
         "req" : "3",
         "entity" : "Series",
         "desc" : "Date on which the Performed Procedure Step started."
      },
      "(0008,0032)" : {
         "name" : "Acquisition Time",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image",
         "req" : "3",
         "entity" : "Image",
         "desc" : "The time the acquisition of data that resulted in this image started"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a121)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Date",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "entity" : "Series",
         "req" : "1C"
      },
      "(0028,0100)" : [
         {
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "module" : "Image Pixel",
            "usage" : "M",
            "name" : "Bits Allocated",
            "entity" : "Image",
            "desc" : [
               "Number of bits allocated for each pixel sample. Each sample shall have the same number of bits allocated. See ",
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
         {
            "entity" : "Image",
            "desc" : [
               "Number of bits allocated for each pixel sample. Each sample shall have the same number of bits allocated.",
               [
                  "See ",
                  {
                     "el" : "olink",
                     "attrs" : {
                        "targetptr" : "PS3.5",
                        "targetdoc" : "PS3.5",
                        "xrefstyle" : "select: labelnumber"
                     }
                  },
                  " for further explanation."
               ],
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
            "req" : "1",
            "mod_tables" : [
               "table_C.8.30.2-1"
            ],
            "module" : "Corneal Topography Map Image",
            "usage" : "M",
            "name" : "Bits Allocated"
         }
      ],
      "(0010,1021)" : {
         "name" : "Patient's Size Code Sequence",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "req" : "3",
         "entity" : "Study",
         "desc" : [
            "Patient's size category code",
            "One or more Items are permitted in this sequence."
         ]
      },
      "(0046,0244)" : {
         "usage" : "M",
         "name" : "Source Image Corneal Processed Data Sequence",
         "mod_tables" : [
            "table_C.8.30.3-1"
         ],
         "module" : "Corneal Topography Map Analysis",
         "req" : "1",
         "entity" : "Image",
         "desc" : [
            [
               "Attributes that contain various power, elevation and wavefront measurements at specific points on the cornea of the SOP Instance referenced in Attribute Source Image Sequence (0008,2112). The Attributes are obtained from measurements of curvature or shape of the cornea. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.30.3.1.3"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            "One or more Items shall be present."
         ]
      },
      "(0010,1001)" : {
         "entity" : "Patient",
         "desc" : "Other names used to identify the patient.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "usage" : "M",
         "name" : "Other Patient Names"
      },
      "(0008,2112)[<0>](0040,a170)" : [
         {
            "desc" : [
               "Describes the purpose for which the reference is made, that is what role the source image or frame(s) played in the derivation of this image.",
               "Only a single Item is permitted in this sequence."
            ],
            "entity" : "Image",
            "req" : "3",
            "module" : "General Image",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "usage" : "M",
            "name" : "Purpose of Reference Code Sequence"
         },
         {
            "req" : "1",
            "desc" : "Describes the purpose for which the reference is made, (i.e., the role the source image or frame(s) played in the generation of this image). Only a single Item shall be permitted in this sequence.",
            "entity" : "Image",
            "name" : "Purpose of Reference Code Sequence",
            "usage" : "M",
            "module" : "Corneal Topography Map Analysis",
            "mod_tables" : [
               "table_C.8.30.3-1"
            ]
         }
      ],
      "(0100,0410)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "SOP Instance Status",
         "entity" : "Image",
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
                     "el" : "para",
                     "content" : [
                        "Proper use of these flags is specified in Security Profiles. Implementations that do not conform to such Security Profiles may not necessarily handle these flags properly."
                     ]
                  },
                  "\n                "
               ]
            }
         ],
         "req" : "3"
      },
      "(0020,0060)" : {
         "req" : "2C",
         "entity" : "Series",
         "desc" : [
            "Laterality of (paired) body part examined. Required if the body part examined is a paired structure and Image Laterality (0020,0062) or Frame Laterality (0020,9072) are not sent.",
            {
               "title" : "Enumerated Values:",
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
               ]
            },
            {
               "content" : [
                  "\n                    ",
                  {
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
         "usage" : "M",
         "name" : "Laterality",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a123)" : {
         "usage" : "M",
         "name" : "Person Name",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "entity" : "Series"
      },
      "(0008,0096)" : {
         "usage" : "M",
         "name" : "Referring Physician Identification Sequence",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "req" : "3",
         "entity" : "Study",
         "desc" : [
            "Identification of the patient's referring physician.",
            "Only a single item is permitted in this sequence."
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
         "module" : "General Series",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M"
      },
      "(0008,114a)" : {
         "req" : "3",
         "desc" : [
            "Non-image composite SOP Instances that are significantly related to this Image, including waveforms that may or may not be temporally synchronized with this image.",
            "One or more Items are permitted in this sequence."
         ],
         "entity" : "Image",
         "usage" : "M",
         "name" : "Referenced Instance Sequence",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ]
      },
      "(0020,4000)" : {
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M",
         "name" : "Image Comments",
         "desc" : "User-defined comments about the image",
         "entity" : "Image",
         "req" : "3"
      },
      "(0088,0200)[<0>](0028,0103)" : {
         "usage" : "M",
         "name" : "Pixel Representation",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image",
         "req" : "1",
         "entity" : "Image",
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
      "(0010,2180)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "name" : "Occupation",
         "usage" : "U",
         "entity" : "Study",
         "desc" : "Occupation of the Patient.",
         "req" : "3"
      },
      "(0010,2203)" : {
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Patient's Sex Neutered",
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
         "entity" : "Study",
         "req" : "2C"
      },
      "(0088,0200)[<0>](0028,1202)" : {
         "req" : "1C",
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
         "entity" : "Image",
         "usage" : "M",
         "name" : "Green Palette Color Lookup Table Data",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ]
      },
      "(0046,0215)[<0>](0046,0077)" : {
         "desc" : "The meridian where the keratometric radius of curvature or power is measured, measured in degrees.",
         "entity" : "Image",
         "req" : "1",
         "module" : "Corneal Topography Map Analysis",
         "mod_tables" : [
            "table_C.8.30.3-1"
         ],
         "name" : "Keratometric Axis",
         "usage" : "M"
      },
      "(0088,0200)[<0>](0028,1101)" : {
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
         "entity" : "Image",
         "req" : "1C",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M",
         "name" : "Red Palette Color Lookup Table Descriptor"
      },
      "(0040,9096)[<0>](0040,9212)" : [
         {
            "req" : "1C",
            "desc" : [
               "LUT Data in this Sequence.",
               "Required if Real World Value Intercept (0040,9224) is not present."
            ],
            "entity" : "Image",
            "usage" : "M",
            "name" : "Real World Value LUT Data",
            "module" : "General Image",
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7.6.16-12b"
            ]
         },
         {
            "module" : "Corneal Topography Map Image",
            "mod_tables" : [
               "table_C.8.30.2-1",
               "table_C.7.6.16-12",
               "table_C.7.6.16-12b"
            ],
            "usage" : "M",
            "name" : "Real World Value LUT Data",
            "desc" : [
               "LUT Data in this Sequence.",
               "Required if Real World Value Intercept (0040,9224) is not present."
            ],
            "entity" : "Image",
            "req" : "1C"
         }
      ],
      "(0088,0200)[<0>](0028,2000)" : {
         "name" : "ICC Profile",
         "usage" : "M",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "req" : "3",
         "desc" : [
            "An ICC Profile encoding the transformation of device-dependent color stored pixel values into PCS-Values.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.11.15.1.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "When present, defines the color space of color Pixel Data (7FE0,0010) values, and the output of Palette Color Lookup Table Data (0028,1201-1203).",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "The profile applies only to Pixel Data (7FE0,0010) at the same level of the Data Set and not to any icons nested within sequences, which may or may not have their own ICC profile specified."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "entity" : "Image"
      },
      "(0028,1102)" : {
         "usage" : "M",
         "name" : "Green Palette Color Lookup Table Descriptor",
         "module" : "Image Pixel",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "req" : "1C",
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
         "entity" : "Image"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0081)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common",
         "name" : "Institution Address",
         "usage" : "M",
         "entity" : "Image",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "req" : "3"
      },
      "(0028,0107)" : {
         "name" : "Largest Image Pixel Value",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "module" : "Image Pixel",
         "req" : "3",
         "entity" : "Image",
         "desc" : "The maximum actual pixel value encountered in this image."
      },
      "(fffa,fffa)[<0>](0400,0305)" : {
         "req" : "1C",
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
         "entity" : "Image",
         "name" : "Certified Timestamp Type",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a123)" : {
         "usage" : "M",
         "name" : "Person Name",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0032,1064)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M",
         "name" : "Requested Procedure Code Sequence",
         "desc" : [
            "A sequence that conveys the Procedure Type of the requested procedure.",
            "Only a single Item is permitted in this sequence."
         ],
         "entity" : "Series",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a120)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "name" : "DateTime",
         "usage" : "M",
         "entity" : "Series",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "req" : "1C"
      },
      "(0088,0200)[<0>](0028,0106)" : {
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image",
         "name" : "Smallest Image Pixel Value",
         "usage" : "M",
         "entity" : "Image",
         "desc" : "The minimum actual pixel value encountered in this image.",
         "req" : "3"
      },
      "(0012,0083)[<0>](0012,0020)" : {
         "name" : "Clinical Trial Protocol ID",
         "usage" : "U",
         "module" : "Clinical Trial Study",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "req" : "1C",
         "desc" : [
            "The identifier of the protocol for which consent to distribute has been granted.",
            "Required if Distribution Type (0012,0084) is NAMED_PROTOCOL and the protocol is not that which is specified in Clinical Trial Protocol ID (0012,0020) in the Clinical Trial Subject Module."
         ],
         "entity" : "Study"
      },
      "(0008,0110)[<0>](0008,0102)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Coding Scheme Designator",
         "entity" : "Image",
         "desc" : "The value of a Coding Scheme Designator, used in this SOP Instance, which is being mapped.",
         "req" : "1"
      },
      "(0018,a001)[<0>](0018,1201)" : {
         "usage" : "M",
         "name" : "Time of Last Calibration",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "req" : "3",
         "entity" : "Image",
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
         ]
      },
      "(0022,0058)" : {
         "module" : "Ophthalmic Photography Acquisition Parameters",
         "mod_tables" : [
            "table_C.8.17.4-1",
            "table_C.8.17.8-2"
         ],
         "usage" : "M",
         "name" : "Mydriatic Agent Sequence",
         "desc" : [
            "Information about the agent administered.",
            "Zero or more items shall be included in this sequence.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "An empty sequence indicates that an agent was used for dilation, but the name was not entered."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            },
            "Required if the value of Pupil Dilated (0022,000D) is YES."
         ],
         "entity" : "Image",
         "req" : "2C"
      },
      "(0008,1250)[<0>](0020,000d)" : {
         "desc" : "Instance UID of Study to which the related Series belongs",
         "entity" : "Series",
         "req" : "1",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "name" : "Study Instance UID"
      },
      "(0008,1049)[<0>](0008,0080)" : {
         "req" : "1C",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "entity" : "Study",
         "name" : "Institution Name",
         "usage" : "M",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0040,0555)[<0>](0040,a123)" : {
         "usage" : "M",
         "name" : "Person Name",
         "module" : "Acquisition Context",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "req" : "1C",
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a Person Name.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "The role of the person could be specified in Concept Name Code Sequence (0040,A043)."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            },
            "Required if the value that Concept Name Code Sequence (0040,A043) requires (implies) is a person name. Shall not be present otherwise."
         ],
         "entity" : "Image"
      },
      "(0008,0110)[<0>](0008,0116)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Coding Scheme Responsible Organization",
         "entity" : "Image",
         "desc" : "Name of the organization responsible for the Coding Scheme. May include organizational contact information.",
         "req" : "3"
      },
      "(0046,0244)[<0>](0046,0248)" : {
         "usage" : "M",
         "name" : "Corneal Point Estimated",
         "mod_tables" : [
            "table_C.8.30.3-1"
         ],
         "module" : "Corneal Topography Map Analysis",
         "req" : "1",
         "entity" : "Image",
         "desc" : [
            "The point defined in Attribute Corneal Point Location (0046,0247) is an estimated point (i.e., interpolated or extrapolated; not an actual measured point).",
            {
               "list" : [
                  [
                     "Y",
                     "Yes"
                  ],
                  [
                     "N",
                     "No"
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a043)" : {
         "usage" : "M",
         "name" : "Concept Name Code Sequence",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Series"
      },
      "(0040,a390)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "HL7 Structured Document Reference Sequence",
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
         "entity" : "Image",
         "req" : "1C"
      },
      "(0038,0062)" : {
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "name" : "Service Episode Description",
         "desc" : "Description of the type of service episode.",
         "entity" : "Study",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a161)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "usage" : "M",
         "name" : "Floating Point Value",
         "entity" : "Series",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "req" : "1C"
      },
      "(0018,1200)" : {
         "usage" : "M",
         "name" : "Date of Last Calibration",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
         "req" : "3",
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
         ]
      },
      "(0008,1062)[<0>](0040,1102)" : {
         "entity" : "Study",
         "desc" : "Person's mailing address",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "usage" : "M",
         "name" : "Person's Address"
      },
      "(0020,9172)[<0>](0008,1150)" : {
         "entity" : "Image",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Referenced SOP Class UID"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
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
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(fffa,fffa)" : {
         "desc" : [
            "Sequence holding Digital Signatures.",
            "One or more items are permitted in this sequence."
         ],
         "entity" : "Image",
         "req" : "3",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "name" : "Digital Signatures Sequence"
      },
      "(0040,0275)[<0>](0040,100a)" : {
         "entity" : "Series",
         "desc" : [
            "Coded Reason for requesting this procedure.",
            "One or more Items are permitted in this sequence."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "module" : "General Series",
         "name" : "Reason for Requested Procedure Code Sequence",
         "usage" : "M"
      },
      "(0022,0058)[<0>](0022,0042)" : {
         "entity" : "Image",
         "desc" : [
            "Units of measure for the Mydriatic Agent Concentration.",
            "Only a single Item shall be included in this sequence.",
            "Required if Mydriatic Agent Concentration (0022,004E) is present."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.8.17.4-1",
            "table_C.8.17.8-2"
         ],
         "module" : "Ophthalmic Photography Acquisition Parameters",
         "name" : "Mydriatic Agent Concentration Units Sequence",
         "usage" : "M"
      },
      "(0038,0064)" : {
         "desc" : [
            "Identifier of the Assigning Authority that issued the Service Episode ID (0038,0060).",
            "Only a single Item is permitted in this sequence."
         ],
         "entity" : "Study",
         "req" : "3",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "name" : "Issuer of Service Episode ID Sequence"
      },
      "(0100,0420)" : {
         "desc" : "The date and time when the SOP Instance Status (0100,0410) was set to AO.",
         "entity" : "Image",
         "req" : "3",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "SOP Authorization DateTime",
         "usage" : "M"
      },
      "(0012,0062)" : {
         "name" : "Patient Identity Removed",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "req" : "3",
         "entity" : "Patient",
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
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0082)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common",
         "name" : "Institution Code Sequence",
         "usage" : "M",
         "entity" : "Image",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1C"
      },
      "(0008,1110)[<0>](0008,1150)" : {
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "module" : "General Study",
         "req" : "1",
         "entity" : "Study",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0040,0245)" : {
         "req" : "3",
         "desc" : "Time on which the Performed Procedure Step started.",
         "entity" : "Series",
         "usage" : "M",
         "name" : "Performed Procedure Step Start Time",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ]
      },
      "(0040,0555)[<0>](0040,08ea)" : {
         "module" : "Acquisition Context",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "usage" : "M",
         "name" : "Measurement Units Code Sequence",
         "desc" : [
            "Units of measurement.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Numeric Value (0040,A30A) is sent. Shall not be present otherwise."
         ],
         "entity" : "Image",
         "req" : "1C"
      },
      "(0010,0024)[<0>](0040,0035)" : {
         "req" : "3",
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
                     "el" : "para"
                  },
                  "\n              "
               ]
            }
         ],
         "usage" : "M",
         "name" : "Identifier Type Code",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient"
      },
      "(0040,0555)[<0>](0040,a136)" : {
         "req" : "1C",
         "entity" : "Image",
         "desc" : [
            "References one or more frames in a Multi-frame SOP Instance. The first frame shall be denoted as frame number one.",
            "Required if this SOP Instance is a Multi-frame SOP Instance and the values in this sequence item do not apply to all frames."
         ],
         "name" : "Referenced Frame Numbers",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "module" : "Acquisition Context"
      },
      "(0008,0110)[<0>](0008,0115)" : {
         "req" : "3",
         "desc" : "The coding scheme full common name",
         "entity" : "Image",
         "usage" : "M",
         "name" : "Coding Scheme Name",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,1052)" : {
         "entity" : "Series",
         "desc" : [
            "Identification of the physician(s) administering the Series.",
            "One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Performing Physician's Name (0008,1050), if present."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "usage" : "M",
         "name" : "Performing Physician Identification Sequence"
      },
      "(0010,1000)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "Other Patient IDs",
         "desc" : "Other identification numbers or codes used to identify the patient.",
         "entity" : "Patient",
         "req" : "3"
      },
      "(0022,000e)" : {
         "desc" : [
            "The degree of the dilation in mm.",
            "Required if the value of Pupil Dilated (0022,000D) is YES."
         ],
         "entity" : "Image",
         "req" : "2C",
         "module" : "Ophthalmic Photography Acquisition Parameters",
         "mod_tables" : [
            "table_C.8.17.4-1",
            "table_C.8.17.8-2"
         ],
         "usage" : "M",
         "name" : "Degree of Dilation"
      },
      "(0008,1140)[<0>](0062,000b)" : {
         "name" : "Referenced Segment Number",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3"
         ],
         "module" : "General Image",
         "req" : "1C",
         "entity" : "Image",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ]
      },
      "(0008,2112)[<0>](0008,1150)" : [
         {
            "module" : "General Image",
            "mod_tables" : [
               "table_C.7-9",
               "table_10-3",
               "table_10-11"
            ],
            "name" : "Referenced SOP Class UID",
            "usage" : "M",
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "entity" : "Image",
            "req" : "1"
         },
         {
            "req" : "1",
            "entity" : "Image",
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "name" : "Referenced SOP Class UID",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8.30.3-1",
               "table_10-3",
               "table_10-11"
            ],
            "module" : "Corneal Topography Map Analysis"
         }
      ],
      "(0040,0275)[<0>](0008,1110)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M",
         "name" : "Referenced Study Sequence",
         "desc" : [
            "Uniquely identifies the Study SOP Instances associated with this SOP Instance.",
            "One or more items are permitted in this sequence.",
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
         "entity" : "Series",
         "req" : "3"
      },
      "(0008,002a)" : [
         {
            "name" : "Acquisition DateTime",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "module" : "General Image",
            "req" : "3",
            "entity" : "Image",
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
            ]
         },
         {
            "entity" : "Image",
            "desc" : [
               "The date and time that the acquisition of data that resulted in this image started.",
               {
                  "el" : "note",
                  "content" : [
                     "\n                    ",
                     {
                        "content" : [
                           "The synchronization of this time with an external clock is specified in the Synchronization Module in Acquisition Time Synchronized (0018,1800)."
                        ],
                        "el" : "para"
                     },
                     "\n                  "
                  ]
               }
            ],
            "req" : "1",
            "mod_tables" : [
               "table_C.8.30.2-1"
            ],
            "module" : "Corneal Topography Map Image",
            "name" : "Acquisition DateTime",
            "usage" : "M"
         }
      ],
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a161)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Floating Point Value",
         "usage" : "M",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "entity" : "Series",
         "req" : "1C"
      },
      "(0088,0200)[<0>](0028,0101)" : {
         "name" : "Bits Stored",
         "usage" : "M",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "req" : "1",
         "desc" : [
            "Number of bits stored for each pixel sample. Each sample shall have the same number of bits stored. See ",
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
         "entity" : "Image"
      },
      "(0022,001b)[<0>](0022,0007)" : {
         "mod_tables" : [
            "table_C.8.17.4-1",
            "table_C.8.17.8-2"
         ],
         "module" : "Ophthalmic Photography Acquisition Parameters",
         "name" : "Spherical Lens Power",
         "usage" : "M",
         "entity" : "Image",
         "desc" : "Sphere value in diopters",
         "req" : "1"
      },
      "(0046,0074)[<0>](0046,0077)" : {
         "mod_tables" : [
            "table_C.8.30.3-1",
            "table_C.8.25.10-2"
         ],
         "module" : "Corneal Topography Map Analysis",
         "usage" : "M",
         "name" : "Keratometric Axis",
         "entity" : "Image",
         "desc" : "The meridian where the keratometric radius of curvature or power is measured, in degrees.",
         "req" : "1"
      },
      "(0046,0080)[<0>](0046,0077)" : {
         "module" : "Corneal Topography Map Analysis",
         "mod_tables" : [
            "table_C.8.30.3-1",
            "table_C.8.25.10-2"
         ],
         "name" : "Keratometric Axis",
         "usage" : "M",
         "desc" : "The meridian where the keratometric radius of curvature or power is measured, in degrees.",
         "entity" : "Image",
         "req" : "1"
      },
      "(0028,0030)" : {
         "name" : "Pixel Spacing",
         "usage" : "M",
         "module" : "Corneal Topography Map Image",
         "mod_tables" : [
            "table_C.8.30.2-1",
            "table_10-10"
         ],
         "req" : "1C",
         "desc" : [
            "Physical distance in the patient between the center of each pixel, specified by a numeric pair - adjacent row spacing (delimiter) adjacent column spacing in mm. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_10.7.1.1"
               }
            },
            " and ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_10.7.1.3"
               },
               "el" : "xref"
            },
            ". Required if the image has been calibrated. May be present otherwise."
         ],
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a163)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "name" : "Rational Denominator Value",
         "usage" : "M",
         "entity" : "Series",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "req" : "1C"
      },
      "(0046,0218)[<0>](0046,0077)" : {
         "entity" : "Image",
         "desc" : "The meridian where the keratometric cylinder or power is measured, measured in degrees.",
         "req" : "1",
         "mod_tables" : [
            "table_C.8.30.3-1"
         ],
         "module" : "Corneal Topography Map Analysis",
         "usage" : "M",
         "name" : "Keratometric Axis"
      },
      "(0046,0074)[<0>](0046,0075)" : {
         "desc" : "The radius of curvature of the principal meridians of the cornea, measured in mm.",
         "entity" : "Image",
         "req" : "1",
         "module" : "Corneal Topography Map Analysis",
         "mod_tables" : [
            "table_C.8.30.3-1",
            "table_C.8.25.10-2"
         ],
         "name" : "Radius of Curvature",
         "usage" : "M"
      },
      "(0040,9096)[<0>](0028,3003)" : [
         {
            "name" : "LUT Explanation",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7.6.16-12b"
            ],
            "module" : "General Image",
            "req" : "1",
            "entity" : "Image",
            "desc" : "Free form text explanation of the meaning of the transformation in this Item."
         },
         {
            "req" : "1",
            "desc" : "Free form text explanation of the meaning of the transformation in this Item.",
            "entity" : "Image",
            "usage" : "M",
            "name" : "LUT Explanation",
            "module" : "Corneal Topography Map Image",
            "mod_tables" : [
               "table_C.8.30.2-1",
               "table_C.7.6.16-12",
               "table_C.7.6.16-12b"
            ]
         }
      ],
      "(0040,0556)" : {
         "req" : "3",
         "entity" : "Image",
         "desc" : "Free-text description of the image-acquisition context.",
         "name" : "Acquisition Context Description",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "module" : "Acquisition Context"
      },
      "(0008,0022)" : {
         "name" : "Acquisition Date",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image",
         "req" : "3",
         "entity" : "Image",
         "desc" : "The date the acquisition of data that resulted in this image started"
      },
      "(0008,0096)[<0>](0040,1102)" : {
         "usage" : "M",
         "name" : "Person's Address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "req" : "3",
         "entity" : "Study",
         "desc" : "Person's mailing address"
      },
      "(0008,1111)[<0>](0008,1150)" : [
         {
            "usage" : "M",
            "name" : "Referenced SOP Class UID",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-11"
            ],
            "module" : "General Series",
            "req" : "1",
            "entity" : "Series",
            "desc" : "Uniquely identifies the referenced SOP Class."
         },
         {
            "req" : "1",
            "entity" : "Series",
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "name" : "Referenced SOP Class UID",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8.30.1-1",
               "table_10-11"
            ],
            "module" : "Corneal Topography Map Series"
         }
      ],
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1150)" : {
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Series",
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(0018,a001)[<0>](0008,0070)" : {
         "entity" : "Image",
         "desc" : "Manufacturer of the equipment that contributed to the composite instance.",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Manufacturer",
         "usage" : "M"
      },
      "(0008,1140)[<0>](0008,1155)" : {
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3",
            "table_10-11"
         ],
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Image"
      },
      "(0046,0230)" : {
         "entity" : "Image",
         "desc" : [
            "Measures local fluctuations in corneal power (i.e., irregular astigmatism) over the pupil (no units).",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "This value would be about 0.4 for a cornea with good optical quality; at 1.5 and higher, vision falls below normal calculations."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.8.30.3-1"
         ],
         "module" : "Corneal Topography Map Analysis",
         "usage" : "M",
         "name" : "Surface Regularity Index"
      },
      "(0010,0032)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "usage" : "M",
         "name" : "Patient's Birth Time",
         "entity" : "Patient",
         "desc" : "Birth time of the Patient.",
         "req" : "3"
      },
      "(0008,1120)[<0>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Patient",
         "req" : "1",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "usage" : "M",
         "name" : "Referenced SOP Class UID"
      },
      "(fffa,fffa)[<0>](0400,0110)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Certificate Type",
         "entity" : "Image",
         "desc" : [
            "The type of certificate used in (0400,0115).",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "X509_1993_SIG",
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
               ]
            }
         ],
         "req" : "1"
      },
      "(0008,114a)[<0>](0040,a170)" : {
         "entity" : "Image",
         "desc" : [
            "Code describing the purpose of the reference to the Instance(s).",
            "Only a single Item shall be included in this sequence."
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image",
         "usage" : "M",
         "name" : "Purpose of Reference Code Sequence"
      },
      "(0008,1070)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "usage" : "M",
         "name" : "Operators' Name",
         "entity" : "Series",
         "desc" : "Name(s) of the operator(s) supporting the Series.",
         "req" : "3"
      },
      "(0010,2293)" : {
         "req" : "2C",
         "entity" : "Patient",
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
            "Zero or more Items shall be included in this sequence.",
            "Required if the patient is an animal."
         ],
         "name" : "Patient Breed Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient"
      },
      "(0008,0023)" : [
         {
            "desc" : [
               "The date the image pixel data creation started.",
               "Required if image is part of a series in which the images are temporally related. May be present otherwise.",
               {
                  "content" : [
                     "\n                    ",
                     {
                        "content" : [
                           "This Attribute was formerly known as Image Date."
                        ],
                        "el" : "para"
                     },
                     "\n                  "
                  ],
                  "el" : "note"
               }
            ],
            "entity" : "Image",
            "req" : "2C",
            "module" : "General Image",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "name" : "Content Date",
            "usage" : "M"
         },
         {
            "usage" : "M",
            "name" : "Content Date",
            "module" : "Corneal Topography Map Image",
            "mod_tables" : [
               "table_C.8.30.2-1"
            ],
            "req" : "1",
            "desc" : "The date the data creation was started.",
            "entity" : "Image"
         }
      ],
      "(0008,1080)" : {
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "name" : "Admitting Diagnoses Description",
         "desc" : "Description of the admitting diagnosis (diagnoses)",
         "entity" : "Study",
         "req" : "3"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0033)" : {
         "usage" : "M",
         "name" : "Universal Entity ID Type",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "req" : "1C",
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
                     "linkend" : "sect_10.14",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for Defined Terms."
            ]
         ],
         "entity" : "Patient"
      },
      "(0010,2292)" : {
         "req" : "2C",
         "entity" : "Patient",
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
            "Required if the patient is an animal and if Patient Breed Code Sequence (0010,2293) is empty. May be present otherwise."
         ],
         "usage" : "M",
         "name" : "Patient Breed Description",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a043)" : {
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Series",
         "req" : "1",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Concept Name Code Sequence",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Referenced SOP Sequence",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "entity" : "Series",
         "req" : "1C"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a121)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "usage" : "M",
         "name" : "Date",
         "entity" : "Series",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "req" : "1C"
      },
      "(0008,0018)" : {
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
               "el" : "olink",
               "attrs" : {
                  "targetdoc" : "PS3.4",
                  "targetptr" : "PS3.4",
                  "xrefstyle" : "select: labelnumber"
               }
            },
            "."
         ],
         "entity" : "Image",
         "name" : "SOP Instance UID",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,1030)" : {
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Study Description",
         "usage" : "M",
         "desc" : "Institution-generated description or classification of the Study (component) performed.",
         "entity" : "Study",
         "req" : "3"
      },
      "(4ffe,0001)[<0>](0400,0020)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "name" : "Data Elements Signed",
         "usage" : "M",
         "entity" : "Image",
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
         "req" : "1"
      },
      "(0040,1012)" : {
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "name" : "Reason For Performed Procedure Code Sequence",
         "desc" : [
            "Coded reason(s) for performing this procedure.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
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
         "req" : "3"
      },
      "(0046,0210)[<0>](0024,0306)" : {
         "name" : "Data Set Name",
         "usage" : "M",
         "module" : "Corneal Topography Map Analysis",
         "mod_tables" : [
            "table_C.8.30.3-1",
            "table_10-22"
         ],
         "req" : "1",
         "desc" : "The name assigned to the data set.",
         "entity" : "Image"
      },
      "(0010,0200)" : {
         "usage" : "M",
         "name" : "Quality Control Subject",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "req" : "3",
         "entity" : "Patient",
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
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0080)" : {
         "usage" : "M",
         "name" : "Institution Name",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "req" : "1C",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "entity" : "Image"
      },
      "(0046,0211)[<0>](0046,0213)" : {
         "mod_tables" : [
            "table_C.8.30.3-1"
         ],
         "module" : "Corneal Topography Map Analysis",
         "name" : "Maximum Corneal Curvature Location",
         "usage" : "M",
         "entity" : "Image",
         "desc" : [
            "Location of the corneal maximum curvature.",
            "Given as column\\row. Column is the horizontal offset and row is the vertical offset.",
            [
               "Image relative position specified with sub-pixel resolution such that the origin at the Top Left Hand Corner (TLHC) of the TLHC pixel is 0.0\\0.0, the Bottom Right Hand Corner (BRHC) of the TLHC pixel is 1.0\\1.0, and the BRHC of the BRHC pixel is Columns\\Rows (see ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "figure_C.10.5-1"
                  },
                  "el" : "xref"
               },
               "). The values must be within the range 0\\0 to Columns\\Rows."
            ]
         ],
         "req" : "1"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1160)" : {
         "usage" : "M",
         "name" : "Referenced Frame Number",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "req" : "1C",
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
         ]
      },
      "(0008,1048)" : {
         "req" : "3",
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
         "usage" : "M",
         "name" : "Physician(s) of Record",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0008,0080)" : {
         "name" : "Institution Name",
         "usage" : "M",
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "req" : "3",
         "desc" : "Institution where the equipment that produced the composite instances is located.",
         "entity" : "Equipment"
      },
      "(0040,9096)[<0>](0040,9210)" : [
         {
            "module" : "General Image",
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7.6.16-12b"
            ],
            "name" : "LUT Label",
            "usage" : "M",
            "desc" : "Label that is used to identify the transformation of this Item.",
            "entity" : "Image",
            "req" : "1"
         },
         {
            "name" : "LUT Label",
            "usage" : "M",
            "module" : "Corneal Topography Map Image",
            "mod_tables" : [
               "table_C.8.30.2-1",
               "table_C.7.6.16-12",
               "table_C.7.6.16-12b"
            ],
            "req" : "1",
            "desc" : "Label that is used to identify the transformation of this Item.",
            "entity" : "Image"
         }
      ],
      "(0012,0071)" : {
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "module" : "Clinical Trial Series",
         "usage" : "U",
         "name" : "Clinical Trial Series ID",
         "entity" : "Series",
         "desc" : [
            "An identifier of the series in the context of a clinical trial. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.3.2.1.2"
               }
            },
            "."
         ],
         "req" : "3"
      },
      "(0018,1201)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
         "name" : "Time of Last Calibration",
         "usage" : "M",
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
         "req" : "3"
      },
      "(0012,0063)" : {
         "req" : "1C",
         "entity" : "Patient",
         "desc" : [
            "A description or label of the mechanism or method use to remove the patient's identity. May be multi-valued if successive de-identification steps have been performed.",
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
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            },
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method Code Sequence (0012,0064) is not present. May be present otherwise."
         ],
         "name" : "De-identification Method",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a163)" : {
         "req" : "1C",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "entity" : "Series",
         "name" : "Rational Denominator Value",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1160)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
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
         "entity" : "Series",
         "req" : "1C"
      },
      "(0008,1052)[<0>](0008,0080)" : {
         "req" : "1C",
         "entity" : "Series",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "name" : "Institution Name",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series"
      },
      "(0038,0014)[<0>](0040,0032)" : {
         "req" : "1C",
         "entity" : "Study",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "name" : "Universal Entity ID",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "module" : "Patient Study"
      },
      "(0008,0090)" : {
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Referring Physician's Name",
         "usage" : "M",
         "desc" : "Name of the patient's referring physician",
         "entity" : "Study",
         "req" : "2"
      },
      "(0040,a390)[<0>](0008,1155)" : {
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Image",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ]
      },
      "(0040,0275)[<0>](0040,0007)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M",
         "name" : "Scheduled Procedure Step Description",
         "desc" : "Institution-generated description or classification of the Scheduled Procedure Step to be performed.",
         "entity" : "Series",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0009)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "module" : "General Series",
         "name" : "Scheduled Procedure Step ID",
         "usage" : "M",
         "entity" : "Series",
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
                     ]
                  },
                  "\n              "
               ]
            }
         ],
         "req" : "1C"
      },
      "(0008,1120)" : {
         "usage" : "M",
         "name" : "Referenced Patient Sequence",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "req" : "3",
         "entity" : "Patient",
         "desc" : [
            "A sequence that provides reference to a Patient SOP Class/Instance pair.",
            "Only a single Item is permitted in this Sequence."
         ]
      },
      "(0400,0561)[<0>](0400,0550)[0](gggg,eeee)" : {
         "usage" : "M",
         "name" : "Any Attribute from the main data set that was modified or removed.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "desc" : "May include Sequence Attributes and their Items.",
         "entity" : "Image"
      },
      "(0008,0016)" : {
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
                  "targetptr" : "PS3.4",
                  "targetdoc" : "PS3.4",
                  "xrefstyle" : "select: labelnumber"
               },
               "el" : "olink"
            },
            "."
         ],
         "entity" : "Image",
         "req" : "1",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "SOP Class UID"
      },
      "(0046,0208)" : {
         "entity" : "Image",
         "desc" : [
            "A set of row/column vertices that outline the perimeter of the pupil.",
            "Two or more pairs of values follow and are the row and column coordinates of the other vertices that outline the perimeter of the pupil. For a two dimensional curve: X1, Y1, X2, Y2, etc. The first (X) dimension corresponds to the image column (horizontal offset), and the second (Y) dimension corresponds to the image row (vertical offset). This is a Polyline and the points are to be interpreted as an n-tuple list of end points between which straight lines are to be drawn.",
            "Required if Attribute Corneal Topography Surface (0046,0201) is A (Anterior)."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.8.30.3-1"
         ],
         "module" : "Corneal Topography Map Analysis",
         "name" : "Vertices of the Outline of Pupil",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "module" : "General Series",
         "req" : "1C",
         "entity" : "Series",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise."
      },
      "(0008,1049)[<0>](0008,0081)" : {
         "req" : "3",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "entity" : "Study",
         "name" : "Institution Address",
         "usage" : "M",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0008,1120)[<0>](0008,1155)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Patient",
         "req" : "1"
      },
      "(0046,0244)[<0>](0046,0252)" : {
         "usage" : "M",
         "name" : "Relative Elevation",
         "module" : "Corneal Topography Map Analysis",
         "mod_tables" : [
            "table_C.8.30.3-1"
         ],
         "req" : "1",
         "desc" : [
            "Relative elevation, in micrometers, is calculated from the corneal surface distance from a reference surface (i.e., a sphere or ellipsoid) that intersects the corneal vertex. This value is determined from z - z",
            {
               "el" : "subscript",
               "content" : [
                  "ref"
               ]
            },
            ". Where z is conveyed in Attribute Corneal Point Location (0046,0247) and z",
            {
               "el" : "subscript",
               "content" : [
                  "ref"
               ]
            },
            " is the elevation of the reference surface."
         ],
         "entity" : "Image"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
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
         "entity" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a120)" : {
         "name" : "DateTime",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "entity" : "Series"
      },
      "(0010,2202)" : {
         "desc" : [
            "The species of the patient.",
            "Only a single Item shall be included in this sequence.",
            "Required if the patient is an animal and if Patient Species Description (0010,2201) is not present. May be present otherwise."
         ],
         "entity" : "Patient",
         "req" : "1C",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "Patient Species Code Sequence"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a168)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Concept Code Sequence",
         "usage" : "M",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "entity" : "Series",
         "req" : "1C"
      },
      "(0008,1111)" : [
         {
            "desc" : [
               "Uniquely identifies the Performed Procedure Step SOP Instance to which the Series is related.",
               "Only a single Item is permitted in this sequence."
            ],
            "entity" : "Series",
            "req" : "3",
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a"
            ],
            "name" : "Referenced Performed Procedure Step Sequence",
            "usage" : "M"
         },
         {
            "req" : "1C",
            "desc" : [
               "Uniquely identifies the Performed Procedure Step SOP Instance to which the Series is related (e.g., a Modality or General-Purpose Performed Procedure Step SOP Instance).",
               "Only a single Item shall be permitted in this sequence.",
               "Required if the Modality Performed Procedure Step SOP Class, or General Purpose Performed Procedure Step SOP Class is supported."
            ],
            "entity" : "Series",
            "usage" : "M",
            "name" : "Referenced Performed Procedure Step Sequence",
            "module" : "Corneal Topography Map Series",
            "mod_tables" : [
               "table_C.8.30.1-1"
            ]
         }
      ],
      "(0100,0426)" : {
         "usage" : "M",
         "name" : "Authorization Equipment Certification Number",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "desc" : "The certification number issued to the Application Entity that set the SOP Instance Status (0100,0410) to AO.",
         "entity" : "Image"
      },
      "(0008,0014)" : {
         "entity" : "Image",
         "desc" : "Uniquely identifies device that created the SOP Instance.",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Instance Creator UID"
      },
      "(0088,0200)" : {
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "name" : "Icon Image Sequence",
         "usage" : "M",
         "desc" : [
            "This icon image is representative of the Image.",
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "Image",
         "req" : "3"
      },
      "(0010,0024)[<0>](0040,0032)" : {
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
         ],
         "entity" : "Patient",
         "name" : "Universal Entity ID",
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0040,a390)[<0>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Image",
         "req" : "1",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "usage" : "M"
      },
      "(0008,0053)" : {
         "entity" : "Image",
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
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Query/Retrieve View"
      },
      "(0010,2294)[<0>](0010,2295)" : {
         "usage" : "M",
         "name" : "Breed Registration Number",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "1",
         "desc" : "Identification number of an animal within the registry.",
         "entity" : "Patient"
      },
      "(0400,0500)[<0>](0400,0510)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Encrypted Content Transfer Syntax UID",
         "usage" : "M",
         "desc" : "Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
         "entity" : "Image",
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
         "entity" : "Series",
         "req" : "3",
         "module" : "Clinical Trial Series",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "name" : "Clinical Trial Series Description",
         "usage" : "U"
      },
      "(0012,0081)" : {
         "usage" : "U",
         "name" : "Clinical Trial Protocol Ethics Committee Name",
         "module" : "Clinical Trial Subject",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "req" : "1C",
         "desc" : "Name of the Ethics Committee or Institutional Review Board (IRB) responsible for approval of the Clinical Trial. Required if Clinical Trial Protocol Ethics Committee Approval Number (0012,0082) is present.",
         "entity" : "Patient"
      },
      "(0040,a390)[<0>](0040,e001)" : {
         "name" : "HL7 Instance Identifier",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "req" : "1",
         "entity" : "Image",
         "desc" : "Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier)."
      },
      "(0008,1049)[<0>](0008,0082)" : {
         "entity" : "Study",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "usage" : "M",
         "name" : "Institution Code Sequence"
      },
      "(0400,0500)[<0>](0400,0520)" : {
         "req" : "1",
         "entity" : "Image",
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
         "name" : "Encrypted Content",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0028,0106)" : {
         "name" : "Smallest Image Pixel Value",
         "usage" : "M",
         "module" : "Image Pixel",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "req" : "3",
         "desc" : "The minimum actual pixel value encountered in this image.",
         "entity" : "Image"
      },
      "(0008,1072)[<0>](0040,1101)" : {
         "usage" : "M",
         "name" : "Person Identification Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series",
         "req" : "1",
         "entity" : "Series",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0012,0083)[<0>](0012,0085)" : {
         "req" : "1",
         "entity" : "Study",
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
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "Under some circumstances, consent may be withdrawn. The purpose of encoding this is to warn receiving systems that further distribution may not be appropriate, but no semantics are defined by the Standard for what action is appropriate under such circumstances, such as what to do with previously received images that had a value of YES."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "usage" : "U",
         "name" : "Consent for Distribution Flag",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "module" : "Clinical Trial Study"
      },
      "(0008,1250)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "name" : "Related Series Sequence",
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
                           "content" : [
                              "\n                        ",
                              {
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
                                 "el" : "para",
                                 "content" : [
                                    "The related series may have different Frames of Reference and hence require some sort of registration before spatial coordinates can be directly compared."
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
                                    "This attribute is not intended for conveying localizer reference information, for which Referenced Image Sequence (0008,1140) should be used."
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
         "entity" : "Series",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,1002)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "module" : "General Series",
         "name" : "Reason for the Requested Procedure",
         "usage" : "M",
         "entity" : "Series",
         "desc" : "Reason for requesting this procedure.",
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1150)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "General Series",
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1"
      },
      "(0008,1072)[<0>](0008,0082)" : {
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Institution Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series"
      },
      "(0040,0555)[<0>](0040,a162)" : {
         "usage" : "M",
         "name" : "Rational Numerator Value",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "module" : "Acquisition Context",
         "req" : "1C",
         "entity" : "Image",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Referenced SOP Sequence",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "entity" : "Series",
         "req" : "1C"
      },
      "(0088,0200)[<0>](0028,1201)" : {
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
         "entity" : "Image",
         "name" : "Red Palette Color Lookup Table Data",
         "usage" : "M",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ]
      },
      "(0008,1040)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
         "name" : "Institutional Department Name",
         "usage" : "M",
         "entity" : "Equipment",
         "desc" : "Department in the institution where the equipment that produced the composite instances is located.",
         "req" : "3"
      },
      "(0020,9172)[<0>](0008,1155)" : {
         "entity" : "Image",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "module" : "SOP Common",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M"
      },
      "(0020,0020)" : {
         "req" : "2C",
         "desc" : [
            [
               "Patient direction of the rows and columns of the image. Required if image does not require Image Orientation (Patient) (0020,0037) and Image Position (Patient) (0020,0032). May be present otherwise. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.1.1.1",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ],
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "IODs may have attributes other than Patient Orientation, Image Orientation, or Image Position (Patient) to describe orientation in which case this attribute will be zero length."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "entity" : "Image",
         "name" : "Patient Orientation",
         "usage" : "M",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ]
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0033)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M",
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
         "entity" : "Patient",
         "req" : "1C"
      },
      "(0040,0555)" : {
         "name" : "Acquisition Context Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "module" : "Acquisition Context",
         "req" : "2",
         "entity" : "Image",
         "desc" : [
            "A sequence of Items that describes the conditions present during the acquisition of the data of the SOP Instance.",
            "Zero or more items shall be included in this sequence."
         ]
      },
      "(0046,0236)" : {
         "desc" : [
            "Index used to indicate the presence of Keratoconus (no units)",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "It is obtained by discrete analysis of the corneal topographic data. (e.g., Invest Ophthalmol Vis Sci 35:2749-2757, 1994)."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "entity" : "Image",
         "req" : "3",
         "module" : "Corneal Topography Map Analysis",
         "mod_tables" : [
            "table_C.8.30.3-1"
         ],
         "name" : "Keratoconus Prediction Index",
         "usage" : "M"
      },
      "(0008,2228)[<0>](0008,2230)" : {
         "usage" : "M",
         "name" : "Primary Anatomic Structure Modifier Sequence",
         "module" : "Corneal Topography Map Image",
         "mod_tables" : [
            "table_C.8.30.2-1",
            "table_10-5",
            "table_10-8"
         ],
         "req" : "3",
         "desc" : [
            "Sequence of Items that modifies the primary anatomic structure of interest in this Instance.",
            "One or more Items are permitted in this sequence."
         ],
         "entity" : "Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a040)" : {
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
         "entity" : "Series",
         "req" : "1",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Value Type",
         "usage" : "M"
      },
      "(0028,1103)" : {
         "entity" : "Image",
         "desc" : [
            "Specifies the format of the Blue Palette Color Lookup Table Data (0028,1203). Required if Photometric Interpretation (0028,0004) has a value of PALETTE COLOR or Pixel Presentation (0008,9205) at the image level equals COLOR or MIXED. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.6.3.1.5",
                  "xrefstyle" : "select: label"
               }
            },
            " for further explanation."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "module" : "Image Pixel",
         "usage" : "M",
         "name" : "Blue Palette Color Lookup Table Descriptor"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a162)" : {
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "usage" : "M",
         "name" : "Rational Numerator Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series"
      },
      "(0008,1140)[<0>](0040,a170)" : {
         "name" : "Purpose of Reference Code Sequence",
         "usage" : "M",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "req" : "3",
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "Only a single Item is permitted in this sequence."
         ],
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,08ea)" : {
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "entity" : "Series",
         "req" : "1C",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Measurement Units Code Sequence",
         "usage" : "M"
      },
      "(0008,0005)" : {
         "req" : "1C",
         "entity" : "Image",
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
         ],
         "name" : "Specific Character Set",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0008,0110)" : {
         "desc" : [
            "Sequence of items that map values of Coding Scheme Designator (0008,0102) to an external coding system registration, or to a private or local coding scheme.",
            "One or more Items are permitted in this sequence."
         ],
         "entity" : "Image",
         "req" : "3",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Coding Scheme Identification Sequence"
      },
      "(0022,0005)" : {
         "req" : "2",
         "desc" : {
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
         "entity" : "Image",
         "name" : "Patient Eye Movement Commanded",
         "usage" : "M",
         "module" : "Ophthalmic Photography Acquisition Parameters",
         "mod_tables" : [
            "table_C.8.17.4-1"
         ]
      },
      "(0010,1030)" : {
         "req" : "3",
         "entity" : "Study",
         "desc" : "Weight of the Patient, in kilograms.",
         "usage" : "U",
         "name" : "Patient's Weight",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study"
      },
      "(0018,a001)[<0>](0008,1090)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Manufacturer's Model Name",
         "desc" : "Manufacturer's model name of the equipment that contributed to the composite instance.",
         "entity" : "Image",
         "req" : "3"
      },
      "(0010,0024)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "usage" : "M",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this sequence."
         ],
         "entity" : "Patient",
         "req" : "3"
      },
      "(0010,21b0)" : {
         "req" : "3",
         "desc" : "Additional information about the Patient's medical history.",
         "entity" : "Study",
         "usage" : "U",
         "name" : "Additional Patient History",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0088,0200)[<0>](0028,1102)" : {
         "name" : "Green Palette Color Lookup Table Descriptor",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image",
         "req" : "1C",
         "entity" : "Image",
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
         ]
      },
      "(0008,0020)" : {
         "desc" : "Date the Study started.",
         "entity" : "Study",
         "req" : "2",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "name" : "Study Date"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a30a)" : {
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "entity" : "Series",
         "req" : "1C",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Numeric Value"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,003a)" : {
         "req" : "3",
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
         "entity" : "Patient",
         "name" : "Assigning Agency or Department Code Sequence",
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0008,1010)" : {
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "name" : "Station Name",
         "desc" : "User defined name identifying the machine that produced the composite instances.",
         "entity" : "Equipment",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)" : {
         "req" : "3",
         "entity" : "Series",
         "desc" : "Sequence that specifies the context for the Scheduled Protocol Code Sequence Item. One or more Items are permitted in this sequence.",
         "name" : "Protocol Context Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "module" : "General Series"
      },
      "(0040,0260)" : {
         "name" : "Performed Protocol Code Sequence",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "req" : "3",
         "desc" : "Sequence describing the Protocol performed for this Procedure Step. One or more Items are permitted in this sequence.",
         "entity" : "Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0062,000b)" : {
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "entity" : "Series",
         "req" : "1C",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Referenced Segment Number",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a168)" : {
         "module" : "General Series",
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
         "entity" : "Series",
         "req" : "1C"
      },
      "(0018,a001)[<0>](0018,1050)" : {
         "req" : "3",
         "entity" : "Image",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "usage" : "M",
         "name" : "Spatial Resolution",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0046,0210)[<0>](0024,0309)" : {
         "module" : "Corneal Topography Map Analysis",
         "mod_tables" : [
            "table_C.8.30.3-1",
            "table_10-22"
         ],
         "name" : "Data Set Description",
         "usage" : "M",
         "desc" : "Description of the data set.",
         "entity" : "Image",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "module" : "General Series",
         "name" : "Content Item Modifier Sequence",
         "usage" : "M",
         "entity" : "Series",
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
         "req" : "3"
      },
      "(0008,0033)" : [
         {
            "entity" : "Image",
            "desc" : [
               "The time the image pixel data creation started.",
               "Required if image is part of a series in which the images are temporally related. May be present otherwise."
            ],
            "req" : "2C",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "module" : "General Image",
            "name" : "Content Time",
            "usage" : "M"
         },
         {
            "module" : "Corneal Topography Map Image",
            "mod_tables" : [
               "table_C.8.30.2-1"
            ],
            "usage" : "M",
            "name" : "Content Time",
            "desc" : "The time the data creation was started.",
            "entity" : "Image",
            "req" : "1"
         }
      ],
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0031)" : {
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "Patient",
         "req" : "1C",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M",
         "name" : "Local Namespace Entity ID"
      },
      "(0400,0561)" : {
         "name" : "Original Attributes Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "req" : "3",
         "entity" : "Image",
         "desc" : [
            "Sequence of Items containing all attributes that were removed or replaced by other values in the main data set.",
            "One or more Items are permitted in this sequence."
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a163)" : {
         "entity" : "Series",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "usage" : "M",
         "name" : "Rational Denominator Value"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a160)" : {
         "req" : "1C",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "entity" : "Series",
         "name" : "Text Value",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(fffa,fffa)[<0>](0400,0115)" : {
         "usage" : "M",
         "name" : "Certificate of Signer",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1",
         "desc" : [
            [
               "A certificate that holds the identity of the entity producing this Digital Signature, that entity's public key or key identifier, and the algorithm and associated parameters with which that public key is to be used. Algorithms allowed are specified in Digital Signature Security Profiles (see ",
               {
                  "attrs" : {
                     "targetdoc" : "PS3.15",
                     "targetptr" : "PS3.15",
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
                     "el" : "orderedlist",
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
                           "el" : "listitem",
                           "content" : [
                              "\n                          ",
                              {
                                 "el" : "para",
                                 "content" : [
                                    "When symmetric encryption is used, the certificate merely identifies which key was used by which entity, but not the actual key itself. Some other means (e.g., a trusted third party) must be used to obtain the key."
                                 ]
                              },
                              "\n                        "
                           ]
                        },
                        "\n                      "
                     ],
                     "attrs" : {
                        "numeration" : "arabic"
                     }
                  },
                  "\n                    "
               ]
            }
         ],
         "entity" : "Image"
      },
      "(0040,0251)" : {
         "entity" : "Series",
         "desc" : "Time at which the Performed Procedure Step ended.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "module" : "General Series",
         "name" : "Performed Procedure Step End Time",
         "usage" : "M"
      },
      "(0046,0207)" : {
         "mod_tables" : [
            "table_C.8.30.3-1"
         ],
         "module" : "Corneal Topography Map Analysis",
         "usage" : "M",
         "name" : "Corneal Topography Map Type Code Sequence",
         "entity" : "Image",
         "desc" : [
            "The type of corneal topography map encoded in this SOP Instance. It specifies the meaning of the pixel values.",
            "Only a single Item shall be permitted in this sequence."
         ],
         "req" : "1"
      },
      "(0008,1052)[<0>](0008,0082)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "name" : "Institution Code Sequence",
         "usage" : "M",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Series",
         "req" : "1C"
      },
      "(0008,1140)" : {
         "req" : "3",
         "entity" : "Image",
         "desc" : [
            "Other images significantly related to this image (e.g., post-localizer CT image or Mammographic biopsy or partial view images).",
            "One or more Items are permitted in this sequence."
         ],
         "name" : "Referenced Image Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image"
      },
      "(0020,0013)" : [
         {
            "entity" : "Image",
            "desc" : [
               "A number that identifies this image.",
               {
                  "el" : "note",
                  "content" : [
                     "\n                    ",
                     {
                        "content" : [
                           "This Attribute was named Image Number in earlier versions of this Standard."
                        ],
                        "el" : "para"
                     },
                     "\n                  "
                  ]
               }
            ],
            "req" : "2",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "module" : "General Image",
            "usage" : "M",
            "name" : "Instance Number"
         },
         {
            "module" : "Corneal Topography Map Image",
            "mod_tables" : [
               "table_C.8.30.2-1"
            ],
            "usage" : "M",
            "name" : "Instance Number",
            "desc" : "A number that identifies this instance.",
            "entity" : "Image",
            "req" : "1"
         },
         {
            "req" : "3",
            "entity" : "Image",
            "desc" : "A number that identifies this Composite object instance.",
            "name" : "Instance Number",
            "usage" : "M",
            "mod_tables" : [
               "table_C.12-1"
            ],
            "module" : "SOP Common"
         }
      ],
      "(0020,9172)[<0>](0008,1160)" : {
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
         "entity" : "Image",
         "req" : "1C",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "name" : "Referenced Frame Number",
         "usage" : "M"
      },
      "(0008,114a)[<0>](0008,1150)" : {
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-11"
         ],
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Image"
      },
      "(0008,1062)[<0>](0040,1103)" : {
         "usage" : "M",
         "name" : "Person's Telephone Numbers",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "3",
         "desc" : "Person's telephone number(s)",
         "entity" : "Study"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0062,000b)" : {
         "usage" : "M",
         "name" : "Referenced Segment Number",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ]
      },
      "(0400,0561)[<0>](0400,0550)" : {
         "desc" : [
            "Sequence that contains all the Attributes, with their previous values, that were modified or removed from the main data set.",
            "Only a single Item shall be included in this sequence."
         ],
         "entity" : "Image",
         "req" : "1",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Modified Attributes Sequence",
         "usage" : "M"
      },
      "(0008,2112)[<0>](0008,1155)" : [
         {
            "entity" : "Image",
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "req" : "1",
            "mod_tables" : [
               "table_C.7-9",
               "table_10-3",
               "table_10-11"
            ],
            "module" : "General Image",
            "usage" : "M",
            "name" : "Referenced SOP Instance UID"
         },
         {
            "entity" : "Image",
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "req" : "1",
            "mod_tables" : [
               "table_C.8.30.3-1",
               "table_10-3",
               "table_10-11"
            ],
            "module" : "Corneal Topography Map Analysis",
            "usage" : "M",
            "name" : "Referenced SOP Instance UID"
         }
      ],
      "(0088,0200)[<0>](0028,0011)" : {
         "req" : "1",
         "desc" : "Number of columns in the image",
         "entity" : "Image",
         "name" : "Columns",
         "usage" : "M",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a160)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "name" : "Text Value",
         "usage" : "M",
         "entity" : "Series",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "req" : "1C"
      },
      "(0022,1415)" : {
         "desc" : [
            [
               "Describes the type of ophthalmic mapping acquisition device. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.30.3.1.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "REFLECTION",
                     "Reflection topography (i.e., placido, grid, etc.)"
                  ],
                  [
                     "SLIT_BASED",
                     "Slit based elevation tomography"
                  ],
                  [
                     "INTERFEROMETRY",
                     "E.g., Optical coherence tomography"
                  ]
               ],
               "title" : "Defined Terms:"
            }
         ],
         "entity" : "Image",
         "req" : "1",
         "module" : "Corneal Topography Map Analysis",
         "mod_tables" : [
            "table_C.8.30.3-1"
         ],
         "usage" : "M",
         "name" : "Ophthalmic Mapping Device Type"
      },
      "(0028,0a02)" : {
         "req" : "3",
         "desc" : [
            "The type of correction for the effect of geometric magnification or calibration against an object of known size, if any. See ",
            {
               "attrs" : {
                  "linkend" : "sect_10.7.1.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "entity" : "Image",
         "name" : "Pixel Spacing Calibration Type",
         "usage" : "M",
         "module" : "Corneal Topography Map Image",
         "mod_tables" : [
            "table_C.8.30.2-1",
            "table_10-10"
         ]
      },
      "(0008,1072)[<0>](0008,0080)" : {
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "entity" : "Series",
         "req" : "1C",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Institution Name"
      },
      "(0046,0210)[<0>](0024,0307)" : {
         "entity" : "Image",
         "desc" : "The software version identifier assigned to the data set.",
         "req" : "1",
         "mod_tables" : [
            "table_C.8.30.3-1",
            "table_10-22"
         ],
         "module" : "Corneal Topography Map Analysis",
         "usage" : "M",
         "name" : "Data Set Version"
      },
      "(0046,0244)[<0>](0046,0247)" : {
         "mod_tables" : [
            "table_C.8.30.3-1"
         ],
         "module" : "Corneal Topography Map Analysis",
         "name" : "Corneal Point Location",
         "usage" : "M",
         "entity" : "Image",
         "desc" : [
            "The x, y, and z coordinate of a point in the image within the cornea, in mm. Where the origin is conveyed by the Attribute Corneal Vertex Location (0046,0202).",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "For two dimensional maps z=0."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "req" : "1"
      },
      "(0046,0080)[<0>](0046,0075)" : {
         "entity" : "Image",
         "desc" : "The radius of curvature of the principal meridians of the cornea, measured in mm.",
         "req" : "1",
         "mod_tables" : [
            "table_C.8.30.3-1",
            "table_C.8.25.10-2"
         ],
         "module" : "Corneal Topography Map Analysis",
         "usage" : "M",
         "name" : "Radius of Curvature"
      },
      "(0038,0010)" : {
         "req" : "3",
         "desc" : "Identifier of the visit as assigned by the healthcare provider",
         "entity" : "Study",
         "usage" : "U",
         "name" : "Admission ID",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0008,0051)[<0>](0040,0032)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "module" : "General Study",
         "name" : "Universal Entity ID",
         "usage" : "M",
         "entity" : "Study",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0032)" : {
         "usage" : "M",
         "name" : "Universal Entity ID",
         "module" : "Patient",
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
                     "content" : [
                        "Equivalent to HL7 v2 CX component 4 subcomponent 2 (Universal ID)."
                     ],
                     "el" : "para"
                  },
                  "\n              "
               ]
            }
         ],
         "entity" : "Patient"
      },
      "(0010,0020)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "name" : "Patient ID",
         "usage" : "M",
         "entity" : "Patient",
         "desc" : "Primary hospital identification number or code for the patient.",
         "req" : "2"
      },
      "(4ffe,0001)[<0>](0400,0015)" : {
         "req" : "1",
         "entity" : "Image",
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
                              "targetdoc" : "PS3.15",
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
         "usage" : "M",
         "name" : "MAC Algorithm",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common"
      },
      "(0008,2218)" : {
         "req" : "1",
         "entity" : "Image",
         "desc" : [
            "Sequence that identifies the anatomic region of interest in this Instance (i.e., external anatomy, surface anatomy, or general region of the body).",
            "Only a single Item shall be included in this sequence."
         ],
         "name" : "Anatomic Region Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.30.2-1",
            "table_10-5"
         ],
         "module" : "Corneal Topography Map Image"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0035)" : {
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
         "entity" : "Patient",
         "req" : "3"
      },
      "(0040,0275)[<0>](0008,0051)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "module" : "General Series",
         "name" : "Issuer of Accession Number Sequence",
         "usage" : "M",
         "entity" : "Series",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this sequence."
         ],
         "req" : "3"
      },
      "(0040,9096)" : [
         {
            "desc" : [
               "The mapping of stored values to associated Real World values.",
               "One or more Items are permitted in this sequence."
            ],
            "entity" : "Image",
            "req" : "3",
            "module" : "General Image",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "name" : "Real World Value Mapping Sequence",
            "usage" : "M"
         },
         {
            "usage" : "M",
            "name" : "Real World Value Mapping Sequence",
            "mod_tables" : [
               "table_C.8.30.2-1",
               "table_C.7.6.16-12"
            ],
            "module" : "Corneal Topography Map Image",
            "req" : "1",
            "entity" : "Image",
            "desc" : [
               "The mapping of stored values to associated Real World values.",
               "One or more Items shall be included in this sequence."
            ]
         }
      ],
      "(0010,2297)" : {
         "req" : "2C",
         "entity" : "Patient",
         "desc" : [
            "Name of person with medical decision making authority for the patient.",
            "Required if the patient is an animal. May be present otherwise."
         ],
         "name" : "Responsible Person",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient"
      },
      "(0010,2201)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "name" : "Patient Species Description",
         "usage" : "M",
         "entity" : "Patient",
         "desc" : [
            "The species of the patient.",
            "Required if the patient is an animal and if Patient Species Code Sequence (0010,2202) is not present. May be present otherwise."
         ],
         "req" : "1C"
      },
      "(0088,0200)[<0>](0028,1203)" : {
         "name" : "Blue Palette Color Lookup Table Data",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image",
         "req" : "1C",
         "entity" : "Image",
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
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a123)" : {
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "usage" : "M",
         "name" : "Person Name",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series"
      },
      "(0040,0555)[<0>](0040,a121)" : {
         "entity" : "Image",
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
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "module" : "Acquisition Context",
         "name" : "Date",
         "usage" : "M"
      },
      "(0046,0204)" : {
         "entity" : "Image",
         "desc" : [
            [
               "The vertical coordinate of the centroid of the pupil relative to location of the cornea vertex specified in the Attribute Corneal Vertex Location (0046,0202), in mm, such that up is positive. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.30.3.1.4",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            "Required if Attribute Corneal Topography Surface (0046,0201) is A (Anterior).",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "This Attribute is conveyed in mm from the corneal vertex because display applications will have zoom and 3-D rotational capabilities."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.8.30.3-1"
         ],
         "module" : "Corneal Topography Map Analysis",
         "name" : "Pupil Centroid Y-Coordinate",
         "usage" : "M"
      },
      "(fffa,fffa)[<0>](0400,0401)" : {
         "req" : "3",
         "entity" : "Image",
         "desc" : [
            "The purpose of this Digital Signature.",
            "Only a single Item is permitted in this sequence."
         ],
         "usage" : "M",
         "name" : "Digital Signature Purpose Code Sequence",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common"
      },
      "(0010,2294)" : {
         "name" : "Breed Registration Sequence",
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "2C",
         "desc" : [
            "Information identifying an animal within a breed registry.",
            "Zero or more Items shall be included in this sequence.",
            "Required if the patient is an animal."
         ],
         "entity" : "Patient"
      },
      "(0040,9096)[<0>](0040,9211)" : [
         {
            "entity" : "Image",
            "desc" : [
               "Specifies the last stored value mapped for the Real Word Value Intercept (0040,9224) and Real World Value Slope (0040,9225) or Real World Value LUT (0040,9212) of this Item.",
               [
                  "See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "linkend" : "sect_C.7.6.16.2.11.1",
                        "xrefstyle" : "select: label"
                     }
                  },
                  " for further explanation."
               ]
            ],
            "req" : "1",
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7.6.16-12b"
            ],
            "module" : "General Image",
            "usage" : "M",
            "name" : "Real World Value Last Value Mapped"
         },
         {
            "req" : "1",
            "entity" : "Image",
            "desc" : [
               "Specifies the last stored value mapped for the Real Word Value Intercept (0040,9224) and Real World Value Slope (0040,9225) or Real World Value LUT (0040,9212) of this Item.",
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
            ],
            "name" : "Real World Value Last Value Mapped",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8.30.2-1",
               "table_C.7.6.16-12",
               "table_C.7.6.16-12b"
            ],
            "module" : "Corneal Topography Map Image"
         }
      ],
      "(0018,1000)" : [
         {
            "module" : "General Equipment",
            "mod_tables" : [
               "table_C.7-8"
            ],
            "usage" : "M",
            "name" : "Device Serial Number",
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
            "entity" : "Equipment",
            "req" : "3"
         },
         {
            "req" : "1",
            "entity" : "Equipment",
            "desc" : "Manufacturer's serial number of the equipment that produced the composite instances.",
            "name" : "Device Serial Number",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-8b"
            ],
            "module" : "Enhanced General Equipment"
         }
      ],
      "(0046,0244)[<0>](0046,0250)" : {
         "desc" : "Determined from the curvature (2nd derivative = d2y/dx2) of a point on the cornea, in diopters; also called Instantaneous Power. Emphasizes irregular astigmatism (large variations in higher order aberrations).",
         "entity" : "Image",
         "req" : "1",
         "module" : "Corneal Topography Map Analysis",
         "mod_tables" : [
            "table_C.8.30.3-1"
         ],
         "usage" : "M",
         "name" : "Tangential Power"
      },
      "(0028,1201)" : {
         "entity" : "Image",
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
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "module" : "Image Pixel",
         "usage" : "M",
         "name" : "Red Palette Color Lookup Table Data"
      },
      "(0008,1050)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "usage" : "M",
         "name" : "Performing Physician's Name",
         "entity" : "Series",
         "desc" : "Name of the physician(s) administering the Series.",
         "req" : "3"
      },
      "(0022,001b)" : {
         "mod_tables" : [
            "table_C.8.17.4-1",
            "table_C.8.17.8-2"
         ],
         "module" : "Ophthalmic Photography Acquisition Parameters",
         "usage" : "M",
         "name" : "Refractive State Sequence",
         "entity" : "Image",
         "desc" : [
            "The refractive state of the imaged eye at the time of acquisition.",
            "Zero or one Itemshall be included in this sequence.",
            "Zero length means the refractive state was not measured."
         ],
         "req" : "2"
      },
      "(0040,0555)[<0>](0040,a122)" : {
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a time.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "The purpose or role of the time value could be specified in Concept Name Code Sequence (0040,A043)."
                     ]
                  },
                  "\n                  "
               ]
            },
            "Required if the value that Concept Name Code Sequence (0040,A043) requires (implies) is a time. Shall not be present otherwise."
         ],
         "entity" : "Image",
         "req" : "1C",
         "module" : "Acquisition Context",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "name" : "Time",
         "usage" : "M"
      },
      "(0008,114a)[<0>](0008,1155)" : {
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-11"
         ],
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Image"
      },
      "(fffa,fffa)[<0>](0400,0005)" : {
         "req" : "1",
         "entity" : "Image",
         "desc" : "A number used to identify which MAC Parameters Sequence item was used in the calculation of this Digital Signature.",
         "usage" : "M",
         "name" : "MAC ID Number",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "req" : "1C",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "Patient",
         "name" : "Local Namespace Entity ID",
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a121)" : {
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "entity" : "Series",
         "req" : "1C",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Date"
      },
      "(0008,2112)[<0>](0008,1160)" : [
         {
            "usage" : "M",
            "name" : "Referenced Frame Number",
            "module" : "General Image",
            "mod_tables" : [
               "table_C.7-9",
               "table_10-3"
            ],
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
            "entity" : "Image"
         },
         {
            "module" : "Corneal Topography Map Analysis",
            "mod_tables" : [
               "table_C.8.30.3-1",
               "table_10-3"
            ],
            "usage" : "M",
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
                        "el" : "para"
                     },
                     "\n              "
                  ]
               },
               "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
            ],
            "entity" : "Image",
            "req" : "1C"
         }
      ],
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
         "entity" : "Series",
         "req" : "1",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Value Type"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a124)" : {
         "usage" : "M",
         "name" : "UID",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "entity" : "Series"
      },
      "(0038,0064)[<0>](0040,0032)" : {
         "req" : "1C",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "Study",
         "name" : "Universal Entity ID",
         "usage" : "U",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ]
      },
      "(0040,9096)[<0>](0040,9225)" : [
         {
            "entity" : "Image",
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
               "Required if Real World Value LUT Data (0040,9212) is not present."
            ],
            "req" : "1C",
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7.6.16-12b"
            ],
            "module" : "General Image",
            "usage" : "M",
            "name" : "Real World Value Slope"
         },
         {
            "req" : "1C",
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
            "entity" : "Image",
            "name" : "Real World Value Slope",
            "usage" : "M",
            "module" : "Corneal Topography Map Image",
            "mod_tables" : [
               "table_C.8.30.2-1",
               "table_C.7.6.16-12",
               "table_C.7.6.16-12b"
            ]
         }
      ],
      "(0018,a001)[<0>](0018,1000)" : {
         "usage" : "M",
         "name" : "Device Serial Number",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "req" : "3",
         "entity" : "Image",
         "desc" : "Manufacturer's serial number of the equipment that contributed to the composite instance."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0062,000b)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Referenced Segment Number",
         "usage" : "M",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "entity" : "Series",
         "req" : "1C"
      },
      "(0046,0215)[<0>](0046,0075)" : {
         "module" : "Corneal Topography Map Analysis",
         "mod_tables" : [
            "table_C.8.30.3-1"
         ],
         "usage" : "M",
         "name" : "Radius of Curvature",
         "desc" : "The radius of curvature of the principal meridian of the cornea, measured in mm.",
         "entity" : "Image",
         "req" : "1"
      },
      "(0046,0202)" : {
         "usage" : "M",
         "name" : "Corneal Vertex Location",
         "mod_tables" : [
            "table_C.8.30.3-1"
         ],
         "module" : "Corneal Topography Map Analysis",
         "req" : "1",
         "entity" : "Image",
         "desc" : [
            "Location of the corneal vertex. This is used for the reference point for other Attributes within this SOP Instance and determined by the Image referenced in the Attribute Source Image Sequence (0008,2112). Given as column\\row. Column is the horizontal offset and row is the vertical offset.",
            [
               "Image relative position specified with sub-pixel resolution such that the origin at the Top Left Hand Corner (TLHC) of the TLHC pixel is 0.0\\0.0, the Bottom Right Hand Corner (BRHC) of the TLHC pixel is 1.0\\1.0, and the BRHC of the BRHC pixel is Columns\\Rows (see ",
               {
                  "attrs" : {
                     "linkend" : "figure_C.10.5-1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "). The values must be within the range 0\\0 to Columns\\Rows."
            ],
            [
               "This location shall anchor the corneal vertex at the x, y and z coordinates of 0.0, 0.0, 0.0, in mm. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.30.3.1.4",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ]
         ]
      },
      "(0010,0024)[<0>](0040,003a)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "name" : "Assigning Agency or Department Code Sequence",
         "usage" : "M",
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
         "req" : "3"
      },
      "(0008,1049)[<0>](0040,1101)" : {
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Study",
         "req" : "1",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person Identification Code Sequence",
         "usage" : "M"
      },
      "(0046,0218)[<0>](0046,0076)" : {
         "req" : "1",
         "desc" : "The refractive power of the cornea at the principal meridian, measured in diopters.",
         "entity" : "Image",
         "name" : "Keratometric Power",
         "usage" : "M",
         "module" : "Corneal Topography Map Analysis",
         "mod_tables" : [
            "table_C.8.30.3-1"
         ]
      },
      "(0040,0555)[<0>](0040,a161)" : {
         "req" : "1C",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "entity" : "Image",
         "name" : "Floating Point Value",
         "usage" : "M",
         "module" : "Acquisition Context",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ]
      },
      "(0020,9172)[<0>](0062,000b)" : {
         "name" : "Referenced Segment Number",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "module" : "SOP Common",
         "req" : "1C",
         "entity" : "Image",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ]
      },
      "(0012,0060)" : {
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "module" : "Clinical Trial Series",
         "name" : "Clinical Trial Coordinating Center Name",
         "usage" : "U",
         "entity" : "Series",
         "desc" : [
            "The name of the institution that is responsible for coordinating the medical imaging data for the clinical trial. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.3.2.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "req" : "2"
      },
      "(0020,000d)" : {
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Study Instance UID",
         "usage" : "M",
         "desc" : "Unique identifier for the Study.",
         "entity" : "Study",
         "req" : "1"
      },
      "(0040,0254)" : {
         "entity" : "Series",
         "desc" : "Institution-generated description or classification of the Procedure Step that was performed.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "module" : "General Series",
         "usage" : "M",
         "name" : "Performed Procedure Step Description"
      },
      "(0038,0064)[<0>](0040,0031)" : {
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "module" : "Patient Study",
         "name" : "Local Namespace Entity ID",
         "usage" : "U",
         "entity" : "Study",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a120)" : {
         "usage" : "M",
         "name" : "DateTime",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "entity" : "Series"
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
            "entity" : "Series",
            "req" : "1",
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a"
            ],
            "usage" : "M",
            "name" : "Modality"
         },
         {
            "req" : "1",
            "desc" : [
               "Type of equipment that created the maps in this Series.",
               {
                  "type" : "variablelist",
                  "list" : [
                     [
                        "OPM",
                        null
                     ]
                  ],
                  "title" : "Enumerated Values:"
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
            "entity" : "Series",
            "name" : "Modality",
            "usage" : "M",
            "module" : "Corneal Topography Map Series",
            "mod_tables" : [
               "table_C.8.30.1-1"
            ]
         }
      ],
      "(0028,0103)" : [
         {
            "req" : "1",
            "entity" : "Image",
            "desc" : [
               "Data representation of the pixel samples. Each sample shall have the same pixel representation.",
               {
                  "title" : "Enumerated Values:",
                  "type" : "variablelist",
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
            "name" : "Pixel Representation",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "module" : "Image Pixel"
         },
         {
            "req" : "1",
            "desc" : [
               "Data representation of pixel samples.",
               {
                  "title" : "Enumerated Values:",
                  "type" : "variablelist",
                  "list" : [
                     [
                        "0000H",
                        "unsigned integer"
                     ]
                  ]
               }
            ],
            "entity" : "Image",
            "usage" : "M",
            "name" : "Pixel Representation",
            "module" : "Corneal Topography Map Image",
            "mod_tables" : [
               "table_C.8.30.2-1"
            ]
         }
      ],
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a121)" : {
         "name" : "Date",
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
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ]
      },
      "(0008,0012)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Instance Creation Date",
         "usage" : "M",
         "entity" : "Image",
         "desc" : [
            "Date the SOP Instance was created.",
            "This is the date that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "req" : "3"
      },
      "(0008,9215)" : {
         "entity" : "Image",
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
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image",
         "name" : "Derivation Code Sequence",
         "usage" : "M"
      },
      "(0008,1140)[<0>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3",
            "table_10-11"
         ],
         "module" : "General Image",
         "req" : "1",
         "entity" : "Image",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0008,1072)[<0>](0040,1103)" : {
         "req" : "3",
         "desc" : "Person's telephone number(s)",
         "entity" : "Series",
         "name" : "Person's Telephone Numbers",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ]
      },
      "(0028,0a04)" : {
         "mod_tables" : [
            "table_C.8.30.2-1",
            "table_10-10"
         ],
         "module" : "Corneal Topography Map Image",
         "usage" : "M",
         "name" : "Pixel Spacing Calibration Description",
         "entity" : "Image",
         "desc" : [
            "A free text description of the type of correction or calibration performed.",
            {
               "content" : [
                  "\n                ",
                  {
                     "el" : "orderedlist",
                     "attrs" : {
                        "numeration" : "arabic"
                     },
                     "content" : [
                        "\n                  ",
                        {
                           "el" : "listitem",
                           "content" : [
                              "\n                    ",
                              {
                                 "el" : "para",
                                 "content" : [
                                    "In the case of correction, the text might include description of the assumptions made about the body part and geometry and depth within the patient."
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
                                    "in the case of calibration, the text might include a description of the fiducial and where it is located (e.g., \"XYZ device applied to the skin over the greater trochanter\")."
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
                                 "content" : [
                                    "Though it is not required, the Device Module may be used to describe the specific characteristics and size of the calibration device."
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
            },
            "Required if Pixel Spacing Calibration Type (0028,0A02) is present."
         ],
         "req" : "1C"
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
      "no table reference (Image, Palette Color Lookup Table, , M)",
      "Can't handle table_8.8-1 (in table_C.8.30.2-1:table_C.7.6.16-12:table_C.7.6.16-12b after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.8.30.2-1:table_10-5 after (0008,2218))",
      "Can't handle table_8.8-1 (in table_C.8.30.2-1:table_10-5 after (0008,2220))",
      "Can't handle table_8.8-1 (in table_C.8.30.2-1:table_10-5:table_10-8 after (0008,2228))",
      "Can't handle table_8.8-1 (in table_C.8.30.2-1:table_10-5:table_10-8 after (0008,2230))",
      "Can't handle table_8.8-1 (in table_C.8.30.3-1 after (0046,0207))",
      "Can't handle table_8.8-1 (in table_C.8.30.3-1 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.8.17.4-1 after (0022,0006))",
      "Can't handle table_8.8-1 (in table_C.8.17.4-1:table_C.8.17.8-2 after (0022,001C))",
      "Can't handle table_8.8-1 (in table_C.8.17.4-1:table_C.8.17.8-2 after (0022,0042))",
      "Can't handle table_8.8-1 (in table_C.7.6.14-1 after (0040,A043))",
      "Can't handle table_8.8-1 (in table_C.7.6.14-1 after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.7.6.14-1 after (0040,A168))",
      "Can't handle table_8.8-1 (in table_C.12-1 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_C.12-6 after (0400,0401))"
   ]
}