var data = {
   "tags" : {
      "(0062,0002)[<0>](0008,2228)[<1>](0008,2230)" : {
         "name" : "Primary Anatomic Structure Modifier Sequence",
         "desc" : [
            "Sequence of Items that modifies the primary anatomic structure of interest in this Instance.",
            "One or more Items are permitted in this sequence."
         ],
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.8.23-1",
            "table_C.8.20-4",
            "table_10-7",
            "table_10-8"
         ],
         "entity" : "Surface",
         "module" : "Surface Segmentation"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,08ea)" : {
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Measurement Units Code Sequence",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "req" : "1C",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a168)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "req" : "1C",
         "name" : "Concept Code Sequence",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0020,0052)" : {
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
         "usage" : "M",
         "req" : "1",
         "name" : "Frame of Reference UID",
         "mod_tables" : [
            "table_C.7-6"
         ],
         "entity" : "Frame of Reference",
         "module" : "Frame of Reference"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a163)" : {
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Rational Denominator Value",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0012,0040)" : {
         "entity" : "Patient",
         "module" : "Clinical Trial Subject",
         "name" : "Clinical Trial Subject ID",
         "req" : "1C",
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
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-2b"
         ]
      },
      "(0012,0082)" : {
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U",
         "desc" : "Approval number issued by committee described in Clinical Trial Protocol Ethics Committee Name (0012,0081).",
         "req" : "3",
         "name" : "Clinical Trial Protocol Ethics Committee Approval Number"
      },
      "(0040,0275)[<0>](0040,100a)" : {
         "entity" : "Series",
         "module" : "General Series",
         "desc" : [
            "Coded Reason for requesting this procedure.",
            "One or more Items are permitted in this sequence."
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Reason for Requested Procedure Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ]
      },
      "(0400,0561)" : {
         "name" : "Original Attributes Sequence",
         "req" : "3",
         "desc" : [
            "Sequence of Items containing all attributes that were removed or replaced by other values in the main data set.",
            "One or more Items are permitted in this sequence."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Surface",
         "module" : "SOP Common"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0033)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Universal Entity ID Type",
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
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0070,0080)" : {
         "entity" : "Surface",
         "module" : "Surface Segmentation",
         "usage" : "M",
         "desc" : "A label that is used to identify this SOP Instance.",
         "req" : "1",
         "name" : "Content Label",
         "mod_tables" : [
            "table_C.8.23-1",
            "table_10-12"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1150)" : {
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M"
      },
      "(0040,0245)" : {
         "entity" : "Series",
         "module" : "General Series",
         "desc" : "Time on which the Performed Procedure Step started.",
         "req" : "3",
         "usage" : "M",
         "name" : "Performed Procedure Step Start Time",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ]
      },
      "(0010,2210)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
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
                     "el" : "para",
                     "content" : [
                        "If this Attribute is not present, the default human standard anatomical position is used to define the patient orientation of projection images and the patient coordinate system of cross-sectional images."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "req" : "1C",
         "name" : "Anatomical Orientation Type",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0008,1110)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "name" : "Referenced Study Sequence",
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
         "req" : "3",
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0012,0083)[<0>](0012,0084)" : {
         "module" : "Clinical Trial Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "usage" : "U",
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
         "req" : "1C",
         "name" : "Distribution Type"
      },
      "(0066,0002)[<0>](0066,0013)[<1>](0066,0024)" : {
         "mod_tables" : [
            "table_C.27-1",
            "table_C.27-4"
         ],
         "name" : "Edge Point Index List",
         "req" : "2",
         "desc" : [
            "Contains 2n point indices describing unconnected Edges.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.27.4.1"
                  }
               },
               "."
            ]
         ],
         "usage" : "M",
         "module" : "Surface Mesh",
         "entity" : "Surface"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0081)" : {
         "name" : "Institution Address",
         "usage" : "M",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "entity" : "Surface",
         "module" : "SOP Common"
      },
      "(0010,4000)" : {
         "name" : "Patient Comments",
         "req" : "3",
         "desc" : "User-defined additional information about the patient.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0008,1062)[<0>](0040,1102)" : {
         "desc" : "Person's mailing address",
         "req" : "3",
         "usage" : "M",
         "name" : "Person's Address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0018,a001)[<0>](0008,0080)" : {
         "entity" : "Surface",
         "module" : "SOP Common",
         "desc" : "Institution where the equipment that contributed to the composite instance is located.",
         "usage" : "M",
         "req" : "3",
         "name" : "Institution Name",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0032)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Universal Entity ID",
         "desc" : [
            "Universal or unique identifier for the Patient ID Assigning Authority. The authority identified by this attribute shall be the same as that of Issuer of Patient ID (0010,0021), if present.",
            {
               "content" : [
                  "\n                ",
                  {
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
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0066,0002)[<0>](0066,0012)" : {
         "module" : "Surface Mesh",
         "entity" : "Surface",
         "mod_tables" : [
            "table_C.27-1"
         ],
         "name" : "Surface Points Normals Sequence",
         "desc" : [
            "The normals on the surface for each point.",
            "Zero or one item shall be included in this sequence.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.27.1.1.6",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "req" : "2",
         "usage" : "M"
      },
      "(0010,1002)" : {
         "name" : "Other Patient IDs Sequence",
         "req" : "3",
         "desc" : [
            "A sequence of identification numbers or codes used to identify the patient, which may or may not be human readable, and may or may not have been obtained from an implanted or attached device such as an RFID or barcode.",
            "One or more Items are permitted in this sequence."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0066,0002)[<0>](0066,0013)" : {
         "entity" : "Surface",
         "module" : "Surface Mesh",
         "desc" : "Only a single item shall be included in this sequence.",
         "req" : "1",
         "usage" : "M",
         "name" : "Surface Mesh Primitives Sequence",
         "mod_tables" : [
            "table_C.27-1"
         ]
      },
      "(0062,0002)[<0>](0066,002b)[<1>](0066,002d)[<2>](0066,002f)" : {
         "entity" : "Surface",
         "module" : "Surface Segmentation",
         "desc" : [
            "The family of algorithm(s) that best describes the software algorithm used.",
            "Only a single item shall be included in this sequence."
         ],
         "req" : "1",
         "usage" : "M",
         "name" : "Algorithm Family Code Sequence",
         "mod_tables" : [
            "table_C.8.23-1",
            "table_10-19"
         ]
      },
      "(fffa,fffa)[<0>](0400,0115)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Certificate of Signer",
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
               ]
            }
         ],
         "usage" : "M",
         "req" : "1",
         "module" : "SOP Common",
         "entity" : "Surface"
      },
      "(0008,1030)" : {
         "desc" : "Institution-generated description or classification of the Study (component) performed.",
         "usage" : "M",
         "req" : "3",
         "name" : "Study Description",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0066,0002)[<0>](0066,0013)[<1>](0066,0026)" : {
         "entity" : "Surface",
         "module" : "Surface Mesh",
         "desc" : [
            "All Triangle Strips in this Surface.",
            "Zero or more Items shall be included in this sequence."
         ],
         "usage" : "M",
         "req" : "2",
         "name" : "Triangle Strip Sequence",
         "mod_tables" : [
            "table_C.27-1",
            "table_C.27-4"
         ]
      },
      "(0008,1250)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Related Series Sequence",
         "req" : "3",
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
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "C - Required if the surface has been derived from another SOP Instance",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ],
         "entity" : "Surface",
         "module" : "Common Instance Reference"
      },
      "(0010,2294)" : {
         "name" : "Breed Registration Sequence",
         "req" : "2C",
         "desc" : [
            "Information identifying an animal within a breed registry.",
            "Zero or more Items shall be included in this sequence.",
            "Required if the patient is an animal."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "module" : "Patient"
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
         "req" : "3",
         "usage" : "M",
         "name" : "Assigning Jurisdiction Code Sequence",
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0066,0002)[<0>](0066,0013)[<1>](0066,0034)" : {
         "entity" : "Surface",
         "module" : "Surface Mesh",
         "name" : "Facet Sequence",
         "req" : "2",
         "desc" : [
            "All Facets in this Surface. Each sequence Item describes one facet.",
            "Zero or more Items shall be included in this sequence."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.27-1",
            "table_C.27-4"
         ]
      },
      "(0010,0024)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this sequence."
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0038,0014)[<0>](0040,0033)" : {
         "module" : "Patient Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a",
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "usage" : "U",
         "req" : "1C",
         "name" : "Universal Entity ID Type"
      },
      "(0008,1110)[<0>](0008,1150)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M",
         "module" : "General Study",
         "entity" : "Study"
      },
      "(0010,0020)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "Primary hospital identification number or code for the patient.",
         "req" : "2",
         "usage" : "M",
         "name" : "Patient ID"
      },
      "(0066,0002)[<0>](0066,0011)[<1>](0066,0016)" : {
         "mod_tables" : [
            "table_C.27-1",
            "table_C.27-2"
         ],
         "desc" : [
            "See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.27.2.1.1",
                  "xrefstyle" : "select: label"
               }
            }
         ],
         "req" : "1",
         "usage" : "M",
         "name" : "Point Coordinates Data",
         "module" : "Surface Mesh",
         "entity" : "Surface"
      },
      "(0008,1072)[<0>](0040,1103)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "req" : "3",
         "desc" : "Person's telephone number(s)",
         "usage" : "M",
         "name" : "Person's Telephone Numbers",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a160)" : {
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Text Value",
         "req" : "1C",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0007)" : {
         "entity" : "Series",
         "module" : "General Series",
         "desc" : "Institution-generated description or classification of the Scheduled Procedure Step to be performed.",
         "req" : "3",
         "usage" : "M",
         "name" : "Scheduled Procedure Step Description",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ]
      },
      "(0040,0275)[<0>](0008,0051)" : {
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this sequence."
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Issuer of Accession Number Sequence"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1103)" : {
         "entity" : "Surface",
         "module" : "SOP Common",
         "req" : "3",
         "desc" : "Person's telephone number(s)",
         "usage" : "M",
         "name" : "Person's Telephone Numbers",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ]
      },
      "(0008,1250)[<0>](0040,a170)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Purpose of Reference Code Sequence",
         "usage" : "M",
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "Zero or more Items shall be included in this sequence.",
            "When absent, implies that the reason for the reference is unknown."
         ],
         "req" : "2",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a122)" : {
         "entity" : "Series",
         "module" : "General Series",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "usage" : "M",
         "req" : "1C",
         "name" : "Time",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0010,0024)[<0>](0040,0032)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
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
         "req" : "3",
         "name" : "Universal Entity ID"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1160)" : {
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
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0008,0051)[<0>](0040,0033)" : {
         "entity" : "Study",
         "module" : "General Study",
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "usage" : "M",
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ]
      },
      "(0012,0060)" : {
         "module" : "Clinical Trial Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "name" : "Clinical Trial Coordinating Center Name",
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
         "usage" : "U",
         "req" : "2"
      },
      "(0066,0002)[<0>](0066,000a)" : {
         "name" : "Surface Processing Ratio",
         "desc" : "The Ratio of Remaining points to Original points after processing. Required if Surface Processing (0066,0009) is YES.",
         "req" : "2C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.27-1"
         ],
         "entity" : "Surface",
         "module" : "Surface Mesh"
      },
      "(0018,1008)" : {
         "desc" : "Identifier of the gantry or positioner.",
         "usage" : "M",
         "req" : "3",
         "name" : "Gantry ID",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "entity" : "Equipment",
         "module" : "General Equipment"
      },
      "(0008,1072)[<0>](0008,0080)" : {
         "usage" : "M",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "req" : "1C",
         "name" : "Institution Name",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0028,0120)" : {
         "entity" : "Equipment",
         "module" : "General Equipment",
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
         "usage" : "M",
         "name" : "Pixel Padding Value",
         "mod_tables" : [
            "table_C.7-8"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1160)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
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
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0008,1060)" : {
         "entity" : "Study",
         "module" : "General Study",
         "name" : "Name of Physician(s) Reading Study",
         "desc" : "Names of the physician(s) reading the Study.",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0008,0031)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : "Time the Series started.",
         "req" : "3",
         "usage" : "M",
         "name" : "Series Time",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0008,1032)" : {
         "module" : "General Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Procedure Code Sequence",
         "usage" : "M",
         "desc" : [
            "A Sequence that conveys the type of procedure performed.",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3"
      },
      "(0012,0051)" : {
         "mod_tables" : [
            "table_C.7-4b"
         ],
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
         "req" : "3",
         "usage" : "U",
         "name" : "Clinical Trial Time Point Description",
         "module" : "Clinical Trial Study",
         "entity" : "Study"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a123)" : {
         "entity" : "Series",
         "module" : "General Series",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "usage" : "M",
         "req" : "1C",
         "name" : "Person Name",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0008,0012)" : {
         "desc" : [
            "Date the SOP Instance was created.",
            "This is the date that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Instance Creation Date",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Surface",
         "module" : "SOP Common"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a30a)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Numeric Value",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "usage" : "M",
         "req" : "1C",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0012,0042)" : {
         "entity" : "Patient",
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
         "usage" : "U",
         "name" : "Clinical Trial Subject Reading ID",
         "mod_tables" : [
            "table_C.7-2b"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1155)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0400,0500)[<0>](0400,0520)" : {
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
         "req" : "1",
         "usage" : "M",
         "name" : "Encrypted Content",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Surface",
         "module" : "SOP Common"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a163)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Rational Denominator Value",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "req" : "1C",
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0012,0083)[<0>](0012,0085)" : {
         "entity" : "Study",
         "module" : "Clinical Trial Study",
         "req" : "1",
         "desc" : [
            "Whether or not consent to distribute has been granted for the purpose described in Distribution Type (0012,0084).",
            {
               "title" : "Enumerated Values:",
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
         ]
      },
      "(0010,0024)[<0>](0040,003a)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
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
         "usage" : "M",
         "req" : "3",
         "name" : "Assigning Agency or Department Code Sequence",
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0070,0084)" : {
         "mod_tables" : [
            "table_C.8.23-1",
            "table_10-12"
         ],
         "desc" : "Name of operator (such as a technologist or physician) creating the content of the SOP Instance.",
         "req" : "2",
         "usage" : "M",
         "name" : "Content Creator's Name",
         "module" : "Surface Segmentation",
         "entity" : "Surface"
      },
      "(0012,0031)" : {
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "desc" : [
            "Name of the site responsible for submitting clinical trial data. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.1.3.1.5",
                  "xrefstyle" : "select: label"
               }
            }
         ],
         "usage" : "U",
         "req" : "2",
         "name" : "Clinical Trial Site Name",
         "module" : "Clinical Trial Subject",
         "entity" : "Patient"
      },
      "(0010,21b0)" : {
         "name" : "Additional Patient History",
         "req" : "3",
         "desc" : "Additional information about the Patient's medical history.",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "entity" : "Study",
         "module" : "Patient Study"
      },
      "(0018,1050)" : {
         "name" : "Spatial Resolution",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "entity" : "Equipment",
         "module" : "General Equipment"
      },
      "(0012,0050)" : {
         "entity" : "Study",
         "module" : "Clinical Trial Study",
         "name" : "Clinical Trial Time Point ID",
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
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4b"
         ]
      },
      "(0008,1072)[<0>](0040,1101)" : {
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1",
         "usage" : "M",
         "name" : "Person Identification Code Sequence"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1150)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M",
         "req" : "1",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a160)" : {
         "entity" : "Series",
         "module" : "General Series",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "req" : "1C",
         "usage" : "M",
         "name" : "Text Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0040,0253)" : {
         "name" : "Performed Procedure Step ID",
         "req" : "3",
         "desc" : "User or equipment generated identifier of that part of a Procedure that has been carried out within this step.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1102)" : {
         "entity" : "Surface",
         "module" : "SOP Common",
         "usage" : "M",
         "desc" : "Person's mailing address",
         "req" : "3",
         "name" : "Person's Address",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ]
      },
      "(0020,0060)" : {
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
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
         "req" : "2C",
         "name" : "Laterality"
      },
      "(0010,1030)" : {
         "req" : "3",
         "desc" : "Weight of the Patient, in kilograms.",
         "usage" : "U",
         "name" : "Patient's Weight",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "entity" : "Study",
         "module" : "Patient Study"
      },
      "(0066,0002)[<0>](0066,0013)[<1>](0066,0034)[<2>](0066,0029)" : {
         "name" : "Primitive Point Index List",
         "req" : "1",
         "desc" : [
            "See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.27.4.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.27-1",
            "table_C.27-4"
         ],
         "entity" : "Surface",
         "module" : "Surface Mesh"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a040)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
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
         "req" : "1",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0018,a001)[<0>](0008,1040)" : {
         "name" : "Institutional Department Name",
         "desc" : "Department in the institution where the equipment that contributed to the composite instance is located.",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Surface",
         "module" : "SOP Common"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1160)" : {
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
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
         "req" : "1C"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "module" : "Patient",
         "entity" : "Patient",
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
         "req" : "1C",
         "usage" : "M",
         "name" : "Universal Entity ID Type"
      },
      "(0018,a001)[<0>](0008,0081)" : {
         "entity" : "Surface",
         "module" : "SOP Common",
         "usage" : "M",
         "desc" : "Address of the institution where the equipment that contributed to the composite instance is located.",
         "req" : "3",
         "name" : "Institution Address",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a040)" : {
         "entity" : "Series",
         "module" : "General Series",
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
         "req" : "1",
         "usage" : "M",
         "name" : "Value Type",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "C - Required if the surface has been derived from another SOP Instance",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ],
         "entity" : "Surface",
         "module" : "Common Instance Reference"
      },
      "(0018,a001)[<0>](0008,0070)" : {
         "req" : "1",
         "desc" : "Manufacturer of the equipment that contributed to the composite instance.",
         "usage" : "M",
         "name" : "Manufacturer",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Surface",
         "module" : "SOP Common"
      },
      "(0062,0002)[<0>](0062,0006)" : {
         "name" : "Segment Description",
         "desc" : "User-defined description for this segment.",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.8.23-1",
            "table_C.8.20-4"
         ],
         "entity" : "Surface",
         "module" : "Surface Segmentation"
      },
      "(0066,0002)[<0>](0066,0012)[<1>](0066,001e)" : {
         "module" : "Surface Mesh",
         "entity" : "Surface",
         "mod_tables" : [
            "table_C.27-1",
            "table_C.27-3"
         ],
         "req" : "1",
         "desc" : [
            "The number of vectors in the Vector Coordinate Data (0066,0021). See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.27.3.1"
               },
               "el" : "xref"
            },
            "."
         ],
         "usage" : "M",
         "name" : "Number of Vectors"
      },
      "(0008,1048)" : {
         "module" : "General Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "3",
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
         "name" : "Physician(s) of Record"
      },
      "(0010,1002)[<0>](0010,0022)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
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
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "usage" : "M",
         "req" : "1",
         "name" : "Type of Patient ID"
      },
      "(0100,0410)" : {
         "module" : "SOP Common",
         "entity" : "Surface",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "usage" : "M",
         "name" : "SOP Instance Status"
      },
      "(0400,0561)[<0>](0400,0565)" : {
         "name" : "Reason for the Attribute Modification",
         "req" : "1",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Surface",
         "module" : "SOP Common"
      },
      "(0040,0275)[<0>](0008,0050)" : {
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M",
         "desc" : "An identifier of the Imaging Service Request for this Requested Procedure.",
         "req" : "3",
         "name" : "Accession Number"
      },
      "(0018,a001)" : {
         "desc" : [
            "Sequence of Items containing descriptive attributes of related equipment that has contributed to the acquisition, creation or modification of the composite instance.",
            "One or more Items are permitted in this Sequence.",
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
         "req" : "3",
         "usage" : "M",
         "name" : "Contributing Equipment Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Surface",
         "module" : "SOP Common"
      },
      "(0008,1049)[<0>](0040,1103)" : {
         "entity" : "Study",
         "module" : "General Study",
         "name" : "Person's Telephone Numbers",
         "desc" : "Person's telephone number(s)",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0008,0110)[<0>](0008,0102)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme Designator",
         "req" : "1",
         "desc" : "The value of a Coding Scheme Designator, used in this SOP Instance, which is being mapped.",
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Surface"
      },
      "(0018,1000)" : [
         {
            "module" : "General Equipment",
            "entity" : "Equipment",
            "mod_tables" : [
               "table_C.7-8"
            ],
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
            "usage" : "M",
            "name" : "Device Serial Number"
         },
         {
            "module" : "Enhanced General Equipment",
            "entity" : "Equipment",
            "mod_tables" : [
               "table_C.7-8b"
            ],
            "desc" : "Manufacturer's serial number of the equipment that produced the composite instances.",
            "req" : "1",
            "usage" : "M",
            "name" : "Device Serial Number"
         }
      ],
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a160)" : {
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "req" : "1C",
         "name" : "Text Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0008,0096)[<0>](0008,0081)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Address",
         "req" : "3",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "usage" : "M",
         "module" : "General Study",
         "entity" : "Study"
      },
      "(0010,2201)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient Species Description",
         "req" : "1C",
         "desc" : [
            "The species of the patient.",
            "Required if the patient is an animal and if Patient Species Code Sequence (0010,2202) is not present. May be present otherwise."
         ],
         "usage" : "M"
      },
      "(0008,0110)[<0>](0008,0103)" : {
         "desc" : "The coding scheme version associated with the Coding Scheme Designator (0008,0102).",
         "usage" : "M",
         "req" : "3",
         "name" : "Coding Scheme Version",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Surface",
         "module" : "SOP Common"
      },
      "(0010,2294)[<0>](0010,2296)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Breed Registry Code Sequence",
         "desc" : [
            "Identification of the organization with which an animal is registered.",
            "Only a single Item shall be included in this sequence."
         ],
         "usage" : "M",
         "req" : "1"
      },
      "(0066,0002)[<0>](0066,000b)" : {
         "mod_tables" : [
            "table_C.27-1"
         ],
         "name" : "Surface Processing Description",
         "usage" : "M",
         "desc" : "A textual description of the surface processing performed.",
         "req" : "3",
         "module" : "Surface Mesh",
         "entity" : "Surface"
      },
      "(0008,1052)" : {
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Performing Physician Identification Sequence",
         "desc" : [
            "Identification of the physician(s) administering the Series.",
            "One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Performing Physician's Name (0008,1050), if present."
         ],
         "req" : "3",
         "usage" : "M"
      },
      "(0062,0002)[<0>](0008,2218)" : {
         "mod_tables" : [
            "table_C.8.23-1",
            "table_C.8.20-4",
            "table_10-7"
         ],
         "usage" : "M",
         "desc" : [
            "Sequence that identifies the anatomic region of interest in this Instance (i.e., external anatomy, surface anatomy, or general region of the body).",
            "Only a single Item is permitted in this sequence."
         ],
         "req" : "3",
         "name" : "Anatomic Region Sequence",
         "module" : "Surface Segmentation",
         "entity" : "Surface"
      },
      "(fffa,fffa)[<0>](0400,0005)" : {
         "module" : "SOP Common",
         "entity" : "Surface",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "MAC ID Number",
         "desc" : "A number used to identify which MAC Parameters Sequence item was used in the calculation of this Digital Signature.",
         "req" : "1",
         "usage" : "M"
      },
      "(0008,1120)[<0>](0008,1155)" : {
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0018,a001)[<0>](0008,1070)" : {
         "name" : "Operators' Name",
         "desc" : "Name(s) of the operator(s) of the contributing equipment.",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Surface",
         "module" : "SOP Common"
      },
      "(0012,0083)" : {
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "name" : "Consent for Clinical Trial Use Sequence",
         "desc" : [
            "A Sequence that conveys information about consent for Clinical Trial use of the composite instances within this Study.",
            "One or more Items are permitted in this sequence.",
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
         "usage" : "U",
         "req" : "3",
         "module" : "Clinical Trial Study",
         "entity" : "Study"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0032)" : {
         "usage" : "M",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C",
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0028,0303)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Longitudinal Temporal Information Modified",
         "req" : "3",
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
                  "el" : "olink",
                  "attrs" : {
                     "xrefstyle" : "select: labelnumber",
                     "targetdoc" : "PS3.15",
                     "targetptr" : "PS3.15"
                  }
               },
               "."
            ]
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Surface"
      },
      "(0066,0002)[<0>](0066,0013)[<1>](0066,0025)" : {
         "name" : "Vertex Point Index List",
         "desc" : [
            "Contains n point indices describing Vertices.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.27.4.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "req" : "2",
         "usage" : "M",
         "mod_tables" : [
            "table_C.27-1",
            "table_C.27-4"
         ],
         "entity" : "Surface",
         "module" : "Surface Mesh"
      },
      "(0040,0275)[<0>](0032,1064)" : {
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "name" : "Requested Procedure Code Sequence",
         "req" : "3",
         "desc" : [
            "A sequence that conveys the Procedure Type of the requested procedure.",
            "Only a single Item is permitted in this sequence."
         ],
         "usage" : "M"
      },
      "(0028,0109)" : {
         "name" : "Largest Pixel Value in Series",
         "desc" : "The maximum value of all images in this Series.",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1150)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)" : {
         "module" : "Common Instance Reference",
         "entity" : "Surface",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "name" : "Referenced Instance Sequence",
         "req" : "1",
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this sequence."
         ],
         "usage" : "C - Required if the surface has been derived from another SOP Instance"
      },
      "(0010,0024)[<0>](0040,0036)" : {
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
         "usage" : "M",
         "req" : "3",
         "name" : "Assigning Facility Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0010,2203)" : {
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
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
         "usage" : "U",
         "name" : "Patient's Sex Neutered",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "entity" : "Study",
         "module" : "Patient Study"
      },
      "(0010,1010)" : {
         "name" : "Patient's Age",
         "desc" : "Age of the Patient.",
         "req" : "3",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "entity" : "Study",
         "module" : "Patient Study"
      },
      "(0008,0110)[<0>](0008,0112)" : {
         "module" : "SOP Common",
         "entity" : "Surface",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1C",
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
         "usage" : "M",
         "name" : "Coding Scheme Registry"
      },
      "(0008,1052)[<0>](0008,0082)" : {
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1C",
         "usage" : "M",
         "name" : "Institution Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0062,0002)[<0>](0062,0008)" : {
         "usage" : "M",
         "desc" : [
            "Type of algorithm used to generate the segment.",
            {
               "list" : [
                  [
                     "AUTOMATIC",
                     "calculated segment"
                  ],
                  [
                     "SEMIAUTOMATIC",
                     "calculated segment with user assistance"
                  ],
                  [
                     "MANUAL",
                     "user-entered segment"
                  ]
               ],
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "req" : "1",
         "name" : "Segment Algorithm Type",
         "mod_tables" : [
            "table_C.8.23-1",
            "table_C.8.20-4"
         ],
         "entity" : "Surface",
         "module" : "Surface Segmentation"
      },
      "(0018,a001)[<0>](0018,1200)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Surface"
      },
      "(0008,001a)" : {
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
         ],
         "req" : "3",
         "name" : "Related General SOP Class UID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Surface",
         "module" : "SOP Common"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a120)" : {
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "DateTime",
         "req" : "1C",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "usage" : "M"
      },
      "(0010,1021)" : {
         "module" : "Patient Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "desc" : [
            "Patient's size category code",
            "One or more Items are permitted in this sequence."
         ],
         "req" : "3",
         "name" : "Patient's Size Code Sequence"
      },
      "(0038,0064)[<0>](0040,0031)" : {
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "req" : "1C",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "usage" : "U",
         "name" : "Local Namespace Entity ID",
         "module" : "Patient Study",
         "entity" : "Study"
      },
      "(0008,1072)[<0>](0008,0081)" : {
         "name" : "Institution Address",
         "usage" : "M",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a040)" : {
         "entity" : "Series",
         "module" : "General Series",
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
         "req" : "1",
         "usage" : "M",
         "name" : "Value Type",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0008,1040)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Institutional Department Name",
         "desc" : "Department in the institution where the equipment that produced the composite instances is located.",
         "req" : "3",
         "usage" : "M",
         "module" : "General Equipment",
         "entity" : "Equipment"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a040)" : {
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
         "req" : "1",
         "usage" : "M",
         "name" : "Value Type",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0008,0110)[<0>](0008,010c)" : {
         "entity" : "Surface",
         "module" : "SOP Common",
         "req" : "1C",
         "desc" : "The coding scheme UID identifier. Required if coding scheme is identified by an ISO 8824 object identifier compatible with the UI VR.",
         "usage" : "M",
         "name" : "Coding Scheme UID",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a043)" : {
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "M",
         "req" : "1",
         "name" : "Concept Name Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0008,0016)" : {
         "entity" : "Surface",
         "module" : "SOP Common",
         "name" : "SOP Class UID",
         "usage" : "M",
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
                  "xrefstyle" : "select: labelnumber",
                  "targetptr" : "PS3.4",
                  "targetdoc" : "PS3.4"
               }
            },
            "."
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0039)" : {
         "name" : "Assigning Jurisdiction Code Sequence",
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
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)" : {
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Referenced SOP Sequence",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0070,0087)" : {
         "module" : "Surface Segmentation",
         "entity" : "Surface",
         "mod_tables" : [
            "table_C.8.23-1",
            "table_10-12"
         ],
         "desc" : [
            "A sequence containing alternate descriptions suitable for presentation to the user, e.g., in different languages. One or more Items are permitted in this sequence.",
            {
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "content" : [
                        "The values of Specific Character Set for the entire Data set need to be sufficient to encode all Items of this sequence correctly, e.g., using a single value with broad support such as UTF-8, or multiple values with escape sequences."
                     ]
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Alternate Content Description Sequence"
      },
      "(0400,0561)[<0>](0400,0564)" : {
         "module" : "SOP Common",
         "entity" : "Surface",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Source of Previous Values",
         "desc" : "The source that provided the SOP Instance prior to the removal or replacement of the values. For example, this might be the Institution from which imported SOP Instances were received.",
         "usage" : "M",
         "req" : "2"
      },
      "(4ffe,0001)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "MAC Parameters Sequence",
         "desc" : [
            "A sequence of items that describe the parameters used to calculate a MAC for use in Digital Signatures.",
            "One or more Items shall be included in this sequence."
         ],
         "usage" : "M",
         "req" : "3",
         "module" : "SOP Common",
         "entity" : "Surface"
      },
      "(0040,0280)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "desc" : "User-defined comments on the Performed Procedure Step.",
         "req" : "3",
         "usage" : "M",
         "name" : "Comments on the Performed Procedure Step",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0066,0002)[<0>](0066,0010)" : {
         "mod_tables" : [
            "table_C.27-1"
         ],
         "name" : "Manifold",
         "desc" : [
            "Indicates whether the surface is describing an n-1 dimensional manifold in the underlying n-dimensional vector space.",
            {
               "title" : "Enumerated Values:",
               "type" : "variablelist",
               "list" : [
                  [
                     "YES",
                     "Manifold in every point"
                  ],
                  [
                     "NO",
                     "Does contain non-manifold points"
                  ],
                  [
                     "UNKNOWN",
                     "Might or might not contain non-manifold points"
                  ]
               ]
            },
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.27.1.1.5",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "req" : "1",
         "usage" : "M",
         "module" : "Surface Mesh",
         "entity" : "Surface"
      },
      "(0062,0002)[<0>](0066,002b)[<1>](0066,002e)[<2>](0008,1155)" : {
         "entity" : "Surface",
         "module" : "Surface Segmentation",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.8.23-1",
            "table_10-3",
            "table_10-11"
         ]
      },
      "(0040,a390)" : {
         "module" : "SOP Common",
         "entity" : "Surface",
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
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.12.1.1.6"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Required if unencapsulated HL7 Structured Documents are referenced within the Instance. Every such document so referenced is required to have a corresponding Item in this Sequence."
         ],
         "usage" : "M",
         "req" : "1C",
         "name" : "HL7 Structured Document Reference Sequence"
      },
      "(0020,0010)" : {
         "module" : "General Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Study ID",
         "usage" : "M",
         "desc" : "User or equipment generated Study identifier.",
         "req" : "2"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a162)" : {
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Rational Numerator Value",
         "usage" : "M",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(4ffe,0001)[<0>](0400,0005)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : "A number, unique within this SOP Instance, used to identify this MAC Parameters Sequence (4FFE,0001) item from an Item of the Digital Signatures Sequence (FFFA,FFFA).",
         "req" : "1",
         "usage" : "M",
         "name" : "MAC ID Number",
         "module" : "SOP Common",
         "entity" : "Surface"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1150)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0400,0561)[<0>](0400,0562)" : {
         "module" : "SOP Common",
         "entity" : "Surface",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "desc" : "Date and time the attributes were removed and/or replaced.",
         "usage" : "M",
         "name" : "Attribute Modification DateTime"
      },
      "(0008,0030)" : {
         "req" : "2",
         "desc" : "Time the Study started.",
         "usage" : "M",
         "name" : "Study Time",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a162)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "usage" : "M",
         "req" : "1C",
         "name" : "Rational Numerator Value",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0018,a001)[<0>](0018,a003)" : {
         "entity" : "Surface",
         "module" : "SOP Common",
         "desc" : "Description of the contribution the equipment made to the composite instance.",
         "req" : "3",
         "usage" : "M",
         "name" : "Contribution Description",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0038,0014)[<0>](0040,0032)" : {
         "entity" : "Study",
         "module" : "Patient Study",
         "name" : "Universal Entity ID",
         "req" : "1C",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ]
      },
      "(0008,0080)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Institution Name",
         "req" : "3",
         "desc" : "Institution where the equipment that produced the composite instances is located.",
         "usage" : "M",
         "module" : "General Equipment",
         "entity" : "Equipment"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a124)" : {
         "req" : "1C",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "usage" : "M",
         "name" : "UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0008,1250)[<0>](0020,000d)" : {
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Study Instance UID",
         "desc" : "Instance UID of Study to which the related Series belongs",
         "usage" : "M",
         "req" : "1"
      },
      "(0010,2297)" : {
         "name" : "Responsible Person",
         "desc" : [
            "Name of person with medical decision making authority for the patient.",
            "Required if the patient is an animal. May be present otherwise."
         ],
         "req" : "2C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a163)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "req" : "1C",
         "usage" : "M",
         "name" : "Rational Denominator Value",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a161)" : {
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Floating Point Value",
         "req" : "1C",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "usage" : "M"
      },
      "(0008,1050)" : {
         "req" : "3",
         "desc" : "Name of the physician(s) administering the Series.",
         "usage" : "M",
         "name" : "Performing Physician's Name",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a121)" : {
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Date",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0062,0002)[<0>](0062,0004)" : {
         "mod_tables" : [
            "table_C.8.23-1",
            "table_C.8.20-4"
         ],
         "req" : "1",
         "desc" : [
            "Identification number of the segment. The value of Segment Number (0062,0004) shall be unique within the Segmentation instance in which it is created. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.20.2.4"
               }
            },
            "."
         ],
         "usage" : "M",
         "name" : "Segment Number",
         "module" : "Surface Segmentation",
         "entity" : "Surface"
      },
      "(0066,0002)[<0>](0066,0011)[<1>](0066,001c)" : {
         "module" : "Surface Mesh",
         "entity" : "Surface",
         "mod_tables" : [
            "table_C.27-1",
            "table_C.27-2"
         ],
         "desc" : "A 3D location defining the preferred center of rotation for this point set. Required if Axis of Rotation (0066,001B) is present. May be present otherwise.",
         "req" : "1C",
         "usage" : "M",
         "name" : "Center of Rotation"
      },
      "(0008,1052)[<0>](0040,1103)" : {
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Person's Telephone Numbers",
         "usage" : "M",
         "desc" : "Person's telephone number(s)",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ]
      },
      "(0008,1115)[<0>](0008,114a)" : {
         "entity" : "Surface",
         "module" : "Common Instance Reference",
         "name" : "Referenced Instance Sequence",
         "req" : "1",
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this sequence."
         ],
         "usage" : "C - Required if the surface has been derived from another SOP Instance",
         "mod_tables" : [
            "table_C.12-8"
         ]
      },
      "(0012,0071)" : {
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "req" : "3",
         "desc" : [
            "An identifier of the series in the context of a clinical trial. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.3.2.1.2"
               },
               "el" : "xref"
            },
            "."
         ],
         "usage" : "U",
         "name" : "Clinical Trial Series ID",
         "module" : "Clinical Trial Series",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a162)" : {
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Rational Numerator Value",
         "usage" : "M",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "req" : "1C"
      },
      "(0040,0251)" : {
         "entity" : "Series",
         "module" : "General Series",
         "desc" : "Time at which the Performed Procedure Step ended.",
         "usage" : "M",
         "req" : "3",
         "name" : "Performed Procedure Step End Time",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ]
      },
      "(0062,0002)[<0>](0062,000f)" : {
         "name" : "Segmented Property Type Code Sequence",
         "usage" : "M",
         "desc" : [
            "Sequence defining the specific property type of this segment.",
            "Only a single item shall be included in this sequence."
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.8.23-1",
            "table_C.8.20-4"
         ],
         "entity" : "Surface",
         "module" : "Surface Segmentation"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a122)" : {
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "req" : "1C",
         "name" : "Time"
      },
      "(0008,001b)" : {
         "module" : "SOP Common",
         "entity" : "Surface",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "desc" : [
            "The SOP Class in which the Instance was originally encoded that has been replaced during a fall-back conversion to the current Related General SOP Class. See ",
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
         "usage" : "M",
         "name" : "Original Specialized SOP Class UID"
      },
      "(0066,0002)[<0>](0066,0011)[<1>](0066,0018)" : {
         "entity" : "Surface",
         "module" : "Surface Mesh",
         "name" : "Mean Point Distance",
         "req" : "3",
         "desc" : [
            "The mean point distance of the point set.",
            "It is given by the mean of the distances to the nearest neighbor over all points. The units shall be the same as the units of the coordinate system in which the point coordinates are specified."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.27-1",
            "table_C.27-2"
         ]
      },
      "(0018,a001)[<0>](0018,1050)" : {
         "usage" : "M",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "req" : "3",
         "name" : "Spatial Resolution",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Surface",
         "module" : "SOP Common"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Referenced SOP Sequence",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "req" : "1C",
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0008,1010)" : {
         "desc" : "User defined name identifying the machine that produced the composite instances.",
         "req" : "3",
         "usage" : "M",
         "name" : "Station Name",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "entity" : "Equipment",
         "module" : "General Equipment"
      },
      "(0008,1049)[<0>](0008,0080)" : {
         "entity" : "Study",
         "module" : "General Study",
         "name" : "Institution Name",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0010,1002)[<0>](0010,0021)" : {
         "entity" : "Patient",
         "module" : "Patient",
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
         "usage" : "M",
         "req" : "3",
         "name" : "Issuer of Patient ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)" : {
         "name" : "Content Item Modifier Sequence",
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
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0066,0001)" : {
         "module" : "Surface Mesh",
         "entity" : "Surface",
         "mod_tables" : [
            "table_C.27-1"
         ],
         "name" : "Number of Surfaces",
         "desc" : "Number of surfaces contained in the Instance. Shall be 1 or more. Shall be the same as the number of Items in Surface Sequence (0066,0002).",
         "usage" : "M",
         "req" : "1"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0062,000b)" : {
         "name" : "Referenced Segment Number",
         "usage" : "M",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0008,1084)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "req" : "3",
         "desc" : [
            "A sequence that conveys the admitting diagnosis (diagnoses).",
            "One or more Items are permitted in this Sequence."
         ],
         "usage" : "U",
         "name" : "Admitting Diagnoses Code Sequence",
         "module" : "Patient Study",
         "entity" : "Study"
      },
      "(0010,2180)" : {
         "entity" : "Study",
         "module" : "Patient Study",
         "desc" : "Occupation of the Patient.",
         "req" : "3",
         "usage" : "U",
         "name" : "Occupation",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0010,0024)[<0>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
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
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(4ffe,0001)[<0>](0400,0020)" : {
         "module" : "SOP Common",
         "entity" : "Surface",
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
         ],
         "req" : "1",
         "usage" : "M",
         "name" : "Data Elements Signed"
      },
      "(0010,0200)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
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
         "req" : "3",
         "name" : "Quality Control Subject",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0018,a001)[<0>](0008,1072)" : {
         "module" : "SOP Common",
         "entity" : "Surface",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Identification of the operator(s) of the contributing equipment.",
            "One or more items are permitted in this sequence.",
            "The number and order of Items shall correspond to the number and order of values of Operators' Name (0008,1070), if present."
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Operator Identification Sequence"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a120)" : {
         "req" : "1C",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "usage" : "M",
         "name" : "DateTime",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0018,1020)" : [
         {
            "entity" : "Equipment",
            "module" : "General Equipment",
            "name" : "Software Versions",
            "req" : "3",
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
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-8"
            ]
         },
         {
            "mod_tables" : [
               "table_C.7-8b"
            ],
            "req" : "1",
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
            "usage" : "M",
            "name" : "Software Versions",
            "module" : "Enhanced General Equipment",
            "entity" : "Equipment"
         }
      ],
      "(0066,0002)[<0>](0066,000d)" : {
         "mod_tables" : [
            "table_C.27-1"
         ],
         "name" : "Recommended Presentation Type",
         "desc" : [
            "Specifies the presentation type in which it is recommended that the surface be rendered.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.27.1.1.3",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "usage" : "M",
         "req" : "1",
         "module" : "Surface Mesh",
         "entity" : "Surface"
      },
      "(0062,0002)[<0>](0066,002b)[<1>](0066,002d)[<2>](0024,0202)" : {
         "mod_tables" : [
            "table_C.8.23-1",
            "table_10-19"
         ],
         "desc" : "Source of the algorithm, e.g., the name of the manufacturer, researcher, university, etc.",
         "req" : "3",
         "usage" : "M",
         "name" : "Algorithm Source",
         "module" : "Surface Segmentation",
         "entity" : "Surface"
      },
      "(0018,a001)[<0>](0040,a170)" : {
         "entity" : "Surface",
         "module" : "SOP Common",
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
         "req" : "1",
         "usage" : "M",
         "name" : "Purpose of Reference Code Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0066,0002)[<0>](0066,000e)" : {
         "mod_tables" : [
            "table_C.27-1"
         ],
         "name" : "Finite Volume",
         "desc" : [
            "Indicates, whether the surface represents a solid (\"waterproof\") object with an outside and an inside.",
            {
               "title" : "Enumerated Values:",
               "type" : "variablelist",
               "list" : [
                  [
                     "YES",
                     "Contains a finite volume"
                  ],
                  [
                     "NO",
                     "Does not contain a finite volume"
                  ],
                  [
                     "UNKNOWN",
                     "Might or might not contain a finite volume"
                  ]
               ]
            },
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.27.1.1.4",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ]
         ],
         "req" : "1",
         "usage" : "M",
         "module" : "Surface Mesh",
         "entity" : "Surface"
      },
      "(0008,1052)[<0>](0040,1101)" : {
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1",
         "name" : "Person Identification Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ]
      },
      "(0008,0013)" : {
         "desc" : [
            "Time the SOP Instance was created.",
            "This is the time that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Instance Creation Time",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Surface",
         "module" : "SOP Common"
      },
      "(0008,1062)[<0>](0008,0081)" : {
         "module" : "General Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Address",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "req" : "3",
         "usage" : "M"
      },
      "(0010,1000)" : {
         "name" : "Other Patient IDs",
         "desc" : "Other identification numbers or codes used to identify the patient.",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0010,2202)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Patient Species Code Sequence",
         "req" : "1C",
         "desc" : [
            "The species of the patient.",
            "Only a single Item shall be included in this sequence.",
            "Required if the patient is an animal and if Patient Species Description (0010,2201) is not present. May be present otherwise."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0031)" : {
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "usage" : "M",
         "req" : "1C",
         "name" : "Local Namespace Entity ID"
      },
      "(0040,0260)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "desc" : "Sequence describing the Protocol performed for this Procedure Step. One or more Items are permitted in this sequence.",
         "usage" : "M",
         "req" : "3",
         "name" : "Performed Protocol Code Sequence",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0070,0086)[<0>](0040,1101)" : {
         "module" : "Surface Segmentation",
         "entity" : "Surface",
         "mod_tables" : [
            "table_C.8.23-1",
            "table_10-12",
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
      "(0032,1034)" : {
         "req" : "3",
         "desc" : [
            "Institutional department where the request initiated.",
            "Only a single item is permitted in this sequence."
         ],
         "usage" : "M",
         "name" : "Requesting Service Code Sequence",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0020,9172)[<0>](0008,1160)" : {
         "entity" : "Surface",
         "module" : "SOP Common",
         "name" : "Referenced Frame Number",
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
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ]
      },
      "(0008,0096)[<0>](0008,0082)" : {
         "name" : "Institution Code Sequence",
         "usage" : "M",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0032)" : {
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "usage" : "M",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C",
         "name" : "Universal Entity ID"
      },
      "(0070,0086)[<0>](0008,0081)" : {
         "req" : "3",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "usage" : "M",
         "name" : "Institution Address",
         "mod_tables" : [
            "table_C.8.23-1",
            "table_10-12",
            "table_10-1"
         ],
         "entity" : "Surface",
         "module" : "Surface Segmentation"
      },
      "(0008,0090)" : {
         "entity" : "Study",
         "module" : "General Study",
         "name" : "Referring Physician's Name",
         "desc" : "Name of the patient's referring physician",
         "req" : "2",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0010,2160)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "desc" : "Ethnic group or race of the patient.",
         "usage" : "M",
         "req" : "3",
         "name" : "Ethnic Group",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0008,0096)[<0>](0040,1102)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person's Address",
         "req" : "3",
         "desc" : "Person's mailing address",
         "usage" : "M",
         "module" : "General Study",
         "entity" : "Study"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a120)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "DateTime",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "usage" : "M",
         "req" : "1C",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0070,0087)[<0>](0008,0006)" : {
         "entity" : "Surface",
         "module" : "Surface Segmentation",
         "desc" : "The language in which Content Description (0070,0081) within this sequence item is written. A single Item shall be present.",
         "req" : "1",
         "usage" : "M",
         "name" : "Language Code Sequence",
         "mod_tables" : [
            "table_C.8.23-1",
            "table_10-12"
         ]
      },
      "(0100,0424)" : {
         "desc" : "Any comments associated with the setting of the SOP Instance Status (0100,0410) to AO.",
         "usage" : "M",
         "req" : "3",
         "name" : "SOP Authorization Comment",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Surface",
         "module" : "SOP Common"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1155)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0020,000d)" : {
         "name" : "Study Instance UID",
         "usage" : "M",
         "desc" : "Unique identifier for the Study.",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0031)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Local Namespace Entity ID",
         "usage" : "M",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ]
      },
      "(0040,0275)[<0>](0040,1002)" : {
         "desc" : "Reason for requesting this procedure.",
         "req" : "3",
         "usage" : "M",
         "name" : "Reason for the Requested Procedure",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0038,0062)" : {
         "desc" : "Description of the type of service episode.",
         "usage" : "U",
         "req" : "3",
         "name" : "Service Episode Description",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "entity" : "Study",
         "module" : "Patient Study"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a121)" : {
         "name" : "Date",
         "req" : "1C",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
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
      "(0008,0060)" : [
         {
            "mod_tables" : [
               "table_C.7-5a"
            ],
            "desc" : [
               "Type of equipment that originally acquired the data used to create the images in this Series. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.3.1.1.1"
                  },
                  "el" : "xref"
               },
               " for Defined Terms."
            ],
            "usage" : "M",
            "req" : "1",
            "name" : "Modality",
            "module" : "General Series",
            "entity" : "Series"
         },
         {
            "module" : "Segmentation Series",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.8.20-1"
            ],
            "name" : "Modality",
            "desc" : [
               "Modality Type",
               {
                  "list" : [
                     [
                        "SEG",
                        null
                     ]
                  ],
                  "type" : "variablelist",
                  "title" : "Enumerated Values:"
               }
            ],
            "usage" : "M",
            "req" : "1"
         }
      ],
      "(0018,a001)[<0>](0018,a002)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Contribution DateTime",
         "usage" : "M",
         "desc" : "The Date & Time when the equipment contributed to the composite instance.",
         "req" : "3",
         "module" : "SOP Common",
         "entity" : "Surface"
      },
      "(0038,0060)" : {
         "entity" : "Study",
         "module" : "Patient Study",
         "req" : "3",
         "desc" : "Identifier of the Service Episode as assigned by the healthcare provider",
         "usage" : "U",
         "name" : "Service Episode ID",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0033)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
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
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0062,000b)" : {
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "usage" : "M",
         "name" : "Referenced Segment Number"
      },
      "(0066,0002)[<0>](0066,0011)[<1>](0066,0017)" : {
         "module" : "Surface Mesh",
         "entity" : "Surface",
         "mod_tables" : [
            "table_C.27-1",
            "table_C.27-2"
         ],
         "req" : "3",
         "desc" : "A single standard deviation of the error for all the points' spatial positions. The units shall be the same as the units of the coordinate system in which the point coordinates are specified.",
         "usage" : "M",
         "name" : "Point Position Accuracy"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a168)" : {
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "req" : "1C",
         "name" : "Concept Code Sequence"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a122)" : {
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "req" : "1C",
         "usage" : "M",
         "name" : "Time",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "name" : "Universal Entity ID",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "usage" : "M",
         "req" : "1C",
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a121)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Date",
         "req" : "1C",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0008,1052)[<0>](0040,1102)" : {
         "entity" : "Series",
         "module" : "General Series",
         "req" : "3",
         "desc" : "Person's mailing address",
         "usage" : "M",
         "name" : "Person's Address",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ]
      },
      "(0008,103f)" : {
         "name" : "Series Description Code Sequence",
         "desc" : [
            "A coded description of the Series.",
            "Only a single Item is permitted in this sequence."
         ],
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0010,0024)[<0>](0040,0035)" : {
         "name" : "Identifier Type Code",
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
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0066,0002)[<0>](0066,0035)[<1>](0066,0030)" : {
         "module" : "Surface Mesh",
         "entity" : "Surface",
         "mod_tables" : [
            "table_C.27-1",
            "table_10-19"
         ],
         "desc" : [
            "The code assigned by a manufacturer to a specific software algorithm.",
            "Only a single item is permitted in this sequence."
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Algorithm Name Code Sequence"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0082)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "name" : "Institution Code Sequence",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1C",
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Surface"
      },
      "(fffa,fffa)[<0>](0400,0310)" : {
         "module" : "SOP Common",
         "entity" : "Surface",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Certified Timestamp",
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
         "usage" : "M"
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1155)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a160)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Text Value",
         "usage" : "M",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "req" : "1C",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0012,0083)[<0>](0012,0020)" : {
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "req" : "1C",
         "desc" : [
            "The identifier of the protocol for which consent to distribute has been granted.",
            "Required if Distribution Type (0012,0084) is NAMED_PROTOCOL and the protocol is not that which is specified in Clinical Trial Protocol ID (0012,0020) in the Clinical Trial Subject Module."
         ],
         "usage" : "U",
         "name" : "Clinical Trial Protocol ID",
         "module" : "Clinical Trial Study",
         "entity" : "Study"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a161)" : {
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Floating Point Value",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "usage" : "M",
         "req" : "1C"
      },
      "(0070,0086)[<0>](0040,1102)" : {
         "desc" : "Person's mailing address",
         "usage" : "M",
         "req" : "3",
         "name" : "Person's Address",
         "mod_tables" : [
            "table_C.8.23-1",
            "table_10-12",
            "table_10-1"
         ],
         "entity" : "Surface",
         "module" : "Surface Segmentation"
      },
      "(0066,0002)[<0>](0066,0035)[<1>](0066,0031)" : {
         "mod_tables" : [
            "table_C.27-1",
            "table_10-19"
         ],
         "req" : "1",
         "desc" : "The software version identifier assigned by a manufacturer to a specific software algorithm.",
         "usage" : "M",
         "name" : "Algorithm Version",
         "module" : "Surface Mesh",
         "entity" : "Surface"
      },
      "(0018,5100)" : {
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
         "usage" : "M",
         "name" : "Patient Position",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a124)" : {
         "name" : "UID",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0008,1049)[<0>](0008,0082)" : {
         "name" : "Institution Code Sequence",
         "req" : "1C",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0010,0030)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient's Birth Date",
         "desc" : "Birth date of the patient.",
         "req" : "2",
         "usage" : "M"
      },
      "(0040,1012)" : {
         "entity" : "Study",
         "module" : "General Study",
         "name" : "Reason For Performed Procedure Code Sequence",
         "usage" : "M",
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
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0010,2299)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Responsible Organization",
         "usage" : "M",
         "desc" : [
            "Name of organization with medical decision making authority for the patient.",
            "Required if patient is an animal. May be present otherwise."
         ],
         "req" : "2C",
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1155)" : {
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "M",
         "req" : "1",
         "name" : "Referenced SOP Instance UID"
      },
      "(0066,0002)[<0>](0066,0035)[<1>](0066,0032)" : {
         "module" : "Surface Mesh",
         "entity" : "Surface",
         "mod_tables" : [
            "table_C.27-1",
            "table_10-19"
         ],
         "name" : "Algorithm Parameters",
         "usage" : "M",
         "desc" : "The input parameters used by a manufacturer to configure the behavior of a specific software algorithm.",
         "req" : "3"
      },
      "(0012,0020)" : {
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U",
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
         "req" : "1",
         "name" : "Clinical Trial Protocol ID",
         "module" : "Clinical Trial Subject",
         "entity" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a120)" : {
         "usage" : "M",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "req" : "1C",
         "name" : "DateTime",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a162)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Rational Numerator Value",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "usage" : "M",
         "req" : "1C",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0066,0002)" : {
         "entity" : "Surface",
         "module" : "Surface Mesh",
         "name" : "Surface Sequence",
         "req" : "1",
         "desc" : [
            "The surfaces that are described within the data.",
            "One or more Items shall be included in this sequence.",
            "There shall be Number of Surfaces (0066,0001) Items in the sequence.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.27.1.1.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.27-1"
         ]
      },
      "(4ffe,0001)[<0>](0400,0015)" : {
         "entity" : "Surface",
         "module" : "SOP Common",
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
         ],
         "usage" : "M",
         "req" : "1",
         "name" : "MAC Algorithm",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(fffa,fffa)[<0>](0400,0120)" : {
         "name" : "Signature",
         "req" : "1",
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
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.12.1.1.3.1.2",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Surface",
         "module" : "SOP Common"
      },
      "(0066,0002)[<0>](0066,0003)" : {
         "module" : "Surface Mesh",
         "entity" : "Surface",
         "mod_tables" : [
            "table_C.27-1"
         ],
         "name" : "Surface Number",
         "desc" : "Identification number of the surface. Uniquely identifies a surface within this SOP instance. Shall start at a value of 1, and increase monotonically by 1.",
         "req" : "1",
         "usage" : "M"
      },
      "(0062,0002)[<0>](0066,002a)" : {
         "name" : "Surface Count",
         "desc" : "The number of surfaces that comprise this segment. Shall be greater than zero.",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.23-1"
         ],
         "entity" : "Surface",
         "module" : "Surface Segmentation"
      },
      "(0008,1062)" : {
         "name" : "Physician(s) Reading Study Identification Sequence",
         "desc" : "Identification of the physician(s) reading the Study. One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Name of Physician(s) Reading Study (0008,1060), if present.",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)" : {
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Referenced SOP Sequence",
         "req" : "1C",
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
         ]
      },
      "(0066,0002)[<0>](0066,0012)[<1>](0066,0020)" : {
         "entity" : "Surface",
         "module" : "Surface Mesh",
         "name" : "Vector Accuracy",
         "req" : "3",
         "desc" : [
            "A single standard deviation for all the vectors' coordinates. The units shall be the same as the units of the coordinate system in which the vector coordinates are specified. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.27.3.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.27-1",
            "table_C.27-3"
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C",
         "usage" : "M",
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ]
      },
      "(0040,0275)" : {
         "entity" : "Series",
         "module" : "General Series",
         "desc" : [
            "Sequence that contains attributes from the Imaging Service Request.",
            "One or more Items are permitted in this sequence."
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Request Attributes Sequence",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0070,0086)[<0>](0040,1103)" : {
         "mod_tables" : [
            "table_C.8.23-1",
            "table_10-12",
            "table_10-1"
         ],
         "name" : "Person's Telephone Numbers",
         "desc" : "Person's telephone number(s)",
         "usage" : "M",
         "req" : "3",
         "module" : "Surface Segmentation",
         "entity" : "Surface"
      },
      "(0008,1062)[<0>](0008,0082)" : {
         "usage" : "M",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1C",
         "name" : "Institution Code Sequence",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,003a)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
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
         "usage" : "M",
         "name" : "Assigning Agency or Department Code Sequence"
      },
      "(0012,0010)" : {
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-2b"
         ],
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
         "usage" : "U",
         "name" : "Clinical Trial Sponsor Name"
      },
      "(0008,0020)" : {
         "name" : "Study Date",
         "usage" : "M",
         "desc" : "Date the Study started.",
         "req" : "2",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0008,1200)[<0>](0008,1115)" : {
         "name" : "Referenced Series Sequence",
         "usage" : "C - Required if the surface has been derived from another SOP Instance",
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this sequence."
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "entity" : "Surface",
         "module" : "Common Instance Reference"
      },
      "(0008,1111)[<0>](0008,1155)" : [
         {
            "name" : "Referenced SOP Instance UID",
            "req" : "1",
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-11"
            ],
            "entity" : "Series",
            "module" : "General Series"
         },
         {
            "mod_tables" : [
               "table_C.8.20-1",
               "table_10-11"
            ],
            "name" : "Referenced SOP Instance UID",
            "usage" : "M",
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "req" : "1",
            "module" : "Segmentation Series",
            "entity" : "Series"
         }
      ],
      "(0038,0014)[<0>](0040,0031)" : {
         "req" : "1C",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "usage" : "U",
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "entity" : "Study",
         "module" : "Patient Study"
      },
      "(0018,a001)[<0>](0018,1201)" : {
         "entity" : "Surface",
         "module" : "SOP Common",
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
         "usage" : "M",
         "name" : "Time of Last Calibration",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a043)" : {
         "entity" : "Series",
         "module" : "General Series",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "M",
         "req" : "1",
         "name" : "Concept Name Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
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
         "usage" : "M",
         "req" : "1",
         "name" : "Person Identification Code Sequence",
         "module" : "General Study",
         "entity" : "Study"
      },
      "(0020,0013)" : [
         {
            "entity" : "Surface",
            "module" : "Surface Segmentation",
            "name" : "Instance Number",
            "req" : "1",
            "desc" : "A number that identifies this SOP Instance.",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8.23-1",
               "table_10-12"
            ]
         },
         {
            "mod_tables" : [
               "table_C.12-1"
            ],
            "desc" : "A number that identifies this Composite object instance.",
            "req" : "3",
            "usage" : "M",
            "name" : "Instance Number",
            "module" : "SOP Common",
            "entity" : "Surface"
         }
      ],
      "(0062,0002)[<0>](0066,002b)[<1>](0066,002d)[<2>](0066,0030)" : {
         "usage" : "M",
         "desc" : [
            "The code assigned by a manufacturer to a specific software algorithm.",
            "Only a single item is permitted in this sequence."
         ],
         "req" : "3",
         "name" : "Algorithm Name Code Sequence",
         "mod_tables" : [
            "table_C.8.23-1",
            "table_10-19"
         ],
         "entity" : "Surface",
         "module" : "Surface Segmentation"
      },
      "(fffa,fffa)[<0>](0400,0401)" : {
         "entity" : "Surface",
         "module" : "SOP Common",
         "name" : "Digital Signature Purpose Code Sequence",
         "req" : "3",
         "desc" : [
            "The purpose of this Digital Signature.",
            "Only a single Item is permitted in this sequence."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0070,0081)" : {
         "module" : "Surface Segmentation",
         "entity" : "Surface",
         "mod_tables" : [
            "table_C.8.23-1",
            "table_10-12"
         ],
         "name" : "Content Description",
         "desc" : "A description of the content of the SOP Instance.",
         "req" : "2",
         "usage" : "M"
      },
      "(0066,0002)[<0>](0066,0009)" : {
         "mod_tables" : [
            "table_C.27-1"
         ],
         "name" : "Surface Processing",
         "desc" : [
            "Specifies whether the surface has been modified subsequent to the original generation of the surface.",
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
                     "linkend" : "sect_C.27.1.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "usage" : "M",
         "req" : "2",
         "module" : "Surface Mesh",
         "entity" : "Surface"
      },
      "(0008,0081)" : {
         "entity" : "Equipment",
         "module" : "General Equipment",
         "name" : "Institution Address",
         "usage" : "M",
         "desc" : "Mailing address of the institution where the equipment that produced the composite instances is located.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-8"
         ]
      },
      "(0062,0002)[<0>](0062,0005)" : {
         "desc" : "User-defined label identifying this segment. This may be the same as Code Meaning (0008,0104) of Segmented Property Type Code Sequence (0062,000F).",
         "req" : "1",
         "usage" : "M",
         "name" : "Segment Label",
         "mod_tables" : [
            "table_C.8.23-1",
            "table_C.8.20-4"
         ],
         "entity" : "Surface",
         "module" : "Surface Segmentation"
      },
      "(0062,0002)[<0>](0066,002b)[<1>](0066,002c)" : {
         "name" : "Referenced Surface Number",
         "req" : "1",
         "desc" : "Identifies the Surface Number (0066,0003) within the Surface Sequence (0066,0002) to which this reference applies.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.23-1"
         ],
         "entity" : "Surface",
         "module" : "Surface Segmentation"
      },
      "(0008,1200)[<0>](0020,000d)" : {
         "entity" : "Surface",
         "module" : "Common Instance Reference",
         "name" : "Study Instance UID",
         "req" : "1",
         "desc" : "Unique identifier of the Study containing the referenced Instances.",
         "usage" : "C - Required if the surface has been derived from another SOP Instance",
         "mod_tables" : [
            "table_C.12-8"
         ]
      },
      "(0010,2293)" : {
         "entity" : "Patient",
         "module" : "Patient",
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
            "Zero or more Items shall be included in this sequence.",
            "Required if the patient is an animal."
         ],
         "req" : "2C",
         "usage" : "M",
         "name" : "Patient Breed Code Sequence",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a168)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Concept Code Sequence",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "req" : "1C",
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0033)" : {
         "module" : "Patient",
         "entity" : "Patient",
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "usage" : "M",
         "req" : "1C",
         "name" : "Universal Entity ID Type"
      },
      "(0008,1052)[<0>](0008,0081)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "usage" : "M",
         "req" : "3",
         "name" : "Institution Address",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0008,1080)" : {
         "module" : "Patient Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Description of the admitting diagnosis (diagnoses)",
         "usage" : "U",
         "req" : "3",
         "name" : "Admitting Diagnoses Description"
      },
      "(0400,0500)[<0>](0400,0510)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "desc" : "Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
         "usage" : "M",
         "name" : "Encrypted Content Transfer Syntax UID",
         "module" : "SOP Common",
         "entity" : "Surface"
      },
      "(0038,0014)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "req" : "3",
         "desc" : [
            "Identifier of the Assigning Authority that issued Admission ID (0038,0010).",
            "Only a single Item is permitted in this sequence."
         ],
         "usage" : "U",
         "name" : "Issuer of Admission ID Sequence",
         "module" : "Patient Study",
         "entity" : "Study"
      },
      "(0008,1072)[<0>](0040,1102)" : {
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "desc" : "Person's mailing address",
         "usage" : "M",
         "req" : "3",
         "name" : "Person's Address"
      },
      "(0010,1002)[<0>](0010,0024)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this sequence."
         ],
         "req" : "3",
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0066,0002)[<0>](0066,0035)[<1>](0066,002f)" : {
         "name" : "Algorithm Family Code Sequence",
         "desc" : [
            "The family of algorithm(s) that best describes the software algorithm used.",
            "Only a single item shall be included in this sequence."
         ],
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.27-1",
            "table_10-19"
         ],
         "entity" : "Surface",
         "module" : "Surface Mesh"
      },
      "(0066,0002)[<0>](0066,0004)" : {
         "desc" : "User-defined comments describing the surface.",
         "req" : "3",
         "usage" : "M",
         "name" : "Surface Comments",
         "mod_tables" : [
            "table_C.27-1"
         ],
         "entity" : "Surface",
         "module" : "Surface Mesh"
      },
      "(0062,0002)[<0>](0008,2228)" : {
         "entity" : "Surface",
         "module" : "Surface Segmentation",
         "req" : "3",
         "desc" : [
            "Sequence of Items that identifies the primary anatomic structure(s) of interest in this Instance.",
            "One or more Items are permitted in this sequence."
         ],
         "usage" : "M",
         "name" : "Primary Anatomic Structure Sequence",
         "mod_tables" : [
            "table_C.8.23-1",
            "table_C.8.20-4",
            "table_10-7",
            "table_10-8"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a161)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "usage" : "M",
         "name" : "Floating Point Value",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0020,1040)" : {
         "req" : "2",
         "desc" : [
            "Part of the imaging target used as a reference. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.4.1.1.2"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "usage" : "M",
         "name" : "Position Reference Indicator",
         "mod_tables" : [
            "table_C.7-6"
         ],
         "entity" : "Frame of Reference",
         "module" : "Frame of Reference"
      },
      "(0008,1110)" : {
         "module" : "General Study",
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
                     "linkend" : "sect_10.6.1",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ]
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Referenced Study Sequence"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a043)" : {
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1",
         "name" : "Concept Name Code Sequence"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a122)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Time",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "usage" : "M",
         "req" : "1C",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0062,0002)[<0>](0066,002b)[<1>](0066,002e)[<2>](0008,1150)" : {
         "mod_tables" : [
            "table_C.8.23-1",
            "table_10-3",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M",
         "module" : "Surface Segmentation",
         "entity" : "Surface"
      },
      "(0008,0051)[<0>](0040,0031)" : {
         "module" : "General Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "name" : "Local Namespace Entity ID",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "usage" : "M",
         "req" : "1C"
      },
      "(0066,0002)[<0>](0066,0013)[<1>](0066,0027)[<2>](0066,0029)" : {
         "mod_tables" : [
            "table_C.27-1",
            "table_C.27-4"
         ],
         "desc" : [
            "See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.27.4.1"
               },
               "el" : "xref"
            },
            "."
         ],
         "usage" : "M",
         "req" : "1",
         "name" : "Primitive Point Index List",
         "module" : "Surface Mesh",
         "entity" : "Surface"
      },
      "(0040,0275)[<0>](0032,1060)" : {
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "desc" : "Institution-generated administrative description or classification of Requested Procedure.",
         "usage" : "M",
         "req" : "3",
         "name" : "Requested Procedure Description"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1101)" : {
         "module" : "SOP Common",
         "entity" : "Surface",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "usage" : "M",
         "req" : "1",
         "name" : "Person Identification Code Sequence"
      },
      "(0008,0096)[<0>](0040,1103)" : {
         "name" : "Person's Telephone Numbers",
         "desc" : "Person's telephone number(s)",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0012,0063)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
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
         "req" : "1C",
         "usage" : "M",
         "name" : "De-identification Method"
      },
      "(0062,0002)[<0>](0062,000f)[<1>](0062,0011)" : {
         "name" : "Segmented Property Type Modifier Code Sequence",
         "usage" : "M",
         "desc" : [
            "Sequence defining the modifier of the property type of this segment.",
            "One or more Items are permitted in this sequence."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.8.23-1",
            "table_C.8.20-4"
         ],
         "entity" : "Surface",
         "module" : "Surface Segmentation"
      },
      "(0012,0081)" : {
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "name" : "Clinical Trial Protocol Ethics Committee Name",
         "desc" : "Name of the Ethics Committee or Institutional Review Board (IRB) responsible for approval of the Clinical Trial. Required if Clinical Trial Protocol Ethics Committee Approval Number (0012,0082) is present.",
         "usage" : "U",
         "req" : "1C",
         "module" : "Clinical Trial Subject",
         "entity" : "Patient"
      },
      "(0012,0021)" : {
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
         "usage" : "U",
         "req" : "2",
         "name" : "Clinical Trial Protocol Name",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "entity" : "Patient",
         "module" : "Clinical Trial Subject"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "req" : "3",
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
         "name" : "Assigning Facility Sequence",
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0010,0021)" : {
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
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0035)" : {
         "entity" : "Patient",
         "module" : "Patient",
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
         "req" : "3",
         "name" : "Identifier Type Code",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0008,0053)" : {
         "module" : "SOP Common",
         "entity" : "Surface",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Query/Retrieve View",
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
         "req" : "1C",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,1001)" : {
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "name" : "Requested Procedure ID",
         "usage" : "M",
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
         ],
         "req" : "1C"
      },
      "(0008,1062)[<0>](0040,1101)" : {
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "usage" : "M",
         "req" : "1",
         "name" : "Person Identification Code Sequence",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0062,0002)[<0>](0066,002b)[<1>](0066,002e)[<2>](0008,1160)" : {
         "entity" : "Surface",
         "module" : "Surface Segmentation",
         "name" : "Referenced Frame Number",
         "usage" : "M",
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
         "req" : "1C",
         "mod_tables" : [
            "table_C.8.23-1",
            "table_10-3"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a30a)" : {
         "name" : "Numeric Value",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0010,0040)" : {
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
         "usage" : "M",
         "req" : "2",
         "name" : "Patient's Sex",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0038,0010)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Admission ID",
         "desc" : "Identifier of the visit as assigned by the healthcare provider",
         "req" : "3",
         "usage" : "U",
         "module" : "Patient Study",
         "entity" : "Study"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1160)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
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
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a123)" : {
         "name" : "Person Name",
         "usage" : "M",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,08ea)" : {
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
         "usage" : "M",
         "name" : "Measurement Units Code Sequence",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1155)" : {
         "entity" : "Surface",
         "module" : "Common Instance Reference",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "usage" : "C - Required if the surface has been derived from another SOP Instance",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ]
      },
      "(0010,2292)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient Breed Description",
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
         "usage" : "M",
         "req" : "2C"
      },
      "(0062,0002)[<0>](0008,2218)[<1>](0008,2220)" : {
         "module" : "Surface Segmentation",
         "entity" : "Surface",
         "mod_tables" : [
            "table_C.8.23-1",
            "table_C.8.20-4",
            "table_10-7"
         ],
         "req" : "3",
         "desc" : [
            "Sequence of Items that modifies the anatomic region of interest of this Instance",
            "One or more Items are permitted in this sequence."
         ],
         "usage" : "M",
         "name" : "Anatomic Region Modifier Sequence"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a161)" : {
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Floating Point Value",
         "usage" : "M",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0020,000e)" : {
         "module" : "Common Instance Reference",
         "entity" : "Surface",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "name" : "Series Instance UID",
         "desc" : "Unique identifier of the Series containing the referenced Instances.",
         "usage" : "C - Required if the surface has been derived from another SOP Instance",
         "req" : "1"
      },
      "(0010,1001)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Other Patient Names",
         "desc" : "Other names used to identify the patient.",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0066,0002)[<0>](0066,0037)" : {
         "module" : "Surface Mesh",
         "entity" : "Surface",
         "mod_tables" : [
            "table_C.27-1"
         ],
         "req" : "3",
         "desc" : [
            "Specifies the radius of the vertex points defined in the Vertex Point Index List (0066,0025) with which it is recommended that the point be rendered.",
            "The units shall be the same as the units of the coordinate system in which the point coordinates are specified."
         ],
         "usage" : "M",
         "name" : "Recommended Point Radius"
      },
      "(0008,0033)" : {
         "mod_tables" : [
            "table_C.8.23-1"
         ],
         "name" : "Content Time",
         "usage" : "M",
         "desc" : "The time the content creation started.",
         "req" : "1",
         "module" : "Surface Segmentation",
         "entity" : "Surface"
      },
      "(0008,0051)" : {
         "entity" : "Study",
         "module" : "General Study",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this sequence."
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Issuer of Accession Number Sequence",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0020,9172)[<0>](0062,000b)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "name" : "Referenced Segment Number",
         "req" : "1C",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Surface"
      },
      "(0070,0086)" : {
         "name" : "Content Creator's Identification Code Sequence",
         "desc" : "Identification of the person who created the content. Only a single item is permitted in this sequence.",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.23-1",
            "table_10-12"
         ],
         "entity" : "Surface",
         "module" : "Surface Segmentation"
      },
      "(0040,0244)" : {
         "usage" : "M",
         "desc" : "Date on which the Performed Procedure Step started.",
         "req" : "3",
         "name" : "Performed Procedure Step Start Date",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0062,0002)[<0>](0062,0003)" : {
         "module" : "Surface Segmentation",
         "entity" : "Surface",
         "mod_tables" : [
            "table_C.8.23-1",
            "table_C.8.20-4"
         ],
         "req" : "1",
         "desc" : [
            "Sequence defining the general category of this segment.",
            "Only a single item shall be included in this sequence."
         ],
         "usage" : "M",
         "name" : "Segmented Property Category Code Sequence"
      },
      "(0062,0002)" : {
         "module" : "Surface Segmentation",
         "entity" : "Surface",
         "mod_tables" : [
            "table_C.8.23-1"
         ],
         "name" : "Segment Sequence",
         "desc" : [
            "Describes the segments that are contained within the data.",
            "One or more Items shall be included in this sequence."
         ],
         "usage" : "M",
         "req" : "1"
      },
      "(0040,0275)[<0>](0020,000d)" : {
         "entity" : "Series",
         "module" : "General Series",
         "req" : "3",
         "desc" : "The unique identifier for the Study provided for this Requested Procedure.",
         "usage" : "M",
         "name" : "Study Instance UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ]
      },
      "(0400,0561)[<0>](0400,0550)[0](gggg,eeee)" : {
         "name" : "Any Attribute from the main data set that was modified or removed.",
         "desc" : "May include Sequence Attributes and their Items.",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Surface",
         "module" : "SOP Common"
      },
      "(0008,0096)[<0>](0008,0080)" : {
         "usage" : "M",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "req" : "1C",
         "name" : "Institution Name",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0066,0002)[<0>](0066,0011)[<1>](0066,001b)" : {
         "usage" : "M",
         "desc" : "A 3D location that combined with Center of Rotation (0066,001C) specifies the preferred axis of rotation of this object.",
         "req" : "3",
         "name" : "Axis of Rotation",
         "mod_tables" : [
            "table_C.27-1",
            "table_C.27-2"
         ],
         "entity" : "Surface",
         "module" : "Surface Mesh"
      },
      "(0008,1070)" : {
         "desc" : "Name(s) of the operator(s) supporting the Series.",
         "req" : "3",
         "usage" : "M",
         "name" : "Operators' Name",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0008,0005)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Specific Character Set",
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
         ],
         "req" : "1C",
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Surface"
      },
      "(0008,1110)[<0>](0008,1155)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "module" : "General Study",
         "entity" : "Study"
      },
      "(0008,1200)" : {
         "mod_tables" : [
            "table_C.12-8"
         ],
         "name" : "Studies Containing Other Referenced Instances Sequence",
         "req" : "1C",
         "desc" : [
            "Sequence of items each identifying a Study other than the Study of which this Instance is a part, which Studies contain Instances that are referenced elsewhere in this Instance.",
            "One or more Items shall be included in this sequence.",
            "Required if this Instance references Instances in other Studies."
         ],
         "usage" : "C - Required if the surface has been derived from another SOP Instance",
         "module" : "Common Instance Reference",
         "entity" : "Surface"
      },
      "(0008,0015)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Surface"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,08ea)" : {
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Measurement Units Code Sequence",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0018,1200)" : {
         "name" : "Date of Last Calibration",
         "usage" : "M",
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
         "req" : "3",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "entity" : "Equipment",
         "module" : "General Equipment"
      },
      "(fffa,fffa)[<0>](0400,0100)" : {
         "name" : "Digital Signature UID",
         "usage" : "M",
         "desc" : "A UID that can be used to uniquely reference this signature.",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Surface",
         "module" : "SOP Common"
      },
      "(0018,a001)[<0>](0008,1090)" : {
         "name" : "Manufacturer's Model Name",
         "usage" : "M",
         "desc" : "Manufacturer's model name of the equipment that contributed to the composite instance.",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Surface",
         "module" : "SOP Common"
      },
      "(0018,a001)[<0>](0018,1000)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Device Serial Number",
         "desc" : "Manufacturer's serial number of the equipment that contributed to the composite instance.",
         "usage" : "M",
         "req" : "3",
         "module" : "SOP Common",
         "entity" : "Surface"
      },
      "(0040,a390)[<0>](0040,e010)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Retrieve URI",
         "desc" : "Retrieval access path to HL7 Structured Document. Includes fully specified scheme, authority, path, and query in accordance with RFC 2396",
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Surface"
      },
      "(0020,9172)[<0>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "entity" : "Surface",
         "module" : "SOP Common"
      },
      "(0008,1052)[<0>](0008,0080)" : {
         "name" : "Institution Name",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0008,1111)" : [
         {
            "name" : "Referenced Performed Procedure Step Sequence",
            "usage" : "M",
            "desc" : [
               "Uniquely identifies the Performed Procedure Step SOP Instance to which the Series is related.",
               "Only a single Item is permitted in this sequence."
            ],
            "req" : "3",
            "mod_tables" : [
               "table_C.7-5a"
            ],
            "entity" : "Series",
            "module" : "General Series"
         },
         {
            "module" : "Segmentation Series",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.8.20-1"
            ],
            "usage" : "M",
            "desc" : [
               "Uniquely identifies the Performed Procedure Step SOP Instance to which the Series is related",
               "Only a single Item shall be included in this sequence.",
               "Required if a Performed Procedure Step SOP Class was involved in the creation of this Series."
            ],
            "req" : "1C",
            "name" : "Referenced Performed Procedure Step Sequence"
         }
      ],
      "(0010,1002)[<0>](0010,0020)" : {
         "desc" : "An identification number or code used to identify the patient.",
         "req" : "1",
         "usage" : "M",
         "name" : "Patient ID",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0018,1201)" : {
         "entity" : "Equipment",
         "module" : "General Equipment",
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
         "usage" : "M",
         "req" : "3",
         "name" : "Time of Last Calibration",
         "mod_tables" : [
            "table_C.7-8"
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
                     "el" : "para",
                     "content" : [
                        "This is not a certified timestamp, and hence is not completely verifiable. An application can compare this date and time with those of other signatures and the validity date of the certificate to gain confidence in the veracity of this date and time."
                     ]
                  },
                  "\n                    "
               ]
            }
         ],
         "req" : "1",
         "usage" : "M",
         "name" : "Digital Signature DateTime",
         "module" : "SOP Common",
         "entity" : "Surface"
      },
      "(0066,0002)[<0>](0066,0013)[<1>](0066,0028)" : {
         "module" : "Surface Mesh",
         "entity" : "Surface",
         "mod_tables" : [
            "table_C.27-1",
            "table_C.27-4"
         ],
         "desc" : [
            "All Lines in this Surface.",
            "Zero or more Items shall be included in this sequence."
         ],
         "usage" : "M",
         "req" : "2",
         "name" : "Line Sequence"
      },
      "(0008,0110)[<0>](0008,0114)" : {
         "entity" : "Surface",
         "module" : "SOP Common",
         "usage" : "M",
         "desc" : "The coding scheme identifier as defined in an external registry. Required if coding scheme is registered and Coding Scheme UID (0008,010C) is not present.",
         "req" : "2C",
         "name" : "Coding Scheme External ID",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0010,2298)" : {
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
         ],
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a124)" : {
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "req" : "1C",
         "usage" : "M",
         "name" : "UID"
      },
      "(0100,0420)" : {
         "entity" : "Surface",
         "module" : "SOP Common",
         "usage" : "M",
         "desc" : "The date and time when the SOP Instance Status (0100,0410) was set to AO.",
         "req" : "3",
         "name" : "SOP Authorization DateTime",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0012,0062)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient Identity Removed",
         "usage" : "M",
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
         "req" : "3",
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)" : {
         "usage" : "M",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "req" : "1C",
         "name" : "Referenced SOP Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0066,0002)[<0>](0066,0038)" : {
         "mod_tables" : [
            "table_C.27-1"
         ],
         "name" : "Recommended Line Thickness",
         "usage" : "M",
         "desc" : [
            "Specifies the thickness of each edge or line defined in the Edge Point Index List (0066,0024) or Line Sequence (0066,0028) with which it is recommended that the line be rendered.",
            "The units shall be the same as the units of the coordinate system in which the point coordinates are specified."
         ],
         "req" : "3",
         "module" : "Surface Mesh",
         "entity" : "Surface"
      },
      "(0400,0500)" : {
         "req" : "1C",
         "desc" : [
            "Sequence of Items containing encrypted DICOM data.",
            "One or more Items shall be included in this sequence.",
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
         "usage" : "M",
         "name" : "Encrypted Attributes Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Surface",
         "module" : "SOP Common"
      },
      "(0040,a390)[<0>](0008,1155)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "M",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "module" : "SOP Common",
         "entity" : "Surface"
      },
      "(0008,0023)" : {
         "mod_tables" : [
            "table_C.8.23-1"
         ],
         "desc" : "The date the content creation started.",
         "usage" : "M",
         "req" : "1",
         "name" : "Content Date",
         "module" : "Surface Segmentation",
         "entity" : "Surface"
      },
      "(0066,0002)[<0>](0066,0013)[<1>](0066,0026)[<2>](0066,0029)" : {
         "desc" : [
            "See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.27.4.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "usage" : "M",
         "req" : "1",
         "name" : "Primitive Point Index List",
         "mod_tables" : [
            "table_C.27-1",
            "table_C.27-4"
         ],
         "entity" : "Surface",
         "module" : "Surface Mesh"
      },
      "(0008,1120)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3",
         "desc" : [
            "A sequence that provides reference to a Patient SOP Class/Instance pair.",
            "Only a single Item is permitted in this Sequence."
         ],
         "usage" : "M",
         "name" : "Referenced Patient Sequence"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,08ea)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "usage" : "M",
         "req" : "1C",
         "name" : "Measurement Units Code Sequence",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0008,1120)[<0>](0008,1150)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ]
      },
      "(0070,0087)[<0>](0070,0081)" : {
         "entity" : "Surface",
         "module" : "Surface Segmentation",
         "name" : "Content Description",
         "req" : "1",
         "desc" : "An alternate description that is used to identify this SOP Instance.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.23-1",
            "table_10-12"
         ]
      },
      "(0020,9172)[<0>](0008,1150)" : {
         "module" : "SOP Common",
         "entity" : "Surface",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "usage" : "M"
      },
      "(0008,1049)" : {
         "module" : "General Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Physician(s) of Record Identification Sequence",
         "req" : "3",
         "desc" : [
            "Identification of the physician(s) who are responsible for overall patient care at time of Study.",
            "One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Physician(s) of Record (0008,1048), if present."
         ],
         "usage" : "M"
      },
      "(0066,0002)[<0>](0066,0013)[<1>](0066,0027)" : {
         "desc" : [
            "All Triangle Fans in this Surface.",
            "Zero or more Items shall be included in this sequence."
         ],
         "req" : "2",
         "usage" : "M",
         "name" : "Triangle Fan Sequence",
         "mod_tables" : [
            "table_C.27-1",
            "table_C.27-4"
         ],
         "entity" : "Surface",
         "module" : "Surface Mesh"
      },
      "(0010,1020)" : {
         "module" : "Patient Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Length or size of the Patient, in meters.",
         "req" : "3",
         "usage" : "U",
         "name" : "Patient's Size"
      },
      "(0066,0002)[<0>](0066,0011)[<1>](0066,001a)" : {
         "mod_tables" : [
            "table_C.27-1",
            "table_C.27-2"
         ],
         "name" : "Points Bounding Box Coordinates",
         "usage" : "M",
         "desc" : "Two 3D locations defining the cuboid bounding box, parallel to the coordinate system axes, encompassing the point set.",
         "req" : "3",
         "module" : "Surface Mesh",
         "entity" : "Surface"
      },
      "(0040,0275)[<0>](0040,0008)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "desc" : "Sequence describing the Scheduled Protocol following a specific coding scheme. One or more Items are permitted in this sequence.",
         "usage" : "M",
         "req" : "3",
         "name" : "Scheduled Protocol Code Sequence",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0400,0561)[<0>](0400,0550)" : {
         "entity" : "Surface",
         "module" : "SOP Common",
         "usage" : "M",
         "desc" : [
            "Sequence that contains all the Attributes, with their previous values, that were modified or removed from the main data set.",
            "Only a single Item shall be included in this sequence."
         ],
         "req" : "1",
         "name" : "Modified Attributes Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0066,0002)[<0>](0066,0013)[<1>](0066,0028)[<2>](0066,0029)" : {
         "mod_tables" : [
            "table_C.27-1",
            "table_C.27-4"
         ],
         "name" : "Primitive Point Index List",
         "desc" : [
            "See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.27.4.1"
               },
               "el" : "xref"
            },
            "."
         ],
         "req" : "1",
         "usage" : "M",
         "module" : "Surface Mesh",
         "entity" : "Surface"
      },
      "(0062,0002)[<0>](0066,002b)[<1>](0066,002d)" : {
         "mod_tables" : [
            "table_C.8.23-1"
         ],
         "desc" : [
            "A description of how this segment surface was derived.",
            "Only a single Item shall be included in this sequence."
         ],
         "req" : "1",
         "usage" : "M",
         "name" : "Segment Surface Generation Algorithm Identification Sequence",
         "module" : "Surface Segmentation",
         "entity" : "Surface"
      },
      "(0038,0064)[<0>](0040,0033)" : {
         "module" : "Patient Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
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
         "usage" : "U"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a123)" : {
         "module" : "General Series",
         "entity" : "Series",
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
         "usage" : "M",
         "name" : "Person Name"
      },
      "(0008,1049)[<0>](0040,1102)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person's Address",
         "req" : "3",
         "desc" : "Person's mailing address",
         "usage" : "M",
         "module" : "General Study",
         "entity" : "Study"
      },
      "(0040,0260)[<0>](0040,0440)" : {
         "name" : "Protocol Context Sequence",
         "usage" : "M",
         "desc" : "Sequence that specifies the context for the Performed Protocol Code Sequence Item. One or more Items are permitted in this sequence.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a30a)" : {
         "module" : "General Series",
         "entity" : "Series",
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
         "req" : "1C",
         "name" : "Numeric Value"
      },
      "(0062,0002)[<0>](0066,002b)[<1>](0066,002e)[<2>](0062,000b)" : {
         "entity" : "Surface",
         "module" : "Surface Segmentation",
         "name" : "Referenced Segment Number",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.8.23-1",
            "table_10-3"
         ]
      },
      "(0012,0072)" : {
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "desc" : [
            "A description of the series in the context of a clinical trial. See ",
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
         "req" : "3",
         "name" : "Clinical Trial Series Description",
         "module" : "Clinical Trial Series",
         "entity" : "Series"
      },
      "(0100,0426)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The certification number issued to the Application Entity that set the SOP Instance Status (0100,0410) to AO.",
         "req" : "3",
         "usage" : "M",
         "name" : "Authorization Equipment Certification Number",
         "module" : "SOP Common",
         "entity" : "Surface"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1150)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0066,0002)[<0>](0066,0011)[<1>](0066,0019)" : {
         "mod_tables" : [
            "table_C.27-1",
            "table_C.27-2"
         ],
         "name" : "Maximum Point Distance",
         "req" : "3",
         "desc" : "The maximum distance of one point to its nearest neighbor. The units shall be the same as the units of the coordinate system in which the point coordinates are specified.",
         "usage" : "M",
         "module" : "Surface Mesh",
         "entity" : "Surface"
      },
      "(0040,a390)[<0>](0040,e001)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "HL7 Instance Identifier",
         "desc" : "Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
         "req" : "1",
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Surface"
      },
      "(0040,0275)[<0>](0040,0009)" : {
         "name" : "Scheduled Procedure Step ID",
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
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0008,1090)" : [
         {
            "mod_tables" : [
               "table_C.7-8"
            ],
            "desc" : "Manufacturer's model name of the equipment that produced the composite instances.",
            "req" : "3",
            "usage" : "M",
            "name" : "Manufacturer's Model Name",
            "module" : "General Equipment",
            "entity" : "Equipment"
         },
         {
            "entity" : "Equipment",
            "module" : "Enhanced General Equipment",
            "name" : "Manufacturer's Model Name",
            "desc" : "Manufacturer's model name of the equipment that produced the composite instances.",
            "usage" : "M",
            "req" : "1",
            "mod_tables" : [
               "table_C.7-8b"
            ]
         }
      ],
      "(0008,1049)[<0>](0008,0081)" : {
         "module" : "General Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "req" : "3",
         "usage" : "M",
         "name" : "Institution Address"
      },
      "(0038,0064)[<0>](0040,0032)" : {
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "name" : "Universal Entity ID",
         "req" : "1C",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "usage" : "U",
         "module" : "Patient Study",
         "entity" : "Study"
      },
      "(0008,1072)" : {
         "name" : "Operator Identification Sequence",
         "desc" : [
            "Identification of the operator(s) supporting the Series.",
            "One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Operators' Name (0008,1070), if present."
         ],
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0008,1062)[<0>](0040,1103)" : {
         "desc" : "Person's telephone number(s)",
         "req" : "3",
         "usage" : "M",
         "name" : "Person's Telephone Numbers",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0008,0050)" : {
         "req" : "2",
         "desc" : "A RIS generated number that identifies the order for the Study.",
         "usage" : "M",
         "name" : "Accession Number",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0040,a390)[<0>](0008,1150)" : {
         "module" : "SOP Common",
         "entity" : "Surface",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "usage" : "M",
         "name" : "Referenced SOP Class UID"
      },
      "(0008,0070)" : [
         {
            "mod_tables" : [
               "table_C.7-8"
            ],
            "desc" : "Manufacturer of the equipment that produced the composite instances.",
            "usage" : "M",
            "req" : "2",
            "name" : "Manufacturer",
            "module" : "General Equipment",
            "entity" : "Equipment"
         },
         {
            "mod_tables" : [
               "table_C.7-8b"
            ],
            "name" : "Manufacturer",
            "desc" : "Manufacturer of the equipment that produced the composite instances.",
            "req" : "1",
            "usage" : "M",
            "module" : "Enhanced General Equipment",
            "entity" : "Equipment"
         }
      ],
      "(0066,0002)[<0>](0066,0012)[<1>](0066,001f)" : {
         "module" : "Surface Mesh",
         "entity" : "Surface",
         "mod_tables" : [
            "table_C.27-1",
            "table_C.27-3"
         ],
         "usage" : "M",
         "desc" : [
            "The dimensionality of the underlying vector field. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.27.3.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "req" : "1",
         "name" : "Vector Dimensionality"
      },
      "(0008,0014)" : {
         "module" : "SOP Common",
         "entity" : "Surface",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "desc" : "Uniquely identifies device that created the SOP Instance.",
         "usage" : "M",
         "name" : "Instance Creator UID"
      },
      "(fffa,fffa)" : {
         "usage" : "M",
         "desc" : [
            "Sequence holding Digital Signatures.",
            "One or more items are permitted in this sequence."
         ],
         "req" : "3",
         "name" : "Digital Signatures Sequence",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Surface",
         "module" : "SOP Common"
      },
      "(0066,0002)[<0>](0066,0012)[<1>](0066,0021)" : {
         "entity" : "Surface",
         "module" : "Surface Mesh",
         "name" : "Vector Coordinate Data",
         "req" : "1",
         "desc" : [
            "A data stream of coordinates encoded as floats. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.27.3.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.27-1",
            "table_C.27-3"
         ]
      },
      "(0062,0002)[<0>](0066,002b)[<1>](0066,002e)" : {
         "name" : "Segment Surface Source Instance Sequence",
         "desc" : [
            "A Sequence that identifies the set of Instances by their SOP Class/Instance pair that were used to derive this segment surface.",
            "Zero or more items shall be included in this Sequence."
         ],
         "usage" : "M",
         "req" : "2",
         "mod_tables" : [
            "table_C.8.23-1"
         ],
         "entity" : "Surface",
         "module" : "Surface Segmentation"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0080)" : {
         "name" : "Institution Name",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "entity" : "Surface",
         "module" : "SOP Common"
      },
      "(0018,0015)" : {
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
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
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "Some IODs support the Anatomic Region Sequence (0008,2218), which can provide a more comprehensive mechanism for specifying the body part being examined."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Body Part Examined"
      },
      "(0008,1115)[<0>](0020,000e)" : {
         "mod_tables" : [
            "table_C.12-8"
         ],
         "name" : "Series Instance UID",
         "desc" : "Unique identifier of the Series containing the referenced Instances.",
         "usage" : "C - Required if the surface has been derived from another SOP Instance",
         "req" : "1",
         "module" : "Common Instance Reference",
         "entity" : "Surface"
      },
      "(0040,0254)" : {
         "desc" : "Institution-generated description or classification of the Procedure Step that was performed.",
         "req" : "3",
         "usage" : "M",
         "name" : "Performed Procedure Step Description",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0008,1250)[<0>](0020,000e)" : {
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Series Instance UID",
         "desc" : "Instance UID of Related Series",
         "req" : "1",
         "usage" : "M"
      },
      "(0020,9172)" : {
         "module" : "SOP Common",
         "entity" : "Surface",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "desc" : [
            "The set of images or other composite SOP Instances that were converted to this instance.",
            "If this instance was converted from a specific frame in the source instance, the reference shall include the Frame Number.",
            "One or more Items shall be included in this sequence.",
            "Required if this instance was created by conversion, and Conversion Source Attributes Sequence (0020,9172) is not present in an Item of Shared Functional Groups Sequence (5200,9229) or Per-Frame Functional Groups Sequence (5200,9230)."
         ],
         "req" : "1C",
         "name" : "Conversion Source Attributes Sequence"
      },
      "(0008,0021)" : {
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : "Date the Series started.",
         "req" : "3",
         "usage" : "M",
         "name" : "Series Date"
      },
      "(0008,1072)[<0>](0008,0082)" : {
         "req" : "1C",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "M",
         "name" : "Institution Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0018,1030)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Protocol Name",
         "usage" : "M",
         "desc" : [
            "User-defined description of the conditions under which the Series was performed.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "This attribute conveys series-specific protocol identification and may or may not be identical to the one presented in the Performed Protocol Code Sequence (0040,0260)."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "req" : "3",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0066,0002)[<0>](0066,0035)[<1>](0024,0202)" : {
         "mod_tables" : [
            "table_C.27-1",
            "table_10-19"
         ],
         "usage" : "M",
         "desc" : "Source of the algorithm, e.g., the name of the manufacturer, researcher, university, etc.",
         "req" : "3",
         "name" : "Algorithm Source",
         "module" : "Surface Mesh",
         "entity" : "Surface"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a123)" : {
         "name" : "Person Name",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1155)" : {
         "module" : "Common Instance Reference",
         "entity" : "Surface",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "C - Required if the surface has been derived from another SOP Instance",
         "req" : "1"
      },
      "(0040,0250)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "desc" : "Date on which the Performed Procedure Step ended.",
         "usage" : "M",
         "req" : "3",
         "name" : "Performed Procedure Step End Date",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0066,0002)[<0>](0066,0035)[<1>](0066,0036)" : {
         "module" : "Surface Mesh",
         "entity" : "Surface",
         "mod_tables" : [
            "table_C.27-1",
            "table_10-19"
         ],
         "desc" : "The name assigned by a manufacturer to a specific software algorithm.",
         "req" : "1",
         "usage" : "M",
         "name" : "Algorithm Name"
      },
      "(0018,a001)[<0>](0018,1020)" : {
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
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Surface",
         "module" : "SOP Common"
      },
      "(0066,0002)[<0>](0062,000d)" : {
         "entity" : "Surface",
         "module" : "Surface Mesh",
         "desc" : [
            "A default triplet value in which it is recommended that the surface be rendered on a color display. The units are specified in PCS-Values, and the value is encoded as CIELab.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.10.7.1.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               }
            ]
         ],
         "usage" : "M",
         "req" : "1",
         "name" : "Recommended Display CIELab Value",
         "mod_tables" : [
            "table_C.27-1"
         ]
      },
      "(0012,0030)" : {
         "entity" : "Patient",
         "module" : "Clinical Trial Subject",
         "name" : "Clinical Trial Site ID",
         "usage" : "U",
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
         "req" : "2",
         "mod_tables" : [
            "table_C.7-2b"
         ]
      },
      "(0010,0032)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient's Birth Time",
         "desc" : "Birth time of the Patient.",
         "usage" : "M",
         "req" : "3",
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0008,1062)[<0>](0008,0080)" : {
         "entity" : "Study",
         "module" : "General Study",
         "req" : "1C",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "usage" : "M",
         "name" : "Institution Name",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(fffa,fffa)[<0>](0400,0110)" : {
         "name" : "Certificate Type",
         "usage" : "M",
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
               ],
               "el" : "note"
            }
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Surface",
         "module" : "SOP Common"
      },
      "(0066,0002)[<0>](0066,0011)" : {
         "desc" : [
            "The point positions representing vertices of the surface.",
            "Only a single item shall be included in this sequence."
         ],
         "usage" : "M",
         "req" : "1",
         "name" : "Surface Points Sequence",
         "mod_tables" : [
            "table_C.27-1"
         ],
         "entity" : "Surface",
         "module" : "Surface Mesh"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a168)" : {
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Concept Code Sequence",
         "req" : "1C",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a163)" : {
         "module" : "General Series",
         "entity" : "Series",
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
         "usage" : "M",
         "name" : "Rational Denominator Value"
      },
      "(0070,0086)[<0>](0008,0080)" : {
         "entity" : "Surface",
         "module" : "Surface Segmentation",
         "name" : "Institution Name",
         "req" : "1C",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.23-1",
            "table_10-12",
            "table_10-1"
         ]
      },
      "(0066,0002)[<0>](0066,0011)[<1>](0066,0015)" : {
         "module" : "Surface Mesh",
         "entity" : "Surface",
         "mod_tables" : [
            "table_C.27-1",
            "table_C.27-2"
         ],
         "desc" : [
            "Specifies the number of points in the point set. Shall be less than or equal to 65535, if there are indexes into Points Coordinates Data (0066,0016) that are limited in length. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.27.2.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "usage" : "M",
         "req" : "1",
         "name" : "Number Of Surface Points"
      },
      "(0038,0064)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "req" : "3",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Service Episode ID (0038,0060).",
            "Only a single Item is permitted in this sequence."
         ],
         "usage" : "U",
         "name" : "Issuer of Service Episode ID Sequence",
         "module" : "Patient Study",
         "entity" : "Study"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)" : {
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "name" : "Content Item Modifier Sequence",
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
         "req" : "3"
      },
      "(0066,0002)[<0>](0066,0013)[<1>](0066,0023)" : {
         "entity" : "Surface",
         "module" : "Surface Mesh",
         "name" : "Triangle Point Index List",
         "req" : "2",
         "desc" : [
            "Contains 3n point indices describing unconnected Triangles.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.27.4.1"
                  }
               },
               "."
            ]
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.27-1",
            "table_C.27-4"
         ]
      },
      "(0010,2294)[<0>](0010,2295)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Breed Registration Number",
         "req" : "1",
         "desc" : "Identification number of an animal within the registry.",
         "usage" : "M"
      },
      "(0028,0108)" : {
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : "The minimum value of all images in this Series.",
         "usage" : "M",
         "req" : "3",
         "name" : "Smallest Pixel Value in Series"
      },
      "(0008,0018)" : {
         "entity" : "Surface",
         "module" : "SOP Common",
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
                  "xrefstyle" : "select: labelnumber",
                  "targetptr" : "PS3.4",
                  "targetdoc" : "PS3.4"
               }
            },
            "."
         ],
         "usage" : "M",
         "name" : "SOP Instance UID",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,0051)[<0>](0040,0032)" : {
         "entity" : "Study",
         "module" : "General Study",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C",
         "usage" : "M",
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ]
      },
      "(0008,0096)[<0>](0040,1101)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1",
         "usage" : "M",
         "name" : "Person Identification Code Sequence",
         "module" : "General Study",
         "entity" : "Study"
      },
      "(0066,0002)[<0>](0066,000c)" : {
         "module" : "Surface Mesh",
         "entity" : "Surface",
         "mod_tables" : [
            "table_C.27-1"
         ],
         "name" : "Recommended Presentation Opacity",
         "req" : "1",
         "desc" : [
            "Specifies the opacity in which it is recommended that the surface be rendered.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.27.1.1.3",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0062,000b)" : {
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Referenced Segment Number",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0020,0011)" : [
         {
            "mod_tables" : [
               "table_C.7-5a"
            ],
            "desc" : "A number that identifies this Series.",
            "req" : "2",
            "usage" : "M",
            "name" : "Series Number",
            "module" : "General Series",
            "entity" : "Series"
         },
         {
            "mod_tables" : [
               "table_C.8.20-1"
            ],
            "name" : "Series Number",
            "usage" : "M",
            "desc" : "A number that identifies this Series",
            "req" : "1",
            "module" : "Segmentation Series",
            "entity" : "Series"
         }
      ],
      "(0008,0201)" : {
         "module" : "SOP Common",
         "entity" : "Surface",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Timezone Offset From UTC",
         "req" : "3",
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
                                 "el" : "para",
                                 "content" : [
                                    "This encoding is the same as described in ",
                                    {
                                       "attrs" : {
                                          "xrefstyle" : "select: labelnumber",
                                          "targetptr" : "PS3.5",
                                          "targetdoc" : "PS3.5"
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
         "usage" : "M"
      },
      "(0010,0010)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "2",
         "desc" : "Patient's full name.",
         "usage" : "M",
         "name" : "Patient's Name",
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a043)" : {
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Concept Name Code Sequence",
         "usage" : "M",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1"
      },
      "(0008,0110)[<0>](0008,0115)" : {
         "name" : "Coding Scheme Name",
         "req" : "3",
         "desc" : "The coding scheme full common name",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Surface",
         "module" : "SOP Common"
      },
      "(0062,0002)[<0>](0066,002b)[<1>](0066,002d)[<2>](0066,0031)" : {
         "module" : "Surface Segmentation",
         "entity" : "Surface",
         "mod_tables" : [
            "table_C.8.23-1",
            "table_10-19"
         ],
         "desc" : "The software version identifier assigned by a manufacturer to a specific software algorithm.",
         "usage" : "M",
         "req" : "1",
         "name" : "Algorithm Version"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a30a)" : {
         "name" : "Numeric Value",
         "usage" : "M",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0008,1115)" : {
         "mod_tables" : [
            "table_C.12-8"
         ],
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this sequence.",
            "Required if this Instance references Instances in this Study."
         ],
         "req" : "1C",
         "usage" : "C - Required if the surface has been derived from another SOP Instance",
         "name" : "Referenced Series Sequence",
         "module" : "Common Instance Reference",
         "entity" : "Surface"
      },
      "(0008,0096)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "desc" : [
            "Identification of the patient's referring physician.",
            "Only a single item is permitted in this sequence."
         ],
         "req" : "3",
         "name" : "Referring Physician Identification Sequence",
         "module" : "General Study",
         "entity" : "Study"
      },
      "(4ffe,0001)[<0>](0400,0010)" : {
         "module" : "SOP Common",
         "entity" : "Surface",
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
                     "content" : [
                        "Certain Transfer Syntaxes, particularly those that are used with compressed data, allow the fragmentation of the pixel data to change. If such fragmentation changes, Digital Signatures generated with such Transfer Syntaxes could become invalid."
                     ],
                     "el" : "para"
                  },
                  "\n                    "
               ]
            }
         ],
         "usage" : "M",
         "name" : "MAC Calculation Transfer Syntax UID"
      },
      "(0066,0002)[<0>](0062,000c)" : {
         "req" : "1",
         "desc" : [
            "A default single gray unsigned value in which it is recommended that the maximum pixel value in this surface be rendered on a monochrome display. The units are specified in P-Values from a minimum of 0000H (black) up to a maximum of FFFFH (white).",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "The maximum P-Value for this Attribute may be different from the maximum P-Value from the output of the Presentation LUT, which may be less than 16 bits in depth."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ]
            }
         ],
         "usage" : "M",
         "name" : "Recommended Display Grayscale Value",
         "mod_tables" : [
            "table_C.27-1"
         ],
         "entity" : "Surface",
         "module" : "Surface Mesh"
      },
      "(0008,1111)[<0>](0008,1150)" : [
         {
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-11"
            ],
            "usage" : "M",
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "req" : "1",
            "name" : "Referenced SOP Class UID",
            "module" : "General Series",
            "entity" : "Series"
         },
         {
            "entity" : "Series",
            "module" : "Segmentation Series",
            "name" : "Referenced SOP Class UID",
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "req" : "1",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8.20-1",
               "table_10-11"
            ]
         }
      ],
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1155)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(fffa,fffa)[<0>](0400,0305)" : {
         "module" : "SOP Common",
         "entity" : "Surface",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Certified Timestamp Type",
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
         "req" : "1C"
      },
      "(0062,0002)[<0>](0066,002b)[<1>](0066,002d)[<2>](0066,0032)" : {
         "entity" : "Surface",
         "module" : "Surface Segmentation",
         "req" : "3",
         "desc" : "The input parameters used by a manufacturer to configure the behavior of a specific software algorithm.",
         "usage" : "M",
         "name" : "Algorithm Parameters",
         "mod_tables" : [
            "table_C.8.23-1",
            "table_10-19"
         ]
      },
      "(0018,a001)[<0>](0008,1010)" : {
         "req" : "3",
         "desc" : "User defined name identifying the machine that contributed to the composite instance.",
         "usage" : "M",
         "name" : "Station Name",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Surface",
         "module" : "SOP Common"
      },
      "(0008,0110)" : {
         "name" : "Coding Scheme Identification Sequence",
         "req" : "3",
         "desc" : [
            "Sequence of items that map values of Coding Scheme Designator (0008,0102) to an external coding system registration, or to a private or local coding scheme.",
            "One or more Items are permitted in this sequence."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Surface",
         "module" : "SOP Common"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0062,000b)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Referenced Segment Number",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "req" : "1C",
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0062,0002)[<0>](0066,002b)" : {
         "module" : "Surface Segmentation",
         "entity" : "Surface",
         "mod_tables" : [
            "table_C.8.23-1"
         ],
         "desc" : [
            "Sequence referencing the surfaces composed to construct this segment.",
            "One or more Items shall be included in this sequence.",
            "The number of Items shall equal the value of Surface Count (0066,002A)."
         ],
         "req" : "1",
         "usage" : "M",
         "name" : "Referenced Surface Sequence"
      },
      "(0062,0002)[<0>](0066,002b)[<1>](0066,002d)[<2>](0066,0036)" : {
         "mod_tables" : [
            "table_C.8.23-1",
            "table_10-19"
         ],
         "name" : "Algorithm Name",
         "req" : "1",
         "desc" : "The name assigned by a manufacturer to a specific software algorithm.",
         "usage" : "M",
         "module" : "Surface Segmentation",
         "entity" : "Surface"
      },
      "(0020,000e)" : {
         "name" : "Series Instance UID",
         "desc" : "Unique identifier of the Series.",
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0012,0064)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "desc" : [
            "A code describing the mechanism or method use to remove the patient's identity.",
            "One or more Items shall be included in this sequence. Multiple items are used if successive de-identification steps have been performed or to describe options of a defined profile.",
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method (0012,0063) is not present. May be present otherwise."
         ],
         "req" : "1C",
         "name" : "De-identification Method Code Sequence",
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a121)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "usage" : "M",
         "name" : "Date",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a124)" : {
         "entity" : "Series",
         "module" : "General Series",
         "name" : "UID",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0066,0002)[<0>](0066,0035)" : {
         "mod_tables" : [
            "table_C.27-1"
         ],
         "usage" : "M",
         "desc" : [
            "Describes the processing method.",
            "Zero or one Item shall be included in this sequence.",
            "Required if Surface Processing (0066,0009) is YES."
         ],
         "req" : "2C",
         "name" : "Surface Processing Algorithm Identification Sequence",
         "module" : "Surface Mesh",
         "entity" : "Surface"
      },
      "(0070,0086)[<0>](0008,0082)" : {
         "name" : "Institution Code Sequence",
         "req" : "1C",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.23-1",
            "table_10-12",
            "table_10-1"
         ],
         "entity" : "Surface",
         "module" : "Surface Segmentation"
      },
      "(0400,0561)[<0>](0400,0563)" : {
         "module" : "SOP Common",
         "entity" : "Surface",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Modifying System",
         "desc" : "Identification of the system that removed and/or replaced the attributes.",
         "usage" : "M",
         "req" : "1"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)" : {
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M",
         "desc" : "Sequence that specifies the context for the Scheduled Protocol Code Sequence Item. One or more Items are permitted in this sequence.",
         "req" : "3",
         "name" : "Protocol Context Sequence"
      },
      "(0008,0110)[<0>](0008,0116)" : {
         "entity" : "Surface",
         "module" : "SOP Common",
         "desc" : "Name of the organization responsible for the Coding Scheme. May include organizational contact information.",
         "req" : "3",
         "usage" : "M",
         "name" : "Coding Scheme Responsible Organization",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,103e)" : {
         "entity" : "Series",
         "module" : "General Series",
         "desc" : "Description of the Series",
         "req" : "3",
         "usage" : "M",
         "name" : "Series Description",
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
      "Can't handle table_8.8-1 (in table_C.8.23-1:table_10-12 after (0008,0006))",
      "Can't handle table_8.8-1 (in table_C.8.23-1:table_10-12:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.8.23-1:table_10-12:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.8.23-1:table_C.8.20-4:table_10-7 after (0008,2218))",
      "Can't handle table_8.8-1 (in table_C.8.23-1:table_C.8.20-4:table_10-7 after (0008,2220))",
      "Can't handle table_8.8-1 (in table_C.8.23-1:table_C.8.20-4:table_10-7:table_10-8 after (0008,2228))",
      "Can't handle table_8.8-1 (in table_C.8.23-1:table_C.8.20-4:table_10-7:table_10-8 after (0008,2230))",
      "Can't handle table_8.8-1 (in table_C.8.23-1:table_C.8.20-4 after (0062,0003))",
      "Can't handle table_8.8-1 (in table_C.8.23-1:table_C.8.20-4 after (0062,000F))",
      "Can't handle table_8.8-1 (in table_C.8.23-1:table_C.8.20-4 after (0062,0011))",
      "Can't handle table_8.8-1 (in table_C.8.23-1:table_10-19 after (0066,002F))",
      "Can't handle table_8.8-1 (in table_C.8.23-1:table_10-19 after (0066,0030))",
      "Can't handle table_8.8-1 (in table_C.27-1:table_10-19 after (0066,002F))",
      "Can't handle table_8.8-1 (in table_C.27-1:table_10-19 after (0066,0030))",
      "Can't handle table_8.8-1 (in table_C.12-1 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_C.12-6 after (0400,0401))"
   ]
}