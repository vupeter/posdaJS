var data = {
   "tags" : {
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a168)" : {
         "module" : "Specimen",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Concept Code Sequence",
         "req" : "1C",
         "entity" : "Image"
      },
      "(0040,0555)[<0>](0040,a162)" : {
         "module" : "Acquisition Context",
         "entity" : "Image",
         "req" : "1C",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "name" : "Rational Numerator Value",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "usage" : "M"
      },
      "(0018,9506)[<0>](0020,9529)[<1>](0008,1115)[<2>](0008,114a)[<3>](0008,1155)" : {
         "entity" : "Image",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8.21.2.3-1",
            "table_10-13",
            "table_10-11"
         ],
         "req" : "1",
         "module" : "Breast Tomosynthesis Contributing Sources"
      },
      "(0018,9507)[<0>](0018,704c)" : {
         "usage" : "U",
         "name" : "Grid Focal Distance",
         "desc" : "Focal distance in mm of a FOCUSED grid.",
         "mod_tables" : [
            "table_C.8.21.3.4-1",
            "table_C.8.21.3.1.1-1",
            "table_C.8-36b"
         ],
         "req" : "3",
         "entity" : "Image",
         "module" : "Breast Tomosynthesis Acquisition"
      },
      "(0028,9520)" : {
         "mod_tables" : [
            "table_C.7.6.21-1"
         ],
         "name" : "Image to Equipment Mapping Matrix",
         "desc" : [
            "A 4x4 rigid transformation matrix that maps patient coordinate space of the reconstructed image to the equipment defined original coordinate space. Matrix elements shall be listed in row-major order. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.21.1"
               }
            },
            "."
         ],
         "usage" : "U",
         "req" : "1",
         "entity" : "Image",
         "module" : "Image - Equipment Coordinate Relationship"
      },
      "(0100,0420)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "SOP Authorization DateTime",
         "usage" : "M",
         "desc" : "The date and time when the SOP Instance Status (0100,0410) was set to AO.",
         "req" : "3",
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0008,1250)[<0>](0020,000e)" : {
         "req" : "1",
         "usage" : "M",
         "name" : "Series Instance UID",
         "desc" : "Instance UID of Related Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0008,1164)[<0>](0008,1161)" : {
         "name" : "Simple Frame List",
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "mod_tables" : [
            "table_C.12-9"
         ],
         "desc" : [
            "A list of Frames that were extracted in the form of a simple list.",
            "Required if object extraction is based on a Frame Level Retrieve using the Simple Frame List (0008,1161) attribute.",
            [
               "See ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "xrefstyle" : "select: labelnumber",
                     "targetptr" : "PS3.4",
                     "targetdoc" : "PS3.4"
                  }
               },
               " \"Instance and Frame Level Retrieve SOP Classes\""
            ]
         ],
         "req" : "1C",
         "entity" : "Image",
         "module" : "Frame Extraction"
      },
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1150)" : {
         "module" : "Common Instance Reference",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ],
         "usage" : "U",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "entity" : "Image"
      },
      " (0010,0027) [<0>](0010,0024)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "usage" : "M"
      },
      "(0018,9507)[<0>](0018,9538)[<1>](0018,1720)" : {
         "module" : "Breast Tomosynthesis Acquisition",
         "req" : "1C",
         "desc" : [
            "Required if a value of Collimator Shape (0018,1700) is POLYGONAL.",
            "Multiple Values where the first set of two values are:",
            "row of the origin vertex;",
            "column of the origin vertex.",
            "Two or more pairs of values follow and are the row and column coordinates of the other vertices of the polygon collimator. Polygon collimators are implicitly closed from the last vertex to the origin vertex and all edges shall be non-intersecting except at the vertices."
         ],
         "usage" : "U",
         "name" : "Vertices of the Polygonal Collimator",
         "mod_tables" : [
            "table_C.8.21.3.4-1",
            "table_C.8.21.3.1.2-1",
            "table_C.8-28b"
         ],
         "entity" : "Image"
      },
      "(0018,9507)[<0>](0008,2112)[<1>](0008,1150)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8.21.3.4-1",
            "table_C.8.21.3.1.1-1",
            "table_10-3",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "U",
         "req" : "1",
         "module" : "Breast Tomosynthesis Acquisition"
      },
      "(0010,0021)" : {
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
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
         "name" : "Issuer of Patient ID",
         "req" : "3",
         "module" : "Patient"
      },
      "(0008,0117)" : {
         "req" : "3",
         "name" : "Context UID",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1103)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "desc" : "Person's telephone number(s)",
         "name" : "Person's Telephone Numbers",
         "usage" : "M"
      },
      "(0018,9507)[<0>](0018,7058)" : {
         "entity" : "Image",
         "req" : "3",
         "name" : "Filter Beam Path Length Maximum",
         "usage" : "U",
         "desc" : [
            "See Attribute Description in ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.7.10",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "mod_tables" : [
            "table_C.8.21.3.4-1"
         ],
         "module" : "Breast Tomosynthesis Acquisition"
      },
      "(0018,9507)[<0>](0018,9508)" : {
         "req" : "1C",
         "name" : "Primary Positioner Scan Arc",
         "desc" : [
            "Total amount of rotation of the primary positioner in degrees.",
            "Required if present and consistent in the contributing SOP Instances. Required if Modality (0008,0060) is MG."
         ],
         "usage" : "U",
         "mod_tables" : [
            "table_C.8.21.3.4-1",
            "table_C.8.21.3.1.3-1"
         ],
         "entity" : "Image",
         "module" : "Breast Tomosynthesis Acquisition"
      },
      "(0010,0040)" : {
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
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient's Sex",
         "req" : "2",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0040,0512)" : {
         "req" : "1",
         "name" : "Container Identifier",
         "usage" : "U",
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
         "entity" : "Image",
         "module" : "Specimen"
      },
      "(0028,0002)" : [
         {
            "module" : "Image Pixel",
            "req" : "1",
            "usage" : "M",
            "mod_tables" : [
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
            "entity" : "Image"
         },
         {
            "module" : "X-Ray 3D Image",
            "desc" : "Number of samples (color planes) in this image shall have a value of 1.",
            "mod_tables" : [
               "table_C.8.21.1-1"
            ],
            "name" : "Samples per Pixel",
            "usage" : "M",
            "req" : "1",
            "entity" : "Image"
         }
      ],
      "(0018,9507)[<0>](0018,9538)[<1>](0018,1411)" : {
         "entity" : "Image",
         "name" : "Exposure Index",
         "mod_tables" : [
            "table_C.8.21.3.4-1",
            "table_10-23"
         ],
         "desc" : [
            "Measure of the detector response to radiation in the relevant image region of an image acquired with a digital x-ray imaging system as defined in IEC 62494-1.",
            {
               "el" : "note",
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
                                 "content" : [
                                    "A string rather than binary Value Representation is used for this Attribute, in order to allow the sender to control the precision of the value as suggested in the report of AAPM Task Group 116."
                                 ],
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_fed62ca5-6e4b-41de-8d9c-09631af0e579"
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
                                    "This index value is scaled as defined by IEC 62494-1."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_43f525df-4811-46e0-9074-796cd064a8ea"
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
         ],
         "usage" : "U",
         "req" : "3",
         "module" : "Breast Tomosynthesis Acquisition"
      },
      "(0010,2294)[<0>](0010,2296)" : {
         "req" : "1",
         "usage" : "M",
         "desc" : [
            "Identification of the organization with which an animal is registered.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Breed Registry Code Sequence",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0008,1062)[<0>](0040,1102)" : {
         "module" : "General Study",
         "desc" : "Person's mailing address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Person's Address",
         "req" : "3",
         "entity" : "Study"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1150)" : {
         "module" : "X-Ray 3D Image",
         "mod_tables" : [
            "table_C.8.21.1-1",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "entity" : "Image"
      },
      "(0018,a001)[<0>](0018,1050)" : {
         "name" : "Spatial Resolution",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "usage" : "M",
         "req" : "3",
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0028,1101)" : {
         "module" : "Image Pixel",
         "entity" : "Image",
         "name" : "Red Palette Color Lookup Table Descriptor",
         "mod_tables" : [
            "table_C.7-11b"
         ],
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
         "usage" : "M",
         "req" : "1C"
      },
      "(0010,21b0)" : {
         "entity" : "Study",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "desc" : "Additional information about the Patient's medical history.",
         "name" : "Additional Patient History",
         "module" : "Patient Study"
      },
      "(0040,0555)[<0>](0040,a040)" : {
         "entity" : "Image",
         "req" : "3",
         "name" : "Value Type",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "usage" : "M",
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
         "module" : "Acquisition Context"
      },
      "(0018,0012)[<0>](0018,0014)" : {
         "req" : "1",
         "usage" : "C - Required if contrast media was applied.",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "desc" : [
            "Sequence that identifies the route of administration of contrast agent.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Contrast/Bolus Administration Route Sequence",
         "entity" : "Image",
         "module" : "Enhanced Contrast/Bolus"
      },
      "(0088,0200)[<0>](0028,1103)" : {
         "mod_tables" : [
            "table_C.8.21.1-1",
            "table_C.7-11b"
         ],
         "usage" : "M",
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
         "name" : "Blue Palette Color Lookup Table Descriptor",
         "req" : "1C",
         "entity" : "Image",
         "module" : "X-Ray 3D Image"
      },
      "(0018,9507)[<0>](0018,9538)[<1>](0008,3010)" : {
         "module" : "Breast Tomosynthesis Acquisition",
         "entity" : "Image",
         "desc" : "Unique identification of the irradiation event(s) associated with the acquisition of this image.",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8.21.3.4-1"
         ],
         "name" : "Irradiation Event UID",
         "req" : "3"
      },
      "(0018,9507)[<0>](0018,7054)" : {
         "module" : "Breast Tomosynthesis Acquisition",
         "entity" : "Image",
         "req" : "3",
         "mod_tables" : [
            "table_C.8.21.3.4-1"
         ],
         "name" : "Filter Thickness Maximum",
         "usage" : "U",
         "desc" : [
            "See Attribute Description in ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.7.10"
               },
               "el" : "xref"
            },
            "."
         ]
      },
      "(0008,1052)[<0>](0008,0080)" : {
         "req" : "1C",
         "name" : "Institution Name",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0028,1350)" : {
         "module" : "Breast View",
         "entity" : "Image",
         "name" : "Partial View",
         "usage" : "M",
         "desc" : [
            "Indicates whether this image is a partial view, that is a subset of a single view of the breast.",
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
            "If this Attribute is absent, then the image may or may not be a partial view.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_d8d2879f-630a-4d69-a28e-0069c6bdb332"
                     },
                     "content" : [
                        "This may occur when a breast is larger than the active area of the detector."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            },
            "If this Attribute is present, its value shall be NO if there is a View Modifier Code Sequence (0054,0222) Item of value (R-102D6, SRT, \"Magnification\") or (R-102D7, SRT, \"Spot Compression\")."
         ],
         "mod_tables" : [
            "table_C.8.21.6-1"
         ],
         "req" : "3"
      },
      "(0040,0520)[<0>](0008,0070)" : {
         "name" : "Manufacturer",
         "desc" : "Manufacturer of the container component.",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "req" : "3",
         "entity" : "Image",
         "module" : "Specimen"
      },
      "(fffa,fffa)[<0>](0400,0305)" : {
         "entity" : "Image",
         "req" : "1C",
         "usage" : "M",
         "name" : "Certified Timestamp Type",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_cae60b6b-4fad-4c20-981d-247bbf9c6471"
                     }
                  },
                  "\n                    "
               ]
            }
         ],
         "module" : "SOP Common"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a162)" : [
         {
            "entity" : "Series",
            "req" : "1C",
            "usage" : "M",
            "desc" : [
               "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
            ],
            "name" : "Rational Numerator Value",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "module" : "General Series"
         },
         {
            "req" : "1C",
            "desc" : [
               "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
            ],
            "mod_tables" : [
               "table_C.8-76b",
               "table_10-9",
               "table_10-2"
            ],
            "name" : "Rational Numerator Value",
            "usage" : "M",
            "entity" : "Series",
            "module" : "Enhanced Mammography Series"
         }
      ],
      "(0018,9507)[<0>](0018,11a2)" : {
         "module" : "Breast Tomosynthesis Acquisition",
         "req" : "1",
         "desc" : "The compression force applied to the body part during exposure, measured in Newtons.",
         "mod_tables" : [
            "table_C.8.21.3.4-1"
         ],
         "usage" : "U",
         "name" : "Compression Force",
         "entity" : "Image"
      },
      "(0018,9507)[<0>](0018,9538)[<1>](0018,1510)" : {
         "module" : "Breast Tomosynthesis Acquisition",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8.21.3.4-1"
         ],
         "desc" : "Signed position in degrees of the X-Ray beam vector in the coronal anatomical plane as if the patient were standing facing the equipment where vertical is zero.",
         "name" : "Positioner Primary Angle",
         "req" : "1",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1155)" : [
         {
            "module" : "General Series",
            "entity" : "Series",
            "req" : "1",
            "name" : "Referenced SOP Instance UID",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2",
               "table_10-11"
            ],
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "usage" : "M"
         },
         {
            "req" : "1",
            "usage" : "M",
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "name" : "Referenced SOP Instance UID",
            "mod_tables" : [
               "table_C.8-76b",
               "table_10-9",
               "table_10-2",
               "table_10-11"
            ],
            "entity" : "Series",
            "module" : "Enhanced Mammography Series"
         }
      ],
      "(0040,0260)[<0>](0040,0440)[<1>](0040,08ea)" : {
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
         "req" : "1C",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0008,1052)[<0>](0040,1102)" : {
         "entity" : "Series",
         "desc" : "Person's mailing address",
         "name" : "Person's Address",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "req" : "3",
         "module" : "General Series"
      },
      "(0040,0560)[<0>](0040,0600)" : {
         "entity" : "Image",
         "req" : "3",
         "name" : "Specimen Short Description",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U",
         "desc" : "Short textual specimen description (may include ancestor specimen descriptions).",
         "module" : "Specimen"
      },
      "(0008,1062)[<0>](0008,0080)" : {
         "module" : "General Study",
         "req" : "1C",
         "name" : "Institution Name",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "entity" : "Study"
      },
      "(0088,0200)[<0>](0028,2000)" : {
         "entity" : "Image",
         "req" : "3",
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
         "name" : "ICC Profile",
         "mod_tables" : [
            "table_C.8.21.1-1",
            "table_C.7-11b"
         ],
         "usage" : "M",
         "module" : "X-Ray 3D Image"
      },
      "(0012,0071)" : {
         "name" : "Clinical Trial Series ID",
         "mod_tables" : [
            "table_C.7-5b"
         ],
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
         "usage" : "U",
         "req" : "3",
         "entity" : "Series",
         "module" : "Clinical Trial Series"
      },
      "(0008,1052)[<0>](0040,1101)" : {
         "name" : "Person Identification Code Sequence",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "req" : "1",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a168)" : [
         {
            "req" : "1C",
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
            "name" : "Concept Code Sequence",
            "entity" : "Series",
            "module" : "General Series"
         },
         {
            "module" : "Enhanced Mammography Series",
            "req" : "1C",
            "name" : "Concept Code Sequence",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-76b",
               "table_10-9",
               "table_10-2"
            ],
            "desc" : [
               "Coded concept value of this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is CODE."
            ],
            "entity" : "Series"
         }
      ],
      "(0008,0110)[<0>](0008,0114)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme External ID",
         "desc" : "The coding scheme identifier as defined in an external registry. Required if coding scheme is registered and Coding Scheme UID (0008,010C) is not present.",
         "usage" : "M",
         "req" : "2C",
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0100,0424)" : {
         "desc" : "Any comments associated with the setting of the SOP Instance Status (0100,0410) to AO.",
         "name" : "SOP Authorization Comment",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0018,9507)[<0>](0018,7062)" : {
         "module" : "Breast Tomosynthesis Acquisition",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8.21.3.4-1"
         ],
         "desc" : [
            "Text description of the mechanism of exposure control.",
            "May describe the number and type of exposure sensors or position of the sensitive area of the imaging detector."
         ],
         "name" : "Exposure Control Mode Description",
         "usage" : "U",
         "req" : "1"
      },
      "(0040,0555)[<0>](0040,a163)" : {
         "name" : "Rational Denominator Value",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "usage" : "M",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "req" : "1C",
         "entity" : "Image",
         "module" : "Acquisition Context"
      },
      "(0018,a001)[<0>](0018,1201)" : {
         "module" : "SOP Common",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "entity" : "Image"
      },
      "(0018,0036)" : {
         "module" : "Intervention",
         "entity" : "Image",
         "req" : "3",
         "usage" : "U",
         "desc" : [
            "Sequence describing interventional therapies or procedures.",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Intervention Sequence",
         "mod_tables" : [
            "table_C.7-19"
         ]
      },
      "(0018,0012)[<0>](0018,1041)" : {
         "req" : "2",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "name" : "Contrast/Bolus Volume",
         "usage" : "C - Required if contrast media was applied.",
         "desc" : "Total volume administered in milliliters of diluted contrast agent.",
         "entity" : "Image",
         "module" : "Enhanced Contrast/Bolus"
      },
      "(0020,0200)" : {
         "entity" : "Frame of Reference",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "usage" : "C - Required if time synchronization was applied.",
         "name" : "Synchronization Frame of Reference UID",
         "desc" : [
            "UID of common synchronization environment. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.4.2.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "req" : "1",
         "module" : "Synchronization"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0062,000b)" : {
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Referenced Segment Number",
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
         "req" : "1C"
      },
      "(0008,1070)" : {
         "entity" : "Series",
         "usage" : "M",
         "name" : "Operators' Name",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : "Name(s) of the operator(s) supporting the Series.",
         "req" : "3",
         "module" : "General Series"
      },
      "(0008,1049)[<0>](0040,1102)" : {
         "entity" : "Study",
         "desc" : "Person's mailing address",
         "usage" : "M",
         "name" : "Person's Address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "3",
         "module" : "General Study"
      },
      "(0040,0555)[<0>](0040,a043)" : {
         "name" : "Concept Name Code Sequence",
         "desc" : [
            "A concept that constrains the meaning of (i.e., defines the role of) the Observation Value. The \"Name\" component of a Name/Value pair.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "req" : "1",
         "entity" : "Image",
         "module" : "Acquisition Context"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a30a)" : [
         {
            "desc" : [
               "Numeric value for this name-value Item. Only a single value shall be present.",
               "Required if Value Type (0040,A040) is NUMERIC."
            ],
            "usage" : "M",
            "name" : "Numeric Value",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "req" : "1C",
            "entity" : "Series",
            "module" : "General Series"
         },
         {
            "entity" : "Series",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-76b",
               "table_10-9",
               "table_10-2"
            ],
            "desc" : [
               "Numeric value for this name-value Item. Only a single value shall be present.",
               "Required if Value Type (0040,A040) is NUMERIC."
            ],
            "name" : "Numeric Value",
            "req" : "1C",
            "module" : "Enhanced Mammography Series"
         }
      ],
      "(0008,1010)" : {
         "usage" : "M",
         "name" : "Station Name",
         "desc" : "User defined name identifying the machine that produced the composite instances.",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "req" : "3",
         "entity" : "Equipment",
         "module" : "General Equipment"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)" : [
         {
            "module" : "General Series",
            "entity" : "Series",
            "req" : "3",
            "name" : "Content Item Modifier Sequence",
            "desc" : [
               "Sequence that specifies modifiers for a Protocol Context Content Item. One or more Items are permitted in this Sequence. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.4.10.1"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9"
            ]
         },
         {
            "module" : "Enhanced Mammography Series",
            "entity" : "Series",
            "req" : "3",
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
            "mod_tables" : [
               "table_C.8-76b",
               "table_10-9"
            ],
            "name" : "Content Item Modifier Sequence",
            "usage" : "M"
         }
      ],
      "(0028,0006)" : {
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
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "req" : "1C",
         "entity" : "Image",
         "module" : "Image Pixel"
      },
      "(0010,1100)[<0>](0040,e024)[<1>](0040,e031)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "desc" : "Uniquely identifies a Community to which requests for the referenced instances can be directed.",
         "name" : "Home Community ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "req" : "3"
      },
      "(0018,9506)[<0>](0008,1072)[<1>](0040,1101)" : {
         "entity" : "Image",
         "name" : "Person Identification Code Sequence",
         "usage" : "U",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.8.21.2.3-1",
            "table_10-13",
            "table_10-1"
         ],
         "req" : "1",
         "module" : "Breast Tomosynthesis Contributing Sources"
      },
      "(0040,0275)[<0>](0040,100a)" : [
         {
            "entity" : "Series",
            "usage" : "M",
            "desc" : [
               "Coded Reason for requesting this procedure.",
               "One or more Items are permitted in this Sequence."
            ],
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9"
            ],
            "name" : "Reason for Requested Procedure Code Sequence",
            "req" : "3",
            "module" : "General Series"
         },
         {
            "module" : "Enhanced Mammography Series",
            "entity" : "Series",
            "req" : "3",
            "name" : "Reason for Requested Procedure Code Sequence",
            "desc" : [
               "Coded Reason for requesting this procedure.",
               "One or more Items are permitted in this Sequence."
            ],
            "mod_tables" : [
               "table_C.8-76b",
               "table_10-9"
            ],
            "usage" : "M"
         }
      ],
      "(0018,0012)[<0>](0052,0001)" : {
         "entity" : "Image",
         "name" : "Contrast/Bolus Ingredient Percent by Volume",
         "usage" : "C - Required if contrast media was applied.",
         "desc" : "Percentage by volume of active ingredient in the total volume.",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "req" : "3",
         "module" : "Enhanced Contrast/Bolus"
      },
      "(0010,0026)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "desc" : [
            [
               "A sequence containing the value used for Patient ID (0010,0020) and related Attributes in the source composite instances that contained a group of subjects whose data was acquired at the same time, from which this composite instance was extracted. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.1.4.1.1"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Only a single Item is permitted in this sequence."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "name" : "Source Patient Group Identification Sequence",
         "req" : "3"
      },
      "(0040,0555)" : {
         "module" : "Acquisition Context",
         "entity" : "Image",
         "desc" : [
            "A sequence of Items that describes the conditions present during the acquisition of the data of the SOP Instance.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "name" : "Acquisition Context Sequence",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "usage" : "M",
         "req" : "2"
      },
      "(0018,9506)[<0>](0008,1072)[<1>](0008,0082)" : {
         "module" : "Breast Tomosynthesis Contributing Sources",
         "entity" : "Image",
         "req" : "1C",
         "mod_tables" : [
            "table_C.8.21.2.3-1",
            "table_10-13",
            "table_10-1"
         ],
         "usage" : "U",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Institution Code Sequence"
      },
      "(0008,1032)" : {
         "entity" : "Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Procedure Code Sequence",
         "desc" : [
            "A Sequence that conveys the type of procedure performed.",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "module" : "General Study"
      },
      "(0400,0561)[<0>](0400,0563)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Identification of the system that removed and/or replaced the attributes.",
         "usage" : "M",
         "name" : "Modifying System"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a123)" : [
         {
            "module" : "General Series",
            "entity" : "Series",
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
            "name" : "Person Name",
            "req" : "1C"
         },
         {
            "entity" : "Series",
            "req" : "1C",
            "name" : "Person Name",
            "mod_tables" : [
               "table_C.8-76b",
               "table_10-9",
               "table_10-2"
            ],
            "usage" : "M",
            "desc" : [
               "Person name value for this name-value Item.",
               "Required if Value Type (0040,A040) is PNAME."
            ],
            "module" : "Enhanced Mammography Series"
         }
      ],
      "(0018,9507)[<0>](0018,9420)" : {
         "module" : "Breast Tomosynthesis Acquisition",
         "req" : "1",
         "name" : "X-Ray Receptor Type",
         "mod_tables" : [
            "table_C.8.21.3.4-1"
         ],
         "desc" : [
            "Identifies the type of X-Ray receptor used.",
            {
               "list" : [
                  [
                     "DIGITAL_DETECTOR",
                     null
                  ]
               ],
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "usage" : "U",
         "entity" : "Image"
      },
      "(0008,1072)[<0>](0008,0081)" : {
         "module" : "General Series",
         "req" : "3",
         "usage" : "M",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "name" : "Institution Address",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a163)" : [
         {
            "req" : "1C",
            "desc" : [
               "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Rational Numerator Value (0040,A162) is present."
            ],
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "name" : "Rational Denominator Value",
            "entity" : "Series",
            "module" : "General Series"
         },
         {
            "module" : "Enhanced Mammography Series",
            "req" : "1C",
            "desc" : [
               "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Rational Numerator Value (0040,A162) is present."
            ],
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-76b",
               "table_10-9",
               "table_10-2"
            ],
            "name" : "Rational Denominator Value",
            "entity" : "Series"
         }
      ],
      "(0008,1049)[<0>](0040,1103)" : {
         "module" : "General Study",
         "req" : "3",
         "desc" : "Person's telephone number(s)",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person's Telephone Numbers",
         "usage" : "M",
         "entity" : "Study"
      },
      "(0018,9507)[<0>](0018,1110)" : {
         "desc" : [
            "Distance in mm from source to detector center on the chest wall line.",
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
                                 "attrs" : {
                                    "xml:id" : "para_6bad8c48-47e0-42b2-bbef-eac983413b52"
                                 },
                                 "el" : "para",
                                 "content" : [
                                    "This value is traditionally referred to as Source Image Distance (SID)."
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
                                    "See ",
                                    {
                                       "attrs" : {
                                          "xrefstyle" : "select: label",
                                          "linkend" : "sect_C.8.11.7.1.1"
                                       },
                                       "el" : "xref"
                                    },
                                    "."
                                 ],
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_86550718-1765-4733-9f8d-c09578a7c13b"
                                 }
                              },
                              "\n                        "
                           ],
                           "el" : "listitem"
                        },
                        "\n                      "
                     ],
                     "attrs" : {
                        "numeration" : "arabic"
                     },
                     "el" : "orderedlist"
                  },
                  "\n                    "
               ]
            }
         ],
         "name" : "Distance Source to Detector",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8.21.3.4-1"
         ],
         "req" : "1",
         "entity" : "Image",
         "module" : "Breast Tomosynthesis Acquisition"
      },
      "(0018,9507)[<0>](0018,9538)[<1>](0018,1710)" : {
         "entity" : "Image",
         "req" : "1C",
         "desc" : [
            "Required if a value of Collimator Shape (0018,1700) is CIRCULAR. Location of the center of the circular collimator with respect to pixels in the image given as row and column. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.7.3.1.1"
               },
               "el" : "xref"
            },
            "."
         ],
         "usage" : "U",
         "name" : "Center of Circular Collimator",
         "mod_tables" : [
            "table_C.8.21.3.4-1",
            "table_C.8.21.3.1.2-1",
            "table_C.8-28b"
         ],
         "module" : "Breast Tomosynthesis Acquisition"
      },
      "(0010,1002)[<0>](0010,0024)" : {
         "entity" : "Patient",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "req" : "3",
         "module" : "Patient"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0032)" : {
         "req" : "3",
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
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
         "module" : "Patient"
      },
      "(0008,1110)" : {
         "module" : "General Study",
         "entity" : "Study",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Referenced Study Sequence",
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
         "usage" : "M"
      },
      "(0028,1352)" : {
         "entity" : "Image",
         "req" : "1C",
         "desc" : [
            "Sequence that describes the portion or section of the breast captured in a partial view image.",
            "One or two Items shall be included in this Sequence.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.11.7.1.3"
                  }
               },
               "."
            ],
            "Required if Partial View (0028,1350) is present with a value of YES."
         ],
         "mod_tables" : [
            "table_C.8.21.6-1"
         ],
         "usage" : "M",
         "name" : "Partial View Code Sequence",
         "module" : "Breast View"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0033)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Universal Entity ID Type",
         "usage" : "M",
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
         "req" : "1C",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0040,0275)[<0>](0020,000d)" : [
         {
            "entity" : "Series",
            "req" : "3",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9"
            ],
            "desc" : "The unique identifier for the Study provided for this Requested Procedure.",
            "name" : "Study Instance UID",
            "usage" : "M",
            "module" : "General Series"
         },
         {
            "module" : "Enhanced Mammography Series",
            "req" : "3",
            "name" : "Study Instance UID",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-76b",
               "table_10-9"
            ],
            "desc" : "The unique identifier for the Study provided for this Requested Procedure.",
            "entity" : "Series"
         }
      ],
      "(0010,2210)" : {
         "module" : "General Series",
         "req" : "1C",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_6250224a-3316-415a-9bc4-04999c343dd9"
                     }
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Anatomical Orientation Type",
         "entity" : "Series"
      },
      "(0008,0012)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "3",
         "desc" : [
            "Date the SOP Instance was created.",
            "This is the date that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "usage" : "M",
         "name" : "Instance Creation Date",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1155)" : {
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ],
         "entity" : "Image",
         "module" : "Common Instance Reference"
      },
      "(0018,9507)[<0>](0018,7042)" : {
         "req" : "3",
         "usage" : "U",
         "name" : "Grid Thickness",
         "mod_tables" : [
            "table_C.8.21.3.4-1",
            "table_C.8.21.3.1.1-1",
            "table_C.8-36b"
         ],
         "desc" : "The thickness in mm of the X-Ray absorbing material used in the grid.",
         "entity" : "Image",
         "module" : "Breast Tomosynthesis Acquisition"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a168)" : {
         "module" : "Specimen",
         "entity" : "Image",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "name" : "Concept Code Sequence",
         "req" : "1C"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0088,0130)" : {
         "module" : "X-Ray 3D Image",
         "name" : "Storage Media File-Set ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.21.1-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the Composite Object (s) reside.",
         "req" : "3",
         "entity" : "Image"
      },
      "(fffa,fffa)[<0>](0400,0100)" : {
         "entity" : "Image",
         "req" : "1",
         "desc" : "A UID that can be used to uniquely reference this signature.",
         "usage" : "M",
         "name" : "Digital Signature UID",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common"
      },
      "(0008,0110)[<0>](0008,010c)" : {
         "module" : "SOP Common",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "desc" : "The coding scheme UID identifier. Required if coding scheme is identified by an ISO 8824 object identifier compatible with the UI VR.",
         "name" : "Coding Scheme UID",
         "entity" : "Image"
      },
      "(0018,a001)[<0>](0018,1020)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Software Versions",
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
         "usage" : "M"
      },
      "(0018,9507)[<0>](0018,1166)" : {
         "module" : "Breast Tomosynthesis Acquisition",
         "entity" : "Image",
         "usage" : "U",
         "name" : "Grid",
         "mod_tables" : [
            "table_C.8.21.3.4-1",
            "table_C.8.21.3.1.1-1"
         ],
         "desc" : [
            [
               "Identifies the grid. May be multi-valued. See Attribute Description in ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.7.11"
                  },
                  "el" : "xref"
               },
               " for Defined Terms."
            ],
            "Required if present and consistent in the contributing SOP Instances. Required if Modality (0008,0060) is MG."
         ],
         "req" : "1C"
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
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0018,9507)[<0>](0018,9538)[<1>](0018,1706)" : {
         "req" : "1C",
         "usage" : "U",
         "name" : "Collimator Upper Horizontal Edge",
         "mod_tables" : [
            "table_C.8.21.3.4-1",
            "table_C.8.21.3.1.2-1",
            "table_C.8-28b"
         ],
         "desc" : [
            "Required if a value of Collimator Shape (0018,1700) is RECTANGULAR. Location of the upper edge of the rectangular collimator with respect to pixels in the image given as row. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.7.3.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "entity" : "Image",
         "module" : "Breast Tomosynthesis Acquisition"
      },
      "(0008,0016)" : {
         "module" : "SOP Common",
         "req" : "1",
         "name" : "SOP Class UID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
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
                  "targetdoc" : "PS3.4",
                  "targetptr" : "PS3.4",
                  "xrefstyle" : "select: labelnumber"
               },
               "el" : "olink"
            },
            "."
         ],
         "entity" : "Image"
      },
      "(0040,0520)[<0>](0050,001b)" : {
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Container Component ID",
         "desc" : "Manufacturer's identifier of the container component, e.g., Lot Number and/or Version.",
         "usage" : "U",
         "req" : "3",
         "entity" : "Image"
      },
      "(0020,9172)[<0>](0008,1150)" : {
         "module" : "SOP Common",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "usage" : "M",
         "entity" : "Image"
      },
      "(0008,009d)[<0>](0008,0080)" : {
         "entity" : "Study",
         "usage" : "M",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Name",
         "req" : "1C",
         "module" : "General Study"
      },
      "(0012,0064)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "A code describing the mechanism or method use to remove the patient's identity.",
            "One or more Items shall be included in this Sequence. Multiple items are used if successive de-identification steps have been performed or to describe options of a defined profile.",
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method (0012,0063) is not present. May be present otherwise."
         ],
         "name" : "De-identification Method Code Sequence",
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a161)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Floating Point Value",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "usage" : "U",
         "entity" : "Image",
         "module" : "Specimen"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,0054)" : {
         "req" : "3",
         "desc" : "Title of the DICOM Application Entity where the Composite Object(s) may be retrieved on the network.",
         "name" : "Retrieve AE Title",
         "mod_tables" : [
            "table_C.8.21.1-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M",
         "entity" : "Image",
         "module" : "X-Ray 3D Image"
      },
      "(0040,0560)[<0>](0040,059a)" : {
         "entity" : "Image",
         "req" : "3",
         "name" : "Specimen Type Code Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "desc" : [
            "Specimen Type.",
            "Only a single Item is permitted in this Sequence."
         ],
         "usage" : "U",
         "module" : "Specimen"
      },
      "(0088,0200)[<0>](0028,0002)" : {
         "module" : "X-Ray 3D Image",
         "req" : "1",
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
         "mod_tables" : [
            "table_C.8.21.1-1",
            "table_C.7-11b"
         ],
         "usage" : "M",
         "name" : "Samples per Pixel",
         "entity" : "Image"
      },
      "(0018,a001)[<0>](0018,1200)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "name" : "Date of Last Calibration",
         "req" : "3",
         "module" : "SOP Common"
      },
      "(0010,2294)" : {
         "entity" : "Patient",
         "desc" : [
            "Information identifying an animal within a breed registry.",
            "Zero or more Items shall be included in this Sequence.",
            "Required if the patient is an animal."
         ],
         "name" : "Breed Registration Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "2C",
         "module" : "Patient"
      },
      "(0040,0275)[<0>](0040,1002)" : [
         {
            "entity" : "Series",
            "desc" : "Reason for requesting this procedure.",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9"
            ],
            "name" : "Reason for the Requested Procedure",
            "req" : "3",
            "module" : "General Series"
         },
         {
            "module" : "Enhanced Mammography Series",
            "req" : "3",
            "desc" : "Reason for requesting this procedure.",
            "usage" : "M",
            "name" : "Reason for the Requested Procedure",
            "mod_tables" : [
               "table_C.8-76b",
               "table_10-9"
            ],
            "entity" : "Series"
         }
      ],
      "(0010,1100)[<0>](0008,1199)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "1",
         "usage" : "M",
         "name" : "Referenced SOP Sequence",
         "desc" : [
            "References to object instances.",
            "One or more Items shall be included in this Sequence"
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ]
      },
      "(0040,0560)[<0>](0008,2228)[<1>](0008,2230)" : {
         "module" : "Specimen",
         "desc" : [
            "Sequence of Items that modifies the primary anatomic structure of interest in this Instance.",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Primary Anatomic Structure Modifier Sequence",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-8"
         ],
         "req" : "3",
         "entity" : "Image"
      },
      "(0008,0096)[<0>](0008,0081)" : {
         "module" : "General Study",
         "entity" : "Study",
         "req" : "3",
         "name" : "Institution Address",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a123)" : [
         {
            "entity" : "Series",
            "req" : "1C",
            "usage" : "M",
            "desc" : [
               "Person name value for this name-value Item.",
               "Required if Value Type (0040,A040) is PNAME."
            ],
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "name" : "Person Name",
            "module" : "General Series"
         },
         {
            "module" : "Enhanced Mammography Series",
            "desc" : [
               "Person name value for this name-value Item.",
               "Required if Value Type (0040,A040) is PNAME."
            ],
            "usage" : "M",
            "name" : "Person Name",
            "mod_tables" : [
               "table_C.8-76b",
               "table_10-9",
               "table_10-2"
            ],
            "req" : "1C",
            "entity" : "Series"
         }
      ],
      "(0018,a001)[<0>](0008,0081)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "name" : "Institution Address",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "desc" : "Address of the institution where the equipment that contributed to the composite instance is located.",
         "req" : "3"
      },
      "(0008,1052)[<0>](0040,1103)" : {
         "entity" : "Series",
         "req" : "3",
         "name" : "Person's Telephone Numbers",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "desc" : "Person's telephone number(s)",
         "usage" : "M",
         "module" : "General Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0062,000b)" : [
         {
            "name" : "Referenced Segment Number",
            "desc" : [
               "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
               "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
            ],
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "req" : "1C",
            "entity" : "Series",
            "module" : "General Series"
         },
         {
            "entity" : "Series",
            "usage" : "M",
            "name" : "Referenced Segment Number",
            "mod_tables" : [
               "table_C.8-76b",
               "table_10-9",
               "table_10-2"
            ],
            "desc" : [
               "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
               "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
            ],
            "req" : "1C",
            "module" : "Enhanced Mammography Series"
         }
      ],
      "(0040,0515)" : {
         "module" : "Specimen",
         "req" : "3",
         "usage" : "U",
         "desc" : "Sequence of alternate identifiers for the container that contains the specimen(s) being imaged. These may have been assigned, e.g., by the manufacturer, or by another institution that collected the specimen. One or more Items are permitted in this Sequence.",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Alternate Container Identifier Sequence",
         "entity" : "Image"
      },
      "(0018,9506)[<0>](0018,1020)" : {
         "module" : "Breast Tomosynthesis Contributing Sources",
         "req" : "1C",
         "desc" : [
            [
               "Manufacturer's designation of software version of the equipment that produced the sources. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.5.1.1.3",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Required if present and consistent in the contributing SOP Instances."
         ],
         "usage" : "U",
         "mod_tables" : [
            "table_C.8.21.2.3-1",
            "table_10-13"
         ],
         "name" : "Software Versions",
         "entity" : "Image"
      },
      "(0018,9507)[<0>](0018,9538)[<1>](0040,0316)" : {
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8.21.3.4-1"
         ],
         "desc" : [
            "Average organ dose value measured in dGy.",
            {
               "el" : "note",
               "content" : [
                  "\n                      ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_7a1f90d7-51cc-4866-8295-1d900fe76b16"
                     },
                     "content" : [
                        "This may be an estimated value."
                     ]
                  },
                  "\n                    "
               ]
            }
         ],
         "name" : "Organ Dose",
         "req" : "3",
         "module" : "Breast Tomosynthesis Acquisition"
      },
      "(0010,0035)" : {
         "module" : "Patient",
         "usage" : "M",
         "name" : "Patient's Alternative Calendar",
         "mod_tables" : [
            "table_C.7-1"
         ],
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
         "req" : "1C",
         "entity" : "Patient"
      },
      "(0008,1115)" : {
         "module" : "Common Instance Reference",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "name" : "Referenced Series Sequence",
         "usage" : "U",
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this Sequence.",
            "Required if this Instance references Instances in this Study."
         ],
         "entity" : "Image"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Local Namespace Entity ID",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M",
         "req" : "1C"
      },
      "(0018,9506)[<0>](0008,1072)[<1>](0040,1104)" : {
         "entity" : "Image",
         "req" : "3",
         "name" : "Person's Telecom Information",
         "mod_tables" : [
            "table_C.8.21.2.3-1",
            "table_10-13",
            "table_10-1"
         ],
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
         "usage" : "U",
         "module" : "Breast Tomosynthesis Contributing Sources"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a043)" : [
         {
            "req" : "1",
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
            "entity" : "Series",
            "module" : "General Series"
         },
         {
            "req" : "1",
            "usage" : "M",
            "desc" : [
               "Coded concept name of this name-value Item.",
               "Only a single Item shall be included in this Sequence."
            ],
            "name" : "Concept Name Code Sequence",
            "mod_tables" : [
               "table_C.8-76b",
               "table_10-9",
               "table_10-2"
            ],
            "entity" : "Series",
            "module" : "Enhanced Mammography Series"
         }
      ],
      "(0008,0300)[<0>](0008,0301)" : {
         "desc" : "Odd group number within which the Private Data Element block is reserved.",
         "usage" : "M",
         "name" : "Private Group Reference",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0010,1100)[<0>](0040,e020)" : {
         "module" : "Patient",
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
               "title" : "Defined Terms:",
               "type" : "variablelist"
            }
         ],
         "usage" : "M",
         "name" : "Type of Instances",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "req" : "1",
         "entity" : "Patient"
      },
      "(0018,9507)[<0>](0018,9538)[<1>](0018,1712)" : {
         "module" : "Breast Tomosynthesis Acquisition",
         "mod_tables" : [
            "table_C.8.21.3.4-1",
            "table_C.8.21.3.1.2-1",
            "table_C.8-28b"
         ],
         "name" : "Radius of Circular Collimator",
         "desc" : [
            "Required if a value of Collimator Shape (0018,1700) is CIRCULAR. Radius of the circular collimator with respect to pixels in the image given as a number of pixels along the row direction. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.7.3.1.1"
               }
            },
            "."
         ],
         "usage" : "U",
         "req" : "1C",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a160)" : [
         {
            "req" : "1C",
            "desc" : [
               "Text value for this name-value Item.",
               "Required if Value Type (0040,A040) is TEXT."
            ],
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "name" : "Text Value",
            "usage" : "M",
            "entity" : "Series",
            "module" : "General Series"
         },
         {
            "req" : "1C",
            "usage" : "M",
            "name" : "Text Value",
            "mod_tables" : [
               "table_C.8-76b",
               "table_10-9",
               "table_10-2"
            ],
            "desc" : [
               "Text value for this name-value Item.",
               "Required if Value Type (0040,A040) is TEXT."
            ],
            "entity" : "Series",
            "module" : "Enhanced Mammography Series"
         }
      ],
      "(0008,0105)" : {
         "entity" : "Image",
         "req" : "1",
         "usage" : "M",
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
         "name" : "Mapping Resource",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0012,0010)" : {
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "desc" : [
            "The name of the clinical trial or research sponsor. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.1.3.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "usage" : "U",
         "name" : "Clinical Trial Sponsor Name",
         "req" : "1",
         "entity" : "Patient",
         "module" : "Clinical Trial Subject"
      },
      "(0010,2299)" : {
         "name" : "Responsible Organization",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "desc" : [
            "Name of organization with medical or welfare decision making authority for the patient.",
            "Required if patient is an animal. May be present otherwise."
         ],
         "req" : "2C",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0088,0200)[<0>](0028,0011)" : {
         "module" : "X-Ray 3D Image",
         "mod_tables" : [
            "table_C.8.21.1-1",
            "table_C.7-11b"
         ],
         "usage" : "M",
         "desc" : "Number of columns in the image",
         "name" : "Columns",
         "req" : "1",
         "entity" : "Image"
      },
      "(0050,0010)[<0>](0050,0020)" : {
         "module" : "Device",
         "req" : "3",
         "usage" : "U",
         "desc" : "Further description in free form text describing the device.",
         "name" : "Device Description",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a124)" : {
         "module" : "Specimen",
         "req" : "1C",
         "usage" : "U",
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
      "(0088,0200)[<0>](0028,1201)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8.21.1-1",
            "table_C.7-11b"
         ],
         "usage" : "M",
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
         "req" : "1C",
         "module" : "X-Ray 3D Image"
      },
      "(0040,a390)[<0>](0008,1150)" : {
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "module" : "SOP Common"
      },
      "(0018,9506)[<0>](0028,0101)" : {
         "module" : "Breast Tomosynthesis Contributing Sources",
         "req" : "1",
         "usage" : "U",
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
         "name" : "Bits Stored",
         "mod_tables" : [
            "table_C.8.21.2.3-1",
            "table_10-14"
         ],
         "entity" : "Image"
      },
      "(0008,0118)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "name" : "Mapping Resource UID",
         "desc" : "The unique identifier of the Mapping Resource",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3"
      },
      "(0018,1050)" : {
         "entity" : "Equipment",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "usage" : "M",
         "name" : "Spatial Resolution",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "req" : "3",
         "module" : "General Equipment"
      },
      "(0040,a390)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         ],
         "name" : "HL7 Structured Document Reference Sequence",
         "usage" : "M",
         "req" : "1C"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "module" : "Patient",
         "usage" : "M",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "name" : "Local Namespace Entity ID",
         "req" : "1C",
         "entity" : "Patient"
      },
      "(0008,0021)" : {
         "desc" : "Date the Series started.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Series Date",
         "req" : "3",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0010,2293)" : {
         "entity" : "Patient",
         "req" : "2C",
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
            "Zero or more Items shall be included in this Sequence.",
            "Required if the patient is an animal."
         ],
         "name" : "Patient Breed Code Sequence",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient"
      },
      "(0012,0050)" : {
         "req" : "2",
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
         "name" : "Clinical Trial Time Point ID",
         "entity" : "Study",
         "module" : "Clinical Trial Study"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1160)" : [
         {
            "module" : "General Series",
            "entity" : "Series",
            "req" : "1C",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
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
            "usage" : "M"
         },
         {
            "entity" : "Series",
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
            "mod_tables" : [
               "table_C.8-76b",
               "table_10-9",
               "table_10-2"
            ],
            "usage" : "M",
            "req" : "1C",
            "module" : "Enhanced Mammography Series"
         }
      ],
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a043)" : {
         "entity" : "Series",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "M",
         "name" : "Concept Name Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1",
         "module" : "General Series"
      },
      "(0018,9507)[<0>](0040,0314)" : {
         "module" : "Breast Tomosynthesis Acquisition",
         "mod_tables" : [
            "table_C.8.21.3.4-1"
         ],
         "name" : "Half Value Layer",
         "desc" : [
            "The thickness of Aluminum in mm required to reduce the X-Ray Output (0040,0312) by a factor of two.",
            {
               "el" : "note",
               "content" : [
                  "\n                      ",
                  {
                     "content" : [
                        "This value may be a calibrated value rather than measured during the exposure."
                     ],
                     "attrs" : {
                        "xml:id" : "para_c5ca72af-c657-4f0e-8e67-e87b926abe97"
                     },
                     "el" : "para"
                  },
                  "\n                    "
               ]
            }
         ],
         "usage" : "U",
         "req" : "1",
         "entity" : "Image"
      },
      " (0010,0027) [<0>](0010,0020)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "desc" : "Primary identifier for an individual subject.",
         "name" : "Patient ID",
         "usage" : "M",
         "req" : "1",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0018,9507)[<0>](0018,1147)" : {
         "module" : "Breast Tomosynthesis Acquisition",
         "req" : "1",
         "desc" : [
            "Shape of the Field of View in the source projection images.",
            {
               "list" : [
                  [
                     "RECTANGLE",
                     null
                  ]
               ],
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "name" : "Field of View Shape",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8.21.3.4-1"
         ],
         "entity" : "Image"
      },
      "(0018,9507)[<0>](0018,9538)[<1>](0018,9220)" : {
         "entity" : "Image",
         "desc" : [
            [
               "The actual amount of time [in milliseconds] that was used to acquire data for this projection. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.6.16.2.2.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " and ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.16.2.2.3"
                  }
               },
               " for further explanation."
            ],
            "Required if present and consistent in the contributing SOP Instances."
         ],
         "mod_tables" : [
            "table_C.8.21.3.4-1",
            "table_C.8.21.3.1.2-1"
         ],
         "name" : "Frame Acquisition Duration",
         "usage" : "U",
         "req" : "1C",
         "module" : "Breast Tomosynthesis Acquisition"
      },
      "(0040,0520)[<0>](0050,0012)" : {
         "req" : "1",
         "desc" : [
            "Type of container component.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Container Component Type Code Sequence",
         "entity" : "Image",
         "module" : "Specimen"
      },
      "(0054,0220)[<0>](0054,0222)" : {
         "module" : "Breast View",
         "mod_tables" : [
            "table_C.8.21.6-1"
         ],
         "name" : "View Modifier Code Sequence",
         "usage" : "M",
         "desc" : [
            "Sequence that provides modifiers for the view of the patient anatomy.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "req" : "2",
         "entity" : "Image"
      },
      "(0018,9506)[<0>](0018,700a)" : {
         "req" : "1",
         "desc" : "The ID or serial number of the detector used to acquire this image.",
         "usage" : "U",
         "name" : "Detector ID",
         "mod_tables" : [
            "table_C.8.21.2.3-1"
         ],
         "entity" : "Image",
         "module" : "Breast Tomosynthesis Contributing Sources"
      },
      "(0010,1100)[<0>](0040,e023)" : {
         "module" : "Patient",
         "usage" : "M",
         "desc" : [
            "Details for retrieving instances available via WADO-URI.",
            {
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "This sequence addresses use of the URI-based Web Access to DICOM Objects. Retrieval via the Web Services-based WADO-WS is addressed in the XDS Retrieval Sequence (0040,E024)."
                     ],
                     "attrs" : {
                        "xml:id" : "para_87c7f326-107c-4a18-88b9-60712a9f7041"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            },
            "Required if DICOM Retrieval Sequence (0040,E021), DICOM Media Retrieval Sequence (0040,E022), WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "WADO Retrieval Sequence",
         "req" : "1C",
         "entity" : "Patient"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a121)" : {
         "req" : "1C",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "name" : "Date",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "entity" : "Image",
         "module" : "Specimen"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a123)" : {
         "entity" : "Image",
         "req" : "1C",
         "usage" : "U",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Person Name",
         "module" : "Specimen"
      },
      "(0008,1052)[<0>](0008,0082)" : {
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Institution Code Sequence",
         "req" : "1C",
         "entity" : "Series"
      },
      "(0008,1052)[<0>](0040,1104)" : {
         "entity" : "Series",
         "usage" : "M",
         "name" : "Person's Telecom Information",
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
                     ],
                     "el" : "orderedlist"
                  },
                  "\n              "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "req" : "3",
         "module" : "General Series"
      },
      "(0018,9506)[<0>](0020,9529)[<1>](0008,1115)[<2>](0008,114a)[<3>](0020,0013)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8.21.2.3-1",
            "table_10-13"
         ],
         "name" : "Instance Number",
         "desc" : "A number that identifies this instance.",
         "usage" : "U",
         "req" : "2",
         "module" : "Breast Tomosynthesis Contributing Sources"
      },
      "(0018,9507)[<0>](0018,9538)[<1>](0018,1405)" : {
         "module" : "Breast Tomosynthesis Acquisition",
         "entity" : "Image",
         "req" : "1",
         "desc" : [
            "Indication of the applied dose, in manufacturer specific units.",
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
                                 "attrs" : {
                                    "xml:id" : "para_b7c38f9a-68a3-4d06-8057-ec97ad604bd8"
                                 },
                                 "el" : "para",
                                 "content" : [
                                    "This value is intended to provide a single location where manufacturer specific information can be found for annotation on a display or film, that has meaning to a knowledgeable observer."
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
                                    "This may be a calculated or measured value. Examples are the detector entrance dose (K",
                                    {
                                       "el" : "subscript",
                                       "content" : [
                                          "B"
                                       ]
                                    },
                                    "), the CR sensitivity value (S), or the logarithmic median (lgM)."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_ade72e7b-a4e4-4d3b-b09d-78518c414660"
                                 },
                                 "el" : "para"
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
                                    "xml:id" : "para_ef244960-796b-4644-82cd-6a868be54acb"
                                 },
                                 "content" : [
                                    "This value is manufacturer-specific. DICOM specifies standard Attributes in ",
                                    {
                                       "attrs" : {
                                          "linkend" : "table_10-23",
                                          "xrefstyle" : "select: label"
                                       },
                                       "el" : "xref"
                                    },
                                    " 'Exposure Index Macro', which are recommended."
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
            "table_C.8.21.3.4-1"
         ],
         "usage" : "U",
         "name" : "Relative X-Ray Exposure"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a163)" : {
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "name" : "Rational Denominator Value",
         "usage" : "U",
         "req" : "1C",
         "entity" : "Image"
      },
      "(0020,9222)[<0>](0020,9421)" : {
         "entity" : "Image",
         "req" : "3",
         "name" : "Dimension Description Label",
         "desc" : "Free text description that explains the meaning of the dimension.",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "usage" : "U",
         "module" : "Multi-frame Dimension"
      },
      "(0050,0010)[<0>](0018,1003)" : {
         "desc" : "User-supplied identifier for the device",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "name" : "Device ID",
         "req" : "3",
         "entity" : "Image",
         "module" : "Device"
      },
      "(0020,0052)" : {
         "req" : "1",
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
         "mod_tables" : [
            "table_C.7-6"
         ],
         "name" : "Frame of Reference UID",
         "usage" : "M",
         "entity" : "Frame of Reference",
         "module" : "Frame of Reference"
      },
      "(0018,0012)[<0>](0018,9338)" : {
         "name" : "Contrast/Bolus Ingredient Code Sequence",
         "usage" : "C - Required if contrast media was applied.",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "desc" : [
            "Active ingredient of agent.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "req" : "2",
         "entity" : "Image",
         "module" : "Enhanced Contrast/Bolus"
      },
      "(0040,0280)" : {
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "name" : "Comments on the Performed Procedure Step",
         "desc" : "User-defined comments on the Performed Procedure Step.",
         "usage" : "M",
         "req" : "3"
      },
      "(0010,1100)[<0>](0040,e025)[<1>](0008,1190)" : {
         "module" : "Patient",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "Retrieve URL",
         "usage" : "M",
         "desc" : "URL specifying the location of the referenced instance(s).",
         "entity" : "Patient"
      },
      "(0008,1052)" : {
         "module" : "General Series",
         "entity" : "Series",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Performing Physician Identification Sequence",
         "usage" : "M",
         "desc" : [
            "Identification of the physician(s) administering the Series.",
            "One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Performing Physician's Name (0008,1050), if present."
         ]
      },
      "(0018,9004)" : [
         {
            "module" : "X-Ray 3D Image",
            "entity" : "Image",
            "req" : "1",
            "name" : "Content Qualification",
            "mod_tables" : [
               "table_C.8.21.1-1"
            ],
            "usage" : "M",
            "desc" : [
               "Content Qualification Indicator",
               {
                  "type" : "variablelist",
                  "title" : "Enumerated Values:",
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
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.8.13.2.1.1"
                     }
                  },
                  " for further explanation."
               ]
            ]
         },
         {
            "mod_tables" : [
               "table_C.12-1"
            ],
            "usage" : "M",
            "name" : "Content Qualification",
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
            "req" : "3",
            "entity" : "Image",
            "module" : "SOP Common"
         }
      ],
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0008,1155)" : {
         "module" : "Specimen",
         "entity" : "Image",
         "req" : "1",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "U",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID"
      },
      "(0088,0200)" : {
         "entity" : "Image",
         "req" : "3",
         "mod_tables" : [
            "table_C.8.21.1-1"
         ],
         "name" : "Icon Image Sequence",
         "usage" : "M",
         "desc" : [
            "This icon image is representative of the Image.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "X-Ray 3D Image"
      },
      "(0018,9507)[<0>](0018,9538)[<1>](0018,1412)" : {
         "module" : "Breast Tomosynthesis Acquisition",
         "mod_tables" : [
            "table_C.8.21.3.4-1",
            "table_10-23"
         ],
         "name" : "Target Exposure Index",
         "desc" : "The target value used to calculate Deviation Index (0018,1413) as defined in IEC 62494-1.",
         "usage" : "U",
         "req" : "3",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1155)" : [
         {
            "entity" : "Series",
            "req" : "1",
            "usage" : "M",
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-11"
            ],
            "name" : "Referenced SOP Instance UID",
            "module" : "General Series"
         },
         {
            "entity" : "Series",
            "req" : "1",
            "usage" : "M",
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "name" : "Referenced SOP Instance UID",
            "mod_tables" : [
               "table_C.8-76b",
               "table_10-9",
               "table_10-11"
            ],
            "module" : "Enhanced Mammography Series"
         }
      ],
      "(0012,0083)" : {
         "module" : "Clinical Trial Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "usage" : "U",
         "name" : "Consent for Clinical Trial Use Sequence",
         "desc" : [
            "A Sequence that conveys information about consent for Clinical Trial or research use of the composite instances within this Study.",
            "One or more Items are permitted in this Sequence.",
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
         "req" : "3"
      },
      "(0008,1111)" : [
         {
            "module" : "General Series",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.7-5a"
            ],
            "desc" : [
               "Uniquely identifies the Performed Procedure Step SOP Instance to which the Series is related.",
               "Only a single Item is permitted in this Sequence."
            ],
            "name" : "Referenced Performed Procedure Step Sequence",
            "usage" : "M",
            "req" : "3"
         },
         {
            "entity" : "Series",
            "mod_tables" : [
               "table_C.8-76b"
            ],
            "desc" : [
               "Uniquely identifies the Performed Procedure Step SOP Instance to which the Series is related.",
               "Only a single Item shall be included in this Sequence.",
               "Required if a Performed Procedure Step SOP Class was involved in the creation of this Series."
            ],
            "name" : "Referenced Performed Procedure Step Sequence",
            "usage" : "M",
            "req" : "1C",
            "module" : "Enhanced Mammography Series"
         }
      ],
      "(0008,0013)" : {
         "req" : "3",
         "name" : "Instance Creation Time",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Time the SOP Instance was created.",
            "This is the time that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a121)" : [
         {
            "module" : "General Series",
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
            "req" : "1C"
         },
         {
            "module" : "Enhanced Mammography Series",
            "req" : "1C",
            "name" : "Date",
            "mod_tables" : [
               "table_C.8-76b",
               "table_10-9",
               "table_10-2"
            ],
            "desc" : [
               "Date value for this name-value Item.",
               "Required if Value Type (0040,A040) is DATE."
            ],
            "usage" : "M",
            "entity" : "Series"
         }
      ],
      "(0088,0200)[<0>](0028,0034)" : {
         "module" : "X-Ray 3D Image",
         "entity" : "Image",
         "req" : "1C",
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
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.21.1-1",
            "table_C.7-11b"
         ],
         "name" : "Pixel Aspect Ratio"
      },
      "(0018,9506)[<0>](0018,1000)" : {
         "module" : "Breast Tomosynthesis Contributing Sources",
         "entity" : "Image",
         "name" : "Device Serial Number",
         "mod_tables" : [
            "table_C.8.21.2.3-1",
            "table_10-13"
         ],
         "usage" : "U",
         "desc" : [
            "Manufacturer's serial number of the equipment that produced the sources.",
            "Required if present and consistent in the contributing SOP Instances."
         ],
         "req" : "1C"
      },
      "(0088,0200)[<0>](0028,1203)" : {
         "module" : "X-Ray 3D Image",
         "req" : "1C",
         "usage" : "M",
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
         "name" : "Blue Palette Color Lookup Table Data",
         "mod_tables" : [
            "table_C.8.21.1-1",
            "table_C.7-11b"
         ],
         "entity" : "Image"
      },
      "(0018,9507)[<0>](0018,11a0)" : {
         "module" : "Breast Tomosynthesis Acquisition",
         "entity" : "Image",
         "req" : "1",
         "usage" : "U",
         "desc" : "The average thickness in mm of the body part examined when compressed, if compression has been applied during exposure.",
         "mod_tables" : [
            "table_C.8.21.3.4-1"
         ],
         "name" : "Body Part Thickness"
      },
      "(0018,9530)[<0>](0018,9524)" : {
         "module" : "X-Ray 3D Reconstruction",
         "req" : "1",
         "name" : "Application Name",
         "usage" : "U",
         "desc" : "Name of the application that created the reconstruction.",
         "mod_tables" : [
            "table_C.8.21.4-1"
         ],
         "entity" : "Image"
      },
      "(0018,9507)[<0>](0018,7030)" : {
         "entity" : "Image",
         "req" : "1C",
         "name" : "Field of View Origin",
         "mod_tables" : [
            "table_C.8.21.3.4-1",
            "table_C.8.21.3.1.1-1"
         ],
         "usage" : "U",
         "desc" : [
            "Offset of the TLHC of a rectangle circumscribing the Field of View in the referenced images, before rotation or flipping, from the TLHC of the physical detector area measured in physical detector pixels as a row offset followed by a column offset.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.11.4.1.1",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ],
            "Required if X-Ray Receptor Type (0018,9420) is present and equals DIGITAL_DETECTOR."
         ],
         "module" : "Breast Tomosynthesis Acquisition"
      },
      "(0018,9507)[<0>](0018,9538)[<1>](0018,1708)" : {
         "entity" : "Image",
         "req" : "1C",
         "mod_tables" : [
            "table_C.8.21.3.4-1",
            "table_C.8.21.3.1.2-1",
            "table_C.8-28b"
         ],
         "desc" : [
            "Required if a value of Collimator Shape (0018,1700) is RECTANGULAR. Location of the lower edge of the rectangular collimator with respect to pixels in the image given as row. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.7.3.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "usage" : "U",
         "name" : "Collimator Lower Horizontal Edge",
         "module" : "Breast Tomosynthesis Acquisition"
      },
      "(0008,1062)[<0>](0008,0082)" : {
         "entity" : "Study",
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
         "req" : "1C",
         "module" : "General Study"
      },
      "(0008,0008)" : [
         {
            "entity" : "Image",
            "req" : "1",
            "desc" : [
               "Image identification characteristics.",
               [
                  "See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.8.21.1.1.1"
                     }
                  },
                  " for specialization."
               ]
            ],
            "usage" : "M",
            "name" : "Image Type",
            "mod_tables" : [
               "table_C.8.21.1-1"
            ],
            "module" : "X-Ray 3D Image"
         },
         {
            "module" : "Breast View",
            "mod_tables" : [
               "table_C.8.21.6-1"
            ],
            "name" : "Image Type",
            "usage" : "M",
            "desc" : [
               "Image identification characteristics.",
               [
                  "See ",
                  {
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.8.21.6.1.1"
                     },
                     "el" : "xref"
                  },
                  " for specialization."
               ]
            ],
            "req" : "1",
            "entity" : "Image"
         }
      ],
      "(0018,0012)[<0>](0018,9425)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "desc" : [
            "Absorption of the ingredient greater than the absorption of water (tissue).",
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
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.4b.1"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "name" : "Contrast/Bolus Ingredient Opaque",
         "usage" : "C - Required if contrast media was applied.",
         "entity" : "Image",
         "module" : "Enhanced Contrast/Bolus"
      },
      "(0008,1120)[<0>](0008,1150)" : {
         "entity" : "Patient",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M",
         "req" : "1",
         "module" : "Patient"
      },
      "(0040,0560)[<0>](0040,0551)" : {
         "module" : "Specimen",
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
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.22.1.2"
                  }
               },
               "."
            ],
            "If a single specimen is present in a container, the value of the Specimen Identifier and the value of the Container Identifier are typically the same."
         ],
         "name" : "Specimen Identifier",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U",
         "req" : "1",
         "entity" : "Image"
      },
      "(0040,0251)" : {
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Performed Procedure Step End Time",
         "desc" : "Time at which the Performed Procedure Step ended.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a120)" : {
         "module" : "General Series",
         "req" : "1C",
         "usage" : "M",
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
         "entity" : "Series"
      },
      "(0008,1072)[<0>](0008,0082)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Institution Code Sequence",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0008,1160)" : {
         "entity" : "Image",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
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
         "name" : "Referenced Frame Number",
         "usage" : "U",
         "module" : "Specimen"
      },
      "(0032,1034)" : {
         "entity" : "Study",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Requesting Service Code Sequence",
         "desc" : [
            "Institutional department where the request initiated.",
            "Only a single item is permitted in this Sequence."
         ],
         "usage" : "M",
         "module" : "General Study"
      },
      "(0018,0012)" : {
         "module" : "Enhanced Contrast/Bolus",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "name" : "Contrast/Bolus Agent Sequence",
         "desc" : [
            "Sequence that identifies one or more contrast agents administered prior to or during the acquisition.",
            "One or more Items shall be included in this Sequence."
         ],
         "usage" : "C - Required if contrast media was applied.",
         "entity" : "Image"
      },
      "(0012,0031)" : {
         "entity" : "Patient",
         "req" : "2",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "name" : "Clinical Trial Site Name",
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
         "usage" : "U",
         "module" : "Clinical Trial Subject"
      },
      "(0400,0500)[<0>](0400,0520)" : {
         "name" : "Encrypted Content",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
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
         "req" : "1",
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a168)" : {
         "entity" : "Series",
         "req" : "1C",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Concept Code Sequence",
         "module" : "General Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a122)" : {
         "module" : "General Series",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Time",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "usage" : "M",
         "entity" : "Series"
      },
      "(0010,1100)[<0>](0040,e021)[<1>](0008,0054)" : {
         "req" : "1",
         "name" : "Retrieve AE Title",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "desc" : "Title of a DICOM Application Entity where the referenced instance(s) may be retrieved on the network.",
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0018,9507)[<0>](0018,11a4)" : {
         "module" : "Breast Tomosynthesis Acquisition",
         "entity" : "Image",
         "desc" : "Description of the compression paddle, if compression was applied to the body part during exposure.",
         "mod_tables" : [
            "table_C.8.21.3.4-1"
         ],
         "usage" : "U",
         "name" : "Paddle Description",
         "req" : "1"
      },
      "(0018,106a)" : {
         "entity" : "Frame of Reference",
         "req" : "1",
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
         ],
         "mod_tables" : [
            "table_C.7-7"
         ],
         "usage" : "C - Required if time synchronization was applied.",
         "name" : "Synchronization Trigger",
         "module" : "Synchronization"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0062,000b)" : {
         "module" : "Specimen",
         "entity" : "Image",
         "req" : "1C",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Referenced Segment Number"
      },
      "(0010,0216)[<0>](0010,0214)" : {
         "module" : "Patient",
         "name" : "Strain Stock Number",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "1",
         "entity" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a043)" : [
         {
            "name" : "Concept Name Code Sequence",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "usage" : "M",
            "desc" : [
               "Coded concept name of this name-value Item.",
               "Only a single Item shall be included in this Sequence."
            ],
            "req" : "1",
            "entity" : "Series",
            "module" : "General Series"
         },
         {
            "entity" : "Series",
            "req" : "1",
            "name" : "Concept Name Code Sequence",
            "usage" : "M",
            "desc" : [
               "Coded concept name of this name-value Item.",
               "Only a single Item shall be included in this Sequence."
            ],
            "mod_tables" : [
               "table_C.8-76b",
               "table_10-9",
               "table_10-2"
            ],
            "module" : "Enhanced Mammography Series"
         }
      ],
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0031)" : [
         {
            "module" : "General Series",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-17"
            ],
            "name" : "Local Namespace Entity ID",
            "usage" : "M",
            "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
            "req" : "1C"
         },
         {
            "entity" : "Series",
            "name" : "Local Namespace Entity ID",
            "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-76b",
               "table_10-9",
               "table_10-17"
            ],
            "req" : "1C",
            "module" : "Enhanced Mammography Series"
         }
      ],
      "(0010,0033)" : {
         "module" : "Patient",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "Date of birth of the named patient in the Alternative Calendar (0010,0035).",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_d088e7b4-910c-4c72-8abf-cfb5a85daa67"
                     },
                     "content" : [
                        "No format is specified for alternative calendar dates so none should be assumed."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "name" : "Patient's Birth Date in Alternative Calendar",
         "entity" : "Patient"
      },
      "(0020,9172)" : {
         "entity" : "Image",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "The set of images or other composite SOP Instances that were converted to this instance.",
            "If this instance was converted from a specific frame in the source instance, the reference shall include the Frame Number.",
            "One or more Items shall be included in this Sequence.",
            "Required if this instance was created by conversion, and Conversion Source Attributes Sequence (0020,9172) is not present in an Item of Shared Functional Groups Sequence (5200,9229) or Per-Frame Functional Groups Sequence (5200,9230)."
         ],
         "name" : "Conversion Source Attributes Sequence",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0018,0036)[<0>](0018,003a)" : {
         "req" : "3",
         "desc" : "Further description in free form text describing the therapy or other intervention.",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-19"
         ],
         "name" : "Intervention Description",
         "entity" : "Image",
         "module" : "Intervention"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1160)" : {
         "module" : "General Series",
         "name" : "Referenced Frame Number",
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
         "req" : "1C",
         "entity" : "Series"
      },
      "(0008,0070)" : [
         {
            "module" : "General Equipment",
            "name" : "Manufacturer",
            "mod_tables" : [
               "table_C.7-8"
            ],
            "usage" : "M",
            "desc" : "Manufacturer of the equipment that produced the composite instances.",
            "req" : "2",
            "entity" : "Equipment"
         },
         {
            "module" : "Enhanced General Equipment",
            "entity" : "Equipment",
            "name" : "Manufacturer",
            "desc" : "Manufacturer of the equipment that produced the composite instances.",
            "mod_tables" : [
               "table_C.7-8b"
            ],
            "usage" : "M",
            "req" : "1"
         }
      ],
      "(0010,0026)[<0>](0010,0021)" : {
         "module" : "Patient",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "name" : "Issuer of Patient ID",
         "usage" : "M",
         "desc" : [
            "Identifier of the Assigning Authority (system, organization, agency, or department) that issued the Patient ID.",
            {
               "el" : "note",
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
               ]
            }
         ],
         "entity" : "Patient"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0033)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "1C",
         "name" : "Universal Entity ID Type",
         "usage" : "M",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ]
      },
      "(0088,0200)[<0>](0028,0004)" : {
         "module" : "X-Ray 3D Image",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8.21.1-1",
            "table_C.7-11b"
         ],
         "name" : "Photometric Interpretation",
         "usage" : "M",
         "desc" : [
            "Specifies the intended interpretation of the pixel data. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.6.3.1.2",
                  "xrefstyle" : "select: label"
               }
            },
            " for further explanation."
         ],
         "req" : "1"
      },
      "(0018,9507)[<0>](0018,9511)" : {
         "module" : "Breast Tomosynthesis Acquisition",
         "entity" : "Image",
         "usage" : "U",
         "name" : "Secondary Positioner Scan Start Angle",
         "desc" : [
            [
               "Start position of the secondary positioner in degrees. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.7.5.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " or ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.11.7"
                  },
                  "el" : "xref"
               },
               ", depending on modality and positioner type."
            ],
            "Required if present and consistent in the contributing SOP Instances."
         ],
         "mod_tables" : [
            "table_C.8.21.3.4-1",
            "table_C.8.21.3.1.3-1"
         ],
         "req" : "1C"
      },
      "(0008,9206)" : {
         "entity" : "Image",
         "usage" : "M",
         "desc" : [
            "Indication if geometric manipulations are possible with frames in the SOP Instance. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.16.2.1.2",
                  "xrefstyle" : "select: label"
               }
            },
            " for a description and Enumerated Values."
         ],
         "mod_tables" : [
            "table_C.8.21.1-1",
            "table_C.8-131"
         ],
         "name" : "Volumetric Properties",
         "req" : "1",
         "module" : "X-Ray 3D Image"
      },
      "(0018,9506)[<0>](0018,7022)" : {
         "entity" : "Image",
         "req" : "1",
         "mod_tables" : [
            "table_C.8.21.2.3-1"
         ],
         "usage" : "U",
         "name" : "Detector Element Spacing",
         "desc" : [
            [
               "Physical distance between the center of each detector element, specified by a numeric pair: row spacing value (delimiter) column spacing value in mm. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_10.7.1.3",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation of the value order."
            ],
            {
               "content" : [
                  "\n                      ",
                  {
                     "content" : [
                        "This may not be the same as the Imager Pixel Spacing (0018,1164), and should not be assumed to describe the stored image."
                     ],
                     "attrs" : {
                        "xml:id" : "para_0c1dabc0-83f4-4aa6-ab0a-0cd33fa7b8a2"
                     },
                     "el" : "para"
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ],
         "module" : "Breast Tomosynthesis Contributing Sources"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)" : {
         "module" : "Patient",
         "req" : "3",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "entity" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a040)" : [
         {
            "req" : "1",
            "usage" : "M",
            "name" : "Value Type",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
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
            "module" : "General Series"
         },
         {
            "entity" : "Series",
            "mod_tables" : [
               "table_C.8-76b",
               "table_10-9",
               "table_10-2"
            ],
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
            ],
            "usage" : "M",
            "name" : "Value Type",
            "req" : "1",
            "module" : "Enhanced Mammography Series"
         }
      ],
      "(0008,0110)[<0>](0008,0115)" : {
         "req" : "3",
         "desc" : "The coding scheme full common name",
         "name" : "Coding Scheme Name",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0008,1200)[<0>](0008,1115)" : {
         "entity" : "Image",
         "req" : "1",
         "name" : "Referenced Series Sequence",
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "usage" : "U",
         "module" : "Common Instance Reference"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "name" : "Assigning Facility Sequence",
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
         "req" : "3"
      },
      "(0008,1049)[<0>](0008,0080)" : {
         "req" : "1C",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "usage" : "M",
         "name" : "Institution Name",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0020,000e)" : {
         "module" : "Common Instance Reference",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "name" : "Series Instance UID",
         "desc" : "Unique identifier of the Series containing the referenced Instances.",
         "usage" : "U",
         "req" : "1"
      },
      "(0010,0218)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Strain Additional Information",
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
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a161)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Floating Point Value",
         "usage" : "U",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "module" : "Specimen"
      },
      "(0008,1048)" : {
         "module" : "General Study",
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
         "usage" : "M",
         "name" : "Physician(s) of Record",
         "req" : "3",
         "entity" : "Study"
      },
      "(0018,9507)[<0>](0018,9538)[<1>](0018,1704)" : {
         "module" : "Breast Tomosynthesis Acquisition",
         "entity" : "Image",
         "req" : "1C",
         "usage" : "U",
         "desc" : [
            "Required if a value of Collimator Shape (0018,1700) is RECTANGULAR. Location of the right edge of the rectangular collimator with respect to pixels in the image given as column. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.7.3.1.1"
               },
               "el" : "xref"
            },
            "."
         ],
         "mod_tables" : [
            "table_C.8.21.3.4-1",
            "table_C.8.21.3.1.2-1",
            "table_C.8-28b"
         ],
         "name" : "Collimator Right Vertical Edge"
      },
      "(0028,0102)" : [
         {
            "module" : "Image Pixel",
            "req" : "1",
            "usage" : "M",
            "desc" : [
               "Most significant bit for pixel sample data. Each sample shall have the same high bit. High Bit (0028,0102) shall be one less than Bits Stored (0028,0101). See ",
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
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "entity" : "Image"
         },
         {
            "module" : "X-Ray 3D Image",
            "req" : "1",
            "name" : "High Bit",
            "desc" : "Most significant bit for pixel sample data. Each sample shall have the same high bit. Shall be one less than the value in Bits Stored (0028,0101).",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8.21.1-1"
            ],
            "entity" : "Image"
         }
      ],
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "1C",
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "usage" : "M"
      },
      "(fffa,fffa)[<0>](0400,0310)" : {
         "module" : "SOP Common",
         "desc" : [
            "A certified timestamp of the Digital Signature (0400,0120) Attribute Value, which shall be obtained when the Digital Signature is created. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.12.1.1.3.1.3"
               }
            },
            "."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "name" : "Certified Timestamp",
         "req" : "3",
         "entity" : "Image"
      },
      "(0012,0060)" : {
         "module" : "Clinical Trial Series",
         "req" : "2",
         "desc" : [
            "The name of the institution that is responsible for coordinating the medical imaging data for the clinical trial or research. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.3.2.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "name" : "Clinical Trial Coordinating Center Name",
         "entity" : "Series"
      },
      "(0040,0513)[<0>](0040,0032)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "usage" : "U",
         "name" : "Universal Entity ID",
         "req" : "1C",
         "module" : "Specimen"
      },
      "(0018,1803)" : {
         "module" : "Synchronization",
         "name" : "NTP Source Address",
         "desc" : [
            "IP Address of NTP, SNTP, or PTP time source. IPv4 addresses shall be in dotted decimal (e.g., 192.168.1.1). The IPv6 addresses shall be in colon separated hexadecimal (e.g., 12:34:56:78:9a:bc:de:f0).",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "Identity of this value in two instances acquired contemporaneously implies a common time base. The NTP Source Address might not persist over time."
                     ],
                     "attrs" : {
                        "xml:id" : "para_852085c5-e683-4675-bc1e-585f902895a5"
                     },
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.7-7"
         ],
         "usage" : "C - Required if time synchronization was applied.",
         "req" : "3",
         "entity" : "Frame of Reference"
      },
      "(0020,9172)[<0>](0062,000b)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "usage" : "M",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "name" : "Referenced Segment Number",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "req" : "1C"
      },
      "(0040,0555)[<0>](0040,a161)" : {
         "module" : "Acquisition Context",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "name" : "Floating Point Value",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "usage" : "M",
         "entity" : "Image"
      },
      "(0038,0064)" : {
         "module" : "Patient Study",
         "entity" : "Study",
         "name" : "Issuer of Service Episode ID Sequence",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Service Episode ID (0038,0060).",
            "Only a single Item is permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "req" : "3"
      },
      "(fffa,fffa)[<0>](0400,0105)" : {
         "module" : "SOP Common",
         "entity" : "Image",
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
         ],
         "usage" : "M",
         "name" : "Digital Signature DateTime",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1"
      },
      "(0010,0010)" : {
         "entity" : "Patient",
         "usage" : "M",
         "desc" : "Patient's full name.",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient's Name",
         "req" : "2",
         "module" : "Patient"
      },
      "(0018,9507)[<0>](0018,9516)" : {
         "module" : "Breast Tomosynthesis Acquisition",
         "entity" : "Image",
         "req" : "1C",
         "usage" : "U",
         "name" : "Start Acquisition DateTime",
         "mod_tables" : [
            "table_C.8.21.3.4-1",
            "table_C.8.21.3.1.1-1"
         ],
         "desc" : [
            "Start date and time of that part of an acquisition used for this acquisition context.",
            "Required if present and consistent in the contributing SOP Instances."
         ]
      },
      "(0008,0015)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "3",
         "name" : "Instance Coercion DateTime",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         ]
      },
      "(0028,0004)" : [
         {
            "module" : "Image Pixel",
            "entity" : "Image",
            "req" : "1",
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
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "name" : "Photometric Interpretation"
         },
         {
            "req" : "1",
            "desc" : [
               "Specifies the intended interpretation of the voxel data.",
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
            "name" : "Photometric Interpretation",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8.21.1-1"
            ],
            "entity" : "Image",
            "module" : "X-Ray 3D Image"
         }
      ],
      "(0008,0081)" : {
         "module" : "General Equipment",
         "req" : "3",
         "name" : "Institution Address",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "desc" : "Mailing address of the institution where the equipment that produced the composite instances is located.",
         "entity" : "Equipment"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a168)" : {
         "name" : "Concept Code Sequence",
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
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0008,0031)" : {
         "req" : "3",
         "name" : "Series Time",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : "Time the Series started.",
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0018,9506)[<0>](0028,2112)" : {
         "module" : "Breast Tomosynthesis Contributing Sources",
         "name" : "Lossy Image Compression Ratio",
         "desc" : [
            "Describes the approximate lossy compression ratio(s) that have been applied to this image.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.6.1.1.5.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Required if Lossy Image Compression (0028,2110) is \"01\"."
         ],
         "mod_tables" : [
            "table_C.8.21.2.3-1",
            "table_10-14"
         ],
         "usage" : "U",
         "req" : "1C",
         "entity" : "Image"
      },
      "(0040,a390)[<0>](0008,1155)" : {
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0012,0063)" : {
         "module" : "Patient",
         "entity" : "Patient",
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
                                    "xml:id" : "para_1b4a5ea4-66da-478b-901c-5f7d6b806d29"
                                 },
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
                           "content" : [
                              "\n                        ",
                              {
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_adf0139e-d0e5-457a-ac4d-5c9e20c50e35"
                                 },
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
                                       "el" : "olink",
                                       "content" : [
                                          "(109104, DCM, \"De-identifying Equipment\")"
                                       ]
                                    },
                                    "."
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
            },
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method Code Sequence (0012,0064) is not present. May be present otherwise."
         ],
         "usage" : "M",
         "req" : "1C"
      },
      "(0040,0555)[<0>](0040,08ea)" : {
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "name" : "Measurement Units Code Sequence",
         "desc" : [
            "Units of measurement.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Numeric Value (0040,A30A) is sent. Shall not be present otherwise."
         ],
         "entity" : "Image",
         "module" : "Acquisition Context"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0033)" : [
         {
            "module" : "General Series",
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
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-17"
            ],
            "req" : "1C",
            "entity" : "Series"
         },
         {
            "name" : "Universal Entity ID Type",
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
            "mod_tables" : [
               "table_C.8-76b",
               "table_10-9",
               "table_10-17"
            ],
            "req" : "1C",
            "entity" : "Series",
            "module" : "Enhanced Mammography Series"
         }
      ],
      "(0018,0036)[<0>](0054,0302)" : {
         "name" : "Administration Route Code Sequence",
         "usage" : "U",
         "desc" : [
            "Sequence that identifies the Administration Route.",
            "Only a single Item is permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-19"
         ],
         "req" : "3",
         "entity" : "Image",
         "module" : "Intervention"
      },
      "(0010,2298)" : {
         "module" : "Patient",
         "usage" : "M",
         "desc" : [
            "Relationship of Responsible Person to the patient.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.1.1.1.2",
                     "xrefstyle" : "select: label"
                  }
               },
               " for Defined Terms."
            ],
            "Required if Responsible Person is present and has a value."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Responsible Person Role",
         "req" : "1C",
         "entity" : "Patient"
      },
      "(0018,9507)[<0>](0018,1191)" : {
         "entity" : "Image",
         "req" : "1",
         "name" : "Anode Target Material",
         "desc" : [
            "The primary material in the anode of the X-Ray source.",
            {
               "list" : [
                  [
                     "TUNGSTEN",
                     null
                  ],
                  [
                     "MOLYBDENUM",
                     null
                  ],
                  [
                     "RHODIUM",
                     null
                  ]
               ],
               "title" : "Defined Terms:",
               "type" : "variablelist"
            }
         ],
         "mod_tables" : [
            "table_C.8.21.3.4-1"
         ],
         "usage" : "U",
         "module" : "Breast Tomosynthesis Acquisition"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0032)" : [
         {
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-17"
            ],
            "usage" : "M",
            "name" : "Universal Entity ID",
            "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
            "req" : "1C",
            "entity" : "Series"
         },
         {
            "module" : "Enhanced Mammography Series",
            "entity" : "Series",
            "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
            "usage" : "M",
            "name" : "Universal Entity ID",
            "mod_tables" : [
               "table_C.8-76b",
               "table_10-9",
               "table_10-17"
            ],
            "req" : "1C"
         }
      ],
      "(0020,0011)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : "A number that identifies this Series.",
         "name" : "Series Number",
         "usage" : "M",
         "req" : "2",
         "entity" : "Series"
      },
      "(0018,9506)[<0>](0008,1072)" : {
         "entity" : "Image",
         "desc" : [
            "Identification of the operator(s) supporting the Series. One or more Items shall be included in this Sequence. If more than one Item, the number and order shall correspond to the value of Operators' Name (0008,1070), if present.",
            "Required if present and consistent in the contributing SOP Instances."
         ],
         "mod_tables" : [
            "table_C.8.21.2.3-1",
            "table_10-13"
         ],
         "usage" : "U",
         "name" : "Operator Identification Sequence",
         "req" : "1C",
         "module" : "Breast Tomosynthesis Contributing Sources"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a124)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "UID",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "usage" : "U",
         "req" : "1C",
         "module" : "Specimen"
      },
      "(0028,2114)" : {
         "entity" : "Image",
         "req" : "1C",
         "name" : "Lossy Image Compression Method",
         "mod_tables" : [
            "table_C.8.21.1-1"
         ],
         "usage" : "M",
         "desc" : [
            "A label for the lossy compression method(s) that have been applied to this image.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.6.1.1.5.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Required if Lossy Image Compression (0028,2110) is \"01\"."
         ],
         "module" : "X-Ray 3D Image"
      },
      "(0010,2180)" : {
         "module" : "Patient Study",
         "name" : "Occupation",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Occupation of the Patient.",
         "usage" : "U",
         "req" : "3",
         "entity" : "Study"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a30a)" : {
         "module" : "General Series",
         "req" : "1C",
         "name" : "Numeric Value",
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
         "entity" : "Series"
      },
      "(0010,1100)[<0>](0020,000d)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "desc" : [
            "Unique identifier for the Study.",
            "Required if Type of Instances (0040,E020) is DICOM"
         ],
         "name" : "Study Instance UID",
         "req" : "1C"
      },
      "(0018,9506)[<0>](0028,0010)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8.21.2.3-1",
            "table_10-14"
         ],
         "name" : "Rows",
         "desc" : "Number of rows in the images.",
         "usage" : "U",
         "req" : "1",
         "module" : "Breast Tomosynthesis Contributing Sources"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1155)" : {
         "module" : "X-Ray 3D Image",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.8.21.1-1",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "req" : "1",
         "entity" : "Image"
      },
      "(0088,0200)[<0>](0028,1202)" : {
         "name" : "Green Palette Color Lookup Table Data",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.21.1-1",
            "table_C.7-11b"
         ],
         "req" : "1C",
         "entity" : "Image",
         "module" : "X-Ray 3D Image"
      },
      "(0088,0200)[<0>](0028,0101)" : {
         "module" : "X-Ray 3D Image",
         "entity" : "Image",
         "req" : "1",
         "mod_tables" : [
            "table_C.8.21.1-1",
            "table_C.7-11b"
         ],
         "desc" : [
            "Number of bits stored for each pixel sample. Each sample shall have the same number of bits stored. See ",
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
         "usage" : "M",
         "name" : "Bits Stored"
      },
      "(0018,9507)[<0>](0018,9538)[<1>](0018,9559)" : {
         "entity" : "Image",
         "usage" : "U",
         "name" : "Positioner Primary Angle Direction",
         "mod_tables" : [
            "table_C.8.21.3.4-1"
         ],
         "desc" : [
            "The interpretation of the sign of the Positioner Primary Angle (0018,1510).",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "CW",
                     "Clockwise. Positioner Primary Angle movement is positive when movement is from vertical to the patient's right (with patient standing, facing equipment)."
                  ],
                  [
                     "CC",
                     "Counter clockwise. Positioner Primary Angle is positive when movement is from vertical to the patient's left (with patient standing, facing the equipment)."
                  ]
               ],
               "title" : "Enumerated Values:"
            },
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.31.2.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "req" : "3",
         "module" : "Breast Tomosynthesis Acquisition"
      },
      "(0018,9507)[<0>](0018,9461)" : {
         "module" : "Breast Tomosynthesis Acquisition",
         "entity" : "Image",
         "usage" : "U",
         "desc" : [
            "Dimensions in mm of the Field of View in the source projection images. If Field of View Shape (0018,1147) is:",
            "RECTANGLE: row dimension followed by column.",
            "ROUND: diameter.",
            "HEXAGONAL: diameter of the circle circumscribing the hexagon.",
            "Required if present and consistent in the contributing SOP Instances. Required if Modality (0008,0060) is MG."
         ],
         "mod_tables" : [
            "table_C.8.21.3.4-1",
            "table_C.8.21.3.1.1-1"
         ],
         "name" : "Field of View Dimension(s) in Float",
         "req" : "1C"
      },
      "(0008,009d)[<0>](0040,1102)" : {
         "module" : "General Study",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Person's Address",
         "desc" : "Person's mailing address",
         "entity" : "Study"
      },
      "(0020,9172)[<0>](0008,1160)" : {
         "entity" : "Image",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1",
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
         "usage" : "M",
         "name" : "Referenced Frame Number",
         "module" : "SOP Common"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)" : {
         "entity" : "Image",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Referenced SOP Sequence",
         "req" : "1C",
         "module" : "Specimen"
      },
      "(0008,1062)" : {
         "module" : "General Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "Identification of the physician(s) reading the Study. One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Name of Physician(s) Reading Study (0008,1060), if present.",
         "name" : "Physician(s) Reading Study Identification Sequence",
         "req" : "3",
         "entity" : "Study"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a160)" : [
         {
            "entity" : "Series",
            "req" : "1C",
            "name" : "Text Value",
            "desc" : [
               "Text value for this name-value Item.",
               "Required if Value Type (0040,A040) is TEXT."
            ],
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "module" : "General Series"
         },
         {
            "module" : "Enhanced Mammography Series",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-76b",
               "table_10-9",
               "table_10-2"
            ],
            "desc" : [
               "Text value for this name-value Item.",
               "Required if Value Type (0040,A040) is TEXT."
            ],
            "name" : "Text Value",
            "req" : "1C",
            "entity" : "Series"
         }
      ],
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1150)" : [
         {
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
            "req" : "1",
            "entity" : "Series"
         },
         {
            "module" : "Enhanced Mammography Series",
            "entity" : "Series",
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "mod_tables" : [
               "table_C.8-76b",
               "table_10-9",
               "table_10-2",
               "table_10-11"
            ],
            "name" : "Referenced SOP Class UID",
            "usage" : "M",
            "req" : "1"
         }
      ],
      "(0008,1120)" : {
         "entity" : "Patient",
         "req" : "3",
         "desc" : [
            "A sequence that provides reference to a Patient SOP Class/Instance pair.",
            "Only a single Item is permitted in this Sequence."
         ],
         "usage" : "M",
         "name" : "Referenced Patient Sequence",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient"
      },
      "(0400,0500)[<0>](0400,0510)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Encrypted Content Transfer Syntax UID",
         "desc" : "Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1101)" : {
         "module" : "SOP Common",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "name" : "Person Identification Code Sequence",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Image"
      },
      "(0010,0216)[<0>](0010,0215)" : {
         "module" : "Patient",
         "entity" : "Patient",
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
         "name" : "Strain Source Registry Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "1"
      },
      "(0028,2002)" : {
         "req" : "3",
         "usage" : "M",
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
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "name" : "Color Space",
         "entity" : "Image",
         "module" : "Image Pixel"
      },
      "(0020,9222)[<0>](0020,9165)" : {
         "module" : "Multi-frame Dimension",
         "req" : "1",
         "name" : "Dimension Index Pointer",
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
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "usage" : "U",
         "entity" : "Image"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0020)" : {
         "module" : "X-Ray 3D Image",
         "mod_tables" : [
            "table_C.8.21.1-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M",
         "name" : "Data Elements Signed",
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
         ],
         "req" : "1",
         "entity" : "Image"
      },
      "(0018,0012)[<0>](0018,1049)" : {
         "req" : "2",
         "desc" : "Milligrams of active ingredient per milliliter of agent.",
         "name" : "Contrast/Bolus Ingredient Concentration",
         "usage" : "C - Required if contrast media was applied.",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "entity" : "Image",
         "module" : "Enhanced Contrast/Bolus"
      },
      "(0008,1115)[<0>](0008,114a)" : {
         "module" : "Common Instance Reference",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Referenced Instance Sequence",
         "usage" : "U",
         "req" : "1"
      },
      "(0018,9506)[<0>](0008,1072)[<1>](0040,1102)" : {
         "entity" : "Image",
         "req" : "3",
         "usage" : "U",
         "desc" : "Person's mailing address",
         "mod_tables" : [
            "table_C.8.21.2.3-1",
            "table_10-13",
            "table_10-1"
         ],
         "name" : "Person's Address",
         "module" : "Breast Tomosynthesis Contributing Sources"
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
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U",
         "name" : "Clinical Trial Subject ID",
         "req" : "1C",
         "module" : "Clinical Trial Subject"
      },
      "(2050,0020)" : {
         "entity" : "Image",
         "req" : "1",
         "usage" : "M",
         "desc" : [
            "Specifies a predefined identity transformation for the Presentation LUT such that the output of all grayscale transformations, if any, are defined to be in P-Values.",
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "IDENTITY",
                     "output is in P-Values"
                  ]
               ],
               "type" : "variablelist"
            }
         ],
         "mod_tables" : [
            "table_C.8.21.1-1"
         ],
         "name" : "Presentation LUT Shape",
         "module" : "X-Ray 3D Image"
      },
      "(0050,0010)[<0>](0050,0017)" : {
         "module" : "Device",
         "req" : "2C",
         "desc" : [
            "Required if Device Diameter (0050,0016) is present.",
            {
               "type" : "variablelist",
               "title" : "Defined Terms:",
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
         "mod_tables" : [
            "table_C.7-18"
         ],
         "name" : "Device Diameter Units",
         "usage" : "U",
         "entity" : "Image"
      },
      "(0012,0030)" : {
         "module" : "Clinical Trial Subject",
         "req" : "2",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "desc" : [
            "The identifier of the site responsible for submitting clinical trial or research data. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.1.3.1.4",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "name" : "Clinical Trial Site ID",
         "usage" : "U",
         "entity" : "Patient"
      },
      "(0038,0064)[<0>](0040,0031)" : {
         "usage" : "U",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "req" : "1C",
         "entity" : "Study",
         "module" : "Patient Study"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)" : {
         "module" : "General Series",
         "req" : "1C",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "usage" : "M",
         "name" : "Referenced SOP Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1155)" : {
         "entity" : "Patient",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "module" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a121)" : {
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Date",
         "usage" : "M",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "req" : "1C"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0035)" : {
         "entity" : "Patient",
         "req" : "3",
         "name" : "Identifier Type Code",
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
         "usage" : "M",
         "module" : "Patient"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a040)" : {
         "module" : "Specimen",
         "name" : "Value Type",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
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
         ],
         "usage" : "U",
         "req" : "1",
         "entity" : "Image"
      },
      "(0008,0005)" : {
         "req" : "1C",
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
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0010,0212)" : {
         "module" : "Patient",
         "req" : "3",
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
         "usage" : "M",
         "entity" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1150)" : [
         {
            "module" : "General Series",
            "entity" : "Series",
            "req" : "1",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2",
               "table_10-11"
            ],
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "usage" : "M",
            "name" : "Referenced SOP Class UID"
         },
         {
            "usage" : "M",
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "name" : "Referenced SOP Class UID",
            "mod_tables" : [
               "table_C.8-76b",
               "table_10-9",
               "table_10-2",
               "table_10-11"
            ],
            "req" : "1",
            "entity" : "Series",
            "module" : "Enhanced Mammography Series"
         }
      ],
      "(0008,009d)[<0>](0008,0082)" : {
         "entity" : "Study",
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Institution Code Sequence",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study"
      },
      "(4ffe,0001)[<0>](0400,0005)" : {
         "name" : "MAC ID Number",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : "A number, unique within this SOP Instance, used to identify this MAC Parameters Sequence (4FFE,0001) item from an Item of the Digital Signatures Sequence (FFFA,FFFA).",
         "usage" : "M",
         "req" : "1",
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0038,0014)[<0>](0040,0033)" : {
         "module" : "Patient Study",
         "req" : "1C",
         "usage" : "U",
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
         ],
         "name" : "Universal Entity ID Type",
         "entity" : "Study"
      },
      "(0020,000d)" : {
         "module" : "General Study",
         "entity" : "Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Study Instance UID",
         "desc" : "Unique identifier for the Study.",
         "req" : "1"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0062,000b)" : {
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "usage" : "M",
         "name" : "Referenced Segment Number",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0028,0010)" : {
         "req" : "1",
         "desc" : "Number of rows in the image.",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "name" : "Rows",
         "usage" : "M",
         "entity" : "Image",
         "module" : "Image Pixel"
      },
      " (0010,0027) " : {
         "name" : "Group of Patients Identification Sequence",
         "usage" : "M",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "req" : "\n                  3 ",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0018,9506)[<0>](0008,1072)[<1>](0040,1103)" : {
         "req" : "3",
         "desc" : "Person's telephone number(s)",
         "usage" : "U",
         "name" : "Person's Telephone Numbers",
         "mod_tables" : [
            "table_C.8.21.2.3-1",
            "table_10-13",
            "table_10-1"
         ],
         "entity" : "Image",
         "module" : "Breast Tomosynthesis Contributing Sources"
      },
      "(0040,0515)[<0>](0040,0513)" : {
         "req" : "2",
         "desc" : [
            "Organization that assigned the Container Identifier.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "name" : "Issuer of the Container Identifier Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U",
         "entity" : "Image",
         "module" : "Specimen"
      },
      "(0018,0012)[<0>](0018,9340)[<1>](0018,1042)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "desc" : "Time of start of administration.",
         "usage" : "C - Required if contrast media was applied.",
         "name" : "Contrast/Bolus Start Time",
         "req" : "3",
         "module" : "Enhanced Contrast/Bolus"
      },
      "(0008,1250)[<0>](0040,a170)" : {
         "module" : "General Series",
         "name" : "Purpose of Reference Code Sequence",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "Zero or more Items shall be included in this Sequence.",
            "When absent, implies that the reason for the reference is unknown."
         ],
         "req" : "2",
         "entity" : "Series"
      },
      "(0018,9530)" : {
         "entity" : "Image",
         "req" : "1",
         "usage" : "U",
         "desc" : [
            "A sequence of Items each describing the characteristics of one 3D reconstruction included in this SOP instance.",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "X-Ray 3D Reconstruction Sequence",
         "mod_tables" : [
            "table_C.8.21.4-1"
         ],
         "module" : "X-Ray 3D Reconstruction"
      },
      "(0018,9507)[<0>](0018,9514)" : {
         "entity" : "Image",
         "desc" : [
            [
               "Constant increment of the primary positioner angle in degrees. Positive increment indicates an increasing value of the primary positioner angle. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.7.5.1.2",
                     "xrefstyle" : "select: label"
                  }
               },
               " or ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.11.7"
                  }
               },
               " for the sign conventions depending on modality and positioner type."
            ],
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.21.3.1.3.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            "Required if present and consistent in the contributing SOP Instances."
         ],
         "mod_tables" : [
            "table_C.8.21.3.4-1",
            "table_C.8.21.3.1.3-1"
         ],
         "name" : "Primary Positioner Increment",
         "usage" : "U",
         "req" : "1C",
         "module" : "Breast Tomosynthesis Acquisition"
      },
      "(0018,a001)[<0>](0018,1000)" : {
         "entity" : "Image",
         "usage" : "M",
         "name" : "Device Serial Number",
         "desc" : "Manufacturer's serial number of the equipment that contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "module" : "SOP Common"
      },
      "(0010,1021)" : {
         "module" : "Patient Study",
         "entity" : "Study",
         "name" : "Patient's Size Code Sequence",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "desc" : [
            "Patient's size category code",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)" : {
         "name" : "Specimen Preparation Step Content Item Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U",
         "desc" : [
            "Sequence of Content Items identifying the processes used in one preparation step to prepare the specimen for image acquisition.",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1",
         "entity" : "Image",
         "module" : "Specimen"
      },
      "(0018,9507)[<0>](0018,9517)" : {
         "module" : "Breast Tomosynthesis Acquisition",
         "name" : "End Acquisition DateTime",
         "mod_tables" : [
            "table_C.8.21.3.4-1",
            "table_C.8.21.3.1.1-1"
         ],
         "desc" : [
            "End date and time of that part of an acquisition used for this acquisition context.",
            "Required if present and consistent in the contributing SOP Instances."
         ],
         "usage" : "U",
         "req" : "1C",
         "entity" : "Image"
      },
      "(0020,9172)[<0>](0008,1155)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "entity" : "Image"
      },
      "(0012,0062)" : {
         "module" : "Patient",
         "usage" : "M",
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
         "name" : "Patient Identity Removed",
         "req" : "3",
         "entity" : "Patient"
      },
      "(0400,0561)[<0>](0400,0564)" : {
         "entity" : "Image",
         "req" : "2",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Source of Previous Values",
         "usage" : "M",
         "desc" : "The source that provided the SOP Instance prior to the removal or replacement of the values. For example, this might be the Institution from which imported SOP Instances were received.",
         "module" : "SOP Common"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a121)" : {
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Date",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "usage" : "U",
         "req" : "1C",
         "entity" : "Image"
      },
      "(0018,9507)[<0>](0008,2112)[<1>](0062,000b)" : {
         "module" : "Breast Tomosynthesis Acquisition",
         "name" : "Referenced Segment Number",
         "mod_tables" : [
            "table_C.8.21.3.4-1",
            "table_C.8.21.3.1.1-1",
            "table_10-3"
         ],
         "usage" : "U",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "req" : "1C",
         "entity" : "Image"
      },
      "(0018,9506)[<0>](0028,0011)" : {
         "entity" : "Image",
         "req" : "1",
         "mod_tables" : [
            "table_C.8.21.2.3-1",
            "table_10-14"
         ],
         "name" : "Columns",
         "usage" : "U",
         "desc" : "Number of columns in the images.",
         "module" : "Breast Tomosynthesis Contributing Sources"
      },
      "(0018,9507)[<0>](0018,7046)" : {
         "desc" : "Ratio of the vertical spacing and horizontal spacing of the X-Ray absorbing material used in the grid. Specified by a pair of integer values where the first value is the vertical size, and the second value is the horizontal size.",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8.21.3.4-1",
            "table_C.8.21.3.1.1-1",
            "table_C.8-36b"
         ],
         "name" : "Grid Aspect Ratio",
         "req" : "3",
         "entity" : "Image",
         "module" : "Breast Tomosynthesis Acquisition"
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
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.12.1.1.5"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "name" : "Contributing Equipment Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0018,1802)" : {
         "module" : "Synchronization",
         "req" : "3",
         "name" : "Time Distribution Protocol",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "usage" : "C - Required if time synchronization was applied.",
         "desc" : [
            "Method of time distribution used to synchronize this equipment.",
            {
               "title" : "Enumerated Values:",
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
               "type" : "variablelist"
            }
         ],
         "entity" : "Frame of Reference"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0008,1160)" : {
         "module" : "Specimen",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
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
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a120)" : [
         {
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
            "req" : "1C",
            "module" : "General Series"
         },
         {
            "entity" : "Series",
            "req" : "1C",
            "mod_tables" : [
               "table_C.8-76b",
               "table_10-9",
               "table_10-2"
            ],
            "usage" : "M",
            "name" : "DateTime",
            "desc" : [
               "DateTime value for this name-value Item.",
               "Required if Value Type (0040,A040) is DATETIME."
            ],
            "module" : "Enhanced Mammography Series"
         }
      ],
      "(0010,1030)" : {
         "module" : "Patient Study",
         "entity" : "Study",
         "name" : "Patient's Weight",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "desc" : "Weight of the Patient, in kilograms.",
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a162)" : {
         "name" : "Rational Numerator Value",
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
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0040,0555)[<0>](0040,a30a)" : {
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a set of one or more numeric values.",
            "Required if the value that Concept Name Code Sequence (0040,A043) requires (implies) is a set of one or more integers or real numbers. Shall not be present otherwise."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "name" : "Numeric Value",
         "req" : "1C",
         "entity" : "Image",
         "module" : "Acquisition Context"
      },
      "(0008,0080)" : {
         "module" : "General Equipment",
         "name" : "Institution Name",
         "desc" : "Institution where the equipment that produced the composite instances is located.",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "req" : "3",
         "entity" : "Equipment"
      },
      "(0008,0053)" : {
         "module" : "SOP Common",
         "entity" : "Image",
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
         "usage" : "M",
         "req" : "1C"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0035)" : {
         "entity" : "Patient",
         "req" : "3",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "name" : "Identifier Type Code",
         "module" : "Patient"
      },
      "(0040,0250)" : {
         "module" : "General Series",
         "req" : "3",
         "usage" : "M",
         "desc" : "Date on which the Performed Procedure Step ended.",
         "name" : "Performed Procedure Step End Date",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "entity" : "Series"
      },
      "(0018,9530)[<0>](0020,9518)" : {
         "module" : "X-Ray 3D Reconstruction",
         "req" : "1",
         "mod_tables" : [
            "table_C.8.21.4-1"
         ],
         "name" : "Acquisition Index",
         "desc" : "The Item number(s) of the X-Ray 3D Acquisition Sequence (0018,9507) that describes the acquisition context(s) contributing to this reconstruction.",
         "usage" : "U",
         "entity" : "Image"
      },
      "(0040,0555)[<0>](0040,a160)" : {
         "module" : "Acquisition Context",
         "entity" : "Image",
         "usage" : "M",
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a Text Observation Value.",
            "Required if Date (0040,A121), Time (0040,A122), and Person Name (0040,A123) do not fully describe the concept specified by Concept Name Code Sequence (0040,A043). Shall not be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "name" : "Text Value",
         "req" : "1C"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)" : {
         "module" : "General Series",
         "entity" : "Series",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "desc" : [
            "Sequence that specifies modifiers for a Protocol Context Content Item. One or more Items are permitted in this Sequence. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.4.10.1"
               },
               "el" : "xref"
            },
            "."
         ],
         "usage" : "M",
         "name" : "Content Item Modifier Sequence"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a30a)" : {
         "entity" : "Image",
         "req" : "1C",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "usage" : "U",
         "name" : "Numeric Value",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen"
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
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0008,1155)" : {
         "module" : "Specimen",
         "req" : "1",
         "usage" : "U",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ],
         "entity" : "Image"
      },
      "(0028,0120)" : {
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "desc" : [
            [
               "Single pixel value or one limit (inclusive) of a range of pixel values used in an image to pad to rectangular format or to signal background that may be suppressed. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.5.1.1.2"
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
                                    "The Value Representation of this Attribute is determined by the value of Pixel Representation (0028,0103)."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_6f2fdee2-7dad-437a-8654-b37b23363d43"
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
                                 "attrs" : {
                                    "xml:id" : "para_b999d6e3-1cd0-4d28-8dc1-b515149c6197"
                                 },
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
                                 "attrs" : {
                                    "xml:id" : "para_26f7a207-e6e2-417b-bd79-9085f3fa60cb"
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
               ],
               "el" : "note"
            }
         ],
         "name" : "Pixel Padding Value",
         "req" : "1C",
         "entity" : "Equipment"
      },
      "(0040,a390)[<0>](0040,e010)" : {
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "M",
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
                     "attrs" : {
                        "xml:id" : "para_398d64f0-0a7e-4cfe-b480-b482ee2cb7a7"
                     },
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
         "name" : "Retrieve URI",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)" : [
         {
            "module" : "General Series",
            "req" : "1C",
            "desc" : [
               "Composite SOP Instance Reference value for this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
            ],
            "name" : "Referenced SOP Sequence",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "entity" : "Series"
         },
         {
            "module" : "Enhanced Mammography Series",
            "mod_tables" : [
               "table_C.8-76b",
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
            "req" : "1C",
            "entity" : "Series"
         }
      ],
      "(0008,0300)" : {
         "module" : "SOP Common",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Private Data Element Characteristics Sequence",
         "usage" : "M",
         "desc" : "Characteristics of Private Data Elements within the current SOP Instance",
         "entity" : "Image"
      },
      "(0018,9507)[<0>](0018,1160)" : {
         "req" : "1",
         "name" : "Filter Type",
         "mod_tables" : [
            "table_C.8.21.3.4-1"
         ],
         "desc" : [
            "Type of filter(s) inserted into the X-Ray beam (e.g., wedges). See Attribute Description in ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.7.10"
               }
            },
            " for Defined Terms."
         ],
         "usage" : "U",
         "entity" : "Image",
         "module" : "Breast Tomosynthesis Acquisition"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1160)" : [
         {
            "module" : "General Series",
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
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "usage" : "M",
            "name" : "Referenced Frame Number",
            "req" : "1C",
            "entity" : "Series"
         },
         {
            "module" : "Enhanced Mammography Series",
            "req" : "1C",
            "name" : "Referenced Frame Number",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-76b",
               "table_10-9",
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
            "entity" : "Series"
         }
      ],
      "(0018,9506)[<0>](0018,700e)" : {
         "entity" : "Image",
         "name" : "Time of Last Detector Calibration",
         "desc" : "The time at which the detector used to acquire this image as identified in Detector ID (0018,700A) was last calibrated.",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8.21.2.3-1"
         ],
         "req" : "1",
         "module" : "Breast Tomosynthesis Contributing Sources"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a122)" : {
         "usage" : "M",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "name" : "Time",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0018,106c)" : {
         "module" : "Synchronization",
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
         ],
         "usage" : "C - Required if time synchronization was applied.",
         "name" : "Synchronization Channel",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,08ea)" : [
         {
            "module" : "General Series",
            "name" : "Measurement Units Code Sequence",
            "usage" : "M",
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
            "req" : "1C",
            "entity" : "Series"
         },
         {
            "module" : "Enhanced Mammography Series",
            "entity" : "Series",
            "desc" : [
               "Units of measurement for a numeric value in this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is NUMERIC."
            ],
            "mod_tables" : [
               "table_C.8-76b",
               "table_10-9",
               "table_10-2"
            ],
            "usage" : "M",
            "name" : "Measurement Units Code Sequence",
            "req" : "1C"
         }
      ],
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)" : {
         "entity" : "Image",
         "req" : "3",
         "mod_tables" : [
            "table_C.8.21.1-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M",
         "name" : "Referenced Digital Signature Sequence",
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
         "module" : "X-Ray 3D Image"
      },
      "(0010,0216)" : {
         "name" : "Strain Stock Sequence",
         "usage" : "M",
         "desc" : [
            "Information identifying an animal within a strain stock.",
            "Only a single Item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a162)" : {
         "entity" : "Image",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Rational Numerator Value",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "usage" : "U",
         "module" : "Specimen"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a124)" : [
         {
            "module" : "General Series",
            "entity" : "Series",
            "name" : "UID",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "desc" : [
               "UID value for this name-value Item.",
               "Required if Value Type (0040,A040) is UIDREF."
            ],
            "req" : "1C"
         },
         {
            "mod_tables" : [
               "table_C.8-76b",
               "table_10-9",
               "table_10-2"
            ],
            "name" : "UID",
            "usage" : "M",
            "desc" : [
               "UID value for this name-value Item.",
               "Required if Value Type (0040,A040) is UIDREF."
            ],
            "req" : "1C",
            "entity" : "Series",
            "module" : "Enhanced Mammography Series"
         }
      ],
      "(0040,0515)[<0>](0040,0513)[<1>](0040,0031)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "usage" : "U",
         "name" : "Local Namespace Entity ID",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "Image",
         "module" : "Specimen"
      },
      "(0008,1049)[<0>](0008,0081)" : {
         "req" : "3",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Institution Address",
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0008,0051)[<0>](0040,0032)" : {
         "module" : "General Study",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "name" : "Universal Entity ID",
         "req" : "1C",
         "entity" : "Study"
      },
      "(0020,0010)" : {
         "entity" : "Study",
         "req" : "2",
         "desc" : "User or equipment generated Study identifier.",
         "usage" : "M",
         "name" : "Study ID",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study"
      },
      "(0010,2292)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "2C",
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
            "Required if the patient is an animal and if Patient Breed Code Sequence (0010,2293) is empty. May be present otherwise."
         ],
         "usage" : "M",
         "name" : "Patient Breed Description"
      },
      "(0040,0253)" : {
         "desc" : "User or equipment generated identifier of that part of a Procedure that has been carried out within this step.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "name" : "Performed Procedure Step ID",
         "req" : "3",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0008,0051)[<0>](0040,0031)" : {
         "module" : "General Study",
         "entity" : "Study",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "name" : "Local Namespace Entity ID",
         "usage" : "M",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise."
      },
      "(0018,9507)[<0>](0018,9538)[<1>](0018,9328)" : {
         "name" : "Exposure Time in ms",
         "mod_tables" : [
            "table_C.8.21.3.4-1"
         ],
         "desc" : [
            "Duration of X-Ray exposure in milliseconds. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.7.2.1.1"
               },
               "el" : "xref"
            },
            "."
         ],
         "usage" : "U",
         "req" : "1",
         "entity" : "Image",
         "module" : "Breast Tomosynthesis Acquisition"
      },
      "(0040,0515)[<0>](0040,0512)" : {
         "req" : "1",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Container Identifier",
         "desc" : "The identifier for the container that contains the specimen(s) being imaged.",
         "entity" : "Image",
         "module" : "Specimen"
      },
      "(0008,0110)[<0>](0008,0102)" : {
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The value of a Coding Scheme Designator, used in this SOP Instance, which is being mapped.",
         "name" : "Coding Scheme Designator",
         "req" : "1",
         "module" : "SOP Common"
      },
      "(0008,1200)[<0>](0020,000d)" : {
         "module" : "Common Instance Reference",
         "desc" : "Unique identifier of the Study containing the referenced Instances.",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "usage" : "U",
         "name" : "Study Instance UID",
         "req" : "1",
         "entity" : "Image"
      },
      "(0088,0200)[<0>](0028,1102)" : {
         "req" : "1C",
         "name" : "Green Palette Color Lookup Table Descriptor",
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
            "table_C.8.21.1-1",
            "table_C.7-11b"
         ],
         "usage" : "M",
         "entity" : "Image",
         "module" : "X-Ray 3D Image"
      },
      "(0018,1020)" : [
         {
            "mod_tables" : [
               "table_C.7-8"
            ],
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
            "usage" : "M",
            "req" : "3",
            "entity" : "Equipment",
            "module" : "General Equipment"
         },
         {
            "module" : "Enhanced General Equipment",
            "entity" : "Equipment",
            "req" : "1",
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
            "usage" : "M",
            "name" : "Software Versions",
            "mod_tables" : [
               "table_C.7-8b"
            ]
         }
      ],
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0120)" : {
         "module" : "X-Ray 3D Image",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.21.1-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "The Signature Value identified by the Digital Signature UID within the Referenced SOP Instance UID.",
         "name" : "Signature",
         "entity" : "Image"
      },
      "(0088,0200)[<0>](0028,0103)" : {
         "entity" : "Image",
         "req" : "1",
         "name" : "Pixel Representation",
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
            "table_C.8.21.1-1",
            "table_C.7-11b"
         ],
         "usage" : "M",
         "module" : "X-Ray 3D Image"
      },
      "(0400,0561)[<0>](0400,0550)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "usage" : "M",
         "desc" : [
            "Sequence that contains all the Attributes, with their previous values, that were modified or removed from the main data set.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Modified Attributes Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1"
      },
      "(0088,0200)[<0>](0028,0010)" : {
         "module" : "X-Ray 3D Image",
         "entity" : "Image",
         "desc" : "Number of rows in the image.",
         "name" : "Rows",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.21.1-1",
            "table_C.7-11b"
         ],
         "req" : "1"
      },
      "(0008,0110)[<0>](0008,0103)" : {
         "entity" : "Image",
         "req" : "3",
         "desc" : "The coding scheme version associated with the Coding Scheme Designator (0008,0102).",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme Version",
         "module" : "SOP Common"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a122)" : {
         "entity" : "Image",
         "usage" : "U",
         "name" : "Time",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1C",
         "module" : "Specimen"
      },
      "(0008,1040)" : {
         "entity" : "Equipment",
         "req" : "3",
         "usage" : "M",
         "desc" : "Department in the institution where the equipment that produced the composite instances is located.",
         "name" : "Institutional Department Name",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,08ea)" : [
         {
            "module" : "General Series",
            "name" : "Measurement Units Code Sequence",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "usage" : "M",
            "desc" : [
               "Units of measurement for a numeric value in this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is NUMERIC."
            ],
            "req" : "1C",
            "entity" : "Series"
         },
         {
            "module" : "Enhanced Mammography Series",
            "req" : "1C",
            "name" : "Measurement Units Code Sequence",
            "desc" : [
               "Units of measurement for a numeric value in this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is NUMERIC."
            ],
            "mod_tables" : [
               "table_C.8-76b",
               "table_10-9",
               "table_10-2"
            ],
            "usage" : "M",
            "entity" : "Series"
         }
      ],
      "(0018,9506)" : {
         "module" : "Breast Tomosynthesis Contributing Sources",
         "req" : "1",
         "name" : "Contributing Sources Sequence",
         "desc" : [
            "A sequence that describes characteristics of the sources that are used to create a derived SOP Instance.",
            "One or more Items shall be included in this Sequence."
         ],
         "usage" : "U",
         "mod_tables" : [
            "table_C.8.21.2.3-1"
         ],
         "entity" : "Image"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0035)" : {
         "entity" : "Patient",
         "name" : "Identifier Type Code",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M",
         "req" : "3",
         "module" : "Patient"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1155)" : {
         "module" : "Common Instance Reference",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ],
         "usage" : "U",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a160)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Text Value",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "usage" : "U",
         "req" : "1C",
         "module" : "Specimen"
      },
      "(0040,0275)[<0>](0008,0050)" : [
         {
            "req" : "3",
            "usage" : "M",
            "name" : "Accession Number",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9"
            ],
            "desc" : "An identifier of the Imaging Service Request for this Requested Procedure.",
            "entity" : "Series",
            "module" : "General Series"
         },
         {
            "entity" : "Series",
            "desc" : "An identifier of the Imaging Service Request for this Requested Procedure.",
            "mod_tables" : [
               "table_C.8-76b",
               "table_10-9"
            ],
            "name" : "Accession Number",
            "usage" : "M",
            "req" : "3",
            "module" : "Enhanced Mammography Series"
         }
      ],
      "(0040,0520)[<0>](0050,0015)" : {
         "desc" : "Width in mm of container component.",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Container Component Width",
         "req" : "3",
         "entity" : "Image",
         "module" : "Specimen"
      },
      "(0400,0561)[<0>](0400,0562)" : {
         "req" : "1",
         "name" : "Attribute Modification DateTime",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Date and time the attributes were removed and/or replaced.",
         "usage" : "M",
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0018,0036)[<0>](0018,0035)" : {
         "module" : "Intervention",
         "name" : "Intervention Drug Start Time",
         "desc" : "Time of administration of the interventional drug.",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-19"
         ],
         "req" : "3",
         "entity" : "Image"
      },
      "(0018,0015)" : {
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Body Part Examined",
         "desc" : [
            [
               "Text description of the part of the body examined. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "template:Annex %n \u201c%t\u201d in PS3.16",
                     "targetptr" : "chapter_L",
                     "targetdoc" : "PS3.16"
                  },
                  "el" : "olink"
               },
               " for Defined Terms"
            ],
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_c8ff54a1-69e9-4623-abb8-672af78baddf"
                     },
                     "content" : [
                        "Some IODs support the Anatomic Region Sequence (0008,2218), which can provide a more comprehensive mechanism for specifying the body part being examined."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "req" : "3"
      },
      "(0008,0060)" : [
         {
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-5a"
            ],
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
            "name" : "Modality",
            "req" : "1",
            "entity" : "Series",
            "module" : "General Series"
         },
         {
            "entity" : "Series",
            "req" : "1",
            "desc" : [
               "Type of equipment that originally acquired the data used to create the images in this Series.",
               {
                  "type" : "variablelist",
                  "list" : [
                     [
                        "MG",
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
            "mod_tables" : [
               "table_C.8-76b"
            ],
            "usage" : "M",
            "name" : "Modality",
            "module" : "Enhanced Mammography Series"
         }
      ],
      "(0018,1800)" : {
         "module" : "Synchronization",
         "desc" : [
            "Acquisition DateTime (0008,002A) synchronized with external time reference.",
            {
               "type" : "variablelist",
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
               ]
            },
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.4.2.1.4"
                  },
                  "el" : "xref"
               }
            ]
         ],
         "usage" : "C - Required if time synchronization was applied.",
         "name" : "Acquisition Time Synchronized",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "req" : "1",
         "entity" : "Frame of Reference"
      },
      "(0012,0083)[<0>](0012,0085)" : {
         "module" : "Clinical Trial Study",
         "entity" : "Study",
         "req" : "1",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_3a13f81e-d497-421f-aebd-f103e8f2243a"
                     },
                     "content" : [
                        "Under some circumstances, consent may be withdrawn. The purpose of encoding this is to warn receiving systems that further distribution may not be appropriate, but no semantics are defined by the Standard for what action is appropriate under such circumstances, such as what to do with previously received images that had a value of YES."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "usage" : "U",
         "name" : "Consent for Distribution Flag",
         "mod_tables" : [
            "table_C.7-4b"
         ]
      },
      "(0040,0245)" : {
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Performed Procedure Step Start Time",
         "desc" : "Time on which the Performed Procedure Step started.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0008,0300)[<0>](0008,0303)" : {
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
               "type" : "variablelist",
               "title" : "Enumerated Values:",
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
         "name" : "Block Identifying Information Status",
         "req" : "1",
         "entity" : "Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a124)" : {
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "UID",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "usage" : "M",
         "req" : "1C"
      },
      "(0018,9506)[<0>](0020,9529)[<1>](0008,1115)[<2>](0020,000e)" : {
         "module" : "Breast Tomosynthesis Contributing Sources",
         "usage" : "U",
         "desc" : "Unique identifier of the Series containing the referenced Instances.",
         "mod_tables" : [
            "table_C.8.21.2.3-1",
            "table_10-13"
         ],
         "name" : "Series Instance UID",
         "req" : "1",
         "entity" : "Image"
      },
      "(0018,9506)[<0>](0028,2110)" : {
         "desc" : [
            "Specifies whether the Source Images have undergone lossy compression (at a point in their lifetime).",
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
            ],
            "Required if it is known whether or not Lossy Compression has been performed on the Images.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "In some SOP Class definitions the Lossy Image Compression attribute is optional."
                     ],
                     "attrs" : {
                        "xml:id" : "para_59d48036-291e-4e55-843e-581089f37d2b"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ]
            }
         ],
         "usage" : "U",
         "name" : "Lossy Image Compression",
         "mod_tables" : [
            "table_C.8.21.2.3-1",
            "table_10-14"
         ],
         "req" : "1C",
         "entity" : "Image",
         "module" : "Breast Tomosynthesis Contributing Sources"
      },
      "(0040,0560)" : {
         "entity" : "Image",
         "usage" : "U",
         "name" : "Specimen Description Sequence",
         "desc" : [
            "Sequence of identifiers and detailed description of the specimen(s) being imaged.",
            "One or more Items shall be included in this Sequence.",
            "Each specimen imaged in the Pixel Data shall be identified by an Item in this Sequence. Other specimens in/on the container, but not imaged in the Pixel Data, may also be identified by Items in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "req" : "1",
         "module" : "Specimen"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0008,1150)" : {
         "module" : "Specimen",
         "entity" : "Image",
         "req" : "1",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "usage" : "U"
      },
      "(0018,9507)[<0>](0018,9328)" : {
         "entity" : "Image",
         "req" : "1C",
         "name" : "Exposure Time in ms",
         "mod_tables" : [
            "table_C.8.21.3.4-1",
            "table_C.8.21.3.1.1-1"
         ],
         "usage" : "U",
         "desc" : [
            [
               "Total (cumulative) duration of X-Ray exposure for all frames in milliseconds. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.7.2.1.1"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Required if present and consistent in the contributing SOP Instances. Required if Modality (0008,0060) is MG."
         ],
         "module" : "Breast Tomosynthesis Acquisition"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0039)" : {
         "entity" : "Patient",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Assigning Jurisdiction Code Sequence",
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
         "usage" : "M",
         "module" : "Patient"
      },
      "(0018,0012)[<0>](0018,9340)[<1>](0018,1046)" : {
         "entity" : "Image",
         "usage" : "C - Required if contrast media was applied.",
         "desc" : "Rate of administration in milliliters/sec. Only a single value shall be present.",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "name" : "Contrast Flow Rate",
         "req" : "3",
         "module" : "Enhanced Contrast/Bolus"
      },
      "(0008,103f)" : {
         "module" : "General Series",
         "entity" : "Series",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : [
            "A coded description of the Series.",
            "Only a single Item is permitted in this Sequence."
         ],
         "name" : "Series Description Code Sequence",
         "usage" : "M"
      },
      "(0008,1030)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "desc" : "Institution-generated description or classification of the Study (component) performed.",
         "name" : "Study Description",
         "req" : "3",
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a043)" : {
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Concept Name Code Sequence",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1",
         "module" : "Specimen"
      },
      "(0012,0020)" : {
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-2b"
         ],
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
         "usage" : "U",
         "name" : "Clinical Trial Protocol ID",
         "req" : "1"
      },
      "(0054,0220)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.8.21.6-1"
         ],
         "name" : "View Code Sequence",
         "desc" : [
            "Sequence that describes the view of the patient anatomy in this image.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "M",
         "entity" : "Image",
         "module" : "Breast View"
      },
      "(0018,9507)[<0>](0018,7056)" : {
         "module" : "Breast Tomosynthesis Acquisition",
         "name" : "Filter Beam Path Length Minimum",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8.21.3.4-1"
         ],
         "desc" : [
            "See Attribute Description in ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.7.10"
               },
               "el" : "xref"
            },
            "."
         ],
         "req" : "3",
         "entity" : "Image"
      },
      "(0018,9530)[<0>](0018,9527)" : {
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8.21.4-1"
         ],
         "name" : "Algorithm Type",
         "desc" : [
            "Type of algorithm used to create the reconstruction.",
            {
               "type" : "variablelist",
               "title" : "Defined Terms:",
               "list" : [
                  [
                     "FILTER_BACK_PROJ",
                     null
                  ],
                  [
                     "ITERATIVE",
                     null
                  ]
               ]
            }
         ],
         "req" : "1",
         "module" : "X-Ray 3D Reconstruction"
      },
      "(0050,0010)[<0>](0050,0014)" : {
         "mod_tables" : [
            "table_C.7-18"
         ],
         "usage" : "U",
         "name" : "Device Length",
         "desc" : [
            "Length in mm of device. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.12.1.1"
               },
               "el" : "xref"
            },
            "."
         ],
         "req" : "3",
         "entity" : "Image",
         "module" : "Device"
      },
      "(0008,0096)[<0>](0008,0082)" : {
         "module" : "General Study",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Institution Code Sequence",
         "entity" : "Study"
      },
      "(0400,0561)[<0>](0400,0550)[0](gggg,eeee)" : {
         "module" : "SOP Common",
         "req" : "1",
         "desc" : "May include Sequence Attributes and their Items.",
         "name" : "Any Attribute from the main data set that was modified or removed.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image"
      },
      "(0018,9507)[<0>](0018,9538)" : {
         "entity" : "Image",
         "req" : "1",
         "mod_tables" : [
            "table_C.8.21.3.4-1"
         ],
         "usage" : "U",
         "name" : "Per Projection Acquisition Sequence",
         "desc" : [
            "Sequence containing detailed acquisition context of each individual projection used in this acquisition context.",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "Breast Tomosynthesis Acquisition"
      },
      "(0010,1002)[<0>](0010,0020)" : {
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "An identifier for the patient.",
            {
               "el" : "note",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_f0c2cfdd-2ad9-4f36-9f8d-a8723d825eae"
                     }
                  },
                  "\n                  "
               ]
            }
         ],
         "name" : "Patient ID",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0062,000b)" : {
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Referenced Segment Number",
         "desc" : "Identifies the Segment Number to which the reference applies. Required if the Referenced SOP Instance is a Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present.",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "req" : "1C",
         "module" : "Patient"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1190)" : {
         "module" : "X-Ray 3D Image",
         "desc" : "URL specifying the location of the referenced instance(s).",
         "mod_tables" : [
            "table_C.8.21.1-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "name" : "Retrieve URL",
         "usage" : "M",
         "req" : "3",
         "entity" : "Image"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)" : {
         "entity" : "Image",
         "usage" : "U",
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "name" : "Referenced Instance Sequence",
         "req" : "1",
         "module" : "Common Instance Reference"
      },
      "(0018,9507)[<0>](0018,7034)" : {
         "module" : "Breast Tomosynthesis Acquisition",
         "usage" : "U",
         "desc" : [
            "Whether or not a horizontal flip has been applied to the Field of View in the referenced images, after rotation relative to the physical detector as described in Field of View Rotation (0018,7032).",
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
                  ]
               ],
               "title" : "Enumerated Values:"
            },
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.11.4.1.1"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            "Required if present and consistent in the contributing SOP Instances."
         ],
         "mod_tables" : [
            "table_C.8.21.3.4-1",
            "table_C.8.21.3.1.1-1"
         ],
         "name" : "Field of View Horizontal Flip",
         "req" : "1C",
         "entity" : "Image"
      },
      "(0008,1200)" : {
         "module" : "Common Instance Reference",
         "entity" : "Image",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "desc" : [
            "Sequence of items each identifying a Study other than the Study of which this Instance is a part, which Studies contain Instances that are referenced elsewhere in this Instance.",
            "One or more Items shall be included in this Sequence.",
            "Required if this Instance references Instances in other Studies."
         ],
         "name" : "Studies Containing Other Referenced Instances Sequence",
         "usage" : "U"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1150)" : {
         "module" : "Patient",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "req" : "1",
         "entity" : "Patient"
      },
      "(0018,9507)[<0>](0040,8302)" : {
         "entity" : "Image",
         "name" : "Entrance Dose in mGy",
         "mod_tables" : [
            "table_C.8.21.3.4-1"
         ],
         "usage" : "U",
         "desc" : [
            "Entrance dose value measured in mGy at the surface of the patient representing the collective total for all acquired frames described in this Sequence item.",
            {
               "el" : "note",
               "content" : [
                  "\n                      ",
                  {
                     "content" : [
                        "This may be an estimated value based on assumptions about the patient's body size and habitus."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_555d6994-00c0-432a-8b1f-e334d1498924"
                     }
                  },
                  "\n                    "
               ]
            }
         ],
         "req" : "3",
         "module" : "Breast Tomosynthesis Acquisition"
      },
      "(0018,9507)[<0>](0018,7052)" : {
         "entity" : "Image",
         "req" : "3",
         "name" : "Filter Thickness Minimum",
         "mod_tables" : [
            "table_C.8.21.3.4-1"
         ],
         "usage" : "U",
         "desc" : [
            "See Attribute Description in ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.7.10",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "module" : "Breast Tomosynthesis Acquisition"
      },
      "(0020,9222)[<0>](0020,9213)" : {
         "module" : "Multi-frame Dimension",
         "entity" : "Image",
         "usage" : "U",
         "name" : "Dimension Index Private Creator",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "desc" : [
            "Identification of the creator of a group of private data elements.",
            "Required if the Dimension Index Pointer (0020,9165) value is the Data Element Tag of a Private Attribute."
         ],
         "req" : "1C"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0082)" : {
         "module" : "SOP Common",
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
         "entity" : "Image"
      },
      "(0018,9507)[<0>](0018,9538)[<1>](0018,1511)" : {
         "req" : "1C",
         "desc" : [
            "Position in degrees of the X-Ray beam vector in the sagittal anatomical plane as if the patient were standing where movement of the X-Ray source from anterior to posterior is positive, and vertical is zero.",
            "Required if secondary positioner was used during acquisition."
         ],
         "usage" : "U",
         "name" : "Positioner Secondary Angle",
         "mod_tables" : [
            "table_C.8.21.3.4-1"
         ],
         "entity" : "Image",
         "module" : "Breast Tomosynthesis Acquisition"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0040,e001)" : {
         "entity" : "Patient",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "name" : "HL7 Instance Identifier",
         "desc" : [
            "Instance Identifier of the encapsulated HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
            "Required if Type of Instances (0040,E020) is CDA."
         ],
         "module" : "Patient"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "entity" : "Patient",
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C",
         "module" : "Patient"
      },
      "(0018,5100)" : {
         "module" : "General Series",
         "req" : "2C",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Patient Position",
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
         "entity" : "Series"
      },
      "(0018,9507)[<0>](0018,0012)" : {
         "entity" : "Image",
         "req" : "1C",
         "mod_tables" : [
            "table_C.8.21.3.4-1",
            "table_C.8.21.3.1.1-1"
         ],
         "usage" : "U",
         "name" : "Contrast/Bolus Agent Sequence",
         "desc" : [
            "Sequence that identifies the contrast agent.",
            "One or more Items shall be included in this Sequence.",
            "Required if present and consistent in the contributing SOP Instances. Required if Modality (0008,0060) is MG and contrast media was applied."
         ],
         "module" : "Breast Tomosynthesis Acquisition"
      },
      "(0028,0103)" : {
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-11b"
         ],
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
         "req" : "1",
         "module" : "Image Pixel"
      },
      "(0012,0051)" : {
         "module" : "Clinical Trial Study",
         "req" : "3",
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
         "usage" : "U",
         "name" : "Clinical Trial Time Point Description",
         "entity" : "Study"
      },
      "(0018,0012)[<0>](0018,9340)[<1>](0018,1043)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "name" : "Contrast/Bolus Stop Time",
         "desc" : "Time of end of administration.",
         "usage" : "C - Required if contrast media was applied.",
         "entity" : "Image",
         "module" : "Enhanced Contrast/Bolus"
      },
      "(0020,9222)" : {
         "entity" : "Image",
         "req" : "1",
         "desc" : [
            "Identifies the sequence containing the indices used to specify the dimension of the multi-frame object.",
            "One or more Items shall be included in this Sequence."
         ],
         "usage" : "U",
         "name" : "Dimension Index Sequence",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "module" : "Multi-frame Dimension"
      },
      "(0028,2112)" : {
         "module" : "X-Ray 3D Image",
         "entity" : "Image",
         "usage" : "M",
         "desc" : [
            "Describes the approximate lossy compression ratio(s) that have been applied to this image.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.6.1.1.5.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Required if Lossy Image Compression (0028,2110) is \"01\"."
         ],
         "name" : "Lossy Image Compression Ratio",
         "mod_tables" : [
            "table_C.8.21.1-1"
         ],
         "req" : "1C"
      },
      "(0018,0012)[<0>](0018,9340)[<1>](0018,1047)" : {
         "module" : "Enhanced Contrast/Bolus",
         "req" : "3",
         "desc" : "Duration of injection in seconds. Only a single value shall be present.",
         "name" : "Contrast Flow Duration",
         "usage" : "C - Required if contrast media was applied.",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "entity" : "Image"
      },
      "(0018,9506)[<0>](0028,2114)" : {
         "entity" : "Image",
         "desc" : [
            "A label for the lossy compression method(s) that have been applied to the source images.",
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
            ],
            "Required if Lossy Image Compression (0028,2110) is \"01\"."
         ],
         "usage" : "U",
         "mod_tables" : [
            "table_C.8.21.2.3-1",
            "table_10-14"
         ],
         "name" : "Lossy Image Compression Method",
         "req" : "1C",
         "module" : "Breast Tomosynthesis Contributing Sources"
      },
      "(0020,9311)" : {
         "desc" : [
            "Dimension organization of the instance.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "3D",
                     "Spatial Multi-frame image of equally spaced parallel planes (3D volume set)"
                  ],
                  [
                     "3D_TEMPORAL",
                     "Temporal loop of equally spaced parallel-plane 3D volume sets."
                  ]
               ],
               "title" : "Defined Terms:"
            }
         ],
         "usage" : "U",
         "name" : "Dimension Organization Type",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "req" : "3",
         "entity" : "Image",
         "module" : "Multi-frame Dimension"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a124)" : [
         {
            "module" : "General Series",
            "desc" : [
               "UID value for this name-value Item.",
               "Required if Value Type (0040,A040) is UIDREF."
            ],
            "name" : "UID",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "req" : "1C",
            "entity" : "Series"
         },
         {
            "name" : "UID",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-76b",
               "table_10-9",
               "table_10-2"
            ],
            "desc" : [
               "UID value for this name-value Item.",
               "Required if Value Type (0040,A040) is UIDREF."
            ],
            "req" : "1C",
            "entity" : "Series",
            "module" : "Enhanced Mammography Series"
         }
      ],
      "(0018,0036)[<0>](0018,0027)" : {
         "module" : "Intervention",
         "entity" : "Image",
         "req" : "3",
         "desc" : "Time of completion of administration of the intervention drug.",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-19"
         ],
         "name" : "Intervention Drug Stop Time"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a162)" : {
         "module" : "Specimen",
         "entity" : "Image",
         "req" : "1C",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Rational Numerator Value",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ]
      },
      "(0040,0555)[<0>](0040,a122)" : {
         "module" : "Acquisition Context",
         "req" : "1C",
         "name" : "Time",
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
                     "attrs" : {
                        "xml:id" : "para_090933a4-c189-49db-a4ad-938040f8b381"
                     },
                     "el" : "para"
                  },
                  "\n                  "
               ]
            },
            "Required if the value that Concept Name Code Sequence (0040,A043) requires (implies) is a time. Shall not be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "usage" : "M",
         "entity" : "Image"
      },
      "(0088,0200)[<0>](0028,0102)" : {
         "module" : "X-Ray 3D Image",
         "entity" : "Image",
         "desc" : [
            "Most significant bit for pixel sample data. Each sample shall have the same high bit. High Bit (0028,0102) shall be one less than Bits Stored (0028,0101). See ",
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
         "name" : "High Bit",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.21.1-1",
            "table_C.7-11b"
         ],
         "req" : "1"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0033)" : {
         "module" : "Patient",
         "name" : "Universal Entity ID Type",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
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
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_10.14"
                  },
                  "el" : "xref"
               },
               " for Defined Terms."
            ]
         ],
         "req" : "1C",
         "entity" : "Patient"
      },
      "(0400,0561)" : {
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Original Attributes Sequence",
         "desc" : [
            "Sequence of Items containing all attributes that were removed or replaced by other values in the main data set.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Image"
      },
      "(0010,0026)[<0>](0010,0024)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "usage" : "M",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "req" : "3",
         "entity" : "Patient"
      },
      "(0008,0014)" : {
         "module" : "SOP Common",
         "name" : "Instance Creator UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Uniquely identifies device that created the SOP Instance.",
         "req" : "3",
         "entity" : "Image"
      },
      "(0038,0064)[<0>](0040,0032)" : {
         "module" : "Patient Study",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "name" : "Universal Entity ID",
         "usage" : "U",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "Study"
      },
      "(0018,9506)[<0>](0020,9529)" : {
         "module" : "Breast Tomosynthesis Contributing Sources",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8.21.2.3-1",
            "table_10-13"
         ],
         "usage" : "U",
         "name" : "Contributing SOP Instances Reference Sequence",
         "desc" : [
            "A sequence that identifies the contributing SOP Instances.",
            "Required if this SOP Instance is created from other DICOM SOP Instances.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "attrs" : {
                        "xml:id" : "para_4e260200-9263-4027-b2e5-fcc22804b073"
                     },
                     "el" : "para",
                     "content" : [
                        "The attribute is absent in the case where the sources used to create this SOP Instance are not SOP Instances, e.g., a volume that was directly generated by an acquisition system."
                     ]
                  },
                  "\n              "
               ]
            },
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1C"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1104)" : {
         "module" : "SOP Common",
         "req" : "3",
         "name" : "Person's Telecom Information",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
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
         "usage" : "M",
         "entity" : "Image"
      },
      "(0040,0555)[<0>](0040,a123)" : {
         "module" : "Acquisition Context",
         "req" : "1C",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "entity" : "Image"
      },
      "(0020,9222)[<0>](0020,9167)" : {
         "entity" : "Image",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "name" : "Functional Group Pointer",
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
         "usage" : "U",
         "module" : "Multi-frame Dimension"
      },
      "(0018,9506)[<0>](0018,9423)" : {
         "req" : "1C",
         "usage" : "U",
         "desc" : [
            "User defined name of the protocol used to acquire this image.",
            "Required if present and consistent in the contributing SOP Instances."
         ],
         "mod_tables" : [
            "table_C.8.21.2.3-1",
            "table_10-13"
         ],
         "name" : "Acquisition Protocol Name",
         "entity" : "Image",
         "module" : "Breast Tomosynthesis Contributing Sources"
      },
      "(0040,0513)[<0>](0040,0031)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "name" : "Local Namespace Entity ID",
         "usage" : "U",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "Image",
         "module" : "Specimen"
      },
      "(0008,009d)[<0>](0008,0081)" : {
         "module" : "General Study",
         "entity" : "Study",
         "name" : "Institution Address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "usage" : "M",
         "req" : "3"
      },
      "(0010,0026)[<0>](0010,0020)" : {
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Patient ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "desc" : "Primary identifier for the group of subjects.",
         "req" : "1",
         "module" : "Patient"
      },
      "(0018,a001)[<0>](0008,0080)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Institution Name",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Institution where the equipment that contributed to the composite instance is located.",
         "req" : "3",
         "entity" : "Image"
      },
      "(0018,0012)[<0>](0018,9340)" : {
         "module" : "Enhanced Contrast/Bolus",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "desc" : [
            "Sequence that describes one or more phases of contrast administered.",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Contrast Administration Profile Sequence",
         "usage" : "C - Required if contrast media was applied.",
         "entity" : "Image"
      },
      "(0010,0024)[<0>](0040,0039)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "desc" : [
            "The geo-political body that assigned the patient identifier. Typically a code for a country or a state/province. Only a single Item is permitted in this Sequence.",
            {
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "Equivalent to HL7 v2 CX component 9 (Assigning Jurisdiction)."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_da6e8d69-e95e-4320-b5c5-be5b4cbb811f"
                     }
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "usage" : "M",
         "name" : "Assigning Jurisdiction Code Sequence",
         "req" : "3",
         "entity" : "Patient"
      },
      "(0012,0081)" : {
         "module" : "Clinical Trial Subject",
         "req" : "1C",
         "name" : "Clinical Trial Protocol Ethics Committee Name",
         "desc" : "Name of the Ethics Committee or Institutional Review Board (IRB) or Institutional Animal Care and Use Committees (IACUC) responsible for approval of the Clinical Trial or research. Required if Clinical Trial Protocol Ethics Committee Approval Number (0012,0082) is present.",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "entity" : "Patient"
      },
      "(4ffe,0001)[<0>](0400,0020)" : {
         "name" : "Data Elements Signed",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : [
            "A list of Data Element Tags in the order they appear in the Data Set that identify the Data Elements used in creating the MAC for the Digital Signature. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.12.1.1.3.1.1"
               }
            },
            "."
         ],
         "req" : "1",
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0018,9506)[<0>](0020,9529)[<1>](0008,1115)[<2>](0008,114a)[<3>](0008,1150)" : {
         "req" : "1",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8.21.2.3-1",
            "table_10-13",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Image",
         "module" : "Breast Tomosynthesis Contributing Sources"
      },
      "(0018,9506)[<0>](0018,1030)" : {
         "module" : "Breast Tomosynthesis Contributing Sources",
         "req" : "1C",
         "name" : "Protocol Name",
         "mod_tables" : [
            "table_C.8.21.2.3-1",
            "table_10-13"
         ],
         "usage" : "U",
         "desc" : [
            "User-defined description of the conditions under which the Series was performed.",
            "Required if present and consistent in the contributing SOP Instances.",
            {
               "content" : [
                  "\n                ",
                  {
                     "attrs" : {
                        "xml:id" : "para_f566b596-adb9-4b67-894b-cdecc4a72867"
                     },
                     "el" : "para",
                     "content" : [
                        "This attribute conveys series-specific protocol identification and may or may not be identical to the one presented in the Performed Protocol Code Sequence (0040,0260)."
                     ]
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "entity" : "Image"
      },
      "(0008,1164)" : {
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "desc" : [
            "Sequence containing details of how this SOP Instance was extracted from a source multi-frame SOP Instance.",
            "If this instance was created from an instance that contains a Frame Extraction Sequence, then this sequence shall contain all of the items from the parent's Frame Extraction Sequence and a new item that describes this extraction.",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Frame Extraction Sequence",
         "mod_tables" : [
            "table_C.12-9"
         ],
         "req" : "1",
         "entity" : "Image",
         "module" : "Frame Extraction"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a30a)" : [
         {
            "entity" : "Series",
            "req" : "1C",
            "desc" : [
               "Numeric value for this name-value Item. Only a single value shall be present.",
               "Required if Value Type (0040,A040) is NUMERIC."
            ],
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "name" : "Numeric Value",
            "module" : "General Series"
         },
         {
            "module" : "Enhanced Mammography Series",
            "entity" : "Series",
            "name" : "Numeric Value",
            "mod_tables" : [
               "table_C.8-76b",
               "table_10-9",
               "table_10-2"
            ],
            "usage" : "M",
            "desc" : [
               "Numeric value for this name-value Item. Only a single value shall be present.",
               "Required if Value Type (0040,A040) is NUMERIC."
            ],
            "req" : "1C"
         }
      ],
      "(0040,0560)[<0>](0040,0620)[<1>](0040,08ea)" : {
         "module" : "Specimen",
         "req" : "1C",
         "usage" : "U",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "name" : "Measurement Units Code Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "entity" : "Image"
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0306)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "1",
         "desc" : [
            "List of Private Data Elements in block that may contain identifying\n                  information (are unsafe from identity leakage)..",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once."
         ],
         "name" : "Identifying Private Elements",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0062,000b)" : {
         "entity" : "Image",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "name" : "Referenced Segment Number",
         "req" : "1C",
         "module" : "Specimen"
      },
      "(0040,0560)[<0>](0040,0562)[<1>](0040,0031)" : {
         "req" : "1C",
         "name" : "Local Namespace Entity ID",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "Image",
         "module" : "Specimen"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a163)" : [
         {
            "entity" : "Series",
            "req" : "1C",
            "usage" : "M",
            "desc" : [
               "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Rational Numerator Value (0040,A162) is present."
            ],
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "name" : "Rational Denominator Value",
            "module" : "General Series"
         },
         {
            "entity" : "Series",
            "name" : "Rational Denominator Value",
            "mod_tables" : [
               "table_C.8-76b",
               "table_10-9",
               "table_10-2"
            ],
            "usage" : "M",
            "desc" : [
               "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Rational Numerator Value (0040,A162) is present."
            ],
            "req" : "1C",
            "module" : "Enhanced Mammography Series"
         }
      ],
      "(0018,9507)[<0>](0008,2112)[<1>](0008,1155)" : {
         "module" : "Breast Tomosynthesis Acquisition",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8.21.3.4-1",
            "table_C.8.21.3.1.1-1",
            "table_10-3",
            "table_10-11"
         ],
         "usage" : "U",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1155)" : {
         "module" : "General Series",
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "req" : "1"
      },
      "(0008,1072)[<0>](0040,1103)" : {
         "req" : "3",
         "name" : "Person's Telephone Numbers",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "desc" : "Person's telephone number(s)",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1150)" : {
         "entity" : "Image",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "module" : "Common Instance Reference"
      },
      "(0008,1164)[<0>](0008,1167)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.12-9"
         ],
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "desc" : "SOP Instance from which the frames of this instance are extracted.",
         "name" : "Multi-frame Source SOP Instance UID",
         "entity" : "Image",
         "module" : "Frame Extraction"
      },
      "(0018,9530)[<0>](0018,9531)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.8.21.4-1"
         ],
         "desc" : "Free text description of the purpose of the reconstruction, e.g., mask volume.",
         "name" : "Reconstruction Description",
         "usage" : "U",
         "entity" : "Image",
         "module" : "X-Ray 3D Reconstruction"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a040)" : {
         "module" : "Specimen",
         "entity" : "Image",
         "name" : "Value Type",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
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
         "req" : "1"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "usage" : "U",
         "name" : "Referenced SOP Sequence",
         "req" : "1C",
         "entity" : "Image",
         "module" : "Specimen"
      },
      "(0010,1100)[<0>](0040,e024)[<1>](0040,e030)" : {
         "entity" : "Patient",
         "name" : "Repository Unique ID",
         "desc" : "Uniquely identifies a Repository from which the referenced instances can be retrieved.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "req" : "1",
         "module" : "Patient"
      },
      "(0010,4000)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "desc" : "User-defined additional information about the patient.",
         "usage" : "M",
         "name" : "Patient Comments",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3"
      },
      "(0008,0051)[<0>](0040,0033)" : {
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
            "table_C.7-3",
            "table_10-17"
         ],
         "usage" : "M",
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a160)" : {
         "name" : "Text Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0018,9507)[<0>](0018,1190)" : {
         "entity" : "Image",
         "req" : "1",
         "name" : "Focal Spot(s)",
         "mod_tables" : [
            "table_C.8.21.3.4-1"
         ],
         "usage" : "U",
         "desc" : "Nominal focal spot size in mm used to acquire the projection images.",
         "module" : "Breast Tomosynthesis Acquisition"
      },
      "(0008,1049)[<0>](0040,1101)" : {
         "name" : "Person Identification Code Sequence",
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
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0038,0014)[<0>](0040,0032)" : {
         "entity" : "Study",
         "req" : "1C",
         "usage" : "U",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "name" : "Universal Entity ID",
         "module" : "Patient Study"
      },
      "(0088,0200)[<0>](0028,1101)" : {
         "module" : "X-Ray 3D Image",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.21.1-1",
            "table_C.7-11b"
         ],
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
         "name" : "Red Palette Color Lookup Table Descriptor",
         "entity" : "Image"
      },
      "(0028,0300)" : {
         "module" : "X-Ray 3D Image",
         "entity" : "Image",
         "req" : "3",
         "usage" : "M",
         "desc" : [
            "Indicates whether or not this image is a quality control or phantom image.",
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
            "If this Attribute is absent, then the image may or may not be a quality control or phantom image."
         ],
         "name" : "Quality Control Image",
         "mod_tables" : [
            "table_C.8.21.1-1"
         ]
      },
      "(0010,1100)[<0>](0040,e022)[<1>](0088,0140)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "Storage Media File-Set UID",
         "usage" : "M",
         "desc" : "Uniquely identifies the Storage Media on which the referenced instance(s) reside.",
         "req" : "1",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0028,0107)" : {
         "module" : "Image Pixel",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "usage" : "M",
         "desc" : "The maximum actual pixel value encountered in this image.",
         "name" : "Largest Image Pixel Value",
         "entity" : "Image"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0032)" : {
         "req" : "3",
         "usage" : "M",
         "desc" : [
            "Universal or unique identifier for the Patient ID Assigning Authority. The authority identified by this attribute shall be the same as that of Issuer of Patient ID (0010,0021), if present.",
            {
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
               ],
               "el" : "note"
            }
         ],
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0018,9507)[<0>](0018,9509)" : {
         "module" : "Breast Tomosynthesis Acquisition",
         "req" : "1C",
         "desc" : [
            "Total amount of rotation of the secondary positioner in degrees.",
            "Required if present and consistent in the contributing SOP Instances."
         ],
         "usage" : "U",
         "name" : "Secondary Positioner Scan Arc",
         "mod_tables" : [
            "table_C.8.21.3.4-1",
            "table_C.8.21.3.1.3-1"
         ],
         "entity" : "Image"
      },
      "(0018,9506)[<0>](0008,1090)" : {
         "module" : "Breast Tomosynthesis Contributing Sources",
         "req" : "1C",
         "desc" : [
            "Manufacturer's model name of the equipment that produced the sources.",
            "Required if present and consistent in the contributing SOP Instances."
         ],
         "name" : "Manufacturer's Model Name",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8.21.2.3-1",
            "table_10-13"
         ],
         "entity" : "Image"
      },
      "(0010,2202)" : {
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient Species Code Sequence",
         "desc" : [
            [
               "The taxonomic rank value (e.g., genus, subgenus, species or subspecies) of the patient.\n                    See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.1.1.1.3",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Only a single Item shall be included in this Sequence.",
            "Required if the patient is an animal and if Patient Species Description (0010,2201) is not present. May be present otherwise."
         ],
         "usage" : "M",
         "req" : "1C",
         "module" : "Patient"
      },
      "(0008,1111)[<0>](0008,1155)" : [
         {
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-11"
            ],
            "usage" : "M",
            "name" : "Referenced SOP Instance UID",
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "req" : "1",
            "entity" : "Series"
         },
         {
            "module" : "Enhanced Mammography Series",
            "entity" : "Series",
            "req" : "1",
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-76b",
               "table_10-11"
            ],
            "name" : "Referenced SOP Instance UID"
         }
      ],
      "(0018,9507)[<0>](0018,7050)" : {
         "entity" : "Image",
         "name" : "Filter Material",
         "desc" : [
            "The X-Ray absorbing material used in the filter. May be multi-valued. See Attribute Description in ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.7.10"
               }
            },
            " for Defined Terms."
         ],
         "usage" : "U",
         "mod_tables" : [
            "table_C.8.21.3.4-1"
         ],
         "req" : "1",
         "module" : "Breast Tomosynthesis Acquisition"
      },
      "(0020,0013)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "3",
         "name" : "Instance Number",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "desc" : "A number that identifies this Composite object instance."
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "name" : "Assigning Facility Sequence",
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
         "req" : "3"
      },
      "(0018,9507)[<0>](0040,0316)" : {
         "module" : "Breast Tomosynthesis Acquisition",
         "entity" : "Image",
         "req" : "3",
         "desc" : [
            "Organ dose value measured in dGy representing the collective total for all acquired frames described in this Sequence item.",
            {
               "el" : "note",
               "content" : [
                  "\n                      ",
                  {
                     "attrs" : {
                        "xml:id" : "para_89d167b9-f101-425e-9441-64a71e487595"
                     },
                     "el" : "para",
                     "content" : [
                        "This may be an estimated value."
                     ]
                  },
                  "\n                    "
               ]
            }
         ],
         "name" : "Organ Dose",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8.21.3.4-1"
         ]
      },
      "(0008,0018)" : {
         "entity" : "Image",
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
                  "targetdoc" : "PS3.4",
                  "xrefstyle" : "select: labelnumber"
               },
               "el" : "olink"
            },
            "."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "SOP Instance UID",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0008,1164)[<0>](0008,1162)" : {
         "name" : "Calculated Frame List",
         "mod_tables" : [
            "table_C.12-9"
         ],
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "desc" : [
            "A list of Frames that were extracted in the form of one or more triplets",
            "Required if object extraction is based on a Frame Level Retrieve using the Calculated Frame List (0008,1162) attribute.",
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
         "req" : "1C",
         "entity" : "Image",
         "module" : "Frame Extraction"
      },
      "(0008,1090)" : [
         {
            "mod_tables" : [
               "table_C.7-8"
            ],
            "desc" : "Manufacturer's model name of the equipment that produced the composite instances.",
            "name" : "Manufacturer's Model Name",
            "usage" : "M",
            "req" : "3",
            "entity" : "Equipment",
            "module" : "General Equipment"
         },
         {
            "req" : "1",
            "mod_tables" : [
               "table_C.7-8b"
            ],
            "usage" : "M",
            "desc" : "Manufacturer's model name of the equipment that produced the composite instances.",
            "name" : "Manufacturer's Model Name",
            "entity" : "Equipment",
            "module" : "Enhanced General Equipment"
         }
      ],
      " (0010,0027) [<0>](0010,0028)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "name" : "Subject Relative Position in Image",
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
         "usage" : "M",
         "req" : "3"
      },
      "(0018,9507)[<0>](0018,9538)[<1>](0018,9332)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.8.21.3.4-1"
         ],
         "name" : "Exposure in mAs",
         "desc" : "The exposure expressed in milliampereseconds, for example calculated from Exposure Time and X-Ray Tube Current.",
         "usage" : "U",
         "entity" : "Image",
         "module" : "Breast Tomosynthesis Acquisition"
      },
      "(0008,9092)[<0>](0020,000d)" : {
         "req" : "1",
         "name" : "Study Instance UID",
         "mod_tables" : [
            "table_C.8.21.1-1",
            "table_C.17-3"
         ],
         "usage" : "M",
         "desc" : "Unique identifier for the Study",
         "entity" : "Image",
         "module" : "X-Ray 3D Image"
      },
      "(fffa,fffa)[<0>](0400,0401)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : [
            "The purpose of this Digital Signature.",
            "Only a single Item is permitted in this Sequence."
         ],
         "name" : "Digital Signature Purpose Code Sequence",
         "usage" : "M"
      },
      "(0010,2160)" : {
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Ethnic Group",
         "usage" : "M",
         "desc" : "Ethnic group or race of the patient.",
         "req" : "3",
         "module" : "Patient"
      },
      "(0040,0560)[<0>](0040,0554)" : {
         "req" : "1",
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
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U",
         "name" : "Specimen UID",
         "entity" : "Image",
         "module" : "Specimen"
      },
      "(0012,0072)" : {
         "entity" : "Series",
         "name" : "Clinical Trial Series Description",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "desc" : [
            "A description of the series in the context of a clinical trial or research. See ",
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
         "req" : "3",
         "module" : "Clinical Trial Series"
      },
      "(0008,0096)[<0>](0040,1101)" : {
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person Identification Code Sequence",
         "usage" : "M",
         "req" : "1",
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0018,1801)" : {
         "module" : "Synchronization",
         "req" : "3",
         "desc" : "ID of equipment or system providing time reference",
         "usage" : "C - Required if time synchronization was applied.",
         "name" : "Time Source",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "entity" : "Frame of Reference"
      },
      "(0008,009d)[<0>](0040,1103)" : {
         "module" : "General Study",
         "entity" : "Study",
         "desc" : "Person's telephone number(s)",
         "name" : "Person's Telephone Numbers",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0009)" : [
         {
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
                        "el" : "para",
                        "attrs" : {
                           "xml:id" : "para_36129a24-d644-48ab-914d-1f3fbe916df6"
                        }
                     },
                     "\n              "
                  ],
                  "el" : "note"
               }
            ],
            "usage" : "M",
            "name" : "Scheduled Procedure Step ID",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9"
            ],
            "entity" : "Series",
            "module" : "General Series"
         },
         {
            "entity" : "Series",
            "req" : "1C",
            "mod_tables" : [
               "table_C.8-76b",
               "table_10-9"
            ],
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
                        "attrs" : {
                           "xml:id" : "para_36129a24-d644-48ab-914d-1f3fbe916df6"
                        },
                        "content" : [
                           "The condition is to allow the contents of this macro to be present (e.g., to convey the reason for the procedure, such as whether a mammogram is for screening or diagnostic purposes) even when the procedure step was not formally scheduled and a value for this identifier is unknown, rather than making up a dummy value."
                        ]
                     },
                     "\n              "
                  ]
               }
            ],
            "usage" : "M",
            "module" : "Enhanced Mammography Series"
         }
      ],
      "(0008,0030)" : {
         "entity" : "Study",
         "usage" : "M",
         "name" : "Study Time",
         "desc" : "Time the Study started.",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "2",
         "module" : "General Study"
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
         "name" : "Coding Scheme Identification Sequence",
         "req" : "3"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "name" : "Universal Entity ID",
         "usage" : "M",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0008,001a)" : {
         "name" : "Related General SOP Class UID",
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
         "usage" : "M",
         "req" : "3",
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0018,9506)[<0>](0008,1072)[<1>](0008,0081)" : {
         "module" : "Breast Tomosynthesis Contributing Sources",
         "name" : "Institution Address",
         "mod_tables" : [
            "table_C.8.21.2.3-1",
            "table_10-13",
            "table_10-1"
         ],
         "usage" : "U",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "req" : "3",
         "entity" : "Image"
      },
      "(0018,9507)[<0>](0018,1111)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8.21.3.4-1"
         ],
         "desc" : [
            "Distance in mm from source to the breast support side that is closest to the Imaging Subject, as measured along the X-Ray beam vector.",
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
                                    "This value is traditionally referred to as Source Object Distance (SOD)."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_92bffb99-e7db-4100-92b2-b4a7616e9897"
                                 },
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
                                 "attrs" : {
                                    "xml:id" : "para_be05310a-92a8-4f03-a4b1-8a64e61d6698"
                                 },
                                 "el" : "para",
                                 "content" : [
                                    "See notes for this attribute in ",
                                    {
                                       "el" : "xref",
                                       "attrs" : {
                                          "xrefstyle" : "select: label",
                                          "linkend" : "sect_C.8.11.5"
                                       }
                                    },
                                    " ",
                                    {
                                       "el" : "xref",
                                       "attrs" : {
                                          "linkend" : "sect_C.8.11.5",
                                          "xrefstyle" : "select: title"
                                       }
                                    },
                                    "."
                                 ]
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
                                    "See ",
                                    {
                                       "el" : "xref",
                                       "attrs" : {
                                          "linkend" : "sect_C.8.11.7.1.1",
                                          "xrefstyle" : "select: label"
                                       }
                                    },
                                    " for description of X-Ray beam vector."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_4631ae34-c2c7-487c-8a1a-e395b2d41cb9"
                                 },
                                 "el" : "para"
                              },
                              "\n                        "
                           ],
                           "el" : "listitem"
                        },
                        "\n                      "
                     ],
                     "attrs" : {
                        "numeration" : "arabic"
                     },
                     "el" : "orderedlist"
                  },
                  "\n                    "
               ]
            }
         ],
         "name" : "Distance Source to Patient",
         "usage" : "U",
         "req" : "1",
         "module" : "Breast Tomosynthesis Acquisition"
      },
      "(0018,9507)[<0>](0018,9538)[<1>](0018,1413)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.8.21.3.4-1",
            "table_10-23"
         ],
         "desc" : "A scaled representation of the difference of the Exposure Index compared to the Target Exposure Index as defined in IEC 62494-1 and the report of AAPM TG 116.",
         "name" : "Deviation Index",
         "usage" : "U",
         "entity" : "Image",
         "module" : "Breast Tomosynthesis Acquisition"
      },
      "(0008,1080)" : {
         "module" : "Patient Study",
         "entity" : "Study",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Description of the admitting diagnosis (diagnoses)",
         "usage" : "U",
         "name" : "Admitting Diagnoses Description"
      },
      "(0008,001b)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "usage" : "M",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Original Specialized SOP Class UID",
         "req" : "3"
      },
      "(0018,9507)[<0>](0018,9538)[<1>](0018,0060)" : {
         "entity" : "Image",
         "req" : "1C",
         "name" : "KVP",
         "mod_tables" : [
            "table_C.8.21.3.4-1",
            "table_C.8.21.3.1.2-1"
         ],
         "usage" : "U",
         "desc" : [
            "Exact peak kilo voltage output of the X-Ray generator used for this projection.",
            "Required if present and consistent in the contributing SOP Instances. Required if Modality (0008,0060) is MG."
         ],
         "module" : "Breast Tomosynthesis Acquisition"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a124)" : {
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "name" : "UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C"
      },
      " (0010,0027) [<0>](0018,5100)" : {
         "module" : "Patient",
         "name" : "Patient Position",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "usage" : "M",
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
                  "attrs" : {
                     "linkend" : "sect_C.7.3.1.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for Defined Terms and further explanation."
            ]
         ],
         "req" : "3",
         "entity" : "Patient"
      },
      "(0040,0560)[<0>](0040,0562)[<1>](0040,0032)" : {
         "entity" : "Image",
         "req" : "1C",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "usage" : "U",
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "module" : "Specimen"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a30a)" : {
         "module" : "General Series",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "usage" : "M",
         "name" : "Numeric Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "entity" : "Series"
      },
      "(0040,0254)" : {
         "module" : "General Series",
         "entity" : "Series",
         "desc" : "Institution-generated description or classification of the Procedure Step that was performed.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "usage" : "M",
         "name" : "Performed Procedure Step Description",
         "req" : "3"
      },
      "(0010,0024)[<0>](0040,0036)" : {
         "req" : "3",
         "name" : "Assigning Facility Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
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
         ],
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0008,0020)" : {
         "req" : "2",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "desc" : "Date the Study started.",
         "name" : "Study Date",
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0008,1115)[<0>](0020,000e)" : {
         "module" : "Common Instance Reference",
         "entity" : "Image",
         "usage" : "U",
         "desc" : "Unique identifier of the Series containing the referenced Instances.",
         "name" : "Series Instance UID",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "req" : "1"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a161)" : {
         "module" : "General Series",
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Floating Point Value",
         "entity" : "Series"
      },
      "(0008,1050)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "desc" : "Name of the physician(s) administering the Series.",
         "name" : "Performing Physician's Name",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0010,1100)[<0>](0040,e022)" : {
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "desc" : [
            "Details for retrieving instances from Media.",
            "Required if DICOM Retrieval Sequence (0040,E021), WADO Retrieval Sequence (0040,E023), and WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "This sequence shall only identify media known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "DICOM Media Retrieval Sequence",
         "req" : "1C",
         "module" : "Patient"
      },
      "(0018,9507)[<0>](0018,1006)" : {
         "module" : "Breast Tomosynthesis Acquisition",
         "req" : "3",
         "usage" : "U",
         "desc" : "Identifier of the grid",
         "mod_tables" : [
            "table_C.8.21.3.4-1",
            "table_C.8.21.3.1.1-1",
            "table_C.8-36b"
         ],
         "name" : "Grid ID",
         "entity" : "Image"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "module" : "Patient",
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
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
         "req" : "1C",
         "entity" : "Patient"
      },
      "(0018,9506)[<0>](0018,700c)" : {
         "module" : "Breast Tomosynthesis Contributing Sources",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8.21.2.3-1"
         ],
         "name" : "Date of Last Detector Calibration",
         "desc" : "The date on which the detector used to acquire this image as identified in Detector ID (0018,700A) was last calibrated.",
         "req" : "1",
         "entity" : "Image"
      },
      "(0008,1052)[<0>](0008,0081)" : {
         "module" : "General Series",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "name" : "Institution Address",
         "entity" : "Series"
      },
      "(0008,0300)[<0>](0008,0302)" : {
         "entity" : "Image",
         "desc" : [
            "The value of the Private Creator Data Element value used to reserve the block\n                  of Private Data Elements whose characteristics are described in this Item.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "Private blocks are identified by their Private Creator Data Element value,\n                    rather than their numeric block number, since instances may be modified and\n                    numeric block numbers reassigned but the Private Creator Data Element value,\n                    which is required to be unique within a Group of Private Data Elements, will be\n                    preserved."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_7c88d52e-a9e0-4e2b-826b-3ef43e58ae69"
                     }
                  },
                  "\n                "
               ]
            }
         ],
         "name" : "Private Creator Reference",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "module" : "SOP Common"
      },
      "(0018,9507)[<0>](0018,9538)[<1>](0018,1700)" : {
         "module" : "Breast Tomosynthesis Acquisition",
         "entity" : "Image",
         "req" : "1C",
         "name" : "Collimator Shape",
         "mod_tables" : [
            "table_C.8.21.3.4-1",
            "table_C.8.21.3.1.2-1"
         ],
         "desc" : [
            "Shape(s) of the collimator.",
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "RECTANGULAR",
                     null
                  ],
                  [
                     "CIRCULAR",
                     null
                  ],
                  [
                     "POLYGONAL",
                     null
                  ]
               ],
               "type" : "variablelist"
            },
            "This multi-valued Attribute shall contain at most one of each Enumerated Value.",
            "Required if present and consistent in the contributing SOP Instances."
         ],
         "usage" : "U"
      },
      "(0018,1201)" : {
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Time of Last Calibration",
         "req" : "3",
         "module" : "General Equipment"
      },
      "(0010,1002)[<0>](0010,0022)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "1",
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
         "usage" : "M",
         "name" : "Type of Patient ID",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0010,0024)[<0>](0040,0035)" : {
         "req" : "3",
         "name" : "Identifier Type Code",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0018,9506)[<0>](0020,9529)[<1>](0008,1115)[<2>](0020,0011)" : {
         "module" : "Breast Tomosynthesis Contributing Sources",
         "req" : "2",
         "desc" : "A number that identifies this Series.",
         "mod_tables" : [
            "table_C.8.21.2.3-1",
            "table_10-13"
         ],
         "name" : "Series Number",
         "usage" : "U",
         "entity" : "Image"
      },
      "(0008,0096)[<0>](0008,0080)" : {
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "name" : "Institution Name",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Study"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a163)" : {
         "module" : "General Series",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Rational Denominator Value",
         "req" : "1C",
         "entity" : "Series"
      },
      "(0008,1062)[<0>](0040,1104)" : {
         "module" : "General Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
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
         "entity" : "Study"
      },
      "(0028,0011)" : {
         "entity" : "Image",
         "usage" : "M",
         "name" : "Columns",
         "desc" : "Number of columns in the image",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "req" : "1",
         "module" : "Image Pixel"
      },
      "(0040,0275)" : [
         {
            "module" : "General Series",
            "usage" : "M",
            "name" : "Request Attributes Sequence",
            "desc" : [
               "Sequence that contains attributes from the Imaging Service Request.",
               "One or more Items are permitted in this Sequence."
            ],
            "mod_tables" : [
               "table_C.7-5a"
            ],
            "req" : "3",
            "entity" : "Series"
         },
         {
            "mod_tables" : [
               "table_C.8-76b"
            ],
            "desc" : [
               "Sequence that contains attributes from the Imaging Service Request.",
               "One or more Items are permitted in this Sequence."
            ],
            "name" : "Request Attributes Sequence",
            "usage" : "M",
            "req" : "3",
            "entity" : "Series",
            "module" : "Enhanced Mammography Series"
         }
      ],
      "(0040,0244)" : {
         "req" : "3",
         "desc" : "Date on which the Performed Procedure Step started.",
         "name" : "Performed Procedure Step Start Date",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0028,1102)" : {
         "module" : "Image Pixel",
         "entity" : "Image",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-11b"
         ],
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
         "name" : "Green Palette Color Lookup Table Descriptor"
      },
      "(0008,1062)[<0>](0040,1101)" : {
         "module" : "General Study",
         "name" : "Person Identification Code Sequence",
         "usage" : "M",
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
         "entity" : "Study"
      },
      "(0018,9507)[<0>](0018,1114)" : {
         "module" : "Breast Tomosynthesis Acquisition",
         "entity" : "Image",
         "usage" : "U",
         "desc" : "Ratio of Source Image Receptor Distance (SID) over Source Object Distance (SOD).",
         "mod_tables" : [
            "table_C.8.21.3.4-1"
         ],
         "name" : "Estimated Radiographic Magnification Factor",
         "req" : "1"
      },
      "(0008,0090)" : {
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "desc" : "Name of the patient's referring physician",
         "name" : "Referring Physician's Name",
         "req" : "2",
         "module" : "General Study"
      },
      "(0028,2000)" : {
         "req" : "3",
         "name" : "ICC Profile",
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
               ],
               "el" : "note"
            }
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "entity" : "Image",
         "module" : "Image Pixel"
      },
      "(0018,9506)[<0>](0020,9529)[<1>](0008,1115)[<2>](0008,114a)" : {
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this Sequence."
         ],
         "usage" : "U",
         "mod_tables" : [
            "table_C.8.21.2.3-1",
            "table_10-13"
         ],
         "name" : "Referenced Instance Sequence",
         "req" : "1",
         "entity" : "Image",
         "module" : "Breast Tomosynthesis Contributing Sources"
      },
      " (0010,0027) [<0>](0010,0021)" : {
         "module" : "Patient",
         "req" : "3",
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
         "name" : "Issuer of Patient ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "entity" : "Patient"
      },
      "(0050,0010)[<0>](0050,0019)" : {
         "module" : "Device",
         "entity" : "Image",
         "req" : "3",
         "desc" : [
            "Distance in mm between markers on calibrated device. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.6.12.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "name" : "Inter-Marker Distance"
      },
      "(0010,0219)" : {
         "entity" : "Patient",
         "req" : "3",
         "name" : "Strain Code Sequence",
         "mod_tables" : [
            "table_C.7-1"
         ],
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
         ],
         "usage" : "M",
         "module" : "Patient"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0031)" : {
         "module" : "Patient",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "name" : "Local Namespace Entity ID",
         "req" : "1C",
         "entity" : "Patient"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "module" : "Patient",
         "req" : "1C",
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "usage" : "M",
         "entity" : "Patient"
      },
      "(0028,2110)" : {
         "module" : "X-Ray 3D Image",
         "req" : "1",
         "mod_tables" : [
            "table_C.8.21.1-1"
         ],
         "name" : "Lossy Image Compression",
         "usage" : "M",
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
         "entity" : "Image"
      },
      "(0018,9507)[<0>](0018,9538)[<1>](0018,9330)" : {
         "entity" : "Image",
         "usage" : "U",
         "desc" : [
            "Exact Nominal X-Ray tube current in milliamperes applied during the Frame Acquisition Duration (0018,9220) for this projection.",
            "Required if present and consistent in the contributing SOP Instances. Required if Modality (0008,0060) is MG."
         ],
         "name" : "X-Ray Tube Current in mA",
         "mod_tables" : [
            "table_C.8.21.3.4-1",
            "table_C.8.21.3.1.2-1"
         ],
         "req" : "1C",
         "module" : "Breast Tomosynthesis Acquisition"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a043)" : {
         "module" : "General Series",
         "req" : "1",
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
         "name" : "Concept Name Code Sequence",
         "entity" : "Series"
      },
      "(0018,9506)[<0>](0008,002a)" : {
         "entity" : "Image",
         "req" : "1C",
         "mod_tables" : [
            "table_C.8.21.2.3-1",
            "table_10-13"
         ],
         "name" : "Acquisition DateTime",
         "desc" : [
            "The time the acquisition of data that resulted in sources started.",
            "The value shall be the start date and time of the first contributing SOP Instance of the group specified by the Contributing SOP Instances Reference Sequence (0020,9529).",
            "Required if present and consistent in the contributing SOP Instances.",
            {
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_860bd0a7-b73c-4b1a-b133-254e5dec74a1"
                     },
                     "content" : [
                        "The Acquisition DateTime may be created by combining the values of Acquisition Date (0008,0022) and Acquisition Time (0008,0032) attributes in the contributing SOP Instances."
                     ]
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "usage" : "U",
         "module" : "Breast Tomosynthesis Contributing Sources"
      },
      "(0040,0260)[<0>](0040,0440)" : {
         "entity" : "Series",
         "usage" : "M",
         "desc" : "Sequence that specifies the context for the Performed Protocol Code Sequence Item. One or more Items are permitted in this Sequence.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "name" : "Protocol Context Sequence",
         "req" : "3",
         "module" : "General Series"
      },
      "(0040,0560)[<0>](0040,0562)" : {
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Issuer of the Specimen Identifier Sequence",
         "usage" : "U",
         "desc" : [
            "The name or code for the institution that has assigned the Specimen Identifier.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "req" : "2",
         "entity" : "Image"
      },
      "(0040,0520)" : {
         "entity" : "Image",
         "desc" : [
            "Description of one or more components of the container (e.g., description of the slide and of the coverslip).",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U",
         "name" : "Container Component Sequence",
         "req" : "3",
         "module" : "Specimen"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a040)" : {
         "entity" : "Series",
         "req" : "1",
         "name" : "Value Type",
         "usage" : "M",
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
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series"
      },
      "(0018,0012)[<0>](0018,9340)[<1>](0018,1041)" : {
         "module" : "Enhanced Contrast/Bolus",
         "desc" : "Volume administered during this phase in milliliters of diluted contrast agent.",
         "name" : "Contrast/Bolus Volume",
         "usage" : "C - Required if contrast media was applied.",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "req" : "2",
         "entity" : "Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a161)" : {
         "module" : "General Series",
         "req" : "1C",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "name" : "Floating Point Value",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0062,000b)" : [
         {
            "desc" : [
               "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
               "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
            ],
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "name" : "Referenced Segment Number",
            "req" : "1C",
            "entity" : "Series",
            "module" : "General Series"
         },
         {
            "req" : "1C",
            "name" : "Referenced Segment Number",
            "mod_tables" : [
               "table_C.8-76b",
               "table_10-9",
               "table_10-2"
            ],
            "desc" : [
               "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
               "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
            ],
            "usage" : "M",
            "entity" : "Series",
            "module" : "Enhanced Mammography Series"
         }
      ],
      "(0040,0520)[<0>](0050,001d)" : {
         "name" : "Container Component Diameter",
         "desc" : "Diameter in mm of container component for cylindrical or circular components.",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U",
         "req" : "3",
         "entity" : "Image",
         "module" : "Specimen"
      },
      "(0012,0021)" : {
         "module" : "Clinical Trial Subject",
         "req" : "2",
         "name" : "Clinical Trial Protocol Name",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "desc" : [
            "The name of the clinical trial or research protocol. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.3.1.3"
               }
            },
            "."
         ],
         "entity" : "Patient"
      },
      "(0018,9530)[<0>](0018,9526)" : {
         "entity" : "Image",
         "req" : "1",
         "usage" : "U",
         "name" : "Application Manufacturer",
         "desc" : "Name of the manufacturer of the application that created the reconstruction.",
         "mod_tables" : [
            "table_C.8.21.4-1"
         ],
         "module" : "X-Ray 3D Reconstruction"
      },
      "(0018,9506)[<0>](0040,0260)" : {
         "module" : "Breast Tomosynthesis Contributing Sources",
         "entity" : "Image",
         "name" : "Performed Protocol Code Sequence",
         "desc" : [
            "Sequence describing the Protocol performed for the Procedure Step creating the sources. One or more Items shall be included in this Sequence.",
            "Required if present and consistent in the contributing SOP Instances."
         ],
         "mod_tables" : [
            "table_C.8.21.2.3-1",
            "table_10-13"
         ],
         "usage" : "U",
         "req" : "1C"
      },
      "(0020,9222)[<0>](0020,9164)" : {
         "entity" : "Image",
         "req" : "1C",
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
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "name" : "Dimension Organization UID",
         "module" : "Multi-frame Dimension"
      },
      "(0018,a001)[<0>](0018,a003)" : {
         "desc" : "Description of the contribution the equipment made to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Contribution Description",
         "req" : "3",
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0040,0260)" : {
         "module" : "General Series",
         "entity" : "Series",
         "desc" : "Sequence describing the Protocol performed for this Procedure Step. One or more Items are permitted in this Sequence.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "usage" : "M",
         "name" : "Performed Protocol Code Sequence",
         "req" : "3"
      },
      "(0018,9507)[<0>](0018,7048)" : {
         "module" : "Breast Tomosynthesis Acquisition",
         "entity" : "Image",
         "desc" : [
            "Period in mSec of reciprocation cycle.",
            "Only meaningful if a value of Grid (0018,1166) is RECIPROCATING."
         ],
         "name" : "Grid Period",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8.21.3.4-1",
            "table_C.8.21.3.1.1-1",
            "table_C.8-36b"
         ],
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a122)" : [
         {
            "desc" : [
               "Time value for this name-value Item.",
               "Required if Value Type (0040,A040) is TIME."
            ],
            "name" : "Time",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "usage" : "M",
            "req" : "1C",
            "entity" : "Series",
            "module" : "General Series"
         },
         {
            "req" : "1C",
            "name" : "Time",
            "mod_tables" : [
               "table_C.8-76b",
               "table_10-9",
               "table_10-2"
            ],
            "usage" : "M",
            "desc" : [
               "Time value for this name-value Item.",
               "Required if Value Type (0040,A040) is TIME."
            ],
            "entity" : "Series",
            "module" : "Enhanced Mammography Series"
         }
      ],
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1160)" : {
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1C",
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
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0018,9507)[<0>](0008,2112)[<1>](0008,1160)" : {
         "entity" : "Image",
         "req" : "1C",
         "desc" : [
            "Identifies the frame numbers within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1.",
            {
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_68450e47-9448-4ac5-82e8-4015a854968a"
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
         "usage" : "U",
         "mod_tables" : [
            "table_C.8.21.3.4-1",
            "table_C.8.21.3.1.1-1",
            "table_10-3"
         ],
         "name" : "Referenced Frame Number",
         "module" : "Breast Tomosynthesis Acquisition"
      },
      "(0020,4000)" : {
         "entity" : "Image",
         "name" : "Image Comments",
         "mod_tables" : [
            "table_C.8.21.1-1"
         ],
         "desc" : "User-defined comments about the image.",
         "usage" : "M",
         "req" : "3",
         "module" : "X-Ray 3D Image"
      },
      "(fffa,fffa)[<0>](0400,0120)" : {
         "entity" : "Image",
         "name" : "Signature",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
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
         ],
         "req" : "1",
         "module" : "SOP Common"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a121)" : {
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Date",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "req" : "1C",
         "module" : "General Series"
      },
      "(0018,a001)[<0>](0008,1070)" : {
         "module" : "SOP Common",
         "name" : "Operators' Name",
         "desc" : "Name(s) of the operator(s) of the contributing equipment.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "3",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0008)" : [
         {
            "module" : "General Series",
            "entity" : "Series",
            "req" : "3",
            "usage" : "M",
            "desc" : "Sequence describing the Scheduled Protocol following a specific coding scheme. One or more Items are permitted in this Sequence.",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9"
            ],
            "name" : "Scheduled Protocol Code Sequence"
         },
         {
            "module" : "Enhanced Mammography Series",
            "entity" : "Series",
            "req" : "3",
            "usage" : "M",
            "name" : "Scheduled Protocol Code Sequence",
            "desc" : "Sequence describing the Scheduled Protocol following a specific coding scheme. One or more Items are permitted in this Sequence.",
            "mod_tables" : [
               "table_C.8-76b",
               "table_10-9"
            ]
         }
      ],
      "(0018,9507)[<0>](0018,0010)" : {
         "module" : "Breast Tomosynthesis Acquisition",
         "desc" : [
            "Contrast or bolus agent.",
            "Required if present and consistent in the contributing SOP Instances."
         ],
         "usage" : "U",
         "name" : "Contrast/Bolus Agent",
         "mod_tables" : [
            "table_C.8.21.3.4-1",
            "table_C.8.21.3.1.1-1"
         ],
         "req" : "1C",
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a043)" : {
         "entity" : "Image",
         "req" : "1",
         "name" : "Concept Name Code Sequence",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen"
      },
      "(0018,9507)[<0>](0018,9332)" : {
         "usage" : "U",
         "desc" : [
            "The total (cumulative) exposure for all frames expressed in milliampereseconds, for example calculated from Exposure Time and X-Ray Tube Current.",
            "Required if present and consistent in the contributing SOP Instances. Required if Modality (0008,0060) is MG."
         ],
         "name" : "Exposure in mAs",
         "mod_tables" : [
            "table_C.8.21.3.4-1",
            "table_C.8.21.3.1.1-1"
         ],
         "req" : "1C",
         "entity" : "Image",
         "module" : "Breast Tomosynthesis Acquisition"
      },
      "(0010,0032)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "Birth time of the Patient.",
         "name" : "Patient's Birth Time",
         "req" : "3",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0008,0096)[<0>](0040,1102)" : {
         "entity" : "Study",
         "usage" : "M",
         "name" : "Person's Address",
         "desc" : "Person's mailing address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "3",
         "module" : "General Study"
      },
      "(0008,0106)" : {
         "module" : "SOP Common",
         "entity" : "Image",
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
         "name" : "Context Group Version",
         "req" : "1"
      },
      "(0010,1002)[<0>](0010,0021)" : {
         "module" : "Patient",
         "req" : "3",
         "usage" : "M",
         "name" : "Issuer of Patient ID",
         "mod_tables" : [
            "table_C.7-1",
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
         "entity" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)" : [
         {
            "req" : "1C",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "desc" : [
               "Composite SOP Instance Reference value for this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
            ],
            "usage" : "M",
            "name" : "Referenced SOP Sequence",
            "entity" : "Series",
            "module" : "General Series"
         },
         {
            "module" : "Enhanced Mammography Series",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.8-76b",
               "table_10-9",
               "table_10-2"
            ],
            "usage" : "M",
            "desc" : [
               "Composite SOP Instance Reference value for this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
            ],
            "name" : "Referenced SOP Sequence",
            "req" : "1C"
         }
      ],
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a120)" : {
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "name" : "DateTime",
         "req" : "1C"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a122)" : {
         "module" : "Specimen",
         "req" : "1C",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "name" : "Time",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "entity" : "Image"
      },
      "(0008,1120)[<0>](0008,1155)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1"
      },
      "(0010,1100)[<0>](0040,e025)" : {
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
         "usage" : "M",
         "name" : "WADO-RS Retrieval Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "req" : "1C",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0018,9506)[<0>](0020,9529)[<1>](0020,000d)" : {
         "req" : "1",
         "usage" : "U",
         "name" : "Study Instance UID",
         "desc" : "Unique identifier for the Study of the Contributing SOP Instances.",
         "mod_tables" : [
            "table_C.8.21.2.3-1",
            "table_10-13"
         ],
         "entity" : "Image",
         "module" : "Breast Tomosynthesis Contributing Sources"
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
         "usage" : "M",
         "name" : "Assigning Jurisdiction Code Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "req" : "3",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0040,0555)[<0>](0040,a121)" : {
         "req" : "1C",
         "name" : "Date",
         "usage" : "M",
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
                     "attrs" : {
                        "xml:id" : "para_3da4ec3b-efe8-40a6-9c46-16bb7c8b79ca"
                     },
                     "el" : "para"
                  },
                  "\n                  "
               ]
            },
            "Required if the value that Concept Name Code Sequence (0040,A043) requires (implies) is a date. Shall not be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "entity" : "Image",
         "module" : "Acquisition Context"
      },
      "(0020,000e)" : {
         "entity" : "Series",
         "req" : "1",
         "usage" : "M",
         "name" : "Series Instance UID",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : "Unique identifier of the Series.",
         "module" : "General Series"
      },
      "(0008,0123)" : {
         "entity" : "Image",
         "desc" : [
            "Sequence of items that map values of Context Identifier (0008,010F) to an external, private or local Context Group.",
            "One or more Items are permitted in this Sequence."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Context Group Identification Sequence",
         "req" : "3",
         "module" : "SOP Common"
      },
      "(0040,0515)[<0>](0040,0513)[<1>](0040,0033)" : {
         "module" : "Specimen",
         "req" : "1C",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
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
         "name" : "Universal Entity ID Type",
         "entity" : "Image"
      },
      "(0008,0096)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "desc" : [
            "Identification of the patient's referring physician.",
            "Only a single item is permitted in this Sequence."
         ],
         "name" : "Referring Physician Identification Sequence",
         "req" : "3",
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0008,1111)[<0>](0008,1150)" : [
         {
            "req" : "1",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-11"
            ],
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "name" : "Referenced SOP Class UID",
            "entity" : "Series",
            "module" : "General Series"
         },
         {
            "module" : "Enhanced Mammography Series",
            "entity" : "Series",
            "req" : "1",
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "mod_tables" : [
               "table_C.8-76b",
               "table_10-11"
            ],
            "name" : "Referenced SOP Class UID",
            "usage" : "M"
         }
      ],
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "entity" : "Patient",
         "req" : "1C",
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "module" : "Patient"
      },
      "(0088,0200)[<0>](0028,0107)" : {
         "module" : "X-Ray 3D Image",
         "entity" : "Image",
         "name" : "Largest Image Pixel Value",
         "desc" : "The maximum actual pixel value encountered in this image.",
         "mod_tables" : [
            "table_C.8.21.1-1",
            "table_C.7-11b"
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,1001)" : [
         {
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9"
            ],
            "desc" : [
               "Identifier that identifies the Requested Procedure in the Imaging Service Request.",
               "Required if procedure was scheduled. May be present otherwise.",
               {
                  "el" : "note",
                  "content" : [
                     "\n                ",
                     {
                        "content" : [
                           "The condition is to allow the contents of this macro to be present (e.g., to convey the reason for the procedure, such as whether a mammogram is for screening or diagnostic purposes) even when the procedure was not formally scheduled and a value for this identifier is unknown, rather than making up a dummy value."
                        ],
                        "attrs" : {
                           "xml:id" : "para_5deccc65-f9a8-49d5-8b85-1d58535d1119"
                        },
                        "el" : "para"
                     },
                     "\n              "
                  ]
               }
            ],
            "usage" : "M",
            "name" : "Requested Procedure ID",
            "req" : "1C",
            "entity" : "Series"
         },
         {
            "desc" : [
               "Identifier that identifies the Requested Procedure in the Imaging Service Request.",
               "Required if procedure was scheduled. May be present otherwise.",
               {
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
                  ],
                  "el" : "note"
               }
            ],
            "name" : "Requested Procedure ID",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-76b",
               "table_10-9"
            ],
            "req" : "1C",
            "entity" : "Series",
            "module" : "Enhanced Mammography Series"
         }
      ],
      "(0028,1300)" : {
         "entity" : "Image",
         "req" : "1C",
         "desc" : [
            "Whether or not the imaged breast contains a breast implant regardless of the visibility of a breast implant in the Pixel Data.",
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
            "Required if Modality (0008,0060) is MG. May be present otherwise.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_502fda4b-e456-4577-a7c0-6d18231a294f"
                     },
                     "el" : "para",
                     "content" : [
                        "The value is expected to be YES for all images acquired on a breast that contains a breast implant, even when a breast implant is displaced during image acquisition."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.21.6-1"
         ],
         "name" : "Breast Implant Present",
         "module" : "Breast View"
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0307)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "1",
         "name" : "Deidentification Action",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "desc" : [
            "Recommended action to be performed during de-identification on elements listed in Identifying Private Elements (0008,0306) within this Item.",
            {
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
               ],
               "el" : "note"
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
                     "content" : [
                        "\n                    ",
                        {
                           "content" : [
                              "\n                      ",
                              {
                                 "content" : [
                                    "No C (clean) action is specified, since replacement with values of\n                        similar meaning known not to contain identifying information and consistent\n                        with the VR requires an understanding of the meaning of the value of the\n                        element. Whether or not to clean rather than remove or replace values is at\n                        the discretion of the implementer."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_79bc3e05-de52-489c-8337-4fe4bb188ec4"
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
                                       "el" : "olink",
                                       "attrs" : {
                                          "xrefstyle" : "template:PS3.15 Section %n %t",
                                          "targetdoc" : "PS3.15",
                                          "targetptr" : "sect_E.3.1"
                                       }
                                    },
                                    "."
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
            }
         ]
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0039)" : {
         "entity" : "Patient",
         "name" : "Assigning Jurisdiction Code Sequence",
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
         "req" : "3",
         "module" : "Patient"
      },
      "(0008,9205)" : {
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.21.1-1",
            "table_C.8-131"
         ],
         "desc" : [
            "Indication of the presence or absence of color information that may be used during rendering. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.16.2.1.1"
               },
               "el" : "xref"
            },
            " for a description and Enumerated Values."
         ],
         "name" : "Pixel Presentation",
         "req" : "1",
         "module" : "X-Ray 3D Image"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,003a)" : {
         "module" : "Patient",
         "req" : "3",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "name" : "Assigning Agency or Department Code Sequence",
         "entity" : "Patient"
      },
      "(0018,9506)[<0>](0008,1010)" : {
         "entity" : "Image",
         "req" : "1C",
         "mod_tables" : [
            "table_C.8.21.2.3-1",
            "table_10-13"
         ],
         "desc" : [
            "User defined name identifying the machine that produced the sources.",
            "Required if present and consistent in the contributing SOP Instances."
         ],
         "name" : "Station Name",
         "usage" : "U",
         "module" : "Breast Tomosynthesis Contributing Sources"
      },
      "(0008,1072)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Operator Identification Sequence",
         "desc" : [
            "Identification of the operator(s) supporting the Series.",
            "One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Operators' Name (0008,1070), if present."
         ],
         "usage" : "M",
         "req" : "3",
         "entity" : "Series"
      },
      "(0010,0034)" : {
         "module" : "Patient",
         "usage" : "M",
         "desc" : [
            "Date of death of the named patient in the Alternative Calendar (0010,0035).",
            {
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
               ],
               "el" : "note"
            }
         ],
         "name" : "Patient's Death Date in Alternative Calendar",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3",
         "entity" : "Patient"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0088,0140)" : {
         "entity" : "Image",
         "req" : "3",
         "desc" : "Uniquely identifies the Storage Media on which the Composite Object(s) reside.",
         "name" : "Storage Media File-Set UID",
         "mod_tables" : [
            "table_C.8.21.1-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M",
         "module" : "X-Ray 3D Image"
      },
      "(0088,0200)[<0>](0028,0106)" : {
         "entity" : "Image",
         "req" : "3",
         "name" : "Smallest Image Pixel Value",
         "desc" : "The minimum actual pixel value encountered in this image.",
         "mod_tables" : [
            "table_C.8.21.1-1",
            "table_C.7-11b"
         ],
         "usage" : "M",
         "module" : "X-Ray 3D Image"
      },
      "(0008,010f)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "usage" : "M",
         "name" : "Context Identifier",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1"
      },
      "(0028,0108)" : {
         "module" : "General Series",
         "entity" : "Series",
         "req" : "3",
         "desc" : "The minimum value of all images in this Series.",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "name" : "Smallest Pixel Value in Series"
      },
      "(0018,9507)[<0>](0018,9519)" : {
         "module" : "Breast Tomosynthesis Acquisition",
         "mod_tables" : [
            "table_C.8.21.3.4-1",
            "table_C.8.21.3.1.3-1"
         ],
         "usage" : "U",
         "name" : "Secondary Positioner Increment Sign",
         "desc" : [
            "Direction of the secondary positioner rotation.",
            {
               "list" : [
                  [
                     "+1",
                     "indicates a positive secondary positioner angle increment"
                  ],
                  [
                     "-1",
                     "indicates a negative secondary positioner angle increment"
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
                     "linkend" : "sect_C.8.7.5.1.2",
                     "xrefstyle" : "select: label"
                  }
               },
               " or ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.11.7",
                     "xrefstyle" : "select: label"
                  }
               },
               " for the sign conventions depending on modality and positioner type."
            ],
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.21.3.1.3.1"
                  }
               },
               " for further explanation."
            ]
         ],
         "req" : "3",
         "entity" : "Image"
      },
      "(0050,0010)[<0>](0050,0016)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "name" : "Device Diameter",
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
         "usage" : "U",
         "req" : "3",
         "module" : "Device"
      },
      "(0008,1049)[<0>](0008,0082)" : {
         "entity" : "Study",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Institution Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "1C",
         "module" : "General Study"
      },
      "(0040,0560)[<0>](0040,0620)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
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
         "name" : "Specimen Localization Content Item Sequence",
         "usage" : "U",
         "entity" : "Image",
         "module" : "Specimen"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a163)" : {
         "module" : "Specimen",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Rational Denominator Value",
         "usage" : "U",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "req" : "1C"
      },
      "(0008,0050)" : {
         "entity" : "Study",
         "req" : "2",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "name" : "Accession Number",
         "desc" : "A RIS generated number that identifies the order for the Study.",
         "module" : "General Study"
      },
      "(0018,9507)[<0>](0018,9515)" : {
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8.21.3.4-1",
            "table_C.8.21.3.1.3-1"
         ],
         "desc" : [
            [
               "Constant increment of the secondary positioner angle in degrees. Positive increment indicates an increasing value of the secondary positioner angle. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.7.5.1.2"
                  }
               },
               " or ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.11.7",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for the sign conventions depending on modality and positioner type."
            ],
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.21.3.1.3.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            "Required if present and consistent in the contributing SOP Instances."
         ],
         "name" : "Secondary Positioner Increment",
         "req" : "1C",
         "module" : "Breast Tomosynthesis Acquisition"
      },
      "(0010,1001)" : {
         "entity" : "Patient",
         "req" : "3",
         "usage" : "M",
         "desc" : "Other names used to identify the patient.",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Other Patient Names",
         "module" : "Patient"
      },
      "(0018,0012)[<0>](0018,0013)" : {
         "entity" : "Image",
         "desc" : [
            "T1 Relaxivity of the MR Contrast/Bolus used specified in s",
            {
               "content" : [
                  "-1"
               ],
               "el" : "superscript"
            },
            "*mmol",
            {
               "el" : "superscript",
               "content" : [
                  "-1"
               ]
            },
            " specified at body temperature in human blood plasma."
         ],
         "usage" : "C - Required if contrast media was applied.",
         "name" : "Contrast/Bolus T1 Relaxivity",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "req" : "3",
         "module" : "Enhanced Contrast/Bolus"
      },
      "(0400,0561)[<0>](0400,0565)" : {
         "usage" : "M",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a123)" : {
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Person Name",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0018,9507)[<0>](0018,7044)" : {
         "req" : "3",
         "name" : "Grid Pitch",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8.21.3.4-1",
            "table_C.8.21.3.1.1-1",
            "table_C.8-36b"
         ],
         "desc" : "The pitch in mm of the X-Ray absorbing material used in the grid.",
         "entity" : "Image",
         "module" : "Breast Tomosynthesis Acquisition"
      },
      "(4ffe,0001)[<0>](0400,0010)" : {
         "module" : "SOP Common",
         "usage" : "M",
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
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "MAC Calculation Transfer Syntax UID",
         "req" : "1",
         "entity" : "Image"
      },
      "(0008,0110)[<0>](0008,0112)" : {
         "module" : "SOP Common",
         "usage" : "M",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme Registry",
         "req" : "1C",
         "entity" : "Image"
      },
      "(0012,0083)[<0>](0012,0084)" : {
         "req" : "1C",
         "usage" : "U",
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
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "name" : "Distribution Type",
         "entity" : "Study",
         "module" : "Clinical Trial Study"
      },
      "(0018,9507)[<0>](0018,7060)" : {
         "req" : "1",
         "name" : "Exposure Control Mode",
         "desc" : [
            "Type of exposure control.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "MANUAL",
                     null
                  ],
                  [
                     "AUTOMATIC",
                     null
                  ]
               ],
               "title" : "Defined Terms:"
            }
         ],
         "mod_tables" : [
            "table_C.8.21.3.4-1"
         ],
         "usage" : "U",
         "entity" : "Image",
         "module" : "Breast Tomosynthesis Acquisition"
      },
      "(0010,0020)" : {
         "module" : "Patient",
         "req" : "2",
         "name" : "Patient ID",
         "usage" : "M",
         "desc" : [
            "Primary identifier for the patient.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_bd933dd8-c95a-459e-a9cd-8b9c90650099"
                     },
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
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient"
      },
      "(0018,9507)[<0>](0018,9518)" : {
         "module" : "Breast Tomosynthesis Acquisition",
         "entity" : "Image",
         "name" : "Primary Positioner Increment Sign",
         "mod_tables" : [
            "table_C.8.21.3.4-1",
            "table_C.8.21.3.1.3-1"
         ],
         "usage" : "U",
         "desc" : [
            "Direction of the primary positioner rotation.",
            {
               "type" : "variablelist",
               "title" : "Defined Terms:",
               "list" : [
                  [
                     "+1",
                     "indicates a positive primary positioner angle increment"
                  ],
                  [
                     "-1",
                     "indicates a negative primary positioner angle increment"
                  ]
               ]
            },
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.7.5.1.2"
                  },
                  "el" : "xref"
               },
               " or ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.11.7"
                  }
               },
               " for the sign conventions depending on modality and positioner type."
            ],
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.21.3.1.3.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "req" : "3"
      },
      "(0028,1103)" : {
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
         "name" : "Blue Palette Color Lookup Table Descriptor",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "req" : "1C",
         "entity" : "Image",
         "module" : "Image Pixel"
      },
      "(0008,0124)" : {
         "entity" : "Image",
         "req" : "3",
         "usage" : "M",
         "name" : "Mapping Resource Identification Sequence",
         "desc" : [
            "Sequence of items that map values of Mapping Resource (0008,0105) to an external, private or local Mapping Resource.",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0010,1100)[<0>](0040,e022)[<1>](0088,0130)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "2",
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the referenced instance(s) reside.",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "name" : "Storage Media File-Set ID"
      },
      "(4ffe,0001)[<0>](0400,0015)" : {
         "entity" : "Image",
         "name" : "MAC Algorithm",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_c0347aea-ecd8-4c0b-8e2f-cedadc2aacd5"
                     },
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
                     ]
                  },
                  "\n                    "
               ]
            }
         ],
         "usage" : "M",
         "req" : "1",
         "module" : "SOP Common"
      },
      "(0010,2297)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "2C",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "Name of person with medical or welfare decision making authority for the patient.",
            "Required if the patient is an animal. May be present otherwise."
         ],
         "name" : "Responsible Person",
         "usage" : "M"
      },
      "(0010,2201)" : {
         "usage" : "M",
         "desc" : [
            [
               "The taxonomic rank value (e.g., genus, subgenus, species or subspecies) of the patient.\n                    See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.1.1.1.3",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Required if the patient is an animal and if Patient Species Code Sequence (0010,2202) is not present. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient Species Description",
         "req" : "1C",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0008,3011)" : {
         "entity" : "Image",
         "req" : "3",
         "desc" : [
            "The set of Irradiation Events that were produced in this acquisition context.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.21.1.1.4",
                     "xrefstyle" : "select: labelnumber"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "One or more Items shall be included in this Sequence."
         ],
         "usage" : "M",
         "name" : "Source Irradiation Event Sequence",
         "mod_tables" : [
            "table_C.8.21.1-1"
         ],
         "module" : "X-Ray 3D Image"
      },
      "(0018,9507)[<0>](0018,701a)" : {
         "entity" : "Image",
         "req" : "1C",
         "usage" : "U",
         "desc" : [
            "Number of active detectors used to generate a single pixel. Specified as number of row detectors per pixel then column.",
            "Required if detector binning was applied to the projection images."
         ],
         "name" : "Detector Binning",
         "mod_tables" : [
            "table_C.8.21.3.4-1"
         ],
         "module" : "Breast Tomosynthesis Acquisition"
      },
      "(0040,0556)" : {
         "desc" : "Free-text description of the image-acquisition context.",
         "name" : "Acquisition Context Description",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "req" : "3",
         "entity" : "Image",
         "module" : "Acquisition Context"
      },
      "(0040,0555)[<0>](0040,a136)" : {
         "entity" : "Image",
         "desc" : [
            "References one or more frames in a Multi-frame SOP Instance. The first frame shall be denoted as frame number one.",
            "Required if this SOP Instance is a Multi-frame SOP Instance and the values in this Sequence item do not apply to all frames."
         ],
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "name" : "Referenced Frame Numbers",
         "usage" : "M",
         "req" : "1C",
         "module" : "Acquisition Context"
      },
      "(0018,1008)" : {
         "module" : "General Equipment",
         "entity" : "Equipment",
         "name" : "Gantry ID",
         "desc" : "Identifier of the gantry or positioner.",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0028,0302)" : {
         "module" : "X-Ray 3D Image",
         "entity" : "Image",
         "req" : "3",
         "name" : "Recognizable Visual Features",
         "mod_tables" : [
            "table_C.8.21.1-1"
         ],
         "usage" : "M",
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
      },
      "(0400,0500)" : {
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Encrypted Attributes Sequence",
         "req" : "1C",
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0040,0515)[<0>](0040,0513)[<1>](0040,0032)" : {
         "module" : "Specimen",
         "req" : "1C",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "usage" : "U",
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,08ea)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "name" : "Measurement Units Code Sequence",
         "usage" : "U",
         "entity" : "Image",
         "module" : "Specimen"
      },
      "(0008,3011)[<0>](0008,3010)" : {
         "module" : "X-Ray 3D Image",
         "entity" : "Image",
         "req" : "1",
         "name" : "Irradiation Event UID",
         "mod_tables" : [
            "table_C.8.21.1-1"
         ],
         "desc" : "Unique identification of the irradiation event(s) associated with the acquisition of this image.",
         "usage" : "M"
      },
      "(fffa,fffa)" : {
         "req" : "3",
         "desc" : [
            "Sequence holding Digital Signatures.",
            "One or more Items are permitted in this Sequence."
         ],
         "usage" : "M",
         "name" : "Digital Signatures Sequence",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0010,1000)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Other Patient IDs",
         "usage" : "M",
         "desc" : "Other identification numbers or codes used to identify the patient.",
         "req" : "3",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0088,0200)[<0>](0028,0006)" : {
         "entity" : "Image",
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
         "mod_tables" : [
            "table_C.8.21.1-1",
            "table_C.7-11b"
         ],
         "name" : "Planar Configuration",
         "req" : "1C",
         "module" : "X-Ray 3D Image"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0032)" : {
         "entity" : "Patient",
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "usage" : "M",
         "req" : "1C",
         "module" : "Patient"
      },
      "(0018,9507)[<0>](0018,9330)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8.21.3.4-1",
            "table_C.8.21.3.1.1-1"
         ],
         "desc" : [
            "Average of the nominal X-Ray tube currents in milliamperes for all frames.",
            "Required if present and consistent in the contributing SOP Instances. Required if Modality (0008,0060) is MG."
         ],
         "usage" : "U",
         "name" : "X-Ray Tube Current in mA",
         "req" : "1C",
         "module" : "Breast Tomosynthesis Acquisition"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1155)" : [
         {
            "entity" : "Series",
            "req" : "1",
            "usage" : "M",
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "name" : "Referenced SOP Instance UID",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2",
               "table_10-11"
            ],
            "module" : "General Series"
         },
         {
            "mod_tables" : [
               "table_C.8-76b",
               "table_10-9",
               "table_10-2",
               "table_10-11"
            ],
            "name" : "Referenced SOP Instance UID",
            "usage" : "M",
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "req" : "1",
            "entity" : "Series",
            "module" : "Enhanced Mammography Series"
         }
      ],
      "(0008,1110)[<0>](0008,1155)" : {
         "req" : "1",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0040,a170)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.8.21.1-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "name" : "Purpose of Reference Code Sequence",
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "One or more Items are permitted in this Sequence."
         ],
         "usage" : "M",
         "entity" : "Image",
         "module" : "X-Ray 3D Image"
      },
      "(0028,0109)" : {
         "module" : "General Series",
         "name" : "Largest Pixel Value in Series",
         "desc" : "The maximum value of all images in this Series.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "req" : "3",
         "entity" : "Series"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0032)" : {
         "module" : "Patient",
         "req" : "3",
         "name" : "Universal Entity ID",
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
         "entity" : "Patient"
      },
      "(0018,9530)[<0>](0018,9528)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.8.21.4-1"
         ],
         "usage" : "U",
         "desc" : "Description of the algorithm used to create the reconstruction.",
         "name" : "Algorithm Description",
         "entity" : "Image",
         "module" : "X-Ray 3D Reconstruction"
      },
      "(0040,0518)" : {
         "desc" : [
            "Type of container that contains the specimen(s) being imaged.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Container Type Code Sequence",
         "req" : "2",
         "entity" : "Image",
         "module" : "Specimen"
      },
      "(0050,0010)[<0>](0018,1000)" : {
         "module" : "Device",
         "entity" : "Image",
         "req" : "3",
         "desc" : "Manufacturer's serial number of the device",
         "name" : "Device Serial Number",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "usage" : "U"
      },
      "(0012,0082)" : {
         "req" : "3",
         "usage" : "U",
         "desc" : "Approval number issued by committee described in Clinical Trial Protocol Ethics Committee Name (0012,0081).",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "name" : "Clinical Trial Protocol Ethics Committee Approval Number",
         "entity" : "Patient",
         "module" : "Clinical Trial Subject"
      },
      "(0008,1164)[<0>](0008,1163)" : {
         "module" : "Frame Extraction",
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "desc" : [
            "The start and end times of the frames that were extracted.",
            "Required if object extraction is based on a Frame Level Retrieve using Time Range (0008,1163).",
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
         "name" : "Time Range",
         "mod_tables" : [
            "table_C.12-9"
         ],
         "req" : "1C",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a162)" : [
         {
            "module" : "General Series",
            "req" : "1C",
            "usage" : "M",
            "desc" : [
               "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
            ],
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "name" : "Rational Numerator Value",
            "entity" : "Series"
         },
         {
            "entity" : "Series",
            "usage" : "M",
            "desc" : [
               "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
            ],
            "name" : "Rational Numerator Value",
            "mod_tables" : [
               "table_C.8-76b",
               "table_10-9",
               "table_10-2"
            ],
            "req" : "1C",
            "module" : "Enhanced Mammography Series"
         }
      ],
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
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
         "usage" : "M",
         "req" : "1C",
         "entity" : "Patient"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0020,000e)" : {
         "module" : "X-Ray 3D Image",
         "entity" : "Image",
         "usage" : "M",
         "desc" : "Unique identifier of a Series that is part of this Study and contains the referenced Composite Object(s).",
         "mod_tables" : [
            "table_C.8.21.1-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "name" : "Series Instance UID",
         "req" : "1"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a120)" : {
         "name" : "DateTime",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1C",
         "entity" : "Image",
         "module" : "Specimen"
      },
      "(0040,0520)[<0>](0050,001e)" : {
         "module" : "Specimen",
         "entity" : "Image",
         "req" : "3",
         "desc" : "Container component text description.",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Container Component Description"
      },
      "(0010,2294)[<0>](0010,2295)" : {
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "Identification number of an animal within the registry.",
         "name" : "Breed Registration Number",
         "usage" : "M",
         "req" : "1",
         "module" : "Patient"
      },
      "(0008,009d)" : {
         "desc" : [
            "Identification of the consulting physician(s).",
            "One or more Items shall be included in this Sequence. If more than one Item, the number and order shall correspond to the value of Consulting Physician's Name (0008,009C), if present."
         ],
         "name" : "Consulting Physician Identification Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "3",
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a161)" : [
         {
            "req" : "1C",
            "name" : "Floating Point Value",
            "desc" : [
               "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
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
         {
            "module" : "Enhanced Mammography Series",
            "req" : "1C",
            "usage" : "M",
            "name" : "Floating Point Value",
            "desc" : [
               "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
            ],
            "mod_tables" : [
               "table_C.8-76b",
               "table_10-9",
               "table_10-2"
            ],
            "entity" : "Series"
         }
      ],
      "(0028,0034)" : {
         "entity" : "Image",
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
         ],
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "usage" : "M",
         "module" : "Image Pixel"
      },
      "(0008,103e)" : {
         "module" : "General Series",
         "entity" : "Series",
         "usage" : "M",
         "desc" : "Description of the Series",
         "name" : "Series Description",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "req" : "3"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1160)" : {
         "module" : "Patient",
         "entity" : "Patient",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "Referenced Frame Number"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0080)" : {
         "module" : "SOP Common",
         "name" : "Institution Name",
         "usage" : "M",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "req" : "1C",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a122)" : [
         {
            "desc" : [
               "Time value for this name-value Item.",
               "Required if Value Type (0040,A040) is TIME."
            ],
            "name" : "Time",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "usage" : "M",
            "req" : "1C",
            "entity" : "Series",
            "module" : "General Series"
         },
         {
            "module" : "Enhanced Mammography Series",
            "entity" : "Series",
            "req" : "1C",
            "mod_tables" : [
               "table_C.8-76b",
               "table_10-9",
               "table_10-2"
            ],
            "name" : "Time",
            "usage" : "M",
            "desc" : [
               "Time value for this name-value Item.",
               "Required if Value Type (0040,A040) is TIME."
            ]
         }
      ],
      "(0018,9507)[<0>](0018,0060)" : {
         "module" : "Breast Tomosynthesis Acquisition",
         "entity" : "Image",
         "name" : "KVP",
         "mod_tables" : [
            "table_C.8.21.3.4-1",
            "table_C.8.21.3.1.1-1"
         ],
         "usage" : "U",
         "desc" : [
            "Average of the peak kilo voltage outputs of the X-Ray generator used for all frames.",
            "Required if present and consistent in the contributing SOP Instances. Required if Modality (0008,0060) is MG."
         ],
         "req" : "1C"
      },
      "(0028,1203)" : {
         "module" : "Image Pixel",
         "mod_tables" : [
            "table_C.7-11b"
         ],
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
         "usage" : "M",
         "req" : "1C",
         "entity" : "Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a040)" : {
         "entity" : "Series",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
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
         "module" : "General Series"
      },
      "(0020,1040)" : {
         "module" : "Frame of Reference",
         "entity" : "Frame of Reference",
         "req" : "2",
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
         "usage" : "M",
         "name" : "Position Reference Indicator",
         "mod_tables" : [
            "table_C.7-6"
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0081)" : {
         "usage" : "M",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "name" : "Institution Address",
         "req" : "3",
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0038,0064)[<0>](0040,0033)" : {
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
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "name" : "Universal Entity ID Type",
         "req" : "1C",
         "entity" : "Study",
         "module" : "Patient Study"
      },
      "(0040,0275)[<0>](0032,1060)" : [
         {
            "module" : "General Series",
            "entity" : "Series",
            "req" : "3",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9"
            ],
            "name" : "Requested Procedure Description",
            "usage" : "M",
            "desc" : "Institution-generated administrative description or classification of Requested Procedure."
         },
         {
            "req" : "3",
            "name" : "Requested Procedure Description",
            "mod_tables" : [
               "table_C.8-76b",
               "table_10-9"
            ],
            "usage" : "M",
            "desc" : "Institution-generated administrative description or classification of Requested Procedure.",
            "entity" : "Series",
            "module" : "Enhanced Mammography Series"
         }
      ],
      "(0018,0036)[<0>](0018,0029)" : {
         "req" : "3",
         "name" : "Intervention Drug Code Sequence",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-19"
         ],
         "desc" : [
            "Sequence that identifies the interventional drug.",
            "Only a single item is permitted in this Sequence."
         ],
         "entity" : "Image",
         "module" : "Intervention"
      },
      "(0018,a001)[<0>](0018,a002)" : {
         "module" : "SOP Common",
         "name" : "Contribution DateTime",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The Date & Time when the equipment contributed to the composite instance.",
         "usage" : "M",
         "req" : "3",
         "entity" : "Image"
      },
      "(0018,9507)[<0>](0008,2112)" : {
         "name" : "Source Image Sequence",
         "desc" : [
            "A Sequence that identifies the set of Images that constitute this acquisition context.",
            "Required if the reconstruction is created from DICOM SOP Instances.",
            {
               "content" : [
                  "\n                        ",
                  {
                     "content" : [
                        "The attribute is absent in the case where the images used to create the volume are not available as SOP Instances, e.g., the volume was directly generated by acquisition system."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_4ffea095-2654-4910-bcdb-828cadd7b154"
                     }
                  },
                  "\n                      "
               ],
               "el" : "note"
            },
            "One or more Items shall be included in this Sequence."
         ],
         "usage" : "U",
         "mod_tables" : [
            "table_C.8.21.3.4-1",
            "table_C.8.21.3.1.1-1"
         ],
         "req" : "1C",
         "entity" : "Image",
         "module" : "Breast Tomosynthesis Acquisition"
      },
      "(0010,1002)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "3",
         "desc" : [
            "A sequence of identification numbers or codes used to identify the patient, which may or may not be human readable, and may or may not have been obtained from an implanted or attached device such as an RFID or barcode.",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Other Patient IDs Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0040,0555)[<0>](0040,a168)" : {
         "module" : "Acquisition Context",
         "name" : "Concept Code Sequence",
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a Coded Value.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Date (0040,A121), Time (0040,A122), Person Name (0040,A123), Text Value (0040,A160), and the pair of Numeric Value (0040,A30A) and Measurement Units Code Sequence (0040,08EA) are not present."
         ],
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "usage" : "M",
         "req" : "1C",
         "entity" : "Image"
      },
      "(0008,0110)[<0>](0008,0116)" : {
         "module" : "SOP Common",
         "req" : "3",
         "desc" : "Name of the organization responsible for the Coding Scheme. May include organizational contact information.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme Responsible Organization",
         "entity" : "Image"
      },
      "(0038,0014)" : {
         "entity" : "Study",
         "desc" : [
            "Identifier of the Assigning Authority that issued Admission ID (0038,0010).",
            "Only a single Item is permitted in this Sequence."
         ],
         "usage" : "U",
         "name" : "Issuer of Admission ID Sequence",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "req" : "3",
         "module" : "Patient Study"
      },
      "(0040,1012)" : {
         "module" : "General Study",
         "entity" : "Study",
         "name" : "Reason For Performed Procedure Code Sequence",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_dcfce3fc-57ae-49c6-9700-37334726e8eb"
                     }
                  },
                  "\n                  "
               ]
            },
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3"
      },
      "(0028,0100)" : [
         {
            "module" : "Image Pixel",
            "req" : "1",
            "usage" : "M",
            "desc" : [
               "Number of bits allocated for each pixel sample. Each sample shall have the same number of bits allocated. Bits Allocated (0028,0100) shall be either 1, or a multiple of 8. See ",
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
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "name" : "Bits Allocated",
            "entity" : "Image"
         },
         {
            "module" : "X-Ray 3D Image",
            "req" : "1",
            "desc" : [
               "Number of bits allocated for each voxel sample. Each sample shall have the same number of bits allocated.",
               {
                  "type" : "variablelist",
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
                  ]
               }
            ],
            "usage" : "M",
            "name" : "Bits Allocated",
            "mod_tables" : [
               "table_C.8.21.1-1"
            ],
            "entity" : "Image"
         }
      ],
      "(0008,1072)[<0>](0008,0080)" : {
         "module" : "General Series",
         "req" : "1C",
         "name" : "Institution Name",
         "usage" : "M",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "entity" : "Series"
      },
      "(0008,1072)[<0>](0040,1102)" : {
         "module" : "General Series",
         "req" : "3",
         "name" : "Person's Address",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "desc" : "Person's mailing address",
         "entity" : "Series"
      },
      "(0088,0200)[<0>](0028,0100)" : {
         "module" : "X-Ray 3D Image",
         "entity" : "Image",
         "usage" : "M",
         "desc" : [
            "Number of bits allocated for each pixel sample. Each sample shall have the same number of bits allocated. Bits Allocated (0028,0100) shall be either 1, or a multiple of 8. See ",
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
         "name" : "Bits Allocated",
         "mod_tables" : [
            "table_C.8.21.1-1",
            "table_C.7-11b"
         ],
         "req" : "1"
      },
      "(0018,1061)" : {
         "module" : "Synchronization",
         "req" : "3",
         "desc" : "Specifies equipment ID of trigger source and/or type of trigger",
         "usage" : "C - Required if time synchronization was applied.",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "name" : "Trigger Source or Type",
         "entity" : "Frame of Reference"
      },
      "(0008,0122)" : {
         "entity" : "Image",
         "req" : "3",
         "name" : "Mapping Resource Name",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "desc" : [
            "The name of the Mapping Resource.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_8.4",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ]
         ],
         "module" : "SOP Common"
      },
      "(0040,0275)[<0>](0008,0051)" : [
         {
            "req" : "3",
            "usage" : "M",
            "desc" : [
               "Identifier of the Assigning Authority that issued the Accession Number.",
               "Only a single Item is permitted in this Sequence."
            ],
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9"
            ],
            "name" : "Issuer of Accession Number Sequence",
            "entity" : "Series",
            "module" : "General Series"
         },
         {
            "entity" : "Series",
            "desc" : [
               "Identifier of the Assigning Authority that issued the Accession Number.",
               "Only a single Item is permitted in this Sequence."
            ],
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-76b",
               "table_10-9"
            ],
            "name" : "Issuer of Accession Number Sequence",
            "req" : "3",
            "module" : "Enhanced Mammography Series"
         }
      ],
      "(0018,9507)[<0>](0018,7032)" : {
         "module" : "Breast Tomosynthesis Acquisition",
         "entity" : "Image",
         "req" : "1C",
         "desc" : [
            "Clockwise rotation in degrees of Field of View in the referenced images, relative to the physical detector.",
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "0",
                     null
                  ],
                  [
                     "90",
                     null
                  ],
                  [
                     "180",
                     null
                  ],
                  [
                     "270",
                     null
                  ]
               ]
            },
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.11.4.1.1",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ],
            "Required if present and consistent in the contributing SOP Instances."
         ],
         "usage" : "U",
         "mod_tables" : [
            "table_C.8.21.3.4-1",
            "table_C.8.21.3.1.1-1"
         ],
         "name" : "Field of View Rotation"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,003a)" : {
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
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
         ],
         "name" : "Assigning Agency or Department Code Sequence",
         "req" : "3",
         "entity" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1155)" : {
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "M",
         "req" : "1"
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
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.17.2"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "usage" : "U",
         "req" : "1",
         "module" : "Multi-frame Dimension"
      },
      "(0018,a001)[<0>](0040,a170)" : {
         "module" : "SOP Common",
         "name" : "Purpose of Reference Code Sequence",
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
                     "linkend" : "sect_C.12.1.1.5",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ]
         ],
         "req" : "1",
         "entity" : "Image"
      },
      "(0008,1072)[<0>](0040,1104)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Person's Telecom Information",
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
                     ],
                     "el" : "orderedlist"
                  },
                  "\n              "
               ]
            }
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(fffa,fffa)[<0>](0400,0115)" : {
         "entity" : "Image",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : [
            [
               "A certificate that holds the identity of the entity producing this Digital Signature, that entity's public key or key identifier, and the algorithm and associated parameters with which that public key is to be used. Algorithms allowed are specified in Digital Signature Security Profiles (see ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: labelnumber",
                     "targetptr" : "PS3.15",
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
                                 "content" : [
                                    "As technology advances, additional encryption algorithms may be allowed in future versions. Implementations should take this possibility into account."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_cbf16d70-7dfc-44e9-85f6-9cf9aea9f0eb"
                                 },
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
                                 "attrs" : {
                                    "xml:id" : "para_2d3ce9c9-555a-4be1-9e6d-e07eb84c4852"
                                 },
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
               ],
               "el" : "note"
            }
         ],
         "name" : "Certificate of Signer",
         "module" : "SOP Common"
      },
      "(0008,0201)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
                                       "el" : "olink",
                                       "attrs" : {
                                          "targetdoc" : "PS3.5",
                                          "targetptr" : "PS3.5",
                                          "xrefstyle" : "select: labelnumber"
                                       }
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
                           "el" : "listitem",
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
                           ]
                        },
                        "\n                    ",
                        {
                           "el" : "listitem",
                           "content" : [
                              "\n                      ",
                              {
                                 "content" : [
                                    "The \"+\" sign may not be omitted."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_6500ab52-60e5-4f8a-a3e5-fcedc8ddc8fc"
                                 },
                                 "el" : "para"
                              },
                              "\n                    "
                           ]
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_a41cecaa-0d35-48a8-b71a-99ab42511778"
                     },
                     "content" : [
                        "UTC = 5.00 a.m."
                     ]
                  },
                  "\n                  ",
                  {
                     "content" : [
                        "Local Time = 3.00 a.m."
                     ],
                     "attrs" : {
                        "xml:id" : "para_50578448-3e31-49d4-87db-a9b392279794"
                     },
                     "el" : "para"
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
         ],
         "usage" : "M",
         "name" : "Timezone Offset From UTC",
         "req" : "3",
         "module" : "SOP Common"
      },
      "(0010,0024)" : {
         "entity" : "Patient",
         "req" : "3",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "usage" : "M",
         "module" : "Patient"
      },
      "(0010,0216)[<0>](0010,0217)" : {
         "module" : "Patient",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Strain Source",
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
         "usage" : "M",
         "entity" : "Patient"
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1150)" : [
         {
            "module" : "General Series",
            "entity" : "Series",
            "req" : "1",
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "usage" : "M",
            "name" : "Referenced SOP Class UID",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-11"
            ]
         },
         {
            "module" : "Enhanced Mammography Series",
            "req" : "1",
            "usage" : "M",
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "mod_tables" : [
               "table_C.8-76b",
               "table_10-9",
               "table_10-11"
            ],
            "name" : "Referenced SOP Class UID",
            "entity" : "Series"
         }
      ],
      "(0050,0010)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "usage" : "U",
         "name" : "Device Sequence",
         "desc" : [
            "A sequence of items describing devices used that may be visible in the image.",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Image",
         "module" : "Device"
      },
      "(0010,0024)[<0>](0040,0033)" : {
         "req" : "1C",
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
         "name" : "Universal Entity ID Type",
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(fffa,fffa)[<0>](0400,0005)" : {
         "module" : "SOP Common",
         "req" : "1",
         "usage" : "M",
         "desc" : "A number used to identify which MAC Parameters Sequence item was used in the calculation of this Digital Signature.",
         "name" : "MAC ID Number",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a121)" : [
         {
            "module" : "General Series",
            "entity" : "Series",
            "desc" : [
               "Date value for this name-value Item.",
               "Required if Value Type (0040,A040) is DATE."
            ],
            "usage" : "M",
            "name" : "Date",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "req" : "1C"
         },
         {
            "module" : "Enhanced Mammography Series",
            "req" : "1C",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-76b",
               "table_10-9",
               "table_10-2"
            ],
            "desc" : [
               "Date value for this name-value Item.",
               "Required if Value Type (0040,A040) is DATE."
            ],
            "name" : "Date",
            "entity" : "Series"
         }
      ],
      "(0028,1202)" : {
         "module" : "Image Pixel",
         "entity" : "Image",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "name" : "Green Palette Color Lookup Table Data",
         "usage" : "M",
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
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a120)" : [
         {
            "req" : "1C",
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
            "entity" : "Series",
            "module" : "General Series"
         },
         {
            "entity" : "Series",
            "name" : "DateTime",
            "mod_tables" : [
               "table_C.8-76b",
               "table_10-9",
               "table_10-2"
            ],
            "desc" : [
               "DateTime value for this name-value Item.",
               "Required if Value Type (0040,A040) is DATETIME."
            ],
            "usage" : "M",
            "req" : "1C",
            "module" : "Enhanced Mammography Series"
         }
      ],
      "(0018,9507)[<0>](0018,9538)[<1>](0040,8302)" : {
         "module" : "Breast Tomosynthesis Acquisition",
         "entity" : "Image",
         "req" : "3",
         "desc" : [
            "Average entrance dose value measured in mGy at the surface of the patient\u00ad during the acquisition of this projection image.",
            {
               "content" : [
                  "\n                      ",
                  {
                     "content" : [
                        "This may be an estimated value based on assumptions about the patient's body size and habitus."
                     ],
                     "attrs" : {
                        "xml:id" : "para_0ecfcd91-5a5e-4717-a6d6-f83c735abb5f"
                     },
                     "el" : "para"
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ],
         "usage" : "U",
         "mod_tables" : [
            "table_C.8.21.3.4-1"
         ],
         "name" : "Entrance Dose in mGy"
      },
      "(0040,0560)[<0>](0040,0602)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Specimen Detailed Description",
         "usage" : "U",
         "desc" : "Detailed textual specimen description (may include ancestor specimen descriptions).",
         "req" : "3",
         "module" : "Specimen"
      },
      "(0050,0010)[<0>](0008,0070)" : {
         "module" : "Device",
         "entity" : "Image",
         "name" : "Manufacturer",
         "desc" : "Manufacturer of the device",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "usage" : "U",
         "req" : "3"
      },
      "(0028,1201)" : {
         "module" : "Image Pixel",
         "req" : "1C",
         "name" : "Red Palette Color Lookup Table Data",
         "desc" : [
            "Red Palette Color Lookup Table Data. Required if Photometric Interpretation (0028,0004) has a value of PALETTE COLOR or Pixel Presentation (0008,9205) at the image level equals COLOR or MIXED. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.3.1.6"
               }
            },
            " for further explanation."
         ],
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "usage" : "M",
         "entity" : "Image"
      },
      "(0008,9207)" : {
         "module" : "X-Ray 3D Image",
         "req" : "1",
         "name" : "Volume Based Calculation Technique",
         "desc" : [
            "Method used for volume calculations with frames in the SOP Instance. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.16.2.1.3"
               },
               "el" : "xref"
            },
            " for a description and Defined Terms."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.21.1-1",
            "table_C.8-131"
         ],
         "entity" : "Image"
      },
      "(0018,9507)[<0>](0018,9510)" : {
         "entity" : "Image",
         "req" : "1C",
         "desc" : [
            [
               "Start position of the primary positioner in degrees. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.7.5.1.2",
                     "xrefstyle" : "select: label"
                  }
               },
               " or ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.11.7",
                     "xrefstyle" : "select: label"
                  }
               },
               ", depending on modality and positioner type."
            ],
            "Required if present and consistent in the contributing SOP Instances. Required if Modality (0008,0060) is MG."
         ],
         "mod_tables" : [
            "table_C.8.21.3.4-1",
            "table_C.8.21.3.1.3-1"
         ],
         "name" : "Primary Positioner Scan Start Angle",
         "usage" : "U",
         "module" : "Breast Tomosynthesis Acquisition"
      },
      "(0040,051a)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U",
         "name" : "Container Description",
         "desc" : "Description of the container.",
         "entity" : "Image",
         "module" : "Specimen"
      },
      "(0038,0062)" : {
         "module" : "Patient Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Service Episode Description",
         "usage" : "U",
         "desc" : "Description of the type of service episode.",
         "req" : "3"
      },
      "(0018,1200)" : {
         "module" : "General Equipment",
         "entity" : "Equipment",
         "req" : "3",
         "name" : "Date of Last Calibration",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
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
         ]
      },
      "(0008,0096)[<0>](0040,1103)" : {
         "module" : "General Study",
         "entity" : "Study",
         "usage" : "M",
         "desc" : "Person's telephone number(s)",
         "name" : "Person's Telephone Numbers",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "3"
      },
      "(0012,0083)[<0>](0012,0020)" : {
         "module" : "Clinical Trial Study",
         "req" : "1C",
         "name" : "Clinical Trial Protocol ID",
         "mod_tables" : [
            "table_C.7-4b"
         ],
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
         "usage" : "U",
         "entity" : "Study"
      },
      "(0018,a001)[<0>](0008,1040)" : {
         "entity" : "Image",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Institutional Department Name",
         "usage" : "M",
         "desc" : "Department in the institution where the equipment that contributed to the composite instance is located.",
         "module" : "SOP Common"
      },
      "(0038,0014)[<0>](0040,0031)" : {
         "module" : "Patient Study",
         "entity" : "Study",
         "req" : "1C",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "name" : "Local Namespace Entity ID"
      },
      "(0018,a001)[<0>](0008,0070)" : {
         "desc" : "Manufacturer of the equipment that contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Manufacturer",
         "usage" : "M",
         "req" : "1",
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0008,9092)[<0>](0008,1115)" : {
         "req" : "1",
         "desc" : [
            "Sequence of Items where each Item includes the Attributes of a Series containing referenced Composite Object(s).",
            "One or more Items shall be included in this Sequence"
         ],
         "usage" : "M",
         "name" : "Referenced Series Sequence",
         "mod_tables" : [
            "table_C.8.21.1-1",
            "table_C.17-3"
         ],
         "entity" : "Image",
         "module" : "X-Ray 3D Image"
      },
      "(0088,0200)[<0>](7fe0,0010)" : {
         "module" : "X-Ray 3D Image",
         "entity" : "Image",
         "req" : "1C",
         "usage" : "M",
         "name" : "Pixel Data",
         "mod_tables" : [
            "table_C.8.21.1-1",
            "table_C.7-11b"
         ],
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
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)" : {
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Referenced SOP Sequence",
         "usage" : "M",
         "req" : "1C"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0008,1150)" : {
         "module" : "Specimen",
         "entity" : "Image",
         "usage" : "U",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "req" : "1"
      },
      "(0008,009d)[<0>](0040,1104)" : {
         "module" : "General Study",
         "req" : "3",
         "name" : "Person's Telecom Information",
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
                                 "attrs" : {
                                    "xml:id" : "para_96e493a8-b679-4f97-987f-4e08360642a4"
                                 },
                                 "el" : "para",
                                 "content" : [
                                    "It is recommended that this attribute be treated as equivalent to HL7v2 (v2.5 or later) field ROL-12, and be formatted in accordance with the HL7v2 XTN data type (without escapes for HL7 message structure reserved characters). See additional notes in the Module invoking this Macro."
                                 ]
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
         "entity" : "Study"
      },
      "(0028,0101)" : [
         {
            "entity" : "Image",
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
            "name" : "Bits Stored",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "usage" : "M",
            "req" : "1",
            "module" : "Image Pixel"
         },
         {
            "module" : "X-Ray 3D Image",
            "req" : "1",
            "mod_tables" : [
               "table_C.8.21.1-1"
            ],
            "desc" : [
               "Number of bits stored for each voxel sample. Each sample shall have the same number of bits stored.",
               {
                  "type" : "variablelist",
                  "list" : [
                     [
                        "8",
                        null
                     ],
                     [
                        "9",
                        null
                     ],
                     [
                        "10",
                        null
                     ],
                     [
                        "11",
                        null
                     ],
                     [
                        "12",
                        null
                     ],
                     [
                        "13",
                        null
                     ],
                     [
                        "14",
                        null
                     ],
                     [
                        "15",
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
            "entity" : "Image"
         }
      ],
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)" : [
         {
            "module" : "General Series",
            "req" : "3",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9"
            ],
            "usage" : "M",
            "name" : "Protocol Context Sequence",
            "desc" : "Sequence that specifies the context for the Scheduled Protocol Code Sequence Item. One or more Items are permitted in this Sequence.",
            "entity" : "Series"
         },
         {
            "module" : "Enhanced Mammography Series",
            "entity" : "Series",
            "req" : "3",
            "mod_tables" : [
               "table_C.8-76b",
               "table_10-9"
            ],
            "name" : "Protocol Context Sequence",
            "usage" : "M",
            "desc" : "Sequence that specifies the context for the Scheduled Protocol Code Sequence Item. One or more Items are permitted in this Sequence."
         }
      ],
      "(0008,1084)" : {
         "module" : "Patient Study",
         "usage" : "U",
         "desc" : [
            "A sequence that conveys the admitting diagnosis (diagnoses).",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Admitting Diagnoses Code Sequence",
         "req" : "3",
         "entity" : "Study"
      },
      "(0012,0042)" : {
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
         "name" : "Clinical Trial Subject Reading ID",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U",
         "entity" : "Patient"
      },
      "(0010,2203)" : {
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Patient's Sex Neutered",
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
         "usage" : "U",
         "req" : "2C",
         "module" : "Patient Study"
      },
      "(0018,9507)[<0>](0018,7040)" : {
         "entity" : "Image",
         "req" : "3",
         "desc" : "The X-Ray absorbing material used in the grid.",
         "mod_tables" : [
            "table_C.8.21.3.4-1",
            "table_C.8.21.3.1.1-1",
            "table_C.8-36b"
         ],
         "name" : "Grid Absorbing Material",
         "usage" : "U",
         "module" : "Breast Tomosynthesis Acquisition"
      },
      "(0018,a001)[<0>](0008,1072)" : {
         "desc" : [
            "Identification of the operator(s) of the contributing equipment.",
            "One or more Items are permitted in this Sequence.",
            "The number and order of Items shall correspond to the number and order of values of Operators' Name (0008,1070), if present."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Operator Identification Sequence",
         "req" : "3",
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0020,9221)" : {
         "module" : "Multi-frame Dimension",
         "req" : "1",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "usage" : "U",
         "desc" : [
            [
               "Sequence that lists the Dimension Organization UIDs referenced by the containing SOP Instance. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.17.2"
                  }
               },
               " for further explanation."
            ],
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Dimension Organization Sequence",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0007)" : [
         {
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9"
            ],
            "usage" : "M",
            "desc" : "Institution-generated description or classification of the Scheduled Procedure Step to be performed.",
            "name" : "Scheduled Procedure Step Description",
            "req" : "3",
            "entity" : "Series"
         },
         {
            "usage" : "M",
            "desc" : "Institution-generated description or classification of the Scheduled Procedure Step to be performed.",
            "mod_tables" : [
               "table_C.8-76b",
               "table_10-9"
            ],
            "name" : "Scheduled Procedure Step Description",
            "req" : "3",
            "entity" : "Series",
            "module" : "Enhanced Mammography Series"
         }
      ],
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0404)" : {
         "req" : "1",
         "usage" : "M",
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
         "mod_tables" : [
            "table_C.8.21.1-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "name" : "MAC",
         "entity" : "Image",
         "module" : "X-Ray 3D Image"
      },
      "(0040,0520)[<0>](0050,001a)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
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
         "name" : "Container Component Material",
         "req" : "3",
         "entity" : "Image",
         "module" : "Specimen"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)" : {
         "mod_tables" : [
            "table_C.8.21.1-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M",
         "name" : "Referenced SOP Instance MAC Sequence",
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
                     "attrs" : {
                        "xml:id" : "para_85131baf-ebaa-41ca-b044-07c75698df97"
                     },
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "req" : "3",
         "entity" : "Image",
         "module" : "X-Ray 3D Image"
      },
      "(0088,0200)[<0>](0028,2002)" : {
         "module" : "X-Ray 3D Image",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8.21.1-1",
            "table_C.7-11b"
         ],
         "usage" : "M",
         "name" : "Color Space",
         "desc" : [
            "A label that identifies the well-known color space of the image. Shall be consistent with any ICC Profile (0028,2000) that is also present.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.11.15.1.2"
                  }
               },
               "."
            ]
         ],
         "req" : "3"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a123)" : {
         "module" : "Specimen",
         "name" : "Person Name",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1C",
         "entity" : "Image"
      },
      "(0018,9507)" : {
         "req" : "1",
         "desc" : [
            "Each Item represents an acquisition context related to one or more reconstructions.",
            "The values of Acquisition Index (0020,9518) may be used as index in this Sequence.",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.8.21.3.4-1"
         ],
         "usage" : "U",
         "name" : "X-Ray 3D Acquisition Sequence",
         "entity" : "Image",
         "module" : "Breast Tomosynthesis Acquisition"
      },
      "(0010,1100)" : {
         "entity" : "Patient",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Referenced Patient Photo Sequence",
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
         "usage" : "M",
         "module" : "Patient"
      },
      "(4ffe,0001)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "MAC Parameters Sequence",
         "desc" : [
            "A sequence of items that describe the parameters used to calculate a MAC for use in Digital Signatures.",
            "One or more Items shall be included in this Sequence."
         ],
         "usage" : "M"
      },
      "(0008,1250)" : {
         "module" : "General Series",
         "entity" : "Series",
         "usage" : "M",
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
                           ],
                           "el" : "listitem"
                        },
                        "\n                      ",
                        {
                           "content" : [
                              "\n                        ",
                              {
                                 "content" : [
                                    "The related series may have different Frames of Reference and hence require some sort of registration before spatial coordinates can be directly compared."
                                 ],
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_e9e67beb-8432-4dbc-9f6a-df5800189967"
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
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_7ef219a6-dfda-4b92-a778-37d54ca1cc2c"
                                 },
                                 "content" : [
                                    "This attribute is not intended for conveying localizer reference information, for which Referenced Image Sequence (0008,1140) should be used."
                                 ]
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
         "name" : "Related Series Sequence",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "req" : "3"
      },
      "(0018,9506)[<0>](0020,9529)[<1>](0008,1115)" : {
         "entity" : "Image",
         "req" : "1",
         "mod_tables" : [
            "table_C.8.21.2.3-1",
            "table_10-13"
         ],
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Referenced Series Sequence",
         "usage" : "U",
         "module" : "Breast Tomosynthesis Contributing Sources"
      },
      "(0050,0010)[<0>](0050,0018)" : {
         "entity" : "Image",
         "req" : "3",
         "usage" : "U",
         "desc" : [
            "Volume of device in ml. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.6.12.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "name" : "Device Volume",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "module" : "Device"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0100)" : {
         "module" : "X-Ray 3D Image",
         "entity" : "Image",
         "req" : "1",
         "usage" : "M",
         "name" : "Digital Signature UID",
         "mod_tables" : [
            "table_C.8.21.1-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "The Unique Identifier of a Digital Signature held in the referenced SOP Instance."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,08ea)" : {
         "module" : "General Series",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Measurement Units Code Sequence",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "entity" : "Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1150)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M",
         "req" : "1",
         "entity" : "Series"
      },
      "(0018,a001)[<0>](0008,1090)" : {
         "entity" : "Image",
         "req" : "3",
         "usage" : "M",
         "desc" : "Manufacturer's model name of the equipment that contributed to the composite instance.",
         "name" : "Manufacturer's Model Name",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0008,0051)" : {
         "module" : "General Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Issuer of Accession Number Sequence",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this Sequence."
         ],
         "req" : "3",
         "entity" : "Study"
      },
      "(0018,0012)[<0>](0018,9337)" : {
         "entity" : "Image",
         "req" : "1",
         "usage" : "C - Required if contrast media was applied.",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "name" : "Contrast/Bolus Agent Number",
         "desc" : "Identifying number, unique within this SOP Instance, of the agent administered. Used to reference this particular agent from the Contrast/Bolus Functional Group Macro. The number shall be 1 for the first Item and increase by 1 for each subsequent Item.",
         "module" : "Enhanced Contrast/Bolus"
      },
      "(0018,9507)[<0>](0018,9538)[<1>](0018,1702)" : {
         "module" : "Breast Tomosynthesis Acquisition",
         "entity" : "Image",
         "desc" : [
            "Required if a value of Collimator Shape (0018,1700) is RECTANGULAR. Location of the left edge of the rectangular collimator with respect to pixels in the image given as column. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.7.3.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "usage" : "U",
         "name" : "Collimator Left Vertical Edge",
         "mod_tables" : [
            "table_C.8.21.3.4-1",
            "table_C.8.21.3.1.2-1",
            "table_C.8-28b"
         ],
         "req" : "1C"
      },
      "(0008,9092)" : {
         "entity" : "Image",
         "usage" : "M",
         "name" : "Referenced Image Evidence Sequence",
         "mod_tables" : [
            "table_C.8.21.1-1"
         ],
         "desc" : [
            [
               "Full set of Composite SOP Instances referred to inside the Referenced Image Sequences of this SOP Instance. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.13.2.1.2"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            "One or more Items shall be included in this Sequence.",
            "Required if the Referenced Image Sequence (0008,1140) is present."
         ],
         "req" : "1C",
         "module" : "X-Ray 3D Image"
      },
      "(0010,0024)[<0>](0040,003a)" : {
         "module" : "Patient",
         "req" : "3",
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
                     "attrs" : {
                        "xml:id" : "para_d5f050e9-c374-464c-bbc6-c76b57d065fd"
                     },
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 10 (Assigning Agency or Department)."
                     ]
                  },
                  "\n              "
               ]
            }
         ],
         "name" : "Assigning Agency or Department Code Sequence",
         "entity" : "Patient"
      },
      "(0010,1100)[<0>](0020,000e)" : {
         "entity" : "Patient",
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "Unique identifier for the Series that is part of the Study identified in Study Instance UID (0020,000D), if present, and contains the referenced object instance(s).",
            "Required if Type of Instances (0040,E020) is DICOM"
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "Series Instance UID",
         "module" : "Patient"
      },
      "(0050,0010)[<0>](0008,1090)" : {
         "module" : "Device",
         "entity" : "Image",
         "req" : "3",
         "desc" : "Manufacturer's model name of the device",
         "name" : "Manufacturer's Model Name",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "usage" : "U"
      },
      "(0040,0520)[<0>](0050,0013)" : {
         "entity" : "Image",
         "req" : "3",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Container Component Thickness",
         "desc" : "Thickness in mm of container component",
         "module" : "Specimen"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)" : {
         "module" : "X-Ray 3D Image",
         "entity" : "Image",
         "req" : "1",
         "name" : "Referenced SOP Sequence",
         "desc" : [
            "References to Composite Object SOP Class/SOP Instance pairs that are part of the Study defined by Study Instance UID and the Series defined by Series Instance UID (0020,000E).",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.8.21.1-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M"
      },
      "(0018,9507)[<0>](0018,7001)" : {
         "module" : "Breast Tomosynthesis Acquisition",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8.21.3.4-1"
         ],
         "name" : "Detector Temperature",
         "desc" : "Detector temperature during exposure in degrees Celsius.",
         "usage" : "U",
         "req" : "1"
      },
      "(0018,9530)[<0>](0018,9525)" : {
         "module" : "X-Ray 3D Reconstruction",
         "entity" : "Image",
         "req" : "1",
         "name" : "Application Version",
         "mod_tables" : [
            "table_C.8.21.4-1"
         ],
         "desc" : "Version of the application that created the reconstruction.",
         "usage" : "U"
      },
      "(0010,0030)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "desc" : "Birth date of the patient.",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient's Birth Date",
         "req" : "2"
      },
      "(0040,0560)[<0>](0008,2228)" : {
         "module" : "Specimen",
         "desc" : [
            "Sequence of Items that identifies the primary anatomic structure(s) of interest in this Instance.",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Primary Anatomic Structure Sequence",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-8"
         ],
         "req" : "3",
         "entity" : "Image"
      },
      "(0008,0096)[<0>](0040,1104)" : {
         "module" : "General Study",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person's Telecom Information",
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a123)" : {
         "req" : "1C",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Person Name",
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0040,a390)[<0>](0040,e001)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "usage" : "M",
         "name" : "HL7 Instance Identifier",
         "desc" : "Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a168)" : [
         {
            "module" : "General Series",
            "entity" : "Series",
            "req" : "1C",
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
            ]
         },
         {
            "entity" : "Series",
            "req" : "1C",
            "desc" : [
               "Coded concept value of this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is CODE."
            ],
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-76b",
               "table_10-9",
               "table_10-2"
            ],
            "name" : "Concept Code Sequence",
            "module" : "Enhanced Mammography Series"
         }
      ],
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a120)" : {
         "module" : "Specimen",
         "entity" : "Image",
         "name" : "DateTime",
         "usage" : "U",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1C"
      },
      "(0020,9222)[<0>](0020,9238)" : {
         "entity" : "Image",
         "req" : "1C",
         "desc" : [
            "Identification of the creator of a group of private data elements.",
            "Required if the Functional Group Pointer 0020,9167) value is the Data Element Tag of a Private Attribute."
         ],
         "usage" : "U",
         "name" : "Functional Group Private Creator",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "module" : "Multi-frame Dimension"
      },
      "(0020,0060)" : {
         "module" : "General Series",
         "entity" : "Series",
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
               "el" : "note",
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
               ]
            }
         ],
         "usage" : "M",
         "name" : "Laterality",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "req" : "2C"
      },
      "(0028,0301)" : {
         "module" : "X-Ray 3D Image",
         "req" : "1",
         "mod_tables" : [
            "table_C.8.21.1-1"
         ],
         "name" : "Burned In Annotation",
         "desc" : [
            "Indicates whether or not the image contains sufficient burned in annotation to identify the patient and date the image was acquired.",
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
         "usage" : "M",
         "entity" : "Image"
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
         "usage" : "U",
         "req" : "1C",
         "module" : "Specimen"
      },
      "(0008,1110)[<0>](0008,1150)" : {
         "module" : "General Study",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "entity" : "Study"
      },
      "(0040,0513)[<0>](0040,0033)" : {
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
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "usage" : "U",
         "name" : "Universal Entity ID Type",
         "req" : "1C",
         "entity" : "Image",
         "module" : "Specimen"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0033)" : {
         "module" : "Patient",
         "entity" : "Patient",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "req" : "1C"
      },
      "(0010,1100)[<0>](0040,e023)[<1>](0040,e010)" : {
         "entity" : "Patient",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
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
               "el" : "note",
               "content" : [
                  "\n",
                  {
                     "content" : [
                        "The VR of this attribute has changed from UT to UR."
                     ],
                     "attrs" : {
                        "xml:id" : "para_579dc3f3-c3f6-407b-b4bc-d6197e7cc820"
                     },
                     "el" : "para"
                  },
                  "\n"
               ]
            }
         ],
         "name" : "Retrieve URI",
         "usage" : "M",
         "module" : "Patient"
      },
      "(0008,009c)" : {
         "req" : "3",
         "usage" : "M",
         "desc" : "Consulting physician(s) for this patient visit.",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Consulting Physician's Name",
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0100,0426)" : {
         "entity" : "Image",
         "desc" : "The certification number issued to the Application Entity that set the SOP Instance Status (0100,0410) to AO.",
         "usage" : "M",
         "name" : "Authorization Equipment Certification Number",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "module" : "SOP Common"
      },
      "(0008,1060)" : {
         "module" : "General Study",
         "req" : "3",
         "desc" : "Names of the physician(s) reading the Study.",
         "name" : "Name of Physician(s) Reading Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "entity" : "Study"
      },
      "(0040,0275)[<0>](0032,1064)" : [
         {
            "entity" : "Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9"
            ],
            "name" : "Requested Procedure Code Sequence",
            "desc" : [
               "A sequence that conveys the Procedure Type of the requested procedure.",
               "Only a single Item is permitted in this Sequence."
            ],
            "usage" : "M",
            "req" : "3",
            "module" : "General Series"
         },
         {
            "module" : "Enhanced Mammography Series",
            "usage" : "M",
            "name" : "Requested Procedure Code Sequence",
            "desc" : [
               "A sequence that conveys the Procedure Type of the requested procedure.",
               "Only a single Item is permitted in this Sequence."
            ],
            "mod_tables" : [
               "table_C.8-76b",
               "table_10-9"
            ],
            "req" : "3",
            "entity" : "Series"
         }
      ],
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a160)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Text Value",
         "usage" : "M",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "req" : "1C",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(fffa,fffa)[<0>](0400,0110)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
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
                     "attrs" : {
                        "xml:id" : "para_fe92f60f-2615-4c9b-bab0-86d640bd9af4"
                     },
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
         "req" : "1",
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0015)" : {
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
                              "targetptr" : "PS3.15",
                              "targetdoc" : "PS3.15",
                              "xrefstyle" : "select: labelnumber"
                           }
                        },
                        ") may require the use of a restricted subset of these terms."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "usage" : "M",
         "name" : "MAC Algorithm",
         "mod_tables" : [
            "table_C.8.21.1-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "1",
         "entity" : "Image",
         "module" : "X-Ray 3D Image"
      },
      "(0040,0520)[<0>](0050,001c)" : {
         "entity" : "Image",
         "req" : "3",
         "usage" : "U",
         "name" : "Container Component Length",
         "desc" : "Length in mm of container component.",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen"
      },
      "(0010,1100)[<0>](0040,e024)" : {
         "module" : "Patient",
         "desc" : [
            "Details for retrieving instances using WADO-WS or IHE XDS transactions.",
            {
               "content" : [
                  "\n                ",
                  {
                     "attrs" : {
                        "xml:id" : "para_020ae95c-9384-49b9-b460-e9625c404c63"
                     },
                     "el" : "para",
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
         ],
         "name" : "XDS Retrieval Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "req" : "1C",
         "entity" : "Patient"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a160)" : {
         "module" : "Specimen",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Text Value",
         "usage" : "U",
         "req" : "1C",
         "entity" : "Image"
      },
      "(0018,9506)[<0>](0008,1072)[<1>](0008,0080)" : {
         "mod_tables" : [
            "table_C.8.21.2.3-1",
            "table_10-13",
            "table_10-1"
         ],
         "name" : "Institution Name",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "usage" : "U",
         "req" : "1C",
         "entity" : "Image",
         "module" : "Breast Tomosynthesis Contributing Sources"
      },
      "(0008,1072)[<0>](0040,1101)" : {
         "entity" : "Series",
         "req" : "1",
         "name" : "Person Identification Code Sequence",
         "usage" : "M",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series"
      },
      "(0010,0213)" : {
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
         "usage" : "M",
         "name" : "Strain Nomenclature",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0010,0024)[<0>](0040,0032)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Universal Entity ID",
         "desc" : [
            "Universal or unique identifier for the Patient ID Assigning Authority. The authority identified by this attribute shall be the same as that of Issuer of Patient ID (0010,0021), if present.",
            {
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
               ],
               "el" : "note"
            }
         ],
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,003a)" : {
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
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0010,1020)" : {
         "entity" : "Study",
         "name" : "Patient's Size",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Length or size of the Patient, in meters.",
         "usage" : "U",
         "req" : "3",
         "module" : "Patient Study"
      },
      "(0010,0200)" : {
         "module" : "Patient",
         "name" : "Quality Control Subject",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
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
            [
               "This attribute describes a characteristic of the Imaging Subject. It is distinct from Quality Control Image (0028,0300) in the ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.1",
                     "xrefstyle" : "select: title"
                  }
               },
               ", which is used to describe an image acquired."
            ]
         ],
         "req" : "3",
         "entity" : "Patient"
      },
      "(0008,0300)[<0>](0008,0304)" : {
         "usage" : "M",
         "desc" : [
            "List of Private Data Elements in block that do not contain identifying\n                  information (are safe from identity leakage).",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once.",
            "Required if Block Identifying Information Status (0008,0303) equals MIXED."
         ],
         "name" : "Nonidentifying Private Elements",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1C",
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0008,009d)[<0>](0040,1101)" : {
         "req" : "1",
         "name" : "Person Identification Code Sequence",
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
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0038,0060)" : {
         "module" : "Patient Study",
         "entity" : "Study",
         "req" : "3",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Identifier of the Service Episode as assigned by the healthcare provider",
         "name" : "Service Episode ID"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a040)" : [
         {
            "entity" : "Series",
            "req" : "1",
            "name" : "Value Type",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
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
            "usage" : "M",
            "module" : "General Series"
         },
         {
            "module" : "Enhanced Mammography Series",
            "req" : "1",
            "usage" : "M",
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
            ],
            "mod_tables" : [
               "table_C.8-76b",
               "table_10-9",
               "table_10-2"
            ],
            "name" : "Value Type",
            "entity" : "Series"
         }
      ],
      "(0028,9537)" : {
         "module" : "Image - Equipment Coordinate Relationship",
         "entity" : "Image",
         "name" : "Equipment Coordinate System Identification",
         "mod_tables" : [
            "table_C.7.6.21-1"
         ],
         "usage" : "U",
         "desc" : [
            [
               "Identification of the type of equipment coordinate system in which the projection images were acquired. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.21.2",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ],
            {
               "title" : "Defined Terms:",
               "list" : [
                  [
                     "ISOCENTER",
                     null
                  ]
               ],
               "type" : "variablelist"
            }
         ],
         "req" : "1"
      },
      "(0018,1000)" : [
         {
            "module" : "General Equipment",
            "mod_tables" : [
               "table_C.7-8"
            ],
            "name" : "Device Serial Number",
            "desc" : [
               "Manufacturer's serial number of the equipment that produced the composite instances.",
               {
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
                  ],
                  "el" : "note"
               }
            ],
            "usage" : "M",
            "req" : "3",
            "entity" : "Equipment"
         },
         {
            "entity" : "Equipment",
            "req" : "1",
            "name" : "Device Serial Number",
            "desc" : "Manufacturer's serial number of the equipment that produced the composite instances.",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-8b"
            ],
            "module" : "Enhanced General Equipment"
         }
      ],
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1150)" : {
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M",
         "req" : "1"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a163)" : {
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Rational Denominator Value",
         "req" : "1C",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0008,1049)[<0>](0040,1104)" : {
         "entity" : "Study",
         "req" : "3",
         "usage" : "M",
         "name" : "Person's Telecom Information",
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
         ],
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study"
      },
      "(0008,1062)[<0>](0040,1103)" : {
         "module" : "General Study",
         "entity" : "Study",
         "desc" : "Person's telephone number(s)",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person's Telephone Numbers",
         "usage" : "M",
         "req" : "3"
      },
      "(0038,0010)" : {
         "module" : "Patient Study",
         "entity" : "Study",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "name" : "Admission ID",
         "desc" : "Identifier of the visit as assigned by the healthcare provider"
      },
      "(0100,0410)" : {
         "req" : "3",
         "name" : "SOP Instance Status",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "desc" : [
            "A flag that indicates the storage status of the SOP Instance.",
            {
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
               ],
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
                     "attrs" : {
                        "xml:id" : "para_b6227994-ee87-4d4f-9ba4-c3a82f2a705d"
                     },
                     "el" : "para"
                  },
                  "\n                "
               ]
            }
         ],
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0018,9507)[<0>](0018,7041)" : {
         "usage" : "U",
         "desc" : "The spacing material used in the grid.",
         "mod_tables" : [
            "table_C.8.21.3.4-1",
            "table_C.8.21.3.1.1-1",
            "table_C.8-36b"
         ],
         "name" : "Grid Spacing Material",
         "req" : "3",
         "entity" : "Image",
         "module" : "Breast Tomosynthesis Acquisition"
      },
      "(0028,0303)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "3",
         "name" : "Longitudinal Temporal Information Modified",
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
                  "el" : "olink",
                  "attrs" : {
                     "xrefstyle" : "select: labelnumber",
                     "targetptr" : "PS3.15",
                     "targetdoc" : "PS3.15"
                  }
               },
               "."
            ]
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0008,1110)" : [
         {
            "module" : "General Series",
            "desc" : [
               "Uniquely identifies the Study SOP Instances associated with this SOP Instance.",
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
            "usage" : "M",
            "name" : "Referenced Study Sequence",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9"
            ],
            "req" : "3",
            "entity" : "Series"
         },
         {
            "module" : "Enhanced Mammography Series",
            "req" : "3",
            "mod_tables" : [
               "table_C.8-76b",
               "table_10-9"
            ],
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
            "usage" : "M",
            "name" : "Referenced Study Sequence",
            "entity" : "Series"
         }
      ],
      "(0018,0036)[<0>](0018,0038)" : {
         "module" : "Intervention",
         "req" : "2",
         "name" : "Intervention Status",
         "mod_tables" : [
            "table_C.7-19"
         ],
         "usage" : "U",
         "desc" : [
            "Temporal relation of SOP Instance to intervention",
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "PRE",
                     null
                  ],
                  [
                     "INTERMEDIATE",
                     null
                  ],
                  [
                     "POST",
                     null
                  ],
                  [
                     "NONE",
                     null
                  ]
               ]
            }
         ],
         "entity" : "Image"
      },
      "(0040,0520)[<0>](0008,1090)" : {
         "module" : "Specimen",
         "req" : "3",
         "usage" : "U",
         "desc" : "Manufacturer's model name of the container component.",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Manufacturer's Model Name",
         "entity" : "Image"
      },
      "(7fe0,0010)" : {
         "module" : "Image Pixel",
         "entity" : "Image",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "name" : "Pixel Data",
         "usage" : "M",
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
         ]
      },
      "(0010,1100)[<0>](0040,e021)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "DICOM Retrieval Sequence",
         "desc" : [
            "Details for retrieving instances via the DICOM Retrieve Service.",
            "Required if DICOM Media Retrieval Sequence (0040,E022), WADO Retrieval Sequence (0040,E023), WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "This sequence shall only identify sources known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1C"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a30a)" : {
         "module" : "Specimen",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Numeric Value",
         "usage" : "U",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "entity" : "Image"
      },
      "(0018,9506)[<0>](0018,7004)" : {
         "req" : "1",
         "desc" : [
            "The type of detector used to acquire this image.",
            {
               "title" : "Defined Terms:",
               "list" : [
                  [
                     "DIRECT",
                     "X-Ray photoconductor"
                  ],
                  [
                     "SCINTILLATOR",
                     "Phosphor used"
                  ],
                  [
                     "STORAGE",
                     "Storage phosphor"
                  ]
               ],
               "type" : "variablelist"
            }
         ],
         "mod_tables" : [
            "table_C.8.21.2.3-1"
         ],
         "name" : "Detector Type",
         "usage" : "U",
         "entity" : "Image",
         "module" : "Breast Tomosynthesis Contributing Sources"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0010)" : {
         "module" : "X-Ray 3D Image",
         "entity" : "Image",
         "usage" : "M",
         "desc" : [
            "The Transfer Syntax UID used to encode the values of the Data Elements included in the MAC calculation. When computing the MAC, only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
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
                                    "Certain Transfer Syntaxes, particularly those that are used with compressed data, allow the fragmentation of the pixel data to change. If such fragmentation changes, Digital Signatures generated with such Transfer Syntaxes could become invalid."
                                 ],
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_d3b7f806-4134-47a2-bf65-131f44d9fa2a"
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
                                 "attrs" : {
                                    "xml:id" : "para_2a42563c-d7f6-4749-9a5a-b563109dea18"
                                 },
                                 "el" : "para",
                                 "content" : [
                                    "This does not constrain the transfer syntax used to transmit the object."
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
            }
         ],
         "mod_tables" : [
            "table_C.8.21.1-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "name" : "MAC Calculation Transfer Syntax UID",
         "req" : "1"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0040,e011)" : {
         "entity" : "Image",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.21.1-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "name" : "Retrieve Location UID",
         "desc" : "Unique identifier of the system where the Composite Object(s) may be retrieved on the network.",
         "module" : "X-Ray 3D Image"
      },
      "(0018,1030)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Protocol Name",
         "usage" : "M",
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
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0008,1062)[<0>](0008,0081)" : {
         "module" : "General Study",
         "entity" : "Study",
         "req" : "3",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Address"
      },
      "(0018,9506)[<0>](0008,0070)" : {
         "module" : "Breast Tomosynthesis Contributing Sources",
         "entity" : "Image",
         "usage" : "U",
         "desc" : "Manufacturer of the equipment that produced the sources.",
         "name" : "Manufacturer",
         "mod_tables" : [
            "table_C.8.21.2.3-1",
            "table_10-13"
         ],
         "req" : "2"
      },
      "(0010,1010)" : {
         "module" : "Patient Study",
         "req" : "3",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Patient's Age",
         "desc" : "Age of the Patient.",
         "entity" : "Study"
      },
      "(0028,0106)" : {
         "name" : "Smallest Image Pixel Value",
         "desc" : "The minimum actual pixel value encountered in this image.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "req" : "3",
         "entity" : "Image",
         "module" : "Image Pixel"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1102)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "M",
         "desc" : "Person's mailing address",
         "name" : "Person's Address"
      },
      "(0008,0300)[<0>](0008,0305)" : {
         "module" : "SOP Common",
         "req" : "3",
         "desc" : "Actions to be performed on element within the block that are not safe from identify leakage.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Deidentification Action Sequence",
         "entity" : "Image"
      },
      "(0018,9506)[<0>](0008,1070)" : {
         "entity" : "Image",
         "name" : "Operators' Name",
         "desc" : [
            "Name(s) of the operator(s) supporting the Series.",
            "Required if present and consistent in the contributing SOP Instances."
         ],
         "mod_tables" : [
            "table_C.8.21.2.3-1",
            "table_10-13"
         ],
         "usage" : "U",
         "req" : "1C",
         "module" : "Breast Tomosynthesis Contributing Sources"
      },
      "(0040,0513)" : {
         "module" : "Specimen",
         "entity" : "Image",
         "req" : "2",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Issuer of the Container Identifier Sequence",
         "usage" : "U",
         "desc" : [
            "Organization that assigned the Container Identifier.",
            "Zero or one Item shall be included in this Sequence."
         ]
      },
      "(0018,a001)[<0>](0008,1010)" : {
         "req" : "3",
         "name" : "Station Name",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "User defined name identifying the machine that contributed to the composite instance.",
         "usage" : "M",
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0008,1049)" : {
         "module" : "General Study",
         "entity" : "Study",
         "req" : "3",
         "desc" : [
            "Identification of the physician(s) who are responsible for overall patient care at time of Study.",
            "One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Physician(s) of Record (0008,1048), if present."
         ],
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Physician(s) of Record Identification Sequence",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a161)" : [
         {
            "module" : "General Series",
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
            "name" : "Floating Point Value",
            "entity" : "Series"
         },
         {
            "module" : "Enhanced Mammography Series",
            "req" : "1C",
            "usage" : "M",
            "desc" : [
               "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
            ],
            "name" : "Floating Point Value",
            "mod_tables" : [
               "table_C.8-76b",
               "table_10-9",
               "table_10-2"
            ],
            "entity" : "Series"
         }
      ],
      "(0040,0560)[<0>](0040,0610)" : {
         "module" : "Specimen",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Specimen Preparation Sequence",
         "usage" : "U",
         "desc" : [
            "Sequence of Items identifying the process steps used to prepare the specimen for image acquisition. This includes description of all processing necessary to interpret the image.",
            "Zero or more Items shall be included in this Sequence.",
            "This Sequence includes description of the specimen sampling step from an ancestor specimen, potentially back to the original part collection.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.22.1.3"
                  }
               },
               "."
            ]
         ],
         "req" : "2"
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
      "Can't handle table_8.8-1 (in table_C.8-76b:table_10-9 after (0032,1064))",
      "Can't handle table_8.8-1 (in table_C.8-76b:table_10-9 after (0040,100A))",
      "Can't handle table_8.8-1 (in table_C.8-76b:table_10-9 after (0040,0008))",
      "Can't handle table_8.8-1 (in table_C.8-76b:table_10-9:table_10-2 after (0040,A043))",
      "Can't handle table_8.8-1 (in table_C.8-76b:table_10-9:table_10-2 after (0040,A168))",
      "Can't handle table_8.8-1 (in table_C.8-76b:table_10-9:table_10-2 after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.8-76b:table_10-9:table_10-2 after (0040,A043))",
      "Can't handle table_8.8-1 (in table_C.8-76b:table_10-9:table_10-2 after (0040,A168))",
      "Can't handle table_8.8-1 (in table_C.8-76b:table_10-9:table_10-2 after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.7-12b after (0018,0012))",
      "Can't handle table_8.8-1 (in table_C.7-12b after (0018,0014))",
      "Can't handle table_8.8-1 (in table_C.7-12b after (0018,9338))",
      "Can't handle table_8.8-1 (in table_C.7-18 after (0050,0010))",
      "Can't handle table_8.8-1 (in table_C.7-19 after (0018,0036))",
      "Can't handle table_8.8-1 (in table_C.7-19 after (0018,0029))",
      "Can't handle table_8.8-1 (in table_C.7-19 after (0054,0302))",
      "Can't handle table_8.8-1 (in table_C.7.6.14-1 after (0040,A043))",
      "Can't handle table_8.8-1 (in table_C.7.6.14-1 after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.7.6.14-1 after (0040,A168))",
      "Can't handle processing of table_C.7.6.16-1 in Image:Multi-frame Functional Groups of table_A.55-1",
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
      "Can't handle table_8.8-1 (in table_C.8.21.1-1:table_C.17-3:table_C.17-3a after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.8.21.2.3-1:table_10-13:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.8.21.2.3-1:table_10-13:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.8.21.2.3-1:table_10-13 after (0040,0260))",
      "Can't handle table_8.8-1 (in table_C.8.21.3.4-1:table_C.8.21.3.1.1-1 after (0018,0012))",
      "Can't handle table_8.8-1 (in table_C.8.21.6-1 after (0054,0220))",
      "Can't handle table_8.8-1 (in table_C.8.21.6-1 after (0054,0222))",
      "Can't handle table_8.8-1 (in table_C.8.21.6-1 after (0028,1352))",
      "Can't handle table_8.8-1 (in table_C.12-1 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_C.12-6 after (0400,0401))"
   ]
}
