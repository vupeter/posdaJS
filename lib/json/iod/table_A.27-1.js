var data = {
   "tags" : {
      "(0020,9172)[<0>](0008,1160)" : {
         "name" : "Referenced Frame Number",
         "entity" : "Image",
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
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1155)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ],
         "module" : "Common Instance Reference",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Image",
         "req" : "1",
         "name" : "Referenced SOP Instance UID"
      },
      "(0008,0051)[<0>](0040,0032)" : {
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "usage" : "M",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C",
         "entity" : "Study",
         "name" : "Universal Entity ID"
      },
      "(0040,0513)[<0>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "entity" : "Image",
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
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "usage" : "U"
      },
      "(0040,0520)[<0>](0008,0070)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "desc" : "Manufacturer of the container component.",
         "entity" : "Image",
         "req" : "3",
         "name" : "Manufacturer"
      },
      "(0010,2180)" : {
         "desc" : "Occupation of the Patient.",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "name" : "Occupation",
         "req" : "3",
         "entity" : "Study"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a163)" : {
         "usage" : "U",
         "module" : "Specimen",
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
         "name" : "Rational Denominator Value"
      },
      "(0088,0200)[<0>](0028,1202)" : {
         "usage" : "M",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
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
         "req" : "1C",
         "entity" : "Image",
         "name" : "Green Palette Color Lookup Table Data"
      },
      "(0040,0275)[<0>](0020,000d)" : [
         {
            "req" : "3",
            "entity" : "Series",
            "name" : "Study Instance UID",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9"
            ],
            "module" : "General Series",
            "usage" : "M",
            "desc" : "The unique identifier for the Study provided for this Requested Procedure."
         },
         {
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9"
            ],
            "module" : "Mammography Series",
            "usage" : "M",
            "desc" : "The unique identifier for the Study provided for this Requested Procedure.",
            "req" : "3",
            "entity" : "Series",
            "name" : "Study Instance UID"
         }
      ],
      "(60xx,0102)" : {
         "module" : "Overlay Plane",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "usage" : "C - Required if graphic annotation is present - See ",
         "desc" : [
            "The value of this Attribute shall be 0.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "Formerly the standard described embedding the overlay data in the Image Pixel Data (7FE0,0010), in which case the value of this Attribute specified the bit in which the overlay was stored. This usage has been retired. See ",
                        {
                           "attrs" : {
                              "xl:href" : "ftp://medical.nema.org/MEDICAL/Dicom/2004/printed/04_03pu3.pdf"
                           },
                           "el" : "link",
                           "content" : [
                              "PS3.3-2004"
                           ]
                        },
                        "."
                     ],
                     "attrs" : {
                        "xml:id" : "para_897da523-8536-4e28-8b0b-10feebf42802"
                     },
                     "el" : "para"
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "entity" : "Image",
         "req" : "1",
         "name" : "Overlay Bit Position"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0008,1150)" : {
         "entity" : "Image",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "Specimen",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0054,0410)[<0>](0054,0412)" : {
         "mod_tables" : [
            "table_C.8-72"
         ],
         "module" : "DX Positioning",
         "usage" : "U",
         "desc" : [
            "Patient Orientation Modifier.",
            "Required if needed to fully specify the orientation of the patient with respect to gravity.",
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "Image",
         "req" : "3",
         "name" : "Patient Orientation Modifier Code Sequence"
      },
      "(0038,0064)" : {
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Service Episode ID (0038,0060).",
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "Study",
         "req" : "3",
         "name" : "Issuer of Service Episode ID Sequence"
      },
      "(0028,1103)" : {
         "usage" : "M",
         "module" : "Image Pixel",
         "mod_tables" : [
            "table_C.7-11b"
         ],
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
         "entity" : "Image",
         "req" : "1C",
         "name" : "Blue Palette Color Lookup Table Descriptor"
      },
      "(0018,2041)[<0>](0018,2046)" : {
         "name" : "Displayed Z Value",
         "req" : "1",
         "entity" : "Image",
         "desc" : [
            "The z value in mm displayed to the user at the time of biopsy.",
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
                                 "content" : [
                                    "This may be the same as the z value of Calculated Target Position or different in direction or reference point, such as relative to the compression paddle."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_acbed767-ff36-4d8f-8475-77751f92dbec"
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
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_e4a13b1c-acc9-42a3-a51d-689c84947193"
                                 },
                                 "content" : [
                                    "This is not the distance that the needle was inserted, particularly for a lateral (parallel) approach."
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-74"
         ],
         "module" : "Mammography Image"
      },
      "(0088,0200)[<0>](0028,0010)" : {
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M",
         "desc" : "Number of rows in the image.",
         "entity" : "Image",
         "req" : "1",
         "name" : "Rows"
      },
      "(0008,1062)[<0>](0040,1104)" : {
         "name" : "Person's Telecom Information",
         "entity" : "Study",
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
                     ]
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
         "module" : "General Study"
      },
      "(0018,1708)" : {
         "entity" : "Image",
         "req" : "1C",
         "name" : "Collimator Lower Horizontal Edge",
         "usage" : "U",
         "module" : "X-Ray Collimator",
         "mod_tables" : [
            "table_C.8-28b"
         ],
         "desc" : [
            "Required if a value of Collimator Shape (0018,1700) is RECTANGULAR. Location of the lower edge of the rectangular collimator with respect to pixels in the image given as row. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.7.3.1.1"
               },
               "el" : "xref"
            },
            "."
         ]
      },
      "(0400,0561)[<0>](0400,0550)[0](gggg,eeee)" : {
         "desc" : "May include Sequence Attributes and their Items.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Any Attribute from the main data set that was modified or removed.",
         "entity" : "Image",
         "req" : "1"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a168)" : {
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "usage" : "M",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "entity" : "Image",
         "req" : "1C",
         "name" : "Concept Code Sequence"
      },
      "(0050,0010)[<0>](0050,0016)" : {
         "usage" : "U",
         "module" : "Device",
         "mod_tables" : [
            "table_C.7-18"
         ],
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
         ],
         "req" : "3",
         "entity" : "Image",
         "name" : "Device Diameter"
      },
      "(0012,0060)" : {
         "name" : "Clinical Trial Coordinating Center Name",
         "req" : "2",
         "entity" : "Series",
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
         "module" : "Clinical Trial Series",
         "mod_tables" : [
            "table_C.7-5b"
         ]
      },
      "(0018,1460)" : {
         "entity" : "Image",
         "req" : "1",
         "name" : "Tomo Layer Height",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-32"
         ],
         "module" : "X-Ray Tomography Acquisition",
         "desc" : "Distance in mm between the table surface and the sharp image plane."
      },
      "(0018,5104)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-72"
         ],
         "module" : "DX Positioning",
         "desc" : [
            "A Sequence that describes the radiographic method of patient, tube and detector positioning to achieve a well described projection or view.",
            "Only a single Item is permitted in this Sequence.",
            "Shall be consistent with the other Attributes in this Module, if present, but may more specifically describe the image acquisition."
         ],
         "entity" : "Image",
         "req" : "3",
         "name" : "Projection Eponymous Name Code Sequence"
      },
      "(0010,0219)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "usage" : "M",
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
         "req" : "3",
         "entity" : "Patient",
         "name" : "Strain Code Sequence"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "req" : "1C",
         "entity" : "Patient",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "module" : "Patient",
         "usage" : "M"
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
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "usage" : "M",
         "name" : "Patient Species Code Sequence",
         "req" : "1C",
         "entity" : "Patient"
      },
      "(4ffe,0001)[<0>](0400,0020)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
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
         "entity" : "Image",
         "req" : "1",
         "name" : "Data Elements Signed"
      },
      " (0010,0027) [<0>](0018,5100)" : {
         "name" : "Patient Position",
         "req" : "3",
         "entity" : "Patient",
         "desc" : [
            [
               "Patient position descriptor relative to the equipment.  See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.1.4.1.1.1"
                  },
                  "el" : "xref"
               },
               "."
            ],
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
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "usage" : "M"
      },
      "(0008,0060)" : [
         {
            "entity" : "Series",
            "req" : "1",
            "name" : "Modality",
            "usage" : "M",
            "module" : "General Series",
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
            ]
         },
         {
            "entity" : "Series",
            "req" : "1",
            "name" : "Modality",
            "usage" : "M",
            "module" : "DX Series",
            "mod_tables" : [
               "table_C.8-68"
            ],
            "desc" : [
               "Type of equipment that originally acquired the data used to create the images in this Series.",
               {
                  "title" : "Enumerated Values:",
                  "type" : "variablelist",
                  "list" : [
                     [
                        "DX",
                        null
                     ],
                     [
                        "PX",
                        null
                     ],
                     [
                        "IO",
                        null
                     ],
                     [
                        "MG",
                        null
                     ]
                  ]
               },
               [
                  "See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "linkend" : "sect_C.7.3.1.1.1",
                        "xrefstyle" : "select: label"
                     }
                  },
                  " for further explanation."
               ]
            ]
         },
         {
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-73"
            ],
            "module" : "Mammography Series",
            "desc" : [
               "Type of equipment that originally acquired the data used to create the images in this Series.",
               {
                  "title" : "Enumerated Values:",
                  "type" : "variablelist",
                  "list" : [
                     [
                        "MG",
                        null
                     ]
                  ]
               },
               [
                  "See ",
                  {
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.7.3.1.1.1"
                     },
                     "el" : "xref"
                  },
                  " for further explanation."
               ]
            ],
            "entity" : "Series",
            "req" : "1",
            "name" : "Modality"
         }
      ],
      "(0010,4000)" : {
         "entity" : "Patient",
         "req" : "3",
         "name" : "Patient Comments",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "usage" : "M",
         "desc" : "User-defined additional information about the patient."
      },
      "(0010,0010)" : {
         "desc" : "Patient's full name.",
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient's Name",
         "entity" : "Patient",
         "req" : "2"
      },
      "(0040,9096)[<0>](0040,9214)" : {
         "name" : "Double Float Real World Value First Value Mapped",
         "entity" : "Image",
         "req" : "1C",
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
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "module" : "General Image",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0018,1020)" : {
         "req" : "3",
         "entity" : "Image",
         "name" : "Software Versions",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
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
         ]
      },
      "(0018,a001)[<0>](0008,1040)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : "Department in the institution where the equipment that contributed to the composite instance is located.",
         "entity" : "Image",
         "req" : "3",
         "name" : "Institutional Department Name"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a122)" : [
         {
            "desc" : [
               "Time value for this name-value Item.",
               "Required if Value Type (0040,A040) is TIME."
            ],
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "module" : "General Series",
            "usage" : "M",
            "name" : "Time",
            "entity" : "Series",
            "req" : "1C"
         },
         {
            "desc" : [
               "Time value for this name-value Item.",
               "Required if Value Type (0040,A040) is TIME."
            ],
            "usage" : "M",
            "module" : "Mammography Series",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2"
            ],
            "name" : "Time",
            "req" : "1C",
            "entity" : "Series"
         }
      ],
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a040)" : {
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
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ]
      },
      "(0040,0312)" : {
         "desc" : [
            "The X-Ray output at the patient entrance surface and kVp used to acquire the image, measured in mGy/mAs.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "This value may be a calibrated value rather than measured during the exposure."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_7a8ca4f4-9633-4006-954b-df72c45e2a4b"
                     }
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.8-33"
         ],
         "module" : "X-Ray Acquisition Dose",
         "usage" : "U",
         "name" : "X-Ray Output",
         "req" : "3",
         "entity" : "Image"
      },
      "(0010,1002)[<0>](0010,0022)" : {
         "name" : "Type of Patient ID",
         "req" : "1",
         "entity" : "Patient",
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
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "The identifier is coded as a string regardless of the type, not as a binary value."
                     ],
                     "attrs" : {
                        "xml:id" : "para_0c5465f7-fe2f-460e-8394-64ad149bdd60"
                     },
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0028,3010)[<0>](0028,3006)" : [
         {
            "entity" : "Image",
            "req" : "1",
            "name" : "LUT Data",
            "module" : "DX Image",
            "mod_tables" : [
               "table_C.8-70"
            ],
            "usage" : "M",
            "desc" : "LUT Data in this Sequence."
         },
         {
            "name" : "LUT Data",
            "req" : "1",
            "entity" : "Image",
            "desc" : "LUT Data in this Sequence.",
            "module" : "VOI LUT",
            "mod_tables" : [
               "table_C.11-2b"
            ],
            "usage" : "C - Required if Presentation Intent Type (0008,0068) is FOR PRESENTATION. Shall not be present otherwise."
         }
      ],
      "(0040,0513)[<0>](0040,0032)" : {
         "entity" : "Image",
         "req" : "1C",
         "name" : "Universal Entity ID",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "module" : "Specimen",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise."
      },
      "(0012,0051)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "module" : "Clinical Trial Study",
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
         "entity" : "Study",
         "req" : "3",
         "name" : "Clinical Trial Time Point Description"
      },
      "(0028,0004)" : [
         {
            "name" : "Photometric Interpretation",
            "req" : "1",
            "entity" : "Image",
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
            ],
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "module" : "Image Pixel"
         },
         {
            "desc" : [
               "Specifies the intended interpretation of the pixel data.",
               {
                  "type" : "variablelist",
                  "list" : [
                     [
                        "MONOCHROME1",
                        null
                     ],
                     [
                        "MONOCHROME2",
                        null
                     ]
                  ],
                  "title" : "Enumerated Values:"
               }
            ],
            "usage" : "M",
            "module" : "DX Image",
            "mod_tables" : [
               "table_C.8-70"
            ],
            "name" : "Photometric Interpretation",
            "req" : "1",
            "entity" : "Image"
         }
      ],
      "(0010,0216)[<0>](0010,0217)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "usage" : "M",
         "desc" : [
            "Identification of the organization that is the source of the animal, issued by the registry identified by Strain Source Registry Code Sequence (0010,0215). See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.1.1.4"
               }
            },
            "."
         ],
         "req" : "1",
         "entity" : "Patient",
         "name" : "Strain Source"
      },
      "(0018,a001)[<0>](0008,0081)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "desc" : "Address of the institution where the equipment that contributed to the composite instance is located.",
         "entity" : "Image",
         "req" : "3",
         "name" : "Institution Address"
      },
      "(0008,0018)" : {
         "name" : "SOP Instance UID",
         "entity" : "Image",
         "req" : "1",
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
                  "targetdoc" : "PS3.4",
                  "xrefstyle" : "select: labelnumber",
                  "targetptr" : "PS3.4"
               }
            },
            "."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0008,009d)[<0>](0040,1103)" : {
         "desc" : "Person's telephone number(s)",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "usage" : "M",
         "name" : "Person's Telephone Numbers",
         "req" : "3",
         "entity" : "Study"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a043)" : [
         {
            "entity" : "Series",
            "req" : "1",
            "name" : "Concept Name Code Sequence",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "module" : "General Series",
            "desc" : [
               "Coded concept name of this name-value Item.",
               "Only a single Item shall be included in this Sequence."
            ]
         },
         {
            "name" : "Concept Name Code Sequence",
            "req" : "1",
            "entity" : "Series",
            "desc" : [
               "Coded concept name of this name-value Item.",
               "Only a single Item shall be included in this Sequence."
            ],
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2"
            ],
            "module" : "Mammography Series",
            "usage" : "M"
         }
      ],
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a121)" : [
         {
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
            "entity" : "Series",
            "req" : "1C"
         },
         {
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2"
            ],
            "module" : "Mammography Series",
            "usage" : "M",
            "desc" : [
               "Date value for this name-value Item.",
               "Required if Value Type (0040,A040) is DATE."
            ],
            "req" : "1C",
            "entity" : "Series",
            "name" : "Date"
         }
      ],
      "(0018,1712)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-28b"
         ],
         "module" : "X-Ray Collimator",
         "desc" : [
            "Required if a value of Collimator Shape (0018,1700) is CIRCULAR. Radius of the circular collimator with respect to pixels in the image given as a number of pixels along the row direction. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.7.3.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "req" : "1C",
         "entity" : "Image",
         "name" : "Radius of Circular Collimator"
      },
      "(0008,1052)[<0>](0008,0080)" : {
         "req" : "1C",
         "entity" : "Series",
         "name" : "Institution Name",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present."
      },
      "(0010,2297)" : {
         "req" : "2C",
         "entity" : "Patient",
         "name" : "Responsible Person",
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "Name of person with medical or welfare decision making authority for the patient.",
            "Required if the patient is an animal. May be present otherwise."
         ]
      },
      "(0018,1153)" : [
         {
            "req" : "3",
            "entity" : "Image",
            "name" : "Exposure in \u00b5As",
            "usage" : "U",
            "module" : "X-Ray Acquisition Dose",
            "mod_tables" : [
               "table_C.8-33"
            ],
            "desc" : "The exposure expressed in \u00b5As, for example calculated from Exposure Time and X-Ray Tube Current."
         },
         {
            "name" : "Exposure in \u00b5As",
            "entity" : "Image",
            "req" : "3",
            "desc" : "The exposure expressed in \u00b5As, for example calculated from Exposure Time and X-Ray Tube Current.",
            "module" : "X-Ray Generation",
            "mod_tables" : [
               "table_C.8-34"
            ],
            "usage" : "U"
         }
      ],
      "(0008,1072)[<0>](0040,1102)" : {
         "name" : "Person's Address",
         "entity" : "Series",
         "req" : "3",
         "desc" : "Person's mailing address",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a122)" : {
         "entity" : "Image",
         "req" : "1C",
         "name" : "Time",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "module" : "General Image",
         "usage" : "M",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ]
      },
      "(0088,0200)[<0>](0028,0100)" : {
         "name" : "Bits Allocated",
         "req" : "1",
         "entity" : "Image",
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
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image"
      },
      "(0008,1084)" : {
         "usage" : "U",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : [
            "A sequence that conveys the admitting diagnosis (diagnoses).",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Study",
         "req" : "3",
         "name" : "Admitting Diagnoses Code Sequence"
      },
      "(0018,2041)" : {
         "name" : "Biopsy Target Sequence",
         "entity" : "Image",
         "req" : "3",
         "desc" : "Sequence that identifies the targets of a biopsy procedure. One or more Items are permitted in this Sequence, where the coordinate system is the same for all Items within a pair of stereo images.",
         "module" : "Mammography Image",
         "mod_tables" : [
            "table_C.8-74"
         ],
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)" : {
         "name" : "Referenced SOP Sequence",
         "entity" : "Image",
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
         "module" : "Specimen",
         "usage" : "U"
      },
      "(0008,1072)" : {
         "desc" : [
            "Identification of the operator(s) supporting the Series.",
            "One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Operators' Name (0008,1070), if present."
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "name" : "Operator Identification Sequence",
         "req" : "3",
         "entity" : "Series"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0020,000e)" : {
         "entity" : "Image",
         "req" : "1",
         "name" : "Series Instance UID",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "module" : "Common Instance Reference",
         "usage" : "U",
         "desc" : "Unique identifier of the Series containing the referenced Instances."
      },
      "(0018,1400)" : {
         "desc" : [
            "Indicates any visual processing performed on the images prior to exchange.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.11.3.1.3",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ]
         ],
         "module" : "DX Image",
         "mod_tables" : [
            "table_C.8-70"
         ],
         "usage" : "M",
         "name" : "Acquisition Device Processing Description",
         "entity" : "Image",
         "req" : "3"
      },
      "(60xx,1500)" : {
         "module" : "Overlay Plane",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "usage" : "C - Required if graphic annotation is present - See ",
         "desc" : "A user defined text string that may be used to label or name this overlay.",
         "req" : "3",
         "entity" : "Image",
         "name" : "Overlay Label"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a120)" : {
         "req" : "1C",
         "entity" : "Image",
         "name" : "DateTime",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "module" : "General Image",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ]
      },
      "(0008,0096)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "usage" : "M",
         "desc" : [
            "Identification of the patient's referring physician.",
            "Only a single item is permitted in this Sequence."
         ],
         "entity" : "Study",
         "req" : "3",
         "name" : "Referring Physician Identification Sequence"
      },
      "(0018,1510)" : [
         {
            "module" : "DX Positioning",
            "mod_tables" : [
               "table_C.8-72"
            ],
            "usage" : "U",
            "desc" : [
               "Position of the X-Ray beam about the patient from the RAO to LAO direction where movement from RAO to vertical is positive, if Positioner Type (0018,1508) is CARM.",
               [
                  "See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.8.7.5"
                     }
                  },
                  " for further explanation if Positioner Type (0018,1508) is CARM."
               ],
               [
                  "See ",
                  {
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.8.11.7"
                     },
                     "el" : "xref"
                  },
                  " for explanation if Positioner Type (0018,1508) is MAMMOGRAPHIC."
               ]
            ],
            "entity" : "Image",
            "req" : "3",
            "name" : "Positioner Primary Angle"
         },
         {
            "name" : "Positioner Primary Angle",
            "req" : "3",
            "entity" : "Image",
            "desc" : "Signed position in degrees of the X-Ray beam vector in the coronal anatomical plane as if the patient were standing facing the equipment where vertical is zero.",
            "usage" : "M",
            "module" : "Mammography Image",
            "mod_tables" : [
               "table_C.8-74"
            ]
         }
      ],
      "(0040,0244)" : {
         "desc" : "Date on which the Performed Procedure Step started.",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "name" : "Performed Procedure Step Start Date",
         "entity" : "Series",
         "req" : "3"
      },
      "(0008,0110)[<0>](0008,010c)" : {
         "name" : "Coding Scheme UID",
         "req" : "1C",
         "entity" : "Image",
         "desc" : "The coding scheme UID identifier. Required if coding scheme is identified by an ISO 8824 object identifier compatible with the UI VR.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0008,009d)[<0>](0008,0081)" : {
         "name" : "Institution Address",
         "entity" : "Study",
         "req" : "3",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study"
      },
      "(0010,0021)" : {
         "entity" : "Patient",
         "req" : "3",
         "name" : "Issuer of Patient ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_fde39d36-34f5-4459-8bca-12b577233532"
                     }
                  },
                  "\n              "
               ]
            }
         ]
      },
      "(0018,1624)" : {
         "usage" : "U",
         "module" : "Display Shutter",
         "mod_tables" : [
            "table_C.7-17a"
         ],
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
         "req" : "3",
         "entity" : "Image",
         "name" : "Shutter Presentation Color CIELab Value"
      },
      "(0010,2298)" : {
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
         "module" : "Patient",
         "usage" : "M",
         "name" : "Responsible Person Role",
         "req" : "1C",
         "entity" : "Patient"
      },
      "(0008,1111)[<0>](0008,1150)" : [
         {
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-11"
            ],
            "usage" : "M",
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "req" : "1",
            "entity" : "Series",
            "name" : "Referenced SOP Class UID"
         },
         {
            "entity" : "Series",
            "req" : "1",
            "name" : "Referenced SOP Class UID",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-68",
               "table_10-11"
            ],
            "module" : "DX Series",
            "desc" : "Uniquely identifies the referenced SOP Class."
         }
      ],
      "(0008,009d)[<0>](0008,0082)" : {
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "M",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Code Sequence",
         "req" : "1C",
         "entity" : "Study"
      },
      "(fffa,fffa)[<0>](0400,0105)" : {
         "name" : "Digital Signature DateTime",
         "entity" : "Image",
         "req" : "1",
         "desc" : [
            "The date and time the Digital Signature was created. The time shall include an offset (i.e., time zone indication) from Coordinated Universal Time.",
            {
               "el" : "note",
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
               ]
            }
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1150)" : {
         "entity" : "Image",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "usage" : "U",
         "module" : "Common Instance Reference",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0008,1160)" : {
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "desc" : [
            "Identifies the frame numbers within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1.",
            {
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
               ],
               "el" : "note"
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "entity" : "Image",
         "req" : "1C",
         "name" : "Referenced Frame Number"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M",
         "name" : "Local Namespace Entity ID",
         "entity" : "Patient",
         "req" : "1C"
      },
      "(0008,2112)[<0>](0008,1150)" : {
         "entity" : "Image",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a121)" : {
         "name" : "Date",
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series"
      },
      "(0020,0011)" : {
         "desc" : "A number that identifies this Series.",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Series Number",
         "req" : "2",
         "entity" : "Series"
      },
      "(0018,a001)[<0>](0008,1010)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "User defined name identifying the machine that contributed to the composite instance.",
         "entity" : "Image",
         "req" : "3",
         "name" : "Station Name"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0032)" : {
         "req" : "3",
         "entity" : "Patient",
         "name" : "Universal Entity ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "module" : "Patient",
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
         ]
      },
      "(0018,11a2)" : {
         "desc" : "The compression force applied to the body part during exposure, measured in Newtons.",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-72"
         ],
         "module" : "DX Positioning",
         "name" : "Compression Force",
         "req" : "3",
         "entity" : "Image"
      },
      "(0400,0561)[<0>](0400,0565)" : {
         "entity" : "Image",
         "req" : "1",
         "name" : "Reason for the Attribute Modification",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         ]
      },
      "(0010,1002)" : {
         "name" : "Other Patient IDs Sequence",
         "entity" : "Patient",
         "req" : "3",
         "desc" : [
            "A sequence of identification numbers or codes used to identify the patient, which may or may not be human readable, and may or may not have been obtained from an implanted or attached device such as an RFID or barcode.",
            "One or more Items are permitted in this Sequence."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0008,1199)[<2>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "entity" : "Image",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "M"
      },
      "(0038,0064)[<0>](0040,0032)" : {
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "usage" : "U",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C",
         "entity" : "Study",
         "name" : "Universal Entity ID"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1102)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "desc" : "Person's mailing address",
         "entity" : "Image",
         "req" : "3",
         "name" : "Person's Address"
      },
      "(0018,7026)" : {
         "name" : "Detector Active Dimension(s)",
         "entity" : "Image",
         "req" : "3",
         "desc" : [
            "Dimensions in mm of the active area.",
            "If Detector Active Shape (0018,7024) is:",
            "RECTANGLE: row dimension followed by column.",
            "ROUND: diameter.",
            "HEXAGONAL: diameter of a circumscribed circle.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_a751e372-85ed-439c-bc34-7e5509e1268c"
                     },
                     "content" : [
                        "This may be different from the Field of View Dimensions (0018,1149), and should not be assumed to describe the stored image."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "module" : "DX Detector"
      },
      "(0018,0060)" : [
         {
            "name" : "KVP",
            "req" : "3",
            "entity" : "Image",
            "desc" : "Peak kilo voltage output of the X-Ray generator used.",
            "usage" : "U",
            "mod_tables" : [
               "table_C.8-33"
            ],
            "module" : "X-Ray Acquisition Dose"
         },
         {
            "usage" : "U",
            "mod_tables" : [
               "table_C.8-34"
            ],
            "module" : "X-Ray Generation",
            "desc" : "Peak kilo voltage output of the X-Ray generator used.",
            "entity" : "Image",
            "req" : "3",
            "name" : "KVP"
         }
      ],
      "(0400,0561)[<0>](0400,0564)" : {
         "req" : "2",
         "entity" : "Image",
         "name" : "Source of Previous Values",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The source that provided the SOP Instance prior to the removal or replacement of the values. For example, this might be the Institution from which imported SOP Instances were received."
      },
      "(0010,0032)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "desc" : "Birth time of the Patient.",
         "req" : "3",
         "entity" : "Patient",
         "name" : "Patient's Birth Time"
      },
      "(0008,1072)[<0>](0040,1101)" : {
         "name" : "Person Identification Code Sequence",
         "req" : "1",
         "entity" : "Series",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series",
         "usage" : "M"
      },
      "(0010,1100)[<0>](0040,e024)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "module" : "Patient",
         "usage" : "M",
         "desc" : [
            "Details for retrieving instances using WADO-WS or IHE XDS transactions.",
            {
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "Retrieval via WADO-URI is addressed by the WADO Retrieval Sequence (0040,E023). Retrieval via WADO-RS is addressed by the WADO-RS Retrieval Sequence (0040,E025)."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_020ae95c-9384-49b9-b460-e9625c404c63"
                     }
                  },
                  "\n              "
               ],
               "el" : "note"
            },
            "Required if DICOM Retrieval Sequence (0040,E021), DICOM Media Retrieval Sequence (0040,E022), WADO-RS Retrieval Sequence (0040,E025) and WADO Retrieval Sequence (0040,E023) are not present. May be present otherwise.",
            "This sequence shall only identify repositories known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Patient",
         "req" : "1C",
         "name" : "XDS Retrieval Sequence"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)" : {
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
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M",
         "name" : "Assigning Facility Sequence",
         "entity" : "Patient",
         "req" : "3"
      },
      "(60xx,0022)" : {
         "usage" : "C - Required if graphic annotation is present - See ",
         "module" : "Overlay Plane",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "desc" : "User-defined comments about the overlay.",
         "entity" : "Image",
         "req" : "3",
         "name" : "Overlay Description"
      },
      "(0028,1052)" : {
         "name" : "Rescale Intercept",
         "req" : "1",
         "entity" : "Image",
         "desc" : [
            "The value b in the relationship between stored values (SV) in Pixel Data (7FE0,0010) and the output units specified in Rescale Type (0028,1054).",
            "Output units = m*SV + b.",
            {
               "list" : [
                  [
                     "0",
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
                     "linkend" : "sect_C.8.11.3.1.2",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ]
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-70"
         ],
         "module" : "DX Image"
      },
      "(0018,a001)[<0>](0008,0080)" : {
         "name" : "Institution Name",
         "entity" : "Image",
         "req" : "3",
         "desc" : "Institution where the equipment that contributed to the composite instance is located.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a043)" : {
         "name" : "Concept Name Code Sequence",
         "entity" : "Image",
         "req" : "1",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "module" : "General Image",
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0600)" : {
         "desc" : "Short textual specimen description (may include ancestor specimen descriptions).",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "name" : "Specimen Short Description",
         "entity" : "Image",
         "req" : "3"
      },
      "(0028,3010)[<0>](0028,3002)" : [
         {
            "desc" : [
               "Specifies the format of the LUT Data in this Sequence.",
               [
                  "See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "linkend" : "sect_C.8.11.3.1.5",
                        "xrefstyle" : "select: label"
                     }
                  },
                  " for further explanation."
               ]
            ],
            "mod_tables" : [
               "table_C.8-70"
            ],
            "module" : "DX Image",
            "usage" : "M",
            "name" : "LUT Descriptor",
            "entity" : "Image",
            "req" : "1"
         },
         {
            "usage" : "C - Required if Presentation Intent Type (0008,0068) is FOR PRESENTATION. Shall not be present otherwise.",
            "mod_tables" : [
               "table_C.11-2b"
            ],
            "module" : "VOI LUT",
            "desc" : [
               "Specifies the format of the LUT Data in this Sequence.",
               [
                  "See ",
                  {
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.11.2.1.1"
                     },
                     "el" : "xref"
                  },
                  " for further explanation."
               ]
            ],
            "req" : "1",
            "entity" : "Image",
            "name" : "LUT Descriptor"
         }
      ],
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a30a)" : {
         "name" : "Numeric Value",
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0040,0560)[<0>](0040,0562)[<1>](0040,0032)" : {
         "entity" : "Image",
         "req" : "1C",
         "name" : "Universal Entity ID",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "usage" : "U",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise."
      },
      "(0008,2228)[<0>](0008,2230)" : [
         {
            "req" : "3",
            "entity" : "Image",
            "name" : "Primary Anatomic Structure Modifier Sequence",
            "mod_tables" : [
               "table_C.8-69",
               "table_10-6",
               "table_10-8"
            ],
            "module" : "DX Anatomy Imaged",
            "usage" : "M",
            "desc" : [
               "Sequence of Items that modifies the primary anatomic structure of interest in this Instance.",
               "One or more Items are permitted in this Sequence."
            ]
         },
         {
            "name" : "Primary Anatomic Structure Modifier Sequence",
            "entity" : "Image",
            "req" : "3",
            "desc" : [
               "Sequence of Items that modifies the primary anatomic structure of interest in this Instance.",
               "One or more Items are permitted in this Sequence."
            ],
            "module" : "Mammography Image",
            "mod_tables" : [
               "table_C.8-74",
               "table_10-5",
               "table_10-8"
            ],
            "usage" : "M"
         }
      ],
      "(0012,0021)" : {
         "desc" : [
            "The name of the clinical trial or research protocol. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.3.1.3"
               },
               "el" : "xref"
            },
            "."
         ],
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject",
         "usage" : "U",
         "name" : "Clinical Trial Protocol Name",
         "req" : "2",
         "entity" : "Patient"
      },
      "(0040,0275)[<0>](0032,1060)" : [
         {
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9"
            ],
            "module" : "General Series",
            "usage" : "M",
            "desc" : "Institution-generated administrative description or classification of Requested Procedure.",
            "entity" : "Series",
            "req" : "3",
            "name" : "Requested Procedure Description"
         },
         {
            "entity" : "Series",
            "req" : "3",
            "name" : "Requested Procedure Description",
            "usage" : "M",
            "module" : "Mammography Series",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9"
            ],
            "desc" : "Institution-generated administrative description or classification of Requested Procedure."
         }
      ],
      "(0028,1050)" : [
         {
            "name" : "Window Center",
            "entity" : "Image",
            "req" : "1C",
            "desc" : [
               "Defines a Window Center for display.",
               [
                  "See ",
                  {
                     "attrs" : {
                        "linkend" : "sect_C.8.11.3.1.5",
                        "xrefstyle" : "select: label"
                     },
                     "el" : "xref"
                  },
                  " for further explanation."
               ],
               "Required if Presentation Intent Type (0008,0068) is FOR PRESENTATION and VOI LUT Sequence (0028,3010) is not present. May also be present if VOI LUT Sequence (0028,3010) is present."
            ],
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-70"
            ],
            "module" : "DX Image"
         },
         {
            "req" : "1C",
            "entity" : "Image",
            "name" : "Window Center",
            "module" : "VOI LUT",
            "mod_tables" : [
               "table_C.11-2b"
            ],
            "usage" : "C - Required if Presentation Intent Type (0008,0068) is FOR PRESENTATION. Shall not be present otherwise.",
            "desc" : [
               "Window Center for display.",
               [
                  "See ",
                  {
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.11.2.1.2"
                     },
                     "el" : "xref"
                  },
                  " for further explanation."
               ],
               "Required if VOI LUT Sequence (0028,3010) is not present. May be present otherwise."
            ]
         }
      ],
      "(0050,0010)[<0>](0050,0019)" : {
         "req" : "3",
         "entity" : "Image",
         "name" : "Inter-Marker Distance",
         "module" : "Device",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "usage" : "U",
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
         ]
      },
      "(0008,2111)" : [
         {
            "module" : "General Image",
            "mod_tables" : [
               "table_C.7-9"
            ],
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
            "entity" : "Image",
            "req" : "3",
            "name" : "Derivation Description"
         },
         {
            "module" : "DX Image",
            "mod_tables" : [
               "table_C.8-70"
            ],
            "usage" : "M",
            "desc" : [
               "A text description of how this image was derived.",
               [
                  "See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "linkend" : "sect_C.8.11.3.1.4",
                        "xrefstyle" : "select: label"
                     }
                  },
                  " for further explanation."
               ]
            ],
            "req" : "3",
            "entity" : "Image",
            "name" : "Derivation Description"
         }
      ],
      "(0018,7010)" : {
         "name" : "Exposures on Detector Since Last Calibration",
         "req" : "3",
         "entity" : "Image",
         "desc" : "Total number of X-Ray exposures that have been made on the detector used to acquire this image as identified in Detector ID (0018,700A) since it was calibrated.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "module" : "DX Detector"
      },
      "(0040,0555)[<0>](0040,a162)" : {
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "module" : "Acquisition Context",
         "name" : "Rational Numerator Value",
         "req" : "1C",
         "entity" : "Image"
      },
      "(fffa,fffa)[<0>](0400,0310)" : {
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "name" : "Certified Timestamp",
         "req" : "3",
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a162)" : {
         "req" : "1C",
         "entity" : "Image",
         "name" : "Rational Numerator Value",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ]
      },
      "(0040,0318)" : [
         {
            "mod_tables" : [
               "table_C.8-33"
            ],
            "module" : "X-Ray Acquisition Dose",
            "usage" : "U",
            "desc" : [
               "Organ to which Organ Dose (0040,0316) applies.",
               {
                  "title" : "Defined Terms:",
                  "list" : [
                     [
                        "BREAST",
                        null
                     ],
                     [
                        "GONADS",
                        null
                     ],
                     [
                        "BONE MARROW",
                        null
                     ],
                     [
                        "FETUS",
                        null
                     ],
                     [
                        "LENS",
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
                           "The anatomic regions described by these terms are those that are particularly radiosensitive and for which it is conventional to obtain organ specific dose parameters."
                        ],
                        "el" : "para",
                        "attrs" : {
                           "xml:id" : "para_31571fa7-ef8f-4e4f-93ce-e8c5c265ba6b"
                        }
                     },
                     "\n                  "
                  ],
                  "el" : "note"
               }
            ],
            "req" : "3",
            "entity" : "Image",
            "name" : "Organ Exposed"
         },
         {
            "req" : "1",
            "entity" : "Image",
            "name" : "Organ Exposed",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-74"
            ],
            "module" : "Mammography Image",
            "desc" : [
               "Organ to which Organ Dose (0040,0316) applies.",
               {
                  "title" : "Enumerated Values:",
                  "list" : [
                     [
                        "BREAST",
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
                           "In the Mammography IOD, Organ Dose (0040,0316) refers to the mean glandular dose."
                        ],
                        "el" : "para",
                        "attrs" : {
                           "xml:id" : "para_ab061068-ce5e-4eb8-bd95-2ddcad212bd3"
                        }
                     },
                     "\n                  "
                  ],
                  "el" : "note"
               }
            ]
         }
      ],
      "(0040,0275)[<0>](0008,0050)" : [
         {
            "entity" : "Series",
            "req" : "3",
            "name" : "Accession Number",
            "usage" : "M",
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9"
            ],
            "desc" : "An identifier of the Imaging Service Request for this Requested Procedure."
         },
         {
            "entity" : "Series",
            "req" : "3",
            "name" : "Accession Number",
            "module" : "Mammography Series",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9"
            ],
            "usage" : "M",
            "desc" : "An identifier of the Imaging Service Request for this Requested Procedure."
         }
      ],
      "(0040,0560)" : {
         "desc" : [
            "Sequence of identifiers and detailed description of the specimen(s) being imaged.",
            "One or more Items shall be included in this Sequence.",
            "Each specimen imaged in the Pixel Data shall be identified by an Item in this Sequence. Other specimens in/on the container, but not imaged in the Pixel Data, may also be identified by Items in this Sequence."
         ],
         "usage" : "U",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Specimen Description Sequence",
         "req" : "1",
         "entity" : "Image"
      },
      "(0018,7004)" : {
         "module" : "DX Detector",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "usage" : "M",
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
                  ],
                  [
                     "FILM",
                     "Scanned film/screen"
                  ]
               ],
               "type" : "variablelist"
            }
         ],
         "req" : "2",
         "entity" : "Image",
         "name" : "Detector Type"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a043)" : {
         "req" : "1",
         "entity" : "Image",
         "name" : "Concept Name Code Sequence",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "U",
         "module" : "Common Instance Reference",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "entity" : "Image",
         "req" : "1"
      },
      "(0008,0110)[<0>](0008,0115)" : {
         "desc" : "The coding scheme full common name",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Coding Scheme Name",
         "entity" : "Image",
         "req" : "3"
      },
      "(0018,1006)" : {
         "name" : "Grid ID",
         "entity" : "Image",
         "req" : "3",
         "desc" : "Identifier of the grid",
         "usage" : "U",
         "module" : "X-Ray Grid",
         "mod_tables" : [
            "table_C.8-36b"
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a122)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "usage" : "U",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "entity" : "Image",
         "req" : "1C",
         "name" : "Time"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a120)" : {
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "name" : "DateTime",
         "req" : "1C",
         "entity" : "Series"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0062,000b)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "desc" : "Identifies the Segment Number to which the reference applies. Required if the Referenced SOP Instance is a Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present.",
         "req" : "1C",
         "entity" : "Patient",
         "name" : "Referenced Segment Number"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1150)" : [
         {
            "name" : "Referenced SOP Class UID",
            "req" : "1",
            "entity" : "Series",
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2",
               "table_10-11"
            ],
            "usage" : "M"
         },
         {
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "usage" : "M",
            "module" : "Mammography Series",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2",
               "table_10-11"
            ],
            "name" : "Referenced SOP Class UID",
            "entity" : "Series",
            "req" : "1"
         }
      ],
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)" : [
         {
            "desc" : [
               "Composite SOP Instance Reference value for this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
            ],
            "usage" : "M",
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "name" : "Referenced SOP Sequence",
            "req" : "1C",
            "entity" : "Series"
         },
         {
            "desc" : [
               "Composite SOP Instance Reference value for this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
            ],
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2"
            ],
            "module" : "Mammography Series",
            "name" : "Referenced SOP Sequence",
            "req" : "1C",
            "entity" : "Series"
         }
      ],
      "(0010,0026)[<0>](0010,0020)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "module" : "Patient",
         "desc" : "Primary identifier for the group of subjects.",
         "entity" : "Patient",
         "req" : "1",
         "name" : "Patient ID"
      },
      "(0040,0555)[<0>](0040,a136)" : {
         "req" : "1C",
         "entity" : "Image",
         "name" : "Referenced Frame Numbers",
         "usage" : "M",
         "module" : "Acquisition Context",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "desc" : [
            "References one or more frames in a Multi-frame SOP Instance. The first frame shall be denoted as frame number one.",
            "Required if this SOP Instance is a Multi-frame SOP Instance and the values in this Sequence item do not apply to all frames."
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1101)" : {
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Person Identification Code Sequence",
         "req" : "1",
         "entity" : "Image"
      },
      "(0040,0260)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "usage" : "M",
         "desc" : "Sequence describing the Protocol performed for this Procedure Step. One or more Items are permitted in this Sequence.",
         "req" : "3",
         "entity" : "Series",
         "name" : "Performed Protocol Code Sequence"
      },
      "(0100,0420)" : {
         "desc" : "The date and time when the SOP Instance Status (0100,0410) was set to AO.",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "SOP Authorization DateTime",
         "entity" : "Image",
         "req" : "3"
      },
      "(0008,1048)" : {
         "req" : "3",
         "entity" : "Study",
         "name" : "Physician(s) of Record",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
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
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a040)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
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
         "entity" : "Series",
         "req" : "1",
         "name" : "Value Type"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a043)" : {
         "module" : "General Series",
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
         "entity" : "Series",
         "name" : "Concept Name Code Sequence"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,08ea)" : {
         "req" : "1C",
         "entity" : "Series",
         "name" : "Measurement Units Code Sequence",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ]
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a124)" : {
         "name" : "UID",
         "entity" : "Image",
         "req" : "1C",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "module" : "General Image"
      },
      "(0088,0200)[<0>](0028,0106)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image",
         "desc" : "The minimum actual pixel value encountered in this image.",
         "entity" : "Image",
         "req" : "3",
         "name" : "Smallest Image Pixel Value"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a160)" : {
         "entity" : "Image",
         "req" : "1C",
         "name" : "Text Value",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ]
      },
      "(0028,0101)" : [
         {
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
            "module" : "Image Pixel",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "name" : "Bits Stored",
            "req" : "1",
            "entity" : "Image"
         },
         {
            "desc" : [
               "Number of bits stored for each pixel sample.",
               {
                  "type" : "variablelist",
                  "list" : [
                     [
                        "6",
                        null
                     ],
                     [
                        "7",
                        null
                     ],
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
            "mod_tables" : [
               "table_C.8-70"
            ],
            "module" : "DX Image",
            "usage" : "M",
            "name" : "Bits Stored",
            "entity" : "Image",
            "req" : "1"
         }
      ],
      "(0018,1041)" : {
         "desc" : "Volume injected in milliliters of diluted contrast agent",
         "usage" : "U",
         "module" : "Contrast/Bolus",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "name" : "Contrast/Bolus Volume",
         "entity" : "Image",
         "req" : "3"
      },
      "(0040,0515)[<0>](0040,0513)" : {
         "req" : "2",
         "entity" : "Image",
         "name" : "Issuer of the Container Identifier Sequence",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U",
         "desc" : [
            "Organization that assigned the Container Identifier.",
            "Zero or one Item shall be included in this Sequence."
         ]
      },
      "(0018,7040)" : {
         "desc" : "The X-Ray absorbing material used in the grid.",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-36b"
         ],
         "module" : "X-Ray Grid",
         "name" : "Grid Absorbing Material",
         "entity" : "Image",
         "req" : "3"
      },
      "(60xx,0011)" : {
         "desc" : "Number of Columns in Overlay.",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "module" : "Overlay Plane",
         "usage" : "C - Required if graphic annotation is present - See ",
         "name" : "Overlay Columns",
         "entity" : "Image",
         "req" : "1"
      },
      "(0018,1040)" : {
         "module" : "Contrast/Bolus",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "usage" : "U",
         "desc" : "Administration route of contrast agent",
         "req" : "3",
         "entity" : "Image",
         "name" : "Contrast/Bolus Route"
      },
      "(fffa,fffa)[<0>](0400,0100)" : {
         "desc" : "A UID that can be used to uniquely reference this signature.",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Digital Signature UID",
         "req" : "1",
         "entity" : "Image"
      },
      "(0010,1002)[<0>](0010,0021)" : {
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "usage" : "M",
         "name" : "Issuer of Patient ID",
         "req" : "3",
         "entity" : "Patient"
      },
      "(0088,0200)[<0>](0028,1103)" : {
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
         "usage" : "M",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "name" : "Blue Palette Color Lookup Table Descriptor",
         "entity" : "Image",
         "req" : "1C"
      },
      "(0008,1250)[<0>](0040,a170)" : {
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
         "name" : "Purpose of Reference Code Sequence",
         "entity" : "Series",
         "req" : "2"
      },
      "(0018,11a4)" : {
         "name" : "Paddle Description",
         "entity" : "Image",
         "req" : "3",
         "desc" : "Description of the compression paddle, if compression was applied to the body part during exposure.",
         "usage" : "U",
         "module" : "DX Positioning",
         "mod_tables" : [
            "table_C.8-72"
         ]
      },
      "(0012,0010)" : {
         "entity" : "Patient",
         "req" : "1",
         "name" : "Clinical Trial Sponsor Name",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject",
         "usage" : "U",
         "desc" : [
            "The name of the clinical trial or research sponsor. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.1.3.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ]
      },
      "(0010,0040)" : {
         "name" : "Patient's Sex",
         "req" : "2",
         "entity" : "Patient",
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
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient"
      },
      "(0040,0520)[<0>](0050,0012)" : {
         "entity" : "Image",
         "req" : "1",
         "name" : "Container Component Type Code Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "usage" : "U",
         "desc" : [
            "Type of container component.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0010,1100)[<0>](0040,e022)[<1>](0088,0130)" : {
         "entity" : "Patient",
         "req" : "2",
         "name" : "Storage Media File-Set ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "module" : "Patient",
         "usage" : "M",
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the referenced instance(s) reside."
      },
      "(0028,1054)" : {
         "name" : "Rescale Type",
         "req" : "1",
         "entity" : "Image",
         "desc" : [
            "Specifies the output units of Rescale Slope (0028,1053) and Rescale Intercept (0028,1052).",
            {
               "list" : [
                  [
                     "US",
                     "Unspecified"
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
                     "linkend" : "sect_C.8.11.3.1.2"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "mod_tables" : [
            "table_C.8-70"
         ],
         "module" : "DX Image",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a160)" : {
         "req" : "1C",
         "entity" : "Series",
         "name" : "Text Value",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ]
      },
      "(0028,1350)" : {
         "name" : "Partial View",
         "req" : "3",
         "entity" : "Image",
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
                     "content" : [
                        "This may occur when a breast is larger than the active area of the detector."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_f5852fae-e1a7-4a68-9371-05350a7cc454"
                     }
                  },
                  "\n                  "
               ],
               "el" : "note"
            },
            "If this Attribute is present, its value shall be NO if there is a View Modifier Code Sequence (0054,0222) Item of value (R-102D6, SRT, \"Magnification\") or (R-102D7, SRT, \"Spot Compression\").",
            {
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_9b08ca4a-c0df-4772-9ae8-0e191190c5a2"
                     },
                     "el" : "para",
                     "content" : [
                        "SRT is the preferred designator for SNOMED, but SNM3 is allowed for backward compatibility. See ",
                        {
                           "el" : "olink",
                           "attrs" : {
                              "targetptr" : "PS3.16",
                              "targetdoc" : "PS3.16",
                              "xrefstyle" : "select: labelnumber"
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
         "usage" : "M",
         "module" : "Mammography Image",
         "mod_tables" : [
            "table_C.8-74"
         ]
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0008,1199)[<2>](0008,1160)" : {
         "entity" : "Image",
         "req" : "1C",
         "name" : "Referenced Frame Number",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "usage" : "M",
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
      "(0008,1115)[<0>](0020,000e)" : {
         "req" : "1",
         "entity" : "Image",
         "name" : "Series Instance UID",
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "module" : "Common Instance Reference",
         "desc" : "Unique identifier of the Series containing the referenced Instances."
      },
      "(0040,0555)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "module" : "Acquisition Context",
         "desc" : [
            "A sequence of Items that describes the conditions present during the acquisition of the data of the SOP Instance.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "entity" : "Image",
         "req" : "2",
         "name" : "Acquisition Context Sequence"
      },
      "(0008,1140)[<0>](0008,1155)" : {
         "req" : "1",
         "entity" : "Image",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3",
            "table_10-11"
         ],
         "module" : "General Image",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(7fe0,0010)" : {
         "entity" : "Image",
         "req" : "1C",
         "name" : "Pixel Data",
         "usage" : "M",
         "module" : "Image Pixel",
         "mod_tables" : [
            "table_C.7-11b"
         ],
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
      "(0088,0200)[<0>](0028,1203)" : {
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
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "name" : "Blue Palette Color Lookup Table Data",
         "req" : "1C",
         "entity" : "Image"
      },
      "(0010,0030)" : {
         "desc" : "Birth date of the patient.",
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient's Birth Date",
         "entity" : "Patient",
         "req" : "2"
      },
      "(0028,2110)" : [
         {
            "desc" : [
               "Specifies whether an Image has undergone lossy compression (at a point in its lifetime).",
               {
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
                  ],
                  "title" : "Enumerated Values:"
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
            "usage" : "M",
            "module" : "General Image",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "name" : "Lossy Image Compression",
            "req" : "3",
            "entity" : "Image"
         },
         {
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-70"
            ],
            "module" : "DX Image",
            "desc" : [
               "Specifies whether an Image has undergone lossy compression (at a point in its lifetime).",
               {
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
                  ],
                  "title" : "Enumerated Values:"
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
            "req" : "1",
            "entity" : "Image",
            "name" : "Lossy Image Compression"
         }
      ],
      "(0040,a390)[<0>](0040,e001)" : {
         "req" : "1",
         "entity" : "Image",
         "name" : "HL7 Instance Identifier",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier)."
      },
      "(0040,0245)" : {
         "entity" : "Series",
         "req" : "3",
         "name" : "Performed Procedure Step Start Time",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "module" : "General Series",
         "usage" : "M",
         "desc" : "Time on which the Performed Procedure Step started."
      },
      "(0040,9096)[<0>](0040,9211)" : {
         "name" : "Real World Value Last Value Mapped",
         "entity" : "Image",
         "req" : "1C",
         "desc" : [
            "Specifies the last stored value mapped for the Real Word Value Intercept (0040,9224) and Real World Value Slope (0040,9225) or Real World Value LUT (0040,9212) of this Item.",
            "Required if Pixel Data (7FE0,0010) or Real World Value LUT Data (0040,9212) is present or Double Float Real World Value Last Value Mapped (0040,9213) is absent.",
            {
               "el" : "note",
               "content" : [
                  "\n                        ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_2a014060-59fc-451c-ad0d-b820960b5ad4"
                     },
                     "content" : [
                        "This Attribute may be used even when Float Pixel Data (7FE0,0008) or Double Float Pixel Data (7FE0,0009) are used instead of Pixel Data (7FE0,0010) if an integer of the size of this Attribute is sufficient to define the range."
                     ]
                  },
                  "\n                      "
               ]
            },
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
         "module" : "General Image",
         "usage" : "M"
      },
      "(0008,0016)" : {
         "name" : "SOP Class UID",
         "req" : "1",
         "entity" : "Image",
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
                  "targetptr" : "PS3.4",
                  "targetdoc" : "PS3.4",
                  "xrefstyle" : "select: labelnumber"
               },
               "el" : "olink"
            },
            "."
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(60xx,3000)" : {
         "name" : "Overlay Data",
         "req" : "1",
         "entity" : "Image",
         "desc" : [
            "Overlay pixel data.",
            "The order of pixels sent for each overlay is left to right, top to bottom, i.e., the upper left pixel is sent first followed by the remainder of the first row, followed by the first pixel of the 2nd row, then the remainder of the 2nd row and so on.",
            "Overlay data shall be contained in this Attribute.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.9.2.1.1"
                  }
               },
               " for further explanation."
            ]
         ],
         "module" : "Overlay Plane",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "usage" : "C - Required if graphic annotation is present - See "
      },
      "(0008,0013)" : {
         "req" : "3",
         "entity" : "Image",
         "name" : "Instance Creation Time",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "desc" : [
            "Time the SOP Instance was created.",
            "This is the time that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ]
      },
      "(0008,1062)[<0>](0008,0082)" : {
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
         "name" : "Institution Code Sequence",
         "entity" : "Study",
         "req" : "1C"
      },
      "(0008,0300)[<0>](0008,0301)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : "Odd group number within which the Private Data Element block is reserved.",
         "entity" : "Image",
         "req" : "1",
         "name" : "Private Group Reference"
      },
      "(0008,1140)[<0>](0062,000b)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3"
         ],
         "module" : "General Image",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "req" : "1C",
         "entity" : "Image",
         "name" : "Referenced Segment Number"
      },
      "(0028,2112)" : [
         {
            "name" : "Lossy Image Compression Ratio",
            "req" : "3",
            "entity" : "Image",
            "desc" : [
               "Describes the approximate lossy compression ratio(s) that have been applied to this image.",
               [
                  "See ",
                  {
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.7.6.1.1.5.2"
                     },
                     "el" : "xref"
                  },
                  "."
               ]
            ],
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "module" : "General Image"
         },
         {
            "req" : "1C",
            "entity" : "Image",
            "name" : "Lossy Image Compression Ratio",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-70"
            ],
            "module" : "DX Image",
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
               ],
               "Required if Lossy Image Compression (0028,2110) is \"01\"."
            ]
         }
      ],
      "(0040,0555)[<0>](0040,a30a)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "module" : "Acquisition Context",
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a set of one or more numeric values.",
            "Required if the value that Concept Name Code Sequence (0040,A043) requires (implies) is a set of one or more integers or real numbers. Shall not be present otherwise."
         ],
         "req" : "1C",
         "entity" : "Image",
         "name" : "Numeric Value"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a122)" : {
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "usage" : "M",
         "name" : "Time",
         "entity" : "Series",
         "req" : "1C"
      },
      "(0018,7065)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-34"
         ],
         "module" : "X-Ray Generation",
         "desc" : "Nominal percentage phototimer setting, where a more positive value indicates greater exposure and a more negative value indicates less exposure.",
         "entity" : "Image",
         "req" : "3",
         "name" : "Phototimer Setting"
      },
      "(0008,1010)" : {
         "desc" : "User defined name identifying the machine that produced the composite instances.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
         "name" : "Station Name",
         "entity" : "Equipment",
         "req" : "3"
      },
      "(0010,1100)[<0>](0020,000d)" : {
         "req" : "1C",
         "entity" : "Patient",
         "name" : "Study Instance UID",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "desc" : [
            "Unique identifier for the Study.",
            "Required if Type of Instances (0040,E020) is DICOM"
         ]
      },
      "(0020,0052)" : {
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
         "usage" : "C - Required if multiple images are obtained without releasing breast compression",
         "module" : "Frame of Reference",
         "mod_tables" : [
            "table_C.7-6"
         ],
         "name" : "Frame of Reference UID",
         "req" : "1",
         "entity" : "Frame of Reference"
      },
      "(0008,2112)[<0>](0008,1155)" : {
         "req" : "1",
         "entity" : "Image",
         "name" : "Referenced SOP Instance UID",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3",
            "table_10-11"
         ],
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a168)" : {
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "usage" : "U",
         "name" : "Concept Code Sequence",
         "entity" : "Image",
         "req" : "1C"
      },
      "(60xx,0100)" : {
         "mod_tables" : [
            "table_C.9-2"
         ],
         "module" : "Overlay Plane",
         "usage" : "C - Required if graphic annotation is present - See ",
         "desc" : [
            "Number of Bits Allocated in the Overlay.",
            "The value of this Attribute shall be 1.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "Formerly the standard described embedding the overlay data in the Image Pixel Data (7FE0,0010), in which case the value of this Attribute was required to be the same as Bits Allocated (0028,0100). This usage has been retired. See ",
                        {
                           "attrs" : {
                              "xl:href" : "ftp://medical.nema.org/MEDICAL/Dicom/2004/printed/04_03pu3.pdf"
                           },
                           "el" : "link",
                           "content" : [
                              "PS3.3-2004"
                           ]
                        },
                        "."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_2b05bb80-945d-4097-b644-005f3c89d1f9"
                     }
                  },
                  "\n                "
               ]
            }
         ],
         "entity" : "Image",
         "req" : "1",
         "name" : "Overlay Bits Allocated"
      },
      "(0018,1160)" : [
         {
            "mod_tables" : [
               "table_C.8-33",
               "table_C.8-35a"
            ],
            "module" : "X-Ray Acquisition Dose",
            "usage" : "U",
            "desc" : [
               "Type of filter(s) inserted into the X-Ray beam (e.g., wedges).",
               {
                  "title" : "Defined Terms:",
                  "type" : "variablelist",
                  "list" : [
                     [
                        "STRIP",
                        null
                     ],
                     [
                        "WEDGE",
                        null
                     ],
                     [
                        "BUTTERFLY",
                        null
                     ],
                     [
                        "MULTIPLE",
                        null
                     ],
                     [
                        "FLAT",
                        null
                     ],
                     [
                        "NONE",
                        null
                     ]
                  ]
               },
               {
                  "el" : "note",
                  "content" : [
                     "\n                    ",
                     {
                        "content" : [
                           "Multiple type of filters can be expressed by a combination, e.g., BUTTERFLY+WEDGE."
                        ],
                        "el" : "para",
                        "attrs" : {
                           "xml:id" : "para_8dcc74da-d51d-4f3f-8d1a-3396a2a80792"
                        }
                     },
                     "\n                  "
                  ]
               }
            ],
            "req" : "3",
            "entity" : "Image",
            "name" : "Filter Type"
         },
         {
            "usage" : "U",
            "mod_tables" : [
               "table_C.8-35a"
            ],
            "module" : "X-Ray Filtration",
            "desc" : [
               "Type of filter(s) inserted into the X-Ray beam (e.g., wedges).",
               {
                  "list" : [
                     [
                        "STRIP",
                        null
                     ],
                     [
                        "WEDGE",
                        null
                     ],
                     [
                        "BUTTERFLY",
                        null
                     ],
                     [
                        "MULTIPLE",
                        null
                     ],
                     [
                        "FLAT",
                        null
                     ],
                     [
                        "NONE",
                        null
                     ]
                  ],
                  "type" : "variablelist",
                  "title" : "Defined Terms:"
               },
               {
                  "content" : [
                     "\n                    ",
                     {
                        "el" : "para",
                        "attrs" : {
                           "xml:id" : "para_8dcc74da-d51d-4f3f-8d1a-3396a2a80792"
                        },
                        "content" : [
                           "Multiple type of filters can be expressed by a combination, e.g., BUTTERFLY+WEDGE."
                        ]
                     },
                     "\n                  "
                  ],
                  "el" : "note"
               }
            ],
            "entity" : "Image",
            "req" : "3",
            "name" : "Filter Type"
         }
      ],
      "(0060,3000)[<0>](0060,3002)" : {
         "desc" : "The number of \"bins\" (entries) in the histogram.",
         "mod_tables" : [
            "table_C.11.5-1"
         ],
         "module" : "Image Histogram",
         "usage" : "U",
         "name" : "Histogram Number of Bins",
         "entity" : "Image",
         "req" : "1"
      },
      "(0010,0024)" : {
         "entity" : "Patient",
         "req" : "3",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "usage" : "M",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ]
      },
      "(0040,0560)[<0>](0040,0554)" : {
         "entity" : "Image",
         "req" : "1",
         "name" : "Specimen UID",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U",
         "desc" : [
            "Unique Identifier for Specimen. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.22.1.2"
               },
               "el" : "xref"
            },
            "."
         ]
      },
      "(0018,a001)[<0>](0018,a002)" : {
         "entity" : "Image",
         "req" : "3",
         "name" : "Contribution DateTime",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "desc" : "The Date & Time when the equipment contributed to the composite instance."
      },
      "(0018,2041)[<0>](0018,2045)" : {
         "entity" : "Image",
         "req" : "3",
         "name" : "Target Label",
         "mod_tables" : [
            "table_C.8-74"
         ],
         "module" : "Mammography Image",
         "usage" : "M",
         "desc" : "Target description."
      },
      "(0040,0520)[<0>](0050,0015)" : {
         "name" : "Container Component Width",
         "req" : "3",
         "entity" : "Image",
         "desc" : "Width in mm of container component.",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U"
      },
      "(0018,1720)" : {
         "req" : "1C",
         "entity" : "Image",
         "name" : "Vertices of the Polygonal Collimator",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-28b"
         ],
         "module" : "X-Ray Collimator",
         "desc" : [
            "Required if a value of Collimator Shape (0018,1700) is POLYGONAL.",
            "Multiple Values where the first set of two values are:",
            "row of the origin vertex;",
            "column of the origin vertex.",
            "Two or more pairs of values follow and are the row and column coordinates of the other vertices of the polygon collimator. Polygon collimators are implicitly closed from the last vertex to the origin vertex and all edges shall be non-intersecting except at the vertices."
         ]
      },
      "(0018,0036)[<0>](0018,0038)" : {
         "mod_tables" : [
            "table_C.7-19"
         ],
         "module" : "Intervention",
         "usage" : "U",
         "desc" : [
            "Temporal relation of SOP Instance to intervention",
            {
               "type" : "variablelist",
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
               "title" : "Enumerated Values:"
            }
         ],
         "req" : "2",
         "entity" : "Image",
         "name" : "Intervention Status"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "entity" : "Patient",
         "req" : "1C",
         "name" : "Universal Entity ID Type",
         "usage" : "M",
         "module" : "Patient",
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
         ]
      },
      "(0018,a001)[<0>](0018,1200)" : {
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Date of Last Calibration",
         "entity" : "Image",
         "req" : "3"
      },
      "(0018,0036)[<0>](0054,0302)" : {
         "desc" : [
            "Sequence that identifies the Administration Route.",
            "Only a single Item is permitted in this Sequence."
         ],
         "usage" : "U",
         "module" : "Intervention",
         "mod_tables" : [
            "table_C.7-19"
         ],
         "name" : "Administration Route Code Sequence",
         "req" : "3",
         "entity" : "Image"
      },
      "(0008,1030)" : {
         "entity" : "Study",
         "req" : "3",
         "name" : "Study Description",
         "usage" : "M",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "Institution-generated description or classification of the Study (component) performed."
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,003a)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M",
         "desc" : [
            "The agency or department that assigned the patient identifier. Only a single Item is permitted in this Sequence.",
            {
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
               ],
               "el" : "note"
            }
         ],
         "req" : "3",
         "entity" : "Patient",
         "name" : "Assigning Agency or Department Code Sequence"
      },
      "(0020,000e)" : {
         "desc" : "Unique identifier of the Series.",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "name" : "Series Instance UID",
         "req" : "1",
         "entity" : "Series"
      },
      "(0040,0515)[<0>](0040,0512)" : {
         "req" : "1",
         "entity" : "Image",
         "name" : "Container Identifier",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "usage" : "U",
         "desc" : "The identifier for the container that contains the specimen(s) being imaged."
      },
      " (0010,0027) [<0>](0010,0028)" : {
         "name" : "Subject Relative Position in Image",
         "entity" : "Patient",
         "req" : "3",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "module" : "Patient",
         "usage" : "M"
      },
      "(fffa,fffa)[<0>](0400,0005)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : "A number used to identify which MAC Parameters Sequence item was used in the calculation of this Digital Signature.",
         "req" : "1",
         "entity" : "Image",
         "name" : "MAC ID Number"
      },
      "(0088,0200)" : {
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image",
         "usage" : "M",
         "desc" : [
            "This icon image is representative of the Image.",
            "Only a single Item is permitted in this Sequence."
         ],
         "req" : "3",
         "entity" : "Image",
         "name" : "Icon Image Sequence"
      },
      "(0028,0034)" : {
         "entity" : "Image",
         "req" : "1C",
         "name" : "Pixel Aspect Ratio",
         "usage" : "M",
         "module" : "Image Pixel",
         "mod_tables" : [
            "table_C.7-11b"
         ],
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
      "(0008,114a)[<0>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "entity" : "Image",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-11"
         ],
         "module" : "General Image",
         "usage" : "M"
      },
      "(0040,9096)[<0>](0040,08ea)" : {
         "entity" : "Image",
         "req" : "1",
         "name" : "Measurement Units Code Sequence",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "module" : "General Image",
         "usage" : "M",
         "desc" : [
            "Units of measurement.",
            "Only a single Item shall be included in this Sequence.",
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
         ]
      },
      "(0088,0200)[<0>](0028,1201)" : {
         "name" : "Red Palette Color Lookup Table Data",
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
         "usage" : "M",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a123)" : {
         "entity" : "Series",
         "req" : "1C",
         "name" : "Person Name",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0039)" : {
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "usage" : "M",
         "name" : "Assigning Jurisdiction Code Sequence",
         "entity" : "Patient",
         "req" : "3"
      },
      "(0008,9215)" : {
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
         "usage" : "M",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "name" : "Derivation Code Sequence",
         "req" : "3",
         "entity" : "Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a168)" : {
         "req" : "1C",
         "entity" : "Series",
         "name" : "Concept Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "usage" : "M",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ]
      },
      "(0054,0220)" : [
         {
            "name" : "View Code Sequence",
            "entity" : "Image",
            "req" : "3",
            "desc" : [
               "Sequence that describes the projection of the anatomic region of interest on the image receptor.",
               {
                  "el" : "note",
                  "content" : [
                     "\n                    ",
                     {
                        "content" : [
                           "It is strongly recommended that this Attribute be present, in order to ensure that images may be positioned correctly relative to one another for display."
                        ],
                        "el" : "para",
                        "attrs" : {
                           "xml:id" : "para_a52a7911-463d-407f-bafb-5d6adedb8299"
                        }
                     },
                     "\n                  "
                  ]
               },
               [
                  "Shall be consistent with View Position (0018,5101). See ",
                  {
                     "attrs" : {
                        "linkend" : "sect_C.8.11.5.1.1",
                        "xrefstyle" : "select: label"
                     },
                     "el" : "xref"
                  },
                  " for further explanation."
               ],
               "Only a single Item is permitted in this Sequence."
            ],
            "module" : "DX Positioning",
            "mod_tables" : [
               "table_C.8-72"
            ],
            "usage" : "U"
         },
         {
            "req" : "1",
            "entity" : "Image",
            "name" : "View Code Sequence",
            "module" : "Mammography Image",
            "mod_tables" : [
               "table_C.8-74"
            ],
            "usage" : "M",
            "desc" : [
               "Sequence that describes the projection of the anatomic region of interest on the image receptor.",
               "Only a single Item shall be included in this Sequence."
            ]
         }
      ],
      "(0012,0020)" : {
         "name" : "Clinical Trial Protocol ID",
         "entity" : "Patient",
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
         "usage" : "U",
         "module" : "Clinical Trial Subject",
         "mod_tables" : [
            "table_C.7-2b"
         ]
      },
      "(0040,0555)[<0>](0040,a040)" : {
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
         "module" : "Acquisition Context",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "usage" : "M",
         "name" : "Value Type",
         "req" : "3",
         "entity" : "Image"
      },
      "(0018,7062)" : {
         "name" : "Exposure Control Mode Description",
         "entity" : "Image",
         "req" : "3",
         "desc" : [
            "Text description of the mechanism of exposure control.",
            "May describe the number and type of exposure sensors or position of the sensitive area of the imaging detector."
         ],
         "usage" : "U",
         "module" : "X-Ray Generation",
         "mod_tables" : [
            "table_C.8-34"
         ]
      },
      "(0018,1020)" : {
         "req" : "3",
         "entity" : "Equipment",
         "name" : "Software Versions",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
         "usage" : "M",
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
         ]
      },
      "(0018,a001)[<0>](0040,a170)" : {
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
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Purpose of Reference Code Sequence",
         "req" : "1",
         "entity" : "Image"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0039)" : {
         "name" : "Assigning Jurisdiction Code Sequence",
         "req" : "3",
         "entity" : "Patient",
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
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a120)" : [
         {
            "name" : "DateTime",
            "req" : "1C",
            "entity" : "Series",
            "desc" : [
               "DateTime value for this name-value Item.",
               "Required if Value Type (0040,A040) is DATETIME."
            ],
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "usage" : "M"
         },
         {
            "entity" : "Series",
            "req" : "1C",
            "name" : "DateTime",
            "usage" : "M",
            "module" : "Mammography Series",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2"
            ],
            "desc" : [
               "DateTime value for this name-value Item.",
               "Required if Value Type (0040,A040) is DATETIME."
            ]
         }
      ],
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a161)" : {
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "usage" : "M",
         "name" : "Floating Point Value",
         "req" : "1C",
         "entity" : "Series"
      },
      "(0040,0520)[<0>](0050,001d)" : {
         "name" : "Container Component Diameter",
         "req" : "3",
         "entity" : "Image",
         "desc" : "Diameter in mm of container component for cylindrical or circular components.",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0080)" : {
         "req" : "1C",
         "entity" : "Image",
         "name" : "Institution Name",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present."
      },
      "(0040,0520)" : {
         "entity" : "Image",
         "req" : "3",
         "name" : "Container Component Sequence",
         "usage" : "U",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "desc" : [
            "Description of one or more components of the container (e.g., description of the slide and of the coverslip).",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0400,0500)[<0>](0400,0520)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "req" : "1",
         "entity" : "Image",
         "name" : "Encrypted Content"
      },
      "(0008,001b)" : {
         "entity" : "Image",
         "req" : "3",
         "name" : "Original Specialized SOP Class UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
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
      "(0018,1710)" : {
         "entity" : "Image",
         "req" : "1C",
         "name" : "Center of Circular Collimator",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-28b"
         ],
         "module" : "X-Ray Collimator",
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
         ]
      },
      "(0018,0036)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-19"
         ],
         "module" : "Intervention",
         "desc" : [
            "Sequence describing interventional therapies or procedures.",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "entity" : "Image",
         "name" : "Intervention Sequence"
      },
      "(0008,0096)[<0>](0040,1102)" : {
         "name" : "Person's Address",
         "entity" : "Study",
         "req" : "3",
         "desc" : "Person's mailing address",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study"
      },
      " (0010,0027) [<0>](0010,0020)" : {
         "name" : "Patient ID",
         "req" : "1",
         "entity" : "Patient",
         "desc" : "Primary identifier for an individual subject.",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "module" : "Patient",
         "usage" : "M"
      },
      "(0040,9096)[<0>](0028,3003)" : {
         "entity" : "Image",
         "req" : "1",
         "name" : "LUT Explanation",
         "usage" : "M",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "desc" : "Free form text explanation of the meaning of the transformation in this Item."
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1150)" : [
         {
            "req" : "1",
            "entity" : "Series",
            "name" : "Referenced SOP Class UID",
            "usage" : "M",
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-11"
            ],
            "desc" : "Uniquely identifies the referenced SOP Class."
         },
         {
            "name" : "Referenced SOP Class UID",
            "req" : "1",
            "entity" : "Series",
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "module" : "Mammography Series",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-11"
            ],
            "usage" : "M"
         }
      ],
      "(0018,1530)" : {
         "entity" : "Image",
         "req" : "3",
         "name" : "Detector Primary Angle",
         "usage" : "U",
         "module" : "DX Positioning",
         "mod_tables" : [
            "table_C.8-72"
         ],
         "desc" : [
            "Angle of the X-Ray beam in the row direction in degrees relative to the normal to the detector plane. Positive values indicate that the X-Ray beam is tilted toward higher numbered columns. Negative values indicate that the X-Ray beam is tilted toward lower numbered columns.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.7.5"
                  }
               },
               " for further explanation."
            ],
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.11.7",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for explanation if Positioner Type (0018,1508) is MAMMOGRAPHIC."
            ]
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
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "name" : "Type of Instances",
         "req" : "1",
         "entity" : "Patient"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a30a)" : {
         "entity" : "Image",
         "req" : "1C",
         "name" : "Numeric Value",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "module" : "General Image",
         "usage" : "M",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ]
      },
      "(0018,1030)" : {
         "name" : "Protocol Name",
         "entity" : "Series",
         "req" : "3",
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
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a168)" : [
         {
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
            ],
            "module" : "General Series",
            "name" : "Concept Code Sequence",
            "req" : "1C",
            "entity" : "Series"
         },
         {
            "req" : "1C",
            "entity" : "Series",
            "name" : "Concept Code Sequence",
            "usage" : "M",
            "module" : "Mammography Series",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2"
            ],
            "desc" : [
               "Coded concept value of this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is CODE."
            ]
         }
      ],
      "(60xx,0040)" : {
         "module" : "Overlay Plane",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "usage" : "C - Required if graphic annotation is present - See ",
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "entity" : "Image",
         "req" : "1",
         "name" : "Overlay Type"
      },
      "(0038,0010)" : {
         "desc" : "Identifier of the visit as assigned by the healthcare provider",
         "usage" : "U",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Admission ID",
         "entity" : "Study",
         "req" : "3"
      },
      "(0010,0020)" : {
         "name" : "Patient ID",
         "req" : "2",
         "entity" : "Patient",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "module" : "Patient"
      },
      "(0008,1062)[<0>](0040,1101)" : {
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "usage" : "M",
         "name" : "Person Identification Code Sequence",
         "req" : "1",
         "entity" : "Study"
      },
      "(0050,0010)[<0>](0018,1003)" : {
         "desc" : "User-supplied identifier for the device",
         "module" : "Device",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "usage" : "U",
         "name" : "Device ID",
         "req" : "3",
         "entity" : "Image"
      },
      "(0010,1001)" : {
         "desc" : "Other names used to identify the patient.",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "Other Patient Names",
         "entity" : "Patient",
         "req" : "3"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0008,1160)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "usage" : "U",
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
         "req" : "1C",
         "entity" : "Image",
         "name" : "Referenced Frame Number"
      },
      "(0028,1051)" : [
         {
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-70"
            ],
            "module" : "DX Image",
            "desc" : [
               [
                  "Window Width for display. See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "linkend" : "sect_C.8.11.3.1.5",
                        "xrefstyle" : "select: label"
                     }
                  },
                  " for further explanation."
               ],
               "Required if Window Center (0028,1050) is sent."
            ],
            "req" : "1C",
            "entity" : "Image",
            "name" : "Window Width"
         },
         {
            "name" : "Window Width",
            "req" : "1C",
            "entity" : "Image",
            "desc" : [
               [
                  "Window Width for display. See ",
                  {
                     "attrs" : {
                        "linkend" : "sect_C.11.2.1.2",
                        "xrefstyle" : "select: label"
                     },
                     "el" : "xref"
                  },
                  " for further explanation."
               ],
               "Required if Window Center (0028,1050) is sent."
            ],
            "usage" : "C - Required if Presentation Intent Type (0008,0068) is FOR PRESENTATION. Shall not be present otherwise.",
            "mod_tables" : [
               "table_C.11-2b"
            ],
            "module" : "VOI LUT"
         }
      ],
      "(0040,0250)" : {
         "name" : "Performed Procedure Step End Date",
         "entity" : "Series",
         "req" : "3",
         "desc" : "Date on which the Performed Procedure Step ended.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "module" : "General Series"
      },
      "(0040,0303)" : {
         "entity" : "Image",
         "req" : "3",
         "name" : "Exposed Area",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-33"
         ],
         "module" : "X-Ray Acquisition Dose",
         "desc" : [
            "Typical dimension of the exposed area at the detector plane. If Rectangular: row dimension followed by column; if Round: diameter. Measured in cm.",
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
                                 "content" : [
                                    "The exposed area should be consistent with values specified in the ",
                                    {
                                       "el" : "xref",
                                       "attrs" : {
                                          "xrefstyle" : "select: title",
                                          "linkend" : "sect_C.8.7.3"
                                       }
                                    },
                                    ", if present."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_54eb9a46-b0ed-4608-b584-8bf4c538d37a"
                                 },
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
                                    "This may be an estimated value based on assumptions about the patient's body size and habitus."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_d94e1314-1af0-4e69-81b3-7b8cf2c900cc"
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
                                    "This attribute is used in the ",
                                    {
                                       "attrs" : {
                                          "linkend" : "sect_C.4.16",
                                          "xrefstyle" : "select: title"
                                       },
                                       "el" : "xref"
                                    },
                                    " with units in mm (see ",
                                    {
                                       "attrs" : {
                                          "xrefstyle" : "select: label",
                                          "linkend" : "sect_C.4.16"
                                       },
                                       "el" : "xref"
                                    },
                                    ", ",
                                    {
                                       "el" : "xref",
                                       "attrs" : {
                                          "linkend" : "table_C.4-16",
                                          "xrefstyle" : "select: labelquotedtitle"
                                       }
                                    },
                                    ")."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_fd47b876-4803-4e68-860f-2d47bd4f66d3"
                                 },
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
         ]
      },
      "(0040,0555)[<0>](0040,a161)" : {
         "name" : "Floating Point Value",
         "entity" : "Image",
         "req" : "1C",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "module" : "Acquisition Context",
         "usage" : "M"
      },
      "(0018,7020)" : {
         "usage" : "M",
         "module" : "DX Detector",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "desc" : [
            "Physical dimensions of each detector element that comprises the detector matrix, in mm.",
            "Expressed as row dimension followed by column.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "This may not be the same as Detector Element Spacing (0018,7022) due to the presence of spacing material between detector elements."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_b8e80148-8f52-4061-a6fd-2c55bb61e623"
                     }
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "req" : "3",
         "entity" : "Image",
         "name" : "Detector Element Physical Size"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a122)" : {
         "req" : "1C",
         "entity" : "Series",
         "name" : "Time",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ]
      },
      "(0018,1156)" : [
         {
            "usage" : "U",
            "mod_tables" : [
               "table_C.8-33"
            ],
            "module" : "X-Ray Acquisition Dose",
            "desc" : [
               "Type of rectification used in the X-Ray generator.",
               {
                  "title" : "Defined Terms:",
                  "type" : "variablelist",
                  "list" : [
                     [
                        "SINGLE PHASE",
                        null
                     ],
                     [
                        "THREE PHASE",
                        null
                     ],
                     [
                        "CONST POTENTIAL",
                        null
                     ]
                  ]
               }
            ],
            "entity" : "Image",
            "req" : "3",
            "name" : "Rectification Type"
         },
         {
            "desc" : [
               "Type of rectification used in the X-Ray generator.",
               {
                  "title" : "Defined Terms:",
                  "list" : [
                     [
                        "SINGLE PHASE",
                        null
                     ],
                     [
                        "THREE PHASE",
                        null
                     ],
                     [
                        "CONST POTENTIAL",
                        null
                     ]
                  ],
                  "type" : "variablelist"
               }
            ],
            "usage" : "U",
            "mod_tables" : [
               "table_C.8-34"
            ],
            "module" : "X-Ray Generation",
            "name" : "Rectification Type",
            "req" : "3",
            "entity" : "Image"
         }
      ],
      "(0018,7046)" : {
         "name" : "Grid Aspect Ratio",
         "entity" : "Image",
         "req" : "3",
         "desc" : "Ratio of the vertical spacing and horizontal spacing of the X-Ray absorbing material used in the grid. Specified by a pair of integer values where the first value is the vertical size, and the second value is the horizontal size.",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-36b"
         ],
         "module" : "X-Ray Grid"
      },
      "(0028,0106)" : {
         "name" : "Smallest Image Pixel Value",
         "entity" : "Image",
         "req" : "3",
         "desc" : "The minimum actual pixel value encountered in this image.",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "module" : "Image Pixel",
         "usage" : "M"
      },
      "(0008,0096)[<0>](0008,0081)" : {
         "entity" : "Study",
         "req" : "3",
         "name" : "Institution Address",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable."
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1150)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "module" : "Patient",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Patient",
         "req" : "1",
         "name" : "Referenced SOP Class UID"
      },
      "(0018,7064)" : {
         "req" : "3",
         "entity" : "Image",
         "name" : "Exposure Status",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-34"
         ],
         "module" : "X-Ray Generation",
         "desc" : [
            "Whether the exposure was normally completed or not.",
            {
               "list" : [
                  [
                     "NORMAL",
                     null
                  ],
                  [
                     "ABORTED",
                     null
                  ]
               ],
               "type" : "variablelist",
               "title" : "Defined Terms:"
            }
         ]
      },
      "(0018,1191)" : [
         {
            "req" : "3",
            "entity" : "Image",
            "name" : "Anode Target Material",
            "module" : "X-Ray Acquisition Dose",
            "mod_tables" : [
               "table_C.8-33"
            ],
            "usage" : "U",
            "desc" : [
               "The primary material in the anode of the X-Ray source.",
               {
                  "title" : "Defined Terms:",
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
                  "type" : "variablelist"
               }
            ]
         },
         {
            "desc" : [
               "The primary material in the anode of the X-Ray source.",
               {
                  "title" : "Defined Terms:",
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
                  "type" : "variablelist"
               }
            ],
            "usage" : "U",
            "mod_tables" : [
               "table_C.8-34"
            ],
            "module" : "X-Ray Generation",
            "name" : "Anode Target Material",
            "req" : "3",
            "entity" : "Image"
         }
      ],
      "(0050,0010)[<0>](0008,1090)" : {
         "usage" : "U",
         "module" : "Device",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "desc" : "Manufacturer's model name of the device",
         "entity" : "Image",
         "req" : "3",
         "name" : "Manufacturer's Model Name"
      },
      "(0020,0062)" : [
         {
            "name" : "Image Laterality",
            "req" : "1",
            "entity" : "Image",
            "desc" : [
               "Laterality of (possibly paired) body part (as described in Anatomic Region Sequence (0008,2218)) examined.",
               {
                  "title" : "Enumerated Values:",
                  "list" : [
                     [
                        "R",
                        "right"
                     ],
                     [
                        "L",
                        "left"
                     ],
                     [
                        "U",
                        "unpaired"
                     ],
                     [
                        "B",
                        "both left and right"
                     ]
                  ],
                  "type" : "variablelist"
               },
               {
                  "content" : [
                     "\n                    ",
                     {
                        "attrs" : {
                           "xml:id" : "para_776d2cd5-6b5b-43c6-9fb6-2e81e1975c4b"
                        },
                        "el" : "para",
                        "content" : [
                           "This Attribute is mandatory, in order to ensure that images may be positioned correctly relative to one another for display."
                        ]
                     },
                     "\n                  "
                  ],
                  "el" : "note"
               },
               "Shall be consistent with any laterality information contained in Primary Anatomic Structure Modifier Sequence (0008,2230), if present.",
               {
                  "content" : [
                     "\n                    ",
                     {
                        "content" : [
                           "Laterality (0020,0060) is a Series level Attribute and must be the same for all Images in the Series, hence it must be absent."
                        ],
                        "el" : "para",
                        "attrs" : {
                           "xml:id" : "para_0b49e79c-de47-4131-8838-d61b70618829"
                        }
                     },
                     "\n                  "
                  ],
                  "el" : "note"
               }
            ],
            "mod_tables" : [
               "table_C.8-69"
            ],
            "module" : "DX Anatomy Imaged",
            "usage" : "M"
         },
         {
            "entity" : "Image",
            "req" : "1",
            "name" : "Image Laterality",
            "usage" : "M",
            "module" : "Mammography Image",
            "mod_tables" : [
               "table_C.8-74"
            ],
            "desc" : [
               "Laterality of the region examined.",
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
                     ],
                     [
                        "B",
                        "both (e.g., cleavage)"
                     ]
                  ],
                  "title" : "Enumerated Values:"
               }
            ]
         }
      ],
      "(0008,0110)[<0>](0008,0103)" : {
         "entity" : "Image",
         "req" : "3",
         "name" : "Coding Scheme Version",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The coding scheme version associated with the Coding Scheme Designator (0008,0102)."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a123)" : {
         "req" : "1C",
         "entity" : "Series",
         "name" : "Person Name",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ]
      },
      "(0008,1200)[<0>](0020,000d)" : {
         "mod_tables" : [
            "table_C.12-8"
         ],
         "module" : "Common Instance Reference",
         "usage" : "U",
         "desc" : "Unique identifier of the Study containing the referenced Instances.",
         "entity" : "Image",
         "req" : "1",
         "name" : "Study Instance UID"
      },
      "(fffa,fffa)" : {
         "name" : "Digital Signatures Sequence",
         "entity" : "Image",
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
         "module" : "SOP Common"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1160)" : {
         "name" : "Referenced Frame Number",
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
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0018,704c)" : {
         "req" : "3",
         "entity" : "Image",
         "name" : "Grid Focal Distance",
         "module" : "X-Ray Grid",
         "mod_tables" : [
            "table_C.8-36b"
         ],
         "usage" : "U",
         "desc" : "Focal distance in mm of a FOCUSED grid."
      },
      "(0010,0216)" : {
         "desc" : [
            "Information identifying an animal within a strain stock.",
            "Only a single Item is permitted in this sequence."
         ],
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "Strain Stock Sequence",
         "entity" : "Patient",
         "req" : "3"
      },
      "(0010,0035)" : {
         "name" : "Patient's Alternative Calendar",
         "entity" : "Patient",
         "req" : "1C",
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
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(0008,2218)" : [
         {
            "req" : "2",
            "entity" : "Image",
            "name" : "Anatomic Region Sequence",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-69",
               "table_10-6"
            ],
            "module" : "DX Anatomy Imaged",
            "desc" : [
               "Sequence that identifies the anatomic region of interest in this Instance (i.e., external anatomy, surface anatomy, or general region of the body).",
               "Zero or one Item shall be included in this Sequence."
            ]
         },
         {
            "desc" : [
               "Sequence that identifies the anatomic region of interest in this Instance (i.e., external anatomy, surface anatomy, or general region of the body).",
               "Only a single Item shall be included in this Sequence."
            ],
            "mod_tables" : [
               "table_C.8-74",
               "table_10-5"
            ],
            "module" : "Mammography Image",
            "usage" : "M",
            "name" : "Anatomic Region Sequence",
            "req" : "1",
            "entity" : "Image"
         }
      ],
      "(0018,1620)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-17a"
         ],
         "module" : "Display Shutter",
         "desc" : [
            "Required if Shutter Shape (0018,1600) is POLYGONAL.",
            "Multiple Values where the first set of two values are:",
            {
               "el" : "itemizedlist",
               "attrs" : {
                  "mark" : "none"
               },
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "\n                      ",
                        {
                           "attrs" : {
                              "xml:id" : "para_d59cd0c0-b975-4ac4-adee-bb16895e809c"
                           },
                           "el" : "para",
                           "content" : [
                              "row of the origin vertex\\column of the origin vertex"
                           ]
                        },
                        "\n                    "
                     ],
                     "el" : "listitem"
                  },
                  "\n                  "
               ]
            },
            "Two or more pairs of values follow and are the row and column coordinates of the other vertices of the polygon shutter. Polygon shutters are implicitly closed from the last vertex to the origin vertex and all edges shall be non-intersecting except at the vertices."
         ],
         "entity" : "Image",
         "req" : "1C",
         "name" : "Vertices of the Polygonal Shutter"
      },
      "(0040,9096)[<0>](0040,9224)" : {
         "req" : "1C",
         "entity" : "Image",
         "name" : "Real World Value Intercept",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "module" : "General Image",
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
            "Required if Float Pixel Data (7FE0,0008) or Double Float Pixel Data (7FE0,0009) are present or Real World Value LUT Data (0040,9212) is not present."
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a123)" : {
         "name" : "Person Name",
         "req" : "1C",
         "entity" : "Image",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen"
      },
      "(0012,0083)" : {
         "entity" : "Study",
         "req" : "3",
         "name" : "Consent for Clinical Trial Use Sequence",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "module" : "Clinical Trial Study",
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
         ]
      },
      "(0018,1049)" : {
         "name" : "Contrast/Bolus Ingredient Concentration",
         "entity" : "Image",
         "req" : "3",
         "desc" : "Milligrams of active ingredient per milliliter of (diluted) agent",
         "usage" : "U",
         "module" : "Contrast/Bolus",
         "mod_tables" : [
            "table_C.7-12"
         ]
      },
      "(0008,2218)[<0>](0008,2220)" : [
         {
            "req" : "3",
            "entity" : "Image",
            "name" : "Anatomic Region Modifier Sequence",
            "mod_tables" : [
               "table_C.8-69",
               "table_10-6"
            ],
            "module" : "DX Anatomy Imaged",
            "usage" : "M",
            "desc" : [
               "Sequence of Items that modifies the anatomic region of interest of this Instance",
               "One or more Items are permitted in this Sequence."
            ]
         },
         {
            "name" : "Anatomic Region Modifier Sequence",
            "entity" : "Image",
            "req" : "3",
            "desc" : [
               "Sequence of Items that modifies the anatomic region of interest of this Instance.",
               "One or more Items are permitted in this Sequence."
            ],
            "usage" : "M",
            "module" : "Mammography Image",
            "mod_tables" : [
               "table_C.8-74",
               "table_10-5"
            ]
         }
      ],
      "(0008,010f)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
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
         "entity" : "Image",
         "name" : "Context Identifier"
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "name" : "Referenced Patient Photo Sequence",
         "entity" : "Patient",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,1002)" : [
         {
            "entity" : "Series",
            "req" : "3",
            "name" : "Reason for the Requested Procedure",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9"
            ],
            "module" : "General Series",
            "usage" : "M",
            "desc" : "Reason for requesting this procedure."
         },
         {
            "name" : "Reason for the Requested Procedure",
            "entity" : "Series",
            "req" : "3",
            "desc" : "Reason for requesting this procedure.",
            "usage" : "M",
            "module" : "Mammography Series",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9"
            ]
         }
      ],
      "(0050,0010)[<0>](0008,0070)" : {
         "name" : "Manufacturer",
         "entity" : "Image",
         "req" : "3",
         "desc" : "Manufacturer of the device",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "module" : "Device"
      },
      "(0008,1072)[<0>](0008,0081)" : {
         "name" : "Institution Address",
         "req" : "3",
         "entity" : "Series",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,08ea)" : {
         "usage" : "M",
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
         "entity" : "Series",
         "req" : "1C",
         "name" : "Measurement Units Code Sequence"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)" : [
         {
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9"
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
            "entity" : "Series",
            "req" : "3",
            "name" : "Content Item Modifier Sequence"
         },
         {
            "req" : "3",
            "entity" : "Series",
            "name" : "Content Item Modifier Sequence",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9"
            ],
            "module" : "Mammography Series",
            "usage" : "M",
            "desc" : [
               "Sequence that specifies modifiers for a Protocol Context Content Item. One or more Items are permitted in this Sequence. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.4.10.1"
                  }
               },
               "."
            ]
         }
      ],
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)" : {
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
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "usage" : "M",
         "name" : "Assigning Facility Sequence",
         "entity" : "Patient",
         "req" : "3"
      },
      "(0008,1140)[<0>](0008,1160)" : {
         "req" : "1C",
         "entity" : "Image",
         "name" : "Referenced Frame Number",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3"
         ],
         "module" : "General Image",
         "usage" : "M",
         "desc" : [
            "Identifies the frame numbers within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1.",
            {
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
               ],
               "el" : "note"
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ]
      },
      "(0054,0414)" : {
         "desc" : [
            "Sequence that describes the orientation of the patient with respect to the gantry.",
            "Only a single Item is permitted in this Sequence."
         ],
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-72"
         ],
         "module" : "DX Positioning",
         "name" : "Patient Gantry Relationship Code Sequence",
         "req" : "3",
         "entity" : "Image"
      },
      "(0010,1021)" : {
         "entity" : "Study",
         "req" : "3",
         "name" : "Patient's Size Code Sequence",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "desc" : [
            "Patient's size category code",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0008,1120)" : {
         "desc" : [
            "A sequence that provides reference to a Patient SOP Class/Instance pair.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "Referenced Patient Sequence",
         "entity" : "Patient",
         "req" : "3"
      },
      "(0008,114a)[<0>](0008,1150)" : {
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-11"
         ],
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "entity" : "Image",
         "name" : "Referenced SOP Class UID"
      },
      "(0018,1706)" : {
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
         "mod_tables" : [
            "table_C.8-28b"
         ],
         "module" : "X-Ray Collimator",
         "usage" : "U",
         "name" : "Collimator Upper Horizontal Edge",
         "req" : "1C",
         "entity" : "Image"
      },
      "(0018,1044)" : {
         "mod_tables" : [
            "table_C.7-12"
         ],
         "module" : "Contrast/Bolus",
         "usage" : "U",
         "desc" : "Total amount in milliliters of the undiluted contrast agent",
         "entity" : "Image",
         "req" : "3",
         "name" : "Contrast/Bolus Total Dose"
      },
      "(0010,0218)" : {
         "req" : "3",
         "entity" : "Patient",
         "name" : "Strain Additional Information",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "desc" : [
            "Additional information about the strain of the patient that is not encoded in the formal nomenclature used in Strain Description (0010,0212). See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.1.1.4"
               }
            },
            "."
         ]
      },
      "(0012,0081)" : {
         "entity" : "Patient",
         "req" : "1C",
         "name" : "Clinical Trial Protocol Ethics Committee Name",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject",
         "usage" : "U",
         "desc" : "Name of the Ethics Committee or Institutional Review Board (IRB) or Institutional Animal Care and Use Committees (IACUC) responsible for approval of the Clinical Trial or research. Required if Clinical Trial Protocol Ethics Committee Approval Number (0012,0082) is present."
      },
      "(0028,1300)" : {
         "mod_tables" : [
            "table_C.8-74"
         ],
         "module" : "Mammography Image",
         "usage" : "M",
         "desc" : [
            "Whether or not the imaged breast contains a breast implant regardless of the visibility of a breast implant in the Pixel Data.",
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
                        "The value is expected to be YES for all images acquired on a breast that contains a breast implant, even when a breast implant is displaced during image acquisition."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_780f754c-f8ff-4383-9e9f-cf6dacb133f3"
                     }
                  },
                  "\n                  "
               ]
            }
         ],
         "req" : "3",
         "entity" : "Image",
         "name" : "Breast Implant Present"
      },
      "(0054,0220)[<0>](0054,0222)" : [
         {
            "req" : "3",
            "entity" : "Image",
            "name" : "View Modifier Code Sequence",
            "mod_tables" : [
               "table_C.8-72"
            ],
            "module" : "DX Positioning",
            "usage" : "U",
            "desc" : [
               "View modifier.",
               "One or more Items are permitted in this Sequence."
            ]
         },
         {
            "desc" : [
               "View modifier.",
               "Zero or more Items shall be included in this Sequence."
            ],
            "usage" : "M",
            "module" : "Mammography Image",
            "mod_tables" : [
               "table_C.8-74"
            ],
            "name" : "View Modifier Code Sequence",
            "req" : "2",
            "entity" : "Image"
         }
      ],
      "(0038,0014)[<0>](0040,0031)" : {
         "entity" : "Study",
         "req" : "1C",
         "name" : "Local Namespace Entity ID",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "usage" : "U",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise."
      },
      "(0018,1511)" : [
         {
            "req" : "3",
            "entity" : "Image",
            "name" : "Positioner Secondary Angle",
            "module" : "DX Positioning",
            "mod_tables" : [
               "table_C.8-72"
            ],
            "usage" : "U",
            "desc" : [
               "Position of the X-Ray beam about the patient from the CAU to CRA direction where movement from CAU to vertical is positive, if Positioner Type (0018,1508) is CARM.",
               [
                  "See ",
                  {
                     "attrs" : {
                        "linkend" : "sect_C.8.7.5",
                        "xrefstyle" : "select: label"
                     },
                     "el" : "xref"
                  },
                  " for further explanation if Positioner Type (0018,1508) is CARM."
               ],
               [
                  "See ",
                  {
                     "attrs" : {
                        "linkend" : "sect_C.8.11.7",
                        "xrefstyle" : "select: label"
                     },
                     "el" : "xref"
                  },
                  " for explanation if Positioner Type (0018,1508) is MAMMOGRAPHIC."
               ]
            ]
         },
         {
            "name" : "Positioner Secondary Angle",
            "req" : "3",
            "entity" : "Image",
            "desc" : "Position in degrees of the X-Ray beam vector in the sagittal anatomical plane as if the patient were standing where movement of the X-Ray source from anterior to posterior is positive, and vertical is zero.",
            "mod_tables" : [
               "table_C.8-74"
            ],
            "module" : "Mammography Image",
            "usage" : "M"
         }
      ],
      "(0018,1610)" : {
         "desc" : "Required if Shutter Shape (0018,1600) is CIRCULAR. Location of the center of the circular shutter with respect to pixels in the image given as row and column.",
         "usage" : "U",
         "module" : "Display Shutter",
         "mod_tables" : [
            "table_C.7-17a"
         ],
         "name" : "Center of Circular Shutter",
         "req" : "1C",
         "entity" : "Image"
      },
      "(0010,0216)[<0>](0010,0215)" : {
         "name" : "Strain Source Registry Code Sequence",
         "entity" : "Patient",
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
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "usage" : "M"
      },
      "(0018,1151)" : [
         {
            "name" : "X-Ray Tube Current",
            "req" : "3",
            "entity" : "Image",
            "desc" : "X-Ray Tube Current in mA.",
            "usage" : "U",
            "module" : "X-Ray Acquisition Dose",
            "mod_tables" : [
               "table_C.8-33"
            ]
         },
         {
            "usage" : "U",
            "module" : "X-Ray Generation",
            "mod_tables" : [
               "table_C.8-34"
            ],
            "desc" : "X-Ray Tube Current in mA.",
            "req" : "3",
            "entity" : "Image",
            "name" : "X-Ray Tube Current"
         }
      ],
      "(0040,9096)[<0>](0040,9213)" : {
         "desc" : [
            "Specifies the last stored value mapped for the Real Word Value Intercept (0040,9224) and Real World Value Slope (0040,9225) of this Item.",
            "Required if Real World Value Last Value Mapped (0040,9211) is absent.",
            {
               "content" : [
                  "\n                        ",
                  {
                     "content" : [
                        "The same Attribute with a double float precision value is used whether or not Float Pixel Data (7FE0,0008) or Double Float Pixel Data (7FE0,0009) are present, an integer value is not sufficient."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_bd1c2eab-c851-45bf-8577-5108abbb24a6"
                     }
                  },
                  "\n                      "
               ],
               "el" : "note"
            }
         ],
         "usage" : "M",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "name" : "Double Float Real World Value Last Value Mapped",
         "entity" : "Image",
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a121)" : [
         {
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "usage" : "M",
            "desc" : [
               "Date value for this name-value Item.",
               "Required if Value Type (0040,A040) is DATE."
            ],
            "req" : "1C",
            "entity" : "Series",
            "name" : "Date"
         },
         {
            "name" : "Date",
            "entity" : "Series",
            "req" : "1C",
            "desc" : [
               "Date value for this name-value Item.",
               "Required if Value Type (0040,A040) is DATE."
            ],
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2"
            ],
            "module" : "Mammography Series"
         }
      ],
      "(0008,2228)" : [
         {
            "desc" : [
               "Sequence of Items that identifies the primary anatomic structure(s) of interest in this Instance.",
               "One or more Items are permitted in this Sequence."
            ],
            "mod_tables" : [
               "table_C.8-69",
               "table_10-6",
               "table_10-8"
            ],
            "module" : "DX Anatomy Imaged",
            "usage" : "M",
            "name" : "Primary Anatomic Structure Sequence",
            "entity" : "Image",
            "req" : "3"
         },
         {
            "desc" : [
               "Sequence of Items that identifies the primary anatomic structure(s) of interest in this Instance.",
               "One or more Items are permitted in this Sequence."
            ],
            "mod_tables" : [
               "table_C.8-74",
               "table_10-5",
               "table_10-8"
            ],
            "module" : "Mammography Image",
            "usage" : "M",
            "name" : "Primary Anatomic Structure Sequence",
            "entity" : "Image",
            "req" : "3"
         }
      ],
      "(0008,0096)[<0>](0040,1101)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "usage" : "M",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1",
         "entity" : "Study",
         "name" : "Person Identification Code Sequence"
      },
      " (0010,0027) " : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
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
         "entity" : "Patient",
         "req" : "\n                  3 ",
         "name" : "Group of Patients Identification Sequence"
      },
      "(0028,0301)" : [
         {
            "name" : "Burned In Annotation",
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
            ],
            "mod_tables" : [
               "table_C.7-9"
            ],
            "module" : "General Image",
            "usage" : "M"
         },
         {
            "entity" : "Image",
            "req" : "1",
            "name" : "Burned In Annotation",
            "module" : "DX Image",
            "mod_tables" : [
               "table_C.8-70"
            ],
            "usage" : "M",
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
               }
            ]
         }
      ],
      "(0038,0062)" : {
         "desc" : "Description of the type of service episode.",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "usage" : "U",
         "name" : "Service Episode Description",
         "entity" : "Study",
         "req" : "3"
      },
      "(0040,a390)[<0>](0008,1155)" : {
         "entity" : "Image",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "module" : "SOP Common",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0008,1072)[<0>](0008,0080)" : {
         "name" : "Institution Name",
         "entity" : "Series",
         "req" : "1C",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series",
         "usage" : "M"
      },
      "(0008,0053)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
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
         "entity" : "Image",
         "req" : "1C",
         "name" : "Query/Retrieve View"
      },
      "(0018,8150)" : [
         {
            "mod_tables" : [
               "table_C.8-33"
            ],
            "module" : "X-Ray Acquisition Dose",
            "usage" : "U",
            "desc" : "Duration of X-Ray exposure in \u00b5sec.",
            "entity" : "Image",
            "req" : "3",
            "name" : "Exposure Time in \u00b5S"
         },
         {
            "name" : "Exposure Time in \u00b5S",
            "req" : "3",
            "entity" : "Image",
            "desc" : "Duration of X-Ray exposure in \u00b5sec.",
            "mod_tables" : [
               "table_C.8-34"
            ],
            "module" : "X-Ray Generation",
            "usage" : "U"
         }
      ],
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "U",
         "name" : "Referenced SOP Class UID",
         "entity" : "Image",
         "req" : "1"
      },
      "(0028,1055)" : [
         {
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-70"
            ],
            "module" : "DX Image",
            "desc" : "Free form explanation of the meaning of the Window Center and Width. Multiple values correspond to multiple Window Center and Width values.",
            "entity" : "Image",
            "req" : "3",
            "name" : "Window Center & Width Explanation"
         },
         {
            "desc" : "Free form explanation of the meaning of the Window Center and Width. Multiple values correspond to multiple Window Center and Width values.",
            "usage" : "C - Required if Presentation Intent Type (0008,0068) is FOR PRESENTATION. Shall not be present otherwise.",
            "module" : "VOI LUT",
            "mod_tables" : [
               "table_C.11-2b"
            ],
            "name" : "Window Center & Width Explanation",
            "req" : "3",
            "entity" : "Image"
         }
      ],
      "(0018,1450)" : {
         "module" : "DX Positioning",
         "mod_tables" : [
            "table_C.8-72"
         ],
         "usage" : "U",
         "desc" : [
            "Angle of the X-Ray beam in degree relative to an orthogonal axis to the detector plane. Positive values indicate that the tilt is toward the head of the table.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_67d0bb7d-c6a2-4344-a5f2-4b1e37b87697"
                     },
                     "el" : "para",
                     "content" : [
                        "The detector plane is assumed to be parallel to the table plane."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            },
            "Only meaningful if Positioner Type (0018,1508) is COLUMN."
         ],
         "req" : "3",
         "entity" : "Image",
         "name" : "Column Angulation"
      },
      "(0100,0424)" : {
         "entity" : "Image",
         "req" : "3",
         "name" : "SOP Authorization Comment",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : "Any comments associated with the setting of the SOP Instance Status (0100,0410) to AO."
      },
      "(0040,0520)[<0>](0050,001c)" : {
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U",
         "desc" : "Length in mm of container component.",
         "entity" : "Image",
         "req" : "3",
         "name" : "Container Component Length"
      },
      "(0400,0561)[<0>](0400,0550)" : {
         "desc" : [
            "Sequence that contains all the Attributes, with their previous values, that were modified or removed from the main data set.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Modified Attributes Sequence",
         "entity" : "Image",
         "req" : "1"
      },
      "(0018,1491)" : {
         "desc" : [
            "Form of tomography:",
            {
               "title" : "Defined Terms:",
               "type" : "variablelist",
               "list" : [
                  [
                     "MOTION",
                     null
                  ],
                  [
                     "TOMOSYNTHESIS",
                     null
                  ]
               ]
            }
         ],
         "module" : "X-Ray Tomography Acquisition",
         "mod_tables" : [
            "table_C.8-32"
         ],
         "usage" : "U",
         "name" : "Tomo Class",
         "entity" : "Image",
         "req" : "3"
      },
      "(0040,0520)[<0>](0008,1090)" : {
         "desc" : "Manufacturer's model name of the container component.",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "name" : "Manufacturer's Model Name",
         "req" : "3",
         "entity" : "Image"
      },
      "(0018,7052)" : [
         {
            "req" : "3",
            "entity" : "Image",
            "name" : "Filter Thickness Minimum",
            "module" : "X-Ray Acquisition Dose",
            "mod_tables" : [
               "table_C.8-33",
               "table_C.8-35a"
            ],
            "usage" : "U",
            "desc" : "The minimum thickness in mm of the X-Ray absorbing material used in the filters. May be multi-valued, with values corresponding to the respective values in Filter Material (0018,7050)."
         },
         {
            "usage" : "U",
            "module" : "X-Ray Filtration",
            "mod_tables" : [
               "table_C.8-35a"
            ],
            "desc" : "The minimum thickness in mm of the X-Ray absorbing material used in the filters. May be multi-valued, with values corresponding to the respective values in Filter Material (0018,7050).",
            "req" : "3",
            "entity" : "Image",
            "name" : "Filter Thickness Minimum"
         }
      ],
      "(0010,1100)[<0>](0040,e023)[<1>](0040,e010)" : {
         "name" : "Retrieve URI",
         "req" : "1",
         "entity" : "Patient",
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
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M"
      },
      "(0008,1049)[<0>](0008,0082)" : {
         "name" : "Institution Code Sequence",
         "entity" : "Study",
         "req" : "1C",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "usage" : "M"
      },
      "(0060,3000)[<0>](0060,3010)" : {
         "desc" : "Free form text explanation of the meaning of the LUT.",
         "module" : "Image Histogram",
         "mod_tables" : [
            "table_C.11.5-1"
         ],
         "usage" : "U",
         "name" : "Histogram Explanation",
         "entity" : "Image",
         "req" : "3"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a161)" : {
         "req" : "1C",
         "entity" : "Image",
         "name" : "Floating Point Value",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ]
      },
      "(0088,0200)[<0>](0028,0011)" : {
         "desc" : "Number of columns in the image",
         "usage" : "M",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "name" : "Columns",
         "req" : "1",
         "entity" : "Image"
      },
      "(0010,0034)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "usage" : "M",
         "desc" : [
            "Date of death of the named patient in the Alternative Calendar (0010,0035).",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_9f9d00e7-4c3c-4ecd-9b0f-c6dc916409e9"
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
         "entity" : "Patient",
         "req" : "3",
         "name" : "Patient's Death Date in Alternative Calendar"
      },
      "(0008,1052)[<0>](0040,1103)" : {
         "name" : "Person's Telephone Numbers",
         "entity" : "Series",
         "req" : "3",
         "desc" : "Person's telephone number(s)",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series"
      },
      "(0008,0096)[<0>](0008,0082)" : {
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1C",
         "entity" : "Study",
         "name" : "Institution Code Sequence"
      },
      "(0028,2002)" : {
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
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "module" : "Image Pixel",
         "usage" : "M",
         "name" : "Color Space",
         "entity" : "Image",
         "req" : "3"
      },
      "(0008,1140)[<0>](0008,1150)" : {
         "req" : "1",
         "entity" : "Image",
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3",
            "table_10-11"
         ],
         "module" : "General Image",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0012,0071)" : {
         "req" : "3",
         "entity" : "Series",
         "name" : "Clinical Trial Series ID",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "module" : "Clinical Trial Series",
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
         ]
      },
      "(0018,7041)" : {
         "desc" : "The spacing material used in the grid.",
         "mod_tables" : [
            "table_C.8-36b"
         ],
         "module" : "X-Ray Grid",
         "usage" : "U",
         "name" : "Grid Spacing Material",
         "req" : "3",
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "entity" : "Image",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "U",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(0008,0106)" : {
         "entity" : "Image",
         "req" : "1",
         "name" : "Context Group Version",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
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
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0033)" : {
         "entity" : "Patient",
         "req" : "1C",
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "usage" : "M",
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
                     "attrs" : {
                        "xml:id" : "para_cdc31146-8c35-4426-8c4c-509f0256519d"
                     },
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
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a168)" : [
         {
            "entity" : "Series",
            "req" : "1C",
            "name" : "Concept Code Sequence",
            "usage" : "M",
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "desc" : [
               "Coded concept value of this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is CODE."
            ]
         },
         {
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2"
            ],
            "module" : "Mammography Series",
            "desc" : [
               "Coded concept value of this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is CODE."
            ],
            "entity" : "Series",
            "req" : "1C",
            "name" : "Concept Code Sequence"
         }
      ],
      "(0008,0021)" : {
         "entity" : "Series",
         "req" : "3",
         "name" : "Series Date",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "desc" : "Date the Series started."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a160)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "req" : "1C",
         "entity" : "Series",
         "name" : "Text Value"
      },
      "(0088,0200)[<0>](7fe0,0010)" : {
         "req" : "1C",
         "entity" : "Image",
         "name" : "Pixel Data",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image",
         "usage" : "M",
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
      "(0010,1100)[<0>](0040,e022)" : {
         "entity" : "Patient",
         "req" : "1C",
         "name" : "DICOM Media Retrieval Sequence",
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "desc" : [
            "Details for retrieving instances from Media.",
            "Required if DICOM Retrieval Sequence (0040,E021), WADO Retrieval Sequence (0040,E023), and WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "This sequence shall only identify media known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0010,1100)[<0>](0040,e023)" : {
         "desc" : [
            "Details for retrieving instances available via WADO-URI.",
            {
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "This sequence addresses use of the URI-based Web Access to DICOM Objects. Retrieval via the Web Services-based WADO-WS is addressed in the XDS Retrieval Sequence (0040,E024)."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_87c7f326-107c-4a18-88b9-60712a9f7041"
                     }
                  },
                  "\n              "
               ],
               "el" : "note"
            },
            "Required if DICOM Retrieval Sequence (0040,E021), DICOM Media Retrieval Sequence (0040,E022), WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "One or more Items shall be included in this Sequence."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "module" : "Patient",
         "name" : "WADO Retrieval Sequence",
         "entity" : "Patient",
         "req" : "1C"
      },
      "(0008,1049)[<0>](0008,0081)" : {
         "req" : "3",
         "entity" : "Study",
         "name" : "Institution Address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "usage" : "M",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable."
      },
      "(0088,0200)[<0>](0028,0102)" : {
         "name" : "High Bit",
         "req" : "1",
         "entity" : "Image",
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
         "usage" : "M",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ]
      },
      "(0028,1101)" : {
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
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "usage" : "M",
         "name" : "Red Palette Color Lookup Table Descriptor",
         "req" : "1C",
         "entity" : "Image"
      },
      "(0008,0300)[<0>](0008,0305)" : {
         "req" : "3",
         "entity" : "Image",
         "name" : "Deidentification Action Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "desc" : "Actions to be performed on element within the block that are not safe from identify leakage."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1150)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "General Series",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "entity" : "Series",
         "name" : "Referenced SOP Class UID"
      },
      "(0012,0042)" : {
         "req" : "1C",
         "entity" : "Patient",
         "name" : "Clinical Trial Subject Reading ID",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-2b"
         ],
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
         ]
      },
      "(0040,0520)[<0>](0050,001b)" : {
         "name" : "Container Component ID",
         "req" : "3",
         "entity" : "Image",
         "desc" : "Manufacturer's identifier of the container component, e.g., Lot Number and/or Version.",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U"
      },
      "(0018,a001)[<0>](0008,1070)" : {
         "entity" : "Image",
         "req" : "3",
         "name" : "Operators' Name",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "desc" : "Name(s) of the operator(s) of the contributing equipment."
      },
      "(0040,0555)[<0>](0040,a122)" : {
         "module" : "Acquisition Context",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "usage" : "M",
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
         ],
         "req" : "1C",
         "entity" : "Image",
         "name" : "Time"
      },
      "(0020,0010)" : {
         "name" : "Study ID",
         "entity" : "Study",
         "req" : "2",
         "desc" : "User or equipment generated Study identifier.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1150)" : {
         "entity" : "Series",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0018,7060)" : {
         "name" : "Exposure Control Mode",
         "entity" : "Image",
         "req" : "3",
         "desc" : [
            "Type of exposure control.",
            {
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
               "type" : "variablelist",
               "title" : "Defined Terms:"
            }
         ],
         "module" : "X-Ray Generation",
         "mod_tables" : [
            "table_C.8-34"
         ],
         "usage" : "U"
      },
      "(0010,2201)" : {
         "entity" : "Patient",
         "req" : "1C",
         "name" : "Patient Species Description",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "usage" : "M",
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
            "Required if the patient is an animal and if Patient Species Code Sequence (0010,2202) is not present. May be present otherwise."
         ]
      },
      "(0028,0100)" : [
         {
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
            ],
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "module" : "Image Pixel",
            "name" : "Bits Allocated",
            "entity" : "Image",
            "req" : "1"
         },
         {
            "name" : "Bits Allocated",
            "req" : "1",
            "entity" : "Image",
            "desc" : [
               "Number of bits allocated for each pixel sample.",
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
                  "type" : "variablelist",
                  "title" : "Enumerated Values:"
               }
            ],
            "usage" : "M",
            "module" : "DX Image",
            "mod_tables" : [
               "table_C.8-70"
            ]
         }
      ],
      "(0008,1052)[<0>](0040,1101)" : {
         "name" : "Person Identification Code Sequence",
         "req" : "1",
         "entity" : "Series",
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
         "module" : "General Series"
      },
      "(0010,1020)" : {
         "desc" : "Length or size of the Patient, in meters.",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "name" : "Patient's Size",
         "req" : "3",
         "entity" : "Study"
      },
      "(0018,7058)" : [
         {
            "module" : "X-Ray Acquisition Dose",
            "mod_tables" : [
               "table_C.8-33",
               "table_C.8-35a"
            ],
            "usage" : "U",
            "desc" : "The maximum length (in mm) of the X-Ray beam path in the Filter Material that is not blocked by collimation. May be multi-valued, with values corresponding to the respective values in Filter Material (0018,7050).",
            "entity" : "Image",
            "req" : "3",
            "name" : "Filter Beam Path Length Maximum"
         },
         {
            "usage" : "U",
            "module" : "X-Ray Filtration",
            "mod_tables" : [
               "table_C.8-35a"
            ],
            "desc" : "The maximum length (in mm) of the X-Ray beam path in the Filter Material that is not blocked by collimation. May be multi-valued, with values corresponding to the respective values in Filter Material (0018,7050).",
            "req" : "3",
            "entity" : "Image",
            "name" : "Filter Beam Path Length Maximum"
         }
      ],
      "(0018,1138)" : {
         "name" : "Table Angle",
         "entity" : "Image",
         "req" : "3",
         "desc" : [
            "Angle of table plane in degrees relative to horizontal plane [Gravity plane]. Positive values indicate that the head of the table is upward.",
            "Only meaningful if Table Type (0018,113A) is TILTING."
         ],
         "mod_tables" : [
            "table_C.8-72"
         ],
         "module" : "DX Positioning",
         "usage" : "U"
      },
      "(0018,7050)" : [
         {
            "name" : "Filter Material",
            "entity" : "Image",
            "req" : "3",
            "desc" : [
               "The X-Ray absorbing material used in the filter. May be multi-valued.",
               {
                  "type" : "variablelist",
                  "list" : [
                     [
                        "MOLYBDENUM",
                        null
                     ],
                     [
                        "ALUMINUM",
                        null
                     ],
                     [
                        "COPPER",
                        null
                     ],
                     [
                        "RHODIUM",
                        null
                     ],
                     [
                        "NIOBIUM",
                        null
                     ],
                     [
                        "EUROPIUM",
                        null
                     ],
                     [
                        "LEAD",
                        null
                     ]
                  ],
                  "title" : "Defined Terms:"
               }
            ],
            "module" : "X-Ray Acquisition Dose",
            "mod_tables" : [
               "table_C.8-33",
               "table_C.8-35a"
            ],
            "usage" : "U"
         },
         {
            "name" : "Filter Material",
            "entity" : "Image",
            "req" : "3",
            "desc" : [
               "The X-Ray absorbing material used in the filter. May be multi-valued.",
               {
                  "title" : "Defined Terms:",
                  "list" : [
                     [
                        "MOLYBDENUM",
                        null
                     ],
                     [
                        "ALUMINUM",
                        null
                     ],
                     [
                        "COPPER",
                        null
                     ],
                     [
                        "RHODIUM",
                        null
                     ],
                     [
                        "NIOBIUM",
                        null
                     ],
                     [
                        "EUROPIUM",
                        null
                     ],
                     [
                        "LEAD",
                        null
                     ]
                  ],
                  "type" : "variablelist"
               }
            ],
            "usage" : "U",
            "mod_tables" : [
               "table_C.8-35a"
            ],
            "module" : "X-Ray Filtration"
         }
      ],
      "(0012,0083)[<0>](0012,0085)" : {
         "usage" : "U",
         "module" : "Clinical Trial Study",
         "mod_tables" : [
            "table_C.7-4b"
         ],
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
               "el" : "note",
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
               ]
            }
         ],
         "req" : "1",
         "entity" : "Study",
         "name" : "Consent for Distribution Flag"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a124)" : [
         {
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "module" : "General Series",
            "usage" : "M",
            "desc" : [
               "UID value for this name-value Item.",
               "Required if Value Type (0040,A040) is UIDREF."
            ],
            "req" : "1C",
            "entity" : "Series",
            "name" : "UID"
         },
         {
            "name" : "UID",
            "entity" : "Series",
            "req" : "1C",
            "desc" : [
               "UID value for this name-value Item.",
               "Required if Value Type (0040,A040) is UIDREF."
            ],
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2"
            ],
            "module" : "Mammography Series",
            "usage" : "M"
         }
      ],
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a162)" : [
         {
            "usage" : "M",
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "desc" : [
               "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
            ],
            "req" : "1C",
            "entity" : "Series",
            "name" : "Rational Numerator Value"
         },
         {
            "name" : "Rational Numerator Value",
            "req" : "1C",
            "entity" : "Series",
            "desc" : [
               "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
            ],
            "module" : "Mammography Series",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2"
            ],
            "usage" : "M"
         }
      ],
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,08ea)" : [
         {
            "name" : "Measurement Units Code Sequence",
            "entity" : "Series",
            "req" : "1C",
            "desc" : [
               "Units of measurement for a numeric value in this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is NUMERIC."
            ],
            "usage" : "M",
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ]
         },
         {
            "name" : "Measurement Units Code Sequence",
            "entity" : "Series",
            "req" : "1C",
            "desc" : [
               "Units of measurement for a numeric value in this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is NUMERIC."
            ],
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2"
            ],
            "module" : "Mammography Series",
            "usage" : "M"
         }
      ],
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a160)" : {
         "entity" : "Image",
         "req" : "1C",
         "name" : "Text Value",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ]
      },
      "(0008,2112)[<0>](0028,135a)" : {
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
                                    "xml:id" : "para_9976bb70-d841-4a34-8a47-46d189fa9d3b"
                                 },
                                 "el" : "para",
                                 "content" : [
                                    "This applies not only to images with a known relationship to a 3D space, but also to projection images. For example, a projection radiograph such as a mammogram that is processed by a point image processing operation such as contrast enhancement, or a smoothing or edge enhancing convolution, would have a value of YES for this attribute. A projection radiograph that had been magnified or warped geometrically would have a value of NO for this attribute. A projection radiograph that has been flipped, and/or rotated by a multiple of 90 degrees, such that transformation of pixel locations is possible by comparison of the values of Patient Orientation (0020,0020) would have a value of REORIENTED_ONLY. This attribute is typically of importance in relating images with Presentation Intent Type (0008,0068) values of FOR PROCESSING and FOR PRESENTATION."
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
                                 "attrs" : {
                                    "xml:id" : "para_2b403f53-2ffb-4cb8-b283-851c3cce981b"
                                 },
                                 "content" : [
                                    "When the value of this attribute is NO, it is not possible to locate on the current image any pixel coordinates that are referenced relative to the source image, such as for example, might be required for rendering CAD findings derived from a referenced FOR PROCESSING image on the current FOR PRESENTATION image."
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
         "usage" : "M",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "name" : "Spatial Locations Preserved",
         "entity" : "Image",
         "req" : "3"
      },
      "(0012,0063)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
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
                           "el" : "listitem",
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
                           ]
                        },
                        "\n                      ",
                        {
                           "content" : [
                              "\n                        ",
                              {
                                 "attrs" : {
                                    "xml:id" : "para_adf0139e-d0e5-457a-ac4d-5c9e20c50e35"
                                 },
                                 "el" : "para",
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
         "req" : "1C",
         "entity" : "Patient",
         "name" : "De-identification Method"
      },
      "(0008,0051)[<0>](0040,0031)" : {
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "usage" : "M",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "name" : "Local Namespace Entity ID",
         "req" : "1C",
         "entity" : "Study"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a168)" : {
         "req" : "1C",
         "entity" : "Series",
         "name" : "Concept Code Sequence",
         "module" : "General Series",
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
         ]
      },
      "(0010,0216)[<0>](0010,0214)" : {
         "entity" : "Patient",
         "req" : "1",
         "name" : "Strain Stock Number",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
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
         ]
      },
      "(0040,9096)" : {
         "req" : "3",
         "entity" : "Image",
         "name" : "Real World Value Mapping Sequence",
         "usage" : "M",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "desc" : [
            "The mapping of stored values to associated Real World values.",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0100,0426)" : {
         "name" : "Authorization Equipment Certification Number",
         "req" : "3",
         "entity" : "Image",
         "desc" : "The certification number issued to the Application Entity that set the SOP Instance Status (0100,0410) to AO.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0010,1100)[<0>](0040,e025)[<1>](0008,1190)" : {
         "name" : "Retrieve URL",
         "entity" : "Patient",
         "req" : "1",
         "desc" : "URL specifying the location of the referenced instance(s).",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M"
      },
      "(0008,1072)[<0>](0008,0082)" : {
         "name" : "Institution Code Sequence",
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series",
         "usage" : "M"
      },
      "(0008,1032)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "usage" : "M",
         "desc" : [
            "A Sequence that conveys the type of procedure performed.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Study",
         "req" : "3",
         "name" : "Procedure Code Sequence"
      },
      "(0040,0512)" : {
         "desc" : [
            "The identifier for the container that contains the specimen(s) being imaged. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.22.1.1"
               }
            },
            "."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "usage" : "U",
         "name" : "Container Identifier",
         "entity" : "Image",
         "req" : "1"
      },
      "(0018,702a)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "module" : "DX Detector",
         "desc" : "Name of the manufacturer of the detector component of the acquisition system",
         "entity" : "Image",
         "req" : "3",
         "name" : "Detector Manufacturer Name"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0062,000b)" : {
         "name" : "Referenced Segment Number",
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0050,0010)[<0>](0050,0014)" : {
         "entity" : "Image",
         "req" : "3",
         "name" : "Device Length",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "module" : "Device",
         "usage" : "U",
         "desc" : [
            "Length in mm of device. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.6.12.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ]
      },
      "(0020,0020)" : [
         {
            "desc" : [
               [
                  "Patient direction of the rows and columns of the image. Required if image does not require Image Orientation (Patient) (0020,0037) and Image Position (Patient) (0020,0032). May be present otherwise. See ",
                  {
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.7.6.1.1.1"
                     },
                     "el" : "xref"
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
                        "attrs" : {
                           "xml:id" : "para_09636c87-54b7-4fd6-ae07-683cdb9bf8a4"
                        },
                        "el" : "para"
                     },
                     "\n                  "
                  ],
                  "el" : "note"
               }
            ],
            "mod_tables" : [
               "table_C.7-9"
            ],
            "module" : "General Image",
            "usage" : "M",
            "name" : "Patient Orientation",
            "req" : "2C",
            "entity" : "Image"
         },
         {
            "mod_tables" : [
               "table_C.8-70"
            ],
            "module" : "DX Image",
            "usage" : "M",
            "desc" : [
               "Patient direction of the rows and columns of the image.",
               [
                  "See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.7.6.1.1.1"
                     }
                  },
                  " for further explanation."
               ],
               "Required if View Code Sequence (0054,0220) is not present or is present with an Item value other than (G-8300, SRT, \"tissue specimen\") or (G-8310, SRT, \"tissue specimen from breast\"). May be present otherwise."
            ],
            "entity" : "Image",
            "req" : "1C",
            "name" : "Patient Orientation"
         }
      ],
      "(0008,0105)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "entity" : "Image",
         "name" : "Mapping Resource"
      },
      "(0050,0010)[<0>](0050,0020)" : {
         "mod_tables" : [
            "table_C.7-18"
         ],
         "module" : "Device",
         "usage" : "U",
         "desc" : "Further description in free form text describing the device.",
         "entity" : "Image",
         "req" : "3",
         "name" : "Device Description"
      },
      "(0018,0015)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
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
                     "attrs" : {
                        "xml:id" : "para_c8ff54a1-69e9-4623-abb8-672af78baddf"
                     },
                     "el" : "para",
                     "content" : [
                        "Some IODs support the Anatomic Region Sequence (0008,2218), which can provide a more comprehensive mechanism for specifying the body part being examined."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "entity" : "Series",
         "req" : "3",
         "name" : "Body Part Examined"
      },
      "(0018,1608)" : {
         "mod_tables" : [
            "table_C.7-17a"
         ],
         "module" : "Display Shutter",
         "usage" : "U",
         "desc" : "Required if Shutter Shape (0018,1600) is RECTANGULAR. Location of the lower edge of the rectangular shutter with respect to pixels in the image given as row.",
         "req" : "1C",
         "entity" : "Image",
         "name" : "Shutter Lower Horizontal Edge"
      },
      "(0008,1052)" : {
         "req" : "3",
         "entity" : "Series",
         "name" : "Performing Physician Identification Sequence",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "usage" : "M",
         "desc" : [
            "Identification of the physician(s) administering the Series.",
            "One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Performing Physician's Name (0008,1050), if present."
         ]
      },
      "(0040,0513)[<0>](0040,0031)" : {
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "usage" : "U",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C",
         "entity" : "Image",
         "name" : "Local Namespace Entity ID"
      },
      "(0040,0515)[<0>](0040,0513)[<1>](0040,0032)" : {
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "usage" : "U",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C",
         "entity" : "Image",
         "name" : "Universal Entity ID"
      },
      "(0028,0103)" : [
         {
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
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "module" : "Image Pixel",
            "usage" : "M",
            "name" : "Pixel Representation",
            "entity" : "Image",
            "req" : "1"
         },
         {
            "usage" : "M",
            "module" : "DX Image",
            "mod_tables" : [
               "table_C.8-70"
            ],
            "desc" : [
               "Data representation of the pixel samples.",
               {
                  "title" : "Enumerated Values:",
                  "type" : "variablelist",
                  "list" : [
                     [
                        "0000H",
                        "Unsigned Integer"
                     ]
                  ]
               }
            ],
            "entity" : "Image",
            "req" : "1",
            "name" : "Pixel Representation"
         }
      ],
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0062,000b)" : [
         {
            "entity" : "Series",
            "req" : "1C",
            "name" : "Referenced Segment Number",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "module" : "General Series",
            "desc" : [
               "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
               "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
            ]
         },
         {
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2"
            ],
            "module" : "Mammography Series",
            "usage" : "M",
            "desc" : [
               "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
               "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
            ],
            "entity" : "Series",
            "req" : "1C",
            "name" : "Referenced Segment Number"
         }
      ],
      "(0018,1470)" : {
         "name" : "Tomo Angle",
         "req" : "3",
         "entity" : "Image",
         "desc" : "Angle span in degrees of rotation of X-Ray Source during X-Ray acquisition.",
         "mod_tables" : [
            "table_C.8-32"
         ],
         "module" : "X-Ray Tomography Acquisition",
         "usage" : "U"
      },
      "(0088,0200)[<0>](0028,0034)" : {
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
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M",
         "name" : "Pixel Aspect Ratio",
         "entity" : "Image",
         "req" : "1C"
      },
      "(0008,3010)" : {
         "name" : "Irradiation Event UID",
         "entity" : "Image",
         "req" : "3",
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
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a124)" : {
         "name" : "UID",
         "req" : "1C",
         "entity" : "Image",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U"
      },
      "(0040,0560)[<0>](0040,059a)" : {
         "usage" : "U",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "desc" : [
            "Specimen Type.",
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "Image",
         "req" : "3",
         "name" : "Specimen Type Code Sequence"
      },
      "(60xx,0010)" : {
         "req" : "1",
         "entity" : "Image",
         "name" : "Overlay Rows",
         "usage" : "C - Required if graphic annotation is present - See ",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "module" : "Overlay Plane",
         "desc" : "Number of Rows in Overlay."
      },
      "(0018,a001)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
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
         "entity" : "Image",
         "req" : "3",
         "name" : "Contributing Equipment Sequence"
      },
      "(0008,1140)[<0>](0040,a170)" : {
         "name" : "Purpose of Reference Code Sequence",
         "req" : "3",
         "entity" : "Image",
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "Only a single Item is permitted in this Sequence."
         ],
         "usage" : "M",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ]
      },
      "(0040,0515)[<0>](0040,0513)[<1>](0040,0031)" : {
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "module" : "Specimen",
         "name" : "Local Namespace Entity ID",
         "req" : "1C",
         "entity" : "Image"
      },
      "(0040,0515)[<0>](0040,0513)[<1>](0040,0033)" : {
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
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "usage" : "U",
         "name" : "Universal Entity ID Type",
         "req" : "1C",
         "entity" : "Image"
      },
      "(0018,7001)" : {
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "module" : "DX Detector",
         "usage" : "M",
         "desc" : "Detector temperature during exposure in degrees Celsius.",
         "entity" : "Image",
         "req" : "3",
         "name" : "Detector Temperature"
      },
      "(0008,0300)[<0>](0008,0303)" : {
         "entity" : "Image",
         "req" : "1",
         "name" : "Block Identifying Information Status",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "desc" : [
            [
               "Specifies whether some or all of the Private Data Elements in the block are safe from identity leakage as defined by ",
               {
                  "attrs" : {
                     "xrefstyle" : "template:PS3.15 Section %n %t",
                     "targetdoc" : "PS3.15",
                     "targetptr" : "sect_E.3.10"
                  },
                  "el" : "olink"
               },
               "."
            ],
            {
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
               ],
               "title" : "Enumerated Values:"
            }
         ]
      },
      "(0018,7005)" : {
         "entity" : "Image",
         "req" : "3",
         "name" : "Detector Configuration",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "module" : "DX Detector",
         "desc" : [
            "The physical configuration of the detector.",
            {
               "type" : "variablelist",
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
               "title" : "Defined Terms:"
            }
         ]
      },
      "(0018,7024)" : {
         "module" : "DX Detector",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "usage" : "M",
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
                     "attrs" : {
                        "xml:id" : "para_2036c76a-84bc-4d95-b280-e8192289ded7"
                     },
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
         "entity" : "Image",
         "req" : "3",
         "name" : "Detector Active Shape"
      },
      "(0040,0275)[<0>](0008,0051)" : [
         {
            "req" : "3",
            "entity" : "Series",
            "name" : "Issuer of Accession Number Sequence",
            "usage" : "M",
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9"
            ],
            "desc" : [
               "Identifier of the Assigning Authority that issued the Accession Number.",
               "Only a single Item is permitted in this Sequence."
            ]
         },
         {
            "name" : "Issuer of Accession Number Sequence",
            "entity" : "Series",
            "req" : "3",
            "desc" : [
               "Identifier of the Assigning Authority that issued the Accession Number.",
               "Only a single Item is permitted in this Sequence."
            ],
            "usage" : "M",
            "module" : "Mammography Series",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9"
            ]
         }
      ],
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "entity" : "Patient",
         "req" : "1C",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ]
      },
      "(0018,a001)[<0>](0008,1090)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "desc" : "Manufacturer's model name of the equipment that contributed to the composite instance.",
         "req" : "3",
         "entity" : "Image",
         "name" : "Manufacturer's Model Name"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
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
         "module" : "Patient",
         "usage" : "M",
         "name" : "Universal Entity ID Type",
         "entity" : "Patient",
         "req" : "1C"
      },
      "(0008,1062)[<0>](0040,1102)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "usage" : "M",
         "desc" : "Person's mailing address",
         "req" : "3",
         "entity" : "Study",
         "name" : "Person's Address"
      },
      "(0012,0072)" : {
         "name" : "Clinical Trial Series Description",
         "entity" : "Series",
         "req" : "3",
         "desc" : [
            "A description of the series in the context of a clinical trial or research. See ",
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
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "usage" : "U"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a043)" : {
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "name" : "Concept Name Code Sequence",
         "entity" : "Image",
         "req" : "1"
      },
      "(0018,0036)[<0>](0018,0035)" : {
         "desc" : "Time of administration of the interventional drug.",
         "mod_tables" : [
            "table_C.7-19"
         ],
         "module" : "Intervention",
         "usage" : "U",
         "name" : "Intervention Drug Start Time",
         "req" : "3",
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0008,2228)" : {
         "req" : "3",
         "entity" : "Image",
         "name" : "Primary Anatomic Structure Sequence",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-8"
         ],
         "module" : "Specimen",
         "desc" : [
            "Sequence of Items that identifies the primary anatomic structure(s) of interest in this Instance.",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a163)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "usage" : "U",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "req" : "1C",
         "entity" : "Image",
         "name" : "Rational Denominator Value"
      },
      "(0028,0006)" : {
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
         "usage" : "M",
         "module" : "Image Pixel",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "name" : "Planar Configuration",
         "entity" : "Image",
         "req" : "1C"
      },
      "(0008,1049)[<0>](0040,1103)" : {
         "entity" : "Study",
         "req" : "3",
         "name" : "Person's Telephone Numbers",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "usage" : "M",
         "desc" : "Person's telephone number(s)"
      },
      "(0028,0109)" : {
         "desc" : "The maximum value of all images in this Series.",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "usage" : "M",
         "name" : "Largest Pixel Value in Series",
         "req" : "3",
         "entity" : "Series"
      },
      "(0008,2112)[<0>](0040,a170)" : {
         "req" : "3",
         "entity" : "Image",
         "name" : "Purpose of Reference Code Sequence",
         "usage" : "M",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "desc" : [
            "Describes the purpose for which the reference is made, that is what role the source image or frame(s) played in the derivation of this image.",
            "Only a single Item is permitted in this Sequence."
         ]
      },
      "(0028,1040)" : {
         "name" : "Pixel Intensity Relationship",
         "entity" : "Image",
         "req" : "1",
         "desc" : [
            "The relationship between the Pixel sample values and the X-Ray beam intensity.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "LIN",
                     "Linearly proportional to X-Ray beam intensity"
                  ],
                  [
                     "LOG",
                     "Logarithmically proportional to X-Ray beam intensity"
                  ]
               ],
               "title" : "Enumerated Values:"
            },
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.11.3.1.2"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "module" : "DX Image",
         "mod_tables" : [
            "table_C.8-70"
         ],
         "usage" : "M"
      },
      "(0018,702b)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "module" : "DX Detector",
         "desc" : "Model name of the detector component of the acquisition system",
         "req" : "3",
         "entity" : "Image",
         "name" : "Detector Manufacturer's Model Name"
      },
      "(0008,0014)" : {
         "name" : "Instance Creator UID",
         "entity" : "Image",
         "req" : "3",
         "desc" : "Uniquely identifies device that created the SOP Instance.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0008,0110)[<0>](0008,0116)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Name of the organization responsible for the Coding Scheme. May include organizational contact information.",
         "req" : "3",
         "entity" : "Image",
         "name" : "Coding Scheme Responsible Organization"
      },
      "(0010,1100)[<0>](0040,e021)[<1>](0008,0054)" : {
         "desc" : "Title of a DICOM Application Entity where the referenced instance(s) may be retrieved on the network.",
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "Retrieve AE Title",
         "entity" : "Patient",
         "req" : "1"
      },
      "(0008,0090)" : {
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "desc" : "Name of the patient's referring physician",
         "req" : "2",
         "entity" : "Study",
         "name" : "Referring Physician's Name"
      },
      "(0008,1250)[<0>](0020,000d)" : {
         "name" : "Study Instance UID",
         "entity" : "Series",
         "req" : "1",
         "desc" : "Instance UID of Study to which the related Series belongs",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series"
      },
      "(0010,1100)[<0>](0040,e024)[<1>](0040,e030)" : {
         "name" : "Repository Unique ID",
         "req" : "1",
         "entity" : "Patient",
         "desc" : "Uniquely identifies a Repository from which the referenced instances can be retrieved.",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "module" : "Patient",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a122)" : [
         {
            "name" : "Time",
            "req" : "1C",
            "entity" : "Series",
            "desc" : [
               "Time value for this name-value Item.",
               "Required if Value Type (0040,A040) is TIME."
            ],
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "module" : "General Series",
            "usage" : "M"
         },
         {
            "module" : "Mammography Series",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2"
            ],
            "usage" : "M",
            "desc" : [
               "Time value for this name-value Item.",
               "Required if Value Type (0040,A040) is TIME."
            ],
            "req" : "1C",
            "entity" : "Series",
            "name" : "Time"
         }
      ],
      "(0020,9172)" : {
         "name" : "Conversion Source Attributes Sequence",
         "req" : "1C",
         "entity" : "Image",
         "desc" : [
            "The set of images or other composite SOP Instances that were converted to this instance.",
            "If this instance was converted from a specific frame in the source instance, the reference shall include the Frame Number.",
            "One or more Items shall be included in this Sequence.",
            "Required if this instance was created by conversion, and Conversion Source Attributes Sequence (0020,9172) is not present in an Item of Shared Functional Groups Sequence (5200,9229) or Per-Frame Functional Groups Sequence (5200,9230)."
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(fffa,fffa)[<0>](0400,0115)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
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
                                    "xml:id" : "para_cbf16d70-7dfc-44e9-85f6-9cf9aea9f0eb"
                                 },
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
                                 "attrs" : {
                                    "xml:id" : "para_2d3ce9c9-555a-4be1-9e6d-e07eb84c4852"
                                 },
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
                     },
                     "el" : "orderedlist"
                  },
                  "\n                    "
               ]
            }
         ],
         "entity" : "Image",
         "req" : "1",
         "name" : "Certificate of Signer"
      },
      "(0008,0051)" : {
         "entity" : "Study",
         "req" : "3",
         "name" : "Issuer of Accession Number Sequence",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "usage" : "M",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this Sequence."
         ]
      },
      "(0008,0012)" : {
         "name" : "Instance Creation Date",
         "req" : "3",
         "entity" : "Image",
         "desc" : [
            "Date the SOP Instance was created.",
            "This is the date that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0400,0561)" : {
         "name" : "Original Attributes Sequence",
         "entity" : "Image",
         "req" : "3",
         "desc" : [
            "Sequence of Items containing all attributes that were removed or replaced by other values in the main data set.",
            "One or more Items are permitted in this Sequence."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a30a)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "usage" : "U",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "entity" : "Image",
         "req" : "1C",
         "name" : "Numeric Value"
      },
      "(0010,2299)" : {
         "name" : "Responsible Organization",
         "entity" : "Patient",
         "req" : "2C",
         "desc" : [
            "Name of organization with medical or welfare decision making authority for the patient.",
            "Required if patient is an animal. May be present otherwise."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient"
      },
      "(0008,0300)" : {
         "desc" : "Characteristics of Private Data Elements within the current SOP Instance",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Private Data Element Characteristics Sequence",
         "req" : "3",
         "entity" : "Image"
      },
      "(0040,0556)" : {
         "entity" : "Image",
         "req" : "3",
         "name" : "Acquisition Context Description",
         "usage" : "M",
         "module" : "Acquisition Context",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "desc" : "Free-text description of the image-acquisition context."
      },
      "(0050,0010)[<0>](0018,1000)" : {
         "desc" : "Manufacturer's serial number of the device",
         "usage" : "U",
         "module" : "Device",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "name" : "Device Serial Number",
         "entity" : "Image",
         "req" : "3"
      },
      "(0018,2041)[<0>](0018,2042)" : {
         "name" : "Target UID",
         "entity" : "Image",
         "req" : "1",
         "desc" : [
            "Unique identifier for the target.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_cf336c29-8d19-42d1-8f45-8767ce867015"
                     },
                     "content" : [
                        "To identify the same target in corresponding minus and plus stereo images."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.8-74"
         ],
         "module" : "Mammography Image",
         "usage" : "M"
      },
      "(0018,700c)" : {
         "name" : "Date of Last Detector Calibration",
         "entity" : "Image",
         "req" : "3",
         "desc" : "The date on which the detector used to acquire this image as identified in Detector ID (0018,700A) was last calibrated.",
         "usage" : "M",
         "module" : "DX Detector",
         "mod_tables" : [
            "table_C.8-71b"
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a121)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "usage" : "U",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "entity" : "Image",
         "req" : "1C",
         "name" : "Date"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1160)" : [
         {
            "name" : "Referenced Frame Number",
            "req" : "1C",
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
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "module" : "General Series"
         },
         {
            "req" : "1C",
            "entity" : "Series",
            "name" : "Referenced Frame Number",
            "module" : "Mammography Series",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
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
            ]
         }
      ],
      "(0060,3000)[<0>](0060,3020)" : {
         "name" : "Histogram Data",
         "entity" : "Image",
         "req" : "1",
         "desc" : "Histogram Data encoded as 32 bit unsigned counts of the number of pixel values in each bin.",
         "usage" : "U",
         "mod_tables" : [
            "table_C.11.5-1"
         ],
         "module" : "Image Histogram"
      },
      "(0040,0555)[<0>](0040,a160)" : {
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a Text Observation Value.",
            "Required if Date (0040,A121), Time (0040,A122), and Person Name (0040,A123) do not fully describe the concept specified by Concept Name Code Sequence (0040,A043). Shall not be present otherwise."
         ],
         "module" : "Acquisition Context",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "usage" : "M",
         "name" : "Text Value",
         "entity" : "Image",
         "req" : "1C"
      },
      "(0008,1111)[<0>](0008,1155)" : [
         {
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-11"
            ],
            "module" : "General Series",
            "usage" : "M",
            "name" : "Referenced SOP Instance UID",
            "entity" : "Series",
            "req" : "1"
         },
         {
            "usage" : "M",
            "module" : "DX Series",
            "mod_tables" : [
               "table_C.8-68",
               "table_10-11"
            ],
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "entity" : "Series",
            "req" : "1",
            "name" : "Referenced SOP Instance UID"
         }
      ],
      "(0040,9096)[<0>](0040,9220)[<1>](0008,1199)[<2>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "entity" : "Image",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "General Image",
         "usage" : "M"
      },
      "(0054,0410)" : {
         "name" : "Patient Orientation Code Sequence",
         "entity" : "Image",
         "req" : "3",
         "desc" : [
            "Sequence that describes the orientation of the patient with respect to gravity.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.11.5.1.2"
                  }
               },
               " for further explanation."
            ],
            "Only a single Item is permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.8-72"
         ],
         "module" : "DX Positioning",
         "usage" : "U"
      },
      "(0018,1114)" : {
         "desc" : "Ratio of Source Image Receptor Distance (SID) over Source Object Distance (SOD).",
         "mod_tables" : [
            "table_C.8-72"
         ],
         "module" : "DX Positioning",
         "usage" : "U",
         "name" : "Estimated Radiographic Magnification Factor",
         "req" : "3",
         "entity" : "Image"
      },
      "(0018,7022)" : {
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_7c26ba93-41a1-420b-8b9f-77c9ccf7b22d"
                     }
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "module" : "DX Detector",
         "name" : "Detector Element Spacing",
         "entity" : "Image",
         "req" : "3"
      },
      "(0010,0024)[<0>](0040,0033)" : {
         "entity" : "Patient",
         "req" : "1C",
         "name" : "Universal Entity ID Type",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
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
                     "linkend" : "sect_10.14",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for Defined Terms."
            ]
         ]
      },
      "(0040,0560)[<0>](0040,0620)" : {
         "req" : "1C",
         "entity" : "Image",
         "name" : "Specimen Localization Content Item Sequence",
         "usage" : "U",
         "module" : "Specimen",
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
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0031)" : [
         {
            "name" : "Local Namespace Entity ID",
            "entity" : "Series",
            "req" : "1C",
            "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-17"
            ],
            "module" : "General Series",
            "usage" : "M"
         },
         {
            "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-17"
            ],
            "module" : "Mammography Series",
            "usage" : "M",
            "name" : "Local Namespace Entity ID",
            "req" : "1C",
            "entity" : "Series"
         }
      ],
      "(0010,1100)[<0>](0020,000e)" : {
         "req" : "1C",
         "entity" : "Patient",
         "name" : "Series Instance UID",
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "desc" : [
            "Unique identifier for the Series that is part of the Study identified in Study Instance UID (0020,000D), if present, and contains the referenced object instance(s).",
            "Required if Type of Instances (0040,E020) is DICOM"
         ]
      },
      "(0040,0310)" : {
         "desc" : "User-defined comments on any special conditions related to radiation dose encountered during the acquisition of this image.",
         "usage" : "U",
         "module" : "X-Ray Acquisition Dose",
         "mod_tables" : [
            "table_C.8-33"
         ],
         "name" : "Comments on Radiation Dose",
         "entity" : "Image",
         "req" : "3"
      },
      "(0008,0300)[<0>](0008,0302)" : {
         "entity" : "Image",
         "req" : "1",
         "name" : "Private Creator Reference",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
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
      "(0018,1405)" : {
         "mod_tables" : [
            "table_C.8-33"
         ],
         "module" : "X-Ray Acquisition Dose",
         "usage" : "U",
         "desc" : [
            "Indication of the applied dose, in manufacturer specific units.",
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
                                    "xml:id" : "para_adac430b-3276-46a4-9474-42d3f4f3ed85"
                                 },
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
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_86a4ba05-db44-405f-abce-86c4bad0b97f"
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
                                 "content" : [
                                    "DICOM specifies standard Attributes in ",
                                    {
                                       "attrs" : {
                                          "linkend" : "table_10-23",
                                          "xrefstyle" : "select: label"
                                       },
                                       "el" : "xref"
                                    },
                                    " 'Exposure Index Macro', which are recommended."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_203c72d8-0c09-4eb5-884f-81e035bc76e8"
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
         "entity" : "Image",
         "req" : "3",
         "name" : "Relative X-Ray Exposure"
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0307)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
                           "el" : "listitem",
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
                                          "xrefstyle" : "template:PS3.15 Section %n %t",
                                          "targetdoc" : "PS3.15",
                                          "targetptr" : "sect_E.3.1"
                                       },
                                       "el" : "olink"
                                    },
                                    "."
                                 ]
                              },
                              "\n                    "
                           ]
                        },
                        "\n                  "
                     ],
                     "el" : "orderedlist"
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "entity" : "Image",
         "req" : "1",
         "name" : "Deidentification Action"
      },
      "(0010,1010)" : {
         "req" : "3",
         "entity" : "Study",
         "name" : "Patient's Age",
         "usage" : "U",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Age of the Patient."
      },
      "(0040,0515)" : {
         "entity" : "Image",
         "req" : "3",
         "name" : "Alternate Container Identifier Sequence",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U",
         "desc" : "Sequence of alternate identifiers for the container that contains the specimen(s) being imaged. These may have been assigned, e.g., by the manufacturer, or by another institution that collected the specimen. One or more Items are permitted in this Sequence."
      },
      "(0008,0050)" : {
         "req" : "2",
         "entity" : "Study",
         "name" : "Accession Number",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "desc" : "A RIS generated number that identifies the order for the Study."
      },
      "(0010,1002)[<0>](0010,0020)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "usage" : "M",
         "desc" : [
            "An identifier for the patient.",
            {
               "el" : "note",
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
                              "linkend" : "sect_C.7.1.4.1.1",
                              "xrefstyle" : "select: label"
                           }
                        },
                        "."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "entity" : "Patient",
         "req" : "1",
         "name" : "Patient ID"
      },
      "(0018,1000)" : {
         "entity" : "Equipment",
         "req" : "3",
         "name" : "Device Serial Number",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
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
         ]
      },
      "(0040,0275)" : [
         {
            "desc" : [
               "Sequence that contains attributes from the Imaging Service Request.",
               "One or more Items are permitted in this Sequence."
            ],
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a"
            ],
            "usage" : "M",
            "name" : "Request Attributes Sequence",
            "req" : "3",
            "entity" : "Series"
         },
         {
            "mod_tables" : [
               "table_C.8-73"
            ],
            "module" : "Mammography Series",
            "usage" : "M",
            "desc" : [
               "Sequence that contains attributes from the Imaging Service Request.",
               "One or more Items are permitted in this Sequence."
            ],
            "entity" : "Series",
            "req" : "3",
            "name" : "Request Attributes Sequence"
         }
      ],
      "(0008,0031)" : {
         "name" : "Series Time",
         "req" : "3",
         "entity" : "Series",
         "desc" : "Time the Series started.",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0010,0024)[<0>](0040,003a)" : {
         "desc" : [
            "The agency or department that assigned the patient identifier. Only a single Item is permitted in this Sequence.",
            {
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
               ],
               "el" : "note"
            }
         ],
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "name" : "Assigning Agency or Department Code Sequence",
         "entity" : "Patient",
         "req" : "3"
      },
      "(0012,0031)" : {
         "req" : "2",
         "entity" : "Patient",
         "name" : "Clinical Trial Site Name",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject",
         "usage" : "U",
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
      "(0018,1042)" : {
         "name" : "Contrast/Bolus Start Time",
         "entity" : "Image",
         "req" : "3",
         "desc" : "Time of start of injection",
         "module" : "Contrast/Bolus",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "usage" : "U"
      },
      "(0010,2203)" : {
         "name" : "Patient's Sex Neutered",
         "req" : "2C",
         "entity" : "Study",
         "desc" : [
            "Whether or not a procedure has been performed in an effort to render the patient sterile.",
            {
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
               ],
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_c2f87128-b036-4f01-a73f-cfc3ce71eaeb"
                     }
                  },
                  "\n                  "
               ]
            },
            "Required if patient is an animal. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "usage" : "U"
      },
      "(0040,0555)[<0>](0040,a163)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "module" : "Acquisition Context",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "req" : "1C",
         "entity" : "Image",
         "name" : "Rational Denominator Value"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1160)" : {
         "name" : "Referenced Frame Number",
         "entity" : "Patient",
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
                        "xml:id" : "para_e2359edc-51fe-4f62-abc5-a7447e377de7"
                     }
                  },
                  "\n              "
               ],
               "el" : "note"
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1104)" : {
         "name" : "Person's Telecom Information",
         "req" : "3",
         "entity" : "Image",
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
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ]
      },
      "(0018,1495)" : {
         "desc" : [
            "The number of source images used to construct this tomosynthetic image. Only meaningful if Tomo Class (0018,1491) is TOMOSYNTHESIS. These may be listed in Source Image Sequence (0008,2112) of the ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: title",
                  "linkend" : "sect_C.7.6.1"
               }
            },
            "."
         ],
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-32"
         ],
         "module" : "X-Ray Tomography Acquisition",
         "name" : "Number of Tomosynthesis Source Images",
         "req" : "3",
         "entity" : "Image"
      },
      "(0008,1049)[<0>](0008,0080)" : {
         "entity" : "Study",
         "req" : "1C",
         "name" : "Institution Name",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present."
      },
      "(0018,701a)" : {
         "desc" : "Number of active detectors used to generate a single pixel. Specified as number of row detectors per pixel then column.",
         "usage" : "M",
         "module" : "DX Detector",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "name" : "Detector Binning",
         "req" : "3",
         "entity" : "Image"
      },
      "(0008,0023)" : {
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_2b4fa91b-7c4d-401b-9468-fa7b06ccb55a"
                     }
                  },
                  "\n                  "
               ]
            }
         ],
         "req" : "2C",
         "entity" : "Image",
         "name" : "Content Date"
      },
      "(0018,7011)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "module" : "DX Detector",
         "desc" : "Total number of X-Ray exposures that have been made on the detector used to acquire this image as identified in Detector ID (0018,700A) since it was manufactured.",
         "entity" : "Image",
         "req" : "3",
         "name" : "Exposures on Detector Since Manufactured"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a162)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "usage" : "M",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "entity" : "Series",
         "name" : "Rational Numerator Value"
      },
      "(0008,0124)" : {
         "desc" : [
            "Sequence of items that map values of Mapping Resource (0008,0105) to an external, private or local Mapping Resource.",
            "One or more Items are permitted in this Sequence."
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Mapping Resource Identification Sequence",
         "entity" : "Image",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a161)" : [
         {
            "name" : "Floating Point Value",
            "entity" : "Series",
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
            "module" : "General Series"
         },
         {
            "name" : "Floating Point Value",
            "entity" : "Series",
            "req" : "1C",
            "desc" : [
               "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
            ],
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2"
            ],
            "module" : "Mammography Series"
         }
      ],
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,08ea)" : [
         {
            "req" : "1C",
            "entity" : "Series",
            "name" : "Measurement Units Code Sequence",
            "usage" : "M",
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "desc" : [
               "Units of measurement for a numeric value in this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is NUMERIC."
            ]
         },
         {
            "entity" : "Series",
            "req" : "1C",
            "name" : "Measurement Units Code Sequence",
            "module" : "Mammography Series",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2"
            ],
            "usage" : "M",
            "desc" : [
               "Units of measurement for a numeric value in this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is NUMERIC."
            ]
         }
      ],
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a30a)" : [
         {
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
            "module" : "General Series",
            "name" : "Numeric Value",
            "req" : "1C",
            "entity" : "Series"
         },
         {
            "usage" : "M",
            "module" : "Mammography Series",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2"
            ],
            "desc" : [
               "Numeric value for this name-value Item. Only a single value shall be present.",
               "Required if Value Type (0040,A040) is NUMERIC."
            ],
            "req" : "1C",
            "entity" : "Series",
            "name" : "Numeric Value"
         }
      ],
      " (0010,0027) [<0>](0010,0021)" : {
         "entity" : "Patient",
         "req" : "3",
         "name" : "Issuer of Patient ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
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
         ]
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C",
         "entity" : "Patient",
         "name" : "Universal Entity ID"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,08ea)" : {
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Measurement Units Code Sequence",
         "entity" : "Image",
         "req" : "1C"
      },
      "(0008,1072)[<0>](0040,1104)" : {
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
                     ],
                     "el" : "orderedlist"
                  },
                  "\n              "
               ]
            }
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Person's Telecom Information",
         "req" : "3",
         "entity" : "Series"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "req" : "1C",
         "entity" : "Patient",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "module" : "Patient",
         "usage" : "M"
      },
      "(0020,4000)" : {
         "desc" : "User-defined comments about the image",
         "usage" : "M",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "name" : "Image Comments",
         "req" : "3",
         "entity" : "Image"
      },
      "(0018,1612)" : {
         "desc" : "Required if Shutter Shape (0018,1600) is CIRCULAR. Radius of the circular shutter with respect to pixels in the image given as a number of pixels along the row direction.",
         "mod_tables" : [
            "table_C.7-17a"
         ],
         "module" : "Display Shutter",
         "usage" : "U",
         "name" : "Radius of Circular Shutter",
         "entity" : "Image",
         "req" : "1C"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a161)" : {
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "name" : "Floating Point Value",
         "req" : "1C",
         "entity" : "Image"
      },
      "(0008,1115)[<0>](0008,114a)" : {
         "entity" : "Image",
         "req" : "1",
         "name" : "Referenced Instance Sequence",
         "module" : "Common Instance Reference",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "usage" : "U",
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0008,1115)" : {
         "name" : "Referenced Series Sequence",
         "req" : "1C",
         "entity" : "Image",
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this Sequence.",
            "Required if this Instance references Instances in this Study."
         ],
         "mod_tables" : [
            "table_C.12-8"
         ],
         "module" : "Common Instance Reference",
         "usage" : "U"
      },
      "(0018,1480)" : {
         "name" : "Tomo Time",
         "entity" : "Image",
         "req" : "3",
         "desc" : "Time in seconds the source has taken to rotate the Tomo Angle during X-Ray acquisition.",
         "usage" : "U",
         "module" : "X-Ray Tomography Acquisition",
         "mod_tables" : [
            "table_C.8-32"
         ]
      },
      "(0008,1052)[<0>](0008,0082)" : {
         "entity" : "Series",
         "req" : "1C",
         "name" : "Institution Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series",
         "usage" : "M",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0028,1053)" : {
         "entity" : "Image",
         "req" : "1",
         "name" : "Rescale Slope",
         "usage" : "M",
         "module" : "DX Image",
         "mod_tables" : [
            "table_C.8-70"
         ],
         "desc" : [
            "m in the equation specified by Rescale Intercept (0028,1052).",
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "1",
                     null
                  ]
               ],
               "type" : "variablelist"
            },
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.11.3.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ]
      },
      "(0018,a001)[<0>](0018,1000)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "desc" : "Manufacturer's serial number of the equipment that contributed to the composite instance.",
         "req" : "3",
         "entity" : "Image",
         "name" : "Device Serial Number"
      },
      "(0018,5100)" : [
         {
            "name" : "Patient Position",
            "entity" : "Series",
            "req" : "2C",
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
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a"
            ]
         },
         {
            "desc" : [
               "Description of imaging subject's position relative to the equipment.",
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
               ],
               "If present, shall be consistent with Patient Gantry Relationship Code Sequence (0054,0414) and Patient Orientation Modifier Code Sequence (0054,0412)."
            ],
            "usage" : "U",
            "module" : "DX Positioning",
            "mod_tables" : [
               "table_C.8-72"
            ],
            "name" : "Patient Position",
            "req" : "3",
            "entity" : "Image"
         }
      ],
      "(0028,1056)" : {
         "module" : "VOI LUT",
         "mod_tables" : [
            "table_C.11-2b"
         ],
         "usage" : "C - Required if Presentation Intent Type (0008,0068) is FOR PRESENTATION. Shall not be present otherwise.",
         "desc" : [
            "Describes a VOI LUT function to apply to the values of Window Center (0028,1050) and Window Width (0028,1051).",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.11.2.1.3",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ],
            {
               "type" : "variablelist",
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
               "title" : "Defined Terms:"
            },
            [
               "When this attribute is not present, the interpretation of the values of Window Center (0028,1050) and Window Width (0028,1051) is linear as in ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.11.2.1.2"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "req" : "3",
         "entity" : "Image",
         "name" : "VOI LUT Function"
      },
      "(0010,1100)[<0>](0040,e024)[<1>](0040,e031)" : {
         "req" : "3",
         "entity" : "Patient",
         "name" : "Home Community ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "module" : "Patient",
         "desc" : "Uniquely identifies a Community to which requests for the referenced instances can be directed."
      },
      "(0088,0200)[<0>](0028,1102)" : {
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M",
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
         "entity" : "Image",
         "req" : "1C",
         "name" : "Green Palette Color Lookup Table Descriptor"
      },
      "(0018,1413)" : [
         {
            "desc" : "A scaled representation of the difference of the Exposure Index compared to the Target Exposure Index as defined in IEC 62494-1 and the report of AAPM TG 116.",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-71b",
               "table_10-23"
            ],
            "module" : "DX Detector",
            "name" : "Deviation Index",
            "req" : "3",
            "entity" : "Image"
         },
         {
            "desc" : "A scaled representation of the difference of the Exposure Index compared to the Target Exposure Index as defined in IEC 62494-1 and the report of AAPM TG 116.",
            "mod_tables" : [
               "table_C.8-33",
               "table_10-23"
            ],
            "module" : "X-Ray Acquisition Dose",
            "usage" : "U",
            "name" : "Deviation Index",
            "entity" : "Image",
            "req" : "3"
         }
      ],
      "(0008,1062)[<0>](0040,1103)" : {
         "desc" : "Person's telephone number(s)",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "name" : "Person's Telephone Numbers",
         "entity" : "Study",
         "req" : "3"
      },
      "(0088,0200)[<0>](0028,0107)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image",
         "desc" : "The maximum actual pixel value encountered in this image.",
         "req" : "3",
         "entity" : "Image",
         "name" : "Largest Image Pixel Value"
      },
      "(0018,1201)" : {
         "name" : "Time of Last Calibration",
         "req" : "3",
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
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M"
      },
      "(0018,9004)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
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
                  "attrs" : {
                     "linkend" : "sect_C.8.13.2.1.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "entity" : "Image",
         "req" : "3",
         "name" : "Content Qualification"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)" : [
         {
            "req" : "3",
            "entity" : "Series",
            "name" : "Protocol Context Sequence",
            "usage" : "M",
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9"
            ],
            "desc" : "Sequence that specifies the context for the Scheduled Protocol Code Sequence Item. One or more Items are permitted in this Sequence."
         },
         {
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9"
            ],
            "module" : "Mammography Series",
            "usage" : "M",
            "desc" : "Sequence that specifies the context for the Scheduled Protocol Code Sequence Item. One or more Items are permitted in this Sequence.",
            "req" : "3",
            "entity" : "Series",
            "name" : "Protocol Context Sequence"
         }
      ],
      "(0018,1050)" : {
         "usage" : "M",
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "entity" : "Equipment",
         "req" : "3",
         "name" : "Spatial Resolution"
      },
      "(0040,0520)[<0>](0050,0013)" : {
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "usage" : "U",
         "desc" : "Thickness in mm of container component",
         "entity" : "Image",
         "req" : "3",
         "name" : "Container Component Thickness"
      },
      "(0008,0080)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
         "desc" : "Institution where the equipment that produced the composite instances is located.",
         "req" : "3",
         "entity" : "Equipment",
         "name" : "Institution Name"
      },
      "(0008,1049)" : {
         "name" : "Physician(s) of Record Identification Sequence",
         "req" : "3",
         "entity" : "Study",
         "desc" : [
            "Identification of the physician(s) who are responsible for overall patient care at time of Study.",
            "One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Physician(s) of Record (0008,1048), if present."
         ],
         "usage" : "M",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0010,1100)[<0>](0008,1199)" : {
         "name" : "Referenced SOP Sequence",
         "entity" : "Patient",
         "req" : "1",
         "desc" : [
            "References to object instances.",
            "One or more Items shall be included in this Sequence"
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "module" : "Patient"
      },
      "(0028,3010)[<0>](0028,3003)" : [
         {
            "module" : "DX Image",
            "mod_tables" : [
               "table_C.8-70"
            ],
            "usage" : "M",
            "desc" : "Free form text explanation of the meaning of the LUT.",
            "req" : "3",
            "entity" : "Image",
            "name" : "LUT Explanation"
         },
         {
            "req" : "3",
            "entity" : "Image",
            "name" : "LUT Explanation",
            "mod_tables" : [
               "table_C.11-2b"
            ],
            "module" : "VOI LUT",
            "usage" : "C - Required if Presentation Intent Type (0008,0068) is FOR PRESENTATION. Shall not be present otherwise.",
            "desc" : "Free form text explanation of the meaning of the LUT."
         }
      ],
      "(0018,1110)" : [
         {
            "module" : "DX Positioning",
            "mod_tables" : [
               "table_C.8-72"
            ],
            "usage" : "U",
            "desc" : [
               "Distance in mm from source to detector center.",
               {
                  "content" : [
                     "\n                    ",
                     {
                        "content" : [
                           "This value is traditionally referred to as Source Image Receptor Distance (SID)."
                        ],
                        "attrs" : {
                           "xml:id" : "para_2b31dcd3-4f24-4f23-9968-c25b2c49dad3"
                        },
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
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.8.11.7"
                     },
                     "el" : "xref"
                  },
                  " for explanation if Positioner Type (0018,1508) is MAMMOGRAPHIC."
               ]
            ],
            "req" : "3",
            "entity" : "Image",
            "name" : "Distance Source to Detector"
         },
         {
            "entity" : "Image",
            "req" : "3",
            "name" : "Distance Source to Detector",
            "mod_tables" : [
               "table_C.8-33"
            ],
            "module" : "X-Ray Acquisition Dose",
            "usage" : "U",
            "desc" : [
               "Distance in mm from source to detector center.",
               {
                  "content" : [
                     "\n                    ",
                     {
                        "content" : [
                           "This value is traditionally referred to as Source Image Receptor Distance (SID)."
                        ],
                        "attrs" : {
                           "xml:id" : "para_3b7bd656-1bfb-4c18-92f9-92c401d17ddd"
                        },
                        "el" : "para"
                     },
                     "\n                  "
                  ],
                  "el" : "note"
               }
            ]
         },
         {
            "mod_tables" : [
               "table_C.8-74"
            ],
            "module" : "Mammography Image",
            "usage" : "M",
            "desc" : [
               "Distance in mm from source to detector center on the chest wall line",
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
                                       "xml:id" : "para_ce81a439-4e84-4243-8c74-19a3731b4b06"
                                    },
                                    "content" : [
                                       "This value is traditionally referred to as Source Image Distance (SID)."
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
                                       "xml:id" : "para_29d77a48-37c5-436d-8775-c443c6223fcc"
                                    },
                                    "el" : "para",
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
            "req" : "3",
            "entity" : "Image",
            "name" : "Distance Source to Detector"
         }
      ],
      "(0028,0302)" : {
         "usage" : "M",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
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
         "entity" : "Image",
         "req" : "3",
         "name" : "Recognizable Visual Features"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0008,1199)" : {
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "usage" : "M",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "entity" : "Image",
         "req" : "1C",
         "name" : "Referenced SOP Sequence"
      },
      "(0018,1702)" : {
         "name" : "Collimator Left Vertical Edge",
         "entity" : "Image",
         "req" : "1C",
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
         "mod_tables" : [
            "table_C.8-28b"
         ],
         "module" : "X-Ray Collimator",
         "usage" : "U"
      },
      "(0010,0024)[<0>](0040,0036)" : {
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
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
         "req" : "3",
         "entity" : "Patient",
         "name" : "Assigning Facility Sequence"
      },
      "(0028,2114)" : {
         "name" : "Lossy Image Compression Method",
         "req" : "3",
         "entity" : "Image",
         "desc" : [
            "A label for the lossy compression method(s) that have been applied to this image.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.1.1.5.1"
                  }
               },
               "."
            ]
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image"
      },
      "(0020,1002)" : {
         "entity" : "Image",
         "req" : "3",
         "name" : "Images in Acquisition",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M",
         "desc" : "Number of images that resulted from this acquisition of data"
      },
      "(0008,1049)[<0>](0040,1104)" : {
         "entity" : "Study",
         "req" : "3",
         "name" : "Person's Telecom Information",
         "usage" : "M",
         "module" : "General Study",
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
         ]
      },
      "(0018,0014)[<0>](0018,002a)" : {
         "name" : "Additional Drug Sequence",
         "req" : "3",
         "entity" : "Image",
         "desc" : [
            "Sequence that identifies any additional drug that is administered with the contrast agent bolus.",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-12"
         ],
         "module" : "Contrast/Bolus",
         "usage" : "U"
      },
      "(0050,0004)" : {
         "usage" : "M",
         "module" : "DX Image",
         "mod_tables" : [
            "table_C.8-70"
         ],
         "desc" : [
            "Indicates whether a reference object (phantom) of known size is present in the image and was used for calibration.",
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
               "Device is identified using the ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.12",
                     "xrefstyle" : "select: title"
                  }
               },
               ". See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.6.12",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "entity" : "Image",
         "req" : "3",
         "name" : "Calibration Image"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0082)" : {
         "name" : "Institution Code Sequence",
         "entity" : "Image",
         "req" : "1C",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a163)" : {
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "entity" : "Series",
         "req" : "1C",
         "name" : "Rational Denominator Value"
      },
      "(0028,1351)" : {
         "name" : "Partial View Description",
         "entity" : "Image",
         "req" : "3",
         "desc" : [
            "Free text description of the portion of the breast captured in a partial view image.",
            "This Attribute shall not be present if there is a View Modifier Code Sequence (0054,0222) Item of value (R-102D6, SRT, \"Magnification\") or (R-102D7, SRT, \"Spot Compression\").",
            {
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_133fd9a6-8df2-407e-a53d-ea36f82dc7e0"
                     },
                     "el" : "para",
                     "content" : [
                        "SRT is the preferred designator for SNOMED, but SNM3 is allowed for backward compatibility. See ",
                        {
                           "el" : "olink",
                           "attrs" : {
                              "targetdoc" : "PS3.16",
                              "xrefstyle" : "select: labelnumber",
                              "targetptr" : "PS3.16"
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
         "module" : "Mammography Image",
         "mod_tables" : [
            "table_C.8-74"
         ],
         "usage" : "M"
      },
      "(0008,0096)[<0>](0008,0080)" : {
         "name" : "Institution Name",
         "entity" : "Study",
         "req" : "1C",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0040,0316)" : {
         "name" : "Organ Dose",
         "entity" : "Image",
         "req" : "3",
         "desc" : [
            "Average organ dose value measured in dGy during the acquisition of this image.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "This may be an estimated value."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_580cf930-2537-44db-b1ce-25058ba0ef89"
                     }
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-33"
         ],
         "module" : "X-Ray Acquisition Dose"
      },
      "(0028,1202)" : {
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
         "module" : "Image Pixel",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "name" : "Green Palette Color Lookup Table Data",
         "req" : "1C",
         "entity" : "Image"
      },
      "(0008,1140)" : {
         "usage" : "M",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "desc" : [
            "Other images significantly related to this image (e.g., post-localizer CT image or Mammographic biopsy or partial view images).",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "entity" : "Image",
         "name" : "Referenced Image Sequence"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a122)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "usage" : "U",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "entity" : "Image",
         "req" : "1C",
         "name" : "Time"
      },
      "(0040,9096)[<0>](0040,9220)" : {
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "module" : "General Image",
         "usage" : "M",
         "desc" : [
            "A list of name-value pairs that describe the characteristics of the quantity represented by the Real World Value.",
            "One or more Items are permitted in this Sequence.",
            "One of the items shall have a concept name that specifies the quantified characteristic, though it is not required that (G-C1C6, SRT, \"Quantity\") be used if there is a reason to use a similar concept from a different coding scheme. Other items may be concept modifiers, such as (G-C036, SRT, \"Measurement Method\"). The order of the items is not significant."
         ],
         "entity" : "Image",
         "req" : "3",
         "name" : "Quantity Definition Sequence"
      },
      "(0088,0200)[<0>](0028,0006)" : {
         "name" : "Planar Configuration",
         "entity" : "Image",
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
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M"
      },
      "(0018,1490)" : {
         "req" : "3",
         "entity" : "Image",
         "name" : "Tomo Type",
         "mod_tables" : [
            "table_C.8-32"
         ],
         "module" : "X-Ray Tomography Acquisition",
         "usage" : "U",
         "desc" : [
            "Type of tomography.",
            {
               "list" : [
                  [
                     "LINEAR",
                     null
                  ],
                  [
                     "SPIRAL",
                     null
                  ],
                  [
                     "POLYCYCLOIDAL",
                     null
                  ],
                  [
                     "CIRCULAR",
                     null
                  ]
               ],
               "type" : "variablelist",
               "title" : "Defined Terms:"
            }
         ]
      },
      "(4ffe,0001)[<0>](0400,0005)" : {
         "desc" : "A number, unique within this SOP Instance, used to identify this MAC Parameters Sequence (4FFE,0001) item from an Item of the Digital Signatures Sequence (FFFA,FFFA).",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "MAC ID Number",
         "entity" : "Image",
         "req" : "1"
      },
      "(0008,1062)[<0>](0008,0080)" : {
         "req" : "1C",
         "entity" : "Study",
         "name" : "Institution Name",
         "usage" : "M",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present."
      },
      "(0008,1090)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
         "desc" : "Manufacturer's model name of the equipment that produced the composite instances.",
         "entity" : "Equipment",
         "req" : "3",
         "name" : "Manufacturer's Model Name"
      },
      "(0008,0015)" : {
         "desc" : [
            "Date and time that the SOP Instance was last coerced by a Storage SCP (see ",
            {
               "el" : "olink",
               "attrs" : {
                  "targetptr" : "PS3.4",
                  "targetdoc" : "PS3.4",
                  "xrefstyle" : "select: labelnumber"
               }
            },
            ")."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Instance Coercion DateTime",
         "entity" : "Image",
         "req" : "3"
      },
      "(0010,0024)[<0>](0040,0035)" : {
         "req" : "3",
         "entity" : "Patient",
         "name" : "Identifier Type Code",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "desc" : [
            "Type of Patient ID. Refer to HL7 v2 Table 0203 for Defined Terms.",
            {
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
               ],
               "el" : "note"
            }
         ]
      },
      "(0018,7000)" : {
         "desc" : [
            "Whether or not the detector is operating within normal tolerances during this image acquisition.",
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
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_6c5ebe11-778a-40a1-864a-36d3cf8598c8"
                     },
                     "el" : "para",
                     "content" : [
                        "This flag is intended to indicate whether or not there may have been some compromise of the diagnostic quality of the image due to some condition such as over-temperature, etc."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "module" : "DX Detector",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "usage" : "M",
         "name" : "Detector Conditions Nominal Flag",
         "req" : "3",
         "entity" : "Image"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a121)" : {
         "entity" : "Image",
         "req" : "1C",
         "name" : "Date",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "usage" : "M",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ]
      },
      "(0018,1604)" : {
         "usage" : "U",
         "module" : "Display Shutter",
         "mod_tables" : [
            "table_C.7-17a"
         ],
         "desc" : "Required if Shutter Shape (0018,1600) is RECTANGULAR. Location of the right edge of the rectangular shutter with respect to pixels in the image given as column.",
         "req" : "1C",
         "entity" : "Image",
         "name" : "Shutter Right Vertical Edge"
      },
      "(0010,1030)" : {
         "entity" : "Study",
         "req" : "3",
         "name" : "Patient's Weight",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "desc" : "Weight of the Patient, in kilograms."
      },
      "(0040,0520)[<0>](0050,001e)" : {
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U",
         "desc" : "Container component text description.",
         "req" : "3",
         "entity" : "Image",
         "name" : "Container Component Description"
      },
      "(60xx,0045)" : {
         "entity" : "Image",
         "req" : "3",
         "name" : "Overlay Subtype",
         "module" : "Overlay Plane",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "usage" : "C - Required if graphic annotation is present - See ",
         "desc" : [
            "Defined Term that identifies the intended purpose of the Overlay Type. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.9.2.1.3"
               }
            },
            " for further explanation."
         ]
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a162)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "module" : "General Image",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "entity" : "Image",
         "name" : "Rational Numerator Value"
      },
      "(0018,1048)" : {
         "desc" : [
            "Active ingredient of agent.",
            {
               "title" : "Defined Terms:",
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
               "type" : "variablelist"
            }
         ],
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "module" : "Contrast/Bolus",
         "name" : "Contrast/Bolus Ingredient",
         "req" : "3",
         "entity" : "Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)" : {
         "name" : "Referenced SOP Sequence",
         "entity" : "Series",
         "req" : "1C",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a168)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "usage" : "U",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "entity" : "Image",
         "req" : "1C",
         "name" : "Concept Code Sequence"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0062,000b)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "entity" : "Image",
         "req" : "1C",
         "name" : "Referenced Segment Number"
      },
      "(0008,1052)[<0>](0040,1104)" : {
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
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
                                 "content" : [
                                    "It is recommended that this attribute be treated as equivalent to HL7v2 (v2.5 or later) field ROL-12, and be formatted in accordance with the HL7v2 XTN data type (without escapes for HL7 message structure reserved characters). See additional notes in the Module invoking this Macro."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_96e493a8-b679-4f97-987f-4e08360642a4"
                                 },
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
            }
         ],
         "entity" : "Series",
         "req" : "3",
         "name" : "Person's Telecom Information"
      },
      "(0008,001a)" : {
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
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Related General SOP Class UID",
         "entity" : "Image",
         "req" : "3"
      },
      "(0008,1200)" : {
         "desc" : [
            "Sequence of items each identifying a Study other than the Study of which this Instance is a part, which Studies contain Instances that are referenced elsewhere in this Instance.",
            "One or more Items shall be included in this Sequence.",
            "Required if this Instance references Instances in other Studies."
         ],
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "module" : "Common Instance Reference",
         "name" : "Studies Containing Other Referenced Instances Sequence",
         "entity" : "Image",
         "req" : "1C"
      },
      "(0008,009d)[<0>](0040,1104)" : {
         "name" : "Person's Telecom Information",
         "entity" : "Study",
         "req" : "3",
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
                                 "attrs" : {
                                    "xml:id" : "para_96e493a8-b679-4f97-987f-4e08360642a4"
                                 },
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
               ]
            }
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study"
      },
      "(0040,0518)" : {
         "entity" : "Image",
         "req" : "2",
         "name" : "Container Type Code Sequence",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "desc" : [
            "Type of container that contains the specimen(s) being imaged.",
            "Zero or one Item shall be included in this Sequence."
         ]
      },
      "(0018,0012)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "module" : "Contrast/Bolus",
         "desc" : [
            "Sequence that identifies the contrast agent.",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "entity" : "Image",
         "name" : "Contrast/Bolus Agent Sequence"
      },
      "(0040,0275)[<0>](0040,0009)" : [
         {
            "req" : "1C",
            "entity" : "Series",
            "name" : "Scheduled Procedure Step ID",
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9"
            ],
            "usage" : "M",
            "desc" : [
               "Identifier that identifies the Scheduled Procedure Step.",
               "Required if procedure was scheduled.",
               {
                  "el" : "note",
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
                  ]
               }
            ]
         },
         {
            "module" : "Mammography Series",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9"
            ],
            "usage" : "M",
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
            "req" : "1C",
            "entity" : "Series",
            "name" : "Scheduled Procedure Step ID"
         }
      ],
      "(0008,1062)[<0>](0008,0081)" : {
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "usage" : "M",
         "name" : "Institution Address",
         "req" : "3",
         "entity" : "Study"
      },
      "(0018,a001)[<0>](0018,1050)" : {
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Spatial Resolution",
         "entity" : "Image",
         "req" : "3"
      },
      "(0008,103f)" : {
         "desc" : [
            "A coded description of the Series.",
            "Only a single Item is permitted in this Sequence."
         ],
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Series Description Code Sequence",
         "entity" : "Series",
         "req" : "3"
      },
      "(0028,0300)" : {
         "desc" : [
            "Indicates whether or not this image is a quality control or phantom image.",
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
            [
               "If this Attribute is absent, then the image may or may not be a quality control or phantom image. The phantom device in the image can be described using the ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: title",
                     "linkend" : "sect_C.7.6.12"
                  }
               },
               ". See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.12"
                  }
               }
            ]
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image",
         "name" : "Quality Control Image",
         "entity" : "Image",
         "req" : "3"
      },
      "(0018,7012)" : {
         "entity" : "Image",
         "req" : "3",
         "name" : "Detector Time Since Last Exposure",
         "usage" : "M",
         "module" : "DX Detector",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "desc" : "Time in Seconds since an exposure was last made on this detector prior to the acquisition of this image."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0062,000b)" : {
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Referenced Segment Number",
         "req" : "1C",
         "entity" : "Series"
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
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "module" : "Patient Study",
         "usage" : "U",
         "name" : "Universal Entity ID Type",
         "entity" : "Study",
         "req" : "1C"
      },
      "(0018,1401)" : {
         "desc" : [
            "Code representing the device-specific processing associated with the image (e.g., Organ Filtering code)",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "This Code is manufacturer specific but provides useful annotation information to the knowledgeable observer."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_5d7942b6-fafe-42fc-896d-ac1a8dc2143d"
                     }
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "module" : "DX Image",
         "mod_tables" : [
            "table_C.8-70"
         ],
         "usage" : "M",
         "name" : "Acquisition Device Processing Code",
         "req" : "3",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a120)" : [
         {
            "desc" : [
               "DateTime value for this name-value Item.",
               "Required if Value Type (0040,A040) is DATETIME."
            ],
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "module" : "General Series",
            "usage" : "M",
            "name" : "DateTime",
            "req" : "1C",
            "entity" : "Series"
         },
         {
            "usage" : "M",
            "module" : "Mammography Series",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2"
            ],
            "desc" : [
               "DateTime value for this name-value Item.",
               "Required if Value Type (0040,A040) is DATETIME."
            ],
            "entity" : "Series",
            "req" : "1C",
            "name" : "DateTime"
         }
      ],
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a30a)" : {
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
         "entity" : "Series",
         "req" : "1C",
         "name" : "Numeric Value"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,08ea)" : {
         "name" : "Measurement Units Code Sequence",
         "entity" : "Image",
         "req" : "1C",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "entity" : "Series",
         "req" : "1"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a040)" : [
         {
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "module" : "General Series",
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
            "req" : "1",
            "entity" : "Series",
            "name" : "Value Type"
         },
         {
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
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2"
            ],
            "module" : "Mammography Series",
            "usage" : "M",
            "name" : "Value Type",
            "req" : "1",
            "entity" : "Series"
         }
      ],
      "(0028,0120)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
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
                                 "attrs" : {
                                    "xml:id" : "para_26f7a207-e6e2-417b-bd79-9085f3fa60cb"
                                 },
                                 "el" : "para",
                                 "content" : [
                                    "This Attribute does apply to RT Dose and Segmentation instances, since they include Pixel Data."
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
                                    "This Attribute does\n                          not apply when Float Pixel Data (7FE0,0008) or Double Float Pixel Data\n                          (7FE0,0009) are used instead of Pixel Data (7FE0,0010); Float Pixel\n                          Padding Value (0028,0122) or Double Float Pixel Padding Value\n                          (0028,0123), respectively, are used instead, and defined at the Image,\n                          not the Equipment, level."
                                 ],
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_77a29ed0-edb8-45c2-a3d1-d07bc572e485"
                                 }
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
         "req" : "1C",
         "entity" : "Equipment",
         "name" : "Pixel Padding Value"
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
                     "el" : "orderedlist",
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
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Related Series Sequence",
         "entity" : "Series",
         "req" : "3"
      },
      " (0010,0027) [<0>](0010,0024)" : {
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "entity" : "Patient",
         "req" : "3",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ]
      },
      "(0018,0036)[<0>](0018,003a)" : {
         "module" : "Intervention",
         "mod_tables" : [
            "table_C.7-19"
         ],
         "usage" : "U",
         "desc" : "Further description in free form text describing the therapy or other intervention.",
         "entity" : "Image",
         "req" : "3",
         "name" : "Intervention Description"
      },
      "(0008,1110)[<0>](0008,1155)" : {
         "entity" : "Study",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0040,0555)[<0>](0040,a168)" : {
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a Coded Value.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Date (0040,A121), Time (0040,A122), Person Name (0040,A123), Text Value (0040,A160), and the pair of Numeric Value (0040,A30A) and Measurement Units Code Sequence (0040,08EA) are not present."
         ],
         "usage" : "M",
         "module" : "Acquisition Context",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "name" : "Concept Code Sequence",
         "entity" : "Image",
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a160)" : [
         {
            "req" : "1C",
            "entity" : "Series",
            "name" : "Text Value",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "module" : "General Series",
            "desc" : [
               "Text value for this name-value Item.",
               "Required if Value Type (0040,A040) is TEXT."
            ]
         },
         {
            "entity" : "Series",
            "req" : "1C",
            "name" : "Text Value",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2"
            ],
            "module" : "Mammography Series",
            "usage" : "M",
            "desc" : [
               "Text value for this name-value Item.",
               "Required if Value Type (0040,A040) is TEXT."
            ]
         }
      ],
      "(0040,9096)[<0>](0040,9216)" : {
         "desc" : [
            "Specifies the first stored value mapped for the Real Word Value Intercept (0040,9224) and Real World Value Slope (0040,9225) or Real World Value LUT (0040,9212) of this Item.",
            "Required if Pixel Data (7FE0,0010) or Real World Value LUT Data (0040,9212) is present or Double Float Real World Value First Value Mapped (0040,9214) is absent.",
            {
               "el" : "note",
               "content" : [
                  "\n                        ",
                  {
                     "content" : [
                        "This Attribute may be used even when Float Pixel Data (7FE0,0008) or Double Float Pixel Data (7FE0,0009) are used instead of Pixel Data (7FE0,0010) if an integer of the size of this Attribute is sufficient to define the range."
                     ],
                     "attrs" : {
                        "xml:id" : "para_3508a2ea-51f7-4d12-952b-1fec9e9b31a0"
                     },
                     "el" : "para"
                  },
                  "\n                      "
               ]
            },
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
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "module" : "General Image",
         "usage" : "M",
         "name" : "Real World Value First Value Mapped",
         "entity" : "Image",
         "req" : "1C"
      },
      "(0032,1034)" : {
         "name" : "Requesting Service Code Sequence",
         "req" : "3",
         "entity" : "Study",
         "desc" : [
            "Institutional department where the request initiated.",
            "Only a single item is permitted in this Sequence."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study"
      },
      "(0018,7056)" : [
         {
            "desc" : "The minimum length (in mm) of the X-Ray beam path in the Filter Material that is not blocked by collimation. May be multi-valued, with values corresponding to the respective values in Filter Material (0018,7050).",
            "mod_tables" : [
               "table_C.8-33",
               "table_C.8-35a"
            ],
            "module" : "X-Ray Acquisition Dose",
            "usage" : "U",
            "name" : "Filter Beam Path Length Minimum",
            "entity" : "Image",
            "req" : "3"
         },
         {
            "entity" : "Image",
            "req" : "3",
            "name" : "Filter Beam Path Length Minimum",
            "usage" : "U",
            "module" : "X-Ray Filtration",
            "mod_tables" : [
               "table_C.8-35a"
            ],
            "desc" : "The minimum length (in mm) of the X-Ray beam path in the Filter Material that is not blocked by collimation. May be multi-valued, with values corresponding to the respective values in Filter Material (0018,7050)."
         }
      ],
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a043)" : [
         {
            "name" : "Concept Name Code Sequence",
            "req" : "1",
            "entity" : "Series",
            "desc" : [
               "Coded concept name of this name-value Item.",
               "Only a single Item shall be included in this Sequence."
            ],
            "usage" : "M",
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ]
         },
         {
            "desc" : [
               "Coded concept name of this name-value Item.",
               "Only a single Item shall be included in this Sequence."
            ],
            "module" : "Mammography Series",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2"
            ],
            "usage" : "M",
            "name" : "Concept Name Code Sequence",
            "entity" : "Series",
            "req" : "1"
         }
      ],
      "(0008,1070)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "desc" : "Name(s) of the operator(s) supporting the Series.",
         "entity" : "Series",
         "req" : "3",
         "name" : "Operators' Name"
      },
      "(0040,0260)[<0>](0040,0440)" : {
         "req" : "3",
         "entity" : "Series",
         "name" : "Protocol Context Sequence",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "desc" : "Sequence that specifies the context for the Performed Protocol Code Sequence Item. One or more Items are permitted in this Sequence."
      },
      "(0008,0020)" : {
         "entity" : "Study",
         "req" : "2",
         "name" : "Study Date",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "desc" : "Date the Study started."
      },
      "(0040,0275)[<0>](0040,100a)" : [
         {
            "req" : "3",
            "entity" : "Series",
            "name" : "Reason for Requested Procedure Code Sequence",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9"
            ],
            "module" : "General Series",
            "desc" : [
               "Coded Reason for requesting this procedure.",
               "One or more Items are permitted in this Sequence."
            ]
         },
         {
            "name" : "Reason for Requested Procedure Code Sequence",
            "req" : "3",
            "entity" : "Series",
            "desc" : [
               "Coded Reason for requesting this procedure.",
               "One or more Items are permitted in this Sequence."
            ],
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9"
            ],
            "module" : "Mammography Series",
            "usage" : "M"
         }
      ],
      "(0028,1352)" : {
         "req" : "3",
         "entity" : "Image",
         "name" : "Partial View Code Sequence",
         "mod_tables" : [
            "table_C.8-74"
         ],
         "module" : "Mammography Image",
         "usage" : "M",
         "desc" : [
            "Sequence that describes the portion or section of the breast captured in a partial view image.",
            "Only one or two Items are permitted in this Sequence.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.11.7.1.3"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "If this Attribute is absent, then the image may or may not be a partial view.",
            "This Attribute shall not be present if there is a View Modifier Code Sequence (0054,0222) Item of value (R-102D6, SRT, \"Magnification\") or (R-102D7, SRT, \"Spot Compression\").",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "SRT is the preferred designator for SNOMED, but SNM3 is allowed for backward compatibility. See ",
                        {
                           "el" : "olink",
                           "attrs" : {
                              "targetptr" : "PS3.16",
                              "targetdoc" : "PS3.16",
                              "xrefstyle" : "select: labelnumber"
                           }
                        },
                        "."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_c784d5f0-f91d-4f64-8027-e7e2364142df"
                     }
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ]
      },
      "(0008,103e)" : {
         "desc" : "Description of the Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "usage" : "M",
         "name" : "Series Description",
         "req" : "3",
         "entity" : "Series"
      },
      "(0010,1100)[<0>](0040,e021)" : {
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "desc" : [
            "Details for retrieving instances via the DICOM Retrieve Service.",
            "Required if DICOM Media Retrieval Sequence (0040,E022), WADO Retrieval Sequence (0040,E023), WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "This sequence shall only identify sources known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Patient",
         "req" : "1C",
         "name" : "DICOM Retrieval Sequence"
      },
      "(0018,1046)" : {
         "name" : "Contrast Flow Rate",
         "entity" : "Image",
         "req" : "3",
         "desc" : "Rate(s) of injection(s) in milliliters/sec",
         "module" : "Contrast/Bolus",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "usage" : "U"
      },
      "(0060,3000)[<0>](0060,3008)" : {
         "name" : "Histogram Bin Width",
         "entity" : "Image",
         "req" : "1",
         "desc" : "The number of consecutive stored pixel values included in a bin. All bins shall be of equal width.",
         "usage" : "U",
         "module" : "Image Histogram",
         "mod_tables" : [
            "table_C.11.5-1"
         ]
      },
      "(0018,1622)" : {
         "entity" : "Image",
         "req" : "3",
         "name" : "Shutter Presentation Value",
         "mod_tables" : [
            "table_C.7-17a"
         ],
         "module" : "Display Shutter",
         "usage" : "U",
         "desc" : [
            "A single gray unsigned value used to replace those parts of the image occluded by the shutter, when rendered on a monochrome display. The units are specified in P-Values, from a minimum of 0000H (black) up to a maximum of FFFFH (white).",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_ffd1df8a-26f5-4fb0-aeb7-f15acf3c3a88"
                     },
                     "content" : [
                        "The maximum P-Value for this Attribute may be different from the maximum P-Value from the output of the Presentation LUT, which may be less than 16 bits in depth."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ]
      },
      "(0008,0110)[<0>](0008,0114)" : {
         "req" : "2C",
         "entity" : "Image",
         "name" : "Coding Scheme External ID",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "desc" : "The coding scheme identifier as defined in an external registry. Required if coding scheme is registered and Coding Scheme UID (0008,010C) is not present."
      },
      "(0010,1100)[<0>](0040,e022)[<1>](0088,0140)" : {
         "name" : "Storage Media File-Set UID",
         "entity" : "Patient",
         "req" : "1",
         "desc" : "Uniquely identifies the Storage Media on which the referenced instance(s) reside.",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "module" : "Patient",
         "usage" : "M"
      },
      "(0020,9172)[<0>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "entity" : "Image",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0020,9172)[<0>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "entity" : "Image",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0018,113a)" : {
         "entity" : "Image",
         "req" : "3",
         "name" : "Table Type",
         "usage" : "U",
         "module" : "DX Positioning",
         "mod_tables" : [
            "table_C.8-72"
         ],
         "desc" : {
            "title" : "Defined Terms:",
            "list" : [
               [
                  "FIXED",
                  null
               ],
               [
                  "TILTING",
                  null
               ],
               [
                  "NONE",
                  null
               ]
            ],
            "type" : "variablelist"
         }
      },
      "(0008,002a)" : {
         "desc" : [
            "The date and time that the acquisition of data that resulted in this image started.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_7d04c307-81dd-4f92-a182-bb4317fb66bb"
                     },
                     "el" : "para",
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
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M",
         "name" : "Acquisition DateTime",
         "req" : "3",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a30a)" : [
         {
            "name" : "Numeric Value",
            "entity" : "Series",
            "req" : "1C",
            "desc" : [
               "Numeric value for this name-value Item. Only a single value shall be present.",
               "Required if Value Type (0040,A040) is NUMERIC."
            ],
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "usage" : "M"
         },
         {
            "req" : "1C",
            "entity" : "Series",
            "name" : "Numeric Value",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2"
            ],
            "module" : "Mammography Series",
            "desc" : [
               "Numeric value for this name-value Item. Only a single value shall be present.",
               "Required if Value Type (0040,A040) is NUMERIC."
            ]
         }
      ],
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0033)" : [
         {
            "name" : "Universal Entity ID Type",
            "entity" : "Series",
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
                  "type" : "variablelist",
                  "title" : "Enumerated Values:"
               }
            ],
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-17"
            ],
            "module" : "General Series"
         },
         {
            "name" : "Universal Entity ID Type",
            "entity" : "Series",
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
                  "type" : "variablelist",
                  "title" : "Enumerated Values:"
               }
            ],
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-17"
            ],
            "module" : "Mammography Series"
         }
      ],
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)" : {
         "name" : "Referenced SOP Sequence",
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a30a)" : {
         "entity" : "Image",
         "req" : "1C",
         "name" : "Numeric Value",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ]
      },
      "(0040,0254)" : {
         "desc" : "Institution-generated description or classification of the Procedure Step that was performed.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "module" : "General Series",
         "usage" : "M",
         "name" : "Performed Procedure Step Description",
         "req" : "3",
         "entity" : "Series"
      },
      "(0018,7008)" : {
         "req" : "3",
         "entity" : "Image",
         "name" : "Detector Mode",
         "usage" : "M",
         "module" : "DX Detector",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "desc" : "Text description of operating mode of detector (implementation specific)."
      },
      "(0028,0010)" : {
         "name" : "Rows",
         "req" : "1",
         "entity" : "Image",
         "desc" : "Number of rows in the image.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "module" : "Image Pixel"
      },
      "(0040,0275)[<0>](0032,1064)" : [
         {
            "desc" : [
               "A sequence that conveys the Procedure Type of the requested procedure.",
               "Only a single Item is permitted in this Sequence."
            ],
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9"
            ],
            "module" : "General Series",
            "name" : "Requested Procedure Code Sequence",
            "entity" : "Series",
            "req" : "3"
         },
         {
            "name" : "Requested Procedure Code Sequence",
            "req" : "3",
            "entity" : "Series",
            "desc" : [
               "A sequence that conveys the Procedure Type of the requested procedure.",
               "Only a single Item is permitted in this Sequence."
            ],
            "usage" : "M",
            "module" : "Mammography Series",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9"
            ]
         }
      ],
      "(0008,2112)[<0>](0020,0020)" : {
         "desc" : [
            "The Patient Orientation values of the source image.",
            "Required if the value of Spatial Locations Preserved (0028,135A) is REORIENTED_ONLY."
         ],
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image",
         "usage" : "M",
         "name" : "Patient Orientation",
         "req" : "1C",
         "entity" : "Image"
      },
      "(0008,2112)[<0>](0062,000b)" : {
         "req" : "1C",
         "entity" : "Image",
         "name" : "Referenced Segment Number",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3"
         ],
         "module" : "General Image",
         "usage" : "M",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a124)" : {
         "usage" : "M",
         "module" : "General Series",
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
         "entity" : "Series",
         "name" : "UID"
      },
      "(0012,0083)[<0>](0012,0020)" : {
         "name" : "Clinical Trial Protocol ID",
         "req" : "1C",
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
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "module" : "Clinical Trial Study",
         "usage" : "U"
      },
      "(0040,0560)[<0>](0008,2228)[<1>](0008,2230)" : {
         "entity" : "Image",
         "req" : "3",
         "name" : "Primary Anatomic Structure Modifier Sequence",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-8"
         ],
         "usage" : "U",
         "desc" : [
            "Sequence of Items that modifies the primary anatomic structure of interest in this Instance.",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0040,0560)[<0>](0040,0610)" : {
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
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "name" : "Specimen Preparation Sequence",
         "entity" : "Image",
         "req" : "2"
      },
      "(0012,0030)" : {
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
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject",
         "name" : "Clinical Trial Site ID",
         "entity" : "Patient",
         "req" : "2"
      },
      "(0008,0096)[<0>](0040,1103)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "desc" : "Person's telephone number(s)",
         "req" : "3",
         "entity" : "Study",
         "name" : "Person's Telephone Numbers"
      },
      "(0018,8151)" : [
         {
            "name" : "X-Ray Tube Current in \u00b5A",
            "req" : "3",
            "entity" : "Image",
            "desc" : "X-Ray Tube Current in \u00b5A.",
            "usage" : "U",
            "mod_tables" : [
               "table_C.8-33"
            ],
            "module" : "X-Ray Acquisition Dose"
         },
         {
            "name" : "X-Ray Tube Current in \u00b5A",
            "req" : "3",
            "entity" : "Image",
            "desc" : "X-Ray Tube Current in \u00b5A.",
            "mod_tables" : [
               "table_C.8-34"
            ],
            "module" : "X-Ray Generation",
            "usage" : "U"
         }
      ],
      "(0010,2294)[<0>](0010,2295)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "desc" : "Identification number of an animal within the registry.",
         "req" : "1",
         "entity" : "Patient",
         "name" : "Breed Registration Number"
      },
      "(0018,0010)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "module" : "Contrast/Bolus",
         "desc" : "Contrast or bolus agent",
         "req" : "2",
         "entity" : "Image",
         "name" : "Contrast/Bolus Agent"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a161)" : {
         "req" : "1C",
         "entity" : "Series",
         "name" : "Floating Point Value",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ]
      },
      "(0028,1041)" : {
         "mod_tables" : [
            "table_C.8-70"
         ],
         "module" : "DX Image",
         "usage" : "M",
         "desc" : [
            "The sign of the relationship between the Pixel sample values stored in Pixel Data (7FE0,0010) and the X-Ray beam intensity.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "+1",
                     "Lower pixel values correspond to less X-Ray beam intensity"
                  ],
                  [
                     "-1",
                     "Higher pixel values correspond to less X-Ray beam intensity"
                  ]
               ],
               "title" : "Enumerated Values:"
            },
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.11.3.1.2",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ]
         ],
         "req" : "1",
         "entity" : "Image",
         "name" : "Pixel Intensity Relationship Sign"
      },
      "(0018,a001)[<0>](0008,1072)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Identification of the operator(s) of the contributing equipment.",
            "One or more Items are permitted in this Sequence.",
            "The number and order of Items shall correspond to the number and order of values of Operators' Name (0008,1070), if present."
         ],
         "entity" : "Image",
         "req" : "3",
         "name" : "Operator Identification Sequence"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a160)" : [
         {
            "req" : "1C",
            "entity" : "Series",
            "name" : "Text Value",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "module" : "General Series",
            "usage" : "M",
            "desc" : [
               "Text value for this name-value Item.",
               "Required if Value Type (0040,A040) is TEXT."
            ]
         },
         {
            "entity" : "Series",
            "req" : "1C",
            "name" : "Text Value",
            "usage" : "M",
            "module" : "Mammography Series",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2"
            ],
            "desc" : [
               "Text value for this name-value Item.",
               "Required if Value Type (0040,A040) is TEXT."
            ]
         }
      ],
      "(60xx,0050)" : {
         "desc" : [
            "Location of first overlay point with respect to pixels in the image, given as row\\column.",
            "The upper left pixel of the image has the coordinate 1\\1.",
            "Column values greater than 1 indicate the overlay plane origin is to the right of the image origin. Row values greater than 1 indicate the overlay plane origin is below the image origin. Values less than 1 indicate the overlay plane origin is above or to the left of the image origin.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_698fb6e3-4667-46b4-9886-07e33aabd8b4"
                     },
                     "content" : [
                        "Values of 0\\0 indicate that the overlay pixels start 1 row above and one column to the left of the image pixels."
                     ]
                  },
                  "\n                "
               ]
            }
         ],
         "usage" : "C - Required if graphic annotation is present - See ",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "module" : "Overlay Plane",
         "name" : "Overlay Origin",
         "req" : "1",
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a121)" : {
         "name" : "Date",
         "entity" : "Image",
         "req" : "1C",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "usage" : "U",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0040,e001)" : {
         "desc" : [
            "Instance Identifier of the encapsulated HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
            "Required if Type of Instances (0040,E020) is CDA."
         ],
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "name" : "HL7 Instance Identifier",
         "req" : "1C",
         "entity" : "Patient"
      },
      "(0008,009d)" : {
         "entity" : "Study",
         "req" : "3",
         "name" : "Consulting Physician Identification Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "desc" : [
            "Identification of the consulting physician(s).",
            "One or more Items shall be included in this Sequence. If more than one Item, the number and order shall correspond to the value of Consulting Physician's Name (0008,009C), if present."
         ]
      },
      "(0012,0082)" : {
         "req" : "3",
         "entity" : "Patient",
         "name" : "Clinical Trial Protocol Ethics Committee Approval Number",
         "usage" : "U",
         "module" : "Clinical Trial Subject",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "desc" : "Approval number issued by committee described in Clinical Trial Protocol Ethics Committee Name (0012,0081)."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a043)" : {
         "name" : "Concept Name Code Sequence",
         "req" : "1",
         "entity" : "Series",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0060,3000)[<0>](0060,3004)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.11.5-1"
         ],
         "module" : "Image Histogram",
         "desc" : [
            "The stored pixel value corresponding to the lowest pixel value counted in the first bin. All image pixel values less than this value are not included in the histogram.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "The Value Representation of this Attribute is determined by the value of Pixel Representation (0028,0103)."
                     ],
                     "attrs" : {
                        "xml:id" : "para_fbeefb32-91a3-43d7-926c-08f4c3f50472"
                     },
                     "el" : "para"
                  },
                  "\n                "
               ]
            }
         ],
         "entity" : "Image",
         "req" : "1",
         "name" : "Histogram First Bin Value"
      },
      "(0008,1040)" : {
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "desc" : "Department in the institution where the equipment that produced the composite instances is located.",
         "entity" : "Equipment",
         "req" : "3",
         "name" : "Institutional Department Name"
      },
      "(fffa,fffa)[<0>](0400,0401)" : {
         "name" : "Digital Signature Purpose Code Sequence",
         "entity" : "Image",
         "req" : "3",
         "desc" : [
            "The purpose of this Digital Signature.",
            "Only a single Item is permitted in this Sequence."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common"
      },
      "(0088,0200)[<0>](0028,1101)" : {
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M",
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
         "entity" : "Image",
         "name" : "Red Palette Color Lookup Table Descriptor"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0035)" : {
         "name" : "Identifier Type Code",
         "entity" : "Patient",
         "req" : "3",
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
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ]
      },
      "(0018,5101)" : {
         "desc" : [
            "Radiographic view of the image relative to the imaging subject's orientation.",
            [
               "Shall be consistent with View Code Sequence (0054,0220). See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.11.5.1.1"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-72"
         ],
         "module" : "DX Positioning",
         "name" : "View Position",
         "entity" : "Image",
         "req" : "3"
      },
      "(0088,0200)[<0>](0028,0103)" : {
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image",
         "usage" : "M",
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
         "entity" : "Image",
         "req" : "1",
         "name" : "Pixel Representation"
      },
      "(0038,0014)[<0>](0040,0033)" : {
         "usage" : "U",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
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
         "entity" : "Study",
         "name" : "Universal Entity ID Type"
      },
      "(0018,700a)" : {
         "desc" : "The ID or serial number of the detector used to acquire this image.",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "module" : "DX Detector",
         "usage" : "M",
         "name" : "Detector ID",
         "entity" : "Image",
         "req" : "3"
      },
      "(0018,1150)" : [
         {
            "name" : "Exposure Time",
            "req" : "3",
            "entity" : "Image",
            "desc" : "Duration of X-Ray exposure in msec.",
            "module" : "X-Ray Acquisition Dose",
            "mod_tables" : [
               "table_C.8-33"
            ],
            "usage" : "U"
         },
         {
            "desc" : "Duration of X-Ray exposure in msec.",
            "mod_tables" : [
               "table_C.8-34"
            ],
            "module" : "X-Ray Generation",
            "usage" : "U",
            "name" : "Exposure Time",
            "req" : "3",
            "entity" : "Image"
         }
      ],
      "(0020,000d)" : {
         "req" : "1",
         "entity" : "Study",
         "name" : "Study Instance UID",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "desc" : "Unique identifier for the Study."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1155)" : [
         {
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2",
               "table_10-11"
            ],
            "usage" : "M",
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "req" : "1",
            "entity" : "Series",
            "name" : "Referenced SOP Instance UID"
         },
         {
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2",
               "table_10-11"
            ],
            "module" : "Mammography Series",
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "req" : "1",
            "entity" : "Series",
            "name" : "Referenced SOP Instance UID"
         }
      ],
      "(0008,1049)[<0>](0040,1101)" : {
         "name" : "Person Identification Code Sequence",
         "entity" : "Study",
         "req" : "1",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0008,1110)" : [
         {
            "name" : "Referenced Study Sequence",
            "entity" : "Series",
            "req" : "3",
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
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9"
            ],
            "module" : "General Series"
         },
         {
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
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9"
            ],
            "module" : "Mammography Series",
            "name" : "Referenced Study Sequence",
            "req" : "3",
            "entity" : "Series"
         }
      ],
      "(0008,1080)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "desc" : "Description of the admitting diagnosis (diagnoses)",
         "entity" : "Study",
         "req" : "3",
         "name" : "Admitting Diagnoses Description"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a040)" : {
         "name" : "Value Type",
         "entity" : "Series",
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "usage" : "M"
      },
      "(0008,0070)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
         "usage" : "M",
         "desc" : "Manufacturer of the equipment that produced the composite instances.",
         "req" : "2",
         "entity" : "Equipment",
         "name" : "Manufacturer"
      },
      "(0010,0024)[<0>](0040,0032)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "usage" : "M",
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
         "entity" : "Patient",
         "req" : "3",
         "name" : "Universal Entity ID"
      },
      "(60xx,1303)" : {
         "req" : "3",
         "entity" : "Image",
         "name" : "ROI Standard Deviation",
         "usage" : "C - Required if graphic annotation is present - See ",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "module" : "Overlay Plane",
         "desc" : [
            "ROI standard deviation.",
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
      "(0010,0026)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "module" : "Patient",
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
         "entity" : "Patient",
         "req" : "3",
         "name" : "Source Patient Group Identification Sequence"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a162)" : [
         {
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "module" : "General Series",
            "desc" : [
               "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
            ],
            "req" : "1C",
            "entity" : "Series",
            "name" : "Rational Numerator Value"
         },
         {
            "name" : "Rational Numerator Value",
            "entity" : "Series",
            "req" : "1C",
            "desc" : [
               "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
            ],
            "usage" : "M",
            "module" : "Mammography Series",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2"
            ]
         }
      ],
      "(0050,0010)[<0>](0050,0017)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "module" : "Device",
         "desc" : [
            "Required if Device Diameter (0050,0016) is present.",
            {
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
               ],
               "type" : "variablelist"
            }
         ],
         "entity" : "Image",
         "req" : "2C",
         "name" : "Device Diameter Units"
      },
      "(0050,0010)[<0>](0050,0018)" : {
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
         "module" : "Device",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "usage" : "U",
         "name" : "Device Volume",
         "req" : "3",
         "entity" : "Image"
      },
      "(0040,0314)" : {
         "name" : "Half Value Layer",
         "entity" : "Image",
         "req" : "3",
         "desc" : [
            "The thickness of Aluminum in mm required to reduce the X-Ray Output (0040,0312) by a factor of two.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_549b31a6-89ef-4cd9-abfc-517daeb84ddd"
                     },
                     "content" : [
                        "This value may be a calibrated value rather than measured during the exposure."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-33"
         ],
         "module" : "X-Ray Acquisition Dose"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a162)" : {
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "usage" : "M",
         "name" : "Rational Numerator Value",
         "req" : "1C",
         "entity" : "Series"
      },
      "(0018,11a0)" : [
         {
            "desc" : "The average thickness in mm of the body part examined when compressed, if compression has been applied during exposure.",
            "mod_tables" : [
               "table_C.8-72"
            ],
            "module" : "DX Positioning",
            "usage" : "U",
            "name" : "Body Part Thickness",
            "entity" : "Image",
            "req" : "3"
         },
         {
            "desc" : "The average thickness in mm of the body part examined when compressed, if compression has been applied during exposure.",
            "mod_tables" : [
               "table_C.8-33"
            ],
            "module" : "X-Ray Acquisition Dose",
            "usage" : "U",
            "name" : "Body Part Thickness",
            "req" : "3",
            "entity" : "Image"
         }
      ],
      "(0018,1411)" : [
         {
            "name" : "Exposure Index",
            "req" : "3",
            "entity" : "Image",
            "desc" : [
               "Measure of the detector response to radiation in the relevant image region of an image acquired with a digital x-ray imaging system as defined in IEC 62494-1.",
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
                                    "el" : "para",
                                    "attrs" : {
                                       "xml:id" : "para_43f525df-4811-46e0-9074-796cd064a8ea"
                                    },
                                    "content" : [
                                       "This index value is scaled as defined by IEC 62494-1."
                                    ]
                                 },
                                 "\n                  "
                              ],
                              "el" : "listitem"
                           },
                           "\n                "
                        ],
                        "el" : "orderedlist",
                        "attrs" : {
                           "numeration" : "arabic"
                        }
                     },
                     "\n              "
                  ],
                  "el" : "note"
               }
            ],
            "usage" : "M",
            "module" : "DX Detector",
            "mod_tables" : [
               "table_C.8-71b",
               "table_10-23"
            ]
         },
         {
            "module" : "X-Ray Acquisition Dose",
            "mod_tables" : [
               "table_C.8-33",
               "table_10-23"
            ],
            "usage" : "U",
            "desc" : [
               "Measure of the detector response to radiation in the relevant image region of an image acquired with a digital x-ray imaging system as defined in IEC 62494-1.",
               {
                  "content" : [
                     "\n                ",
                     {
                        "attrs" : {
                           "numeration" : "arabic"
                        },
                        "el" : "orderedlist",
                        "content" : [
                           "\n                  ",
                           {
                              "content" : [
                                 "\n                    ",
                                 {
                                    "content" : [
                                       "A string rather than binary Value Representation is used for this Attribute, in order to allow the sender to control the precision of the value as suggested in the report of AAPM Task Group 116."
                                    ],
                                    "attrs" : {
                                       "xml:id" : "para_fed62ca5-6e4b-41de-8d9c-09631af0e579"
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
                  ],
                  "el" : "note"
               }
            ],
            "req" : "3",
            "entity" : "Image",
            "name" : "Exposure Index"
         }
      ],
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a161)" : {
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "module" : "General Image",
         "usage" : "M",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "entity" : "Image",
         "req" : "1C",
         "name" : "Floating Point Value"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0081)" : {
         "name" : "Institution Address",
         "req" : "3",
         "entity" : "Image",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common"
      },
      "(0028,0102)" : [
         {
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "module" : "Image Pixel",
            "desc" : [
               "Most significant bit for pixel sample data. Each sample shall have the same high bit. High Bit (0028,0102) shall be one less than Bits Stored (0028,0101). See ",
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
            "req" : "1",
            "entity" : "Image",
            "name" : "High Bit"
         },
         {
            "name" : "High Bit",
            "entity" : "Image",
            "req" : "1",
            "desc" : [
               "Most significant bit for pixel sample data.",
               "Shall be one less than the value in Bit Stored (0028,0101)."
            ],
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-70"
            ],
            "module" : "DX Image"
         }
      ],
      "(0020,1040)" : {
         "usage" : "C - Required if multiple images are obtained without releasing breast compression",
         "mod_tables" : [
            "table_C.7-6"
         ],
         "module" : "Frame of Reference",
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
         "name" : "Position Reference Indicator"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a123)" : {
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "usage" : "M",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "entity" : "Image",
         "req" : "1C",
         "name" : "Person Name"
      },
      "(0060,3000)" : {
         "name" : "Histogram Sequence",
         "req" : "1",
         "entity" : "Image",
         "desc" : [
            "Defines a sequence of Histograms.",
            "One or more Items shall be included in this Sequence."
         ],
         "usage" : "U",
         "mod_tables" : [
            "table_C.11.5-1"
         ],
         "module" : "Image Histogram"
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
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Specific Character Set",
         "entity" : "Image",
         "req" : "1C"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0062,000b)" : {
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "name" : "Referenced Segment Number",
         "entity" : "Image",
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a124)" : [
         {
            "entity" : "Series",
            "req" : "1C",
            "name" : "UID",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "module" : "General Series",
            "desc" : [
               "UID value for this name-value Item.",
               "Required if Value Type (0040,A040) is UIDREF."
            ]
         },
         {
            "entity" : "Series",
            "req" : "1C",
            "name" : "UID",
            "usage" : "M",
            "module" : "Mammography Series",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2"
            ],
            "desc" : [
               "UID value for this name-value Item.",
               "Required if Value Type (0040,A040) is UIDREF."
            ]
         }
      ],
      "(0018,1508)" : [
         {
            "usage" : "U",
            "mod_tables" : [
               "table_C.8-72"
            ],
            "module" : "DX Positioning",
            "desc" : [
               {
                  "type" : "variablelist",
                  "list" : [
                     [
                        "CARM",
                        null
                     ],
                     [
                        "COLUMN",
                        null
                     ],
                     [
                        "MAMMOGRAPHIC",
                        null
                     ],
                     [
                        "PANORAMIC",
                        null
                     ],
                     [
                        "CEPHALOSTAT",
                        null
                     ],
                     [
                        "RIGID",
                        null
                     ],
                     [
                        "NONE",
                        null
                     ]
                  ],
                  "title" : "Defined Terms:"
               },
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
                                       "The term CARM can apply to any positioner with 2 degrees of freedom of rotation of the X-Ray beam about the Imaging Subject."
                                    ],
                                    "el" : "para",
                                    "attrs" : {
                                       "xml:id" : "para_6b7478cf-e7fa-4485-ade3-d7ceaf6e587e"
                                    }
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
                                    "attrs" : {
                                       "xml:id" : "para_78309346-f766-40d1-8ac1-b07e3805c3cf"
                                    },
                                    "content" : [
                                       "The term COLUMN can apply to any positioner with 1 degree of freedom of rotation of the X-Ray beam about the Imaging Subject."
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
            "entity" : "Image",
            "req" : "2",
            "name" : "Positioner Type"
         },
         {
            "req" : "1",
            "entity" : "Image",
            "name" : "Positioner Type",
            "module" : "Mammography Image",
            "mod_tables" : [
               "table_C.8-74"
            ],
            "usage" : "M",
            "desc" : {
               "type" : "variablelist",
               "list" : [
                  [
                     "MAMMOGRAPHIC",
                     null
                  ],
                  [
                     "NONE",
                     null
                  ]
               ],
               "title" : "Enumerated Values:"
            }
         }
      ],
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
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.12.1.1.3.1.2",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Signature",
         "req" : "1",
         "entity" : "Image"
      },
      "(0028,3010)" : [
         {
            "usage" : "M",
            "module" : "DX Image",
            "mod_tables" : [
               "table_C.8-70"
            ],
            "desc" : [
               "Defines a sequence of VOI LUTs.",
               [
                  "See ",
                  {
                     "attrs" : {
                        "linkend" : "sect_C.8.11.3.1.5",
                        "xrefstyle" : "select: label"
                     },
                     "el" : "xref"
                  },
                  " for further explanation."
               ],
               "One or more Items shall be included in this Sequence.",
               "Required if Presentation Intent Type (0008,0068) is FOR PRESENTATION and Window Center (0028,1050) is not present. May also be present if Window Center (0028,1050) is present."
            ],
            "req" : "1C",
            "entity" : "Image",
            "name" : "VOI LUT Sequence"
         },
         {
            "entity" : "Image",
            "req" : "1C",
            "name" : "VOI LUT Sequence",
            "mod_tables" : [
               "table_C.11-2b"
            ],
            "module" : "VOI LUT",
            "usage" : "C - Required if Presentation Intent Type (0008,0068) is FOR PRESENTATION. Shall not be present otherwise.",
            "desc" : [
               "Defines a sequence of VOI LUTs.",
               "One or more Items shall be included in this Sequence.",
               "Required if Window Center (0028,1050) is not present. May be present otherwise."
            ]
         }
      ],
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0033)" : {
         "entity" : "Patient",
         "req" : "1C",
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "module" : "Patient",
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
         ]
      },
      "(0018,6000)" : {
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "module" : "DX Detector",
         "usage" : "M",
         "desc" : [
            "Detector sensitivity in manufacturer specific units.",
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
                                 "content" : [
                                    "This value is intended to provide a single location where manufacturer specific information can be found for annotation on a display or film, that has meaning to a knowledgeable observer."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_0936da47-cfae-4167-a653-765f69cfd218"
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
                                    "xml:id" : "para_31cfc173-5434-4f4d-a128-dc4aa6aeb079"
                                 },
                                 "content" : [
                                    "This value is manufacturer-specific. DICOM specifies standard Attributes in ",
                                    {
                                       "el" : "xref",
                                       "attrs" : {
                                          "linkend" : "table_10-23",
                                          "xrefstyle" : "select: label"
                                       }
                                    },
                                    " 'Exposure Index Macro', which are recommended."
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
         "entity" : "Image",
         "req" : "3",
         "name" : "Sensitivity"
      },
      "(0020,0012)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image",
         "desc" : "A number identifying the single continuous gathering of data over a period of time that resulted in this image.",
         "req" : "3",
         "entity" : "Image",
         "name" : "Acquisition Number"
      },
      "(fffa,fffa)[<0>](0400,0110)" : {
         "desc" : [
            "The type of certificate used in (0400,0115).",
            {
               "title" : "Defined Terms:",
               "list" : [
                  [
                     "X509_1993_SIG",
                     null
                  ]
               ],
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
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Certificate Type",
         "req" : "1",
         "entity" : "Image"
      },
      "(0008,0033)" : {
         "entity" : "Image",
         "req" : "2C",
         "name" : "Content Time",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M",
         "desc" : [
            "The time the image pixel data creation started.",
            "Required if image is part of a series in which the images are temporally related. May be present otherwise."
         ]
      },
      "(0028,0303)" : {
         "entity" : "Image",
         "req" : "3",
         "name" : "Longitudinal Temporal Information Modified",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "desc" : [
            "Indicates whether or not the date and time attributes in the instance have been modified during de-identification.",
            {
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
               ],
               "title" : "Enumerated Values:"
            },
            [
               "See ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "targetptr" : "PS3.15",
                     "xrefstyle" : "select: labelnumber",
                     "targetdoc" : "PS3.15"
                  }
               },
               "."
            ]
         ]
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,003a)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "usage" : "M",
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
         "entity" : "Patient",
         "name" : "Assigning Agency or Department Code Sequence"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a123)" : [
         {
            "desc" : [
               "Person name value for this name-value Item.",
               "Required if Value Type (0040,A040) is PNAME."
            ],
            "usage" : "M",
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "name" : "Person Name",
            "entity" : "Series",
            "req" : "1C"
         },
         {
            "entity" : "Series",
            "req" : "1C",
            "name" : "Person Name",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2"
            ],
            "module" : "Mammography Series",
            "usage" : "M",
            "desc" : [
               "Person name value for this name-value Item.",
               "Required if Value Type (0040,A040) is PNAME."
            ]
         }
      ],
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a163)" : [
         {
            "entity" : "Series",
            "req" : "1C",
            "name" : "Rational Denominator Value",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "module" : "General Series",
            "usage" : "M",
            "desc" : [
               "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Rational Numerator Value (0040,A162) is present."
            ]
         },
         {
            "usage" : "M",
            "module" : "Mammography Series",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2"
            ],
            "desc" : [
               "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Rational Numerator Value (0040,A162) is present."
            ],
            "req" : "1C",
            "entity" : "Series",
            "name" : "Rational Denominator Value"
         }
      ],
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a120)" : {
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "DateTime",
         "entity" : "Series",
         "req" : "1C"
      },
      "(0008,0201)" : {
         "entity" : "Image",
         "req" : "3",
         "name" : "Timezone Offset From UTC",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "desc" : [
            "Contains the offset from UTC to the timezone for all DA and TM Attributes present in this SOP Instance, and for all DT Attributes present in this SOP Instance that do not contain an explicitly encoded timezone offset.",
            "Encoded as an ASCII string in the format \"&ZZXX\". The components of this string, from left to right, are & = \"+\" or \"-\", and ZZ = Hours and XX = Minutes of offset. Leading space characters shall not be present.",
            "The offset for UTC shall be +0000; -0000 shall not be used.",
            {
               "el" : "note",
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
                                    "This encoding is the same as described in ",
                                    {
                                       "attrs" : {
                                          "targetptr" : "PS3.5",
                                          "xrefstyle" : "select: labelnumber",
                                          "targetdoc" : "PS3.5"
                                       },
                                       "el" : "olink"
                                    },
                                    " for the offset component of the DT Value Representation."
                                 ],
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_526f07aa-0b79-4c2d-8362-049aceaf5696"
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
                                    "This Attribute does not apply to values with a DT Value Representation, that contains an explicitly encoded timezone offset."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_155b097e-395f-4748-981c-0255b00fe9a8"
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
                                 "attrs" : {
                                    "xml:id" : "para_1ab95f54-00ed-4128-a3f9-96f3f05669d0"
                                 },
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
                                 "attrs" : {
                                    "xml:id" : "para_6500ab52-60e5-4f8a-a3e5-fcedc8ddc8fc"
                                 },
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_5346ad4e-84cd-47ed-bc69-c2b41005345d"
                     }
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
                     "el" : "para",
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
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a163)" : [
         {
            "name" : "Rational Denominator Value",
            "req" : "1C",
            "entity" : "Series",
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
            "module" : "General Series"
         },
         {
            "name" : "Rational Denominator Value",
            "req" : "1C",
            "entity" : "Series",
            "desc" : [
               "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Rational Numerator Value (0040,A162) is present."
            ],
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2"
            ],
            "module" : "Mammography Series",
            "usage" : "M"
         }
      ],
      "(0010,2160)" : {
         "name" : "Ethnic Group",
         "req" : "3",
         "entity" : "Patient",
         "desc" : "Ethnic group or race of the patient.",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "usage" : "M"
      },
      "(0010,0026)[<0>](0010,0024)" : {
         "entity" : "Patient",
         "req" : "3",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ]
      },
      "(0040,a390)[<0>](0040,e010)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "req" : "3",
         "entity" : "Image",
         "name" : "Retrieve URI"
      },
      "(0088,0200)[<0>](0028,0002)" : {
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
         "usage" : "M",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "name" : "Samples per Pixel",
         "req" : "1",
         "entity" : "Image"
      },
      "(0008,0032)" : {
         "name" : "Acquisition Time",
         "req" : "3",
         "entity" : "Image",
         "desc" : "The time the acquisition of data that resulted in this image started",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image",
         "usage" : "M"
      },
      "(0018,1111)" : [
         {
            "desc" : [
               "Distance in mm from source to the table, support or bucky side that is closest to the Imaging Subject, as measured along the central ray of the X-Ray beam.",
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
                                       "This definition is less useful in terms of estimating geometric magnification than a measurement to a defined point within the Imaging Subject, but accounts for what is realistically measurable in an automated fashion in a clinical setting."
                                    ],
                                    "el" : "para",
                                    "attrs" : {
                                       "xml:id" : "para_a50295ca-1ff8-4a6d-be66-ff72bb2383ff"
                                    }
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
                                       "This measurement does not take into account any air gap between the Imaging Subject and the \"front\" of the table or bucky."
                                    ],
                                    "attrs" : {
                                       "xml:id" : "para_c10cdf97-36f9-4c76-8ab4-4a571c8ec635"
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
                                       "xml:id" : "para_394d0d4c-088f-43cc-9b2a-35f4fbe36dc9"
                                    },
                                    "el" : "para",
                                    "content" : [
                                       "If the detector is not mounted in a table or bucky, then the actual position relative to the patient is implementation or operator defined."
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
                                    "attrs" : {
                                       "xml:id" : "para_62e9568d-da0d-47c6-970d-9d894449a589"
                                    },
                                    "content" : [
                                       "This value is traditionally referred to as Source Object Distance (SOD)."
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
               [
                  "See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.8.11.7"
                     }
                  },
                  " for explanation if Positioner Type (0018,1508) is MAMMOGRAPHIC."
               ]
            ],
            "usage" : "U",
            "module" : "DX Positioning",
            "mod_tables" : [
               "table_C.8-72"
            ],
            "name" : "Distance Source to Patient",
            "req" : "3",
            "entity" : "Image"
         },
         {
            "name" : "Distance Source to Patient",
            "entity" : "Image",
            "req" : "3",
            "desc" : [
               "Distance in mm from source to the table, support or bucky side that is closest to the Imaging Subject, as measured along the central ray of the X-Ray beam.",
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
                                    "attrs" : {
                                       "xml:id" : "para_021d43e3-cc95-4693-9374-b549f0d26a71"
                                    },
                                    "el" : "para",
                                    "content" : [
                                       "This definition is less useful in terms of estimating geometric magnification than a measurement to a defined point within the Imaging Subject, but accounts for what is realistically measurable in an automated fashion in a clinical setting."
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
                                       "This measurement does not take into account any air gap between the Imaging Subject and the \"front\" of the table or bucky."
                                    ],
                                    "attrs" : {
                                       "xml:id" : "para_e261612c-7762-4b34-8cc7-e67d4ef3c8cc"
                                    },
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
                                       "If the detector is not mounted in a table or bucky, then the actual position relative to the patient is implementation or operator defined."
                                    ],
                                    "attrs" : {
                                       "xml:id" : "para_7139ada7-3147-4aee-a8de-a367b806182a"
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
                                       "This value is traditionally referred to as Source Object Distance (SOD)."
                                    ],
                                    "attrs" : {
                                       "xml:id" : "para_84ca9548-772d-47b3-bf14-ce4f5675cb61"
                                    },
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
            "usage" : "U",
            "module" : "X-Ray Acquisition Dose",
            "mod_tables" : [
               "table_C.8-33"
            ]
         },
         {
            "mod_tables" : [
               "table_C.8-74"
            ],
            "module" : "Mammography Image",
            "usage" : "M",
            "desc" : [
               "Distance in mm from source to the breast support side that is closest to the Imaging Subject, as measured along the X-Ray beam vector.",
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
                                       "This value is traditionally referred to as Source Object Distance (SOD)."
                                    ],
                                    "el" : "para",
                                    "attrs" : {
                                       "xml:id" : "para_c3b4deac-c13d-42a1-a75a-ce816ac1bfc4"
                                    }
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
                                    "attrs" : {
                                       "xml:id" : "para_02a5eec0-daec-4a77-8e09-6670306b28e1"
                                    },
                                    "content" : [
                                       "See notes for this attribute in ",
                                       {
                                          "attrs" : {
                                             "linkend" : "sect_C.8.11.5",
                                             "xrefstyle" : "select: label"
                                          },
                                          "el" : "xref"
                                       },
                                       " ",
                                       {
                                          "el" : "xref",
                                          "attrs" : {
                                             "xrefstyle" : "select: title",
                                             "linkend" : "sect_C.8.11.5"
                                          }
                                       },
                                       "."
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
                                    "el" : "para",
                                    "attrs" : {
                                       "xml:id" : "para_c21b764b-1cd1-461e-859a-6f4fb4bf6a59"
                                    }
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
            "req" : "3",
            "entity" : "Image",
            "name" : "Distance Source to Patient"
         }
      ],
      "(0040,0275)[<0>](0040,1001)" : [
         {
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9"
            ],
            "usage" : "M",
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
            "req" : "1C",
            "entity" : "Series",
            "name" : "Requested Procedure ID"
         },
         {
            "usage" : "M",
            "module" : "Mammography Series",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9"
            ],
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
                        "attrs" : {
                           "xml:id" : "para_5deccc65-f9a8-49d5-8b85-1d58535d1119"
                        },
                        "el" : "para"
                     },
                     "\n              "
                  ],
                  "el" : "note"
               }
            ],
            "entity" : "Series",
            "req" : "1C",
            "name" : "Requested Procedure ID"
         }
      ],
      "(0038,0014)[<0>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "req" : "1C",
         "entity" : "Study",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "module" : "Patient Study",
         "usage" : "U"
      },
      "(0018,7054)" : [
         {
            "req" : "3",
            "entity" : "Image",
            "name" : "Filter Thickness Maximum",
            "mod_tables" : [
               "table_C.8-33",
               "table_C.8-35a"
            ],
            "module" : "X-Ray Acquisition Dose",
            "usage" : "U",
            "desc" : "The maximum thickness in mm of the X-Ray absorbing material used in the filters. May be multi-valued, with values corresponding to the respective values in Filter Material (0018,7050)."
         },
         {
            "desc" : "The maximum thickness in mm of the X-Ray absorbing material used in the filters. May be multi-valued, with values corresponding to the respective values in Filter Material (0018,7050).",
            "module" : "X-Ray Filtration",
            "mod_tables" : [
               "table_C.8-35a"
            ],
            "usage" : "U",
            "name" : "Filter Thickness Maximum",
            "req" : "3",
            "entity" : "Image"
         }
      ],
      "(0010,21b0)" : {
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "desc" : "Additional information about the Patient's medical history.",
         "entity" : "Study",
         "req" : "3",
         "name" : "Additional Patient History"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0035)" : {
         "name" : "Identifier Type Code",
         "entity" : "Patient",
         "req" : "3",
         "desc" : [
            "Type of Patient ID. Refer to HL7 v2 Table 0203 for Defined Terms.",
            {
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
               ],
               "el" : "note"
            }
         ],
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M"
      },
      "(0400,0561)[<0>](0400,0563)" : {
         "entity" : "Image",
         "req" : "1",
         "name" : "Modifying System",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Identification of the system that removed and/or replaced the attributes."
      },
      "(0008,1052)[<0>](0040,1102)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series",
         "usage" : "M",
         "desc" : "Person's mailing address",
         "entity" : "Series",
         "req" : "3",
         "name" : "Person's Address"
      },
      "(0008,1049)[<0>](0040,1102)" : {
         "desc" : "Person's mailing address",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "name" : "Person's Address",
         "entity" : "Study",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1150)" : [
         {
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2",
               "table_10-11"
            ],
            "module" : "General Series",
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "req" : "1",
            "entity" : "Series",
            "name" : "Referenced SOP Class UID"
         },
         {
            "name" : "Referenced SOP Class UID",
            "entity" : "Series",
            "req" : "1",
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2",
               "table_10-11"
            ],
            "module" : "Mammography Series",
            "usage" : "M"
         }
      ],
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a120)" : {
         "usage" : "U",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "req" : "1C",
         "entity" : "Image",
         "name" : "DateTime"
      },
      "(60xx,1301)" : {
         "desc" : [
            "Number of pixels in ROI area.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.9.2.1.2"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "usage" : "C - Required if graphic annotation is present - See ",
         "module" : "Overlay Plane",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "name" : "ROI Area",
         "entity" : "Image",
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)" : {
         "name" : "Content Item Modifier Sequence",
         "entity" : "Series",
         "req" : "3",
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
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "module" : "General Series",
         "usage" : "M"
      },
      "(0018,7048)" : {
         "usage" : "U",
         "module" : "X-Ray Grid",
         "mod_tables" : [
            "table_C.8-36b"
         ],
         "desc" : [
            "Period in mSec of reciprocation cycle.",
            "Only meaningful if a value of Grid (0018,1166) is RECIPROCATING."
         ],
         "req" : "3",
         "entity" : "Image",
         "name" : "Grid Period"
      },
      "(0018,7028)" : {
         "name" : "Detector Active Origin",
         "entity" : "Image",
         "req" : "3",
         "desc" : [
            "Offset of the TLHC of a rectangle circumscribing the active detector area from the TLHC of a rectangle circumscribing the physical detector area, measured in physical detector pixels as a row offset followed by a column offset.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.11.4.1.1"
                  }
               },
               " for further explanation."
            ]
         ],
         "module" : "DX Detector",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "usage" : "M"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0039)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "module" : "Patient",
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
         "entity" : "Patient",
         "req" : "3",
         "name" : "Assigning Jurisdiction Code Sequence"
      },
      "(0040,0275)[<0>](0040,0008)" : [
         {
            "name" : "Scheduled Protocol Code Sequence",
            "entity" : "Series",
            "req" : "3",
            "desc" : "Sequence describing the Scheduled Protocol following a specific coding scheme. One or more Items are permitted in this Sequence.",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9"
            ],
            "module" : "General Series"
         },
         {
            "module" : "Mammography Series",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9"
            ],
            "usage" : "M",
            "desc" : "Sequence describing the Scheduled Protocol following a specific coding scheme. One or more Items are permitted in this Sequence.",
            "entity" : "Series",
            "req" : "3",
            "name" : "Scheduled Protocol Code Sequence"
         }
      ],
      "(0018,a001)[<0>](0018,a003)" : {
         "name" : "Contribution Description",
         "entity" : "Image",
         "req" : "3",
         "desc" : "Description of the contribution the equipment made to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)" : [
         {
            "desc" : [
               "Composite SOP Instance Reference value for this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
            ],
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "module" : "General Series",
            "name" : "Referenced SOP Sequence",
            "req" : "1C",
            "entity" : "Series"
         },
         {
            "desc" : [
               "Composite SOP Instance Reference value for this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
            ],
            "module" : "Mammography Series",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2"
            ],
            "usage" : "M",
            "name" : "Referenced SOP Sequence",
            "req" : "1C",
            "entity" : "Series"
         }
      ],
      "(0040,1012)" : {
         "module" : "General Study",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_dcfce3fc-57ae-49c6-9700-37334726e8eb"
                     },
                     "content" : [
                        "May differ from the values in Reason for the Requested Procedure (0040,100A) in Request Attribute Sequence (0040,0275), for example if what was performed differs from what was requested."
                     ]
                  },
                  "\n                  "
               ]
            },
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "entity" : "Study",
         "name" : "Reason For Performed Procedure Code Sequence"
      },
      "(0040,8302)" : {
         "req" : "3",
         "entity" : "Image",
         "name" : "Entrance Dose in mGy",
         "module" : "X-Ray Acquisition Dose",
         "mod_tables" : [
            "table_C.8-33"
         ],
         "usage" : "U",
         "desc" : [
            "Average entrance dose value measured in mGy at the surface of the patient\u00ad during the acquisition of this image.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "This may be an estimated value based on assumptions about the patient's body size and habitus."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_7c6a896d-5441-4065-997b-b89b6562bf5e"
                     }
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ]
      },
      "(0040,a390)[<0>](0008,1150)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Image",
         "req" : "1",
         "name" : "Referenced SOP Class UID"
      },
      "(0018,1043)" : {
         "name" : "Contrast/Bolus Stop Time",
         "req" : "3",
         "entity" : "Image",
         "desc" : "Time of end of contrast injection",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "module" : "Contrast/Bolus",
         "usage" : "U"
      },
      "(0012,0064)" : {
         "entity" : "Patient",
         "req" : "1C",
         "name" : "De-identification Method Code Sequence",
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "A code describing the mechanism or method use to remove the patient's identity.",
            "One or more Items shall be included in this Sequence. Multiple items are used if successive de-identification steps have been performed or to describe options of a defined profile.",
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method (0012,0063) is not present. May be present otherwise."
         ]
      },
      "(0040,9096)[<0>](0040,9210)" : {
         "name" : "LUT Label",
         "entity" : "Image",
         "req" : "1",
         "desc" : "Label that is used to identify the transformation of this Item.",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "module" : "General Image",
         "usage" : "M"
      },
      "(0010,2293)" : {
         "name" : "Patient Breed Code Sequence",
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
            "Zero or more Items shall be included in this Sequence.",
            "Required if the patient is an animal."
         ],
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0040,0555)[<0>](0040,08ea)" : {
         "entity" : "Image",
         "req" : "1C",
         "name" : "Measurement Units Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "module" : "Acquisition Context",
         "desc" : [
            "Units of measurement.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Numeric Value (0040,A30A) is sent. Shall not be present otherwise."
         ]
      },
      "(0008,0300)[<0>](0008,0304)" : {
         "desc" : [
            "List of Private Data Elements in block that do not contain identifying\n                  information (are safe from identity leakage).",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once.",
            "Required if Block Identifying Information Status (0008,0303) equals MIXED."
         ],
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Nonidentifying Private Elements",
         "entity" : "Image",
         "req" : "1C"
      },
      "(0038,0014)" : {
         "req" : "3",
         "entity" : "Study",
         "name" : "Issuer of Admission ID Sequence",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "desc" : [
            "Identifier of the Assigning Authority that issued Admission ID (0038,0010).",
            "Only a single Item is permitted in this Sequence."
         ]
      },
      "(0012,0062)" : {
         "name" : "Patient Identity Removed",
         "req" : "3",
         "entity" : "Patient",
         "desc" : [
            "The true identity of the patient has been removed from the Attributes and the Pixel Data",
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
            }
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a124)" : {
         "name" : "UID",
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0008,2112)[<0>](0008,1160)" : {
         "usage" : "M",
         "module" : "General Image",
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
         "entity" : "Image",
         "req" : "1C",
         "name" : "Referenced Frame Number"
      },
      "(4ffe,0001)[<0>](0400,0015)" : {
         "req" : "1",
         "entity" : "Image",
         "name" : "MAC Algorithm",
         "usage" : "M",
         "module" : "SOP Common",
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
               "content" : [
                  "\n                      ",
                  {
                     "attrs" : {
                        "xml:id" : "para_c0347aea-ecd8-4c0b-8e2f-cedadc2aacd5"
                     },
                     "el" : "para",
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
               ],
               "el" : "note"
            }
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,08ea)" : {
         "name" : "Measurement Units Code Sequence",
         "entity" : "Image",
         "req" : "1C",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "usage" : "U",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a040)" : [
         {
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "module" : "General Series",
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
            "entity" : "Series",
            "req" : "1",
            "name" : "Value Type"
         },
         {
            "name" : "Value Type",
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
            "module" : "Mammography Series",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2"
            ],
            "usage" : "M"
         }
      ],
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1160)" : {
         "name" : "Referenced Frame Number",
         "entity" : "Series",
         "req" : "1C",
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
         "module" : "General Series",
         "usage" : "M"
      },
      "(0050,0010)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "module" : "Device",
         "desc" : [
            "A sequence of items describing devices used that may be visible in the image.",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1",
         "entity" : "Image",
         "name" : "Device Sequence"
      },
      "(0018,1190)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-34"
         ],
         "module" : "X-Ray Generation",
         "desc" : "Nominal focal spot size in mm used to acquire this image.",
         "req" : "3",
         "entity" : "Image",
         "name" : "Focal Spot(s)"
      },
      "(0008,1250)[<0>](0020,000e)" : {
         "name" : "Series Instance UID",
         "entity" : "Series",
         "req" : "1",
         "desc" : "Instance UID of Related Series",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0018,9559)" : {
         "req" : "3",
         "entity" : "Image",
         "name" : "Positioner Primary Angle Direction",
         "usage" : "M",
         "module" : "Mammography Image",
         "mod_tables" : [
            "table_C.8-74"
         ],
         "desc" : [
            "The interpretation of the sign of the Positioner Primary Angle (0018,1510).",
            {
               "title" : "Enumerated Values:",
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
               "type" : "variablelist"
            },
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.31.2.1",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ]
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,003a)" : {
         "name" : "Assigning Agency or Department Code Sequence",
         "entity" : "Patient",
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
         ],
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0010,0212)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "usage" : "M",
         "desc" : [
            "The strain of the patient. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.1.1.1.4",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "req" : "3",
         "entity" : "Patient",
         "name" : "Strain Description"
      },
      "(0040,0520)[<0>](0050,001a)" : {
         "req" : "3",
         "entity" : "Image",
         "name" : "Container Component Material",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "desc" : [
            "Material of container component.",
            {
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
               ],
               "title" : "Defined Terms:"
            }
         ]
      },
      "(0100,0410)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : [
            "A flag that indicates the storage status of the SOP Instance.",
            {
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
               ],
               "title" : "Enumerated Values:"
            },
            {
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
               ],
               "el" : "note"
            }
         ],
         "req" : "3",
         "entity" : "Image",
         "name" : "SOP Instance Status"
      },
      "(0008,2112)" : {
         "name" : "Source Image Sequence",
         "req" : "3",
         "entity" : "Image",
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
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M"
      },
      "(0400,0561)[<0>](0400,0562)" : {
         "req" : "1",
         "entity" : "Image",
         "name" : "Attribute Modification DateTime",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : "Date and time the attributes were removed and/or replaced."
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0008,1199)[<2>](0062,000b)" : {
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
         "name" : "Referenced Segment Number",
         "entity" : "Image",
         "req" : "1C"
      },
      "(0040,0306)" : {
         "entity" : "Image",
         "req" : "3",
         "name" : "Distance Source to Entrance",
         "usage" : "U",
         "module" : "X-Ray Acquisition Dose",
         "mod_tables" : [
            "table_C.8-33"
         ],
         "desc" : [
            "Distance in mm from the source to the surface of the patient closest to the source during the acquisition of this image.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_4963d92e-49bc-478c-a017-8cedf7c38de0"
                     },
                     "content" : [
                        "This may be an estimated value based on assumptions about the patient's body size and habitus."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ]
      },
      "(0018,1005)" : {
         "name" : "Generator ID",
         "entity" : "Image",
         "req" : "3",
         "desc" : "Identifier of the generator",
         "mod_tables" : [
            "table_C.8-34"
         ],
         "module" : "X-Ray Generation",
         "usage" : "U"
      },
      "(0012,0050)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "module" : "Clinical Trial Study",
         "desc" : [
            "An identifier specifying the one or more studies that are grouped together as a clinical time point or submission in a clinical trial or research. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.2.3.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "req" : "2",
         "entity" : "Study",
         "name" : "Clinical Trial Time Point ID"
      },
      "(0010,2294)[<0>](0010,2296)" : {
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "Identification of the organization with which an animal is registered.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1",
         "entity" : "Patient",
         "name" : "Breed Registry Code Sequence"
      },
      "(4ffe,0001)[<0>](0400,0010)" : {
         "name" : "MAC Calculation Transfer Syntax UID",
         "req" : "1",
         "entity" : "Image",
         "desc" : [
            "The Transfer Syntax UID used to encode the values of the Data Elements included in the MAC calculation. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
            {
               "content" : [
                  "\n                      ",
                  {
                     "content" : [
                        "Certain Transfer Syntaxes, particularly those that are used with compressed data, allow the fragmentation of the pixel data to change. If such fragmentation changes, Digital Signatures generated with such Transfer Syntaxes could become invalid."
                     ],
                     "attrs" : {
                        "xml:id" : "para_40579f95-ca05-4631-a8e7-a1923ddde665"
                     },
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
         "module" : "SOP Common"
      },
      "(0040,0253)" : {
         "name" : "Performed Procedure Step ID",
         "req" : "3",
         "entity" : "Series",
         "desc" : "User or equipment generated identifier of that part of a Procedure that has been carried out within this step.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "module" : "General Series"
      },
      "(0008,1111)" : [
         {
            "desc" : [
               "Uniquely identifies the Performed Procedure Step SOP Instance to which the Series is related.",
               "Only a single Item is permitted in this Sequence."
            ],
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a"
            ],
            "usage" : "M",
            "name" : "Referenced Performed Procedure Step Sequence",
            "req" : "3",
            "entity" : "Series"
         },
         {
            "name" : "Referenced Performed Procedure Step Sequence",
            "req" : "1C",
            "entity" : "Series",
            "desc" : [
               "Uniquely identifies the Performed Procedure Step SOP Instance to which the Series is related.",
               "Only a single Item shall be included in this Sequence.",
               "Required if a Performed Procedure Step SOP Class was involved in the creation of this Series."
            ],
            "usage" : "M",
            "module" : "DX Series",
            "mod_tables" : [
               "table_C.8-68"
            ]
         }
      ],
      "(0012,0083)[<0>](0012,0084)" : {
         "usage" : "U",
         "module" : "Clinical Trial Study",
         "mod_tables" : [
            "table_C.7-4b"
         ],
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
         "entity" : "Study",
         "name" : "Distribution Type"
      },
      "(0012,0040)" : {
         "req" : "1C",
         "entity" : "Patient",
         "name" : "Clinical Trial Subject ID",
         "module" : "Clinical Trial Subject",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U",
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
      "(0018,1600)" : {
         "name" : "Shutter Shape",
         "entity" : "Image",
         "req" : "1",
         "desc" : [
            "Shape(s) of the shutter defined for display.",
            {
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            },
            [
               "This multi-valued Attribute shall contain at most one of each Enumerated Value. When multiple values are present, and the shutter is applied to a displayed image, then all of the shapes shall be combined and applied simultaneously, that is, the least amount of image remaining shall be visible (unoccluded). See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "figure_C.7-4b"
                  }
               },
               "."
            ]
         ],
         "mod_tables" : [
            "table_C.7-17a"
         ],
         "module" : "Display Shutter",
         "usage" : "U"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)" : {
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
         "module" : "Specimen",
         "name" : "Referenced SOP Sequence",
         "req" : "1C",
         "entity" : "Image"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0032)" : {
         "req" : "3",
         "entity" : "Patient",
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "usage" : "M",
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
         ]
      },
      "(0040,051a)" : {
         "desc" : "Description of the container.",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "name" : "Container Description",
         "req" : "3",
         "entity" : "Image"
      },
      "(0008,114a)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image",
         "desc" : [
            "Non-image composite SOP Instances that are significantly related to this Image, including waveforms that may or may not be temporally synchronized with this image.",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "entity" : "Image",
         "name" : "Referenced Instance Sequence"
      },
      "(0018,0014)" : {
         "entity" : "Image",
         "req" : "3",
         "name" : "Contrast/Bolus Administration Route Sequence",
         "module" : "Contrast/Bolus",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "usage" : "U",
         "desc" : [
            "Sequence that identifies the route of administration of contrast agent.",
            "Only a single Item is permitted in this Sequence."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a161)" : [
         {
            "req" : "1C",
            "entity" : "Series",
            "name" : "Floating Point Value",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "module" : "General Series",
            "usage" : "M",
            "desc" : [
               "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
            ]
         },
         {
            "name" : "Floating Point Value",
            "req" : "1C",
            "entity" : "Series",
            "desc" : [
               "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
            ],
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2"
            ],
            "module" : "Mammography Series"
         }
      ],
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "module" : "Patient",
         "usage" : "M",
         "name" : "WADO-RS Retrieval Sequence",
         "req" : "1C",
         "entity" : "Patient"
      },
      "(0028,1201)" : {
         "entity" : "Image",
         "req" : "1C",
         "name" : "Red Palette Color Lookup Table Data",
         "usage" : "M",
         "module" : "Image Pixel",
         "mod_tables" : [
            "table_C.7-11b"
         ],
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
         ]
      },
      "(0018,2041)[<0>](0018,2044)" : {
         "usage" : "M",
         "module" : "Mammography Image",
         "mod_tables" : [
            "table_C.8-74"
         ],
         "desc" : [
            "The calculated target position (x, y, z) in mm in an equipment relative right-handed coordinate system where the origin is under the central X-Ray beam at the chest wall, and a z value of zero is located at the surface that the breast is in contact with that is closest to the detector.",
            "X is parallel to the chest wall, y is positive toward the patient's nipple, and z is positive toward the X-Ray source."
         ],
         "req" : "1",
         "entity" : "Image",
         "name" : "Calculated Target Position"
      },
      "(0038,0060)" : {
         "name" : "Service Episode ID",
         "req" : "3",
         "entity" : "Study",
         "desc" : "Identifier of the Service Episode as assigned by the healthcare provider",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study"
      },
      "(0008,1110)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
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
         "req" : "3",
         "entity" : "Study",
         "name" : "Referenced Study Sequence"
      },
      "(0040,0302)" : {
         "mod_tables" : [
            "table_C.8-33"
         ],
         "module" : "X-Ray Acquisition Dose",
         "usage" : "U",
         "desc" : [
            "Average entrance dose value measured in dGy at the surface of the patient\u00ad during the acquisition of this image.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_54ab914c-43c9-41f3-a6c9-16d0308bf93e"
                     },
                     "content" : [
                        "This may be an estimated value based on assumptions about the patient's body size and habitus."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "entity" : "Image",
         "req" : "3",
         "name" : "Entrance Dose"
      },
      "(0010,2292)" : {
         "name" : "Patient Breed Description",
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
            "Required if the patient is an animal and if Patient Breed Code Sequence (0010,2293) is empty. May be present otherwise."
         ],
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(0038,0064)[<0>](0040,0031)" : {
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "usage" : "U",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "name" : "Local Namespace Entity ID",
         "entity" : "Study",
         "req" : "1C"
      },
      "(0008,009d)[<0>](0040,1101)" : {
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
         "module" : "General Study",
         "name" : "Person Identification Code Sequence",
         "req" : "1",
         "entity" : "Study"
      },
      "(0008,0118)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "desc" : "The unique identifier of the Mapping Resource",
         "entity" : "Image",
         "req" : "3",
         "name" : "Mapping Resource UID"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a040)" : {
         "req" : "1",
         "entity" : "Image",
         "name" : "Value Type",
         "usage" : "U",
         "module" : "Specimen",
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
         ]
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0306)" : {
         "name" : "Identifying Private Elements",
         "req" : "1",
         "entity" : "Image",
         "desc" : [
            "List of Private Data Elements in block that may contain identifying\n                  information (are unsafe from identity leakage)..",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once."
         ],
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0562)[<1>](0040,0033)" : {
         "entity" : "Image",
         "req" : "1C",
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "module" : "Specimen",
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
         ]
      },
      "(0018,7006)" : {
         "name" : "Detector Description",
         "req" : "3",
         "entity" : "Image",
         "desc" : "Free text description of detector.",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "module" : "DX Detector",
         "usage" : "M"
      },
      "(0008,1052)[<0>](0008,0081)" : {
         "name" : "Institution Address",
         "entity" : "Series",
         "req" : "3",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ]
      },
      "(0018,115e)" : {
         "desc" : [
            "X-Ray dose, measured in dGy*cm*cm, to which the patient was exposed for the acquisition of this image plus any non-digitally recorded fluoroscopy that may have been performed to prepare for the acquisition of this image.",
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
                                    "xml:id" : "para_958825d1-4948-46d5-8946-3bf6c4bd2c44"
                                 },
                                 "content" : [
                                    "The sum of the area dose product of all images of a Series or a Study may not result in the total area dose product to which the patient was exposed."
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
                                    "This may be an estimated value based on assumptions about the patient's body size and habitus."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_8cff0f75-217d-40f7-9cfa-54fdcbc208a5"
                                 },
                                 "el" : "para"
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
         "usage" : "U",
         "module" : "X-Ray Acquisition Dose",
         "mod_tables" : [
            "table_C.8-33"
         ],
         "name" : "Image and Fluoroscopy Area Dose Product",
         "req" : "3",
         "entity" : "Image"
      },
      "(0018,7042)" : {
         "name" : "Grid Thickness",
         "entity" : "Image",
         "req" : "3",
         "desc" : "The thickness in mm of the X-Ray absorbing material used in the grid.",
         "mod_tables" : [
            "table_C.8-36b"
         ],
         "module" : "X-Ray Grid",
         "usage" : "U"
      },
      "(0008,1072)[<0>](0040,1103)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series",
         "desc" : "Person's telephone number(s)",
         "entity" : "Series",
         "req" : "3",
         "name" : "Person's Telephone Numbers"
      },
      "(0088,0200)[<0>](0028,0101)" : {
         "desc" : [
            "Number of bits stored for each pixel sample. Each sample shall have the same number of bits stored. See ",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image",
         "name" : "Bits Stored",
         "req" : "1",
         "entity" : "Image"
      },
      "(0028,0107)" : {
         "req" : "3",
         "entity" : "Image",
         "name" : "Largest Image Pixel Value",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "module" : "Image Pixel",
         "usage" : "M",
         "desc" : "The maximum actual pixel value encountered in this image."
      },
      "(0008,0022)" : {
         "desc" : "The date the acquisition of data that resulted in this image started",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M",
         "name" : "Acquisition Date",
         "req" : "3",
         "entity" : "Image"
      },
      "(0008,0110)[<0>](0008,0102)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "desc" : "The value of a Coding Scheme Designator, used in this SOP Instance, which is being mapped.",
         "req" : "1",
         "entity" : "Image",
         "name" : "Coding Scheme Designator"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a160)" : {
         "req" : "1C",
         "entity" : "Image",
         "name" : "Text Value",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "usage" : "M",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ]
      },
      "(0010,0024)[<0>](0040,0039)" : {
         "entity" : "Patient",
         "req" : "3",
         "name" : "Assigning Jurisdiction Code Sequence",
         "usage" : "M",
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
                     "attrs" : {
                        "xml:id" : "para_da6e8d69-e95e-4320-b5c5-be5b4cbb811f"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ]
      },
      "(0008,009c)" : {
         "usage" : "M",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "Consulting physician(s) for this patient visit.",
         "entity" : "Study",
         "req" : "3",
         "name" : "Consulting Physician's Name"
      },
      "(0018,7044)" : {
         "name" : "Grid Pitch",
         "entity" : "Image",
         "req" : "3",
         "desc" : "The pitch in mm of the X-Ray absorbing material used in the grid.",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-36b"
         ],
         "module" : "X-Ray Grid"
      },
      "(0040,0560)[<0>](0040,0602)" : {
         "name" : "Specimen Detailed Description",
         "req" : "3",
         "entity" : "Image",
         "desc" : "Detailed textual specimen description (may include ancestor specimen descriptions).",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "usage" : "U"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a163)" : {
         "usage" : "M",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "entity" : "Image",
         "req" : "1C",
         "name" : "Rational Denominator Value"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "Referenced SOP Instance UID",
         "entity" : "Patient",
         "req" : "1"
      },
      "(2050,0020)" : [
         {
            "entity" : "Image",
            "req" : "3",
            "name" : "Presentation LUT Shape",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "module" : "General Image",
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
            ]
         },
         {
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-70"
            ],
            "module" : "DX Image",
            "desc" : [
               "Specifies an identity transformation for the Presentation LUT, other than to account for the value of Photometric Interpretation (0028,0004), such that the output of all grayscale transformations defined in the IOD containing this Module are defined to be P-Values.",
               {
                  "type" : "variablelist",
                  "list" : [
                     [
                        "IDENTITY",
                        "output is in P-Values - shall be used if Photometric Interpretation (0028,0004) is MONOCHROME2."
                     ],
                     [
                        "INVERSE",
                        "output after inversion is in P-Values - shall be used if Photometric Interpretation (0028,0004) is MONOCHROME1."
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
                        "linkend" : "sect_C.8.11.3.1.2"
                     }
                  },
                  " for further explanation."
               ]
            ],
            "entity" : "Image",
            "req" : "1",
            "name" : "Presentation LUT Shape"
         }
      ],
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a040)" : {
         "name" : "Value Type",
         "req" : "1",
         "entity" : "Image",
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
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0008,0008)" : [
         {
            "req" : "3",
            "entity" : "Image",
            "name" : "Image Type",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "module" : "General Image",
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
            ]
         },
         {
            "name" : "Image Type",
            "entity" : "Image",
            "req" : "1",
            "desc" : [
               "Image identification characteristics.",
               [
                  "See ",
                  {
                     "attrs" : {
                        "linkend" : "sect_C.8.11.3.1.1",
                        "xrefstyle" : "select: label"
                     },
                     "el" : "xref"
                  },
                  " for specialization."
               ]
            ],
            "usage" : "M",
            "module" : "DX Image",
            "mod_tables" : [
               "table_C.8-70"
            ]
         },
         {
            "entity" : "Image",
            "req" : "1",
            "name" : "Image Type",
            "module" : "Mammography Image",
            "mod_tables" : [
               "table_C.8-74"
            ],
            "usage" : "M",
            "desc" : [
               "Image identification characteristics.",
               [
                  "See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.8.11.7.1.4"
                     }
                  },
                  " for specialization."
               ]
            ]
         }
      ],
      "(0018,1531)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-72"
         ],
         "module" : "DX Positioning",
         "desc" : [
            "Angle of the X-Ray beam in the column direction in degrees relative to the normal to the detector plane. Positive values indicate that the X-Ray beam is tilted toward lower numbered rows. Negative values indicate that the X-Ray beam is tilted toward higher numbered rows.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.7.5",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.11.7"
                  },
                  "el" : "xref"
               },
               " for explanation if Positioner Type (0018,1508) is MAMMOGRAPHIC."
            ]
         ],
         "req" : "3",
         "entity" : "Image",
         "name" : "Detector Secondary Angle"
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
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "name" : "Strain Nomenclature",
         "entity" : "Patient",
         "req" : "3"
      },
      "(0008,009d)[<0>](0040,1102)" : {
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "desc" : "Person's mailing address",
         "entity" : "Study",
         "req" : "3",
         "name" : "Person's Address"
      },
      "(4ffe,0001)" : {
         "desc" : [
            "A sequence of items that describe the parameters used to calculate a MAC for use in Digital Signatures.",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "name" : "MAC Parameters Sequence",
         "entity" : "Image",
         "req" : "3"
      },
      "(0008,1200)[<0>](0008,1115)" : {
         "req" : "1",
         "entity" : "Image",
         "name" : "Referenced Series Sequence",
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "module" : "Common Instance Reference",
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "U",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "entity" : "Image"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0035)" : {
         "name" : "Identifier Type Code",
         "entity" : "Patient",
         "req" : "3",
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
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a121)" : {
         "name" : "Date",
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0018,a001)[<0>](0018,1201)" : {
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
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Time of Last Calibration",
         "req" : "3",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0062,000b)" : [
         {
            "entity" : "Series",
            "req" : "1C",
            "name" : "Referenced Segment Number",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "module" : "General Series",
            "usage" : "M",
            "desc" : [
               "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
               "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
            ]
         },
         {
            "entity" : "Series",
            "req" : "1C",
            "name" : "Referenced Segment Number",
            "usage" : "M",
            "module" : "Mammography Series",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2"
            ],
            "desc" : [
               "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
               "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
            ]
         }
      ],
      "(0020,9172)[<0>](0062,000b)" : {
         "name" : "Referenced Segment Number",
         "req" : "1C",
         "entity" : "Image",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "module" : "SOP Common"
      },
      "(0400,0500)[<0>](0400,0510)" : {
         "req" : "1",
         "entity" : "Image",
         "name" : "Encrypted Content Transfer Syntax UID",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used."
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "entity" : "Image",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ],
         "module" : "Common Instance Reference",
         "usage" : "U"
      },
      "(0008,0081)" : {
         "name" : "Institution Address",
         "entity" : "Equipment",
         "req" : "3",
         "desc" : "Mailing address of the institution where the equipment that produced the composite instances is located.",
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M"
      },
      "(0008,1110)[<0>](0008,1150)" : {
         "entity" : "Study",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(60xx,1302)" : {
         "name" : "ROI Mean",
         "entity" : "Image",
         "req" : "3",
         "desc" : [
            "ROI Mean.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.9.2.1.2"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "usage" : "C - Required if graphic annotation is present - See ",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "module" : "Overlay Plane"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0033)" : {
         "entity" : "Patient",
         "req" : "1C",
         "name" : "Universal Entity ID Type",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M",
         "desc" : [
            "Standard defining the format of the Universal Entity ID (0040,0032). Required if Universal Entity ID (0040,0032) is present.",
            {
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
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "module" : "Patient",
         "usage" : "M",
         "name" : "Universal Entity ID",
         "req" : "1C",
         "entity" : "Patient"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0032)" : [
         {
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-17"
            ],
            "module" : "General Series",
            "usage" : "M",
            "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
            "req" : "1C",
            "entity" : "Series",
            "name" : "Universal Entity ID"
         },
         {
            "name" : "Universal Entity ID",
            "entity" : "Series",
            "req" : "1C",
            "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-17"
            ],
            "module" : "Mammography Series"
         }
      ],
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1155)" : [
         {
            "name" : "Referenced SOP Instance UID",
            "entity" : "Series",
            "req" : "1",
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-11"
            ],
            "module" : "General Series"
         },
         {
            "entity" : "Series",
            "req" : "1",
            "name" : "Referenced SOP Instance UID",
            "usage" : "M",
            "module" : "Mammography Series",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-11"
            ],
            "desc" : "Uniquely identifies the referenced SOP Instance."
         }
      ],
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a162)" : {
         "entity" : "Image",
         "req" : "1C",
         "name" : "Rational Numerator Value",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1103)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common",
         "desc" : "Person's telephone number(s)",
         "req" : "3",
         "entity" : "Image",
         "name" : "Person's Telephone Numbers"
      },
      "(0008,009d)[<0>](0008,0080)" : {
         "name" : "Institution Name",
         "entity" : "Study",
         "req" : "1C",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0024)" : {
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "entity" : "Patient",
         "req" : "3",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient"
      },
      "(0088,0200)[<0>](0028,2002)" : {
         "entity" : "Image",
         "req" : "3",
         "name" : "Color Space",
         "usage" : "M",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
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
         ]
      },
      "(0040,0280)" : {
         "entity" : "Series",
         "req" : "3",
         "name" : "Comments on the Performed Procedure Step",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "desc" : "User-defined comments on the Performed Procedure Step."
      },
      "(0040,9096)[<0>](0040,9212)" : {
         "name" : "Real World Value LUT Data",
         "req" : "1C",
         "entity" : "Image",
         "desc" : [
            "LUT Data in this Sequence.",
            "Required if Real World Value Intercept (0040,9224) is not present."
         ],
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "entity" : "Patient",
         "req" : "1C",
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "module" : "Patient",
         "usage" : "M",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise."
      },
      "(0018,1008)" : {
         "name" : "Gantry ID",
         "entity" : "Equipment",
         "req" : "3",
         "desc" : "Identifier of the gantry or positioner.",
         "usage" : "M",
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ]
      },
      "(0010,0200)" : {
         "name" : "Quality Control Subject",
         "entity" : "Patient",
         "req" : "3",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient"
      },
      "(0008,0123)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "desc" : [
            "Sequence of items that map values of Context Identifier (0008,010F) to an external, private or local Context Group.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Image",
         "req" : "3",
         "name" : "Context Group Identification Sequence"
      },
      "(0018,1152)" : [
         {
            "desc" : "The exposure expressed in mAs, for example calculated from Exposure Time and X-Ray Tube Current.",
            "mod_tables" : [
               "table_C.8-33"
            ],
            "module" : "X-Ray Acquisition Dose",
            "usage" : "U",
            "name" : "Exposure",
            "entity" : "Image",
            "req" : "3"
         },
         {
            "desc" : "The exposure expressed in mAs, for example calculated from Exposure Time and X-Ray Tube Current.",
            "mod_tables" : [
               "table_C.8-34"
            ],
            "module" : "X-Ray Generation",
            "usage" : "U",
            "name" : "Exposure",
            "entity" : "Image",
            "req" : "3"
         }
      ],
      "(0028,0108)" : {
         "entity" : "Series",
         "req" : "3",
         "name" : "Smallest Pixel Value in Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "desc" : "The minimum value of all images in this Series."
      },
      "(0018,0036)[<0>](0018,0027)" : {
         "entity" : "Image",
         "req" : "3",
         "name" : "Intervention Drug Stop Time",
         "mod_tables" : [
            "table_C.7-19"
         ],
         "module" : "Intervention",
         "usage" : "U",
         "desc" : "Time of completion of administration of the intervention drug."
      },
      "(0010,1000)" : {
         "req" : "3",
         "entity" : "Patient",
         "name" : "Other Patient IDs",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "usage" : "M",
         "desc" : "Other identification numbers or codes used to identify the patient."
      },
      "(0028,2000)" : {
         "name" : "ICC Profile",
         "req" : "3",
         "entity" : "Image",
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
                     "attrs" : {
                        "xml:id" : "para_d69f5d22-89f7-4927-ba3e-806a769850dc"
                     },
                     "el" : "para"
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
         "module" : "Image Pixel"
      },
      "(0040,0275)[<0>](0040,0007)" : [
         {
            "name" : "Scheduled Procedure Step Description",
            "entity" : "Series",
            "req" : "3",
            "desc" : "Institution-generated description or classification of the Scheduled Procedure Step to be performed.",
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9"
            ],
            "usage" : "M"
         },
         {
            "req" : "3",
            "entity" : "Series",
            "name" : "Scheduled Procedure Step Description",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9"
            ],
            "module" : "Mammography Series",
            "desc" : "Institution-generated description or classification of the Scheduled Procedure Step to be performed."
         }
      ],
      "(0018,1606)" : {
         "name" : "Shutter Upper Horizontal Edge",
         "entity" : "Image",
         "req" : "1C",
         "desc" : "Required if Shutter Shape (0018,1600) is RECTANGULAR. Location of the upper edge of the rectangular shutter with respect to pixels in the image given as row.",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-17a"
         ],
         "module" : "Display Shutter"
      },
      "(0018,1704)" : {
         "desc" : [
            "Required if a value of Collimator Shape (0018,1700) is RECTANGULAR. Location of the right edge of the rectangular collimator with respect to pixels in the image given as column. See ",
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
         "mod_tables" : [
            "table_C.8-28b"
         ],
         "module" : "X-Ray Collimator",
         "name" : "Collimator Right Vertical Edge",
         "entity" : "Image",
         "req" : "1C"
      },
      "(0088,0200)[<0>](0028,2000)" : {
         "name" : "ICC Profile",
         "entity" : "Image",
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
         "usage" : "M",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ]
      },
      "(0040,a390)" : {
         "name" : "HL7 Structured Document Reference Sequence",
         "entity" : "Image",
         "req" : "1C",
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
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0018,1412)" : [
         {
            "name" : "Target Exposure Index",
            "req" : "3",
            "entity" : "Image",
            "desc" : "The target value used to calculate Deviation Index (0018,1413) as defined in IEC 62494-1.",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-71b",
               "table_10-23"
            ],
            "module" : "DX Detector"
         },
         {
            "desc" : "The target value used to calculate Deviation Index (0018,1413) as defined in IEC 62494-1.",
            "usage" : "U",
            "module" : "X-Ray Acquisition Dose",
            "mod_tables" : [
               "table_C.8-33",
               "table_10-23"
            ],
            "name" : "Target Exposure Index",
            "entity" : "Image",
            "req" : "3"
         }
      ],
      "(0008,0030)" : {
         "entity" : "Study",
         "req" : "2",
         "name" : "Study Time",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "desc" : "Time the Study started."
      },
      "(0040,0555)[<0>](0040,a123)" : {
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a Person Name.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "The role of the person could be specified in Concept Name Code Sequence (0040,A043)."
                     ],
                     "attrs" : {
                        "xml:id" : "para_a8c76dec-9c64-427d-9278-7ac6f369d5a7"
                     },
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            },
            "Required if the value that Concept Name Code Sequence (0040,A043) requires (implies) is a person name. Shall not be present otherwise."
         ],
         "usage" : "M",
         "module" : "Acquisition Context",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "name" : "Person Name",
         "entity" : "Image",
         "req" : "1C"
      },
      "(0008,0122)" : {
         "name" : "Mapping Resource Name",
         "entity" : "Image",
         "req" : "3",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0008,114a)[<0>](0040,a170)" : {
         "name" : "Purpose of Reference Code Sequence",
         "entity" : "Image",
         "req" : "1",
         "desc" : [
            "Code describing the purpose of the reference to the Instance(s).",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M"
      },
      "(0010,2294)" : {
         "desc" : [
            "Information identifying an animal within a breed registry.",
            "Zero or more Items shall be included in this Sequence.",
            "Required if the patient is an animal."
         ],
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Breed Registration Sequence",
         "entity" : "Patient",
         "req" : "2C"
      },
      "(0010,2210)" : {
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
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
                     "linkend" : "sect_C.7.6.1.1.1",
                     "xrefstyle" : "select: label"
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
                     "attrs" : {
                        "xml:id" : "para_6250224a-3316-415a-9bc4-04999c343dd9"
                     },
                     "el" : "para",
                     "content" : [
                        "If this Attribute is not present, the default human standard anatomical position is used to define the patient orientation of projection images and the patient coordinate system of cross-sectional images."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "req" : "1C",
         "entity" : "Series",
         "name" : "Anatomical Orientation Type"
      },
      "(0018,700e)" : {
         "name" : "Time of Last Detector Calibration",
         "req" : "3",
         "entity" : "Image",
         "desc" : "The time at which the detector used to acquire this image as identified in Detector ID (0018,700A) was last calibrated.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "module" : "DX Detector"
      },
      "(0018,1602)" : {
         "name" : "Shutter Left Vertical Edge",
         "req" : "1C",
         "entity" : "Image",
         "desc" : "Required if Shutter Shape (0018,1600) is RECTANGULAR. Location of the left edge of the rectangular shutter with respect to pixels in the image given as column.",
         "mod_tables" : [
            "table_C.7-17a"
         ],
         "module" : "Display Shutter",
         "usage" : "U"
      },
      "(0008,0110)" : {
         "entity" : "Image",
         "req" : "3",
         "name" : "Coding Scheme Identification Sequence",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "desc" : [
            "Sequence of items that map values of Coding Scheme Designator (0008,0102) to an external coding system registration, or to a private or local coding scheme.",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0020,0060)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "desc" : [
            "Laterality of (paired) body part examined. Required if the body part examined is a paired structure and Image Laterality (0020,0062) or Frame Laterality (0020,9072) or Measurement Laterality (0024,0113) are not sent.",
            {
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
               ],
               "type" : "variablelist"
            },
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "Some IODs support Image Laterality (0020,0062) at the Image level or Frame Laterality (0020,9072) at the Frame level in the Frame Anatomy functional group macro or Measurement Laterality (0024,0113) at the Measurement level, which can provide a more comprehensive mechanism for specifying the laterality of the body part(s) being examined."
                     ],
                     "attrs" : {
                        "xml:id" : "para_46e9d782-b47b-4339-b6ff-a11691e830db"
                     },
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "req" : "2C",
         "entity" : "Series",
         "name" : "Laterality"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0032)" : {
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
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "name" : "Universal Entity ID",
         "req" : "3",
         "entity" : "Patient"
      },
      "(0008,1062)" : {
         "desc" : "Identification of the physician(s) reading the Study. One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Name of Physician(s) Reading Study (0008,1060), if present.",
         "usage" : "M",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Physician(s) Reading Study Identification Sequence",
         "entity" : "Study",
         "req" : "3"
      },
      "(0040,0555)[<0>](0040,a043)" : {
         "desc" : [
            "A concept that constrains the meaning of (i.e., defines the role of) the Observation Value. The \"Name\" component of a Name/Value pair.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "module" : "Acquisition Context",
         "usage" : "M",
         "name" : "Concept Name Code Sequence",
         "req" : "1",
         "entity" : "Image"
      },
      "(0008,1050)" : {
         "req" : "3",
         "entity" : "Series",
         "name" : "Performing Physician's Name",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "desc" : "Name of the physician(s) administering the Series."
      },
      "(0020,0013)" : [
         {
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
                        "attrs" : {
                           "xml:id" : "para_4b6d4b36-a800-41c7-a122-e8e704668af1"
                        },
                        "el" : "para"
                     },
                     "\n                  "
                  ]
               }
            ],
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "module" : "General Image",
            "name" : "Instance Number",
            "entity" : "Image",
            "req" : "2"
         },
         {
            "desc" : "A number that identifies this Composite object instance.",
            "mod_tables" : [
               "table_C.12-1"
            ],
            "module" : "SOP Common",
            "usage" : "M",
            "name" : "Instance Number",
            "entity" : "Image",
            "req" : "3"
         }
      ],
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
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "name" : "Date of Last Calibration",
         "entity" : "Equipment",
         "req" : "3"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "module" : "Patient",
         "usage" : "M",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C",
         "entity" : "Patient",
         "name" : "Universal Entity ID"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0033)" : {
         "req" : "1C",
         "entity" : "Patient",
         "name" : "Universal Entity ID Type",
         "usage" : "M",
         "module" : "Patient",
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
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a120)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "entity" : "Image",
         "req" : "1C",
         "name" : "DateTime"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a124)" : {
         "name" : "UID",
         "req" : "1C",
         "entity" : "Image",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U"
      },
      "(0040,0251)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "module" : "General Series",
         "usage" : "M",
         "desc" : "Time at which the Performed Procedure Step ended.",
         "entity" : "Series",
         "req" : "3",
         "name" : "Performed Procedure Step End Time"
      },
      "(0008,0051)[<0>](0040,0033)" : {
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
         "usage" : "M",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "name" : "Universal Entity ID Type",
         "req" : "1C",
         "entity" : "Study"
      },
      "(0028,0011)" : {
         "desc" : "Number of columns in the image",
         "module" : "Image Pixel",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "usage" : "M",
         "name" : "Columns",
         "entity" : "Image",
         "req" : "1"
      },
      "(0400,0500)" : {
         "req" : "1C",
         "entity" : "Image",
         "name" : "Encrypted Attributes Sequence",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
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
      "(0008,1120)[<0>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "entity" : "Patient",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "module" : "Patient"
      },
      "(0040,0560)[<0>](0040,0562)" : {
         "name" : "Issuer of the Specimen Identifier Sequence",
         "entity" : "Image",
         "req" : "2",
         "desc" : [
            "The name or code for the institution that has assigned the Specimen Identifier.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "usage" : "U"
      },
      "(0040,9096)[<0>](0040,9225)" : {
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
            "Required if Float Pixel Data (7FE0,0008) or Double Float Pixel Data (7FE0,0009) are present or Real World Value LUT Data (0040,9212) is not present."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "module" : "General Image",
         "name" : "Real World Value Slope",
         "entity" : "Image",
         "req" : "1C"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a123)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "entity" : "Image",
         "req" : "1C",
         "name" : "Person Name"
      },
      "(0008,0096)[<0>](0040,1104)" : {
         "name" : "Person's Telecom Information",
         "req" : "3",
         "entity" : "Study",
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
         "module" : "General Study"
      },
      "(0018,0036)[<0>](0018,0029)" : {
         "entity" : "Image",
         "req" : "3",
         "name" : "Intervention Drug Code Sequence",
         "module" : "Intervention",
         "mod_tables" : [
            "table_C.7-19"
         ],
         "usage" : "U",
         "desc" : [
            "Sequence that identifies the interventional drug.",
            "Only a single item is permitted in this Sequence."
         ]
      },
      "(0008,1120)[<0>](0008,1155)" : {
         "entity" : "Patient",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0018,2041)[<0>](0018,2043)" : {
         "entity" : "Image",
         "req" : "1",
         "name" : "Localizing Cursor Position",
         "module" : "Mammography Image",
         "mod_tables" : [
            "table_C.8-74"
         ],
         "usage" : "M",
         "desc" : "Coordinates of localizing cursor position with respect to pixels in the image specified by a column (delimiter) row pair. The values shall be in the range 0\\0 (TLHC) to Columns\\Rows (BRHC)."
      },
      "(0018,a001)[<0>](0008,0070)" : {
         "name" : "Manufacturer",
         "entity" : "Image",
         "req" : "1",
         "desc" : "Manufacturer of the equipment that contributed to the composite instance.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0008,0117)" : {
         "name" : "Context UID",
         "req" : "3",
         "entity" : "Image",
         "desc" : [
            "The unique identifier of the Context Group.",
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
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,0068)" : {
         "req" : "1",
         "entity" : "Series",
         "name" : "Presentation Intent Type",
         "module" : "DX Series",
         "mod_tables" : [
            "table_C.8-68"
         ],
         "usage" : "M",
         "desc" : [
            "Identifies the intent of the images that are contained within this Series.",
            {
               "list" : [
                  [
                     "FOR PRESENTATION",
                     null
                  ],
                  [
                     "FOR PROCESSING",
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
                     "linkend" : "sect_C.8.11.1.1.1",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ]
         ]
      },
      "(fffa,fffa)[<0>](0400,0305)" : {
         "entity" : "Image",
         "req" : "1C",
         "name" : "Certified Timestamp Type",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
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
                     "attrs" : {
                        "xml:id" : "para_cae60b6b-4fad-4c20-981d-247bbf9c6471"
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
         ]
      },
      "(0008,0110)[<0>](0008,0112)" : {
         "entity" : "Image",
         "req" : "1C",
         "name" : "Coding Scheme Registry",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "desc" : [
            "The name of the external registry where further definition of the identified coding scheme may be obtained. Required if coding scheme is registered.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "HL7",
                     null
                  ]
               ],
               "title" : "Defined Terms:"
            }
         ]
      },
      "(0010,0033)" : {
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
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "usage" : "M",
         "name" : "Patient's Birth Date in Alternative Calendar",
         "entity" : "Patient",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a123)" : [
         {
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
            "module" : "General Series",
            "desc" : [
               "Person name value for this name-value Item.",
               "Required if Value Type (0040,A040) is PNAME."
            ],
            "entity" : "Series",
            "req" : "1C",
            "name" : "Person Name"
         },
         {
            "usage" : "M",
            "module" : "Mammography Series",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2"
            ],
            "desc" : [
               "Person name value for this name-value Item.",
               "Required if Value Type (0040,A040) is PNAME."
            ],
            "entity" : "Series",
            "req" : "1C",
            "name" : "Person Name"
         }
      ],
      "(0040,0560)[<0>](0040,0551)" : {
         "desc" : [
            [
               "A departmental information system identifier for the Specimen. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.6.22.1.1",
                     "xrefstyle" : "select: label"
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
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "name" : "Specimen Identifier",
         "req" : "1",
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)" : {
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "usage" : "U",
         "desc" : [
            "Sequence of Content Items identifying the processes used in one preparation step to prepare the specimen for image acquisition.",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Image",
         "req" : "1",
         "name" : "Specimen Preparation Step Content Item Sequence"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a163)" : {
         "entity" : "Series",
         "req" : "1C",
         "name" : "Rational Denominator Value",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ]
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)" : {
         "entity" : "Patient",
         "req" : "3",
         "name" : "Assigning Facility Sequence",
         "usage" : "M",
         "module" : "Patient",
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
      "(0060,3000)[<0>](0060,3006)" : {
         "name" : "Histogram Last Bin Value",
         "req" : "1",
         "entity" : "Image",
         "desc" : [
            "The stored pixel value corresponding to the highest pixel value counted in the last bin. All image pixel values greater than this value are not included in the histogram.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "The Value Representation of this Attribute is determined by the value of Pixel Representation (0028,0103)."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_30a11957-6900-4944-886e-090bb2f39141"
                     }
                  },
                  "\n                "
               ]
            }
         ],
         "usage" : "U",
         "module" : "Image Histogram",
         "mod_tables" : [
            "table_C.11.5-1"
         ]
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
         "module" : "Image Pixel",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "usage" : "M",
         "name" : "Green Palette Color Lookup Table Descriptor",
         "req" : "1C",
         "entity" : "Image"
      },
      "(0028,0002)" : [
         {
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "module" : "Image Pixel",
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
            "req" : "1",
            "name" : "Samples per Pixel"
         },
         {
            "name" : "Samples per Pixel",
            "req" : "1",
            "entity" : "Image",
            "desc" : [
               "Number of samples in this image.",
               {
                  "type" : "variablelist",
                  "list" : [
                     [
                        "1",
                        null
                     ]
                  ],
                  "title" : "Enumerated Values:"
               }
            ],
            "usage" : "M",
            "module" : "DX Image",
            "mod_tables" : [
               "table_C.8-70"
            ]
         }
      ],
      "(0088,0200)[<0>](0028,0004)" : {
         "usage" : "M",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
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
         ],
         "entity" : "Image",
         "req" : "1",
         "name" : "Photometric Interpretation"
      },
      "(0040,0555)[<0>](0040,a121)" : {
         "req" : "1C",
         "entity" : "Image",
         "name" : "Date",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "module" : "Acquisition Context",
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
         ]
      },
      "(0018,1047)" : {
         "entity" : "Image",
         "req" : "3",
         "name" : "Contrast Flow Duration",
         "module" : "Contrast/Bolus",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "usage" : "U",
         "desc" : "Duration(s) of injection(s) in seconds. Each Contrast Flow Duration value shall correspond to a value of Contrast Flow Rate (0018,1046)."
      },
      "(0010,0026)[<0>](0010,0021)" : {
         "name" : "Issuer of Patient ID",
         "req" : "3",
         "entity" : "Patient",
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
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M"
      },
      "(0008,1060)" : {
         "desc" : "Names of the physician(s) reading the Study.",
         "usage" : "M",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Name of Physician(s) Reading Study",
         "req" : "3",
         "entity" : "Study"
      },
      "(0040,0560)[<0>](0040,0562)[<1>](0040,0031)" : {
         "req" : "1C",
         "entity" : "Image",
         "name" : "Local Namespace Entity ID",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "module" : "Specimen",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1155)" : [
         {
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2",
               "table_10-11"
            ],
            "usage" : "M",
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "req" : "1",
            "entity" : "Series",
            "name" : "Referenced SOP Instance UID"
         },
         {
            "module" : "Mammography Series",
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2",
               "table_10-11"
            ],
            "usage" : "M",
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "req" : "1",
            "entity" : "Series",
            "name" : "Referenced SOP Instance UID"
         }
      ],
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1160)" : [
         {
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-9",
               "table_10-2"
            ],
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
            "req" : "1C",
            "entity" : "Series",
            "name" : "Referenced Frame Number"
         },
         {
            "mod_tables" : [
               "table_C.8-73",
               "table_10-9",
               "table_10-2"
            ],
            "module" : "Mammography Series",
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
            "entity" : "Series",
            "name" : "Referenced Frame Number"
         }
      ],
      "(0028,1203)" : {
         "usage" : "M",
         "module" : "Image Pixel",
         "mod_tables" : [
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
         "name" : "Blue Palette Color Lookup Table Data"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)" : {
         "name" : "Referenced Instance Sequence",
         "entity" : "Image",
         "req" : "1",
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "module" : "Common Instance Reference",
         "usage" : "U"
      },
      "(0040,0513)" : {
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "usage" : "U",
         "desc" : [
            "Organization that assigned the Container Identifier.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "req" : "2",
         "entity" : "Image",
         "name" : "Issuer of the Container Identifier Sequence"
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
      "Can't handle table_8.8-1 (in table_C.8-73:table_10-9 after (0032,1064))",
      "Can't handle table_8.8-1 (in table_C.8-73:table_10-9 after (0040,100A))",
      "Can't handle table_8.8-1 (in table_C.8-73:table_10-9 after (0040,0008))",
      "Can't handle table_8.8-1 (in table_C.8-73:table_10-9:table_10-2 after (0040,A043))",
      "Can't handle table_8.8-1 (in table_C.8-73:table_10-9:table_10-2 after (0040,A168))",
      "Can't handle table_8.8-1 (in table_C.8-73:table_10-9:table_10-2 after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.8-73:table_10-9:table_10-2 after (0040,A043))",
      "Can't handle table_8.8-1 (in table_C.8-73:table_10-9:table_10-2 after (0040,A168))",
      "Can't handle table_8.8-1 (in table_C.8-73:table_10-9:table_10-2 after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.7-9 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.7-9 after (0008,9215))",
      "Can't handle table_8.8-1 (in table_C.7-9 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.7-9 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.7-9:table_C.7.6.16-12b after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.7-9:table_C.7.6.16-12b:table_10-2 after (0040,A043))",
      "Can't handle table_8.8-1 (in table_C.7-9:table_C.7.6.16-12b:table_10-2 after (0040,A168))",
      "Can't handle table_8.8-1 (in table_C.7-9:table_C.7.6.16-12b:table_10-2 after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.7-12 after (0018,0012))",
      "Can't handle table_8.8-1 (in table_C.7-12 after (0018,0014))",
      "Can't handle table_8.8-1 (in table_C.7-12 after (0018,002A))",
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
      "Can't handle table_8.8-1 (in table_C.8-69:table_10-6 after (0008,2218))",
      "Can't handle table_8.8-1 (in table_C.8-69:table_10-6 after (0008,2220))",
      "Can't handle table_8.8-1 (in table_C.8-69:table_10-6:table_10-8 after (0008,2228))",
      "Can't handle table_8.8-1 (in table_C.8-69:table_10-6:table_10-8 after (0008,2230))",
      "Can't handle table_8.8-1 (in table_C.8-72 after (0018,5104))",
      "Can't handle table_8.8-1 (in table_C.8-72 after (0054,0220))",
      "Can't handle table_8.8-1 (in table_C.8-72 after (0054,0222))",
      "Can't handle table_8.8-1 (in table_C.8-72 after (0054,0410))",
      "Can't handle table_8.8-1 (in table_C.8-72 after (0054,0412))",
      "Can't handle table_8.8-1 (in table_C.8-72 after (0054,0414))",
      "Can't handle table_8.8-1 (in table_C.8-74 after (0028,1352))",
      "Can't handle table_8.8-1 (in table_C.8-74:table_10-5 after (0008,2218))",
      "Can't handle table_8.8-1 (in table_C.8-74:table_10-5 after (0008,2220))",
      "Can't handle table_8.8-1 (in table_C.8-74:table_10-5:table_10-8 after (0008,2228))",
      "Can't handle table_8.8-1 (in table_C.8-74:table_10-5:table_10-8 after (0008,2230))",
      "Can't handle table_8.8-1 (in table_C.8-74 after (0054,0220))",
      "Can't handle table_8.8-1 (in table_C.8-74 after (0054,0222))",
      "Can't handle table_8.8-1 (in table_C.7.6.14-1 after (0040,A043))",
      "Can't handle table_8.8-1 (in table_C.7.6.14-1 after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.7.6.14-1 after (0040,A168))",
      "Can't handle table_8.8-1 (in table_C.12-1 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_C.12-6 after (0400,0401))"
   ]
}
