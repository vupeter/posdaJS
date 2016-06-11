var data = {
   "tags" : {
      "(0040,a390)[<0>](0008,1150)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "SOP Common",
         "req" : "1",
         "entity" : "Image"
      },
      "(0008,1062)[<0>](0040,1103)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Person's Telephone Numbers",
         "desc" : "Person's telephone number(s)",
         "module" : "General Study",
         "req" : "3",
         "entity" : "Study"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a124)" : {
         "module" : "General Series",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "entity" : "Series",
         "req" : "1C",
         "name" : "UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0080)" : {
         "module" : "SOP Common",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "req" : "1C",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Institution Name"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,08ea)" : {
         "module" : "General Series",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "entity" : "Series",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Measurement Units Code Sequence"
      },
      "(0028,2112)" : {
         "entity" : "Image",
         "req" : "3",
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
                        "\n                      ",
                        {
                           "content" : [
                              "\n                        ",
                              {
                                 "content" : [
                                    "For example, a compression ratio of 30:1 would be described in this Attribute with a single value of 30."
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
                                    "For historical reasons, the lossy compression ratio may also be described in Derivation Description (0008,2111)."
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
               ],
               "el" : "note"
            }
         ],
         "module" : "General Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "name" : "Lossy Image Compression Ratio"
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
         "req" : "3",
         "entity" : "Patient",
         "name" : "Issuer of Patient ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0008,1155)" : {
         "entity" : "Image",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "Specimen",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID"
      },
      "(0038,0064)[<0>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "usage" : "U",
         "module" : "Patient Study",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C",
         "entity" : "Study"
      },
      "(0018,0014)[<0>](0018,002a)" : {
         "mod_tables" : [
            "table_C.7-12"
         ],
         "usage" : "C - Required if contrast media was used in this Image",
         "name" : "Additional Drug Sequence",
         "module" : "Contrast/Bolus",
         "desc" : [
            "Sequence that identifies any additional drug that is administered with the contrast agent bolus.",
            "One or more Items are permitted in this sequence."
         ],
         "entity" : "Image",
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a168)" : {
         "name" : "Concept Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "entity" : "Series",
         "module" : "General Series",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ]
      },
      "(0008,1164)[<0>](0008,1161)" : {
         "name" : "Simple Frame List",
         "mod_tables" : [
            "table_C.12-9"
         ],
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "desc" : [
            "A list of Frames that were extracted in the form of a simple list.",
            "Required if object extraction is based on a Frame Level Retrieve using the Simple Frame List (0008,1161) attribute.",
            [
               "See ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "targetdoc" : "PS3.4",
                     "xrefstyle" : "select: labelnumber",
                     "targetptr" : "PS3.4"
                  }
               },
               " \"Instance and Frame Level Retrieve SOP Classes\""
            ]
         ],
         "module" : "Frame Extraction",
         "entity" : "Image",
         "req" : "1C"
      },
      "(60xx,0102)" : {
         "name" : "Overlay Bit Position",
         "usage" : "U",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "entity" : "Image",
         "req" : "1",
         "desc" : [
            "The value of this Attribute shall be 0.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "Formerly the standard described embedding the overlay data in the Image Pixel Data (7FE0,0010), in which case the value of this Attribute specified the bit in which the overlay was stored. This usage has been retired. See PS3.3-2004."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ]
            }
         ],
         "module" : "Overlay Plane"
      },
      "(0040,9096)[<0>](0040,9212)" : {
         "req" : "1C",
         "entity" : "Image",
         "desc" : [
            "LUT Data in this Sequence.",
            "Required if Real World Value Intercept (0040,9224) is not present."
         ],
         "module" : "General Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "name" : "Real World Value LUT Data"
      },
      "(0008,1062)[<0>](0008,0080)" : {
         "req" : "1C",
         "entity" : "Study",
         "module" : "General Study",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Name"
      },
      "(0028,1040)" : {
         "desc" : [
            "The relationship between the Pixel sample values and the X-Ray beam intensity.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.7.1.1.2"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "module" : "X-Ray Image",
         "req" : "1",
         "entity" : "Image",
         "name" : "Pixel Intensity Relationship",
         "mod_tables" : [
            "table_C.8-26"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,100a)" : {
         "req" : "3",
         "entity" : "Series",
         "desc" : [
            "Coded Reason for requesting this procedure.",
            "One or more Items are permitted in this sequence."
         ],
         "module" : "General Series",
         "name" : "Reason for Requested Procedure Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ]
      },
      "(0018,1020)" : {
         "module" : "General Equipment",
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
         "entity" : "Equipment",
         "req" : "3",
         "name" : "Software Versions",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M"
      },
      "(0018,7010)" : {
         "module" : "DX Detector",
         "desc" : "Total number of X-Ray exposures that have been made on the detector used to acquire this image as identified in Detector ID (0018,700A) since it was calibrated.",
         "entity" : "Image",
         "req" : "3",
         "name" : "Exposures on Detector Since Last Calibration",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "usage" : "U"
      },
      "(2050,0020)" : {
         "name" : "Presentation LUT Shape",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "entity" : "Image",
         "req" : "3",
         "module" : "General Image",
         "desc" : [
            "When present, specifies an identity transformation for the Presentation LUT such that the output of all grayscale transformations, if any, are defined to be in P-Values.",
            {
               "type" : "variablelist",
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
               ]
            },
            "When this attribute is used with a color photometric interpretation then the luminance component is in P-Values."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,08ea)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Measurement Units Code Sequence",
         "entity" : "Series",
         "req" : "1C",
         "module" : "General Series",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1103)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "name" : "Person's Telephone Numbers",
         "entity" : "Image",
         "req" : "3",
         "desc" : "Person's telephone number(s)",
         "module" : "SOP Common"
      },
      "(0040,0515)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Alternate Container Identifier Sequence",
         "entity" : "Image",
         "req" : "3",
         "desc" : "Sequence of alternate identifiers for the container that contains the specimen(s) being imaged. These may have been assigned, e.g., by the manufacturer, or by another institution that collected the specimen. One or more Items are permitted in this sequence.",
         "module" : "Specimen"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a161)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Floating Point Value",
         "module" : "General Series",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "entity" : "Series",
         "req" : "1C"
      },
      "(0040,0560)[<0>](0040,0600)" : {
         "desc" : "Short textual specimen description (may include ancestor specimen descriptions).",
         "module" : "Specimen",
         "entity" : "Image",
         "req" : "3",
         "name" : "Specimen Short Description",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U"
      },
      "(0038,0064)[<0>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "usage" : "U",
         "module" : "Patient Study",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "Study",
         "req" : "1C"
      },
      "(60xx,0010)" : {
         "entity" : "Image",
         "req" : "1",
         "desc" : "Number of Rows in Overlay.",
         "module" : "Overlay Plane",
         "name" : "Overlay Rows",
         "usage" : "U",
         "mod_tables" : [
            "table_C.9-2"
         ]
      },
      "(0040,a390)[<0>](0040,e001)" : {
         "name" : "HL7 Instance Identifier",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "entity" : "Image",
         "module" : "SOP Common",
         "desc" : "Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier)."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a162)" : {
         "name" : "Rational Numerator Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "module" : "General Series",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "entity" : "Series",
         "req" : "1C"
      },
      "(0010,0024)[<0>](0040,003a)" : {
         "module" : "Patient",
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
         "req" : "3",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "name" : "Assigning Agency or Department Code Sequence"
      },
      "(0018,9332)" : {
         "name" : "Exposure in mAs",
         "mod_tables" : [
            "table_C.8-27"
         ],
         "usage" : "M",
         "desc" : "The exposure expressed in mAs, for example calculated from Exposure Time and X-Ray Tube Current.",
         "module" : "X-Ray Acquisition",
         "req" : "3",
         "entity" : "Image"
      },
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
                     "el" : "para",
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
                     ]
                  },
                  "\n                    "
               ]
            }
         ],
         "module" : "SOP Common",
         "req" : "1C",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "name" : "Certified Timestamp Type"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a30a)" : {
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "module" : "General Series",
         "req" : "1C",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Numeric Value"
      },
      "(0040,0520)[<0>](0050,0013)" : {
         "desc" : "Thickness in mm of container component",
         "module" : "Specimen",
         "req" : "3",
         "entity" : "Image",
         "name" : "Container Component Thickness",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U"
      },
      "(0018,1000)" : {
         "module" : "General Equipment",
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
         "req" : "3",
         "entity" : "Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "name" : "Device Serial Number"
      },
      "(0040,0560)[<0>](0040,0562)" : {
         "name" : "Issuer of the Specimen Identifier Sequence",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "req" : "2",
         "entity" : "Image",
         "desc" : [
            "The name or code for the institution that has assigned the Specimen Identifier.",
            "Zero or one Item shall be included in this sequence."
         ],
         "module" : "Specimen"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a162)" : {
         "name" : "Rational Numerator Value",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "module" : "General Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a160)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Text Value",
         "req" : "1C",
         "entity" : "Series",
         "module" : "General Series",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ]
      },
      "(0050,0004)" : {
         "module" : "X-Ray Image",
         "desc" : [
            "Indicates whether a reference object (phantom) of known size is present in the image and was used for calibration.",
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
            [
               "Device is identified using the Device module. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.12"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "entity" : "Image",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-26"
         ],
         "usage" : "M",
         "name" : "Calibration Image"
      },
      "(0008,0031)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "name" : "Series Time",
         "desc" : "Time the Series started.",
         "module" : "General Series",
         "entity" : "Series",
         "req" : "3"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a040)" : {
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "module" : "Specimen",
         "entity" : "Image",
         "req" : "1"
      },
      "(0008,1062)[<0>](0040,1102)" : {
         "name" : "Person's Address",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "req" : "3",
         "module" : "General Study",
         "desc" : "Person's mailing address"
      },
      "(0028,000a)" : {
         "entity" : "Image",
         "req" : "3",
         "module" : "X-Ray Image",
         "desc" : [
            [
               "Contains the Data Element Tags of one or more attributes that vary or increment for the frames of a multi-frame image. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.7.1.1.12"
                  }
               },
               "."
            ],
            "Shall not be present if it would contain only one value and that value would be Frame Time (0018,1063) or Frame Time Vector (0018,1065)."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-26"
         ],
         "name" : "Frame Dimension Pointer"
      },
      "(0010,0030)" : {
         "desc" : "Birth date of the patient.",
         "module" : "Patient",
         "req" : "2",
         "entity" : "Patient",
         "name" : "Patient's Birth Date",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(0008,1049)[<0>](0040,1102)" : {
         "name" : "Person's Address",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "req" : "3",
         "module" : "General Study",
         "desc" : "Person's mailing address"
      },
      "(0028,3000)[<0>](0028,3003)" : {
         "entity" : "Image",
         "req" : "3",
         "module" : "Modality LUT",
         "desc" : "Free form text explanation of the meaning of the LUT.",
         "usage" : "C - Required if Pixel Intensity Relationship (0028,1040) is LOGU - Optional if Pixel Intensity Relationship (0028,1040) is DISP",
         "mod_tables" : [
            "table_C.11-1b"
         ],
         "name" : "LUT Explanation"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a163)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Rational Denominator Value",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "module" : "General Series",
         "req" : "1C",
         "entity" : "Series"
      },
      "(0008,1072)[<0>](0040,1103)" : {
         "name" : "Person's Telephone Numbers",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "module" : "General Series",
         "desc" : "Person's telephone number(s)",
         "entity" : "Series",
         "req" : "3"
      },
      "(0012,0021)" : {
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U",
         "name" : "Clinical Trial Protocol Name",
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
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
         "req" : "2"
      },
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "Common Instance Reference",
         "entity" : "Image",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ],
         "usage" : "U",
         "name" : "Referenced SOP Class UID"
      },
      "(0018,700a)" : {
         "desc" : "The ID or serial number of the detector used to acquire this image.",
         "module" : "DX Detector",
         "req" : "3",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "usage" : "U",
         "name" : "Detector ID"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a043)" : {
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1",
         "name" : "Concept Name Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a161)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Floating Point Value",
         "req" : "1C",
         "entity" : "Image",
         "module" : "Specimen",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ]
      },
      "(0010,1002)" : {
         "name" : "Other Patient IDs Sequence",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "module" : "Patient",
         "desc" : [
            "A sequence of identification numbers or codes used to identify the patient, which may or may not be human readable, and may or may not have been obtained from an implanted or attached device such as an RFID or barcode.",
            "One or more Items are permitted in this sequence."
         ],
         "req" : "3",
         "entity" : "Patient"
      },
      "(0008,1052)[<0>](0008,0082)" : {
         "name" : "Institution Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "General Series"
      },
      "(0400,0561)[<0>](0400,0550)" : {
         "name" : "Modified Attributes Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "desc" : [
            "Sequence that contains all the Attributes, with their previous values, that were modified or removed from the main data set.",
            "Only a single Item shall be included in this sequence."
         ],
         "module" : "SOP Common",
         "req" : "1",
         "entity" : "Image"
      },
      "(0040,0515)[<0>](0040,0513)[<1>](0040,0033)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "name" : "Universal Entity ID Type",
         "entity" : "Image",
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
         "module" : "Specimen"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0008,1150)" : {
         "entity" : "Image",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "Specimen",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID"
      },
      "(0018,1531)" : {
         "req" : "3",
         "entity" : "Image",
         "desc" : [
            "Angle of the X-Ray beam in the column direction in degrees relative to the normal to the detector plane. Positive values indicate that the X-Ray beam is tilted towards lower numbered rows. Negative values indicate that the X-Ray beam is tilted towards higher numbered rows.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.7.5.1.4",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ]
         ],
         "module" : "XA Positioner",
         "name" : "Detector Secondary Angle",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-30"
         ]
      },
      "(0008,1140)" : [
         {
            "name" : "Referenced Image Sequence",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "req" : "3",
            "entity" : "Image",
            "module" : "General Image",
            "desc" : [
               "Other images significantly related to this image (e.g., post-localizer CT image or Mammographic biopsy or partial view images).",
               "One or more Items are permitted in this sequence."
            ]
         },
         {
            "req" : "1C",
            "entity" : "Image",
            "module" : "X-Ray Image",
            "desc" : [
               "Other images significantly related to this image. Shall be present if Image Type (0008,0008) Value 3 is BIPLANE A or BIPLANE B. May be present otherwise.",
               "One or more items shall be included in this sequence.",
               [
                  "See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.8.7.1.1.13"
                     }
                  },
                  "."
               ]
            ],
            "name" : "Referenced Image Sequence",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-26"
            ]
         }
      ],
      "(0018,7005)" : {
         "req" : "3",
         "entity" : "Image",
         "module" : "DX Detector",
         "desc" : [
            "The physical configuration of the detector.",
            {
               "list" : [
                  [
                     "AREA",
                     "single or tiled detector"
                  ],
                  [
                     "SLOT",
                     "scanned slot, slit or spot"
                  ]
               ],
               "title" : "Defined Terms:",
               "type" : "variablelist"
            }
         ],
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "name" : "Detector Configuration"
      },
      "(0020,0012)" : {
         "desc" : "A number identifying the single continuous gathering of data over a period of time that resulted in this image.",
         "module" : "General Image",
         "entity" : "Image",
         "req" : "3",
         "name" : "Acquisition Number",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M"
      },
      "(0018,1622)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-17a"
         ],
         "name" : "Shutter Presentation Value",
         "req" : "3",
         "entity" : "Image",
         "module" : "Display Shutter",
         "desc" : [
            "A single gray unsigned value used to replace those parts of the image occluded by the shutter, when rendered on a monochrome display. The units are specified in P-Values, from a minimum of 0000H (black) up to a maximum of FFFFH (white).",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "The maximum P-Value for this Attribute may be different from the maximum P-Value from the output of the Presentation LUT, which may be less than 16 bits in depth."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ]
      },
      "(0088,0200)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "name" : "Icon Image Sequence",
         "req" : "3",
         "entity" : "Image",
         "desc" : [
            "This icon image is representative of the Image.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "General Image"
      },
      "(0008,1140)[<0>](0008,1160)" : [
         {
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
            "module" : "General Image",
            "req" : "1C",
            "entity" : "Image",
            "name" : "Referenced Frame Number",
            "mod_tables" : [
               "table_C.7-9",
               "table_10-3"
            ],
            "usage" : "M"
         },
         {
            "name" : "Referenced Frame Number",
            "mod_tables" : [
               "table_C.8-26",
               "table_10-3"
            ],
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
            "module" : "X-Ray Image",
            "req" : "1C",
            "entity" : "Image"
         }
      ],
      "(0028,0120)" : {
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
                     ],
                     "el" : "orderedlist"
                  },
                  "\n                  "
               ]
            }
         ],
         "entity" : "Equipment",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "name" : "Pixel Padding Value"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a040)" : {
         "module" : "General Series",
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
         "entity" : "Series",
         "req" : "1",
         "name" : "Value Type",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(fffa,fffa)[<0>](0400,0110)" : {
         "name" : "Certificate Type",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "module" : "SOP Common",
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
         "req" : "1"
      },
      "(0040,0260)[<0>](0040,0440)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "usage" : "M",
         "name" : "Protocol Context Sequence",
         "desc" : "Sequence that specifies the context for the Performed Protocol Code Sequence Item. One or more Items are permitted in this sequence.",
         "module" : "General Series",
         "req" : "3",
         "entity" : "Series"
      },
      "(0012,0050)" : {
         "name" : "Clinical Trial Time Point ID",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "usage" : "U",
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
         "module" : "Clinical Trial Study",
         "entity" : "Study",
         "req" : "2"
      },
      "(0012,0083)[<0>](0012,0084)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "name" : "Distribution Type",
         "entity" : "Study",
         "req" : "1C",
         "module" : "Clinical Trial Study",
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
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.2.3.1.2",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ],
            "Required if Consent for Distribution Flag (0012,0085) equals YES or WITHDRAWN."
         ]
      },
      "(0008,2112)[<0>](0040,a170)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "name" : "Purpose of Reference Code Sequence",
         "entity" : "Image",
         "req" : "3",
         "desc" : [
            "Describes the purpose for which the reference is made, that is what role the source image or frame(s) played in the derivation of this image.",
            "Only a single Item is permitted in this sequence."
         ],
         "module" : "General Image"
      },
      "(0012,0064)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "De-identification Method Code Sequence",
         "entity" : "Patient",
         "req" : "1C",
         "desc" : [
            "A code describing the mechanism or method use to remove the patient's identity.",
            "One or more Items shall be included in this sequence. Multiple items are used if successive de-identification steps have been performed or to describe options of a defined profile.",
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method (0012,0063) is not present. May be present otherwise."
         ],
         "module" : "Patient"
      },
      "(0400,0561)[<0>](0400,0562)" : {
         "desc" : "Date and time the attributes were removed and/or replaced.",
         "module" : "SOP Common",
         "req" : "1",
         "entity" : "Image",
         "name" : "Attribute Modification DateTime",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0008,0110)[<0>](0008,0103)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Coding Scheme Version",
         "module" : "SOP Common",
         "desc" : "The coding scheme version associated with the Coding Scheme Designator (0008,0102).",
         "req" : "3",
         "entity" : "Image"
      },
      "(0400,0561)[<0>](0400,0564)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Source of Previous Values",
         "module" : "SOP Common",
         "desc" : "The source that provided the SOP Instance prior to the removal or replacement of the values. For example, this might be the Institution from which imported SOP Instances were received.",
         "entity" : "Image",
         "req" : "2"
      },
      "(0008,1120)[<0>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "Patient",
         "req" : "1",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "usage" : "M",
         "name" : "Referenced SOP Instance UID"
      },
      "(0088,0200)[<0>](0028,0103)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "name" : "Pixel Representation",
         "req" : "1",
         "entity" : "Image",
         "module" : "General Image",
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
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a120)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "DateTime",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1C"
      },
      "(0040,0560)[<0>](0040,0562)[<1>](0040,0031)" : {
         "module" : "Specimen",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "Image",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "usage" : "U",
         "name" : "Local Namespace Entity ID"
      },
      "(0040,9096)" : {
         "entity" : "Image",
         "req" : "3",
         "desc" : [
            "The mapping of stored values to associated Real World values.",
            "One or more Items are permitted in this sequence."
         ],
         "module" : "General Image",
         "name" : "Real World Value Mapping Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a160)" : {
         "name" : "Text Value",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1C",
         "entity" : "Image",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "module" : "Specimen"
      },
      "(0008,1052)[<0>](0040,1101)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "name" : "Person Identification Code Sequence",
         "entity" : "Series",
         "req" : "1",
         "module" : "General Series",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0018,1710)" : {
         "mod_tables" : [
            "table_C.8-28b"
         ],
         "usage" : "U",
         "name" : "Center of Circular Collimator",
         "module" : "X-Ray Collimator",
         "desc" : [
            "Required if a value of Collimator Shape (0018,1700) is CIRCULAR. Location of the center of the circular collimator with respect to pixels in the image given as row and column. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.7.3.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "entity" : "Image",
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a30a)" : {
         "module" : "General Series",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "entity" : "Series",
         "req" : "1C",
         "name" : "Numeric Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0038,0014)[<0>](0040,0032)" : {
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "module" : "Patient Study",
         "req" : "1C",
         "entity" : "Study",
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "usage" : "U"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1155)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "entity" : "Image",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "Common Instance Reference"
      },
      "(0040,0560)[<0>](0008,2228)[<1>](0008,2230)" : {
         "module" : "Specimen",
         "desc" : [
            "Sequence of Items that modifies the primary anatomic structure of interest in this Instance.",
            "One or more Items are permitted in this sequence."
         ],
         "req" : "3",
         "entity" : "Image",
         "name" : "Primary Anatomic Structure Modifier Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-8"
         ],
         "usage" : "U"
      },
      "(0028,6100)[<0>](0028,6112)" : {
         "module" : "Mask",
         "desc" : "Specifies the number of contrast frames to average together before performing the mask operation. If the Attribute is missing, no averaging is performed.",
         "req" : "3",
         "entity" : "Image",
         "name" : "Contrast Frame Averaging",
         "mod_tables" : [
            "table_C.7-16"
         ],
         "usage" : "C - Required if the Image may be subtracted"
      },
      "(0008,1140)[<0>](0008,1150)" : [
         {
            "module" : "General Image",
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "req" : "1",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.7-9",
               "table_10-3",
               "table_10-11"
            ],
            "usage" : "M",
            "name" : "Referenced SOP Class UID"
         },
         {
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "module" : "X-Ray Image",
            "req" : "1",
            "entity" : "Image",
            "name" : "Referenced SOP Class UID",
            "mod_tables" : [
               "table_C.8-26",
               "table_10-3",
               "table_10-11"
            ],
            "usage" : "M"
         }
      ],
      "(0010,2203)" : {
         "entity" : "Study",
         "req" : "2C",
         "module" : "Patient Study",
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
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "If this Attribute is present but has no value then the status is unknown."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            },
            "Required if patient is an animal. May be present otherwise."
         ],
         "name" : "Patient's Sex Neutered",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0038,0014)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Issuer of Admission ID Sequence",
         "entity" : "Study",
         "req" : "3",
         "module" : "Patient Study",
         "desc" : [
            "Identifier of the Assigning Authority that issued Admission ID (0038,0010).",
            "Only a single Item is permitted in this sequence."
         ]
      },
      "(0028,6022)" : {
         "module" : "Frame Pointers",
         "desc" : "Description of each one of the Frame(s) of Interest selected in (0028,6020). If multiple Frames of Interest are selected and this Attribute is used, it shall contain the same number of values as are in Frame Numbers of Interest (0028,6020).",
         "entity" : "Image",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-15"
         ],
         "usage" : "U",
         "name" : "Frame Of Interest Description"
      },
      "(0008,1072)[<0>](0040,1101)" : {
         "req" : "1",
         "entity" : "Series",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "General Series",
         "name" : "Person Identification Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ]
      },
      "(0040,0520)[<0>](0050,001b)" : {
         "name" : "Container Component ID",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U",
         "desc" : "Manufacturer's identifier of the container component, e.g., Lot Number and/or Version.",
         "module" : "Specimen",
         "entity" : "Image",
         "req" : "3"
      },
      "(0010,2293)" : {
         "req" : "2C",
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
            "Zero or more Items shall be included in this sequence.",
            "Required if the patient is an animal."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient Breed Code Sequence"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,08ea)" : {
         "name" : "Measurement Units Code Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "module" : "Specimen",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "entity" : "Image",
         "req" : "1C"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0032)" : {
         "req" : "1C",
         "entity" : "Series",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "module" : "General Series",
         "name" : "Universal Entity ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ]
      },
      "(0008,1062)[<0>](0008,0081)" : {
         "req" : "3",
         "entity" : "Study",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "module" : "General Study",
         "name" : "Institution Address",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0050,0010)[<0>](0050,0019)" : {
         "entity" : "Image",
         "req" : "3",
         "desc" : [
            "Distance in mm between markers on calibrated device. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.12.1.1"
               },
               "el" : "xref"
            },
            "."
         ],
         "module" : "Device",
         "name" : "Inter-Marker Distance",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-18"
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a30a)" : {
         "req" : "1C",
         "entity" : "Image",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "module" : "Specimen",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Numeric Value"
      },
      "(0018,1411)" : {
         "name" : "Exposure Index",
         "mod_tables" : [
            "table_C.8-71b",
            "table_10-23"
         ],
         "usage" : "U",
         "module" : "DX Detector",
         "desc" : [
            "Measure of the detector response to radiation in the relevant image region of an image acquired with a digital x-ray imaging system as defined in IEC 62494-1.",
            {
               "content" : [
                  "\n                ",
                  {
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
                                 "el" : "para",
                                 "content" : [
                                    "This index value is scaled as defined by IEC 62494-1."
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
         "req" : "3",
         "entity" : "Image"
      },
      "(0008,0110)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme Identification Sequence",
         "req" : "3",
         "entity" : "Image",
         "desc" : [
            "Sequence of items that map values of Coding Scheme Designator (0008,0102) to an external coding system registration, or to a private or local coding scheme.",
            "One or more Items are permitted in this sequence."
         ],
         "module" : "SOP Common"
      },
      "(003a,0300)[<0>](003a,0302)" : {
         "mod_tables" : [
            "table_C.7-13"
         ],
         "usage" : "C - Required if pixel data is Multi-frame Cine data",
         "name" : "Channel Mode",
         "module" : "Cine",
         "desc" : [
            "A coded descriptor qualifying the mode of the channel:",
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "MONO",
                     "1 signal"
                  ],
                  [
                     "STEREO",
                     "2 simultaneously acquired (left and right) signals"
                  ]
               ]
            }
         ],
         "req" : "1",
         "entity" : "Image"
      },
      "(0040,0254)" : {
         "module" : "General Series",
         "desc" : "Institution-generated description or classification of the Procedure Step that was performed.",
         "req" : "3",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "usage" : "M",
         "name" : "Performed Procedure Step Description"
      },
      "(0018,a001)[<0>](0018,1201)" : {
         "entity" : "Image",
         "req" : "3",
         "module" : "SOP Common",
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
         "name" : "Time of Last Calibration",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0018,2002)" : {
         "entity" : "Image",
         "req" : "3",
         "module" : "X-Ray Image",
         "desc" : "A multi-valued attribute that contains a descriptive label for each of the image frames. The number of values shall equal the number of frames.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-26"
         ],
         "name" : "Frame Label Vector"
      },
      "(0040,0512)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Container Identifier",
         "req" : "1",
         "entity" : "Image",
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
         ]
      },
      "(0028,0002)" : [
         {
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "usage" : "M",
            "name" : "Samples per Pixel",
            "module" : "Image Pixel",
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
            "req" : "1",
            "entity" : "Image"
         },
         {
            "entity" : "Image",
            "req" : "1",
            "module" : "X-Ray Image",
            "desc" : "Number of samples (color planes) in this image shall have a value of 1.",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-26"
            ],
            "name" : "Samples per Pixel"
         }
      ],
      "(0018,1604)" : {
         "req" : "1C",
         "entity" : "Image",
         "desc" : "Required if Shutter Shape (0018,1600) is RECTANGULAR. Location of the right edge of the rectangular shutter with respect to pixels in the image given as column.",
         "module" : "Display Shutter",
         "name" : "Shutter Right Vertical Edge",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-17a"
         ]
      },
      "(0008,1052)[<0>](0008,0080)" : {
         "name" : "Institution Name",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "req" : "1C",
         "entity" : "Series",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "module" : "General Series"
      },
      "(0028,0a04)" : {
         "entity" : "Image",
         "req" : "1C",
         "desc" : [
            "A free text description of the type of correction or calibration performed.",
            {
               "content" : [
                  "\n                ",
                  {
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
                                    "In the case of correction, the text might include description of the assumptions made about the body part and geometry and depth within the patient."
                                 ],
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
                                    "in the case of calibration, the text might include a description of the fiducial and where it is located (e.g., \"XYZ device applied to the skin over the greater trochanter\")."
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
                                 "content" : [
                                    "Though it is not required, the Device Module may be used to describe the specific characteristics and size of the calibration device."
                                 ],
                                 "el" : "para"
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
            },
            "Required if Pixel Spacing Calibration Type (0028,0A02) is present."
         ],
         "module" : "X-Ray Acquisition",
         "name" : "Pixel Spacing Calibration Description",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-27",
            "table_10-10"
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)" : {
         "entity" : "Patient",
         "req" : "3",
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
         "name" : "Assigning Facility Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0018,7011)" : {
         "name" : "Exposures on Detector Since Manufactured",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "entity" : "Image",
         "req" : "3",
         "desc" : "Total number of X-Ray exposures that have been made on the detector used to acquire this image as identified in Detector ID (0018,700A) since it was manufactured.",
         "module" : "DX Detector"
      },
      "(0040,9096)[<0>](0040,9225)" : {
         "entity" : "Image",
         "req" : "1C",
         "module" : "General Image",
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
            "Required if Real World Value LUT Data (0040,9212) is not present."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "name" : "Real World Value Slope"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "General Series",
         "req" : "1",
         "entity" : "Series"
      },
      "(0008,1080)" : {
         "req" : "3",
         "entity" : "Study",
         "desc" : "Description of the admitting diagnosis (diagnoses)",
         "module" : "Patient Study",
         "name" : "Admitting Diagnoses Description",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0028,0103)" : [
         {
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
            "module" : "Image Pixel",
            "entity" : "Image",
            "req" : "1",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "usage" : "M",
            "name" : "Pixel Representation"
         },
         {
            "name" : "Pixel Representation",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-26"
            ],
            "entity" : "Image",
            "req" : "1",
            "desc" : [
               "Data representation of the pixel samples.",
               "Shall have the value:",
               "0000H = Unsigned Integer."
            ],
            "module" : "X-Ray Image"
         }
      ],
      "(0008,0051)[<0>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "entity" : "Study",
         "req" : "1C",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "module" : "General Study"
      },
      "(0018,a001)[<0>](0018,1000)" : {
         "module" : "SOP Common",
         "desc" : "Manufacturer's serial number of the equipment that contributed to the composite instance.",
         "req" : "3",
         "entity" : "Image",
         "name" : "Device Serial Number",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0008,1160)" : {
         "entity" : "Image",
         "req" : "1C",
         "module" : "Specimen",
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
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Referenced Frame Number"
      },
      "(0010,2180)" : {
         "desc" : "Occupation of the Patient.",
         "module" : "Patient Study",
         "entity" : "Study",
         "req" : "3",
         "name" : "Occupation",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U"
      },
      "(0010,1000)" : {
         "name" : "Other Patient IDs",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3",
         "entity" : "Patient",
         "module" : "Patient",
         "desc" : "Other identification numbers or codes used to identify the patient."
      },
      "(0018,1530)" : {
         "desc" : [
            "Angle of the X-Ray beam in the row direction in degrees relative to the normal to the detector plane. Positive values indicate that the X-Ray beam is tilted towards higher numbered columns. Negative values indicate that the X-Ray beam is tilted towards lower numbered columns.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.7.5.1.4"
                  }
               },
               "."
            ]
         ],
         "module" : "XA Positioner",
         "entity" : "Image",
         "req" : "3",
         "name" : "Detector Primary Angle",
         "mod_tables" : [
            "table_C.8-30"
         ],
         "usage" : "M"
      },
      "(0038,0014)[<0>](0040,0033)" : {
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "usage" : "U",
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
         "module" : "Patient Study",
         "entity" : "Study",
         "req" : "1C"
      },
      "(0028,6100)[<0>](0028,6101)" : {
         "entity" : "Image",
         "req" : "1",
         "module" : "Mask",
         "desc" : [
            "Defined Term identifying the type of mask operation to be performed. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.10.1"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "name" : "Mask Operation",
         "usage" : "C - Required if the Image may be subtracted",
         "mod_tables" : [
            "table_C.7-16"
         ]
      },
      "(0018,8150)" : {
         "req" : "3",
         "entity" : "Image",
         "module" : "X-Ray Acquisition",
         "desc" : "Duration of X-Ray exposure in \u00b5sec.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-27"
         ],
         "name" : "Exposure Time in \u00b5S"
      },
      "(0028,1050)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.11-2b"
         ],
         "name" : "Window Center",
         "entity" : "Image",
         "req" : "1C",
         "module" : "VOI LUT",
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
         ]
      },
      "(0028,1103)" : {
         "req" : "1C",
         "entity" : "Image",
         "module" : "Image Pixel",
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
            "table_C.7-11b"
         ],
         "name" : "Blue Palette Color Lookup Table Descriptor"
      },
      "(0008,0060)" : {
         "module" : "General Series",
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
         "req" : "1",
         "entity" : "Series",
         "name" : "Modality",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M"
      },
      "(0050,0010)[<0>](0050,0018)" : {
         "mod_tables" : [
            "table_C.7-18"
         ],
         "usage" : "U",
         "name" : "Device Volume",
         "module" : "Device",
         "desc" : [
            "Volume of device in ml. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.12.1.1"
               }
            },
            ".."
         ],
         "entity" : "Image",
         "req" : "3"
      },
      "(0008,0096)[<0>](0040,1102)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Person's Address",
         "module" : "General Study",
         "desc" : "Person's mailing address",
         "entity" : "Study",
         "req" : "3"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)" : {
         "req" : "1C",
         "entity" : "Image",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "module" : "Specimen",
         "name" : "Referenced SOP Sequence",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0028,1102)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "name" : "Green Palette Color Lookup Table Descriptor",
         "entity" : "Image",
         "req" : "1C",
         "module" : "Image Pixel",
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
         ]
      },
      "(0040,0275)[<0>](0032,1064)" : {
         "entity" : "Series",
         "req" : "3",
         "module" : "General Series",
         "desc" : [
            "A sequence that conveys the Procedure Type of the requested procedure.",
            "Only a single Item is permitted in this sequence."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "name" : "Requested Procedure Code Sequence"
      },
      "(0040,0245)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "usage" : "M",
         "name" : "Performed Procedure Step Start Time",
         "desc" : "Time on which the Performed Procedure Step started.",
         "module" : "General Series",
         "req" : "3",
         "entity" : "Series"
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
         "req" : "1C",
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M"
      },
      "(60xx,1500)" : {
         "name" : "Overlay Label",
         "usage" : "U",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "entity" : "Image",
         "req" : "3",
         "module" : "Overlay Plane",
         "desc" : "A user defined text string that may be used to label or name this overlay."
      },
      "(0028,0008)" : {
         "mod_tables" : [
            "table_C.7-14"
         ],
         "usage" : "C - Required if pixel data is Multi-frame Cine data",
         "name" : "Number of Frames",
         "desc" : [
            "Number of frames in a Multi-frame Image. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.6.6.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "module" : "Multi-frame",
         "entity" : "Image",
         "req" : "1"
      },
      "(0008,1120)[<0>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1150)" : {
         "entity" : "Series",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a121)" : {
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "module" : "General Series",
         "req" : "1C",
         "entity" : "Series",
         "name" : "Date",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0088,0200)[<0>](0028,0011)" : {
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M",
         "name" : "Columns",
         "module" : "General Image",
         "desc" : "Number of columns in the image",
         "entity" : "Image",
         "req" : "1"
      },
      "(0028,0102)" : [
         {
            "name" : "High Bit",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "usage" : "M",
            "desc" : [
               "Most significant bit for pixel sample data. Each sample shall have the same high bit. See ",
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
            "req" : "1",
            "entity" : "Image"
         },
         {
            "req" : "1",
            "entity" : "Image",
            "desc" : [
               "Most significant bit for pixel sample data.",
               [
                  "See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.8.7.1.1.8"
                     }
                  },
                  "."
               ]
            ],
            "module" : "X-Ray Image",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-26"
            ],
            "name" : "High Bit"
         }
      ],
      "(0008,1115)[<0>](0008,114a)" : {
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this sequence."
         ],
         "module" : "Common Instance Reference",
         "req" : "1",
         "entity" : "Image",
         "name" : "Referenced Instance Sequence",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "usage" : "U"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a040)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Value Type",
         "req" : "1",
         "entity" : "Series",
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
      "(0018,a001)[<0>](0018,1200)" : {
         "name" : "Date of Last Calibration",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "entity" : "Image",
         "module" : "SOP Common",
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
      "(0018,115a)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-27"
         ],
         "name" : "Radiation Mode",
         "req" : "3",
         "entity" : "Image",
         "module" : "X-Ray Acquisition",
         "desc" : [
            "Specifies X-Ray radiation mode.",
            {
               "title" : "Defined Terms:",
               "type" : "variablelist",
               "list" : [
                  [
                     "CONTINUOUS",
                     null
                  ],
                  [
                     "PULSED",
                     null
                  ]
               ]
            }
         ]
      },
      "(0088,0200)[<0>](7fe0,0010)" : {
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
         "module" : "General Image",
         "req" : "1C",
         "entity" : "Image",
         "name" : "Pixel Data",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0039)" : {
         "module" : "Patient",
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
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "name" : "Assigning Jurisdiction Code Sequence"
      },
      "(0088,0200)[<0>](0028,0002)" : {
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M",
         "name" : "Samples per Pixel",
         "module" : "General Image",
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
         "req" : "1",
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,08ea)" : {
         "name" : "Measurement Units Code Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "module" : "Specimen",
         "req" : "1C",
         "entity" : "Image"
      },
      "(0028,6020)" : {
         "name" : "Frame Numbers Of Interest (FOI)",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-15"
         ],
         "req" : "3",
         "entity" : "Image",
         "desc" : "Frame number(s) selected as frames of interest. A frame number may appear more than once.",
         "module" : "Frame Pointers"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a168)" : {
         "entity" : "Series",
         "req" : "1C",
         "module" : "General Series",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "name" : "Concept Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a123)" : {
         "name" : "Person Name",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "req" : "1C",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "module" : "General Series"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "U",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "Specimen",
         "entity" : "Image",
         "req" : "1"
      },
      "(0100,0410)" : {
         "name" : "SOP Instance Status",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "req" : "3",
         "module" : "SOP Common",
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
         ]
      },
      "(0018,a001)[<0>](0008,1072)" : {
         "desc" : [
            "Identification of the operator(s) of the contributing equipment.",
            "One or more items are permitted in this sequence.",
            "The number and order of Items shall correspond to the number and order of values of Operators' Name (0008,1070), if present."
         ],
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Operator Identification Sequence"
      },
      "(0010,0020)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "Patient ID",
         "module" : "Patient",
         "desc" : "Primary hospital identification number or code for the patient.",
         "entity" : "Patient",
         "req" : "2"
      },
      "(0008,001a)" : {
         "module" : "SOP Common",
         "desc" : [
            "Uniquely identifies a Related General SOP Class for the SOP Class of this Instance. See ",
            {
               "el" : "olink",
               "attrs" : {
                  "targetdoc" : "PS3.4",
                  "xrefstyle" : "select: labelnumber",
                  "targetptr" : "PS3.4"
               }
            },
            "."
         ],
         "entity" : "Image",
         "req" : "3",
         "name" : "Related General SOP Class UID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0008,1048)" : {
         "name" : "Physician(s) of Record",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "module" : "General Study",
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
         "entity" : "Study",
         "req" : "3"
      },
      "(0018,1150)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-27"
         ],
         "name" : "Exposure Time",
         "req" : "2C",
         "entity" : "Image",
         "module" : "X-Ray Acquisition",
         "desc" : "Duration of X-Ray exposure in msec. See 8.7.2.1.1. Required if Exposure (0018,1152) is not present. May be present otherwise."
      },
      "(0008,1164)[<0>](0008,1167)" : {
         "entity" : "Image",
         "req" : "1",
         "module" : "Frame Extraction",
         "desc" : "SOP Instance from which the frames of this instance are extracted.",
         "name" : "Multi-frame Source SOP Instance UID",
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "mod_tables" : [
            "table_C.12-9"
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a30a)" : {
         "name" : "Numeric Value",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "module" : "Specimen",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "req" : "1C",
         "entity" : "Image"
      },
      "(0018,1044)" : {
         "usage" : "C - Required if contrast media was used in this Image",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "name" : "Contrast/Bolus Total Dose",
         "req" : "3",
         "entity" : "Image",
         "desc" : "Total amount in milliliters of the undiluted contrast agent",
         "module" : "Contrast/Bolus"
      },
      "(0008,0096)[<0>](0008,0081)" : {
         "name" : "Institution Address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "module" : "General Study",
         "req" : "3",
         "entity" : "Study"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a163)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Rational Denominator Value",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "module" : "General Series",
         "req" : "1C",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)" : {
         "req" : "3",
         "entity" : "Series",
         "module" : "General Series",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "name" : "Content Item Modifier Sequence"
      },
      "(0008,114a)" : {
         "req" : "3",
         "entity" : "Image",
         "desc" : [
            "Non-image composite SOP Instances that are significantly related to this Image, including waveforms that may or may not be temporally synchronized with this image.",
            "One or more Items are permitted in this sequence."
         ],
         "module" : "General Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "name" : "Referenced Instance Sequence"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1160)" : {
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
         ],
         "module" : "General Series",
         "name" : "Referenced Frame Number",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0018,1400)" : {
         "mod_tables" : [
            "table_C.8-26"
         ],
         "usage" : "M",
         "name" : "Acquisition Device Processing Description",
         "module" : "X-Ray Image",
         "desc" : [
            "Indicates any visual processing performed on the images prior to exchange.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.7.1.1.3"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "req" : "3",
         "entity" : "Image"
      },
      "(0018,106a)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "name" : "Synchronization Trigger",
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "module" : "Synchronization"
      },
      "(0038,0060)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "name" : "Service Episode ID",
         "module" : "Patient Study",
         "desc" : "Identifier of the Service Episode as assigned by the healthcare provider",
         "req" : "3",
         "entity" : "Study"
      },
      "(0010,2299)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "Responsible Organization",
         "module" : "Patient",
         "desc" : [
            "Name of organization with medical decision making authority for the patient.",
            "Required if patient is an animal. May be present otherwise."
         ],
         "req" : "2C",
         "entity" : "Patient"
      },
      "(0010,21b0)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Additional Patient History",
         "entity" : "Study",
         "req" : "3",
         "desc" : "Additional information about the Patient's medical history.",
         "module" : "Patient Study"
      },
      "(0008,1032)" : {
         "name" : "Procedure Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "req" : "3",
         "desc" : [
            "A Sequence that conveys the type of procedure performed.",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "General Study"
      },
      "(0008,0110)[<0>](0008,0102)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme Designator",
         "entity" : "Image",
         "req" : "1",
         "module" : "SOP Common",
         "desc" : "The value of a Coding Scheme Designator, used in this SOP Instance, which is being mapped."
      },
      "(0008,114a)[<0>](0008,1155)" : {
         "entity" : "Image",
         "req" : "1",
         "module" : "General Image",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-11"
         ]
      },
      "(0040,0520)[<0>](0008,1090)" : {
         "name" : "Manufacturer's Model Name",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "entity" : "Image",
         "req" : "3",
         "module" : "Specimen",
         "desc" : "Manufacturer's model name of the container component."
      },
      "(0028,6100)[<0>](0028,9454)" : {
         "req" : "3",
         "entity" : "Image",
         "module" : "Mask",
         "desc" : [
            "Specifies the method of selection of the mask operations of this item.",
            {
               "list" : [
                  [
                     "SYSTEM",
                     null
                  ],
                  [
                     "USER",
                     null
                  ]
               ],
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "name" : "Mask Selection Mode",
         "usage" : "C - Required if the Image may be subtracted",
         "mod_tables" : [
            "table_C.7-16"
         ]
      },
      "(0018,1704)" : {
         "name" : "Collimator Right Vertical Edge",
         "mod_tables" : [
            "table_C.8-28b"
         ],
         "usage" : "U",
         "module" : "X-Ray Collimator",
         "desc" : [
            "Required if a value of Collimator Shape (0018,1700) is RECTANGULAR. Location of the right edge of the rectangular collimator with respect to pixels in the image given as column. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.7.3.1.1"
               }
            },
            "."
         ],
         "req" : "1C",
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a124)" : {
         "name" : "UID",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "entity" : "Image",
         "req" : "1C",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "module" : "Specimen"
      },
      "(0018,1137)" : {
         "desc" : [
            [
               "Incremental change in Longitudinal position of the table relative to first frame of Multi-frame image in mm. Table motion towards +90\u00b0position of the primary angle of the positioner is positive. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.7.4.1.2",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ],
            "Required if Table Motion is DYNAMIC."
         ],
         "module" : "X-Ray Table",
         "entity" : "Image",
         "req" : "2C",
         "name" : "Table Longitudinal Increment",
         "mod_tables" : [
            "table_C.8-29"
         ],
         "usage" : "C - Required if Image is created with table motion, may be present otherwise"
      },
      "(0040,0515)[<0>](0040,0513)[<1>](0040,0032)" : {
         "module" : "Specimen",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "Image",
         "req" : "1C",
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "usage" : "U"
      },
      "(0008,0080)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Institution Name",
         "entity" : "Equipment",
         "req" : "3",
         "module" : "General Equipment",
         "desc" : "Institution where the equipment that produced the composite instances is located."
      },
      "(0008,2143)" : {
         "desc" : "The Frame Number of the last frame of a Multi-frame image to be displayed.",
         "module" : "Cine",
         "req" : "3",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-13"
         ],
         "usage" : "C - Required if pixel data is Multi-frame Cine data",
         "name" : "Stop Trim"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a162)" : {
         "name" : "Rational Numerator Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "module" : "General Series",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "entity" : "Series",
         "req" : "1C"
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
         "entity" : "Series",
         "name" : "Body Part Examined",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0020,000e)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "name" : "Series Instance UID",
         "entity" : "Image",
         "req" : "1",
         "desc" : "Unique identifier of the Series containing the referenced Instances.",
         "module" : "Common Instance Reference"
      },
      "(0040,0520)[<0>](0050,001d)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Container Component Diameter",
         "req" : "3",
         "entity" : "Image",
         "module" : "Specimen",
         "desc" : "Diameter in mm of container component for cylindrical or circular components."
      },
      "(0020,0010)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "name" : "Study ID",
         "module" : "General Study",
         "desc" : "User or equipment generated Study identifier.",
         "req" : "2",
         "entity" : "Study"
      },
      "(0028,1054)" : {
         "usage" : "C - Required if Pixel Intensity Relationship (0028,1040) is LOGU - Optional if Pixel Intensity Relationship (0028,1040) is DISP",
         "mod_tables" : [
            "table_C.11-1b"
         ],
         "name" : "Rescale Type",
         "entity" : "Image",
         "req" : "1C",
         "desc" : [
            "Specifies the output units of Rescale Slope (0028,1053) and Rescale Intercept (0028,1052).",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.11.1.1.2"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            "Required if Rescale Intercept is present."
         ],
         "module" : "Modality LUT"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a040)" : {
         "req" : "1",
         "entity" : "Series",
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
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Value Type"
      },
      "(0050,0010)[<0>](0008,0070)" : {
         "entity" : "Image",
         "req" : "3",
         "desc" : "Manufacturer of the device",
         "module" : "Device",
         "name" : "Manufacturer",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-18"
         ]
      },
      "(0088,0200)[<0>](0028,0101)" : {
         "entity" : "Image",
         "req" : "1",
         "module" : "General Image",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ]
      },
      "(0008,114a)[<0>](0040,a170)" : {
         "module" : "General Image",
         "desc" : [
            "Code describing the purpose of the reference to the Instance(s).",
            "Only a single Item shall be included in this sequence."
         ],
         "req" : "1",
         "entity" : "Image",
         "name" : "Purpose of Reference Code Sequence",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a168)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Concept Code Sequence",
         "module" : "General Series",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "entity" : "Series",
         "req" : "1C"
      },
      "(0010,2202)" : {
         "entity" : "Patient",
         "req" : "1C",
         "module" : "Patient",
         "desc" : [
            "The species of the patient.",
            "Only a single Item shall be included in this sequence.",
            "Required if the patient is an animal and if Patient Species Description (0010,2201) is not present. May be present otherwise."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient Species Code Sequence"
      },
      "(0008,0110)[<0>](0008,0112)" : {
         "name" : "Coding Scheme Registry",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
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
               "title" : "Defined Terms:",
               "type" : "variablelist"
            }
         ]
      },
      "(0028,0107)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "name" : "Largest Image Pixel Value",
         "entity" : "Image",
         "req" : "3",
         "module" : "Image Pixel",
         "desc" : "The maximum actual pixel value encountered in this image."
      },
      "(0008,114a)[<0>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-11"
         ],
         "req" : "1",
         "entity" : "Image",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "General Image"
      },
      "(0018,1606)" : {
         "req" : "1C",
         "entity" : "Image",
         "module" : "Display Shutter",
         "desc" : "Required if Shutter Shape (0018,1600) is RECTANGULAR. Location of the upper edge of the rectangular shutter with respect to pixels in the image given as row.",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-17a"
         ],
         "name" : "Shutter Upper Horizontal Edge"
      },
      "(0028,6100)[<0>](0028,6190)" : {
         "desc" : "Free form explanation of this particular mask operation.",
         "module" : "Mask",
         "entity" : "Image",
         "req" : "3",
         "name" : "Mask Operation Explanation",
         "mod_tables" : [
            "table_C.7-16"
         ],
         "usage" : "C - Required if the Image may be subtracted"
      },
      "(0020,0060)" : {
         "module" : "General Series",
         "desc" : [
            "Laterality of (paired) body part examined. Required if the body part examined is a paired structure and Image Laterality (0020,0062) or Frame Laterality (0020,9072) are not sent.",
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
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
         "req" : "2C",
         "entity" : "Series",
         "name" : "Laterality",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M"
      },
      "(0018,0036)" : {
         "mod_tables" : [
            "table_C.7-19"
         ],
         "usage" : "U",
         "name" : "Intervention Sequence",
         "desc" : [
            "Sequence describing interventional therapies or procedures.",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "Intervention",
         "entity" : "Image",
         "req" : "3"
      },
      "(0008,1164)" : {
         "desc" : [
            "Sequence containing details of how this SOP Instance was extracted from a source multi-frame SOP Instance.",
            "If this instance was created from an instance that contains a Frame Extraction Sequence, then this sequence shall contain all of the items from the parent's Frame Extraction Sequence and a new item that describes this extraction.",
            "One or more Items shall be included in this sequence."
         ],
         "module" : "Frame Extraction",
         "req" : "1",
         "entity" : "Image",
         "name" : "Frame Extraction Sequence",
         "mod_tables" : [
            "table_C.12-9"
         ],
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request"
      },
      "(0008,0051)[<0>](0040,0031)" : {
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "module" : "General Study",
         "entity" : "Study",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "usage" : "M",
         "name" : "Local Namespace Entity ID"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a043)" : {
         "req" : "1",
         "entity" : "Series",
         "module" : "General Series",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Concept Name Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a120)" : {
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1C",
         "name" : "DateTime",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0018,1702)" : {
         "req" : "1C",
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
         "module" : "X-Ray Collimator",
         "name" : "Collimator Left Vertical Edge",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-28b"
         ]
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0033)" : {
         "module" : "General Series",
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
         "req" : "1C",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "usage" : "M",
         "name" : "Universal Entity ID Type"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a160)" : {
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "module" : "General Series",
         "name" : "Text Value",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0018,106c)" : {
         "name" : "Synchronization Channel",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "usage" : "U",
         "desc" : [
            [
               "Identifier of waveform channel that records the synchronization channel or trigger, see ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.4.2.1.3",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ],
            "Required if synchronization channel or trigger is encoded in a waveform in this SOP Instance"
         ],
         "module" : "Synchronization",
         "req" : "1C",
         "entity" : "Frame of Reference"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a043)" : {
         "name" : "Concept Name Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "req" : "1",
         "module" : "General Series",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0010,2201)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient Species Description",
         "entity" : "Patient",
         "req" : "1C",
         "desc" : [
            "The species of the patient.",
            "Required if the patient is an animal and if Patient Species Code Sequence (0010,2202) is not present. May be present otherwise."
         ],
         "module" : "Patient"
      },
      "(0020,9172)[<0>](0008,1160)" : {
         "name" : "Referenced Frame Number",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "req" : "1C",
         "entity" : "Image",
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
         "module" : "SOP Common"
      },
      "(0018,1049)" : {
         "name" : "Contrast/Bolus Ingredient Concentration",
         "usage" : "C - Required if contrast media was used in this Image",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "entity" : "Image",
         "req" : "3",
         "desc" : "Milligrams of active ingredient per milliliter of (diluted) agent",
         "module" : "Contrast/Bolus"
      },
      "(0028,3000)[<0>](0028,3002)" : {
         "name" : "LUT Descriptor",
         "usage" : "C - Required if Pixel Intensity Relationship (0028,1040) is LOGU - Optional if Pixel Intensity Relationship (0028,1040) is DISP",
         "mod_tables" : [
            "table_C.11-1b"
         ],
         "entity" : "Image",
         "req" : "1C",
         "module" : "Modality LUT",
         "desc" : [
            "Specifies the format of the LUT Data in this Sequence.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.11.1.1",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ],
            "Required if the Modality LUT Sequence (0028,3000) is sent."
         ]
      },
      "(0008,0096)[<0>](0008,0080)" : {
         "entity" : "Study",
         "req" : "1C",
         "module" : "General Study",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Name"
      },
      "(0028,0100)" : [
         {
            "name" : "Bits Allocated",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "req" : "1",
            "entity" : "Image",
            "module" : "Image Pixel",
            "desc" : [
               "Number of bits allocated for each pixel sample. Each sample shall have the same number of bits allocated. See ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "targetdoc" : "PS3.5",
                     "targetptr" : "PS3.5",
                     "xrefstyle" : "select: labelnumber"
                  }
               },
               " for further explanation."
            ]
         },
         {
            "req" : "1",
            "entity" : "Image",
            "desc" : [
               "Number of bits allocated for each pixel sample.",
               [
                  "See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.8.7.1.1.6"
                     }
                  },
                  "."
               ]
            ],
            "module" : "X-Ray Image",
            "name" : "Bits Allocated",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-26"
            ]
         }
      ],
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a162)" : {
         "entity" : "Image",
         "req" : "1C",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "module" : "Specimen",
         "name" : "Rational Numerator Value",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0018,702b)" : {
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "usage" : "U",
         "name" : "Detector Manufacturer's Model Name",
         "desc" : "Model name of the detector component of the acquisition system",
         "module" : "DX Detector",
         "entity" : "Image",
         "req" : "3"
      },
      "(0028,0034)" : {
         "module" : "Image Pixel",
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
         "req" : "1C",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "usage" : "M",
         "name" : "Pixel Aspect Ratio"
      },
      "(0018,1063)" : {
         "usage" : "C - Required if pixel data is Multi-frame Cine data",
         "mod_tables" : [
            "table_C.7-13"
         ],
         "name" : "Frame Time",
         "entity" : "Image",
         "req" : "1C",
         "desc" : [
            "Nominal time (in msec) per individual frame. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.5.1.1"
               }
            },
            " for further explanation. Required if Frame Increment Pointer (0028,0009) points to Frame Time."
         ],
         "module" : "Cine"
      },
      "(0008,0110)[<0>](0008,0116)" : {
         "name" : "Coding Scheme Responsible Organization",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "req" : "3",
         "module" : "SOP Common",
         "desc" : "Name of the organization responsible for the Coding Scheme. May include organizational contact information."
      },
      "(0040,0244)" : {
         "module" : "General Series",
         "desc" : "Date on which the Performed Procedure Step started.",
         "entity" : "Series",
         "req" : "3",
         "name" : "Performed Procedure Step Start Date",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "usage" : "M"
      },
      "(0018,1067)" : {
         "mod_tables" : [
            "table_C.7-13"
         ],
         "usage" : "C - Required if pixel data is Multi-frame Cine data",
         "name" : "Image Trigger Delay",
         "desc" : "Delay time in milliseconds from trigger (e.g., X-Ray on pulse) to the first frame of a Multi-frame image.",
         "module" : "Cine",
         "req" : "3",
         "entity" : "Image"
      },
      "(0020,0013)" : [
         {
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "name" : "Instance Number",
            "entity" : "Image",
            "req" : "2",
            "desc" : [
               "A number that identifies this image.",
               {
                  "el" : "note",
                  "content" : [
                     "\n                    ",
                     {
                        "el" : "para",
                        "content" : [
                           "This Attribute was named Image Number in earlier versions of this Standard."
                        ]
                     },
                     "\n                  "
                  ]
               }
            ],
            "module" : "General Image"
         },
         {
            "desc" : "A number that identifies this Composite object instance.",
            "module" : "SOP Common",
            "entity" : "Image",
            "req" : "3",
            "name" : "Instance Number",
            "mod_tables" : [
               "table_C.12-1"
            ],
            "usage" : "M"
         }
      ],
      "(0018,1135)" : {
         "name" : "Table Vertical Increment",
         "usage" : "C - Required if Image is created with table motion, may be present otherwise",
         "mod_tables" : [
            "table_C.8-29"
         ],
         "entity" : "Image",
         "req" : "2C",
         "desc" : [
            "Incremental change in Vertical position of the table relative to first frame of Multi-frame image given in mm.",
            "Required if Table Motion is DYNAMIC."
         ],
         "module" : "X-Ray Table"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0032)" : {
         "entity" : "Patient",
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
         "module" : "Patient",
         "name" : "Universal Entity ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a124)" : {
         "name" : "UID",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "module" : "Specimen",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "req" : "1C",
         "entity" : "Image"
      },
      "(0100,0424)" : {
         "name" : "SOP Authorization Comment",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : "Any comments associated with the setting of the SOP Instance Status (0100,0410) to AO.",
         "entity" : "Image",
         "req" : "3"
      },
      "(0008,2112)[<0>](0008,1155)" : {
         "entity" : "Image",
         "req" : "1",
         "module" : "General Image",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3",
            "table_10-11"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)" : {
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1C",
         "name" : "Referenced SOP Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0018,1242)" : {
         "usage" : "C - Required if pixel data is Multi-frame Cine data",
         "mod_tables" : [
            "table_C.7-13"
         ],
         "name" : "Actual Frame Duration",
         "req" : "3",
         "entity" : "Image",
         "module" : "Cine",
         "desc" : "Elapsed time of data acquisition in msec per each frame."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a124)" : {
         "entity" : "Series",
         "req" : "1C",
         "module" : "General Series",
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
         ]
      },
      "(0040,0275)[<0>](0040,0009)" : {
         "req" : "1C",
         "entity" : "Series",
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
         ],
         "module" : "General Series",
         "name" : "Scheduled Procedure Step ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ]
      },
      "(0012,0063)" : {
         "entity" : "Patient",
         "req" : "1C",
         "desc" : [
            "A description or label of the mechanism or method use to remove the patient's identity. May be multi-valued if successive de-identification steps have been performed.",
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
                     "el" : "orderedlist"
                  },
                  "\n                  "
               ],
               "el" : "note"
            },
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method Code Sequence (0012,0064) is not present. May be present otherwise."
         ],
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "De-identification Method"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a160)" : {
         "req" : "1C",
         "entity" : "Series",
         "module" : "General Series",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "name" : "Text Value",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0028,6100)[<0>](0028,6120)" : {
         "module" : "Mask",
         "desc" : [
            "If Mask Operation is TID, specifies the offset to be subtracted from the current frame number in order to locate the mask frame in TID mode.",
            [
               "If Mask Operation is REV_TID, specifies the initial offset to be subtracted from the first contrast frame number. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.10.1.1",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ],
            "If zero length, TID Offset defaults to 1. Required if Mask Operation (0028,6101) is TID or REV_TID."
         ],
         "req" : "2C",
         "entity" : "Image",
         "name" : "TID Offset",
         "mod_tables" : [
            "table_C.7-16"
         ],
         "usage" : "C - Required if the Image may be subtracted"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "usage" : "M",
         "name" : "Content Item Modifier Sequence",
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
         "entity" : "Series",
         "req" : "3"
      },
      "(0028,6100)[<0>](0028,6114)" : {
         "entity" : "Image",
         "req" : "3",
         "module" : "Mask",
         "desc" : [
            [
               "A pair of floating point numbers specifying the fractional vertical [adjacent row spacing] and horizontal [adjacent column spacing] pixel shift applied to the mask before subtracting it from the contrast frame. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.6.10.1.2",
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
                        "When the Frame Pixel Shift Functional Group is present the values of the Mask Pixel Shift attribute of that Functional Group prevails over the values specified in this module."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "name" : "Mask Sub-pixel Shift",
         "usage" : "C - Required if the Image may be subtracted",
         "mod_tables" : [
            "table_C.7-16"
         ]
      },
      "(0032,1034)" : {
         "desc" : [
            "Institutional department where the request initiated.",
            "Only a single item is permitted in this sequence."
         ],
         "module" : "General Study",
         "req" : "3",
         "entity" : "Study",
         "name" : "Requesting Service Code Sequence",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M"
      },
      "(0018,1042)" : {
         "mod_tables" : [
            "table_C.7-12"
         ],
         "usage" : "C - Required if contrast media was used in this Image",
         "name" : "Contrast/Bolus Start Time",
         "desc" : "Time of start of injection",
         "module" : "Contrast/Bolus",
         "req" : "3",
         "entity" : "Image"
      },
      "(0088,0200)[<0>](0028,0107)" : {
         "desc" : "The maximum actual pixel value encountered in this image.",
         "module" : "General Image",
         "req" : "3",
         "entity" : "Image",
         "name" : "Largest Image Pixel Value",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M"
      },
      "(0028,3000)[<0>](0028,3006)" : {
         "module" : "Modality LUT",
         "desc" : [
            "LUT Data in this Sequence.",
            "Required if the Modality LUT Sequence (0028,3000) is sent."
         ],
         "req" : "1C",
         "entity" : "Image",
         "name" : "LUT Data",
         "mod_tables" : [
            "table_C.11-1b"
         ],
         "usage" : "C - Required if Pixel Intensity Relationship (0028,1040) is LOGU - Optional if Pixel Intensity Relationship (0028,1040) is DISP"
      },
      "(0040,0560)[<0>](0040,059a)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Specimen Type Code Sequence",
         "entity" : "Image",
         "req" : "3",
         "module" : "Specimen",
         "desc" : [
            "Specimen Type.",
            "Only a single Item is permitted in this sequence."
         ]
      },
      "(0038,0062)" : {
         "req" : "3",
         "entity" : "Study",
         "module" : "Patient Study",
         "desc" : "Description of the type of service episode.",
         "name" : "Service Episode Description",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0008,1164)[<0>](0008,1162)" : {
         "module" : "Frame Extraction",
         "desc" : [
            "A list of Frames that were extracted in the form of one or more triplets",
            "Required if object extraction is based on a Frame Level Retrieve using the Calculated Frame List (0008,1162) attribute.",
            [
               "See ",
               {
                  "attrs" : {
                     "targetdoc" : "PS3.4",
                     "targetptr" : "PS3.4",
                     "xrefstyle" : "select: labelnumber"
                  },
                  "el" : "olink"
               },
               " \"Instance and Frame Level Retrieve SOP Classes\""
            ]
         ],
         "entity" : "Image",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-9"
         ],
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "name" : "Calculated Frame List"
      },
      "(0018,1706)" : {
         "module" : "X-Ray Collimator",
         "desc" : [
            "Required if a value of Collimator Shape (0018,1700) is RECTANGULAR. Location of the upper edge of the rectangular collimator with respect to pixels in the image given as row. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.7.3.1.1"
               },
               "el" : "xref"
            },
            "."
         ],
         "entity" : "Image",
         "req" : "1C",
         "name" : "Collimator Upper Horizontal Edge",
         "mod_tables" : [
            "table_C.8-28b"
         ],
         "usage" : "U"
      },
      "(0008,0005)" : {
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
         "module" : "SOP Common",
         "req" : "1C",
         "entity" : "Image",
         "name" : "Specific Character Set",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(60xx,3000)" : {
         "entity" : "Image",
         "req" : "1",
         "module" : "Overlay Plane",
         "desc" : [
            "Overlay pixel data.",
            "The order of pixels sent for each overlay is left to right, top to bottom, i.e., the upper left pixel is sent first followed by the remainder of the first row, followed by the first pixel of the 2nd row, then the remainder of the 2nd row and so on.",
            "Overlay data shall be contained in this Attribute.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.9.2.1.1"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "usage" : "U",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "name" : "Overlay Data"
      },
      "(0018,1065)" : {
         "entity" : "Image",
         "req" : "1C",
         "module" : "Cine",
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
                     "content" : [
                        "Frame Time Vector arrays may not be properly encoded if Explicit VR transfer syntax is used and the VL of this attribute exceeds 65534 bytes."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "name" : "Frame Time Vector",
         "usage" : "C - Required if pixel data is Multi-frame Cine data",
         "mod_tables" : [
            "table_C.7-13"
         ]
      },
      "(0020,1002)" : {
         "req" : "3",
         "entity" : "Image",
         "desc" : "Number of images that resulted from this acquisition of data",
         "module" : "General Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "name" : "Images in Acquisition"
      },
      "(0008,0021)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "name" : "Series Date",
         "module" : "General Series",
         "desc" : "Date the Series started.",
         "entity" : "Series",
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a120)" : {
         "name" : "DateTime",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "req" : "1C",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "module" : "General Series"
      },
      "(0040,0275)[<0>](0040,1002)" : {
         "desc" : "Reason for requesting this procedure.",
         "module" : "General Series",
         "entity" : "Series",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M",
         "name" : "Reason for the Requested Procedure"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0033)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Universal Entity ID Type",
         "req" : "1C",
         "entity" : "Patient",
         "module" : "Patient",
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
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a160)" : {
         "module" : "Specimen",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "entity" : "Image",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "name" : "Text Value"
      },
      "(0040,0515)[<0>](0040,0512)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Container Identifier",
         "entity" : "Image",
         "req" : "1",
         "module" : "Specimen",
         "desc" : "The identifier for the container that contains the specimen(s) being imaged."
      },
      "(0040,0275)[<0>](0032,1060)" : {
         "req" : "3",
         "entity" : "Series",
         "desc" : "Institution-generated administrative description or classification of Requested Procedure.",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "name" : "Requested Procedure Description"
      },
      "(0040,0251)" : {
         "name" : "Performed Procedure Step End Time",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "usage" : "M",
         "desc" : "Time at which the Performed Procedure Step ended.",
         "module" : "General Series",
         "entity" : "Series",
         "req" : "3"
      },
      "(0040,9096)[<0>](0040,9216)" : {
         "module" : "General Image",
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
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "usage" : "M",
         "name" : "Real World Value First Value Mapped"
      },
      "(0018,0022)" : {
         "module" : "X-Ray Image",
         "desc" : [
            "Parameters of scanning sequence.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.7.1.1.4",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ]
         ],
         "entity" : "Image",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-26"
         ],
         "usage" : "M",
         "name" : "Scan Options"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1160)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Referenced Frame Number",
         "req" : "1C",
         "entity" : "Series",
         "module" : "General Series",
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
      "(0028,0101)" : [
         {
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "name" : "Bits Stored",
            "req" : "1",
            "entity" : "Image",
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
            "module" : "Image Pixel"
         },
         {
            "desc" : [
               "Number of bits stored for each pixel sample.",
               [
                  "See ",
                  {
                     "attrs" : {
                        "linkend" : "sect_C.8.7.1.1.7",
                        "xrefstyle" : "select: label"
                     },
                     "el" : "xref"
                  },
                  "."
               ]
            ],
            "module" : "X-Ray Image",
            "req" : "1",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.8-26"
            ],
            "usage" : "M",
            "name" : "Bits Stored"
         }
      ],
      "(0008,1049)[<0>](0040,1101)" : {
         "req" : "1",
         "entity" : "Study",
         "module" : "General Study",
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
         "name" : "Person Identification Code Sequence"
      },
      "(0008,0033)" : {
         "name" : "Content Time",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M",
         "module" : "General Image",
         "desc" : [
            "The time the image pixel data creation started.",
            "Required if image is part of a series in which the images are temporally related. May be present otherwise."
         ],
         "entity" : "Image",
         "req" : "2C"
      },
      "(0040,0560)[<0>](0040,0610)" : {
         "name" : "Specimen Preparation Sequence",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "req" : "2",
         "entity" : "Image",
         "module" : "Specimen",
         "desc" : [
            "Sequence of Items identifying the process steps used to prepare the specimen for image acquisition. This includes description of all processing necessary to interpret the image.",
            "Zero or more Items shall be included in this sequence.",
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
         ]
      },
      "(0018,7028)" : {
         "req" : "3",
         "entity" : "Image",
         "desc" : [
            "Offset of the TLHC of a rectangle circumscribing the active detector area from the TLHC of a rectangle circumscribing the physical detector area, measured in physical detector pixels as a row offset followed by a column offset.",
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
            ]
         ],
         "module" : "DX Detector",
         "name" : "Detector Active Origin",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-71b"
         ]
      },
      "(0010,0024)" : {
         "req" : "3",
         "entity" : "Patient",
         "module" : "Patient",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this sequence."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Issuer of Patient ID Qualifiers Sequence"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a161)" : {
         "req" : "1C",
         "entity" : "Series",
         "module" : "General Series",
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
         "name" : "Floating Point Value"
      },
      "(0088,0200)[<0>](0028,0006)" : {
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M",
         "name" : "Planar Configuration",
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
         "module" : "General Image",
         "req" : "1C",
         "entity" : "Image"
      },
      "(0008,1060)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Name of Physician(s) Reading Study",
         "req" : "3",
         "entity" : "Study",
         "desc" : "Names of the physician(s) reading the Study.",
         "module" : "General Study"
      },
      "(0012,0083)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "name" : "Consent for Clinical Trial Use Sequence",
         "req" : "3",
         "entity" : "Study",
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
         "module" : "Clinical Trial Study"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)" : {
         "name" : "Referenced Instance Sequence",
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "req" : "1",
         "entity" : "Image",
         "module" : "Common Instance Reference",
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this sequence."
         ]
      },
      "(0008,1040)" : {
         "req" : "3",
         "entity" : "Equipment",
         "module" : "General Equipment",
         "desc" : "Department in the institution where the equipment that produced the composite instances is located.",
         "name" : "Institutional Department Name",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ]
      },
      "(0018,1136)" : {
         "usage" : "C - Required if Image is created with table motion, may be present otherwise",
         "mod_tables" : [
            "table_C.8-29"
         ],
         "name" : "Table Lateral Increment",
         "entity" : "Image",
         "req" : "2C",
         "module" : "X-Ray Table",
         "desc" : [
            [
               "Incremental change in Lateral position of the table relative to first frame of Multi-frame image given in mm. Table motion towards +90\u00b0position of the secondary angle of the positioner is positive. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.7.4.1.3"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Required if Table Motion is DYNAMIC."
         ]
      },
      "(0012,0082)" : {
         "module" : "Clinical Trial Subject",
         "desc" : "Approval number issued by committee described in Clinical Trial Protocol Ethics Committee Name (0012,0081).",
         "req" : "3",
         "entity" : "Patient",
         "name" : "Clinical Trial Protocol Ethics Committee Approval Number",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U"
      },
      "(0010,0024)[<0>](0040,0035)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Identifier Type Code",
         "entity" : "Patient",
         "req" : "3",
         "module" : "Patient",
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
         ]
      },
      "(0008,0096)[<0>](0040,1103)" : {
         "name" : "Person's Telephone Numbers",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "module" : "General Study",
         "desc" : "Person's telephone number(s)",
         "req" : "3",
         "entity" : "Study"
      },
      "(0028,3000)[<0>](0028,3004)" : {
         "mod_tables" : [
            "table_C.11-1b"
         ],
         "usage" : "C - Required if Pixel Intensity Relationship (0028,1040) is LOGU - Optional if Pixel Intensity Relationship (0028,1040) is DISP",
         "name" : "Modality LUT Type",
         "module" : "Modality LUT",
         "desc" : [
            "Specifies the output values of this Modality LUT.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.11.1.1.2"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            "Required if the Modality LUT Sequence (0028,3000) is sent."
         ],
         "entity" : "Image",
         "req" : "1C"
      },
      "(0012,0072)" : {
         "entity" : "Series",
         "req" : "3",
         "desc" : [
            "A description of the series in the context of a clinical trial. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.3.2.1.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "module" : "Clinical Trial Series",
         "name" : "Clinical Trial Series Description",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-5b"
         ]
      },
      "(0040,0560)[<0>](0040,0562)[<1>](0040,0032)" : {
         "entity" : "Image",
         "req" : "1C",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "module" : "Specimen",
         "name" : "Universal Entity ID",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ]
      },
      "(0018,7020)" : {
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "usage" : "U",
         "name" : "Detector Element Physical Size",
         "module" : "DX Detector",
         "desc" : [
            "Physical dimensions of each detector element that comprises the detector matrix, in mm.",
            "Expressed as row dimension followed by column.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "This may not be the same as Detector Element Spacing (0018,7022) due to the presence of spacing material between detector elements."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "entity" : "Image",
         "req" : "3"
      },
      "(0028,0301)" : {
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            },
            "If this Attribute is absent, then the image may or may not contain burned in annotation."
         ],
         "module" : "General Image",
         "req" : "3",
         "entity" : "Image",
         "name" : "Burned In Annotation",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0008,1155)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "entity" : "Image",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "Specimen"
      },
      "(0018,1521)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-30"
         ],
         "name" : "Positioner Secondary Angle Increment",
         "req" : "2C",
         "entity" : "Image",
         "desc" : [
            "Incremental change in secondary positioner angle for each frame.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.7.5.1.3"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Required if Positioner Motion (0018,1500) equals DYNAMIC."
         ],
         "module" : "XA Positioner"
      },
      "(0008,1062)[<0>](0040,1101)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person Identification Code Sequence",
         "req" : "1",
         "entity" : "Study",
         "module" : "General Study",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0031)" : {
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "module" : "General Series",
         "req" : "1C",
         "entity" : "Series",
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "usage" : "M"
      },
      "(0018,702a)" : {
         "name" : "Detector Manufacturer Name",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "entity" : "Image",
         "req" : "3",
         "desc" : "Name of the manufacturer of the detector component of the acquisition system",
         "module" : "DX Detector"
      },
      "(0008,0051)[<0>](0040,0033)" : {
         "entity" : "Study",
         "req" : "1C",
         "module" : "General Study",
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
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "name" : "Universal Entity ID Type"
      },
      "(0008,1200)[<0>](0008,1115)" : {
         "name" : "Referenced Series Sequence",
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "req" : "1",
         "entity" : "Image",
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this sequence."
         ],
         "module" : "Common Instance Reference"
      },
      "(0400,0561)[<0>](0400,0550)[0](gggg,eeee)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Any Attribute from the main data set that was modified or removed.",
         "desc" : "May include Sequence Attributes and their Items.",
         "module" : "SOP Common",
         "req" : "1",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a043)" : {
         "module" : "General Series",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Series",
         "req" : "1",
         "name" : "Concept Name Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0040,0513)" : {
         "req" : "2",
         "entity" : "Image",
         "desc" : [
            "Organization that assigned the Container Identifier.",
            "Zero or one Item shall be included in this sequence."
         ],
         "module" : "Specimen",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Issuer of the Container Identifier Sequence"
      },
      "(0018,5100)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "name" : "Patient Position",
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
         "module" : "General Series",
         "entity" : "Series",
         "req" : "2C"
      },
      "(0018,1412)" : {
         "name" : "Target Exposure Index",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-71b",
            "table_10-23"
         ],
         "req" : "3",
         "entity" : "Image",
         "desc" : "The target value used to calculate Deviation Index (0018,1413) as defined in IEC 62494-1.",
         "module" : "DX Detector"
      },
      "(0008,1140)[<0>](0040,a170)" : [
         {
            "name" : "Purpose of Reference Code Sequence",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "req" : "3",
            "entity" : "Image",
            "desc" : [
               "Describes the purpose for which the reference is made.",
               "Only a single Item is permitted in this sequence."
            ],
            "module" : "General Image"
         },
         {
            "name" : "Purpose of Reference Code Sequence",
            "mod_tables" : [
               "table_C.8-26"
            ],
            "usage" : "M",
            "desc" : [
               "Describes the purpose for which the reference is made.",
               "Only a single Item is permitted in this Sequence."
            ],
            "module" : "X-Ray Image",
            "req" : "3",
            "entity" : "Image"
         }
      ],
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a163)" : {
         "module" : "Specimen",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "req" : "1C",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "name" : "Rational Denominator Value"
      },
      "(0008,0110)[<0>](0008,010c)" : {
         "name" : "Coding Scheme UID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : "The coding scheme UID identifier. Required if coding scheme is identified by an ISO 8824 object identifier compatible with the UI VR.",
         "req" : "1C",
         "entity" : "Image"
      },
      "(0018,8151)" : {
         "mod_tables" : [
            "table_C.8-27"
         ],
         "usage" : "M",
         "name" : "X-Ray Tube Current in \u00b5A",
         "module" : "X-Ray Acquisition",
         "desc" : "X-Ray Tube Current in \u00b5A.",
         "entity" : "Image",
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1150)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "entity" : "Series",
         "req" : "1",
         "module" : "General Series",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a30a)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Numeric Value",
         "req" : "1C",
         "entity" : "Series",
         "module" : "General Series",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ]
      },
      "(0008,0050)" : {
         "module" : "General Study",
         "desc" : "A RIS generated number that identifies the order for the Study.",
         "entity" : "Study",
         "req" : "2",
         "name" : "Accession Number",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M"
      },
      "(0012,0051)" : {
         "module" : "Clinical Trial Study",
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
         "entity" : "Study",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "usage" : "U",
         "name" : "Clinical Trial Time Point Description"
      },
      "(0018,a001)[<0>](0008,0081)" : {
         "req" : "3",
         "entity" : "Image",
         "module" : "SOP Common",
         "desc" : "Address of the institution where the equipment that contributed to the composite instance is located.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Institution Address"
      },
      "(0040,0560)[<0>](0040,0554)" : {
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
         "module" : "Specimen",
         "req" : "1",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U",
         "name" : "Specimen UID"
      },
      "(0008,1110)" : {
         "req" : "3",
         "entity" : "Study",
         "module" : "General Study",
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
         "name" : "Referenced Study Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0008,1049)[<0>](0008,0082)" : {
         "entity" : "Study",
         "req" : "1C",
         "module" : "General Study",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Code Sequence"
      },
      "(0018,0036)[<0>](0018,0038)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-19"
         ],
         "name" : "Intervention Status",
         "req" : "2",
         "entity" : "Image",
         "module" : "Intervention",
         "desc" : [
            "Temporal relation of SOP Instance to intervention",
            {
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
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ]
      },
      "(0010,1002)[<0>](0010,0021)" : {
         "name" : "Issuer of Patient ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "module" : "Patient",
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
         "req" : "3",
         "entity" : "Patient"
      },
      "(4ffe,0001)" : {
         "desc" : [
            "A sequence of items that describe the parameters used to calculate a MAC for use in Digital Signatures.",
            "One or more Items shall be included in this sequence."
         ],
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "3",
         "name" : "MAC Parameters Sequence",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M"
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
         "module" : "Clinical Trial Subject",
         "req" : "2",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U",
         "name" : "Clinical Trial Site ID"
      },
      "(0008,1110)[<0>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "General Study",
         "req" : "1",
         "entity" : "Study",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "usage" : "M"
      },
      "(0020,9172)" : {
         "desc" : [
            "The set of images or other composite SOP Instances that were converted to this instance.",
            "If this instance was converted from a specific frame in the source instance, the reference shall include the Frame Number.",
            "One or more Items shall be included in this sequence.",
            "Required if this instance was created by conversion, and Conversion Source Attributes Sequence (0020,9172) is not present in an Item of Shared Functional Groups Sequence (5200,9229) or Per-Frame Functional Groups Sequence (5200,9230)."
         ],
         "module" : "SOP Common",
         "req" : "1C",
         "entity" : "Image",
         "name" : "Conversion Source Attributes Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0018,0036)[<0>](0018,003a)" : {
         "mod_tables" : [
            "table_C.7-19"
         ],
         "usage" : "U",
         "name" : "Intervention Description",
         "module" : "Intervention",
         "desc" : "Further description in free form text describing the therapy or other intervention.",
         "req" : "3",
         "entity" : "Image"
      },
      "(0008,002a)" : {
         "desc" : [
            "The date and time that the acquisition of data that resulted in this image started.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "The synchronization of this time with an external clock is specified in the Synchronization Module in Acquisition Time Synchronized (0018,1800)."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "module" : "General Image",
         "entity" : "Image",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M",
         "name" : "Acquisition DateTime"
      },
      "(0008,0012)" : {
         "entity" : "Image",
         "req" : "3",
         "desc" : [
            "Date the SOP Instance was created.",
            "This is the date that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Instance Creation Date"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a121)" : {
         "name" : "Date",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "entity" : "Image",
         "req" : "1C",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "module" : "Specimen"
      },
      "(0010,1002)[<0>](0010,0022)" : {
         "name" : "Type of Patient ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "1",
         "entity" : "Patient",
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
               "type" : "variablelist",
               "title" : "Defined Terms:"
            },
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "The identifier is coded as a string regardless of the type, not as a binary value."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "module" : "Patient"
      },
      "(0018,0036)[<0>](0018,0027)" : {
         "entity" : "Image",
         "req" : "3",
         "desc" : "Time of completion of administration of the intervention drug.",
         "module" : "Intervention",
         "name" : "Intervention Drug Stop Time",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-19"
         ]
      },
      "(0028,1203)" : {
         "entity" : "Image",
         "req" : "1C",
         "module" : "Image Pixel",
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
         ],
         "name" : "Blue Palette Color Lookup Table Data",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-11b"
         ]
      },
      "(0012,0031)" : {
         "req" : "2",
         "entity" : "Patient",
         "module" : "Clinical Trial Subject",
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
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "name" : "Clinical Trial Site Name"
      },
      "(0018,7001)" : {
         "req" : "3",
         "entity" : "Image",
         "module" : "DX Detector",
         "desc" : "Detector temperature during exposure in degrees Celsius.",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "name" : "Detector Temperature"
      },
      "(0040,0560)[<0>](0040,0551)" : {
         "name" : "Specimen Identifier",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "req" : "1",
         "entity" : "Image",
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
                     "linkend" : "sect_C.7.6.22.1.2",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ],
            "If a single specimen is present in a container, the value of the Specimen Identifier and the value of the Container Identifier are typically the same."
         ]
      },
      "(0018,1046)" : {
         "req" : "3",
         "entity" : "Image",
         "module" : "Contrast/Bolus",
         "desc" : "Rate(s) of injection(s) in milliliters/sec",
         "usage" : "C - Required if contrast media was used in this Image",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "name" : "Contrast Flow Rate"
      },
      "(0008,1111)[<0>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "General Series",
         "req" : "1",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-11"
         ],
         "usage" : "M",
         "name" : "Referenced SOP Class UID"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "entity" : "Series",
         "req" : "1",
         "module" : "General Series",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0020,0020)" : {
         "req" : "2C",
         "entity" : "Image",
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
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "IODs may have attributes other than Patient Orientation, Image Orientation, or Image Position (Patient) to describe orientation in which case this attribute will be zero length."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "module" : "General Image",
         "name" : "Patient Orientation",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ]
      },
      "(0018,0072)" : {
         "name" : "Effective Duration",
         "mod_tables" : [
            "table_C.7-13"
         ],
         "usage" : "C - Required if pixel data is Multi-frame Cine data",
         "desc" : "Total time in seconds that data was actually taken for the entire Multi-frame image.",
         "module" : "Cine",
         "req" : "3",
         "entity" : "Image"
      },
      "(0008,0070)" : {
         "module" : "General Equipment",
         "desc" : "Manufacturer of the equipment that produced the composite instances.",
         "req" : "2",
         "entity" : "Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "name" : "Manufacturer"
      },
      "(003a,0300)[<0>](003a,0208)" : {
         "entity" : "Image",
         "req" : "1",
         "desc" : [
            "A coded descriptor of the audio channel source.",
            "Only a single Item shall be included in this sequence."
         ],
         "module" : "Cine",
         "usage" : "C - Required if pixel data is Multi-frame Cine data",
         "mod_tables" : [
            "table_C.7-13"
         ],
         "name" : "Channel Source Sequence"
      },
      "(fffa,fffa)[<0>](0400,0005)" : {
         "req" : "1",
         "entity" : "Image",
         "desc" : "A number used to identify which MAC Parameters Sequence item was used in the calculation of this Digital Signature.",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "MAC ID Number"
      },
      "(0012,0083)[<0>](0012,0085)" : {
         "name" : "Consent for Distribution Flag",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "req" : "1",
         "entity" : "Study",
         "module" : "Clinical Trial Study",
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
         ]
      },
      "(0028,6010)" : {
         "mod_tables" : [
            "table_C.7-15"
         ],
         "usage" : "U",
         "name" : "Representative Frame Number",
         "module" : "Frame Pointers",
         "desc" : "The frame number selected for use as a pictorial representation (e.g., icon) of the Multi-frame Image",
         "req" : "3",
         "entity" : "Image"
      },
      "(0008,0020)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "name" : "Study Date",
         "desc" : "Date the Study started.",
         "module" : "General Study",
         "entity" : "Study",
         "req" : "2"
      },
      "(0028,0006)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "name" : "Planar Configuration",
         "req" : "1C",
         "entity" : "Image",
         "module" : "Image Pixel",
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
         ]
      },
      "(0018,7024)" : {
         "name" : "Detector Active Shape",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "usage" : "U",
         "module" : "DX Detector",
         "desc" : [
            "Shape of the active area.",
            {
               "list" : [
                  [
                     "RECTANGLE",
                     null
                  ],
                  [
                     "ROUND",
                     null
                  ],
                  [
                     "HEXAGONAL",
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
                        "This may be different from the Field of View Shape (0018,1147), and should not be assumed to describe the stored image."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "req" : "3",
         "entity" : "Image"
      },
      "(0008,0096)[<0>](0008,0082)" : {
         "module" : "General Study",
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
         ],
         "usage" : "M"
      },
      "(0008,2111)" : [
         {
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
            ],
            "module" : "General Image",
            "req" : "3",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "usage" : "M",
            "name" : "Derivation Description"
         },
         {
            "name" : "Derivation Description",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-26"
            ],
            "req" : "3",
            "entity" : "Image",
            "desc" : [
               "A text description of how this image was derived.",
               [
                  "See ",
                  {
                     "attrs" : {
                        "linkend" : "sect_C.8.7.1.1.5",
                        "xrefstyle" : "select: label"
                     },
                     "el" : "xref"
                  },
                  " for further explanation."
               ]
            ],
            "module" : "X-Ray Image"
         }
      ],
      "(0008,0022)" : {
         "req" : "3",
         "entity" : "Image",
         "desc" : "The date the acquisition of data that resulted in this image started",
         "module" : "General Image",
         "name" : "Acquisition Date",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ]
      },
      "(0008,2218)[<0>](0008,2220)" : {
         "mod_tables" : [
            "table_C.8-26",
            "table_10-7"
         ],
         "usage" : "M",
         "name" : "Anatomic Region Modifier Sequence",
         "module" : "X-Ray Image",
         "desc" : [
            "Sequence of Items that modifies the anatomic region of interest of this Instance",
            "One or more Items are permitted in this sequence."
         ],
         "req" : "3",
         "entity" : "Image"
      },
      "(0018,7006)" : {
         "module" : "DX Detector",
         "desc" : "Free text description of detector.",
         "req" : "3",
         "entity" : "Image",
         "name" : "Detector Description",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "usage" : "U"
      },
      "(0020,9172)[<0>](0062,000b)" : {
         "module" : "SOP Common",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "entity" : "Image",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "usage" : "M",
         "name" : "Referenced Segment Number"
      },
      "(0018,1043)" : {
         "name" : "Contrast/Bolus Stop Time",
         "usage" : "C - Required if contrast media was used in this Image",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "req" : "3",
         "entity" : "Image",
         "desc" : "Time of end of contrast injection",
         "module" : "Contrast/Bolus"
      },
      "(0010,0024)[<0>](0040,0032)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "name" : "Universal Entity ID",
         "module" : "Patient",
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
         "entity" : "Patient",
         "req" : "3"
      },
      "(0040,0520)[<0>](0050,001c)" : {
         "module" : "Specimen",
         "desc" : "Length in mm of container component.",
         "entity" : "Image",
         "req" : "3",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U",
         "name" : "Container Component Length"
      },
      "(fffa,fffa)[<0>](0400,0120)" : {
         "req" : "1",
         "entity" : "Image",
         "module" : "SOP Common",
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
                  "linkend" : "sect_C.12.1.1.3.1.2",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "name" : "Signature",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)" : {
         "name" : "Protocol Context Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "req" : "3",
         "entity" : "Series",
         "module" : "General Series",
         "desc" : "Sequence that specifies the context for the Scheduled Protocol Code Sequence Item. One or more Items are permitted in this sequence."
      },
      "(0008,0023)" : {
         "desc" : [
            "The date the image pixel data creation started.",
            "Required if image is part of a series in which the images are temporally related. May be present otherwise.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "This Attribute was formerly known as Image Date."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "module" : "General Image",
         "entity" : "Image",
         "req" : "2C",
         "name" : "Content Date",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M"
      },
      "(0008,9215)" : {
         "req" : "3",
         "entity" : "Image",
         "desc" : [
            [
               "A coded description of how this image was derived. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.1.1.3"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            "One or more Items are permitted in this Sequence. More than one Item indicates that successive derivation steps have been applied."
         ],
         "module" : "General Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "name" : "Derivation Code Sequence"
      },
      "(003a,0300)" : {
         "desc" : [
            [
               "Description of any multiplexed audio channels. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.5.1.3"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Zero or more items may be included in this sequence.",
            "Required if the Transfer Syntax used to encode the multi-frame image contains multiplexed (interleaved) audio channels, such as is possible with MPEG2."
         ],
         "module" : "Cine",
         "req" : "2C",
         "entity" : "Image",
         "name" : "Multiplexed Audio Channels Description Code Sequence",
         "mod_tables" : [
            "table_C.7-13"
         ],
         "usage" : "C - Required if pixel data is Multi-frame Cine data"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "M",
         "module" : "General Series",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "entity" : "Series"
      },
      "(0050,0010)[<0>](0018,1000)" : {
         "module" : "Device",
         "desc" : "Manufacturer's serial number of the device",
         "req" : "3",
         "entity" : "Image",
         "name" : "Device Serial Number",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "usage" : "U"
      },
      "(60xx,0045)" : {
         "name" : "Overlay Subtype",
         "usage" : "U",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "entity" : "Image",
         "req" : "3",
         "desc" : [
            "Defined Term that identifies the intended purpose of the Overlay Type. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.9.2.1.3"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "module" : "Overlay Plane"
      },
      "(0012,0010)" : {
         "name" : "Clinical Trial Sponsor Name",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U",
         "desc" : [
            "The name of the clinical trial sponsor. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.1.3.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "module" : "Clinical Trial Subject",
         "req" : "1",
         "entity" : "Patient"
      },
      "(0050,0010)[<0>](0018,1003)" : {
         "desc" : "User-supplied identifier for the device",
         "module" : "Device",
         "entity" : "Image",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "usage" : "U",
         "name" : "Device ID"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a168)" : {
         "name" : "Concept Code Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "module" : "Specimen",
         "req" : "1C",
         "entity" : "Image"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0082)" : {
         "name" : "Institution Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "req" : "1C",
         "entity" : "Image",
         "module" : "SOP Common",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0028,1055)" : {
         "mod_tables" : [
            "table_C.11-2b"
         ],
         "usage" : "U",
         "name" : "Window Center & Width Explanation",
         "module" : "VOI LUT",
         "desc" : "Free form explanation of the meaning of the Window Center and Width. Multiple values correspond to multiple Window Center and Width values.",
         "entity" : "Image",
         "req" : "3"
      },
      "(0018,1149)" : {
         "name" : "Field of View Dimension(s)",
         "mod_tables" : [
            "table_C.8-27"
         ],
         "usage" : "M",
         "module" : "X-Ray Acquisition",
         "desc" : "Dimensions of the Image Intensifier Field of View in mm. If Rectangle, row dimension followed by column; if Round, diameter.",
         "req" : "3",
         "entity" : "Image"
      },
      "(0018,1624)" : {
         "req" : "3",
         "entity" : "Image",
         "desc" : [
            "A color triplet value used to replace those parts of the image occluded by the shutter, when rendered on a color display. The units are specified in PCS-Values, and the value is encoded as CIELab. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.10.7.1.1"
               },
               "el" : "xref"
            },
            "."
         ],
         "module" : "Display Shutter",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-17a"
         ],
         "name" : "Shutter Presentation Color CIELab Value"
      },
      "(0008,103e)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "name" : "Series Description",
         "module" : "General Series",
         "desc" : "Description of the Series",
         "entity" : "Series",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1160)" : {
         "req" : "1C",
         "entity" : "Series",
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
                     "el" : "para"
                  },
                  "\n              "
               ]
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Referenced Frame Number"
      },
      "(0040,a390)[<0>](0040,e010)" : {
         "entity" : "Image",
         "req" : "3",
         "desc" : "Retrieval access path to HL7 Structured Document. Includes fully specified scheme, authority, path, and query in accordance with RFC 2396",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Retrieve URI"
      },
      "(0008,1072)[<0>](0040,1102)" : {
         "req" : "3",
         "entity" : "Series",
         "module" : "General Series",
         "desc" : "Person's mailing address",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "name" : "Person's Address"
      },
      "(0010,2292)" : {
         "module" : "Patient",
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
         "req" : "2C",
         "entity" : "Patient",
         "name" : "Patient Breed Description",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(0020,000e)" : {
         "entity" : "Series",
         "req" : "1",
         "module" : "General Series",
         "desc" : "Unique identifier of the Series.",
         "name" : "Series Instance UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0008,1052)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "name" : "Performing Physician Identification Sequence",
         "module" : "General Series",
         "desc" : [
            "Identification of the physician(s) administering the Series.",
            "One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Performing Physician's Name (0008,1050), if present."
         ],
         "req" : "3",
         "entity" : "Series"
      },
      "(0018,1151)" : {
         "desc" : "X-Ray Tube Current in mA. Required if Exposure (0018,1152) is not present. May be present otherwise.",
         "module" : "X-Ray Acquisition",
         "req" : "2C",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-27"
         ],
         "usage" : "M",
         "name" : "X-Ray Tube Current"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0031)" : {
         "module" : "Patient",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C",
         "entity" : "Patient",
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M"
      },
      "(0018,a001)[<0>](0018,a002)" : {
         "module" : "SOP Common",
         "desc" : "The Date & Time when the equipment contributed to the composite instance.",
         "req" : "3",
         "entity" : "Image",
         "name" : "Contribution DateTime",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0088,0200)[<0>](0028,0106)" : {
         "module" : "General Image",
         "desc" : "The minimum actual pixel value encountered in this image.",
         "entity" : "Image",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M",
         "name" : "Smallest Image Pixel Value"
      },
      "(0008,0030)" : {
         "req" : "2",
         "entity" : "Study",
         "module" : "General Study",
         "desc" : "Time the Study started.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Study Time"
      },
      "(0008,1010)" : {
         "name" : "Station Name",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "entity" : "Equipment",
         "req" : "3",
         "module" : "General Equipment",
         "desc" : "User defined name identifying the machine that produced the composite instances."
      },
      "(0018,1511)" : {
         "name" : "Positioner Secondary Angle",
         "mod_tables" : [
            "table_C.8-30"
         ],
         "usage" : "M",
         "module" : "XA Positioner",
         "desc" : [
            "Position of the X-Ray Image Intensifier about the patient from the CAU to CRA direction where movement from CAU to vertical is positive.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.7.5.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               }
            ]
         ],
         "entity" : "Image",
         "req" : "2"
      },
      "(0010,0200)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "Quality Control Subject",
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
            "This attribute describes a characteristic of the Imaging Subject. It is distinct from Quality Control Image (0028,0300) in the General Image Module, which is used to describe an image acquired."
         ],
         "entity" : "Patient",
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a122)" : {
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Time"
      },
      "(0008,0201)" : {
         "req" : "3",
         "entity" : "Image",
         "module" : "SOP Common",
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
                     "el" : "orderedlist",
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
                                          "targetdoc" : "PS3.5",
                                          "targetptr" : "PS3.5",
                                          "xrefstyle" : "select: labelnumber"
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
                                 "content" : [
                                    "The \"+\" sign may not be omitted."
                                 ],
                                 "el" : "para"
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Timezone Offset From UTC"
      },
      "(0018,0010)" : {
         "desc" : "Contrast or bolus agent",
         "module" : "Contrast/Bolus",
         "entity" : "Image",
         "req" : "2",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "usage" : "C - Required if contrast media was used in this Image",
         "name" : "Contrast/Bolus Agent"
      },
      "(0028,3010)[<0>](0028,3006)" : {
         "module" : "VOI LUT",
         "desc" : "LUT Data in this Sequence.",
         "req" : "1",
         "entity" : "Image",
         "name" : "LUT Data",
         "mod_tables" : [
            "table_C.11-2b"
         ],
         "usage" : "U"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a122)" : {
         "entity" : "Series",
         "req" : "1C",
         "module" : "General Series",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "name" : "Time",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0040,a390)" : {
         "name" : "HL7 Structured Document Reference Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "module" : "SOP Common",
         "req" : "1C",
         "entity" : "Image"
      },
      "(60xx,0011)" : {
         "name" : "Overlay Columns",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "usage" : "U",
         "desc" : "Number of Columns in Overlay.",
         "module" : "Overlay Plane",
         "entity" : "Image",
         "req" : "1"
      },
      "(0018,700c)" : {
         "name" : "Date of Last Detector Calibration",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "req" : "3",
         "entity" : "Image",
         "desc" : "The date on which the detector used to acquire this image as identified in Detector ID (0018,700A) was last calibrated.",
         "module" : "DX Detector"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a121)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Date",
         "req" : "1C",
         "entity" : "Series",
         "module" : "General Series",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1155)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1"
      },
      "(0040,0275)[<0>](0040,1001)" : {
         "entity" : "Series",
         "req" : "1C",
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
         "module" : "General Series",
         "name" : "Requested Procedure ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ]
      },
      "(0088,0200)[<0>](0028,1202)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "name" : "Green Palette Color Lookup Table Data",
         "entity" : "Image",
         "req" : "1C",
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
         ]
      },
      "(0008,2112)[<0>](0020,0020)" : {
         "desc" : [
            "The Patient Orientation values of the source image.",
            "Required if the value of Spatial Locations Preserved (0028,135A) is REORIENTED_ONLY."
         ],
         "module" : "General Image",
         "entity" : "Image",
         "req" : "1C",
         "name" : "Patient Orientation",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M"
      },
      "(0012,0071)" : {
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
         "module" : "Clinical Trial Series",
         "entity" : "Series",
         "req" : "3",
         "name" : "Clinical Trial Series ID",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "usage" : "U"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1155)" : {
         "module" : "General Series",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Series",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "M"
      },
      "(0020,4000)" : {
         "req" : "3",
         "entity" : "Image",
         "desc" : "User-defined comments about the image",
         "module" : "General Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "name" : "Image Comments"
      },
      "(0028,3010)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.11-2b"
         ],
         "name" : "VOI LUT Sequence",
         "req" : "1C",
         "entity" : "Image",
         "module" : "VOI LUT",
         "desc" : [
            "Defines a sequence of VOI LUTs.",
            "One or more Items shall be included in this sequence.",
            "Required if Window Center (0028,1050) is not present. May be present otherwise."
         ]
      },
      "(60xx,0022)" : {
         "name" : "Overlay Description",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "usage" : "U",
         "module" : "Overlay Plane",
         "desc" : "User-defined comments about the overlay.",
         "req" : "3",
         "entity" : "Image"
      },
      "(0010,1010)" : {
         "entity" : "Study",
         "req" : "3",
         "desc" : "Age of the Patient.",
         "module" : "Patient Study",
         "name" : "Patient's Age",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0008,0081)" : {
         "desc" : "Mailing address of the institution where the equipment that produced the composite instances is located.",
         "module" : "General Equipment",
         "entity" : "Equipment",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "name" : "Institution Address"
      },
      "(0040,0250)" : {
         "name" : "Performed Procedure Step End Date",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "req" : "3",
         "entity" : "Series",
         "module" : "General Series",
         "desc" : "Date on which the Performed Procedure Step ended."
      },
      "(0018,1134)" : {
         "desc" : {
            "type" : "variablelist",
            "title" : "Defined Terms:",
            "list" : [
               [
                  "STATIC",
                  null
               ],
               [
                  "DYNAMIC",
                  null
               ]
            ]
         },
         "module" : "X-Ray Table",
         "entity" : "Image",
         "req" : "2",
         "mod_tables" : [
            "table_C.8-29"
         ],
         "usage" : "C - Required if Image is created with table motion, may be present otherwise",
         "name" : "Table Motion"
      },
      "(0008,0090)" : {
         "req" : "2",
         "entity" : "Study",
         "module" : "General Study",
         "desc" : "Name of the patient's referring physician",
         "name" : "Referring Physician's Name",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0008,1052)[<0>](0040,1102)" : {
         "req" : "3",
         "entity" : "Series",
         "desc" : "Person's mailing address",
         "module" : "General Series",
         "name" : "Person's Address",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ]
      },
      "(0040,0275)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "name" : "Request Attributes Sequence",
         "desc" : [
            "Sequence that contains attributes from the Imaging Service Request.",
            "One or more Items are permitted in this sequence."
         ],
         "module" : "General Series",
         "req" : "3",
         "entity" : "Series"
      },
      "(0008,2142)" : {
         "mod_tables" : [
            "table_C.7-13"
         ],
         "usage" : "C - Required if pixel data is Multi-frame Cine data",
         "name" : "Start Trim",
         "desc" : "The frame number of the first frame of the Multi-frame image to be displayed.",
         "module" : "Cine",
         "req" : "3",
         "entity" : "Image"
      },
      "(0018,1600)" : {
         "req" : "1",
         "entity" : "Image",
         "desc" : [
            "Shape(s) of the shutter defined for display.",
            {
               "title" : "Enumerated Values:",
               "type" : "variablelist",
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
               ]
            },
            [
               "This multi-valued Attribute shall contain at most one of each Enumerated Value. When multiple values are present, and the shutter is applied to a displayed image, then all of the shapes shall be combined and applied simultaneously, that is, the least amount of image remaining shall be visible (unoccluded). See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "figure_C.7-4b"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "module" : "Display Shutter",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-17a"
         ],
         "name" : "Shutter Shape"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)" : {
         "module" : "General Series",
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
         ],
         "usage" : "M",
         "name" : "Referenced SOP Sequence"
      },
      "(0018,1510)" : {
         "name" : "Positioner Primary Angle",
         "mod_tables" : [
            "table_C.8-30"
         ],
         "usage" : "M",
         "module" : "XA Positioner",
         "desc" : [
            "Position of the X-Ray Image Intensifier about the patient from the RAO to LAO direction where movement from RAO to vertical is positive.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.7.5.1.2"
                  }
               },
               "."
            ]
         ],
         "entity" : "Image",
         "req" : "2"
      },
      "(0018,1041)" : {
         "req" : "3",
         "entity" : "Image",
         "desc" : "Volume injected in milliliters of diluted contrast agent",
         "module" : "Contrast/Bolus",
         "name" : "Contrast/Bolus Volume",
         "usage" : "C - Required if contrast media was used in this Image",
         "mod_tables" : [
            "table_C.7-12"
         ]
      },
      "(0040,0275)[<0>](0040,0007)" : {
         "desc" : "Institution-generated description or classification of the Scheduled Procedure Step to be performed.",
         "module" : "General Series",
         "req" : "3",
         "entity" : "Series",
         "name" : "Scheduled Procedure Step Description",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0033)" : {
         "req" : "1C",
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
         ],
         "module" : "Patient",
         "name" : "Universal Entity ID Type",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ]
      },
      "(0008,1072)" : {
         "module" : "General Series",
         "desc" : [
            "Identification of the operator(s) supporting the Series.",
            "One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Operators' Name (0008,1070), if present."
         ],
         "req" : "3",
         "entity" : "Series",
         "name" : "Operator Identification Sequence",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M"
      },
      "(0050,0010)[<0>](0050,0014)" : {
         "name" : "Device Length",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "usage" : "U",
         "module" : "Device",
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
         "entity" : "Image"
      },
      "(0018,1048)" : {
         "mod_tables" : [
            "table_C.7-12"
         ],
         "usage" : "C - Required if contrast media was used in this Image",
         "name" : "Contrast/Bolus Ingredient",
         "module" : "Contrast/Bolus",
         "desc" : [
            "Active ingredient of agent.",
            {
               "list" : [
                  [
                     "IODINE",
                     null
                  ],
                  [
                     "GADOLINIUM",
                     null
                  ],
                  [
                     "CARBON DIOXIDE",
                     null
                  ],
                  [
                     "BARIUM",
                     null
                  ]
               ],
               "title" : "Defined Terms:",
               "type" : "variablelist"
            }
         ],
         "req" : "3",
         "entity" : "Image"
      },
      "(0040,0515)[<0>](0040,0513)[<1>](0040,0031)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "usage" : "U",
         "name" : "Local Namespace Entity ID",
         "module" : "Specimen",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C",
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0062,000b)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "name" : "Referenced Segment Number",
         "module" : "Specimen",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "entity" : "Image",
         "req" : "1C"
      },
      "(0038,0064)[<0>](0040,0033)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "name" : "Universal Entity ID Type",
         "req" : "1C",
         "entity" : "Study",
         "module" : "Patient Study",
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
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a043)" : {
         "name" : "Concept Name Code Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "module" : "Specimen",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1",
         "entity" : "Image"
      },
      "(0008,1072)[<0>](0008,0082)" : {
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "General Series",
         "req" : "1C",
         "entity" : "Series",
         "name" : "Institution Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0008,1072)[<0>](0008,0081)" : {
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "module" : "General Series",
         "entity" : "Series",
         "req" : "3",
         "name" : "Institution Address",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(fffa,fffa)[<0>](0400,0401)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "name" : "Digital Signature Purpose Code Sequence",
         "module" : "SOP Common",
         "desc" : [
            "The purpose of this Digital Signature.",
            "Only a single Item is permitted in this sequence."
         ],
         "req" : "3",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a160)" : {
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Text Value"
      },
      "(0008,0110)[<0>](0008,0114)" : {
         "name" : "Coding Scheme External ID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : "The coding scheme identifier as defined in an external registry. Required if coding scheme is registered and Coding Scheme UID (0008,010C) is not present.",
         "req" : "2C",
         "entity" : "Image"
      },
      "(0400,0561)[<0>](0400,0565)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Reason for the Attribute Modification",
         "req" : "1",
         "entity" : "Image",
         "module" : "SOP Common",
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
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a30a)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Numeric Value",
         "module" : "General Series",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "req" : "1C",
         "entity" : "Series"
      },
      "(0008,1050)" : {
         "desc" : "Name of the physician(s) administering the Series.",
         "module" : "General Series",
         "entity" : "Series",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "name" : "Performing Physician's Name"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0062,000b)" : {
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "module" : "General Series",
         "req" : "1C",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Referenced Segment Number"
      },
      "(0028,0030)" : {
         "name" : "Pixel Spacing",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-27",
            "table_10-10"
         ],
         "req" : "1C",
         "entity" : "Image",
         "desc" : [
            "Physical distance in the patient between the center of each pixel, specified by a numeric pair - adjacent row spacing (delimiter) adjacent column spacing in mm. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_10.7.1.1",
                  "xrefstyle" : "select: label"
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
         "module" : "X-Ray Acquisition"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a122)" : {
         "name" : "Time",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "module" : "Specimen",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "entity" : "Image",
         "req" : "1C"
      },
      "(60xx,0051)" : {
         "req" : "3",
         "entity" : "Image",
         "desc" : "Frame number of Multi-frame Image to which this overlay applies; frames are numbered from 1.",
         "module" : "Multi-frame Overlay",
         "usage" : "C - Required if Overlay data contains multiple frames.",
         "mod_tables" : [
            "table_C.9-3"
         ],
         "name" : "Image Frame Origin"
      },
      "(0028,0106)" : {
         "name" : "Smallest Image Pixel Value",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "usage" : "M",
         "module" : "Image Pixel",
         "desc" : "The minimum actual pixel value encountered in this image.",
         "entity" : "Image",
         "req" : "3"
      },
      "(0010,2298)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "Responsible Person Role",
         "module" : "Patient",
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
         "entity" : "Patient",
         "req" : "1C"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0008,1160)" : {
         "name" : "Referenced Frame Number",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1C",
         "entity" : "Image",
         "module" : "Specimen",
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
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a123)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Person Name",
         "req" : "1C",
         "entity" : "Series",
         "module" : "General Series",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ]
      },
      "(fffa,fffa)[<0>](0400,0310)" : {
         "module" : "SOP Common",
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
         "req" : "3",
         "entity" : "Image",
         "name" : "Certified Timestamp",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M"
      },
      "(0028,0a02)" : {
         "entity" : "Image",
         "req" : "3",
         "module" : "X-Ray Acquisition",
         "desc" : [
            "The type of correction for the effect of geometric magnification or calibration against an object of known size, if any. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_10.7.1.2"
               }
            },
            "."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-27",
            "table_10-10"
         ],
         "name" : "Pixel Spacing Calibration Type"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a123)" : {
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "module" : "General Series",
         "req" : "1C",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Person Name"
      },
      "(0010,0040)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient's Sex",
         "req" : "2",
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
         ],
         "module" : "Patient"
      },
      "(0040,0275)[<0>](0008,1110)" : {
         "name" : "Referenced Study Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M",
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
         "module" : "General Series",
         "req" : "3",
         "entity" : "Series"
      },
      "(0018,1138)" : {
         "usage" : "C - Required if Image is created with table motion, may be present otherwise",
         "mod_tables" : [
            "table_C.8-29"
         ],
         "name" : "Table Angle",
         "entity" : "Image",
         "req" : "3",
         "desc" : "Angle of table plane in degrees relative to horizontal plane [Gravity plane]. Positive values indicate that the head of the table is upwards.",
         "module" : "X-Ray Table"
      },
      "(0018,1152)" : {
         "module" : "X-Ray Acquisition",
         "desc" : "The exposure expressed in mAs, for example calculated from Exposure Time and X-Ray Tube Current. Required if either Exposure Time (0018,1150) or X-Ray Tube Current (0018,1151) are not present. May be present otherwise.",
         "req" : "2C",
         "entity" : "Image",
         "name" : "Exposure",
         "mod_tables" : [
            "table_C.8-27"
         ],
         "usage" : "M"
      },
      "(0008,1062)" : {
         "name" : "Physician(s) Reading Study Identification Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "req" : "3",
         "module" : "General Study",
         "desc" : "Identification of the physician(s) reading the Study. One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Name of Physician(s) Reading Study (0008,1060), if present."
      },
      "(0028,1090)" : {
         "req" : "2",
         "entity" : "Image",
         "module" : "Mask",
         "desc" : [
            "Specifies the recommended viewing protocol(s).",
            {
               "title" : "Defined Terms:",
               "type" : "variablelist",
               "list" : [
                  [
                     "SUB",
                     "For subtraction with mask images."
                  ],
                  [
                     "NAT",
                     "Native viewing of image as sent."
                  ]
               ]
            },
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "If an implementation does not recognize the Defined Term for Recommended Viewing Mode (0028,1090), reverting to native display mode is recommended."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "usage" : "C - Required if the Image may be subtracted",
         "mod_tables" : [
            "table_C.7-16"
         ],
         "name" : "Recommended Viewing Mode"
      },
      "(0010,2297)" : {
         "name" : "Responsible Person",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "req" : "2C",
         "desc" : [
            "Name of person with medical decision making authority for the patient.",
            "Required if the patient is an animal. May be present otherwise."
         ],
         "module" : "Patient"
      },
      "(0018,1164)" : {
         "req" : "3",
         "entity" : "Image",
         "module" : "X-Ray Acquisition",
         "desc" : [
            [
               "Physical distance measured at the front plane of the Image Receptor housing between the center of each pixel specified by a numeric pair - row spacing value(delimiter) column spacing value in mm. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_10.7.1.3",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation of the value order."
            ],
            "The value of this attribute shall never be adjusted to account for correction for the effect of geometric magnification or calibration against an object of known size; Pixel Spacing (0028,0030) is specified for that purpose."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-27"
         ],
         "name" : "Imager Pixel Spacing"
      },
      "(0018,7022)" : {
         "name" : "Detector Element Spacing",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "usage" : "U",
         "module" : "DX Detector",
         "desc" : [
            [
               "Physical distance between the center of each detector element, specified by a numeric pair - row spacing value(delimiter) column spacing value in mm. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_10.7.1.3"
                  }
               },
               " for further explanation of the value order."
            ],
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "This may not be the same as the Imager Pixel Spacing (0018,1164), and should not be assumed to describe the stored image."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "entity" : "Image",
         "req" : "3"
      },
      "(0028,1051)" : {
         "desc" : [
            [
               "Window Width for display. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.11.2.1.2",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ],
            "Required if Window Center (0028,1050) is sent."
         ],
         "module" : "VOI LUT",
         "req" : "1C",
         "entity" : "Image",
         "name" : "Window Width",
         "mod_tables" : [
            "table_C.11-2b"
         ],
         "usage" : "U"
      },
      "(0028,1056)" : {
         "desc" : [
            "Describes a VOI LUT function to apply to the values of Window Center (0028,1050) and Window Width (0028,1051).",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.11.2.1.3"
                  }
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
               "type" : "variablelist",
               "title" : "Defined Terms:"
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
         "module" : "VOI LUT",
         "req" : "3",
         "entity" : "Image",
         "name" : "VOI LUT Function",
         "mod_tables" : [
            "table_C.11-2b"
         ],
         "usage" : "U"
      },
      "(0038,0014)[<0>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "req" : "1C",
         "entity" : "Study",
         "module" : "Patient Study",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise."
      },
      "(0038,0010)" : {
         "name" : "Admission ID",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "module" : "Patient Study",
         "desc" : "Identifier of the visit as assigned by the healthcare provider",
         "entity" : "Study",
         "req" : "3"
      },
      "(0050,0010)[<0>](0008,1090)" : {
         "name" : "Manufacturer's Model Name",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "usage" : "U",
         "module" : "Device",
         "desc" : "Manufacturer's model name of the device",
         "entity" : "Image",
         "req" : "3"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a162)" : {
         "module" : "Specimen",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "entity" : "Image",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "name" : "Rational Numerator Value"
      },
      "(0008,001b)" : {
         "name" : "Original Specialized SOP Class UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "entity" : "Image",
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
         ],
         "module" : "SOP Common"
      },
      "(0040,0560)[<0>](0040,0602)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Specimen Detailed Description",
         "req" : "3",
         "entity" : "Image",
         "module" : "Specimen",
         "desc" : "Detailed textual specimen description (may include ancestor specimen descriptions)."
      },
      "(0018,0040)" : {
         "entity" : "Image",
         "req" : "3",
         "module" : "Cine",
         "desc" : "Number of frames per second.",
         "usage" : "C - Required if pixel data is Multi-frame Cine data",
         "mod_tables" : [
            "table_C.7-13"
         ],
         "name" : "Cine Rate"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a168)" : {
         "entity" : "Series",
         "req" : "1C",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Concept Code Sequence"
      },
      "(60xx,0015)" : {
         "req" : "1",
         "entity" : "Image",
         "module" : "Multi-frame Overlay",
         "desc" : "Number of Frames in Overlay. Required if Overlay data contains multiple frames.",
         "usage" : "C - Required if Overlay data contains multiple frames.",
         "mod_tables" : [
            "table_C.9-3"
         ],
         "name" : "Number of Frames in Overlay"
      },
      "(0010,2210)" : {
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
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.2.1.1",
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
         "req" : "1C",
         "entity" : "Series",
         "name" : "Anatomical Orientation Type",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a163)" : {
         "module" : "General Series",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "entity" : "Series",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Rational Denominator Value"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a161)" : {
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "module" : "General Series",
         "req" : "1C",
         "entity" : "Series",
         "name" : "Floating Point Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0088,0200)[<0>](0028,1102)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "name" : "Green Palette Color Lookup Table Descriptor",
         "req" : "1C",
         "entity" : "Image",
         "module" : "General Image",
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
      "(0012,0060)" : {
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
         "module" : "Clinical Trial Series",
         "entity" : "Series",
         "req" : "2",
         "name" : "Clinical Trial Coordinating Center Name",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "usage" : "U"
      },
      "(0018,700e)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "name" : "Time of Last Detector Calibration",
         "req" : "3",
         "entity" : "Image",
         "module" : "DX Detector",
         "desc" : "The time at which the detector used to acquire this image as identified in Detector ID (0018,700A) was last calibrated."
      },
      "(0018,7004)" : {
         "desc" : [
            "The type of detector used to acquire this image.",
            {
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
                  ],
                  [
                     "FILM",
                     "Scanned film/screen"
                  ]
               ],
               "title" : "Defined Terms:",
               "type" : "variablelist"
            }
         ],
         "module" : "DX Detector",
         "entity" : "Image",
         "req" : "2",
         "name" : "Detector Type",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "usage" : "U"
      },
      "(0018,1708)" : {
         "name" : "Collimator Lower Horizontal Edge",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-28b"
         ],
         "req" : "1C",
         "entity" : "Image",
         "module" : "X-Ray Collimator",
         "desc" : [
            "Required if a value of Collimator Shape (0018,1700) is RECTANGULAR. Location of the lower edge of the rectangular collimator with respect to pixels in the image given as row. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.7.3.1.1"
               }
            },
            "."
         ]
      },
      "(0040,0515)[<0>](0040,0513)" : {
         "module" : "Specimen",
         "desc" : [
            "Organization that assigned the Container Identifier.",
            "Zero or one Item shall be included in this sequence."
         ],
         "entity" : "Image",
         "req" : "2",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U",
         "name" : "Issuer of the Container Identifier Sequence"
      },
      "(0040,0260)" : {
         "module" : "General Series",
         "desc" : "Sequence describing the Protocol performed for this Procedure Step. One or more Items are permitted in this sequence.",
         "entity" : "Series",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "usage" : "M",
         "name" : "Performed Protocol Code Sequence"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a168)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "name" : "Concept Code Sequence",
         "module" : "Specimen",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "entity" : "Image",
         "req" : "1C"
      },
      "(0008,0096)" : {
         "module" : "General Study",
         "desc" : [
            "Identification of the patient's referring physician.",
            "Only a single item is permitted in this sequence."
         ],
         "entity" : "Study",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "name" : "Referring Physician Identification Sequence"
      },
      "(4ffe,0001)[<0>](0400,0015)" : {
         "req" : "1",
         "entity" : "Image",
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
               "content" : [
                  "\n                      ",
                  {
                     "content" : [
                        "Digital Signature Security Profiles (see ",
                        {
                           "attrs" : {
                              "xrefstyle" : "select: labelnumber",
                              "targetptr" : "PS3.15",
                              "targetdoc" : "PS3.15"
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "MAC Algorithm"
      },
      "(0088,0200)[<0>](0028,0100)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "name" : "Bits Allocated",
         "req" : "1",
         "entity" : "Image",
         "module" : "General Image",
         "desc" : [
            "Number of bits allocated for each pixel sample. Each sample shall have the same number of bits allocated. See ",
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
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a122)" : {
         "name" : "Time",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "module" : "Specimen",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "req" : "1C",
         "entity" : "Image"
      },
      "(0028,3000)" : {
         "name" : "Modality LUT Sequence",
         "mod_tables" : [
            "table_C.11-1b"
         ],
         "usage" : "C - Required if Pixel Intensity Relationship (0028,1040) is LOGU - Optional if Pixel Intensity Relationship (0028,1040) is DISP",
         "desc" : [
            "Defines a sequence of Modality LUTs.",
            "Only a single Item shall be included in this sequence.",
            "Shall not be present if Rescale Intercept (0028,1052) is present."
         ],
         "module" : "Modality LUT",
         "req" : "1C",
         "entity" : "Image"
      },
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1155)" : {
         "module" : "Common Instance Reference",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ],
         "usage" : "U",
         "name" : "Referenced SOP Instance UID"
      },
      "(0018,1608)" : {
         "module" : "Display Shutter",
         "desc" : "Required if Shutter Shape (0018,1600) is RECTANGULAR. Location of the lower edge of the rectangular shutter with respect to pixels in the image given as row.",
         "req" : "1C",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-17a"
         ],
         "usage" : "U",
         "name" : "Shutter Lower Horizontal Edge"
      },
      "(0008,3010)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "name" : "Irradiation Event UID",
         "req" : "3",
         "entity" : "Image",
         "module" : "General Image",
         "desc" : [
            "Unique identification of the irradiation event(s) associated with the acquisition of this image. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.6.1.1.7",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ]
      },
      "(0040,0275)[<0>](0008,0051)" : {
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this sequence."
         ],
         "module" : "General Series",
         "entity" : "Series",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M",
         "name" : "Issuer of Accession Number Sequence"
      },
      "(0008,1120)" : {
         "name" : "Referenced Patient Sequence",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "module" : "Patient",
         "desc" : [
            "A sequence that provides reference to a Patient SOP Class/Instance pair.",
            "Only a single Item is permitted in this Sequence."
         ],
         "req" : "3",
         "entity" : "Patient"
      },
      "(0400,0561)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Original Attributes Sequence",
         "req" : "3",
         "entity" : "Image",
         "module" : "SOP Common",
         "desc" : [
            "Sequence of Items containing all attributes that were removed or replaced by other values in the main data set.",
            "One or more Items are permitted in this sequence."
         ]
      },
      "(0010,1001)" : {
         "req" : "3",
         "entity" : "Patient",
         "module" : "Patient",
         "desc" : "Other names used to identify the patient.",
         "name" : "Other Patient Names",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0062,000b)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Referenced Segment Number",
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "module" : "General Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a121)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Date",
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "module" : "General Series"
      },
      "(0018,1610)" : {
         "entity" : "Image",
         "req" : "1C",
         "module" : "Display Shutter",
         "desc" : "Required if Shutter Shape (0018,1600) is CIRCULAR. Location of the center of the circular shutter with respect to pixels in the image given as row and column.",
         "name" : "Center of Circular Shutter",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-17a"
         ]
      },
      "(0040,0253)" : {
         "desc" : "User or equipment generated identifier of that part of a Procedure that has been carried out within this step.",
         "module" : "General Series",
         "req" : "3",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "usage" : "M",
         "name" : "Performed Procedure Step ID"
      },
      "(0400,0561)[<0>](0400,0563)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Modifying System",
         "desc" : "Identification of the system that removed and/or replaced the attributes.",
         "module" : "SOP Common",
         "req" : "1",
         "entity" : "Image"
      },
      "(0018,a001)[<0>](0018,1050)" : {
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "module" : "SOP Common",
         "req" : "3",
         "entity" : "Image",
         "name" : "Spatial Resolution",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1070)" : {
         "name" : "Operators' Name",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : "Name(s) of the operator(s) of the contributing equipment.",
         "req" : "3",
         "entity" : "Image"
      },
      "(0018,a001)[<0>](0008,1040)" : {
         "desc" : "Department in the institution where the equipment that contributed to the composite instance is located.",
         "module" : "SOP Common",
         "req" : "3",
         "entity" : "Image",
         "name" : "Institutional Department Name",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0062,000b)" : {
         "name" : "Referenced Segment Number",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "entity" : "Series",
         "module" : "General Series",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,003a)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Assigning Agency or Department Code Sequence",
         "entity" : "Patient",
         "req" : "3",
         "module" : "Patient",
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
         ]
      },
      "(0100,0420)" : {
         "module" : "SOP Common",
         "desc" : "The date and time when the SOP Instance Status (0100,0410) was set to AO.",
         "req" : "3",
         "entity" : "Image",
         "name" : "SOP Authorization DateTime",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(60xx,1301)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "name" : "ROI Area",
         "req" : "3",
         "entity" : "Image",
         "module" : "Overlay Plane",
         "desc" : [
            "Number of pixels in ROI area.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.9.2.1.2"
                  }
               },
               " for further explanation."
            ]
         ]
      },
      "(0018,1712)" : {
         "entity" : "Image",
         "req" : "1C",
         "desc" : [
            "Required if a value of Collimator Shape (0018,1700) is CIRCULAR. Radius of the circular collimator with respect to pixels in the image given as a number of pixels along the row direction. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.7.3.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "module" : "X-Ray Collimator",
         "name" : "Radius of Circular Collimator",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-28b"
         ]
      },
      "(0018,7012)" : {
         "entity" : "Image",
         "req" : "3",
         "desc" : "Time in Seconds since an exposure was last made on this detector prior to the acquisition of this image.",
         "module" : "DX Detector",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "name" : "Detector Time Since Last Exposure"
      },
      "(0018,a001)[<0>](0008,0080)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Institution Name",
         "entity" : "Image",
         "req" : "3",
         "module" : "SOP Common",
         "desc" : "Institution where the equipment that contributed to the composite instance is located."
      },
      "(0400,0500)[<0>](0400,0510)" : {
         "name" : "Encrypted Content Transfer Syntax UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "entity" : "Image",
         "desc" : "Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
         "module" : "SOP Common"
      },
      "(0008,0016)" : {
         "entity" : "Image",
         "req" : "1",
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
                  "targetptr" : "PS3.4",
                  "targetdoc" : "PS3.4"
               },
               "el" : "olink"
            },
            "."
         ],
         "module" : "SOP Common",
         "name" : "SOP Class UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1102)" : {
         "entity" : "Image",
         "req" : "3",
         "module" : "SOP Common",
         "desc" : "Person's mailing address",
         "name" : "Person's Address",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ]
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
         "req" : "3",
         "entity" : "Patient",
         "name" : "Assigning Facility Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M"
      },
      "(0088,0200)[<0>](0028,0004)" : {
         "module" : "General Image",
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
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M",
         "name" : "Photometric Interpretation"
      },
      "(0040,0520)[<0>](0050,0012)" : {
         "module" : "Specimen",
         "desc" : [
            "Type of container component.",
            "Only a single Item shall be included in this sequence."
         ],
         "req" : "1",
         "entity" : "Image",
         "name" : "Container Component Type Code Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U"
      },
      "(60xx,0040)" : {
         "entity" : "Image",
         "req" : "1",
         "module" : "Overlay Plane",
         "desc" : [
            "Indicates whether this overlay represents a region of interest or other graphics.",
            {
               "list" : [
                  [
                     "G",
                     "Graphics"
                  ],
                  [
                     "R",
                     "ROI"
                  ]
               ],
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "usage" : "U",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "name" : "Overlay Type"
      },
      "(0008,1164)[<0>](0008,1163)" : {
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "mod_tables" : [
            "table_C.12-9"
         ],
         "name" : "Time Range",
         "req" : "1C",
         "entity" : "Image",
         "desc" : [
            "The start and end times of the frames that were extracted.",
            "Required if object extraction is based on a Frame Level Retrieve using Time Range (0008,1163).",
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
         "module" : "Frame Extraction"
      },
      "(0018,1147)" : {
         "module" : "X-Ray Acquisition",
         "desc" : [
            [
               "Shape of the Image Intensifier Field of View. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.7.2.1.2",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ],
            {
               "title" : "Defined Terms:",
               "type" : "variablelist",
               "list" : [
                  [
                     "ROUND",
                     null
                  ],
                  [
                     "RECTANGLE",
                     null
                  ]
               ]
            }
         ],
         "req" : "3",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-27"
         ],
         "usage" : "M",
         "name" : "Field of View Shape"
      },
      "(0010,1002)[<0>](0010,0024)" : {
         "module" : "Patient",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this sequence."
         ],
         "entity" : "Patient",
         "req" : "3",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a040)" : {
         "entity" : "Image",
         "req" : "1",
         "module" : "Specimen",
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
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Value Type"
      },
      "(0018,7026)" : {
         "module" : "DX Detector",
         "desc" : [
            "Dimensions in mm of the active area.",
            "If Detector Active Shape (0018,7024) is:",
            "RECTANGLE: row dimension followed by column.",
            "ROUND: diameter.",
            "HEXAGONAL: diameter of a circumscribed circle.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "This may be different from the Field of View Dimensions (0018,1149), and should not be assumed to describe the stored image."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "req" : "3",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "usage" : "U",
         "name" : "Detector Active Dimension(s)"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)" : {
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "module" : "Specimen",
         "req" : "1C",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "name" : "Referenced SOP Sequence"
      },
      "(4ffe,0001)[<0>](0400,0005)" : {
         "entity" : "Image",
         "req" : "1",
         "desc" : "A number, unique within this SOP Instance, used to identify this MAC Parameters Sequence (4FFE,0001) item from an Item of the Digital Signatures Sequence (FFFA,FFFA).",
         "module" : "SOP Common",
         "name" : "MAC ID Number",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0040,a390)[<0>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "SOP Common",
         "req" : "1",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0008)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M",
         "name" : "Scheduled Protocol Code Sequence",
         "desc" : "Sequence describing the Scheduled Protocol following a specific coding scheme. One or more Items are permitted in this sequence.",
         "module" : "General Series",
         "entity" : "Series",
         "req" : "3"
      },
      "(7fe0,0010)" : {
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
         "module" : "Image Pixel",
         "req" : "1C",
         "entity" : "Image",
         "name" : "Pixel Data",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "usage" : "M"
      },
      "(0008,1049)[<0>](0008,0081)" : {
         "req" : "3",
         "entity" : "Study",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "module" : "General Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Address"
      },
      "(0018,a001)[<0>](0008,1010)" : {
         "name" : "Station Name",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "req" : "3",
         "desc" : "User defined name identifying the machine that contributed to the composite instance.",
         "module" : "SOP Common"
      },
      "(0100,0426)" : {
         "name" : "Authorization Equipment Certification Number",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : "The certification number issued to the Application Entity that set the SOP Instance Status (0100,0410) to AO.",
         "req" : "3",
         "entity" : "Image"
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
         "module" : "SOP Common",
         "req" : "3",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Software Versions"
      },
      "(0018,7008)" : {
         "req" : "3",
         "entity" : "Image",
         "module" : "DX Detector",
         "desc" : "Text description of operating mode of detector (implementation specific).",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "name" : "Detector Mode"
      },
      "(0400,0500)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Encrypted Attributes Sequence",
         "req" : "1C",
         "entity" : "Image",
         "module" : "SOP Common",
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
         ]
      },
      "(0008,1052)[<0>](0040,1103)" : {
         "name" : "Person's Telephone Numbers",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "entity" : "Series",
         "req" : "3",
         "desc" : "Person's telephone number(s)",
         "module" : "General Series"
      },
      "(0008,1250)" : {
         "entity" : "Series",
         "req" : "3",
         "module" : "General Series",
         "desc" : [
            "Identification of Series significantly related to this Series.",
            "One or more Items are permitted in this Sequence.",
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
                     "el" : "orderedlist",
                     "attrs" : {
                        "numeration" : "arabic"
                     }
                  },
                  "\n                  "
               ]
            }
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Related Series Sequence"
      },
      "(fffa,fffa)[<0>](0400,0100)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "name" : "Digital Signature UID",
         "module" : "SOP Common",
         "desc" : "A UID that can be used to uniquely reference this signature.",
         "req" : "1",
         "entity" : "Image"
      },
      "(0008,0032)" : {
         "req" : "3",
         "entity" : "Image",
         "module" : "General Image",
         "desc" : "The time the acquisition of data that resulted in this image started",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "name" : "Acquisition Time"
      },
      "(0008,1030)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Study Description",
         "entity" : "Study",
         "req" : "3",
         "module" : "General Study",
         "desc" : "Institution-generated description or classification of the Study (component) performed."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a124)" : {
         "name" : "UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "module" : "General Series",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "entity" : "Series",
         "req" : "1C"
      },
      "(0040,1012)" : {
         "module" : "General Study",
         "desc" : [
            "Coded reason(s) for performing this procedure.",
            {
               "content" : [
                  "\n                    ",
                  {
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
         "entity" : "Study",
         "name" : "Reason For Performed Procedure Code Sequence",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M"
      },
      "(0018,1190)" : {
         "entity" : "Image",
         "req" : "3",
         "module" : "X-Ray Acquisition",
         "desc" : "Nominal focal spot size in mm used to acquire this image.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-27"
         ],
         "name" : "Focal Spot(s)"
      },
      "(0028,6100)" : {
         "desc" : [
            "Defines a sequence that describes mask subtraction operations for a Multi-frame Image.",
            "One or more items shall be included in this sequence."
         ],
         "module" : "Mask",
         "entity" : "Image",
         "req" : "1",
         "name" : "Mask Subtraction Sequence",
         "mod_tables" : [
            "table_C.7-16"
         ],
         "usage" : "C - Required if the Image may be subtracted"
      },
      "(0018,701a)" : {
         "name" : "Detector Binning",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "usage" : "U",
         "module" : "DX Detector",
         "desc" : "Number of active detectors used to generate a single pixel. Specified as number of row detectors per pixel then column.",
         "entity" : "Image",
         "req" : "3"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M",
         "name" : "Universal Entity ID",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "module" : "Patient",
         "req" : "1C",
         "entity" : "Patient"
      },
      "(0010,1021)" : {
         "name" : "Patient's Size Code Sequence",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "module" : "Patient Study",
         "desc" : [
            "Patient's size category code",
            "One or more Items are permitted in this sequence."
         ],
         "entity" : "Study",
         "req" : "3"
      },
      "(0018,115e)" : {
         "name" : "Image and Fluoroscopy Area Dose Product",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-27"
         ],
         "req" : "3",
         "entity" : "Image",
         "desc" : [
            "X-Ray dose, measured in dGy*cm*cm, to which the patient was exposed for the acquisition of this image plus any non-digitally recorded fluoroscopy that may have been performed to prepare for the acquisition of this image.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "The sum of the area dose product of all images of a Series or a Study may not result in the total area dose product to which the patient was exposed."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "module" : "X-Ray Acquisition"
      },
      "(0008,1111)" : {
         "req" : "3",
         "entity" : "Series",
         "module" : "General Series",
         "desc" : [
            "Uniquely identifies the Performed Procedure Step SOP Instance to which the Series is related.",
            "Only a single Item is permitted in this sequence."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Referenced Performed Procedure Step Sequence"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1101)" : {
         "entity" : "Image",
         "req" : "1",
         "module" : "SOP Common",
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
         "name" : "Person Identification Code Sequence"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0062,000b)" : {
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "module" : "General Series",
         "req" : "1C",
         "entity" : "Series",
         "name" : "Referenced Segment Number",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0010,2294)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "Breed Registration Sequence",
         "module" : "Patient",
         "desc" : [
            "Information identifying an animal within a breed registry.",
            "Zero or more Items shall be included in this sequence.",
            "Required if the patient is an animal."
         ],
         "entity" : "Patient",
         "req" : "2C"
      },
      "(0018,1111)" : {
         "name" : "Distance Source to Patient",
         "mod_tables" : [
            "table_C.8-30"
         ],
         "usage" : "M",
         "desc" : [
            "Distance in mm from source to center of field of view.",
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
                                 "content" : [
                                    "This value is traditionally referred to as Source Object Distance (SOD)."
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
                                    "For cardiovascular image equipment the SOD value typically is the distance from source to isocenter."
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
               ],
               "el" : "note"
            }
         ],
         "module" : "XA Positioner",
         "entity" : "Image",
         "req" : "3"
      },
      "(0038,0064)" : {
         "name" : "Issuer of Service Episode ID Sequence",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "req" : "3",
         "entity" : "Study",
         "module" : "Patient Study",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Service Episode ID (0038,0060).",
            "Only a single Item is permitted in this sequence."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a122)" : {
         "name" : "Time",
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
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1C"
      },
      "(0028,0108)" : {
         "desc" : "The minimum value of all images in this Series.",
         "module" : "General Series",
         "req" : "3",
         "entity" : "Series",
         "name" : "Smallest Pixel Value in Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M"
      },
      "(0040,0520)" : {
         "entity" : "Image",
         "req" : "3",
         "desc" : [
            "Description of one or more components of the container (e.g., description of the slide and of the coverslip).",
            "One or more Items are permitted in this sequence."
         ],
         "module" : "Specimen",
         "name" : "Container Component Sequence",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      "(0008,1070)" : {
         "entity" : "Series",
         "req" : "3",
         "module" : "General Series",
         "desc" : "Name(s) of the operator(s) supporting the Series.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Operators' Name"
      },
      "(0008,1084)" : {
         "req" : "3",
         "entity" : "Study",
         "desc" : [
            "A sequence that conveys the admitting diagnosis (diagnoses).",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "Patient Study",
         "name" : "Admitting Diagnoses Code Sequence",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0008,1250)[<0>](0020,000d)" : {
         "module" : "General Series",
         "desc" : "Instance UID of Study to which the related Series belongs",
         "req" : "1",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "name" : "Study Instance UID"
      },
      "(0008,2144)" : {
         "entity" : "Image",
         "req" : "3",
         "module" : "Cine",
         "desc" : "Recommended rate at which the frames of a Multi-frame image should be displayed in frames/second.",
         "name" : "Recommended Display Frame Rate",
         "usage" : "C - Required if pixel data is Multi-frame Cine data",
         "mod_tables" : [
            "table_C.7-13"
         ]
      },
      "(0040,0518)" : {
         "desc" : [
            "Type of container that contains the specimen(s) being imaged.",
            "Zero or one Item shall be included in this sequence."
         ],
         "module" : "Specimen",
         "req" : "2",
         "entity" : "Image",
         "name" : "Container Type Code Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U"
      },
      "(0028,1202)" : {
         "name" : "Green Palette Color Lookup Table Data",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "usage" : "M",
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
         "module" : "Image Pixel",
         "entity" : "Image",
         "req" : "1C"
      },
      "(0018,a001)" : {
         "module" : "SOP Common",
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
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Contributing Equipment Sequence"
      },
      "(0088,0200)[<0>](0028,0034)" : {
         "req" : "1C",
         "entity" : "Image",
         "desc" : [
            "Ratio of the vertical size and horizontal size of the pixels in the image specified by a pair of integer values where the first value is the vertical pixel size, and the second value is the horizontal pixel size. Required if the aspect ratio values do not have a ratio of 1:1 and the physical pixel spacing is not specified by Pixel Spacing (0028,0030), or Imager Pixel Spacing (0018,1164) or Nominal Scanned Pixel Spacing (0018,2010), either for the entire Image or per-frame in a Functional Group Macro. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.3.1.7"
               },
               "el" : "xref"
            },
            "."
         ],
         "module" : "General Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "name" : "Pixel Aspect Ratio"
      },
      "(0012,0062)" : {
         "name" : "Patient Identity Removed",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "module" : "Patient",
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
         "req" : "3",
         "entity" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a124)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "UID",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1C"
      },
      "(0008,2218)" : {
         "entity" : "Image",
         "req" : "3",
         "module" : "X-Ray Image",
         "desc" : [
            "Sequence that identifies the anatomic region of interest in this Instance (i.e., external anatomy, surface anatomy, or general region of the body).",
            "Only a single Item is permitted in this sequence."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-26",
            "table_10-7"
         ],
         "name" : "Anatomic Region Sequence"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0062,000b)" : {
         "req" : "1C",
         "entity" : "Image",
         "module" : "Specimen",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "name" : "Referenced Segment Number",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0088,0200)[<0>](0028,1101)" : {
         "name" : "Red Palette Color Lookup Table Descriptor",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M",
         "module" : "General Image",
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
         "entity" : "Image",
         "req" : "1C"
      },
      "(0020,0200)" : {
         "mod_tables" : [
            "table_C.7-7"
         ],
         "usage" : "U",
         "name" : "Synchronization Frame of Reference UID",
         "module" : "Synchronization",
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
         "entity" : "Frame of Reference",
         "req" : "1"
      },
      "(60xx,1303)" : {
         "mod_tables" : [
            "table_C.9-2"
         ],
         "usage" : "U",
         "name" : "ROI Standard Deviation",
         "desc" : [
            "ROI standard deviation.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.9.2.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "module" : "Overlay Plane",
         "req" : "3",
         "entity" : "Image"
      },
      "(0018,1244)" : {
         "module" : "Cine",
         "desc" : [
            "Describes the preferred playback sequencing for a multi-frame image.",
            {
               "list" : [
                  [
                     "0",
                     "Looping (1,2\u2026n,1,2,\u2026n,1,2,\u2026.n,\u2026)"
                  ],
                  [
                     "1",
                     "Sweeping (1,2,\u2026n,n-1,\u20262,1,2,\u2026n,\u2026)"
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "req" : "3",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-13"
         ],
         "usage" : "C - Required if pixel data is Multi-frame Cine data",
         "name" : "Preferred Playback Sequencing"
      },
      "(0008,1049)[<0>](0008,0080)" : {
         "name" : "Institution Name",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "module" : "General Study",
         "req" : "1C",
         "entity" : "Study"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Specimen Preparation Step Content Item Sequence",
         "entity" : "Image",
         "req" : "1",
         "desc" : [
            "Sequence of Content Items identifying the processes used in one preparation step to prepare the specimen for image acquisition.",
            "One or more Items shall be included in this sequence."
         ],
         "module" : "Specimen"
      },
      "(0018,6000)" : {
         "desc" : [
            "Detector sensitivity in manufacturer specific units.",
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
                                    "This value is intended to provide a single location where manufacturer specific information can be found for annotation on a display or film, that has meaning to a knowledgeable observer."
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
                                    "This value is manufacturer-specific. DICOM specifies standard Attributes in ",
                                    {
                                       "el" : "xref",
                                       "attrs" : {
                                          "xrefstyle" : "select: label",
                                          "linkend" : "table_10-23"
                                       }
                                    },
                                    " 'Exposure Index Macro', which are recommended."
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
         "module" : "DX Detector",
         "req" : "3",
         "entity" : "Image",
         "name" : "Sensitivity",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "usage" : "U"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a120)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "DateTime",
         "entity" : "Image",
         "req" : "1C",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "module" : "Specimen"
      },
      "(0040,0275)[<0>](0008,0050)" : {
         "name" : "Accession Number",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "entity" : "Series",
         "req" : "3",
         "desc" : "An identifier of the Imaging Service Request for this Requested Procedure.",
         "module" : "General Series"
      },
      "(0018,a001)[<0>](0008,1090)" : {
         "entity" : "Image",
         "req" : "3",
         "desc" : "Manufacturer's model name of the equipment that contributed to the composite instance.",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Manufacturer's Model Name"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a161)" : {
         "entity" : "Image",
         "req" : "1C",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "module" : "Specimen",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Floating Point Value"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a043)" : {
         "module" : "Specimen",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Image",
         "req" : "1",
         "name" : "Concept Name Code Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U"
      },
      "(0020,9172)[<0>](0008,1150)" : {
         "entity" : "Image",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID"
      },
      "(0028,6023)" : {
         "module" : "Frame Pointers",
         "desc" : [
            "A Defined Term for each one of the Frame(s) of Interest (0028,6020) that identifies the significance of the frame. If multiple Frames of Interest are selected and this Attribute is used, it shall contain the same number of values as are in Frame Numbers of Interest (0028,6020).",
            {
               "list" : [
                  [
                     "HIGHMI",
                     "a frame acquired at the time of the high power pulse that destroys acoustic contrast"
                  ],
                  [
                     "RWAVE",
                     "the frame closest to the R-Wave"
                  ],
                  [
                     "TRIGGER",
                     "a trigger frame, for example a set delay from the R Wave"
                  ],
                  [
                     "ENDSYSTOLE",
                     "the frame closest to end of systole, at the end of the T-wave"
                  ]
               ],
               "title" : "Defined Terms:",
               "type" : "variablelist"
            }
         ],
         "entity" : "Image",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-15"
         ],
         "usage" : "U",
         "name" : "Frame of Interest Type"
      },
      "(0018,1047)" : {
         "req" : "3",
         "entity" : "Image",
         "desc" : "Duration(s) of injection(s) in seconds. Each Contrast Flow Duration value shall correspond to a value of Contrast Flow Rate (0018,1046).",
         "module" : "Contrast/Bolus",
         "name" : "Contrast Flow Duration",
         "usage" : "C - Required if contrast media was used in this Image",
         "mod_tables" : [
            "table_C.7-12"
         ]
      },
      "(0012,0083)[<0>](0012,0020)" : {
         "module" : "Clinical Trial Study",
         "desc" : [
            "The identifier of the protocol for which consent to distribute has been granted.",
            "Required if Distribution Type (0012,0084) is NAMED_PROTOCOL and the protocol is not that which is specified in Clinical Trial Protocol ID (0012,0020) in the Clinical Trial Subject Module."
         ],
         "req" : "1C",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "usage" : "U",
         "name" : "Clinical Trial Protocol ID"
      },
      "(0028,6100)[<0>](0028,6110)" : {
         "usage" : "C - Required if the Image may be subtracted",
         "mod_tables" : [
            "table_C.7-16"
         ],
         "name" : "Mask Frame Numbers",
         "entity" : "Image",
         "req" : "1C",
         "desc" : "Specifies the frame numbers of the pixel data used to generate this mask. Frames in a Multi-frame Image are specified by sequentially increasing number values beginning with 1. Required if Mask Operation (0028,6101) is AVG_SUB.",
         "module" : "Mask"
      },
      "(0020,000d)" : {
         "desc" : "Unique identifier for the Study.",
         "module" : "General Study",
         "req" : "1",
         "entity" : "Study",
         "name" : "Study Instance UID",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M"
      },
      "(003a,0300)[<0>](003a,0301)" : {
         "name" : "Channel Identification Code",
         "mod_tables" : [
            "table_C.7-13"
         ],
         "usage" : "C - Required if pixel data is Multi-frame Cine data",
         "module" : "Cine",
         "desc" : "A reference to the audio channel as identified within Transfer Syntax encoded bit stream (1 for the main channel, 2 for the second channel and 3 to 9 to the complementary channels).",
         "entity" : "Image",
         "req" : "1"
      },
      "(0040,9096)[<0>](0028,3003)" : {
         "desc" : "Free form text explanation of the meaning of the transformation in this Item.",
         "module" : "General Image",
         "entity" : "Image",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "usage" : "M",
         "name" : "LUT Explanation"
      },
      "(0018,1500)" : {
         "entity" : "Image",
         "req" : "2C",
         "module" : "XA Positioner",
         "desc" : [
            "Used to describe the activity of the imaging devices.",
            {
               "list" : [
                  [
                     "DYNAMIC",
                     null
                  ],
                  [
                     "STATIC",
                     null
                  ]
               ],
               "type" : "variablelist",
               "title" : "Defined Terms:"
            },
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.7.5.1.1",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ],
            "Required if Pixel Data (7FE0,0010) contains more than one frame. May be present otherwise."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-30"
         ],
         "name" : "Positioner Motion"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a123)" : {
         "name" : "Person Name",
         "usage" : "M",
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
         "module" : "General Series"
      },
      "(0088,0200)[<0>](0028,2000)" : {
         "req" : "3",
         "entity" : "Image",
         "module" : "General Image",
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
         "name" : "ICC Profile",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ]
      },
      "(0018,1155)" : {
         "entity" : "Image",
         "req" : "1",
         "module" : "X-Ray Acquisition",
         "desc" : [
            "Identify the general level of X-Ray dose exposure.",
            {
               "list" : [
                  [
                     "SC",
                     "low dose exposure generally corresponding to fluoroscopic settings (e.g., preparation for diagnostic quality image acquisition)"
                  ],
                  [
                     "GR",
                     "high dose for diagnostic quality image acquisition (also called digital spot or cine)"
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-27"
         ],
         "name" : "Radiation Setting"
      },
      "(0018,1040)" : {
         "name" : "Contrast/Bolus Route",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "usage" : "C - Required if contrast media was used in this Image",
         "desc" : "Administration route of contrast agent",
         "module" : "Contrast/Bolus",
         "entity" : "Image",
         "req" : "3"
      },
      "(0012,0042)" : {
         "name" : "Clinical Trial Subject Reading ID",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U",
         "module" : "Clinical Trial Subject",
         "desc" : [
            "Identifies the subject for blinded evaluations. Shall be present if Clinical Trial Subject ID (0012,0040) is absent. May be present otherwise. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.1.3.1.7",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "req" : "1C",
         "entity" : "Patient"
      },
      "(0040,9096)[<0>](0040,9210)" : {
         "entity" : "Image",
         "req" : "1",
         "desc" : "Label that is used to identify the transformation of this Item.",
         "module" : "General Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "name" : "LUT Label"
      },
      "(0008,0008)" : [
         {
            "name" : "Image Type",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "req" : "3",
            "entity" : "Image",
            "module" : "General Image",
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
            "mod_tables" : [
               "table_C.8-26"
            ],
            "usage" : "M",
            "desc" : [
               "Image identification characteristics.",
               [
                  "See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "linkend" : "sect_C.8.7.1.1.1",
                        "xrefstyle" : "select: label"
                     }
                  },
                  " for specialization."
               ]
            ],
            "module" : "X-Ray Image",
            "req" : "1",
            "entity" : "Image"
         }
      ],
      "(0050,0010)[<0>](0050,0017)" : {
         "mod_tables" : [
            "table_C.7-18"
         ],
         "usage" : "U",
         "name" : "Device Diameter Units",
         "module" : "Device",
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
         "entity" : "Image",
         "req" : "2C"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a163)" : {
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "module" : "Specimen",
         "req" : "1C",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "name" : "Rational Denominator Value"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a161)" : {
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "module" : "General Series",
         "req" : "1C",
         "entity" : "Series",
         "name" : "Floating Point Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0018,1520)" : {
         "mod_tables" : [
            "table_C.8-30"
         ],
         "usage" : "M",
         "name" : "Positioner Primary Angle Increment",
         "module" : "XA Positioner",
         "desc" : [
            "Incremental change in primary positioner angle for each frame.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.7.5.1.3",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ],
            "Required if Positioner Motion (0018,1500) equals DYNAMIC."
         ],
         "entity" : "Image",
         "req" : "2C"
      },
      "(0008,1200)" : {
         "entity" : "Image",
         "req" : "1C",
         "desc" : [
            "Sequence of items each identifying a Study other than the Study of which this Instance is a part, which Studies contain Instances that are referenced elsewhere in this Instance.",
            "One or more Items shall be included in this sequence.",
            "Required if this Instance references Instances in other Studies."
         ],
         "module" : "Common Instance Reference",
         "name" : "Studies Containing Other Referenced Instances Sequence",
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8"
         ]
      },
      "(0008,2112)[<0>](0062,000b)" : {
         "module" : "General Image",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "entity" : "Image",
         "req" : "1C",
         "name" : "Referenced Segment Number",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3"
         ],
         "usage" : "M"
      },
      "(0018,7000)" : {
         "desc" : [
            "Whether or not the detector is operating within normal tolerances during this image acquisition.",
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
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "This flag is intended to indicate whether or not there may have been some compromise of the diagnostic quality of the image due to some condition such as over-temperature, etc."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "module" : "DX Detector",
         "req" : "3",
         "entity" : "Image",
         "name" : "Detector Conditions Nominal Flag",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "usage" : "U"
      },
      "(0018,1066)" : {
         "desc" : "Time (in msec) from Content Time (0008,0033) to the start of the first frame in a Multi-frame image.",
         "module" : "Cine",
         "entity" : "Image",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-13"
         ],
         "usage" : "C - Required if pixel data is Multi-frame Cine data",
         "name" : "Frame Delay"
      },
      "(0018,0036)[<0>](0018,0029)" : {
         "entity" : "Image",
         "req" : "3",
         "desc" : [
            "Sequence that identifies the interventional drug.",
            "Only a single item is permitted in this Sequence."
         ],
         "module" : "Intervention",
         "name" : "Intervention Drug Code Sequence",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-19"
         ]
      },
      "(60xx,0050)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "name" : "Overlay Origin",
         "req" : "1",
         "entity" : "Image",
         "module" : "Overlay Plane",
         "desc" : [
            "Location of first overlay point with respect to pixels in the image, given as row\\column.",
            "The upper left pixel of the image has the coordinate 1\\1.",
            "Column values greater than 1 indicate the overlay plane origin is to the right of the image origin. Row values greater than 1 indicate the overlay plane origin is below the image origin. Values less than 1 indicate the overlay plane origin is above or to the left of the image origin.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "content" : [
                        "Values of 0\\0 indicate that the overlay pixels start 1 row above and one column to the left of the image pixels."
                     ]
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ]
      },
      "(0008,1110)[<0>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "usage" : "M",
         "module" : "General Study",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Study",
         "req" : "1"
      },
      "(0010,1030)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Patient's Weight",
         "entity" : "Study",
         "req" : "3",
         "desc" : "Weight of the Patient, in kilograms.",
         "module" : "Patient Study"
      },
      "(0028,1052)" : {
         "desc" : [
            "The value b in relationship between stored values (SV) and the output units specified in Rescale Type (0028,1054).",
            "Output units = m*SV + b.",
            "Required if Modality LUT Sequence (0028,3000) is not present. Shall not be present otherwise."
         ],
         "module" : "Modality LUT",
         "req" : "1C",
         "entity" : "Image",
         "name" : "Rescale Intercept",
         "mod_tables" : [
            "table_C.11-1b"
         ],
         "usage" : "C - Required if Pixel Intensity Relationship (0028,1040) is LOGU - Optional if Pixel Intensity Relationship (0028,1040) is DISP"
      },
      "(0012,0081)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "name" : "Clinical Trial Protocol Ethics Committee Name",
         "entity" : "Patient",
         "req" : "1C",
         "module" : "Clinical Trial Subject",
         "desc" : "Name of the Ethics Committee or Institutional Review Board (IRB) responsible for approval of the Clinical Trial. Required if Clinical Trial Protocol Ethics Committee Approval Number (0012,0082) is present."
      },
      "(0050,0010)[<0>](0050,0020)" : {
         "module" : "Device",
         "desc" : "Further description in free form text describing the device.",
         "req" : "3",
         "entity" : "Image",
         "name" : "Device Description",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "usage" : "U"
      },
      "(0018,1030)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Protocol Name",
         "entity" : "Series",
         "req" : "3",
         "module" : "General Series",
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
         ]
      },
      "(0088,0200)[<0>](0028,1201)" : {
         "name" : "Red Palette Color Lookup Table Data",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "entity" : "Image",
         "req" : "1C",
         "module" : "General Image",
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
         ]
      },
      "(0008,1052)[<0>](0008,0081)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Institution Address",
         "module" : "General Series",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "entity" : "Series",
         "req" : "3"
      },
      "(0028,0109)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "name" : "Largest Pixel Value in Series",
         "desc" : "The maximum value of all images in this Series.",
         "module" : "General Series",
         "entity" : "Series",
         "req" : "3"
      },
      "(fffa,fffa)[<0>](0400,0115)" : {
         "entity" : "Image",
         "req" : "1",
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
                     "attrs" : {
                        "numeration" : "arabic"
                     },
                     "content" : [
                        "\n                        ",
                        {
                           "content" : [
                              "\n                          ",
                              {
                                 "el" : "para",
                                 "content" : [
                                    "As technology advances, additional encryption algorithms may be allowed in future versions. Implementations should take this possibility into account."
                                 ]
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
                                 "content" : [
                                    "When symmetric encryption is used, the certificate merely identifies which key was used by which entity, but not the actual key itself. Some other means (e.g., a trusted third party) must be used to obtain the key."
                                 ],
                                 "el" : "para"
                              },
                              "\n                        "
                           ]
                        },
                        "\n                      "
                     ],
                     "el" : "orderedlist"
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Certificate of Signer"
      },
      "(0008,1250)[<0>](0020,000e)" : {
         "desc" : "Instance UID of Related Series",
         "module" : "General Series",
         "req" : "1",
         "entity" : "Series",
         "name" : "Series Instance UID",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M"
      },
      "(0028,2000)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "name" : "ICC Profile",
         "entity" : "Image",
         "req" : "3",
         "module" : "Image Pixel",
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
         ]
      },
      "(0018,1720)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-28b"
         ],
         "name" : "Vertices of the Polygonal Collimator",
         "entity" : "Image",
         "req" : "1C",
         "desc" : [
            "Required if a value of Collimator Shape (0018,1700) is POLYGONAL.",
            "Multiple Values where the first set of two values are:",
            "row of the origin vertex;",
            "column of the origin vertex.",
            "Two or more pairs of values follow and are the row and column coordinates of the other vertices of the polygon collimator. Polygon collimators are implicitly closed from the last vertex to the origin vertex and all edges shall be non-intersecting except at the vertices."
         ],
         "module" : "X-Ray Collimator"
      },
      "(0008,103f)" : {
         "desc" : [
            "A coded description of the Series.",
            "Only a single Item is permitted in this sequence."
         ],
         "module" : "General Series",
         "entity" : "Series",
         "req" : "3",
         "name" : "Series Description Code Sequence",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M"
      },
      "(0018,1050)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Spatial Resolution",
         "entity" : "Equipment",
         "req" : "3",
         "module" : "General Equipment",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center."
      },
      "(0040,9096)[<0>](0040,9211)" : {
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
         ],
         "module" : "General Image",
         "req" : "1",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "usage" : "M",
         "name" : "Real World Value Last Value Mapped"
      },
      "(0010,0024)[<0>](0040,0039)" : {
         "module" : "Patient",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "name" : "Assigning Jurisdiction Code Sequence"
      },
      "(0040,0280)" : {
         "entity" : "Series",
         "req" : "3",
         "desc" : "User-defined comments on the Performed Procedure Step.",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "name" : "Comments on the Performed Procedure Step"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a123)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Person Name",
         "req" : "1C",
         "entity" : "Image",
         "module" : "Specimen",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ]
      },
      "(0040,051a)" : {
         "entity" : "Image",
         "req" : "3",
         "desc" : "Description of the container.",
         "module" : "Specimen",
         "name" : "Container Description",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      "(0018,1161)" : {
         "desc" : "Type of filter(s) inserted into the X-Ray beam (e.g., wedges).",
         "module" : "X-Ray Acquisition",
         "req" : "3",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-27"
         ],
         "usage" : "M",
         "name" : "Type of Filters"
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1155)" : {
         "req" : "1",
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "General Series",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-11"
         ]
      },
      "(0018,0012)" : {
         "desc" : [
            "Sequence that identifies the contrast agent.",
            "One or more Items are permitted in this sequence."
         ],
         "module" : "Contrast/Bolus",
         "req" : "3",
         "entity" : "Image",
         "name" : "Contrast/Bolus Agent Sequence",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "usage" : "C - Required if contrast media was used in this Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,08ea)" : {
         "name" : "Measurement Units Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "module" : "General Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)" : {
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Referenced SOP Sequence"
      },
      "(0008,2228)[<0>](0008,2230)" : {
         "mod_tables" : [
            "table_C.8-26",
            "table_10-7",
            "table_10-8"
         ],
         "usage" : "M",
         "name" : "Primary Anatomic Structure Modifier Sequence",
         "desc" : [
            "Sequence of Items that modifies the primary anatomic structure of interest in this Instance.",
            "One or more Items are permitted in this sequence."
         ],
         "module" : "X-Ray Image",
         "req" : "3",
         "entity" : "Image"
      },
      "(0008,0051)" : {
         "req" : "3",
         "entity" : "Study",
         "module" : "General Study",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this sequence."
         ],
         "name" : "Issuer of Accession Number Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0012,0040)" : {
         "req" : "1C",
         "entity" : "Patient",
         "module" : "Clinical Trial Subject",
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
         "name" : "Clinical Trial Subject ID",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-2b"
         ]
      },
      "(0008,2112)[<0>](0008,1150)" : {
         "req" : "1",
         "entity" : "Image",
         "module" : "General Image",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID"
      },
      "(0018,1803)" : {
         "module" : "Synchronization",
         "desc" : [
            "IP Address of NTP, SNTP, or PTP time source. IPv4 addresses shall be in dotted decimal (e.g., 192.168.1.1). The IPv6 addresses shall be in colon separated hexadecimal (e.g., 12:34:56:78:9a:bc:de:f0).",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "Identity of this value in two instances acquired contemporaneously implies a common time base. The NTP Source Address might not persist over time."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "req" : "3",
         "entity" : "Frame of Reference",
         "name" : "NTP Source Address",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "usage" : "U"
      },
      "(0050,0010)[<0>](0050,0016)" : {
         "name" : "Device Diameter",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "usage" : "U",
         "module" : "Device",
         "desc" : [
            "Unit diameter of device. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.6.12.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "req" : "3",
         "entity" : "Image"
      },
      "(0008,0110)[<0>](0008,0115)" : {
         "name" : "Coding Scheme Name",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : "The coding scheme full common name",
         "entity" : "Image",
         "req" : "3"
      },
      "(0008,1115)[<0>](0020,000e)" : {
         "entity" : "Image",
         "req" : "1",
         "module" : "Common Instance Reference",
         "desc" : "Unique identifier of the Series containing the referenced Instances.",
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "name" : "Series Instance UID"
      },
      "(0008,1200)[<0>](0020,000d)" : {
         "entity" : "Image",
         "req" : "1",
         "module" : "Common Instance Reference",
         "desc" : "Unique identifier of the Study containing the referenced Instances.",
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "name" : "Study Instance UID"
      },
      "(0028,6040)" : {
         "desc" : "Marks the location(s) of the R Wave in the cardiac cycles by referencing frame numbers; frame numbers begin with 1.",
         "module" : "X-Ray Image",
         "req" : "3",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-26"
         ],
         "usage" : "M",
         "name" : "R Wave Pointer"
      },
      "(0008,1140)[<0>](0062,000b)" : [
         {
            "mod_tables" : [
               "table_C.7-9",
               "table_10-3"
            ],
            "usage" : "M",
            "name" : "Referenced Segment Number",
            "module" : "General Image",
            "desc" : [
               "Identifies the Segment Number to which the reference applies.",
               "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
            ],
            "entity" : "Image",
            "req" : "1C"
         },
         {
            "name" : "Referenced Segment Number",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-26",
               "table_10-3"
            ],
            "req" : "1C",
            "entity" : "Image",
            "module" : "X-Ray Image",
            "desc" : [
               "Identifies the Segment Number to which the reference applies.",
               "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
            ]
         }
      ],
      "(0018,1413)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-71b",
            "table_10-23"
         ],
         "name" : "Deviation Index",
         "entity" : "Image",
         "req" : "3",
         "module" : "DX Detector",
         "desc" : "A scaled representation of the difference of the Exposure Index compared to the Target Exposure Index as defined in IEC 62494-1 and the report of AAPM TG 116."
      },
      "(0018,1200)" : {
         "name" : "Date of Last Calibration",
         "mod_tables" : [
            "table_C.7-8"
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
         "module" : "General Equipment",
         "req" : "3",
         "entity" : "Equipment"
      },
      "(0040,0520)[<0>](0050,001e)" : {
         "entity" : "Image",
         "req" : "3",
         "module" : "Specimen",
         "desc" : "Container component text description.",
         "name" : "Container Component Description",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      "(0028,3010)[<0>](0028,3002)" : {
         "name" : "LUT Descriptor",
         "usage" : "U",
         "mod_tables" : [
            "table_C.11-2b"
         ],
         "entity" : "Image",
         "req" : "1",
         "desc" : [
            "Specifies the format of the LUT Data in this Sequence.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.11.2.1.1",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ]
         ],
         "module" : "VOI LUT"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0032)" : {
         "module" : "Patient",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M",
         "name" : "Universal Entity ID"
      },
      "(0010,2294)[<0>](0010,2296)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Breed Registry Code Sequence",
         "req" : "1",
         "entity" : "Patient",
         "module" : "Patient",
         "desc" : [
            "Identification of the organization with which an animal is registered.",
            "Only a single Item shall be included in this sequence."
         ]
      },
      "(0018,1008)" : {
         "req" : "3",
         "entity" : "Equipment",
         "module" : "General Equipment",
         "desc" : "Identifier of the gantry or positioner.",
         "name" : "Gantry ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ]
      },
      "(0008,2112)[<0>](0008,1160)" : {
         "req" : "1C",
         "entity" : "Image",
         "module" : "General Image",
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
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3"
         ],
         "name" : "Referenced Frame Number"
      },
      "(0018,a001)[<0>](0018,a003)" : {
         "name" : "Contribution Description",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "entity" : "Image",
         "desc" : "Description of the contribution the equipment made to the composite instance.",
         "module" : "SOP Common"
      },
      "(0018,1162)" : {
         "req" : "3",
         "entity" : "Image",
         "module" : "X-Ray Acquisition",
         "desc" : "Diameter of X-Ray intensifier in mm",
         "name" : "Intensifier Size",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-27"
         ]
      },
      "(0010,0032)" : {
         "module" : "Patient",
         "desc" : "Birth time of the Patient.",
         "req" : "3",
         "entity" : "Patient",
         "name" : "Patient's Birth Time",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(0008,2112)[<0>](0028,135a)" : {
         "name" : "Spatial Locations Preserved",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M",
         "module" : "General Image",
         "desc" : [
            "The extent to which the spatial locations of all pixels are preserved during the processing of the source image that resulted in the current image",
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
                  ],
                  [
                     "REORIENTED_ONLY",
                     "A projection radiograph that has been flipped, and/or rotated by a multiple of 90 degrees"
                  ]
               ]
            },
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
                                    "This applies not only to images with a known relationship to a 3D space, but also to projection images. For example, a projection radiograph such as a mammogram that is processed by a point image processing operation such as contrast enhancement, or a smoothing or edge enhancing convolution, would have a value of YES for this attribute. A projection radiograph that had been magnified or warped geometrically would have a value of NO for this attribute. A projection radiograph that has been flipped, and/or rotated by a multiple of 90 degrees, such that transformation of pixel locations is possible by comparison of the values of Patient Orientation (0020,0020) would have a value of REORIENTED_ONLY. This attribute is typically of importance in relating images with Presentation Intent Type (0008,0068) values of FOR PROCESSING and FOR PRESENTATION."
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
                                    "When the value of this attribute is NO, it is not possible to locate on the current image any pixel coordinates that are referenced relative to the source image, such as for example, might be required for rendering CAD findings derived from a referenced FOR PROCESSING image on the current FOR PRESENTATION image."
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
         "entity" : "Image",
         "req" : "3"
      },
      "(0018,1114)" : {
         "name" : "Estimated Radiographic Magnification Factor",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-30"
         ],
         "entity" : "Image",
         "req" : "3",
         "desc" : "Ratio of Source Image Receptor Distance (SID) over Source Object Distance (SOD).",
         "module" : "XA Positioner"
      },
      "(0040,0513)[<0>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "usage" : "U",
         "module" : "Specimen",
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
         "entity" : "Image",
         "req" : "1C"
      },
      "(0028,0010)" : {
         "name" : "Rows",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "usage" : "M",
         "module" : "Image Pixel",
         "desc" : "Number of rows in the image.",
         "req" : "1",
         "entity" : "Image"
      },
      "(60xx,0100)" : {
         "entity" : "Image",
         "req" : "1",
         "desc" : [
            "Number of Bits Allocated in the Overlay.",
            "The value of this Attribute shall be 1.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "content" : [
                        "Formerly the standard described embedding the overlay data in the Image Pixel Data (7FE0,0010), in which case the value of this Attribute was required to be the same as Bits Allocated (0028,0100). This usage has been retired. See PS3.3-2004."
                     ]
                  },
                  "\n                "
               ]
            }
         ],
         "module" : "Overlay Plane",
         "name" : "Overlay Bits Allocated",
         "usage" : "U",
         "mod_tables" : [
            "table_C.9-2"
         ]
      },
      "(0028,0004)" : [
         {
            "entity" : "Image",
            "req" : "1",
            "module" : "Image Pixel",
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
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-26"
            ],
            "name" : "Photometric Interpretation",
            "entity" : "Image",
            "req" : "1",
            "desc" : "Specifies the intended interpretation of the pixel data. Only MONOCHROME2 may be used.",
            "module" : "X-Ray Image"
         }
      ],
      "(fffa,fffa)" : {
         "desc" : [
            "Sequence holding Digital Signatures.",
            "One or more items are permitted in this sequence."
         ],
         "module" : "SOP Common",
         "req" : "3",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "name" : "Digital Signatures Sequence"
      },
      "(0018,1061)" : {
         "name" : "Trigger Source or Type",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "usage" : "U",
         "module" : "Synchronization",
         "desc" : "Specifies equipment ID of trigger source and/or type of trigger",
         "entity" : "Frame of Reference",
         "req" : "3"
      },
      "(60xx,1302)" : {
         "name" : "ROI Mean",
         "usage" : "U",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "entity" : "Image",
         "req" : "3",
         "module" : "Overlay Plane",
         "desc" : [
            "ROI Mean.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.9.2.1.2",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ]
         ]
      },
      "(0008,0096)[<0>](0040,1101)" : {
         "name" : "Person Identification Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "1",
         "entity" : "Study",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "General Study"
      },
      "(0018,0036)[<0>](0054,0302)" : {
         "req" : "3",
         "entity" : "Image",
         "desc" : [
            "Sequence that identifies the Administration Route.",
            "Only a single Item is permitted in this sequence."
         ],
         "module" : "Intervention",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-19"
         ],
         "name" : "Administration Route Code Sequence"
      },
      "(0008,2228)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-26",
            "table_10-7",
            "table_10-8"
         ],
         "name" : "Primary Anatomic Structure Sequence",
         "req" : "3",
         "entity" : "Image",
         "desc" : [
            "Sequence of Items that identifies the primary anatomic structure(s) of interest in this Instance.",
            "One or more Items are permitted in this sequence."
         ],
         "module" : "X-Ray Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Referenced SOP Sequence",
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "module" : "General Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a162)" : {
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1C",
         "name" : "Rational Numerator Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0040,0520)[<0>](0008,0070)" : {
         "module" : "Specimen",
         "desc" : "Manufacturer of the container component.",
         "req" : "3",
         "entity" : "Image",
         "name" : "Manufacturer",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "entity" : "Patient",
         "req" : "1C",
         "module" : "Patient",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise."
      },
      "(0012,0020)" : {
         "module" : "Clinical Trial Subject",
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
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U",
         "name" : "Clinical Trial Protocol ID"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a120)" : {
         "module" : "Specimen",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "entity" : "Image",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "name" : "DateTime"
      },
      "(0018,1201)" : {
         "module" : "General Equipment",
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
         "req" : "3",
         "entity" : "Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "name" : "Time of Last Calibration"
      },
      "(0028,1201)" : {
         "req" : "1C",
         "entity" : "Image",
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
         "module" : "Image Pixel",
         "name" : "Red Palette Color Lookup Table Data",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-11b"
         ]
      },
      "(0028,6100)[<0>](0028,6102)" : {
         "desc" : [
            [
               "Each pair of numbers in this multi-valued attribute specify a beginning and ending frame number inclusive of a range where this particular mask operation is valid. Discontinuous ranges are represented by multiple pairs of numbers. Frames in a Multi-frame Image are specified by sequentially increasing number values beginning with 1. If this Attribute is missing in this particular sequence item, then the mask operation is applicable throughout the entire Multi-frame Image, subject to certain limits as described in ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.6.10.1.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Required if Mask Operation (0028,6101) equals REV_TID. May be present otherwise."
         ],
         "module" : "Mask",
         "entity" : "Image",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-16"
         ],
         "usage" : "C - Required if the Image may be subtracted",
         "name" : "Applicable Frame Range"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1150)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "entity" : "Series",
         "req" : "1",
         "module" : "General Series",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0018,1620)" : {
         "mod_tables" : [
            "table_C.7-17a"
         ],
         "usage" : "U",
         "name" : "Vertices of the Polygonal Shutter",
         "module" : "Display Shutter",
         "desc" : [
            "Required if Shutter Shape (0018,1600) is POLYGONAL.",
            "Multiple Values where the first set of two values are:",
            "row of the origin vertexcolumn of the origin vertex",
            "Two or more pairs of values follow and are the row and column coordinates of the other vertices of the polygon shutter. Polygon shutters are implicitly closed from the last vertex to the origin vertex and all edges shall be non-intersecting except at the vertices."
         ],
         "entity" : "Image",
         "req" : "1C"
      },
      "(fffa,fffa)[<0>](0400,0105)" : {
         "module" : "SOP Common",
         "desc" : [
            "The date and time the Digital Signature was created. The time shall include an offset (i.e., time zone indication) from Coordinated Universal Time.",
            {
               "el" : "note",
               "content" : [
                  "\n                      ",
                  {
                     "content" : [
                        "This is not a certified timestamp, and hence is not completely verifiable. An application can compare this date and time with those of other signatures and the validity date of the certificate to gain confidence in the veracity of this date and time."
                     ],
                     "el" : "para"
                  },
                  "\n                    "
               ]
            }
         ],
         "entity" : "Image",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "name" : "Digital Signature DateTime"
      },
      "(0028,1101)" : {
         "req" : "1C",
         "entity" : "Image",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "name" : "Red Palette Color Lookup Table Descriptor"
      },
      "(0010,2294)[<0>](0010,2295)" : {
         "entity" : "Patient",
         "req" : "1",
         "desc" : "Identification number of an animal within the registry.",
         "module" : "Patient",
         "name" : "Breed Registration Number",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(4ffe,0001)[<0>](0400,0020)" : {
         "req" : "1",
         "entity" : "Image",
         "module" : "SOP Common",
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
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Data Elements Signed"
      },
      "(0028,6100)[<0>](0028,9416)" : {
         "module" : "Mask",
         "desc" : [
            "Identification of the Subtraction Item used to associate a certain Mask Sub-Pixel Shift (0028,6114) in the Frame Pixel Shift Functional Group.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.16.2.14.1",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ],
            "Required if SOP Class UID (0008,0016) equals \"1.2.840.10008.5.1.4.1.1.12.1.1\" or \"1.2.840.10008.5.1.4.1.1.12.2.1\". May be present otherwise."
         ],
         "req" : "1C",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-16"
         ],
         "usage" : "C - Required if the Image may be subtracted",
         "name" : "Subtraction Item ID"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a122)" : {
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1C",
         "name" : "Time",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0020,000d)" : {
         "module" : "General Series",
         "desc" : "The unique identifier for the Study provided for this Requested Procedure.",
         "req" : "3",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M",
         "name" : "Study Instance UID"
      },
      "(0018,1612)" : {
         "module" : "Display Shutter",
         "desc" : "Required if Shutter Shape (0018,1600) is CIRCULAR. Radius of the circular shutter with respect to pixels in the image given as a number of pixels along the row direction.",
         "entity" : "Image",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-17a"
         ],
         "usage" : "U",
         "name" : "Radius of Circular Shutter"
      },
      "(0008,1072)[<0>](0008,0080)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Institution Name",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1C"
      },
      "(0008,0053)" : {
         "entity" : "Image",
         "req" : "1C",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Query/Retrieve View"
      },
      "(0028,3010)[<0>](0028,3003)" : {
         "name" : "LUT Explanation",
         "mod_tables" : [
            "table_C.11-2b"
         ],
         "usage" : "U",
         "module" : "VOI LUT",
         "desc" : "Free form text explanation of the meaning of the LUT.",
         "entity" : "Image",
         "req" : "3"
      },
      "(0008,1140)[<0>](0008,1155)" : [
         {
            "req" : "1",
            "entity" : "Image",
            "module" : "General Image",
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "name" : "Referenced SOP Instance UID",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-9",
               "table_10-3",
               "table_10-11"
            ]
         },
         {
            "req" : "1",
            "entity" : "Image",
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "module" : "X-Ray Image",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-26",
               "table_10-3",
               "table_10-11"
            ],
            "name" : "Referenced SOP Instance UID"
         }
      ],
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1155)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "module" : "General Series",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Series",
         "req" : "1"
      },
      "(4ffe,0001)[<0>](0400,0010)" : {
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
         "module" : "SOP Common",
         "req" : "1",
         "entity" : "Image",
         "name" : "MAC Calculation Transfer Syntax UID",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0035)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Identifier Type Code",
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
         "module" : "Patient"
      },
      "(0008,1062)[<0>](0008,0082)" : {
         "module" : "General Study",
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
         ],
         "usage" : "M"
      },
      "(0018,1802)" : {
         "desc" : [
            "Method of time distribution used to synchronize this equipment.",
            {
               "type" : "variablelist",
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
               ]
            }
         ],
         "module" : "Synchronization",
         "entity" : "Frame of Reference",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "usage" : "U",
         "name" : "Time Distribution Protocol"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "req" : "1C",
         "entity" : "Patient",
         "module" : "Patient",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ]
      },
      "(0040,0560)[<0>](0040,0562)[<1>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "usage" : "U",
         "module" : "Specimen",
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
         "entity" : "Image",
         "req" : "1C"
      },
      "(0008,1090)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Manufacturer's Model Name",
         "req" : "3",
         "entity" : "Equipment",
         "desc" : "Manufacturer's model name of the equipment that produced the composite instances.",
         "module" : "General Equipment"
      },
      "(0018,1110)" : {
         "desc" : [
            "Distance in mm from source to detector center.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "This value is traditionally referred to as Source Image Receptor Distance (SID)."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "module" : "XA Positioner",
         "req" : "3",
         "entity" : "Image",
         "name" : "Distance Source to Detector",
         "mod_tables" : [
            "table_C.8-30"
         ],
         "usage" : "M"
      },
      "(0018,1800)" : {
         "name" : "Acquisition Time Synchronized",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "entity" : "Frame of Reference",
         "req" : "1",
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
         "module" : "Synchronization"
      },
      "(0018,0036)[<0>](0018,0035)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-19"
         ],
         "name" : "Intervention Drug Start Time",
         "req" : "3",
         "entity" : "Image",
         "module" : "Intervention",
         "desc" : "Time of administration of the interventional drug."
      },
      "(0018,1166)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-27"
         ],
         "name" : "Grid",
         "entity" : "Image",
         "req" : "3",
         "module" : "X-Ray Acquisition",
         "desc" : [
            "Identify the grid. Only a single value shall be present.",
            {
               "list" : [
                  [
                     "IN",
                     "A Grid is positioned;"
                  ],
                  [
                     "NONE",
                     "No Grid is used."
                  ]
               ],
               "title" : "Defined Terms:",
               "type" : "variablelist"
            }
         ]
      },
      "(0400,0500)[<0>](0400,0520)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Encrypted Content",
         "entity" : "Image",
         "req" : "1",
         "module" : "SOP Common",
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
         ]
      },
      "(0040,0560)" : {
         "name" : "Specimen Description Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U",
         "desc" : [
            "Sequence of identifiers and detailed description of the specimen(s) being imaged.",
            "One or more Items shall be included in this sequence.",
            "Each specimen imaged in the Pixel Data shall be identified by an Item in this Sequence. Other specimens in/on the container, but not imaged in the Pixel Data, may also be identified by Items in this Sequence."
         ],
         "module" : "Specimen",
         "entity" : "Image",
         "req" : "1"
      },
      "(0040,9096)[<0>](0040,9224)" : {
         "name" : "Real World Value Intercept",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "usage" : "M",
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
         "module" : "General Image",
         "entity" : "Image",
         "req" : "1C"
      },
      "(0008,1049)" : {
         "desc" : [
            "Identification of the physician(s) who are responsible for overall patient care at time of Study.",
            "One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Physician(s) of Record (0008,1048), if present."
         ],
         "module" : "General Study",
         "entity" : "Study",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "name" : "Physician(s) of Record Identification Sequence"
      },
      "(0008,1049)[<0>](0040,1103)" : {
         "name" : "Person's Telephone Numbers",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "desc" : "Person's telephone number(s)",
         "module" : "General Study",
         "req" : "3",
         "entity" : "Study"
      },
      "(0018,1801)" : {
         "desc" : "ID of equipment or system providing time reference",
         "module" : "Synchronization",
         "entity" : "Frame of Reference",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "usage" : "U",
         "name" : "Time Source"
      },
      "(0020,9172)[<0>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "entity" : "Image"
      },
      "(0020,0011)" : {
         "req" : "2",
         "entity" : "Series",
         "desc" : "A number that identifies this Series.",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Series Number"
      },
      "(0008,0015)" : {
         "desc" : [
            "Date and time that the SOP Instance was last coerced by a Storage SCP (see ",
            {
               "attrs" : {
                  "xrefstyle" : "select: labelnumber",
                  "targetptr" : "PS3.4",
                  "targetdoc" : "PS3.4"
               },
               "el" : "olink"
            },
            ")."
         ],
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "3",
         "name" : "Instance Coercion DateTime",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0088,0200)[<0>](0028,1103)" : {
         "name" : "Blue Palette Color Lookup Table Descriptor",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M",
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
         "module" : "General Image",
         "entity" : "Image",
         "req" : "1C"
      },
      "(0008,1250)[<0>](0040,a170)" : {
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "Zero or more Items shall be included in this sequence.",
            "When absent, implies that the reason for the reference is unknown."
         ],
         "module" : "General Series",
         "entity" : "Series",
         "req" : "2",
         "name" : "Purpose of Reference Code Sequence",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M"
      },
      "(0018,1154)" : {
         "name" : "Average Pulse Width",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-27"
         ],
         "req" : "3",
         "entity" : "Image",
         "desc" : "Average width of X-Ray pulse in msec.",
         "module" : "X-Ray Acquisition"
      },
      "(0018,0060)" : {
         "entity" : "Image",
         "req" : "2",
         "module" : "X-Ray Acquisition",
         "desc" : "Peak kilo voltage output of the X-Ray generator used.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-27"
         ],
         "name" : "KVP"
      },
      "(0028,2114)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "name" : "Lossy Image Compression Method",
         "entity" : "Image",
         "req" : "3",
         "module" : "General Image",
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
            }
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0081)" : {
         "name" : "Institution Address",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "entity" : "Image",
         "req" : "3",
         "module" : "SOP Common",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable."
      },
      "(0028,0011)" : {
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "usage" : "M",
         "name" : "Columns",
         "desc" : "Number of columns in the image",
         "module" : "Image Pixel",
         "req" : "1",
         "entity" : "Image"
      },
      "(0028,2110)" : [
         {
            "req" : "3",
            "entity" : "Image",
            "desc" : [
               "Specifies whether an Image has undergone lossy compression (at a point in its lifetime).",
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
            "module" : "General Image",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "name" : "Lossy Image Compression"
         },
         {
            "mod_tables" : [
               "table_C.8-26"
            ],
            "usage" : "M",
            "name" : "Lossy Image Compression",
            "module" : "X-Ray Image",
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
                        "linkend" : "sect_C.7.6.1.1.5",
                        "xrefstyle" : "select: label"
                     }
                  }
               ],
               "Required if Lossy Compression has been performed on the Image. May be present otherwise."
            ],
            "entity" : "Image",
            "req" : "1C"
         }
      ],
      "(0008,2112)" : {
         "name" : "Source Image Sequence",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M",
         "module" : "General Image",
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
         ],
         "req" : "3",
         "entity" : "Image"
      },
      "(0028,0300)" : {
         "name" : "Quality Control Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "entity" : "Image",
         "req" : "3",
         "desc" : [
            "Indicates whether or not this image is a quality control or phantom image.",
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
         "module" : "General Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a121)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Date",
         "module" : "General Series",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "req" : "1C",
         "entity" : "Series"
      },
      "(0018,1602)" : {
         "name" : "Shutter Left Vertical Edge",
         "mod_tables" : [
            "table_C.7-17a"
         ],
         "usage" : "U",
         "desc" : "Required if Shutter Shape (0018,1600) is RECTANGULAR. Location of the left edge of the rectangular shutter with respect to pixels in the image given as column.",
         "module" : "Display Shutter",
         "req" : "1C",
         "entity" : "Image"
      },
      "(0008,0018)" : {
         "req" : "1",
         "entity" : "Image",
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
                  "targetdoc" : "PS3.4",
                  "targetptr" : "PS3.4",
                  "xrefstyle" : "select: labelnumber"
               },
               "el" : "olink"
            },
            "."
         ],
         "module" : "SOP Common",
         "name" : "SOP Instance UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0010,1002)[<0>](0010,0020)" : {
         "module" : "Patient",
         "desc" : "An identification number or code used to identify the patient.",
         "entity" : "Patient",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "Patient ID"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ],
         "usage" : "U",
         "module" : "Common Instance Reference",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "entity" : "Image"
      },
      "(0040,0513)[<0>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "usage" : "U",
         "module" : "Specimen",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C",
         "entity" : "Image"
      },
      "(0040,0513)[<0>](0040,0032)" : {
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "module" : "Specimen",
         "req" : "1C",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "usage" : "U",
         "name" : "Universal Entity ID"
      },
      "(0088,0200)[<0>](0028,1203)" : {
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
         "module" : "General Image",
         "req" : "1C",
         "entity" : "Image",
         "name" : "Blue Palette Color Lookup Table Data",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M"
      },
      "(0028,1053)" : {
         "name" : "Rescale Slope",
         "usage" : "C - Required if Pixel Intensity Relationship (0028,1040) is LOGU - Optional if Pixel Intensity Relationship (0028,1040) is DISP",
         "mod_tables" : [
            "table_C.11-1b"
         ],
         "entity" : "Image",
         "req" : "1C",
         "desc" : [
            "m in the equation specified by Rescale Intercept (0028,1052).",
            "Required if Rescale Intercept is present."
         ],
         "module" : "Modality LUT"
      },
      "(0050,0010)" : {
         "entity" : "Image",
         "req" : "1",
         "desc" : [
            "A sequence of items describing devices used that may be visible in the image.",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "Device",
         "name" : "Device Sequence",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-18"
         ]
      },
      "(0040,9096)[<0>](0040,08ea)" : {
         "name" : "Measurement Units Code Sequence",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "usage" : "M",
         "module" : "General Image",
         "desc" : [
            "Units of measurement.",
            "Only a single Item shall be included in this sequence.",
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
         "entity" : "Image",
         "req" : "1"
      },
      "(0018,0014)" : {
         "name" : "Contrast/Bolus Administration Route Sequence",
         "usage" : "C - Required if contrast media was used in this Image",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "req" : "3",
         "entity" : "Image",
         "desc" : [
            "Sequence that identifies the route of administration of contrast agent.",
            "Only a single Item is permitted in this sequence."
         ],
         "module" : "Contrast/Bolus"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a121)" : {
         "module" : "Specimen",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "req" : "1C",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "name" : "Date"
      },
      "(0010,1020)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "name" : "Patient's Size",
         "desc" : "Length or size of the Patient, in meters.",
         "module" : "Patient Study",
         "req" : "3",
         "entity" : "Study"
      },
      "(0088,0200)[<0>](0028,0010)" : {
         "entity" : "Image",
         "req" : "1",
         "desc" : "Number of rows in the image.",
         "module" : "General Image",
         "name" : "Rows",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ]
      },
      "(0040,0560)[<0>](0040,0620)" : {
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U",
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
            "One or more Items shall be included in this sequence.",
            "Required if multiple specimens present in the image. May be present otherwise."
         ],
         "module" : "Specimen",
         "req" : "1C",
         "entity" : "Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,08ea)" : {
         "module" : "General Series",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "req" : "1C",
         "entity" : "Series",
         "name" : "Measurement Units Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1160)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Referenced Frame Number",
         "module" : "General Series",
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
         "entity" : "Series",
         "req" : "1C"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a040)" : {
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
         "req" : "1",
         "entity" : "Series"
      },
      "(0040,0520)[<0>](0050,001a)" : {
         "entity" : "Image",
         "req" : "3",
         "module" : "Specimen",
         "desc" : [
            "Material of container component.",
            {
               "title" : "Defined Terms:",
               "type" : "variablelist",
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
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Container Component Material"
      },
      "(0028,0302)" : {
         "name" : "Recognizable Visual Features",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
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
         "module" : "General Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a163)" : {
         "entity" : "Series",
         "req" : "1C",
         "module" : "General Series",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "name" : "Rational Denominator Value",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0008,1111)[<0>](0008,1155)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "entity" : "Series",
         "req" : "1",
         "module" : "General Series",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0008,0014)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Instance Creator UID",
         "req" : "3",
         "entity" : "Image",
         "desc" : "Uniquely identifies device that created the SOP Instance.",
         "module" : "SOP Common"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a123)" : {
         "name" : "Person Name",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "entity" : "Image",
         "req" : "1C",
         "module" : "Specimen",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ]
      },
      "(0008,1115)" : {
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this sequence.",
            "Required if this Instance references Instances in this Study."
         ],
         "module" : "Common Instance Reference",
         "req" : "1C",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "usage" : "U",
         "name" : "Referenced Series Sequence"
      },
      "(0028,0303)" : {
         "req" : "3",
         "entity" : "Image",
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
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Longitudinal Temporal Information Modified"
      },
      "(0010,2160)" : {
         "name" : "Ethnic Group",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "module" : "Patient",
         "desc" : "Ethnic group or race of the patient.",
         "entity" : "Patient",
         "req" : "3"
      },
      "(0040,0520)[<0>](0050,0015)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Container Component Width",
         "req" : "3",
         "entity" : "Image",
         "module" : "Specimen",
         "desc" : "Width in mm of container component."
      },
      "(0008,0013)" : {
         "entity" : "Image",
         "req" : "3",
         "module" : "SOP Common",
         "desc" : [
            "Time the SOP Instance was created.",
            "This is the time that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "name" : "Instance Creation Time",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0560)[<0>](0008,2228)" : {
         "name" : "Primary Anatomic Structure Sequence",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-8"
         ],
         "req" : "3",
         "entity" : "Image",
         "module" : "Specimen",
         "desc" : [
            "Sequence of Items that identifies the primary anatomic structure(s) of interest in this Instance.",
            "One or more Items are permitted in this sequence."
         ]
      },
      "(0018,a001)[<0>](0008,0070)" : {
         "entity" : "Image",
         "req" : "1",
         "module" : "SOP Common",
         "desc" : "Manufacturer of the equipment that contributed to the composite instance.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Manufacturer"
      },
      "(0088,0200)[<0>](0028,0102)" : {
         "module" : "General Image",
         "desc" : [
            "Most significant bit for pixel sample data. Each sample shall have the same high bit. See ",
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
         "req" : "1",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M",
         "name" : "High Bit"
      },
      "(0018,a001)[<0>](0040,a170)" : {
         "req" : "1",
         "entity" : "Image",
         "desc" : [
            "Describes the purpose for which the related equipment is being reference.",
            "Only a single Item shall be included in this sequence.",
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
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Purpose of Reference Code Sequence"
      },
      "(0028,0009)" : [
         {
            "usage" : "C - Required if pixel data is Multi-frame Cine data",
            "mod_tables" : [
               "table_C.7-14"
            ],
            "name" : "Frame Increment Pointer",
            "req" : "1",
            "entity" : "Image",
            "module" : "Multi-frame",
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
            ]
         },
         {
            "desc" : [
               "Required if Multi-frame Image.",
               [
                  "Contains the Data Element Tag of the attribute that is used as the Frame increment in Multi-frame image pixel data (see ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.7.6.6"
                     }
                  },
                  ")."
               ],
               {
                  "list" : [
                     [
                        "00181063H",
                        "Frame Time (0018,1063)"
                     ],
                     [
                        "00181065H",
                        "Frame Time Vector (0018,1065)"
                     ]
                  ],
                  "type" : "variablelist",
                  "title" : "Enumerated Values:"
               }
            ],
            "module" : "X-Ray Image",
            "req" : "1C",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.8-26"
            ],
            "usage" : "M",
            "name" : "Frame Increment Pointer"
         }
      ],
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a120)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "DateTime",
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "module" : "General Series"
      },
      "(0010,4000)" : {
         "name" : "Patient Comments",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "req" : "3",
         "module" : "Patient",
         "desc" : "User-defined additional information about the patient."
      },
      "(0010,0010)" : {
         "name" : "Patient's Name",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "module" : "Patient",
         "desc" : "Patient's full name.",
         "entity" : "Patient",
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
      "Can't handle table_8.8-1 (in table_C.7-12 after (0018,0012))",
      "Can't handle table_8.8-1 (in table_C.7-12 after (0018,0014))",
      "Can't handle table_8.8-1 (in table_C.7-12 after (0018,002A))",
      "Can't handle table_8.8-1 (in table_C.7-13 after (003A,0208))",
      "Can't handle table_8.8-1 (in table_C.7-18 after (0050,0010))",
      "Can't handle table_8.8-1 (in table_C.7-19 after (0018,0036))",
      "Can't handle table_8.8-1 (in table_C.7-19 after (0018,0029))",
      "Can't handle table_8.8-1 (in table_C.7-19 after (0054,0302))",
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
      "Can't handle table_8.8-1 (in table_C.8-26:table_10-7 after (0008,2218))",
      "Can't handle table_8.8-1 (in table_C.8-26:table_10-7 after (0008,2220))",
      "Can't handle table_8.8-1 (in table_C.8-26:table_10-7:table_10-8 after (0008,2228))",
      "Can't handle table_8.8-1 (in table_C.8-26:table_10-7:table_10-8 after (0008,2230))",
      "Can't handle table_8.8-1 (in table_C.8-26 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.12-1 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_C.12-6 after (0400,0401))"
   ]
}