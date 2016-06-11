var data = {
   "tags" : {
      "(0088,0200)[<0>](7fe0,0010)" : [
         {
            "name" : "Pixel Data",
            "module" : "General Image",
            "usage" : "M",
            "entity" : "Image",
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
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7-11b"
            ]
         },
         {
            "name" : "Pixel Data",
            "module" : "Enhanced US Image",
            "usage" : "M",
            "entity" : "Image",
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
            "mod_tables" : [
               "table_C.8.24.3-1",
               "table_C.7-11b"
            ]
         }
      ],
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0015)" : {
         "mod_tables" : [
            "table_C.8.24.3-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "name" : "MAC Algorithm",
         "module" : "Enhanced US Image",
         "usage" : "M",
         "req" : "1",
         "entity" : "Image",
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
                  "\n                  "
               ],
               "el" : "note"
            }
         ]
      },
      "(0040,0513)[<0>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "usage" : "U",
         "module" : "Specimen",
         "entity" : "Image",
         "req" : "1C",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a163)" : {
         "usage" : "M",
         "module" : "General Series",
         "name" : "Rational Denominator Value",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "req" : "1C",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0028,140c)[<0>](0028,1408)" : {
         "name" : "Blending Lookup Table Data",
         "module" : "Enhanced Palette Color Lookup Table",
         "usage" : "U",
         "req" : "1C",
         "entity" : "Image",
         "desc" : [
            "Contains the Blending Lookup Table values for this Weight input to the Blending operation.",
            "Required if Blending LUT 2 Transfer Function (0028,140D) is TABLE."
         ],
         "mod_tables" : [
            "table_C.7.6.23-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a121)" : [
         {
            "entity" : "Series",
            "req" : "1C",
            "desc" : [
               "Date value for this name-value Item.",
               "Required if Value Type (0040,A040) is DATE."
            ],
            "name" : "Date",
            "usage" : "M",
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2"
            ]
         },
         {
            "usage" : "M",
            "module" : "Enhanced US Series",
            "name" : "Date",
            "desc" : [
               "Date value for this name-value Item.",
               "Required if Value Type (0040,A040) is DATE."
            ],
            "entity" : "Series",
            "req" : "1C",
            "mod_tables" : [
               "table_C.8.24.1-1",
               "table_10-2"
            ]
         }
      ],
      "(0008,2112)[<0>](0062,000b)" : [
         {
            "mod_tables" : [
               "table_C.7-9",
               "table_10-3"
            ],
            "entity" : "Image",
            "req" : "1C",
            "desc" : [
               "Identifies the Segment Number to which the reference applies.",
               "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
            ],
            "name" : "Referenced Segment Number",
            "module" : "General Image",
            "usage" : "M"
         },
         {
            "entity" : "Image",
            "req" : "1C",
            "desc" : [
               "Identifies the Segment Number to which the reference applies.",
               "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
            ],
            "name" : "Referenced Segment Number",
            "module" : "Enhanced US Image",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8.24.3-1",
               "table_10-3"
            ]
         }
      ],
      "(0028,1404)[<0>](0028,1405)" : {
         "usage" : "U",
         "module" : "Enhanced Palette Color Lookup Table",
         "name" : "Blending LUT 1 Transfer Function",
         "desc" : [
            "Specifies the algorithm used to determine the output value of Blending LUT 1.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "CONSTANT",
                     null
                  ],
                  [
                     "ALPHA_1",
                     null
                  ],
                  [
                     "ALPHA_2",
                     null
                  ],
                  [
                     "TABLE",
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
                     "linkend" : "sect_C.7.6.23.4"
                  },
                  "el" : "xref"
               },
               " for details."
            ]
         ],
         "entity" : "Image",
         "req" : "1",
         "mod_tables" : [
            "table_C.7.6.23-1"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a160)" : {
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "module" : "General Series",
         "name" : "Text Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0008,1048)" : {
         "entity" : "Study",
         "req" : "3",
         "desc" : [
            "Names of the physician(s) who are responsible for overall patient care at time of Study (see ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.3.1"
               },
               "el" : "xref"
            },
            " for Performing Physician)"
         ],
         "name" : "Physician(s) of Record",
         "module" : "General Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0040,0275)[<0>](0040,0007)" : {
         "desc" : "Institution-generated description or classification of the Scheduled Procedure Step to be performed.",
         "req" : "3",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "name" : "Scheduled Procedure Step Description",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ]
      },
      "(0008,0012)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Date the SOP Instance was created.",
            "This is the date that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "req" : "3",
         "entity" : "Image",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Instance Creation Date"
      },
      "(0012,0040)" : {
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "desc" : [
            "The assigned identifier for the clinical trial subject. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.1.3.1.6",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            ". Shall be present if Clinical Trial Subject Reading ID (0012,0042) is absent. May be present otherwise."
         ],
         "entity" : "Patient",
         "req" : "1C",
         "module" : "Clinical Trial Subject",
         "usage" : "U",
         "name" : "Clinical Trial Subject ID"
      },
      "(0012,0064)" : {
         "desc" : [
            "A code describing the mechanism or method use to remove the patient's identity.",
            "One or more Items shall be included in this sequence. Multiple items are used if successive de-identification steps have been performed or to describe options of a defined profile.",
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method (0012,0063) is not present. May be present otherwise."
         ],
         "req" : "1C",
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "name" : "De-identification Method Code Sequence",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0008,1050)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "module" : "General Series",
         "name" : "Performing Physician's Name",
         "desc" : "Name of the physician(s) administering the Series.",
         "entity" : "Series",
         "req" : "3"
      },
      "(0010,2202)" : {
         "name" : "Patient Species Code Sequence",
         "module" : "Patient",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Patient",
         "desc" : [
            "The species of the patient.",
            "Only a single Item shall be included in this sequence.",
            "Required if the patient is an animal and if Patient Species Description (0010,2201) is not present. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0010,0024)[<0>](0040,0035)" : {
         "name" : "Identifier Type Code",
         "module" : "Patient",
         "usage" : "M",
         "entity" : "Patient",
         "req" : "3",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0028,0109)" : {
         "usage" : "M",
         "module" : "General Series",
         "name" : "Largest Pixel Value in Series",
         "desc" : "The maximum value of all images in this Series.",
         "req" : "3",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0018,0012)[<0>](0018,9425)" : {
         "name" : "Contrast/Bolus Ingredient Opaque",
         "module" : "Enhanced Contrast/Bolus",
         "usage" : "C - Required if contrast media was applied. See  for baseline context group ID.",
         "entity" : "Image",
         "req" : "3",
         "desc" : [
            "Absorption of the ingredient greater than the absorption of water (tissue).",
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
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.6.4b.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "mod_tables" : [
            "table_C.7-12b"
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)" : {
         "desc" : [
            "Sequence of Content Items identifying the processes used in one preparation step to prepare the specimen for image acquisition.",
            "One or more Items shall be included in this sequence."
         ],
         "req" : "1",
         "entity" : "Image",
         "usage" : "U",
         "module" : "Specimen",
         "name" : "Specimen Preparation Step Content Item Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      "(0040,0280)" : {
         "usage" : "M",
         "module" : "General Series",
         "name" : "Comments on the Performed Procedure Step",
         "desc" : "User-defined comments on the Performed Procedure Step.",
         "entity" : "Series",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ]
      },
      "(0040,9096)" : {
         "module" : "General Image",
         "usage" : "M",
         "name" : "Real World Value Mapping Sequence",
         "desc" : [
            "The mapping of stored values to associated Real World values.",
            "One or more Items are permitted in this sequence."
         ],
         "entity" : "Image",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-9"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a122)" : [
         {
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2"
            ],
            "desc" : [
               "Time value for this name-value Item.",
               "Required if Value Type (0040,A040) is TIME."
            ],
            "entity" : "Series",
            "req" : "1C",
            "usage" : "M",
            "module" : "General Series",
            "name" : "Time"
         },
         {
            "desc" : [
               "Time value for this name-value Item.",
               "Required if Value Type (0040,A040) is TIME."
            ],
            "entity" : "Series",
            "req" : "1C",
            "module" : "Enhanced US Series",
            "usage" : "M",
            "name" : "Time",
            "mod_tables" : [
               "table_C.8.24.1-1",
               "table_10-2"
            ]
         }
      ],
      "(0400,0500)[<0>](0400,0520)" : {
         "usage" : "M",
         "module" : "SOP Common",
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
         "entity" : "Image",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,1012)" : {
         "entity" : "Study",
         "req" : "3",
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
         "name" : "Reason For Performed Procedure Code Sequence",
         "module" : "General Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1155)" : [
         {
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2",
               "table_10-11"
            ],
            "module" : "General Series",
            "usage" : "M",
            "name" : "Referenced SOP Instance UID",
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "req" : "1",
            "entity" : "Series"
         },
         {
            "mod_tables" : [
               "table_C.8.24.1-1",
               "table_10-2",
               "table_10-11"
            ],
            "name" : "Referenced SOP Instance UID",
            "usage" : "M",
            "module" : "Enhanced US Series",
            "req" : "1",
            "entity" : "Series",
            "desc" : "Uniquely identifies the referenced SOP Instance."
         }
      ],
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1103)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "desc" : "Person's telephone number(s)",
         "req" : "3",
         "entity" : "Image",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Person's Telephone Numbers"
      },
      "(0028,1401)[<0>](0028,1403)" : {
         "mod_tables" : [
            "table_C.7.6.23-1"
         ],
         "usage" : "U",
         "module" : "Enhanced Palette Color Lookup Table",
         "name" : "Bits Mapped to Color Lookup Table",
         "desc" : [
            "The number of most significant bits of each value of Pixel Data (7FE0,0010) from this frame contributing to the Palette Color Lookup Table input.",
            "If absent, Bits Stored (0028,0101) bits of each value of Pixel Data (7FE0,0010) from this frame contributes to the Palette Color Lookup Table input.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.6.23.3",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for usage."
            ]
         ],
         "entity" : "Image",
         "req" : "3"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "module" : "Specimen",
         "name" : "Referenced SOP Sequence",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "entity" : "Image",
         "req" : "1C"
      },
      "(0008,2112)[<0>](0008,1160)" : [
         {
            "mod_tables" : [
               "table_C.7-9",
               "table_10-3"
            ],
            "name" : "Referenced Frame Number",
            "usage" : "M",
            "module" : "General Image",
            "entity" : "Image",
            "req" : "1C",
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
         {
            "mod_tables" : [
               "table_C.8.24.3-1",
               "table_10-3"
            ],
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
            "req" : "1C",
            "entity" : "Image",
            "usage" : "M",
            "module" : "Enhanced US Image",
            "name" : "Referenced Frame Number"
         }
      ],
      "(0400,0561)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "entity" : "Image",
         "desc" : [
            "Sequence of Items containing all attributes that were removed or replaced by other values in the main data set.",
            "One or more Items are permitted in this sequence."
         ],
         "name" : "Original Attributes Sequence",
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a122)" : [
         {
            "usage" : "M",
            "module" : "General Series",
            "name" : "Time",
            "desc" : [
               "Time value for this name-value Item.",
               "Required if Value Type (0040,A040) is TIME."
            ],
            "req" : "1C",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2"
            ]
         },
         {
            "mod_tables" : [
               "table_C.8.24.1-1",
               "table_10-2"
            ],
            "desc" : [
               "Time value for this name-value Item.",
               "Required if Value Type (0040,A040) is TIME."
            ],
            "req" : "1C",
            "entity" : "Series",
            "usage" : "M",
            "module" : "Enhanced US Series",
            "name" : "Time"
         }
      ],
      "(0088,0200)[<0>](0028,0010)" : [
         {
            "name" : "Rows",
            "usage" : "M",
            "module" : "General Image",
            "entity" : "Image",
            "req" : "1",
            "desc" : "Number of rows in the image.",
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7-11b"
            ]
         },
         {
            "mod_tables" : [
               "table_C.8.24.3-1",
               "table_C.7-11b"
            ],
            "req" : "1",
            "entity" : "Image",
            "desc" : "Number of rows in the image.",
            "name" : "Rows",
            "module" : "Enhanced US Image",
            "usage" : "M"
         }
      ],
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a124)" : [
         {
            "name" : "UID",
            "usage" : "M",
            "module" : "General Series",
            "req" : "1C",
            "entity" : "Series",
            "desc" : [
               "UID value for this name-value Item.",
               "Required if Value Type (0040,A040) is UIDREF."
            ],
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2"
            ]
         },
         {
            "mod_tables" : [
               "table_C.8.24.1-1",
               "table_10-2"
            ],
            "entity" : "Series",
            "req" : "1C",
            "desc" : [
               "UID value for this name-value Item.",
               "Required if Value Type (0040,A040) is UIDREF."
            ],
            "name" : "UID",
            "usage" : "M",
            "module" : "Enhanced US Series"
         }
      ],
      "(0008,1072)[<0>](0040,1102)" : {
         "desc" : "Person's mailing address",
         "entity" : "Series",
         "req" : "3",
         "module" : "General Series",
         "usage" : "M",
         "name" : "Person's Address",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ]
      },
      "(0040,0555)[<0>](0040,a160)" : {
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "name" : "Text Value",
         "module" : "Acquisition Context",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Image",
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a Text Observation Value.",
            "Required if Date (0040,A121), Time (0040,A122), and Person Name (0040,A123) do not fully describe the concept specified by Concept Name Code Sequence (0040,A043). Shall not be present otherwise."
         ]
      },
      "(0010,1001)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3",
         "entity" : "Patient",
         "desc" : "Other names used to identify the patient.",
         "name" : "Other Patient Names",
         "usage" : "M",
         "module" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a043)" : {
         "entity" : "Series",
         "req" : "1",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Concept Name Code Sequence",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0028,140c)" : {
         "desc" : [
            "Specification of the weight of the secondary path input to the Blending Operation, i.e., the value that is referred to as \"Weight 2\" in the Enhanced Blending and Display Pipeline.",
            "Only a single item shall be included in this sequence.",
            "Required if there are one or more items of the Data Path Assignment Sequence (0028,1402) other than PRIMARY_PVALUES."
         ],
         "entity" : "Image",
         "req" : "1C",
         "usage" : "U",
         "module" : "Enhanced Palette Color Lookup Table",
         "name" : "Blending LUT 2 Sequence",
         "mod_tables" : [
            "table_C.7.6.23-1"
         ]
      },
      "(0008,2112)[<0>](0008,1150)" : [
         {
            "mod_tables" : [
               "table_C.7-9",
               "table_10-3",
               "table_10-11"
            ],
            "module" : "General Image",
            "usage" : "M",
            "name" : "Referenced SOP Class UID",
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "req" : "1",
            "entity" : "Image"
         },
         {
            "mod_tables" : [
               "table_C.8.24.3-1",
               "table_10-3",
               "table_10-11"
            ],
            "name" : "Referenced SOP Class UID",
            "module" : "Enhanced US Image",
            "usage" : "M",
            "entity" : "Image",
            "req" : "1",
            "desc" : "Uniquely identifies the referenced SOP Class."
         }
      ],
      "(0040,0515)" : {
         "desc" : "Sequence of alternate identifiers for the container that contains the specimen(s) being imaged. These may have been assigned, e.g., by the manufacturer, or by another institution that collected the specimen. One or more Items are permitted in this sequence.",
         "entity" : "Image",
         "req" : "3",
         "usage" : "U",
         "module" : "Specimen",
         "name" : "Alternate Container Identifier Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      "(0018,1000)" : [
         {
            "name" : "Device Serial Number",
            "usage" : "M",
            "module" : "General Equipment",
            "req" : "3",
            "entity" : "Equipment",
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
            ]
         },
         {
            "mod_tables" : [
               "table_C.7-8b"
            ],
            "req" : "1",
            "entity" : "Equipment",
            "desc" : "Manufacturer's serial number of the equipment that produced the composite instances.",
            "name" : "Device Serial Number",
            "usage" : "M",
            "module" : "Enhanced General Equipment"
         }
      ],
      "(0040,0520)[<0>](0008,0070)" : {
         "desc" : "Manufacturer of the container component.",
         "entity" : "Image",
         "req" : "3",
         "usage" : "U",
         "module" : "Specimen",
         "name" : "Manufacturer",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)" : {
         "name" : "Referenced SOP Sequence",
         "usage" : "M",
         "module" : "General Series",
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0040,0254)" : {
         "name" : "Performed Procedure Step Description",
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "req" : "3",
         "desc" : "Institution-generated description or classification of the Procedure Step that was performed.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ]
      },
      "(0020,9222)[<0>](0020,9167)" : {
         "entity" : "Image",
         "req" : "1C",
         "desc" : [
            "Contains the Data Element Tag of the Functional Group Sequence that contains the Attribute that is referenced by the Dimension Index Pointer (0020,9165).",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.17.1",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ],
            "Required if the value of Dimension Index Pointer (0020,9165) is the Data Element Tag of an Attribute that is contained within a Functional Group Sequence."
         ],
         "name" : "Functional Group Pointer",
         "usage" : "M",
         "module" : "Multi-frame Dimension",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ]
      },
      "(0020,9222)[<0>](0020,9213)" : {
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "usage" : "M",
         "module" : "Multi-frame Dimension",
         "name" : "Dimension Index Private Creator",
         "desc" : [
            "Identification of the creator of a group of private data elements.",
            "Required if the Dimension Index Pointer (0020,9165) value is the Data Element Tag of a Private Attribute."
         ],
         "req" : "1C",
         "entity" : "Image"
      },
      "(0038,0064)[<0>](0040,0032)" : {
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "module" : "Patient Study",
         "usage" : "U",
         "name" : "Universal Entity ID",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "Study",
         "req" : "1C"
      },
      "(0040,a390)[<0>](0040,e010)" : {
         "entity" : "Image",
         "req" : "3",
         "desc" : "Retrieval access path to HL7 Structured Document. Includes fully specified scheme, authority, path, and query in accordance with RFC 2396",
         "name" : "Retrieve URI",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0088,0200)[<0>](0028,0106)" : [
         {
            "entity" : "Image",
            "req" : "3",
            "desc" : "The minimum actual pixel value encountered in this image.",
            "name" : "Smallest Image Pixel Value",
            "usage" : "M",
            "module" : "General Image",
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7-11b"
            ]
         },
         {
            "name" : "Smallest Image Pixel Value",
            "usage" : "M",
            "module" : "Enhanced US Image",
            "req" : "3",
            "entity" : "Image",
            "desc" : "The minimum actual pixel value encountered in this image.",
            "mod_tables" : [
               "table_C.8.24.3-1",
               "table_C.7-11b"
            ]
         }
      ],
      "(0018,1050)" : {
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "entity" : "Equipment",
         "req" : "3",
         "usage" : "M",
         "module" : "General Equipment",
         "name" : "Spatial Resolution",
         "mod_tables" : [
            "table_C.7-8"
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a168)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "module" : "Specimen",
         "name" : "Concept Code Sequence",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "entity" : "Image",
         "req" : "1C"
      },
      "(0010,0024)[<0>](0040,0039)" : {
         "desc" : [
            "The geo-political body that assigned the patient identifier. Typically a code for a country or a state/province. Only a single Item is permitted in this sequence.",
            {
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "Equivalent to HL7 v2 CX component 9 (Identifier Type Code)."
                     ],
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "entity" : "Patient",
         "req" : "3",
         "module" : "Patient",
         "usage" : "M",
         "name" : "Assigning Jurisdiction Code Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0008,1084)" : {
         "name" : "Admitting Diagnoses Code Sequence",
         "usage" : "U",
         "module" : "Patient Study",
         "entity" : "Study",
         "req" : "3",
         "desc" : [
            "A sequence that conveys the admitting diagnosis (diagnoses).",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0012,0083)[<0>](0012,0084)" : {
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "entity" : "Study",
         "req" : "1C",
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
         "name" : "Distribution Type",
         "usage" : "U",
         "module" : "Clinical Trial Study"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)" : {
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "usage" : "U",
         "module" : "Common Instance Reference",
         "name" : "Referenced Instance Sequence",
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this sequence."
         ],
         "entity" : "Image",
         "req" : "1"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,08ea)" : {
         "name" : "Measurement Units Code Sequence",
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "req" : "1C",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0028,0010)" : {
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "name" : "Rows",
         "usage" : "M",
         "module" : "Image Pixel",
         "req" : "1",
         "entity" : "Image",
         "desc" : "Number of rows in the image."
      },
      "(0028,1401)[<0>](0018,9808)" : {
         "desc" : "Identification of the data type of frames using this data path assignment.",
         "req" : "1",
         "entity" : "Image",
         "usage" : "U",
         "module" : "Enhanced Palette Color Lookup Table",
         "name" : "Data Type",
         "mod_tables" : [
            "table_C.7.6.23-1"
         ]
      },
      "(0008,0032)" : {
         "mod_tables" : [
            "table_C.7-9"
         ],
         "entity" : "Image",
         "req" : "3",
         "desc" : "The time the acquisition of data that resulted in this image started",
         "name" : "Acquisition Time",
         "usage" : "M",
         "module" : "General Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a161)" : {
         "entity" : "Series",
         "req" : "1C",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "name" : "Floating Point Value",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0008,2112)[<0>](0020,0020)" : {
         "entity" : "Image",
         "req" : "1C",
         "desc" : [
            "The Patient Orientation values of the source image.",
            "Required if the value of Spatial Locations Preserved (0028,135A) is REORIENTED_ONLY."
         ],
         "name" : "Patient Orientation",
         "usage" : "M",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ]
      },
      "(0018,0012)[<0>](0018,9338)" : {
         "entity" : "Image",
         "req" : "2",
         "desc" : [
            "Active ingredient of agent.",
            "Zero or more Items shall be included in this sequence."
         ],
         "name" : "Contrast/Bolus Ingredient Code Sequence",
         "module" : "Enhanced Contrast/Bolus",
         "usage" : "C - Required if contrast media was applied. See  for baseline context group ID.",
         "mod_tables" : [
            "table_C.7-12b"
         ]
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0031)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "name" : "Local Namespace Entity ID",
         "module" : "Patient",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Patient",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise."
      },
      "(0018,1803)" : {
         "desc" : [
            "IP Address of NTP, SNTP, or PTP time source. IPv4 addresses shall be in dotted decimal (e.g., 192.168.1.1). The IPv6 addresses shall be in colon separated hexadecimal (e.g., 12:34:56:78:9a:bc:de:f0).",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "Identity of this value in two instances acquired contemporaneously implies a common time base. The NTP Source Address might not persist over time."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "entity" : "Frame of Reference",
         "req" : "3",
         "module" : "Synchronization",
         "usage" : "M",
         "name" : "NTP Source Address",
         "mod_tables" : [
            "table_C.7-7"
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a124)" : {
         "name" : "UID",
         "usage" : "U",
         "module" : "Specimen",
         "req" : "1C",
         "entity" : "Image",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0012,0010)" : {
         "req" : "1",
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
         "name" : "Clinical Trial Sponsor Name",
         "usage" : "U",
         "module" : "Clinical Trial Subject",
         "mod_tables" : [
            "table_C.7-2b"
         ]
      },
      "(0040,0520)[<0>](0050,0013)" : {
         "desc" : "Thickness in mm of container component",
         "req" : "3",
         "entity" : "Image",
         "module" : "Specimen",
         "usage" : "U",
         "name" : "Container Component Thickness",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      "(0050,0010)[<0>](0008,0070)" : {
         "mod_tables" : [
            "table_C.7-18"
         ],
         "name" : "Manufacturer",
         "module" : "Device",
         "usage" : "U",
         "entity" : "Image",
         "req" : "3",
         "desc" : "Manufacturer of the device"
      },
      "(0012,0060)" : {
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "entity" : "Series",
         "req" : "2",
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
         "name" : "Clinical Trial Coordinating Center Name",
         "usage" : "U",
         "module" : "Clinical Trial Series"
      },
      "(0008,2112)[<0>](0008,1155)" : [
         {
            "mod_tables" : [
               "table_C.7-9",
               "table_10-3",
               "table_10-11"
            ],
            "usage" : "M",
            "module" : "General Image",
            "name" : "Referenced SOP Instance UID",
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "req" : "1",
            "entity" : "Image"
         },
         {
            "mod_tables" : [
               "table_C.8.24.3-1",
               "table_10-3",
               "table_10-11"
            ],
            "entity" : "Image",
            "req" : "1",
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "name" : "Referenced SOP Instance UID",
            "module" : "Enhanced US Image",
            "usage" : "M"
         }
      ],
      "(0040,0560)[<0>](0040,0562)" : {
         "desc" : [
            "The name or code for the institution that has assigned the Specimen Identifier.",
            "Zero or one Item shall be included in this sequence."
         ],
         "entity" : "Image",
         "req" : "2",
         "module" : "Specimen",
         "usage" : "U",
         "name" : "Issuer of the Specimen Identifier Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a040)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "module" : "General Series",
         "name" : "Value Type",
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
         ],
         "entity" : "Series",
         "req" : "1"
      },
      "(0018,1200)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "module" : "General Equipment",
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
         "entity" : "Equipment"
      },
      "(0028,140b)[<0>](0028,1104)" : {
         "entity" : "Image",
         "req" : "1C",
         "desc" : [
            "Specifies the format of the Alpha Palette Color Lookup Table Data.",
            "The second value (first stored pixel value mapped) shall be zero.",
            "Required if Alpha LUT Transfer Function (0028,1410) is TABLE."
         ],
         "name" : "Alpha Palette Color Lookup Table Descriptor",
         "usage" : "U",
         "module" : "Enhanced Palette Color Lookup Table",
         "mod_tables" : [
            "table_C.7.6.23-1"
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a163)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "entity" : "Image",
         "req" : "1C",
         "module" : "Specimen",
         "usage" : "U",
         "name" : "Rational Denominator Value"
      },
      "(0018,a001)[<0>](0018,a002)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Contribution DateTime",
         "desc" : "The Date & Time when the equipment contributed to the composite instance.",
         "entity" : "Image",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0560)[<0>](0040,0562)[<1>](0040,0033)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "req" : "1C",
         "entity" : "Image",
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
         "name" : "Universal Entity ID Type",
         "usage" : "U",
         "module" : "Specimen"
      },
      "(0018,a001)[<0>](0040,a170)" : {
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
         "req" : "1",
         "entity" : "Image",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Purpose of Reference Code Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,103f)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series",
         "req" : "3",
         "desc" : [
            "A coded description of the Series.",
            "Only a single Item is permitted in this sequence."
         ],
         "name" : "Series Description Code Sequence",
         "usage" : "M",
         "module" : "General Series"
      },
      "(0008,1030)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Study Description",
         "usage" : "M",
         "module" : "General Study",
         "req" : "3",
         "entity" : "Study",
         "desc" : "Institution-generated description or classification of the Study (component) performed."
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)" : {
         "entity" : "Image",
         "req" : "1",
         "desc" : [
            "References to Composite Object SOP Class/SOP Instance pairs that are part of the Study defined by Study Instance UID and the Series defined by Series Instance UID (0020,000E).",
            "One or more Items shall be included in this sequence."
         ],
         "name" : "Referenced SOP Sequence",
         "module" : "Enhanced US Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.24.3-1",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1150)" : {
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ],
         "entity" : "Image",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "module" : "Common Instance Reference",
         "usage" : "U"
      },
      "(4ffe,0001)[<0>](0400,0010)" : {
         "name" : "MAC Calculation Transfer Syntax UID",
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "1",
         "entity" : "Image",
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
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0040,0520)[<0>](0050,001b)" : {
         "desc" : "Manufacturer's identifier of the container component, e.g., Lot Number and/or Version.",
         "entity" : "Image",
         "req" : "3",
         "module" : "Specimen",
         "usage" : "U",
         "name" : "Container Component ID",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      "(0018,1083)" : {
         "mod_tables" : [
            "table_C.7.6.18-1"
         ],
         "desc" : [
            "Number of R-R intervals acquired and used to create the image (not including the intervals rejected).",
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and Cardiac Synchronization Technique (0018,9037) equals other than NONE.",
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and Cardiac Synchronization Technique (0018,9037) equals other than NONE."
         ],
         "req" : "2C",
         "entity" : "Image",
         "usage" : "C - Required if cardiac synchronization was applied.",
         "module" : "Cardiac Synchronization",
         "name" : "Intervals Acquired"
      },
      "(0008,3010)" : {
         "module" : "General Image",
         "usage" : "M",
         "name" : "Irradiation Event UID",
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
         "req" : "3",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9"
         ]
      },
      "(0018,106c)" : {
         "mod_tables" : [
            "table_C.7-7"
         ],
         "name" : "Synchronization Channel",
         "module" : "Synchronization",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Frame of Reference",
         "desc" : [
            [
               "Identifier of waveform channel that records the synchronization channel or trigger, see ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.4.2.1.3"
                  }
               },
               "."
            ],
            "Required if synchronization channel or trigger is encoded in a waveform in this SOP Instance"
         ]
      },
      "(0020,0060)" : {
         "entity" : "Series",
         "req" : "2C",
         "desc" : [
            "Laterality of (paired) body part examined. Required if the body part examined is a paired structure and Image Laterality (0020,0062) or Frame Laterality (0020,9072) are not sent.",
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
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
         "name" : "Laterality",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0018,a001)" : {
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
                     "linkend" : "sect_C.12.1.1.5",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ]
         ],
         "req" : "3",
         "entity" : "Image",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Contributing Equipment Sequence"
      },
      "(0088,0200)[<0>](0028,0011)" : [
         {
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7-11b"
            ],
            "name" : "Columns",
            "usage" : "M",
            "module" : "General Image",
            "req" : "1",
            "entity" : "Image",
            "desc" : "Number of columns in the image"
         },
         {
            "desc" : "Number of columns in the image",
            "entity" : "Image",
            "req" : "1",
            "module" : "Enhanced US Image",
            "usage" : "M",
            "name" : "Columns",
            "mod_tables" : [
               "table_C.8.24.3-1",
               "table_C.7-11b"
            ]
         }
      ],
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1C",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ]
      },
      "(0008,0016)" : {
         "entity" : "Image",
         "req" : "1",
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
                  "targetptr" : "PS3.4",
                  "xrefstyle" : "select: labelnumber",
                  "targetdoc" : "PS3.4"
               }
            },
            "."
         ],
         "name" : "SOP Class UID",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0018,1061)" : {
         "mod_tables" : [
            "table_C.7-7"
         ],
         "module" : "Synchronization",
         "usage" : "M",
         "name" : "Trigger Source or Type",
         "desc" : "Specifies equipment ID of trigger source and/or type of trigger",
         "entity" : "Frame of Reference",
         "req" : "3"
      },
      "(fffa,fffa)[<0>](0400,0115)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : [
            [
               "A certificate that holds the identity of the entity producing this Digital Signature, that entity's public key or key identifier, and the algorithm and associated parameters with which that public key is to be used. Algorithms allowed are specified in Digital Signature Security Profiles (see ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "targetdoc" : "PS3.15",
                     "xrefstyle" : "select: labelnumber",
                     "targetptr" : "PS3.15"
                  }
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
                     "el" : "orderedlist",
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
                           "el" : "listitem",
                           "content" : [
                              "\n                          ",
                              {
                                 "content" : [
                                    "When symmetric encryption is used, the certificate merely identifies which key was used by which entity, but not the actual key itself. Some other means (e.g., a trusted third party) must be used to obtain the key."
                                 ],
                                 "el" : "para"
                              },
                              "\n                        "
                           ]
                        },
                        "\n                      "
                     ]
                  },
                  "\n                    "
               ]
            }
         ],
         "req" : "1",
         "entity" : "Image",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Certificate of Signer"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0100)" : {
         "mod_tables" : [
            "table_C.8.24.3-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "name" : "Digital Signature UID",
         "module" : "Enhanced US Image",
         "usage" : "M",
         "entity" : "Image",
         "req" : "1",
         "desc" : "The Unique Identifier of a Digital Signature held in the referenced SOP Instance."
      },
      "(0018,9803)[<0>](0018,9804)" : {
         "module" : "Excluded Intervals",
         "usage" : "U",
         "name" : "Exclusion Start DateTime",
         "desc" : "Time-point of the exclusion start in the same Synchronization Frame of Reference as Acquisition DateTime (0008,002A).",
         "entity" : "Image",
         "req" : "1",
         "mod_tables" : [
            "table_C.8.24.5-1"
         ]
      },
      "(0008,1062)[<0>](0040,1103)" : {
         "name" : "Person's Telephone Numbers",
         "usage" : "M",
         "module" : "General Study",
         "req" : "3",
         "entity" : "Study",
         "desc" : "Person's telephone number(s)",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0008,1110)[<0>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "module" : "General Study",
         "usage" : "M",
         "req" : "1",
         "entity" : "Study",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ]
      },
      "(0008,2111)" : {
         "mod_tables" : [
            "table_C.7-9"
         ],
         "req" : "3",
         "entity" : "Image",
         "desc" : [
            "A text description of how this image was derived. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.6.1.1.3",
                  "xrefstyle" : "select: label"
               }
            },
            " for further explanation."
         ],
         "name" : "Derivation Description",
         "module" : "General Image",
         "usage" : "M"
      },
      "(0028,2112)" : [
         {
            "mod_tables" : [
               "table_C.7-9"
            ],
            "usage" : "M",
            "module" : "General Image",
            "name" : "Lossy Image Compression Ratio",
            "desc" : [
               "Describes the approximate lossy compression ratio(s) that have been applied to this image.",
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
               "May be multivalued if successive lossy compression steps have been applied.",
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
                                    "content" : [
                                       "For example, a compression ratio of 30:1 would be described in this Attribute with a single value of 30."
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
                                       "For historical reasons, the lossy compression ratio may also be described in Derivation Description (0008,2111)."
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
            "req" : "3"
         },
         {
            "entity" : "Image",
            "req" : "1C",
            "desc" : [
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
               "Required if Lossy Image Compression (0028,2110) equals 01."
            ],
            "name" : "Lossy Image Compression Ratio",
            "module" : "Enhanced US Image",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8.24.3-1"
            ]
         }
      ],
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a162)" : {
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "entity" : "Series",
         "req" : "1C",
         "module" : "General Series",
         "usage" : "M",
         "name" : "Rational Numerator Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0008,0051)[<0>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "usage" : "M",
         "module" : "General Study",
         "req" : "1C",
         "entity" : "Study",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0081)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "entity" : "Image",
         "req" : "3",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "name" : "Institution Address",
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0088,0140)" : {
         "usage" : "M",
         "module" : "Enhanced US Image",
         "name" : "Storage Media File-Set UID",
         "desc" : "Uniquely identifies the Storage Media on which the Composite Object(s) reside.",
         "entity" : "Image",
         "req" : "3",
         "mod_tables" : [
            "table_C.8.24.3-1",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0018,0012)[<0>](0018,0014)" : {
         "name" : "Contrast/Bolus Administration Route Sequence",
         "usage" : "C - Required if contrast media was applied. See  for baseline context group ID.",
         "module" : "Enhanced Contrast/Bolus",
         "req" : "1",
         "entity" : "Image",
         "desc" : [
            "Sequence that identifies the route of administration of contrast agent.",
            "Only a single Item shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-12b"
         ]
      },
      "(0008,0033)" : {
         "desc" : [
            "The time the image pixel data creation started.",
            "Required if image is part of a series in which the images are temporally related. May be present otherwise."
         ],
         "req" : "2C",
         "entity" : "Image",
         "module" : "General Image",
         "usage" : "M",
         "name" : "Content Time",
         "mod_tables" : [
            "table_C.7-9"
         ]
      },
      "(0008,1062)[<0>](0008,0081)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Address",
         "usage" : "M",
         "module" : "General Study",
         "req" : "3",
         "entity" : "Study",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable."
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0031)" : {
         "usage" : "M",
         "module" : "General Series",
         "name" : "Local Namespace Entity ID",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ]
      },
      "(0040,0275)[<0>](0040,1002)" : {
         "desc" : "Reason for requesting this procedure.",
         "req" : "3",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "name" : "Reason for the Requested Procedure",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a123)" : [
         {
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2"
            ],
            "name" : "Person Name",
            "module" : "General Series",
            "usage" : "M",
            "entity" : "Series",
            "req" : "1C",
            "desc" : [
               "Person name value for this name-value Item.",
               "Required if Value Type (0040,A040) is PNAME."
            ]
         },
         {
            "req" : "1C",
            "entity" : "Series",
            "desc" : [
               "Person name value for this name-value Item.",
               "Required if Value Type (0040,A040) is PNAME."
            ],
            "name" : "Person Name",
            "usage" : "M",
            "module" : "Enhanced US Series",
            "mod_tables" : [
               "table_C.8.24.1-1",
               "table_10-2"
            ]
         }
      ],
      "(4ffe,0001)[<0>](0400,0015)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
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
                  "\n                    "
               ]
            }
         ],
         "entity" : "Image",
         "req" : "1",
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "MAC Algorithm"
      },
      "(0020,9172)[<0>](0008,1150)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Image",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ]
      },
      "(fffa,fffa)[<0>](0400,0401)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "3",
         "entity" : "Image",
         "desc" : [
            "The purpose of this Digital Signature.",
            "Only a single Item is permitted in this sequence."
         ],
         "name" : "Digital Signature Purpose Code Sequence",
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)" : [
         {
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2"
            ],
            "req" : "1C",
            "entity" : "Series",
            "desc" : [
               "Composite SOP Instance Reference value for this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
            ],
            "name" : "Referenced SOP Sequence",
            "usage" : "M",
            "module" : "General Series"
         },
         {
            "module" : "Enhanced US Series",
            "usage" : "M",
            "name" : "Referenced SOP Sequence",
            "desc" : [
               "Composite SOP Instance Reference value for this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
            ],
            "entity" : "Series",
            "req" : "1C",
            "mod_tables" : [
               "table_C.8.24.1-1",
               "table_10-2"
            ]
         }
      ],
      "(0008,1060)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "Names of the physician(s) reading the Study.",
         "req" : "3",
         "entity" : "Study",
         "module" : "General Study",
         "usage" : "M",
         "name" : "Name of Physician(s) Reading Study"
      },
      "(0008,0096)[<0>](0008,0081)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Address",
         "module" : "General Study",
         "usage" : "M",
         "req" : "3",
         "entity" : "Study",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable."
      },
      "(0018,a001)[<0>](0018,1020)" : {
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
         "req" : "3",
         "entity" : "Image",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Software Versions"
      },
      "(0008,1164)[<0>](0008,1163)" : {
         "mod_tables" : [
            "table_C.12-9"
         ],
         "module" : "Frame Extraction",
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "name" : "Time Range",
         "desc" : [
            "The start and end times of the frames that were extracted.",
            "Required if object extraction is based on a Frame Level Retrieve using Time Range (0008,1163).",
            [
               "See ",
               {
                  "attrs" : {
                     "targetptr" : "PS3.4",
                     "xrefstyle" : "select: labelnumber",
                     "targetdoc" : "PS3.4"
                  },
                  "el" : "olink"
               },
               " \"Instance and Frame Level Retrieve SOP Classes\""
            ]
         ],
         "entity" : "Image",
         "req" : "1C"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0120)" : {
         "mod_tables" : [
            "table_C.8.24.3-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "name" : "Signature",
         "usage" : "M",
         "module" : "Enhanced US Image",
         "entity" : "Image",
         "req" : "1",
         "desc" : "The Signature Value identified by the Digital Signature UID within the Referenced SOP Instance UID."
      },
      "(0028,140b)" : {
         "mod_tables" : [
            "table_C.7.6.23-1"
         ],
         "req" : "1C",
         "entity" : "Image",
         "desc" : [
            "This sequence contains the Palette Color Lookup Table.",
            "One or two items shall be included in this sequence.",
            "Required if Data Path Assignment (0028,1402) is present with a value other than PRIMARY_PVALUES."
         ],
         "name" : "Enhanced Palette Color Lookup Table Sequence",
         "module" : "Enhanced Palette Color Lookup Table",
         "usage" : "U"
      },
      "(0008,2122)" : {
         "mod_tables" : [
            "table_C.8.24.3-1"
         ],
         "name" : "Stage Number",
         "module" : "Enhanced US Image",
         "usage" : "M",
         "entity" : "Image",
         "req" : "1C",
         "desc" : [
            "A number that identifies the Stage. Stage Number starts at one.",
            "Required if Performed Protocol Type (0040,0261) is present with value STAGED."
         ]
      },
      "(0028,140b)[<0>](0028,1202)" : {
         "mod_tables" : [
            "table_C.7.6.23-1"
         ],
         "name" : "Green Palette Color Lookup Table Data",
         "usage" : "U",
         "module" : "Enhanced Palette Color Lookup Table",
         "req" : "1C",
         "entity" : "Image",
         "desc" : [
            "Green Palette Color Lookup Table Data.",
            "Required if RGB LUT Transfer Function (0028,140F) is TABLE."
         ]
      },
      "(0008,1040)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "desc" : "Department in the institution where the equipment that produced the composite instances is located.",
         "req" : "3",
         "entity" : "Equipment",
         "usage" : "M",
         "module" : "General Equipment",
         "name" : "Institutional Department Name"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a161)" : {
         "usage" : "M",
         "module" : "General Series",
         "name" : "Floating Point Value",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "entity" : "Series",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a162)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "req" : "1C",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "name" : "Rational Numerator Value",
         "usage" : "M",
         "module" : "General Series"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a162)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "module" : "Specimen",
         "name" : "Rational Numerator Value",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
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
         "req" : "3",
         "usage" : "M",
         "module" : "General Series",
         "name" : "Content Item Modifier Sequence"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a160)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "entity" : "Image",
         "req" : "1C",
         "usage" : "U",
         "module" : "Specimen",
         "name" : "Text Value"
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
         ],
         "name" : "Consent for Distribution Flag",
         "module" : "Clinical Trial Study",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4b"
         ]
      },
      "(0040,9096)[<0>](0040,9216)" : {
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
         "req" : "1",
         "entity" : "Image",
         "usage" : "M",
         "module" : "General Image",
         "name" : "Real World Value First Value Mapped",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,08ea)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Measurement Units Code Sequence",
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1C",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ]
      },
      "(0010,0032)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "module" : "Patient",
         "name" : "Patient's Birth Time",
         "desc" : "Birth time of the Patient.",
         "req" : "3",
         "entity" : "Patient"
      },
      "(0020,1040)" : {
         "mod_tables" : [
            "table_C.7-6"
         ],
         "desc" : [
            "Part of the imaging target used as a reference. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.4.1.1.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "entity" : "Frame of Reference",
         "req" : "2",
         "module" : "Frame of Reference",
         "usage" : "M",
         "name" : "Position Reference Indicator"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0088,0130)" : {
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the Composite Object (s) reside.",
         "req" : "3",
         "entity" : "Image",
         "usage" : "M",
         "module" : "Enhanced US Image",
         "name" : "Storage Media File-Set ID",
         "mod_tables" : [
            "table_C.8.24.3-1",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0040,a390)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
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
         ],
         "entity" : "Image",
         "req" : "1C"
      },
      "(0040,0560)[<0>](0040,0562)[<1>](0040,0032)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "req" : "1C",
         "entity" : "Image",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "name" : "Universal Entity ID",
         "module" : "Specimen",
         "usage" : "U"
      },
      "(0040,0560)[<0>](0040,0600)" : {
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "desc" : "Short textual specimen description (may include ancestor specimen descriptions).",
         "req" : "3",
         "entity" : "Image",
         "usage" : "U",
         "module" : "Specimen",
         "name" : "Specimen Short Description"
      },
      "(0012,0071)" : {
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
         ],
         "entity" : "Series",
         "req" : "3",
         "usage" : "U",
         "module" : "Clinical Trial Series",
         "name" : "Clinical Trial Series ID"
      },
      "(0018,a001)[<0>](0008,0080)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Institution where the equipment that contributed to the composite instance is located.",
         "entity" : "Image",
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Institution Name"
      },
      "(0008,1049)[<0>](0040,1103)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "usage" : "M",
         "name" : "Person's Telephone Numbers",
         "desc" : "Person's telephone number(s)",
         "entity" : "Study",
         "req" : "3"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a043)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1",
         "entity" : "Image",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Concept Name Code Sequence",
         "usage" : "U",
         "module" : "Specimen"
      },
      "(0088,0200)[<0>](0028,1202)" : [
         {
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7-11b"
            ],
            "name" : "Green Palette Color Lookup Table Data",
            "usage" : "M",
            "module" : "General Image",
            "req" : "1C",
            "entity" : "Image",
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
         {
            "name" : "Green Palette Color Lookup Table Data",
            "module" : "Enhanced US Image",
            "usage" : "M",
            "entity" : "Image",
            "req" : "1C",
            "desc" : [
               "Green Palette Color Lookup Table Data. Required if Photometric Interpretation (0028,0004) has a value of PALETTE COLOR or Pixel Presentation (0008,9205) at the image level equals COLOR or MIXED. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.6.3.1.6",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            "mod_tables" : [
               "table_C.8.24.3-1",
               "table_C.7-11b"
            ]
         }
      ],
      "(0028,1401)[<0>](0028,1050)" : {
         "module" : "Enhanced Palette Color Lookup Table",
         "usage" : "U",
         "name" : "Window Center",
         "desc" : [
            "Window Center for display.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.11.2.1.2"
                  }
               },
               " for further explanation."
            ],
            "Required if VOI LUT Sequence (0028,3010) is not present. May be present otherwise."
         ],
         "req" : "1C",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.23-1",
            "table_C.11-2b"
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1102)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "entity" : "Image",
         "req" : "3",
         "desc" : "Person's mailing address",
         "name" : "Person's Address",
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1160)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
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
         "req" : "1C",
         "entity" : "Series"
      },
      "(0028,1404)[<0>](0028,1408)" : {
         "module" : "Enhanced Palette Color Lookup Table",
         "usage" : "U",
         "name" : "Blending Lookup Table Data",
         "desc" : [
            "Contains the Blending Lookup Table values for this Weight input to the Blending Operation.",
            "Required if Blending LUT 1 Transfer Function (0028,1405) is TABLE."
         ],
         "entity" : "Image",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.23-1"
         ]
      },
      "(0018,980e)" : {
         "req" : "1",
         "entity" : "Image",
         "desc" : [
            "Technique used by the transducer for beam steering.",
            "One or more items shall be included in this sequence.",
            "If more than one item is present, the order is significant from plane-forming technique to volume-forming technique.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.24.3.4"
                  }
               },
               " for further explanation."
            ]
         ],
         "name" : "Transducer Beam Steering Code Sequence",
         "usage" : "M",
         "module" : "Enhanced US Image",
         "mod_tables" : [
            "table_C.8.24.3-1"
         ]
      },
      "(0018,1008)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "req" : "3",
         "entity" : "Equipment",
         "desc" : "Identifier of the gantry or positioner.",
         "name" : "Gantry ID",
         "usage" : "M",
         "module" : "General Equipment"
      },
      "(0018,9801)" : {
         "desc" : "The depth or depths from the transducer face, of the manufacturer defined beam focus points used for the image, in mm.",
         "entity" : "Image",
         "req" : "1",
         "usage" : "M",
         "module" : "Enhanced US Image",
         "name" : "Depth(s) of Focus",
         "mod_tables" : [
            "table_C.8.24.3-1"
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0082)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Institution Code Sequence",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Image",
         "req" : "1C"
      },
      "(0008,1049)[<0>](0040,1102)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "3",
         "entity" : "Study",
         "desc" : "Person's mailing address",
         "name" : "Person's Address",
         "module" : "General Study",
         "usage" : "M"
      },
      "(0008,2112)[<0>](0028,135a)" : {
         "usage" : "M",
         "module" : "General Image",
         "name" : "Spatial Locations Preserved",
         "desc" : [
            "The extent to which the spatial locations of all pixels are preserved during the processing of the source image that resulted in the current image",
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
                  ],
                  [
                     "REORIENTED_ONLY",
                     "A projection radiograph that has been flipped, and/or rotated by a multiple of 90 degrees"
                  ]
               ],
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
                           "content" : [
                              "\n                        ",
                              {
                                 "el" : "para",
                                 "content" : [
                                    "This applies not only to images with a known relationship to a 3D space, but also to projection images. For example, a projection radiograph such as a mammogram that is processed by a point image processing operation such as contrast enhancement, or a smoothing or edge enhancing convolution, would have a value of YES for this attribute. A projection radiograph that had been magnified or warped geometrically would have a value of NO for this attribute. A projection radiograph that has been flipped, and/or rotated by a multiple of 90 degrees, such that transformation of pixel locations is possible by comparison of the values of Patient Orientation (0020,0020) would have a value of REORIENTED_ONLY. This attribute is typically of importance in relating images with Presentation Intent Type (0008,0068) values of FOR PROCESSING and FOR PRESENTATION."
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
                                    "When the value of this attribute is NO, it is not possible to locate on the current image any pixel coordinates that are referenced relative to the source image, such as for example, might be required for rendering CAD findings derived from a referenced FOR PROCESSING image on the current FOR PRESENTATION image."
                                 ]
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
               ]
            }
         ],
         "entity" : "Image",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-9"
         ]
      },
      "(0088,0200)[<0>](0028,0102)" : [
         {
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7-11b"
            ],
            "entity" : "Image",
            "req" : "1",
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
            "name" : "High Bit",
            "usage" : "M",
            "module" : "General Image"
         },
         {
            "usage" : "M",
            "module" : "Enhanced US Image",
            "name" : "High Bit",
            "desc" : [
               "Most significant bit for pixel sample data. Each sample shall have the same high bit. See ",
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
            "entity" : "Image",
            "req" : "1",
            "mod_tables" : [
               "table_C.8.24.3-1",
               "table_C.7-11b"
            ]
         }
      ],
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "1C",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ]
      },
      "(0008,1052)[<0>](0040,1102)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "module" : "General Series",
         "name" : "Person's Address",
         "desc" : "Person's mailing address",
         "entity" : "Series",
         "req" : "3"
      },
      "(0010,0024)[<0>](0040,0032)" : {
         "usage" : "M",
         "module" : "Patient",
         "name" : "Universal Entity ID",
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
         "entity" : "Patient",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0040,9096)[<0>](0040,08ea)" : {
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
         "usage" : "M",
         "module" : "General Image",
         "name" : "Measurement Units Code Sequence",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ]
      },
      "(0008,0070)" : [
         {
            "req" : "2",
            "entity" : "Equipment",
            "desc" : "Manufacturer of the equipment that produced the composite instances.",
            "name" : "Manufacturer",
            "usage" : "M",
            "module" : "General Equipment",
            "mod_tables" : [
               "table_C.7-8"
            ]
         },
         {
            "mod_tables" : [
               "table_C.7-8b"
            ],
            "desc" : "Manufacturer of the equipment that produced the composite instances.",
            "entity" : "Equipment",
            "req" : "1",
            "usage" : "M",
            "module" : "Enhanced General Equipment",
            "name" : "Manufacturer"
         }
      ],
      "(0028,0107)" : {
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "desc" : "The maximum actual pixel value encountered in this image.",
         "req" : "3",
         "entity" : "Image",
         "module" : "Image Pixel",
         "usage" : "M",
         "name" : "Largest Image Pixel Value"
      },
      "(0040,0513)[<0>](0040,0033)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "name" : "Universal Entity ID Type",
         "usage" : "U",
         "module" : "Specimen",
         "req" : "1C",
         "entity" : "Image",
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
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)" : {
         "mod_tables" : [
            "table_C.8.24.3-1",
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
         "entity" : "Image",
         "req" : "3",
         "module" : "Enhanced US Image",
         "usage" : "M",
         "name" : "Referenced Digital Signature Sequence"
      },
      "(0040,0245)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "module" : "General Series",
         "usage" : "M",
         "name" : "Performed Procedure Step Start Time",
         "desc" : "Time on which the Performed Procedure Step started.",
         "entity" : "Series",
         "req" : "3"
      },
      "(0088,0200)[<0>](0028,0002)" : [
         {
            "req" : "1",
            "entity" : "Image",
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
            "module" : "General Image",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7-11b"
            ]
         },
         {
            "mod_tables" : [
               "table_C.8.24.3-1",
               "table_C.7-11b"
            ],
            "module" : "Enhanced US Image",
            "usage" : "M",
            "name" : "Samples per Pixel",
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
            "entity" : "Image",
            "req" : "1"
         }
      ],
      "(0012,0031)" : {
         "module" : "Clinical Trial Subject",
         "usage" : "U",
         "name" : "Clinical Trial Site Name",
         "desc" : [
            "Name of the site responsible for submitting clinical trial data. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.3.1.5"
               }
            }
         ],
         "entity" : "Patient",
         "req" : "2",
         "mod_tables" : [
            "table_C.7-2b"
         ]
      },
      "(0028,1203)" : {
         "usage" : "M",
         "module" : "Image Pixel",
         "name" : "Blue Palette Color Lookup Table Data",
         "desc" : [
            "Blue Palette Color Lookup Table Data. Required if Photometric Interpretation (0028,0004) has a value of PALETTE COLOR or Pixel Presentation (0008,9205) at the image level equals COLOR or MIXED. See ",
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
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-11b"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a30a)" : [
         {
            "desc" : [
               "Numeric value for this name-value Item. Only a single value shall be present.",
               "Required if Value Type (0040,A040) is NUMERIC."
            ],
            "entity" : "Series",
            "req" : "1C",
            "module" : "General Series",
            "usage" : "M",
            "name" : "Numeric Value",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2"
            ]
         },
         {
            "name" : "Numeric Value",
            "usage" : "M",
            "module" : "Enhanced US Series",
            "req" : "1C",
            "entity" : "Series",
            "desc" : [
               "Numeric value for this name-value Item. Only a single value shall be present.",
               "Required if Value Type (0040,A040) is NUMERIC."
            ],
            "mod_tables" : [
               "table_C.8.24.1-1",
               "table_10-2"
            ]
         }
      ],
      "(0040,0520)[<0>](0050,0015)" : {
         "entity" : "Image",
         "req" : "3",
         "desc" : "Width in mm of container component.",
         "name" : "Container Component Width",
         "module" : "Specimen",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a043)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "entity" : "Image",
         "req" : "1",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Concept Name Code Sequence",
         "usage" : "U",
         "module" : "Specimen"
      },
      "(0008,1010)" : {
         "name" : "Station Name",
         "usage" : "M",
         "module" : "General Equipment",
         "entity" : "Equipment",
         "req" : "3",
         "desc" : "User defined name identifying the machine that produced the composite instances.",
         "mod_tables" : [
            "table_C.7-8"
         ]
      },
      "(0028,1103)" : {
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "usage" : "M",
         "module" : "Image Pixel",
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
         "entity" : "Image"
      },
      "(0010,1021)" : {
         "name" : "Patient's Size Code Sequence",
         "module" : "Patient Study",
         "usage" : "U",
         "entity" : "Study",
         "req" : "3",
         "desc" : [
            "Patient's size category code",
            "One or more Items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1150)" : {
         "mod_tables" : [
            "table_C.8.24.3-1",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "module" : "Enhanced US Image",
         "usage" : "M",
         "entity" : "Image",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0010,1002)[<0>](0010,0020)" : {
         "desc" : "An identification number or code used to identify the patient.",
         "entity" : "Patient",
         "req" : "1",
         "module" : "Patient",
         "usage" : "M",
         "name" : "Patient ID",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0040,0275)[<0>](0032,1064)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "desc" : [
            "A sequence that conveys the Procedure Type of the requested procedure.",
            "Only a single Item is permitted in this sequence."
         ],
         "req" : "3",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series",
         "name" : "Requested Procedure Code Sequence"
      },
      "(0008,1111)[<0>](0008,1150)" : [
         {
            "module" : "General Series",
            "usage" : "M",
            "name" : "Referenced SOP Class UID",
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "req" : "1",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-11"
            ]
         },
         {
            "req" : "1",
            "entity" : "Series",
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "name" : "Referenced SOP Class UID",
            "usage" : "M",
            "module" : "Enhanced US Series",
            "mod_tables" : [
               "table_C.8.24.1-1",
               "table_10-11"
            ]
         }
      ],
      "(0088,0200)[<0>](0028,0100)" : [
         {
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7-11b"
            ],
            "name" : "Bits Allocated",
            "usage" : "M",
            "module" : "General Image",
            "entity" : "Image",
            "req" : "1",
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
            ]
         },
         {
            "usage" : "M",
            "module" : "Enhanced US Image",
            "name" : "Bits Allocated",
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
            "entity" : "Image",
            "req" : "1",
            "mod_tables" : [
               "table_C.8.24.3-1",
               "table_C.7-11b"
            ]
         }
      ],
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,08ea)" : [
         {
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2"
            ],
            "entity" : "Series",
            "req" : "1C",
            "desc" : [
               "Units of measurement for a numeric value in this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is NUMERIC."
            ],
            "name" : "Measurement Units Code Sequence",
            "usage" : "M",
            "module" : "General Series"
         },
         {
            "desc" : [
               "Units of measurement for a numeric value in this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is NUMERIC."
            ],
            "req" : "1C",
            "entity" : "Series",
            "module" : "Enhanced US Series",
            "usage" : "M",
            "name" : "Measurement Units Code Sequence",
            "mod_tables" : [
               "table_C.8.24.1-1",
               "table_10-2"
            ]
         }
      ],
      "(0020,4000)" : {
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M",
         "module" : "General Image",
         "name" : "Image Comments",
         "desc" : "User-defined comments about the image",
         "entity" : "Image",
         "req" : "3"
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1150)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-11"
         ],
         "module" : "General Series",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Series",
         "req" : "1"
      },
      "(0018,3103)" : {
         "desc" : [
            "Required if IVUS Acquisition (0018,3100) value is MOTOR_PULLBACK or GATED_PULLBACK.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.5.6.1.24"
                  }
               }
            ]
         ],
         "req" : "1C",
         "entity" : "Image",
         "module" : "IVUS Image",
         "usage" : "C - Required if Modality = IVUS",
         "name" : "IVUS Pullback Start Frame Number",
         "mod_tables" : [
            "table_C.8.24.4-1"
         ]
      },
      "(0008,1115)[<0>](0008,114a)" : {
         "name" : "Referenced Instance Sequence",
         "module" : "Common Instance Reference",
         "usage" : "U",
         "req" : "1",
         "entity" : "Image",
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.12-8"
         ]
      },
      "(0008,0096)[<0>](0008,0082)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "req" : "1C",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Institution Code Sequence",
         "usage" : "M",
         "module" : "General Study"
      },
      "(0018,9170)" : {
         "desc" : [
            "Applied technique to reduce respiratory motion artifacts.",
            {
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
                     "Image acquisition shorter than respiratory cycle"
                  ],
                  [
                     "GATING",
                     "Prospective gating"
                  ],
                  [
                     "TRACKING",
                     "Prospective through-plane or in-plane motion tracking"
                  ],
                  [
                     "PHASE_ORDERING",
                     "Prospective phase ordering"
                  ],
                  [
                     "PHASE_RESCANNING",
                     "Prospective techniques, such as real-time averaging, diminishing variance and motion adaptive gating"
                  ],
                  [
                     "RETROSPECTIVE",
                     "Retrospective gating"
                  ],
                  [
                     "CORRECTION",
                     "Retrospective image correction"
                  ]
               ],
               "type" : "variablelist"
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
         ],
         "entity" : "Image",
         "req" : "1C",
         "module" : "Respiratory Synchronization",
         "usage" : "C - Required if respiratory synchronization was applied.",
         "name" : "Respiratory Motion Compensation Technique",
         "mod_tables" : [
            "table_C.7.6.18-2"
         ]
      },
      "(0020,1002)" : {
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image",
         "usage" : "M",
         "name" : "Images in Acquisition",
         "desc" : "Number of images that resulted from this acquisition of data",
         "req" : "3",
         "entity" : "Image"
      },
      "(0008,0008)" : [
         {
            "mod_tables" : [
               "table_C.7-9"
            ],
            "name" : "Image Type",
            "module" : "General Image",
            "usage" : "M",
            "entity" : "Image",
            "req" : "3",
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
            ]
         },
         {
            "name" : "Image Type",
            "usage" : "M",
            "module" : "Enhanced US Image",
            "entity" : "Image",
            "req" : "1",
            "desc" : [
               "Image identification characteristics.",
               [
                  "See ",
                  {
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.8.24.3.2"
                     },
                     "el" : "xref"
                  },
                  " for specialization."
               ]
            ],
            "mod_tables" : [
               "table_C.8.24.3-1"
            ]
         }
      ],
      "(0040,0560)[<0>](0008,2228)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-8"
         ],
         "entity" : "Image",
         "req" : "3",
         "desc" : [
            "Sequence of Items that identifies the primary anatomic structure(s) of interest in this Instance.",
            "One or more Items are permitted in this sequence."
         ],
         "name" : "Primary Anatomic Structure Sequence",
         "usage" : "U",
         "module" : "Specimen"
      },
      "(0020,9222)[<0>](0020,9238)" : {
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "entity" : "Image",
         "req" : "1C",
         "desc" : [
            "Identification of the creator of a group of private data elements.",
            "Required if the Functional Group Pointer 0020,9167) value is the Data Element Tag of a Private Attribute."
         ],
         "name" : "Functional Group Private Creator",
         "usage" : "M",
         "module" : "Multi-frame Dimension"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,0054)" : {
         "req" : "3",
         "entity" : "Image",
         "desc" : "Title of the DICOM Application Entity where the Composite Object(s) may be retrieved on the network.",
         "name" : "Retrieve AE Title",
         "module" : "Enhanced US Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.24.3-1",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0050,0010)[<0>](0018,1000)" : {
         "name" : "Device Serial Number",
         "module" : "Device",
         "usage" : "U",
         "entity" : "Image",
         "req" : "3",
         "desc" : "Manufacturer's serial number of the device",
         "mod_tables" : [
            "table_C.7-18"
         ]
      },
      "(0028,140b)[<0>](0028,1203)" : {
         "entity" : "Image",
         "req" : "1C",
         "desc" : [
            "Blue Palette Color Lookup Table Data.",
            "Required if RGB LUT Transfer Function (0028,140F) is TABLE."
         ],
         "name" : "Blue Palette Color Lookup Table Data",
         "usage" : "U",
         "module" : "Enhanced Palette Color Lookup Table",
         "mod_tables" : [
            "table_C.7.6.23-1"
         ]
      },
      "(0008,2218)" : {
         "mod_tables" : [
            "table_C.8.24.3-1",
            "table_10-5"
         ],
         "name" : "Anatomic Region Sequence",
         "usage" : "M",
         "module" : "Enhanced US Image",
         "req" : "1",
         "entity" : "Image",
         "desc" : [
            "Sequence that identifies the anatomic region of interest in this Instance (i.e., external anatomy, surface anatomy, or general region of the body).",
            "Only a single Item shall be included in this sequence."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a122)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Time",
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "req" : "1C",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ]
      },
      "(0040,0515)[<0>](0040,0513)[<1>](0040,0033)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "name" : "Universal Entity ID Type",
         "usage" : "U",
         "module" : "Specimen",
         "req" : "1C",
         "entity" : "Image",
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
      "(0010,2294)[<0>](0010,2295)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "1",
         "entity" : "Patient",
         "desc" : "Identification number of an animal within the registry.",
         "name" : "Breed Registration Number",
         "usage" : "M",
         "module" : "Patient"
      },
      "(0008,0030)" : {
         "desc" : "Time the Study started.",
         "req" : "2",
         "entity" : "Study",
         "usage" : "M",
         "module" : "General Study",
         "name" : "Study Time",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0008,1080)" : {
         "entity" : "Study",
         "req" : "3",
         "desc" : "Description of the admitting diagnosis (diagnoses)",
         "name" : "Admitting Diagnoses Description",
         "usage" : "U",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0008,103e)" : {
         "usage" : "M",
         "module" : "General Series",
         "name" : "Series Description",
         "desc" : "Description of the Series",
         "entity" : "Series",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a168)" : {
         "usage" : "M",
         "module" : "General Series",
         "name" : "Concept Code Sequence",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "req" : "1C",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a040)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "module" : "Specimen",
         "name" : "Value Type",
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
         ],
         "entity" : "Image",
         "req" : "1"
      },
      "(0012,0081)" : {
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject",
         "usage" : "U",
         "name" : "Clinical Trial Protocol Ethics Committee Name",
         "desc" : "Name of the Ethics Committee or Institutional Review Board (IRB) responsible for approval of the Clinical Trial. Required if Clinical Trial Protocol Ethics Committee Approval Number (0012,0082) is present.",
         "entity" : "Patient",
         "req" : "1C"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a162)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Rational Numerator Value",
         "usage" : "U",
         "module" : "Specimen",
         "req" : "1C",
         "entity" : "Image",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ]
      },
      "(0008,001b)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "entity" : "Image",
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
         "name" : "Original Specialized SOP Class UID",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0100,0426)" : {
         "desc" : "The certification number issued to the Application Entity that set the SOP Instance Status (0100,0410) to AO.",
         "entity" : "Image",
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Authorization Equipment Certification Number",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0020,0200)" : {
         "module" : "Synchronization",
         "usage" : "M",
         "name" : "Synchronization Frame of Reference UID",
         "desc" : [
            "UID of common synchronization environment. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.4.2.1.1"
               },
               "el" : "xref"
            },
            "."
         ],
         "req" : "1",
         "entity" : "Frame of Reference",
         "mod_tables" : [
            "table_C.7-7"
         ]
      },
      "(0008,1200)[<0>](0020,000d)" : {
         "usage" : "U",
         "module" : "Common Instance Reference",
         "name" : "Study Instance UID",
         "desc" : "Unique identifier of the Study containing the referenced Instances.",
         "entity" : "Image",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-8"
         ]
      },
      "(0018,3100)" : {
         "mod_tables" : [
            "table_C.8.24.4-1"
         ],
         "module" : "IVUS Image",
         "usage" : "C - Required if Modality = IVUS",
         "name" : "IVUS Acquisition",
         "desc" : [
            {
               "list" : [
                  [
                     "MOTOR_PULLBACK",
                     null
                  ],
                  [
                     "MANUAL_PULLBACK",
                     null
                  ],
                  [
                     "SELECTIVE",
                     null
                  ],
                  [
                     "GATED_PULLBACK",
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
                     "linkend" : "sect_C.8.5.6.1.21",
                     "xrefstyle" : "select: label"
                  }
               }
            ]
         ],
         "entity" : "Image",
         "req" : "1"
      },
      "(0008,0090)" : {
         "desc" : "Name of the patient's referring physician",
         "req" : "2",
         "entity" : "Study",
         "usage" : "M",
         "module" : "General Study",
         "name" : "Referring Physician's Name",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0008,1164)" : {
         "req" : "1",
         "entity" : "Image",
         "desc" : [
            "Sequence containing details of how this SOP Instance was extracted from a source multi-frame SOP Instance.",
            "If this instance was created from an instance that contains a Frame Extraction Sequence, then this sequence shall contain all of the items from the parent's Frame Extraction Sequence and a new item that describes this extraction.",
            "One or more Items shall be included in this sequence."
         ],
         "name" : "Frame Extraction Sequence",
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "module" : "Frame Extraction",
         "mod_tables" : [
            "table_C.12-9"
         ]
      },
      "(0088,0200)[<0>](0028,2000)" : [
         {
            "name" : "ICC Profile",
            "module" : "General Image",
            "usage" : "M",
            "entity" : "Image",
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
                        "el" : "para",
                        "content" : [
                           "The profile applies only to Pixel Data (7FE0,0010) at the same level of the Data Set and not to any icons nested within sequences, which may or may not have their own ICC profile specified."
                        ]
                     },
                     "\n                  "
                  ]
               }
            ],
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7-11b"
            ]
         },
         {
            "name" : "ICC Profile",
            "module" : "Enhanced US Image",
            "usage" : "M",
            "req" : "3",
            "entity" : "Image",
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
            ],
            "mod_tables" : [
               "table_C.8.24.3-1",
               "table_C.7-11b"
            ]
         }
      ],
      "(0008,0110)[<0>](0008,0112)" : {
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
         "entity" : "Image",
         "req" : "1C",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Coding Scheme Registry",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,1120)[<0>](0008,1155)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "module" : "Patient",
         "usage" : "M",
         "entity" : "Patient",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0040,0560)[<0>](0040,0554)" : {
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "desc" : [
            "Unique Identifier for Specimen. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.6.22.1.2",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "req" : "1",
         "entity" : "Image",
         "usage" : "U",
         "module" : "Specimen",
         "name" : "Specimen UID"
      },
      "(0018,5026)" : {
         "mod_tables" : [
            "table_C.8.24.3-1"
         ],
         "usage" : "M",
         "module" : "Enhanced US Image",
         "name" : "Cranial Thermal Index",
         "desc" : [
            "See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.5.6.1.8",
                  "xrefstyle" : "select: label"
               }
            },
            " for Description."
         ],
         "req" : "1",
         "entity" : "Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a163)" : [
         {
            "name" : "Rational Denominator Value",
            "module" : "General Series",
            "usage" : "M",
            "entity" : "Series",
            "req" : "1C",
            "desc" : [
               "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Rational Numerator Value (0040,A162) is present."
            ],
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2"
            ]
         },
         {
            "name" : "Rational Denominator Value",
            "module" : "Enhanced US Series",
            "usage" : "M",
            "entity" : "Series",
            "req" : "1C",
            "desc" : [
               "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Rational Numerator Value (0040,A162) is present."
            ],
            "mod_tables" : [
               "table_C.8.24.1-1",
               "table_10-2"
            ]
         }
      ],
      "(0008,9215)" : {
         "mod_tables" : [
            "table_C.7-9"
         ],
         "entity" : "Image",
         "req" : "3",
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
         "name" : "Derivation Code Sequence",
         "module" : "General Image",
         "usage" : "M"
      },
      "(0028,140b)[<0>](0028,1201)" : {
         "mod_tables" : [
            "table_C.7.6.23-1"
         ],
         "desc" : [
            "Red Palette Color Lookup Table Data.",
            "Required if RGB LUT Transfer Function (0028,140F) is TABLE."
         ],
         "req" : "1C",
         "entity" : "Image",
         "module" : "Enhanced Palette Color Lookup Table",
         "usage" : "U",
         "name" : "Red Palette Color Lookup Table Data"
      },
      "(0088,0200)[<0>](0028,0107)" : [
         {
            "name" : "Largest Image Pixel Value",
            "usage" : "M",
            "module" : "General Image",
            "entity" : "Image",
            "req" : "3",
            "desc" : "The maximum actual pixel value encountered in this image.",
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7-11b"
            ]
         },
         {
            "mod_tables" : [
               "table_C.8.24.3-1",
               "table_C.7-11b"
            ],
            "module" : "Enhanced US Image",
            "usage" : "M",
            "name" : "Largest Image Pixel Value",
            "desc" : "The maximum actual pixel value encountered in this image.",
            "req" : "3",
            "entity" : "Image"
         }
      ],
      "(0018,3104)" : {
         "usage" : "C - Required if Modality = IVUS",
         "module" : "IVUS Image",
         "name" : "IVUS Pullback Stop Frame Number",
         "desc" : [
            "Required if IVUS Acquisition (0018,3100) value is MOTOR_PULLBACK or GATED_PULLBACK.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.5.6.1.25",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               }
            ]
         ],
         "entity" : "Image",
         "req" : "1C",
         "mod_tables" : [
            "table_C.8.24.4-1"
         ]
      },
      "(0040,0555)[<0>](0040,a043)" : {
         "name" : "Concept Name Code Sequence",
         "module" : "Acquisition Context",
         "usage" : "M",
         "entity" : "Image",
         "req" : "1",
         "desc" : [
            "A concept that constrains the meaning of (i.e., defines the role of) the Observation Value. The \"Name\" component of a Name/Value pair.",
            "Only a single Item shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.7.6.14-1"
         ]
      },
      "(0028,0100)" : [
         {
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "module" : "Image Pixel",
            "usage" : "M",
            "name" : "Bits Allocated",
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
            "entity" : "Image",
            "req" : "1"
         },
         {
            "mod_tables" : [
               "table_C.8.24.3-1"
            ],
            "desc" : [
               "Number of bits allocated for each pixel sample.",
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
            "entity" : "Image",
            "req" : "1",
            "usage" : "M",
            "module" : "Enhanced US Image",
            "name" : "Bits Allocated"
         }
      ],
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1160)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
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
                     ]
                  },
                  "\n              "
               ],
               "el" : "note"
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "module" : "General Series",
         "name" : "Referenced Frame Number"
      },
      "(0010,1002)[<0>](0010,0022)" : {
         "usage" : "M",
         "module" : "Patient",
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
         "entity" : "Patient",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0040,0556)" : {
         "name" : "Acquisition Context Description",
         "module" : "Acquisition Context",
         "usage" : "M",
         "entity" : "Image",
         "req" : "3",
         "desc" : "Free-text description of the image-acquisition context.",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0062,000b)" : [
         {
            "name" : "Referenced Segment Number",
            "usage" : "M",
            "module" : "General Series",
            "entity" : "Series",
            "req" : "1C",
            "desc" : [
               "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
               "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
            ],
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2"
            ]
         },
         {
            "desc" : [
               "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
               "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
            ],
            "entity" : "Series",
            "req" : "1C",
            "module" : "Enhanced US Series",
            "usage" : "M",
            "name" : "Referenced Segment Number",
            "mod_tables" : [
               "table_C.8.24.1-1",
               "table_10-2"
            ]
         }
      ],
      "(0018,a001)[<0>](0018,1201)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "entity" : "Image",
         "req" : "3",
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Time of Last Calibration"
      },
      "(0028,1101)" : {
         "mod_tables" : [
            "table_C.7-11b"
         ],
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
         "req" : "1C",
         "entity" : "Image",
         "module" : "Image Pixel",
         "usage" : "M",
         "name" : "Red Palette Color Lookup Table Descriptor"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)" : [
         {
            "usage" : "M",
            "module" : "General Series",
            "name" : "Referenced SOP Sequence",
            "desc" : [
               "Composite SOP Instance Reference value for this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
            ],
            "req" : "1C",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2"
            ]
         },
         {
            "desc" : [
               "Composite SOP Instance Reference value for this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
            ],
            "req" : "1C",
            "entity" : "Series",
            "usage" : "M",
            "module" : "Enhanced US Series",
            "name" : "Referenced SOP Sequence",
            "mod_tables" : [
               "table_C.8.24.1-1",
               "table_10-2"
            ]
         }
      ],
      "(0008,1049)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : [
            "Identification of the physician(s) who are responsible for overall patient care at time of Study.",
            "One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Physician(s) of Record (0008,1048), if present."
         ],
         "entity" : "Study",
         "req" : "3",
         "usage" : "M",
         "module" : "General Study",
         "name" : "Physician(s) of Record Identification Sequence"
      },
      "(0010,0024)" : {
         "req" : "3",
         "entity" : "Patient",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this sequence."
         ],
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0020,9222)[<0>](0020,9421)" : {
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "entity" : "Image",
         "req" : "3",
         "desc" : "Free text description that explains the meaning of the dimension.",
         "name" : "Dimension Description Label",
         "module" : "Multi-frame Dimension",
         "usage" : "M"
      },
      "(0040,0555)[<0>](0040,a168)" : {
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a Coded Value.",
            "Only a single Item shall be included in this sequence.",
            "Required if Date (0040,A121), Time (0040,A122), Person Name (0040,A123), Text Value (0040,A160), and the pair of Numeric Value (0040,A30A) and Measurement Units Code Sequence (0040,08EA) are not present."
         ],
         "entity" : "Image",
         "req" : "1C",
         "usage" : "M",
         "module" : "Acquisition Context",
         "name" : "Concept Code Sequence",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a162)" : [
         {
            "desc" : [
               "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
            ],
            "req" : "1C",
            "entity" : "Series",
            "module" : "General Series",
            "usage" : "M",
            "name" : "Rational Numerator Value",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2"
            ]
         },
         {
            "mod_tables" : [
               "table_C.8.24.1-1",
               "table_10-2"
            ],
            "desc" : [
               "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
            ],
            "req" : "1C",
            "entity" : "Series",
            "usage" : "M",
            "module" : "Enhanced US Series",
            "name" : "Rational Numerator Value"
         }
      ],
      "(0018,0012)[<0>](0018,9340)[<1>](0018,1042)" : {
         "usage" : "C - Required if contrast media was applied. See  for baseline context group ID.",
         "module" : "Enhanced Contrast/Bolus",
         "name" : "Contrast/Bolus Start Time",
         "desc" : "Time of start of administration.",
         "req" : "3",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-12b"
         ]
      },
      "(0018,9070)" : {
         "mod_tables" : [
            "table_C.7.6.18-1"
         ],
         "desc" : [
            "R-R interval in ms measured prior to or during the scan.",
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and Cardiac Synchronization Technique (0018,9037) equals other than NONE.",
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and Cardiac Synchronization Technique (0018,9037) equals other than NONE.",
            {
               "content" : [
                  "\n                      ",
                  {
                     "content" : [
                        "Heart Rate (0018,1088) is not used in this Module, since its value can be derived as 1/ Cardiac RR Interval Specified (0018,9070)."
                     ],
                     "el" : "para"
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ],
         "entity" : "Image",
         "req" : "1C",
         "usage" : "C - Required if cardiac synchronization was applied.",
         "module" : "Cardiac Synchronization",
         "name" : "Cardiac RR Interval Specified"
      },
      "(0028,140c)[<0>](0028,1406)" : {
         "mod_tables" : [
            "table_C.7.6.23-1"
         ],
         "entity" : "Image",
         "req" : "1C",
         "desc" : [
            "Constant value of the Weight input to blending operation. Shall be from 0.0 to 1.0, inclusive.",
            "Required if Blending LUT 2 Transfer Function (0028,140D) is CONSTANT."
         ],
         "name" : "Blending Weight Constant",
         "usage" : "U",
         "module" : "Enhanced Palette Color Lookup Table"
      },
      "(0008,0110)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Coding Scheme Identification Sequence",
         "desc" : [
            "Sequence of items that map values of Coding Scheme Designator (0008,0102) to an external coding system registration, or to a private or local coding scheme.",
            "One or more Items are permitted in this sequence."
         ],
         "entity" : "Image",
         "req" : "3"
      },
      "(0020,9256)" : {
         "mod_tables" : [
            "table_C.7.6.18-2"
         ],
         "desc" : [
            [
               "Respiratory trigger threshold in percent of the chest expansion for the frame relative to the last Respiratory-Peak. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.16.2.17.1",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ],
            "Required if Respiratory Motion Compensation Technique (0018,9170) equals other than NONE, REALTIME or BREATH_HOLD and if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
         ],
         "entity" : "Image",
         "req" : "1C",
         "module" : "Respiratory Synchronization",
         "usage" : "C - Required if respiratory synchronization was applied.",
         "name" : "Respiratory Trigger Delay Threshold"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a123)" : {
         "name" : "Person Name",
         "module" : "Specimen",
         "usage" : "U",
         "entity" : "Image",
         "req" : "1C",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0008,1072)[<0>](0040,1101)" : {
         "usage" : "M",
         "module" : "General Series",
         "name" : "Person Identification Code Sequence",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Series",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1155)" : {
         "module" : "General Series",
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(0010,1000)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "Other identification numbers or codes used to identify the patient.",
         "entity" : "Patient",
         "req" : "3",
         "usage" : "M",
         "module" : "Patient",
         "name" : "Other Patient IDs"
      },
      "(0020,0012)" : {
         "mod_tables" : [
            "table_C.7-9"
         ],
         "desc" : "A number identifying the single continuous gathering of data over a period of time that resulted in this image.",
         "entity" : "Image",
         "req" : "3",
         "module" : "General Image",
         "usage" : "M",
         "name" : "Acquisition Number"
      },
      "(4ffe,0001)[<0>](0400,0020)" : {
         "name" : "Data Elements Signed",
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "1",
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
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0040,0520)[<0>](0050,0012)" : {
         "desc" : [
            "Type of container component.",
            "Only a single Item shall be included in this sequence."
         ],
         "entity" : "Image",
         "req" : "1",
         "module" : "Specimen",
         "usage" : "U",
         "name" : "Container Component Type Code Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      "(0018,0012)[<0>](0018,9340)" : {
         "module" : "Enhanced Contrast/Bolus",
         "usage" : "C - Required if contrast media was applied. See  for baseline context group ID.",
         "name" : "Contrast Administration Profile Sequence",
         "desc" : [
            "Sequence that describes one or more phases of contrast administered.",
            "One or more Items are permitted in this sequence."
         ],
         "req" : "3",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-12b"
         ]
      },
      "(0050,0010)[<0>](0050,0019)" : {
         "desc" : [
            "Distance in mm between markers on calibrated device. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.6.12.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "entity" : "Image",
         "req" : "3",
         "usage" : "U",
         "module" : "Device",
         "name" : "Inter-Marker Distance",
         "mod_tables" : [
            "table_C.7-18"
         ]
      },
      "(0008,1140)" : [
         {
            "name" : "Referenced Image Sequence",
            "module" : "General Image",
            "usage" : "M",
            "entity" : "Image",
            "req" : "3",
            "desc" : [
               "Other images significantly related to this image (e.g., post-localizer CT image or Mammographic biopsy or partial view images).",
               "One or more Items are permitted in this sequence."
            ],
            "mod_tables" : [
               "table_C.7-9"
            ]
         },
         {
            "mod_tables" : [
               "table_C.8.24.3-1"
            ],
            "desc" : [
               "A sequence that references other images significantly related to this image. (e.g., an image containing spatially related frames)",
               "One or more Items are permitted in this sequence."
            ],
            "req" : "3",
            "entity" : "Image",
            "usage" : "M",
            "module" : "Enhanced US Image",
            "name" : "Referenced Image Sequence"
         }
      ],
      "(0010,2180)" : {
         "entity" : "Study",
         "req" : "3",
         "desc" : "Occupation of the Patient.",
         "name" : "Occupation",
         "usage" : "U",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0028,140b)[<0>](0028,1101)" : {
         "mod_tables" : [
            "table_C.7.6.23-1"
         ],
         "desc" : [
            "Specifies the format of the Red Palette Color Lookup Table Data (0028,1201).",
            "The second value (first stored pixel value mapped) shall be zero.",
            "Required if RGB LUT Transfer Function (0028,140F) is TABLE."
         ],
         "req" : "1C",
         "entity" : "Image",
         "usage" : "U",
         "module" : "Enhanced Palette Color Lookup Table",
         "name" : "Red Palette Color Lookup Table Descriptor"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0008,1155)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "entity" : "Image",
         "module" : "Specimen",
         "usage" : "U",
         "name" : "Referenced SOP Instance UID"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a124)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "req" : "1C",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "name" : "UID",
         "usage" : "M",
         "module" : "General Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a160)" : [
         {
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2"
            ],
            "req" : "1C",
            "entity" : "Series",
            "desc" : [
               "Text value for this name-value Item.",
               "Required if Value Type (0040,A040) is TEXT."
            ],
            "name" : "Text Value",
            "module" : "General Series",
            "usage" : "M"
         },
         {
            "mod_tables" : [
               "table_C.8.24.1-1",
               "table_10-2"
            ],
            "entity" : "Series",
            "req" : "1C",
            "desc" : [
               "Text value for this name-value Item.",
               "Required if Value Type (0040,A040) is TEXT."
            ],
            "name" : "Text Value",
            "module" : "Enhanced US Series",
            "usage" : "M"
         }
      ],
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0062,000b)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "name" : "Referenced Segment Number",
         "module" : "General Series",
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C",
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "name" : "Local Namespace Entity ID"
      },
      "(0040,a390)[<0>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "entity" : "Image",
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ]
      },
      "(0008,0096)[<0>](0040,1103)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person's Telephone Numbers",
         "usage" : "M",
         "module" : "General Study",
         "req" : "3",
         "entity" : "Study",
         "desc" : "Person's telephone number(s)"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a121)" : {
         "req" : "1C",
         "entity" : "Image",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "name" : "Date",
         "usage" : "U",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0010,21b0)" : {
         "entity" : "Study",
         "req" : "3",
         "desc" : "Additional information about the Patient's medical history.",
         "name" : "Additional Patient History",
         "module" : "Patient Study",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0040,a170)" : {
         "usage" : "M",
         "module" : "Enhanced US Image",
         "name" : "Purpose of Reference Code Sequence",
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "One or more Items are permitted in this sequence."
         ],
         "req" : "3",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8.24.3-1",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0040,0555)" : {
         "module" : "Acquisition Context",
         "usage" : "M",
         "name" : "Acquisition Context Sequence",
         "desc" : [
            "A sequence of Items that describes the conditions present during the acquisition of the data of the SOP Instance.",
            "Zero or more items shall be included in this sequence."
         ],
         "req" : "2",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ]
      },
      "(0040,0513)[<0>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "module" : "Specimen",
         "usage" : "U",
         "entity" : "Image",
         "req" : "1C",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ]
      },
      "(0018,106a)" : {
         "mod_tables" : [
            "table_C.7-7"
         ],
         "name" : "Synchronization Trigger",
         "module" : "Synchronization",
         "usage" : "M",
         "req" : "1",
         "entity" : "Frame of Reference",
         "desc" : [
            "Data acquisition synchronization with external equipment",
            {
               "list" : [
                  [
                     "SOURCE",
                     "this equipment provides synchronization channel or trigger to other equipment"
                  ],
                  [
                     "EXTERNAL",
                     "this equipment receives synchronization channel or trigger from other equipment"
                  ],
                  [
                     "PASSTHRU",
                     "this equipment receives synchronization channel or trigger and forwards it"
                  ],
                  [
                     "NO TRIGGER",
                     "data acquisition not synchronized by common channel or trigger"
                  ]
               ],
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ]
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1155)" : {
         "mod_tables" : [
            "table_C.8.24.3-1",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "entity" : "Image",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "module" : "Enhanced US Image"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a30a)" : {
         "module" : "Specimen",
         "usage" : "U",
         "name" : "Numeric Value",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "entity" : "Image",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1150)" : {
         "req" : "1",
         "entity" : "Image",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "module" : "Common Instance Reference",
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ]
      },
      "(0008,2133)[<0>](0008,2135)" : {
         "module" : "Enhanced US Image",
         "usage" : "M",
         "name" : "Event Code Sequence",
         "desc" : [
            "Type of event.",
            "Only a single item shall be included in this sequence."
         ],
         "entity" : "Image",
         "req" : "1",
         "mod_tables" : [
            "table_C.8.24.3-1"
         ]
      },
      "(0008,1049)[<0>](0008,0080)" : {
         "req" : "1C",
         "entity" : "Study",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "name" : "Institution Name",
         "module" : "General Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0088,0200)[<0>](0028,0004)" : [
         {
            "name" : "Photometric Interpretation",
            "module" : "General Image",
            "usage" : "M",
            "entity" : "Image",
            "req" : "1",
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
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7-11b"
            ]
         },
         {
            "mod_tables" : [
               "table_C.8.24.3-1",
               "table_C.7-11b"
            ],
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
            "req" : "1",
            "usage" : "M",
            "module" : "Enhanced US Image",
            "name" : "Photometric Interpretation"
         }
      ],
      "(0008,9121)[<0>](0020,000d)" : {
         "mod_tables" : [
            "table_C.8.24.3-1",
            "table_C.17-3"
         ],
         "usage" : "M",
         "module" : "Enhanced US Image",
         "name" : "Study Instance UID",
         "desc" : "Unique identifier for the Study",
         "req" : "1",
         "entity" : "Image"
      },
      "(0018,a001)[<0>](0018,1050)" : {
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "req" : "3",
         "entity" : "Image",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Spatial Resolution",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,a390)[<0>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Image",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ]
      },
      "(fffa,fffa)[<0>](0400,0005)" : {
         "desc" : "A number used to identify which MAC Parameters Sequence item was used in the calculation of this Digital Signature.",
         "entity" : "Image",
         "req" : "1",
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "MAC ID Number",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0028,1401)[<0>](0028,3010)[<1>](0028,3002)" : {
         "module" : "Enhanced Palette Color Lookup Table",
         "usage" : "U",
         "name" : "LUT Descriptor",
         "desc" : [
            "Specifies the format of the LUT Data in this Sequence.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.11.2.1.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "req" : "1",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.23-1",
            "table_C.11-2b"
         ]
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0033)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
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
         "entity" : "Patient",
         "req" : "1C",
         "module" : "Patient",
         "usage" : "M",
         "name" : "Universal Entity ID Type"
      },
      "(0040,0560)[<0>](0040,059a)" : {
         "entity" : "Image",
         "req" : "3",
         "desc" : [
            "Specimen Type.",
            "Only a single Item is permitted in this sequence."
         ],
         "name" : "Specimen Type Code Sequence",
         "module" : "Specimen",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      "(0040,0555)[<0>](0040,a162)" : {
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "entity" : "Image",
         "req" : "1C",
         "module" : "Acquisition Context",
         "usage" : "M",
         "name" : "Rational Numerator Value"
      },
      "(0010,1020)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Length or size of the Patient, in meters.",
         "req" : "3",
         "entity" : "Study",
         "usage" : "U",
         "module" : "Patient Study",
         "name" : "Patient's Size"
      },
      "(0040,0515)[<0>](0040,0513)" : {
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "req" : "2",
         "entity" : "Image",
         "desc" : [
            "Organization that assigned the Container Identifier.",
            "Zero or one Item shall be included in this sequence."
         ],
         "name" : "Issuer of the Container Identifier Sequence",
         "usage" : "U",
         "module" : "Specimen"
      },
      "(0040,0560)[<0>](0008,2228)[<1>](0008,2230)" : {
         "desc" : [
            "Sequence of Items that modifies the primary anatomic structure of interest in this Instance.",
            "One or more Items are permitted in this sequence."
         ],
         "req" : "3",
         "entity" : "Image",
         "module" : "Specimen",
         "usage" : "U",
         "name" : "Primary Anatomic Structure Modifier Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-8"
         ]
      },
      "(0012,0083)" : {
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "usage" : "U",
         "module" : "Clinical Trial Study",
         "name" : "Consent for Clinical Trial Use Sequence",
         "desc" : [
            "A Sequence that conveys information about consent for Clinical Trial use of the composite instances within this Study.",
            "One or more Items are permitted in this sequence.",
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
         "entity" : "Study"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a30a)" : {
         "module" : "General Series",
         "usage" : "M",
         "name" : "Numeric Value",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "req" : "1C",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0018,9169)" : {
         "usage" : "C - Required if cardiac synchronization was applied.",
         "module" : "Cardiac Synchronization",
         "name" : "Cardiac Beat Rejection Technique",
         "desc" : [
            "Cardiac arrhythmia rejection technique.",
            {
               "title" : "Defined Terms:",
               "list" : [
                  [
                     "NONE",
                     null
                  ],
                  [
                     "RR_INTERVAL",
                     "rejection based on deviation from average RR interval"
                  ],
                  [
                     "QRS_LOOP",
                     "rejection based on deviation from regular QRS loop"
                  ],
                  [
                     "PVC",
                     "rejection based on PVC criteria"
                  ]
               ],
               "type" : "variablelist"
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and Cardiac Synchronization Technique (0018,9037) equals PROSPECTIVE or RETROSPECTIVE.",
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and Cardiac Synchronization Technique (0018,9037) equals PROSPECTIVE or RETROSPECTIVE."
         ],
         "entity" : "Image",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.18-1"
         ]
      },
      "(0040,0275)[<0>](0040,0009)" : {
         "entity" : "Series",
         "req" : "1C",
         "desc" : [
            "Identifier that identifies the Scheduled Procedure Step.",
            "Required if procedure was scheduled.",
            {
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "The condition is to allow the contents of this macro to be present (e.g., to convey the reason for the procedure, such as whether a mammogram is for screening or diagnostic purposes) even when the procedure step was not formally scheduled and a value for this identifier is unknown, rather than making up a dummy value."
                     ],
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "name" : "Scheduled Procedure Step ID",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0008,1150)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "Specimen",
         "usage" : "U",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Image",
         "req" : "1"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a161)" : [
         {
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2"
            ],
            "entity" : "Series",
            "req" : "1C",
            "desc" : [
               "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
            ],
            "name" : "Floating Point Value",
            "module" : "General Series",
            "usage" : "M"
         },
         {
            "name" : "Floating Point Value",
            "module" : "Enhanced US Series",
            "usage" : "M",
            "req" : "1C",
            "entity" : "Series",
            "desc" : [
               "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
            ],
            "mod_tables" : [
               "table_C.8.24.1-1",
               "table_10-2"
            ]
         }
      ],
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)" : {
         "name" : "Referenced SOP Instance MAC Sequence",
         "module" : "Enhanced US Image",
         "usage" : "M",
         "entity" : "Image",
         "req" : "3",
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
            "table_C.8.24.3-1",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0008,2112)" : [
         {
            "mod_tables" : [
               "table_C.7-9"
            ],
            "name" : "Source Image Sequence",
            "usage" : "M",
            "module" : "General Image",
            "entity" : "Image",
            "req" : "3",
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
            "module" : "Enhanced US Image",
            "usage" : "M",
            "name" : "Source Image Sequence",
            "desc" : [
               "A Sequence that identifies the set of Image SOP Class/Instance pairs of the Images that were used to derive this Image.",
               "One or more Items shall be included in this Sequence.",
               [
                  "See ",
                  {
                     "attrs" : {
                        "linkend" : "sect_C.7.6.1.1.4",
                        "xrefstyle" : "select: label"
                     },
                     "el" : "xref"
                  },
                  " for further explanation."
               ],
               "Required if Image Type (0008,0008) Value 1 is DERIVED."
            ],
            "req" : "1C",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.8.24.3-1"
            ]
         }
      ],
      "(0018,3102)" : {
         "usage" : "C - Required if Modality = IVUS",
         "module" : "IVUS Image",
         "name" : "IVUS Gated Rate",
         "desc" : [
            "Required if IVUS Acquisition (0018,3100) value is GATED_PULLBACK. Specified in units of mm/beat.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.5.6.1.23",
                     "xrefstyle" : "select: label"
                  }
               }
            ]
         ],
         "entity" : "Image",
         "req" : "1C",
         "mod_tables" : [
            "table_C.8.24.4-1"
         ]
      },
      "(0008,0050)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "req" : "2",
         "desc" : "A RIS generated number that identifies the order for the Study.",
         "name" : "Accession Number",
         "usage" : "M",
         "module" : "General Study"
      },
      "(0040,0253)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "desc" : "User or equipment generated identifier of that part of a Procedure that has been carried out within this step.",
         "entity" : "Series",
         "req" : "3",
         "usage" : "M",
         "module" : "General Series",
         "name" : "Performed Procedure Step ID"
      },
      "(0008,0096)[<0>](0040,1102)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person's Address",
         "usage" : "M",
         "module" : "General Study",
         "entity" : "Study",
         "req" : "3",
         "desc" : "Person's mailing address"
      },
      "(0038,0010)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "entity" : "Study",
         "req" : "3",
         "desc" : "Identifier of the visit as assigned by the healthcare provider",
         "name" : "Admission ID",
         "usage" : "U",
         "module" : "Patient Study"
      },
      "(0008,0110)[<0>](0008,0116)" : {
         "entity" : "Image",
         "req" : "3",
         "desc" : "Name of the organization responsible for the Coding Scheme. May include organizational contact information.",
         "name" : "Coding Scheme Responsible Organization",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0028,0002)" : [
         {
            "entity" : "Image",
            "req" : "1",
            "desc" : [
               "Number of samples (planes) in this image. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.3.1.1",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ],
            "name" : "Samples per Pixel",
            "usage" : "M",
            "module" : "Image Pixel",
            "mod_tables" : [
               "table_C.7-11b"
            ]
         },
         {
            "mod_tables" : [
               "table_C.8.24.3-1"
            ],
            "desc" : [
               "Number of samples per pixel in this image.",
               {
                  "list" : [
                     [
                        "1",
                        null
                     ]
                  ],
                  "title" : "Enumerated Values:",
                  "type" : "variablelist"
               }
            ],
            "req" : "1",
            "entity" : "Image",
            "usage" : "M",
            "module" : "Enhanced US Image",
            "name" : "Samples Per Pixel"
         }
      ],
      "(0010,1002)[<0>](0010,0021)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "module" : "Patient",
         "name" : "Issuer of Patient ID",
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
         "entity" : "Patient",
         "req" : "3"
      },
      "(0050,0010)[<0>](0050,0017)" : {
         "mod_tables" : [
            "table_C.7-18"
         ],
         "desc" : [
            "Required if Device Diameter (0050,0016) is present.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "FR",
                     "French"
                  ],
                  [
                     "GA",
                     "Gauge"
                  ],
                  [
                     "IN",
                     "Inch"
                  ],
                  [
                     "MM",
                     "Millimeter"
                  ]
               ],
               "title" : "Defined Terms:"
            }
         ],
         "req" : "2C",
         "entity" : "Image",
         "usage" : "U",
         "module" : "Device",
         "name" : "Device Diameter Units"
      },
      "(0018,980f)" : {
         "mod_tables" : [
            "table_C.8.24.3-1"
         ],
         "usage" : "M",
         "module" : "Enhanced US Image",
         "name" : "Transducer Application Code Sequence",
         "desc" : [
            "The primary clinical application of the transducer.",
            "Only a single Item shall be included in this sequence.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.24.3.4"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "entity" : "Image",
         "req" : "1"
      },
      "(0008,1072)[<0>](0008,0080)" : {
         "req" : "1C",
         "entity" : "Series",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "name" : "Institution Name",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a122)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Time",
         "module" : "General Series",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a163)" : {
         "name" : "Rational Denominator Value",
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "req" : "1C",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a120)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "DateTime",
         "module" : "Specimen",
         "usage" : "U",
         "req" : "1C",
         "entity" : "Image",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ]
      },
      "(0040,0261)" : {
         "name" : "Performed Protocol Type",
         "module" : "Enhanced US Series",
         "usage" : "M",
         "entity" : "Series",
         "req" : "1C",
         "desc" : [
            "Type of protocol performed.",
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "STAGED",
                     null
                  ],
                  [
                     "NON_STAGED",
                     null
                  ]
               ],
               "type" : "variablelist"
            },
            "Required if Performed Protocol Code Sequence (0040,0260) is present."
         ],
         "mod_tables" : [
            "table_C.8.24.1-1"
         ]
      },
      "(0040,0560)" : {
         "entity" : "Image",
         "req" : "1",
         "desc" : [
            "Sequence of identifiers and detailed description of the specimen(s) being imaged.",
            "One or more Items shall be included in this sequence.",
            "Each specimen imaged in the Pixel Data shall be identified by an Item in this Sequence. Other specimens in/on the container, but not imaged in the Pixel Data, may also be identified by Items in this Sequence."
         ],
         "name" : "Specimen Description Sequence",
         "module" : "Specimen",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)" : {
         "name" : "Referenced SOP Sequence",
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1C",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0028,1201)" : {
         "usage" : "M",
         "module" : "Image Pixel",
         "name" : "Red Palette Color Lookup Table Data",
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
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-11b"
         ]
      },
      "(0020,0013)" : [
         {
            "desc" : [
               "A number that identifies this image.",
               {
                  "content" : [
                     "\n                    ",
                     {
                        "el" : "para",
                        "content" : [
                           "This Attribute was named Image Number in earlier versions of this Standard."
                        ]
                     },
                     "\n                  "
                  ],
                  "el" : "note"
               }
            ],
            "entity" : "Image",
            "req" : "2",
            "module" : "General Image",
            "usage" : "M",
            "name" : "Instance Number",
            "mod_tables" : [
               "table_C.7-9"
            ]
         },
         {
            "usage" : "M",
            "module" : "SOP Common",
            "name" : "Instance Number",
            "desc" : "A number that identifies this Composite object instance.",
            "req" : "3",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.12-1"
            ]
         }
      ],
      "(0054,0220)" : {
         "name" : "View Code Sequence",
         "module" : "Enhanced US Image",
         "usage" : "M",
         "req" : "1",
         "entity" : "Image",
         "desc" : [
            "Sequence that describes the projection of the anatomic region of interest.",
            "Only a single Item shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.8.24.3-1",
            "table_10-24"
         ]
      },
      "(0018,9809)" : {
         "mod_tables" : [
            "table_C.8.24.3-1"
         ],
         "name" : "Transducer Scan Pattern Code Sequence",
         "usage" : "M",
         "module" : "Enhanced US Image",
         "req" : "1",
         "entity" : "Image",
         "desc" : [
            "The scan pattern the transducer is capable of.",
            "Only a single item shall be included in this sequence.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.24.3.4"
                  }
               },
               " for further explanation."
            ]
         ]
      },
      "(fffa,fffa)[<0>](0400,0110)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Certificate Type",
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
                  "\n                    "
               ],
               "el" : "note"
            }
         ],
         "entity" : "Image",
         "req" : "1"
      },
      "(0008,0201)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "entity" : "Image",
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
                                 "el" : "para",
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
                     "content" : [
                        "Offset = -0200"
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ]
            },
            "The local timezone offset is undefined if this Attribute is absent."
         ],
         "name" : "Timezone Offset From UTC",
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0008,1052)[<0>](0008,0081)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "entity" : "Series",
         "req" : "3",
         "usage" : "M",
         "module" : "General Series",
         "name" : "Institution Address"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0404)" : {
         "mod_tables" : [
            "table_C.8.24.3-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M",
         "module" : "Enhanced US Image",
         "name" : "MAC",
         "desc" : [
            "The MAC generated as described in ",
            {
               "attrs" : {
                  "linkend" : "sect_C.12.1.1.3",
                  "xrefstyle" : "select: label"
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
         "entity" : "Image",
         "req" : "1"
      },
      "(0008,1120)[<0>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "module" : "Patient",
         "usage" : "M",
         "entity" : "Patient",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a120)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "usage" : "U",
         "name" : "DateTime",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "entity" : "Image",
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,100a)" : {
         "module" : "General Series",
         "usage" : "M",
         "name" : "Reason for Requested Procedure Code Sequence",
         "desc" : [
            "Coded Reason for requesting this procedure.",
            "One or more Items are permitted in this sequence."
         ],
         "req" : "3",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ]
      },
      "(0028,140b)[<0>](0028,140e)" : {
         "desc" : [
            "Identifier of the data path in which this Palette Color Lookup Table is used.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "PRIMARY",
                     null
                  ],
                  [
                     "SECONDARY",
                     null
                  ]
               ],
               "title" : "Enumerated Values:"
            },
            "Each item shall have a distinct value of Data Path ID."
         ],
         "req" : "1",
         "entity" : "Image",
         "module" : "Enhanced Palette Color Lookup Table",
         "usage" : "U",
         "name" : "Data Path ID",
         "mod_tables" : [
            "table_C.7.6.23-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a121)" : [
         {
            "module" : "General Series",
            "usage" : "M",
            "name" : "Date",
            "desc" : [
               "Date value for this name-value Item.",
               "Required if Value Type (0040,A040) is DATE."
            ],
            "entity" : "Series",
            "req" : "1C",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2"
            ]
         },
         {
            "mod_tables" : [
               "table_C.8.24.1-1",
               "table_10-2"
            ],
            "name" : "Date",
            "usage" : "M",
            "module" : "Enhanced US Series",
            "req" : "1C",
            "entity" : "Series",
            "desc" : [
               "Date value for this name-value Item.",
               "Required if Value Type (0040,A040) is DATE."
            ]
         }
      ],
      "(0040,0275)[<0>](0008,0051)" : {
         "module" : "General Series",
         "usage" : "M",
         "name" : "Issuer of Accession Number Sequence",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this sequence."
         ],
         "req" : "3",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a161)" : [
         {
            "name" : "Floating Point Value",
            "usage" : "M",
            "module" : "General Series",
            "entity" : "Series",
            "req" : "1C",
            "desc" : [
               "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
            ],
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2"
            ]
         },
         {
            "mod_tables" : [
               "table_C.8.24.1-1",
               "table_10-2"
            ],
            "entity" : "Series",
            "req" : "1C",
            "desc" : [
               "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
            ],
            "name" : "Floating Point Value",
            "usage" : "M",
            "module" : "Enhanced US Series"
         }
      ],
      "(0020,0020)" : {
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image",
         "usage" : "M",
         "name" : "Patient Orientation",
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
         "req" : "2C"
      },
      "(0008,1250)[<0>](0020,000e)" : {
         "usage" : "M",
         "module" : "General Series",
         "name" : "Series Instance UID",
         "desc" : "Instance UID of Related Series",
         "entity" : "Series",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0040,0555)[<0>](0040,a121)" : {
         "req" : "1C",
         "entity" : "Image",
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a date.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "The purpose or role of the date value could be specified in Concept Name Code Sequence (0040,A043)."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            },
            "Required if the value that Concept Name Code Sequence (0040,A043) requires (implies) is a date. Shall not be present otherwise."
         ],
         "name" : "Date",
         "usage" : "M",
         "module" : "Acquisition Context",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ]
      },
      "(0010,2292)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "module" : "Patient",
         "name" : "Patient Breed Description",
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
         "req" : "2C",
         "entity" : "Patient"
      },
      "(0008,114a)[<0>](0040,a170)" : [
         {
            "mod_tables" : [
               "table_C.7-9"
            ],
            "desc" : [
               "Code describing the purpose of the reference to the Instance(s).",
               "Only a single Item shall be included in this sequence."
            ],
            "entity" : "Image",
            "req" : "1",
            "usage" : "M",
            "module" : "General Image",
            "name" : "Purpose of Reference Code Sequence"
         },
         {
            "mod_tables" : [
               "table_C.8.24.3-1"
            ],
            "desc" : [
               "Code describing the purpose of the reference to the Instance(s).",
               "Only a single Item shall be included in this sequence."
            ],
            "entity" : "Image",
            "req" : "1",
            "usage" : "M",
            "module" : "Enhanced US Image",
            "name" : "Purpose of Reference Code Sequence"
         }
      ],
      "(0008,1062)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "Identification of the physician(s) reading the Study. One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Name of Physician(s) Reading Study (0008,1060), if present.",
         "entity" : "Study",
         "req" : "3",
         "usage" : "M",
         "module" : "General Study",
         "name" : "Physician(s) Reading Study Identification Sequence"
      },
      "(0040,0520)[<0>](0050,001e)" : {
         "name" : "Container Component Description",
         "module" : "Specimen",
         "usage" : "U",
         "req" : "3",
         "entity" : "Image",
         "desc" : "Container component text description.",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      "(0008,1062)[<0>](0008,0080)" : {
         "name" : "Institution Name",
         "module" : "General Study",
         "usage" : "M",
         "entity" : "Study",
         "req" : "1C",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0018,5022)" : {
         "mod_tables" : [
            "table_C.8.24.3-1"
         ],
         "name" : "Mechanical Index",
         "module" : "Enhanced US Image",
         "usage" : "M",
         "req" : "1",
         "entity" : "Image",
         "desc" : [
            "See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.5.6.1.8"
               },
               "el" : "xref"
            },
            " for Description."
         ]
      },
      "(0020,9221)[<0>](0020,9164)" : {
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "module" : "Multi-frame Dimension",
         "usage" : "M",
         "name" : "Dimension Organization UID",
         "desc" : [
            "Uniquely identifies a set of dimensions referenced within the containing SOP Instance. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.17.2"
               }
            },
            " for further explanation."
         ],
         "entity" : "Image",
         "req" : "1"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)" : [
         {
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
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16"
            ]
         },
         {
            "mod_tables" : [
               "table_C.8.24.1-1"
            ],
            "desc" : [
               "Sequence that specifies modifiers for a Protocol Context Content Item.",
               "One or more items are permitted in this sequence.",
               [
                  "See ",
                  {
                     "attrs" : {
                        "linkend" : "sect_C.4.10.1",
                        "xrefstyle" : "select: label"
                     },
                     "el" : "xref"
                  },
                  "."
               ]
            ],
            "req" : "3",
            "entity" : "Series",
            "usage" : "M",
            "module" : "Enhanced US Series",
            "name" : "Content Item Modifier Sequence"
         }
      ],
      "(0040,0555)[<0>](0040,a30a)" : {
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a set of one or more numeric values.",
            "Required if the value that Concept Name Code Sequence (0040,A043) requires (implies) is a set of one or more integers or real numbers. Shall not be present otherwise."
         ],
         "entity" : "Image",
         "req" : "1C",
         "module" : "Acquisition Context",
         "usage" : "M",
         "name" : "Numeric Value"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1150)" : {
         "module" : "General Series",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(0008,1049)[<0>](0040,1101)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person Identification Code Sequence",
         "usage" : "M",
         "module" : "General Study",
         "entity" : "Study",
         "req" : "1",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0008,1032)" : {
         "desc" : [
            "A Sequence that conveys the type of procedure performed.",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "entity" : "Study",
         "usage" : "M",
         "module" : "General Study",
         "name" : "Procedure Code Sequence",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a160)" : [
         {
            "name" : "Text Value",
            "usage" : "M",
            "module" : "General Series",
            "entity" : "Series",
            "req" : "1C",
            "desc" : [
               "Text value for this name-value Item.",
               "Required if Value Type (0040,A040) is TEXT."
            ],
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2"
            ]
         },
         {
            "mod_tables" : [
               "table_C.8.24.1-1",
               "table_10-2"
            ],
            "usage" : "M",
            "module" : "Enhanced US Series",
            "name" : "Text Value",
            "desc" : [
               "Text value for this name-value Item.",
               "Required if Value Type (0040,A040) is TEXT."
            ],
            "entity" : "Series",
            "req" : "1C"
         }
      ],
      "(0008,0023)" : {
         "usage" : "M",
         "module" : "General Image",
         "name" : "Content Date",
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
         "mod_tables" : [
            "table_C.7-9"
         ]
      },
      "(0008,0110)[<0>](0008,0103)" : {
         "desc" : "The coding scheme version associated with the Coding Scheme Designator (0008,0102).",
         "req" : "3",
         "entity" : "Image",
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Coding Scheme Version",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0012,0082)" : {
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "req" : "3",
         "entity" : "Patient",
         "desc" : "Approval number issued by committee described in Clinical Trial Protocol Ethics Committee Name (0012,0081).",
         "name" : "Clinical Trial Protocol Ethics Committee Approval Number",
         "usage" : "U",
         "module" : "Clinical Trial Subject"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1101)" : {
         "entity" : "Image",
         "req" : "1",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Person Identification Code Sequence",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ]
      },
      "(0100,0424)" : {
         "name" : "SOP Authorization Comment",
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "3",
         "entity" : "Image",
         "desc" : "Any comments associated with the setting of the SOP Instance Status (0100,0410) to AO.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0028,140b)[<0>](0028,1410)" : {
         "name" : "Alpha LUT Transfer Function",
         "module" : "Enhanced Palette Color Lookup Table",
         "usage" : "U",
         "req" : "1",
         "entity" : "Image",
         "desc" : [
            "Specifies the transformation that is used to create the Alpha input to the Blending LUTs.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "Depending on the values of Blending LUT 1 Transfer Function (0028,1405) and Blending LUT 2 Transfer Function (0028,140D) the Alpha LUT value may be ignored. It is recommended that IDENTITY be used if this is the case."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            },
            {
               "list" : [
                  [
                     "NONE",
                     null
                  ],
                  [
                     "IDENTITY",
                     null
                  ],
                  [
                     "TABLE",
                     null
                  ]
               ],
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "mod_tables" : [
            "table_C.7.6.23-1"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a123)" : {
         "name" : "Person Name",
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "req" : "1C",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a040)" : {
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
         ],
         "entity" : "Series",
         "req" : "1",
         "module" : "General Series",
         "usage" : "M",
         "name" : "Value Type",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0008,1052)[<0>](0008,0082)" : {
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Institution Code Sequence",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ]
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0020,000e)" : {
         "entity" : "Image",
         "req" : "1",
         "desc" : "Unique identifier of the Series containing the referenced Instances.",
         "name" : "Series Instance UID",
         "module" : "Common Instance Reference",
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ]
      },
      "(0008,1115)[<0>](0020,000e)" : {
         "name" : "Series Instance UID",
         "module" : "Common Instance Reference",
         "usage" : "U",
         "entity" : "Image",
         "req" : "1",
         "desc" : "Unique identifier of the Series containing the referenced Instances.",
         "mod_tables" : [
            "table_C.12-8"
         ]
      },
      "(0028,2000)" : [
         {
            "module" : "Image Pixel",
            "usage" : "M",
            "name" : "ICC Profile",
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
            "entity" : "Image",
            "req" : "3",
            "mod_tables" : [
               "table_C.7-11b"
            ]
         },
         {
            "entity" : "Image",
            "req" : "1C",
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
                  }
               ],
               "When present, defines the color space of the output of the Enhanced Blending and Display Pipeline.",
               "Required if Data Path Assignment (0028,1402) is present and there exists any value other than PRIMARY_PVALUES."
            ],
            "name" : "ICC Profile",
            "module" : "Enhanced Palette Color Lookup Table",
            "usage" : "U",
            "mod_tables" : [
               "table_C.7.6.23-1"
            ]
         },
         {
            "desc" : "An ICC Profile encoding the transformation of device-dependent color stored pixel values into PCS-Values.",
            "req" : "1",
            "entity" : "Image",
            "usage" : "U",
            "module" : "ICC Profile",
            "name" : "ICC Profile",
            "mod_tables" : [
               "table_C.11.15-1"
            ]
         }
      ],
      "(0008,0096)[<0>](0040,1101)" : {
         "module" : "General Study",
         "usage" : "M",
         "name" : "Person Identification Code Sequence",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Study",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0008,2218)[<0>](0008,2220)" : {
         "mod_tables" : [
            "table_C.8.24.3-1",
            "table_10-5"
         ],
         "name" : "Anatomic Region Modifier Sequence",
         "module" : "Enhanced US Image",
         "usage" : "M",
         "entity" : "Image",
         "req" : "3",
         "desc" : [
            "Sequence of Items that modifies the anatomic region of interest of this Instance.",
            "One or more Items are permitted in this sequence."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a120)" : {
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "name" : "DateTime",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0018,1064)" : {
         "name" : "Cardiac Framing Type",
         "module" : "Cardiac Synchronization",
         "usage" : "C - Required if cardiac synchronization was applied.",
         "entity" : "Image",
         "req" : "1C",
         "desc" : [
            [
               "Description of type of framing performed. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.18.1.1.1"
                  }
               },
               " for description and Defined Terms."
            ],
            "Required if type of framing is not time forward from trigger, may be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7.6.18-1"
         ]
      },
      "(0040,0515)[<0>](0040,0513)[<1>](0040,0031)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "entity" : "Image",
         "req" : "1C",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "name" : "Local Namespace Entity ID",
         "usage" : "U",
         "module" : "Specimen"
      },
      "(0010,2297)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "2C",
         "entity" : "Patient",
         "desc" : [
            "Name of person with medical decision making authority for the patient.",
            "Required if the patient is an animal. May be present otherwise."
         ],
         "name" : "Responsible Person",
         "usage" : "M",
         "module" : "Patient"
      },
      "(0018,0012)[<0>](0018,9337)" : {
         "desc" : "Identifying number, unique within this SOP Instance, of the agent administered. Used to reference this particular agent from the Contrast/Bolus Functional Group Macro. The number shall be 1 for the first Item and increase by 1 for each subsequent Item.",
         "req" : "1",
         "entity" : "Image",
         "usage" : "C - Required if contrast media was applied. See  for baseline context group ID.",
         "module" : "Enhanced Contrast/Bolus",
         "name" : "Contrast/Bolus Agent Number",
         "mod_tables" : [
            "table_C.7-12b"
         ]
      },
      "(0010,2298)" : {
         "req" : "1C",
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
         "name" : "Responsible Person Role",
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0050,0010)[<0>](0050,0018)" : {
         "desc" : [
            "Volume of device in ml. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.12.1.1"
               },
               "el" : "xref"
            },
            ".."
         ],
         "entity" : "Image",
         "req" : "3",
         "module" : "Device",
         "usage" : "U",
         "name" : "Device Volume",
         "mod_tables" : [
            "table_C.7-18"
         ]
      },
      "(0020,9309)" : {
         "mod_tables" : [
            "table_C.8.24.2-1"
         ],
         "name" : "Volume to Transducer Mapping Matrix",
         "usage" : "M",
         "module" : "Ultrasound Frame of Reference",
         "req" : "1",
         "entity" : "Frame of Reference",
         "desc" : [
            "A 4x4 rigid transformation matrix that maps the Volume Frame of Reference homogeneous coordinate system (X",
            {
               "el" : "subscript",
               "content" : [
                  "V"
               ]
            },
            ", Y",
            {
               "el" : "subscript",
               "content" : [
                  "V"
               ]
            },
            ", Z",
            {
               "el" : "subscript",
               "content" : [
                  "V"
               ]
            },
            ") to the Transducer Frame of Reference homogeneous coordinate system (X",
            {
               "el" : "subscript",
               "content" : [
                  "X"
               ]
            },
            ",Y",
            {
               "el" : "subscript",
               "content" : [
                  "X"
               ]
            },
            ", Z",
            {
               "content" : [
                  "X"
               ],
               "el" : "subscript"
            },
            "). Matrix elements shall be listed in row-major order. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.24.2.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for details."
         ]
      },
      "(0028,0303)" : {
         "name" : "Longitudinal Temporal Information Modified",
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "3",
         "desc" : [
            "Indicates whether or not the date and time attributes in the instance have been modified during de-identification.",
            {
               "type" : "variablelist",
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
               ]
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
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0038,0062)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "module" : "Patient Study",
         "name" : "Service Episode Description",
         "desc" : "Description of the type of service episode.",
         "entity" : "Study",
         "req" : "3"
      },
      "(0018,1800)" : {
         "mod_tables" : [
            "table_C.7-7"
         ],
         "name" : "Acquisition Time Synchronized",
         "usage" : "M",
         "module" : "Synchronization",
         "req" : "1",
         "entity" : "Frame of Reference",
         "desc" : [
            "Acquisition DateTime (0008,002A) synchronized with external time reference.",
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "Y",
                     null
                  ],
                  [
                     "N",
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
                     "linkend" : "sect_C.7.4.2.1.4",
                     "xrefstyle" : "select: label"
                  }
               }
            ]
         ]
      },
      "(0008,9121)[<0>](0008,1115)" : {
         "mod_tables" : [
            "table_C.8.24.3-1",
            "table_C.17-3"
         ],
         "desc" : [
            "Sequence of Items where each Item includes the Attributes of a Series containing referenced Composite Object(s).",
            "One or more Items shall be included in this sequence"
         ],
         "req" : "1",
         "entity" : "Image",
         "module" : "Enhanced US Image",
         "usage" : "M",
         "name" : "Referenced Series Sequence"
      },
      "(0012,0072)" : {
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "module" : "Clinical Trial Series",
         "usage" : "U",
         "name" : "Clinical Trial Series Description",
         "desc" : [
            "A description of the series in the context of a clinical trial. See ",
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
         "entity" : "Series"
      },
      "(2050,0020)" : [
         {
            "req" : "3",
            "entity" : "Image",
            "desc" : [
               "When present, specifies an identity transformation for the Presentation LUT such that the output of all grayscale transformations, if any, are defined to be in P-Values.",
               {
                  "title" : "Enumerated Values:",
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
                  "type" : "variablelist"
               },
               "When this attribute is used with a color photometric interpretation then the luminance component is in P-Values."
            ],
            "name" : "Presentation LUT Shape",
            "usage" : "M",
            "module" : "General Image",
            "mod_tables" : [
               "table_C.7-9"
            ]
         },
         {
            "mod_tables" : [
               "table_C.8.24.3-1"
            ],
            "module" : "Enhanced US Image",
            "usage" : "M",
            "name" : "Presentation LUT Shape",
            "desc" : [
               "Specifies an identity transformation for the Presentation LUT, such that the output of all grayscale transformations defined in the IOD containing this Module are defined to be P-Values.",
               {
                  "list" : [
                     [
                        "IDENTITY",
                        "output is in P-Values."
                     ]
                  ],
                  "title" : "Enumerated Values:",
                  "type" : "variablelist"
               }
            ],
            "entity" : "Image",
            "req" : "1"
         }
      ],
      "(0018,9171)" : {
         "req" : "1C",
         "entity" : "Image",
         "desc" : [
            "Signal source from which respiratory motion is derived.",
            {
               "type" : "variablelist",
               "title" : "Defined Terms:",
               "list" : [
                  [
                     "NONE",
                     null
                  ],
                  [
                     "BELT",
                     "includes various devices that detect or track expansion of the chest"
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
                  ]
               ]
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and Respiratory Motion Compensation Technique (0018,9170) equals other than NONE.",
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and Respiratory Motion Compensation Technique (0018,9170equals other than NONE."
         ],
         "name" : "Respiratory Signal Source",
         "module" : "Respiratory Synchronization",
         "usage" : "C - Required if respiratory synchronization was applied.",
         "mod_tables" : [
            "table_C.7.6.18-2"
         ]
      },
      "(0018,a001)[<0>](0008,0070)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Manufacturer of the equipment that contributed to the composite instance.",
         "req" : "1",
         "entity" : "Image",
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Manufacturer"
      },
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1155)" : {
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ],
         "req" : "1",
         "entity" : "Image",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "usage" : "U",
         "module" : "Common Instance Reference"
      },
      "(0008,1072)[<0>](0008,0082)" : {
         "entity" : "Series",
         "req" : "1C",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Institution Code Sequence",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)" : [
         {
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16"
            ],
            "name" : "Protocol Context Sequence",
            "module" : "General Series",
            "usage" : "M",
            "req" : "3",
            "entity" : "Series",
            "desc" : "Sequence that specifies the context for the Performed Protocol Code Sequence Item. One or more Items are permitted in this sequence."
         },
         {
            "mod_tables" : [
               "table_C.8.24.1-1"
            ],
            "name" : "Protocol Context Sequence",
            "module" : "Enhanced US Series",
            "usage" : "M",
            "entity" : "Series",
            "req" : "3",
            "desc" : [
               "Sequence that specifies the context for the Performed Protocol Code Sequence Item.",
               "One or more items are permitted in this sequence."
            ]
         }
      ],
      "(fffa,fffa)[<0>](0400,0305)" : {
         "desc" : [
            "The type of certified timestamp used in Certified Timestamp (0400,0310). Required if Certified Timestamp (0400,0310) is present.",
            {
               "type" : "variablelist",
               "title" : "Defined Terms:",
               "list" : [
                  [
                     "CMS_TSP",
                     "Internet X.509 Public Key Infrastructure Time Stamp Protocol"
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
         ],
         "entity" : "Image",
         "req" : "1C",
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Certified Timestamp Type",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0020,9222)" : {
         "module" : "Multi-frame Dimension",
         "usage" : "M",
         "name" : "Dimension Index Sequence",
         "desc" : [
            "Identifies the sequence containing the indices used to specify the dimension of the multi-frame object.",
            "One or more Items shall be included in this sequence."
         ],
         "entity" : "Image",
         "req" : "1",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ]
      },
      "(0038,0064)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Issuer of Service Episode ID Sequence",
         "usage" : "U",
         "module" : "Patient Study",
         "req" : "3",
         "entity" : "Study",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Service Episode ID (0038,0060).",
            "Only a single Item is permitted in this sequence."
         ]
      },
      "(0040,0555)[<0>](0040,a136)" : {
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "req" : "1C",
         "entity" : "Image",
         "desc" : [
            "References one or more frames in a Multi-frame SOP Instance. The first frame shall be denoted as frame number one.",
            "Required if this SOP Instance is a Multi-frame SOP Instance and the values in this sequence item do not apply to all frames."
         ],
         "name" : "Referenced Frame Numbers",
         "usage" : "M",
         "module" : "Acquisition Context"
      },
      "(0028,2114)" : [
         {
            "name" : "Lossy Image Compression Method",
            "usage" : "M",
            "module" : "General Image",
            "entity" : "Image",
            "req" : "3",
            "desc" : [
               "A label for the lossy compression method(s) that have been applied to this image.",
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
            "mod_tables" : [
               "table_C.7-9"
            ]
         },
         {
            "entity" : "Image",
            "req" : "1C",
            "desc" : [
               "A label for the lossy compression method(s) that have been applied to this image.",
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
               "May be multi valued if successive lossy compression steps have been applied; the value order shall correspond to the values of Lossy Image Compression Ratio (0028,2112).",
               {
                  "content" : [
                     "\n                    ",
                     {
                        "el" : "para",
                        "content" : [
                           "For historical reasons, the lossy compression method may also be described in Derivation Description (0008,2111)."
                        ]
                     },
                     "\n                  "
                  ],
                  "el" : "note"
               },
               "Required if Lossy Image Compression (0028,2110) equals 01."
            ],
            "name" : "Lossy Image Compression Method",
            "usage" : "M",
            "module" : "Enhanced US Image",
            "mod_tables" : [
               "table_C.8.24.3-1"
            ]
         }
      ],
      "(0040,0555)[<0>](0040,08ea)" : {
         "name" : "Measurement Units Code Sequence",
         "usage" : "M",
         "module" : "Acquisition Context",
         "entity" : "Image",
         "req" : "1C",
         "desc" : [
            "Units of measurement.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Numeric Value (0040,A30A) is sent. Shall not be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7.6.14-1"
         ]
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0033)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "usage" : "M",
         "module" : "General Series",
         "name" : "Universal Entity ID Type",
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
         "entity" : "Series",
         "req" : "1C"
      },
      "(0008,1140)[<0>](0008,1160)" : [
         {
            "mod_tables" : [
               "table_C.7-9",
               "table_10-3"
            ],
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
            "req" : "1C",
            "entity" : "Image",
            "module" : "General Image",
            "usage" : "M",
            "name" : "Referenced Frame Number"
         },
         {
            "mod_tables" : [
               "table_C.8.24.3-1",
               "table_10-3"
            ],
            "module" : "Enhanced US Image",
            "usage" : "M",
            "name" : "Referenced Frame Number",
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
            "req" : "1C"
         }
      ],
      "(0040,0555)[<0>](0040,a040)" : {
         "name" : "Value Type",
         "usage" : "M",
         "module" : "Acquisition Context",
         "req" : "3",
         "entity" : "Image",
         "desc" : [
            "The type of the value encoded in this Item.",
            {
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
               "title" : "Defined Terms:",
               "type" : "variablelist"
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
         "mod_tables" : [
            "table_C.7.6.14-1"
         ]
      },
      "(0018,0012)[<0>](0018,9340)[<1>](0018,1046)" : {
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "name" : "Contrast Flow Rate",
         "module" : "Enhanced Contrast/Bolus",
         "usage" : "C - Required if contrast media was applied. See  for baseline context group ID.",
         "entity" : "Image",
         "req" : "3",
         "desc" : "Rate of administration in milliliters/sec. Only a single value shall be present."
      },
      "(0100,0410)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "entity" : "Image",
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "SOP Instance Status"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0062,000b)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "req" : "1C",
         "entity" : "Image",
         "module" : "Specimen",
         "usage" : "U",
         "name" : "Referenced Segment Number"
      },
      "(0028,140b)[<0>](0028,1102)" : {
         "mod_tables" : [
            "table_C.7.6.23-1"
         ],
         "desc" : [
            "Specifies the format of the Green Palette Color Lookup Table Data (0028,1202).",
            "The second value (first stored pixel value mapped) shall be zero.",
            "Required if RGB LUT Transfer Function (0028,140F) is TABLE."
         ],
         "req" : "1C",
         "entity" : "Image",
         "module" : "Enhanced Palette Color Lookup Table",
         "usage" : "U",
         "name" : "Green Palette Color Lookup Table Descriptor"
      },
      "(0018,9037)" : {
         "name" : "Cardiac Synchronization Technique",
         "usage" : "C - Required if cardiac synchronization was applied.",
         "module" : "Cardiac Synchronization",
         "entity" : "Image",
         "req" : "1C",
         "desc" : [
            "Defines if a cardiac synchronization technique was applied during or after the acquisition.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "NONE",
                     null
                  ],
                  [
                     "REALTIME",
                     "total time for the acquisition is shorter than cardiac cycle, no gating is applied"
                  ],
                  [
                     "PROSPECTIVE",
                     "certain thresholds have been set for a gating window that defines the acceptance of measurement data during the acquisition"
                  ],
                  [
                     "RETROSPECTIVE",
                     "certain thresholds have been set for a gating window that defines the acceptance of measurement data after the acquisition"
                  ],
                  [
                     "PACED",
                     "there is a constant RR interval (e.g., Pacemaker), which makes thresholding not required"
                  ]
               ],
               "title" : "Enumerated Values:"
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7.6.18-1"
         ]
      },
      "(0010,2299)" : {
         "desc" : [
            "Name of organization with medical decision making authority for the patient.",
            "Required if patient is an animal. May be present otherwise."
         ],
         "entity" : "Patient",
         "req" : "2C",
         "module" : "Patient",
         "usage" : "M",
         "name" : "Responsible Organization",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0020,0010)" : {
         "name" : "Study ID",
         "module" : "General Study",
         "usage" : "M",
         "entity" : "Study",
         "req" : "2",
         "desc" : "User or equipment generated Study identifier.",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0018,5027)" : {
         "mod_tables" : [
            "table_C.8.24.3-1"
         ],
         "desc" : [
            "See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.5.6.1.8"
               }
            },
            " for Description."
         ],
         "entity" : "Image",
         "req" : "1",
         "usage" : "M",
         "module" : "Enhanced US Image",
         "name" : "Soft Tissue Thermal Index"
      },
      "(0040,0275)[<0>](0020,000d)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "req" : "3",
         "entity" : "Series",
         "desc" : "The unique identifier for the Study provided for this Requested Procedure.",
         "name" : "Study Instance UID",
         "usage" : "M",
         "module" : "General Series"
      },
      "(0040,a390)[<0>](0040,e001)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "req" : "1",
         "desc" : "Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
         "name" : "HL7 Instance Identifier",
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0028,0120)" : {
         "name" : "Pixel Padding Value",
         "usage" : "M",
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
                                    "The Value Representation of this Attribute is determined by the value of Pixel Representation (0028,0103)."
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
         "mod_tables" : [
            "table_C.7-8"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a168)" : {
         "module" : "General Series",
         "usage" : "M",
         "name" : "Concept Code Sequence",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "entity" : "Series",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0010,4000)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "User-defined additional information about the patient.",
         "req" : "3",
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "name" : "Patient Comments"
      },
      "(0008,1052)[<0>](0040,1103)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "entity" : "Series",
         "req" : "3",
         "desc" : "Person's telephone number(s)",
         "name" : "Person's Telephone Numbers",
         "module" : "General Series",
         "usage" : "M"
      },
      "(0010,0200)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3",
         "entity" : "Patient",
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
         "name" : "Quality Control Subject",
         "module" : "Patient",
         "usage" : "M"
      },
      "(0028,1401)[<0>](0028,3010)[<1>](0028,3003)" : {
         "module" : "Enhanced Palette Color Lookup Table",
         "usage" : "U",
         "name" : "LUT Explanation",
         "desc" : "Free form text explanation of the meaning of the LUT.",
         "entity" : "Image",
         "req" : "3",
         "mod_tables" : [
            "table_C.7.6.23-1",
            "table_C.11-2b"
         ]
      },
      "(0088,0200)[<0>](0028,1102)" : [
         {
            "name" : "Green Palette Color Lookup Table Descriptor",
            "module" : "General Image",
            "usage" : "M",
            "req" : "1C",
            "entity" : "Image",
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
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7-11b"
            ]
         },
         {
            "name" : "Green Palette Color Lookup Table Descriptor",
            "module" : "Enhanced US Image",
            "usage" : "M",
            "entity" : "Image",
            "req" : "1C",
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
               "table_C.8.24.3-1",
               "table_C.7-11b"
            ]
         }
      ],
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a121)" : {
         "name" : "Date",
         "module" : "General Series",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0020,930a)" : {
         "mod_tables" : [
            "table_C.8.24.2-1"
         ],
         "entity" : "Frame of Reference",
         "req" : "1C",
         "desc" : [
            [
               "A 4x4 rigid transformation matrix that maps the Volume Frame of Reference homogeneous coordinate system (X",
               {
                  "content" : [
                     "V"
                  ],
                  "el" : "subscript"
               },
               ",Y",
               {
                  "el" : "subscript",
                  "content" : [
                     "V"
                  ]
               },
               ", Z",
               {
                  "el" : "subscript",
                  "content" : [
                     "V"
                  ]
               },
               ") to the Table Frame of Reference homogeneous coordinate system (X",
               {
                  "el" : "subscript",
                  "content" : [
                     "T"
                  ]
               },
               ",Y",
               {
                  "el" : "subscript",
                  "content" : [
                     "T"
                  ]
               },
               ", Z",
               {
                  "el" : "subscript",
                  "content" : [
                     "T"
                  ]
               },
               "). Matrix elements shall be listed in row-major order. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.24.2.2"
                  }
               },
               " for details."
            ],
            "Required if Patient Frame of Reference Source (0020,930C) is TABLE."
         ],
         "name" : "Volume to Table Mapping Matrix",
         "module" : "Ultrasound Frame of Reference",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1070)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Operators' Name",
         "desc" : "Name(s) of the operator(s) of the contributing equipment.",
         "entity" : "Image",
         "req" : "3"
      },
      "(0020,9313)" : {
         "entity" : "Frame of Reference",
         "req" : "1C",
         "desc" : [
            "Uniquely identifies this Table Frame of Reference.",
            "Required if Patient Frame of Reference Source (0020,930C) is TABLE."
         ],
         "name" : "Table Frame of Reference UID",
         "usage" : "M",
         "module" : "Ultrasound Frame of Reference",
         "mod_tables" : [
            "table_C.8.24.2-1"
         ]
      },
      "(0050,0010)[<0>](0008,1090)" : {
         "usage" : "U",
         "module" : "Device",
         "name" : "Manufacturer's Model Name",
         "desc" : "Manufacturer's model name of the device",
         "req" : "3",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-18"
         ]
      },
      "(0008,0013)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Instance Creation Time",
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "3",
         "desc" : [
            "Time the SOP Instance was created.",
            "This is the time that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0035)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
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
         "entity" : "Patient",
         "req" : "3",
         "module" : "Patient",
         "usage" : "M",
         "name" : "Identifier Type Code"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a30a)" : {
         "entity" : "Image",
         "req" : "1C",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "name" : "Numeric Value",
         "usage" : "U",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a30a)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "req" : "1C",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "name" : "Numeric Value",
         "usage" : "M",
         "module" : "General Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a124)" : [
         {
            "desc" : [
               "UID value for this name-value Item.",
               "Required if Value Type (0040,A040) is UIDREF."
            ],
            "entity" : "Series",
            "req" : "1C",
            "module" : "General Series",
            "usage" : "M",
            "name" : "UID",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2"
            ]
         },
         {
            "mod_tables" : [
               "table_C.8.24.1-1",
               "table_10-2"
            ],
            "desc" : [
               "UID value for this name-value Item.",
               "Required if Value Type (0040,A040) is UIDREF."
            ],
            "req" : "1C",
            "entity" : "Series",
            "usage" : "M",
            "module" : "Enhanced US Series",
            "name" : "UID"
         }
      ],
      "(0028,1404)[<0>](0028,1406)" : {
         "module" : "Enhanced Palette Color Lookup Table",
         "usage" : "U",
         "name" : "Blending Weight Constant",
         "desc" : [
            "Constant value of the Weight input to blending operation. Shall be from 0.0 to 1.0, inclusive.",
            "Required if Blending LUT 1 Transfer Function (0028,1405) is CONSTANT."
         ],
         "entity" : "Image",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.23-1"
         ]
      },
      "(0008,2133)[<0>](0008,2134)" : {
         "name" : "Event Time Offset",
         "usage" : "M",
         "module" : "Enhanced US Image",
         "entity" : "Image",
         "req" : "1",
         "desc" : "Signed value of the time between Acquisition DateTime (0008,002A) and the event, in milliseconds. Positive values indicate the event occurs after Acquisition DateTime (0008,002A).",
         "mod_tables" : [
            "table_C.8.24.3-1"
         ]
      },
      "(0008,0014)" : {
         "name" : "Instance Creator UID",
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "3",
         "desc" : "Uniquely identifies device that created the SOP Instance.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0520)" : {
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "desc" : [
            "Description of one or more components of the container (e.g., description of the slide and of the coverslip).",
            "One or more Items are permitted in this sequence."
         ],
         "req" : "3",
         "entity" : "Image",
         "usage" : "U",
         "module" : "Specimen",
         "name" : "Container Component Sequence"
      },
      "(0008,0021)" : {
         "name" : "Series Date",
         "usage" : "M",
         "module" : "General Series",
         "req" : "3",
         "entity" : "Series",
         "desc" : "Date the Series started.",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0008,2133)[<0>](0008,2132)" : {
         "name" : "Event Timer Name(s)",
         "module" : "Enhanced US Image",
         "usage" : "M",
         "req" : "3",
         "entity" : "Image",
         "desc" : [
            "Name that identifies the event timer. May be used in addition to Event Time Code Sequence to offer site-specific user-readable event time names.",
            "Only a single value shall be included."
         ],
         "mod_tables" : [
            "table_C.8.24.3-1"
         ]
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0040,e011)" : {
         "name" : "Retrieve Location UID",
         "usage" : "M",
         "module" : "Enhanced US Image",
         "entity" : "Image",
         "req" : "3",
         "desc" : "Unique identifier of the system where the Composite Object(s) may be retrieved on the network.",
         "mod_tables" : [
            "table_C.8.24.3-1",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0010,1030)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Weight of the Patient, in kilograms.",
         "entity" : "Study",
         "req" : "3",
         "module" : "Patient Study",
         "usage" : "U",
         "name" : "Patient's Weight"
      },
      "(0008,114a)" : [
         {
            "entity" : "Image",
            "req" : "3",
            "desc" : [
               "Non-image composite SOP Instances that are significantly related to this Image, including waveforms that may or may not be temporally synchronized with this image.",
               "One or more Items are permitted in this sequence."
            ],
            "name" : "Referenced Instance Sequence",
            "module" : "General Image",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-9"
            ]
         },
         {
            "desc" : [
               "A sequence that provides reference to a set of non-image SOP Class/Instance pairs significantly related to this Image, including waveforms that may or may not be temporally synchronized with this image.",
               "One or more Items shall be included in this sequence.",
               "Required if waveforms are acquired in conjunction with image acquisition. May be present otherwise."
            ],
            "req" : "1C",
            "entity" : "Image",
            "module" : "Enhanced US Image",
            "usage" : "M",
            "name" : "Referenced Instance Sequence",
            "mod_tables" : [
               "table_C.8.24.3-1"
            ]
         }
      ],
      "(0008,1111)" : [
         {
            "usage" : "M",
            "module" : "General Series",
            "name" : "Referenced Performed Procedure Step Sequence",
            "desc" : [
               "Uniquely identifies the Performed Procedure Step SOP Instance to which the Series is related.",
               "Only a single Item is permitted in this sequence."
            ],
            "req" : "3",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.7-5a"
            ]
         },
         {
            "mod_tables" : [
               "table_C.8.24.1-1"
            ],
            "usage" : "M",
            "module" : "Enhanced US Series",
            "name" : "Referenced Performed Procedure Step Sequence",
            "desc" : [
               "Uniquely identifies the Performed Procedure Step SOP Instance to which the Series is related.",
               "Only a single Item shall be included in this sequence.",
               "Required if a Performed Procedure Step SOP Class was involved in the creation of this Series."
            ],
            "req" : "1C",
            "entity" : "Series"
         }
      ],
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0080)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Institution Name",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "req" : "1C",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ]
      },
      "(0008,002a)" : [
         {
            "mod_tables" : [
               "table_C.7-9"
            ],
            "name" : "Acquisition DateTime",
            "usage" : "M",
            "module" : "General Image",
            "entity" : "Image",
            "req" : "3",
            "desc" : [
               "The date and time that the acquisition of data that resulted in this image started.",
               {
                  "content" : [
                     "\n                    ",
                     {
                        "el" : "para",
                        "content" : [
                           "The synchronization of this time with an external clock is specified in the Synchronization Module in Acquisition Time Synchronized (0018,1800)."
                        ]
                     },
                     "\n                  "
                  ],
                  "el" : "note"
               }
            ]
         },
         {
            "mod_tables" : [
               "table_C.8.24.3-1"
            ],
            "entity" : "Image",
            "req" : "1",
            "desc" : "The date and time that the acquisition of data that resulted in this image started.",
            "name" : "Acquisition DateTime",
            "usage" : "M",
            "module" : "Enhanced US Image"
         }
      ],
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0008,1150)" : {
         "usage" : "U",
         "module" : "Specimen",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(0040,0275)[<0>](0040,1001)" : {
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
         "name" : "Requested Procedure ID",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,003a)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Assigning Agency or Department Code Sequence",
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
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
         ]
      },
      "(0088,0200)[<0>](0028,0103)" : [
         {
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7-11b"
            ],
            "entity" : "Image",
            "req" : "1",
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
            "name" : "Pixel Representation",
            "usage" : "M",
            "module" : "General Image"
         },
         {
            "name" : "Pixel Representation",
            "usage" : "M",
            "module" : "Enhanced US Image",
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
            ],
            "mod_tables" : [
               "table_C.8.24.3-1",
               "table_C.7-11b"
            ]
         }
      ],
      "(0010,2293)" : {
         "name" : "Patient Breed Code Sequence",
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
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
            "Zero or more Items shall be included in this sequence.",
            "Required if the patient is an animal."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(fffa,fffa)" : {
         "desc" : [
            "Sequence holding Digital Signatures.",
            "One or more items are permitted in this sequence."
         ],
         "entity" : "Image",
         "req" : "3",
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Digital Signatures Sequence",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a124)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "UID",
         "usage" : "M",
         "module" : "General Series",
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ]
      },
      "(0028,0108)" : {
         "desc" : "The minimum value of all images in this Series.",
         "req" : "3",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series",
         "name" : "Smallest Pixel Value in Series",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0010,2294)[<0>](0010,2296)" : {
         "usage" : "M",
         "module" : "Patient",
         "name" : "Breed Registry Code Sequence",
         "desc" : [
            "Identification of the organization with which an animal is registered.",
            "Only a single Item shall be included in this sequence."
         ],
         "entity" : "Patient",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0008,1200)" : {
         "entity" : "Image",
         "req" : "1C",
         "desc" : [
            "Sequence of items each identifying a Study other than the Study of which this Instance is a part, which Studies contain Instances that are referenced elsewhere in this Instance.",
            "One or more Items shall be included in this sequence.",
            "Required if this Instance references Instances in other Studies."
         ],
         "name" : "Studies Containing Other Referenced Instances Sequence",
         "usage" : "U",
         "module" : "Common Instance Reference",
         "mod_tables" : [
            "table_C.12-8"
         ]
      },
      "(0008,0018)" : {
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
                  "xrefstyle" : "select: labelnumber",
                  "targetptr" : "PS3.4",
                  "targetdoc" : "PS3.4"
               }
            },
            "."
         ],
         "entity" : "Image",
         "req" : "1",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "SOP Instance UID",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0020,9222)[<0>](0020,9165)" : {
         "req" : "1",
         "entity" : "Image",
         "desc" : [
            "Contains the Data Element Tag that is used to identify the Attribute connected with the index. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.17.1"
               }
            },
            " for further explanation."
         ],
         "name" : "Dimension Index Pointer",
         "usage" : "M",
         "module" : "Multi-frame Dimension",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ]
      },
      "(0008,1111)[<0>](0008,1155)" : [
         {
            "name" : "Referenced SOP Instance UID",
            "usage" : "M",
            "module" : "General Series",
            "req" : "1",
            "entity" : "Series",
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-11"
            ]
         },
         {
            "mod_tables" : [
               "table_C.8.24.1-1",
               "table_10-11"
            ],
            "req" : "1",
            "entity" : "Series",
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "name" : "Referenced SOP Instance UID",
            "usage" : "M",
            "module" : "Enhanced US Series"
         }
      ],
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a30a)" : [
         {
            "usage" : "M",
            "module" : "General Series",
            "name" : "Numeric Value",
            "desc" : [
               "Numeric value for this name-value Item. Only a single value shall be present.",
               "Required if Value Type (0040,A040) is NUMERIC."
            ],
            "req" : "1C",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2"
            ]
         },
         {
            "mod_tables" : [
               "table_C.8.24.1-1",
               "table_10-2"
            ],
            "desc" : [
               "Numeric value for this name-value Item. Only a single value shall be present.",
               "Required if Value Type (0040,A040) is NUMERIC."
            ],
            "entity" : "Series",
            "req" : "1C",
            "usage" : "M",
            "module" : "Enhanced US Series",
            "name" : "Numeric Value"
         }
      ],
      "(0100,0420)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "SOP Authorization DateTime",
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "3",
         "entity" : "Image",
         "desc" : "The date and time when the SOP Instance Status (0100,0410) was set to AO."
      },
      "(0008,0051)[<0>](0040,0032)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C",
         "entity" : "Study",
         "usage" : "M",
         "module" : "General Study",
         "name" : "Universal Entity ID"
      },
      "(0008,0096)" : {
         "module" : "General Study",
         "usage" : "M",
         "name" : "Referring Physician Identification Sequence",
         "desc" : [
            "Identification of the patient's referring physician.",
            "Only a single item is permitted in this sequence."
         ],
         "entity" : "Study",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0008,1052)[<0>](0008,0080)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "entity" : "Series",
         "req" : "1C",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "name" : "Institution Name",
         "module" : "General Series",
         "usage" : "M"
      },
      "(0020,9221)" : {
         "name" : "Dimension Organization Sequence",
         "usage" : "M",
         "module" : "Multi-frame Dimension",
         "entity" : "Image",
         "req" : "1",
         "desc" : [
            [
               "Sequence that lists the Dimension Organization UIDs referenced by the containing SOP Instance. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.6.17.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7.6.17-1"
         ]
      },
      "(0018,0012)[<0>](0018,1049)" : {
         "usage" : "C - Required if contrast media was applied. See  for baseline context group ID.",
         "module" : "Enhanced Contrast/Bolus",
         "name" : "Contrast/Bolus Ingredient Concentration",
         "desc" : "Milligrams of active ingredient per milliliter of agent.",
         "req" : "2",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-12b"
         ]
      },
      "(0040,0250)" : {
         "req" : "3",
         "entity" : "Series",
         "desc" : "Date on which the Performed Procedure Step ended.",
         "name" : "Performed Procedure Step End Date",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ]
      },
      "(0018,1802)" : {
         "mod_tables" : [
            "table_C.7-7"
         ],
         "module" : "Synchronization",
         "usage" : "M",
         "name" : "Time Distribution Protocol",
         "desc" : [
            "Method of time distribution used to synchronize this equipment.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "NTP",
                     "Network Time Protocol"
                  ],
                  [
                     "IRIG",
                     "Inter Range Instrumentation Group"
                  ],
                  [
                     "GPS",
                     "Global Positioning System"
                  ],
                  [
                     "SNTP",
                     "Simple Network Time Protocol"
                  ],
                  [
                     "PTP",
                     "IEEE 1588 Precision Time Protocol"
                  ]
               ],
               "title" : "Enumerated Values:"
            }
         ],
         "req" : "3",
         "entity" : "Frame of Reference"
      },
      "(0050,0010)[<0>](0050,0016)" : {
         "mod_tables" : [
            "table_C.7-18"
         ],
         "name" : "Device Diameter",
         "usage" : "U",
         "module" : "Device",
         "req" : "3",
         "entity" : "Image",
         "desc" : [
            "Unit diameter of device. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.6.12.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ]
      },
      "(fffa,fffa)[<0>](0400,0120)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Signature",
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
         "req" : "1",
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0008,1160)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Referenced Frame Number",
         "module" : "Specimen",
         "usage" : "U",
         "req" : "1C",
         "entity" : "Image",
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
      "(0008,1049)[<0>](0008,0082)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "usage" : "M",
         "name" : "Institution Code Sequence",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Study",
         "req" : "1C"
      },
      "(0018,5024)" : {
         "entity" : "Image",
         "req" : "1",
         "desc" : [
            "See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.5.6.1.8",
                  "xrefstyle" : "select: label"
               }
            },
            " for Description."
         ],
         "name" : "Bone Thermal Index",
         "usage" : "M",
         "module" : "Enhanced US Image",
         "mod_tables" : [
            "table_C.8.24.3-1"
         ]
      },
      "(fffa,fffa)[<0>](0400,0310)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Certified Timestamp",
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "3",
         "entity" : "Image",
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
         ]
      },
      "(0008,1052)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Performing Physician Identification Sequence",
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "req" : "3",
         "desc" : [
            "Identification of the physician(s) administering the Series.",
            "One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Performing Physician's Name (0008,1050), if present."
         ]
      },
      "(0008,1110)" : {
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
                     "linkend" : "sect_10.6.1",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ]
         ],
         "req" : "3",
         "entity" : "Study",
         "module" : "General Study",
         "usage" : "M",
         "name" : "Referenced Study Sequence"
      },
      "(0088,0200)[<0>](0028,1101)" : [
         {
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7-11b"
            ],
            "name" : "Red Palette Color Lookup Table Descriptor",
            "module" : "General Image",
            "usage" : "M",
            "entity" : "Image",
            "req" : "1C",
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
            ]
         },
         {
            "entity" : "Image",
            "req" : "1C",
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
            "name" : "Red Palette Color Lookup Table Descriptor",
            "usage" : "M",
            "module" : "Enhanced US Image",
            "mod_tables" : [
               "table_C.8.24.3-1",
               "table_C.7-11b"
            ]
         }
      ],
      "(4ffe,0001)" : {
         "desc" : [
            "A sequence of items that describe the parameters used to calculate a MAC for use in Digital Signatures.",
            "One or more Items shall be included in this sequence."
         ],
         "req" : "3",
         "entity" : "Image",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "MAC Parameters Sequence",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a123)" : {
         "req" : "1C",
         "entity" : "Image",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "name" : "Person Name",
         "usage" : "U",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0008,0051)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Issuer of Accession Number Sequence",
         "module" : "General Study",
         "usage" : "M",
         "req" : "3",
         "entity" : "Study",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this sequence."
         ]
      },
      "(0008,1062)[<0>](0040,1101)" : {
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1",
         "entity" : "Study",
         "usage" : "M",
         "module" : "General Study",
         "name" : "Person Identification Code Sequence",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0088,0200)[<0>](0028,0101)" : [
         {
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7-11b"
            ],
            "entity" : "Image",
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
            "name" : "Bits Stored",
            "usage" : "M",
            "module" : "General Image"
         },
         {
            "entity" : "Image",
            "req" : "1",
            "desc" : [
               "Number of bits stored for each pixel sample. Each sample shall have the same number of bits stored. See ",
               {
                  "attrs" : {
                     "targetdoc" : "PS3.5",
                     "xrefstyle" : "select: labelnumber",
                     "targetptr" : "PS3.5"
                  },
                  "el" : "olink"
               },
               " for further explanation."
            ],
            "name" : "Bits Stored",
            "module" : "Enhanced US Image",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8.24.3-1",
               "table_C.7-11b"
            ]
         }
      ],
      "(0040,0555)[<0>](0040,a163)" : {
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "req" : "1C",
         "entity" : "Image",
         "module" : "Acquisition Context",
         "usage" : "M",
         "name" : "Rational Denominator Value",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ]
      },
      "(0040,0512)" : {
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
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
         "req" : "1",
         "entity" : "Image",
         "module" : "Specimen",
         "usage" : "U",
         "name" : "Container Identifier"
      },
      "(0008,2133)" : {
         "module" : "Enhanced US Image",
         "usage" : "M",
         "name" : "Event Timer Sequence",
         "desc" : [
            "Sequence of time intervals of significance to this image. Each item describes one time interval either beginning or ending at Acquisition DateTime (0008,002A).",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8.24.3-1"
         ]
      },
      "(0400,0561)[<0>](0400,0564)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The source that provided the SOP Instance prior to the removal or replacement of the values. For example, this might be the Institution from which imported SOP Instances were received.",
         "entity" : "Image",
         "req" : "2",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Source of Previous Values"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a121)" : {
         "name" : "Date",
         "module" : "Specimen",
         "usage" : "U",
         "entity" : "Image",
         "req" : "1C",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0008,1072)[<0>](0040,1103)" : {
         "name" : "Person's Telephone Numbers",
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "req" : "3",
         "desc" : "Person's telephone number(s)",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a043)" : [
         {
            "usage" : "M",
            "module" : "General Series",
            "name" : "Concept Name Code Sequence",
            "desc" : [
               "Coded concept name of this name-value Item.",
               "Only a single Item shall be included in this Sequence."
            ],
            "entity" : "Series",
            "req" : "1",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2"
            ]
         },
         {
            "req" : "1",
            "entity" : "Series",
            "desc" : [
               "Coded concept name of this name-value Item.",
               "Only a single Item shall be included in this Sequence."
            ],
            "name" : "Concept Name Code Sequence",
            "usage" : "M",
            "module" : "Enhanced US Series",
            "mod_tables" : [
               "table_C.8.24.1-1",
               "table_10-2"
            ]
         }
      ],
      "(0028,0302)" : [
         {
            "mod_tables" : [
               "table_C.7-9"
            ],
            "name" : "Recognizable Visual Features",
            "module" : "General Image",
            "usage" : "M",
            "entity" : "Image",
            "req" : "3",
            "desc" : [
               "Indicates whether or not the image contains sufficiently recognizable visual features to allow the image or a reconstruction from a set of images to identify the patient.",
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
               "If this Attribute is absent, then the image may or may not contain recognizable visual features."
            ]
         },
         {
            "mod_tables" : [
               "table_C.8.24.3-1"
            ],
            "name" : "Recognizable Visual Features",
            "usage" : "M",
            "module" : "Enhanced US Image",
            "req" : "3",
            "entity" : "Image",
            "desc" : [
               "Indicates whether or not the image contains sufficiently recognizable visual features to allow the image or a reconstruction from a set of images to identify the patient.",
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
               "If this Attribute is absent, then the image may or may not contain recognizable visual features."
            ]
         }
      ],
      "(0008,0022)" : {
         "desc" : "The date the acquisition of data that resulted in this image started",
         "entity" : "Image",
         "req" : "3",
         "usage" : "M",
         "module" : "General Image",
         "name" : "Acquisition Date",
         "mod_tables" : [
            "table_C.7-9"
         ]
      },
      "(0040,9096)[<0>](0040,9224)" : {
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "name" : "Real World Value Intercept",
         "usage" : "M",
         "module" : "General Image",
         "req" : "1C",
         "entity" : "Image",
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
         ]
      },
      "(0018,9803)" : {
         "mod_tables" : [
            "table_C.8.24.5-1"
         ],
         "desc" : [
            "List of excluded intervals.",
            "One or more items shall be included in this sequence.",
            "Required if one or more intervals was excluded."
         ],
         "entity" : "Image",
         "req" : "1C",
         "module" : "Excluded Intervals",
         "usage" : "U",
         "name" : "Excluded Intervals Sequence"
      },
      "(0028,1401)[<0>](0028,3010)[<1>](0028,3006)" : {
         "mod_tables" : [
            "table_C.7.6.23-1",
            "table_C.11-2b"
         ],
         "entity" : "Image",
         "req" : "1",
         "desc" : "LUT Data in this Sequence.",
         "name" : "LUT Data",
         "module" : "Enhanced Palette Color Lookup Table",
         "usage" : "U"
      },
      "(0010,0024)[<0>](0040,0033)" : {
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
         "req" : "1C",
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0038,0014)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Issuer of Admission ID Sequence",
         "usage" : "U",
         "module" : "Patient Study",
         "entity" : "Study",
         "req" : "3",
         "desc" : [
            "Identifier of the Assigning Authority that issued Admission ID (0038,0010).",
            "Only a single Item is permitted in this sequence."
         ]
      },
      "(0008,1070)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : "Name(s) of the operator(s) supporting the Series.",
         "entity" : "Series",
         "req" : "3",
         "module" : "General Series",
         "usage" : "M",
         "name" : "Operators' Name"
      },
      "(0010,0024)[<0>](0040,003a)" : {
         "usage" : "M",
         "module" : "Patient",
         "name" : "Assigning Agency or Department Code Sequence",
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
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0038,0060)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "usage" : "U",
         "name" : "Service Episode ID",
         "desc" : "Identifier of the Service Episode as assigned by the healthcare provider",
         "req" : "3",
         "entity" : "Study"
      },
      "(0040,0555)[<0>](0040,a161)" : {
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "entity" : "Image",
         "req" : "1C",
         "usage" : "M",
         "module" : "Acquisition Context",
         "name" : "Floating Point Value"
      },
      "(0008,9121)" : {
         "usage" : "M",
         "module" : "Enhanced US Image",
         "name" : "Referenced Raw Data Sequence",
         "desc" : [
            "A sequence that identifies the set of Raw Data SOP Class/Instance pairs of the raw data that were used to derive this Image.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Image",
         "req" : "3",
         "mod_tables" : [
            "table_C.8.24.3-1"
         ]
      },
      "(0028,0106)" : {
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "name" : "Smallest Image Pixel Value",
         "module" : "Image Pixel",
         "usage" : "M",
         "req" : "3",
         "entity" : "Image",
         "desc" : "The minimum actual pixel value encountered in this image."
      },
      "(0040,0520)[<0>](0050,001c)" : {
         "name" : "Container Component Length",
         "usage" : "U",
         "module" : "Specimen",
         "entity" : "Image",
         "req" : "3",
         "desc" : "Length in mm of container component.",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      "(0028,1401)[<0>](0028,1055)" : {
         "mod_tables" : [
            "table_C.7.6.23-1",
            "table_C.11-2b"
         ],
         "usage" : "U",
         "module" : "Enhanced Palette Color Lookup Table",
         "name" : "Window Center & Width Explanation",
         "desc" : "Free form explanation of the meaning of the Window Center and Width. Multiple values correspond to multiple Window Center and Width values.",
         "req" : "3",
         "entity" : "Image"
      },
      "(0018,0012)[<0>](0018,1041)" : {
         "name" : "Contrast/Bolus Volume",
         "usage" : "C - Required if contrast media was applied. See  for baseline context group ID.",
         "module" : "Enhanced Contrast/Bolus",
         "entity" : "Image",
         "req" : "2",
         "desc" : "Total volume administered in milliliters of diluted contrast agent.",
         "mod_tables" : [
            "table_C.7-12b"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a168)" : [
         {
            "name" : "Concept Code Sequence",
            "module" : "General Series",
            "usage" : "M",
            "req" : "1C",
            "entity" : "Series",
            "desc" : [
               "Coded concept value of this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is CODE."
            ],
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2"
            ]
         },
         {
            "mod_tables" : [
               "table_C.8.24.1-1",
               "table_10-2"
            ],
            "name" : "Concept Code Sequence",
            "usage" : "M",
            "module" : "Enhanced US Series",
            "entity" : "Series",
            "req" : "1C",
            "desc" : [
               "Coded concept value of this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is CODE."
            ]
         }
      ],
      "(0008,0110)[<0>](0008,0114)" : {
         "name" : "Coding Scheme External ID",
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "2C",
         "entity" : "Image",
         "desc" : "The coding scheme identifier as defined in an external registry. Required if coding scheme is registered and Coding Scheme UID (0008,010C) is not present.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0010,0030)" : {
         "module" : "Patient",
         "usage" : "M",
         "name" : "Patient's Birth Date",
         "desc" : "Birth date of the patient.",
         "entity" : "Patient",
         "req" : "2",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0038,0014)[<0>](0040,0032)" : {
         "usage" : "U",
         "module" : "Patient Study",
         "name" : "Universal Entity ID",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "Study",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ]
      },
      "(0008,0051)[<0>](0040,0033)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "name" : "Universal Entity ID Type",
         "usage" : "M",
         "module" : "General Study",
         "req" : "1C",
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
         ]
      },
      "(0088,0200)[<0>](0028,0006)" : [
         {
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7-11b"
            ],
            "name" : "Planar Configuration",
            "usage" : "M",
            "module" : "General Image",
            "entity" : "Image",
            "req" : "1C",
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
         {
            "entity" : "Image",
            "req" : "1C",
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
            "name" : "Planar Configuration",
            "usage" : "M",
            "module" : "Enhanced US Image",
            "mod_tables" : [
               "table_C.8.24.3-1",
               "table_C.7-11b"
            ]
         }
      ],
      "(0050,0010)" : {
         "mod_tables" : [
            "table_C.7-18"
         ],
         "usage" : "U",
         "module" : "Device",
         "name" : "Device Sequence",
         "desc" : [
            "A sequence of items describing devices used that may be visible in the image.",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1",
         "entity" : "Image"
      },
      "(0028,2110)" : [
         {
            "mod_tables" : [
               "table_C.7-9"
            ],
            "name" : "Lossy Image Compression",
            "module" : "General Image",
            "usage" : "M",
            "req" : "3",
            "entity" : "Image",
            "desc" : [
               "Specifies whether an Image has undergone lossy compression (at a point in its lifetime).",
               {
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
                  "title" : "Enumerated Values:",
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
            ]
         },
         {
            "mod_tables" : [
               "table_C.8.24.3-1"
            ],
            "module" : "Enhanced US Image",
            "usage" : "M",
            "name" : "Lossy Image Compression",
            "desc" : [
               "Specifies whether an Image has undergone lossy compression (at a point in its lifetime).",
               {
                  "type" : "variablelist",
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
                  ]
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
            "req" : "1"
         }
      ],
      "(0040,0513)" : {
         "req" : "2",
         "entity" : "Image",
         "desc" : [
            "Organization that assigned the Container Identifier.",
            "Zero or one Item shall be included in this sequence."
         ],
         "name" : "Issuer of the Container Identifier Sequence",
         "module" : "Specimen",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      "(0010,2203)" : {
         "entity" : "Study",
         "req" : "2C",
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
                     "content" : [
                        "If this Attribute is present but has no value then the status is unknown."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            },
            "Required if patient is an animal. May be present otherwise."
         ],
         "name" : "Patient's Sex Neutered",
         "module" : "Patient Study",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0040,0275)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "module" : "General Series",
         "name" : "Request Attributes Sequence",
         "desc" : [
            "Sequence that contains attributes from the Imaging Service Request.",
            "One or more Items are permitted in this sequence."
         ],
         "entity" : "Series",
         "req" : "3"
      },
      "(0028,0103)" : [
         {
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "entity" : "Image",
            "req" : "1",
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
            "name" : "Pixel Representation",
            "usage" : "M",
            "module" : "Image Pixel"
         },
         {
            "mod_tables" : [
               "table_C.8.24.3-1"
            ],
            "name" : "Pixel Representation",
            "usage" : "M",
            "module" : "Enhanced US Image",
            "entity" : "Image",
            "req" : "1",
            "desc" : [
               "Data representation of pixel samples. The constrained Enumerated Value implies the VR of all Palette Color Lookup Table Descriptors be US (and not SS).",
               {
                  "title" : "Enumerated Values:",
                  "list" : [
                     [
                        "0000H",
                        "unsigned integer"
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
                        "linkend" : "sect_C.8.24.3.1"
                     }
                  },
                  " for specialization."
               ]
            ]
         }
      ],
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a120)" : {
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "module" : "General Series",
         "name" : "DateTime",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0012,0051)" : {
         "module" : "Clinical Trial Study",
         "usage" : "U",
         "name" : "Clinical Trial Time Point Description",
         "desc" : [
            "A description of a set of one or more studies that are grouped together to represent a clinical time point or submission in a clinical trial. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.2.3.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "entity" : "Study",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-4b"
         ]
      },
      "(0008,1072)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series",
         "req" : "3",
         "desc" : [
            "Identification of the operator(s) supporting the Series.",
            "One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Operators' Name (0008,1070), if present."
         ],
         "name" : "Operator Identification Sequence",
         "usage" : "M",
         "module" : "General Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1150)" : {
         "entity" : "Series",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(0008,0020)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "Date the Study started.",
         "entity" : "Study",
         "req" : "2",
         "usage" : "M",
         "module" : "General Study",
         "name" : "Study Date"
      },
      "(0010,2160)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "req" : "3",
         "desc" : "Ethnic group or race of the patient.",
         "name" : "Ethnic Group",
         "module" : "Patient",
         "usage" : "M"
      },
      "(fffa,fffa)[<0>](0400,0105)" : {
         "module" : "SOP Common",
         "usage" : "M",
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
                     "el" : "para"
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ],
         "entity" : "Image",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1155)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0062,000b)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "usage" : "U",
         "name" : "Referenced Segment Number",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "entity" : "Image",
         "req" : "1C"
      },
      "(0040,0275)[<0>](0032,1060)" : {
         "entity" : "Series",
         "req" : "3",
         "desc" : "Institution-generated administrative description or classification of Requested Procedure.",
         "name" : "Requested Procedure Description",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ]
      },
      "(0028,1401)[<0>](0028,1402)" : {
         "mod_tables" : [
            "table_C.7.6.23-1"
         ],
         "desc" : [
            "The data path to use for this data type in the Enhanced Blending and Display Pipeline.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "PRIMARY_PVALUES",
                     null
                  ],
                  [
                     "PRIMARY_SINGLE",
                     null
                  ],
                  [
                     "SECONDARY_SINGLE",
                     null
                  ],
                  [
                     "SECONDARY_HIGH",
                     null
                  ],
                  [
                     "SECONDARY_LOW",
                     null
                  ]
               ],
               "title" : "Enumerated Values:"
            },
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.6.23.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for usage."
            ]
         ],
         "entity" : "Image",
         "req" : "1",
         "module" : "Enhanced Palette Color Lookup Table",
         "usage" : "U",
         "name" : "Data Path Assignment"
      },
      "(0028,0034)" : {
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
         "entity" : "Image",
         "req" : "1C",
         "usage" : "M",
         "module" : "Image Pixel",
         "name" : "Pixel Aspect Ratio",
         "mod_tables" : [
            "table_C.7-11b"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a121)" : {
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "req" : "1C",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series",
         "name" : "Date",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0008,2124)" : {
         "name" : "Number of Stages",
         "usage" : "M",
         "module" : "Enhanced US Image",
         "req" : "1C",
         "entity" : "Image",
         "desc" : [
            "Number of stages in this protocol.",
            "Required if Performed Protocol Type (0040,0261) is present with value STAGED."
         ],
         "mod_tables" : [
            "table_C.8.24.3-1"
         ]
      },
      "(0028,0011)" : {
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "desc" : "Number of columns in the image",
         "entity" : "Image",
         "req" : "1",
         "module" : "Image Pixel",
         "usage" : "M",
         "name" : "Columns"
      },
      "(0040,0555)[<0>](0040,a122)" : {
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "name" : "Time",
         "usage" : "M",
         "module" : "Acquisition Context",
         "req" : "1C",
         "entity" : "Image",
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
         ]
      },
      "(0008,1110)[<0>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "module" : "General Study",
         "req" : "1",
         "entity" : "Study",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ]
      },
      "(0008,1164)[<0>](0008,1162)" : {
         "mod_tables" : [
            "table_C.12-9"
         ],
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "module" : "Frame Extraction",
         "name" : "Calculated Frame List",
         "desc" : [
            "A list of Frames that were extracted in the form of one or more triplets",
            "Required if object extraction is based on a Frame Level Retrieve using the Calculated Frame List (0008,1162) attribute.",
            [
               "See ",
               {
                  "attrs" : {
                     "targetptr" : "PS3.4",
                     "xrefstyle" : "select: labelnumber",
                     "targetdoc" : "PS3.4"
                  },
                  "el" : "olink"
               },
               " \"Instance and Frame Level Retrieve SOP Classes\""
            ]
         ],
         "req" : "1C",
         "entity" : "Image"
      },
      "(0018,9085)" : {
         "name" : "Cardiac Signal Source",
         "usage" : "C - Required if cardiac synchronization was applied.",
         "module" : "Cardiac Synchronization",
         "entity" : "Image",
         "req" : "1C",
         "desc" : [
            "Cardiac Signal Source.",
            {
               "title" : "Defined Terms:",
               "list" : [
                  [
                     "ECG",
                     "electrocardiogram"
                  ],
                  [
                     "VCG",
                     "vector cardiogram"
                  ],
                  [
                     "PP",
                     "peripheral pulse"
                  ],
                  [
                     "MR",
                     "magnetic resonance, i.e., M-mode or cardiac navigator"
                  ]
               ],
               "type" : "variablelist"
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and Cardiac Synchronization Technique (0018,9037) equals other than NONE.",
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and Cardiac Synchronization Technique (0018,9037) equals other than NONE."
         ],
         "mod_tables" : [
            "table_C.7.6.18-1"
         ]
      },
      "(0012,0042)" : {
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "name" : "Clinical Trial Subject Reading ID",
         "usage" : "U",
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
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
         ]
      },
      "(0028,0004)" : [
         {
            "name" : "Photometric Interpretation",
            "module" : "Image Pixel",
            "usage" : "M",
            "entity" : "Image",
            "req" : "1",
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
            "mod_tables" : [
               "table_C.7-11b"
            ]
         },
         {
            "name" : "Photometric Interpretation",
            "usage" : "M",
            "module" : "Enhanced US Image",
            "entity" : "Image",
            "req" : "1",
            "desc" : [
               "Specifies the intended interpretation of the pixel data.",
               {
                  "title" : "Enumerated Values:",
                  "list" : [
                     [
                        "MONOCHROME2",
                        null
                     ]
                  ],
                  "type" : "variablelist"
               }
            ],
            "mod_tables" : [
               "table_C.8.24.3-1"
            ]
         }
      ],
      "(0018,3101)" : {
         "entity" : "Image",
         "req" : "1C",
         "desc" : [
            "Required if IVUS Acquisition (0018,3100) value is MOTOR_PULLBACK. Specified in units of mm/sec.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.5.6.1.22",
                     "xrefstyle" : "select: label"
                  }
               }
            ]
         ],
         "name" : "IVUS Pullback Rate",
         "module" : "IVUS Image",
         "usage" : "C - Required if Modality = IVUS",
         "mod_tables" : [
            "table_C.8.24.4-1"
         ]
      },
      "(0400,0500)[<0>](0400,0510)" : {
         "desc" : "Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
         "entity" : "Image",
         "req" : "1",
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Encrypted Content Transfer Syntax UID",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a160)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Text Value",
         "usage" : "M",
         "module" : "General Series",
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ]
      },
      "(0054,0220)[<0>](0054,0222)" : {
         "desc" : [
            "View Modifier.",
            "Required if needed to fully specify the View.",
            "Zero or more items shall be included in this sequence."
         ],
         "entity" : "Image",
         "req" : "2C",
         "usage" : "M",
         "module" : "Enhanced US Image",
         "name" : "View Modifier Code Sequence",
         "mod_tables" : [
            "table_C.8.24.3-1",
            "table_10-24"
         ]
      },
      "(0050,0010)[<0>](0018,1003)" : {
         "mod_tables" : [
            "table_C.7-18"
         ],
         "desc" : "User-supplied identifier for the device",
         "req" : "3",
         "entity" : "Image",
         "usage" : "U",
         "module" : "Device",
         "name" : "Device ID"
      },
      "(0020,9308)" : {
         "mod_tables" : [
            "table_C.8.24.2-1"
         ],
         "usage" : "M",
         "module" : "Ultrasound Frame of Reference",
         "name" : "Apex Position",
         "desc" : [
            [
               "Position of the apex (or phase center) of the acquisition geometry, encoded as x",
               {
                  "content" : [
                     "A"
                  ],
                  "el" : "subscript"
               },
               ", y",
               {
                  "el" : "subscript",
                  "content" : [
                     "A"
                  ]
               },
               ", and z",
               {
                  "content" : [
                     "A"
                  ],
                  "el" : "subscript"
               },
               " in mm units in the Volume Frame of Reference. The apex (x",
               {
                  "content" : [
                     "A"
                  ],
                  "el" : "subscript"
               },
               ", y",
               {
                  "el" : "subscript",
                  "content" : [
                     "A"
                  ]
               },
               ", z",
               {
                  "content" : [
                     "A"
                  ],
                  "el" : "subscript"
               },
               ") may be located in the volume or exterior to it."
            ],
            "Required if value of Ultrasound Acquisition Geometry (0020,9307) is APEX."
         ],
         "req" : "1C",
         "entity" : "Frame of Reference"
      },
      "(0010,0040)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient's Sex",
         "module" : "Patient",
         "usage" : "M",
         "req" : "2",
         "entity" : "Patient",
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
         ]
      },
      "(0018,a001)[<0>](0018,a003)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Contribution Description",
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "3",
         "entity" : "Image",
         "desc" : "Description of the contribution the equipment made to the composite instance."
      },
      "(0008,1140)[<0>](0040,a170)" : [
         {
            "mod_tables" : [
               "table_C.7-9"
            ],
            "req" : "3",
            "entity" : "Image",
            "desc" : [
               "Describes the purpose for which the reference is made.",
               "Only a single Item is permitted in this sequence."
            ],
            "name" : "Purpose of Reference Code Sequence",
            "module" : "General Image",
            "usage" : "M"
         },
         {
            "req" : "1",
            "entity" : "Image",
            "desc" : [
               "Describes the purpose for which the reference is made.",
               "Only a single item shall be included in this sequence."
            ],
            "name" : "Purpose of Reference Code Sequence",
            "usage" : "M",
            "module" : "Enhanced US Image",
            "mod_tables" : [
               "table_C.8.24.3-1"
            ]
         }
      ],
      "(0008,1140)[<0>](0008,1150)" : [
         {
            "name" : "Referenced SOP Class UID",
            "module" : "General Image",
            "usage" : "M",
            "entity" : "Image",
            "req" : "1",
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "mod_tables" : [
               "table_C.7-9",
               "table_10-3",
               "table_10-11"
            ]
         },
         {
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "entity" : "Image",
            "req" : "1",
            "usage" : "M",
            "module" : "Enhanced US Image",
            "name" : "Referenced SOP Class UID",
            "mod_tables" : [
               "table_C.8.24.3-1",
               "table_10-3",
               "table_10-11"
            ]
         }
      ],
      "(0018,a001)[<0>](0008,1010)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Station Name",
         "desc" : "User defined name identifying the machine that contributed to the composite instance.",
         "req" : "3",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
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
                                    "The characteristics of the de-identifying equipment and/or the responsible operator of that equipment may be recorded as an additional item of the Contributing Equipment Sequence (0018,A001) in the SOP Common Module. De-identifying equipment may use a Purpose of Reference of (109104,DCM,\"De-identifying Equipment\")."
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
            },
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method Code Sequence (0012,0064) is not present. May be present otherwise."
         ],
         "entity" : "Patient",
         "req" : "1C",
         "module" : "Patient",
         "usage" : "M",
         "name" : "De-identification Method",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a040)" : [
         {
            "usage" : "M",
            "module" : "General Series",
            "name" : "Value Type",
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
            "entity" : "Series",
            "req" : "1",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2"
            ]
         },
         {
            "mod_tables" : [
               "table_C.8.24.1-1",
               "table_10-2"
            ],
            "usage" : "M",
            "module" : "Enhanced US Series",
            "name" : "Value Type",
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
            ],
            "entity" : "Series",
            "req" : "1"
         }
      ],
      "(0018,0012)[<0>](0018,9340)[<1>](0018,1043)" : {
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "name" : "Contrast/Bolus Stop Time",
         "usage" : "C - Required if contrast media was applied. See  for baseline context group ID.",
         "module" : "Enhanced Contrast/Bolus",
         "req" : "3",
         "entity" : "Image",
         "desc" : "Time of end of administration."
      },
      "(0018,a001)[<0>](0008,0081)" : {
         "desc" : "Address of the institution where the equipment that contributed to the composite instance is located.",
         "req" : "3",
         "entity" : "Image",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Institution Address",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0012,0020)" : {
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
         "entity" : "Patient",
         "req" : "1",
         "module" : "Clinical Trial Subject",
         "usage" : "U",
         "name" : "Clinical Trial Protocol ID",
         "mod_tables" : [
            "table_C.7-2b"
         ]
      },
      "(0008,0080)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "desc" : "Institution where the equipment that produced the composite instances is located.",
         "req" : "3",
         "entity" : "Equipment",
         "usage" : "M",
         "module" : "General Equipment",
         "name" : "Institution Name"
      },
      "(0008,2228)[<0>](0008,2230)" : {
         "desc" : [
            "Sequence of Items that modifies the primary anatomic structure of interest in this Instance.",
            "One or more Items are permitted in this sequence."
         ],
         "entity" : "Image",
         "req" : "3",
         "module" : "Enhanced US Image",
         "usage" : "M",
         "name" : "Primary Anatomic Structure Modifier Sequence",
         "mod_tables" : [
            "table_C.8.24.3-1",
            "table_10-5",
            "table_10-8"
         ]
      },
      "(0038,0064)[<0>](0040,0031)" : {
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "entity" : "Study",
         "req" : "1C",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "name" : "Local Namespace Entity ID",
         "usage" : "U",
         "module" : "Patient Study"
      },
      "(0038,0014)[<0>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "usage" : "U",
         "module" : "Patient Study",
         "entity" : "Study",
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
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0032)" : {
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
         "req" : "3",
         "entity" : "Patient",
         "usage" : "M",
         "module" : "Patient",
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a043)" : [
         {
            "usage" : "M",
            "module" : "General Series",
            "name" : "Concept Name Code Sequence",
            "desc" : [
               "Coded concept name of this name-value Item.",
               "Only a single Item shall be included in this Sequence."
            ],
            "entity" : "Series",
            "req" : "1",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2"
            ]
         },
         {
            "mod_tables" : [
               "table_C.8.24.1-1",
               "table_10-2"
            ],
            "module" : "Enhanced US Series",
            "usage" : "M",
            "name" : "Concept Name Code Sequence",
            "desc" : [
               "Coded concept name of this name-value Item.",
               "Only a single Item shall be included in this Sequence."
            ],
            "entity" : "Series",
            "req" : "1"
         }
      ],
      "(0018,a001)[<0>](0008,1040)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Institutional Department Name",
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Image",
         "req" : "3",
         "desc" : "Department in the institution where the equipment that contributed to the composite instance is located."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a120)" : [
         {
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2"
            ],
            "req" : "1C",
            "entity" : "Series",
            "desc" : [
               "DateTime value for this name-value Item.",
               "Required if Value Type (0040,A040) is DATETIME."
            ],
            "name" : "DateTime",
            "module" : "General Series",
            "usage" : "M"
         },
         {
            "mod_tables" : [
               "table_C.8.24.1-1",
               "table_10-2"
            ],
            "usage" : "M",
            "module" : "Enhanced US Series",
            "name" : "DateTime",
            "desc" : [
               "DateTime value for this name-value Item.",
               "Required if Value Type (0040,A040) is DATETIME."
            ],
            "entity" : "Series",
            "req" : "1C"
         }
      ],
      "(0008,1250)[<0>](0040,a170)" : {
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "Zero or more Items shall be included in this sequence.",
            "When absent, implies that the reason for the reference is unknown."
         ],
         "entity" : "Series",
         "req" : "2",
         "module" : "General Series",
         "usage" : "M",
         "name" : "Purpose of Reference Code Sequence",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0040,0515)[<0>](0040,0512)" : {
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Container Identifier",
         "usage" : "U",
         "module" : "Specimen",
         "entity" : "Image",
         "req" : "1",
         "desc" : "The identifier for the container that contains the specimen(s) being imaged."
      },
      "(0020,000e)" : {
         "module" : "General Series",
         "usage" : "M",
         "name" : "Series Instance UID",
         "desc" : "Unique identifier of the Series.",
         "entity" : "Series",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0040,0518)" : {
         "req" : "2",
         "entity" : "Image",
         "desc" : [
            "Type of container that contains the specimen(s) being imaged.",
            "Zero or one Item shall be included in this sequence."
         ],
         "name" : "Container Type Code Sequence",
         "module" : "Specimen",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      "(0018,1086)" : {
         "name" : "Skip Beats",
         "usage" : "C - Required if cardiac synchronization was applied.",
         "module" : "Cardiac Synchronization",
         "entity" : "Image",
         "req" : "3",
         "desc" : "Number of beats prescribed to be skipped after each detected arrhythmia.",
         "mod_tables" : [
            "table_C.7.6.18-1"
         ]
      },
      "(0008,0096)[<0>](0008,0080)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "req" : "1C",
         "entity" : "Study",
         "module" : "General Study",
         "usage" : "M",
         "name" : "Institution Name"
      },
      "(0018,a001)[<0>](0008,1072)" : {
         "name" : "Operator Identification Sequence",
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "3",
         "entity" : "Image",
         "desc" : [
            "Identification of the operator(s) of the contributing equipment.",
            "One or more items are permitted in this sequence.",
            "The number and order of Items shall correspond to the number and order of values of Operators' Name (0008,1070), if present."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0400,0561)[<0>](0400,0565)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
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
         "name" : "Reason for the Attribute Modification",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0028,1401)[<0>](0028,3010)" : {
         "mod_tables" : [
            "table_C.7.6.23-1",
            "table_C.11-2b"
         ],
         "desc" : [
            "Defines a sequence of VOI LUTs.",
            "One or more Items shall be included in this sequence.",
            "Required if Window Center (0028,1050) is not present. May be present otherwise."
         ],
         "req" : "1C",
         "entity" : "Image",
         "usage" : "U",
         "module" : "Enhanced Palette Color Lookup Table",
         "name" : "VOI LUT Sequence"
      },
      "(0088,0200)[<0>](0028,1203)" : [
         {
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7-11b"
            ],
            "desc" : [
               "Blue Palette Color Lookup Table Data. Required if Photometric Interpretation (0028,0004) has a value of PALETTE COLOR or Pixel Presentation (0008,9205) at the image level equals COLOR or MIXED. See ",
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
            "req" : "1C",
            "module" : "General Image",
            "usage" : "M",
            "name" : "Blue Palette Color Lookup Table Data"
         },
         {
            "mod_tables" : [
               "table_C.8.24.3-1",
               "table_C.7-11b"
            ],
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
            "req" : "1C",
            "entity" : "Image",
            "module" : "Enhanced US Image",
            "usage" : "M",
            "name" : "Blue Palette Color Lookup Table Data"
         }
      ],
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a163)" : [
         {
            "desc" : [
               "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Rational Numerator Value (0040,A162) is present."
            ],
            "req" : "1C",
            "entity" : "Series",
            "usage" : "M",
            "module" : "General Series",
            "name" : "Rational Denominator Value",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2"
            ]
         },
         {
            "mod_tables" : [
               "table_C.8.24.1-1",
               "table_10-2"
            ],
            "usage" : "M",
            "module" : "Enhanced US Series",
            "name" : "Rational Denominator Value",
            "desc" : [
               "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Rational Numerator Value (0040,A162) is present."
            ],
            "entity" : "Series",
            "req" : "1C"
         }
      ],
      "(0020,9172)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Conversion Source Attributes Sequence",
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Image",
         "desc" : [
            "The set of images or other composite SOP Instances that were converted to this instance.",
            "If this instance was converted from a specific frame in the source instance, the reference shall include the Frame Number.",
            "One or more Items shall be included in this sequence.",
            "Required if this instance was created by conversion, and Conversion Source Attributes Sequence (0020,9172) is not present in an Item of Shared Functional Groups Sequence (5200,9229) or Per-Frame Functional Groups Sequence (5200,9230)."
         ]
      },
      "(0050,0010)[<0>](0050,0020)" : {
         "mod_tables" : [
            "table_C.7-18"
         ],
         "usage" : "U",
         "module" : "Device",
         "name" : "Device Description",
         "desc" : "Further description in free form text describing the device.",
         "entity" : "Image",
         "req" : "3"
      },
      "(0028,1401)[<0>](0028,1056)" : {
         "entity" : "Image",
         "req" : "3",
         "desc" : [
            "Describes a VOI LUT function to apply to the values of Window Center (0028,1050) and Window Width (0028,1051).",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.11.2.1.3",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            {
               "list" : [
                  [
                     "LINEAR",
                     null
                  ],
                  [
                     "SIGMOID",
                     null
                  ]
               ],
               "title" : "Defined Terms:",
               "type" : "variablelist"
            },
            [
               "When this attribute is not present, the interpretation of the values of Window Center (0028,1050) and Window Width (0028,1051) is linear as in ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.11.2.1.2",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ]
         ],
         "name" : "VOI LUT Function",
         "usage" : "U",
         "module" : "Enhanced Palette Color Lookup Table",
         "mod_tables" : [
            "table_C.7.6.23-1",
            "table_C.11-2b"
         ]
      },
      "(0040,0560)[<0>](0040,0620)" : {
         "desc" : [
            [
               "Sequence of Content Items identifying the location of the specimen in the container and/or in the image. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.22.1.4"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "One or more Items shall be included in this sequence.",
            "Required if multiple specimens present in the image. May be present otherwise."
         ],
         "entity" : "Image",
         "req" : "1C",
         "usage" : "U",
         "module" : "Specimen",
         "name" : "Specimen Localization Content Item Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      "(0040,0520)[<0>](0050,001d)" : {
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U",
         "module" : "Specimen",
         "name" : "Container Component Diameter",
         "desc" : "Diameter in mm of container component for cylindrical or circular components.",
         "req" : "3",
         "entity" : "Image"
      },
      "(0010,2201)" : {
         "usage" : "M",
         "module" : "Patient",
         "name" : "Patient Species Description",
         "desc" : [
            "The species of the patient.",
            "Required if the patient is an animal and if Patient Species Code Sequence (0010,2202) is not present. May be present otherwise."
         ],
         "entity" : "Patient",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0008,0110)[<0>](0008,0115)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "req" : "3",
         "desc" : "The coding scheme full common name",
         "name" : "Coding Scheme Name",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0040,9096)[<0>](0040,9210)" : {
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "entity" : "Image",
         "req" : "1",
         "desc" : "Label that is used to identify the transformation of this Item.",
         "name" : "LUT Label",
         "usage" : "M",
         "module" : "General Image"
      },
      "(0038,0014)[<0>](0040,0031)" : {
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "Study",
         "req" : "1C",
         "module" : "Patient Study",
         "usage" : "U",
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0008,1155)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ],
         "entity" : "Image",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "module" : "Specimen",
         "usage" : "U"
      },
      "(0008,0081)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "desc" : "Mailing address of the institution where the equipment that produced the composite instances is located.",
         "req" : "3",
         "entity" : "Equipment",
         "usage" : "M",
         "module" : "General Equipment",
         "name" : "Institution Address"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)" : {
         "module" : "General Series",
         "usage" : "M",
         "name" : "Protocol Context Sequence",
         "desc" : "Sequence that specifies the context for the Scheduled Protocol Code Sequence Item. One or more Items are permitted in this sequence.",
         "req" : "3",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ]
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
         "entity" : "Patient",
         "req" : "3",
         "module" : "Patient",
         "usage" : "M",
         "name" : "Assigning Facility Sequence"
      },
      "(0040,0560)[<0>](0040,0551)" : {
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "usage" : "U",
         "name" : "Specimen Identifier",
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
                  "attrs" : {
                     "linkend" : "sect_C.7.6.22.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "If a single specimen is present in a container, the value of the Specimen Identifier and the value of the Container Identifier are typically the same."
         ],
         "entity" : "Image",
         "req" : "1"
      },
      "(0040,0560)[<0>](0040,0562)[<1>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "usage" : "U",
         "module" : "Specimen",
         "req" : "1C",
         "entity" : "Image",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ]
      },
      "(0008,1090)" : [
         {
            "module" : "General Equipment",
            "usage" : "M",
            "name" : "Manufacturer's Model Name",
            "desc" : "Manufacturer's model name of the equipment that produced the composite instances.",
            "entity" : "Equipment",
            "req" : "3",
            "mod_tables" : [
               "table_C.7-8"
            ]
         },
         {
            "mod_tables" : [
               "table_C.7-8b"
            ],
            "desc" : "Manufacturer's model name of the equipment that produced the composite instances.",
            "entity" : "Equipment",
            "req" : "1",
            "usage" : "M",
            "module" : "Enhanced General Equipment",
            "name" : "Manufacturer's Model Name"
         }
      ],
      "(0028,0301)" : [
         {
            "name" : "Burned In Annotation",
            "usage" : "M",
            "module" : "General Image",
            "entity" : "Image",
            "req" : "3",
            "desc" : [
               "Indicates whether or not image contains sufficient burned in annotation to identify the patient and date the image was acquired.",
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
               "If this Attribute is absent, then the image may or may not contain burned in annotation."
            ],
            "mod_tables" : [
               "table_C.7-9"
            ]
         },
         {
            "req" : "1",
            "entity" : "Image",
            "desc" : [
               "Indicates whether or not image contains sufficient burned in annotation to identify the patient and date the image was acquired.",
               {
                  "title" : "Enumerated Values:",
                  "list" : [
                     [
                        "NO",
                        null
                     ]
                  ],
                  "type" : "variablelist"
               }
            ],
            "name" : "Burned In Annotation",
            "usage" : "M",
            "module" : "Enhanced US Image",
            "mod_tables" : [
               "table_C.8.24.3-1"
            ]
         }
      ],
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0033)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "module" : "Patient",
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
                     "linkend" : "sect_10.14",
                     "xrefstyle" : "select: label"
                  }
               },
               " for Defined Terms."
            ]
         ],
         "entity" : "Patient",
         "req" : "1C"
      },
      "(0040,9096)[<0>](0040,9212)" : {
         "usage" : "M",
         "module" : "General Image",
         "name" : "Real World Value LUT Data",
         "desc" : [
            "LUT Data in this Sequence.",
            "Required if Real World Value Intercept (0040,9224) is not present."
         ],
         "entity" : "Image",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ]
      },
      "(0038,0064)[<0>](0040,0033)" : {
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "name" : "Universal Entity ID Type",
         "module" : "Patient Study",
         "usage" : "U",
         "entity" : "Study",
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
         ]
      },
      "(0012,0050)" : {
         "entity" : "Study",
         "req" : "2",
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
         "name" : "Clinical Trial Time Point ID",
         "usage" : "U",
         "module" : "Clinical Trial Study",
         "mod_tables" : [
            "table_C.7-4b"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a040)" : [
         {
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2"
            ],
            "name" : "Value Type",
            "module" : "General Series",
            "usage" : "M",
            "entity" : "Series",
            "req" : "1",
            "desc" : [
               "The type of the value encoded in this name-value Item.",
               {
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
                  ],
                  "type" : "variablelist"
               }
            ]
         },
         {
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
            "entity" : "Series",
            "usage" : "M",
            "module" : "Enhanced US Series",
            "name" : "Value Type",
            "mod_tables" : [
               "table_C.8.24.1-1",
               "table_10-2"
            ]
         }
      ],
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a122)" : {
         "usage" : "U",
         "module" : "Specimen",
         "name" : "Time",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "req" : "1C",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0028,140b)[<0>](0028,1204)" : {
         "mod_tables" : [
            "table_C.7.6.23-1"
         ],
         "desc" : [
            "Alpha LUT contains the blending values for the data frames.",
            "Required if Alpha LUT Transfer Function (0028,1410) is TABLE."
         ],
         "req" : "1C",
         "entity" : "Image",
         "usage" : "U",
         "module" : "Enhanced Palette Color Lookup Table",
         "name" : "Alpha Palette Color Lookup Table Data"
      },
      "(0020,9307)" : {
         "mod_tables" : [
            "table_C.8.24.2-1"
         ],
         "name" : "Ultrasound Acquisition Geometry",
         "usage" : "M",
         "module" : "Ultrasound Frame of Reference",
         "req" : "1",
         "entity" : "Frame of Reference",
         "desc" : [
            "Characteristic of the ultrasound acquisition geometry.",
            {
               "title" : "Defined Terms:",
               "list" : [
                  [
                     "APEX",
                     "there exists an apex of the scan lines from which the volume data was acquired."
                  ]
               ],
               "type" : "variablelist"
            }
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a162)" : [
         {
            "name" : "Rational Numerator Value",
            "module" : "General Series",
            "usage" : "M",
            "entity" : "Series",
            "req" : "1C",
            "desc" : [
               "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
            ],
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2"
            ]
         },
         {
            "usage" : "M",
            "module" : "Enhanced US Series",
            "name" : "Rational Numerator Value",
            "desc" : [
               "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
            ],
            "req" : "1C",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.8.24.1-1",
               "table_10-2"
            ]
         }
      ],
      "(0028,140c)[<0>](0028,1407)" : {
         "mod_tables" : [
            "table_C.7.6.23-1"
         ],
         "usage" : "U",
         "module" : "Enhanced Palette Color Lookup Table",
         "name" : "Blending Lookup Table Descriptor",
         "desc" : [
            "Specifies the format of Blending Lookup Table Data (0028,1408) in this sequence item.",
            "The second value (first stored pixel value mapped) shall be zero.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.23.5"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            "Required if Blending LUT 2 Transfer Function (0028,140D) is TABLE."
         ],
         "req" : "1C",
         "entity" : "Image"
      },
      "(0040,000a)" : {
         "mod_tables" : [
            "table_C.8.24.3-1"
         ],
         "module" : "Enhanced US Image",
         "usage" : "M",
         "name" : "Stage Code Sequence",
         "desc" : [
            "Sequence describing the performed Ultrasound Protocol Stage.",
            "Only a single item shall be included in this sequence.",
            "Required if Performed Protocol Type (0040,0261) is present with value STAGED."
         ],
         "entity" : "Image",
         "req" : "1C"
      },
      "(0028,0300)" : {
         "mod_tables" : [
            "table_C.7-9"
         ],
         "entity" : "Image",
         "req" : "3",
         "desc" : [
            "Indicates whether or not this image is a quality control or phantom image.",
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
            [
               "If this Attribute is absent, then the image may or may not be a quality control or phantom image. The phantom device in the image can be described using the Device Module. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.12"
                  },
                  "el" : "xref"
               }
            ]
         ],
         "name" : "Quality Control Image",
         "usage" : "M",
         "module" : "General Image"
      },
      "(0008,0005)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1C",
         "entity" : "Image",
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
         "name" : "Specific Character Set",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0008,1200)[<0>](0008,1115)" : {
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "usage" : "U",
         "module" : "Common Instance Reference",
         "name" : "Referenced Series Sequence",
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this sequence."
         ],
         "entity" : "Image",
         "req" : "1"
      },
      "(0040,0560)[<0>](0040,0610)" : {
         "entity" : "Image",
         "req" : "2",
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
         "name" : "Specimen Preparation Sequence",
         "module" : "Specimen",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      "(0088,0200)[<0>](0028,1201)" : [
         {
            "entity" : "Image",
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
            "name" : "Red Palette Color Lookup Table Data",
            "usage" : "M",
            "module" : "General Image",
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7-11b"
            ]
         },
         {
            "req" : "1C",
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
            "name" : "Red Palette Color Lookup Table Data",
            "module" : "Enhanced US Image",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8.24.3-1",
               "table_C.7-11b"
            ]
         }
      ],
      "(0018,5010)" : {
         "mod_tables" : [
            "table_C.8.24.3-1"
         ],
         "name" : "Transducer Data",
         "module" : "Enhanced US Image",
         "usage" : "M",
         "req" : "3",
         "entity" : "Image",
         "desc" : "Manufacturer defined code or description"
      },
      "(0400,0561)[<0>](0400,0550)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Modified Attributes Sequence",
         "desc" : [
            "Sequence that contains all the Attributes, with their previous values, that were modified or removed from the main data set.",
            "Only a single Item shall be included in this sequence."
         ],
         "req" : "1",
         "entity" : "Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a120)" : [
         {
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2"
            ],
            "usage" : "M",
            "module" : "General Series",
            "name" : "DateTime",
            "desc" : [
               "DateTime value for this name-value Item.",
               "Required if Value Type (0040,A040) is DATETIME."
            ],
            "entity" : "Series",
            "req" : "1C"
         },
         {
            "desc" : [
               "DateTime value for this name-value Item.",
               "Required if Value Type (0040,A040) is DATETIME."
            ],
            "req" : "1C",
            "entity" : "Series",
            "module" : "Enhanced US Series",
            "usage" : "M",
            "name" : "DateTime",
            "mod_tables" : [
               "table_C.8.24.1-1",
               "table_10-2"
            ]
         }
      ],
      "(0008,1062)[<0>](0008,0082)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "req" : "1C",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Institution Code Sequence",
         "module" : "General Study",
         "usage" : "M"
      },
      "(0020,9172)[<0>](0008,1160)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Referenced Frame Number",
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
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ]
      },
      "(0008,1049)[<0>](0008,0081)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "entity" : "Study",
         "req" : "3",
         "usage" : "M",
         "module" : "General Study",
         "name" : "Institution Address"
      },
      "(0028,1053)" : {
         "desc" : [
            "m in the equation specified by Rescale Intercept (0028,1052).",
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "1",
                     null
                  ]
               ]
            }
         ],
         "entity" : "Image",
         "req" : "1",
         "usage" : "M",
         "module" : "Enhanced US Image",
         "name" : "Rescale Slope",
         "mod_tables" : [
            "table_C.8.24.3-1"
         ]
      },
      "(0018,a001)[<0>](0008,1090)" : {
         "name" : "Manufacturer's Model Name",
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "3",
         "entity" : "Image",
         "desc" : "Manufacturer's model name of the equipment that contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,0053)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            },
            "Required if the instance has ever been converted from its source form as the result of a C-MOVE operation with a specific view."
         ],
         "entity" : "Image",
         "req" : "1C"
      },
      "(0020,9250)" : {
         "desc" : [
            "Characteristic of the respiratory signal used to the define the respiratory triggering.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "TIME",
                     null
                  ],
                  [
                     "AMPLITUDE",
                     null
                  ],
                  [
                     "BOTH",
                     null
                  ]
               ],
               "title" : "Defined Terms:"
            },
            "Required if the value is not TIME, may be present otherwise."
         ],
         "entity" : "Image",
         "req" : "1C",
         "module" : "Respiratory Synchronization",
         "usage" : "C - Required if respiratory synchronization was applied.",
         "name" : "Respiratory Trigger Type",
         "mod_tables" : [
            "table_C.7.6.18-2"
         ]
      },
      "(0012,0062)" : {
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
         ],
         "entity" : "Patient",
         "req" : "3",
         "module" : "Patient",
         "usage" : "M",
         "name" : "Patient Identity Removed"
      },
      "(0040,0260)" : [
         {
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16"
            ],
            "desc" : "Sequence describing the Protocol performed for this Procedure Step. One or more Items are permitted in this sequence.",
            "entity" : "Series",
            "req" : "3",
            "module" : "General Series",
            "usage" : "M",
            "name" : "Performed Protocol Code Sequence"
         },
         {
            "mod_tables" : [
               "table_C.8.24.1-1"
            ],
            "name" : "Performed Protocol Code Sequence",
            "module" : "Enhanced US Series",
            "usage" : "M",
            "entity" : "Series",
            "req" : "1C",
            "desc" : [
               "Sequence describing a Protocol being followed for this Procedure Step.",
               "Only a single Item shall be included in this sequence.",
               "Required if a Protocol is controlling the creation of this Series. May be present otherwise."
            ]
         }
      ],
      "(0008,1120)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "A sequence that provides reference to a Patient SOP Class/Instance pair.",
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "Patient",
         "req" : "3",
         "usage" : "M",
         "module" : "Patient",
         "name" : "Referenced Patient Sequence"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0010)" : {
         "mod_tables" : [
            "table_C.8.24.3-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "name" : "MAC Calculation Transfer Syntax UID",
         "usage" : "M",
         "module" : "Enhanced US Image",
         "req" : "1",
         "entity" : "Image",
         "desc" : [
            "The Transfer Syntax UID used to encode the values of the Data Elements included in the MAC calculation. When computing the MAC, only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
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
                                    "Certain Transfer Syntaxes, particularly those that are used with compressed data, allow the fragmentation of the pixel data to change. If such fragmentation changes, Digital Signatures generated with such Transfer Syntaxes could become invalid."
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
                                    "This does not constrain the transfer syntax used to transmit the object."
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
                     },
                     "el" : "orderedlist"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ]
      },
      "(0040,0555)[<0>](0040,a123)" : {
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "name" : "Person Name",
         "usage" : "M",
         "module" : "Acquisition Context",
         "entity" : "Image",
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
         ]
      },
      "(0018,5020)" : {
         "mod_tables" : [
            "table_C.8.24.3-1"
         ],
         "entity" : "Image",
         "req" : "3",
         "desc" : "Manufacturer defined description of processing of echo information. Data may include code or description of gain (initial, overall, TGC, dynamic range, etc.), pre-processing, post-processing, Doppler processing parameters, e.g., cutoff filters, etc., as used in generating a given image.",
         "name" : "Processing Function",
         "module" : "Enhanced US Image",
         "usage" : "M"
      },
      "(0008,1052)[<0>](0040,1101)" : {
         "name" : "Person Identification Code Sequence",
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "req" : "1",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,08ea)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Measurement Units Code Sequence",
         "usage" : "U",
         "module" : "Specimen",
         "entity" : "Image",
         "req" : "1C",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ]
      },
      "(0018,0015)" : {
         "entity" : "Series",
         "req" : "3",
         "desc" : [
            [
               "Text description of the part of the body examined. See ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "targetdoc" : "PS3.16",
                     "xrefstyle" : "template: Annex %n \u201c%t\u201d in PS3.16",
                     "targetptr" : "chapter_L"
                  }
               },
               " for Defined Terms"
            ],
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "Some IODs support the Anatomic Region Sequence (0008,2218), which can provide a more comprehensive mechanism for specifying the body part being examined."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "name" : "Body Part Examined",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0028,140c)[<0>](0028,140d)" : {
         "mod_tables" : [
            "table_C.7.6.23-1"
         ],
         "entity" : "Image",
         "req" : "1",
         "desc" : [
            "Specifies the algorithm used to determine the output value of Blending LUT 2.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "CONSTANT",
                     null
                  ],
                  [
                     "ONE_MINUS",
                     null
                  ],
                  [
                     "ALPHA_1",
                     null
                  ],
                  [
                     "ALPHA_2",
                     null
                  ],
                  [
                     "TABLE",
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
                     "linkend" : "sect_C.7.6.23.4"
                  },
                  "el" : "xref"
               },
               " for details."
            ]
         ],
         "name" : "Blending LUT 2 Transfer Function",
         "module" : "Enhanced Palette Color Lookup Table",
         "usage" : "U"
      },
      "(0008,0110)[<0>](0008,0102)" : {
         "entity" : "Image",
         "req" : "1",
         "desc" : "The value of a Coding Scheme Designator, used in this SOP Instance, which is being mapped.",
         "name" : "Coding Scheme Designator",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0018,0012)" : {
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "usage" : "C - Required if contrast media was applied. See  for baseline context group ID.",
         "module" : "Enhanced Contrast/Bolus",
         "name" : "Contrast/Bolus Agent Sequence",
         "desc" : [
            "Sequence that identifies one or more contrast agents administered prior to or during the acquisition.",
            "One or more Items shall be included in this sequence."
         ],
         "entity" : "Image",
         "req" : "1"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1150)" : [
         {
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "entity" : "Series",
            "req" : "1",
            "usage" : "M",
            "module" : "General Series",
            "name" : "Referenced SOP Class UID",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2",
               "table_10-11"
            ]
         },
         {
            "mod_tables" : [
               "table_C.8.24.1-1",
               "table_10-2",
               "table_10-11"
            ],
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "req" : "1",
            "entity" : "Series",
            "module" : "Enhanced US Series",
            "usage" : "M",
            "name" : "Referenced SOP Class UID"
         }
      ],
      "(0018,a001)[<0>](0018,1200)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Date of Last Calibration",
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
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0010,1002)[<0>](0010,0024)" : {
         "req" : "3",
         "entity" : "Patient",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this sequence."
         ],
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a122)" : {
         "module" : "Specimen",
         "usage" : "U",
         "name" : "Time",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "entity" : "Image",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(4ffe,0001)[<0>](0400,0005)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "MAC ID Number",
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "1",
         "desc" : "A number, unique within this SOP Instance, used to identify this MAC Parameters Sequence (4FFE,0001) item from an Item of the Digital Signatures Sequence (FFFA,FFFA)."
      },
      "(0010,1002)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Other Patient IDs Sequence",
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "3",
         "desc" : [
            "A sequence of identification numbers or codes used to identify the patient, which may or may not be human readable, and may or may not have been obtained from an implanted or attached device such as an RFID or barcode.",
            "One or more Items are permitted in this sequence."
         ]
      },
      "(0400,0500)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Encrypted Attributes Sequence",
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
         "req" : "1C",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0028,1401)" : {
         "mod_tables" : [
            "table_C.7.6.23-1"
         ],
         "name" : "Data Frame Assignment Sequence",
         "module" : "Enhanced Palette Color Lookup Table",
         "usage" : "U",
         "entity" : "Image",
         "req" : "1",
         "desc" : [
            "Sequence of items each assigning frames of one particular value of Data Type (0018,9808) to a data path in the Enhanced Blending and Display Pipeline.",
            "One, two, or three items shall be included in this sequence."
         ]
      },
      "(0012,0021)" : {
         "mod_tables" : [
            "table_C.7-2b"
         ],
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
         "entity" : "Patient",
         "req" : "2",
         "usage" : "U",
         "module" : "Clinical Trial Subject",
         "name" : "Clinical Trial Protocol Name"
      },
      "(0028,1052)" : {
         "mod_tables" : [
            "table_C.8.24.3-1"
         ],
         "module" : "Enhanced US Image",
         "usage" : "M",
         "name" : "Rescale Intercept",
         "desc" : [
            "The value b in relationship between stored values (SV) and the output units.",
            "Output units = m*SV + b.",
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "0",
                     null
                  ]
               ]
            }
         ],
         "entity" : "Image",
         "req" : "1"
      },
      "(0028,1401)[<0>](0028,1051)" : {
         "name" : "Window Width",
         "usage" : "U",
         "module" : "Enhanced Palette Color Lookup Table",
         "entity" : "Image",
         "req" : "1C",
         "desc" : [
            [
               "Window Width for display. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.11.2.1.2"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            "Required if Window Center (0028,1050) is sent."
         ],
         "mod_tables" : [
            "table_C.7.6.23-1",
            "table_C.11-2b"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a123)" : [
         {
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2"
            ],
            "desc" : [
               "Person name value for this name-value Item.",
               "Required if Value Type (0040,A040) is PNAME."
            ],
            "entity" : "Series",
            "req" : "1C",
            "module" : "General Series",
            "usage" : "M",
            "name" : "Person Name"
         },
         {
            "name" : "Person Name",
            "module" : "Enhanced US Series",
            "usage" : "M",
            "entity" : "Series",
            "req" : "1C",
            "desc" : [
               "Person name value for this name-value Item.",
               "Required if Value Type (0040,A040) is PNAME."
            ],
            "mod_tables" : [
               "table_C.8.24.1-1",
               "table_10-2"
            ]
         }
      ],
      "(0028,140b)[<0>](0028,140f)" : {
         "name" : "RGB LUT Transfer Function",
         "usage" : "U",
         "module" : "Enhanced Palette Color Lookup Table",
         "req" : "1",
         "entity" : "Image",
         "desc" : [
            "Specifies the mapping that takes place between the input value and RGB input to the Blending Operation.",
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "EQUAL_RGB",
                     "Output is R=G=B=input value"
                  ],
                  [
                     "TABLE",
                     "Output is RGB LUT values"
                  ]
               ]
            }
         ],
         "mod_tables" : [
            "table_C.7.6.23-1"
         ]
      },
      "(0010,1010)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "module" : "Patient Study",
         "name" : "Patient's Age",
         "desc" : "Age of the Patient.",
         "entity" : "Study",
         "req" : "3"
      },
      "(0018,0012)[<0>](0018,9340)[<1>](0018,1047)" : {
         "entity" : "Image",
         "req" : "3",
         "desc" : "Duration of injection in seconds. Only a single value shall be present.",
         "name" : "Contrast Flow Duration",
         "usage" : "C - Required if contrast media was applied. See  for baseline context group ID.",
         "module" : "Enhanced Contrast/Bolus",
         "mod_tables" : [
            "table_C.7-12b"
         ]
      },
      "(0040,0275)[<0>](0008,0050)" : {
         "usage" : "M",
         "module" : "General Series",
         "name" : "Accession Number",
         "desc" : "An identifier of the Imaging Service Request for this Requested Procedure.",
         "entity" : "Series",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ]
      },
      "(0008,1062)[<0>](0040,1102)" : {
         "entity" : "Study",
         "req" : "3",
         "desc" : "Person's mailing address",
         "name" : "Person's Address",
         "module" : "General Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1160)" : [
         {
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2"
            ],
            "req" : "1C",
            "entity" : "Series",
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
            "name" : "Referenced Frame Number",
            "module" : "General Series",
            "usage" : "M"
         },
         {
            "entity" : "Series",
            "req" : "1C",
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
            "name" : "Referenced Frame Number",
            "module" : "Enhanced US Series",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8.24.1-1",
               "table_10-2"
            ]
         }
      ],
      "(0040,0260)[<0>](0040,0440)[<1>](0040,08ea)" : [
         {
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2"
            ],
            "desc" : [
               "Units of measurement for a numeric value in this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is NUMERIC."
            ],
            "req" : "1C",
            "entity" : "Series",
            "usage" : "M",
            "module" : "General Series",
            "name" : "Measurement Units Code Sequence"
         },
         {
            "mod_tables" : [
               "table_C.8.24.1-1",
               "table_10-2"
            ],
            "name" : "Measurement Units Code Sequence",
            "usage" : "M",
            "module" : "Enhanced US Series",
            "entity" : "Series",
            "req" : "1C",
            "desc" : [
               "Units of measurement for a numeric value in this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is NUMERIC."
            ]
         }
      ],
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a168)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "module" : "Specimen",
         "name" : "Concept Code Sequence",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "entity" : "Image",
         "req" : "1C"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,08ea)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "req" : "1C",
         "entity" : "Image",
         "module" : "Specimen",
         "usage" : "U",
         "name" : "Measurement Units Code Sequence"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)" : {
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "req" : "1C",
         "entity" : "Image",
         "usage" : "U",
         "module" : "Specimen",
         "name" : "Referenced SOP Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
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
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "Patient",
         "req" : "1C"
      },
      "(0028,1404)[<0>](0028,1407)" : {
         "mod_tables" : [
            "table_C.7.6.23-1"
         ],
         "req" : "1C",
         "entity" : "Image",
         "desc" : [
            "Specifies the format of Blending Lookup Table Data (0028,1408) in this sequence item.",
            "The second value (first stored pixel value mapped) shall be zero.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.6.23.5",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            "Required if Blending LUT 1 Transfer Function (0028,1405) is TABLE."
         ],
         "name" : "Blending Lookup Table Descriptor",
         "module" : "Enhanced Palette Color Lookup Table",
         "usage" : "U"
      },
      "(fffa,fffa)[<0>](0400,0100)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Digital Signature UID",
         "desc" : "A UID that can be used to uniquely reference this signature.",
         "entity" : "Image",
         "req" : "1"
      },
      "(0018,0012)[<0>](0052,0001)" : {
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "entity" : "Image",
         "req" : "3",
         "desc" : "Percentage by volume of active ingredient in the total volume.",
         "name" : "Contrast/Bolus Ingredient Percent by Volume",
         "usage" : "C - Required if contrast media was applied. See  for baseline context group ID.",
         "module" : "Enhanced Contrast/Bolus"
      },
      "(0008,001a)" : {
         "name" : "Related General SOP Class UID",
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "3",
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
         ],
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,051a)" : {
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Container Description",
         "usage" : "U",
         "module" : "Specimen",
         "entity" : "Image",
         "req" : "3",
         "desc" : "Description of the container."
      },
      "(0018,980c)" : {
         "mod_tables" : [
            "table_C.8.24.3-1"
         ],
         "name" : "Position Measuring Device Used",
         "usage" : "M",
         "module" : "Enhanced US Image",
         "entity" : "Image",
         "req" : "1C",
         "desc" : [
            "Describes the type of position measuring device used in the acquisition of the image, if any. This gives an indication of the degree of precision of Pixel Spacing (0028,0030) and the spacing between adjacent planes.",
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "RIGID",
                     "The image was acquired with a position measuring device."
                  ],
                  [
                     "FREEHAND",
                     "The image was acquired without a position measuring device."
                  ]
               ]
            },
            "Required if Volumetric Properties (0008,9206) is VOLUME and Volume Based Calculation Technique (0008,9207) is NONE. May be present otherwise."
         ]
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0020,000e)" : {
         "mod_tables" : [
            "table_C.8.24.3-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "name" : "Series Instance UID",
         "usage" : "M",
         "module" : "Enhanced US Image",
         "entity" : "Image",
         "req" : "1",
         "desc" : "Unique identifier of a Series that is part of this Study and contains the referenced Composite Object(s)."
      },
      "(0040,0560)[<0>](0040,0602)" : {
         "name" : "Specimen Detailed Description",
         "usage" : "U",
         "module" : "Specimen",
         "req" : "3",
         "entity" : "Image",
         "desc" : "Detailed textual specimen description (may include ancestor specimen descriptions).",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      "(0008,1140)[<0>](0062,000b)" : [
         {
            "mod_tables" : [
               "table_C.7-9",
               "table_10-3"
            ],
            "usage" : "M",
            "module" : "General Image",
            "name" : "Referenced Segment Number",
            "desc" : [
               "Identifies the Segment Number to which the reference applies.",
               "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
            ],
            "entity" : "Image",
            "req" : "1C"
         },
         {
            "usage" : "M",
            "module" : "Enhanced US Image",
            "name" : "Referenced Segment Number",
            "desc" : [
               "Identifies the Segment Number to which the reference applies.",
               "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
            ],
            "entity" : "Image",
            "req" : "1C",
            "mod_tables" : [
               "table_C.8.24.3-1",
               "table_10-3"
            ]
         }
      ],
      "(0008,114a)[<0>](0008,1150)" : [
         {
            "usage" : "M",
            "module" : "General Image",
            "name" : "Referenced SOP Class UID",
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "req" : "1",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.7-9",
               "table_10-11"
            ]
         },
         {
            "mod_tables" : [
               "table_C.8.24.3-1",
               "table_10-11"
            ],
            "name" : "Referenced SOP Class UID",
            "module" : "Enhanced US Image",
            "usage" : "M",
            "req" : "1",
            "entity" : "Image",
            "desc" : "Uniquely identifies the referenced SOP Class."
         }
      ],
      "(0010,0020)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "module" : "Patient",
         "name" : "Patient ID",
         "desc" : "Primary hospital identification number or code for the patient.",
         "req" : "2",
         "entity" : "Patient"
      },
      "(0012,0030)" : {
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
         "req" : "2",
         "entity" : "Patient",
         "usage" : "U",
         "module" : "Clinical Trial Subject",
         "name" : "Clinical Trial Site ID",
         "mod_tables" : [
            "table_C.7-2b"
         ]
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1155)" : {
         "usage" : "M",
         "module" : "General Series",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Series",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-11"
         ]
      },
      "(0028,140b)[<0>](0028,1103)" : {
         "name" : "Blue Palette Color Lookup Table Descriptor",
         "usage" : "U",
         "module" : "Enhanced Palette Color Lookup Table",
         "req" : "1C",
         "entity" : "Image",
         "desc" : [
            "Specifies the format of the Blue Palette Color Lookup Table Data (0028,1203).",
            "The second value (first stored pixel value mapped) shall be zero.",
            "Required if RGB LUT Transfer Function (0028,140F) is TABLE."
         ],
         "mod_tables" : [
            "table_C.7.6.23-1"
         ]
      },
      "(0018,a001)[<0>](0018,1000)" : {
         "req" : "3",
         "entity" : "Image",
         "desc" : "Manufacturer's serial number of the equipment that contributed to the composite instance.",
         "name" : "Device Serial Number",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0032,1034)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "usage" : "M",
         "name" : "Requesting Service Code Sequence",
         "desc" : [
            "Institutional department where the request initiated.",
            "Only a single item is permitted in this sequence."
         ],
         "entity" : "Study",
         "req" : "3"
      },
      "(0040,0244)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "entity" : "Series",
         "req" : "3",
         "desc" : "Date on which the Performed Procedure Step started.",
         "name" : "Performed Procedure Step Start Date",
         "usage" : "M",
         "module" : "General Series"
      },
      "(0012,0083)[<0>](0012,0020)" : {
         "desc" : [
            "The identifier of the protocol for which consent to distribute has been granted.",
            "Required if Distribution Type (0012,0084) is NAMED_PROTOCOL and the protocol is not that which is specified in Clinical Trial Protocol ID (0012,0020) in the Clinical Trial Subject Module."
         ],
         "entity" : "Study",
         "req" : "1C",
         "usage" : "U",
         "module" : "Clinical Trial Study",
         "name" : "Clinical Trial Protocol ID",
         "mod_tables" : [
            "table_C.7-4b"
         ]
      },
      "(0028,1102)" : {
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "entity" : "Image",
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
         "name" : "Green Palette Color Lookup Table Descriptor",
         "usage" : "M",
         "module" : "Image Pixel"
      },
      "(0088,0200)[<0>](0028,1103)" : [
         {
            "req" : "1C",
            "entity" : "Image",
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
            "name" : "Blue Palette Color Lookup Table Descriptor",
            "usage" : "M",
            "module" : "General Image",
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7-11b"
            ]
         },
         {
            "mod_tables" : [
               "table_C.8.24.3-1",
               "table_C.7-11b"
            ],
            "usage" : "M",
            "module" : "Enhanced US Image",
            "name" : "Blue Palette Color Lookup Table Descriptor",
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
            "entity" : "Image",
            "req" : "1C"
         }
      ],
      "(0028,0030)" : {
         "mod_tables" : [
            "table_C.8.24.3-1"
         ],
         "name" : "Pixel Spacing",
         "usage" : "M",
         "module" : "Enhanced US Image",
         "entity" : "Image",
         "req" : "1",
         "desc" : [
            "Physical distance in the patient between the centers of adjacent pixels, specified by a numeric pair - adjacent row spacing (delimiter) adjacent column spacing, in mm.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_10.7.1.3",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation of the value order."
            ]
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0039)" : {
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
         "name" : "Assigning Jurisdiction Code Sequence",
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0040,0515)[<0>](0040,0513)[<1>](0040,0032)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "Image",
         "req" : "1C",
         "module" : "Specimen",
         "usage" : "U",
         "name" : "Universal Entity ID"
      },
      "(0020,9172)[<0>](0008,1155)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Image",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0018,1201)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
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
         "entity" : "Equipment",
         "req" : "3",
         "module" : "General Equipment",
         "usage" : "M",
         "name" : "Time of Last Calibration"
      },
      "(0040,0520)[<0>](0050,001a)" : {
         "desc" : [
            "Material of container component.",
            {
               "type" : "variablelist",
               "title" : "Defined Terms:",
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
               ]
            }
         ],
         "req" : "3",
         "entity" : "Image",
         "usage" : "U",
         "module" : "Specimen",
         "name" : "Container Component Material",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1150)" : [
         {
            "entity" : "Series",
            "req" : "1",
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "name" : "Referenced SOP Class UID",
            "usage" : "M",
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2",
               "table_10-11"
            ]
         },
         {
            "mod_tables" : [
               "table_C.8.24.1-1",
               "table_10-2",
               "table_10-11"
            ],
            "usage" : "M",
            "module" : "Enhanced US Series",
            "name" : "Referenced SOP Class UID",
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "req" : "1",
            "entity" : "Series"
         }
      ],
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0062,000b)" : [
         {
            "module" : "General Series",
            "usage" : "M",
            "name" : "Referenced Segment Number",
            "desc" : [
               "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
               "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
            ],
            "req" : "1C",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2"
            ]
         },
         {
            "desc" : [
               "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
               "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
            ],
            "entity" : "Series",
            "req" : "1C",
            "usage" : "M",
            "module" : "Enhanced US Series",
            "name" : "Referenced Segment Number",
            "mod_tables" : [
               "table_C.8.24.1-1",
               "table_10-2"
            ]
         }
      ],
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a161)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "module" : "Specimen",
         "name" : "Floating Point Value",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "entity" : "Image",
         "req" : "1C"
      },
      "(0040,0520)[<0>](0008,1090)" : {
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "entity" : "Image",
         "req" : "3",
         "desc" : "Manufacturer's model name of the container component.",
         "name" : "Manufacturer's Model Name",
         "usage" : "U",
         "module" : "Specimen"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a123)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "name" : "Person Name",
         "module" : "General Series",
         "usage" : "M"
      },
      "(0040,9096)[<0>](0028,3003)" : {
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "usage" : "M",
         "module" : "General Image",
         "name" : "LUT Explanation",
         "desc" : "Free form text explanation of the meaning of the transformation in this Item.",
         "entity" : "Image",
         "req" : "1"
      },
      "(0018,0012)[<0>](0018,9340)[<1>](0018,1041)" : {
         "desc" : "Volume administered during this phase in milliliters of diluted contrast agent.",
         "req" : "2",
         "entity" : "Image",
         "module" : "Enhanced Contrast/Bolus",
         "usage" : "C - Required if contrast media was applied. See  for baseline context group ID.",
         "name" : "Contrast/Bolus Volume",
         "mod_tables" : [
            "table_C.7-12b"
         ]
      },
      "(0008,2228)" : {
         "mod_tables" : [
            "table_C.8.24.3-1",
            "table_10-5",
            "table_10-8"
         ],
         "name" : "Primary Anatomic Structure Sequence",
         "module" : "Enhanced US Image",
         "usage" : "M",
         "entity" : "Image",
         "req" : "3",
         "desc" : [
            "Sequence of Items that identifies the primary anatomic structure(s) of interest in this Instance.",
            "One or more Items are permitted in this sequence."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0062,000b)" : {
         "module" : "General Series",
         "usage" : "M",
         "name" : "Referenced Segment Number",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "entity" : "Series",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0400,0561)[<0>](0400,0563)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Modifying System",
         "desc" : "Identification of the system that removed and/or replaced the attributes.",
         "req" : "1",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0008)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "desc" : "Sequence describing the Scheduled Protocol following a specific coding scheme. One or more Items are permitted in this sequence.",
         "req" : "3",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "name" : "Scheduled Protocol Code Sequence"
      },
      "(0018,1081)" : {
         "entity" : "Image",
         "req" : "2C",
         "desc" : [
            "R-R interval low limit for beat rejection, in ms.",
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and Cardiac Synchronization Technique (0018,9037) equals PROSPECTIVE or RETROSPECTIVE.",
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and Cardiac Synchronization Technique (0018,9037) equals PROSPECTIVE or RETROSPECTIVE."
         ],
         "name" : "Low R-R Value",
         "usage" : "C - Required if cardiac synchronization was applied.",
         "module" : "Cardiac Synchronization",
         "mod_tables" : [
            "table_C.7.6.18-1"
         ]
      },
      "(0010,0010)" : {
         "name" : "Patient's Name",
         "module" : "Patient",
         "usage" : "M",
         "req" : "2",
         "entity" : "Patient",
         "desc" : "Patient's full name.",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0008,0015)" : {
         "entity" : "Image",
         "req" : "3",
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
         "name" : "Instance Coercion DateTime",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0028,1202)" : {
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "name" : "Green Palette Color Lookup Table Data",
         "module" : "Image Pixel",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Image",
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
      "(0020,9172)[<0>](0062,000b)" : {
         "name" : "Referenced Segment Number",
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Image",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a168)" : [
         {
            "desc" : [
               "Coded concept value of this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is CODE."
            ],
            "req" : "1C",
            "entity" : "Series",
            "usage" : "M",
            "module" : "General Series",
            "name" : "Concept Code Sequence",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2"
            ]
         },
         {
            "mod_tables" : [
               "table_C.8.24.1-1",
               "table_10-2"
            ],
            "name" : "Concept Code Sequence",
            "usage" : "M",
            "module" : "Enhanced US Series",
            "entity" : "Series",
            "req" : "1C",
            "desc" : [
               "Coded concept value of this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is CODE."
            ]
         }
      ],
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Assigning Facility Sequence",
         "module" : "Patient",
         "usage" : "M",
         "entity" : "Patient",
         "req" : "3",
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
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1155)" : [
         {
            "module" : "General Series",
            "usage" : "M",
            "name" : "Referenced SOP Instance UID",
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "entity" : "Series",
            "req" : "1",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2",
               "table_10-11"
            ]
         },
         {
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "entity" : "Series",
            "req" : "1",
            "module" : "Enhanced US Series",
            "usage" : "M",
            "name" : "Referenced SOP Instance UID",
            "mod_tables" : [
               "table_C.8.24.1-1",
               "table_10-2",
               "table_10-11"
            ]
         }
      ],
      "(0088,0200)" : [
         {
            "req" : "3",
            "entity" : "Image",
            "desc" : [
               "This icon image is representative of the Image.",
               "Only a single Item is permitted in this Sequence."
            ],
            "name" : "Icon Image Sequence",
            "usage" : "M",
            "module" : "General Image",
            "mod_tables" : [
               "table_C.7-9"
            ]
         },
         {
            "desc" : [
               "This icon image is representative of the image.",
               "Only a single item is permitted in this sequence."
            ],
            "req" : "3",
            "entity" : "Image",
            "module" : "Enhanced US Image",
            "usage" : "M",
            "name" : "Icon Image Sequence",
            "mod_tables" : [
               "table_C.8.24.3-1"
            ]
         }
      ],
      "(0020,9311)" : [
         {
            "mod_tables" : [
               "table_C.7.6.17-1"
            ],
            "req" : "3",
            "entity" : "Image",
            "desc" : [
               "Dimension organization of the instance.",
               {
                  "type" : "variablelist",
                  "title" : "Defined Terms:",
                  "list" : [
                     [
                        "3D",
                        "Spatial Multi-frame image of parallel planes (3D volume set)"
                     ],
                     [
                        "3D_TEMPORAL",
                        "Temporal loop of parallel-plane 3D volume sets."
                     ]
                  ]
               }
            ],
            "name" : "Dimension Organization Type",
            "usage" : "M",
            "module" : "Multi-frame Dimension"
         },
         {
            "desc" : [
               "Dimension organization of the instance.",
               {
                  "list" : [
                     [
                        "3D",
                        null
                     ],
                     [
                        "3D_TEMPORAL",
                        null
                     ]
                  ],
                  "title" : "Enumerated Values:",
                  "type" : "variablelist"
               },
               [
                  "See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.8.24.3.3"
                     }
                  },
                  " for details."
               ]
            ],
            "entity" : "Image",
            "req" : "1",
            "module" : "Enhanced US Image",
            "usage" : "M",
            "name" : "Dimension Organization Type",
            "mod_tables" : [
               "table_C.8.24.3-1"
            ]
         }
      ],
      "(0008,2112)[<0>](0040,a170)" : [
         {
            "mod_tables" : [
               "table_C.7-9"
            ],
            "req" : "3",
            "entity" : "Image",
            "desc" : [
               "Describes the purpose for which the reference is made, that is what role the source image or frame(s) played in the derivation of this image.",
               "Only a single Item is permitted in this sequence."
            ],
            "name" : "Purpose of Reference Code Sequence",
            "usage" : "M",
            "module" : "General Image"
         },
         {
            "mod_tables" : [
               "table_C.8.24.3-1"
            ],
            "desc" : [
               "Describes the purpose for which the reference is made.",
               "Only a single item shall be included in this sequence."
            ],
            "entity" : "Image",
            "req" : "1",
            "usage" : "M",
            "module" : "Enhanced US Image",
            "name" : "Purpose of Reference Code Sequence"
         }
      ],
      "(0008,1072)[<0>](0008,0081)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "name" : "Institution Address",
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "req" : "3",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable."
      },
      "(0008,1164)[<0>](0008,1167)" : {
         "mod_tables" : [
            "table_C.12-9"
         ],
         "desc" : "SOP Instance from which the frames of this instance are extracted.",
         "entity" : "Image",
         "req" : "1",
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "module" : "Frame Extraction",
         "name" : "Multi-frame Source SOP Instance UID"
      },
      "(0018,980d)" : {
         "name" : "Transducer Geometry Code Sequence",
         "usage" : "M",
         "module" : "Enhanced US Image",
         "entity" : "Image",
         "req" : "1",
         "desc" : [
            "Geometric structure of the transducer.",
            "Only a single item shall be included in this sequence.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.24.3.4",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ]
         ],
         "mod_tables" : [
            "table_C.8.24.3-1"
         ]
      },
      "(0050,0010)[<0>](0050,0014)" : {
         "mod_tables" : [
            "table_C.7-18"
         ],
         "entity" : "Image",
         "req" : "3",
         "desc" : [
            "Length in mm of device. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.6.12.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "name" : "Device Length",
         "usage" : "U",
         "module" : "Device"
      },
      "(0008,1250)[<0>](0020,000d)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "usage" : "M",
         "name" : "Study Instance UID",
         "desc" : "Instance UID of Study to which the related Series belongs",
         "entity" : "Series",
         "req" : "1"
      },
      "(0020,9312)" : {
         "mod_tables" : [
            "table_C.8.24.2-1"
         ],
         "desc" : "Uniquely identifies this Volume Frame of Reference.",
         "entity" : "Frame of Reference",
         "req" : "1",
         "module" : "Ultrasound Frame of Reference",
         "usage" : "M",
         "name" : "Volume Frame of Reference UID"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "usage" : "M",
         "module" : "Patient",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ]
      },
      "(0054,0500)" : {
         "mod_tables" : [
            "table_C.8.24.3-1",
            "table_10-24"
         ],
         "module" : "Enhanced US Image",
         "usage" : "M",
         "name" : "Slice Progression Direction",
         "desc" : [
            [
               "Describes the anatomical direction in which a set of slices is progressing (see ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_10.20.1.1"
                  },
                  "el" : "xref"
               },
               "). Meaningful only for cardiac images."
            ],
            [
               "Enumerated Values are defined in ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_10.20.1.1"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Required if View Code Sequence (0054,0220) equals (G-A186, SRT,\"Short Axis\") or (G-A18A,SRT,\"Vertical Long Axis\") or (G-A18B,SRT, \"Horizontal Long Axis\"). May be present otherwise."
         ],
         "entity" : "Image",
         "req" : "1C"
      },
      "(0018,1020)" : [
         {
            "mod_tables" : [
               "table_C.7-8"
            ],
            "name" : "Software Versions",
            "usage" : "M",
            "module" : "General Equipment",
            "req" : "3",
            "entity" : "Equipment",
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
            ]
         },
         {
            "mod_tables" : [
               "table_C.7-8b"
            ],
            "name" : "Software Versions",
            "usage" : "M",
            "module" : "Enhanced General Equipment",
            "entity" : "Equipment",
            "req" : "1",
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
            ]
         }
      ],
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a160)" : {
         "name" : "Text Value",
         "module" : "Specimen",
         "usage" : "U",
         "entity" : "Image",
         "req" : "1C",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0018,1082)" : {
         "mod_tables" : [
            "table_C.7.6.18-1"
         ],
         "desc" : [
            "R-R interval high limit for beat rejection, in ms.",
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and Cardiac Synchronization Technique (0018,9037) equals PROSPECTIVE or RETROSPECTIVE.",
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and Cardiac Synchronization Technique (0018,9037) equals PROSPECTIVE or RETROSPECTIVE."
         ],
         "req" : "2C",
         "entity" : "Image",
         "usage" : "C - Required if cardiac synchronization was applied.",
         "module" : "Cardiac Synchronization",
         "name" : "High R-R Value"
      },
      "(0008,0060)" : [
         {
            "mod_tables" : [
               "table_C.7-5a"
            ],
            "entity" : "Series",
            "req" : "1",
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
            ],
            "name" : "Modality",
            "usage" : "M",
            "module" : "General Series"
         },
         {
            "desc" : [
               "Type of equipment that originally acquired the data used to create the images in this Series.",
               {
                  "title" : "Enumerated Values:",
                  "list" : [
                     [
                        "US",
                        null
                     ],
                     [
                        "IVUS",
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
                        "linkend" : "sect_C.7.3.1.1.1"
                     }
                  },
                  " for further explanation."
               ]
            ],
            "entity" : "Series",
            "req" : "1",
            "usage" : "M",
            "module" : "Enhanced US Series",
            "name" : "Modality",
            "mod_tables" : [
               "table_C.8.24.1-1"
            ]
         }
      ],
      "(0008,1164)[<0>](0008,1161)" : {
         "req" : "1C",
         "entity" : "Image",
         "desc" : [
            "A list of Frames that were extracted in the form of a simple list.",
            "Required if object extraction is based on a Frame Level Retrieve using the Simple Frame List (0008,1161) attribute.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: labelnumber",
                     "targetptr" : "PS3.4",
                     "targetdoc" : "PS3.4"
                  },
                  "el" : "olink"
               },
               " \"Instance and Frame Level Retrieve SOP Classes\""
            ]
         ],
         "name" : "Simple Frame List",
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "module" : "Frame Extraction",
         "mod_tables" : [
            "table_C.12-9"
         ]
      },
      "(0040,9096)[<0>](0040,9225)" : {
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "desc" : [
            "The Slope value in relationship between stored values (SV) and the real world values.",
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
         "entity" : "Image",
         "req" : "1C",
         "module" : "General Image",
         "usage" : "M",
         "name" : "Real World Value Slope"
      },
      "(0008,0031)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "usage" : "M",
         "name" : "Series Time",
         "desc" : "Time the Series started.",
         "entity" : "Series",
         "req" : "3"
      },
      "(0040,0251)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "req" : "3",
         "entity" : "Series",
         "desc" : "Time at which the Performed Procedure Step ended.",
         "name" : "Performed Procedure Step End Time",
         "usage" : "M",
         "module" : "General Series"
      },
      "(0040,9096)[<0>](0040,9211)" : {
         "usage" : "M",
         "module" : "General Image",
         "name" : "Real World Value Last Value Mapped",
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
         "entity" : "Image",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ]
      },
      "(0018,9073)" : {
         "desc" : "Duration of the image acquisition in seconds.",
         "entity" : "Image",
         "req" : "1",
         "module" : "Enhanced US Image",
         "usage" : "M",
         "name" : "Acquisition Duration",
         "mod_tables" : [
            "table_C.8.24.3-1"
         ]
      },
      "(0020,0052)" : {
         "mod_tables" : [
            "table_C.7-6"
         ],
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
         "entity" : "Frame of Reference",
         "req" : "1",
         "module" : "Frame of Reference",
         "usage" : "M",
         "name" : "Frame of Reference UID"
      },
      "(0018,1084)" : {
         "name" : "Intervals Rejected",
         "module" : "Cardiac Synchronization",
         "usage" : "C - Required if cardiac synchronization was applied.",
         "req" : "2C",
         "entity" : "Image",
         "desc" : [
            "Number of R-R intervals rejected.",
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and Cardiac Synchronization Technique (0018,9037) equals other than NONE.",
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and Cardiac Synchronization Technique (0018,9037) equals other than NONE."
         ],
         "mod_tables" : [
            "table_C.7.6.18-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1160)" : [
         {
            "name" : "Referenced Frame Number",
            "usage" : "M",
            "module" : "General Series",
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
            ],
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-16",
               "table_10-2"
            ]
         },
         {
            "entity" : "Series",
            "req" : "1C",
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
            "name" : "Referenced Frame Number",
            "module" : "Enhanced US Series",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8.24.1-1",
               "table_10-2"
            ]
         }
      ],
      "(0008,1115)" : {
         "mod_tables" : [
            "table_C.12-8"
         ],
         "req" : "1C",
         "entity" : "Image",
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this sequence.",
            "Required if this Instance references Instances in this Study."
         ],
         "name" : "Referenced Series Sequence",
         "usage" : "U",
         "module" : "Common Instance Reference"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a163)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "req" : "1C",
         "entity" : "Image",
         "module" : "Specimen",
         "usage" : "U",
         "name" : "Rational Denominator Value"
      },
      "(0028,0101)" : [
         {
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "req" : "1",
            "entity" : "Image",
            "desc" : [
               "Number of bits stored for each pixel sample. Each sample shall have the same number of bits stored. See ",
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
            "name" : "Bits Stored",
            "usage" : "M",
            "module" : "Image Pixel"
         },
         {
            "mod_tables" : [
               "table_C.8.24.3-1"
            ],
            "name" : "Bits Stored",
            "usage" : "M",
            "module" : "Enhanced US Image",
            "req" : "1",
            "entity" : "Image",
            "desc" : [
               "Number of bits stored for each pixel sample.",
               {
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
                  "title" : "Enumerated Values:",
                  "type" : "variablelist"
               }
            ]
         }
      ],
      "(0018,5100)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Patient Position",
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "req" : "2C",
         "desc" : [
            "Patient position descriptor relative to the equipment. Required for images where Patient Orientation Code Sequence (0054,0410) is not present and whose SOP Class is one of the following: CT (\"1.2.840.10008.5.1.4.1.1.2\") or MR (\"1.2.840.10008.5.1.4.1.1.4\") or Enhanced CT (\"1.2.840.10008.5.1.4.1.1.2.1\") or Enhanced MR Image (\"1.2.840.10008.5.1.4.1.1.4.1\") or Enhanced Color MR Image (\"1.2.840.10008.5.1.4.1.1.4.3\") or MR Spectroscopy (\"1.2.840.10008.5.1.4.1.1.4.2\") Storage SOP Classes.",
            "May be present for other SOP Classes if Patient Orientation Code Sequence (0054,0410) is not present.",
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
         ]
      },
      "(0018,5050)" : {
         "mod_tables" : [
            "table_C.8.24.3-1"
         ],
         "name" : "Depth of Scan Field",
         "usage" : "M",
         "module" : "Enhanced US Image",
         "req" : "1",
         "entity" : "Image",
         "desc" : "The depth, in mm, from the transducer face to the deepest point included in the image- the field of view."
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a124)" : {
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "entity" : "Image",
         "req" : "1C",
         "usage" : "U",
         "module" : "Specimen",
         "name" : "UID",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a040)" : {
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
         "entity" : "Image",
         "usage" : "U",
         "module" : "Specimen",
         "name" : "Value Type",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0018,1030)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
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
         "entity" : "Series",
         "req" : "3",
         "module" : "General Series",
         "usage" : "M",
         "name" : "Protocol Name"
      },
      "(0008,114a)[<0>](0008,1155)" : [
         {
            "name" : "Referenced SOP Instance UID",
            "usage" : "M",
            "module" : "General Image",
            "entity" : "Image",
            "req" : "1",
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "mod_tables" : [
               "table_C.7-9",
               "table_10-11"
            ]
         },
         {
            "mod_tables" : [
               "table_C.8.24.3-1",
               "table_10-11"
            ],
            "usage" : "M",
            "module" : "Enhanced US Image",
            "name" : "Referenced SOP Instance UID",
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "req" : "1",
            "entity" : "Image"
         }
      ],
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
                           "el" : "listitem",
                           "content" : [
                              "\n                        ",
                              {
                                 "content" : [
                                    "This attribute is not intended for conveying localizer reference information, for which Referenced Image Sequence (0008,1140) should be used."
                                 ],
                                 "el" : "para"
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
               ],
               "el" : "note"
            }
         ],
         "entity" : "Series",
         "req" : "3",
         "usage" : "M",
         "module" : "General Series",
         "name" : "Related Series Sequence",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a043)" : {
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Series",
         "req" : "1",
         "module" : "General Series",
         "usage" : "M",
         "name" : "Concept Name Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0018,1801)" : {
         "mod_tables" : [
            "table_C.7-7"
         ],
         "desc" : "ID of equipment or system providing time reference",
         "req" : "3",
         "entity" : "Frame of Reference",
         "usage" : "M",
         "module" : "Synchronization",
         "name" : "Time Source"
      },
      "(0020,9222)[<0>](0020,9164)" : {
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "entity" : "Image",
         "req" : "1C",
         "desc" : [
            [
               "Uniquely identifies a set of dimensions referenced within the containing SOP Instance. In particular the dimension described by this sequence item is associated with this Dimension Organization UID. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.17.2"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            "Required if the value of Dimension Organization Sequence (0020,9221) contains Items"
         ],
         "name" : "Dimension Organization UID",
         "module" : "Multi-frame Dimension",
         "usage" : "M"
      },
      "(0010,2294)" : {
         "name" : "Breed Registration Sequence",
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "2C",
         "desc" : [
            "Information identifying an animal within a breed registry.",
            "Zero or more Items shall be included in this sequence.",
            "Required if the patient is an animal."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0028,0102)" : [
         {
            "module" : "Image Pixel",
            "usage" : "M",
            "name" : "High Bit",
            "desc" : [
               "Most significant bit for pixel sample data. Each sample shall have the same high bit. See ",
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
            "entity" : "Image",
            "req" : "1",
            "mod_tables" : [
               "table_C.7-11b"
            ]
         },
         {
            "mod_tables" : [
               "table_C.8.24.3-1"
            ],
            "name" : "High Bit",
            "module" : "Enhanced US Image",
            "usage" : "M",
            "req" : "1",
            "entity" : "Image",
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
            ]
         }
      ],
      "(0010,0021)" : {
         "entity" : "Patient",
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
                     ]
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "name" : "Issuer of Patient ID",
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0008,0110)[<0>](0008,010c)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Coding Scheme UID",
         "desc" : "The coding scheme UID identifier. Required if coding scheme is identified by an ISO 8824 object identifier compatible with the UI VR.",
         "req" : "1C",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,1140)[<0>](0008,1155)" : [
         {
            "mod_tables" : [
               "table_C.7-9",
               "table_10-3",
               "table_10-11"
            ],
            "entity" : "Image",
            "req" : "1",
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "name" : "Referenced SOP Instance UID",
            "usage" : "M",
            "module" : "General Image"
         },
         {
            "mod_tables" : [
               "table_C.8.24.3-1",
               "table_10-3",
               "table_10-11"
            ],
            "entity" : "Image",
            "req" : "1",
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "name" : "Referenced SOP Instance UID",
            "usage" : "M",
            "module" : "Enhanced US Image"
         }
      ],
      "(0028,1404)" : {
         "desc" : [
            "Specification of the weight of the primary path input to the Blending Operation, i.e., the value that is referred to as \"Weight 1\" in the Enhanced Blending and Display Pipeline.",
            "Only a single item shall be included in this sequence.",
            "Required if there are one or more items of the Data Path Assignment Sequence (0028,1402) other than PRIMARY_PVALUES."
         ],
         "entity" : "Image",
         "req" : "1C",
         "module" : "Enhanced Palette Color Lookup Table",
         "usage" : "U",
         "name" : "Blending LUT 1 Sequence",
         "mod_tables" : [
            "table_C.7.6.23-1"
         ]
      },
      "(0028,0006)" : {
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
         "req" : "1C",
         "entity" : "Image",
         "usage" : "M",
         "module" : "Image Pixel",
         "name" : "Planar Configuration",
         "mod_tables" : [
            "table_C.7-11b"
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0008,1160)" : {
         "name" : "Referenced Frame Number",
         "module" : "Specimen",
         "usage" : "U",
         "req" : "1C",
         "entity" : "Image",
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
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0400,0561)[<0>](0400,0550)[0](gggg,eeee)" : {
         "desc" : "May include Sequence Attributes and their Items.",
         "req" : "1",
         "entity" : "Image",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Any Attribute from the main data set that was modified or removed.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0020,930c)" : {
         "mod_tables" : [
            "table_C.8.24.2-1"
         ],
         "name" : "Patient Frame of Reference Source",
         "usage" : "M",
         "module" : "Ultrasound Frame of Reference",
         "entity" : "Frame of Reference",
         "req" : "1C",
         "desc" : [
            "Indicates how the supplied Image Position (Patient) (0020,0032) and Image Orientation (Patient) (0020,0037) values are obtained.",
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "TABLE",
                     "A positioning device, such as a gantry, was used to generate these values."
                  ],
                  [
                     "ESTIMATED",
                     "Estimated patient position / orientation (e.g., estimated by the user), or if reliable information is not available."
                  ],
                  [
                     "REGISTRATION",
                     "Acquisition has been spatially registered to a prior image set."
                  ]
               ],
               "type" : "variablelist"
            },
            "Required if either Image Position (Patient) (0020,0032) or Image Orientation (Patient) (0020,0037) is present."
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a161)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "module" : "Specimen",
         "name" : "Floating Point Value",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "entity" : "Image"
      },
      "(0018,9803)[<0>](0018,9805)" : {
         "mod_tables" : [
            "table_C.8.24.5-1"
         ],
         "desc" : "Duration of the exclusion in ms.",
         "entity" : "Image",
         "req" : "1",
         "module" : "Excluded Intervals",
         "usage" : "U",
         "name" : "Exclusion Duration"
      },
      "(0020,0011)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : "A number that identifies this Series.",
         "req" : "2",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series",
         "name" : "Series Number"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Image",
         "req" : "1",
         "module" : "Common Instance Reference",
         "usage" : "U",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ]
      },
      "(7fe0,0010)" : {
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "entity" : "Image",
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
         "name" : "Pixel Data",
         "usage" : "M",
         "module" : "Image Pixel"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0020)" : {
         "mod_tables" : [
            "table_C.8.24.3-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
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
         "req" : "1",
         "entity" : "Image",
         "module" : "Enhanced US Image",
         "usage" : "M",
         "name" : "Data Elements Signed"
      },
      "(0400,0561)[<0>](0400,0562)" : {
         "name" : "Attribute Modification DateTime",
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "1",
         "entity" : "Image",
         "desc" : "Date and time the attributes were removed and/or replaced.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0020,000d)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "Unique identifier for the Study.",
         "entity" : "Study",
         "req" : "1",
         "module" : "General Study",
         "usage" : "M",
         "name" : "Study Instance UID"
      },
      "(0010,2210)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : [
            "The anatomical orientation type used in instances generated by this equipment.",
            {
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
               ],
               "title" : "Enumerated Values:"
            },
            [
               "Required if the patient is an animal and the anatomical frame of reference is not bipedal. May be present otherwise. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.1.1.1"
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
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "module" : "General Series",
         "name" : "Anatomical Orientation Type"
      },
      "(0088,0200)[<0>](0028,0034)" : [
         {
            "name" : "Pixel Aspect Ratio",
            "module" : "General Image",
            "usage" : "M",
            "entity" : "Image",
            "req" : "1C",
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
               "table_C.7-9",
               "table_C.7-11b"
            ]
         },
         {
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
            "entity" : "Image",
            "req" : "1C",
            "usage" : "M",
            "module" : "Enhanced US Image",
            "name" : "Pixel Aspect Ratio",
            "mod_tables" : [
               "table_C.8.24.3-1",
               "table_C.7-11b"
            ]
         }
      ],
      "(0040,0275)[<0>](0008,1110)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
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
         "name" : "Referenced Study Sequence",
         "usage" : "M",
         "module" : "General Series"
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
      "Can't handle table_8.8-1 (in table_C.8.24.1-1 after (0040,0260))",
      "Can't handle table_8.8-1 (in table_C.8.24.1-1:table_10-2 after (0040,A043))",
      "Can't handle table_8.8-1 (in table_C.8.24.1-1:table_10-2 after (0040,A168))",
      "Can't handle table_8.8-1 (in table_C.8.24.1-1:table_10-2 after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.8.24.1-1:table_10-2 after (0040,A043))",
      "Can't handle table_8.8-1 (in table_C.8.24.1-1:table_10-2 after (0040,A168))",
      "Can't handle table_8.8-1 (in table_C.8.24.1-1:table_10-2 after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.7-9 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.7-9 after (0008,9215))",
      "Can't handle table_8.8-1 (in table_C.7-9 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.7-9 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.7-9:table_C.7.6.16-12b after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.7-12b after (0018,0012))",
      "Can't handle table_8.8-1 (in table_C.7-12b after (0018,0014))",
      "Can't handle table_8.8-1 (in table_C.7-12b after (0018,9338))",
      "Can't handle processing of table_C.7.6.16-1 in Image:Multi-frame Functional Groups of table_A.59-1",
      "Can't handle table_8.8-1 (in table_C.7-18 after (0050,0010))",
      "Can't handle table_8.8-1 (in table_C.7.6.14-1 after (0040,A043))",
      "Can't handle table_8.8-1 (in table_C.7.6.14-1 after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.7.6.14-1 after (0040,A168))",
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
      "Can't handle table_8.8-1 (in table_C.8.24.3-1 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.8.24.3-1 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.8.24.3-1:table_C.17-3:table_C.17-3a after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.8.24.3-1 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.8.24.3-1 after (0040,000A))",
      "Can't handle table_8.8-1 (in table_C.8.24.3-1:table_10-24 after (0054,0220))",
      "Can't handle table_8.8-1 (in table_C.8.24.3-1:table_10-24 after (0054,0222))",
      "Can't handle table_8.8-1 (in table_C.8.24.3-1 after (0008,2135))",
      "Can't handle table_8.8-1 (in table_C.8.24.3-1:table_10-5 after (0008,2218))",
      "Can't handle table_8.8-1 (in table_C.8.24.3-1:table_10-5 after (0008,2220))",
      "Can't handle table_8.8-1 (in table_C.8.24.3-1:table_10-5:table_10-8 after (0008,2228))",
      "Can't handle table_8.8-1 (in table_C.8.24.3-1:table_10-5:table_10-8 after (0008,2230))",
      "Can't handle table_8.8-1 (in table_C.8.24.3-1 after (0018,9809))",
      "Can't handle table_8.8-1 (in table_C.8.24.3-1 after (0018,980D))",
      "Can't handle table_8.8-1 (in table_C.8.24.3-1 after (0018,980E))",
      "Can't handle table_8.8-1 (in table_C.8.24.3-1 after (0018,980F))",
      "Can't handle table_8.8-1 (in table_C.12-1 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_C.12-6 after (0400,0401))"
   ]
}