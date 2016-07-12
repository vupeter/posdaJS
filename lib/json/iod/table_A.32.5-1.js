var data = {
   "tags" : {
      "(0008,1072)[<0>](0040,1102)" : {
         "module" : "General Series",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "desc" : "Person's mailing address",
         "req" : "3",
         "name" : "Person's Address"
      },
      "(0008,0053)" : {
         "entity" : "Image",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "The view requested during the C-MOVE operation that resulted in the transfer of this instance.",
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
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
         "name" : "Query/Retrieve View",
         "req" : "1C"
      },
      "(0010,0030)" : {
         "desc" : "Birth date of the patient.",
         "name" : "Patient's Birth Date",
         "req" : "2",
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0008,114a)" : {
         "req" : "3",
         "name" : "Referenced Instance Sequence",
         "desc" : [
            "Non-image composite SOP Instances that are significantly related to this Image, including waveforms that may or may not be temporally synchronized with this image.",
            "One or more Items are permitted in this Sequence."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "entity" : "Image",
         "module" : "General Image"
      },
      "(0008,009c)" : {
         "desc" : "Consulting physician(s) for this patient visit.",
         "req" : "3",
         "name" : "Consulting Physician's Name",
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M"
      },
      "(0018,9004)" : {
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
         "entity" : "Image",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0008,0012)" : {
         "entity" : "Image",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Date the SOP Instance was created.",
            "This is the date that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "req" : "3",
         "name" : "Instance Creation Date"
      },
      "(0040,0275)[<0>](0040,0008)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Scheduled Protocol Code Sequence",
         "req" : "3",
         "desc" : "Sequence describing the Scheduled Protocol following a specific coding scheme. One or more Items are permitted in this Sequence."
      },
      "(0028,2112)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image",
         "entity" : "Image",
         "req" : "3",
         "name" : "Lossy Image Compression Ratio",
         "desc" : [
            "Describes the approximate lossy compression ratio(s) that have been applied to this image.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.1.1.5.2",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ]
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(0010,2299)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Responsible Organization",
         "req" : "2C",
         "desc" : [
            "Name of organization with medical or welfare decision making authority for the patient.",
            "Required if patient is an animal. May be present otherwise."
         ]
      },
      "(0008,2112)" : {
         "name" : "Source Image Sequence",
         "req" : "3",
         "desc" : [
            "The set of Image SOP Class/Instance pairs of the Images that were used to derive this Image.",
            "One or more Items are permitted in this Sequence.",
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
            ]
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image",
         "entity" : "Image"
      },
      "(0008,0096)[<0>](0040,1103)" : {
         "name" : "Person's Telephone Numbers",
         "req" : "3",
         "desc" : "Person's telephone number(s)",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0040,a390)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "entity" : "Image",
         "module" : "SOP Common",
         "req" : "1C",
         "name" : "HL7 Structured Document Reference Sequence",
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
         ]
      },
      "(0040,0515)[<0>](0040,0513)[<1>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
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
         "usage" : "C - Required if the Imaging Subject is a Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "entity" : "Image",
         "module" : "Specimen"
      },
      "(0028,1102)" : {
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
         "req" : "1C",
         "name" : "Green Palette Color Lookup Table Descriptor",
         "entity" : "Image",
         "module" : "Image Pixel",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-11b"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a161)" : {
         "name" : "Floating Point Value",
         "req" : "1C",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0307)" : {
         "req" : "1",
         "name" : "Deidentification Action",
         "desc" : [
            "Recommended action to be performed during de-identification on elements listed in Identifying Private Elements (0008,0306) within this Item.",
            {
               "el" : "note",
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
               ]
            },
            {
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
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
                           "el" : "listitem",
                           "content" : [
                              "\n                      ",
                              {
                                 "content" : [
                                    "No suggested dummy value is provided, since the encoding of the value would depend on the VR of the data element."
                                 ],
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_d1ef55e5-ae5a-41bf-a17e-aee8ee6c841f"
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
                                 "content" : [
                                    "Further explanation of these actions can be found in ",
                                    {
                                       "attrs" : {
                                          "targetptr" : "sect_E.3.1",
                                          "xrefstyle" : "template:PS3.15 Section %n %t",
                                          "targetdoc" : "PS3.15"
                                       },
                                       "el" : "olink"
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
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0028,2110)" : [
         {
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "entity" : "Image",
            "module" : "General Image",
            "name" : "Lossy Image Compression",
            "req" : "3",
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
            ]
         },
         {
            "module" : "VL Image",
            "entity" : "Image",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-77"
            ],
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
                  }
               ]
            ],
            "name" : "Lossy Image Compression",
            "req" : "2"
         }
      ],
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a121)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1C",
         "name" : "Date",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ]
      },
      "(0040,0275)" : {
         "req" : "3",
         "name" : "Request Attributes Sequence",
         "desc" : [
            "Sequence that contains attributes from the Imaging Service Request.",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0008,1052)[<0>](0008,0080)" : {
         "req" : "1C",
         "name" : "Institution Name",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0010,2201)" : {
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
         ],
         "req" : "1C",
         "name" : "Patient Species Description",
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,003a)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient",
         "req" : "3",
         "name" : "Assigning Agency or Department Code Sequence",
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
      "(0008,2218)[<0>](0008,2220)" : {
         "module" : "VL Image",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-77"
         ],
         "desc" : [
            "Sequence of Items that modifies the anatomic region of interest of this image",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "name" : "Anatomic Region Modifier Sequence"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0031)" : {
         "module" : "General Series",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "name" : "Local Namespace Entity ID",
         "req" : "1C"
      },
      "(0008,2112)[<0>](0020,0020)" : {
         "module" : "General Image",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "desc" : [
            "The Patient Orientation values of the source image.",
            "Required if the value of Spatial Locations Preserved (0028,135A) is REORIENTED_ONLY."
         ],
         "name" : "Patient Orientation",
         "req" : "1C"
      },
      "(0088,0200)[<0>](0028,1101)" : {
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M",
         "module" : "General Image",
         "entity" : "Image",
         "req" : "1C",
         "name" : "Red Palette Color Lookup Table Descriptor",
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
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ],
         "entity" : "Image",
         "module" : "Common Instance Reference"
      },
      "(0018,a001)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "3",
         "name" : "Contributing Equipment Sequence",
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
         ]
      },
      "(0040,0520)[<0>](0050,001b)" : {
         "usage" : "C - Required if the Imaging Subject is a Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "entity" : "Image",
         "module" : "Specimen",
         "name" : "Container Component ID",
         "req" : "3",
         "desc" : "Manufacturer's identifier of the container component, e.g., Lot Number and/or Version."
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,08ea)" : {
         "module" : "Specimen",
         "entity" : "Image",
         "usage" : "C - Required if the Imaging Subject is a Specimen",
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
         "name" : "Measurement Units Code Sequence"
      },
      "(0040,0515)[<0>](0040,0512)" : {
         "usage" : "C - Required if the Imaging Subject is a Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "entity" : "Image",
         "req" : "1",
         "name" : "Container Identifier",
         "desc" : "The identifier for the container that contains the specimen(s) being imaged."
      },
      "(0040,9096)[<0>](0040,9220)" : {
         "module" : "General Image",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "usage" : "M",
         "desc" : [
            "A list of name-value pairs that describe the characteristics of the quantity represented by the Real World Value.",
            "One or more Items are permitted in this Sequence.",
            "One of the items shall have a concept name that specifies the quantified characteristic, though it is not required that (G-C1C6, SRT, \"Quantity\") be used if there is a reason to use a similar concept from a different coding scheme. Other items may be concept modifiers, such as (G-C036, SRT, \"Measurement Method\"). The order of the items is not significant."
         ],
         "req" : "3",
         "name" : "Quantity Definition Sequence"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0033)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "1C",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_cdc31146-8c35-4426-8c4c-509f0256519d"
                     }
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
         ]
      },
      "(0028,0303)" : {
         "req" : "3",
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
                     "targetdoc" : "PS3.15",
                     "xrefstyle" : "select: labelnumber",
                     "targetptr" : "PS3.15"
                  },
                  "el" : "olink"
               },
               "."
            ]
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Image"
      },
      "(0028,0106)" : {
         "req" : "3",
         "name" : "Smallest Image Pixel Value",
         "desc" : "The minimum actual pixel value encountered in this image.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "entity" : "Image",
         "module" : "Image Pixel"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1150)" : {
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "name" : "Referenced SOP Class UID"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a163)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "module" : "General Series",
         "req" : "1C",
         "name" : "Rational Denominator Value",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ]
      },
      "(0040,0513)[<0>](0040,0031)" : {
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "name" : "Local Namespace Entity ID",
         "req" : "1C",
         "module" : "Specimen",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "usage" : "C - Required if the Imaging Subject is a Specimen"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a160)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1C",
         "name" : "Text Value",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ]
      },
      "(0008,1049)[<0>](0040,1104)" : {
         "req" : "3",
         "name" : "Person's Telecom Information",
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
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_96e493a8-b679-4f97-987f-4e08360642a4"
                                 },
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "entity" : "Study"
      },
      "(0008,1140)[<0>](0008,1150)" : [
         {
            "name" : "Referenced SOP Class UID",
            "req" : "1",
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-9",
               "table_10-3",
               "table_10-11"
            ],
            "module" : "General Image",
            "entity" : "Image"
         },
         {
            "module" : "VL Image",
            "entity" : "Image",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-77",
               "table_10-3",
               "table_10-11"
            ],
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "req" : "1",
            "name" : "Referenced SOP Class UID"
         }
      ],
      "(0010,1020)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "entity" : "Study",
         "module" : "Patient Study",
         "req" : "3",
         "name" : "Patient's Size",
         "desc" : "Length or size of the Patient, in meters."
      },
      "(0008,2143)" : {
         "mod_tables" : [
            "table_C.7-13"
         ],
         "usage" : "M",
         "entity" : "Image",
         "module" : "Cine",
         "name" : "Stop Trim",
         "req" : "3",
         "desc" : "The Frame Number of the last frame of a Multi-frame image to be displayed."
      },
      "(0008,009d)[<0>](0040,1103)" : {
         "desc" : "Person's telephone number(s)",
         "name" : "Person's Telephone Numbers",
         "req" : "3",
         "module" : "General Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0562)[<1>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "req" : "1C",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "usage" : "C - Required if the Imaging Subject is a Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "module" : "Specimen",
         "entity" : "Image"
      },
      "(0012,0072)" : {
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "usage" : "U",
         "module" : "Clinical Trial Series",
         "entity" : "Series",
         "req" : "3",
         "name" : "Clinical Trial Series Description",
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
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a168)" : {
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "req" : "1C",
         "name" : "Concept Code Sequence",
         "entity" : "Image",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "C - Required if the Imaging Subject is a Specimen"
      },
      "(0050,0010)[<0>](0050,0014)" : {
         "mod_tables" : [
            "table_C.7-18"
         ],
         "usage" : "U",
         "entity" : "Image",
         "module" : "Device",
         "req" : "3",
         "name" : "Device Length",
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
         ]
      },
      "(0008,103f)" : {
         "desc" : [
            "A coded description of the Series.",
            "Only a single Item is permitted in this Sequence."
         ],
         "name" : "Series Description Code Sequence",
         "req" : "3",
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "req" : "1C",
         "name" : "Universal Entity ID",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0040,0520)[<0>](0050,001c)" : {
         "desc" : "Length in mm of container component.",
         "req" : "3",
         "name" : "Container Component Length",
         "module" : "Specimen",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "C - Required if the Imaging Subject is a Specimen"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1102)" : {
         "desc" : "Person's mailing address",
         "name" : "Person's Address",
         "req" : "3",
         "module" : "SOP Common",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "M"
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0008,1062)[<0>](0008,0080)" : {
         "module" : "General Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "req" : "1C",
         "name" : "Institution Name"
      },
      "(0010,0026)[<0>](0010,0021)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
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
         "name" : "Issuer of Patient ID",
         "req" : "3"
      },
      "(0008,1140)" : [
         {
            "desc" : [
               "Other images significantly related to this image (e.g., post-localizer CT image or Mammographic biopsy or partial view images).",
               "One or more Items are permitted in this Sequence."
            ],
            "name" : "Referenced Image Sequence",
            "req" : "3",
            "module" : "General Image",
            "entity" : "Image",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-9"
            ]
         },
         {
            "desc" : [
               "A Sequence that references other images significantly related to this image.",
               "One or more Items are permitted in this Sequence.",
               [
                  "Required if Image Type (0008,0008) Value 3 is present and has a value of \"STEREO L\" or \"STEREO R\". May also be present otherwise. See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.8.12.1.1.7"
                     }
                  },
                  "."
               ]
            ],
            "name" : "Referenced Image Sequence",
            "req" : "1C",
            "entity" : "Image",
            "module" : "VL Image",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-77"
            ]
         }
      ],
      "(0008,0096)[<0>](0040,1104)" : {
         "req" : "3",
         "name" : "Person's Telecom Information",
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
                     ]
                  },
                  "\n              "
               ]
            }
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "entity" : "Study"
      },
      "(0010,1010)" : {
         "name" : "Patient's Age",
         "req" : "3",
         "desc" : "Age of the Patient.",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "entity" : "Study",
         "module" : "Patient Study"
      },
      "(0050,0010)[<0>](0018,1003)" : {
         "mod_tables" : [
            "table_C.7-18"
         ],
         "usage" : "U",
         "module" : "Device",
         "entity" : "Image",
         "name" : "Device ID",
         "req" : "3",
         "desc" : "User-supplied identifier for the device"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a163)" : {
         "usage" : "C - Required if the Imaging Subject is a Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "entity" : "Image",
         "module" : "Specimen",
         "name" : "Rational Denominator Value",
         "req" : "1C",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ]
      },
      "(0088,0200)[<0>](0028,0100)" : {
         "entity" : "Image",
         "module" : "General Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "desc" : [
            "Number of bits allocated for each pixel sample. Each sample shall have the same number of bits allocated. Bits Allocated (0028,0100) shall be either 1, or a multiple of 8. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: labelnumber",
                  "targetdoc" : "PS3.5",
                  "targetptr" : "PS3.5"
               },
               "el" : "olink"
            },
            " for further explanation."
         ],
         "name" : "Bits Allocated",
         "req" : "1"
      },
      "(0018,a001)[<0>](0018,1200)" : {
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
         "name" : "Date of Last Calibration",
         "req" : "3",
         "module" : "SOP Common",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0012,0083)" : {
         "name" : "Consent for Clinical Trial Use Sequence",
         "req" : "3",
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
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "module" : "Clinical Trial Study",
         "entity" : "Study"
      },
      "(0040,0555)[<0>](0040,a040)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "module" : "Acquisition Context",
         "entity" : "Image",
         "name" : "Value Type",
         "req" : "3",
         "desc" : [
            "The type of the value encoded in this Item.",
            {
               "title" : "Defined Terms:",
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
               ]
            },
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_10.2",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ]
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "req" : "1C",
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
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0028,0107)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "entity" : "Image",
         "module" : "Image Pixel",
         "name" : "Largest Image Pixel Value",
         "req" : "3",
         "desc" : "The maximum actual pixel value encountered in this image."
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1155)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ],
         "module" : "Common Instance Reference",
         "entity" : "Image",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0010,0032)" : {
         "name" : "Patient's Birth Time",
         "req" : "3",
         "desc" : "Birth time of the Patient.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0038,0014)" : {
         "name" : "Issuer of Admission ID Sequence",
         "req" : "3",
         "desc" : [
            "Identifier of the Assigning Authority that issued Admission ID (0038,0010).",
            "Only a single Item is permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "module" : "Patient Study",
         "entity" : "Study"
      },
      "(0010,0216)[<0>](0010,0217)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "Identification of the organization that is the source of the animal, issued by the registry identified by Strain Source Registry Code Sequence (0010,0215). See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.1.1.1.4",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "name" : "Strain Source",
         "req" : "1"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a30a)" : {
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "name" : "Numeric Value",
         "req" : "1C"
      },
      "(0028,0120)" : {
         "req" : "1C",
         "name" : "Pixel Padding Value",
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
                           "el" : "listitem",
                           "content" : [
                              "\n                        ",
                              {
                                 "attrs" : {
                                    "xml:id" : "para_6f2fdee2-7dad-437a-8654-b37b23363d43"
                                 },
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
                                 "attrs" : {
                                    "xml:id" : "para_26f7a207-e6e2-417b-bd79-9085f3fa60cb"
                                 },
                                 "el" : "para",
                                 "content" : [
                                    "This Attribute does apply to RT Dose and Segmentation instances, since they include Pixel Data."
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
                                    "This Attribute does\n                          not apply when Float Pixel Data (7FE0,0008) or Double Float Pixel Data\n                          (7FE0,0009) are used instead of Pixel Data (7FE0,0010); Float Pixel\n                          Padding Value (0028,0122) or Double Float Pixel Padding Value\n                          (0028,0123), respectively, are used instead, and defined at the Image,\n                          not the Equipment, level."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_77a29ed0-edb8-45c2-a3d1-d07bc572e485"
                                 },
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
         ],
         "usage" : "M",
         "module" : "General Equipment",
         "entity" : "Equipment"
      },
      "(0018,1244)" : {
         "name" : "Preferred Playback Sequencing",
         "req" : "3",
         "desc" : [
            "Describes the preferred playback sequencing for a multi-frame image.",
            {
               "title" : "Enumerated Values:",
               "type" : "variablelist",
               "list" : [
                  [
                     "0",
                     "Looping (1,2\u2026n,1,2,\u2026n,1,2,\u2026.n,\u2026)"
                  ],
                  [
                     "1",
                     "Sweeping (1,2,\u2026n,n-1,\u20262,1,2,\u2026n,\u2026)"
                  ]
               ]
            }
         ],
         "mod_tables" : [
            "table_C.7-13"
         ],
         "usage" : "M",
         "entity" : "Image",
         "module" : "Cine"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a124)" : {
         "name" : "UID",
         "req" : "1C",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "usage" : "C - Required if the Imaging Subject is a Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "entity" : "Image",
         "module" : "Specimen"
      },
      "(0008,0110)[<0>](0008,0103)" : {
         "name" : "Coding Scheme Version",
         "req" : "3",
         "desc" : "The coding scheme version associated with the Coding Scheme Designator (0008,0102).",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Image"
      },
      " (0010,0027) " : {
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
         "name" : "Group of Patients Identification Sequence",
         "req" : "\n                  3 ",
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "usage" : "M"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0033)" : {
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
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_10.14"
                  },
                  "el" : "xref"
               },
               " for Defined Terms."
            ]
         ],
         "name" : "Universal Entity ID Type",
         "req" : "1C",
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M"
      },
      "(0010,21b0)" : {
         "entity" : "Study",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "desc" : "Additional information about the Patient's medical history.",
         "req" : "3",
         "name" : "Additional Patient History"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0062,000b)" : {
         "name" : "Referenced Segment Number",
         "req" : "1C",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "C - Required if the Imaging Subject is a Specimen",
         "entity" : "Image",
         "module" : "Specimen"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a161)" : {
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "name" : "Floating Point Value",
         "req" : "1C",
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0008,1062)" : {
         "name" : "Physician(s) Reading Study Identification Sequence",
         "req" : "3",
         "desc" : "Identification of the physician(s) reading the Study. One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Name of Physician(s) Reading Study (0008,1060), if present.",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "module" : "General Study",
         "entity" : "Study"
      },
      "(0028,0302)" : {
         "entity" : "Image",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M",
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
         "req" : "3"
      },
      "(0008,1090)" : {
         "entity" : "Equipment",
         "module" : "General Equipment",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "desc" : "Manufacturer's model name of the equipment that produced the composite instances.",
         "req" : "3",
         "name" : "Manufacturer's Model Name"
      },
      "(0008,1052)[<0>](0040,1104)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Person's Telecom Information",
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
                           "el" : "listitem",
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
                           ]
                        },
                        "\n                  ",
                        {
                           "el" : "listitem",
                           "content" : [
                              "\n                    ",
                              {
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_96e493a8-b679-4f97-987f-4e08360642a4"
                                 },
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
         ]
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0008,1199)[<2>](0008,1155)" : {
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "M",
         "module" : "General Image",
         "entity" : "Image",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a122)" : {
         "entity" : "Image",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "C - Required if the Imaging Subject is a Specimen",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "req" : "1C",
         "name" : "Time"
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
            "."
         ],
         "name" : "Device Volume",
         "req" : "3",
         "module" : "Device",
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-18"
         ]
      },
      "(0028,0108)" : {
         "desc" : "The minimum value of all images in this Series.",
         "name" : "Smallest Pixel Value in Series",
         "req" : "3",
         "module" : "General Series",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a122)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "C - Required if the Imaging Subject is a Specimen",
         "entity" : "Image",
         "module" : "Specimen",
         "name" : "Time",
         "req" : "1C",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ]
      },
      "(0008,2112)[<0>](0040,a170)" : {
         "module" : "General Image",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M",
         "desc" : [
            "Describes the purpose for which the reference is made, that is what role the source image or frame(s) played in the derivation of this image.",
            "Only a single Item is permitted in this Sequence."
         ],
         "name" : "Purpose of Reference Code Sequence",
         "req" : "3"
      },
      "(0028,1051)" : {
         "mod_tables" : [
            "table_C.8-77"
         ],
         "usage" : "M",
         "module" : "VL Image",
         "entity" : "Image",
         "name" : "Window Width",
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
            "Required if Window Center (0028,1050) is present."
         ]
      },
      "(0018,5100)" : {
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
         ],
         "req" : "2C",
         "name" : "Patient Position",
         "module" : "General Series",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      " (0010,0027) [<0>](0018,5100)" : {
         "name" : "Patient Position",
         "req" : "3",
         "desc" : [
            [
               "Patient position descriptor relative to the equipment.  See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.1.4.1.1.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ],
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
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "module" : "Patient",
         "entity" : "Patient"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0039)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M",
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
         "name" : "Assigning Jurisdiction Code Sequence",
         "req" : "3"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1103)" : {
         "name" : "Person's Telephone Numbers",
         "req" : "3",
         "desc" : "Person's telephone number(s)",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "M",
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0010,1100)[<0>](0008,1199)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Referenced SOP Sequence",
         "req" : "1",
         "desc" : [
            "References to object instances.",
            "One or more Items shall be included in this Sequence"
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a121)" : {
         "module" : "Specimen",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "C - Required if the Imaging Subject is a Specimen",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "req" : "1C",
         "name" : "Date"
      },
      "(0040,0556)" : {
         "name" : "Acquisition Context Description",
         "req" : "3",
         "desc" : "Free-text description of the image-acquisition context.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "module" : "Acquisition Context",
         "entity" : "Image"
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0306)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "List of Private Data Elements in block that may contain identifying\n                  information (are unsafe from identity leakage)..",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once."
         ],
         "req" : "1",
         "name" : "Identifying Private Elements"
      },
      "(0018,1200)" : {
         "module" : "General Equipment",
         "entity" : "Equipment",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
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
         ],
         "name" : "Date of Last Calibration",
         "req" : "3"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a160)" : {
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "req" : "1C",
         "name" : "Text Value",
         "module" : "General Image",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0038,0062)" : {
         "name" : "Service Episode Description",
         "req" : "3",
         "desc" : "Description of the type of service episode.",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "module" : "Patient Study",
         "entity" : "Study"
      },
      "(0020,4000)" : {
         "desc" : "User-defined comments about the image",
         "req" : "3",
         "name" : "Image Comments",
         "module" : "General Image",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ]
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a043)" : {
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Concept Name Code Sequence",
         "req" : "1",
         "module" : "General Image",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "usage" : "M"
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
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0008,0110)[<0>](0008,010c)" : {
         "req" : "1C",
         "name" : "Coding Scheme UID",
         "desc" : "The coding scheme UID identifier. Required if coding scheme is identified by an ISO 8824 object identifier compatible with the UI VR.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "req" : "1C",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0012,0081)" : {
         "name" : "Clinical Trial Protocol Ethics Committee Name",
         "req" : "1C",
         "desc" : "Name of the Ethics Committee or Institutional Review Board (IRB) or Institutional Animal Care and Use Committees (IACUC) responsible for approval of the Clinical Trial or research. Required if Clinical Trial Protocol Ethics Committee Approval Number (0012,0082) is present.",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U",
         "module" : "Clinical Trial Subject",
         "entity" : "Patient"
      },
      "(0012,0060)" : {
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
         "req" : "2",
         "name" : "Clinical Trial Coordinating Center Name",
         "entity" : "Series",
         "module" : "Clinical Trial Series",
         "mod_tables" : [
            "table_C.7-5b"
         ],
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
         ],
         "name" : "Certificate Type",
         "req" : "1",
         "module" : "SOP Common",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M"
      },
      "(0008,0090)" : {
         "name" : "Referring Physician's Name",
         "req" : "2",
         "desc" : "Name of the patient's referring physician",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0012,0010)" : {
         "req" : "1",
         "name" : "Clinical Trial Sponsor Name",
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
         ],
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "entity" : "Patient",
         "module" : "Clinical Trial Subject"
      },
      "(0088,0200)[<0>](0028,0107)" : {
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M",
         "module" : "General Image",
         "entity" : "Image",
         "name" : "Largest Image Pixel Value",
         "req" : "3",
         "desc" : "The maximum actual pixel value encountered in this image."
      },
      "(0040,9096)[<0>](0040,9216)" : {
         "desc" : [
            "Specifies the first stored value mapped for the Real Word Value Intercept (0040,9224) and Real World Value Slope (0040,9225) or Real World Value LUT (0040,9212) of this Item.",
            "Required if Pixel Data (7FE0,0010) or Real World Value LUT Data (0040,9212) is present or Double Float Real World Value First Value Mapped (0040,9214) is absent.",
            {
               "content" : [
                  "\n                        ",
                  {
                     "content" : [
                        "This Attribute may be used even when Float Pixel Data (7FE0,0008) or Double Float Pixel Data (7FE0,0009) are used instead of Pixel Data (7FE0,0010) if an integer of the size of this Attribute is sufficient to define the range."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_3508a2ea-51f7-4d12-952b-1fec9e9b31a0"
                     }
                  },
                  "\n                      "
               ],
               "el" : "note"
            },
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
         "name" : "Real World Value First Value Mapped",
         "req" : "1C",
         "entity" : "Image",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "usage" : "M"
      },
      "(0008,1072)" : {
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : [
            "Identification of the operator(s) supporting the Series.",
            "One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Operators' Name (0008,1070), if present."
         ],
         "name" : "Operator Identification Sequence",
         "req" : "3"
      },
      "(0040,0520)[<0>](0050,001d)" : {
         "module" : "Specimen",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "C - Required if the Imaging Subject is a Specimen",
         "desc" : "Diameter in mm of container component for cylindrical or circular components.",
         "req" : "3",
         "name" : "Container Component Diameter"
      },
      "(0010,0216)[<0>](0010,0215)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Strain Source Registry Code Sequence",
         "req" : "1",
         "desc" : [
            [
               "Identification of the organization that is the registry of sources of animals. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.1.1.1.4"
                  }
               },
               "."
            ],
            "Only a single Item is permitted in this sequence."
         ]
      },
      "(0008,1080)" : {
         "desc" : "Description of the admitting diagnosis (diagnoses)",
         "name" : "Admitting Diagnoses Description",
         "req" : "3",
         "entity" : "Study",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U"
      },
      "(0040,0560)[<0>](0040,0562)" : {
         "desc" : [
            "The name or code for the institution that has assigned the Specimen Identifier.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "req" : "2",
         "name" : "Issuer of the Specimen Identifier Sequence",
         "module" : "Specimen",
         "entity" : "Image",
         "usage" : "C - Required if the Imaging Subject is a Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      "(0088,0200)[<0>](0028,1201)" : {
         "req" : "1C",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "entity" : "Image",
         "module" : "General Image"
      },
      "(0008,0110)[<0>](0008,0114)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The coding scheme identifier as defined in an external registry. Required if coding scheme is registered and Coding Scheme UID (0008,010C) is not present.",
         "name" : "Coding Scheme External ID",
         "req" : "2C"
      },
      "(0040,0513)" : {
         "name" : "Issuer of the Container Identifier Sequence",
         "req" : "2",
         "desc" : [
            "Organization that assigned the Container Identifier.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "C - Required if the Imaging Subject is a Specimen",
         "entity" : "Image",
         "module" : "Specimen"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a124)" : {
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "name" : "UID",
         "req" : "1C",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0062,000b)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Referenced Segment Number",
         "req" : "1C",
         "desc" : "Identifies the Segment Number to which the reference applies. Required if the Referenced SOP Instance is a Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0035)" : {
         "desc" : [
            "Type of Patient ID. Refer to HL7 v2 Table 0203 for Defined Terms.",
            {
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
               ],
               "el" : "note"
            }
         ],
         "req" : "3",
         "name" : "Identifier Type Code",
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ]
      },
      "(0010,0026)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient",
         "req" : "3",
         "name" : "Source Patient Group Identification Sequence",
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
         ]
      },
      "(0008,1049)[<0>](0008,0080)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "entity" : "Study",
         "req" : "1C",
         "name" : "Institution Name",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present."
      },
      "(0008,1049)[<0>](0040,1101)" : {
         "req" : "1",
         "name" : "Person Identification Code Sequence",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a122)" : {
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "name" : "Time",
         "req" : "1C"
      },
      "(0008,0096)[<0>](0040,1102)" : {
         "desc" : "Person's mailing address",
         "name" : "Person's Address",
         "req" : "3",
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0012,0021)" : {
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
         "req" : "2",
         "name" : "Clinical Trial Protocol Name",
         "entity" : "Patient",
         "module" : "Clinical Trial Subject",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-2b"
         ]
      },
      "(0040,0560)[<0>](0040,0620)" : {
         "req" : "1C",
         "name" : "Specimen Localization Content Item Sequence",
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
            "One or more Items shall be included in this Sequence.",
            "Required if multiple specimens present in the image. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "C - Required if the Imaging Subject is a Specimen",
         "entity" : "Image",
         "module" : "Specimen"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
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
         "req" : "3",
         "name" : "Assigning Facility Sequence"
      },
      "(0008,114a)[<0>](0040,a170)" : {
         "desc" : [
            "Code describing the purpose of the reference to the Instance(s).",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1",
         "name" : "Purpose of Reference Code Sequence",
         "module" : "General Image",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ]
      },
      "(0100,0420)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Image",
         "name" : "SOP Authorization DateTime",
         "req" : "3",
         "desc" : "The date and time when the SOP Instance Status (0100,0410) was set to AO."
      },
      "(4ffe,0001)[<0>](0400,0005)" : {
         "desc" : "A number, unique within this SOP Instance, used to identify this MAC Parameters Sequence (4FFE,0001) item from an Item of the Digital Signatures Sequence (FFFA,FFFA).",
         "name" : "MAC ID Number",
         "req" : "1",
         "entity" : "Image",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0035)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Identifier Type Code",
         "req" : "3",
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
         ]
      },
      "(0040,0275)[<0>](0020,000d)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Study Instance UID",
         "req" : "3",
         "desc" : "The unique identifier for the Study provided for this Requested Procedure."
      },
      "(0008,1084)" : {
         "name" : "Admitting Diagnoses Code Sequence",
         "req" : "3",
         "desc" : [
            "A sequence that conveys the admitting diagnosis (diagnoses).",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "entity" : "Study",
         "module" : "Patient Study"
      },
      "(0008,001a)" : {
         "req" : "3",
         "name" : "Related General SOP Class UID",
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
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Image"
      },
      "(0040,0251)" : {
         "name" : "Performed Procedure Step End Time",
         "req" : "3",
         "desc" : "Time at which the Performed Procedure Step ended.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0008,1052)[<0>](0040,1101)" : {
         "name" : "Person Identification Code Sequence",
         "req" : "1",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a123)" : {
         "name" : "Person Name",
         "req" : "1C",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "entity" : "Image",
         "module" : "General Image"
      },
      "(0012,0030)" : {
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
         ],
         "req" : "2",
         "name" : "Clinical Trial Site ID",
         "entity" : "Patient",
         "module" : "Clinical Trial Subject",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U"
      },
      "(0018,a001)[<0>](0008,1072)" : {
         "name" : "Operator Identification Sequence",
         "req" : "3",
         "desc" : [
            "Identification of the operator(s) of the contributing equipment.",
            "One or more Items are permitted in this Sequence.",
            "The number and order of Items shall correspond to the number and order of values of Operators' Name (0008,1070), if present."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0008,1140)[<0>](0040,a170)" : [
         {
            "req" : "3",
            "name" : "Purpose of Reference Code Sequence",
            "desc" : [
               "Describes the purpose for which the reference is made.",
               "Only a single Item is permitted in this Sequence."
            ],
            "mod_tables" : [
               "table_C.7-9"
            ],
            "usage" : "M",
            "entity" : "Image",
            "module" : "General Image"
         },
         {
            "name" : "Purpose of Reference Code Sequence",
            "req" : "2",
            "desc" : [
               "Describes the purpose for which the reference is made.",
               "Zero or one Item shall be included in this Sequence."
            ],
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-77"
            ],
            "module" : "VL Image",
            "entity" : "Image"
         }
      ],
      "(0040,0555)[<0>](0040,08ea)" : {
         "entity" : "Image",
         "module" : "Acquisition Context",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "desc" : [
            "Units of measurement.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Numeric Value (0040,A30A) is sent. Shall not be present otherwise."
         ],
         "name" : "Measurement Units Code Sequence",
         "req" : "1C"
      },
      "(0008,1050)" : {
         "req" : "3",
         "name" : "Performing Physician's Name",
         "desc" : "Name of the physician(s) administering the Series.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a30a)" : {
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "name" : "Numeric Value",
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1160)" : {
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
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
                     "content" : [
                        "This Attribute may be multi-valued."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_e06e8e0c-e051-4fbc-bfa9-82d4a32dd706"
                     }
                  },
                  "\n              "
               ],
               "el" : "note"
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "name" : "Referenced Frame Number",
         "req" : "1C"
      },
      "(0010,1100)[<0>](0040,e024)[<1>](0040,e030)" : {
         "desc" : "Uniquely identifies a Repository from which the referenced instances can be retrieved.",
         "name" : "Repository Unique ID",
         "req" : "1",
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ]
      },
      "(0008,0201)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "entity" : "Image",
         "module" : "SOP Common",
         "req" : "3",
         "name" : "Timezone Offset From UTC",
         "desc" : [
            "Contains the offset from UTC to the timezone for all DA and TM Attributes present in this SOP Instance, and for all DT Attributes present in this SOP Instance that do not contain an explicitly encoded timezone offset.",
            "Encoded as an ASCII string in the format \"&ZZXX\". The components of this string, from left to right, are & = \"+\" or \"-\", and ZZ = Hours and XX = Minutes of offset. Leading space characters shall not be present.",
            "The offset for UTC shall be +0000; -0000 shall not be used.",
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
                                 "content" : [
                                    "This encoding is the same as described in ",
                                    {
                                       "el" : "olink",
                                       "attrs" : {
                                          "xrefstyle" : "select: labelnumber",
                                          "targetdoc" : "PS3.5",
                                          "targetptr" : "PS3.5"
                                       }
                                    },
                                    " for the offset component of the DT Value Representation."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_526f07aa-0b79-4c2d-8362-049aceaf5696"
                                 },
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
                                 "attrs" : {
                                    "xml:id" : "para_155b097e-395f-4748-981c-0255b00fe9a8"
                                 },
                                 "content" : [
                                    "This Attribute does not apply to values with a DT Value Representation, that contains an explicitly encoded timezone offset."
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
                                 "attrs" : {
                                    "xml:id" : "para_1ab95f54-00ed-4128-a3f9-96f3f05669d0"
                                 },
                                 "content" : [
                                    "The corrected time may cross a 24 hour boundary. For example, if Local Time = 1.00 a.m. and Offset = +0200, then UTC = 11.00 p.m. (23.00) the day before."
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
                     ],
                     "el" : "orderedlist",
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
                     "el" : "para",
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
                     "content" : [
                        "Offset = -0200"
                     ],
                     "attrs" : {
                        "xml:id" : "para_16002fc2-2776-41b6-b49f-74eb5e06324a"
                     },
                     "el" : "para"
                  },
                  "\n                "
               ]
            },
            "The local timezone offset is undefined if this Attribute is absent."
         ]
      },
      "(0028,2000)" : [
         {
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "module" : "Image Pixel",
            "entity" : "Image",
            "name" : "ICC Profile",
            "req" : "3",
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
            ]
         },
         {
            "module" : "ICC Profile",
            "entity" : "Image",
            "usage" : "U",
            "mod_tables" : [
               "table_C.11.15-1"
            ],
            "desc" : "An ICC Profile encoding the transformation of device-dependent color stored pixel values into PCS-Values.",
            "req" : "1",
            "name" : "ICC Profile"
         }
      ],
      "(0040,0560)[<0>](0040,0620)[<1>](0040,08ea)" : {
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "name" : "Measurement Units Code Sequence",
         "req" : "1C",
         "module" : "Specimen",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "C - Required if the Imaging Subject is a Specimen"
      },
      "(0008,9215)" : {
         "name" : "Derivation Code Sequence",
         "req" : "3",
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
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M",
         "entity" : "Image",
         "module" : "General Image"
      },
      "(0008,2112)[<0>](0062,000b)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3"
         ],
         "module" : "General Image",
         "entity" : "Image",
         "req" : "1C",
         "name" : "Referenced Segment Number",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ]
      },
      "(0040,0560)[<0>](0040,0554)" : {
         "module" : "Specimen",
         "entity" : "Image",
         "usage" : "C - Required if the Imaging Subject is a Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
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
         "req" : "1",
         "name" : "Specimen UID"
      },
      "(0040,0513)[<0>](0040,0032)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "usage" : "C - Required if the Imaging Subject is a Specimen",
         "module" : "Specimen",
         "entity" : "Image",
         "req" : "1C",
         "name" : "Universal Entity ID",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise."
      },
      "(0040,9096)[<0>](0040,08ea)" : {
         "name" : "Measurement Units Code Sequence",
         "req" : "1",
         "desc" : [
            "Units of measurement.",
            "Only a single Item shall be included in this Sequence.",
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
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "usage" : "M",
         "entity" : "Image",
         "module" : "General Image"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0008,1199)[<2>](0062,000b)" : {
         "name" : "Referenced Segment Number",
         "req" : "1C",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "module" : "General Image",
         "entity" : "Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a043)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Concept Name Code Sequence",
         "req" : "1",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0028,1201)" : {
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "usage" : "M",
         "module" : "Image Pixel",
         "entity" : "Image",
         "name" : "Red Palette Color Lookup Table Data",
         "req" : "1C",
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
      "(0008,2112)[<0>](0028,135a)" : {
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M",
         "entity" : "Image",
         "module" : "General Image",
         "name" : "Spatial Locations Preserved",
         "req" : "3",
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
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
                                 "attrs" : {
                                    "xml:id" : "para_9976bb70-d841-4a34-8a47-46d189fa9d3b"
                                 },
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
                                 "attrs" : {
                                    "xml:id" : "para_2b403f53-2ffb-4cb8-b283-851c3cce981b"
                                 },
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
         ]
      },
      "(0040,9096)[<0>](0040,9213)" : {
         "desc" : [
            "Specifies the last stored value mapped for the Real Word Value Intercept (0040,9224) and Real World Value Slope (0040,9225) of this Item.",
            "Required if Real World Value Last Value Mapped (0040,9211) is absent.",
            {
               "content" : [
                  "\n                        ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_bd1c2eab-c851-45bf-8577-5108abbb24a6"
                     },
                     "content" : [
                        "The same Attribute with a double float precision value is used whether or not Float Pixel Data (7FE0,0008) or Double Float Pixel Data (7FE0,0009) are present, an integer value is not sufficient."
                     ]
                  },
                  "\n                      "
               ],
               "el" : "note"
            }
         ],
         "name" : "Double Float Real World Value Last Value Mapped",
         "req" : "1C",
         "module" : "General Image",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ]
      },
      "(0040,0260)[<0>](0040,0440)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Protocol Context Sequence",
         "req" : "3",
         "desc" : "Sequence that specifies the context for the Performed Protocol Code Sequence Item. One or more Items are permitted in this Sequence."
      },
      "(0040,0555)[<0>](0040,a161)" : {
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "usage" : "M",
         "module" : "Acquisition Context",
         "entity" : "Image",
         "req" : "1C",
         "name" : "Floating Point Value",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ]
      },
      "(0010,1100)[<0>](0040,e024)[<1>](0040,e031)" : {
         "name" : "Home Community ID",
         "req" : "3",
         "desc" : "Uniquely identifies a Community to which requests for the referenced instances can be directed.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0040,0275)[<0>](0040,0007)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series",
         "req" : "3",
         "name" : "Scheduled Procedure Step Description",
         "desc" : "Institution-generated description or classification of the Scheduled Procedure Step to be performed."
      },
      "(0040,0560)[<0>](0040,059a)" : {
         "name" : "Specimen Type Code Sequence",
         "req" : "3",
         "desc" : [
            "Specimen Type.",
            "Only a single Item is permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "C - Required if the Imaging Subject is a Specimen",
         "entity" : "Image",
         "module" : "Specimen"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a120)" : {
         "name" : "DateTime",
         "req" : "1C",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0008,1060)" : {
         "desc" : "Names of the physician(s) reading the Study.",
         "req" : "3",
         "name" : "Name of Physician(s) Reading Study",
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)" : {
         "usage" : "C - Required if the Imaging Subject is a Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "entity" : "Image",
         "module" : "Specimen",
         "name" : "Specimen Preparation Step Content Item Sequence",
         "req" : "1",
         "desc" : [
            "Sequence of Content Items identifying the processes used in one preparation step to prepare the specimen for image acquisition.",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1160)" : {
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
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
                     "attrs" : {
                        "xml:id" : "para_e06e8e0c-e051-4fbc-bfa9-82d4a32dd706"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ]
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "name" : "Referenced Frame Number",
         "req" : "1C"
      },
      "(0040,0275)[<0>](0008,1110)" : {
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M",
         "desc" : [
            "Uniquely identifies the Study SOP Instances associated with this SOP Instance.",
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
         "name" : "Referenced Study Sequence",
         "req" : "3"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a121)" : {
         "usage" : "C - Required if the Imaging Subject is a Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "entity" : "Image",
         "module" : "Specimen",
         "req" : "1C",
         "name" : "Date",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ]
      },
      "(0040,0560)" : {
         "module" : "Specimen",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "C - Required if the Imaging Subject is a Specimen",
         "desc" : [
            "Sequence of identifiers and detailed description of the specimen(s) being imaged.",
            "One or more Items shall be included in this Sequence.",
            "Each specimen imaged in the Pixel Data shall be identified by an Item in this Sequence. Other specimens in/on the container, but not imaged in the Pixel Data, may also be identified by Items in this Sequence."
         ],
         "req" : "1",
         "name" : "Specimen Description Sequence"
      },
      "(0018,1050)" : {
         "module" : "General Equipment",
         "entity" : "Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "name" : "Spatial Resolution",
         "req" : "3"
      },
      "(0018,a001)[<0>](0008,0081)" : {
         "req" : "3",
         "name" : "Institution Address",
         "desc" : "Address of the institution where the equipment that contributed to the composite instance is located.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Image"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0032)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M",
         "desc" : [
            "Universal or unique identifier for the Patient ID Assigning Authority. The authority identified by this attribute shall be the same as that of Issuer of Patient ID (0010,0021), if present.",
            {
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
               ],
               "el" : "note"
            }
         ],
         "name" : "Universal Entity ID",
         "req" : "3"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0032)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "name" : "Universal Entity ID",
         "req" : "1C"
      },
      "(0010,1100)[<0>](0040,e022)" : {
         "desc" : [
            "Details for retrieving instances from Media.",
            "Required if DICOM Retrieval Sequence (0040,E021), WADO Retrieval Sequence (0040,E023), and WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "This sequence shall only identify media known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "DICOM Media Retrieval Sequence",
         "req" : "1C",
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ]
      },
      "(0008,1200)[<0>](0008,1115)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "entity" : "Image",
         "module" : "Common Instance Reference",
         "name" : "Referenced Series Sequence",
         "req" : "1",
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0010,0024)[<0>](0040,0035)" : {
         "desc" : [
            "Type of Patient ID. Refer to HL7 v2 Table 0203 for Defined Terms.",
            {
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
               ],
               "el" : "note"
            }
         ],
         "req" : "3",
         "name" : "Identifier Type Code",
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1101)" : {
         "req" : "1",
         "name" : "Person Identification Code Sequence",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-11"
         ],
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0008,1049)[<0>](0008,0081)" : {
         "req" : "3",
         "name" : "Institution Address",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "module" : "General Study",
         "entity" : "Study"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a121)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Date",
         "req" : "1C",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ]
      },
      "(0040,a390)[<0>](0040,e001)" : {
         "req" : "1",
         "name" : "HL7 Instance Identifier",
         "desc" : "Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0018,0015)" : {
         "req" : "3",
         "name" : "Body Part Examined",
         "desc" : [
            [
               "Text description of the part of the body examined. See ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "targetdoc" : "PS3.16",
                     "xrefstyle" : "template:Annex %n \u201c%t\u201d in PS3.16",
                     "targetptr" : "chapter_L"
                  }
               },
               " for Defined Terms"
            ],
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "Some IODs support the Anatomic Region Sequence (0008,2218), which can provide a more comprehensive mechanism for specifying the body part being examined."
                     ],
                     "attrs" : {
                        "xml:id" : "para_c8ff54a1-69e9-4623-abb8-672af78baddf"
                     },
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0088,0200)[<0>](0028,0103)" : {
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M",
         "module" : "General Image",
         "entity" : "Image",
         "req" : "1",
         "name" : "Pixel Representation",
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
         ]
      },
      " (0010,0027) [<0>](0010,0021)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
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
         "req" : "3",
         "name" : "Issuer of Patient ID"
      },
      "(0012,0083)[<0>](0012,0084)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "entity" : "Study",
         "module" : "Clinical Trial Study",
         "req" : "1C",
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
               "type" : "variablelist",
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
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "C - Required if the Imaging Subject is a Specimen",
         "module" : "Specimen",
         "entity" : "Image",
         "req" : "1C",
         "name" : "Referenced SOP Sequence",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ]
      },
      "(0088,0200)[<0>](0028,1202)" : {
         "entity" : "Image",
         "module" : "General Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
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
         "req" : "1C",
         "name" : "Green Palette Color Lookup Table Data"
      },
      "(0040,9096)[<0>](0040,9212)" : {
         "desc" : [
            "LUT Data in this Sequence.",
            "Required if Real World Value Intercept (0040,9224) is not present."
         ],
         "name" : "Real World Value LUT Data",
         "req" : "1C",
         "module" : "General Image",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a124)" : {
         "module" : "Specimen",
         "entity" : "Image",
         "usage" : "C - Required if the Imaging Subject is a Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "req" : "1C",
         "name" : "UID"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0008,1160)" : {
         "usage" : "C - Required if the Imaging Subject is a Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "entity" : "Image",
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
                     "attrs" : {
                        "xml:id" : "para_e06e8e0c-e051-4fbc-bfa9-82d4a32dd706"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ]
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ]
      },
      "(0020,0060)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Laterality",
         "req" : "2C",
         "desc" : [
            "Laterality of (paired) body part examined. Required if the body part examined is a paired structure and Image Laterality (0020,0062) or Frame Laterality (0020,9072) or Measurement Laterality (0024,0113) are not sent.",
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
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_46e9d782-b47b-4339-b6ff-a11691e830db"
                     },
                     "content" : [
                        "Some IODs support Image Laterality (0020,0062) at the Image level or Frame Laterality (0020,9072) at the Frame level in the Frame Anatomy functional group macro or Measurement Laterality (0024,0113) at the Measurement level, which can provide a more comprehensive mechanism for specifying the laterality of the body part(s) being examined."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ]
      },
      "(4ffe,0001)[<0>](0400,0010)" : {
         "req" : "1",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_40579f95-ca05-4631-a8e7-a1923ddde665"
                     }
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "entity" : "Image"
      },
      "(0028,0008)" : {
         "req" : "1",
         "name" : "Number of Frames",
         "desc" : [
            "Number of frames in a Multi-frame Image. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.6.6.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            " for further explanation."
         ],
         "mod_tables" : [
            "table_C.7-14"
         ],
         "usage" : "M",
         "module" : "Multi-frame",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a163)" : {
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "name" : "Rational Denominator Value",
         "req" : "1C",
         "module" : "General Series",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0018,0072)" : {
         "desc" : "Total time in seconds that data was actually taken for the entire Multi-frame image.",
         "req" : "3",
         "name" : "Effective Duration",
         "entity" : "Image",
         "module" : "Cine",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-13"
         ]
      },
      "(0008,0051)" : {
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this Sequence."
         ],
         "name" : "Issuer of Accession Number Sequence",
         "req" : "3"
      },
      "(0008,1052)[<0>](0040,1103)" : {
         "name" : "Person's Telephone Numbers",
         "req" : "3",
         "desc" : "Person's telephone number(s)",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1155)" : {
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ],
         "module" : "Common Instance Reference",
         "entity" : "Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a122)" : {
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "req" : "1C",
         "name" : "Time"
      },
      "(0008,1120)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "desc" : [
            "A sequence that provides reference to a Patient SOP Class/Instance pair.",
            "Only a single Item is permitted in this Sequence."
         ],
         "name" : "Referenced Patient Sequence",
         "req" : "3"
      },
      "(0010,1100)[<0>](0040,e023)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
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
         "name" : "WADO Retrieval Sequence",
         "req" : "1C"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a120)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "name" : "DateTime",
         "req" : "1C",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ]
      },
      "(0010,1002)[<0>](0010,0021)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
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
         "req" : "3",
         "name" : "Issuer of Patient ID"
      },
      "(0012,0062)" : {
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
         "name" : "Patient Identity Removed",
         "req" : "3",
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
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
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0012,0042)" : {
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U",
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
         "req" : "1C",
         "name" : "Clinical Trial Subject Reading ID",
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
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1150)" : {
         "entity" : "Image",
         "module" : "Common Instance Reference",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ],
         "usage" : "U",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "name" : "Referenced SOP Class UID"
      },
      "(0008,1062)[<0>](0008,0082)" : {
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Institution Code Sequence",
         "req" : "1C",
         "entity" : "Study",
         "module" : "General Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0038,0060)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "entity" : "Study",
         "name" : "Service Episode ID",
         "req" : "3",
         "desc" : "Identifier of the Service Episode as assigned by the healthcare provider"
      },
      "(0008,1072)[<0>](0040,1103)" : {
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "desc" : "Person's telephone number(s)",
         "name" : "Person's Telephone Numbers",
         "req" : "3"
      },
      "(fffa,fffa)[<0>](0400,0105)" : {
         "name" : "Digital Signature DateTime",
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
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "entity" : "Image",
         "module" : "SOP Common"
      },
      " (0010,0027) [<0>](0010,0028)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "usage" : "M",
         "desc" : [
            "The position in the image pixel data of the individual subject identified in this sequence relative to the other subjects. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.1.4.1.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "name" : "Subject Relative Position in Image",
         "req" : "3"
      },
      "(4ffe,0001)" : {
         "desc" : [
            "A sequence of items that describe the parameters used to calculate a MAC for use in Digital Signatures.",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "3",
         "name" : "MAC Parameters Sequence",
         "module" : "SOP Common",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M"
      },
      "(0008,0300)[<0>](0008,0304)" : {
         "name" : "Nonidentifying Private Elements",
         "req" : "1C",
         "desc" : [
            "List of Private Data Elements in block that do not contain identifying\n                  information (are safe from identity leakage).",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once.",
            "Required if Block Identifying Information Status (0008,0303) equals MIXED."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Image"
      },
      "(0100,0426)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "3",
         "name" : "Authorization Equipment Certification Number",
         "desc" : "The certification number issued to the Application Entity that set the SOP Instance Status (0100,0410) to AO."
      },
      "(0400,0561)[<0>](0400,0563)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "desc" : "Identification of the system that removed and/or replaced the attributes.",
         "req" : "1",
         "name" : "Modifying System"
      },
      "(0008,1072)[<0>](0008,0082)" : {
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1C",
         "name" : "Institution Code Sequence"
      },
      "(0040,9096)[<0>](0040,9224)" : {
         "req" : "1C",
         "name" : "Real World Value Intercept",
         "desc" : [
            "The Intercept value in relationship between stored values (SV) and the Real World values.",
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
            "Required if Float Pixel Data (7FE0,0008) or Double Float Pixel Data (7FE0,0009) are present or Real World Value LUT Data (0040,9212) is not present."
         ],
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "usage" : "M",
         "module" : "General Image",
         "entity" : "Image"
      },
      "(0008,0110)[<0>](0008,0102)" : {
         "desc" : "The value of a Coding Scheme Designator, used in this SOP Instance, which is being mapped.",
         "name" : "Coding Scheme Designator",
         "req" : "1",
         "module" : "SOP Common",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0555)[<0>](0040,a121)" : {
         "req" : "1C",
         "name" : "Date",
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a date.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "The purpose or role of the date value could be specified in Concept Name Code Sequence (0040,A043)."
                     ],
                     "attrs" : {
                        "xml:id" : "para_3da4ec3b-efe8-40a6-9c46-16bb7c8b79ca"
                     },
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            },
            "Required if the value that Concept Name Code Sequence (0040,A043) requires (implies) is a date. Shall not be present otherwise."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "entity" : "Image",
         "module" : "Acquisition Context"
      },
      "(0400,0561)[<0>](0400,0550)[0](gggg,eeee)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "desc" : "May include Sequence Attributes and their Items.",
         "req" : "1",
         "name" : "Any Attribute from the main data set that was modified or removed."
      },
      "(0008,0014)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "module" : "SOP Common",
         "req" : "3",
         "name" : "Instance Creator UID",
         "desc" : "Uniquely identifies device that created the SOP Instance."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0062,000b)" : {
         "module" : "General Series",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "req" : "1C",
         "name" : "Referenced Segment Number"
      },
      "(0008,114a)[<0>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-11"
         ],
         "usage" : "M",
         "entity" : "Image",
         "module" : "General Image"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0008,1199)" : {
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "usage" : "M",
         "entity" : "Image",
         "module" : "General Image",
         "req" : "1C",
         "name" : "Referenced SOP Sequence",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ]
      },
      "(0010,1100)[<0>](0040,e021)[<1>](0008,0054)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Retrieve AE Title",
         "req" : "1",
         "desc" : "Title of a DICOM Application Entity where the referenced instance(s) may be retrieved on the network."
      },
      "(0018,0040)" : {
         "req" : "3",
         "name" : "Cine Rate",
         "desc" : "Number of frames per second.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-13"
         ],
         "entity" : "Image",
         "module" : "Cine"
      },
      "(0018,1000)" : {
         "req" : "3",
         "name" : "Device Serial Number",
         "desc" : [
            "Manufacturer's serial number of the equipment that produced the composite instances.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_14bc1eda-9c90-459e-81ea-acab1d86e33b"
                     },
                     "content" : [
                        "This identifier corresponds to the device that actually created the images, such as a CR plate reader or a CT console, and may not be sufficient to identify all of the equipment in the imaging chain, such as the generator or gantry or plate."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "entity" : "Equipment",
         "module" : "General Equipment"
      },
      "(0008,0110)[<0>](0008,0116)" : {
         "desc" : "Name of the organization responsible for the Coding Scheme. May include organizational contact information.",
         "req" : "3",
         "name" : "Coding Scheme Responsible Organization",
         "module" : "SOP Common",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0012,0082)" : {
         "name" : "Clinical Trial Protocol Ethics Committee Approval Number",
         "req" : "3",
         "desc" : "Approval number issued by committee described in Clinical Trial Protocol Ethics Committee Name (0012,0081).",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U",
         "module" : "Clinical Trial Subject",
         "entity" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a123)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Person Name",
         "req" : "1C",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ]
      },
      "(0008,0096)[<0>](0008,0081)" : {
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "req" : "3",
         "name" : "Institution Address",
         "entity" : "Study",
         "module" : "General Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0008,1110)[<0>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "module" : "General Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a043)" : {
         "module" : "Specimen",
         "entity" : "Image",
         "usage" : "C - Required if the Imaging Subject is a Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1",
         "name" : "Concept Name Code Sequence"
      },
      "(0008,1164)[<0>](0008,1161)" : {
         "desc" : [
            "A list of Frames that were extracted in the form of a simple list.",
            "Required if object extraction is based on a Frame Level Retrieve using the Simple Frame List (0008,1161) attribute.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: labelnumber",
                     "targetdoc" : "PS3.4",
                     "targetptr" : "PS3.4"
                  },
                  "el" : "olink"
               },
               " \"Instance and Frame Level Retrieve SOP Classes\""
            ]
         ],
         "name" : "Simple Frame List",
         "req" : "1C",
         "module" : "Frame Extraction",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-9"
         ],
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request"
      },
      "(0010,0216)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "desc" : [
            "Information identifying an animal within a strain stock.",
            "Only a single Item is permitted in this sequence."
         ],
         "name" : "Strain Stock Sequence",
         "req" : "3"
      },
      "(0010,0024)[<0>](0040,003a)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
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
         ],
         "name" : "Assigning Agency or Department Code Sequence",
         "req" : "3"
      },
      "(0028,0109)" : {
         "desc" : "The maximum value of all images in this Series.",
         "req" : "3",
         "name" : "Largest Pixel Value in Series",
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M"
      },
      "(0010,0024)[<0>](0040,0036)" : {
         "req" : "3",
         "name" : "Assigning Facility Sequence",
         "desc" : [
            "The place or location identifier where the identifier was first assigned to the patient. This component is not an inherent part of the identifier but rather part of the history of the identifier.",
            "Only a single Item is permitted in this Sequence.",
            {
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
               ],
               "el" : "note"
            }
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0040,0555)[<0>](0040,a043)" : {
         "desc" : [
            "A concept that constrains the meaning of (i.e., defines the role of) the Observation Value. The \"Name\" component of a Name/Value pair.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1",
         "name" : "Concept Name Code Sequence",
         "module" : "Acquisition Context",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ]
      },
      "(0040,0512)" : {
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
         "name" : "Container Identifier",
         "req" : "1",
         "entity" : "Image",
         "module" : "Specimen",
         "usage" : "C - Required if the Imaging Subject is a Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      "(0012,0083)[<0>](0012,0020)" : {
         "desc" : [
            "The identifier of the protocol for which consent to distribute has been granted.",
            [
               "Required if Distribution Type (0012,0084) is NAMED_PROTOCOL and the protocol is not that which is specified in Clinical Trial Protocol ID (0012,0020) in the ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.1.3",
                     "xrefstyle" : "select: title"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "req" : "1C",
         "name" : "Clinical Trial Protocol ID",
         "module" : "Clinical Trial Study",
         "entity" : "Study",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4b"
         ]
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0035)" : {
         "req" : "3",
         "name" : "Identifier Type Code",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0012,0051)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "module" : "Clinical Trial Study",
         "entity" : "Study",
         "req" : "3",
         "name" : "Clinical Trial Time Point Description",
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
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a043)" : {
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1",
         "name" : "Concept Name Code Sequence",
         "module" : "Specimen",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "C - Required if the Imaging Subject is a Specimen"
      },
      "(0038,0010)" : {
         "name" : "Admission ID",
         "req" : "3",
         "desc" : "Identifier of the visit as assigned by the healthcare provider",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "entity" : "Study",
         "module" : "Patient Study"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a043)" : {
         "name" : "Concept Name Code Sequence",
         "req" : "1",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0088,0200)[<0>](7fe0,0010)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image",
         "entity" : "Image",
         "req" : "1C",
         "name" : "Pixel Data",
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
         ]
      },
      "(0010,2180)" : {
         "req" : "3",
         "name" : "Occupation",
         "desc" : "Occupation of the Patient.",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "module" : "Patient Study",
         "entity" : "Study"
      },
      "(0088,0200)[<0>](0028,0106)" : {
         "desc" : "The minimum actual pixel value encountered in this image.",
         "name" : "Smallest Image Pixel Value",
         "req" : "3",
         "entity" : "Image",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "name" : "Local Namespace Entity ID",
         "req" : "1C"
      },
      "(0008,1062)[<0>](0040,1104)" : {
         "name" : "Person's Telecom Information",
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
                           "content" : [
                              "\n                    ",
                              {
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_96e493a8-b679-4f97-987f-4e08360642a4"
                                 },
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
         ],
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "module" : "General Study",
         "entity" : "Study"
      },
      "(0008,0020)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "module" : "General Study",
         "entity" : "Study",
         "req" : "2",
         "name" : "Study Date",
         "desc" : "Date the Study started."
      },
      "(0008,0081)" : {
         "module" : "General Equipment",
         "entity" : "Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "desc" : "Mailing address of the institution where the equipment that produced the composite instances is located.",
         "name" : "Institution Address",
         "req" : "3"
      },
      "(0050,0010)[<0>](0050,0016)" : {
         "module" : "Device",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "usage" : "U",
         "desc" : [
            "Unit diameter of device. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.12.1.1"
               },
               "el" : "xref"
            },
            "."
         ],
         "name" : "Device Diameter",
         "req" : "3"
      },
      "(0040,9096)[<0>](0028,3003)" : {
         "module" : "General Image",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "usage" : "M",
         "desc" : "Free form text explanation of the meaning of the transformation in this Item.",
         "name" : "LUT Explanation",
         "req" : "1"
      },
      "(0010,0024)[<0>](0040,0033)" : {
         "module" : "Patient",
         "entity" : "Patient",
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
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_10.14"
                  },
                  "el" : "xref"
               },
               " for Defined Terms."
            ]
         ],
         "name" : "Universal Entity ID Type",
         "req" : "1C"
      },
      "(0008,0018)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
                  "targetptr" : "PS3.4",
                  "xrefstyle" : "select: labelnumber",
                  "targetdoc" : "PS3.4"
               },
               "el" : "olink"
            },
            "."
         ],
         "req" : "1",
         "name" : "SOP Instance UID"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "desc" : [
            "The place or location identifier where the identifier was first assigned to the patient. This component is not an inherent part of the identifier but rather part of the history of the identifier.",
            "Only a single Item is permitted in this Sequence.",
            {
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
               ],
               "el" : "note"
            }
         ],
         "name" : "Assigning Facility Sequence",
         "req" : "3"
      },
      "(0040,0555)" : {
         "module" : "Acquisition Context",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "desc" : [
            "A sequence of Items that describes the conditions present during the acquisition of the data of the SOP Instance.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "req" : "2",
         "name" : "Acquisition Context Sequence"
      },
      "(0040,0520)[<0>](0050,0013)" : {
         "entity" : "Image",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "C - Required if the Imaging Subject is a Specimen",
         "desc" : "Thickness in mm of container component",
         "req" : "3",
         "name" : "Container Component Thickness"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a160)" : {
         "entity" : "Image",
         "module" : "Specimen",
         "usage" : "C - Required if the Imaging Subject is a Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "name" : "Text Value",
         "req" : "1C"
      },
      "(0040,0520)" : {
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "C - Required if the Imaging Subject is a Specimen",
         "module" : "Specimen",
         "entity" : "Image",
         "name" : "Container Component Sequence",
         "req" : "3",
         "desc" : [
            "Description of one or more components of the container (e.g., description of the slide and of the coverslip).",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1104)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common",
         "entity" : "Image",
         "name" : "Person's Telecom Information",
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
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_96e493a8-b679-4f97-987f-4e08360642a4"
                                 },
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
               ],
               "el" : "note"
            }
         ]
      },
      "(0010,1100)[<0>](0040,e024)" : {
         "req" : "1C",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0010,2160)" : {
         "desc" : "Ethnic group or race of the patient.",
         "req" : "3",
         "name" : "Ethnic Group",
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0010,0213)" : {
         "name" : "Strain Nomenclature",
         "req" : "3",
         "desc" : [
            "The nomenclature used for Strain Description (0010,0212). See ",
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
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a122)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1C",
         "name" : "Time",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ]
      },
      "(0028,1101)" : {
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
         ],
         "req" : "1C",
         "name" : "Red Palette Color Lookup Table Descriptor",
         "module" : "Image Pixel",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-11b"
         ]
      },
      "(0008,2111)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image",
         "entity" : "Image",
         "name" : "Derivation Description",
         "req" : "3",
         "desc" : [
            "A text description of how this image was derived. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.1.1.3"
               }
            },
            " for further explanation."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Referenced SOP Sequence",
         "req" : "1C",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ]
      },
      "(0008,1200)" : {
         "desc" : [
            "Sequence of items each identifying a Study other than the Study of which this Instance is a part, which Studies contain Instances that are referenced elsewhere in this Instance.",
            "One or more Items shall be included in this Sequence.",
            "Required if this Instance references Instances in other Studies."
         ],
         "name" : "Studies Containing Other Referenced Instances Sequence",
         "req" : "1C",
         "module" : "Common Instance Reference",
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1150)" : {
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0008,1250)[<0>](0020,000d)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1",
         "name" : "Study Instance UID",
         "desc" : "Instance UID of Study to which the related Series belongs"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a122)" : {
         "module" : "General Series",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "req" : "1C",
         "name" : "Time"
      },
      "(0008,1111)[<0>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-11"
         ],
         "usage" : "M"
      },
      "(0028,2002)" : [
         {
            "module" : "Image Pixel",
            "entity" : "Image",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "desc" : [
               "A label that identifies the well-known color space of the image. Shall be consistent with any ICC Profile (0028,2000) that is also present.",
               [
                  "See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "linkend" : "sect_C.11.15.1.2",
                        "xrefstyle" : "select: label"
                     }
                  },
                  "."
               ]
            ],
            "req" : "3",
            "name" : "Color Space"
         },
         {
            "entity" : "Image",
            "module" : "ICC Profile",
            "usage" : "U",
            "mod_tables" : [
               "table_C.11.15-1"
            ],
            "desc" : [
               "A label that identifies the well-known color space of the image. Shall be consistent with any ICC Profile (0028,2000) that is also present.",
               [
                  "See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "linkend" : "sect_C.11.15.1.2",
                        "xrefstyle" : "select: label"
                     }
                  },
                  "."
               ]
            ],
            "name" : "Color Space",
            "req" : "3"
         }
      ],
      "(0010,1002)[<0>](0010,0020)" : {
         "desc" : [
            "An identifier for the patient.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_f0c2cfdd-2ad9-4f36-9f8d-a8723d825eae"
                     },
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
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "name" : "Patient ID",
         "req" : "1",
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(0040,0260)" : {
         "name" : "Performed Protocol Code Sequence",
         "req" : "3",
         "desc" : "Sequence describing the Protocol performed for this Procedure Step. One or more Items are permitted in this Sequence.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0020,0010)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "entity" : "Study",
         "req" : "2",
         "name" : "Study ID",
         "desc" : "User or equipment generated Study identifier."
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0008,1150)" : {
         "module" : "Specimen",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "C - Required if the Imaging Subject is a Specimen",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "req" : "1"
      },
      "(0028,0006)" : [
         {
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "usage" : "M",
            "entity" : "Image",
            "module" : "Image Pixel",
            "req" : "1C",
            "name" : "Planar Configuration",
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
            ]
         },
         {
            "req" : "1C",
            "name" : "Planar Configuration",
            "desc" : [
               "Indicates whether the pixel data are sent color-by-plane or color-by-pixel. Required if Samples per Pixel (0028,0002) has a value greater than 1.",
               [
                  "See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "linkend" : "sect_C.8.12.1.1.5",
                        "xrefstyle" : "select: label"
                     }
                  },
                  " for specialization of this Attribute."
               ]
            ],
            "mod_tables" : [
               "table_C.8-77"
            ],
            "usage" : "M",
            "entity" : "Image",
            "module" : "VL Image"
         }
      ],
      "(0040,0515)[<0>](0040,0513)" : {
         "usage" : "C - Required if the Imaging Subject is a Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "entity" : "Image",
         "module" : "Specimen",
         "name" : "Issuer of the Container Identifier Sequence",
         "req" : "2",
         "desc" : [
            "Organization that assigned the Container Identifier.",
            "Zero or one Item shall be included in this Sequence."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a30a)" : {
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "name" : "Numeric Value",
         "req" : "1C",
         "module" : "General Series",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a123)" : {
         "entity" : "Image",
         "module" : "Specimen",
         "usage" : "C - Required if the Imaging Subject is a Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "name" : "Person Name",
         "req" : "1C"
      },
      "(0022,001a)" : {
         "module" : "VL Image",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-77"
         ],
         "usage" : "M",
         "desc" : [
            "Describes the light color used for each channel to generate the image.",
            "If Photometric Interpretation (0028,0004) has one of the YBR values, the meaning is for pixel data in an equivalent RGB encoding.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "Interpretation and representation of RGB images rely on the assumption that the red channel really contains the red wavelength range of illumination light, the blue channel the blue wavelength range, etc. Some modalities use the RGB Photometric Interpretation as a container representing 3 channels of any illumination wavelength."
                     ],
                     "attrs" : {
                        "xml:id" : "para_95560f81-ce04-4f1f-9379-fb0eb4c3b0d9"
                     },
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            },
            "Shall have the same number of items as the value of Samples per Pixel (0028,0002). The channels shall be described in the order in which the channels are encoded."
         ],
         "name" : "Channel Description Code Sequence",
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a162)" : {
         "name" : "Rational Numerator Value",
         "req" : "1C",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0008,1150)" : {
         "entity" : "Image",
         "module" : "Specimen",
         "usage" : "C - Required if the Imaging Subject is a Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "name" : "Referenced SOP Class UID"
      },
      "(0010,1100)[<0>](0040,e022)[<1>](0088,0130)" : {
         "name" : "Storage Media File-Set ID",
         "req" : "2",
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the referenced instance(s) reside.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a124)" : {
         "req" : "1C",
         "name" : "UID",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "usage" : "M",
         "module" : "General Image",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0008,0051)" : {
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this Sequence."
         ],
         "req" : "3",
         "name" : "Issuer of Accession Number Sequence"
      },
      "(0008,1049)[<0>](0040,1103)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "module" : "General Study",
         "entity" : "Study",
         "name" : "Person's Telephone Numbers",
         "req" : "3",
         "desc" : "Person's telephone number(s)"
      },
      "(0018,a001)[<0>](0008,1040)" : {
         "req" : "3",
         "name" : "Institutional Department Name",
         "desc" : "Department in the institution where the equipment that contributed to the composite instance is located.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a162)" : {
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "name" : "Rational Numerator Value"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a120)" : {
         "entity" : "Series",
         "module" : "General Series",
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
         "name" : "DateTime",
         "req" : "1C"
      },
      "(0040,0520)[<0>](0008,0070)" : {
         "req" : "3",
         "name" : "Manufacturer",
         "desc" : "Manufacturer of the container component.",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "C - Required if the Imaging Subject is a Specimen",
         "entity" : "Image",
         "module" : "Specimen"
      },
      "(0018,1066)" : {
         "entity" : "Image",
         "module" : "Cine",
         "mod_tables" : [
            "table_C.7-13"
         ],
         "usage" : "M",
         "desc" : "Time (in msec) from Content Time (0008,0033) to the start of the first frame in a Multi-frame image.",
         "req" : "3",
         "name" : "Frame Delay"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0033)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M",
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
         "req" : "1C",
         "name" : "Universal Entity ID Type"
      },
      "(0010,1000)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Other Patient IDs",
         "req" : "3",
         "desc" : "Other identification numbers or codes used to identify the patient."
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
         "name" : "Container Component Material",
         "entity" : "Image",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "C - Required if the Imaging Subject is a Specimen"
      },
      "(0008,0023)" : {
         "module" : "General Image",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "desc" : [
            "The date the image pixel data creation started.",
            "Required if image is part of a series in which the images are temporally related. May be present otherwise.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_2b4fa91b-7c4d-401b-9468-fa7b06ccb55a"
                     },
                     "content" : [
                        "This Attribute was formerly known as Image Date."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "req" : "2C",
         "name" : "Content Date"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0062,000b)" : {
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "name" : "Referenced Segment Number",
         "req" : "1C",
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a040)" : {
         "name" : "Value Type",
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
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)" : {
         "module" : "General Series",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "name" : "Referenced SOP Sequence",
         "req" : "1C"
      },
      "(0008,1115)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "module" : "Common Instance Reference",
         "entity" : "Image",
         "name" : "Referenced Series Sequence",
         "req" : "1C",
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this Sequence.",
            "Required if this Instance references Instances in this Study."
         ]
      },
      "(0010,2203)" : {
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
               "el" : "note",
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
               ]
            },
            "Required if patient is an animal. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "entity" : "Study",
         "module" : "Patient Study"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,08ea)" : {
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "req" : "1C",
         "name" : "Measurement Units Code Sequence",
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)" : {
         "entity" : "Image",
         "module" : "Common Instance Reference",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "usage" : "U",
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Referenced Instance Sequence",
         "req" : "1"
      },
      "(0012,0050)" : {
         "req" : "2",
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
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "usage" : "U",
         "entity" : "Study",
         "module" : "Clinical Trial Study"
      },
      "(0040,a390)[<0>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "entity" : "Image",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "usage" : "M"
      },
      "(0040,0520)[<0>](0050,0012)" : {
         "req" : "1",
         "name" : "Container Component Type Code Sequence",
         "desc" : [
            "Type of container component.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "C - Required if the Imaging Subject is a Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "entity" : "Image"
      },
      "(0040,0515)[<0>](0040,0513)[<1>](0040,0032)" : {
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C",
         "name" : "Universal Entity ID",
         "entity" : "Image",
         "module" : "Specimen",
         "usage" : "C - Required if the Imaging Subject is a Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ]
      },
      "(0008,0096)[<0>](0040,1101)" : {
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1",
         "name" : "Person Identification Code Sequence"
      },
      "(0010,1100)[<0>](0020,000e)" : {
         "desc" : [
            "Unique identifier for the Series that is part of the Study identified in Study Instance UID (0020,000D), if present, and contains the referenced object instance(s).",
            "Required if Type of Instances (0040,E020) is DICOM"
         ],
         "name" : "Series Instance UID",
         "req" : "1C",
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ]
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0008,1199)[<2>](0008,1150)" : {
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "General Image",
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a30a)" : {
         "name" : "Numeric Value",
         "req" : "1C",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "C - Required if the Imaging Subject is a Specimen",
         "module" : "Specimen",
         "entity" : "Image"
      },
      "(0008,1200)[<0>](0020,000d)" : {
         "desc" : "Unique identifier of the Study containing the referenced Instances.",
         "name" : "Study Instance UID",
         "req" : "1",
         "module" : "Common Instance Reference",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "usage" : "U"
      },
      "(0008,1062)[<0>](0008,0081)" : {
         "module" : "General Study",
         "entity" : "Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "req" : "3",
         "name" : "Institution Address"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a123)" : {
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "req" : "1C",
         "name" : "Person Name"
      },
      "(0008,0030)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "entity" : "Study",
         "req" : "2",
         "name" : "Study Time",
         "desc" : "Time the Study started."
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a163)" : {
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "name" : "Rational Denominator Value",
         "req" : "1C",
         "module" : "Specimen",
         "entity" : "Image",
         "usage" : "C - Required if the Imaging Subject is a Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a168)" : {
         "name" : "Concept Code Sequence",
         "req" : "1C",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "entity" : "Image",
         "module" : "General Image"
      },
      "(0008,2112)[<0>](0008,1160)" : {
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
         "name" : "Referenced Frame Number",
         "req" : "1C",
         "module" : "General Image",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3"
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a123)" : {
         "entity" : "Image",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "C - Required if the Imaging Subject is a Specimen",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "req" : "1C",
         "name" : "Person Name"
      },
      "(0018,a001)[<0>](0008,0080)" : {
         "entity" : "Image",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Institution where the equipment that contributed to the composite instance is located.",
         "req" : "3",
         "name" : "Institution Name"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1150)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a120)" : {
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "usage" : "M",
         "module" : "General Image",
         "entity" : "Image",
         "name" : "DateTime",
         "req" : "1C",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ]
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a30a)" : {
         "module" : "General Image",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "name" : "Numeric Value",
         "req" : "1C"
      },
      "(0010,1100)[<0>](0040,e021)" : {
         "name" : "DICOM Retrieval Sequence",
         "req" : "1C",
         "desc" : [
            "Details for retrieving instances via the DICOM Retrieve Service.",
            "Required if DICOM Media Retrieval Sequence (0040,E022), WADO Retrieval Sequence (0040,E023), WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "This sequence shall only identify sources known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0008,0122)" : {
         "desc" : [
            "The name of the Mapping Resource.",
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
         "name" : "Mapping Resource Name",
         "req" : "3",
         "entity" : "Image",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0008,2112)[<0>](0008,1155)" : {
         "entity" : "Image",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3",
            "table_10-11"
         ],
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "req" : "1"
      },
      "(0008,2142)" : {
         "desc" : "The frame number of the first frame of the Multi-frame image to be displayed.",
         "name" : "Start Trim",
         "req" : "3",
         "module" : "Cine",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-13"
         ]
      },
      "(0028,0034)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "entity" : "Image",
         "module" : "Image Pixel",
         "req" : "1C",
         "name" : "Pixel Aspect Ratio",
         "desc" : [
            "Ratio of the vertical size and horizontal size of the pixels in the image specified by a pair of integer values where the first value is the vertical pixel size, and the second value is the horizontal pixel size. Required if the aspect ratio values do not have a ratio of 1:1 and the physical pixel spacing is not specified by Pixel Spacing (0028,0030), or Imager Pixel Spacing (0018,1164) or Nominal Scanned Pixel Spacing (0018,2010), either for the entire Image or per-frame in a Functional Group Macro. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.6.3.1.7",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ]
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "req" : "1C",
         "name" : "Local Namespace Entity ID",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0040,0513)[<0>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
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
         "usage" : "C - Required if the Imaging Subject is a Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "entity" : "Image",
         "module" : "Specimen"
      },
      "(0008,1140)[<0>](0008,1160)" : [
         {
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-9",
               "table_10-3"
            ],
            "module" : "General Image",
            "entity" : "Image",
            "name" : "Referenced Frame Number",
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
                           "xml:id" : "para_68450e47-9448-4ac5-82e8-4015a854968a"
                        }
                     },
                     "\n              "
                  ]
               },
               "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
            ]
         },
         {
            "module" : "VL Image",
            "entity" : "Image",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-77",
               "table_10-3"
            ],
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
            "req" : "1C"
         }
      ],
      "(0040,9096)" : {
         "req" : "3",
         "name" : "Real World Value Mapping Sequence",
         "desc" : [
            "The mapping of stored values to associated Real World values.",
            "One or more Items are permitted in this Sequence."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image",
         "entity" : "Image"
      },
      "(0400,0561)[<0>](0400,0562)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Date and time the attributes were removed and/or replaced.",
         "req" : "1",
         "name" : "Attribute Modification DateTime"
      },
      "(0008,1111)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series",
         "req" : "3",
         "name" : "Referenced Performed Procedure Step Sequence",
         "desc" : [
            "Uniquely identifies the Performed Procedure Step SOP Instance to which the Series is related.",
            "Only a single Item is permitted in this Sequence."
         ]
      },
      "(0008,1250)[<0>](0020,000e)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series",
         "req" : "1",
         "name" : "Series Instance UID",
         "desc" : "Instance UID of Related Series"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a163)" : {
         "name" : "Rational Denominator Value",
         "req" : "1C",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "usage" : "M",
         "entity" : "Image",
         "module" : "General Image"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a121)" : {
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "name" : "Date",
         "req" : "1C",
         "entity" : "Image",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0018,a001)[<0>](0018,1020)" : {
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
         "name" : "Software Versions",
         "req" : "3",
         "module" : "SOP Common",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0040,e001)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "HL7 Instance Identifier",
         "req" : "1C",
         "desc" : [
            "Instance Identifier of the encapsulated HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
            "Required if Type of Instances (0040,E020) is CDA."
         ]
      },
      "(0008,1049)" : {
         "desc" : [
            "Identification of the physician(s) who are responsible for overall patient care at time of Study.",
            "One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Physician(s) of Record (0008,1048), if present."
         ],
         "req" : "3",
         "name" : "Physician(s) of Record Identification Sequence",
         "module" : "General Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0610)" : {
         "entity" : "Image",
         "module" : "Specimen",
         "usage" : "C - Required if the Imaging Subject is a Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "desc" : [
            "Sequence of Items identifying the process steps used to prepare the specimen for image acquisition. This includes description of all processing necessary to interpret the image.",
            "Zero or more Items shall be included in this Sequence.",
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
         "req" : "2",
         "name" : "Specimen Preparation Sequence"
      },
      "(0040,0555)[<0>](0040,a168)" : {
         "name" : "Concept Code Sequence",
         "req" : "1C",
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a Coded Value.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Date (0040,A121), Time (0040,A122), Person Name (0040,A123), Text Value (0040,A160), and the pair of Numeric Value (0040,A30A) and Measurement Units Code Sequence (0040,08EA) are not present."
         ],
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "usage" : "M",
         "entity" : "Image",
         "module" : "Acquisition Context"
      },
      "(0010,2210)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series",
         "req" : "1C",
         "name" : "Anatomical Orientation Type",
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
         ]
      },
      "(0040,0560)[<0>](0008,2228)[<1>](0008,2230)" : {
         "desc" : [
            "Sequence of Items that modifies the primary anatomic structure of interest in this Instance.",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Primary Anatomic Structure Modifier Sequence",
         "req" : "3",
         "entity" : "Image",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-8"
         ],
         "usage" : "C - Required if the Imaging Subject is a Specimen"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "req" : "1C",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(003a,0300)[<0>](003a,0208)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-13"
         ],
         "module" : "Cine",
         "entity" : "Image",
         "req" : "1",
         "name" : "Channel Source Sequence",
         "desc" : [
            "A coded descriptor of the audio channel source.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0050,0010)[<0>](0050,0020)" : {
         "name" : "Device Description",
         "req" : "3",
         "desc" : "Further description in free form text describing the device.",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "module" : "Device",
         "entity" : "Image"
      },
      "(0040,0555)[<0>](0040,a162)" : {
         "module" : "Acquisition Context",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "usage" : "M",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "name" : "Rational Numerator Value"
      },
      "(0088,0200)[<0>](0028,0034)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "entity" : "Image",
         "module" : "General Image",
         "name" : "Pixel Aspect Ratio",
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
         ]
      },
      "(0008,1140)[<0>](0062,000b)" : [
         {
            "module" : "General Image",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.7-9",
               "table_10-3"
            ],
            "usage" : "M",
            "desc" : [
               "Identifies the Segment Number to which the reference applies.",
               "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
            ],
            "req" : "1C",
            "name" : "Referenced Segment Number"
         },
         {
            "mod_tables" : [
               "table_C.8-77",
               "table_10-3"
            ],
            "usage" : "M",
            "module" : "VL Image",
            "entity" : "Image",
            "name" : "Referenced Segment Number",
            "req" : "1C",
            "desc" : [
               "Identifies the Segment Number to which the reference applies.",
               "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
            ]
         }
      ],
      "(0020,0013)" : [
         {
            "req" : "2",
            "name" : "Instance Number",
            "desc" : [
               "A number that identifies this image.",
               {
                  "content" : [
                     "\n                    ",
                     {
                        "el" : "para",
                        "attrs" : {
                           "xml:id" : "para_4b6d4b36-a800-41c7-a122-e8e704668af1"
                        },
                        "content" : [
                           "This Attribute was named Image Number in earlier versions of this Standard."
                        ]
                     },
                     "\n                  "
                  ],
                  "el" : "note"
               }
            ],
            "mod_tables" : [
               "table_C.7-9"
            ],
            "usage" : "M",
            "entity" : "Image",
            "module" : "General Image"
         },
         {
            "module" : "SOP Common",
            "entity" : "Image",
            "usage" : "M",
            "mod_tables" : [
               "table_C.12-1"
            ],
            "desc" : "A number that identifies this Composite object instance.",
            "req" : "3",
            "name" : "Instance Number"
         }
      ],
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0039)" : {
         "name" : "Assigning Jurisdiction Code Sequence",
         "req" : "3",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0028,1203)" : {
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "usage" : "M",
         "module" : "Image Pixel",
         "entity" : "Image",
         "req" : "1C",
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
         ]
      },
      "(0040,0560)[<0>](0040,0551)" : {
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "C - Required if the Imaging Subject is a Specimen",
         "module" : "Specimen",
         "entity" : "Image",
         "req" : "1",
         "name" : "Specimen Identifier",
         "desc" : [
            [
               "A departmental information system identifier for the Specimen. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.22.1.1"
                  }
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
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a168)" : {
         "name" : "Concept Code Sequence",
         "req" : "1C",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "C - Required if the Imaging Subject is a Specimen",
         "module" : "Specimen",
         "entity" : "Image"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Universal Entity ID Type",
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
                           "el" : "listitem",
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
         "name" : "Person's Telecom Information",
         "module" : "General Series",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ]
      },
      "(0010,0020)" : {
         "name" : "Patient ID",
         "req" : "2",
         "desc" : [
            "Primary identifier for the patient.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_bd933dd8-c95a-459e-a9cd-8b9c90650099"
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
               ],
               "el" : "note"
            }
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a160)" : {
         "req" : "1C",
         "name" : "Text Value",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0040,0560)[<0>](0008,2228)" : {
         "req" : "3",
         "name" : "Primary Anatomic Structure Sequence",
         "desc" : [
            "Sequence of Items that identifies the primary anatomic structure(s) of interest in this Instance.",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-8"
         ],
         "usage" : "C - Required if the Imaging Subject is a Specimen",
         "entity" : "Image",
         "module" : "Specimen"
      },
      "(0020,0012)" : {
         "name" : "Acquisition Number",
         "req" : "3",
         "desc" : "A number identifying the single continuous gathering of data over a period of time that resulted in this image.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image",
         "entity" : "Image"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "req" : "1C",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0010,0219)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "desc" : [
            [
               "A coded identification of the strain of the patient. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.1.1.1.4"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "One or more Items are permitted in this sequence. If more than one item is present, each item represents the same information but encoded using a different coding scheme (rather than post-coordinated modifiers)."
         ],
         "req" : "3",
         "name" : "Strain Code Sequence"
      },
      "(0008,0096)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "module" : "General Study",
         "req" : "3",
         "name" : "Referring Physician Identification Sequence",
         "desc" : [
            "Identification of the patient's referring physician.",
            "Only a single item is permitted in this Sequence."
         ]
      },
      "(0040,0275)[<0>](0032,1064)" : {
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M",
         "desc" : [
            "A sequence that conveys the Procedure Type of the requested procedure.",
            "Only a single Item is permitted in this Sequence."
         ],
         "name" : "Requested Procedure Code Sequence",
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a161)" : {
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "name" : "Floating Point Value",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0010,1100)[<0>](0040,e020)" : {
         "desc" : [
            "Type of object instances referenced.",
            {
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
               "type" : "variablelist",
               "title" : "Defined Terms:"
            }
         ],
         "name" : "Type of Instances",
         "req" : "1",
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ]
      },
      "(0012,0040)" : {
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U",
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
         "req" : "1C",
         "name" : "Clinical Trial Subject ID",
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
         ]
      },
      "(0010,2293)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
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
            "Zero or more Items shall be included in this Sequence.",
            "Required if the patient is an animal."
         ],
         "name" : "Patient Breed Code Sequence",
         "req" : "2C"
      },
      "(0040,0560)[<0>](0040,0602)" : {
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "C - Required if the Imaging Subject is a Specimen",
         "module" : "Specimen",
         "entity" : "Image",
         "req" : "3",
         "name" : "Specimen Detailed Description",
         "desc" : "Detailed textual specimen description (may include ancestor specimen descriptions)."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)" : {
         "module" : "General Series",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
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
         "name" : "Content Item Modifier Sequence",
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0062,000b)" : {
         "req" : "1C",
         "name" : "Referenced Segment Number",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0010,1021)" : {
         "desc" : [
            "Patient's size category code",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Patient's Size Code Sequence",
         "req" : "3",
         "entity" : "Study",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U"
      },
      "(0028,0010)" : {
         "name" : "Rows",
         "req" : "1",
         "desc" : "Number of rows in the image.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "module" : "Image Pixel",
         "entity" : "Image"
      },
      "(0008,001b)" : {
         "name" : "Original Specialized SOP Class UID",
         "req" : "3",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0010,0024)[<0>](0040,0032)" : {
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
         ],
         "req" : "3",
         "name" : "Universal Entity ID",
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M"
      },
      "(0008,1052)[<0>](0008,0081)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "entity" : "Series",
         "module" : "General Series",
         "req" : "3",
         "name" : "Institution Address",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable."
      },
      "(0008,1049)[<0>](0040,1102)" : {
         "desc" : "Person's mailing address",
         "req" : "3",
         "name" : "Person's Address",
         "entity" : "Study",
         "module" : "General Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0040,0280)" : {
         "name" : "Comments on the Performed Procedure Step",
         "req" : "3",
         "desc" : "User-defined comments on the Performed Procedure Step.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0008,1115)[<0>](0020,000e)" : {
         "module" : "Common Instance Reference",
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "desc" : "Unique identifier of the Series containing the referenced Instances.",
         "name" : "Series Instance UID",
         "req" : "1"
      },
      "(0018,a001)[<0>](0008,1010)" : {
         "name" : "Station Name",
         "req" : "3",
         "desc" : "User defined name identifying the machine that contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Image"
      },
      "(0028,0011)" : {
         "name" : "Columns",
         "req" : "1",
         "desc" : "Number of columns in the image",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "usage" : "M",
         "module" : "Image Pixel",
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a30a)" : {
         "module" : "Specimen",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "C - Required if the Imaging Subject is a Specimen",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "name" : "Numeric Value",
         "req" : "1C"
      },
      "(0400,0500)[<0>](0400,0510)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "1",
         "name" : "Encrypted Content Transfer Syntax UID",
         "desc" : "Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used."
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a160)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "C - Required if the Imaging Subject is a Specimen",
         "module" : "Specimen",
         "entity" : "Image",
         "name" : "Text Value",
         "req" : "1C",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ]
      },
      "(0040,a390)[<0>](0040,e010)" : {
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
                     "attrs" : {
                        "xml:id" : "para_398d64f0-0a7e-4cfe-b480-b482ee2cb7a7"
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
         "name" : "Retrieve URI",
         "req" : "3",
         "entity" : "Image",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a162)" : {
         "module" : "General Series",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "name" : "Rational Numerator Value"
      },
      "(0008,1140)[<0>](0008,1155)" : [
         {
            "name" : "Referenced SOP Instance UID",
            "req" : "1",
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-9",
               "table_10-3",
               "table_10-11"
            ],
            "module" : "General Image",
            "entity" : "Image"
         },
         {
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "name" : "Referenced SOP Instance UID",
            "req" : "1",
            "entity" : "Image",
            "module" : "VL Image",
            "mod_tables" : [
               "table_C.8-77",
               "table_10-3",
               "table_10-11"
            ],
            "usage" : "M"
         }
      ],
      "(0038,0064)[<0>](0040,0032)" : {
         "req" : "1C",
         "name" : "Universal Entity ID",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "usage" : "U",
         "entity" : "Study",
         "module" : "Patient Study"
      },
      "(0008,009d)[<0>](0040,1102)" : {
         "module" : "General Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "desc" : "Person's mailing address",
         "req" : "3",
         "name" : "Person's Address"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)" : {
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "name" : "Referenced SOP Sequence",
         "req" : "1C",
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)" : {
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "req" : "1C",
         "name" : "Referenced SOP Sequence"
      },
      "(0008,0051)[<0>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "req" : "1C",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)" : {
         "name" : "Referenced SOP Sequence",
         "req" : "1C",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "C - Required if the Imaging Subject is a Specimen",
         "module" : "Specimen",
         "entity" : "Image"
      },
      "(0028,1103)" : {
         "module" : "Image Pixel",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-11b"
         ],
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
         "req" : "1C",
         "name" : "Blue Palette Color Lookup Table Descriptor"
      },
      "(0038,0064)[<0>](0040,0031)" : {
         "req" : "1C",
         "name" : "Local Namespace Entity ID",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "usage" : "U",
         "module" : "Patient Study",
         "entity" : "Study"
      },
      "(0008,0080)" : {
         "entity" : "Equipment",
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "desc" : "Institution where the equipment that produced the composite instances is located.",
         "req" : "3",
         "name" : "Institution Name"
      },
      "(0088,0200)[<0>](0028,0004)" : {
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
         "req" : "1",
         "name" : "Photometric Interpretation",
         "entity" : "Image",
         "module" : "General Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a162)" : {
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "name" : "Rational Numerator Value",
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1160)" : {
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_e06e8e0c-e051-4fbc-bfa9-82d4a32dd706"
                     }
                  },
                  "\n              "
               ],
               "el" : "note"
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a161)" : {
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "name" : "Floating Point Value",
         "module" : "General Series",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0400,0500)" : {
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
         "name" : "Encrypted Attributes Sequence",
         "module" : "SOP Common",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0028,0009)" : {
         "entity" : "Image",
         "module" : "Multi-frame",
         "mod_tables" : [
            "table_C.7-14"
         ],
         "usage" : "M",
         "desc" : [
            "Contains the Data Element Tag of the attribute that is used as the frame increment in Multi-frame pixel data. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.6.1.2"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "req" : "1",
         "name" : "Frame Increment Pointer"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a124)" : {
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "name" : "UID",
         "req" : "1C",
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0018,1067)" : {
         "desc" : "Delay time in milliseconds from trigger (e.g., X-Ray on pulse) to the first frame of a Multi-frame image.",
         "req" : "3",
         "name" : "Image Trigger Delay",
         "entity" : "Image",
         "module" : "Cine",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-13"
         ]
      },
      "(0008,0110)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Sequence of items that map values of Coding Scheme Designator (0008,0102) to an external coding system registration, or to a private or local coding scheme.",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "name" : "Coding Scheme Identification Sequence"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0081)" : {
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "name" : "Institution Address",
         "req" : "3",
         "entity" : "Image",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,08ea)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Measurement Units Code Sequence",
         "req" : "1C",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ]
      },
      "(0008,1250)[<0>](0040,a170)" : {
         "req" : "2",
         "name" : "Purpose of Reference Code Sequence",
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "Zero or more Items shall be included in this Sequence.",
            "When absent, implies that the reason for the reference is unknown."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "entity" : "Series"
      },
      "(2050,0020)" : {
         "module" : "General Image",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M",
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
         "req" : "3",
         "name" : "Presentation LUT Shape"
      },
      "(0010,0010)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "Patient's full name.",
         "name" : "Patient's Name",
         "req" : "2"
      },
      "(0008,002a)" : {
         "desc" : [
            "The date and time that the acquisition of data that resulted in this image started.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_7d04c307-81dd-4f92-a182-bb4317fb66bb"
                     },
                     "content" : [
                        "The synchronization of this time with an external clock is specified in the ",
                        {
                           "el" : "xref",
                           "attrs" : {
                              "xrefstyle" : "select: title",
                              "linkend" : "sect_C.7.4.2"
                           }
                        },
                        " in Acquisition Time Synchronized (0018,1800)."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "name" : "Acquisition DateTime",
         "req" : "3",
         "entity" : "Image",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M"
      },
      "(0050,0010)[<0>](0050,0017)" : {
         "desc" : [
            "Required if Device Diameter (0050,0016) is present.",
            {
               "title" : "Defined Terms:",
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
               ]
            }
         ],
         "req" : "2C",
         "name" : "Device Diameter Units",
         "module" : "Device",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "usage" : "U"
      },
      "(0028,0030)" : {
         "desc" : [
            "Physical distance in the imaging target (patient or specimen) between the center of each pixel, specified as a numeric pair - adjacent row spacing \\ adjacent column spacing, in mm. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_10.7.1.3",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "req" : "3",
         "name" : "Pixel Spacing",
         "entity" : "Image",
         "module" : "VL Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-77"
         ]
      },
      "(0018,1201)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
         "entity" : "Equipment",
         "req" : "3",
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
         ]
      },
      "(0010,0026)[<0>](0010,0024)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "req" : "3",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ]
      },
      "(0020,9172)" : {
         "desc" : [
            "The set of images or other composite SOP Instances that were converted to this instance.",
            "If this instance was converted from a specific frame in the source instance, the reference shall include the Frame Number.",
            "One or more Items shall be included in this Sequence.",
            "Required if this instance was created by conversion, and Conversion Source Attributes Sequence (0020,9172) is not present in an Item of Shared Functional Groups Sequence (5200,9229) or Per-Frame Functional Groups Sequence (5200,9230)."
         ],
         "req" : "1C",
         "name" : "Conversion Source Attributes Sequence",
         "entity" : "Image",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "name" : "Universal Entity ID",
         "req" : "1C",
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ]
      },
      "(0008,1040)" : {
         "desc" : "Department in the institution where the equipment that produced the composite instances is located.",
         "name" : "Institutional Department Name",
         "req" : "3",
         "entity" : "Equipment",
         "module" : "General Equipment",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ]
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,08ea)" : {
         "entity" : "Image",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "usage" : "M",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "name" : "Measurement Units Code Sequence",
         "req" : "1C"
      },
      "(0008,0031)" : {
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "desc" : "Time the Series started.",
         "name" : "Series Time",
         "req" : "3"
      },
      "(0088,0200)[<0>](0028,1203)" : {
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M",
         "entity" : "Image",
         "module" : "General Image",
         "name" : "Blue Palette Color Lookup Table Data",
         "req" : "1C",
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
      "(0050,0010)[<0>](0050,0019)" : {
         "mod_tables" : [
            "table_C.7-18"
         ],
         "usage" : "U",
         "module" : "Device",
         "entity" : "Image",
         "req" : "3",
         "name" : "Inter-Marker Distance",
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
         ]
      },
      "(0008,0118)" : {
         "desc" : "The unique identifier of the Mapping Resource",
         "req" : "3",
         "name" : "Mapping Resource UID",
         "module" : "SOP Common",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0008,009d)[<0>](0040,1104)" : {
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
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
                     ],
                     "el" : "orderedlist"
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "name" : "Person's Telecom Information",
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a163)" : {
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "req" : "1C",
         "name" : "Rational Denominator Value"
      },
      "(0040,9096)[<0>](0040,9225)" : {
         "module" : "General Image",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "desc" : [
            "The Slope value in relationship between stored values (SV) and the real world values.",
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
            "Required if Float Pixel Data (7FE0,0008) or Double Float Pixel Data (7FE0,0009) are present or Real World Value LUT Data (0040,9212) is not present."
         ],
         "req" : "1C",
         "name" : "Real World Value Slope"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a120)" : {
         "req" : "1C",
         "name" : "DateTime",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "usage" : "C - Required if the Imaging Subject is a Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "entity" : "Image"
      },
      "(0008,1110)[<0>](0008,1155)" : {
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0008,0050)" : {
         "name" : "Accession Number",
         "req" : "2",
         "desc" : "A RIS generated number that identifies the order for the Study.",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "module" : "General Study",
         "entity" : "Study"
      },
      "(0020,9172)[<0>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "module" : "SOP Common",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ]
      },
      "(0088,0200)[<0>](0028,2000)" : {
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
                     "attrs" : {
                        "xml:id" : "para_d69f5d22-89f7-4927-ba3e-806a769850dc"
                     },
                     "el" : "para",
                     "content" : [
                        "The profile applies only to Pixel Data (7FE0,0010) at the same level of the Data Set and not to any icons nested within sequences, which may or may not have their own ICC profile specified."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "req" : "3",
         "name" : "ICC Profile",
         "module" : "General Image",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ]
      },
      "(0018,1020)" : {
         "module" : "General Equipment",
         "entity" : "Equipment",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
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
         "req" : "3",
         "name" : "Software Versions"
      },
      "(0008,0124)" : {
         "desc" : [
            "Sequence of items that map values of Mapping Resource (0008,0105) to an external, private or local Mapping Resource.",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "name" : "Mapping Resource Identification Sequence",
         "module" : "SOP Common",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0012,0071)" : {
         "req" : "3",
         "name" : "Clinical Trial Series ID",
         "desc" : [
            "An identifier of the series in the context of a clinical trial or research. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.3.2.1.2"
               }
            },
            "."
         ],
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "module" : "Clinical Trial Series",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a124)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "module" : "General Series",
         "req" : "1C",
         "name" : "UID",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ]
      },
      "(0008,0096)[<0>](0008,0080)" : {
         "req" : "1C",
         "name" : "Institution Name",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "entity" : "Study"
      },
      "(0008,0022)" : {
         "module" : "General Image",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "desc" : "The date the acquisition of data that resulted in this image started",
         "name" : "Acquisition Date",
         "req" : "3"
      },
      "(0028,0002)" : [
         {
            "entity" : "Image",
            "module" : "Image Pixel",
            "usage" : "M",
            "mod_tables" : [
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
            ],
            "req" : "1",
            "name" : "Samples per Pixel"
         },
         {
            "entity" : "Image",
            "module" : "VL Image",
            "mod_tables" : [
               "table_C.8-77"
            ],
            "usage" : "M",
            "desc" : [
               "Number of samples (planes) per image.",
               [
                  "See ",
                  {
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.8.12.1.1.4"
                     },
                     "el" : "xref"
                  },
                  " for specialization of this Attribute."
               ]
            ],
            "req" : "1",
            "name" : "Samples per Pixel"
         }
      ],
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a121)" : {
         "module" : "General Series",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "name" : "Date",
         "req" : "1C"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a30a)" : {
         "req" : "1C",
         "name" : "Numeric Value",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0400,0561)[<0>](0400,0565)" : {
         "desc" : [
            "Reason for the attribute modification.",
            {
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
               "title" : "Defined Terms:",
               "type" : "variablelist"
            }
         ],
         "req" : "1",
         "name" : "Reason for the Attribute Modification",
         "module" : "SOP Common",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1160)" : {
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
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
                     "attrs" : {
                        "xml:id" : "para_e06e8e0c-e051-4fbc-bfa9-82d4a32dd706"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "req" : "1C",
         "name" : "Referenced Frame Number"
      },
      "(0008,0117)" : {
         "entity" : "Image",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
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
         "req" : "3",
         "name" : "Context UID"
      },
      "(0008,0110)[<0>](0008,0115)" : {
         "desc" : "The coding scheme full common name",
         "name" : "Coding Scheme Name",
         "req" : "3",
         "entity" : "Image",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,051a)" : {
         "name" : "Container Description",
         "req" : "3",
         "desc" : "Description of the container.",
         "usage" : "C - Required if the Imaging Subject is a Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "entity" : "Image"
      },
      "(0010,1100)[<0>](0040,e025)[<1>](0008,1190)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "desc" : "URL specifying the location of the referenced instance(s).",
         "req" : "1",
         "name" : "Retrieve URL"
      },
      "(0010,0024)[<0>](0040,0039)" : {
         "req" : "3",
         "name" : "Assigning Jurisdiction Code Sequence",
         "desc" : [
            "The geo-political body that assigned the patient identifier. Typically a code for a country or a state/province. Only a single Item is permitted in this Sequence.",
            {
               "el" : "note",
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
               ]
            }
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0010,0026)[<0>](0010,0020)" : {
         "desc" : "Primary identifier for the group of subjects.",
         "name" : "Patient ID",
         "req" : "1",
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0080)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "entity" : "Image",
         "module" : "SOP Common",
         "req" : "1C",
         "name" : "Institution Name",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present."
      },
      "(0008,0300)[<0>](0008,0301)" : {
         "entity" : "Image",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Odd group number within which the Private Data Element block is reserved.",
         "name" : "Private Group Reference",
         "req" : "1"
      },
      "(fffa,fffa)[<0>](0400,0120)" : {
         "name" : "Signature",
         "req" : "1",
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
               "attrs" : {
                  "linkend" : "sect_C.12.1.1.3.1.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0040,0518)" : {
         "name" : "Container Type Code Sequence",
         "req" : "2",
         "desc" : [
            "Type of container that contains the specimen(s) being imaged.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "C - Required if the Imaging Subject is a Specimen",
         "module" : "Specimen",
         "entity" : "Image"
      },
      "(0008,1110)" : {
         "req" : "3",
         "name" : "Referenced Study Sequence",
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
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a121)" : {
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "name" : "Date",
         "req" : "1C",
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0018,a001)[<0>](0018,1050)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "req" : "3",
         "name" : "Spatial Resolution"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "C - Required if the Imaging Subject is a Specimen",
         "entity" : "Image",
         "module" : "Specimen"
      },
      "(0022,0028)" : {
         "name" : "Stereo Pairs Present",
         "req" : "3",
         "desc" : [
            [
               "The multi-frame pixel data consists of left and right stereoscopic pairs. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.6.1.3",
                     "xrefstyle" : "select: label"
                  }
               },
               "for further explanation."
            ],
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
         "mod_tables" : [
            "table_C.7-14"
         ],
         "usage" : "M",
         "entity" : "Image",
         "module" : "Multi-frame"
      },
      "(0010,2292)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
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
         "name" : "Patient Breed Description",
         "req" : "2C"
      },
      "(0050,0010)[<0>](0018,1000)" : {
         "desc" : "Manufacturer's serial number of the device",
         "name" : "Device Serial Number",
         "req" : "3",
         "module" : "Device",
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-18"
         ]
      },
      "(0008,1072)[<0>](0040,1101)" : {
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1",
         "name" : "Person Identification Code Sequence",
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0010,2294)[<0>](0010,2296)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "req" : "1",
         "name" : "Breed Registry Code Sequence",
         "desc" : [
            "Identification of the organization with which an animal is registered.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0008,0033)" : [
         {
            "desc" : [
               "The time the image pixel data creation started.",
               "Required if image is part of a series in which the images are temporally related. May be present otherwise."
            ],
            "name" : "Content Time",
            "req" : "2C",
            "entity" : "Image",
            "module" : "General Image",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-9"
            ]
         },
         {
            "module" : "VL Image",
            "entity" : "Image",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-77"
            ],
            "desc" : [
               "The time the image pixel data creation started. Required if the Image is part of a series in which the images are temporally related.",
               {
                  "content" : [
                     "\n                    ",
                     {
                        "content" : [
                           "This Attribute was formerly known as Image Time."
                        ],
                        "el" : "para",
                        "attrs" : {
                           "xml:id" : "para_42a1cd9d-d7c6-46b5-8b01-161a6bcd6822"
                        }
                     },
                     "\n                  "
                  ],
                  "el" : "note"
               }
            ],
            "name" : "Content Time",
            "req" : "1C"
         }
      ],
      "(0088,0200)[<0>](0028,1103)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "entity" : "Image",
         "module" : "General Image",
         "name" : "Blue Palette Color Lookup Table Descriptor",
         "req" : "1C",
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
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a160)" : {
         "name" : "Text Value",
         "req" : "1C",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0062,000b)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "C - Required if the Imaging Subject is a Specimen",
         "module" : "Specimen",
         "entity" : "Image",
         "name" : "Referenced Segment Number",
         "req" : "1C",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ]
      },
      "(0020,1002)" : {
         "req" : "3",
         "name" : "Images in Acquisition",
         "desc" : "Number of images that resulted from this acquisition of data",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M",
         "module" : "General Image",
         "entity" : "Image"
      },
      "(0008,0051)[<0>](0040,0033)" : {
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
         "req" : "1C",
         "module" : "General Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1070)" : {
         "entity" : "Image",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "desc" : "Name(s) of the operator(s) of the contributing equipment.",
         "req" : "3",
         "name" : "Operators' Name"
      },
      "(0008,0032)" : {
         "name" : "Acquisition Time",
         "req" : "3",
         "desc" : "The time the acquisition of data that resulted in this image started",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M",
         "entity" : "Image",
         "module" : "General Image"
      },
      "(0040,0555)[<0>](0040,a122)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "module" : "Acquisition Context",
         "entity" : "Image",
         "req" : "1C",
         "name" : "Time",
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a time.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_090933a4-c189-49db-a4ad-938040f8b381"
                     },
                     "el" : "para",
                     "content" : [
                        "The purpose or role of the time value could be specified in Concept Name Code Sequence (0040,A043)."
                     ]
                  },
                  "\n                  "
               ]
            },
            "Required if the value that Concept Name Code Sequence (0040,A043) requires (implies) is a time. Shall not be present otherwise."
         ]
      },
      "(0008,1030)" : {
         "desc" : "Institution-generated description or classification of the Study (component) performed.",
         "req" : "3",
         "name" : "Study Description",
         "module" : "General Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0039)" : {
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
         "name" : "Assigning Jurisdiction Code Sequence",
         "req" : "3",
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ]
      },
      "(0400,0561)" : {
         "name" : "Original Attributes Sequence",
         "req" : "3",
         "desc" : [
            "Sequence of Items containing all attributes that were removed or replaced by other values in the main data set.",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0008,0300)[<0>](0008,0303)" : {
         "name" : "Block Identifying Information Status",
         "req" : "1",
         "desc" : [
            [
               "Specifies whether some or all of the Private Data Elements in the block are safe from identity leakage as defined by ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "targetdoc" : "PS3.15",
                     "xrefstyle" : "template:PS3.15 Section %n %t",
                     "targetptr" : "sect_E.3.10"
                  }
               },
               "."
            ],
            {
               "title" : "Enumerated Values:",
               "type" : "variablelist",
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
               ]
            }
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Image"
      },
      "(0008,0300)" : {
         "req" : "3",
         "name" : "Private Data Element Characteristics Sequence",
         "desc" : "Characteristics of Private Data Elements within the current SOP Instance",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Image"
      },
      "(0008,1070)" : {
         "module" : "General Series",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : "Name(s) of the operator(s) supporting the Series.",
         "name" : "Operators' Name",
         "req" : "3"
      },
      "(0018,1242)" : {
         "entity" : "Image",
         "module" : "Cine",
         "mod_tables" : [
            "table_C.7-13"
         ],
         "usage" : "M",
         "desc" : "Elapsed time of data acquisition in msec per each frame.",
         "req" : "3",
         "name" : "Actual Frame Duration"
      },
      "(0012,0083)[<0>](0012,0085)" : {
         "req" : "1",
         "name" : "Consent for Distribution Flag",
         "desc" : [
            "Whether or not consent to distribute has been granted for the purpose described in Distribution Type (0012,0084).",
            {
               "type" : "variablelist",
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
               ]
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
                     "attrs" : {
                        "xml:id" : "para_3a13f81e-d497-421f-aebd-f103e8f2243a"
                     },
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "module" : "Clinical Trial Study",
         "entity" : "Study"
      },
      "(0008,2228)[<0>](0008,2230)" : {
         "req" : "3",
         "name" : "Primary Anatomic Structure Modifier Sequence",
         "desc" : [
            "Sequence of Items that modifies the primary anatomic structure of interest in this Instance.",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.8-77",
            "table_10-8"
         ],
         "usage" : "M",
         "module" : "VL Image",
         "entity" : "Image"
      },
      "(0008,0021)" : {
         "name" : "Series Date",
         "req" : "3",
         "desc" : "Date the Series started.",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "module" : "General Series",
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
                                    "For example, for a combined CT and PET acquisition, the CT images and PET images would be in separate series that could cross-reference each other with multiple purpose of reference codes meaning same anatomy, simultaneously acquired and same indication."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_41b72cf3-4134-44f1-84cc-a28f024a1c1c"
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
                                    "The related series may have different Frames of Reference and hence require some sort of registration before spatial coordinates can be directly compared."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_e9e67beb-8432-4dbc-9f6a-df5800189967"
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
                                    "This attribute is not intended for conveying localizer reference information, for which Referenced Image Sequence (0008,1140) should be used."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_7ef219a6-dfda-4b92-a778-37d54ca1cc2c"
                                 },
                                 "el" : "para"
                              },
                              "\n                      "
                           ]
                        },
                        "\n                    "
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "req" : "3",
         "name" : "Related Series Sequence",
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0008,1199)[<2>](0008,1160)" : {
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
                        "xml:id" : "para_e06e8e0c-e051-4fbc-bfa9-82d4a32dd706"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "name" : "Referenced Frame Number",
         "req" : "1C",
         "module" : "General Image",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ]
      },
      "(0028,0301)" : {
         "module" : "General Image",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "desc" : [
            "Indicates whether or not image contains sufficient burned in annotation to identify the patient and date the image was acquired.",
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
            "If this Attribute is absent, then the image may or may not contain burned in annotation."
         ],
         "name" : "Burned In Annotation",
         "req" : "3"
      },
      "(0040,0555)[<0>](0040,a160)" : {
         "module" : "Acquisition Context",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a Text Observation Value.",
            "Required if Date (0040,A121), Time (0040,A122), and Person Name (0040,A123) do not fully describe the concept specified by Concept Name Code Sequence (0040,A043). Shall not be present otherwise."
         ],
         "req" : "1C",
         "name" : "Text Value"
      },
      "(0008,0110)[<0>](0008,0112)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "module" : "SOP Common",
         "req" : "1C",
         "name" : "Coding Scheme Registry",
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
         ]
      },
      "(0010,2298)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient",
         "req" : "1C",
         "name" : "Responsible Person Role",
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
         ]
      },
      "(0088,0200)[<0>](0028,1102)" : {
         "name" : "Green Palette Color Lookup Table Descriptor",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image",
         "entity" : "Image"
      },
      "(0040,0244)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Performed Procedure Step Start Date",
         "req" : "3",
         "desc" : "Date on which the Performed Procedure Step started."
      },
      "(0010,0024)" : {
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "req" : "3",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a040)" : {
         "usage" : "C - Required if the Imaging Subject is a Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "entity" : "Image",
         "name" : "Value Type",
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
         ]
      },
      "(0088,0200)[<0>](0028,2002)" : {
         "req" : "3",
         "name" : "Color Space",
         "desc" : [
            "A label that identifies the well-known color space of the image. Shall be consistent with any ICC Profile (0028,2000) that is also present.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.11.15.1.2"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image",
         "entity" : "Image"
      },
      "(0018,a001)[<0>](0018,1000)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Manufacturer's serial number of the equipment that contributed to the composite instance.",
         "req" : "3",
         "name" : "Device Serial Number"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1160)" : {
         "name" : "Referenced Frame Number",
         "req" : "1C",
         "desc" : [
            "Identifies the frame numbers within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_e2359edc-51fe-4f62-abc5-a7447e377de7"
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
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a040)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "module" : "General Series",
         "req" : "1",
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
         ]
      },
      "(0028,1202)" : {
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
         "name" : "Green Palette Color Lookup Table Data",
         "module" : "Image Pixel",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-11b"
         ]
      },
      "(fffa,fffa)[<0>](0400,0005)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "desc" : "A number used to identify which MAC Parameters Sequence item was used in the calculation of this Digital Signature.",
         "req" : "1",
         "name" : "MAC ID Number"
      },
      "(0008,0123)" : {
         "entity" : "Image",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Sequence of items that map values of Context Identifier (0008,010F) to an external, private or local Context Group.",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Context Group Identification Sequence",
         "req" : "3"
      },
      "(0018,1065)" : {
         "desc" : [
            [
               "An array that contains the real time increments (in msec) between frames for a Multi-frame image. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.5.1.2"
                  }
               },
               " for further explanation. Required if Frame Increment Pointer (0028,0009) points to Frame Time Vector."
            ],
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_00128047-7815-4707-8295-c0dff1a814e3"
                     },
                     "el" : "para",
                     "content" : [
                        "Frame Time Vector arrays may not be properly encoded if Explicit VR transfer syntax is used and the VL of this attribute exceeds 65534 bytes."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "req" : "1C",
         "name" : "Frame Time Vector",
         "module" : "Cine",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-13"
         ]
      },
      "(0040,0245)" : {
         "desc" : "Time on which the Performed Procedure Step started.",
         "req" : "3",
         "name" : "Performed Procedure Step Start Time",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ]
      },
      "(0008,1072)[<0>](0008,0080)" : {
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "name" : "Institution Name",
         "req" : "1C"
      },
      "(0400,0500)[<0>](0400,0520)" : {
         "req" : "1",
         "name" : "Encrypted Content",
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
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0010,1030)" : {
         "entity" : "Study",
         "module" : "Patient Study",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Weight of the Patient, in kilograms.",
         "req" : "3",
         "name" : "Patient's Weight"
      },
      "(0008,1164)[<0>](0008,1167)" : {
         "desc" : "SOP Instance from which the frames of this instance are extracted.",
         "name" : "Multi-frame Source SOP Instance UID",
         "req" : "1",
         "module" : "Frame Extraction",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-9"
         ],
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request"
      },
      "(0040,0560)[<0>](0040,0600)" : {
         "desc" : "Short textual specimen description (may include ancestor specimen descriptions).",
         "req" : "3",
         "name" : "Specimen Short Description",
         "module" : "Specimen",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "C - Required if the Imaging Subject is a Specimen"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)" : {
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
         "name" : "Content Item Modifier Sequence",
         "req" : "3",
         "module" : "General Series",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ]
      },
      "(0010,0218)" : {
         "name" : "Strain Additional Information",
         "req" : "3",
         "desc" : [
            "Additional information about the strain of the patient that is not encoded in the formal nomenclature used in Strain Description (0010,0212). See ",
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
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0008,0015)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "entity" : "Image",
         "module" : "SOP Common",
         "name" : "Instance Coercion DateTime",
         "req" : "3",
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
         ]
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-11"
         ],
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0008,1160)" : {
         "name" : "Referenced Frame Number",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_e06e8e0c-e051-4fbc-bfa9-82d4a32dd706"
                     }
                  },
                  "\n              "
               ],
               "el" : "note"
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "usage" : "C - Required if the Imaging Subject is a Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "entity" : "Image",
         "module" : "Specimen"
      },
      "(0010,1100)[<0>](0020,000d)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Study Instance UID",
         "req" : "1C",
         "desc" : [
            "Unique identifier for the Study.",
            "Required if Type of Instances (0040,E020) is DICOM"
         ]
      },
      "(0008,009d)[<0>](0008,0082)" : {
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Institution Code Sequence",
         "req" : "1C",
         "module" : "General Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0008,1062)[<0>](0040,1103)" : {
         "req" : "3",
         "name" : "Person's Telephone Numbers",
         "desc" : "Person's telephone number(s)",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a124)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "name" : "UID",
         "req" : "1C",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ]
      },
      "(0008,0051)[<0>](0040,0031)" : {
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "name" : "Local Namespace Entity ID",
         "req" : "1C",
         "module" : "General Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "usage" : "M"
      },
      " (0010,0027) [<0>](0010,0024)" : {
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "req" : "3",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0010,1100)[<0>](0040,e025)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "desc" : [
            "Details for retrieving instances via WADO-RS.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "Retrieval via WADO-URI is addressed in the WADO Retrieval Sequence (0040,E023). Retrieval via  WADO-WS is addressed in the XDS Retrieval Sequence (0040,E024)."
                     ],
                     "attrs" : {
                        "xml:id" : "para_6afb22cc-92e8-4ec8-9a23-820f4c4a769b"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ]
            },
            "Required if DICOM Retrieval Sequence (0040,E021), DICOM Media Retrieval Sequence (0040,E022), WADO Retrieval Sequence (0040,E023) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1C",
         "name" : "WADO-RS Retrieval Sequence"
      },
      "(0008,2218)" : {
         "desc" : [
            "Sequence that identifies the anatomic region of interest in this image (i.e., external anatomy, surface anatomy, or general region of the body).",
            "Only a single Item shall be included in this Sequence.",
            "Required if Number of Frames (0028,0008) is present and Specimen Description Sequence (0040,0560) is absent. May be present otherwise."
         ],
         "name" : "Anatomic Region Sequence",
         "req" : "1C",
         "entity" : "Image",
         "module" : "VL Image",
         "mod_tables" : [
            "table_C.8-77"
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1155)" : {
         "module" : "General Series",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "req" : "1"
      },
      "(0008,009d)[<0>](0008,0081)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "module" : "General Study",
         "entity" : "Study",
         "name" : "Institution Address",
         "req" : "3",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable."
      },
      "(0040,0275)[<0>](0040,100a)" : {
         "module" : "General Series",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "desc" : [
            "Coded Reason for requesting this procedure.",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Reason for Requested Procedure Code Sequence",
         "req" : "3"
      },
      "(0020,9172)[<0>](0062,000b)" : {
         "entity" : "Image",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "usage" : "M",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "name" : "Referenced Segment Number",
         "req" : "1C"
      },
      "(0008,1049)[<0>](0008,0082)" : {
         "entity" : "Study",
         "module" : "General Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Institution Code Sequence",
         "req" : "1C"
      },
      "(0010,0200)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "3",
         "name" : "Quality Control Subject",
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
            [
               "This attribute describes a characteristic of the Imaging Subject. It is distinct from Quality Control Image (0028,0300) in the ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.6.1",
                     "xrefstyle" : "select: title"
                  },
                  "el" : "xref"
               },
               ", which is used to describe an image acquired."
            ]
         ]
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a161)" : {
         "entity" : "Image",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "usage" : "M",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "name" : "Floating Point Value"
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
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0012,0020)" : {
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
         "name" : "Clinical Trial Protocol ID",
         "req" : "1",
         "entity" : "Patient",
         "module" : "Clinical Trial Subject",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-2b"
         ]
      },
      "(0010,1100)" : {
         "name" : "Referenced Patient Photo Sequence",
         "req" : "3",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0040,0275)[<0>](0040,1001)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Requested Procedure ID",
         "req" : "1C",
         "desc" : [
            "Identifier that identifies the Requested Procedure in the Imaging Service Request.",
            "Required if procedure was scheduled. May be present otherwise.",
            {
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_5deccc65-f9a8-49d5-8b85-1d58535d1119"
                     },
                     "content" : [
                        "The condition is to allow the contents of this macro to be present (e.g., to convey the reason for the procedure, such as whether a mammogram is for screening or diagnostic purposes) even when the procedure was not formally scheduled and a value for this identifier is unknown, rather than making up a dummy value."
                     ]
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,08ea)" : {
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "req" : "1C",
         "name" : "Measurement Units Code Sequence"
      },
      "(0010,0034)" : {
         "req" : "3",
         "name" : "Patient's Death Date in Alternative Calendar",
         "desc" : [
            "Date of death of the named patient in the Alternative Calendar (0010,0035).",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "No format is specified for alternative calendar dates so none should be assumed."
                     ],
                     "attrs" : {
                        "xml:id" : "para_9f9d00e7-4c3c-4ecd-9b0f-c6dc916409e9"
                     },
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0028,0102)" : [
         {
            "desc" : [
               "Most significant bit for pixel sample data. Each sample shall have the same high bit. High Bit (0028,0102) shall be one less than Bits Stored (0028,0101). See ",
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
            "name" : "High Bit",
            "req" : "1",
            "entity" : "Image",
            "module" : "Image Pixel",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-11b"
            ]
         },
         {
            "req" : "1",
            "name" : "High Bit",
            "desc" : [
               "Most significant bit for pixel sample data. Each sample shall have the same high bit.",
               [
                  "See ",
                  {
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.8.12.1.1.2"
                     },
                     "el" : "xref"
                  },
                  " for specialization of this Attribute. See ",
                  {
                     "attrs" : {
                        "targetptr" : "PS3.5",
                        "targetdoc" : "PS3.5",
                        "xrefstyle" : "select: labelnumber"
                     },
                     "el" : "olink"
                  },
                  " for further explanation."
               ]
            ],
            "mod_tables" : [
               "table_C.8-77"
            ],
            "usage" : "M",
            "entity" : "Image",
            "module" : "VL Image"
         }
      ],
      "(0040,0515)" : {
         "desc" : "Sequence of alternate identifiers for the container that contains the specimen(s) being imaged. These may have been assigned, e.g., by the manufacturer, or by another institution that collected the specimen. One or more Items are permitted in this Sequence.",
         "req" : "3",
         "name" : "Alternate Container Identifier Sequence",
         "entity" : "Image",
         "module" : "Specimen",
         "usage" : "C - Required if the Imaging Subject is a Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      " (0010,0027) [<0>](0010,0020)" : {
         "desc" : "Primary identifier for an individual subject.",
         "req" : "1",
         "name" : "Patient ID",
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1155)" : {
         "module" : "General Series",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "name" : "Referenced SOP Instance UID"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "3",
         "name" : "Assigning Facility Sequence",
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
                     "attrs" : {
                        "xml:id" : "para_6a16f809-6605-41ac-8d02-b6104b0bc0ad"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ]
            }
         ]
      },
      "(0010,2202)" : {
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
            "Only a single Item shall be included in this Sequence.",
            "Required if the patient is an animal and if Patient Species Description (0010,2201) is not present. May be present otherwise."
         ],
         "name" : "Patient Species Code Sequence",
         "req" : "1C",
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0008,0300)[<0>](0008,0305)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "3",
         "name" : "Deidentification Action Sequence",
         "desc" : "Actions to be performed on element within the block that are not safe from identify leakage."
      },
      "(0020,0020)" : {
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M",
         "entity" : "Image",
         "module" : "General Image",
         "req" : "2C",
         "name" : "Patient Orientation",
         "desc" : [
            [
               "Patient direction of the rows and columns of the image. Required if image does not require Image Orientation (Patient) (0020,0037) and Image Position (Patient) (0020,0032). May be present otherwise. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.1.1.1"
                  }
               },
               " for further explanation."
            ],
            {
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_09636c87-54b7-4fd6-ae07-683cdb9bf8a4"
                     },
                     "el" : "para",
                     "content" : [
                        "IODs may have attributes other than Patient Orientation, Image Orientation, or Image Position (Patient) to describe orientation in which case this attribute will be zero length."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ]
      },
      "(0008,0070)" : {
         "req" : "2",
         "name" : "Manufacturer",
         "desc" : "Manufacturer of the equipment that produced the composite instances.",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "entity" : "Equipment",
         "module" : "General Equipment"
      },
      "(0040,1012)" : {
         "desc" : [
            "Coded reason(s) for performing this procedure.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_dcfce3fc-57ae-49c6-9700-37334726e8eb"
                     },
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
         "name" : "Reason For Performed Procedure Code Sequence",
         "module" : "General Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M"
      },
      "(0008,1052)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Performing Physician Identification Sequence",
         "req" : "3",
         "desc" : [
            "Identification of the physician(s) administering the Series.",
            "One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Performing Physician's Name (0008,1050), if present."
         ]
      },
      "(0008,0060)" : {
         "name" : "Modality",
         "req" : "1",
         "desc" : [
            "Type of equipment that originally acquired the data used to create the images in this Series. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.3.1.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            " for Defined Terms."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0010,2297)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "desc" : [
            "Name of person with medical or welfare decision making authority for the patient.",
            "Required if the patient is an animal. May be present otherwise."
         ],
         "req" : "2C",
         "name" : "Responsible Person"
      },
      "(0040,9096)[<0>](0040,9210)" : {
         "desc" : "Label that is used to identify the transformation of this Item.",
         "req" : "1",
         "name" : "LUT Label",
         "entity" : "Image",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "usage" : "M"
      },
      "(fffa,fffa)[<0>](0400,0401)" : {
         "req" : "3",
         "name" : "Digital Signature Purpose Code Sequence",
         "desc" : [
            "The purpose of this Digital Signature.",
            "Only a single Item is permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0040,0275)[<0>](0008,0050)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "req" : "3",
         "name" : "Accession Number",
         "desc" : "An identifier of the Imaging Service Request for this Requested Procedure."
      },
      "(0400,0561)[<0>](0400,0564)" : {
         "req" : "2",
         "name" : "Source of Previous Values",
         "desc" : "The source that provided the SOP Instance prior to the removal or replacement of the values. For example, this might be the Institution from which imported SOP Instances were received.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Image"
      },
      "(0100,0424)" : {
         "entity" : "Image",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Any comments associated with the setting of the SOP Instance Status (0100,0410) to AO.",
         "name" : "SOP Authorization Comment",
         "req" : "3"
      },
      "(0010,1002)[<0>](0010,0024)" : {
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "req" : "3",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M"
      },
      "(0088,0200)[<0>](0028,0010)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image",
         "entity" : "Image",
         "req" : "1",
         "name" : "Rows",
         "desc" : "Number of rows in the image."
      },
      "(0008,1120)[<0>](0008,1150)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(fffa,fffa)[<0>](0400,0305)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "entity" : "Image",
         "module" : "SOP Common",
         "req" : "1C",
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
                     "attrs" : {
                        "xml:id" : "para_cae60b6b-4fad-4c20-981d-247bbf9c6471"
                     },
                     "el" : "para"
                  },
                  "\n                    "
               ]
            }
         ]
      },
      "(0028,0103)" : [
         {
            "module" : "Image Pixel",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.7-11b"
            ],
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
                  "title" : "Enumerated Values:",
                  "type" : "variablelist"
               }
            ],
            "name" : "Pixel Representation",
            "req" : "1"
         },
         {
            "entity" : "Image",
            "module" : "VL Image",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-77"
            ],
            "desc" : [
               "Data representation of the pixel samples. Each sample shall have the same pixel representation.",
               [
                  "See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "linkend" : "sect_C.8.12.1.1.3",
                        "xrefstyle" : "select: label"
                     }
                  },
                  " for specialization of this Attribute."
               ]
            ],
            "name" : "Pixel Representation",
            "req" : "1"
         }
      ],
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a168)" : {
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "name" : "Concept Code Sequence",
         "req" : "1C",
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a123)" : {
         "req" : "1C",
         "name" : "Person Name",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a040)" : {
         "usage" : "C - Required if the Imaging Subject is a Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "entity" : "Image",
         "module" : "Specimen",
         "req" : "1",
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
         ]
      },
      "(0088,0200)[<0>](0028,0011)" : {
         "desc" : "Number of columns in the image",
         "name" : "Columns",
         "req" : "1",
         "entity" : "Image",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M"
      },
      "(0018,1063)" : {
         "name" : "Frame Time",
         "req" : "1C",
         "desc" : [
            "Nominal time (in msec) per individual frame. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.6.5.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for further explanation. Required if Frame Increment Pointer (0028,0009) points to Frame Time."
         ],
         "mod_tables" : [
            "table_C.7-13"
         ],
         "usage" : "M",
         "module" : "Cine",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a160)" : {
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "req" : "1C",
         "name" : "Text Value"
      },
      "(0008,1072)[<0>](0008,0081)" : {
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "name" : "Institution Address",
         "req" : "3",
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0018,1030)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series",
         "req" : "3",
         "name" : "Protocol Name",
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
         ]
      },
      "(0008,2112)[<0>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "module" : "General Image",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3",
            "table_10-11"
         ]
      },
      "(0010,1100)[<0>](0040,e023)[<1>](0040,e010)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Retrieve URI",
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
               "content" : [
                  "\n",
                  {
                     "content" : [
                        "The VR of this attribute has changed from UT to UR."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_579dc3f3-c3f6-407b-b4bc-d6197e7cc820"
                     }
                  },
                  "\n"
               ],
               "el" : "note"
            }
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0082)" : {
         "req" : "1C",
         "name" : "Institution Code Sequence",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Image"
      },
      "(0008,0008)" : [
         {
            "entity" : "Image",
            "module" : "General Image",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "usage" : "M",
            "desc" : [
               "Image identification characteristics. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.1.1.2"
                  },
                  "el" : "xref"
               },
               " for Defined Terms and further explanation."
            ],
            "req" : "3",
            "name" : "Image Type"
         },
         {
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-77"
            ],
            "entity" : "Image",
            "module" : "VL Image",
            "req" : "1",
            "name" : "Image Type",
            "desc" : [
               "Image identification characteristics.",
               [
                  "See ",
                  {
                     "attrs" : {
                        "linkend" : "sect_C.8.12.1.1.6",
                        "xrefstyle" : "select: label"
                     },
                     "el" : "xref"
                  },
                  " for specialization."
               ]
            ]
         }
      ],
      "(0008,0005)" : {
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
         "req" : "1C",
         "module" : "SOP Common",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0008,1052)[<0>](0040,1102)" : {
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "desc" : "Person's mailing address",
         "name" : "Person's Address",
         "req" : "3"
      },
      "(0040,0555)[<0>](0040,a163)" : {
         "req" : "1C",
         "name" : "Rational Denominator Value",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "usage" : "M",
         "module" : "Acquisition Context",
         "entity" : "Image"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,003a)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Assigning Agency or Department Code Sequence",
         "req" : "3",
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
      "(0020,000d)" : {
         "desc" : "Unique identifier for the Study.",
         "name" : "Study Instance UID",
         "req" : "1",
         "entity" : "Study",
         "module" : "General Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0012,0064)" : {
         "req" : "1C",
         "name" : "De-identification Method Code Sequence",
         "desc" : [
            "A code describing the mechanism or method use to remove the patient's identity.",
            "One or more Items shall be included in this Sequence. Multiple items are used if successive de-identification steps have been performed or to describe options of a defined profile.",
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method (0012,0063) is not present. May be present otherwise."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(003a,0300)[<0>](003a,0302)" : {
         "mod_tables" : [
            "table_C.7-13"
         ],
         "usage" : "M",
         "entity" : "Image",
         "module" : "Cine",
         "name" : "Channel Mode",
         "req" : "1",
         "desc" : [
            "A coded descriptor qualifying the mode of the channel:",
            {
               "list" : [
                  [
                     "MONO",
                     "1 signal"
                  ],
                  [
                     "STEREO",
                     "2 simultaneously acquired (left and right) signals"
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ]
      },
      "(0008,0096)[<0>](0008,0082)" : {
         "req" : "1C",
         "name" : "Institution Code Sequence",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "entity" : "Study"
      },
      "(0010,0035)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "desc" : [
            "The Alternative Calendar used for Patient's Birth Date in Alternative Calendar (0010,0033) and Patient's Death Date in Alternative Calendar (0010,0034).",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.1.5",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for Defined Terms."
            ],
            "Required if either Patient's Birth Date in Alternative Calendar (0010,0033) or Patient's Alternative Death Date in Calendar (0010,0034) is present."
         ],
         "name" : "Patient's Alternative Calendar",
         "req" : "1C"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a120)" : {
         "name" : "DateTime",
         "req" : "1C",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "C - Required if the Imaging Subject is a Specimen",
         "entity" : "Image",
         "module" : "Specimen"
      },
      "(0008,1164)" : {
         "desc" : [
            "Sequence containing details of how this SOP Instance was extracted from a source multi-frame SOP Instance.",
            "If this instance was created from an instance that contains a Frame Extraction Sequence, then this sequence shall contain all of the items from the parent's Frame Extraction Sequence and a new item that describes this extraction.",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1",
         "name" : "Frame Extraction Sequence",
         "entity" : "Image",
         "module" : "Frame Extraction",
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "mod_tables" : [
            "table_C.12-9"
         ]
      },
      "(0088,0200)[<0>](0028,0002)" : {
         "name" : "Samples per Pixel",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image",
         "entity" : "Image"
      },
      "(0008,0300)[<0>](0008,0302)" : {
         "entity" : "Image",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "desc" : [
            "The value of the Private Creator Data Element value used to reserve the block\n                  of Private Data Elements whose characteristics are described in this Item.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "attrs" : {
                        "xml:id" : "para_7c88d52e-a9e0-4e2b-826b-3ef43e58ae69"
                     },
                     "el" : "para",
                     "content" : [
                        "Private blocks are identified by their Private Creator Data Element value,\n                    rather than their numeric block number, since instances may be modified and\n                    numeric block numbers reassigned but the Private Creator Data Element value,\n                    which is required to be unique within a Group of Private Data Elements, will be\n                    preserved."
                     ]
                  },
                  "\n                "
               ]
            }
         ],
         "req" : "1",
         "name" : "Private Creator Reference"
      },
      "(0008,0105)" : {
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
         "req" : "1",
         "name" : "Mapping Resource",
         "entity" : "Image",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C",
         "name" : "Universal Entity ID"
      },
      "(0008,1164)[<0>](0008,1163)" : {
         "entity" : "Image",
         "module" : "Frame Extraction",
         "mod_tables" : [
            "table_C.12-9"
         ],
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "desc" : [
            "The start and end times of the frames that were extracted.",
            "Required if object extraction is based on a Frame Level Retrieve using Time Range (0008,1163).",
            [
               "See ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "targetptr" : "PS3.4",
                     "targetdoc" : "PS3.4",
                     "xrefstyle" : "select: labelnumber"
                  }
               },
               " \"Instance and Frame Level Retrieve SOP Classes\""
            ]
         ],
         "req" : "1C",
         "name" : "Time Range"
      },
      "(0088,0200)[<0>](0028,0102)" : {
         "entity" : "Image",
         "module" : "General Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "desc" : [
            "Most significant bit for pixel sample data. Each sample shall have the same high bit. High Bit (0028,0102) shall be one less than Bits Stored (0028,0101). See ",
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
         "req" : "1",
         "name" : "High Bit"
      },
      "(0020,9172)[<0>](0008,1160)" : {
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
                        "xml:id" : "para_68450e47-9448-4ac5-82e8-4015a854968a"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "name" : "Referenced Frame Number",
         "req" : "1C",
         "module" : "SOP Common",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ]
      },
      "(0400,0561)[<0>](0400,0550)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "desc" : [
            "Sequence that contains all the Attributes, with their previous values, that were modified or removed from the main data set.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1",
         "name" : "Modified Attributes Sequence"
      },
      "(0028,2114)" : {
         "entity" : "Image",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M",
         "desc" : [
            "A label for the lossy compression method(s) that have been applied to this image.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.1.1.5.1"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "name" : "Lossy Image Compression Method",
         "req" : "3"
      },
      "(0040,0555)[<0>](0040,a123)" : {
         "module" : "Acquisition Context",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "usage" : "M",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_a8c76dec-9c64-427d-9278-7ac6f369d5a7"
                     }
                  },
                  "\n                  "
               ]
            },
            "Required if the value that Concept Name Code Sequence (0040,A043) requires (implies) is a person name. Shall not be present otherwise."
         ],
         "name" : "Person Name",
         "req" : "1C"
      },
      "(0040,0560)[<0>](0040,0562)[<1>](0040,0031)" : {
         "module" : "Specimen",
         "entity" : "Image",
         "usage" : "C - Required if the Imaging Subject is a Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C",
         "name" : "Local Namespace Entity ID"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1155)" : {
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "req" : "1"
      },
      "(0010,1002)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "desc" : [
            "A sequence of identification numbers or codes used to identify the patient, which may or may not be human readable, and may or may not have been obtained from an implanted or attached device such as an RFID or barcode.",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "name" : "Other Patient IDs Sequence"
      },
      "(0010,0212)" : {
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
         "req" : "3",
         "name" : "Strain Description",
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(0038,0064)[<0>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
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
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "usage" : "U",
         "entity" : "Study",
         "module" : "Patient Study"
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
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_b6227994-ee87-4d4f-9ba4-c3a82f2a705d"
                     },
                     "content" : [
                        "Proper use of these flags is specified in Security Profiles. Implementations that do not conform to such Security Profiles may not necessarily handle these flags properly."
                     ]
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "name" : "SOP Instance Status",
         "req" : "3",
         "entity" : "Image",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a162)" : {
         "entity" : "Image",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "C - Required if the Imaging Subject is a Specimen",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "name" : "Rational Numerator Value",
         "req" : "1C"
      },
      "(0010,0040)" : {
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
         "name" : "Patient's Sex",
         "req" : "2",
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(0088,0200)" : {
         "entity" : "Image",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M",
         "desc" : [
            "This icon image is representative of the Image.",
            "Only a single Item is permitted in this Sequence."
         ],
         "name" : "Icon Image Sequence",
         "req" : "3"
      },
      "(0040,0560)[<0>](0040,0562)[<1>](0040,0033)" : {
         "usage" : "C - Required if the Imaging Subject is a Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "module" : "Specimen",
         "entity" : "Image",
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ]
      },
      "(0040,0555)[<0>](0040,a30a)" : {
         "module" : "Acquisition Context",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "usage" : "M",
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a set of one or more numeric values.",
            "Required if the value that Concept Name Code Sequence (0040,A043) requires (implies) is a set of one or more integers or real numbers. Shall not be present otherwise."
         ],
         "req" : "1C",
         "name" : "Numeric Value"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a123)" : {
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "name" : "Person Name",
         "req" : "1C"
      },
      "(0008,1062)[<0>](0040,1102)" : {
         "req" : "3",
         "name" : "Person's Address",
         "desc" : "Person's mailing address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "module" : "General Study",
         "entity" : "Study"
      },
      "(0008,1010)" : {
         "req" : "3",
         "name" : "Station Name",
         "desc" : "User defined name identifying the machine that produced the composite instances.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
         "entity" : "Equipment"
      },
      "(0008,1120)[<0>](0008,1155)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "name" : "Referenced SOP Instance UID"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1155)" : {
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "name" : "Referenced SOP Instance UID"
      },
      "(4ffe,0001)[<0>](0400,0015)" : {
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
                     "attrs" : {
                        "xml:id" : "para_c0347aea-ecd8-4c0b-8e2f-cedadc2aacd5"
                     },
                     "el" : "para"
                  },
                  "\n                    "
               ]
            }
         ],
         "name" : "MAC Algorithm",
         "req" : "1",
         "entity" : "Image",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0088,0200)[<0>](0028,0006)" : {
         "name" : "Planar Configuration",
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
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M",
         "module" : "General Image",
         "entity" : "Image"
      },
      "(0018,a001)[<0>](0040,a170)" : {
         "entity" : "Image",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "name" : "Purpose of Reference Code Sequence",
         "req" : "1"
      },
      "(0088,0200)[<0>](0028,0101)" : {
         "name" : "Bits Stored",
         "req" : "1",
         "desc" : [
            "Number of bits stored for each pixel sample. Each sample shall have the same number of bits stored. See ",
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
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image",
         "entity" : "Image"
      },
      "(0050,0010)" : {
         "desc" : [
            "A sequence of items describing devices used that may be visible in the image.",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Device Sequence",
         "req" : "1",
         "module" : "Device",
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-18"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a043)" : {
         "req" : "1",
         "name" : "Concept Name Code Sequence",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0040,9096)[<0>](0040,9214)" : {
         "desc" : [
            "Specifies the first stored value mapped for the Real Word Value Intercept (0040,9224) and Real World Value Slope (0040,9225) of this Item.",
            "Required if Real World Value First Value Mapped (0040,9216) is absent.",
            {
               "el" : "note",
               "content" : [
                  "\n                        ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_21eff4f3-31a1-4086-873d-2bb31aaf6698"
                     },
                     "content" : [
                        "The same Attribute with a double float precision value is used whether or not Float Pixel Data (7FE0,0008) or Double Float Pixel Data (7FE0,0009) are present, an integer value is not sufficient."
                     ]
                  },
                  "\n                      "
               ]
            }
         ],
         "name" : "Double Float Real World Value First Value Mapped",
         "req" : "1C",
         "module" : "General Image",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ]
      },
      "(0018,a001)[<0>](0008,1090)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "3",
         "name" : "Manufacturer's Model Name",
         "desc" : "Manufacturer's model name of the equipment that contributed to the composite instance."
      },
      "(0010,4000)" : {
         "desc" : "User-defined additional information about the patient.",
         "req" : "3",
         "name" : "Patient Comments",
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(0038,0014)[<0>](0040,0032)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "entity" : "Study",
         "module" : "Patient Study",
         "req" : "1C",
         "name" : "Universal Entity ID",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise."
      },
      "(0008,103e)" : {
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : "Description of the Series",
         "name" : "Series Description",
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0062,000b)" : {
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "name" : "Referenced Segment Number",
         "req" : "1C",
         "module" : "General Series",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0008,0013)" : {
         "name" : "Instance Creation Time",
         "req" : "3",
         "desc" : [
            "Time the SOP Instance was created.",
            "This is the time that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a043)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Concept Name Code Sequence",
         "req" : "1",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0018,a001)[<0>](0018,a003)" : {
         "desc" : "Description of the contribution the equipment made to the composite instance.",
         "name" : "Contribution Description",
         "req" : "3",
         "entity" : "Image",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0028,0004)" : [
         {
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
            "req" : "1",
            "name" : "Photometric Interpretation",
            "module" : "Image Pixel",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "usage" : "M"
         },
         {
            "mod_tables" : [
               "table_C.8-77"
            ],
            "usage" : "M",
            "module" : "VL Image",
            "entity" : "Image",
            "req" : "1",
            "name" : "Photometric Interpretation",
            "desc" : [
               "Specifies the intended interpretation of the pixel data.",
               [
                  "See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "linkend" : "sect_C.8.12.1.1.1",
                        "xrefstyle" : "select: label"
                     }
                  },
                  " for specialization of this Attribute."
               ]
            ]
         }
      ],
      "(0010,0033)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Patient's Birth Date in Alternative Calendar",
         "req" : "3",
         "desc" : [
            "Date of birth of the named patient in the Alternative Calendar (0010,0035).",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "No format is specified for alternative calendar dates so none should be assumed."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_d088e7b4-910c-4c72-8abf-cfb5a85daa67"
                     }
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ]
      },
      "(0050,0010)[<0>](0008,1090)" : {
         "entity" : "Image",
         "module" : "Device",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "desc" : "Manufacturer's model name of the device",
         "name" : "Manufacturer's Model Name",
         "req" : "3"
      },
      "(0008,2228)" : {
         "req" : "3",
         "name" : "Primary Anatomic Structure Sequence",
         "desc" : [
            "Sequence of Items that identifies the primary anatomic structure(s) of interest in this Instance.",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.8-77",
            "table_10-8"
         ],
         "usage" : "M",
         "module" : "VL Image",
         "entity" : "Image"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0020,000e)" : {
         "desc" : "Unique identifier of the Series containing the referenced Instances.",
         "name" : "Series Instance UID",
         "req" : "1",
         "entity" : "Image",
         "module" : "Common Instance Reference",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "usage" : "U"
      },
      "(0012,0031)" : {
         "req" : "2",
         "name" : "Clinical Trial Site Name",
         "desc" : [
            "Name of the site responsible for submitting clinical trial or research data. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.3.1.5"
               }
            }
         ],
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject",
         "entity" : "Patient"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,003a)" : {
         "req" : "3",
         "name" : "Assigning Agency or Department Code Sequence",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0010,1001)" : {
         "desc" : "Other names used to identify the patient.",
         "req" : "3",
         "name" : "Other Patient Names",
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a161)" : {
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "name" : "Floating Point Value",
         "req" : "1C",
         "entity" : "Image",
         "module" : "Specimen",
         "usage" : "C - Required if the Imaging Subject is a Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0020,9172)[<0>](0008,1150)" : {
         "entity" : "Image",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "req" : "1"
      },
      "(0050,0010)[<0>](0008,0070)" : {
         "name" : "Manufacturer",
         "req" : "3",
         "desc" : "Manufacturer of the device",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "usage" : "U",
         "entity" : "Image",
         "module" : "Device"
      },
      "(0010,1100)[<0>](0040,e022)[<1>](0088,0140)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Storage Media File-Set UID",
         "req" : "1",
         "desc" : "Uniquely identifies the Storage Media on which the referenced instance(s) reside."
      },
      "(0028,0100)" : [
         {
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "usage" : "M",
            "entity" : "Image",
            "module" : "Image Pixel",
            "req" : "1",
            "name" : "Bits Allocated",
            "desc" : [
               "Number of bits allocated for each pixel sample. Each sample shall have the same number of bits allocated. Bits Allocated (0028,0100) shall be either 1, or a multiple of 8. See ",
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
         {
            "name" : "Bits Allocated",
            "req" : "1",
            "desc" : [
               "Number of bits allocated for each pixel sample. Each sample shall have the same number of bits allocated.",
               [
                  "See ",
                  {
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.8.12.1.1.2"
                     },
                     "el" : "xref"
                  },
                  " for specialization of this Attribute. See ",
                  {
                     "attrs" : {
                        "targetptr" : "PS3.5",
                        "targetdoc" : "PS3.5",
                        "xrefstyle" : "select: labelnumber"
                     },
                     "el" : "olink"
                  },
                  " for further explanation."
               ]
            ],
            "mod_tables" : [
               "table_C.8-77"
            ],
            "usage" : "M",
            "entity" : "Image",
            "module" : "VL Image"
         }
      ],
      "(0008,114a)[<0>](0008,1150)" : {
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-11"
         ],
         "module" : "General Image",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0032,1060)" : {
         "desc" : "Institution-generated administrative description or classification of Requested Procedure.",
         "req" : "3",
         "name" : "Requested Procedure Description",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1150)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0008,009d)[<0>](0008,0080)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "module" : "General Study",
         "entity" : "Study",
         "req" : "1C",
         "name" : "Institution Name",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present."
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0031)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "name" : "Local Namespace Entity ID",
         "req" : "1C"
      },
      "(0008,1164)[<0>](0008,1162)" : {
         "req" : "1C",
         "name" : "Calculated Frame List",
         "desc" : [
            "A list of Frames that were extracted in the form of one or more triplets",
            "Required if object extraction is based on a Frame Level Retrieve using the Calculated Frame List (0008,1162) attribute.",
            [
               "See ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "targetptr" : "PS3.4",
                     "xrefstyle" : "select: labelnumber",
                     "targetdoc" : "PS3.4"
                  }
               },
               " \"Instance and Frame Level Retrieve SOP Classes\""
            ]
         ],
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "mod_tables" : [
            "table_C.12-9"
         ],
         "module" : "Frame Extraction",
         "entity" : "Image"
      },
      "(0040,0254)" : {
         "desc" : "Institution-generated description or classification of the Procedure Step that was performed.",
         "req" : "3",
         "name" : "Performed Procedure Step Description",
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "usage" : "M"
      },
      "(0008,0106)" : {
         "req" : "1",
         "name" : "Context Group Version",
         "desc" : [
            "The identifier of the version of the Context Group.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_8.5",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0008,1052)[<0>](0008,0082)" : {
         "name" : "Institution Code Sequence",
         "req" : "1C",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0040,0520)[<0>](0008,1090)" : {
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "C - Required if the Imaging Subject is a Specimen",
         "entity" : "Image",
         "module" : "Specimen",
         "name" : "Manufacturer's Model Name",
         "req" : "3",
         "desc" : "Manufacturer's model name of the container component."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,08ea)" : {
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "name" : "Measurement Units Code Sequence",
         "req" : "1C",
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0018,a001)[<0>](0018,1201)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Image",
         "name" : "Time of Last Calibration",
         "req" : "3",
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
      "(fffa,fffa)[<0>](0400,0115)" : {
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
               "el" : "note",
               "content" : [
                  "\n                      ",
                  {
                     "content" : [
                        "\n                        ",
                        {
                           "content" : [
                              "\n                          ",
                              {
                                 "content" : [
                                    "As technology advances, additional encryption algorithms may be allowed in future versions. Implementations should take this possibility into account."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_cbf16d70-7dfc-44e9-85f6-9cf9aea9f0eb"
                                 },
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
                                 "content" : [
                                    "When symmetric encryption is used, the certificate merely identifies which key was used by which entity, but not the actual key itself. Some other means (e.g., a trusted third party) must be used to obtain the key."
                                 ],
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_2d3ce9c9-555a-4be1-9e6d-e07eb84c4852"
                                 }
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
               ]
            }
         ],
         "req" : "1",
         "name" : "Certificate of Signer",
         "entity" : "Image",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M"
      },
      "(0040,0250)" : {
         "desc" : "Date on which the Performed Procedure Step ended.",
         "req" : "3",
         "name" : "Performed Procedure Step End Date",
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "usage" : "M"
      },
      "(0020,0011)" : {
         "desc" : "A number that identifies this Series.",
         "name" : "Series Number",
         "req" : "2",
         "module" : "General Series",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a162)" : {
         "entity" : "Image",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "usage" : "M",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "name" : "Rational Numerator Value"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1155)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "name" : "Referenced SOP Instance UID"
      },
      "(0008,1032)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "entity" : "Study",
         "name" : "Procedure Code Sequence",
         "req" : "3",
         "desc" : [
            "A Sequence that conveys the type of procedure performed.",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0008,1111)[<0>](0008,1155)" : {
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-11"
         ],
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "name" : "Referenced SOP Instance UID"
      },
      "(0040,0275)[<0>](0040,1002)" : {
         "req" : "3",
         "name" : "Reason for the Requested Procedure",
         "desc" : "Reason for requesting this procedure.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(fffa,fffa)[<0>](0400,0100)" : {
         "desc" : "A UID that can be used to uniquely reference this signature.",
         "name" : "Digital Signature UID",
         "req" : "1",
         "module" : "SOP Common",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M"
      },
      "(fffa,fffa)" : {
         "name" : "Digital Signatures Sequence",
         "req" : "3",
         "desc" : [
            "Sequence holding Digital Signatures.",
            "One or more Items are permitted in this Sequence."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0040,0515)[<0>](0040,0513)[<1>](0040,0031)" : {
         "module" : "Specimen",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "usage" : "C - Required if the Imaging Subject is a Specimen",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "name" : "Local Namespace Entity ID",
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a168)" : {
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "name" : "Concept Code Sequence",
         "req" : "1C",
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0040,0520)[<0>](0050,0015)" : {
         "name" : "Container Component Width",
         "req" : "3",
         "desc" : "Width in mm of container component.",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "C - Required if the Imaging Subject is a Specimen",
         "entity" : "Image",
         "module" : "Specimen"
      },
      "(0040,0275)[<0>](0040,0009)" : {
         "desc" : [
            "Identifier that identifies the Scheduled Procedure Step.",
            "Required if procedure was scheduled.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "attrs" : {
                        "xml:id" : "para_36129a24-d644-48ab-914d-1f3fbe916df6"
                     },
                     "el" : "para",
                     "content" : [
                        "The condition is to allow the contents of this macro to be present (e.g., to convey the reason for the procedure, such as whether a mammogram is for screening or diagnostic purposes) even when the procedure step was not formally scheduled and a value for this identifier is unknown, rather than making up a dummy value."
                     ]
                  },
                  "\n              "
               ]
            }
         ],
         "req" : "1C",
         "name" : "Scheduled Procedure Step ID",
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M"
      },
      "(0008,2144)" : {
         "entity" : "Image",
         "module" : "Cine",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-13"
         ],
         "desc" : "Recommended rate at which the frames of a Multi-frame image should be displayed in frames/second.",
         "name" : "Recommended Display Frame Rate",
         "req" : "3"
      },
      "(0038,0014)[<0>](0040,0033)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "module" : "Patient Study",
         "entity" : "Study",
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ]
      },
      "(0010,2294)[<0>](0010,2295)" : {
         "name" : "Breed Registration Number",
         "req" : "1",
         "desc" : "Identification number of an animal within the registry.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a040)" : {
         "entity" : "Image",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "name" : "Value Type",
         "req" : "1"
      },
      "(003a,0300)" : {
         "desc" : [
            [
               "Description of any multiplexed audio channels. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.6.5.1.3",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Zero or more Items may be included in this Sequence.",
            [
               "Required if the Transfer Syntax used to encode the multi-frame image contains multiplexed (interleaved) audio channels, such as is possible with MPEG2 Systems (see ",
               {
                  "attrs" : {
                     "linkend" : "biblio_ISOIEC13818-1"
                  },
                  "el" : "xref"
               },
               ")."
            ]
         ],
         "req" : "2C",
         "name" : "Multiplexed Audio Channels Description Code Sequence",
         "module" : "Cine",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-13"
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a040)" : {
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
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
         "name" : "Value Type",
         "req" : "1"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "entity" : "Image",
         "module" : "Specimen",
         "usage" : "C - Required if the Imaging Subject is a Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a162)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "C - Required if the Imaging Subject is a Specimen",
         "entity" : "Image",
         "module" : "Specimen",
         "req" : "1C",
         "name" : "Rational Numerator Value",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ]
      },
      "(0028,1050)" : {
         "entity" : "Image",
         "module" : "VL Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-77"
         ],
         "desc" : [
            [
               "Window Center for display. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.11.2.1.2",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ],
            "Meaningful only if Photometric Interpretation (0028,0004) is MONOCHROME2."
         ],
         "name" : "Window Center",
         "req" : "3"
      },
      "(0040,0520)[<0>](0050,001e)" : {
         "name" : "Container Component Description",
         "req" : "3",
         "desc" : "Container component text description.",
         "usage" : "C - Required if the Imaging Subject is a Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "entity" : "Image",
         "module" : "Specimen"
      },
      "(0018,a001)[<0>](0018,a002)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "desc" : "The Date & Time when the equipment contributed to the composite instance.",
         "name" : "Contribution DateTime",
         "req" : "3"
      },
      "(0038,0014)[<0>](0040,0031)" : {
         "entity" : "Study",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "usage" : "U",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C",
         "name" : "Local Namespace Entity ID"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a120)" : {
         "module" : "General Series",
         "entity" : "Series",
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
         "req" : "1C",
         "name" : "DateTime"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a122)" : {
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "req" : "1C",
         "name" : "Time",
         "entity" : "Image",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a163)" : {
         "name" : "Rational Denominator Value",
         "req" : "1C",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a161)" : {
         "module" : "Specimen",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "C - Required if the Imaging Subject is a Specimen",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "name" : "Floating Point Value",
         "req" : "1C"
      },
      "(0012,0063)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "req" : "1C",
         "name" : "De-identification Method",
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
                                       "content" : [
                                          "(109104, DCM, \"De-identifying Equipment\")"
                                       ],
                                       "el" : "olink",
                                       "attrs" : {
                                          "targetptr" : "DCM_109104",
                                          "targetdoc" : "PS3.16"
                                       }
                                    },
                                    "."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_adf0139e-d0e5-457a-ac4d-5c9e20c50e35"
                                 },
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
               ]
            },
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method Code Sequence (0012,0064) is not present. May be present otherwise."
         ]
      },
      "(0010,2294)" : {
         "desc" : [
            "Information identifying an animal within a breed registry.",
            "Zero or more Items shall be included in this Sequence.",
            "Required if the patient is an animal."
         ],
         "name" : "Breed Registration Sequence",
         "req" : "2C",
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(0008,0016)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "1",
         "name" : "SOP Class UID",
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
                  "xrefstyle" : "select: labelnumber",
                  "targetdoc" : "PS3.4",
                  "targetptr" : "PS3.4"
               }
            },
            "."
         ]
      },
      "(0008,009d)" : {
         "desc" : [
            "Identification of the consulting physician(s).",
            "One or more Items shall be included in this Sequence. If more than one Item, the number and order shall correspond to the value of Consulting Physician's Name (0008,009C), if present."
         ],
         "name" : "Consulting Physician Identification Sequence",
         "req" : "3",
         "module" : "General Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,0070)" : {
         "req" : "1",
         "name" : "Manufacturer",
         "desc" : "Manufacturer of the equipment that contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Image"
      },
      "(0040,0555)[<0>](0040,a136)" : {
         "req" : "1C",
         "name" : "Referenced Frame Numbers",
         "desc" : [
            "References one or more frames in a Multi-frame SOP Instance. The first frame shall be denoted as frame number one.",
            "Required if this SOP Instance is a Multi-frame SOP Instance and the values in this Sequence item do not apply to all frames."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "module" : "Acquisition Context",
         "entity" : "Image"
      },
      "(0040,9096)[<0>](0040,9211)" : {
         "desc" : [
            "Specifies the last stored value mapped for the Real Word Value Intercept (0040,9224) and Real World Value Slope (0040,9225) or Real World Value LUT (0040,9212) of this Item.",
            "Required if Pixel Data (7FE0,0010) or Real World Value LUT Data (0040,9212) is present or Double Float Real World Value Last Value Mapped (0040,9213) is absent.",
            {
               "content" : [
                  "\n                        ",
                  {
                     "content" : [
                        "This Attribute may be used even when Float Pixel Data (7FE0,0008) or Double Float Pixel Data (7FE0,0009) are used instead of Pixel Data (7FE0,0010) if an integer of the size of this Attribute is sufficient to define the range."
                     ],
                     "attrs" : {
                        "xml:id" : "para_2a014060-59fc-451c-ad0d-b820960b5ad4"
                     },
                     "el" : "para"
                  },
                  "\n                      "
               ],
               "el" : "note"
            },
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
         "req" : "1C",
         "name" : "Real World Value Last Value Mapped",
         "module" : "General Image",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "usage" : "M"
      },
      "(0040,a390)[<0>](0008,1155)" : {
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Image"
      },
      "(0032,1034)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "entity" : "Study",
         "req" : "3",
         "name" : "Requesting Service Code Sequence",
         "desc" : [
            "Institutional department where the request initiated.",
            "Only a single item is permitted in this Sequence."
         ]
      },
      "(0018,1008)" : {
         "entity" : "Equipment",
         "module" : "General Equipment",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "desc" : "Identifier of the gantry or positioner.",
         "req" : "3",
         "name" : "Gantry ID"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "entity" : "Series",
         "module" : "General Series",
         "req" : "3",
         "name" : "Protocol Context Sequence",
         "desc" : "Sequence that specifies the context for the Scheduled Protocol Code Sequence Item. One or more Items are permitted in this Sequence."
      },
      "(0040,0253)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Performed Procedure Step ID",
         "req" : "3",
         "desc" : "User or equipment generated identifier of that part of a Procedure that has been carried out within this step."
      },
      "(0010,1002)[<0>](0010,0022)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "desc" : [
            "The type of identifier in this item.",
            {
               "type" : "variablelist",
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
               ]
            },
            {
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
               ],
               "el" : "note"
            }
         ],
         "req" : "1",
         "name" : "Type of Patient ID"
      },
      "(003a,0300)[<0>](003a,0301)" : {
         "entity" : "Image",
         "module" : "Cine",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-13"
         ],
         "desc" : "A reference to the audio channel as identified within Transfer Syntax encoded bit stream (1 for the main channel, 2 for the second channel and 3 to 9 to the complementary channels).",
         "req" : "1",
         "name" : "Channel Identification Code"
      },
      "(0008,1048)" : {
         "req" : "3",
         "name" : "Physician(s) of Record",
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
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "entity" : "Study",
         "module" : "General Study"
      },
      "(fffa,fffa)[<0>](0400,0310)" : {
         "entity" : "Image",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
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
         "name" : "Certified Timestamp",
         "req" : "3"
      },
      "(0038,0064)" : {
         "entity" : "Study",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Service Episode ID (0038,0060).",
            "Only a single Item is permitted in this Sequence."
         ],
         "name" : "Issuer of Service Episode ID Sequence",
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a168)" : {
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "name" : "Concept Code Sequence",
         "req" : "1C",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0008,1115)[<0>](0008,114a)" : {
         "req" : "1",
         "name" : "Referenced Instance Sequence",
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-8"
         ],
         "usage" : "U",
         "entity" : "Image",
         "module" : "Common Instance Reference"
      },
      "(0008,010f)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
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
         "name" : "Context Identifier"
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(7fe0,0010)" : {
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
         "name" : "Pixel Data",
         "req" : "1C",
         "module" : "Image Pixel",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a168)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Concept Code Sequence",
         "req" : "1C",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0032)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "3",
         "name" : "Universal Entity ID",
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
      "(0028,0101)" : [
         {
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "entity" : "Image",
            "module" : "Image Pixel",
            "name" : "Bits Stored",
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
            ]
         },
         {
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-77"
            ],
            "entity" : "Image",
            "module" : "VL Image",
            "name" : "Bits Stored",
            "req" : "1",
            "desc" : [
               "Number of bits stored for each pixel sample. Each sample shall have the same number of bits stored.",
               [
                  "See ",
                  {
                     "attrs" : {
                        "linkend" : "sect_C.8.12.1.1.2",
                        "xrefstyle" : "select: label"
                     },
                     "el" : "xref"
                  },
                  " for specialization of this Attribute. See ",
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
            ]
         }
      ],
      "(0028,0300)" : {
         "name" : "Quality Control Image",
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
               "If this Attribute is absent, then the image may or may not be a quality control or phantom image. The phantom device in the image can be described using the ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.6.12",
                     "xrefstyle" : "select: title"
                  },
                  "el" : "xref"
               },
               ". See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.6.12",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               }
            ]
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "entity" : "Image",
         "module" : "General Image"
      },
      "(0008,3010)" : {
         "name" : "Irradiation Event UID",
         "req" : "3",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image",
         "entity" : "Image"
      },
      "(4ffe,0001)[<0>](0400,0020)" : {
         "req" : "1",
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
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "entity" : "Image"
      },
      "(0020,000e)" : {
         "name" : "Series Instance UID",
         "req" : "1",
         "desc" : "Unique identifier of the Series.",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a040)" : {
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
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
         "name" : "Value Type",
         "req" : "1"
      },
      "(0008,1062)[<0>](0040,1101)" : {
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1",
         "name" : "Person Identification Code Sequence",
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0008,009d)[<0>](0040,1101)" : {
         "req" : "1",
         "name" : "Person Identification Code Sequence",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "module" : "General Study",
         "entity" : "Study"
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
      "Can't handle table_8.8-1 (in table_C.7-9 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.7-9 after (0008,9215))",
      "Can't handle table_8.8-1 (in table_C.7-9 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.7-9 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.7-9:table_C.7.6.16-12b after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.7-9:table_C.7.6.16-12b:table_10-2 after (0040,A043))",
      "Can't handle table_8.8-1 (in table_C.7-9:table_C.7.6.16-12b:table_10-2 after (0040,A168))",
      "Can't handle table_8.8-1 (in table_C.7-9:table_C.7.6.16-12b:table_10-2 after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.7-13 after (003A,0208))",
      "Can't handle table_8.8-1 (in table_C.7.6.14-1 after (0040,A043))",
      "Can't handle table_8.8-1 (in table_C.7.6.14-1 after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.7.6.14-1 after (0040,A168))",
      "Can't handle table_8.8-1 (in table_C.7-18 after (0050,0010))",
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
      "Can't handle table_8.8-1 (in table_C.8-77 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.8-77 after (0008,2218))",
      "Can't handle table_8.8-1 (in table_C.8-77 after (0008,2220))",
      "Can't handle table_8.8-1 (in table_C.8-77:table_10-8 after (0008,2228))",
      "Can't handle table_8.8-1 (in table_C.8-77:table_10-8 after (0008,2230))",
      "Can't handle table_8.8-1 (in table_C.8-77 after (0022,001A))",
      "Can't handle table_8.8-1 (in table_C.12-1 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_C.12-6 after (0400,0401))"
   ]
}
