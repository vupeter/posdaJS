var data = {
   "tags" : {
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0011)" : {
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "name" : "Bounding Box Bottom Right Hand Corner",
         "req" : "1C",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "desc" : [
            "Location of the Bottom Right Hand Corner (BRHC) of the bounding box in which Unformatted Text Value (0070,0006) is to be displayed, in Bounding Box Annotation Units (0070,0003), given as column\\row. Column is the horizontal offset and row is the vertical offset.",
            "Required if Anchor Point (0070,0014) is not present. May be present otherwise.",
            "Required if Bounding Box Top Left Hand Corner (0070,0010) is present."
         ]
      },
      "(0070,0001)[<0>](0070,0008)" : {
         "req" : "1C",
         "name" : "Text Object Sequence",
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "desc" : [
            "Sequence that describes a text annotation.",
            "One or more Items shall be included in this sequence.",
            "Either one or both of Text Object Sequence (0070,0008) or Graphic Object Sequence (0070,0009) are required."
         ],
         "mod_tables" : [
            "table_C.10-5"
         ]
      },
      "(0010,1001)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "name" : "Other Patient Names",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "Other names used to identify the patient."
      },
      "(0008,0051)" : {
         "name" : "Issuer of Accession Number Sequence",
         "req" : "3",
         "module" : "General Study",
         "usage" : "M",
         "entity" : "Study",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)[<2>](0070,0248)" : {
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "desc" : [
            "Specifies whether or not the text shall be rendered underlined.",
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "Y",
                     "yes"
                  ],
                  [
                     "N",
                     "no"
                  ]
               ]
            }
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "entity" : "Presentation State",
         "name" : "Underlined",
         "req" : "1"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a168)" : {
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Concept Code Sequence",
         "req" : "1C",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series"
      },
      "(0008,1080)" : {
         "desc" : "Description of the admitting diagnosis (diagnoses)",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "req" : "3",
         "name" : "Admitting Diagnoses Description",
         "entity" : "Study",
         "usage" : "U",
         "module" : "Patient Study"
      },
      "(0018,a001)[<0>](0018,1201)" : {
         "name" : "Time of Last Calibration",
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Presentation State",
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
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0070,0001)[<0>](0008,1140)[<1>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.10-5",
            "table_10-3",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "entity" : "Presentation State"
      },
      "(0010,1021)" : {
         "name" : "Patient's Size Code Sequence",
         "req" : "3",
         "entity" : "Study",
         "module" : "Patient Study",
         "usage" : "U",
         "desc" : [
            "Patient's size category code",
            "One or more Items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0031)" : {
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "name" : "Local Namespace Entity ID",
         "req" : "1C",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a043)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Concept Name Code Sequence",
         "req" : "1"
      },
      "(0010,1002)[<0>](0010,0022)" : {
         "name" : "Type of Patient ID",
         "req" : "1",
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
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
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0008,1115)" : {
         "usage" : "M",
         "module" : "Presentation State Relationship",
         "entity" : "Presentation State",
         "req" : "1",
         "name" : "Referenced Series Sequence",
         "mod_tables" : [
            "table_C.11.11-1b"
         ],
         "desc" : [
            "Sequence of Items where each Item includes the Attributes of one Series to which the Presentation applies.",
            "One or more Items shall be included in this sequence."
         ]
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
         "usage" : "U",
         "module" : "Clinical Trial Study",
         "entity" : "Study",
         "req" : "3",
         "name" : "Clinical Trial Time Point Description"
      },
      "(0028,1102)" : {
         "module" : "Palette Color LUT",
         "usage" : "M",
         "entity" : "Presentation State",
         "name" : "Green Palette Color Lookup Table Descriptor",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-22a"
         ],
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
         ]
      },
      "(0008,1072)[<0>](0008,0082)" : {
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "req" : "1C",
         "name" : "Institution Code Sequence",
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0231)[<2>](0070,0242)" : {
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "desc" : [
            [
               "Specifies the horizontal position of the text relative to the vertical edges of the bounding box. Horizontal Alignment shall override the Bounding Box Text Horizontal Justification (0070,0012) of the Text Object Sequence Item. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.10.5.1.3.12.1"
                  },
                  "el" : "xref"
               }
            ],
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "LEFT",
                     null
                  ],
                  [
                     "CENTER",
                     null
                  ],
                  [
                     "RIGHT",
                     null
                  ]
               ],
               "title" : "Enumerated Values:"
            },
            "Required if Bounding Box Top Left Hand Corner (0070,0010) is present."
         ],
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "entity" : "Presentation State",
         "name" : "Horizontal Alignment",
         "req" : "3"
      },
      "(0008,1072)[<0>](0008,0080)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Institution Name",
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1155)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Referenced SOP Instance UID",
         "req" : "1"
      },
      "(0010,21b0)" : {
         "name" : "Additional Patient History",
         "req" : "3",
         "module" : "Patient Study",
         "usage" : "U",
         "entity" : "Study",
         "desc" : "Additional information about the Patient's medical history.",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0008,0080)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "desc" : "Institution where the equipment that produced the composite instances is located.",
         "module" : "General Equipment",
         "usage" : "M",
         "entity" : "Equipment",
         "name" : "Institution Name",
         "req" : "3"
      },
      "(0040,0253)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "desc" : "User or equipment generated identifier of that part of a Procedure that has been carried out within this step.",
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "req" : "3",
         "name" : "Performed Procedure Step ID"
      },
      "(0012,0072)" : {
         "mod_tables" : [
            "table_C.7-5b"
         ],
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
         "usage" : "U",
         "module" : "Clinical Trial Series",
         "entity" : "Series",
         "name" : "Clinical Trial Series Description",
         "req" : "3"
      },
      "(fffa,fffa)[<0>](0400,0110)" : {
         "name" : "Certificate Type",
         "req" : "1",
         "entity" : "Presentation State",
         "module" : "SOP Common",
         "usage" : "M",
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
      "(0008,1115)[<0>](0008,1140)[<1>](0062,000b)" : {
         "name" : "Referenced Segment Number",
         "req" : "1C",
         "usage" : "M",
         "module" : "Presentation State Relationship",
         "entity" : "Presentation State",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "mod_tables" : [
            "table_C.11.11-1b",
            "table_10-3"
         ]
      },
      "(0012,0060)" : {
         "name" : "Clinical Trial Coordinating Center Name",
         "req" : "2",
         "usage" : "U",
         "module" : "Clinical Trial Series",
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
         "mod_tables" : [
            "table_C.7-5b"
         ]
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)" : {
         "name" : "Text Style Sequence",
         "req" : "3",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "entity" : "Presentation State",
         "desc" : [
            "Sequence that describes the text style.",
            "Only a single item shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ]
      },
      "(0018,a001)[<0>](0008,1090)" : {
         "desc" : "Manufacturer's model name of the equipment that contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "name" : "Manufacturer's Model Name",
         "entity" : "Presentation State",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0008,1049)[<0>](0008,0082)" : {
         "module" : "General Study",
         "usage" : "M",
         "entity" : "Study",
         "req" : "1C",
         "name" : "Institution Code Sequence",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
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
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Presentation State",
         "name" : "Instance Creation Date",
         "req" : "3"
      },
      "(0008,1062)[<0>](0008,0082)" : {
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "1C",
         "name" : "Institution Code Sequence",
         "entity" : "Study",
         "module" : "General Study",
         "usage" : "M"
      },
      "(0028,2000)" : {
         "desc" : "An ICC Profile encoding the transformation of device-dependent color stored pixel values into PCS-Values.",
         "mod_tables" : [
            "table_C.11.15-1"
         ],
         "name" : "ICC Profile",
         "req" : "1",
         "module" : "ICC Profile",
         "usage" : "M",
         "entity" : "Presentation State"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a124)" : {
         "name" : "UID",
         "req" : "1C",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0008,1250)" : {
         "name" : "Related Series Sequence",
         "req" : "3",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series",
         "desc" : [
            "Identification of Series significantly related to this Series.",
            "One or more Items are permitted in this Sequence.",
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
                                    "For example, for a combined CT and PET acquisition, the CT images and PET images would be in separate series that could cross-reference each other with multiple purpose of reference codes meaning same anatomy, simultaneously acquired and same indication."
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
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0233)[<2>](0070,0257)" : {
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5c"
         ],
         "desc" : [
            "The texture of the closed object to be displayed.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "SOLID",
                     null
                  ],
                  [
                     "STIPPELED",
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
                     "linkend" : "sect_C.10.5.1.3.14.1",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ]
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "entity" : "Presentation State",
         "name" : "Fill Mode",
         "req" : "1"
      },
      "(0010,0024)[<0>](0040,0033)" : {
         "mod_tables" : [
            "table_C.7-1",
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
         ],
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Universal Entity ID Type",
         "req" : "1C"
      },
      "(0018,1201)" : {
         "mod_tables" : [
            "table_C.7-8"
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
         "usage" : "M",
         "module" : "General Equipment",
         "entity" : "Equipment",
         "req" : "3",
         "name" : "Time of Last Calibration"
      },
      "(fffa,fffa)[<0>](0400,0305)" : {
         "req" : "1C",
         "name" : "Certified Timestamp Type",
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Presentation State",
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
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "req" : "2",
         "name" : "Clinical Trial Protocol Name",
         "entity" : "Patient",
         "module" : "Clinical Trial Subject",
         "usage" : "U"
      },
      "(0008,1120)[<0>](0008,1150)" : {
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
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
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "name" : "Floating Point Value",
         "req" : "1C"
      },
      "(0070,0086)[<0>](0008,0080)" : {
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "mod_tables" : [
            "table_C.11.10-1",
            "table_10-12",
            "table_10-1"
         ],
         "name" : "Institution Name",
         "req" : "1C",
         "entity" : "Presentation State",
         "usage" : "M",
         "module" : "Presentation State Identification"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1160)" : {
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
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "name" : "Referenced Frame Number",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M"
      },
      "(0008,1111)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : [
            "Uniquely identifies the Performed Procedure Step SOP Instance to which the Series is related.",
            "Only a single Item is permitted in this sequence."
         ],
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "req" : "3",
         "name" : "Referenced Performed Procedure Step Sequence"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)[<2>](0070,0229)" : {
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "entity" : "Presentation State",
         "req" : "1",
         "name" : "CSS Font Name",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "desc" : "Generic font name as defined within CSS (Cascading Style Sheets). Default fontname, if the font specified in Font Name (0070,0227) is not present or can not be rendered."
      },
      "(0008,0096)[<0>](0008,0081)" : {
         "entity" : "Study",
         "module" : "General Study",
         "usage" : "M",
         "name" : "Institution Address",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable."
      },
      "(0040,0280)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "desc" : "User-defined comments on the Performed Procedure Step.",
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Comments on the Performed Procedure Step",
         "req" : "3"
      },
      "(0018,1050)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "module" : "General Equipment",
         "usage" : "M",
         "entity" : "Equipment",
         "name" : "Spatial Resolution",
         "req" : "3"
      },
      "(0070,0001)[<0>](0070,0209)" : {
         "desc" : [
            "A sequence of Items that describe Compound Graphics.",
            "One or more Items are permitted in this sequence.",
            "For each Compound Graphic there shall be an alternate rendering encoded as Items in the Text Object Sequence (0070,0008) and Graphic Object Sequence (0070,0009) linked by the Compound Graphic Instance ID (0070,0226).",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.10.5.1.3.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "mod_tables" : [
            "table_C.10-5"
         ],
         "name" : "Compound Graphic Sequence",
         "req" : "3",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "entity" : "Presentation State"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0023)" : {
         "req" : "1",
         "name" : "Graphic Type",
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "desc" : [
            [
               "The shape of graphic that is to be drawn. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.10.5.1.2"
                  }
               },
               "."
            ],
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "POINT",
                     null
                  ],
                  [
                     "POLYLINE",
                     null
                  ],
                  [
                     "INTERPOLATED",
                     null
                  ],
                  [
                     "CIRCLE",
                     null
                  ],
                  [
                     "ELLIPSE",
                     null
                  ]
               ],
               "type" : "variablelist"
            }
         ],
         "mod_tables" : [
            "table_C.10-5"
         ]
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0232)[<2>](0070,0285)" : {
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "name" : "Pattern Off Opacity",
         "req" : "3",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "desc" : "Encodes the background opacity. The value is encoded as floating point alpha value (0.0-1.0)."
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0232)[<2>](0070,0251)" : {
         "desc" : [
            [
               "A color triplet value used to encode the foreground. The units are specified in PCS-Values, and the value is encoded as CIELab. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.10.7.1.1"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "This value shall override the Graphic Layer Recommended Display CIELab Value (0070,0401)."
         ],
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "name" : "Pattern On Color CIELab Value",
         "req" : "1",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "entity" : "Presentation State"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a168)" : {
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "name" : "Concept Code Sequence",
         "req" : "1C",
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
      "(0010,0021)" : {
         "req" : "3",
         "name" : "Issuer of Patient ID",
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,08ea)" : {
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "name" : "Measurement Units Code Sequence",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0233)" : {
         "name" : "Fill Style Sequence",
         "req" : "3",
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "desc" : [
            "Sequence that describes the fill style.",
            "Only a single item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5c"
         ]
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0232)[<2>](0070,0247)" : {
         "desc" : [
            "A color triplet value used to encode the Shadow Color. The units are specified in PCS-Values, and the value is encoded as CIELab. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.10.7.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "name" : "Shadow Color CIELab Value",
         "req" : "1",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "entity" : "Presentation State"
      },
      "(0070,0234)[<0>](0070,0207)" : {
         "entity" : "Presentation State",
         "usage" : "U",
         "module" : "Graphic Group",
         "name" : "Graphic Group Label",
         "req" : "1",
         "mod_tables" : [
            "table_C.10-12"
         ],
         "desc" : "Name used to identify the Graphic Group, i.e., the combined graphic object."
      },
      "(0040,0275)[<0>](0008,0050)" : {
         "desc" : "An identifier of the Imaging Service Request for this Requested Procedure.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "req" : "3",
         "name" : "Accession Number",
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0070,0060)[<0>](0070,0002)" : {
         "name" : "Graphic Layer",
         "req" : "1",
         "entity" : "Presentation State",
         "module" : "Graphic Layer",
         "usage" : "C - Required if Graphic Annotations or Overlays or Curves are to be applied to referenced image(s)",
         "desc" : [
            "A string that identifies the layer.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "This identifier may be used by other Attributes within the same presentation state instance to reference this layer. There is no requirement for the same identifiers to be used in different presentation states, and there is no mechanism for referencing layers in other presentation states. That is, a UID is not required."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.10-7"
         ]
      },
      "(0100,0410)" : {
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
                     "el" : "para",
                     "content" : [
                        "Proper use of these flags is specified in Security Profiles. Implementations that do not conform to such Security Profiles may not necessarily handle these flags properly."
                     ]
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "name" : "SOP Instance Status",
         "entity" : "Presentation State",
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0008,0060)" : [
         {
            "usage" : "M",
            "module" : "General Series",
            "entity" : "Series",
            "name" : "Modality",
            "req" : "1",
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
            ]
         },
         {
            "mod_tables" : [
               "table_C.11.9-1"
            ],
            "desc" : [
               "Type of equipment that originally acquired the data.",
               {
                  "list" : [
                     [
                        "PR",
                        "Presentation State"
                     ]
                  ],
                  "title" : "Enumerated Values:",
                  "type" : "variablelist"
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
                  "."
               ]
            ],
            "entity" : "Series",
            "module" : "Presentation Series",
            "usage" : "M",
            "req" : "1",
            "name" : "Modality"
         }
      ],
      "(0010,1002)" : {
         "name" : "Other Patient IDs Sequence",
         "req" : "3",
         "module" : "Patient",
         "usage" : "M",
         "entity" : "Patient",
         "desc" : [
            "A sequence of identification numbers or codes used to identify the patient, which may or may not be human readable, and may or may not have been obtained from an implanted or attached device such as an RFID or barcode.",
            "One or more Items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0070,005a)[<0>](0070,0103)" : {
         "entity" : "Presentation State",
         "module" : "Displayed Area",
         "usage" : "M",
         "name" : "Presentation Pixel Magnification Ratio",
         "req" : "1C",
         "mod_tables" : [
            "table_C.10-4"
         ],
         "desc" : [
            "Ratio of displayed pixels to source pixels, specified in one dimension.",
            "Required if Presentation Size Mode (0070,0100) is MAGNIFY.",
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
                           "el" : "listitem",
                           "content" : [
                              "\n                      ",
                              {
                                 "content" : [
                                    "A value of 1.0 would imply that one pixel in the referenced image would be displayed as one pixel on the display (i.e., it would not be interpolated if the aspect ratio of the image pixels is 1:1)."
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
                                    "A value of 2.0 would imply that one pixel in the referenced image would be displayed as 4 pixels on the display (i.e., up-sampled by a factor of 2 in each of the row and column directions)."
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
                                 "el" : "para",
                                 "content" : [
                                    "A value of 0.5 would imply that 4 pixels in the referenced image would be displayed as 1 pixel on the display (i.e., down-sampled by a factor of 2 in each of the row and column directions)."
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
                                    "If the source pixels have an aspect ratio of other than 1:1, then they are assumed to have been interpolated to a display pixel aspect ratio of 1:1 prior to magnification."
                                 ],
                                 "el" : "para"
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
         ]
      },
      "(0012,0071)" : {
         "module" : "Clinical Trial Series",
         "usage" : "U",
         "entity" : "Series",
         "name" : "Clinical Trial Series ID",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5b"
         ],
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
         ]
      },
      "(0070,0087)[<0>](0070,0081)" : {
         "req" : "1",
         "name" : "Content Description",
         "entity" : "Presentation State",
         "module" : "Presentation State Identification",
         "usage" : "M",
         "desc" : "An alternate description that is used to identify this SOP Instance.",
         "mod_tables" : [
            "table_C.11.10-1",
            "table_10-12"
         ]
      },
      "(60xx,1301)" : {
         "entity" : "Presentation State",
         "module" : "Overlay Plane",
         "usage" : "C - Required if Overlay is to be applied to referenced image(s) or the Bitmap Display Shutter Module is present",
         "name" : "ROI Area",
         "req" : "3",
         "mod_tables" : [
            "table_C.9-2"
         ],
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
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0232)[<2>](0070,0246)" : {
         "desc" : [
            "Floating point value that defines the shadow offset in Y direction in Graphic Annotation Units (0070,0005). See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.10.5.1.3.13.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "req" : "1",
         "name" : "Shadow Offset Y",
         "entity" : "Presentation State",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation"
      },
      "(0400,0500)[<0>](0400,0520)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Presentation State",
         "req" : "1",
         "name" : "Encrypted Content"
      },
      "(0018,1008)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "desc" : "Identifier of the gantry or positioner.",
         "entity" : "Equipment",
         "usage" : "M",
         "module" : "General Equipment",
         "name" : "Gantry ID",
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a120)" : {
         "name" : "DateTime",
         "req" : "1C",
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(0008,1062)[<0>](0008,0080)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "entity" : "Study",
         "usage" : "M",
         "module" : "General Study",
         "name" : "Institution Name",
         "req" : "1C"
      },
      "(0070,0086)[<0>](0040,1102)" : {
         "desc" : "Person's mailing address",
         "mod_tables" : [
            "table_C.11.10-1",
            "table_10-12",
            "table_10-1"
         ],
         "name" : "Person's Address",
         "req" : "3",
         "entity" : "Presentation State",
         "module" : "Presentation State Identification",
         "usage" : "M"
      },
      "(4ffe,0001)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : [
            "A sequence of items that describe the parameters used to calculate a MAC for use in Digital Signatures.",
            "One or more Items shall be included in this sequence."
         ],
         "entity" : "Presentation State",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "MAC Parameters Sequence",
         "req" : "3"
      },
      "(0028,3110)[<0>](0008,1140)[<1>](0062,000b)" : {
         "name" : "Referenced Segment Number",
         "req" : "1C",
         "module" : "Softcopy VOI LUT",
         "usage" : "C - Required if a VOI LUT is to be applied to referenced image(s)",
         "entity" : "Presentation State",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "mod_tables" : [
            "table_C.11.8-1",
            "table_10-3"
         ]
      },
      "(0018,a001)[<0>](0008,1072)" : {
         "desc" : [
            "Identification of the operator(s) of the contributing equipment.",
            "One or more items are permitted in this sequence.",
            "The number and order of Items shall correspond to the number and order of values of Operators' Name (0008,1070), if present."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Operator Identification Sequence",
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Presentation State"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0231)[<2>](0070,0245)" : {
         "req" : "1",
         "name" : "Shadow Offset X",
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "desc" : [
            "Floating point value that defines the shadow offset in X direction in Anchor Point Annotation Units (0070,0004) if used in Text Object Sequence Item or in Graphic Annotation Units (0070,0005) if used in Graphic Object Sequence Item. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.10.5.1.3.13.1"
               },
               "el" : "xref"
            }
         ],
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ]
      },
      "(0070,0001)[<0>](0070,0009)" : {
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "1C",
         "name" : "Graphic Object Sequence",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "desc" : [
            "Sequence that describes a graphic annotation.",
            "One or more Items shall be included in this sequence.",
            "Either one or both of Text Object Sequence (0070,0008) or Graphic Object Sequence (0070,0009) are required."
         ]
      },
      "(0040,0275)[<0>](0040,0009)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
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
                     "el" : "para"
                  },
                  "\n              "
               ]
            }
         ],
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series",
         "name" : "Scheduled Procedure Step ID",
         "req" : "1C"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0233)[<2>](0070,0257)" : {
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5c"
         ],
         "desc" : [
            "The texture of the closed object to be displayed.",
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "SOLID",
                     null
                  ],
                  [
                     "STIPPELED",
                     null
                  ]
               ]
            },
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.10.5.1.3.14.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "entity" : "Presentation State",
         "name" : "Fill Mode",
         "req" : "1"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a121)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "name" : "Date",
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a30a)" : {
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Numeric Value",
         "req" : "1C",
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series"
      },
      "(0020,000e)" : {
         "req" : "1",
         "name" : "Series Instance UID",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "desc" : "Unique identifier of the Series.",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0018,1606)" : {
         "mod_tables" : [
            "table_C.7-17a"
         ],
         "desc" : "Required if Shutter Shape (0018,1600) is RECTANGULAR. Location of the upper edge of the rectangular shutter with respect to pixels in the image given as row.",
         "usage" : "C - Required if a Display Shutter is to be applied to referenced image(s) and the Bitmap Display Shutter Module is not present",
         "module" : "Display Shutter",
         "entity" : "Presentation State",
         "req" : "1C",
         "name" : "Shutter Upper Horizontal Edge"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0231)[<2>](0070,0243)" : {
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "name" : "Vertical Alignment",
         "req" : "3",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "desc" : [
            [
               "Specifies the vertical position of the text relative to the horizontal edges of the bounding box. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.10.5.1.3.12.1"
                  },
                  "el" : "xref"
               }
            ],
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "TOP",
                     null
                  ],
                  [
                     "CENTER",
                     null
                  ],
                  [
                     "BOTTOM",
                     null
                  ]
               ],
               "type" : "variablelist"
            },
            "Required if Bounding Box Top Left Hand Corner (0070,0010) is present."
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a123)" : {
         "req" : "1C",
         "name" : "Person Name",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a163)" : {
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
         "req" : "1C",
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series"
      },
      "(0020,9172)" : {
         "desc" : [
            "The set of images or other composite SOP Instances that were converted to this instance.",
            "If this instance was converted from a specific frame in the source instance, the reference shall include the Frame Number.",
            "One or more Items shall be included in this sequence.",
            "Required if this instance was created by conversion, and Conversion Source Attributes Sequence (0020,9172) is not present in an Item of Shared Functional Groups Sequence (5200,9229) or Per-Frame Functional Groups Sequence (5200,9230)."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Conversion Source Attributes Sequence",
         "req" : "1C",
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Presentation State"
      },
      "(0008,1115)[<0>](0008,1140)[<1>](0008,1160)" : {
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
         "mod_tables" : [
            "table_C.11.11-1b",
            "table_10-3"
         ],
         "name" : "Referenced Frame Number",
         "req" : "1C",
         "entity" : "Presentation State",
         "module" : "Presentation State Relationship",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a043)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Concept Name Code Sequence",
         "req" : "1"
      },
      "(0008,0110)[<0>](0008,0116)" : {
         "desc" : "Name of the organization responsible for the Coding Scheme. May include organizational contact information.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme Responsible Organization",
         "req" : "3",
         "entity" : "Presentation State",
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0008,1062)[<0>](0040,1101)" : {
         "name" : "Person Identification Code Sequence",
         "req" : "1",
         "module" : "General Study",
         "usage" : "M",
         "entity" : "Study",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)" : {
         "name" : "Referenced SOP Sequence",
         "req" : "1C",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0070,005a)[<0>](0008,1140)[<1>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.10-4",
            "table_10-3",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "entity" : "Presentation State",
         "module" : "Displayed Area",
         "usage" : "M"
      },
      "(0008,0096)[<0>](0040,1102)" : {
         "entity" : "Study",
         "module" : "General Study",
         "usage" : "M",
         "name" : "Person's Address",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Person's mailing address"
      },
      "(60xx,1001)" : {
         "mod_tables" : [
            "table_C.11.7-1"
         ],
         "desc" : [
            [
               "The layer (defined in Graphic Layer (0070,0002) of the Graphic Layer Module ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.10.7"
                  }
               },
               ") in which the Overlay described in group 60xx shall be displayed. If no layer is specified (zero length) then the overlay shall not be displayed."
            ],
            "Required if Group 60xx is present in the referenced image(s) or the Presentation State instance containing this Module."
         ],
         "entity" : "Presentation State",
         "module" : "Overlay Activation",
         "usage" : "C - Required if referenced image contains overlay data that is to be displayed or Presentation State Instance contains Overlay data other than Bitmap Shutter",
         "req" : "2C",
         "name" : "Overlay Activation Layer"
      },
      "(0070,0060)" : {
         "entity" : "Presentation State",
         "module" : "Graphic Layer",
         "usage" : "C - Required if Graphic Annotations or Overlays or Curves are to be applied to referenced image(s)",
         "name" : "Graphic Layer Sequence",
         "req" : "1",
         "mod_tables" : [
            "table_C.10-7"
         ],
         "desc" : [
            "A sequence of Items each of which represents a single layer in which overlays, curves, graphics or text may be rendered.",
            "One or more Items shall be included in this sequence.",
            "An Item is required for each layer referenced from the Graphic Annotation Module or the Overlay Activation Module."
         ]
      },
      "(0028,6100)[<0>](0028,6110)" : {
         "mod_tables" : [
            "table_C.7-16"
         ],
         "desc" : "Specifies the frame numbers of the pixel data used to generate this mask. Frames in a Multi-frame Image are specified by sequentially increasing number values beginning with 1. Required if Mask Operation (0028,6101) is AVG_SUB.",
         "entity" : "Presentation State",
         "module" : "Mask",
         "usage" : "C - Required if the referenced image(s) are multi-frame and are to be subtracted",
         "req" : "1C",
         "name" : "Mask Frame Numbers"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0010)" : {
         "desc" : [
            "Location of the Top Left Hand Corner (TLHC) of the bounding box in which Unformatted Text Value (0070,0006) is to be displayed, in Bounding Box Annotation Units (0070,0003), given as column\\row. Column is the horizontal offset and row is the vertical offset.",
            "Required if Anchor Point (0070,0014) is not present. May be present otherwise.",
            "Required if Bounding Box Bottom Right Hand Corner (0070,0011) is present."
         ],
         "mod_tables" : [
            "table_C.10-5"
         ],
         "req" : "1C",
         "name" : "Bounding Box Top Left Hand Corner",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "entity" : "Presentation State"
      },
      "(0018,1600)" : [
         {
            "mod_tables" : [
               "table_C.7-17a"
            ],
            "desc" : [
               "Shape(s) of the shutter defined for display.",
               {
                  "type" : "variablelist",
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
                  ]
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
            "module" : "Display Shutter",
            "usage" : "C - Required if a Display Shutter is to be applied to referenced image(s) and the Bitmap Display Shutter Module is not present",
            "entity" : "Presentation State",
            "name" : "Shutter Shape",
            "req" : "1"
         },
         {
            "mod_tables" : [
               "table_C.7.6.15-1"
            ],
            "desc" : [
               "Shape of the shutter defined for display.",
               {
                  "type" : "variablelist",
                  "title" : "Enumerated Values:",
                  "list" : [
                     [
                        "BITMAP",
                        null
                     ]
                  ]
               },
               "This Attribute shall contain one Value."
            ],
            "entity" : "Presentation State",
            "module" : "Bitmap Display Shutter",
            "usage" : "C - Required if a Display Shutter is to be applied to referenced image(s) and the Display Shutter Module is not present",
            "req" : "1",
            "name" : "Shutter Shape"
         }
      ],
      "(0010,2297)" : {
         "module" : "Patient",
         "usage" : "M",
         "entity" : "Patient",
         "req" : "2C",
         "name" : "Responsible Person",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "Name of person with medical decision making authority for the patient.",
            "Required if the patient is an animal. May be present otherwise."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a160)" : {
         "req" : "1C",
         "name" : "Text Value",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0070,0060)[<0>](0070,0401)" : {
         "module" : "Graphic Layer",
         "usage" : "C - Required if Graphic Annotations or Overlays or Curves are to be applied to referenced image(s)",
         "entity" : "Presentation State",
         "name" : "Graphic Layer Recommended Display CIELab Value",
         "req" : "3",
         "mod_tables" : [
            "table_C.10-7"
         ],
         "desc" : [
            "A default color triplet value in which it is recommended that the layer be rendered on a color display. The units are specified in PCS-Values, and the value is encoded as CIELab. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.10.7.1.1"
               },
               "el" : "xref"
            },
            "."
         ]
      },
      "(0040,1012)" : {
         "usage" : "M",
         "module" : "General Study",
         "entity" : "Study",
         "name" : "Reason For Performed Procedure Code Sequence",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3"
         ],
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
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a122)" : {
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "name" : "Time",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)[<2>](0070,0246)" : {
         "desc" : [
            "Floating point value that defines the shadow offset in Y direction in Anchor Point Annotation Units (0070,0004) if used in Text Object Sequence Item or in Graphic Annotation Units (0070,0005) if used in Graphic Object Sequence Item. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.10.5.1.3.13.1"
               },
               "el" : "xref"
            }
         ],
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "req" : "1",
         "name" : "Shadow Offset Y",
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)"
      },
      "(0100,0424)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Any comments associated with the setting of the SOP Instance Status (0100,0410) to AO.",
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Presentation State",
         "req" : "3",
         "name" : "SOP Authorization Comment"
      },
      "(0040,0245)" : {
         "desc" : "Time on which the Performed Procedure Step started.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "req" : "3",
         "name" : "Performed Procedure Step Start Time",
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)" : {
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
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series",
         "name" : "Referenced SOP Sequence",
         "req" : "1C"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1101)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Presentation State",
         "req" : "1",
         "name" : "Person Identification Code Sequence"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1160)" : {
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "req" : "1C",
         "name" : "Referenced Frame Number",
         "mod_tables" : [
            "table_C.7-5a",
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
                     "el" : "para"
                  },
                  "\n              "
               ]
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ]
      },
      "(0028,1222)" : {
         "entity" : "Presentation State",
         "usage" : "M",
         "module" : "Palette Color LUT",
         "name" : "Segmented Green Palette Color Lookup Table Data",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-22a"
         ],
         "desc" : [
            "Segmented Green Palette Color Lookup Table Data. Required if segmented data is used in an Image IOD; shall not be present in a Presentation State IOD. or Color Palette IOD See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.9.2",
                  "xrefstyle" : "select: label"
               }
            },
            " for further explanation."
         ]
      },
      "(0008,0031)" : {
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "req" : "3",
         "name" : "Series Time",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : "Time the Series started."
      },
      "(0028,0120)" : {
         "entity" : "Equipment",
         "module" : "General Equipment",
         "usage" : "M",
         "name" : "Pixel Padding Value",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-8"
         ],
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
                                    "This Attribute is not used in Presentation State Instances; there is no means in a Presentation State to \"override\" any Pixel Padding Value specified in the referenced images."
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
                                    "This Attribute does apply to RT Dose and Segmentation instances, since they include Pixel Data."
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
               ],
               "el" : "note"
            }
         ]
      },
      "(0028,3110)[<0>](0008,1140)[<1>](0008,1150)" : {
         "usage" : "C - Required if a VOI LUT is to be applied to referenced image(s)",
         "module" : "Softcopy VOI LUT",
         "entity" : "Presentation State",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.11.8-1",
            "table_10-3",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1102)" : {
         "req" : "3",
         "name" : "Person's Address",
         "entity" : "Presentation State",
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : "Person's mailing address",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ]
      },
      "(0008,1030)" : {
         "name" : "Study Description",
         "req" : "3",
         "usage" : "M",
         "module" : "General Study",
         "entity" : "Study",
         "desc" : "Institution-generated description or classification of the Study (component) performed.",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0295)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "entity" : "Presentation State",
         "name" : "Graphic Group ID",
         "req" : "3",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "desc" : [
            "A number identifying the group from the Graphic Group Sequence (0070,0234) to which this Item belongs. If this attribute is not present, this Item does not belong to a group.",
            "If Compound Graphic Instance ID (0070,0226) is present in this Item, the value of Graphic Group ID (0070,0295) shall be the same as the value of Graphic Group ID (0070,0295) of the corresponding Item in the Compound Graphic Sequence (0070,0209) with the same Compound Graphic Instance ID (0070,0226)."
         ]
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0287)" : {
         "desc" : [
            "The sequence of major ticks on the AXIS object.",
            "Two or more Items shall be present.",
            "Required if Compound Graphic Type (0070,0294) equals AXIS."
         ],
         "mod_tables" : [
            "table_C.10-5"
         ],
         "name" : "Major Ticks Sequence",
         "req" : "1C",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "entity" : "Presentation State"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a161)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Floating Point Value",
         "req" : "1C"
      },
      "(60xx,0100)" : {
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
         "mod_tables" : [
            "table_C.9-2"
         ],
         "name" : "Overlay Bits Allocated",
         "req" : "1",
         "entity" : "Presentation State",
         "module" : "Overlay Plane",
         "usage" : "C - Required if Overlay is to be applied to referenced image(s) or the Bitmap Display Shutter Module is present"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0233)" : {
         "desc" : [
            "Sequence that describes the fill style.",
            "Only a single item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5c"
         ],
         "name" : "Fill Style Sequence",
         "req" : "3",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "entity" : "Presentation State"
      },
      "(0008,1040)" : {
         "usage" : "M",
         "module" : "General Equipment",
         "entity" : "Equipment",
         "req" : "3",
         "name" : "Institutional Department Name",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "desc" : "Department in the institution where the equipment that produced the composite instances is located."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a162)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "name" : "Rational Numerator Value",
         "req" : "1C"
      },
      "(0070,0060)[<0>](0070,0062)" : {
         "desc" : "An integer indicating the order in which it is recommended that the layer be rendered, if the display is capable of distinguishing. Lower numbered layers are to be rendered first.",
         "mod_tables" : [
            "table_C.10-7"
         ],
         "name" : "Graphic Layer Order",
         "req" : "1",
         "entity" : "Presentation State",
         "module" : "Graphic Layer",
         "usage" : "C - Required if Graphic Annotations or Overlays or Curves are to be applied to referenced image(s)"
      },
      "(0038,0062)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Description of the type of service episode.",
         "entity" : "Study",
         "module" : "Patient Study",
         "usage" : "U",
         "name" : "Service Episode Description",
         "req" : "3"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0003)" : {
         "name" : "Bounding Box Annotation Units",
         "req" : "1C",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "entity" : "Presentation State",
         "desc" : [
            "Units of measure for the axes of the text bounding box.",
            "Defines whether or not the annotation is Image or Displayed Area relative. Both dimensions shall have the same units.",
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "PIXEL",
                     [
                        "Image relative position specified with sub-pixel resolution such that the origin, which is at the Top Left Hand Corner (TLHC) of the TLHC pixel is 0.0\\0.0, the Bottom Right Hand Corner (BRHC) of the TLHC pixel is 1.0\\1.0, and the BRHC of the BRHC pixel is Columns\\Rows (see ",
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
                  [
                     "DISPLAY",
                     "Fraction of Specified Displayed Area where 0.0\\0.0 is the TLHC and 1.0\\1.0 is the BRHC. The values must be within the range 0.0 to 1.0."
                  ],
                  [
                     "MATRIX",
                     [
                        "Image relative position specified with sub-pixel resolution such that the origin, which is at the Top Left Hand Corner (TLHC) of the TLHC pixel of the Total Pixel Matrix, is 0.0\\0.0, the Bottom Right Hand Corner (BRHC) of the TLHC pixel is 1.0\\1.0, and the BRHC of the BRHC pixel of the Total Pixel Matrix is Total Pixel Matrix Columns\\Total Pixel Matrix Rows (see ",
                        {
                           "el" : "xref",
                           "attrs" : {
                              "linkend" : "sect_C.8.12.4.1.3",
                              "xrefstyle" : "select: label"
                           }
                        },
                        "). The values must be within the range 0.0\\0.0 to Total Pixel Matrix Columns\\Total Pixel Matrix Rows. MATRIX may be used only if the value of Referenced SOP Class UID (0008,1150) within Referenced Image Sequence (0008,1140) is 1.2.840.10008.5.1.4.1.1.77.1.6 (VL Whole Slide Microscopy Image)."
                     ]
                  ]
               ],
               "type" : "variablelist"
            },
            "Required if Bounding Box Top Left Hand Corner (0070,0010) or Bounding Box Bottom Right Hand Corner (0070,0011) is present."
         ],
         "mod_tables" : [
            "table_C.10-5"
         ]
      },
      "(fffa,fffa)[<0>](0400,0100)" : {
         "entity" : "Presentation State",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Digital Signature UID",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : "A UID that can be used to uniquely reference this signature."
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0015)" : {
         "desc" : [
            "Flag to indicate whether or not a visible indication (such as a line or arrow) of the relationship between the text and the anchor point is to be displayed.",
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "Y",
                     "yes"
                  ],
                  [
                     "N",
                     "no"
                  ]
               ]
            },
            "Required if Anchor Point (0070,0014) is present."
         ],
         "mod_tables" : [
            "table_C.10-5"
         ],
         "req" : "1C",
         "name" : "Anchor Point Visibility",
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)"
      },
      "(0070,0086)[<0>](0008,0081)" : {
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "mod_tables" : [
            "table_C.11.10-1",
            "table_10-12",
            "table_10-1"
         ],
         "req" : "3",
         "name" : "Institution Address",
         "entity" : "Presentation State",
         "module" : "Presentation State Identification",
         "usage" : "M"
      },
      "(0028,3000)[<0>](0028,3004)" : {
         "mod_tables" : [
            "table_C.11-1b"
         ],
         "desc" : [
            "Specifies the output values of this Modality LUT.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.11.1.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            "Required if the Modality LUT Sequence (0028,3000) is sent."
         ],
         "module" : "Modality LUT",
         "usage" : "C - Required if a Modality LUT is to be applied to referenced image(s)",
         "entity" : "Presentation State",
         "name" : "Modality LUT Type",
         "req" : "1C"
      },
      "(0008,1052)[<0>](0008,0082)" : {
         "req" : "1C",
         "name" : "Institution Code Sequence",
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ]
      },
      "(0038,0014)[<0>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "req" : "1C",
         "usage" : "U",
         "module" : "Patient Study",
         "entity" : "Study",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ]
      },
      "(0012,0063)" : {
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "De-identification Method",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "A description or label of the mechanism or method use to remove the patient's identity. May be multi-valued if successive de-identification steps have been performed.",
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
                                 "el" : "para",
                                 "content" : [
                                    "The characteristics of the de-identifying equipment and/or the responsible operator of that equipment may be recorded as an additional item of the Contributing Equipment Sequence (0018,A001) in the SOP Common Module. De-identifying equipment may use a Purpose of Reference of (109104,DCM,\"De-identifying Equipment\")."
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
            },
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method Code Sequence (0012,0064) is not present. May be present otherwise."
         ]
      },
      "(0008,1111)[<0>](0008,1150)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series",
         "req" : "1",
         "name" : "Referenced SOP Class UID"
      },
      "(0028,1101)" : {
         "mod_tables" : [
            "table_C.7-22a"
         ],
         "desc" : [
            "Specifies the format of the Red Palette Color Lookup Table Data (0028,1201). See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.6.3.1.5",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "entity" : "Presentation State",
         "usage" : "M",
         "module" : "Palette Color LUT",
         "name" : "Red Palette Color Lookup Table Descriptor",
         "req" : "1"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0231)[<2>](0070,0241)" : {
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "entity" : "Presentation State",
         "name" : "Text Color CIELab Value",
         "req" : "1",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "desc" : [
            [
               "A default color triplet value used to specify the text color in which it is recommended that the text be rendered on a color display. The units are specified in PCS-Values, and the value is encoded as CIELab. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.10.7.1.1"
                  }
               },
               "."
            ],
            "This value shall override the Graphic Layer Recommended Display CIELab Value (0070,0401)."
         ]
      },
      "(0018,a001)[<0>](0008,0080)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Institution where the equipment that contributed to the composite instance is located.",
         "entity" : "Presentation State",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Institution Name",
         "req" : "3"
      },
      "(0038,0010)" : {
         "entity" : "Study",
         "module" : "Patient Study",
         "usage" : "U",
         "req" : "3",
         "name" : "Admission ID",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Identifier of the visit as assigned by the healthcare provider"
      },
      "(0008,1250)[<0>](0020,000d)" : {
         "desc" : "Instance UID of Study to which the related Series belongs",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "req" : "1",
         "name" : "Study Instance UID",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series"
      },
      "(0008,1072)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : [
            "Identification of the operator(s) supporting the Series.",
            "One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Operators' Name (0008,1070), if present."
         ],
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series",
         "req" : "3",
         "name" : "Operator Identification Sequence"
      },
      "(0018,1200)" : {
         "name" : "Date of Last Calibration",
         "req" : "3",
         "entity" : "Equipment",
         "module" : "General Equipment",
         "usage" : "M",
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
         "mod_tables" : [
            "table_C.7-8"
         ]
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0022)" : {
         "name" : "Graphic Data",
         "req" : "1",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "entity" : "Presentation State",
         "desc" : [
            "Numerical data Items that specify this Compound Graphic (points, vectors and scalars).",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.10.5.1.3",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "mod_tables" : [
            "table_C.10-5"
         ]
      },
      "(0010,0024)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this sequence."
         ]
      },
      "(0010,2201)" : {
         "entity" : "Patient",
         "usage" : "M",
         "module" : "Patient",
         "req" : "1C",
         "name" : "Patient Species Description",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "The species of the patient.",
            "Required if the patient is an animal and if Patient Species Code Sequence (0010,2202) is not present. May be present otherwise."
         ]
      },
      "(0040,0260)" : {
         "req" : "3",
         "name" : "Performed Protocol Code Sequence",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "desc" : "Sequence describing the Protocol performed for this Procedure Step. One or more Items are permitted in this sequence.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0062,000b)" : {
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "req" : "1C",
         "name" : "Referenced Segment Number",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ]
      },
      "(0012,0083)" : {
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
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "name" : "Consent for Clinical Trial Use Sequence",
         "req" : "3",
         "entity" : "Study",
         "module" : "Clinical Trial Study",
         "usage" : "U"
      },
      "(60xx,0102)" : {
         "desc" : [
            "The value of this Attribute shall be 0.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "Formerly the standard described embedding the overlay data in the Image Pixel Data (7FE0,0010), in which case the value of this Attribute specified the bit in which the overlay was stored. This usage has been retired. See PS3.3-2004."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.9-2"
         ],
         "name" : "Overlay Bit Position",
         "req" : "1",
         "usage" : "C - Required if Overlay is to be applied to referenced image(s) or the Bitmap Display Shutter Module is present",
         "module" : "Overlay Plane",
         "entity" : "Presentation State"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0032)" : {
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "1C",
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise."
      },
      "(0008,1052)[<0>](0040,1101)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Person Identification Code Sequence",
         "req" : "1"
      },
      "(0008,0053)" : {
         "name" : "Query/Retrieve View",
         "req" : "1C",
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Presentation State",
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
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0020,0010)" : {
         "name" : "Study ID",
         "req" : "2",
         "usage" : "M",
         "module" : "General Study",
         "entity" : "Study",
         "desc" : "User or equipment generated Study identifier.",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0004)" : {
         "name" : "Anchor Point Annotation Units",
         "req" : "1C",
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "desc" : [
            "Units of measure for the axes of the text anchor point annotation.",
            "Enumerated Values for Anchor Point Annotation Units (0070,0004) are the same as for Bounding Box Annotation Units (0070,0003).",
            "Required if Anchor Point (0070,0014) is present."
         ],
         "mod_tables" : [
            "table_C.10-5"
         ]
      },
      "(0012,0083)[<0>](0012,0085)" : {
         "entity" : "Study",
         "module" : "Clinical Trial Study",
         "usage" : "U",
         "name" : "Consent for Distribution Flag",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-4b"
         ],
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
                     "content" : [
                        "Under some circumstances, consent may be withdrawn. The purpose of encoding this is to warn receiving systems that further distribution may not be appropriate, but no semantics are defined by the Standard for what action is appropriate under such circumstances, such as what to do with previously received images that had a value of YES."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ]
      },
      "(0070,0081)" : {
         "mod_tables" : [
            "table_C.11.10-1",
            "table_10-12"
         ],
         "desc" : "A description of the content of the SOP Instance.",
         "entity" : "Presentation State",
         "usage" : "M",
         "module" : "Presentation State Identification",
         "name" : "Content Description",
         "req" : "2"
      },
      "(0020,9172)[<0>](0008,1150)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Presentation State",
         "name" : "Referenced SOP Class UID",
         "req" : "1"
      },
      "(0012,0081)" : {
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "desc" : "Name of the Ethics Committee or Institutional Review Board (IRB) responsible for approval of the Clinical Trial. Required if Clinical Trial Protocol Ethics Committee Approval Number (0012,0082) is present.",
         "entity" : "Patient",
         "module" : "Clinical Trial Subject",
         "usage" : "U",
         "req" : "1C",
         "name" : "Clinical Trial Protocol Ethics Committee Name"
      },
      "(0070,005a)[<0>](0008,1140)[<1>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "entity" : "Presentation State",
         "module" : "Displayed Area",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.10-4",
            "table_10-3",
            "table_10-11"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)" : {
         "req" : "3",
         "name" : "Content Item Modifier Sequence",
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "desc" : [
            "Sequence that specifies modifiers for a Protocol Context Content Item. One or more Items are permitted in this sequence. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.4.10.1"
               },
               "el" : "xref"
            },
            "."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ]
      },
      "(0028,3000)[<0>](0028,3006)" : {
         "entity" : "Presentation State",
         "module" : "Modality LUT",
         "usage" : "C - Required if a Modality LUT is to be applied to referenced image(s)",
         "name" : "LUT Data",
         "req" : "1C",
         "mod_tables" : [
            "table_C.11-1b"
         ],
         "desc" : [
            "LUT Data in this Sequence.",
            "Required if the Modality LUT Sequence (0028,3000) is sent."
         ]
      },
      "(0028,3110)[<0>](0028,3010)" : {
         "mod_tables" : [
            "table_C.11.8-1",
            "table_C.11-2b"
         ],
         "desc" : [
            "Defines a sequence of VOI LUTs.",
            "One or more Items shall be included in this sequence.",
            "Required if Window Center (0028,1050) is not present. May be present otherwise."
         ],
         "entity" : "Presentation State",
         "module" : "Softcopy VOI LUT",
         "usage" : "C - Required if a VOI LUT is to be applied to referenced image(s)",
         "req" : "1C",
         "name" : "VOI LUT Sequence"
      },
      "(0028,0303)" : {
         "req" : "3",
         "name" : "Longitudinal Temporal Information Modified",
         "entity" : "Presentation State",
         "module" : "SOP Common",
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
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)[<2>](0070,0242)" : {
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "desc" : [
            [
               "Specifies the horizontal position of the text relative to the vertical edges of the bounding box. Horizontal Alignment shall override the Bounding Box Text Horizontal Justification (0070,0012) of the Text Object Sequence Item. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.10.5.1.3.12.1",
                     "xrefstyle" : "select: label"
                  }
               }
            ],
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "LEFT",
                     null
                  ],
                  [
                     "CENTER",
                     null
                  ],
                  [
                     "RIGHT",
                     null
                  ]
               ]
            },
            "Required if Bounding Box Top Left Hand Corner (0070,0010) is present."
         ],
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "name" : "Horizontal Alignment",
         "req" : "3"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0082)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Presentation State",
         "name" : "Institution Code Sequence",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0008,0081)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "desc" : "Mailing address of the institution where the equipment that produced the composite instances is located.",
         "module" : "General Equipment",
         "usage" : "M",
         "entity" : "Equipment",
         "req" : "3",
         "name" : "Institution Address"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0233)[<2>](0070,0256)" : {
         "desc" : [
            "A binary fill pattern. A set bit corresponds to foreground. An unset bit corresponds to background.",
            "A 128 byte value defining a 32x32 1 bit matrix. This fill pattern is replicated in tiles inside the boundaries of the graphic type.",
            "The most significant bit corresponds to the leftmost pixel in the row.",
            "The fill pattern relates to display pixels where one bit value corresponds to one display pixel.",
            "Required if Fill Mode (0070,0257) equals STIPPELED."
         ],
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5c"
         ],
         "name" : "Fill Pattern",
         "req" : "1C",
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)"
      },
      "(0040,0275)[<0>](0020,000d)" : {
         "name" : "Study Instance UID",
         "req" : "3",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "desc" : "The unique identifier for the Study provided for this Requested Procedure.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ]
      },
      "(0008,1010)" : {
         "desc" : "User defined name identifying the machine that produced the composite instances.",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Station Name",
         "req" : "3",
         "module" : "General Equipment",
         "usage" : "M",
         "entity" : "Equipment"
      },
      "(0040,0251)" : {
         "desc" : "Time at which the Performed Procedure Step ended.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "req" : "3",
         "name" : "Performed Procedure Step End Time",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M"
      },
      "(60xx,1303)" : {
         "req" : "3",
         "name" : "ROI Standard Deviation",
         "usage" : "C - Required if Overlay is to be applied to referenced image(s) or the Bitmap Display Shutter Module is present",
         "module" : "Overlay Plane",
         "entity" : "Presentation State",
         "desc" : [
            "ROI standard deviation.",
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
         ],
         "mod_tables" : [
            "table_C.9-2"
         ]
      },
      "(0008,0013)" : {
         "req" : "3",
         "name" : "Instance Creation Time",
         "entity" : "Presentation State",
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : [
            "Time the SOP Instance was created.",
            "This is the time that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0232)" : {
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "desc" : [
            "Sequence that describes the line style.",
            "Only a single item shall be included in this sequence."
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "entity" : "Presentation State",
         "name" : "Line Style Sequence",
         "req" : "3"
      },
      "(0040,a390)[<0>](0040,e001)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Presentation State",
         "name" : "HL7 Instance Identifier",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier)."
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0231)[<2>](0070,0248)" : {
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "desc" : [
            "Specifies whether or not the text shall be rendered underlined.",
            {
               "list" : [
                  [
                     "Y",
                     "yes"
                  ],
                  [
                     "N",
                     "no"
                  ]
               ],
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "name" : "Underlined",
         "req" : "1"
      },
      "(0040,a390)[<0>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Presentation State",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a163)" : {
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1C",
         "name" : "Rational Denominator Value",
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
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1155)" : {
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0232)[<2>](0070,0246)" : {
         "req" : "1",
         "name" : "Shadow Offset Y",
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "desc" : [
            "Floating point value that defines the shadow offset in Y direction in Graphic Annotation Units (0070,0005). See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.10.5.1.3.13.2"
               }
            },
            "."
         ],
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ]
      },
      "(0018,0015)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : [
            [
               "Text description of the part of the body examined. See ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "xrefstyle" : "template: Annex %n \u201c%t\u201d in PS3.16",
                     "targetptr" : "chapter_L",
                     "targetdoc" : "PS3.16"
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
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "req" : "3",
         "name" : "Body Part Examined"
      },
      "(0038,0014)[<0>](0040,0033)" : {
         "module" : "Patient Study",
         "usage" : "U",
         "entity" : "Study",
         "name" : "Universal Entity ID Type",
         "req" : "1C",
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
         ]
      },
      "(0008,1110)[<0>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "module" : "General Study",
         "usage" : "M",
         "entity" : "Study"
      },
      "(60xx,1500)" : {
         "mod_tables" : [
            "table_C.9-2"
         ],
         "desc" : "A user defined text string that may be used to label or name this overlay.",
         "module" : "Overlay Plane",
         "usage" : "C - Required if Overlay is to be applied to referenced image(s) or the Bitmap Display Shutter Module is present",
         "entity" : "Presentation State",
         "name" : "Overlay Label",
         "req" : "3"
      },
      "(0008,1049)[<0>](0008,0080)" : {
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Name",
         "req" : "1C",
         "entity" : "Study",
         "usage" : "M",
         "module" : "General Study"
      },
      "(0070,005a)[<0>](0048,0301)" : {
         "entity" : "Presentation State",
         "module" : "Displayed Area",
         "usage" : "M",
         "req" : "1C",
         "name" : "Pixel Origin Interpretation",
         "mod_tables" : [
            "table_C.10-4"
         ],
         "desc" : [
            [
               "For a referenced multi-frame image, specifies whether the Displayed Area Top Left Hand Corner (0070,0052) and Displayed Area Bottom Right Hand Corner (0070,0053) are to be interpreted relative to the individual frame pixel origins, or relative to the Total Pixel Matrix origin (see ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.12.4.1.4",
                     "xrefstyle" : "select: label"
                  }
               },
               ")."
            ],
            "Required if the value of Referenced SOP Class UID (0008,1150) within Referenced Image Sequence (0008,1140) is 1.2.840.10008.5.1.4.1.1.77.1.6 (VL Whole Slide Microscopy Image). May be present otherwise.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "FRAME",
                     "relative to individual frame"
                  ],
                  [
                     "VOLUME",
                     "relative to Total Image Matrix"
                  ]
               ],
               "title" : "Enumerated Values:"
            },
            "If not present, TLHC and BRHC are defined relative to the frame pixel origins."
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a040)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
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
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "name" : "Value Type",
         "req" : "1"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0005)" : {
         "desc" : [
            "Units of measure for the axes of the graphic annotation.",
            "Enumerated Values for Graphic Annotation Units (0070,0005) are the same as for Bounding Box Annotation Units (0070,0003)."
         ],
         "mod_tables" : [
            "table_C.10-5"
         ],
         "name" : "Graphic Annotation Units",
         "req" : "1",
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)"
      },
      "(0010,0200)" : {
         "name" : "Quality Control Subject",
         "req" : "3",
         "module" : "Patient",
         "usage" : "M",
         "entity" : "Patient",
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
            "This attribute describes a characteristic of the Imaging Subject. It is distinct from Quality Control Image (0028,0300) in the General Image Module, which is used to describe an image acquired."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0008,1052)[<0>](0040,1103)" : {
         "name" : "Person's Telephone Numbers",
         "req" : "3",
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "desc" : "Person's telephone number(s)",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ]
      },
      "(0070,005a)[<0>](0070,0102)" : {
         "mod_tables" : [
            "table_C.10-4"
         ],
         "desc" : [
            [
               "Ratio of the vertical size and the horizontal size of the pixels in the referenced image, to be used to display the referenced image, specified by a pair of integer values where the first value is the vertical pixel size and the second value is the horizontal pixel size. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.3.1.7",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ],
            "Required if Presentation Pixel Spacing (0070,0101) is not present.",
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
                                 "content" : [
                                    "This value may be different from the aspect ratio specified by Pixel Aspect Ratio (0028,0034) in the referenced image, or implied by the values of Pixel Spacing (0028,0030) or Imager Pixel Spacing (0018,1164) specified in the referenced image, which are ignored."
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
                                    "This value must be specified even if the aspect ratio is 1:1."
                                 ],
                                 "el" : "para"
                              },
                              "\n                    "
                           ]
                        },
                        "\n                  "
                     ],
                     "el" : "orderedlist"
                  },
                  "\n                "
               ]
            }
         ],
         "module" : "Displayed Area",
         "usage" : "M",
         "entity" : "Presentation State",
         "name" : "Presentation Pixel Aspect Ratio",
         "req" : "1C"
      },
      "(0008,0110)[<0>](0008,010c)" : {
         "name" : "Coding Scheme UID",
         "req" : "1C",
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Presentation State",
         "desc" : "The coding scheme UID identifier. Required if coding scheme is identified by an ISO 8824 object identifier compatible with the UI VR.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0100,0426)" : {
         "desc" : "The certification number issued to the Application Entity that set the SOP Instance Status (0100,0410) to AO.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "name" : "Authorization Equipment Certification Number",
         "entity" : "Presentation State",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a040)" : {
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
         "name" : "Value Type",
         "req" : "1",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M"
      },
      "(0400,0561)[<0>](0400,0562)" : {
         "entity" : "Presentation State",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Attribute Modification DateTime",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Date and time the attributes were removed and/or replaced."
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0233)[<2>](0070,0284)" : {
         "name" : "Pattern On Opacity",
         "req" : "1",
         "entity" : "Presentation State",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "desc" : "Encodes the foreground opacity. The value is encoded as floating point alpha value (0.0-1.0).",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5c"
         ]
      },
      "(0008,0015)" : {
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "name" : "Instance Coercion DateTime",
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Presentation State"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a161)" : {
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Floating Point Value",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ]
      },
      "(0028,6100)[<0>](0028,6114)" : {
         "name" : "Mask Sub-pixel Shift",
         "req" : "3",
         "module" : "Mask",
         "usage" : "C - Required if the referenced image(s) are multi-frame and are to be subtracted",
         "entity" : "Presentation State",
         "desc" : [
            [
               "A pair of floating point numbers specifying the fractional vertical [adjacent row spacing] and horizontal [adjacent column spacing] pixel shift applied to the mask before subtracting it from the contrast frame. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.10.1.2",
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
                        "When the Frame Pixel Shift Functional Group is present the values of the Mask Pixel Shift attribute of that Functional Group prevails over the values specified in this module."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.7-16"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a123)" : {
         "req" : "1C",
         "name" : "Person Name",
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0231)[<2>](0070,0229)" : {
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "desc" : "Generic font name as defined within CSS (Cascading Style Sheets). Default fontname, if the font specified in Font Name (0070,0227) is not present or can not be rendered.",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "entity" : "Presentation State",
         "req" : "1",
         "name" : "CSS Font Name"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a162)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series",
         "name" : "Rational Numerator Value",
         "req" : "1C"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0232)[<2>](0070,0255)" : {
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "desc" : [
            "Pattern that defines the line dashing style. The Line Pattern is a 32 bit value. If the bit inside the pattern is set to 1 the foreground color is drawn, else the background color is drawn.",
            {
               "content" : [
                  "\n                        ",
                  {
                     "content" : [
                        "For example, 00FFH defines the dashes with an equal size."
                     ],
                     "el" : "para"
                  },
                  "\n                      "
               ],
               "el" : "note"
            },
            "Required if Line Dashing Style (0070,0254) has a value of DASHED."
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "entity" : "Presentation State",
         "req" : "1C",
         "name" : "Line Pattern"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)[<2>](0070,0247)" : {
         "desc" : [
            "A color triplet value used to encode the Shadow Color. The units are specified in PCS-Values, and the value is encoded as CIELab. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.10.7.1.1"
               },
               "el" : "xref"
            },
            "."
         ],
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "name" : "Shadow Color CIELab Value",
         "req" : "1",
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "entity" : "Patient",
         "usage" : "M",
         "module" : "Patient",
         "req" : "1C",
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise."
      },
      "(0028,1223)" : {
         "mod_tables" : [
            "table_C.7-22a"
         ],
         "desc" : [
            "Segmented Blue Palette Color Lookup Table Data. Required if segmented data is used in an Image IOD; shall not be present in a Presentation State IOD or Color Palette IOD. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.9.2"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "entity" : "Presentation State",
         "module" : "Palette Color LUT",
         "usage" : "M",
         "name" : "Segmented Blue Palette Color Lookup Table Data",
         "req" : "1C"
      },
      "(0018,1030)" : {
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Protocol Name",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a"
         ],
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
         ]
      },
      "(0032,1034)" : {
         "module" : "General Study",
         "usage" : "M",
         "entity" : "Study",
         "req" : "3",
         "name" : "Requesting Service Code Sequence",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : [
            "Institutional department where the request initiated.",
            "Only a single item is permitted in this sequence."
         ]
      },
      "(0070,0234)" : {
         "req" : "1",
         "name" : "Graphic Group Sequence",
         "module" : "Graphic Group",
         "usage" : "U",
         "entity" : "Presentation State",
         "desc" : [
            "Sequence that describes the combined graphic object.",
            "One or more Items shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.10-12"
         ]
      },
      "(0010,2180)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Occupation of the Patient.",
         "module" : "Patient Study",
         "usage" : "U",
         "entity" : "Study",
         "name" : "Occupation",
         "req" : "3"
      },
      "(4ffe,0001)[<0>](0400,0020)" : {
         "name" : "Data Elements Signed",
         "req" : "1",
         "entity" : "Presentation State",
         "module" : "SOP Common",
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
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0028,1052)" : {
         "name" : "Rescale Intercept",
         "req" : "1C",
         "entity" : "Presentation State",
         "module" : "Modality LUT",
         "usage" : "C - Required if a Modality LUT is to be applied to referenced image(s)",
         "desc" : [
            "The value b in relationship between stored values (SV) and the output units specified in Rescale Type (0028,1054).",
            "Output units = m*SV + b.",
            "Required if Modality LUT Sequence (0028,3000) is not present. Shall not be present otherwise."
         ],
         "mod_tables" : [
            "table_C.11-1b"
         ]
      },
      "(0008,0110)[<0>](0008,0102)" : {
         "desc" : "The value of a Coding Scheme Designator, used in this SOP Instance, which is being mapped.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "name" : "Coding Scheme Designator",
         "entity" : "Presentation State",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(fffa,fffa)[<0>](0400,0310)" : {
         "req" : "3",
         "name" : "Certified Timestamp",
         "entity" : "Presentation State",
         "module" : "SOP Common",
         "usage" : "M",
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
         ]
      },
      "(0010,0040)" : {
         "module" : "Patient",
         "usage" : "M",
         "entity" : "Patient",
         "req" : "2",
         "name" : "Patient's Sex",
         "mod_tables" : [
            "table_C.7-1"
         ],
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
         ]
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0232)[<2>](0070,0244)" : {
         "desc" : [
            "The shadow style of the line to be displayed.",
            {
               "list" : [
                  [
                     "NORMAL",
                     "the shadow is drawn on 1 side of the contour of the text object"
                  ],
                  [
                     "OUTLINED",
                     "the shadow is drawn around the contour of the text object"
                  ],
                  [
                     "OFF",
                     "no shadow"
                  ]
               ],
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            },
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.10.5.1.3.13.2"
                  },
                  "el" : "xref"
               }
            ]
         ],
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "req" : "1",
         "name" : "Shadow Style",
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0233)[<2>](0070,0256)" : {
         "desc" : [
            "A binary fill pattern. A set bit corresponds to foreground. An unset bit corresponds to background.",
            "A 128 byte value defining a 32x32 1 bit matrix. This fill pattern is replicated in tiles inside the boundaries of the graphic type.",
            "The most significant bit corresponds to the leftmost pixel in the row.",
            "The fill pattern relates to display pixels where one bit value corresponds to one display pixel.",
            "Required if Fill Mode (0070,0257) equals STIPPELED."
         ],
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5c"
         ],
         "name" : "Fill Pattern",
         "req" : "1C",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "entity" : "Presentation State"
      },
      "(0040,0275)[<0>](0032,1060)" : {
         "req" : "3",
         "name" : "Requested Procedure Description",
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "desc" : "Institution-generated administrative description or classification of Requested Procedure.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a040)" : {
         "mod_tables" : [
            "table_C.7-5a",
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
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Value Type",
         "req" : "1"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1160)" : {
         "name" : "Referenced Frame Number",
         "req" : "1C",
         "module" : "General Series",
         "usage" : "M",
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
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0012,0062)" : {
         "name" : "Patient Identity Removed",
         "req" : "3",
         "entity" : "Patient",
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0070,0041)" : {
         "mod_tables" : [
            "table_C.10-6"
         ],
         "desc" : [
            "Whether or not to flip the image horizontally after any Image Rotation has been applied such that the left side of the image becomes the right side.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "Y",
                     "yes"
                  ],
                  [
                     "N",
                     "no"
                  ]
               ],
               "title" : "Enumerated Values:"
            },
            {
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "content" : [
                        "No vertical flip is specified since the same result can be achieved by a combination of a 180 degree rotation and a horizontal flip."
                     ]
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "module" : "Spatial Transformation",
         "usage" : "C - Required if rotation or flipping are to be applied to referenced image(s)",
         "entity" : "Presentation State",
         "name" : "Image Horizontal Flip",
         "req" : "1"
      },
      "(0010,2293)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
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
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Patient Breed Code Sequence",
         "req" : "2C"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a121)" : {
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "req" : "1C",
         "name" : "Date",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ]
      },
      "(0018,a001)[<0>](0008,1070)" : {
         "name" : "Operators' Name",
         "req" : "3",
         "entity" : "Presentation State",
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : "Name(s) of the operator(s) of the contributing equipment.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a043)" : {
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Concept Name Code Sequence",
         "req" : "1",
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0010,2294)" : {
         "desc" : [
            "Information identifying an animal within a breed registry.",
            "Zero or more Items shall be included in this sequence.",
            "Required if the patient is an animal."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "2C",
         "name" : "Breed Registration Sequence",
         "entity" : "Patient",
         "usage" : "M",
         "module" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,08ea)" : {
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
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Measurement Units Code Sequence",
         "req" : "1C"
      },
      "(60xx,0011)" : {
         "desc" : "Number of Columns in Overlay.",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "req" : "1",
         "name" : "Overlay Columns",
         "entity" : "Presentation State",
         "module" : "Overlay Plane",
         "usage" : "C - Required if Overlay is to be applied to referenced image(s) or the Bitmap Display Shutter Module is present"
      },
      "(0028,0109)" : {
         "name" : "Largest Pixel Value in Series",
         "req" : "3",
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "desc" : "The maximum value of all images in this Series.",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0080)" : {
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "name" : "Institution Name",
         "req" : "1C",
         "entity" : "Presentation State",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0232)[<2>](0070,0254)" : {
         "desc" : [
            "The dashing style of the line to be displayed.",
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "SOLID",
                     null
                  ],
                  [
                     "DASHED",
                     "Draws one part of the line with the Pattern On Color CIELab Value (0070,0251) and the other part with the Pattern Off Color CIELab Value (0070,0252)."
                  ]
               ],
               "type" : "variablelist"
            },
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.10.5.1.3.13.1"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "name" : "Line Dashing Style",
         "req" : "1",
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)"
      },
      "(0018,a001)[<0>](0040,a170)" : {
         "req" : "1",
         "name" : "Purpose of Reference Code Sequence",
         "entity" : "Presentation State",
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : [
            "Describes the purpose for which the related equipment is being reference.",
            "Only a single Item shall be included in this sequence.",
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
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,103e)" : {
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "name" : "Series Description",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : "Description of the Series"
      },
      "(0070,0060)[<0>](0070,0068)" : {
         "desc" : "A free text description of the contents of this layer.",
         "mod_tables" : [
            "table_C.10-7"
         ],
         "name" : "Graphic Layer Description",
         "req" : "3",
         "module" : "Graphic Layer",
         "usage" : "C - Required if Graphic Annotations or Overlays or Curves are to be applied to referenced image(s)",
         "entity" : "Presentation State"
      },
      "(0008,1062)[<0>](0040,1103)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Person's telephone number(s)",
         "usage" : "M",
         "module" : "General Study",
         "entity" : "Study",
         "name" : "Person's Telephone Numbers",
         "req" : "3"
      },
      "(0008,0201)" : {
         "req" : "3",
         "name" : "Timezone Offset From UTC",
         "entity" : "Presentation State",
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
                                 "el" : "para",
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
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,0016)" : {
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
         "name" : "SOP Class UID",
         "req" : "1",
         "entity" : "Presentation State",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0070,0087)[<0>](0008,0006)" : {
         "entity" : "Presentation State",
         "usage" : "M",
         "module" : "Presentation State Identification",
         "req" : "1",
         "name" : "Language Code Sequence",
         "mod_tables" : [
            "table_C.11.10-1",
            "table_10-12"
         ],
         "desc" : "The language in which Content Description (0070,0081) within this sequence item is written. A single Item shall be present."
      },
      "(0018,1610)" : {
         "desc" : "Required if Shutter Shape (0018,1600) is CIRCULAR. Location of the center of the circular shutter with respect to pixels in the image given as row and column.",
         "mod_tables" : [
            "table_C.7-17a"
         ],
         "name" : "Center of Circular Shutter",
         "req" : "1C",
         "module" : "Display Shutter",
         "usage" : "C - Required if a Display Shutter is to be applied to referenced image(s) and the Bitmap Display Shutter Module is not present",
         "entity" : "Presentation State"
      },
      "(0020,000d)" : {
         "name" : "Study Instance UID",
         "req" : "1",
         "module" : "General Study",
         "usage" : "M",
         "entity" : "Study",
         "desc" : "Unique identifier for the Study.",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0040,0275)[<0>](0040,0008)" : {
         "desc" : "Sequence describing the Scheduled Protocol following a specific coding scheme. One or more Items are permitted in this sequence.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "name" : "Scheduled Protocol Code Sequence",
         "req" : "3",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series"
      },
      "(0008,0018)" : {
         "name" : "SOP Instance UID",
         "req" : "1",
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Presentation State",
         "desc" : [
            "Uniquely identifies the SOP Instance. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.12.1.1.1"
               }
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
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0070,0234)[<0>](0070,0295)" : {
         "desc" : "A unique number identifying the Graphic Group, i.e., the combined graphic object.",
         "mod_tables" : [
            "table_C.10-12"
         ],
         "name" : "Graphic Group ID",
         "req" : "1",
         "entity" : "Presentation State",
         "usage" : "U",
         "module" : "Graphic Group"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0231)[<2>](0070,0247)" : {
         "desc" : [
            "A color triplet value used to encode the Shadow Color. The units are specified in PCS-Values, and the value is encoded as CIELab. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.10.7.1.1"
               },
               "el" : "xref"
            },
            "."
         ],
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "name" : "Shadow Color CIELab Value",
         "req" : "1",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "entity" : "Presentation State"
      },
      "(0010,2210)" : {
         "req" : "1C",
         "name" : "Anatomical Orientation Type",
         "module" : "General Series",
         "usage" : "M",
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
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)[<2>](0070,0249)" : {
         "desc" : [
            "Specifies whether or not the text shall be rendered in bold.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "Y",
                     "yes"
                  ],
                  [
                     "N",
                     "no"
                  ]
               ],
               "title" : "Enumerated Values:"
            }
         ],
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "name" : "Bold",
         "req" : "1",
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)"
      },
      "(fffa,fffa)[<0>](0400,0401)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : [
            "The purpose of this Digital Signature.",
            "Only a single Item is permitted in this sequence."
         ],
         "entity" : "Presentation State",
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Digital Signature Purpose Code Sequence",
         "req" : "3"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0226)" : {
         "mod_tables" : [
            "table_C.10-5"
         ],
         "desc" : [
            "A number that identifies the Compound Graphic described in this Item. The value shall be unique within this SOP instance.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.10.5.1.3.1",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ]
         ],
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "entity" : "Presentation State",
         "req" : "1",
         "name" : "Compound Graphic Instance ID"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0232)[<2>](0070,0253)" : {
         "desc" : "Specifies the line thickness. The dimension for this attribute is defined by Graphic Annotation Units (0070,0005) or Compound Graphic Units (0070,0282).",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "name" : "Line Thickness",
         "req" : "1",
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)"
      },
      "(0008,1048)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
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
         "module" : "General Study",
         "usage" : "M",
         "entity" : "Study",
         "req" : "3",
         "name" : "Physician(s) of Record"
      },
      "(0008,0110)" : {
         "desc" : [
            "Sequence of items that map values of Coding Scheme Designator (0008,0102) to an external coding system registration, or to a private or local coding scheme.",
            "One or more Items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "name" : "Coding Scheme Identification Sequence",
         "entity" : "Presentation State",
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0008,1072)[<0>](0008,0081)" : {
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "name" : "Institution Address",
         "req" : "3",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M"
      },
      "(0010,0024)[<0>](0040,003a)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
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
         "entity" : "Patient",
         "usage" : "M",
         "module" : "Patient",
         "name" : "Assigning Agency or Department Code Sequence",
         "req" : "3"
      },
      "(0012,0064)" : {
         "desc" : [
            "A code describing the mechanism or method use to remove the patient's identity.",
            "One or more Items shall be included in this sequence. Multiple items are used if successive de-identification steps have been performed or to describe options of a defined profile.",
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method (0012,0063) is not present. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "De-identification Method Code Sequence",
         "req" : "1C",
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0039)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "req" : "3",
         "name" : "Assigning Jurisdiction Code Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
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
         ]
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0232)[<2>](0070,0247)" : {
         "name" : "Shadow Color CIELab Value",
         "req" : "1",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "entity" : "Presentation State",
         "desc" : [
            "A color triplet value used to encode the Shadow Color. The units are specified in PCS-Values, and the value is encoded as CIELab. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.10.7.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ]
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)[<2>](0070,0227)" : {
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "3",
         "name" : "Font Name",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "desc" : "Font name in a standard type."
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)[<2>](0070,0245)" : {
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "desc" : [
            "Floating point value that defines the shadow offset in X direction in Anchor Point Annotation Units (0070,0004) if used in Text Object Sequence Item or in Graphic Annotation Units (0070,0005) if used in Graphic Object Sequence Item. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.10.5.1.3.13.1",
                  "xrefstyle" : "select: label"
               }
            }
         ],
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "name" : "Shadow Offset X",
         "req" : "1"
      },
      "(0008,1049)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : [
            "Identification of the physician(s) who are responsible for overall patient care at time of Study.",
            "One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Physician(s) of Record (0008,1048), if present."
         ],
         "usage" : "M",
         "module" : "General Study",
         "entity" : "Study",
         "req" : "3",
         "name" : "Physician(s) of Record Identification Sequence"
      },
      "(0010,0030)" : {
         "req" : "2",
         "name" : "Patient's Birth Date",
         "module" : "Patient",
         "usage" : "M",
         "entity" : "Patient",
         "desc" : "Birth date of the patient.",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0232)[<2>](0070,0285)" : {
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "name" : "Pattern Off Opacity",
         "req" : "3",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "desc" : "Encodes the background opacity. The value is encoded as floating point alpha value (0.0-1.0)."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a30a)" : {
         "name" : "Numeric Value",
         "req" : "1C",
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0028,3110)[<0>](0008,1140)[<1>](0008,1160)" : {
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
         "mod_tables" : [
            "table_C.11.8-1",
            "table_10-3"
         ],
         "name" : "Referenced Frame Number",
         "req" : "1C",
         "entity" : "Presentation State",
         "usage" : "C - Required if a VOI LUT is to be applied to referenced image(s)",
         "module" : "Softcopy VOI LUT"
      },
      "(0040,0275)[<0>](0008,1110)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
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
         "module" : "General Series",
         "usage" : "M",
         "req" : "3",
         "name" : "Referenced Study Sequence"
      },
      "(0018,1604)" : {
         "mod_tables" : [
            "table_C.7-17a"
         ],
         "desc" : "Required if Shutter Shape (0018,1600) is RECTANGULAR. Location of the right edge of the rectangular shutter with respect to pixels in the image given as column.",
         "module" : "Display Shutter",
         "usage" : "C - Required if a Display Shutter is to be applied to referenced image(s) and the Bitmap Display Shutter Module is not present",
         "entity" : "Presentation State",
         "name" : "Shutter Right Vertical Edge",
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1150)" : {
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0035)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "name" : "Identifier Type Code",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
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
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0279)" : {
         "name" : "Tick Label Alignment",
         "req" : "1C",
         "entity" : "Presentation State",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "desc" : [
            "The alignment of the label with respect to the tick.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "BOTTOM",
                     null
                  ],
                  [
                     "TOP",
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
                     "linkend" : "sect_C.10.5.1.3"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Required if Compound Graphic Type (0070,0294) equals RULER, AXIS. or CROSSHAIR."
         ],
         "mod_tables" : [
            "table_C.10-5"
         ]
      },
      "(0018,a001)[<0>](0018,1050)" : {
         "name" : "Spatial Resolution",
         "req" : "3",
         "entity" : "Presentation State",
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,1049)[<0>](0040,1102)" : {
         "desc" : "Person's mailing address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "3",
         "name" : "Person's Address",
         "module" : "General Study",
         "usage" : "M",
         "entity" : "Study"
      },
      "(0008,1072)[<0>](0040,1103)" : {
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series",
         "name" : "Person's Telephone Numbers",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "desc" : "Person's telephone number(s)"
      },
      "(0070,0086)[<0>](0040,1103)" : {
         "usage" : "M",
         "module" : "Presentation State Identification",
         "entity" : "Presentation State",
         "req" : "3",
         "name" : "Person's Telephone Numbers",
         "mod_tables" : [
            "table_C.11.10-1",
            "table_10-12",
            "table_10-1"
         ],
         "desc" : "Person's telephone number(s)"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a043)" : {
         "name" : "Concept Name Code Sequence",
         "req" : "1",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0028,1103)" : {
         "desc" : [
            "Specifies the format of the Blue Palette Color Lookup table Data (0028,1203). See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.3.1.5"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "mod_tables" : [
            "table_C.7-22a"
         ],
         "req" : "1",
         "name" : "Blue Palette Color Lookup Table Descriptor",
         "usage" : "M",
         "module" : "Palette Color LUT",
         "entity" : "Presentation State"
      },
      "(0018,a001)[<0>](0008,0081)" : {
         "desc" : "Address of the institution where the equipment that contributed to the composite instance is located.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Institution Address",
         "req" : "3",
         "entity" : "Presentation State",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0070,005a)[<0>](0008,1140)" : {
         "entity" : "Presentation State",
         "usage" : "M",
         "module" : "Displayed Area",
         "name" : "Referenced Image Sequence",
         "req" : "1C",
         "mod_tables" : [
            "table_C.10-4"
         ],
         "desc" : [
            "The subset of images and frames listed in the Presentation State Relationship Module, to which this displayed area selection applies.",
            "One or more Items shall be included in this sequence.",
            "Required if the displayed area selection in this Item does not apply to all the images and frames listed in the Presentation State Relationship Module."
         ]
      },
      "(0038,0064)[<0>](0040,0031)" : {
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "Study",
         "module" : "Patient Study",
         "usage" : "U",
         "name" : "Local Namespace Entity ID",
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a120)" : {
         "req" : "1C",
         "name" : "DateTime",
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0031)" : {
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Local Namespace Entity ID",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise."
      },
      "(0070,0087)" : {
         "module" : "Presentation State Identification",
         "usage" : "M",
         "entity" : "Presentation State",
         "name" : "Alternate Content Description Sequence",
         "req" : "3",
         "mod_tables" : [
            "table_C.11.10-1",
            "table_10-12"
         ],
         "desc" : [
            "A sequence containing alternate descriptions suitable for presentation to the user, e.g., in different languages. One or more Items are permitted in this sequence.",
            {
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "The values of Specific Character Set for the entire Data set need to be sufficient to encode all Items of this sequence correctly, e.g., using a single value with broad support such as UTF-8, or multiple values with escape sequences."
                     ],
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ]
      },
      "(0040,0275)" : {
         "desc" : [
            "Sequence that contains attributes from the Imaging Service Request.",
            "One or more Items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Request Attributes Sequence",
         "req" : "3",
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series"
      },
      "(0010,1030)" : {
         "req" : "3",
         "name" : "Patient's Weight",
         "entity" : "Study",
         "module" : "Patient Study",
         "usage" : "U",
         "desc" : "Weight of the Patient, in kilograms.",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0010,2202)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "The species of the patient.",
            "Only a single Item shall be included in this sequence.",
            "Required if the patient is an animal and if Patient Species Description (0010,2201) is not present. May be present otherwise."
         ],
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Patient Species Code Sequence",
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a121)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1C",
         "name" : "Date"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0232)[<2>](0070,0255)" : {
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "desc" : [
            "Pattern that defines the line dashing style. The Line Pattern is a 32 bit value. If the bit inside the pattern is set to 1 the foreground color is drawn, else the background color is drawn.",
            {
               "content" : [
                  "\n                        ",
                  {
                     "el" : "para",
                     "content" : [
                        "For example, 00FFH defines the dashes with an equal size."
                     ]
                  },
                  "\n                      "
               ],
               "el" : "note"
            },
            "Required if Line Dashing Style (0070,0254) has a value of DASHED."
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "entity" : "Presentation State",
         "req" : "1C",
         "name" : "Line Pattern"
      },
      "(0070,0001)[<0>](0070,0002)" : {
         "desc" : [
            "The layer defined in the Graphic Layer Module ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.10.7"
               }
            },
            " in which the graphics or text is to be rendered."
         ],
         "mod_tables" : [
            "table_C.10-5"
         ],
         "name" : "Graphic Layer",
         "req" : "1",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "entity" : "Presentation State"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)" : {
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "req" : "1C",
         "name" : "Referenced SOP Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a120)" : {
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "req" : "1C",
         "name" : "DateTime",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1160)" : {
         "req" : "1C",
         "name" : "Referenced Frame Number",
         "entity" : "Series",
         "usage" : "M",
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
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,003a)" : {
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Assigning Agency or Department Code Sequence",
         "req" : "3",
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient"
      },
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
         "name" : "Floating Point Value",
         "req" : "1C",
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series"
      },
      "(0008,1060)" : {
         "module" : "General Study",
         "usage" : "M",
         "entity" : "Study",
         "req" : "3",
         "name" : "Name of Physician(s) Reading Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "Names of the physician(s) reading the Study."
      },
      "(0010,0024)[<0>](0040,0035)" : {
         "name" : "Identifier Type Code",
         "req" : "3",
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0287)[<2>](0070,0289)" : {
         "desc" : "The label of the tick.",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "name" : "Tick Label",
         "req" : "1",
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a30a)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "req" : "1C",
         "name" : "Numeric Value"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0021)" : {
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "name" : "Number of Graphic Points",
         "req" : "1",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "desc" : "Number of data Items, e.g., points, in this Compound Graphic."
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0024)" : {
         "name" : "Graphic Filled",
         "req" : "1C",
         "entity" : "Presentation State",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "desc" : [
            "Indicates whether or not the Compound Graphics is displayed as filled.",
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "Y",
                     "yes"
                  ],
                  [
                     "N",
                     "no"
                  ]
               ]
            },
            "Required if Compound Graphic Type (0070,0294) equals RECTANGLE or ELLIPSE."
         ],
         "mod_tables" : [
            "table_C.10-5"
         ]
      },
      "(0012,0030)" : {
         "mod_tables" : [
            "table_C.7-2b"
         ],
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
         "usage" : "U",
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
         "req" : "2",
         "name" : "Clinical Trial Site ID"
      },
      "(0008,1250)[<0>](0040,a170)" : {
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "Zero or more Items shall be included in this sequence.",
            "When absent, implies that the reason for the reference is unknown."
         ],
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Purpose of Reference Code Sequence",
         "req" : "2",
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0020)" : {
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "name" : "Graphic Dimensions",
         "req" : "1",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "desc" : {
            "type" : "variablelist",
            "list" : [
               [
                  "2",
                  null
               ]
            ],
            "title" : "Enumerated Values:"
         }
      },
      "(0008,0050)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "A RIS generated number that identifies the order for the Study.",
         "entity" : "Study",
         "usage" : "M",
         "module" : "General Study",
         "req" : "2",
         "name" : "Accession Number"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a124)" : {
         "name" : "UID",
         "req" : "1C",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0014)" : {
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "entity" : "Presentation State",
         "req" : "1C",
         "name" : "Anchor Point",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "desc" : [
            "Location of a point in the image or Specified Displayed Area to which the Unformatted Text Value (0070,0006) is related, in Anchor Point Annotation Units (0070,0004), given as column\\row. Column is the horizontal offset and row is the vertical offset.",
            "Required if Bounding Box Top Left Hand Corner (0070,0010) and Bounding Box Bottom Right Hand Corner (0070,0011) are not present. May be present otherwise."
         ]
      },
      "(0010,1002)[<0>](0010,0020)" : {
         "req" : "1",
         "name" : "Patient ID",
         "module" : "Patient",
         "usage" : "M",
         "entity" : "Patient",
         "desc" : "An identification number or code used to identify the patient.",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0233)[<2>](0070,0251)" : {
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5c"
         ],
         "desc" : [
            [
               "A color triplet value used to encode the foreground color. The units are specified in PCS-Values, and the value is encoded as CIELab. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.10.7.1.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "This value shall override the Graphic Layer Recommended Display CIELab Value (0070,0401)."
         ],
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "entity" : "Presentation State",
         "name" : "Pattern On Color CIELab Value",
         "req" : "1"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a168)" : {
         "name" : "Concept Code Sequence",
         "req" : "1C",
         "module" : "General Series",
         "usage" : "M",
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
      "(0010,1000)" : {
         "name" : "Other Patient IDs",
         "req" : "3",
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "desc" : "Other identification numbers or codes used to identify the patient.",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0070,005a)[<0>](0070,0053)" : {
         "mod_tables" : [
            "table_C.10-4"
         ],
         "desc" : [
            "The bottom right (after spatial transformation) pixel in the referenced image to be displayed, given as column\\row. Column is the horizontal (before spatial transformation) offset (X) and row is the vertical (before spatial transformation) offset (Y) relative to the origin of the pixel data before spatial transformation, which is 1\\1. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "figure_C.10.4-1"
               }
            },
            "."
         ],
         "entity" : "Presentation State",
         "module" : "Displayed Area",
         "usage" : "M",
         "req" : "1",
         "name" : "Displayed Area Bottom Right Hand Corner"
      },
      "(4ffe,0001)[<0>](0400,0005)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Presentation State",
         "name" : "MAC ID Number",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : "A number, unique within this SOP Instance, used to identify this MAC Parameters Sequence (4FFE,0001) item from an Item of the Digital Signatures Sequence (FFFA,FFFA)."
      },
      "(0040,0275)[<0>](0040,100a)" : {
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Reason for Requested Procedure Code Sequence",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "desc" : [
            "Coded Reason for requesting this procedure.",
            "One or more Items are permitted in this sequence."
         ]
      },
      "(0400,0561)[<0>](0400,0550)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Sequence that contains all the Attributes, with their previous values, that were modified or removed from the main data set.",
            "Only a single Item shall be included in this sequence."
         ],
         "entity" : "Presentation State",
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "1",
         "name" : "Modified Attributes Sequence"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a168)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Concept Code Sequence",
         "req" : "1C"
      },
      "(0028,1053)" : {
         "desc" : [
            "m in the equation specified by Rescale Intercept (0028,1052).",
            "Required if Rescale Intercept is present."
         ],
         "mod_tables" : [
            "table_C.11-1b"
         ],
         "name" : "Rescale Slope",
         "req" : "1C",
         "entity" : "Presentation State",
         "module" : "Modality LUT",
         "usage" : "C - Required if a Modality LUT is to be applied to referenced image(s)"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a122)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Time",
         "req" : "1C"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "req" : "1C",
         "name" : "Universal Entity ID",
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0231)[<2>](0070,0227)" : {
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "desc" : "Font name in a standard type.",
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "name" : "Font Name",
         "req" : "3"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)[<2>](0070,0243)" : {
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "entity" : "Presentation State",
         "name" : "Vertical Alignment",
         "req" : "3",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "desc" : [
            [
               "Specifies the vertical position of the text relative to the horizontal edges of the bounding box. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.10.5.1.3.12.1",
                     "xrefstyle" : "select: label"
                  }
               }
            ],
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "TOP",
                     null
                  ],
                  [
                     "CENTER",
                     null
                  ],
                  [
                     "BOTTOM",
                     null
                  ]
               ],
               "type" : "variablelist"
            },
            "Required if Bounding Box Top Left Hand Corner (0070,0010) is present."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a162)" : {
         "name" : "Rational Numerator Value",
         "req" : "1C",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0040,a390)[<0>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Presentation State"
      },
      "(0008,1062)" : {
         "desc" : "Identification of the physician(s) reading the Study. One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Name of Physician(s) Reading Study (0008,1060), if present.",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "3",
         "name" : "Physician(s) Reading Study Identification Sequence",
         "usage" : "M",
         "module" : "General Study",
         "entity" : "Study"
      },
      "(0028,1203)" : {
         "mod_tables" : [
            "table_C.7-22a"
         ],
         "desc" : [
            "Blue Palette Color Lookup Table Data. Required if segmented data is NOT used in an Image IOD, or if the IOD is a Presentation State IOD or Color Palette IOD. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.6.3.1.6",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "entity" : "Presentation State",
         "module" : "Palette Color LUT",
         "usage" : "M",
         "name" : "Blue Palette Color Lookup Table Data",
         "req" : "1C"
      },
      "(0400,0561)[<0>](0400,0565)" : {
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Reason for the Attribute Modification",
         "req" : "1",
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Presentation State"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0033)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "name" : "Universal Entity ID Type",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1",
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
         ]
      },
      "(0018,1622)" : [
         {
            "desc" : [
               "A single grayscale unsigned value used to replace those parts of the image occluded by the shutter, when rendered on a monochrome display. The units are specified in P-Values.",
               "Required if the Display Shutter Module or Bitmap Display Shutter Module is present.",
               {
                  "content" : [
                     "\n                  ",
                     {
                        "content" : [
                           "The requirement in this module is type 1C, which overrides the type 3 in the Display Shutter Module."
                        ],
                        "el" : "para"
                     },
                     "\n                "
                  ],
                  "el" : "note"
               }
            ],
            "mod_tables" : [
               "table_C.11.12-1"
            ],
            "name" : "Shutter Presentation Value",
            "req" : "1C",
            "module" : "Presentation State Shutter",
            "usage" : "M",
            "entity" : "Presentation State"
         },
         {
            "name" : "Shutter Presentation Value",
            "req" : "3",
            "module" : "Display Shutter",
            "usage" : "C - Required if a Display Shutter is to be applied to referenced image(s) and the Bitmap Display Shutter Module is not present",
            "entity" : "Presentation State",
            "desc" : [
               "A single gray unsigned value used to replace those parts of the image occluded by the shutter, when rendered on a monochrome display. The units are specified in P-Values, from a minimum of 0000H (black) up to a maximum of FFFFH (white).",
               {
                  "content" : [
                     "\n                    ",
                     {
                        "el" : "para",
                        "content" : [
                           "The maximum P-Value for this Attribute may be different from the maximum P-Value from the output of the Presentation LUT, which may be less than 16 bits in depth."
                        ]
                     },
                     "\n                  "
                  ],
                  "el" : "note"
               }
            ],
            "mod_tables" : [
               "table_C.7-17a"
            ]
         },
         {
            "req" : "1",
            "name" : "Shutter Presentation Value",
            "entity" : "Presentation State",
            "module" : "Bitmap Display Shutter",
            "usage" : "C - Required if a Display Shutter is to be applied to referenced image(s) and the Display Shutter Module is not present",
            "desc" : [
               "A single gray unsigned value used to replace those parts of the image occluded by the shutter, when rendered on a monochrome display. The units are specified in P-Values, from a minimum of 0000H (black) up to a maximum of FFFFH (white).",
               {
                  "content" : [
                     "\n                    ",
                     {
                        "content" : [
                           "The maximum P-Value for this Attribute may be different from the maximum P-Value from the output of the Presentation LUT, which may be less than 16 bits in depth."
                        ],
                        "el" : "para"
                     },
                     "\n                  "
                  ],
                  "el" : "note"
               }
            ],
            "mod_tables" : [
               "table_C.7.6.15-1"
            ]
         }
      ],
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0232)[<2>](0070,0258)" : {
         "entity" : "Presentation State",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "req" : "1",
         "name" : "Shadow Opacity",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "desc" : "Encodes the shadow opacity. The value is encoded as floating point alpha value (0.0-1.0)."
      },
      "(0070,005a)[<0>](0070,0101)" : {
         "desc" : [
            [
               "Physical distance between the center of each pixel in the referenced image (before spatial transformation), specified by a numeric pair - adjacent row spacing (delimiter) adjacent column spacing in mm. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_10.7.1.3",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation of the value order."
            ],
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "\n                    ",
                        {
                           "content" : [
                              "\n                      ",
                              {
                                 "el" : "para",
                                 "content" : [
                                    "This value may be different from Pixel Spacing (0028,0030) or Imager Pixel Spacing (0018,1164) specified in the referenced image, which are ignored, since some form of calibration may have been performed (for example by reference to an object of known size in the image)."
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
                                    "If the row and column spacing are different, then the pixel aspect ratio of the image is not 1:1."
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
                     },
                     "el" : "orderedlist"
                  },
                  "\n                "
               ]
            },
            "Required if Presentation Size Mode (0070,0100) is TRUE SIZE, in which case the values will correspond to the physical distance between the center of each pixel on the display device.",
            "May be present if Presentation Size Mode (0070,0100) is SCALE TO FIT or MAGNIFY, in which case the values are used to compute the aspect ratio of the image pixels."
         ],
         "mod_tables" : [
            "table_C.10-4"
         ],
         "req" : "1C",
         "name" : "Presentation Pixel Spacing",
         "entity" : "Presentation State",
         "usage" : "M",
         "module" : "Displayed Area"
      },
      "(0028,3110)[<0>](0028,1056)" : {
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
               "title" : "Defined Terms:",
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
         "mod_tables" : [
            "table_C.11.8-1",
            "table_C.11-2b"
         ],
         "req" : "3",
         "name" : "VOI LUT Function",
         "entity" : "Presentation State",
         "module" : "Softcopy VOI LUT",
         "usage" : "C - Required if a VOI LUT is to be applied to referenced image(s)"
      },
      "(0070,0001)[<0>](0008,1140)[<1>](0062,000b)" : {
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "name" : "Referenced Segment Number",
         "req" : "1C",
         "mod_tables" : [
            "table_C.10-5",
            "table_10-3"
         ],
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ]
      },
      "(0020,0060)" : {
         "name" : "Laterality",
         "req" : "2C",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
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
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0028,1199)" : {
         "desc" : [
            "Palette Color Lookup Table UID. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.9.1",
                  "xrefstyle" : "select: label"
               }
            },
            " for further explanation."
         ],
         "mod_tables" : [
            "table_C.7-22a"
         ],
         "req" : "3",
         "name" : "Palette Color Lookup Table UID",
         "entity" : "Presentation State",
         "usage" : "M",
         "module" : "Palette Color LUT"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0032)" : {
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "req" : "1C",
         "name" : "Universal Entity ID",
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series"
      },
      "(0008,1120)[<0>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ]
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0230)" : {
         "name" : "Rotation Angle",
         "req" : "3",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "entity" : "Presentation State",
         "desc" : [
            "The rotation of this Compound Graphic in degrees. Value shall be in degrees, between 0 and 360.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.10.5.1.3",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ]
         ],
         "mod_tables" : [
            "table_C.10-5"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a163)" : {
         "name" : "Rational Denominator Value",
         "req" : "1C",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
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
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1150)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series",
         "req" : "1",
         "name" : "Referenced SOP Class UID"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "req" : "1C",
         "module" : "Patient",
         "usage" : "M",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a123)" : {
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "name" : "Person Name",
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0008,0021)" : {
         "desc" : "Date the Series started.",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "req" : "3",
         "name" : "Series Date",
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series"
      },
      "(0008,1072)[<0>](0040,1102)" : {
         "req" : "3",
         "name" : "Person's Address",
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "desc" : "Person's mailing address",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ]
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0020)" : {
         "name" : "Graphic Dimensions",
         "req" : "1",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "entity" : "Presentation State",
         "desc" : {
            "title" : "Enumerated Values:",
            "list" : [
               [
                  "2",
                  null
               ]
            ],
            "type" : "variablelist"
         },
         "mod_tables" : [
            "table_C.10-5"
         ]
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0274)" : {
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "entity" : "Presentation State",
         "name" : "Tick Alignment",
         "req" : "1C",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "desc" : [
            "The alignment of the ticks with respect to the line.",
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "BOTTOM",
                     null
                  ],
                  [
                     "CENTER",
                     null
                  ],
                  [
                     "TOP",
                     null
                  ]
               ]
            },
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.10.5.1.3"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Required if Compound Graphic Type (0070,0294) equals RULER, AXIS or CROSSHAIR."
         ]
      },
      "(0400,0561)[<0>](0400,0564)" : {
         "desc" : "The source that provided the SOP Instance prior to the removal or replacement of the values. For example, this might be the Institution from which imported SOP Instances were received.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "2",
         "name" : "Source of Previous Values",
         "entity" : "Presentation State",
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0008,1049)[<0>](0040,1101)" : {
         "req" : "1",
         "name" : "Person Identification Code Sequence",
         "module" : "General Study",
         "usage" : "M",
         "entity" : "Study",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0018,a001)[<0>](0018,1020)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Presentation State",
         "name" : "Software Versions",
         "req" : "3"
      },
      "(0008,0096)[<0>](0040,1103)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Person's telephone number(s)",
         "module" : "General Study",
         "usage" : "M",
         "entity" : "Study",
         "req" : "3",
         "name" : "Person's Telephone Numbers"
      },
      "(0020,0011)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : "A number that identifies this Series.",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series",
         "name" : "Series Number",
         "req" : "2"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)" : {
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
         "req" : "1C",
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0231)[<2>](0070,0246)" : {
         "desc" : [
            "Floating point value that defines the shadow offset in Y direction in Anchor Point Annotation Units (0070,0004) if used in Text Object Sequence Item or in Graphic Annotation Units (0070,0005) if used in Graphic Object Sequence Item. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.10.5.1.3.13.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            }
         ],
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "req" : "1",
         "name" : "Shadow Offset Y",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "entity" : "Presentation State"
      },
      "(0070,005a)[<0>](0070,0100)" : {
         "usage" : "M",
         "module" : "Displayed Area",
         "entity" : "Presentation State",
         "name" : "Presentation Size Mode",
         "req" : "1",
         "mod_tables" : [
            "table_C.10-4"
         ],
         "desc" : [
            "Manner of selection of display size.",
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "SCALE TO FIT",
                     null
                  ],
                  [
                     "TRUE SIZE",
                     null
                  ],
                  [
                     "MAGNIFY",
                     null
                  ]
               ]
            },
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.10.4"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ]
      },
      "(0018,1624)" : [
         {
            "req" : "1C",
            "name" : "Shutter Presentation Color CIELab Value",
            "usage" : "M",
            "module" : "Presentation State Shutter",
            "entity" : "Presentation State",
            "desc" : [
               [
                  "A color triplet value used to replace those parts of the image occluded by the shutter, when rendered on a color display. The units are specified in PCS-Values, and the value is encoded as CIELab. See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.10.7.1.1"
                     }
                  },
                  "."
               ],
               "Required if the Display Shutter Module or Bitmap Display Shutter Module is present and the SOP Class is other than Grayscale Softcopy Presentation State Storage.",
               {
                  "content" : [
                     "\n                  ",
                     {
                        "el" : "para",
                        "content" : [
                           "The requirement in this module is type 1C, which overrides the type 3 in the Display Shutter and Bitmap Display Shutter Modules."
                        ]
                     },
                     "\n                "
                  ],
                  "el" : "note"
               }
            ],
            "mod_tables" : [
               "table_C.11.12-1"
            ]
         },
         {
            "desc" : [
               "A color triplet value used to replace those parts of the image occluded by the shutter, when rendered on a color display. The units are specified in PCS-Values, and the value is encoded as CIELab. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.10.7.1.1",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ],
            "mod_tables" : [
               "table_C.7-17a"
            ],
            "req" : "3",
            "name" : "Shutter Presentation Color CIELab Value",
            "entity" : "Presentation State",
            "module" : "Display Shutter",
            "usage" : "C - Required if a Display Shutter is to be applied to referenced image(s) and the Bitmap Display Shutter Module is not present"
         },
         {
            "name" : "Shutter Presentation Color CIELab Value",
            "req" : "3",
            "entity" : "Presentation State",
            "usage" : "C - Required if a Display Shutter is to be applied to referenced image(s) and the Display Shutter Module is not present",
            "module" : "Bitmap Display Shutter",
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
            "mod_tables" : [
               "table_C.7.6.15-1"
            ]
         }
      ],
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0233)[<2>](0070,0251)" : {
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "name" : "Pattern On Color CIELab Value",
         "req" : "1",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5c"
         ],
         "desc" : [
            [
               "A color triplet value used to encode the foreground color. The units are specified in PCS-Values, and the value is encoded as CIELab. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.10.7.1.1"
                  }
               },
               "."
            ],
            "This value shall override the Graphic Layer Recommended Display CIELab Value (0070,0401)."
         ]
      },
      "(0008,0096)[<0>](0008,0080)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "entity" : "Study",
         "module" : "General Study",
         "usage" : "M",
         "req" : "1C",
         "name" : "Institution Name"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0022)" : {
         "mod_tables" : [
            "table_C.10-5"
         ],
         "desc" : [
            "Coordinates that specify this graphic annotation.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.10.5.1.2"
                  }
               },
               " for further explanation."
            ]
         ],
         "entity" : "Presentation State",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "name" : "Graphic Data",
         "req" : "1"
      },
      "(0012,0010)" : {
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
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "name" : "Clinical Trial Sponsor Name",
         "req" : "1",
         "entity" : "Patient",
         "module" : "Clinical Trial Subject",
         "usage" : "U"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)[<2>](0070,0244)" : {
         "name" : "Shadow Style",
         "req" : "1",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "entity" : "Presentation State",
         "desc" : [
            "The shadow style of the text to be displayed.",
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "NORMAL",
                     "the shadow is drawn on 1 side of the contour of the text object"
                  ],
                  [
                     "OUTLINED",
                     "the shadow is drawn around the contour of the text object"
                  ],
                  [
                     "OFF",
                     "no shadow"
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
                     "linkend" : "sect_C.10.5.1.3.13.1"
                  }
               }
            ]
         ],
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ]
      },
      "(0028,3110)" : {
         "desc" : [
            "Defines a sequence of VOI LUTs or Window Centers and Widths and to which images and frames they apply.",
            "No more than one VOI LUT Sequence containing a single Item or one pair of Window Center/Width values shall be specified for each image or frame.",
            "One or more Items shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.11.8-1"
         ],
         "name" : "Softcopy VOI LUT Sequence",
         "req" : "1",
         "entity" : "Presentation State",
         "usage" : "C - Required if a VOI LUT is to be applied to referenced image(s)",
         "module" : "Softcopy VOI LUT"
      },
      "(0008,1072)[<0>](0040,1101)" : {
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series",
         "req" : "1",
         "name" : "Person Identification Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(4ffe,0001)[<0>](0400,0010)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
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
         "usage" : "M",
         "entity" : "Presentation State",
         "name" : "MAC Calculation Transfer Syntax UID",
         "req" : "1"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0294)" : {
         "mod_tables" : [
            "table_C.10-5"
         ],
         "desc" : [
            "The shape of this Compound Graphic.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.10.5.1.3"
                  },
                  "el" : "xref"
               },
               "."
            ],
            {
               "title" : "Defined Terms:",
               "list" : [
                  [
                     "MULTILINE",
                     null
                  ],
                  [
                     "INFINITELINE",
                     null
                  ],
                  [
                     "CUTLINE",
                     null
                  ],
                  [
                     "RANGELINE",
                     null
                  ],
                  [
                     "RULER",
                     null
                  ],
                  [
                     "AXIS",
                     null
                  ],
                  [
                     "CROSSHAIR",
                     null
                  ],
                  [
                     "ARROW",
                     null
                  ],
                  [
                     "RECTANGLE",
                     null
                  ],
                  [
                     "ELLIPSE",
                     null
                  ]
               ],
               "type" : "variablelist"
            },
            {
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "Implementers may add private graphic types."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "entity" : "Presentation State",
         "req" : "1",
         "name" : "Compound Graphic Type"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1155)" : {
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(60xx,0040)" : {
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
         "mod_tables" : [
            "table_C.9-2"
         ],
         "name" : "Overlay Type",
         "req" : "1",
         "entity" : "Presentation State",
         "usage" : "C - Required if Overlay is to be applied to referenced image(s) or the Bitmap Display Shutter Module is present",
         "module" : "Overlay Plane"
      },
      "(0010,1020)" : {
         "desc" : "Length or size of the Patient, in meters.",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "req" : "3",
         "name" : "Patient's Size",
         "module" : "Patient Study",
         "usage" : "U",
         "entity" : "Study"
      },
      "(0008,1049)[<0>](0040,1103)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Person's telephone number(s)",
         "entity" : "Study",
         "module" : "General Study",
         "usage" : "M",
         "req" : "3",
         "name" : "Person's Telephone Numbers"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series"
      },
      "(0008,0096)" : {
         "desc" : [
            "Identification of the patient's referring physician.",
            "Only a single item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Referring Physician Identification Sequence",
         "req" : "3",
         "module" : "General Study",
         "usage" : "M",
         "entity" : "Study"
      },
      "(0012,0083)[<0>](0012,0020)" : {
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "desc" : [
            "The identifier of the protocol for which consent to distribute has been granted.",
            "Required if Distribution Type (0012,0084) is NAMED_PROTOCOL and the protocol is not that which is specified in Clinical Trial Protocol ID (0012,0020) in the Clinical Trial Subject Module."
         ],
         "entity" : "Study",
         "module" : "Clinical Trial Study",
         "usage" : "U",
         "req" : "1C",
         "name" : "Clinical Trial Protocol ID"
      },
      "(0038,0014)[<0>](0040,0032)" : {
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "Study",
         "module" : "Patient Study",
         "usage" : "U",
         "req" : "1C",
         "name" : "Universal Entity ID"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)" : {
         "module" : "Patient",
         "usage" : "M",
         "entity" : "Patient",
         "name" : "Assigning Facility Sequence",
         "req" : "3",
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
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a040)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
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
         "module" : "General Series",
         "usage" : "M",
         "name" : "Value Type",
         "req" : "1"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0232)[<2>](0070,0258)" : {
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "entity" : "Presentation State",
         "req" : "1",
         "name" : "Shadow Opacity",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "desc" : "Encodes the shadow opacity. The value is encoded as floating point alpha value (0.0-1.0)."
      },
      "(0008,1032)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : [
            "A Sequence that conveys the type of procedure performed.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Study",
         "module" : "General Study",
         "usage" : "M",
         "name" : "Procedure Code Sequence",
         "req" : "3"
      },
      "(0018,1020)" : {
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
         "entity" : "Equipment",
         "usage" : "M",
         "module" : "General Equipment",
         "name" : "Software Versions",
         "req" : "3"
      },
      "(0010,2294)[<0>](0010,2295)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "Identification number of an animal within the registry.",
         "module" : "Patient",
         "usage" : "M",
         "entity" : "Patient",
         "name" : "Breed Registration Number",
         "req" : "1"
      },
      "(0008,1070)" : {
         "name" : "Operators' Name",
         "req" : "3",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "desc" : "Name(s) of the operator(s) supporting the Series.",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0010,2203)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
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
         "entity" : "Study",
         "module" : "Patient Study",
         "usage" : "U",
         "name" : "Patient's Sex Neutered",
         "req" : "2C"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a160)" : {
         "name" : "Text Value",
         "req" : "1C",
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
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
      "(0400,0561)" : {
         "name" : "Original Attributes Sequence",
         "req" : "3",
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Presentation State",
         "desc" : [
            "Sequence of Items containing all attributes that were removed or replaced by other values in the main data set.",
            "One or more Items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,0030)" : {
         "name" : "Study Time",
         "req" : "2",
         "module" : "General Study",
         "usage" : "M",
         "entity" : "Study",
         "desc" : "Time the Study started.",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0010,2292)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
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
         "module" : "Patient",
         "usage" : "M",
         "entity" : "Patient",
         "name" : "Patient Breed Description",
         "req" : "2C"
      },
      "(0040,0275)[<0>](0008,0051)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this sequence."
         ],
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series",
         "name" : "Issuer of Accession Number Sequence",
         "req" : "3"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0278)" : {
         "mod_tables" : [
            "table_C.10-5"
         ],
         "desc" : [
            "Indicates whether the tick label should be initially visible.",
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            },
            "Required if Compound Graphic Type (0070,0294) equals RULER, AXIS or CROSSHAIR."
         ],
         "entity" : "Presentation State",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "req" : "1C",
         "name" : "Show Tick Label"
      },
      "(0008,001b)" : {
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "name" : "Original Specialized SOP Class UID",
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Presentation State"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0006)" : {
         "desc" : [
            [
               "Text data that is unformatted and whose manner of display within the defined bounding box or relative to the specified anchor point is implementation dependent. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.10.5.1.1"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "The text value may contain spaces, as well as multiple lines separated by CR LF, but otherwise no format control characters (such as horizontal or vertical tab and form feed) shall be present, even if permitted by the Value Representation of ST.",
            "The text shall be interpreted as specified by Specific Character Set (0008,0005) if present in the SOP Common Module.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "content" : [
                        "The text may contain single or multi-byte characters and use code extension techniques as described in ",
                        {
                           "attrs" : {
                              "targetdoc" : "PS3.5",
                              "xrefstyle" : "select: labelnumber",
                              "targetptr" : "PS3.5"
                           },
                           "el" : "olink"
                        },
                        " if permitted by the values of Specific Character Set (0008,0005)."
                     ]
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.10-5"
         ],
         "name" : "Unformatted Text Value",
         "req" : "1",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "entity" : "Presentation State"
      },
      "(0008,1110)[<0>](0008,1150)" : {
         "module" : "General Study",
         "usage" : "M",
         "entity" : "Study",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0028,6100)[<0>](0028,6190)" : {
         "mod_tables" : [
            "table_C.7-16"
         ],
         "desc" : "Free form explanation of this particular mask operation.",
         "usage" : "C - Required if the referenced image(s) are multi-frame and are to be subtracted",
         "module" : "Mask",
         "entity" : "Presentation State",
         "name" : "Mask Operation Explanation",
         "req" : "3"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0282)" : {
         "name" : "Compound Graphic Units",
         "req" : "1",
         "entity" : "Presentation State",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "desc" : [
            "Type of dimension used in attributes for the Compound Graphic when specifying distances and locations.",
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "PIXEL",
                     [
                        "When an attribute value specifies a location, it shall be an image relative position specified with sub-pixel resolution such that the origin at the Top Left Hand Corner (TLHC) of the TLHC pixel is 0.0\\0.0, the Bottom Right Hand Corner (BRHC) of the TLHC pixel is 1.0\\1.0, and the BRHC of the BRHC pixel is Columns\\Rows (see ",
                        {
                           "el" : "xref",
                           "attrs" : {
                              "linkend" : "figure_C.10.5-1",
                              "xrefstyle" : "select: label"
                           }
                        },
                        "). The values must be within the range 0\\0 to Columns\\Rows. When an attribute value specifies a distance the distance shall be in pixels."
                     ]
                  ],
                  [
                     "DISPLAY",
                     "When an attribute value specifies a location, it shall be a fraction of Specified Displayed Area where 0.0\\0.0 is the TLHC and 1.0\\1.0 is the BRHC. The values must be within the range 0.0 to 1.0. When an attribute value specifies a distance the distance shall be in fraction of Specified Displayed Area."
                  ]
               ]
            }
         ],
         "mod_tables" : [
            "table_C.10-5"
         ]
      },
      "(0028,0108)" : {
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "req" : "3",
         "name" : "Smallest Pixel Value in Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : "The minimum value of all images in this Series."
      },
      "(0010,1002)[<0>](0010,0021)" : {
         "module" : "Patient",
         "usage" : "M",
         "entity" : "Patient",
         "name" : "Issuer of Patient ID",
         "req" : "3",
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
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0062,000b)" : {
         "name" : "Referenced Segment Number",
         "req" : "1C",
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
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
      "(0028,3000)" : {
         "entity" : "Presentation State",
         "usage" : "C - Required if a Modality LUT is to be applied to referenced image(s)",
         "module" : "Modality LUT",
         "req" : "1C",
         "name" : "Modality LUT Sequence",
         "mod_tables" : [
            "table_C.11-1b"
         ],
         "desc" : [
            "Defines a sequence of Modality LUTs.",
            "Only a single Item shall be included in this sequence.",
            "Shall not be present if Rescale Intercept (0028,1052) is present."
         ]
      },
      "(0020,9172)[<0>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Presentation State"
      },
      "(0070,0083)" : {
         "entity" : "Presentation State",
         "module" : "Presentation State Identification",
         "usage" : "M",
         "req" : "1",
         "name" : "Presentation Creation Time",
         "mod_tables" : [
            "table_C.11.10-1"
         ],
         "desc" : [
            "Time at which this presentation was created.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "This time may be different from the time that the DICOM SOP Instance was created, since the presentation state information contained may have been recorded earlier."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ]
      },
      "(0008,0110)[<0>](0008,0112)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Presentation State",
         "name" : "Coding Scheme Registry",
         "req" : "1C"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a122)" : {
         "name" : "Time",
         "req" : "1C",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0008,0051)[<0>](0040,0032)" : {
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "name" : "Universal Entity ID",
         "req" : "1C",
         "usage" : "M",
         "module" : "General Study",
         "entity" : "Study"
      },
      "(0070,0086)[<0>](0040,1101)" : {
         "name" : "Person Identification Code Sequence",
         "req" : "1",
         "entity" : "Presentation State",
         "usage" : "M",
         "module" : "Presentation State Identification",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.11.10-1",
            "table_10-12",
            "table_10-1"
         ]
      },
      "(0028,6100)[<0>](0028,6101)" : [
         {
            "usage" : "M",
            "module" : "Presentation State Mask",
            "entity" : "Presentation State",
            "req" : "1",
            "name" : "Mask Operation",
            "mod_tables" : [
               "table_C.11.13-1"
            ],
            "desc" : [
               "Type of mask operation to be performed",
               {
                  "title" : "Enumerated Values:",
                  "list" : [
                     [
                        "AVG_SUB",
                        null
                     ],
                     [
                        "TID",
                        null
                     ]
                  ],
                  "type" : "variablelist"
               },
               [
                  "See ",
                  {
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.7.6.10.1"
                     },
                     "el" : "xref"
                  },
                  " for further explanation."
               ],
               {
                  "el" : "note",
                  "content" : [
                     "\n                  ",
                     {
                        "content" : [
                           "The requirement in this module is for Enumerated Values, which overrides the requirements of the Mask Module."
                        ],
                        "el" : "para"
                     },
                     "\n                "
                  ]
               }
            ]
         },
         {
            "desc" : [
               "Defined Term identifying the type of mask operation to be performed. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.10.1"
                  }
               },
               " for further explanation."
            ],
            "mod_tables" : [
               "table_C.7-16"
            ],
            "req" : "1",
            "name" : "Mask Operation",
            "module" : "Mask",
            "usage" : "C - Required if the referenced image(s) are multi-frame and are to be subtracted",
            "entity" : "Presentation State"
         }
      ],
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0231)[<2>](0070,0244)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "entity" : "Presentation State",
         "req" : "1",
         "name" : "Shadow Style",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "desc" : [
            "The shadow style of the text to be displayed.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "NORMAL",
                     "the shadow is drawn on 1 side of the contour of the text object"
                  ],
                  [
                     "OUTLINED",
                     "the shadow is drawn around the contour of the text object"
                  ],
                  [
                     "OFF",
                     "no shadow"
                  ]
               ],
               "title" : "Enumerated Values:"
            },
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.10.5.1.3.13.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               }
            ]
         ]
      },
      "(0040,a390)" : {
         "entity" : "Presentation State",
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "1C",
         "name" : "HL7 Structured Document Reference Sequence",
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
         ]
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0232)[<2>](0070,0284)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "entity" : "Presentation State",
         "name" : "Pattern On Opacity",
         "req" : "1",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "desc" : "Encodes the foreground opacity. The value is encoded as floating point alpha value (0.0-1.0)."
      },
      "(0028,3000)[<0>](0028,3002)" : {
         "desc" : [
            "Specifies the format of the LUT Data in this Sequence.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.11.1.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            "Required if the Modality LUT Sequence (0028,3000) is sent."
         ],
         "mod_tables" : [
            "table_C.11-1b"
         ],
         "name" : "LUT Descriptor",
         "req" : "1C",
         "usage" : "C - Required if a Modality LUT is to be applied to referenced image(s)",
         "module" : "Modality LUT",
         "entity" : "Presentation State"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a123)" : {
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series",
         "name" : "Person Name",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0081)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "entity" : "Presentation State",
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "3",
         "name" : "Institution Address"
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
                     "el" : "para"
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
         "name" : "Universal Entity ID",
         "req" : "3",
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M"
      },
      "(0070,0001)" : {
         "mod_tables" : [
            "table_C.10-5"
         ],
         "desc" : [
            "A sequence of Items each of which represents a group of annotations composed of graphics or text or both.",
            "One or more Items shall be included in this sequence."
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "entity" : "Presentation State",
         "name" : "Graphic Annotation Sequence",
         "req" : "1"
      },
      "(4ffe,0001)[<0>](0400,0015)" : {
         "req" : "1",
         "name" : "MAC Algorithm",
         "entity" : "Presentation State",
         "usage" : "M",
         "module" : "SOP Common",
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
               ]
            }
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)[<2>](0070,0241)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "entity" : "Presentation State",
         "name" : "Text Color CIELab Value",
         "req" : "1",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "desc" : [
            [
               "A default color triplet value used to specify the text color in which it is recommended that the text be rendered on a color display. The units are specified in PCS-Values, and the value is encoded as CIELab. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.10.7.1.1",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ],
            "This value shall override the Graphic Layer Recommended Display CIELab Value (0070,0401)."
         ]
      },
      "(0008,1115)[<0>](0008,1140)" : {
         "name" : "Referenced Image Sequence",
         "req" : "1",
         "usage" : "M",
         "module" : "Presentation State Relationship",
         "entity" : "Presentation State",
         "desc" : [
            "The set of images and frames to which the Presentation applies. These shall be of the Study defined by Study Instance UID (0020,000D) and the Series defined by Series Instance UID (0020,000E).",
            "One or more Items shall be included in this sequence.",
            "The referenced SOP Class shall be the same for all Images in any Item of this Referenced Series Sequence (0008,1115)."
         ],
         "mod_tables" : [
            "table_C.11.11-1b"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0062,000b)" : {
         "req" : "1C",
         "name" : "Referenced Segment Number",
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0012)" : {
         "desc" : [
            "Location of the text relative to the vertical edges of the bounding box.",
            {
               "list" : [
                  [
                     "LEFT",
                     "closest to left edge"
                  ],
                  [
                     "RIGHT",
                     "closest to right edge"
                  ],
                  [
                     "CENTER",
                     "centered"
                  ]
               ],
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            },
            "Required if Bounding Box Top Left Hand Corner (0070,0010) is present."
         ],
         "mod_tables" : [
            "table_C.10-5"
         ],
         "name" : "Bounding Box Text Horizontal Justification",
         "req" : "1C",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "entity" : "Presentation State"
      },
      "(0040,0244)" : {
         "desc" : "Date on which the Performed Procedure Step started.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "req" : "3",
         "name" : "Performed Procedure Step Start Date",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M"
      },
      "(0008,1062)[<0>](0040,1102)" : {
         "desc" : "Person's mailing address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person's Address",
         "req" : "3",
         "module" : "General Study",
         "usage" : "M",
         "entity" : "Study"
      },
      "(0028,3110)[<0>](0008,1140)" : {
         "desc" : [
            "The subset of images and frames listed in the Presentation State Relationship Module, to which this VOI LUT or Window Center and Width applies.",
            "One or more Items shall be included in this sequence.",
            "Required if the VOI LUT transformation in this Item does not apply to all the images and frames listed in the Presentation State Relationship Module."
         ],
         "mod_tables" : [
            "table_C.11.8-1"
         ],
         "name" : "Referenced Image Sequence",
         "req" : "1C",
         "entity" : "Presentation State",
         "usage" : "C - Required if a VOI LUT is to be applied to referenced image(s)",
         "module" : "Softcopy VOI LUT"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0233)[<2>](0070,0285)" : {
         "name" : "Pattern Off Opacity",
         "req" : "1",
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "desc" : "Encodes the background opacity. The value is encoded as floating point alpha value (0.0-1.0).",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5c"
         ]
      },
      "(0070,0086)[<0>](0008,0082)" : {
         "usage" : "M",
         "module" : "Presentation State Identification",
         "entity" : "Presentation State",
         "req" : "1C",
         "name" : "Institution Code Sequence",
         "mod_tables" : [
            "table_C.11.10-1",
            "table_10-12",
            "table_10-1"
         ],
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0028,6100)[<0>](0028,6120)" : {
         "usage" : "C - Required if the referenced image(s) are multi-frame and are to be subtracted",
         "module" : "Mask",
         "entity" : "Presentation State",
         "req" : "2C",
         "name" : "TID Offset",
         "mod_tables" : [
            "table_C.7-16"
         ],
         "desc" : [
            "If Mask Operation is TID, specifies the offset to be subtracted from the current frame number in order to locate the mask frame in TID mode.",
            [
               "If Mask Operation is REV_TID, specifies the initial offset to be subtracted from the first contrast frame number. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.10.1.1"
                  }
               },
               "."
            ],
            "If zero length, TID Offset defaults to 1. Required if Mask Operation (0028,6101) is TID or REV_TID."
         ]
      },
      "(0018,1602)" : {
         "desc" : "Required if Shutter Shape (0018,1600) is RECTANGULAR. Location of the left edge of the rectangular shutter with respect to pixels in the image given as column.",
         "mod_tables" : [
            "table_C.7-17a"
         ],
         "name" : "Shutter Left Vertical Edge",
         "req" : "1C",
         "entity" : "Presentation State",
         "module" : "Display Shutter",
         "usage" : "C - Required if a Display Shutter is to be applied to referenced image(s) and the Bitmap Display Shutter Module is not present"
      },
      "(0010,0032)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "Birth time of the Patient.",
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "name" : "Patient's Birth Time",
         "req" : "3"
      },
      "(0008,0096)[<0>](0008,0082)" : {
         "req" : "1C",
         "name" : "Institution Code Sequence",
         "module" : "General Study",
         "usage" : "M",
         "entity" : "Study",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0028,3000)[<0>](0028,3003)" : {
         "name" : "LUT Explanation",
         "req" : "3",
         "entity" : "Presentation State",
         "usage" : "C - Required if a Modality LUT is to be applied to referenced image(s)",
         "module" : "Modality LUT",
         "desc" : "Free form text explanation of the meaning of the LUT.",
         "mod_tables" : [
            "table_C.11-1b"
         ]
      },
      "(0028,3110)[<0>](0028,3010)[<1>](0028,3003)" : {
         "req" : "3",
         "name" : "LUT Explanation",
         "entity" : "Presentation State",
         "module" : "Softcopy VOI LUT",
         "usage" : "C - Required if a VOI LUT is to be applied to referenced image(s)",
         "desc" : "Free form text explanation of the meaning of the LUT.",
         "mod_tables" : [
            "table_C.11.8-1",
            "table_C.11-2b"
         ]
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0232)[<2>](0070,0284)" : {
         "req" : "1",
         "name" : "Pattern On Opacity",
         "entity" : "Presentation State",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "desc" : "Encodes the foreground opacity. The value is encoded as floating point alpha value (0.0-1.0).",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ]
      },
      "(60xx,0050)" : {
         "usage" : "C - Required if Overlay is to be applied to referenced image(s) or the Bitmap Display Shutter Module is present",
         "module" : "Overlay Plane",
         "entity" : "Presentation State",
         "name" : "Overlay Origin",
         "req" : "1",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "desc" : [
            "Location of first overlay point with respect to pixels in the image, given as row\\column.",
            "The upper left pixel of the image has the coordinate 1\\1.",
            "Column values greater than 1 indicate the overlay plane origin is to the right of the image origin. Row values greater than 1 indicate the overlay plane origin is below the image origin. Values less than 1 indicate the overlay plane origin is above or to the left of the image origin.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "Values of 0\\0 indicate that the overlay pixels start 1 row above and one column to the left of the image pixels."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ]
      },
      "(0010,1010)" : {
         "desc" : "Age of the Patient.",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Patient's Age",
         "req" : "3",
         "usage" : "U",
         "module" : "Patient Study",
         "entity" : "Study"
      },
      "(0008,1062)[<0>](0008,0081)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "entity" : "Study",
         "module" : "General Study",
         "usage" : "M",
         "name" : "Institution Address",
         "req" : "3"
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
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "name" : "Universal Entity ID Type",
         "req" : "1C",
         "entity" : "Study",
         "module" : "General Study",
         "usage" : "M"
      },
      "(0020,0013)" : [
         {
            "name" : "Instance Number",
            "req" : "1",
            "entity" : "Presentation State",
            "module" : "Presentation State Identification",
            "usage" : "M",
            "desc" : "A number that identifies this SOP Instance.",
            "mod_tables" : [
               "table_C.11.10-1",
               "table_10-12"
            ]
         },
         {
            "mod_tables" : [
               "table_C.12-1"
            ],
            "desc" : "A number that identifies this Composite object instance.",
            "module" : "SOP Common",
            "usage" : "M",
            "entity" : "Presentation State",
            "name" : "Instance Number",
            "req" : "3"
         }
      ],
      "(0070,005a)" : {
         "desc" : [
            "A sequence of Items each of which describes the displayed area selection for a group of images or frames. Sufficient Items shall be present to describe every image and frame listed in the Presentation State Relationship Module.",
            "One or more Items shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.10-4"
         ],
         "name" : "Displayed Area Selection Sequence",
         "req" : "1",
         "usage" : "M",
         "module" : "Displayed Area",
         "entity" : "Presentation State"
      },
      "(0008,1052)[<0>](0040,1102)" : {
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Person's Address",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "desc" : "Person's mailing address"
      },
      "(0028,1202)" : {
         "entity" : "Presentation State",
         "usage" : "M",
         "module" : "Palette Color LUT",
         "name" : "Green Palette Color Lookup Table Data",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-22a"
         ],
         "desc" : [
            "Green Palette Color Lookup Table Data. Required if segmented data is NOT used in an Image IOD, or if the IOD is a Presentation State IOD or Color Palette IOD. See ",
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
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0033)" : {
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
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "req" : "1C",
         "name" : "Universal Entity ID Type",
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0028,3110)[<0>](0028,1051)" : {
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
         "mod_tables" : [
            "table_C.11.8-1",
            "table_C.11-2b"
         ],
         "name" : "Window Width",
         "req" : "1C",
         "entity" : "Presentation State",
         "module" : "Softcopy VOI LUT",
         "usage" : "C - Required if a VOI LUT is to be applied to referenced image(s)"
      },
      "(0400,0500)[<0>](0400,0510)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
         "entity" : "Presentation State",
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Encrypted Content Transfer Syntax UID",
         "req" : "1"
      },
      "(0028,6100)" : [
         {
            "mod_tables" : [
               "table_C.11.13-1"
            ],
            "desc" : [
               "Required if Mask Module is present.",
               "Only a single Item shall be included in this sequence.",
               "Applicable Frame Range (0028,6102) shall not be included in the Sequence Item.",
               [
                  "See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.7.6.10"
                     }
                  },
                  " for a complete definition of the Attributes in the Items of this Sequence other than Mask Operation (0028,6101) and Applicable Frame Range (0028,6102)."
               ],
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
                                    "el" : "para",
                                    "content" : [
                                       "This Sequence is replicated here in order to specify one Item, additional conditions on Mask Operation (0028,6101) and to forbid Applicable Frame Range (0028,6102)."
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
                                       "The role of Applicable Frame Range (0028,6102) is replaced by Referenced Frame Number (0008,1160)."
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
                        },
                        "el" : "orderedlist"
                     },
                     "\n                "
                  ],
                  "el" : "note"
               }
            ],
            "module" : "Presentation State Mask",
            "usage" : "M",
            "entity" : "Presentation State",
            "name" : "Mask Subtraction Sequence",
            "req" : "1C"
         },
         {
            "name" : "Mask Subtraction Sequence",
            "req" : "1",
            "usage" : "C - Required if the referenced image(s) are multi-frame and are to be subtracted",
            "module" : "Mask",
            "entity" : "Presentation State",
            "desc" : [
               "Defines a sequence that describes mask subtraction operations for a Multi-frame Image.",
               "One or more items shall be included in this sequence."
            ],
            "mod_tables" : [
               "table_C.7-16"
            ]
         }
      ],
      "(0008,0110)[<0>](0008,0103)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Presentation State",
         "req" : "3",
         "name" : "Coding Scheme Version",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The coding scheme version associated with the Coding Scheme Designator (0008,0102)."
      },
      "(0008,0110)[<0>](0008,0115)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The coding scheme full common name",
         "entity" : "Presentation State",
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "3",
         "name" : "Coding Scheme Name"
      },
      "(0028,6100)[<0>](0028,9416)" : {
         "entity" : "Presentation State",
         "module" : "Mask",
         "usage" : "C - Required if the referenced image(s) are multi-frame and are to be subtracted",
         "name" : "Subtraction Item ID",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-16"
         ],
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
         ]
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)[<2>](0070,0250)" : {
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "entity" : "Presentation State",
         "name" : "Italic",
         "req" : "1",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "desc" : [
            "Specifies whether or not the text shall be rendered italicized.",
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "Y",
                     "yes"
                  ],
                  [
                     "N",
                     "no"
                  ]
               ],
               "type" : "variablelist"
            }
         ]
      },
      "(60xx,0022)" : {
         "req" : "3",
         "name" : "Overlay Description",
         "module" : "Overlay Plane",
         "usage" : "C - Required if Overlay is to be applied to referenced image(s) or the Bitmap Display Shutter Module is present",
         "entity" : "Presentation State",
         "desc" : "User-defined comments about the overlay.",
         "mod_tables" : [
            "table_C.9-2"
         ]
      },
      "(0018,1620)" : {
         "mod_tables" : [
            "table_C.7-17a"
         ],
         "desc" : [
            "Required if Shutter Shape (0018,1600) is POLYGONAL.",
            "Multiple Values where the first set of two values are:",
            "row of the origin vertexcolumn of the origin vertex",
            "Two or more pairs of values follow and are the row and column coordinates of the other vertices of the polygon shutter. Polygon shutters are implicitly closed from the last vertex to the origin vertex and all edges shall be non-intersecting except at the vertices."
         ],
         "usage" : "C - Required if a Display Shutter is to be applied to referenced image(s) and the Bitmap Display Shutter Module is not present",
         "module" : "Display Shutter",
         "entity" : "Presentation State",
         "name" : "Vertices of the Polygonal Shutter",
         "req" : "1C"
      },
      "(0018,a001)[<0>](0018,1000)" : {
         "desc" : "Manufacturer's serial number of the equipment that contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Device Serial Number",
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Presentation State"
      },
      "(0040,0254)" : {
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Performed Procedure Step Description",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "desc" : "Institution-generated description or classification of the Procedure Step that was performed."
      },
      "(0008,1090)" : {
         "name" : "Manufacturer's Model Name",
         "req" : "3",
         "module" : "General Equipment",
         "usage" : "M",
         "entity" : "Equipment",
         "desc" : "Manufacturer's model name of the equipment that produced the composite instances.",
         "mod_tables" : [
            "table_C.7-8"
         ]
      },
      "(fffa,fffa)" : {
         "name" : "Digital Signatures Sequence",
         "req" : "3",
         "entity" : "Presentation State",
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : [
            "Sequence holding Digital Signatures.",
            "One or more items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0070,0086)" : {
         "desc" : "Identification of the person who created the content. Only a single item is permitted in this sequence.",
         "mod_tables" : [
            "table_C.11.10-1",
            "table_10-12"
         ],
         "req" : "3",
         "name" : "Content Creator's Identification Code Sequence",
         "usage" : "M",
         "module" : "Presentation State Identification",
         "entity" : "Presentation State"
      },
      "(0008,103f)" : {
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "name" : "Series Description Code Sequence",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : [
            "A coded description of the Series.",
            "Only a single Item is permitted in this sequence."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a121)" : {
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series",
         "name" : "Date",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ]
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0231)" : {
         "desc" : [
            "Sequence that describes the text style.",
            "Only a single item shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "name" : "Text Style Sequence",
         "req" : "3",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "entity" : "Presentation State"
      },
      "(0008,1111)[<0>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series"
      },
      "(0010,2160)" : {
         "name" : "Ethnic Group",
         "req" : "3",
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "desc" : "Ethnic group or race of the patient.",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0062,000b)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Referenced Segment Number",
         "req" : "1C"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(0028,1221)" : {
         "mod_tables" : [
            "table_C.7-22a"
         ],
         "desc" : [
            "Segmented Red Palette Color Lookup Table Data. Required if segmented data is used in an Image IOD; shall not be present in a Presentation State IOD or Color Palette IOD. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.9.2"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "module" : "Palette Color LUT",
         "usage" : "M",
         "entity" : "Presentation State",
         "name" : "Segmented Red Palette Color Lookup Table Data",
         "req" : "1C"
      },
      "(0008,1052)[<0>](0008,0081)" : {
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "req" : "3",
         "name" : "Institution Address",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1155)" : {
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)[<2>](0070,0228)" : {
         "desc" : [
            {
               "title" : "Defined Terms:",
               "list" : [
                  [
                     "ISO_32000",
                     null
                  ]
               ],
               "type" : "variablelist"
            },
            "Required if Font Name (0070,0227) is present.",
            {
               "content" : [
                  "\n                        ",
                  {
                     "content" : [
                        "This is the font naming system used by Adobe PDF and defined in ISO/IEC 14496-22."
                     ],
                     "el" : "para"
                  },
                  "\n                      "
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "name" : "Font Name Type",
         "req" : "1C",
         "entity" : "Presentation State",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,08ea)" : {
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Measurement Units Code Sequence",
         "req" : "1C",
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series"
      },
      "(0100,0420)" : {
         "req" : "3",
         "name" : "SOP Authorization DateTime",
         "entity" : "Presentation State",
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : "The date and time when the SOP Instance Status (0100,0410) was set to AO.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,1110)" : {
         "req" : "3",
         "name" : "Referenced Study Sequence",
         "module" : "General Study",
         "usage" : "M",
         "entity" : "Study",
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
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0012,0040)" : {
         "entity" : "Patient",
         "module" : "Clinical Trial Subject",
         "usage" : "U",
         "name" : "Clinical Trial Subject ID",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-2b"
         ],
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
         ]
      },
      "(0018,1608)" : {
         "desc" : "Required if Shutter Shape (0018,1600) is RECTANGULAR. Location of the lower edge of the rectangular shutter with respect to pixels in the image given as row.",
         "mod_tables" : [
            "table_C.7-17a"
         ],
         "name" : "Shutter Lower Horizontal Edge",
         "req" : "1C",
         "entity" : "Presentation State",
         "module" : "Display Shutter",
         "usage" : "C - Required if a Display Shutter is to be applied to referenced image(s) and the Bitmap Display Shutter Module is not present"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a163)" : {
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1C",
         "name" : "Rational Denominator Value",
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
      "(0008,1084)" : {
         "desc" : [
            "A sequence that conveys the admitting diagnosis (diagnoses).",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Admitting Diagnoses Code Sequence",
         "req" : "3",
         "entity" : "Study",
         "usage" : "U",
         "module" : "Patient Study"
      },
      "(0028,1201)" : {
         "mod_tables" : [
            "table_C.7-22a"
         ],
         "desc" : [
            "Red Palette Color Lookup Table Data. Required if segmented data is NOT used in an Image IOD, or if the IOD is a Presentation State IOD or Color Palette IOD. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.6.3.1.6",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "module" : "Palette Color LUT",
         "usage" : "M",
         "entity" : "Presentation State",
         "req" : "1C",
         "name" : "Red Palette Color Lookup Table Data"
      },
      "(0008,1115)[<0>](0008,1140)[<1>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.11.11-1b",
            "table_10-3",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "module" : "Presentation State Relationship",
         "usage" : "M",
         "entity" : "Presentation State"
      },
      "(0008,0051)[<0>](0040,0031)" : {
         "entity" : "Study",
         "usage" : "M",
         "module" : "General Study",
         "req" : "1C",
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise."
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0232)[<2>](0070,0253)" : {
         "entity" : "Presentation State",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "name" : "Line Thickness",
         "req" : "1",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "desc" : "Specifies the line thickness. The dimension for this attribute is defined by Graphic Annotation Units (0070,0005) or Compound Graphic Units (0070,0282)."
      },
      "(0008,0090)" : {
         "desc" : "Name of the patient's referring physician",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "2",
         "name" : "Referring Physician's Name",
         "usage" : "M",
         "module" : "General Study",
         "entity" : "Study"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a160)" : {
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "req" : "1C",
         "name" : "Text Value",
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
      "(0400,0561)[<0>](0400,0563)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Presentation State",
         "name" : "Modifying System",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Identification of the system that removed and/or replaced the attributes."
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "req" : "1C",
         "entity" : "Patient",
         "module" : "Patient",
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
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ]
      },
      "(0010,0024)[<0>](0040,0036)" : {
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Assigning Facility Sequence",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
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
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a30a)" : {
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "name" : "Numeric Value",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series"
      },
      "(0010,0024)[<0>](0040,0039)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "name" : "Assigning Jurisdiction Code Sequence",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
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
         ]
      },
      "(0070,0234)[<0>](0070,0208)" : {
         "mod_tables" : [
            "table_C.10-12"
         ],
         "desc" : "Description of the group.",
         "module" : "Graphic Group",
         "usage" : "U",
         "entity" : "Presentation State",
         "name" : "Graphic Group Description",
         "req" : "3"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0295)" : {
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "3",
         "name" : "Graphic Group ID",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "desc" : "A number that defines the corresponding group object in the Graphic Group Sequence (0070,0234). If the attribute is not present the object does not belong to a group."
      },
      "(0010,0024)[<0>](0040,0032)" : {
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Universal Entity ID",
         "req" : "3",
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M"
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
         "entity" : "Study",
         "module" : "General Study",
         "usage" : "M",
         "name" : "Person Identification Code Sequence",
         "req" : "1"
      },
      "(0040,0260)[<0>](0040,0440)" : {
         "desc" : "Sequence that specifies the context for the Performed Protocol Code Sequence Item. One or more Items are permitted in this sequence.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "name" : "Protocol Context Sequence",
         "req" : "3",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,0070)" : {
         "name" : "Manufacturer",
         "req" : "1",
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Presentation State",
         "desc" : "Manufacturer of the equipment that contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0070,005a)[<0>](0008,1140)[<1>](0062,000b)" : {
         "req" : "1C",
         "name" : "Referenced Segment Number",
         "entity" : "Presentation State",
         "usage" : "M",
         "module" : "Displayed Area",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "mod_tables" : [
            "table_C.10-4",
            "table_10-3"
         ]
      },
      "(0008,0070)" : {
         "entity" : "Equipment",
         "usage" : "M",
         "module" : "General Equipment",
         "name" : "Manufacturer",
         "req" : "2",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "desc" : "Manufacturer of the equipment that produced the composite instances."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a120)" : {
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "req" : "1C",
         "name" : "DateTime",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
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
         "mod_tables" : [
            "table_C.7-16"
         ],
         "name" : "Applicable Frame Range",
         "req" : "1C",
         "usage" : "C - Required if the referenced image(s) are multi-frame and are to be subtracted",
         "module" : "Mask",
         "entity" : "Presentation State"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0232)[<2>](0070,0245)" : {
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "name" : "Shadow Offset X",
         "req" : "1",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "desc" : [
            "Floating point value that defines the shadow offset in X direction in Graphic Annotation Units (0070,0005). See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.10.5.1.3.13.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ]
      },
      "(0018,5100)" : {
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Patient Position",
         "req" : "2C",
         "mod_tables" : [
            "table_C.7-5a"
         ],
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
         ]
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
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "name" : "Rational Numerator Value",
         "req" : "1C"
      },
      "(0028,6100)[<0>](0028,6112)" : [
         {
            "module" : "Presentation State Mask",
            "usage" : "M",
            "entity" : "Presentation State",
            "req" : "1C",
            "name" : "Contrast Frame Averaging",
            "mod_tables" : [
               "table_C.11.13-1"
            ],
            "desc" : [
               "Specified the number of contrast frames to average together before performing the mask operation.",
               "Required if Mask Frame Numbers (0028,6110) specifies more than one frame (i.e., is multi-valued).",
               {
                  "el" : "note",
                  "content" : [
                     "\n                  ",
                     {
                        "content" : [
                           "The requirement in this module is conditional and overrides the optional requirements of the Mask Module."
                        ],
                        "el" : "para"
                     },
                     "\n                "
                  ]
               }
            ]
         },
         {
            "name" : "Contrast Frame Averaging",
            "req" : "3",
            "module" : "Mask",
            "usage" : "C - Required if the referenced image(s) are multi-frame and are to be subtracted",
            "entity" : "Presentation State",
            "desc" : "Specifies the number of contrast frames to average together before performing the mask operation. If the Attribute is missing, no averaging is performed.",
            "mod_tables" : [
               "table_C.7-16"
            ]
         }
      ],
      "(0070,0001)[<0>](0008,1140)" : {
         "desc" : [
            "The subset of images and frames listed in the Presentation State Relationship Module, to which this graphic annotation applies.",
            "One or more Items shall be included in this sequence.",
            "Required if graphic annotations in this Item do not apply to all the images and frames listed in the Presentation State Relationship Module."
         ],
         "mod_tables" : [
            "table_C.10-5"
         ],
         "req" : "1C",
         "name" : "Referenced Image Sequence",
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0231)[<2>](0070,0258)" : {
         "desc" : "Encodes the shadow opacity. The value is encoded as floating point alpha value (0.0-1.0).",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "name" : "Shadow Opacity",
         "req" : "1",
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)"
      },
      "(0010,2299)" : {
         "desc" : [
            "Name of organization with medical decision making authority for the patient.",
            "Required if patient is an animal. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "2C",
         "name" : "Responsible Organization",
         "module" : "Patient",
         "usage" : "M",
         "entity" : "Patient"
      },
      "(0008,1115)[<0>](0008,1140)[<1>](0008,1155)" : {
         "module" : "Presentation State Relationship",
         "usage" : "M",
         "entity" : "Presentation State",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "mod_tables" : [
            "table_C.11.11-1b",
            "table_10-3",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0040,0250)" : {
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "req" : "3",
         "name" : "Performed Procedure Step End Date",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "desc" : "Date on which the Performed Procedure Step ended."
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0232)" : {
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "desc" : [
            "Sequence that describes the line style.",
            "Only a single item shall be included in this sequence."
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "entity" : "Presentation State",
         "req" : "3",
         "name" : "Line Style Sequence"
      },
      "(0040,0275)[<0>](0040,0007)" : {
         "desc" : "Institution-generated description or classification of the Scheduled Procedure Step to be performed.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "name" : "Scheduled Procedure Step Description",
         "req" : "3",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M"
      },
      "(60xx,0010)" : {
         "name" : "Overlay Rows",
         "req" : "1",
         "module" : "Overlay Plane",
         "usage" : "C - Required if Overlay is to be applied to referenced image(s) or the Bitmap Display Shutter Module is present",
         "entity" : "Presentation State",
         "desc" : "Number of Rows in Overlay.",
         "mod_tables" : [
            "table_C.9-2"
         ]
      },
      "(0020,9172)[<0>](0062,000b)" : {
         "name" : "Referenced Segment Number",
         "req" : "1C",
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Presentation State",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ]
      },
      "(0010,1002)[<0>](0010,0024)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this sequence."
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "req" : "3"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0261)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "entity" : "Presentation State",
         "name" : "Gap Length",
         "req" : "1C",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "desc" : [
            "Diameter of the circle around Rotation Point (0070,0273) where the CUTLINE or INFINITELINE is not rendered.",
            "Diameter of the circle around the origin, specified by Graphic Data (0070,0022) where the CROSSHAIR is not rendered.",
            "The Compound Graphic Units (0070,0282) of Gap Length (0070,0261) shall be DISPLAY.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.10.5.1.3"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Required if Compound Graphic Type (0070,0294) equals CUTLINE, INFINITELINE or CROSSHAIR."
         ]
      },
      "(0070,0042)" : {
         "module" : "Spatial Transformation",
         "usage" : "C - Required if rotation or flipping are to be applied to referenced image(s)",
         "entity" : "Presentation State",
         "name" : "Image Rotation",
         "req" : "1",
         "mod_tables" : [
            "table_C.10-6"
         ],
         "desc" : [
            "How far to rotate the image clockwise in degrees, before any Image Horizontal Flip (0070,0041) is applied.",
            {
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
               ],
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            },
            {
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "Negative values are not permitted since the Value Representation is unsigned."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a122)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "req" : "1C",
         "name" : "Time"
      },
      "(60xx,3000)" : {
         "mod_tables" : [
            "table_C.9-2"
         ],
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
         "entity" : "Presentation State",
         "module" : "Overlay Plane",
         "usage" : "C - Required if Overlay is to be applied to referenced image(s) or the Bitmap Display Shutter Module is present",
         "req" : "1",
         "name" : "Overlay Data"
      },
      "(0028,3110)[<0>](0028,1050)" : {
         "entity" : "Presentation State",
         "module" : "Softcopy VOI LUT",
         "usage" : "C - Required if a VOI LUT is to be applied to referenced image(s)",
         "name" : "Window Center",
         "req" : "1C",
         "mod_tables" : [
            "table_C.11.8-1",
            "table_C.11-2b"
         ],
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
      },
      "(0008,1052)" : {
         "desc" : [
            "Identification of the physician(s) administering the Series.",
            "One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Performing Physician's Name (0008,1050), if present."
         ],
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Performing Physician Identification Sequence",
         "req" : "3",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series"
      },
      "(0028,3110)[<0>](0028,3010)[<1>](0028,3002)" : {
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
         "mod_tables" : [
            "table_C.11.8-1",
            "table_C.11-2b"
         ],
         "req" : "1",
         "name" : "LUT Descriptor",
         "usage" : "C - Required if a VOI LUT is to be applied to referenced image(s)",
         "module" : "Softcopy VOI LUT",
         "entity" : "Presentation State"
      },
      "(0070,005a)[<0>](0070,0052)" : {
         "usage" : "M",
         "module" : "Displayed Area",
         "entity" : "Presentation State",
         "name" : "Displayed Area Top Left Hand Corner",
         "req" : "1",
         "mod_tables" : [
            "table_C.10-4"
         ],
         "desc" : [
            "The top left (after spatial transformation) pixel in the referenced image to be displayed, given as column\\row. Column is the horizontal (before spatial transformation) offset (X) and row is the vertical (before spatial transformation) offset (Y) relative to the origin of the pixel data before spatial transformation, which is 1\\1. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "figure_C.10.4-1"
               },
               "el" : "xref"
            },
            "."
         ]
      },
      "(60xx,1302)" : {
         "mod_tables" : [
            "table_C.9-2"
         ],
         "desc" : [
            "ROI Mean.",
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
         "entity" : "Presentation State",
         "module" : "Overlay Plane",
         "usage" : "C - Required if Overlay is to be applied to referenced image(s) or the Bitmap Display Shutter Module is present",
         "name" : "ROI Mean",
         "req" : "3"
      },
      "(60xx,0045)" : {
         "mod_tables" : [
            "table_C.9-2"
         ],
         "desc" : [
            "Defined Term that identifies the intended purpose of the Overlay Type. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.9.2.1.3",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "module" : "Overlay Plane",
         "usage" : "C - Required if Overlay is to be applied to referenced image(s) or the Bitmap Display Shutter Module is present",
         "entity" : "Presentation State",
         "name" : "Overlay Subtype",
         "req" : "3"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0232)[<2>](0070,0245)" : {
         "desc" : [
            "Floating point value that defines the shadow offset in X direction in Graphic Annotation Units (0070,0005). See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.10.5.1.3.13.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "name" : "Shadow Offset X",
         "req" : "1",
         "entity" : "Presentation State",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation"
      },
      "(0040,0275)[<0>](0040,1002)" : {
         "desc" : "Reason for requesting this procedure.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "name" : "Reason for the Requested Procedure",
         "req" : "3",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M"
      },
      "(0012,0083)[<0>](0012,0084)" : {
         "name" : "Distribution Type",
         "req" : "1C",
         "module" : "Clinical Trial Study",
         "usage" : "U",
         "entity" : "Study",
         "desc" : [
            "The type of distribution for which consent to distribute has been granted.",
            {
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
               ],
               "type" : "variablelist"
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
         ]
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)[<2>](0070,0258)" : {
         "desc" : "Encodes the shadow opacity. The value is encoded as floating point alpha value (0.0-1.0).",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "req" : "1",
         "name" : "Shadow Opacity",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "entity" : "Presentation State"
      },
      "(0070,0001)[<0>](0008,1140)[<1>](0008,1160)" : {
         "name" : "Referenced Frame Number",
         "req" : "1C",
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
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
         "mod_tables" : [
            "table_C.10-5",
            "table_10-3"
         ]
      },
      "(0400,0500)" : {
         "req" : "1C",
         "name" : "Encrypted Attributes Sequence",
         "entity" : "Presentation State",
         "module" : "SOP Common",
         "usage" : "M",
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
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0295)" : {
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "name" : "Graphic Group ID",
         "req" : "3",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "desc" : [
            "A number identifying the group from the Graphic Group Sequence (0070,0234) to which this Item belongs. If this attribute is not present, this Item does not belong to a group.",
            "If Compound Graphic Instance ID (0070,0226) is present in this Item, the value of Graphic Group ID (0070,0295) shall be the same as the value of Graphic Group ID (0070,0295) of the corresponding Item in the Compound Graphic Sequence (0070,0209) with the same Compound Graphic Instance ID (0070,0226)."
         ]
      },
      "(0018,a001)[<0>](0008,1010)" : {
         "req" : "3",
         "name" : "Station Name",
         "entity" : "Presentation State",
         "module" : "SOP Common",
         "usage" : "M",
         "desc" : "User defined name identifying the machine that contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,001a)" : {
         "entity" : "Presentation State",
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Related General SOP Class UID",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
      "(0018,a001)[<0>](0018,a002)" : {
         "desc" : "The Date & Time when the equipment contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Contribution DateTime",
         "req" : "3",
         "entity" : "Presentation State",
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1103)" : {
         "req" : "3",
         "name" : "Person's Telephone Numbers",
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Presentation State",
         "desc" : "Person's telephone number(s)",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ]
      },
      "(0038,0064)[<0>](0040,0032)" : {
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "name" : "Universal Entity ID",
         "req" : "1C",
         "module" : "Patient Study",
         "usage" : "U",
         "entity" : "Study"
      },
      "(0008,1049)[<0>](0008,0081)" : {
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Address",
         "req" : "3",
         "entity" : "Study",
         "usage" : "M",
         "module" : "General Study"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0233)[<2>](0070,0252)" : {
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "entity" : "Presentation State",
         "name" : "Pattern Off Color CIELab Value",
         "req" : "3",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5c"
         ],
         "desc" : [
            "A color triplet value used to encode the background color. The units are specified in PCS-Values, and the value is encoded as CIELab. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.10.7.1.1"
               },
               "el" : "xref"
            },
            "."
         ]
      },
      "(0008,0005)" : {
         "desc" : [
            "Character Set that expands or replaces the Basic Graphic Set.",
            "Required if an expanded or replacement character set is used.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.12.1.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for Defined Terms."
            ]
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Specific Character Set",
         "req" : "1C",
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Presentation State"
      },
      "(0040,0275)[<0>](0032,1064)" : {
         "name" : "Requested Procedure Code Sequence",
         "req" : "3",
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "desc" : [
            "A sequence that conveys the Procedure Type of the requested procedure.",
            "Only a single Item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ]
      },
      "(0028,3110)[<0>](0008,1140)[<1>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.11.8-1",
            "table_10-3",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "module" : "Softcopy VOI LUT",
         "usage" : "C - Required if a VOI LUT is to be applied to referenced image(s)",
         "entity" : "Presentation State"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0232)[<2>](0070,0251)" : {
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "desc" : [
            [
               "A color triplet value used to encode the foreground. The units are specified in PCS-Values, and the value is encoded as CIELab. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.10.7.1.1"
                  }
               },
               "."
            ],
            "This value shall override the Graphic Layer Recommended Display CIELab Value (0070,0401)."
         ],
         "entity" : "Presentation State",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "req" : "1",
         "name" : "Pattern On Color CIELab Value"
      },
      "(0008,0014)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Presentation State",
         "req" : "3",
         "name" : "Instance Creator UID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Uniquely identifies device that created the SOP Instance."
      },
      "(0028,6100)[<0>](0028,9454)" : {
         "entity" : "Presentation State",
         "usage" : "C - Required if the referenced image(s) are multi-frame and are to be subtracted",
         "module" : "Mask",
         "req" : "3",
         "name" : "Mask Selection Mode",
         "mod_tables" : [
            "table_C.7-16"
         ],
         "desc" : [
            "Specifies the method of selection of the mask operations of this item.",
            {
               "title" : "Enumerated Values:",
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
               "type" : "variablelist"
            }
         ]
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0232)[<2>](0070,0254)" : {
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "1",
         "name" : "Line Dashing Style",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "desc" : [
            "The dashing style of the line to be displayed.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "SOLID",
                     null
                  ],
                  [
                     "DASHED",
                     "Draws one part of the line with the Pattern On Color CIELab Value (0070,0251) and the other part with the Pattern Off Color CIELab Value (0070,0252)."
                  ]
               ],
               "title" : "Enumerated Values:"
            },
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.10.5.1.3.13.1",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ]
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
         "module" : "SOP Common",
         "entity" : "Presentation State",
         "name" : "Contributing Equipment Sequence",
         "req" : "3"
      },
      "(0008,0020)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "Date the Study started.",
         "usage" : "M",
         "module" : "General Study",
         "entity" : "Study",
         "name" : "Study Date",
         "req" : "2"
      },
      "(0008,1050)" : {
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "name" : "Performing Physician's Name",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : "Name of the physician(s) administering the Series."
      },
      "(0028,1090)" : [
         {
            "req" : "1C",
            "name" : "Recommended Viewing Mode",
            "entity" : "Presentation State",
            "module" : "Presentation State Mask",
            "usage" : "M",
            "desc" : [
               "Specifies the recommended viewing protocol(s).",
               {
                  "title" : "Enumerated Values:",
                  "list" : [
                     [
                        "SUB",
                        "for subtraction with mask images"
                     ]
                  ],
                  "type" : "variablelist"
               },
               "Required if Mask Subtraction Sequence (0028,6100) is present.",
               {
                  "content" : [
                     "\n                  ",
                     {
                        "content" : [
                           "The requirements in this module are type 1C and a specified Enumerated Value, which override the requirements of the Mask Module."
                        ],
                        "el" : "para"
                     },
                     "\n                "
                  ],
                  "el" : "note"
               }
            ],
            "mod_tables" : [
               "table_C.11.13-1"
            ]
         },
         {
            "name" : "Recommended Viewing Mode",
            "req" : "2",
            "entity" : "Presentation State",
            "usage" : "C - Required if the referenced image(s) are multi-frame and are to be subtracted",
            "module" : "Mask",
            "desc" : [
               "Specifies the recommended viewing protocol(s).",
               {
                  "list" : [
                     [
                        "SUB",
                        "For subtraction with mask images."
                     ],
                     [
                        "NAT",
                        "Native viewing of image as sent."
                     ]
                  ],
                  "title" : "Defined Terms:",
                  "type" : "variablelist"
               },
               {
                  "content" : [
                     "\n                    ",
                     {
                        "el" : "para",
                        "content" : [
                           "If an implementation does not recognize the Defined Term for Recommended Viewing Mode (0028,1090), reverting to native display mode is recommended."
                        ]
                     },
                     "\n                  "
                  ],
                  "el" : "note"
               }
            ],
            "mod_tables" : [
               "table_C.7-16"
            ]
         }
      ],
      "(0012,0082)" : {
         "desc" : "Approval number issued by committee described in Clinical Trial Protocol Ethics Committee Name (0012,0081).",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "req" : "3",
         "name" : "Clinical Trial Protocol Ethics Committee Approval Number",
         "module" : "Clinical Trial Subject",
         "usage" : "U",
         "entity" : "Patient"
      },
      "(0070,0084)" : {
         "entity" : "Presentation State",
         "module" : "Presentation State Identification",
         "usage" : "M",
         "name" : "Content Creator's Name",
         "req" : "2",
         "mod_tables" : [
            "table_C.11.10-1",
            "table_10-12"
         ],
         "desc" : "Name of operator (such as a technologist or physician) creating the content of the SOP Instance."
      },
      "(0018,1623)" : {
         "desc" : [
            "Specifies the Group (60xx) of an Overlay stored within the Presentation State IOD that contains the bitmap data, as defined in the Overlay Plane Module ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.9.2",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "mod_tables" : [
            "table_C.7.6.15-1"
         ],
         "req" : "1",
         "name" : "Shutter Overlay Group",
         "module" : "Bitmap Display Shutter",
         "usage" : "C - Required if a Display Shutter is to be applied to referenced image(s) and the Display Shutter Module is not present",
         "entity" : "Presentation State"
      },
      "(0012,0031)" : {
         "mod_tables" : [
            "table_C.7-2b"
         ],
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
         "usage" : "U",
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
         "name" : "Clinical Trial Site Name",
         "req" : "2"
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
                     "attrs" : {
                        "numeration" : "arabic"
                     }
                  },
                  "\n                    "
               ]
            }
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Presentation State",
         "req" : "1",
         "name" : "Certificate of Signer"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
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
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "req" : "3",
         "name" : "Content Item Modifier Sequence"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a124)" : {
         "req" : "1C",
         "name" : "UID",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series",
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
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0226)" : {
         "name" : "Compound Graphic Instance ID",
         "req" : "3",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "entity" : "Presentation State",
         "desc" : [
            "The identifier of the Compound Graphic represented, in part, by this Item.",
            "The value of this attribute shall be equal to the value of Compound Graphic Instance ID (0070,0226) of the corresponding Item in the Compound Graphic Sequence (0070,0209).",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.10.5.1.3.1",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ]
         ],
         "mod_tables" : [
            "table_C.10-5"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,08ea)" : {
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Measurement Units Code Sequence",
         "req" : "1C",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series"
      },
      "(fffa,fffa)[<0>](0400,0005)" : {
         "entity" : "Presentation State",
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "1",
         "name" : "MAC ID Number",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : "A number used to identify which MAC Parameters Sequence item was used in the calculation of this Digital Signature."
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1150)" : {
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0038,0060)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Identifier of the Service Episode as assigned by the healthcare provider",
         "entity" : "Study",
         "module" : "Patient Study",
         "usage" : "U",
         "name" : "Service Episode ID",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a160)" : {
         "name" : "Text Value",
         "req" : "1C",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0028,1054)" : {
         "req" : "1C",
         "name" : "Rescale Type",
         "entity" : "Presentation State",
         "usage" : "C - Required if a Modality LUT is to be applied to referenced image(s)",
         "module" : "Modality LUT",
         "desc" : [
            "Specifies the output units of Rescale Slope (0028,1053) and Rescale Intercept (0028,1052).",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.11.1.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            "Required if Rescale Intercept is present."
         ],
         "mod_tables" : [
            "table_C.11-1b"
         ]
      },
      "(0070,005a)[<0>](0008,1140)[<1>](0008,1160)" : {
         "name" : "Referenced Frame Number",
         "req" : "1C",
         "entity" : "Presentation State",
         "usage" : "M",
         "module" : "Displayed Area",
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
            "table_C.10-4",
            "table_10-3"
         ]
      },
      "(0008,0110)[<0>](0008,0114)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The coding scheme identifier as defined in an external registry. Required if coding scheme is registered and Coding Scheme UID (0008,010C) is not present.",
         "entity" : "Presentation State",
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "2C",
         "name" : "Coding Scheme External ID"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0231)[<2>](0070,0249)" : {
         "desc" : [
            "Specifies whether or not the text shall be rendered in bold.",
            {
               "list" : [
                  [
                     "Y",
                     "yes"
                  ],
                  [
                     "N",
                     "no"
                  ]
               ],
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "req" : "1",
         "name" : "Bold",
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)"
      },
      "(0038,0014)" : {
         "desc" : [
            "Identifier of the Assigning Authority that issued Admission ID (0038,0010).",
            "Only a single Item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Issuer of Admission ID Sequence",
         "req" : "3",
         "entity" : "Study",
         "module" : "Patient Study",
         "usage" : "U"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0232)[<2>](0070,0244)" : {
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "entity" : "Presentation State",
         "name" : "Shadow Style",
         "req" : "1",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "desc" : [
            "The shadow style of the line to be displayed.",
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "NORMAL",
                     "the shadow is drawn on 1 side of the contour of the text object"
                  ],
                  [
                     "OUTLINED",
                     "the shadow is drawn around the contour of the text object"
                  ],
                  [
                     "OFF",
                     "no shadow"
                  ]
               ],
               "type" : "variablelist"
            },
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.10.5.1.3.13.2",
                     "xrefstyle" : "select: label"
                  }
               }
            ]
         ]
      },
      "(0040,a390)[<0>](0040,e010)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Retrieval access path to HL7 Structured Document. Includes fully specified scheme, authority, path, and query in accordance with RFC 2396",
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Presentation State",
         "name" : "Retrieve URI",
         "req" : "3"
      },
      "(0018,a001)[<0>](0018,a003)" : {
         "req" : "3",
         "name" : "Contribution Description",
         "entity" : "Presentation State",
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : "Description of the contribution the equipment made to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0018,1612)" : {
         "entity" : "Presentation State",
         "usage" : "C - Required if a Display Shutter is to be applied to referenced image(s) and the Bitmap Display Shutter Module is not present",
         "module" : "Display Shutter",
         "req" : "1C",
         "name" : "Radius of Circular Shutter",
         "mod_tables" : [
            "table_C.7-17a"
         ],
         "desc" : "Required if Shutter Shape (0018,1600) is CIRCULAR. Radius of the circular shutter with respect to pixels in the image given as a number of pixels along the row direction."
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0233)[<2>](0070,0252)" : {
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5c"
         ],
         "desc" : [
            "A color triplet value used to encode the background color. The units are specified in PCS-Values, and the value is encoded as CIELab. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.10.7.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "3",
         "name" : "Pattern Off Color CIELab Value"
      },
      "(0008,1120)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "name" : "Referenced Patient Sequence",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "A sequence that provides reference to a Patient SOP Class/Instance pair.",
            "Only a single Item is permitted in this Sequence."
         ]
      },
      "(0038,0064)" : {
         "name" : "Issuer of Service Episode ID Sequence",
         "req" : "3",
         "usage" : "U",
         "module" : "Patient Study",
         "entity" : "Study",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Service Episode ID (0038,0060).",
            "Only a single Item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0012,0050)" : {
         "module" : "Clinical Trial Study",
         "usage" : "U",
         "entity" : "Study",
         "req" : "2",
         "name" : "Clinical Trial Time Point ID",
         "mod_tables" : [
            "table_C.7-4b"
         ],
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
         ]
      },
      "(0070,0080)" : {
         "entity" : "Presentation State",
         "module" : "Presentation State Identification",
         "usage" : "M",
         "name" : "Content Label",
         "req" : "1",
         "mod_tables" : [
            "table_C.11.10-1",
            "table_10-12"
         ],
         "desc" : "A label that is used to identify this SOP Instance."
      },
      "(0028,3110)[<0>](0028,1055)" : {
         "desc" : "Free form explanation of the meaning of the Window Center and Width. Multiple values correspond to multiple Window Center and Width values.",
         "mod_tables" : [
            "table_C.11.8-1",
            "table_C.11-2b"
         ],
         "name" : "Window Center & Width Explanation",
         "req" : "3",
         "module" : "Softcopy VOI LUT",
         "usage" : "C - Required if a VOI LUT is to be applied to referenced image(s)",
         "entity" : "Presentation State"
      },
      "(0008,1250)[<0>](0020,000e)" : {
         "desc" : "Instance UID of Related Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "req" : "1",
         "name" : "Series Instance UID",
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0070,0001)[<0>](0008,1140)[<1>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "entity" : "Presentation State",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.10-5",
            "table_10-3",
            "table_10-11"
         ]
      },
      "(0020,9172)[<0>](0008,1160)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Presentation State",
         "req" : "1C",
         "name" : "Referenced Frame Number",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
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
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ]
      },
      "(0018,1000)" : {
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
         "entity" : "Equipment",
         "module" : "General Equipment",
         "usage" : "M",
         "name" : "Device Serial Number",
         "req" : "3"
      },
      "(0070,0060)[<0>](0070,0066)" : {
         "module" : "Graphic Layer",
         "usage" : "C - Required if Graphic Annotations or Overlays or Curves are to be applied to referenced image(s)",
         "entity" : "Presentation State",
         "name" : "Graphic Layer Recommended Display Grayscale Value",
         "req" : "3",
         "mod_tables" : [
            "table_C.10-7"
         ],
         "desc" : [
            "A default single gray unsigned value in which it is recommended that the layer be rendered on a monochrome display. The units are specified in P-Values from a minimum of 0000H (black) up to a maximum of FFFFH (white).",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "content" : [
                        "The maximum P-Value for this Attribute may be different from the maximum P-Value from the output of the Presentation LUT, which may be less than 16 bits in depth."
                     ]
                  },
                  "\n                "
               ]
            }
         ]
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0273)" : {
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "name" : "Rotation Point",
         "req" : "1C",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "desc" : [
            "The rotation point of this Compound Graphic.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.10.5.1.3"
                  }
               },
               "."
            ],
            "Required if Rotation Angle (0070,0230) is present or if Compound Graphic Type (0070,0294) is CUTLINE or INFINITELINE."
         ]
      },
      "(0010,2298)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
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
         "module" : "Patient",
         "usage" : "M",
         "entity" : "Patient",
         "name" : "Responsible Person Role",
         "req" : "1C"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0233)[<2>](0070,0284)" : {
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "entity" : "Presentation State",
         "name" : "Pattern On Opacity",
         "req" : "1",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5c"
         ],
         "desc" : "Encodes the foreground opacity. The value is encoded as floating point alpha value (0.0-1.0)."
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0024)" : {
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "name" : "Graphic Filled",
         "req" : "1C",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "desc" : [
            [
               "Whether or not the closed graphics element is displayed as filled (in some unspecified manner that shall be distinguishable from an outline) or as an outline. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.10.5.1.2"
                  },
                  "el" : "xref"
               },
               "."
            ],
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "Y",
                     "yes"
                  ],
                  [
                     "N",
                     "no"
                  ]
               ]
            },
            "Required if Graphic Data (0070,0022) is \"closed\", that is Graphic Type (0070,0023) is CIRCLE or ELLIPSE, or Graphic Type (0070,0023) is POLYLINE or INTERPOLATED and the first data point is the same as the last data point."
         ]
      },
      "(0010,0010)" : {
         "desc" : "Patient's full name.",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "2",
         "name" : "Patient's Name",
         "module" : "Patient",
         "usage" : "M",
         "entity" : "Patient"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0226)" : {
         "desc" : [
            "The identifier of the Compound Graphic represented, in part, by this Item.",
            "The value of this attribute shall be equal to the value of Compound Graphic Instance ID (0070,0226) of the corresponding Item in the Compound Graphic Sequence (0070,0209).",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.10.5.1.3.1"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "mod_tables" : [
            "table_C.10-5"
         ],
         "name" : "Compound Graphic Instance ID",
         "req" : "3",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "entity" : "Presentation State"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0262)" : {
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "name" : "Diameter of Visibility",
         "req" : "1C",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "desc" : [
            "Diameter of the circle around the CROSSHAIR origin where the CROSSHAIR is visible. The Compound Graphic Units (0070,0282) of the Diameter of Visibility (0070,0262) shall be DISPLAY.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.10.5.1.3.10"
                  }
               }
            ],
            "Required if Compound Graphic Type (0070,0294) equals CROSSHAIR."
         ]
      },
      "(0010,4000)" : {
         "req" : "3",
         "name" : "Patient Comments",
         "module" : "Patient",
         "usage" : "M",
         "entity" : "Patient",
         "desc" : "User-defined additional information about the patient.",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0233)[<2>](0070,0285)" : {
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "entity" : "Presentation State",
         "req" : "1",
         "name" : "Pattern Off Opacity",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5c"
         ],
         "desc" : "Encodes the background opacity. The value is encoded as floating point alpha value (0.0-1.0)."
      },
      "(0040,0275)[<0>](0040,1001)" : {
         "name" : "Requested Procedure ID",
         "req" : "1C",
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "Identifier that identifies the Requested Procedure in the Imaging Service Request.",
            "Required if procedure was scheduled. May be present otherwise.",
            {
               "content" : [
                  "\n                ",
                  {
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
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ]
      },
      "(fffa,fffa)[<0>](0400,0105)" : {
         "name" : "Digital Signature DateTime",
         "req" : "1",
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Presentation State",
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
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0010,2294)[<0>](0010,2296)" : {
         "desc" : [
            "Identification of the organization with which an animal is registered.",
            "Only a single Item shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "1",
         "name" : "Breed Registry Code Sequence",
         "entity" : "Patient",
         "usage" : "M",
         "module" : "Patient"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0231)[<2>](0070,0250)" : {
         "desc" : [
            "Specifies whether or not the text shall be rendered italicized.",
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "Y",
                     "yes"
                  ],
                  [
                     "N",
                     "no"
                  ]
               ]
            }
         ],
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "req" : "1",
         "name" : "Italic",
         "entity" : "Presentation State",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation"
      },
      "(0038,0064)[<0>](0040,0033)" : {
         "req" : "1C",
         "name" : "Universal Entity ID Type",
         "usage" : "U",
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
         ],
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a124)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1C",
         "name" : "UID"
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
         "name" : "Signature",
         "req" : "1",
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Presentation State"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)" : {
         "desc" : "Sequence that specifies the context for the Scheduled Protocol Code Sequence Item. One or more Items are permitted in this sequence.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "name" : "Protocol Context Sequence",
         "req" : "3",
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series"
      },
      "(0008,1052)[<0>](0008,0080)" : {
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "req" : "1C",
         "name" : "Institution Name",
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0232)[<2>](0070,0252)" : {
         "desc" : [
            "A color triplet value used to encode the color of parts of the line that are off, i.e., the background. The units are specified in PCS-Values, and the value is encoded as CIELab. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.10.7.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "req" : "3",
         "name" : "Pattern Off Color CIELab Value",
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)"
      },
      "(0012,0042)" : {
         "usage" : "U",
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
         "name" : "Clinical Trial Subject Reading ID",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "desc" : [
            "Identifies the subject for blinded evaluations. Shall be present if Clinical Trial Subject ID (0012,0040) is absent. May be present otherwise. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.1.3.1.7",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ]
      },
      "(0070,0082)" : {
         "desc" : [
            "Date on which this presentation was created.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "This date may be different from the date that the DICOM SOP Instance was created, since the presentation state information contained may have been recorded earlier."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.11.10-1"
         ],
         "req" : "1",
         "name" : "Presentation Creation Date",
         "entity" : "Presentation State",
         "module" : "Presentation State Identification",
         "usage" : "M"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0232)[<2>](0070,0252)" : {
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "desc" : [
            "A color triplet value used to encode the color of parts of the line that are off, i.e., the background. The units are specified in PCS-Values, and the value is encoded as CIELab. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.10.7.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "entity" : "Presentation State",
         "name" : "Pattern Off Color CIELab Value",
         "req" : "3"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0231)[<2>](0070,0228)" : {
         "name" : "Font Name Type",
         "req" : "1C",
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "desc" : [
            {
               "type" : "variablelist",
               "title" : "Defined Terms:",
               "list" : [
                  [
                     "ISO_32000",
                     null
                  ]
               ]
            },
            "Required if Font Name (0070,0227) is present.",
            {
               "el" : "note",
               "content" : [
                  "\n                        ",
                  {
                     "content" : [
                        "This is the font naming system used by Adobe PDF and defined in ISO/IEC 14496-22."
                     ],
                     "el" : "para"
                  },
                  "\n                      "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ]
      },
      "(0008,1115)[<0>](0020,000e)" : {
         "desc" : [
            "Unique identifier of a Series that is part of the Study defined by the Study Instance UID (0020,000D) in the enclosing data set.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "The Study Instance UID (0020,000D) value will be that of the presentation state itself, unless the macro is invoked from Blending Sequence (0070,0402) in the Presentation State Blending Module, in which case it will be explicitly specified."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.11.11-1b"
         ],
         "req" : "1",
         "name" : "Series Instance UID",
         "entity" : "Presentation State",
         "module" : "Presentation State Relationship",
         "usage" : "M"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0287)[<2>](0070,0288)" : {
         "entity" : "Presentation State",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "name" : "Tick Position",
         "req" : "1",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "desc" : "The position of the tick in the range 0.0 (start point) to 1.0 (end point)."
      },
      "(0018,a001)[<0>](0018,1200)" : {
         "mod_tables" : [
            "table_C.12-1"
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
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Presentation State",
         "req" : "3",
         "name" : "Date of Last Calibration"
      },
      "(0400,0561)[<0>](0400,0550)[0](gggg,eeee)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Presentation State",
         "name" : "Any Attribute from the main data set that was modified or removed.",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "May include Sequence Attributes and their Items."
      },
      "(0028,3110)[<0>](0028,3010)[<1>](0028,3006)" : {
         "mod_tables" : [
            "table_C.11.8-1",
            "table_C.11-2b"
         ],
         "desc" : "LUT Data in this Sequence.",
         "entity" : "Presentation State",
         "usage" : "C - Required if a VOI LUT is to be applied to referenced image(s)",
         "module" : "Softcopy VOI LUT",
         "req" : "1",
         "name" : "LUT Data"
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
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "req" : "1",
         "name" : "Clinical Trial Protocol ID",
         "module" : "Clinical Trial Subject",
         "usage" : "U",
         "entity" : "Patient"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0021)" : {
         "mod_tables" : [
            "table_C.10-5"
         ],
         "desc" : "Number of data points in this graphic.",
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "name" : "Number of Graphic Points",
         "req" : "1"
      },
      "(0010,0020)" : {
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "2",
         "name" : "Patient ID",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "Primary hospital identification number or code for the patient."
      },
      "(0018,a001)[<0>](0008,1040)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Department in the institution where the equipment that contributed to the composite instance is located.",
         "entity" : "Presentation State",
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "3",
         "name" : "Institutional Department Name"
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
      "Can't handle table_8.8-1 (in table_C.11.10-1:table_10-12 after (0008,0006))",
      "Can't handle table_8.8-1 (in table_C.11.10-1:table_10-12:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.11.10-1:table_10-12:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.12-1 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_C.12-6 after (0400,0401))"
   ]
}