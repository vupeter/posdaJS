var data = {
   "tags" : {
      "(0040,0270)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a162)" : {
         "name" : "Rational Numerator Value",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.4-13",
            "table_10-2"
         ],
         "entity" : "",
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "usage" : "References the related SOPs and IEs.",
         "req" : "1C"
      },
      "(0038,0014)[<0>](0040,0033)" : {
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
         ],
         "mod_tables" : [
            "table_C.4-13",
            "table_10-17"
         ],
         "entity" : "",
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "usage" : "References the related SOPs and IEs.",
         "req" : "1C"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a121)" : {
         "name" : "Date",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "entity" : "",
         "mod_tables" : [
            "table_C.4-15",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "module" : "Image Acquisition Results"
      },
      "(0018,a001)[<0>](0008,0080)" : {
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "desc" : "Institution where the equipment that contributed to the composite instance is located.",
         "name" : "Institution Name"
      },
      "(0040,0243)" : {
         "module" : "Performed Procedure Step Information",
         "usage" : "Includes identifying and status information as well as place and time",
         "req" : "Description of the location at which the Performed Procedure Step was performed.",
         "entity" : "",
         "mod_tables" : [
            "table_C.4-14"
         ],
         "desc" : null,
         "name" : "Performed Location"
      },
      "(4ffe,0001)[<0>](0400,0005)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "",
         "usage" : "Contains SOP common information",
         "req" : "1",
         "module" : "SOP Common",
         "name" : "MAC ID Number",
         "desc" : "A number, unique within this SOP Instance, used to identify this MAC Parameters Sequence (4FFE,0001) item from an Item of the Digital Signatures Sequence (FFFA,FFFA)."
      },
      "(fffa,fffa)[<0>](0400,0115)" : {
         "req" : "1",
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "",
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
                           ],
                           "el" : "listitem"
                        },
                        "\n                        ",
                        {
                           "content" : [
                              "\n                          ",
                              {
                                 "attrs" : {
                                    "xml:id" : "para_2d3ce9c9-555a-4be1-9e6d-e07eb84c4852"
                                 },
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
                     ]
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ],
         "name" : "Certificate of Signer"
      },
      "(0040,0270)[<0>](0032,1064)" : {
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "req" : [
            "A sequence that conveys the Procedure Type of the requested procedure.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "References the related SOPs and IEs.",
         "entity" : "",
         "mod_tables" : [
            "table_C.4-13"
         ],
         "desc" : null,
         "name" : "Requested Procedure Code Sequence"
      },
      "(0010,0024)[<0>](0040,0039)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.4-13",
            "table_10-18"
         ],
         "req" : "3",
         "usage" : "References the related SOPs and IEs.",
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "name" : "Assigning Jurisdiction Code Sequence",
         "desc" : [
            "The geo-political body that assigned the patient identifier. Typically a code for a country or a state/province. Only a single Item is permitted in this Sequence.",
            {
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
               ],
               "el" : "note"
            }
         ]
      },
      "(0040,0253)" : {
         "desc" : null,
         "name" : "Performed Procedure Step ID",
         "module" : "Performed Procedure Step Information",
         "req" : "User or equipment generated identifier of that part of a Procedure that has been carried out within this step.",
         "usage" : "Includes identifying and status information as well as place and time",
         "mod_tables" : [
            "table_C.4-14"
         ],
         "entity" : ""
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0080)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "entity" : "",
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "req" : "1C",
         "name" : "Institution Name",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present."
      },
      "(0040,0270)[<0>](0008,0051)[<1>](0040,0032)" : {
         "req" : "1C",
         "usage" : "References the related SOPs and IEs.",
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "entity" : "",
         "mod_tables" : [
            "table_C.4-13",
            "table_10-17"
         ],
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "name" : "Universal Entity ID"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1160)" : {
         "req" : "1C",
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "module" : "Image Acquisition Results",
         "entity" : "",
         "mod_tables" : [
            "table_C.4-15",
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
                     ],
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
         "name" : "Referenced Frame Number"
      },
      "(4ffe,0001)[<0>](0400,0010)" : {
         "module" : "SOP Common",
         "req" : "1",
         "usage" : "Contains SOP common information",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "",
         "desc" : [
            "The Transfer Syntax UID used to encode the values of the Data Elements included in the MAC calculation. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
            {
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
               ],
               "el" : "note"
            }
         ],
         "name" : "MAC Calculation Transfer Syntax UID"
      },
      "(0040,0270)[<0>](0040,0026)[<1>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "",
         "mod_tables" : [
            "table_C.4-13",
            "table_10-17"
         ],
         "req" : "1C",
         "usage" : "References the related SOPs and IEs.",
         "module" : "Performed Procedure Step Rela\u00adtionship"
      },
      "(0040,0242)" : {
         "name" : "Performed Station Name",
         "desc" : null,
         "mod_tables" : [
            "table_C.4-14"
         ],
         "entity" : "",
         "req" : "An institution defined name for the modality on which the Performed Procedure Step was performed.",
         "usage" : "Includes identifying and status information as well as place and time",
         "module" : "Performed Procedure Step Information"
      },
      "(fffa,fffa)[<0>](0400,0005)" : {
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "req" : "1",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : "A number used to identify which MAC Parameters Sequence item was used in the calculation of this Digital Signature.",
         "name" : "MAC ID Number"
      },
      "(0038,0014)[<0>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.4-13",
            "table_10-17"
         ],
         "entity" : "",
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "req" : "1C",
         "usage" : "References the related SOPs and IEs."
      },
      "(0040,0270)[<0>](0008,1110)[<1>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "usage" : "References the related SOPs and IEs.",
         "req" : "1",
         "mod_tables" : [
            "table_C.4-13",
            "table_10-11"
         ],
         "entity" : ""
      },
      "(0040,0270)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a043)" : {
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Concept Name Code Sequence",
         "usage" : "References the related SOPs and IEs.",
         "req" : "1",
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "entity" : "",
         "mod_tables" : [
            "table_C.4-13",
            "table_10-2"
         ]
      },
      "(0040,8302)" : {
         "module" : "Radiation Dose",
         "usage" : "Contains radiation dose information related to this Per\u00adformed Procedure Step.",
         "req" : [
            "Average entrance dose value measured in mGy at the surface of the patient\u00ad during this Performed Procedure Step.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "This may be an estimated value based on assumptions about the patient's body size and habitus."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_320c486f-9e74-45a9-bb8a-f00ea591b878"
                     }
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "entity" : "",
         "mod_tables" : [
            "table_C.4-16"
         ],
         "desc" : null,
         "name" : "Entrance Dose in mGy"
      },
      "(0040,0241)" : {
         "name" : "Performed Station AE Title",
         "desc" : null,
         "entity" : "",
         "mod_tables" : [
            "table_C.4-14"
         ],
         "module" : "Performed Procedure Step Information",
         "usage" : "Includes identifying and status information as well as place and time",
         "req" : "AE title of the modality on which the Performed Proce\u00addure Step was performed."
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0033)" : {
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
         "entity" : "",
         "mod_tables" : [
            "table_C.4-13",
            "table_10-18",
            "table_10-17"
         ],
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "req" : "1C",
         "usage" : "References the related SOPs and IEs."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a123)" : {
         "name" : "Person Name",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "mod_tables" : [
            "table_C.4-15",
            "table_10-2"
         ],
         "entity" : "",
         "module" : "Image Acquisition Results",
         "req" : "1C",
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions."
      },
      "(0040,0270)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)" : {
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "name" : "Referenced SOP Sequence",
         "req" : "1C",
         "usage" : "References the related SOPs and IEs.",
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "entity" : "",
         "mod_tables" : [
            "table_C.4-13",
            "table_10-2"
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1102)" : {
         "desc" : "Person's mailing address",
         "name" : "Person's Address",
         "req" : "3",
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "entity" : ""
      },
      "(0040,0270)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a163)" : {
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "name" : "Rational Denominator Value",
         "usage" : "References the related SOPs and IEs.",
         "req" : "1C",
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "entity" : "",
         "mod_tables" : [
            "table_C.4-13",
            "table_10-2"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0062,000b)" : {
         "req" : "1C",
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "module" : "Image Acquisition Results",
         "mod_tables" : [
            "table_C.4-15",
            "table_10-2"
         ],
         "entity" : "",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "name" : "Referenced Segment Number"
      },
      "(0008,1032)" : {
         "name" : "Procedure Code Sequence",
         "desc" : null,
         "entity" : "",
         "mod_tables" : [
            "table_C.4-14"
         ],
         "module" : "Performed Procedure Step Information",
         "req" : [
            "A sequence that conveys the (single) type of procedure performed.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "Includes identifying and status information as well as place and time"
      },
      "(0040,0340)[<0>](0040,0220)[<1>](0008,1150)" : {
         "mod_tables" : [
            "table_C.4-15",
            "table_10-11"
         ],
         "entity" : "",
         "module" : "Image Acquisition Results",
         "req" : "1",
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0008,0300)[<0>](0008,0303)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "req" : "1",
         "name" : "Block Identifying Information Status",
         "desc" : [
            [
               "Specifies whether some or all of the Private Data Elements in the block are safe from identity leakage as defined by ",
               {
                  "attrs" : {
                     "targetdoc" : "PS3.15",
                     "targetptr" : "sect_E.3.10",
                     "xrefstyle" : "template:PS3.15 Section %n %t"
                  },
                  "el" : "olink"
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
         ]
      },
      "(0040,0270)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a120)" : {
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "name" : "DateTime",
         "usage" : "References the related SOPs and IEs.",
         "req" : "1C",
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "mod_tables" : [
            "table_C.4-13",
            "table_10-2"
         ],
         "entity" : ""
      },
      "(0040,0340)[<0>](0008,1140)[<1>](0040,0560)[<2>](0040,0551)" : {
         "mod_tables" : [
            "table_C.4-15"
         ],
         "entity" : "",
         "req" : "A departmental information system identifier for the Specimen.",
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "module" : "Image Acquisition Results",
         "name" : "Specimen Identifier",
         "desc" : null
      },
      "(0038,0062)" : {
         "name" : "Service Episode Description",
         "desc" : null,
         "mod_tables" : [
            "table_C.4-13"
         ],
         "entity" : "",
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "req" : "Description of the type of service episode.",
         "usage" : "References the related SOPs and IEs."
      },
      "(0040,0270)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1160)" : {
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
                     ],
                     "attrs" : {
                        "xml:id" : "para_e06e8e0c-e051-4fbc-bfa9-82d4a32dd706"
                     }
                  },
                  "\n              "
               ]
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "entity" : "",
         "mod_tables" : [
            "table_C.4-13",
            "table_10-2"
         ],
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "req" : "1C",
         "usage" : "References the related SOPs and IEs."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a043)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.4-15",
            "table_10-2"
         ],
         "req" : "1",
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "module" : "Image Acquisition Results",
         "name" : "Concept Name Code Sequence",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0400,0561)[<0>](0400,0550)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "req" : "1",
         "name" : "Modified Attributes Sequence",
         "desc" : [
            "Sequence that contains all the Attributes, with their previous values, that were modified or removed from the main data set.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0040,0280)" : {
         "name" : "Comments on the Performed Procedure Step",
         "desc" : null,
         "mod_tables" : [
            "table_C.4-14"
         ],
         "entity" : "",
         "req" : "User-defined comments on the Performed Procedure Step.",
         "usage" : "Includes identifying and status information as well as place and time",
         "module" : "Performed Procedure Step Information"
      },
      "(0040,030e)[<0>](0018,1160)" : {
         "desc" : null,
         "name" : "Filter Type",
         "module" : "Radiation Dose",
         "req" : [
            "Type of filter(s) inserted into the X-Ray beam (e.g., wedges). See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.7.10",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " and ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.15.3.9",
                  "xrefstyle" : "select: label"
               }
            },
            " (for enhanced CT) for Defined Terms."
         ],
         "usage" : "Contains radiation dose information related to this Per\u00adformed Procedure Step.",
         "mod_tables" : [
            "table_C.4-16"
         ],
         "entity" : ""
      },
      "(0040,0320)" : {
         "req" : [
            "Contains billing codes for the Procedure Type performed within the Procedure Step.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "usage" : "Contains codes for billing and material management.",
         "module" : "Billing and Material Management Codes",
         "entity" : "",
         "mod_tables" : [
            "table_C.4-17"
         ],
         "desc" : null,
         "name" : "Billing Procedure Step Sequence"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)" : {
         "name" : "Content Item Modifier Sequence",
         "desc" : null,
         "mod_tables" : [
            "table_C.4-15"
         ],
         "entity" : "",
         "module" : "Image Acquisition Results",
         "req" : [
            "Sequence that specifies modifiers for a Protocol Context Content Item.",
            "One or more Items shall be included in this Sequence.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.4.10.1",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ]
         ],
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions."
      },
      "(0040,0340)[<0>](0008,1140)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.4-15"
         ],
         "module" : "Image Acquisition Results",
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "req" : [
            "A Sequence that provides reference to Composite SOP Instances created during the acquisition of the procedure step.",
            "Zero or more Items shall be included in this Sequence.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "attrs" : {
                        "xml:id" : "para_0f9d12a4-199b-498e-b0bd-7d133fbfb297"
                     },
                     "content" : [
                        "The use of Referenced Image Sequence is historical, and in this context it allows the reference of any Composite SOP Instance."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "name" : "Referenced Image Sequence",
         "desc" : null
      },
      "(0008,0123)" : {
         "desc" : [
            "Sequence of items that map values of Context Identifier (0008,010F) to an external, private or local Context Group.",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Context Group Identification Sequence",
         "req" : "3",
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : ""
      },
      "(0018,1110)" : {
         "mod_tables" : [
            "table_C.4-16"
         ],
         "entity" : "",
         "module" : "Radiation Dose",
         "req" : [
            "Distance in mm from the source to detector center.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "This value is traditionally referred to as Source Image Receptor Distance (SID)."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_5579b837-25e1-490a-a24c-05ca3c296a39"
                     }
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "usage" : "Contains radiation dose information related to this Per\u00adformed Procedure Step.",
         "name" : "Distance Source to Detector",
         "desc" : null
      },
      "(0008,0005)" : {
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "req" : "1C"
      },
      "(0040,0270)[<0>](0008,1110)[<1>](0008,1155)" : {
         "mod_tables" : [
            "table_C.4-13",
            "table_10-11"
         ],
         "entity" : "",
         "req" : "1",
         "usage" : "References the related SOPs and IEs.",
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0020,0010)" : {
         "desc" : null,
         "name" : "Study ID",
         "module" : "Image Acquisition Results",
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "req" : "User or equipment generated Study Identifier.",
         "mod_tables" : [
            "table_C.4-15"
         ],
         "entity" : ""
      },
      "(0040,030e)[<0>](0018,115a)" : {
         "module" : "Radiation Dose",
         "usage" : "Contains radiation dose information related to this Per\u00adformed Procedure Step.",
         "req" : [
            "Specifies X-Ray radiation mode.",
            {
               "list" : [
                  [
                     "CONTINUOUS",
                     null
                  ],
                  [
                     "PULSED",
                     null
                  ]
               ],
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "mod_tables" : [
            "table_C.4-16"
         ],
         "entity" : "",
         "desc" : null,
         "name" : "Radiation Mode"
      },
      "(0008,0110)[<0>](0008,0115)" : {
         "name" : "Coding Scheme Name",
         "desc" : "The coding scheme full common name",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP common information",
         "req" : "3",
         "module" : "SOP Common"
      },
      "(0040,0270)[<0>](0040,0008)[<1>](0040,0440)" : {
         "name" : "Protocol Context Sequence",
         "desc" : null,
         "entity" : "",
         "mod_tables" : [
            "table_C.4-13"
         ],
         "req" : [
            "Sequence that specifies the context for the Scheduled Protocol Code Sequence Item.",
            "One or more Items shall be included in this Sequence.",
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
         "usage" : "References the related SOPs and IEs.",
         "module" : "Performed Procedure Step Rela\u00adtionship"
      },
      "(0008,0300)[<0>](0008,0305)" : {
         "desc" : "Actions to be performed on element within the block that are not safe from identify leakage.",
         "name" : "Deidentification Action Sequence",
         "req" : "3",
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : ""
      },
      "(0018,9004)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "name" : "Content Qualification",
         "desc" : [
            "Content Qualification Indicator",
            {
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
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
         ]
      },
      "(0008,0201)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "usage" : "Contains SOP common information",
         "req" : "3",
         "module" : "SOP Common",
         "name" : "Timezone Offset From UTC",
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
                           ]
                        },
                        "\n                    ",
                        {
                           "content" : [
                              "\n                      ",
                              {
                                 "attrs" : {
                                    "xml:id" : "para_155b097e-395f-4748-981c-0255b00fe9a8"
                                 },
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
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_1ab95f54-00ed-4128-a3f9-96f3f05669d0"
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
                                 "content" : [
                                    "The \"+\" sign may not be omitted."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_6500ab52-60e5-4f8a-a3e5-fcedc8ddc8fc"
                                 }
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
            "Time earlier than UTC is expressed as a negative offset.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "content" : [
                        "For example:"
                     ],
                     "attrs" : {
                        "xml:id" : "para_5346ad4e-84cd-47ed-bc69-c2b41005345d"
                     }
                  },
                  "\n                  ",
                  {
                     "attrs" : {
                        "xml:id" : "para_a41cecaa-0d35-48a8-b71a-99ab42511778"
                     },
                     "content" : [
                        "UTC = 5.00 a.m."
                     ],
                     "el" : "para"
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
         ]
      },
      "(0040,0340)[<0>](0008,1052)[<1>](0040,1102)" : {
         "desc" : "Person's mailing address",
         "name" : "Person's Address",
         "module" : "Image Acquisition Results",
         "req" : "3",
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "entity" : "",
         "mod_tables" : [
            "table_C.4-15",
            "table_10-1"
         ]
      },
      "(fffa,fffa)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "",
         "req" : "3",
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "name" : "Digital Signatures Sequence",
         "desc" : [
            "Sequence holding Digital Signatures.",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a161)" : {
         "name" : "Floating Point Value",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.4-15",
            "table_10-2"
         ],
         "entity" : "",
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "req" : "1C",
         "module" : "Image Acquisition Results"
      },
      "(0040,0270)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a120)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.4-13",
            "table_10-2"
         ],
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "req" : "1C",
         "usage" : "References the related SOPs and IEs.",
         "name" : "DateTime",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ]
      },
      "(0040,0301)" : {
         "desc" : null,
         "name" : "Total Number of Exposures",
         "module" : "Radiation Dose",
         "req" : "Total number of exposures made during this Performed Procedure Step. The number includes non-digital and digital expo\u00adsures.",
         "usage" : "Contains radiation dose information related to this Per\u00adformed Procedure Step.",
         "entity" : "",
         "mod_tables" : [
            "table_C.4-16"
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0081)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "Contains SOP common information",
         "req" : "3",
         "module" : "SOP Common",
         "name" : "Institution Address",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable."
      },
      "(0018,a001)[<0>](0018,1050)" : {
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "name" : "Spatial Resolution",
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "Contains SOP common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : ""
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0032)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.4-13",
            "table_10-18",
            "table_10-17"
         ],
         "req" : "1C",
         "usage" : "References the related SOPs and IEs.",
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "name" : "Universal Entity ID",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise."
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0082)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "entity" : "",
         "usage" : "Contains SOP common information",
         "req" : "1C",
         "module" : "SOP Common",
         "name" : "Institution Code Sequence",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0008,0110)[<0>](0008,0116)" : {
         "desc" : "Name of the organization responsible for the Coding Scheme. May include organizational contact information.",
         "name" : "Coding Scheme Responsible Organization",
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "Contains SOP common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : ""
      },
      "(0008,0018)" : {
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
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
               "el" : "olink",
               "attrs" : {
                  "targetdoc" : "PS3.4",
                  "targetptr" : "PS3.4",
                  "xrefstyle" : "select: labelnumber"
               }
            },
            "."
         ],
         "name" : "SOP Instance UID"
      },
      "(fffa,fffa)[<0>](0400,0105)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "req" : "1",
         "usage" : "Contains SOP common information",
         "name" : "Digital Signature DateTime",
         "desc" : [
            "The date and time the Digital Signature was created. The time shall include an offset (i.e., time zone indication) from Coordinated Universal Time.",
            {
               "content" : [
                  "\n                      ",
                  {
                     "el" : "para",
                     "content" : [
                        "This is not a certified timestamp, and hence is not completely verifiable. An application can compare this date and time with those of other signatures and the validity date of the certificate to gain confidence in the veracity of this date and time."
                     ],
                     "attrs" : {
                        "xml:id" : "para_2c2ebaf6-e26c-4bf5-b5dd-cb4e0ed2cd56"
                     }
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ]
      },
      "(0040,0270)[<0>](0008,1110)" : {
         "desc" : null,
         "name" : "Referenced Study Sequence",
         "usage" : "References the related SOPs and IEs.",
         "req" : [
            "Uniquely identifies the Study SOP Instance associated with this Scheduled Procedure Step.",
            "Only a single Item shall be included in this Sequence.",
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
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "mod_tables" : [
            "table_C.4-13"
         ],
         "entity" : ""
      },
      "(0040,0340)[<0>](0008,1140)[<1>](0040,0560)[<2>](0040,0554)" : {
         "module" : "Image Acquisition Results",
         "req" : "Unique identifier for the Specimen.",
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "entity" : "",
         "mod_tables" : [
            "table_C.4-15"
         ],
         "desc" : null,
         "name" : "Specimen UID"
      },
      "(0018,a001)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
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
      "(0040,0340)[<0>](0008,0054)" : {
         "desc" : null,
         "name" : "Retrieve AE Title",
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "req" : [
            "Title of the DICOM Application Entity where the Images and other Composite SOP Instances in this Series may be retrieved on the network.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "The duration for which this location remains valid is unspecified."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_97cfeca3-5774-44e8-94db-f5530314301d"
                     }
                  },
                  "\n                "
               ]
            }
         ],
         "module" : "Image Acquisition Results",
         "mod_tables" : [
            "table_C.4-15"
         ],
         "entity" : ""
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1150)" : {
         "mod_tables" : [
            "table_C.4-15",
            "table_10-2",
            "table_10-11"
         ],
         "entity" : "",
         "module" : "Image Acquisition Results",
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a043)" : {
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "req" : "1",
         "module" : "Image Acquisition Results",
         "entity" : "",
         "mod_tables" : [
            "table_C.4-15",
            "table_10-2"
         ],
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Concept Name Code Sequence"
      },
      "(0040,0340)[<0>](0008,1052)[<1>](0008,0082)" : {
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Institution Code Sequence",
         "module" : "Image Acquisition Results",
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "req" : "1C",
         "mod_tables" : [
            "table_C.4-15",
            "table_10-1"
         ],
         "entity" : ""
      },
      "(0020,9172)" : {
         "desc" : [
            "The set of images or other composite SOP Instances that were converted to this instance.",
            "If this instance was converted from a specific frame in the source instance, the reference shall include the Frame Number.",
            "One or more Items shall be included in this Sequence.",
            "Required if this instance was created by conversion, and Conversion Source Attributes Sequence (0020,9172) is not present in an Item of Shared Functional Groups Sequence (5200,9229) or Per-Frame Functional Groups Sequence (5200,9230)."
         ],
         "name" : "Conversion Source Attributes Sequence",
         "module" : "SOP Common",
         "req" : "1C",
         "usage" : "Contains SOP common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : ""
      },
      "(0040,0303)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.4-16"
         ],
         "usage" : "Contains radiation dose information related to this Per\u00adformed Procedure Step.",
         "req" : [
            "Typical dimension of the exposed area at the detector plane. If Rectangular: row dimension followed by column; if Round: diameter. Measured in mm.",
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
                                    "This may be an estimated value based on assumptions about the patient's body size and habitus."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_5391d83b-d335-48f9-acda-732ecd02de7d"
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
                                 "content" : [
                                    "This attribute is used in the ",
                                    {
                                       "el" : "xref",
                                       "attrs" : {
                                          "xrefstyle" : "select: title",
                                          "linkend" : "sect_C.8.7.8"
                                       }
                                    },
                                    " with units in cm (see ",
                                    {
                                       "attrs" : {
                                          "xrefstyle" : "select: label",
                                          "linkend" : "sect_C.8.7.8"
                                       },
                                       "el" : "xref"
                                    },
                                    ", ",
                                    {
                                       "attrs" : {
                                          "linkend" : "table_C.8-33",
                                          "xrefstyle" : "select: label quotedtitle"
                                       },
                                       "el" : "xref"
                                    },
                                    ")."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_6e72d2ea-3c0e-44fe-a380-ccc6da94ae1c"
                                 }
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
            }
         ],
         "module" : "Radiation Dose",
         "name" : "Exposed Area",
         "desc" : null
      },
      "(0008,0300)[<0>](0008,0302)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP common information",
         "req" : "1",
         "module" : "SOP Common",
         "name" : "Private Creator Reference",
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
                     "content" : [
                        "Private blocks are identified by their Private Creator Data Element value,\n                    rather than their numeric block number, since instances may be modified and\n                    numeric block numbers reassigned but the Private Creator Data Element value,\n                    which is required to be unique within a Group of Private Data Elements, will be\n                    preserved."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ]
            }
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a162)" : {
         "mod_tables" : [
            "table_C.4-15",
            "table_10-2"
         ],
         "entity" : "",
         "module" : "Image Acquisition Results",
         "req" : "1C",
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "name" : "Rational Numerator Value",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ]
      },
      "(0038,0014)" : {
         "name" : "Issuer of Admission ID Sequence",
         "desc" : null,
         "entity" : "",
         "mod_tables" : [
            "table_C.4-13"
         ],
         "req" : [
            "Identifier of the Assigning Authority that issued the Admission ID.",
            "Only a single Item shall be included in this sequence."
         ],
         "usage" : "References the related SOPs and IEs.",
         "module" : "Performed Procedure Step Rela\u00adtionship"
      },
      "(0010,0010)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.4-13"
         ],
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "req" : "Patient's full legal name.",
         "usage" : "References the related SOPs and IEs.",
         "name" : "Patient's Name",
         "desc" : null
      },
      "(0040,0270)" : {
         "mod_tables" : [
            "table_C.4-13"
         ],
         "entity" : "",
         "req" : [
            "Sequence containing attributes that are related to the scheduling of the Procedure Step.",
            "One or more Items shall be included in this Sequence."
         ],
         "usage" : "References the related SOPs and IEs.",
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "name" : "Scheduled Step Attributes Sequence",
         "desc" : null
      },
      "(0100,0410)" : {
         "name" : "SOP Instance Status",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_b6227994-ee87-4d4f-9ba4-c3a82f2a705d"
                     }
                  },
                  "\n                "
               ]
            }
         ],
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP common information",
         "req" : "3",
         "module" : "SOP Common"
      },
      "(0040,0270)[<0>](0040,0026)[<1>](0040,0033)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.4-13",
            "table_10-17"
         ],
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "usage" : "References the related SOPs and IEs.",
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
         ]
      },
      "(0018,a001)[<0>](0008,1040)" : {
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "Contains SOP common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "desc" : "Department in the institution where the equipment that contributed to the composite instance is located.",
         "name" : "Institutional Department Name"
      },
      "(0040,0340)[<0>](0008,1140)[<1>](0040,0512)" : {
         "mod_tables" : [
            "table_C.4-15"
         ],
         "entity" : "",
         "module" : "Image Acquisition Results",
         "req" : "The identifier for the container that contains the specimen(s) imaged.",
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "name" : "Container Identifier",
         "desc" : null
      },
      "(0040,0321)[<0>](2100,0170)" : {
         "desc" : null,
         "name" : "Number of Films",
         "req" : "Number of films actually printed.",
         "usage" : "Contains codes for billing and material management.",
         "module" : "Billing and Material Management Codes",
         "mod_tables" : [
            "table_C.4-17"
         ],
         "entity" : ""
      },
      "(0040,1012)" : {
         "req" : [
            "Coded reason(s) for performing this procedure.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "content" : [
                        "May differ from the values in Reason for the Requested Procedure (0040,100A) in Request Attribute Sequence (0040,0275), for example if what was performed differs from what was requested."
                     ],
                     "attrs" : {
                        "xml:id" : "para_9abda7d0-9fe5-4054-a85b-cac11b34a22f"
                     }
                  },
                  "\n                "
               ],
               "el" : "note"
            },
            "One or more Items shall be included in this Sequence."
         ],
         "usage" : "Includes identifying and status information as well as place and time",
         "module" : "Performed Procedure Step Information",
         "entity" : "",
         "mod_tables" : [
            "table_C.4-14"
         ],
         "desc" : null,
         "name" : "Reason For Performed Procedure Code Sequence"
      },
      "(0010,0020)" : {
         "name" : "Patient ID",
         "desc" : null,
         "entity" : "",
         "mod_tables" : [
            "table_C.4-13"
         ],
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "usage" : "References the related SOPs and IEs.",
         "req" : [
            "Primary identifier for the patient.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "attrs" : {
                        "xml:id" : "para_320dd490-16f9-43dc-8183-6f8ed4d2119f"
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
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ]
      },
      "(0040,0270)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0062,000b)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.4-13",
            "table_10-2"
         ],
         "usage" : "References the related SOPs and IEs.",
         "req" : "1C",
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "name" : "Referenced Segment Number",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ]
      },
      "(0040,0270)[<0>](0040,0026)" : {
         "desc" : null,
         "name" : "Order Placer Identifier Sequence",
         "usage" : "References the related SOPs and IEs.",
         "req" : [
            "Identifier of the Assigning Authority that issued the Placer Order Number.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "mod_tables" : [
            "table_C.4-13"
         ],
         "entity" : ""
      },
      "(0040,0340)[<0>](0008,1052)[<1>](0040,1104)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.4-15",
            "table_10-1"
         ],
         "module" : "Image Acquisition Results",
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
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
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)" : {
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "name" : "Referenced SOP Sequence",
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "req" : "1C",
         "module" : "Image Acquisition Results",
         "entity" : "",
         "mod_tables" : [
            "table_C.4-15",
            "table_10-2"
         ]
      },
      "(0040,0340)[<0>](0008,1050)" : {
         "name" : "Performing Physician's Name",
         "desc" : null,
         "entity" : "",
         "mod_tables" : [
            "table_C.4-15"
         ],
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "req" : "Name of the physician(s) administering this Series.",
         "module" : "Image Acquisition Results"
      },
      "(0400,0561)[<0>](0400,0563)" : {
         "desc" : "Identification of the system that removed and/or replaced the attributes.",
         "name" : "Modifying System",
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "req" : "1",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1155)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.4-15",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "Image Acquisition Results",
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0040,0321)[<0>](2000,0030)" : {
         "module" : "Billing and Material Management Codes",
         "usage" : "Contains codes for billing and material management.",
         "req" : [
            "Type(s) of medium on which images were printed. For Defined Terms see ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "table_C.13-1"
               }
            },
            "."
         ],
         "mod_tables" : [
            "table_C.4-17"
         ],
         "entity" : "",
         "desc" : null,
         "name" : "Medium Type"
      },
      "(0040,0270)[<0>](0040,0027)[<1>](0040,0031)" : {
         "mod_tables" : [
            "table_C.4-13",
            "table_10-17"
         ],
         "entity" : "",
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "usage" : "References the related SOPs and IEs.",
         "req" : "1C",
         "name" : "Local Namespace Entity ID",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise."
      },
      "(0040,0270)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a168)" : {
         "usage" : "References the related SOPs and IEs.",
         "req" : "1C",
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "mod_tables" : [
            "table_C.4-13",
            "table_10-2"
         ],
         "entity" : "",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "name" : "Concept Code Sequence"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a121)" : {
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "name" : "Date",
         "module" : "Image Acquisition Results",
         "req" : "1C",
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "mod_tables" : [
            "table_C.4-15",
            "table_10-2"
         ],
         "entity" : ""
      },
      "(0010,0024)[<0>](0040,0036)" : {
         "mod_tables" : [
            "table_C.4-13",
            "table_10-18"
         ],
         "entity" : "",
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "usage" : "References the related SOPs and IEs.",
         "req" : "3",
         "name" : "Assigning Facility Sequence",
         "desc" : [
            "The place or location identifier where the identifier was first assigned to the patient. This component is not an inherent part of the identifier but rather part of the history of the identifier.",
            "Only a single Item is permitted in this Sequence.",
            {
               "content" : [
                  "\n                ",
                  {
                     "attrs" : {
                        "xml:id" : "para_6a16f809-6605-41ac-8d02-b6104b0bc0ad"
                     },
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
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1103)" : {
         "req" : "3",
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "desc" : "Person's telephone number(s)",
         "name" : "Person's Telephone Numbers"
      },
      "(0040,0270)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.4-13",
            "table_10-2",
            "table_10-11"
         ],
         "entity" : "",
         "req" : "1",
         "usage" : "References the related SOPs and IEs.",
         "module" : "Performed Procedure Step Rela\u00adtionship"
      },
      "(0040,0270)[<0>](0040,0007)" : {
         "mod_tables" : [
            "table_C.4-13"
         ],
         "entity" : "",
         "req" : "Institution-generated description or classification of the Scheduled Procedure Step to be performed.",
         "usage" : "References the related SOPs and IEs.",
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "name" : "Scheduled Procedure Step Description",
         "desc" : null
      },
      "(0040,0245)" : {
         "req" : [
            "Time at which the Performed Procedure Step started.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "attrs" : {
                        "xml:id" : "para_db44b735-9026-4ae1-8436-ae7967323959"
                     },
                     "content" : [
                        "This value may be used to determine the earliest time to use as Study Time (0008,0030) in composite instances and in updated Modality Scheduled Procedure Steps in order to allow Study level attributes to have consistent values if additional Procedure Steps are performed."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ]
            }
         ],
         "usage" : "Includes identifying and status information as well as place and time",
         "module" : "Performed Procedure Step Information",
         "entity" : "",
         "mod_tables" : [
            "table_C.4-14"
         ],
         "desc" : null,
         "name" : "Performed Procedure Step Start Time"
      },
      "(0040,0340)[<0>](0008,1072)[<1>](0040,1103)" : {
         "name" : "Person's Telephone Numbers",
         "desc" : "Person's telephone number(s)",
         "mod_tables" : [
            "table_C.4-15",
            "table_10-1"
         ],
         "entity" : "",
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "req" : "3",
         "module" : "Image Acquisition Results"
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
                     ]
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "name" : "Person's Telecom Information",
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "req" : "3",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ]
      },
      "(0100,0420)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "req" : "3",
         "name" : "SOP Authorization DateTime",
         "desc" : "The date and time when the SOP Instance Status (0100,0410) was set to AO."
      },
      "(0010,0034)" : {
         "desc" : null,
         "name" : "Patient's Death Date in Alternative Calendar",
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "usage" : "References the related SOPs and IEs.",
         "req" : [
            "Date of death of the named patient in the Alternative Calendar (0010,0035).",
            {
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "No format is specified for alternative calendar dates so none should be assumed."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_704e3ee4-69ca-412e-bc8f-bdaca7c9709c"
                     }
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "entity" : "",
         "mod_tables" : [
            "table_C.4-13"
         ]
      },
      "(0040,0340)[<0>](0008,1072)[<1>](0040,1102)" : {
         "desc" : "Person's mailing address",
         "name" : "Person's Address",
         "module" : "Image Acquisition Results",
         "req" : "3",
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "entity" : "",
         "mod_tables" : [
            "table_C.4-15",
            "table_10-1"
         ]
      },
      "(fffa,fffa)[<0>](0400,0310)" : {
         "usage" : "Contains SOP common information",
         "req" : "3",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "",
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
         "name" : "Certified Timestamp"
      },
      "(0008,0300)[<0>](0008,0304)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP common information",
         "req" : "1C",
         "module" : "SOP Common",
         "name" : "Nonidentifying Private Elements",
         "desc" : [
            "List of Private Data Elements in block that do not contain identifying\n                  information (are safe from identity leakage).",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once.",
            "Required if Block Identifying Information Status (0008,0303) equals MIXED."
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a124)" : {
         "module" : "Image Acquisition Results",
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "req" : "1C",
         "entity" : "",
         "mod_tables" : [
            "table_C.4-15",
            "table_10-2"
         ],
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "name" : "UID"
      },
      "(0040,0270)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a163)" : {
         "mod_tables" : [
            "table_C.4-13",
            "table_10-2"
         ],
         "entity" : "",
         "usage" : "References the related SOPs and IEs.",
         "req" : "1C",
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "name" : "Rational Denominator Value",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ]
      },
      "(0040,0270)[<0>](0040,0027)[<1>](0040,0033)" : {
         "req" : "1C",
         "usage" : "References the related SOPs and IEs.",
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "mod_tables" : [
            "table_C.4-13",
            "table_10-17"
         ],
         "entity" : "",
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
      "(0040,0340)[<0>](0008,1052)" : {
         "req" : [
            "Identification of the physician(s) administering the Series.",
            "One or more Items shall be included in this Sequence. If more than one Item, the number and order shall correspond to the value of Performing Physician's Name (0008,1050), if present."
         ],
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "module" : "Image Acquisition Results",
         "entity" : "",
         "mod_tables" : [
            "table_C.4-15"
         ],
         "desc" : null,
         "name" : "Performing Physician Identification Sequence"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a168)" : {
         "name" : "Concept Code Sequence",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "entity" : "",
         "mod_tables" : [
            "table_C.4-15",
            "table_10-2"
         ],
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "req" : "1C",
         "module" : "Image Acquisition Results"
      },
      "(0040,0340)[<0>](0008,1072)[<1>](0040,1101)" : {
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "req" : "1",
         "module" : "Image Acquisition Results",
         "mod_tables" : [
            "table_C.4-15",
            "table_10-1"
         ],
         "entity" : "",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Person Identification Code Sequence"
      },
      "(0040,0250)" : {
         "desc" : null,
         "name" : "Performed Procedure Step End Date",
         "module" : "Performed Procedure Step Information",
         "req" : "Date on which the Performed Procedure Step ended.",
         "usage" : "Includes identifying and status information as well as place and time",
         "entity" : "",
         "mod_tables" : [
            "table_C.4-14"
         ]
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
                        "xml:id" : "para_fe92f60f-2615-4c9b-bab0-86d640bd9af4"
                     }
                  },
                  "\n                    "
               ]
            }
         ],
         "name" : "Certificate Type",
         "usage" : "Contains SOP common information",
         "req" : "1",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : ""
      },
      "(0018,a001)[<0>](0018,a002)" : {
         "name" : "Contribution DateTime",
         "desc" : "The Date & Time when the equipment contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "usage" : "Contains SOP common information",
         "req" : "3",
         "module" : "SOP Common"
      },
      "(0008,0053)" : {
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "req" : "1C",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "name" : "Query/Retrieve View"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a163)" : {
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "req" : "1C",
         "module" : "Image Acquisition Results",
         "mod_tables" : [
            "table_C.4-15",
            "table_10-2"
         ],
         "entity" : "",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "name" : "Rational Denominator Value"
      },
      "(0040,a390)[<0>](0040,e001)" : {
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "desc" : "Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
         "name" : "HL7 Instance Identifier"
      },
      "(0040,0270)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a123)" : {
         "name" : "Person Name",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "entity" : "",
         "mod_tables" : [
            "table_C.4-13",
            "table_10-2"
         ],
         "usage" : "References the related SOPs and IEs.",
         "req" : "1C",
         "module" : "Performed Procedure Step Rela\u00adtionship"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a124)" : {
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "req" : "1C",
         "module" : "Image Acquisition Results",
         "entity" : "",
         "mod_tables" : [
            "table_C.4-15",
            "table_10-2"
         ],
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "name" : "UID"
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
         "name" : "Software Versions",
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : ""
      },
      "(4ffe,0001)" : {
         "desc" : [
            "A sequence of items that describe the parameters used to calculate a MAC for use in Digital Signatures.",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "MAC Parameters Sequence",
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "req" : "3",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0040,0340)[<0>](0008,1052)[<1>](0040,1101)" : {
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Person Identification Code Sequence",
         "module" : "Image Acquisition Results",
         "req" : "1",
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "entity" : "",
         "mod_tables" : [
            "table_C.4-15",
            "table_10-1"
         ]
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0031)" : {
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "req" : "1C",
         "usage" : "References the related SOPs and IEs.",
         "entity" : "",
         "mod_tables" : [
            "table_C.4-13",
            "table_10-18",
            "table_10-17"
         ],
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "name" : "Local Namespace Entity ID"
      },
      "(0018,a001)[<0>](0018,1201)" : {
         "usage" : "Contains SOP common information",
         "req" : "3",
         "module" : "SOP Common",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
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
         "name" : "Time of Last Calibration"
      },
      "(0040,0270)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a168)" : {
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "name" : "Concept Code Sequence",
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "usage" : "References the related SOPs and IEs.",
         "req" : "1C",
         "entity" : "",
         "mod_tables" : [
            "table_C.4-13",
            "table_10-2"
         ]
      },
      "(0040,0260)" : {
         "desc" : null,
         "name" : "Performed Protocol Code Sequence",
         "module" : "Image Acquisition Results",
         "req" : [
            "Sequence describing the Protocol performed for this Procedure Step.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "entity" : "",
         "mod_tables" : [
            "table_C.4-15"
         ]
      },
      "(0018,a001)[<0>](0008,1072)" : {
         "req" : "3",
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "desc" : [
            "Identification of the operator(s) of the contributing equipment.",
            "One or more Items are permitted in this Sequence.",
            "The number and order of Items shall correspond to the number and order of values of Operators' Name (0008,1070), if present."
         ],
         "name" : "Operator Identification Sequence"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a160)" : {
         "name" : "Text Value",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "entity" : "",
         "mod_tables" : [
            "table_C.4-15",
            "table_10-2"
         ],
         "module" : "Image Acquisition Results",
         "req" : "1C",
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions."
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
      "(0040,0270)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a040)" : {
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
         "mod_tables" : [
            "table_C.4-13",
            "table_10-2"
         ],
         "entity" : "",
         "usage" : "References the related SOPs and IEs.",
         "req" : "1",
         "module" : "Performed Procedure Step Rela\u00adtionship"
      },
      "(0040,0270)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a161)" : {
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "usage" : "References the related SOPs and IEs.",
         "req" : "1C",
         "entity" : "",
         "mod_tables" : [
            "table_C.4-13",
            "table_10-2"
         ],
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "name" : "Floating Point Value"
      },
      "(0040,0270)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a122)" : {
         "mod_tables" : [
            "table_C.4-13",
            "table_10-2"
         ],
         "entity" : "",
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "usage" : "References the related SOPs and IEs.",
         "req" : "1C",
         "name" : "Time",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ]
      },
      "(0400,0561)" : {
         "desc" : [
            "Sequence of Items containing all attributes that were removed or replaced by other values in the main data set.",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Original Attributes Sequence",
         "req" : "3",
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0340)[<0>](0020,000e)" : {
         "desc" : null,
         "name" : "Series Instance UID",
         "module" : "Image Acquisition Results",
         "req" : "Unique Identifier of the Series.",
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "entity" : "",
         "mod_tables" : [
            "table_C.4-15"
         ]
      },
      "(0040,a390)[<0>](0008,1155)" : {
         "req" : "1",
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID"
      },
      "(0040,0270)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a121)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.4-13",
            "table_10-2"
         ],
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "usage" : "References the related SOPs and IEs.",
         "req" : "1C",
         "name" : "Date",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ]
      },
      "(0040,0270)[<0>](0008,0051)[<1>](0040,0031)" : {
         "mod_tables" : [
            "table_C.4-13",
            "table_10-17"
         ],
         "entity" : "",
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "usage" : "References the related SOPs and IEs.",
         "req" : "1C",
         "name" : "Local Namespace Entity ID",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a120)" : {
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "name" : "DateTime",
         "module" : "Image Acquisition Results",
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "req" : "1C",
         "entity" : "",
         "mod_tables" : [
            "table_C.4-15",
            "table_10-2"
         ]
      },
      "(0040,0340)" : {
         "name" : "Performed Series Sequence",
         "desc" : null,
         "mod_tables" : [
            "table_C.4-15"
         ],
         "entity" : "",
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "req" : [
            "Attributes of the Series that comprise this Modality Performed Procedure Step.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "module" : "Image Acquisition Results"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a122)" : {
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "name" : "Time",
         "module" : "Image Acquisition Results",
         "req" : "1C",
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "mod_tables" : [
            "table_C.4-15",
            "table_10-2"
         ],
         "entity" : ""
      },
      "(0040,0270)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0062,000b)" : {
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "name" : "Referenced Segment Number",
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "usage" : "References the related SOPs and IEs.",
         "req" : "1C",
         "entity" : "",
         "mod_tables" : [
            "table_C.4-13",
            "table_10-2"
         ]
      },
      "(0040,0340)[<0>](0008,1052)[<1>](0008,0080)" : {
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "name" : "Institution Name",
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "req" : "1C",
         "module" : "Image Acquisition Results",
         "mod_tables" : [
            "table_C.4-15",
            "table_10-1"
         ],
         "entity" : ""
      },
      "(0040,0340)[<0>](0008,1072)[<1>](0008,0082)" : {
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Institution Code Sequence",
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "req" : "1C",
         "module" : "Image Acquisition Results",
         "mod_tables" : [
            "table_C.4-15",
            "table_10-1"
         ],
         "entity" : ""
      },
      "(0008,0110)[<0>](0008,0102)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "module" : "SOP Common",
         "req" : "1",
         "usage" : "Contains SOP common information",
         "name" : "Coding Scheme Designator",
         "desc" : "The value of a Coding Scheme Designator, used in this SOP Instance, which is being mapped."
      },
      "(0040,0300)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.4-16"
         ],
         "module" : "Radiation Dose",
         "usage" : "Contains radiation dose information related to this Per\u00adformed Procedure Step.",
         "req" : "Total duration of X-Ray exposure during fluoroscopy in seconds (pedal time) during this Performed Procedure Step.",
         "name" : "Total Time of Fluoroscopy",
         "desc" : null
      },
      "(0040,0340)[<0>](0040,0220)" : {
         "desc" : null,
         "name" : "Referenced Non-Image Composite SOP Instance Sequence",
         "req" : [
            "Uniquely identifies instances, other than images, of any SOP Class that conforms to the DICOM Composite IOD Information Model, such as Waveforms, Presentation States or Structured Reports, created during the acquisition of the procedure step, and that are not referenced in Referenced Image Sequence (0008,1140).",
            "Zero or more Items shall be included in this Sequence."
         ],
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "module" : "Image Acquisition Results",
         "entity" : "",
         "mod_tables" : [
            "table_C.4-15"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a160)" : {
         "module" : "Image Acquisition Results",
         "req" : "1C",
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "entity" : "",
         "mod_tables" : [
            "table_C.4-15",
            "table_10-2"
         ],
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "name" : "Text Value"
      },
      "(0020,9172)[<0>](0008,1155)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "module" : "SOP Common",
         "req" : "1",
         "usage" : "Contains SOP common information",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0010,0040)" : {
         "mod_tables" : [
            "table_C.4-13"
         ],
         "entity" : "",
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "req" : [
            "Sex of the named Patient",
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
         "usage" : "References the related SOPs and IEs.",
         "name" : "Patient's Sex",
         "desc" : null
      },
      "(0040,0270)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a040)" : {
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "mod_tables" : [
            "table_C.4-13",
            "table_10-2"
         ],
         "entity" : "",
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "req" : "1",
         "usage" : "References the related SOPs and IEs."
      },
      "(0040,0270)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a124)" : {
         "mod_tables" : [
            "table_C.4-13",
            "table_10-2"
         ],
         "entity" : "",
         "usage" : "References the related SOPs and IEs.",
         "req" : "1C",
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "name" : "UID",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ]
      },
      "(0008,0117)" : {
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
         "name" : "Context UID",
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "Contains SOP common information",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,1120)[<0>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "usage" : "References the related SOPs and IEs.",
         "req" : "1",
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "mod_tables" : [
            "table_C.4-13",
            "table_10-11"
         ],
         "entity" : ""
      },
      "(0010,0033)" : {
         "desc" : null,
         "name" : "Patient's Birth Date in Alternative Calendar",
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "usage" : "References the related SOPs and IEs.",
         "req" : [
            "Date of birth of the named patient in the Alternative Calendar (0010,0035).",
            {
               "content" : [
                  "\n                  ",
                  {
                     "attrs" : {
                        "xml:id" : "para_cbdbc06a-b93b-4ca7-85cb-83f570c37d7a"
                     },
                     "el" : "para",
                     "content" : [
                        "No format is specified for alternative calendar dates so none should be assumed."
                     ]
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "entity" : "",
         "mod_tables" : [
            "table_C.4-13"
         ]
      },
      "(0040,0302)" : {
         "desc" : null,
         "name" : "Entrance Dose",
         "usage" : "Contains radiation dose information related to this Per\u00adformed Procedure Step.",
         "req" : [
            "Average entrance dose value measured in dGy at the surface of the patient\u00ad during this Performed Procedure Step.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "attrs" : {
                        "xml:id" : "para_855bc487-3ff4-4a11-869a-0878caea7125"
                     },
                     "el" : "para",
                     "content" : [
                        "This may be an estimated value based on assumptions about the patient's body size and habitus."
                     ]
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "module" : "Radiation Dose",
         "mod_tables" : [
            "table_C.4-16"
         ],
         "entity" : ""
      },
      "(0040,0340)[<0>](0008,1072)[<1>](0040,1104)" : {
         "module" : "Image Acquisition Results",
         "req" : "3",
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "mod_tables" : [
            "table_C.4-15",
            "table_10-1"
         ],
         "entity" : "",
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
         "name" : "Person's Telecom Information"
      },
      "(0040,0270)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,08ea)" : {
         "name" : "Measurement Units Code Sequence",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "mod_tables" : [
            "table_C.4-13",
            "table_10-2"
         ],
         "entity" : "",
         "usage" : "References the related SOPs and IEs.",
         "req" : "1C",
         "module" : "Performed Procedure Step Rela\u00adtionship"
      },
      "(0038,0010)" : {
         "desc" : null,
         "name" : "Admission ID",
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "usage" : "References the related SOPs and IEs.",
         "req" : "Identification number of the visit as assigned by the healthcare provider.",
         "mod_tables" : [
            "table_C.4-13"
         ],
         "entity" : ""
      },
      "(0008,2229)" : {
         "name" : "Anatomic Structure, Space or Region Sequence",
         "desc" : null,
         "mod_tables" : [
            "table_C.4-16"
         ],
         "entity" : "",
         "module" : "Radiation Dose",
         "usage" : "Contains radiation dose information related to this Per\u00adformed Procedure Step.",
         "req" : [
            "Anatomic structure, space or region that has been exposed to ionizing radiation.",
            "Zero or one Item shall be included in this Sequence."
         ]
      },
      "(0040,0340)[<0>](0008,1140)[<1>](0040,0560)" : {
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "req" : [
            "Sequence of identifiers and detailed description of the specimen(s) imaged.",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "Image Acquisition Results",
         "entity" : "",
         "mod_tables" : [
            "table_C.4-15"
         ],
         "desc" : null,
         "name" : "Specimen Description Sequence"
      },
      "(0040,0340)[<0>](0040,a494)" : {
         "desc" : null,
         "name" : "Archive Requested",
         "module" : "Image Acquisition Results",
         "req" : [
            "The instances in this series are expected to be archived in the long term archive.",
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
                  ]
               ]
            }
         ],
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "entity" : "",
         "mod_tables" : [
            "table_C.4-15"
         ]
      },
      "(0040,0270)[<0>](0040,0026)[<1>](0040,0031)" : {
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "name" : "Local Namespace Entity ID",
         "usage" : "References the related SOPs and IEs.",
         "req" : "1C",
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "mod_tables" : [
            "table_C.4-13",
            "table_10-17"
         ],
         "entity" : ""
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1160)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.4-15",
            "table_10-2"
         ],
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "req" : "1C",
         "module" : "Image Acquisition Results",
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
                        "xml:id" : "para_e06e8e0c-e051-4fbc-bfa9-82d4a32dd706"
                     }
                  },
                  "\n              "
               ]
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ]
      },
      "(0008,0124)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "Contains SOP common information",
         "name" : "Mapping Resource Identification Sequence",
         "desc" : [
            "Sequence of items that map values of Mapping Resource (0008,0105) to an external, private or local Mapping Resource.",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0040,0324)[<0>](0040,0296)" : {
         "mod_tables" : [
            "table_C.4-17"
         ],
         "entity" : "",
         "module" : "Billing and Material Management Codes",
         "usage" : "Contains codes for billing and material management.",
         "req" : [
            "Code values of chemicals, supplies or devices required for billing.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "name" : "Billing Item Sequence",
         "desc" : null
      },
      "(0040,0340)[<0>](0008,1072)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.4-15"
         ],
         "module" : "Image Acquisition Results",
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "req" : [
            "Identification of the operator(s) supporting the Series.",
            "One or more Items shall be included in this Sequence. If more than one Item, the number and order shall correspond to the value of Operators' Name (0008,1070), if present."
         ],
         "name" : "Operator Identification Sequence",
         "desc" : null
      },
      "(0010,0030)" : {
         "usage" : "References the related SOPs and IEs.",
         "req" : "Date of birth of the named patient",
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "entity" : "",
         "mod_tables" : [
            "table_C.4-13"
         ],
         "desc" : null,
         "name" : "Patient's Birth Date"
      },
      "(0040,0340)[<0>](0008,103f)" : {
         "name" : "Series Description Code Sequence",
         "desc" : null,
         "entity" : "",
         "mod_tables" : [
            "table_C.4-15"
         ],
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "req" : [
            "A coded description of the Series.",
            "Only a single Item shall beincludedin this Sequence."
         ],
         "module" : "Image Acquisition Results"
      },
      "(0040,0270)[<0>](0032,1060)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.4-13"
         ],
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "req" : "Institution-generated administrative description or classification of Requested Procedure.",
         "usage" : "References the related SOPs and IEs.",
         "name" : "Requested Procedure Description",
         "desc" : null
      },
      "(0040,0244)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.4-14"
         ],
         "req" : [
            "Date on which the Performed Procedure Step started.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "content" : [
                        "This value may be used to determine the earliest date to use as Study Date (0008,0020) in composite instances and in updated Modality Scheduled Procedure Steps in order to allow Study level attributes to have consistent values if additional Procedure Steps are performed."
                     ],
                     "attrs" : {
                        "xml:id" : "para_ac27283b-af29-4f70-bc62-db9ff848b2a4"
                     }
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "usage" : "Includes identifying and status information as well as place and time",
         "module" : "Performed Procedure Step Information",
         "name" : "Performed Procedure Step Start Date",
         "desc" : null
      },
      "(0040,0270)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a161)" : {
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "req" : "1C",
         "usage" : "References the related SOPs and IEs.",
         "entity" : "",
         "mod_tables" : [
            "table_C.4-13",
            "table_10-2"
         ],
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "name" : "Floating Point Value"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1101)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "entity" : "",
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "req" : "1",
         "name" : "Person Identification Code Sequence",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0040,0270)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a121)" : {
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "name" : "Date",
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "usage" : "References the related SOPs and IEs.",
         "req" : "1C",
         "mod_tables" : [
            "table_C.4-13",
            "table_10-2"
         ],
         "entity" : ""
      },
      "(0040,0270)[<0>](0040,0008)" : {
         "usage" : "References the related SOPs and IEs.",
         "req" : [
            "Sequence describing the Scheduled Protocol following a specific coding scheme.",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "entity" : "",
         "mod_tables" : [
            "table_C.4-13"
         ],
         "desc" : null,
         "name" : "Scheduled Protocol Code Sequence"
      },
      "(0040,a390)" : {
         "desc" : [
            "Sequence of items defining mapping between HL7 Instance Identifiers of unencapsulated HL7 Structured Documents referenced from the current SOP Instance as if they were DICOM Composite SOP Class Instances defined by SOP Class and Instance UID pairs. May also define a means of accessing the Documents.",
            "One or more Items shall be included in this Sequence.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.12.1.1.6",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ],
            "Required if unencapsulated HL7 Structured Documents are referenced within the Instance. Every such document so referenced is required to have a corresponding Item in this Sequence."
         ],
         "name" : "HL7 Structured Document Reference Sequence",
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : ""
      },
      "(0040,a390)[<0>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "req" : "1",
         "usage" : "Contains SOP common information",
         "module" : "SOP Common"
      },
      "(0040,0281)" : {
         "usage" : "Includes identifying and status information as well as place and time",
         "req" : "The reason the Performed Procedure Step Status (0040,0252) was set to DISCONTINUED.",
         "module" : "Performed Procedure Step Information",
         "entity" : "",
         "mod_tables" : [
            "table_C.4-14"
         ],
         "desc" : null,
         "name" : "Performed Procedure Step Discontinuation Reason Code Sequence"
      },
      "(0040,030e)[<0>](0018,1150)" : {
         "name" : "Exposure Time",
         "desc" : null,
         "mod_tables" : [
            "table_C.4-16"
         ],
         "entity" : "",
         "req" : "Time of x-ray exposure or fluoroscopy in msec.",
         "usage" : "Contains radiation dose information related to this Per\u00adformed Procedure Step.",
         "module" : "Radiation Dose"
      },
      "(0018,a001)[<0>](0008,1090)" : {
         "desc" : "Manufacturer's model name of the equipment that contributed to the composite instance.",
         "name" : "Manufacturer's Model Name",
         "req" : "3",
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0270)[<0>](0040,0027)" : {
         "name" : "Order Filler Identifier Sequence",
         "desc" : null,
         "entity" : "",
         "mod_tables" : [
            "table_C.4-13"
         ],
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "usage" : "References the related SOPs and IEs.",
         "req" : [
            "Identifier of the Assigning Authority that issued the Filler Order Number.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0040,030e)[<0>](0018,8151)" : {
         "desc" : null,
         "name" : "X-Ray Tube Current in \u00b5A",
         "module" : "Radiation Dose",
         "req" : "X-Ray Tube Current in \u00b5A. An average in the case of fluoroscopy (continuous radiation mode).",
         "usage" : "Contains radiation dose information related to this Per\u00adformed Procedure Step.",
         "mod_tables" : [
            "table_C.4-16"
         ],
         "entity" : ""
      },
      "(0040,0254)" : {
         "module" : "Performed Procedure Step Information",
         "req" : "Institution-generated description or classification of the Procedure Step that was performed.",
         "usage" : "Includes identifying and status information as well as place and time",
         "entity" : "",
         "mod_tables" : [
            "table_C.4-14"
         ],
         "desc" : null,
         "name" : "Performed Procedure Step Description"
      },
      "(0040,0270)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a123)" : {
         "name" : "Person Name",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "entity" : "",
         "mod_tables" : [
            "table_C.4-13",
            "table_10-2"
         ],
         "usage" : "References the related SOPs and IEs.",
         "req" : "1C",
         "module" : "Performed Procedure Step Rela\u00adtionship"
      },
      "(0020,0013)" : {
         "usage" : "Contains SOP common information",
         "req" : "3",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "desc" : "A number that identifies this Composite object instance.",
         "name" : "Instance Number"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a120)" : {
         "name" : "DateTime",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "mod_tables" : [
            "table_C.4-15",
            "table_10-2"
         ],
         "entity" : "",
         "module" : "Image Acquisition Results",
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "req" : "1C"
      },
      "(0010,0035)" : {
         "name" : "Patient's Alternative Calendar",
         "desc" : null,
         "mod_tables" : [
            "table_C.4-13"
         ],
         "entity" : "",
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "req" : [
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
         "usage" : "References the related SOPs and IEs."
      },
      "(0008,0300)[<0>](0008,0301)" : {
         "module" : "SOP Common",
         "req" : "1",
         "usage" : "Contains SOP common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "desc" : "Odd group number within which the Private Data Element block is reserved.",
         "name" : "Private Group Reference"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0062,000b)" : {
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "name" : "Referenced Segment Number",
         "req" : "1C",
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "module" : "Image Acquisition Results",
         "entity" : "",
         "mod_tables" : [
            "table_C.4-15",
            "table_10-2"
         ]
      },
      "(0010,0024)[<0>](0040,0035)" : {
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "usage" : "References the related SOPs and IEs.",
         "req" : "3",
         "entity" : "",
         "mod_tables" : [
            "table_C.4-13",
            "table_10-18"
         ],
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_dc68c1a1-46db-4a55-bcba-f75b9d9a8ab4"
                     }
                  },
                  "\n              "
               ]
            }
         ],
         "name" : "Identifier Type Code"
      },
      "(0040,0340)[<0>](0008,103e)" : {
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "req" : "Description of the Series",
         "module" : "Image Acquisition Results",
         "mod_tables" : [
            "table_C.4-15"
         ],
         "entity" : "",
         "desc" : null,
         "name" : "Series Description"
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0307)" : {
         "desc" : [
            "Recommended action to be performed during de-identification on elements listed in Identifying Private Elements (0008,0306) within this Item.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "content" : [
                        "A specific type of action is suggested in order to minimize the impact of\n                    de-identification on the behavior of recipients that use the Private Data\n                    Elements."
                     ],
                     "attrs" : {
                        "xml:id" : "para_d169d5a7-02bb-4199-80d3-99e87cbc8c6d"
                     }
                  },
                  "\n                "
               ]
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
                           "el" : "listitem",
                           "content" : [
                              "\n                      ",
                              {
                                 "attrs" : {
                                    "xml:id" : "para_79bc3e05-de52-489c-8337-4fe4bb188ec4"
                                 },
                                 "el" : "para",
                                 "content" : [
                                    "No C (clean) action is specified, since replacement with values of\n                        similar meaning known not to contain identifying information and consistent\n                        with the VR requires an understanding of the meaning of the value of the\n                        element. Whether or not to clean rather than remove or replace values is at\n                        the discretion of the implementer."
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
                                    "No suggested dummy value is provided, since the encoding of the value would depend on the VR of the data element."
                                 ],
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
                                 "attrs" : {
                                    "xml:id" : "para_62b4d252-a377-4a7b-9905-82f5437ccd6c"
                                 },
                                 "el" : "para",
                                 "content" : [
                                    "Further explanation of these actions can be found in ",
                                    {
                                       "attrs" : {
                                          "targetdoc" : "PS3.15",
                                          "targetptr" : "sect_E.3.1",
                                          "xrefstyle" : "template:PS3.15 Section %n %t"
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
               ]
            }
         ],
         "name" : "Deidentification Action",
         "req" : "1",
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a162)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.4-15",
            "table_10-2"
         ],
         "module" : "Image Acquisition Results",
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "req" : "1C",
         "name" : "Rational Numerator Value",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ]
      },
      "(0040,0270)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1160)" : {
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "req" : "1C",
         "usage" : "References the related SOPs and IEs.",
         "mod_tables" : [
            "table_C.4-13",
            "table_10-2"
         ],
         "entity" : "",
         "desc" : [
            "Identifies the frame numbers within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1.",
            {
               "content" : [
                  "\n                ",
                  {
                     "attrs" : {
                        "xml:id" : "para_e06e8e0c-e051-4fbc-bfa9-82d4a32dd706"
                     },
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
         "name" : "Referenced Frame Number"
      },
      "(0008,0014)" : {
         "req" : "3",
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Uniquely identifies device that created the SOP Instance.",
         "name" : "Instance Creator UID"
      },
      "(0018,a001)[<0>](0018,1000)" : {
         "name" : "Device Serial Number",
         "desc" : "Manufacturer's serial number of the equipment that contributed to the composite instance.",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP common information",
         "req" : "3",
         "module" : "SOP Common"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a30a)" : {
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "name" : "Numeric Value",
         "req" : "1C",
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "module" : "Image Acquisition Results",
         "mod_tables" : [
            "table_C.4-15",
            "table_10-2"
         ],
         "entity" : ""
      },
      "(0010,0021)" : {
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_fde39d36-34f5-4459-8bca-12b577233532"
                     }
                  },
                  "\n              "
               ]
            }
         ],
         "name" : "Issuer of Patient ID",
         "req" : "3",
         "usage" : "References the related SOPs and IEs.",
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "mod_tables" : [
            "table_C.4-13",
            "table_10-18"
         ],
         "entity" : ""
      },
      "(fffa,fffa)[<0>](0400,0100)" : {
         "name" : "Digital Signature UID",
         "desc" : "A UID that can be used to uniquely reference this signature.",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "req" : "1",
         "usage" : "Contains SOP common information"
      },
      "(0008,0060)" : {
         "module" : "Image Acquisition Results",
         "req" : [
            [
               "Type of equipment that originally acquired the data used to create the images associated with this Modality Performed Procedure Step. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.3.1.1.1"
                  },
                  "el" : "xref"
               },
               " for Defined Terms."
            ],
            {
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "content" : [
                        "A Modality value in the created SOP Instances may be different from the MPPS Modality value. For example, multiple series may have been created during the MPPS (images, waveforms, softcopy presentation states and/or structured reports) with SOP Instances in different series having different modality values."
                     ],
                     "attrs" : {
                        "xml:id" : "para_9af0ccf1-aac5-4f7b-ad6e-189d70692194"
                     }
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "mod_tables" : [
            "table_C.4-15"
         ],
         "entity" : "",
         "desc" : null,
         "name" : "Modality"
      },
      "(0040,0324)" : {
         "name" : "Billing Supplies and Devices Sequence",
         "desc" : null,
         "entity" : "",
         "mod_tables" : [
            "table_C.4-17"
         ],
         "module" : "Billing and Material Management Codes",
         "req" : "Chemicals, supplies and devices for billing used in the Performed Procedure Step.One or more Items shall be included in this Sequence.",
         "usage" : "Contains codes for billing and material management."
      },
      "(0040,0270)[<0>](0040,2016)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.4-13"
         ],
         "req" : "The order number assigned to the Imaging Service Request by the party placing the order.",
         "usage" : "References the related SOPs and IEs.",
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "name" : "Placer Order Number/Imaging Service Request",
         "desc" : null
      },
      "(0018,a001)[<0>](0018,a003)" : {
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "desc" : "Description of the contribution the equipment made to the composite instance.",
         "name" : "Contribution Description"
      },
      "(0008,0118)" : {
         "req" : "3",
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "desc" : "The unique identifier of the Mapping Resource",
         "name" : "Mapping Resource UID"
      },
      "(0008,0012)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "req" : "3",
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "name" : "Instance Creation Date",
         "desc" : [
            "Date the SOP Instance was created.",
            "This is the date that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ]
      },
      "(0040,0310)" : {
         "module" : "Radiation Dose",
         "req" : "User-defined comments on any special conditions related to radiation dose encountered during this Performed Procedure Step.",
         "usage" : "Contains radiation dose information related to this Per\u00adformed Procedure Step.",
         "entity" : "",
         "mod_tables" : [
            "table_C.4-16"
         ],
         "desc" : null,
         "name" : "Comments on Radiation Dose"
      },
      "(0040,0270)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "usage" : "References the related SOPs and IEs.",
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "mod_tables" : [
            "table_C.4-13",
            "table_10-2",
            "table_10-11"
         ],
         "entity" : ""
      },
      "(0018,115e)" : {
         "mod_tables" : [
            "table_C.4-16"
         ],
         "entity" : "",
         "module" : "Radiation Dose",
         "req" : [
            "Total area-dose-product to which the patient was exposed, accumulated over the complete Performed Procedure Step and measured in dGy*cm*cm, including fluoroscopy.",
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
                                    "The sum of the area dose product of all images of a Series or a Study may not result in the total area dose product to which the patient was exposed."
                                 ],
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_31c3cae6-7fe0-4030-a44f-c73d41e64314"
                                 }
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
                                    "This may be an estimated value based on assumptions about the patient's body size and habitus."
                                 ],
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_0e2c0a13-c275-4ba3-b5ee-d232696b40eb"
                                 }
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
            }
         ],
         "usage" : "Contains radiation dose information related to this Per\u00adformed Procedure Step.",
         "name" : "Image and Fluoroscopy Area Dose Product",
         "desc" : null
      },
      "(0040,0340)[<0>](0008,1052)[<1>](0008,0081)" : {
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "name" : "Institution Address",
         "module" : "Image Acquisition Results",
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "req" : "3",
         "mod_tables" : [
            "table_C.4-15",
            "table_10-1"
         ],
         "entity" : ""
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a040)" : {
         "mod_tables" : [
            "table_C.4-15",
            "table_10-2"
         ],
         "entity" : "",
         "module" : "Image Acquisition Results",
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
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
      "(0008,0105)" : {
         "entity" : "",
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
                  "attrs" : {
                     "linkend" : "sect_8.4",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ]
      },
      "(0038,0060)" : {
         "mod_tables" : [
            "table_C.4-13"
         ],
         "entity" : "",
         "usage" : "References the related SOPs and IEs.",
         "req" : "Identifier of the Service Episode as assigned by the healthcare provider",
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "name" : "Service Episode ID",
         "desc" : null
      },
      "(0040,0270)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a30a)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.4-13",
            "table_10-2"
         ],
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "usage" : "References the related SOPs and IEs.",
         "req" : "1C",
         "name" : "Numeric Value",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ]
      },
      "(0100,0424)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "usage" : "Contains SOP common information",
         "req" : "3",
         "module" : "SOP Common",
         "name" : "SOP Authorization Comment",
         "desc" : "Any comments associated with the setting of the SOP Instance Status (0100,0410) to AO."
      },
      "(0020,9172)[<0>](0008,1160)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "module" : "SOP Common",
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
                     "el" : "para",
                     "content" : [
                        "This Attribute may be multi-valued."
                     ],
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
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a30a)" : {
         "mod_tables" : [
            "table_C.4-15",
            "table_10-2"
         ],
         "entity" : "",
         "module" : "Image Acquisition Results",
         "req" : "1C",
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "name" : "Numeric Value",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ]
      },
      "(0018,a001)[<0>](0008,1010)" : {
         "name" : "Station Name",
         "desc" : "User defined name identifying the machine that contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "Contains SOP common information"
      },
      "(fffa,fffa)[<0>](0400,0401)" : {
         "name" : "Digital Signature Purpose Code Sequence",
         "desc" : [
            "The purpose of this Digital Signature.",
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "Contains SOP common information"
      },
      "(0010,0024)[<0>](0040,0033)" : {
         "mod_tables" : [
            "table_C.4-13",
            "table_10-18"
         ],
         "entity" : "",
         "req" : "1C",
         "usage" : "References the related SOPs and IEs.",
         "module" : "Performed Procedure Step Rela\u00adtionship",
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
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_10.14"
                  }
               },
               " for Defined Terms."
            ]
         ]
      },
      "(0040,0340)[<0>](0008,1070)" : {
         "desc" : null,
         "name" : "Operators' Name",
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "req" : "Name(s) of the operator(s) who supporting this Series.",
         "module" : "Image Acquisition Results",
         "mod_tables" : [
            "table_C.4-15"
         ],
         "entity" : ""
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a040)" : {
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
         "mod_tables" : [
            "table_C.4-15",
            "table_10-2"
         ],
         "entity" : "",
         "module" : "Image Acquisition Results",
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "req" : "1"
      },
      "(0008,1120)" : {
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "req" : [
            "Uniquely identifies the Patient SOP Instance.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "References the related SOPs and IEs.",
         "entity" : "",
         "mod_tables" : [
            "table_C.4-13"
         ],
         "desc" : null,
         "name" : "Referenced Patient Sequence"
      },
      "(0040,0270)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a30a)" : {
         "name" : "Numeric Value",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "entity" : "",
         "mod_tables" : [
            "table_C.4-13",
            "table_10-2"
         ],
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "usage" : "References the related SOPs and IEs.",
         "req" : "1C"
      },
      "(0040,030e)" : {
         "module" : "Radiation Dose",
         "req" : [
            "Exposure Dose Sequence will contain Total Number of Exposures (0040,0301) items plus an item for each fluoroscopy episode not already counted as an exposure.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "usage" : "Contains radiation dose information related to this Per\u00adformed Procedure Step.",
         "mod_tables" : [
            "table_C.4-16"
         ],
         "entity" : "",
         "desc" : null,
         "name" : "Exposure Dose Sequence"
      },
      "(0040,030e)[<0>](0018,7050)" : {
         "mod_tables" : [
            "table_C.4-16"
         ],
         "entity" : "",
         "req" : [
            "The X-Ray absorbing material used in the filter. May be multi-valued. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.7.10"
               },
               "el" : "xref"
            },
            " and ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.15.3.9"
               }
            },
            " (for enhanced CT) for Defined Terms."
         ],
         "usage" : "Contains radiation dose information related to this Per\u00adformed Procedure Step.",
         "module" : "Radiation Dose",
         "name" : "Filter Material",
         "desc" : null
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a163)" : {
         "req" : "1C",
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "module" : "Image Acquisition Results",
         "entity" : "",
         "mod_tables" : [
            "table_C.4-15",
            "table_10-2"
         ],
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "name" : "Rational Denominator Value"
      },
      "(0040,0270)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a122)" : {
         "mod_tables" : [
            "table_C.4-13",
            "table_10-2"
         ],
         "entity" : "",
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "usage" : "References the related SOPs and IEs.",
         "req" : "1C",
         "name" : "Time",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ]
      },
      "(0008,010f)" : {
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "usage" : "Contains SOP common information",
         "req" : "1",
         "module" : "SOP Common"
      },
      "(0040,0306)" : {
         "desc" : null,
         "name" : "Distance Source to Entrance",
         "req" : [
            "Distance in mm from the source to the surface of the patient closest to the source during this Performed Procedure Step.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "This may be an estimated value based on assumptions about the patient's body size and habitus."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_c7c67f6d-c2b4-4c69-bc42-ae6d4db198b6"
                     }
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "usage" : "Contains radiation dose information related to this Per\u00adformed Procedure Step.",
         "module" : "Radiation Dose",
         "mod_tables" : [
            "table_C.4-16"
         ],
         "entity" : ""
      },
      "(0040,0270)[<0>](0040,2017)" : {
         "mod_tables" : [
            "table_C.4-13"
         ],
         "entity" : "",
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "req" : "The order number assigned to the Imaging Service Request by the party filling the order.",
         "usage" : "References the related SOPs and IEs.",
         "name" : "Filler Order Number/Imaging Service Request",
         "desc" : null
      },
      "(0008,0015)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "name" : "Instance Coercion DateTime",
         "desc" : [
            "Date and time that the SOP Instance was last coerced by a Storage SCP (see ",
            {
               "el" : "olink",
               "attrs" : {
                  "targetdoc" : "PS3.4",
                  "targetptr" : "PS3.4",
                  "xrefstyle" : "select: labelnumber"
               }
            },
            ")."
         ]
      },
      "(0040,0340)[<0>](0008,1072)[<1>](0008,0080)" : {
         "module" : "Image Acquisition Results",
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "req" : "1C",
         "mod_tables" : [
            "table_C.4-15",
            "table_10-1"
         ],
         "entity" : "",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "name" : "Institution Name"
      },
      "(0028,0303)" : {
         "usage" : "Contains SOP common information",
         "req" : "3",
         "module" : "SOP Common",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
                     "targetdoc" : "PS3.15",
                     "xrefstyle" : "select: labelnumber"
                  }
               },
               "."
            ]
         ],
         "name" : "Longitudinal Temporal Information Modified"
      },
      "(0038,0064)" : {
         "desc" : null,
         "name" : "Issuer of Service Episode ID Sequence",
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "usage" : "References the related SOPs and IEs.",
         "req" : [
            "Identifier of the Assigning Authority that issued the Service Episode ID.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "",
         "mod_tables" : [
            "table_C.4-13"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a161)" : {
         "module" : "Image Acquisition Results",
         "req" : "1C",
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "entity" : "",
         "mod_tables" : [
            "table_C.4-15",
            "table_10-2"
         ],
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "name" : "Floating Point Value"
      },
      "(0008,0300)" : {
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "desc" : "Characteristics of Private Data Elements within the current SOP Instance",
         "name" : "Private Data Element Characteristics Sequence"
      },
      "(0040,0252)" : {
         "desc" : null,
         "name" : "Performed Procedure Step Status",
         "usage" : "Includes identifying and status information as well as place and time",
         "req" : [
            "Contains the state of the Performed Procedure Step.",
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "IN PROGRESS",
                     "Started but not complete"
                  ],
                  [
                     "DISCONTINUED",
                     "Canceled or unsuccessfully terminated"
                  ],
                  [
                     "COMPLETED",
                     "Successfully completed"
                  ]
               ]
            }
         ],
         "module" : "Performed Procedure Step Information",
         "mod_tables" : [
            "table_C.4-14"
         ],
         "entity" : ""
      },
      "(0008,0016)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "module" : "SOP Common",
         "req" : "1",
         "usage" : "Contains SOP common information",
         "name" : "SOP Class UID",
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
         ]
      },
      "(0040,0340)[<0>](0008,1072)[<1>](0008,0081)" : {
         "module" : "Image Acquisition Results",
         "req" : "3",
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "entity" : "",
         "mod_tables" : [
            "table_C.4-15",
            "table_10-1"
         ],
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "name" : "Institution Address"
      },
      "(0040,0270)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a160)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.4-13",
            "table_10-2"
         ],
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "req" : "1C",
         "usage" : "References the related SOPs and IEs.",
         "name" : "Text Value",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ]
      },
      "(0038,0064)[<0>](0040,0033)" : {
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
         "entity" : "",
         "mod_tables" : [
            "table_C.4-13",
            "table_10-17"
         ],
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "usage" : "References the related SOPs and IEs.",
         "req" : "1C"
      },
      "(fffa,fffa)[<0>](0400,0305)" : {
         "name" : "Certified Timestamp Type",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_cae60b6b-4fad-4c20-981d-247bbf9c6471"
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
         "entity" : "",
         "module" : "SOP Common",
         "req" : "1C",
         "usage" : "Contains SOP common information"
      },
      "(0040,0251)" : {
         "module" : "Performed Procedure Step Information",
         "req" : "Time at which the Performed Procedure Step ended.",
         "usage" : "Includes identifying and status information as well as place and time",
         "entity" : "",
         "mod_tables" : [
            "table_C.4-14"
         ],
         "desc" : null,
         "name" : "Performed Procedure Step End Time"
      },
      "(0038,0064)[<0>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.4-13",
            "table_10-17"
         ],
         "entity" : "",
         "req" : "1C",
         "usage" : "References the related SOPs and IEs.",
         "module" : "Performed Procedure Step Rela\u00adtionship"
      },
      "(0040,0270)[<0>](0020,000d)" : {
         "req" : "Unique identifier for the Study.",
         "usage" : "References the related SOPs and IEs.",
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "entity" : "",
         "mod_tables" : [
            "table_C.4-13"
         ],
         "desc" : null,
         "name" : "Study Instance UID"
      },
      "(0020,9172)[<0>](0062,000b)" : {
         "name" : "Referenced Segment Number",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "entity" : "",
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "req" : "1C"
      },
      "(fffa,fffa)[<0>](0400,0120)" : {
         "name" : "Signature",
         "desc" : [
            "The MAC generated as described in ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.12.1.1.3.1.1"
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
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "",
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "req" : "1"
      },
      "(0040,0270)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.4-13",
            "table_10-2"
         ],
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "usage" : "References the related SOPs and IEs.",
         "req" : "1C",
         "name" : "Referenced SOP Sequence",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ]
      },
      "(0008,0110)[<0>](0008,0103)" : {
         "name" : "Coding Scheme Version",
         "desc" : "The coding scheme version associated with the Coding Scheme Designator (0008,0102).",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "req" : "3"
      },
      "(4ffe,0001)[<0>](0400,0015)" : {
         "name" : "MAC Algorithm",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_c0347aea-ecd8-4c0b-8e2f-cedadc2aacd5"
                     }
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
         "entity" : "",
         "req" : "1",
         "usage" : "Contains SOP common information",
         "module" : "SOP Common"
      },
      "(0040,030e)[<0>](0018,0060)" : {
         "desc" : null,
         "name" : "KVP",
         "module" : "Radiation Dose",
         "usage" : "Contains radiation dose information related to this Per\u00adformed Procedure Step.",
         "req" : "Peak kilo voltage output of the x-ray generator used. An average in the case of fluoroscopy (continuous radiation mode).",
         "mod_tables" : [
            "table_C.4-16"
         ],
         "entity" : ""
      },
      "(0040,0324)[<0>](0040,0293)[<1>](0040,0295)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.4-17"
         ],
         "module" : "Billing and Material Management Codes",
         "usage" : "Contains codes for billing and material management.",
         "req" : [
            "Unit of measurement.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "name" : "Measuring Units Sequence",
         "desc" : null
      },
      "(0040,0270)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1155)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.4-13",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "References the related SOPs and IEs.",
         "req" : "1",
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0040,0255)" : {
         "module" : "Performed Procedure Step Information",
         "usage" : "Includes identifying and status information as well as place and time",
         "req" : "A description of the type of procedure performed.",
         "mod_tables" : [
            "table_C.4-14"
         ],
         "entity" : "",
         "desc" : null,
         "name" : "Performed Procedure Type Description"
      },
      "(0040,0270)[<0>](0008,0051)[<1>](0040,0033)" : {
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
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "req" : "1C",
         "usage" : "References the related SOPs and IEs.",
         "mod_tables" : [
            "table_C.4-13",
            "table_10-17"
         ],
         "entity" : ""
      },
      "(0008,0110)[<0>](0008,0114)" : {
         "desc" : "The coding scheme identifier as defined in an external registry. Required if coding scheme is registered and Coding Scheme UID (0008,010C) is not present.",
         "name" : "Coding Scheme External ID",
         "usage" : "Contains SOP common information",
         "req" : "2C",
         "module" : "SOP Common",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "req" : "1",
         "module" : "Image Acquisition Results",
         "mod_tables" : [
            "table_C.4-15",
            "table_10-2",
            "table_10-11"
         ],
         "entity" : ""
      },
      "(0008,0013)" : {
         "desc" : [
            "Time the SOP Instance was created.",
            "This is the time that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "name" : "Instance Creation Time",
         "req" : "3",
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : ""
      },
      "(0040,0321)" : {
         "mod_tables" : [
            "table_C.4-17"
         ],
         "entity" : "",
         "req" : [
            "Information about the film consumption for this Per\u00adformed Procedure Step.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "usage" : "Contains codes for billing and material management.",
         "module" : "Billing and Material Management Codes",
         "name" : "Film Consumption Sequence",
         "desc" : null
      },
      "(0040,0270)[<0>](0040,0027)[<1>](0040,0032)" : {
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "name" : "Universal Entity ID",
         "usage" : "References the related SOPs and IEs.",
         "req" : "1C",
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "mod_tables" : [
            "table_C.4-13",
            "table_10-17"
         ],
         "entity" : ""
      },
      "(0040,0270)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a043)" : {
         "usage" : "References the related SOPs and IEs.",
         "req" : "1",
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "mod_tables" : [
            "table_C.4-13",
            "table_10-2"
         ],
         "entity" : "",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Concept Name Code Sequence"
      },
      "(0040,0340)[<0>](0040,0220)[<1>](0008,1155)" : {
         "mod_tables" : [
            "table_C.4-15",
            "table_10-11"
         ],
         "entity" : "",
         "req" : "1",
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "module" : "Image Acquisition Results",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0008,0106)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "req" : "1",
         "usage" : "Contains SOP common information",
         "name" : "Context Group Version",
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
         ]
      },
      "(0038,0064)[<0>](0040,0031)" : {
         "mod_tables" : [
            "table_C.4-13",
            "table_10-17"
         ],
         "entity" : "",
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "req" : "1C",
         "usage" : "References the related SOPs and IEs.",
         "name" : "Local Namespace Entity ID",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise."
      },
      "(0040,0270)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1150)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.4-13",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "References the related SOPs and IEs.",
         "req" : "1",
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0040,0260)[<0>](0040,0440)" : {
         "req" : [
            "Sequence that specifies the context for the Performed Protocol Code Sequence Item.",
            "One or more Items shall be included in this Sequence.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.4.10.1"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "module" : "Image Acquisition Results",
         "entity" : "",
         "mod_tables" : [
            "table_C.4-15"
         ],
         "desc" : null,
         "name" : "Protocol Context Sequence"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a123)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.4-15",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "module" : "Image Acquisition Results",
         "name" : "Person Name",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ]
      },
      "(0038,0014)[<0>](0040,0032)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.4-13",
            "table_10-17"
         ],
         "usage" : "References the related SOPs and IEs.",
         "req" : "1C",
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "name" : "Universal Entity ID",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a168)" : {
         "req" : "1C",
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "module" : "Image Acquisition Results",
         "entity" : "",
         "mod_tables" : [
            "table_C.4-15",
            "table_10-2"
         ],
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "name" : "Concept Code Sequence"
      },
      "(0040,0270)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a124)" : {
         "usage" : "References the related SOPs and IEs.",
         "req" : "1C",
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "mod_tables" : [
            "table_C.4-13",
            "table_10-2"
         ],
         "entity" : "",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "name" : "UID"
      },
      "(0040,0340)[<0>](0008,1140)[<1>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.4-15",
            "table_10-11"
         ],
         "entity" : "",
         "req" : "1",
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "module" : "Image Acquisition Results"
      },
      "(0040,0270)[<0>](0040,0009)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.4-13"
         ],
         "req" : "Identifier of the related Scheduled Procedure Step.",
         "usage" : "References the related SOPs and IEs.",
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "name" : "Scheduled Procedure Step ID",
         "desc" : null
      },
      "(0100,0426)" : {
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "Contains SOP common information",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The certification number issued to the Application Entity that set the SOP Instance Status (0100,0410) to AO.",
         "name" : "Authorization Equipment Certification Number"
      },
      "(0040,0340)[<0>](0008,1140)[<1>](0008,1150)" : {
         "module" : "Image Acquisition Results",
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "req" : "1",
         "mod_tables" : [
            "table_C.4-15",
            "table_10-11"
         ],
         "entity" : "",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID"
      },
      "(0008,001b)" : {
         "req" : "3",
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "The SOP Class in which the Instance was originally encoded that has been replaced during a fall-back conversion to the current Related General SOP Class. See ",
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
         "name" : "Original Specialized SOP Class UID"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)" : {
         "module" : "Image Acquisition Results",
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "req" : "1C",
         "entity" : "",
         "mod_tables" : [
            "table_C.4-15",
            "table_10-2"
         ],
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "name" : "Referenced SOP Sequence"
      },
      "(0040,0324)[<0>](0040,0293)[<1>](0040,0294)" : {
         "desc" : null,
         "name" : "Quantity",
         "module" : "Billing and Material Management Codes",
         "usage" : "Contains codes for billing and material management.",
         "req" : "Numerical quantity value.",
         "mod_tables" : [
            "table_C.4-17"
         ],
         "entity" : ""
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
         "name" : "Encrypted Content",
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "req" : "1",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0018,a001)[<0>](0008,0070)" : {
         "desc" : "Manufacturer of the equipment that contributed to the composite instance.",
         "name" : "Manufacturer",
         "usage" : "Contains SOP common information",
         "req" : "1",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : ""
      },
      "(0040,0324)[<0>](0040,0293)" : {
         "name" : "Quantity Sequence",
         "desc" : null,
         "entity" : "",
         "mod_tables" : [
            "table_C.4-17"
         ],
         "req" : [
            "Sequence containing the quantity of used chemicals or devices.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "usage" : "Contains codes for billing and material management.",
         "module" : "Billing and Material Management Codes"
      },
      "(0400,0561)[<0>](0400,0550)[0](gggg,eeee)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "req" : "1",
         "name" : "Any Attribute from the main data set that was modified or removed.",
         "desc" : "May include Sequence Attributes and their Items."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1150)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.4-15",
            "table_10-2",
            "table_10-11"
         ],
         "req" : "1",
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "module" : "Image Acquisition Results",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,08ea)" : {
         "mod_tables" : [
            "table_C.4-15",
            "table_10-2"
         ],
         "entity" : "",
         "req" : "1C",
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "module" : "Image Acquisition Results",
         "name" : "Measurement Units Code Sequence",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ]
      },
      "(0040,0340)[<0>](0008,1052)[<1>](0040,1103)" : {
         "module" : "Image Acquisition Results",
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "req" : "3",
         "entity" : "",
         "mod_tables" : [
            "table_C.4-15",
            "table_10-1"
         ],
         "desc" : "Person's telephone number(s)",
         "name" : "Person's Telephone Numbers"
      },
      "(0040,030e)[<0>](0040,0310)" : {
         "name" : "Comments on Radiation Dose",
         "desc" : null,
         "entity" : "",
         "mod_tables" : [
            "table_C.4-16"
         ],
         "req" : "User-defined comments on any special conditions related to radiation dose encountered during during the episode described by this Exposure Dose Sequence Item.",
         "usage" : "Contains radiation dose information related to this Per\u00adformed Procedure Step.",
         "module" : "Radiation Dose"
      },
      "(0008,0110)[<0>](0008,010c)" : {
         "name" : "Coding Scheme UID",
         "desc" : "The coding scheme UID identifier. Required if coding scheme is identified by an ISO 8824 object identifier compatible with the UI VR.",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP common information",
         "req" : "1C",
         "module" : "SOP Common"
      },
      "(0040,0340)[<0>](0018,1030)" : {
         "mod_tables" : [
            "table_C.4-15"
         ],
         "entity" : "",
         "req" : [
            "User-defined description of the conditions under which the Series was performed.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "attrs" : {
                        "xml:id" : "para_00af3db4-70f8-4f11-8e77-6a9b6a8ee095"
                     },
                     "content" : [
                        "This attribute conveys series-specific protocol identification and may or may not be identical to the one presented in the Performed Protocol Code Sequence (0040,0260)."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ]
            }
         ],
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "module" : "Image Acquisition Results",
         "name" : "Protocol Name",
         "desc" : null
      },
      "(0400,0561)[<0>](0400,0562)" : {
         "name" : "Attribute Modification DateTime",
         "desc" : "Date and time the attributes were removed and/or replaced.",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP common information",
         "req" : "1",
         "module" : "SOP Common"
      },
      "(0008,1120)[<0>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "usage" : "References the related SOPs and IEs.",
         "req" : "1",
         "entity" : "",
         "mod_tables" : [
            "table_C.4-13",
            "table_10-11"
         ]
      },
      "(0008,0110)[<0>](0008,0112)" : {
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
         "name" : "Coding Scheme Registry",
         "usage" : "Contains SOP common information",
         "req" : "1C",
         "module" : "SOP Common",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0018,a001)[<0>](0018,1200)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "req" : "3",
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "name" : "Date of Last Calibration",
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
         ]
      },
      "(0040,0270)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)" : {
         "desc" : null,
         "name" : "Content Item Modifier Sequence",
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "req" : [
            "Sequence that specifies modifiers for a Protocol Context Content Item.",
            "One or more Items shall be included in this Sequence.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.4.10.1",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ]
         ],
         "usage" : "References the related SOPs and IEs.",
         "entity" : "",
         "mod_tables" : [
            "table_C.4-13"
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
         "name" : "Encrypted Attributes Sequence",
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : ""
      },
      "(0040,a390)[<0>](0040,e010)" : {
         "name" : "Retrieve URI",
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
                     "attrs" : {
                        "xml:id" : "para_398d64f0-0a7e-4cfe-b480-b482ee2cb7a7"
                     },
                     "content" : [
                        "The VR of this attribute has changed from UT to UR."
                     ],
                     "el" : "para"
                  },
                  "\n"
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "req" : "3",
         "usage" : "Contains SOP common information",
         "module" : "SOP Common"
      },
      "(0040,0270)[<0>](0008,0050)" : {
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "usage" : "References the related SOPs and IEs.",
         "req" : "A departmental IS generated number that identifies the order for the Study.",
         "entity" : "",
         "mod_tables" : [
            "table_C.4-13"
         ],
         "desc" : null,
         "name" : "Accession Number"
      },
      "(0010,0024)" : {
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "usage" : "References the related SOPs and IEs.",
         "req" : "3",
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "mod_tables" : [
            "table_C.4-13",
            "table_10-18"
         ],
         "entity" : ""
      },
      "(0040,0270)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a160)" : {
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "req" : "1C",
         "usage" : "References the related SOPs and IEs.",
         "entity" : "",
         "mod_tables" : [
            "table_C.4-13",
            "table_10-2"
         ],
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "name" : "Text Value"
      },
      "(0010,0024)[<0>](0040,003a)" : {
         "name" : "Assigning Agency or Department Code Sequence",
         "desc" : [
            "The agency or department that assigned the patient identifier. Only a single Item is permitted in this Sequence.",
            {
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
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.4-13",
            "table_10-18"
         ],
         "entity" : "",
         "req" : "3",
         "usage" : "References the related SOPs and IEs.",
         "module" : "Performed Procedure Step Rela\u00adtionship"
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0306)" : {
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "req" : "1",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "List of Private Data Elements in block that may contain identifying\n                  information (are unsafe from identity leakage)..",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once."
         ],
         "name" : "Identifying Private Elements"
      },
      "(0040,0321)[<0>](2010,0050)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.4-17"
         ],
         "req" : [
            "Size(s) of film on which images were printed. For Defined Terms see ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "table_C.13-3",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "usage" : "Contains codes for billing and material management.",
         "module" : "Billing and Material Management Codes",
         "name" : "Film Size ID",
         "desc" : null
      },
      "(0040,0270)[<0>](0008,0051)" : {
         "name" : "Issuer of Accession Number Sequence",
         "desc" : null,
         "mod_tables" : [
            "table_C.4-13"
         ],
         "entity" : "",
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "req" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "References the related SOPs and IEs."
      },
      "(0008,0110)" : {
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "Contains SOP common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "desc" : [
            "Sequence of items that map values of Coding Scheme Designator (0008,0102) to an external coding system registration, or to a private or local coding scheme.",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Coding Scheme Identification Sequence"
      },
      "(0008,001a)" : {
         "name" : "Related General SOP Class UID",
         "desc" : [
            "Uniquely identifies a Related General SOP Class for the SOP Class of this Instance. See ",
            {
               "el" : "olink",
               "attrs" : {
                  "xrefstyle" : "select: labelnumber",
                  "targetdoc" : "PS3.4",
                  "targetptr" : "PS3.4"
               }
            },
            "."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "req" : "3"
      },
      "(0400,0500)[<0>](0400,0510)" : {
         "name" : "Encrypted Content Transfer Syntax UID",
         "desc" : "Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "req" : "1"
      },
      "(0008,0122)" : {
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "req" : "3",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "name" : "Mapping Resource Name"
      },
      "(0018,a001)[<0>](0008,1070)" : {
         "desc" : "Name(s) of the operator(s) of the contributing equipment.",
         "name" : "Operators' Name",
         "usage" : "Contains SOP common information",
         "req" : "3",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : ""
      },
      "(0010,0024)[<0>](0040,0032)" : {
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
         "name" : "Universal Entity ID",
         "req" : "3",
         "usage" : "References the related SOPs and IEs.",
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "entity" : "",
         "mod_tables" : [
            "table_C.4-13",
            "table_10-18"
         ]
      },
      "(0400,0561)[<0>](0400,0564)" : {
         "usage" : "Contains SOP common information",
         "req" : "2",
         "module" : "SOP Common",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The source that provided the SOP Instance prior to the removal or replacement of the values. For example, this might be the Institution from which imported SOP Instances were received.",
         "name" : "Source of Previous Values"
      },
      "(0018,a001)[<0>](0040,a170)" : {
         "desc" : [
            "Describes the purpose for which the related equipment is being referenced.",
            "Only a single Item shall be included in this Sequence.",
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
         "name" : "Purpose of Reference Code Sequence",
         "module" : "SOP Common",
         "req" : "1",
         "usage" : "Contains SOP common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : ""
      },
      "(0400,0561)[<0>](0400,0565)" : {
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "req" : "1",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
      "(0040,0270)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,08ea)" : {
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "name" : "Measurement Units Code Sequence",
         "req" : "1C",
         "usage" : "References the related SOPs and IEs.",
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "entity" : "",
         "mod_tables" : [
            "table_C.4-13",
            "table_10-2"
         ]
      },
      "(0040,0270)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a162)" : {
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "name" : "Rational Numerator Value",
         "req" : "1C",
         "usage" : "References the related SOPs and IEs.",
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "entity" : "",
         "mod_tables" : [
            "table_C.4-13",
            "table_10-2"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a122)" : {
         "module" : "Image Acquisition Results",
         "req" : "1C",
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "mod_tables" : [
            "table_C.4-15",
            "table_10-2"
         ],
         "entity" : "",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "name" : "Time"
      },
      "(4ffe,0001)[<0>](0400,0020)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "req" : "1",
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
         ]
      },
      "(0040,0270)[<0>](0040,1001)" : {
         "name" : "Requested Procedure ID",
         "desc" : null,
         "mod_tables" : [
            "table_C.4-13"
         ],
         "entity" : "",
         "module" : "Performed Procedure Step Rela\u00adtionship",
         "usage" : "References the related SOPs and IEs.",
         "req" : "Identifier of the related Requested Procedure."
      },
      "(0020,9172)[<0>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "req" : "1",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,08ea)" : {
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "name" : "Measurement Units Code Sequence",
         "module" : "Image Acquisition Results",
         "req" : "1C",
         "usage" : "Identifies Series and Images related to this PPS and specific image acquisition conditions.",
         "mod_tables" : [
            "table_C.4-15",
            "table_10-2"
         ],
         "entity" : ""
      }
   },
   "errors" : [
      "Can't handle table_8.8-1 (in table_C.12-1 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_C.12-6 after (0400,0401))",
      "Can't handle table_8.8-1 (in table_C.4-13:table_10-18 after (0040,0039))",
      "Can't handle table_8.8-1 (in table_C.4-13:table_10-18 after (0040,003A))",
      "Can't handle table_8.8-1 (in table_C.4-13 after (0032,1064))",
      "Can't handle table_8.8-1 (in table_C.4-13 after (0040,0008))",
      "Can't handle table_8.8-1 (in table_C.4-13:table_10-2 after (0040,A043))",
      "Can't handle table_8.8-1 (in table_C.4-13:table_10-2 after (0040,A168))",
      "Can't handle table_8.8-1 (in table_C.4-13:table_10-2 after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.4-13:table_10-2 after (0040,A043))",
      "Can't handle table_8.8-1 (in table_C.4-13:table_10-2 after (0040,A168))",
      "Can't handle table_8.8-1 (in table_C.4-13:table_10-2 after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.4-14 after (0008,1032))",
      "Can't handle table_8.8-1 (in table_C.4-14 after (0040,1012))",
      "Can't handle table_8.8-1 (in table_C.4-14 after (0040,0281))",
      "Can't handle table_8.8-1 (in table_C.4-15 after (0040,0260))",
      "Can't handle table_8.8-1 (in table_C.4-15:table_10-2 after (0040,A043))",
      "Can't handle table_8.8-1 (in table_C.4-15:table_10-2 after (0040,A168))",
      "Can't handle table_8.8-1 (in table_C.4-15:table_10-2 after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.4-15:table_10-2 after (0040,A043))",
      "Can't handle table_8.8-1 (in table_C.4-15:table_10-2 after (0040,A168))",
      "Can't handle table_8.8-1 (in table_C.4-15:table_10-2 after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.4-15:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.4-15:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.4-15:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.4-15:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.4-15 after (0008,103F))",
      "Can't handle table_8.8-1 (in table_C.4-16 after (0008,2229))",
      "Can't handle table_8.8-1 (in table_C.4-17 after (0040,0320))",
      "Can't handle table_8.8-1 (in table_C.4-17 after (0040,0296))",
      "Can't handle table_8.8-1 (in table_C.4-17 after (0040,0295))"
   ]
}
