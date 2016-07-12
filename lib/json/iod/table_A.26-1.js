var data = {
   "tags" : {
      "(0018,0036)[<0>](0018,003a)" : {
         "module" : "Intervention",
         "entity" : "Image",
         "desc" : "Further description in free form text describing the therapy or other intervention.",
         "req" : "3",
         "usage" : "U",
         "name" : "Intervention Description",
         "mod_tables" : [
            "table_C.7-19"
         ]
      },
      "(0008,2112)[<0>](0008,1155)" : {
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3",
            "table_10-11"
         ],
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Image",
         "module" : "General Image"
      },
      "(0012,0042)" : {
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
         ],
         "entity" : "Patient",
         "module" : "Clinical Trial Subject",
         "usage" : "U",
         "name" : "Clinical Trial Subject Reading ID",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "req" : "1C"
      },
      "(0008,0117)" : {
         "module" : "SOP Common",
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
         "entity" : "Image",
         "req" : "3",
         "usage" : "M",
         "name" : "Context UID",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0018,7024)" : {
         "module" : "DX Detector",
         "desc" : [
            "Shape of the active area.",
            {
               "title" : "Enumerated Values:",
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
               "type" : "variablelist"
            },
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "This may be different from the Field of View Shape (0018,1147), and should not be assumed to describe the stored image."
                     ],
                     "attrs" : {
                        "xml:id" : "para_2036c76a-84bc-4d95-b280-e8192289ded7"
                     }
                  },
                  "\n                  "
               ]
            }
         ],
         "entity" : "Image",
         "req" : "3",
         "usage" : "M",
         "name" : "Detector Active Shape",
         "mod_tables" : [
            "table_C.8-71b"
         ]
      },
      "(0018,5100)" : [
         {
            "req" : "2C",
            "name" : "Patient Position",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-5a"
            ],
            "module" : "General Series",
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
            "entity" : "Series"
         },
         {
            "mod_tables" : [
               "table_C.8-72"
            ],
            "name" : "Patient Position",
            "usage" : "U",
            "req" : "3",
            "desc" : [
               "Description of imaging subject's position relative to the equipment.",
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
               ],
               "If present, shall be consistent with Patient Gantry Relationship Code Sequence (0054,0414) and Patient Orientation Modifier Code Sequence (0054,0412)."
            ],
            "entity" : "Image",
            "module" : "DX Positioning"
         }
      ],
      "(0008,1049)[<0>](0040,1104)" : {
         "req" : "3",
         "name" : "Person's Telecom Information",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "entity" : "Study",
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
         ]
      },
      "(0028,0108)" : {
         "module" : "General Series",
         "desc" : "The minimum value of all images in this Series.",
         "entity" : "Series",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "name" : "Smallest Pixel Value in Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a043)" : {
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
         ],
         "entity" : "Series"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,003a)" : {
         "req" : "3",
         "usage" : "M",
         "name" : "Assigning Agency or Department Code Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "entity" : "Patient",
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
         ]
      },
      "(0040,0244)" : {
         "desc" : "Date on which the Performed Procedure Step started.",
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "name" : "Performed Procedure Step Start Date",
         "usage" : "M",
         "req" : "3"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0062,000b)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Referenced Segment Number",
         "usage" : "U",
         "req" : "1C",
         "entity" : "Image",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "module" : "Specimen"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0008,1199)[<2>](0008,1150)" : {
         "module" : "General Image",
         "entity" : "Image",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(0010,1100)[<0>](0040,e025)[<1>](0008,1190)" : {
         "entity" : "Patient",
         "desc" : "URL specifying the location of the referenced instance(s).",
         "module" : "Patient",
         "name" : "Retrieve URL",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "req" : "1"
      },
      "(0010,2180)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Occupation",
         "usage" : "U",
         "req" : "3",
         "desc" : "Occupation of the Patient.",
         "entity" : "Study",
         "module" : "Patient Study"
      },
      "(0060,3000)[<0>](0060,3020)" : {
         "module" : "Image Histogram",
         "desc" : "Histogram Data encoded as 32 bit unsigned counts of the number of pixel values in each bin.",
         "entity" : "Image",
         "req" : "1",
         "mod_tables" : [
            "table_C.11.5-1"
         ],
         "usage" : "U",
         "name" : "Histogram Data"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a160)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Text Value",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "module" : "General Series"
      },
      "(0008,1250)" : {
         "req" : "3",
         "usage" : "M",
         "name" : "Related Series Sequence",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "entity" : "Series",
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
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_41b72cf3-4134-44f1-84cc-a28f024a1c1c"
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
                                 "content" : [
                                    "The related series may have different Frames of Reference and hence require some sort of registration before spatial coordinates can be directly compared."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_e9e67beb-8432-4dbc-9f6a-df5800189967"
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
                                 "attrs" : {
                                    "xml:id" : "para_7ef219a6-dfda-4b92-a778-37d54ca1cc2c"
                                 },
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
         ]
      },
      "(0028,0301)" : [
         {
            "module" : "General Image",
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
            "entity" : "Image",
            "req" : "3",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "name" : "Burned In Annotation",
            "usage" : "M"
         },
         {
            "req" : "1",
            "name" : "Burned In Annotation",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-70"
            ],
            "module" : "DX Image",
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
               }
            ],
            "entity" : "Image"
         }
      ],
      "(0040,0560)[<0>](0040,0610)" : {
         "module" : "Specimen",
         "entity" : "Image",
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
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Specimen Preparation Sequence",
         "usage" : "U"
      },
      "(0040,0245)" : {
         "entity" : "Series",
         "desc" : "Time on which the Performed Procedure Step started.",
         "module" : "General Series",
         "usage" : "M",
         "name" : "Performed Procedure Step Start Time",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "req" : "3"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C",
         "name" : "Universal Entity ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ]
      },
      "(0010,2201)" : {
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
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "name" : "Patient Species Description",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "1C"
      },
      "(0018,1704)" : {
         "mod_tables" : [
            "table_C.8-28b"
         ],
         "usage" : "U",
         "name" : "Collimator Right Vertical Edge",
         "req" : "1C",
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
         "entity" : "Image",
         "module" : "X-Ray Collimator"
      },
      "(0018,7026)" : {
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "usage" : "M",
         "name" : "Detector Active Dimension(s)",
         "req" : "3",
         "entity" : "Image",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_a751e372-85ed-439c-bc34-7e5509e1268c"
                     }
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "module" : "DX Detector"
      },
      "(0010,0218)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Strain Additional Information",
         "usage" : "M",
         "req" : "3",
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
         ],
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a043)" : {
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Concept Name Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1"
      },
      "(0008,1052)" : {
         "name" : "Performing Physician Identification Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "req" : "3",
         "desc" : [
            "Identification of the physician(s) administering the Series.",
            "One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Performing Physician's Name (0008,1050), if present."
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1160)" : {
         "module" : "Patient",
         "entity" : "Patient",
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
                        "xml:id" : "para_e2359edc-51fe-4f62-abc5-a7447e377de7"
                     }
                  },
                  "\n              "
               ]
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "req" : "1C",
         "name" : "Referenced Frame Number",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ]
      },
      "(0008,1052)[<0>](0040,1104)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Person's Telecom Information",
         "module" : "General Series",
         "entity" : "Series",
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
                                 "content" : [
                                    "It is recommended that this attribute be treated as equivalent to HL7v2 (v2.5 or later) field ROL-12, and be formatted in accordance with the HL7v2 XTN data type (without escapes for HL7 message structure reserved characters). See additional notes in the Module invoking this Macro."
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
            }
         ]
      },
      "(0040,0275)[<0>](0040,0007)" : {
         "desc" : "Institution-generated description or classification of the Scheduled Procedure Step to be performed.",
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "name" : "Scheduled Procedure Step Description",
         "usage" : "M",
         "req" : "3"
      },
      "(0018,1150)" : [
         {
            "req" : "3",
            "mod_tables" : [
               "table_C.8-33"
            ],
            "name" : "Exposure Time",
            "usage" : "U",
            "module" : "X-Ray Acquisition Dose",
            "desc" : "Duration of X-Ray exposure in msec.",
            "entity" : "Image"
         },
         {
            "req" : "3",
            "name" : "Exposure Time",
            "usage" : "U",
            "mod_tables" : [
               "table_C.8-34"
            ],
            "module" : "X-Ray Generation",
            "desc" : "Duration of X-Ray exposure in msec.",
            "entity" : "Image"
         }
      ],
      "(0018,7010)" : {
         "desc" : "Total number of X-Ray exposures that have been made on the detector used to acquire this image as identified in Detector ID (0018,700A) since it was calibrated.",
         "entity" : "Image",
         "module" : "DX Detector",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "name" : "Exposures on Detector Since Last Calibration",
         "usage" : "M",
         "req" : "3"
      },
      "(0010,21b0)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "name" : "Additional Patient History",
         "req" : "3",
         "desc" : "Additional information about the Patient's medical history.",
         "entity" : "Study",
         "module" : "Patient Study"
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
         "entity" : "Image",
         "module" : "Device",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "name" : "Device Volume",
         "usage" : "U",
         "req" : "3"
      },
      "(0008,010f)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Context Identifier",
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Image",
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
         ]
      },
      "(0008,103e)" : {
         "desc" : "Description of the Series",
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Series Description",
         "usage" : "M",
         "req" : "3"
      },
      "(0018,8150)" : [
         {
            "req" : "3",
            "name" : "Exposure Time in \u00b5S",
            "usage" : "U",
            "mod_tables" : [
               "table_C.8-33"
            ],
            "module" : "X-Ray Acquisition Dose",
            "entity" : "Image",
            "desc" : "Duration of X-Ray exposure in \u00b5sec."
         },
         {
            "mod_tables" : [
               "table_C.8-34"
            ],
            "usage" : "U",
            "name" : "Exposure Time in \u00b5S",
            "req" : "3",
            "entity" : "Image",
            "desc" : "Duration of X-Ray exposure in \u00b5sec.",
            "module" : "X-Ray Generation"
         }
      ],
      "(0008,1140)[<0>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Image",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3",
            "table_10-11"
         ],
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "req" : "1"
      },
      "(0012,0083)[<0>](0012,0084)" : {
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
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.2.3.1.2"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Required if Consent for Distribution Flag (0012,0085) equals YES or WITHDRAWN."
         ],
         "module" : "Clinical Trial Study",
         "usage" : "U",
         "name" : "Distribution Type",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "req" : "1C"
      },
      "(0040,0560)[<0>](0040,059a)" : {
         "module" : "Specimen",
         "desc" : [
            "Specimen Type.",
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "Image",
         "req" : "3",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Specimen Type Code Sequence",
         "usage" : "U"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a163)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Rational Denominator Value",
         "module" : "General Image",
         "entity" : "Image",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ]
      },
      "(0028,1053)" : {
         "mod_tables" : [
            "table_C.8-70"
         ],
         "usage" : "M",
         "name" : "Rescale Slope",
         "req" : "1",
         "desc" : [
            "m in the equation specified by Rescale Intercept (0028,1052).",
            {
               "list" : [
                  [
                     "1",
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
         "entity" : "Image",
         "module" : "DX Image"
      },
      "(4ffe,0001)[<0>](0400,0005)" : {
         "req" : "1",
         "name" : "MAC ID Number",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "desc" : "A number, unique within this SOP Instance, used to identify this MAC Parameters Sequence (4FFE,0001) item from an Item of the Digital Signatures Sequence (FFFA,FFFA).",
         "entity" : "Image"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M",
         "name" : "Universal Entity ID",
         "req" : "1C"
      },
      "(0018,8151)" : [
         {
            "entity" : "Image",
            "desc" : "X-Ray Tube Current in \u00b5A.",
            "module" : "X-Ray Acquisition Dose",
            "usage" : "U",
            "name" : "X-Ray Tube Current in \u00b5A",
            "mod_tables" : [
               "table_C.8-33"
            ],
            "req" : "3"
         },
         {
            "name" : "X-Ray Tube Current in \u00b5A",
            "usage" : "U",
            "mod_tables" : [
               "table_C.8-34"
            ],
            "req" : "3",
            "desc" : "X-Ray Tube Current in \u00b5A.",
            "entity" : "Image",
            "module" : "X-Ray Generation"
         }
      ],
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a30a)" : {
         "module" : "Specimen",
         "entity" : "Image",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "req" : "1C",
         "name" : "Numeric Value",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0008,0096)" : {
         "module" : "General Study",
         "entity" : "Study",
         "desc" : [
            "Identification of the patient's referring physician.",
            "Only a single item is permitted in this Sequence."
         ],
         "req" : "3",
         "name" : "Referring Physician Identification Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a168)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "name" : "Concept Code Sequence",
         "req" : "1C",
         "entity" : "Image",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "module" : "Specimen"
      },
      "(0018,7052)" : [
         {
            "req" : "3",
            "mod_tables" : [
               "table_C.8-33",
               "table_C.8-35a"
            ],
            "name" : "Filter Thickness Minimum",
            "usage" : "U",
            "module" : "X-Ray Acquisition Dose",
            "desc" : "The minimum thickness in mm of the X-Ray absorbing material used in the filters. May be multi-valued, with values corresponding to the respective values in Filter Material (0018,7050).",
            "entity" : "Image"
         },
         {
            "mod_tables" : [
               "table_C.8-35a"
            ],
            "usage" : "U",
            "name" : "Filter Thickness Minimum",
            "req" : "3",
            "desc" : "The minimum thickness in mm of the X-Ray absorbing material used in the filters. May be multi-valued, with values corresponding to the respective values in Filter Material (0018,7050).",
            "entity" : "Image",
            "module" : "X-Ray Filtration"
         }
      ],
      "(0040,0275)[<0>](0032,1064)" : {
         "desc" : [
            "A sequence that conveys the Procedure Type of the requested procedure.",
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Requested Procedure Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "req" : "3"
      },
      "(0008,1049)" : {
         "usage" : "M",
         "name" : "Physician(s) of Record Identification Sequence",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "3",
         "desc" : [
            "Identification of the physician(s) who are responsible for overall patient care at time of Study.",
            "One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Physician(s) of Record (0008,1048), if present."
         ],
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0010,0219)" : {
         "desc" : [
            [
               "A coded identification of the strain of the patient. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.1.1.1.4",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ],
            "One or more Items are permitted in this sequence. If more than one item is present, each item represents the same information but encoded using a different coding scheme (rather than post-coordinated modifiers)."
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "name" : "Strain Code Sequence",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3"
      },
      "(0008,1200)" : {
         "req" : "1C",
         "usage" : "U",
         "name" : "Studies Containing Other Referenced Instances Sequence",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "module" : "Common Instance Reference",
         "desc" : [
            "Sequence of items each identifying a Study other than the Study of which this Instance is a part, which Studies contain Instances that are referenced elsewhere in this Instance.",
            "One or more Items shall be included in this Sequence.",
            "Required if this Instance references Instances in other Studies."
         ],
         "entity" : "Image"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0033)" : {
         "entity" : "Patient",
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
         ],
         "module" : "Patient",
         "name" : "Universal Entity ID Type",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "req" : "1C"
      },
      "(0008,0018)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "SOP Instance UID",
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
         "module" : "SOP Common"
      },
      "(0018,1450)" : {
         "name" : "Column Angulation",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-72"
         ],
         "req" : "3",
         "entity" : "Image",
         "desc" : [
            "Angle of the X-Ray beam in degree relative to an orthogonal axis to the detector plane. Positive values indicate that the tilt is toward the head of the table.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_67d0bb7d-c6a2-4344-a5f2-4b1e37b87697"
                     },
                     "content" : [
                        "The detector plane is assumed to be parallel to the table plane."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            },
            "Only meaningful if Positioner Type (0018,1508) is COLUMN."
         ],
         "module" : "DX Positioning"
      },
      "(0008,0300)[<0>](0008,0301)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Private Group Reference",
         "req" : "1",
         "entity" : "Image",
         "desc" : "Odd group number within which the Private Data Element block is reserved.",
         "module" : "SOP Common"
      },
      "(0010,2293)" : {
         "name" : "Patient Breed Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "2C",
         "entity" : "Patient",
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
            "Zero or more Items shall be included in this Sequence.",
            "Required if the patient is an animal."
         ],
         "module" : "Patient"
      },
      "(0010,0216)[<0>](0010,0214)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Strain Stock Number",
         "usage" : "M",
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
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0020,000e)" : {
         "module" : "General Series",
         "entity" : "Series",
         "desc" : "Unique identifier of the Series.",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Series Instance UID",
         "usage" : "M"
      },
      "(0008,1072)[<0>](0008,0080)" : {
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Institution Name",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "req" : "1C"
      },
      " (0010,0027) " : {
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
         "module" : "Patient",
         "name" : "Group of Patients Identification Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "req" : "\n                  3 "
      },
      "(0040,9096)[<0>](0040,9210)" : {
         "module" : "General Image",
         "entity" : "Image",
         "desc" : "Label that is used to identify the transformation of this Item.",
         "req" : "1",
         "name" : "LUT Label",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a124)" : {
         "entity" : "Image",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "module" : "Specimen",
         "usage" : "U",
         "name" : "UID",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1C"
      },
      "(0040,0555)[<0>](0040,a121)" : {
         "module" : "Acquisition Context",
         "entity" : "Image",
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a date.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "The purpose or role of the date value could be specified in Concept Name Code Sequence (0040,A043)."
                     ],
                     "attrs" : {
                        "xml:id" : "para_3da4ec3b-efe8-40a6-9c46-16bb7c8b79ca"
                     }
                  },
                  "\n                  "
               ]
            },
            "Required if the value that Concept Name Code Sequence (0040,A043) requires (implies) is a date. Shall not be present otherwise."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "usage" : "M - See ",
         "name" : "Date"
      },
      "(0040,0520)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Container Component Sequence",
         "usage" : "U",
         "module" : "Specimen",
         "entity" : "Image",
         "desc" : [
            "Description of one or more components of the container (e.g., description of the slide and of the coverslip).",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0008,0096)[<0>](0040,1101)" : {
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Study",
         "module" : "General Study",
         "name" : "Person Identification Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "1"
      },
      "(0040,0312)" : {
         "name" : "X-Ray Output",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-33"
         ],
         "req" : "3",
         "desc" : [
            "The X-Ray output at the patient entrance surface and kVp used to acquire the image, measured in mGy/mAs.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_7a8ca4f4-9633-4006-954b-df72c45e2a4b"
                     },
                     "el" : "para",
                     "content" : [
                        "This value may be a calibrated value rather than measured during the exposure."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "entity" : "Image",
         "module" : "X-Ray Acquisition Dose"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1150)" : {
         "req" : "1",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a121)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Date",
         "usage" : "U",
         "req" : "1C",
         "entity" : "Image",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "module" : "Specimen"
      },
      "(0008,1052)[<0>](0008,0081)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "name" : "Institution Address",
         "usage" : "M",
         "req" : "3",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0008,0096)[<0>](0008,0081)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Institution Address",
         "req" : "3",
         "entity" : "Study",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "module" : "General Study"
      },
      "(0010,0032)" : {
         "module" : "Patient",
         "desc" : "Birth time of the Patient.",
         "entity" : "Patient",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient's Birth Time",
         "usage" : "M"
      },
      "(0018,11a4)" : {
         "name" : "Paddle Description",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-72"
         ],
         "req" : "3",
         "desc" : "Description of the compression paddle, if compression was applied to the body part during exposure.",
         "entity" : "Image",
         "module" : "DX Positioning"
      },
      "(0028,0011)" : {
         "entity" : "Image",
         "desc" : "Number of columns in the image",
         "module" : "Image Pixel",
         "name" : "Columns",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "req" : "1"
      },
      "(0018,1622)" : {
         "module" : "Display Shutter",
         "entity" : "Image",
         "desc" : [
            "A single gray unsigned value used to replace those parts of the image occluded by the shutter, when rendered on a monochrome display. The units are specified in P-Values, from a minimum of 0000H (black) up to a maximum of FFFFH (white).",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "The maximum P-Value for this Attribute may be different from the maximum P-Value from the output of the Presentation LUT, which may be less than 16 bits in depth."
                     ],
                     "attrs" : {
                        "xml:id" : "para_ffd1df8a-26f5-4fb0-aeb7-f15acf3c3a88"
                     }
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.7-17a"
         ],
         "name" : "Shutter Presentation Value",
         "usage" : "U"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a120)" : {
         "name" : "DateTime",
         "usage" : "M",
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
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0018,7001)" : {
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "name" : "Detector Temperature",
         "usage" : "M",
         "req" : "3",
         "entity" : "Image",
         "desc" : "Detector temperature during exposure in degrees Celsius.",
         "module" : "DX Detector"
      },
      "(0040,0275)[<0>](0040,1002)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M",
         "name" : "Reason for the Requested Procedure",
         "req" : "3",
         "desc" : "Reason for requesting this procedure.",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0018,1000)" : {
         "desc" : [
            "Manufacturer's serial number of the equipment that produced the composite instances.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_14bc1eda-9c90-459e-81ea-acab1d86e33b"
                     },
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
         "module" : "General Equipment",
         "usage" : "M",
         "name" : "Device Serial Number",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1155)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "req" : "1",
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "General Series"
      },
      "(0010,1100)[<0>](0020,000e)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "desc" : [
            "Unique identifier for the Series that is part of the Study identified in Study Instance UID (0020,000D), if present, and contains the referenced object instance(s).",
            "Required if Type of Instances (0040,E020) is DICOM"
         ],
         "req" : "1C",
         "usage" : "M",
         "name" : "Series Instance UID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ]
      },
      "(0018,701a)" : {
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "usage" : "M",
         "name" : "Detector Binning",
         "req" : "3",
         "entity" : "Image",
         "desc" : "Number of active detectors used to generate a single pixel. Specified as number of row detectors per pixel then column.",
         "module" : "DX Detector"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0032)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "name" : "Universal Entity ID",
         "usage" : "M"
      },
      "(0020,0052)" : {
         "module" : "Frame of Reference",
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
         "req" : "1",
         "mod_tables" : [
            "table_C.7-6"
         ],
         "name" : "Frame of Reference UID",
         "usage" : "U"
      },
      "(0028,2112)" : [
         {
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
            ],
            "entity" : "Image",
            "module" : "General Image",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "name" : "Lossy Image Compression Ratio",
            "usage" : "M",
            "req" : "3"
         },
         {
            "usage" : "M",
            "name" : "Lossy Image Compression Ratio",
            "mod_tables" : [
               "table_C.8-70"
            ],
            "req" : "1C",
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
               ],
               "Required if Lossy Image Compression (0028,2110) is \"01\"."
            ],
            "module" : "DX Image"
         }
      ],
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a124)" : {
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "entity" : "Image",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "UID",
         "usage" : "U",
         "req" : "1C"
      },
      "(0038,0064)[<0>](0040,0031)" : {
         "req" : "1C",
         "usage" : "U",
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "module" : "Patient Study",
         "entity" : "Study",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise."
      },
      "(0008,1052)[<0>](0040,1101)" : {
         "name" : "Person Identification Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "req" : "1",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0008,103f)" : {
         "entity" : "Series",
         "desc" : [
            "A coded description of the Series.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "General Series",
         "usage" : "M",
         "name" : "Series Description Code Sequence",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "req" : "3"
      },
      "(60xx,0010)" : {
         "mod_tables" : [
            "table_C.9-2"
         ],
         "usage" : "C - Required if graphic annotation is present - See ",
         "name" : "Overlay Rows",
         "req" : "1",
         "entity" : "Image",
         "desc" : "Number of Rows in Overlay.",
         "module" : "Overlay Plane"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a040)" : {
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
         "entity" : "Image",
         "req" : "1",
         "name" : "Value Type",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0028,1040)" : {
         "module" : "DX Image",
         "desc" : [
            "The relationship between the Pixel sample values and the X-Ray beam intensity.",
            {
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
         "entity" : "Image",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-70"
         ],
         "name" : "Pixel Intensity Relationship",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0018,a003)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Contribution Description",
         "module" : "SOP Common",
         "desc" : "Description of the contribution the equipment made to the composite instance.",
         "entity" : "Image"
      },
      "(0010,0024)[<0>](0040,0035)" : {
         "module" : "Patient",
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
         "entity" : "Patient",
         "req" : "3",
         "usage" : "M",
         "name" : "Identifier Type Code",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0020,0011)" : {
         "module" : "General Series",
         "entity" : "Series",
         "desc" : "A number that identifies this Series.",
         "req" : "2",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "name" : "Series Number"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
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
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "name" : "Universal Entity ID Type",
         "usage" : "M",
         "req" : "1C"
      },
      "(0010,0024)[<0>](0040,0039)" : {
         "module" : "Patient",
         "desc" : [
            "The geo-political body that assigned the patient identifier. Typically a code for a country or a state/province. Only a single Item is permitted in this Sequence.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 9 (Assigning Jurisdiction)."
                     ],
                     "attrs" : {
                        "xml:id" : "para_da6e8d69-e95e-4320-b5c5-be5b4cbb811f"
                     }
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
         "name" : "Assigning Jurisdiction Code Sequence",
         "usage" : "M"
      },
      "(0012,0072)" : {
         "module" : "Clinical Trial Series",
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
         "entity" : "Series",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "usage" : "U",
         "name" : "Clinical Trial Series Description"
      },
      "(0018,1156)" : [
         {
            "usage" : "U",
            "name" : "Rectification Type",
            "mod_tables" : [
               "table_C.8-33"
            ],
            "req" : "3",
            "entity" : "Image",
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
            "module" : "X-Ray Acquisition Dose"
         },
         {
            "usage" : "U",
            "name" : "Rectification Type",
            "mod_tables" : [
               "table_C.8-34"
            ],
            "req" : "3",
            "entity" : "Image",
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
            "module" : "X-Ray Generation"
         }
      ],
      "(0018,7062)" : {
         "module" : "X-Ray Generation",
         "entity" : "Image",
         "desc" : [
            "Text description of the mechanism of exposure control.",
            "May describe the number and type of exposure sensors or position of the sensitive area of the imaging detector."
         ],
         "req" : "3",
         "name" : "Exposure Control Mode Description",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-34"
         ]
      },
      "(0010,2294)[<0>](0010,2295)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "desc" : "Identification number of an animal within the registry.",
         "req" : "1",
         "usage" : "M",
         "name" : "Breed Registration Number",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0008,1140)" : {
         "module" : "General Image",
         "desc" : [
            "Other images significantly related to this image (e.g., post-localizer CT image or Mammographic biopsy or partial view images).",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Image",
         "req" : "3",
         "usage" : "M",
         "name" : "Referenced Image Sequence",
         "mod_tables" : [
            "table_C.7-9"
         ]
      },
      "(0040,0275)[<0>](0040,0008)" : {
         "req" : "3",
         "usage" : "M",
         "name" : "Scheduled Protocol Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "desc" : "Sequence describing the Scheduled Protocol following a specific coding scheme. One or more Items are permitted in this Sequence."
      },
      "(0060,3000)[<0>](0060,3002)" : {
         "module" : "Image Histogram",
         "desc" : "The number of \"bins\" (entries) in the histogram.",
         "entity" : "Image",
         "req" : "1",
         "name" : "Histogram Number of Bins",
         "usage" : "U",
         "mod_tables" : [
            "table_C.11.5-1"
         ]
      },
      "(0012,0071)" : {
         "module" : "Clinical Trial Series",
         "entity" : "Series",
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
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "name" : "Clinical Trial Series ID",
         "usage" : "U"
      },
      "(0008,2111)" : [
         {
            "usage" : "M",
            "name" : "Derivation Description",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "req" : "3",
            "entity" : "Image",
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
         {
            "req" : "3",
            "usage" : "M",
            "name" : "Derivation Description",
            "mod_tables" : [
               "table_C.8-70"
            ],
            "module" : "DX Image",
            "desc" : [
               "A text description of how this image was derived.",
               [
                  "See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.8.11.3.1.4"
                     }
                  },
                  " for further explanation."
               ]
            ],
            "entity" : "Image"
         }
      ],
      "(0008,2112)[<0>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Image",
         "module" : "General Image",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3",
            "table_10-11"
         ],
         "req" : "1"
      },
      "(0040,0314)" : {
         "req" : "3",
         "usage" : "U",
         "name" : "Half Value Layer",
         "mod_tables" : [
            "table_C.8-33"
         ],
         "module" : "X-Ray Acquisition Dose",
         "entity" : "Image",
         "desc" : [
            "The thickness of Aluminum in mm required to reduce the X-Ray Output (0040,0312) by a factor of two.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_549b31a6-89ef-4cd9-abfc-517daeb84ddd"
                     },
                     "el" : "para",
                     "content" : [
                        "This value may be a calibrated value rather than measured during the exposure."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ]
      },
      "(0054,0414)" : {
         "module" : "DX Positioning",
         "desc" : [
            "Sequence that describes the orientation of the patient with respect to the gantry.",
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "Image",
         "req" : "3",
         "usage" : "U",
         "name" : "Patient Gantry Relationship Code Sequence",
         "mod_tables" : [
            "table_C.8-72"
         ]
      },
      "(0018,1040)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "usage" : "U",
         "name" : "Contrast/Bolus Route",
         "module" : "Contrast/Bolus",
         "desc" : "Administration route of contrast agent",
         "entity" : "Image"
      },
      "(0018,1114)" : {
         "module" : "DX Positioning",
         "desc" : "Ratio of Source Image Receptor Distance (SID) over Source Object Distance (SOD).",
         "entity" : "Image",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-72"
         ],
         "name" : "Estimated Radiographic Magnification Factor",
         "usage" : "U"
      },
      "(0008,1250)[<0>](0040,a170)" : {
         "req" : "2",
         "name" : "Purpose of Reference Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "Zero or more Items shall be included in this Sequence.",
            "When absent, implies that the reason for the reference is unknown."
         ]
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0032)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "name" : "Universal Entity ID",
         "usage" : "M",
         "req" : "1C",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0018,1111)" : [
         {
            "name" : "Distance Source to Patient",
            "usage" : "U",
            "mod_tables" : [
               "table_C.8-72"
            ],
            "req" : "3",
            "desc" : [
               "Distance in mm from source to the table, support or bucky side that is closest to the Imaging Subject, as measured along the central ray of the X-Ray beam.",
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
                                       "This definition is less useful in terms of estimating geometric magnification than a measurement to a defined point within the Imaging Subject, but accounts for what is realistically measurable in an automated fashion in a clinical setting."
                                    ],
                                    "el" : "para",
                                    "attrs" : {
                                       "xml:id" : "para_a50295ca-1ff8-4a6d-be66-ff72bb2383ff"
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
                                       "xml:id" : "para_c10cdf97-36f9-4c76-8ab4-4a571c8ec635"
                                    },
                                    "content" : [
                                       "This measurement does not take into account any air gap between the Imaging Subject and the \"front\" of the table or bucky."
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
                                       "If the detector is not mounted in a table or bucky, then the actual position relative to the patient is implementation or operator defined."
                                    ],
                                    "el" : "para",
                                    "attrs" : {
                                       "xml:id" : "para_394d0d4c-088f-43cc-9b2a-35f4fbe36dc9"
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
                                       "This value is traditionally referred to as Source Object Distance (SOD)."
                                    ],
                                    "el" : "para",
                                    "attrs" : {
                                       "xml:id" : "para_62e9568d-da0d-47c6-970d-9d894449a589"
                                    }
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
               },
               [
                  "See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "linkend" : "sect_C.8.11.7",
                        "xrefstyle" : "select: label"
                     }
                  },
                  " for explanation if Positioner Type (0018,1508) is MAMMOGRAPHIC."
               ]
            ],
            "entity" : "Image",
            "module" : "DX Positioning"
         },
         {
            "module" : "X-Ray Acquisition Dose",
            "desc" : [
               "Distance in mm from source to the table, support or bucky side that is closest to the Imaging Subject, as measured along the central ray of the X-Ray beam.",
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
                                    "el" : "para",
                                    "content" : [
                                       "This definition is less useful in terms of estimating geometric magnification than a measurement to a defined point within the Imaging Subject, but accounts for what is realistically measurable in an automated fashion in a clinical setting."
                                    ],
                                    "attrs" : {
                                       "xml:id" : "para_021d43e3-cc95-4693-9374-b549f0d26a71"
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
                                    "content" : [
                                       "This measurement does not take into account any air gap between the Imaging Subject and the \"front\" of the table or bucky."
                                    ],
                                    "attrs" : {
                                       "xml:id" : "para_e261612c-7762-4b34-8cc7-e67d4ef3c8cc"
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
                                       "If the detector is not mounted in a table or bucky, then the actual position relative to the patient is implementation or operator defined."
                                    ],
                                    "el" : "para",
                                    "attrs" : {
                                       "xml:id" : "para_7139ada7-3147-4aee-a8de-a367b806182a"
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
                                       "xml:id" : "para_84ca9548-772d-47b3-bf14-ce4f5675cb61"
                                    },
                                    "content" : [
                                       "This value is traditionally referred to as Source Object Distance (SOD)."
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
            "entity" : "Image",
            "req" : "3",
            "mod_tables" : [
               "table_C.8-33"
            ],
            "name" : "Distance Source to Patient",
            "usage" : "U"
         }
      ],
      "(0020,1040)" : {
         "entity" : "Frame of Reference",
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
         "module" : "Frame of Reference",
         "name" : "Position Reference Indicator",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-6"
         ],
         "req" : "2"
      },
      "(0008,2112)[<0>](0028,135a)" : {
         "entity" : "Image",
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
                                 "attrs" : {
                                    "xml:id" : "para_9976bb70-d841-4a34-8a47-46d189fa9d3b"
                                 },
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
                           "el" : "listitem",
                           "content" : [
                              "\n                        ",
                              {
                                 "attrs" : {
                                    "xml:id" : "para_2b403f53-2ffb-4cb8-b283-851c3cce981b"
                                 },
                                 "content" : [
                                    "When the value of this attribute is NO, it is not possible to locate on the current image any pixel coordinates that are referenced relative to the source image, such as for example, might be required for rendering CAD findings derived from a referenced FOR PROCESSING image on the current FOR PRESENTATION image."
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
         "module" : "General Image",
         "usage" : "M",
         "name" : "Spatial Locations Preserved",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "req" : "3"
      },
      "(0010,2297)" : {
         "req" : "2C",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "Responsible Person",
         "module" : "Patient",
         "desc" : [
            "Name of person with medical or welfare decision making authority for the patient.",
            "Required if the patient is an animal. May be present otherwise."
         ],
         "entity" : "Patient"
      },
      "(0018,1020)" : {
         "entity" : "Equipment",
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
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "name" : "Software Versions",
         "req" : "3"
      },
      "(0018,7020)" : {
         "module" : "DX Detector",
         "entity" : "Image",
         "desc" : [
            "Physical dimensions of each detector element that comprises the detector matrix, in mm.",
            "Expressed as row dimension followed by column.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "This may not be the same as Detector Element Spacing (0018,7022) due to the presence of spacing material between detector elements."
                     ],
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
         "name" : "Detector Element Physical Size",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-71b"
         ]
      },
      "(0008,009c)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "name" : "Consulting Physician's Name",
         "req" : "3",
         "desc" : "Consulting physician(s) for this patient visit.",
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0040,0555)[<0>](0040,a123)" : {
         "module" : "Acquisition Context",
         "entity" : "Image",
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a Person Name.",
            {
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
               ],
               "el" : "note"
            },
            "Required if the value that Concept Name Code Sequence (0040,A043) requires (implies) is a person name. Shall not be present otherwise."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "name" : "Person Name",
         "usage" : "M - See "
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a163)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Rational Denominator Value",
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ]
      },
      "(0040,a390)[<0>](0040,e010)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Retrieve URI",
         "usage" : "M",
         "req" : "3",
         "entity" : "Image",
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
                     "el" : "para",
                     "content" : [
                        "The VR of this attribute has changed from UT to UR."
                     ],
                     "attrs" : {
                        "xml:id" : "para_398d64f0-0a7e-4cfe-b480-b482ee2cb7a7"
                     }
                  },
                  "\n"
               ]
            }
         ],
         "module" : "SOP Common"
      },
      "(0018,1030)" : {
         "entity" : "Series",
         "desc" : [
            "User-defined description of the conditions under which the Series was performed.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_0dde755c-c6af-40da-92ed-f526337bb396"
                     },
                     "content" : [
                        "This attribute conveys series-specific protocol identification and may or may not be identical to the one presented in the Performed Protocol Code Sequence (0040,0260)."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "module" : "General Series",
         "usage" : "M",
         "name" : "Protocol Name",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "req" : "3"
      },
      "(0012,0083)[<0>](0012,0085)" : {
         "module" : "Clinical Trial Study",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_3a13f81e-d497-421f-aebd-f103e8f2243a"
                     }
                  },
                  "\n                  "
               ]
            }
         ],
         "req" : "1",
         "usage" : "U",
         "name" : "Consent for Distribution Flag",
         "mod_tables" : [
            "table_C.7-4b"
         ]
      },
      "(60xx,1500)" : {
         "req" : "3",
         "name" : "Overlay Label",
         "usage" : "C - Required if graphic annotation is present - See ",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "module" : "Overlay Plane",
         "desc" : "A user defined text string that may be used to label or name this overlay.",
         "entity" : "Image"
      },
      "(0040,9096)[<0>](0040,9213)" : {
         "module" : "General Image",
         "desc" : [
            "Specifies the last stored value mapped for the Real Word Value Intercept (0040,9224) and Real World Value Slope (0040,9225) of this Item.",
            "Required if Real World Value Last Value Mapped (0040,9211) is absent.",
            {
               "content" : [
                  "\n                        ",
                  {
                     "attrs" : {
                        "xml:id" : "para_bd1c2eab-c851-45bf-8577-5108abbb24a6"
                     },
                     "el" : "para",
                     "content" : [
                        "The same Attribute with a double float precision value is used whether or not Float Pixel Data (7FE0,0008) or Double Float Pixel Data (7FE0,0009) are present, an integer value is not sufficient."
                     ]
                  },
                  "\n                      "
               ],
               "el" : "note"
            }
         ],
         "entity" : "Image",
         "req" : "1C",
         "name" : "Double Float Real World Value Last Value Mapped",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1155)" : {
         "module" : "General Series",
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(0040,0302)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.8-33"
         ],
         "name" : "Entrance Dose",
         "usage" : "U",
         "module" : "X-Ray Acquisition Dose",
         "desc" : [
            "Average entrance dose value measured in dGy at the surface of the patient\u00ad during the acquisition of this image.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_54ab914c-43c9-41f3-a6c9-16d0308bf93e"
                     },
                     "el" : "para",
                     "content" : [
                        "This may be an estimated value based on assumptions about the patient's body size and habitus."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "entity" : "Image"
      },
      "(0038,0062)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Service Episode Description",
         "usage" : "U",
         "module" : "Patient Study",
         "desc" : "Description of the type of service episode.",
         "entity" : "Study"
      },
      "(0040,0555)[<0>](0040,a160)" : {
         "name" : "Text Value",
         "usage" : "M - See ",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "req" : "1C",
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a Text Observation Value.",
            "Required if Date (0040,A121), Time (0040,A122), and Person Name (0040,A123) do not fully describe the concept specified by Concept Name Code Sequence (0040,A043). Shall not be present otherwise."
         ],
         "entity" : "Image",
         "module" : "Acquisition Context"
      },
      "(0018,1510)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.8-72"
         ],
         "usage" : "U",
         "name" : "Positioner Primary Angle",
         "module" : "DX Positioning",
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
                     "linkend" : "sect_C.8.11.7",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for explanation if Positioner Type (0018,1508) is MAMMOGRAPHIC."
            ]
         ],
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a162)" : {
         "module" : "Specimen",
         "entity" : "Image",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Rational Numerator Value",
         "usage" : "U"
      },
      "(0008,1010)" : {
         "entity" : "Equipment",
         "desc" : "User defined name identifying the machine that produced the composite instances.",
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Station Name",
         "usage" : "M",
         "req" : "3"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a122)" : {
         "usage" : "U",
         "name" : "Time",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1C",
         "entity" : "Image",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "module" : "Specimen"
      },
      "(0088,0200)[<0>](0028,0101)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M",
         "name" : "Bits Stored",
         "module" : "General Image",
         "entity" : "Image",
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
      "(0008,1110)[<0>](0008,1155)" : {
         "module" : "General Study",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Study",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "usage" : "M"
      },
      "(0040,0513)[<0>](0040,0032)" : {
         "module" : "Specimen",
         "entity" : "Image",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "usage" : "U",
         "name" : "Universal Entity ID"
      },
      "(0008,0070)" : {
         "entity" : "Equipment",
         "desc" : "Manufacturer of the equipment that produced the composite instances.",
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "name" : "Manufacturer",
         "req" : "2"
      },
      "(60xx,1303)" : {
         "mod_tables" : [
            "table_C.9-2"
         ],
         "name" : "ROI Standard Deviation",
         "usage" : "C - Required if graphic annotation is present - See ",
         "req" : "3",
         "desc" : [
            "ROI standard deviation.",
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
         "entity" : "Image",
         "module" : "Overlay Plane"
      },
      "(60xx,0022)" : {
         "usage" : "C - Required if graphic annotation is present - See ",
         "name" : "Overlay Description",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "req" : "3",
         "entity" : "Image",
         "desc" : "User-defined comments about the overlay.",
         "module" : "Overlay Plane"
      },
      "(0040,0515)[<0>](0040,0512)" : {
         "desc" : "The identifier for the container that contains the specimen(s) being imaged.",
         "entity" : "Image",
         "module" : "Specimen",
         "name" : "Container Identifier",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "req" : "1"
      },
      "(0008,0123)" : {
         "req" : "3",
         "usage" : "M",
         "name" : "Context Group Identification Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : [
            "Sequence of items that map values of Context Identifier (0008,010F) to an external, private or local Context Group.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Image"
      },
      "(7fe0,0010)" : {
         "module" : "Image Pixel",
         "entity" : "Image",
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
         "req" : "1C",
         "name" : "Pixel Data",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-11b"
         ]
      },
      "(0018,7058)" : [
         {
            "desc" : "The maximum length (in mm) of the X-Ray beam path in the Filter Material that is not blocked by collimation. May be multi-valued, with values corresponding to the respective values in Filter Material (0018,7050).",
            "entity" : "Image",
            "module" : "X-Ray Acquisition Dose",
            "mod_tables" : [
               "table_C.8-33",
               "table_C.8-35a"
            ],
            "usage" : "U",
            "name" : "Filter Beam Path Length Maximum",
            "req" : "3"
         },
         {
            "module" : "X-Ray Filtration",
            "desc" : "The maximum length (in mm) of the X-Ray beam path in the Filter Material that is not blocked by collimation. May be multi-valued, with values corresponding to the respective values in Filter Material (0018,7050).",
            "entity" : "Image",
            "req" : "3",
            "mod_tables" : [
               "table_C.8-35a"
            ],
            "usage" : "U",
            "name" : "Filter Beam Path Length Maximum"
         }
      ],
      "(0040,0560)[<0>](0040,0562)" : {
         "module" : "Specimen",
         "desc" : [
            "The name or code for the institution that has assigned the Specimen Identifier.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "entity" : "Image",
         "req" : "2",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U",
         "name" : "Issuer of the Specimen Identifier Sequence"
      },
      "(0018,1048)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "name" : "Contrast/Bolus Ingredient",
         "usage" : "U",
         "module" : "Contrast/Bolus",
         "entity" : "Image",
         "desc" : [
            "Active ingredient of agent.",
            {
               "type" : "variablelist",
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
               "title" : "Defined Terms:"
            }
         ]
      },
      "(0028,0302)" : {
         "name" : "Recognizable Visual Features",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            },
            "If this Attribute is absent, then the image may or may not contain recognizable visual features."
         ],
         "entity" : "Image",
         "module" : "General Image"
      },
      "(0008,009d)" : {
         "module" : "General Study",
         "desc" : [
            "Identification of the consulting physician(s).",
            "One or more Items shall be included in this Sequence. If more than one Item, the number and order shall correspond to the value of Consulting Physician's Name (0008,009C), if present."
         ],
         "entity" : "Study",
         "req" : "3",
         "name" : "Consulting Physician Identification Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1155)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-11"
         ],
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0018,1602)" : {
         "desc" : "Required if Shutter Shape (0018,1600) is RECTANGULAR. Location of the left edge of the rectangular shutter with respect to pixels in the image given as column.",
         "entity" : "Image",
         "module" : "Display Shutter",
         "usage" : "U",
         "name" : "Shutter Left Vertical Edge",
         "mod_tables" : [
            "table_C.7-17a"
         ],
         "req" : "1C"
      },
      "(0040,9096)[<0>](0040,08ea)" : {
         "req" : "1",
         "name" : "Measurement Units Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "module" : "General Image",
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
         "entity" : "Image"
      },
      "(0018,a001)[<0>](0008,0080)" : {
         "usage" : "M",
         "name" : "Institution Name",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "entity" : "Image",
         "desc" : "Institution where the equipment that contributed to the composite instance is located.",
         "module" : "SOP Common"
      },
      "(0018,1401)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.8-70"
         ],
         "name" : "Acquisition Device Processing Code",
         "usage" : "M",
         "module" : "DX Image",
         "entity" : "Image",
         "desc" : [
            "Code representing the device-specific processing associated with the image (e.g., Organ Filtering code)",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "This Code is manufacturer specific but provides useful annotation information to the knowledgeable observer."
                     ],
                     "attrs" : {
                        "xml:id" : "para_5d7942b6-fafe-42fc-896d-ac1a8dc2143d"
                     }
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0080)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "req" : "1C",
         "usage" : "M",
         "name" : "Institution Name",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ]
      },
      "(0020,4000)" : {
         "module" : "General Image",
         "desc" : "User-defined comments about the image",
         "entity" : "Image",
         "req" : "3",
         "usage" : "M",
         "name" : "Image Comments",
         "mod_tables" : [
            "table_C.7-9"
         ]
      },
      "(0040,a390)[<0>](0008,1155)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Image",
         "module" : "SOP Common"
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
                        ],
                        "attrs" : {
                           "xml:id" : "para_4b6d4b36-a800-41c7-a122-e8e704668af1"
                        }
                     },
                     "\n                  "
                  ],
                  "el" : "note"
               }
            ],
            "entity" : "Image",
            "module" : "General Image",
            "usage" : "M",
            "name" : "Instance Number",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "req" : "2"
         },
         {
            "mod_tables" : [
               "table_C.12-1"
            ],
            "name" : "Instance Number",
            "usage" : "M",
            "req" : "3",
            "entity" : "Image",
            "desc" : "A number that identifies this Composite object instance.",
            "module" : "SOP Common"
         }
      ],
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a161)" : {
         "usage" : "M",
         "name" : "Floating Point Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "module" : "General Series"
      },
      "(0018,a001)[<0>](0018,a002)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "desc" : "The Date & Time when the equipment contributed to the composite instance.",
         "req" : "3",
         "name" : "Contribution DateTime",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0318)" : {
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
               "el" : "note",
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
               ]
            }
         ],
         "entity" : "Image",
         "module" : "X-Ray Acquisition Dose",
         "name" : "Organ Exposed",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-33"
         ],
         "req" : "3"
      },
      "(0040,0555)[<0>](0040,a161)" : {
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "entity" : "Image",
         "module" : "Acquisition Context",
         "usage" : "M - See ",
         "name" : "Floating Point Value",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "req" : "1C"
      },
      "(0008,2218)[<0>](0008,2220)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.8-69",
            "table_10-6"
         ],
         "usage" : "M",
         "name" : "Anatomic Region Modifier Sequence",
         "module" : "DX Anatomy Imaged",
         "entity" : "Image",
         "desc" : [
            "Sequence of Items that modifies the anatomic region of interest of this Instance",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0018,0014)[<0>](0018,002a)" : {
         "module" : "Contrast/Bolus",
         "desc" : [
            "Sequence that identifies any additional drug that is administered with the contrast agent bolus.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Image",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "usage" : "U",
         "name" : "Additional Drug Sequence"
      },
      "(0008,1115)" : {
         "name" : "Referenced Series Sequence",
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "req" : "1C",
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this Sequence.",
            "Required if this Instance references Instances in this Study."
         ],
         "entity" : "Image",
         "module" : "Common Instance Reference"
      },
      "(0008,0012)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "desc" : [
            "Date the SOP Instance was created.",
            "This is the date that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Instance Creation Date"
      },
      "(0010,0040)" : {
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
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient's Sex",
         "usage" : "M",
         "req" : "2"
      },
      "(0018,700c)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "usage" : "M",
         "name" : "Date of Last Detector Calibration",
         "module" : "DX Detector",
         "entity" : "Image",
         "desc" : "The date on which the detector used to acquire this image as identified in Detector ID (0018,700A) was last calibrated."
      },
      "(0050,0010)[<0>](0050,0014)" : {
         "name" : "Device Length",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-18"
         ],
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
         "entity" : "Image",
         "module" : "Device"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "module" : "Patient",
         "usage" : "M",
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "req" : "1C"
      },
      "(0008,114a)[<0>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Image",
         "module" : "General Image",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-11"
         ],
         "req" : "1"
      },
      "(0040,9096)[<0>](0040,9220)" : {
         "desc" : [
            "A list of name-value pairs that describe the characteristics of the quantity represented by the Real World Value.",
            "One or more Items are permitted in this Sequence.",
            "One of the items shall have a concept name that specifies the quantified characteristic, though it is not required that (G-C1C6, SRT, \"Quantity\") be used if there is a reason to use a similar concept from a different coding scheme. Other items may be concept modifiers, such as (G-C036, SRT, \"Measurement Method\"). The order of the items is not significant."
         ],
         "entity" : "Image",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "usage" : "M",
         "name" : "Quantity Definition Sequence",
         "req" : "3"
      },
      "(0008,0110)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme Identification Sequence",
         "usage" : "M",
         "req" : "3",
         "entity" : "Image",
         "desc" : [
            "Sequence of items that map values of Coding Scheme Designator (0008,0102) to an external coding system registration, or to a private or local coding scheme.",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "SOP Common"
      },
      "(0020,0010)" : {
         "desc" : "User or equipment generated Study identifier.",
         "entity" : "Study",
         "module" : "General Study",
         "usage" : "M",
         "name" : "Study ID",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "2"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,08ea)" : {
         "req" : "1C",
         "usage" : "M",
         "name" : "Measurement Units Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ]
      },
      "(0008,0081)" : {
         "module" : "General Equipment",
         "entity" : "Equipment",
         "desc" : "Mailing address of the institution where the equipment that produced the composite instances is located.",
         "req" : "3",
         "name" : "Institution Address",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ]
      },
      "(0088,0200)[<0>](0028,0103)" : {
         "req" : "1",
         "name" : "Pixel Representation",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image",
         "desc" : [
            "Data representation of the pixel samples. Each sample shall have the same pixel representation.",
            {
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
               ],
               "title" : "Enumerated Values:"
            }
         ],
         "entity" : "Image"
      },
      "(0008,1040)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Institutional Department Name",
         "usage" : "M",
         "module" : "General Equipment",
         "entity" : "Equipment",
         "desc" : "Department in the institution where the equipment that produced the composite instances is located."
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0081)" : {
         "module" : "SOP Common",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "entity" : "Image",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Institution Address"
      },
      "(0018,1047)" : {
         "name" : "Contrast Flow Duration",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "req" : "3",
         "desc" : "Duration(s) of injection(s) in seconds. Each Contrast Flow Duration value shall correspond to a value of Contrast Flow Rate (0018,1046).",
         "entity" : "Image",
         "module" : "Contrast/Bolus"
      },
      "(0018,a001)[<0>](0008,1040)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Institutional Department Name",
         "req" : "3",
         "entity" : "Image",
         "desc" : "Department in the institution where the equipment that contributed to the composite instance is located.",
         "module" : "SOP Common"
      },
      "(60xx,0045)" : {
         "module" : "Overlay Plane",
         "desc" : [
            "Defined Term that identifies the intended purpose of the Overlay Type. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.9.2.1.3",
                  "xrefstyle" : "select: label"
               }
            },
            " for further explanation."
         ],
         "entity" : "Image",
         "req" : "3",
         "usage" : "C - Required if graphic annotation is present - See ",
         "name" : "Overlay Subtype",
         "mod_tables" : [
            "table_C.9-2"
         ]
      },
      "(0012,0021)" : {
         "usage" : "U",
         "name" : "Clinical Trial Protocol Name",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "req" : "2",
         "entity" : "Patient",
         "desc" : [
            "The name of the clinical trial or research protocol. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.1.3.1.3",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "module" : "Clinical Trial Subject"
      },
      "(0040,0513)[<0>](0040,0033)" : {
         "module" : "Specimen",
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
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "usage" : "U",
         "name" : "Universal Entity ID Type"
      },
      "(0400,0500)[<0>](0400,0510)" : {
         "desc" : "Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
         "entity" : "Image",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Encrypted Content Transfer Syntax UID",
         "usage" : "M",
         "req" : "1"
      },
      "(0008,0110)[<0>](0008,0114)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "desc" : "The coding scheme identifier as defined in an external registry. Required if coding scheme is registered and Coding Scheme UID (0008,010C) is not present.",
         "req" : "2C",
         "name" : "Coding Scheme External ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0028,1103)" : {
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "usage" : "M",
         "name" : "Blue Palette Color Lookup Table Descriptor",
         "req" : "1C",
         "entity" : "Image",
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
         "module" : "Image Pixel"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,08ea)" : {
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "entity" : "Image",
         "module" : "General Image",
         "usage" : "M",
         "name" : "Measurement Units Code Sequence",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "req" : "1C"
      },
      "(0028,1101)" : {
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "usage" : "M",
         "name" : "Red Palette Color Lookup Table Descriptor",
         "req" : "1C",
         "entity" : "Image",
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
         "module" : "Image Pixel"
      },
      "(0008,1111)" : [
         {
            "module" : "General Series",
            "entity" : "Series",
            "desc" : [
               "Uniquely identifies the Performed Procedure Step SOP Instance to which the Series is related.",
               "Only a single Item is permitted in this Sequence."
            ],
            "req" : "3",
            "name" : "Referenced Performed Procedure Step Sequence",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-5a"
            ]
         },
         {
            "mod_tables" : [
               "table_C.8-68"
            ],
            "usage" : "M",
            "name" : "Referenced Performed Procedure Step Sequence",
            "req" : "1C",
            "entity" : "Series",
            "desc" : [
               "Uniquely identifies the Performed Procedure Step SOP Instance to which the Series is related.",
               "Only a single Item shall be included in this Sequence.",
               "Required if a Performed Procedure Step SOP Class was involved in the creation of this Series."
            ],
            "module" : "DX Series"
         }
      ],
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a168)" : {
         "entity" : "Series",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Concept Code Sequence",
         "req" : "1C"
      },
      "(0100,0424)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "desc" : "Any comments associated with the setting of the SOP Instance Status (0100,0410) to AO.",
         "req" : "3",
         "usage" : "M",
         "name" : "SOP Authorization Comment",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0028,0106)" : {
         "module" : "Image Pixel",
         "entity" : "Image",
         "desc" : "The minimum actual pixel value encountered in this image.",
         "req" : "3",
         "name" : "Smallest Image Pixel Value",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-11b"
         ]
      },
      "(0040,051a)" : {
         "entity" : "Image",
         "desc" : "Description of the container.",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U",
         "name" : "Container Description",
         "req" : "3"
      },
      "(0008,0015)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Instance Coercion DateTime",
         "req" : "3",
         "entity" : "Image",
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
         "module" : "SOP Common"
      },
      "(0008,0110)[<0>](0008,0102)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "desc" : "The value of a Coding Scheme Designator, used in this SOP Instance, which is being mapped.",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme Designator",
         "usage" : "M"
      },
      "(0040,0515)[<0>](0040,0513)" : {
         "entity" : "Image",
         "desc" : [
            "Organization that assigned the Container Identifier.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "module" : "Specimen",
         "usage" : "U",
         "name" : "Issuer of the Container Identifier Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "req" : "2"
      },
      "(0008,1072)[<0>](0040,1101)" : {
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1",
         "name" : "Person Identification Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)" : {
         "module" : "Specimen",
         "entity" : "Image",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "req" : "1C",
         "name" : "Referenced SOP Sequence",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0020,000d)" : {
         "req" : "1",
         "name" : "Study Instance UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "entity" : "Study",
         "desc" : "Unique identifier for the Study."
      },
      "(0008,1062)[<0>](0040,1103)" : {
         "name" : "Person's Telephone Numbers",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "3",
         "desc" : "Person's telephone number(s)",
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0018,1006)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.8-36b"
         ],
         "name" : "Grid ID",
         "usage" : "U",
         "module" : "X-Ray Grid",
         "desc" : "Identifier of the grid",
         "entity" : "Image"
      },
      "(0088,0200)[<0>](0028,0100)" : {
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
         "entity" : "Image",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "name" : "Bits Allocated",
         "usage" : "M",
         "req" : "1"
      },
      "(0008,0300)[<0>](0008,0303)" : {
         "module" : "SOP Common",
         "entity" : "Image",
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
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Block Identifying Information Status",
         "usage" : "M"
      },
      "(0038,0064)[<0>](0040,0032)" : {
         "module" : "Patient Study",
         "entity" : "Study",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "name" : "Universal Entity ID",
         "usage" : "U"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a123)" : {
         "usage" : "M",
         "name" : "Person Name",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "entity" : "Image",
         "module" : "General Image"
      },
      "(0010,0024)[<0>](0040,0036)" : {
         "module" : "Patient",
         "entity" : "Patient",
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
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "name" : "Assigning Facility Sequence"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a043)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "name" : "Concept Name Code Sequence",
         "module" : "Specimen",
         "entity" : "Image",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0038,0060)" : {
         "module" : "Patient Study",
         "entity" : "Study",
         "desc" : "Identifier of the Service Episode as assigned by the healthcare provider",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Service Episode ID",
         "usage" : "U"
      },
      "(0020,0062)" : {
         "module" : "DX Anatomy Imaged",
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
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "This Attribute is mandatory, in order to ensure that images may be positioned correctly relative to one another for display."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_776d2cd5-6b5b-43c6-9fb6-2e81e1975c4b"
                     }
                  },
                  "\n                  "
               ]
            },
            "Shall be consistent with any laterality information contained in Primary Anatomic Structure Modifier Sequence (0008,2230), if present.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_0b49e79c-de47-4131-8838-d61b70618829"
                     },
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
         "req" : "1",
         "mod_tables" : [
            "table_C.8-69"
         ],
         "usage" : "M",
         "name" : "Image Laterality"
      },
      "(0018,7060)" : {
         "mod_tables" : [
            "table_C.8-34"
         ],
         "name" : "Exposure Control Mode",
         "usage" : "U",
         "req" : "3",
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
         "entity" : "Image",
         "module" : "X-Ray Generation"
      },
      "(0008,2112)[<0>](0062,000b)" : {
         "entity" : "Image",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "module" : "General Image",
         "usage" : "M",
         "name" : "Referenced Segment Number",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3"
         ],
         "req" : "1C"
      },
      "(0008,1049)[<0>](0040,1101)" : {
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Person Identification Code Sequence",
         "req" : "1"
      },
      "(0040,0520)[<0>](0050,001e)" : {
         "entity" : "Image",
         "desc" : "Container component text description.",
         "module" : "Specimen",
         "name" : "Container Component Description",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "req" : "3"
      },
      "(0028,3010)[<0>](0028,3002)" : [
         {
            "req" : "1",
            "mod_tables" : [
               "table_C.8-70"
            ],
            "usage" : "M",
            "name" : "LUT Descriptor",
            "module" : "DX Image",
            "entity" : "Image",
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
            ]
         },
         {
            "usage" : "C - Required if Presentation Intent Type (0008,0068) is FOR PRESENTATION. Shall not be present otherwise. See Note 8.",
            "name" : "LUT Descriptor",
            "mod_tables" : [
               "table_C.11-2b"
            ],
            "req" : "1",
            "entity" : "Image",
            "desc" : [
               "Specifies the format of the LUT Data in this Sequence.",
               [
                  "See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.11.2.1.1"
                     }
                  },
                  " for further explanation."
               ]
            ],
            "module" : "VOI LUT"
         }
      ],
      "(60xx,0100)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "name" : "Overlay Bits Allocated",
         "usage" : "C - Required if graphic annotation is present - See ",
         "module" : "Overlay Plane",
         "entity" : "Image",
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
                        "Formerly the standard described embedding the overlay data in the Image Pixel Data (7FE0,0010), in which case the value of this Attribute was required to be the same as Bits Allocated (0028,0100). This usage has been retired. See ",
                        {
                           "content" : [
                              "PS3.3-2004"
                           ],
                           "el" : "link",
                           "attrs" : {
                              "xl:href" : "ftp://medical.nema.org/MEDICAL/Dicom/2004/printed/04_03pu3.pdf"
                           }
                        },
                        "."
                     ],
                     "attrs" : {
                        "xml:id" : "para_2b05bb80-945d-4097-b644-005f3c89d1f9"
                     }
                  },
                  "\n                "
               ]
            }
         ]
      },
      "(0020,0060)" : {
         "module" : "General Series",
         "desc" : [
            "Laterality of (paired) body part examined. Required if the body part examined is a paired structure and Image Laterality (0020,0062) or Frame Laterality (0020,9072) or Measurement Laterality (0024,0113) are not sent.",
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
                     "attrs" : {
                        "xml:id" : "para_46e9d782-b47b-4339-b6ff-a11691e830db"
                     },
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
         "entity" : "Series",
         "req" : "2C",
         "usage" : "M",
         "name" : "Laterality",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "usage" : "M",
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "req" : "1C",
         "entity" : "Patient",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "module" : "Patient"
      },
      "(0020,9172)[<0>](0008,1150)" : {
         "module" : "SOP Common",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Image",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ]
      },
      "(0038,0010)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Admission ID",
         "usage" : "U",
         "module" : "Patient Study",
         "desc" : "Identifier of the visit as assigned by the healthcare provider",
         "entity" : "Study"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a040)" : {
         "usage" : "M",
         "name" : "Value Type",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "req" : "1",
         "entity" : "Image",
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
         "module" : "General Image"
      },
      "(0400,0500)" : {
         "req" : "1C",
         "usage" : "M",
         "name" : "Encrypted Attributes Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
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
         "entity" : "Image"
      },
      "(0088,0200)[<0>](7fe0,0010)" : {
         "entity" : "Image",
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
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M",
         "name" : "Pixel Data",
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,0009)" : {
         "module" : "General Series",
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
                     ],
                     "attrs" : {
                        "xml:id" : "para_36129a24-d644-48ab-914d-1f3fbe916df6"
                     }
                  },
                  "\n              "
               ]
            }
         ],
         "entity" : "Series",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M",
         "name" : "Scheduled Procedure Step ID"
      },
      "(0008,2112)" : {
         "usage" : "M",
         "name" : "Source Image Sequence",
         "mod_tables" : [
            "table_C.7-9"
         ],
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
         "module" : "General Image"
      },
      "(0008,2112)[<0>](0020,0020)" : {
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M",
         "name" : "Patient Orientation",
         "req" : "1C",
         "entity" : "Image",
         "desc" : [
            "The Patient Orientation values of the source image.",
            "Required if the value of Spatial Locations Preserved (0028,135A) is REORIENTED_ONLY."
         ],
         "module" : "General Image"
      },
      "(0018,1050)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Spatial Resolution",
         "usage" : "M",
         "req" : "3",
         "entity" : "Equipment",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "module" : "General Equipment"
      },
      "(0040,0520)[<0>](0050,001b)" : {
         "module" : "Specimen",
         "entity" : "Image",
         "desc" : "Manufacturer's identifier of the container component, e.g., Lot Number and/or Version.",
         "req" : "3",
         "usage" : "U",
         "name" : "Container Component ID",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      "(0400,0561)[<0>](0400,0550)[0](gggg,eeee)" : {
         "desc" : "May include Sequence Attributes and their Items.",
         "entity" : "Image",
         "module" : "SOP Common",
         "name" : "Any Attribute from the main data set that was modified or removed.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1"
      },
      "(0010,1002)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "Other Patient IDs Sequence",
         "req" : "3",
         "desc" : [
            "A sequence of identification numbers or codes used to identify the patient, which may or may not be human readable, and may or may not have been obtained from an implanted or attached device such as an RFID or barcode.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0010,0212)" : {
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
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Strain Description",
         "usage" : "M",
         "req" : "3"
      },
      "(0008,1049)[<0>](0040,1102)" : {
         "name" : "Person's Address",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "3",
         "desc" : "Person's mailing address",
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0018,702a)" : {
         "module" : "DX Detector",
         "desc" : "Name of the manufacturer of the detector component of the acquisition system",
         "entity" : "Image",
         "req" : "3",
         "name" : "Detector Manufacturer Name",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-71b"
         ]
      },
      "(0040,9096)[<0>](0040,9211)" : {
         "module" : "General Image",
         "entity" : "Image",
         "desc" : [
            "Specifies the last stored value mapped for the Real Word Value Intercept (0040,9224) and Real World Value Slope (0040,9225) or Real World Value LUT (0040,9212) of this Item.",
            "Required if Pixel Data (7FE0,0010) or Real World Value LUT Data (0040,9212) is present or Double Float Real World Value Last Value Mapped (0040,9213) is absent.",
            {
               "content" : [
                  "\n                        ",
                  {
                     "attrs" : {
                        "xml:id" : "para_2a014060-59fc-451c-ad0d-b820960b5ad4"
                     },
                     "content" : [
                        "This Attribute may be used even when Float Pixel Data (7FE0,0008) or Double Float Pixel Data (7FE0,0009) are used instead of Pixel Data (7FE0,0010) if an integer of the size of this Attribute is sufficient to define the range."
                     ],
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
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "usage" : "M",
         "name" : "Real World Value Last Value Mapped"
      },
      "(0008,1062)[<0>](0008,0080)" : {
         "entity" : "Study",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "module" : "General Study",
         "usage" : "M",
         "name" : "Institution Name",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "1C"
      },
      "(0008,0110)[<0>](0008,010c)" : {
         "req" : "1C",
         "usage" : "M",
         "name" : "Coding Scheme UID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Image",
         "desc" : "The coding scheme UID identifier. Required if coding scheme is identified by an ISO 8824 object identifier compatible with the UI VR."
      },
      "(0028,3010)" : [
         {
            "desc" : [
               "Defines a sequence of VOI LUTs.",
               [
                  "See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.8.11.3.1.5"
                     }
                  },
                  " for further explanation."
               ],
               "One or more Items shall be included in this Sequence.",
               "Required if Presentation Intent Type (0008,0068) is FOR PRESENTATION and Window Center (0028,1050) is not present. May also be present if Window Center (0028,1050) is present."
            ],
            "entity" : "Image",
            "module" : "DX Image",
            "mod_tables" : [
               "table_C.8-70"
            ],
            "name" : "VOI LUT Sequence",
            "usage" : "M",
            "req" : "1C"
         },
         {
            "req" : "1C",
            "mod_tables" : [
               "table_C.11-2b"
            ],
            "usage" : "C - Required if Presentation Intent Type (0008,0068) is FOR PRESENTATION. Shall not be present otherwise. See Note 8.",
            "name" : "VOI LUT Sequence",
            "module" : "VOI LUT",
            "entity" : "Image",
            "desc" : [
               "Defines a sequence of VOI LUTs.",
               "One or more Items shall be included in this Sequence.",
               "Required if Window Center (0028,1050) is not present. May be present otherwise."
            ]
         }
      ],
      "(0018,1152)" : [
         {
            "usage" : "U",
            "name" : "Exposure",
            "mod_tables" : [
               "table_C.8-33"
            ],
            "req" : "3",
            "entity" : "Image",
            "desc" : "The exposure expressed in mAs, for example calculated from Exposure Time and X-Ray Tube Current.",
            "module" : "X-Ray Acquisition Dose"
         },
         {
            "req" : "3",
            "mod_tables" : [
               "table_C.8-34"
            ],
            "usage" : "U",
            "name" : "Exposure",
            "module" : "X-Ray Generation",
            "desc" : "The exposure expressed in mAs, for example calculated from Exposure Time and X-Ray Tube Current.",
            "entity" : "Image"
         }
      ],
      "(0018,1495)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.8-32"
         ],
         "usage" : "U",
         "name" : "Number of Tomosynthesis Source Images",
         "module" : "X-Ray Tomography Acquisition",
         "entity" : "Image",
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
         ]
      },
      "(0020,9172)[<0>](0008,1160)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "usage" : "M",
         "name" : "Referenced Frame Number",
         "req" : "1C",
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
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0040,0560)" : {
         "module" : "Specimen",
         "desc" : [
            "Sequence of identifiers and detailed description of the specimen(s) being imaged.",
            "One or more Items shall be included in this Sequence.",
            "Each specimen imaged in the Pixel Data shall be identified by an Item in this Sequence. Other specimens in/on the container, but not imaged in the Pixel Data, may also be identified by Items in this Sequence."
         ],
         "entity" : "Image",
         "req" : "1",
         "name" : "Specimen Description Sequence",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      "(0040,0275)[<0>](0032,1060)" : {
         "entity" : "Series",
         "desc" : "Institution-generated administrative description or classification of Requested Procedure.",
         "module" : "General Series",
         "name" : "Requested Procedure Description",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "req" : "3"
      },
      "(0400,0561)[<0>](0400,0550)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Modified Attributes Sequence",
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : [
            "Sequence that contains all the Attributes, with their previous values, that were modified or removed from the main data set.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Image"
      },
      "(2050,0020)" : [
         {
            "req" : "3",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "usage" : "M",
            "name" : "Presentation LUT Shape",
            "module" : "General Image",
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
            "entity" : "Image"
         },
         {
            "entity" : "Image",
            "desc" : [
               "Specifies an identity transformation for the Presentation LUT, other than to account for the value of Photometric Interpretation (0028,0004), such that the output of all grayscale transformations defined in the IOD containing this Module are defined to be P-Values.",
               {
                  "title" : "Enumerated Values:",
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
                  ]
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
            "module" : "DX Image",
            "mod_tables" : [
               "table_C.8-70"
            ],
            "name" : "Presentation LUT Shape",
            "usage" : "M",
            "req" : "1"
         }
      ],
      "(0012,0050)" : {
         "req" : "2",
         "name" : "Clinical Trial Time Point ID",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "module" : "Clinical Trial Study",
         "desc" : [
            "An identifier specifying the one or more studies that are grouped together as a clinical time point or submission in a clinical trial or research. See ",
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
      "(0040,0260)" : {
         "entity" : "Series",
         "desc" : "Sequence describing the Protocol performed for this Procedure Step. One or more Items are permitted in this Sequence.",
         "module" : "General Series",
         "name" : "Performed Protocol Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "req" : "3"
      },
      "(0018,1624)" : {
         "entity" : "Image",
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
         "module" : "Display Shutter",
         "usage" : "U",
         "name" : "Shutter Presentation Color CIELab Value",
         "mod_tables" : [
            "table_C.7-17a"
         ],
         "req" : "3"
      },
      "(0028,2114)" : {
         "module" : "General Image",
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
         "req" : "3",
         "usage" : "M",
         "name" : "Lossy Image Compression Method",
         "mod_tables" : [
            "table_C.7-9"
         ]
      },
      "(0012,0051)" : {
         "desc" : [
            "A description of a set of one or more studies that are grouped together to represent a clinical time point or submission in a clinical trial or research. See ",
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
         "module" : "Clinical Trial Study",
         "usage" : "U",
         "name" : "Clinical Trial Time Point Description",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "req" : "3"
      },
      "(0032,1034)" : {
         "req" : "3",
         "usage" : "M",
         "name" : "Requesting Service Code Sequence",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "entity" : "Study",
         "desc" : [
            "Institutional department where the request initiated.",
            "Only a single item is permitted in this Sequence."
         ]
      },
      "(0040,0555)[<0>](0040,a122)" : {
         "entity" : "Image",
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a time.",
            {
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
               ],
               "el" : "note"
            },
            "Required if the value that Concept Name Code Sequence (0040,A043) requires (implies) is a time. Shall not be present otherwise."
         ],
         "module" : "Acquisition Context",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "usage" : "M - See ",
         "name" : "Time",
         "req" : "1C"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a162)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Rational Numerator Value",
         "module" : "General Image",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "entity" : "Image"
      },
      "(0018,1110)" : [
         {
            "mod_tables" : [
               "table_C.8-72"
            ],
            "name" : "Distance Source to Detector",
            "usage" : "U",
            "req" : "3",
            "entity" : "Image",
            "desc" : [
               "Distance in mm from source to detector center.",
               {
                  "content" : [
                     "\n                    ",
                     {
                        "attrs" : {
                           "xml:id" : "para_2b31dcd3-4f24-4f23-9968-c25b2c49dad3"
                        },
                        "content" : [
                           "This value is traditionally referred to as Source Image Receptor Distance (SID)."
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
                     "el" : "xref",
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.8.11.7"
                     }
                  },
                  " for explanation if Positioner Type (0018,1508) is MAMMOGRAPHIC."
               ]
            ],
            "module" : "DX Positioning"
         },
         {
            "module" : "X-Ray Acquisition Dose",
            "entity" : "Image",
            "desc" : [
               "Distance in mm from source to detector center.",
               {
                  "content" : [
                     "\n                    ",
                     {
                        "content" : [
                           "This value is traditionally referred to as Source Image Receptor Distance (SID)."
                        ],
                        "el" : "para",
                        "attrs" : {
                           "xml:id" : "para_3b7bd656-1bfb-4c18-92f9-92c401d17ddd"
                        }
                     },
                     "\n                  "
                  ],
                  "el" : "note"
               }
            ],
            "req" : "3",
            "mod_tables" : [
               "table_C.8-33"
            ],
            "usage" : "U",
            "name" : "Distance Source to Detector"
         }
      ],
      "(0028,1203)" : {
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "name" : "Blue Palette Color Lookup Table Data",
         "usage" : "M",
         "req" : "1C",
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
         "entity" : "Image",
         "module" : "Image Pixel"
      },
      "(0028,0107)" : {
         "desc" : "The maximum actual pixel value encountered in this image.",
         "entity" : "Image",
         "module" : "Image Pixel",
         "name" : "Largest Image Pixel Value",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "req" : "3"
      },
      "(0018,0014)" : {
         "mod_tables" : [
            "table_C.7-12"
         ],
         "usage" : "U",
         "name" : "Contrast/Bolus Administration Route Sequence",
         "req" : "3",
         "entity" : "Image",
         "desc" : [
            "Sequence that identifies the route of administration of contrast agent.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "Contrast/Bolus"
      },
      "(0040,0306)" : {
         "entity" : "Image",
         "desc" : [
            "Distance in mm from the source to the surface of the patient closest to the source during the acquisition of this image.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "This may be an estimated value based on assumptions about the patient's body size and habitus."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_4963d92e-49bc-478c-a017-8cedf7c38de0"
                     }
                  },
                  "\n                  "
               ]
            }
         ],
         "module" : "X-Ray Acquisition Dose",
         "mod_tables" : [
            "table_C.8-33"
         ],
         "name" : "Distance Source to Entrance",
         "usage" : "U",
         "req" : "3"
      },
      "(0018,7041)" : {
         "mod_tables" : [
            "table_C.8-36b"
         ],
         "name" : "Grid Spacing Material",
         "usage" : "U",
         "req" : "3",
         "entity" : "Image",
         "desc" : "The spacing material used in the grid.",
         "module" : "X-Ray Grid"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a123)" : {
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Person Name",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C"
      },
      "(0018,7042)" : {
         "name" : "Grid Thickness",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-36b"
         ],
         "req" : "3",
         "entity" : "Image",
         "desc" : "The thickness in mm of the X-Ray absorbing material used in the grid.",
         "module" : "X-Ray Grid"
      },
      "(0018,7012)" : {
         "module" : "DX Detector",
         "entity" : "Image",
         "desc" : "Time in Seconds since an exposure was last made on this detector prior to the acquisition of this image.",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "usage" : "M",
         "name" : "Detector Time Since Last Exposure"
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
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "name" : "Patient Species Code Sequence",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "1C"
      },
      "(0010,1010)" : {
         "module" : "Patient Study",
         "entity" : "Study",
         "desc" : "Age of the Patient.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Patient's Age",
         "usage" : "U"
      },
      "(0040,0260)[<0>](0040,0440)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "usage" : "M",
         "name" : "Protocol Context Sequence",
         "module" : "General Series",
         "entity" : "Series",
         "desc" : "Sequence that specifies the context for the Performed Protocol Code Sequence Item. One or more Items are permitted in this Sequence."
      },
      "(0008,1115)[<0>](0008,114a)" : {
         "module" : "Common Instance Reference",
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Image",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "name" : "Referenced Instance Sequence",
         "usage" : "U"
      },
      "(0010,2160)" : {
         "module" : "Patient",
         "desc" : "Ethnic group or race of the patient.",
         "entity" : "Patient",
         "req" : "3",
         "usage" : "M",
         "name" : "Ethnic Group",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0018,1604)" : {
         "usage" : "U",
         "name" : "Shutter Right Vertical Edge",
         "mod_tables" : [
            "table_C.7-17a"
         ],
         "req" : "1C",
         "desc" : "Required if Shutter Shape (0018,1600) is RECTANGULAR. Location of the right edge of the rectangular shutter with respect to pixels in the image given as column.",
         "entity" : "Image",
         "module" : "Display Shutter"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a160)" : {
         "entity" : "Image",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Text Value",
         "usage" : "U",
         "req" : "1C"
      },
      "(0010,1100)[<0>](0040,e021)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "DICOM Retrieval Sequence",
         "usage" : "M",
         "module" : "Patient",
         "desc" : [
            "Details for retrieving instances via the DICOM Retrieve Service.",
            "Required if DICOM Media Retrieval Sequence (0040,E022), WADO Retrieval Sequence (0040,E023), WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "This sequence shall only identify sources known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Patient"
      },
      "(0020,9172)[<0>](0008,1155)" : {
         "module" : "SOP Common",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Image",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "usage" : "M"
      },
      "(fffa,fffa)[<0>](0400,0110)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "name" : "Certificate Type",
         "module" : "SOP Common",
         "entity" : "Image",
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
                        "xml:id" : "para_fe92f60f-2615-4c9b-bab0-86d640bd9af4"
                     }
                  },
                  "\n                    "
               ]
            }
         ]
      },
      "(0010,1100)[<0>](0020,000d)" : {
         "usage" : "M",
         "name" : "Study Instance UID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "req" : "1C",
         "entity" : "Patient",
         "desc" : [
            "Unique identifier for the Study.",
            "Required if Type of Instances (0040,E020) is DICOM"
         ],
         "module" : "Patient"
      },
      "(0008,009d)[<0>](0008,0082)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Institution Code Sequence",
         "module" : "General Study",
         "entity" : "Study",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0088,0200)[<0>](0028,1202)" : {
         "entity" : "Image",
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
         "module" : "General Image",
         "usage" : "M",
         "name" : "Green Palette Color Lookup Table Data",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "req" : "1C"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a124)" : {
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "UID",
         "usage" : "M",
         "req" : "1C"
      },
      "(0008,0096)[<0>](0040,1103)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person's Telephone Numbers",
         "usage" : "M",
         "module" : "General Study",
         "entity" : "Study",
         "desc" : "Person's telephone number(s)"
      },
      "(0008,0008)" : [
         {
            "req" : "3",
            "usage" : "M",
            "name" : "Image Type",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "module" : "General Image",
            "entity" : "Image",
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
            "req" : "1",
            "usage" : "M",
            "name" : "Image Type",
            "mod_tables" : [
               "table_C.8-70"
            ],
            "module" : "DX Image",
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
            "entity" : "Image"
         }
      ],
      "(0008,009d)[<0>](0040,1102)" : {
         "req" : "3",
         "usage" : "M",
         "name" : "Person's Address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "desc" : "Person's mailing address",
         "entity" : "Study"
      },
      "(0040,0560)[<0>](0040,0620)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Specimen Localization Content Item Sequence",
         "usage" : "U",
         "module" : "Specimen",
         "entity" : "Image",
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
      "(0040,9096)" : {
         "desc" : [
            "The mapping of stored values to associated Real World values.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Image",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M",
         "name" : "Real World Value Mapping Sequence",
         "req" : "3"
      },
      "(0018,7008)" : {
         "module" : "DX Detector",
         "entity" : "Image",
         "desc" : "Text description of operating mode of detector (implementation specific).",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "usage" : "M",
         "name" : "Detector Mode"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1150)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ]
      },
      "(0040,0520)[<0>](0050,0015)" : {
         "usage" : "U",
         "name" : "Container Component Width",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "req" : "3",
         "entity" : "Image",
         "desc" : "Width in mm of container component.",
         "module" : "Specimen"
      },
      "(0008,1049)[<0>](0008,0082)" : {
         "req" : "1C",
         "name" : "Institution Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Study"
      },
      "(0010,1020)" : {
         "module" : "Patient Study",
         "desc" : "Length or size of the Patient, in meters.",
         "entity" : "Study",
         "req" : "3",
         "usage" : "U",
         "name" : "Patient's Size",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0040,9096)[<0>](0040,9224)" : {
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
            "Required if Float Pixel Data (7FE0,0008) or Double Float Pixel Data (7FE0,0009) are present or Real World Value LUT Data (0040,9212) is not present."
         ],
         "entity" : "Image",
         "module" : "General Image",
         "usage" : "M",
         "name" : "Real World Value Intercept",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a30a)" : {
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Numeric Value",
         "usage" : "M",
         "req" : "1C"
      },
      "(0018,7040)" : {
         "module" : "X-Ray Grid",
         "entity" : "Image",
         "desc" : "The X-Ray absorbing material used in the grid.",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-36b"
         ],
         "usage" : "U",
         "name" : "Grid Absorbing Material"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,08ea)" : {
         "req" : "1C",
         "usage" : "M",
         "name" : "Measurement Units Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a120)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "DateTime",
         "usage" : "M",
         "module" : "General Series",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "entity" : "Series"
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "entity" : "Image",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "name" : "Value Type",
         "req" : "1"
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
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.12.1.1.6"
                  }
               },
               "."
            ],
            "Required if unencapsulated HL7 Structured Documents are referenced within the Instance. Every such document so referenced is required to have a corresponding Item in this Sequence."
         ],
         "entity" : "Image",
         "module" : "SOP Common",
         "name" : "HL7 Structured Document Reference Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1C"
      },
      "(0040,0560)[<0>](0040,0562)[<1>](0040,0031)" : {
         "usage" : "U",
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "req" : "1C",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "Image",
         "module" : "Specimen"
      },
      "(0008,0124)" : {
         "module" : "SOP Common",
         "desc" : [
            "Sequence of items that map values of Mapping Resource (0008,0105) to an external, private or local Mapping Resource.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Image",
         "req" : "3",
         "usage" : "M",
         "name" : "Mapping Resource Identification Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a161)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Floating Point Value",
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ]
      },
      "(0018,7046)" : {
         "desc" : "Ratio of the vertical spacing and horizontal spacing of the X-Ray absorbing material used in the grid. Specified by a pair of integer values where the first value is the vertical size, and the second value is the horizontal size.",
         "entity" : "Image",
         "module" : "X-Ray Grid",
         "usage" : "U",
         "name" : "Grid Aspect Ratio",
         "mod_tables" : [
            "table_C.8-36b"
         ],
         "req" : "3"
      },
      "(0040,0555)[<0>](0040,a168)" : {
         "module" : "Acquisition Context",
         "entity" : "Image",
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a Coded Value.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Date (0040,A121), Time (0040,A122), Person Name (0040,A123), Text Value (0040,A160), and the pair of Numeric Value (0040,A30A) and Measurement Units Code Sequence (0040,08EA) are not present."
         ],
         "req" : "1C",
         "usage" : "M - See ",
         "name" : "Concept Code Sequence",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ]
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a043)" : {
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Image",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "name" : "Concept Name Code Sequence",
         "usage" : "M",
         "req" : "1"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1102)" : {
         "desc" : "Person's mailing address",
         "entity" : "Image",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "name" : "Person's Address",
         "usage" : "M",
         "req" : "3"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0033)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "name" : "Universal Entity ID Type",
         "usage" : "M",
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
                     "el" : "para",
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
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_10.14"
                  },
                  "el" : "xref"
               },
               " for Defined Terms."
            ]
         ],
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0028,0101)" : [
         {
            "usage" : "M",
            "name" : "Bits Stored",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "req" : "1",
            "entity" : "Image",
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
            "module" : "Image Pixel"
         },
         {
            "mod_tables" : [
               "table_C.8-70"
            ],
            "name" : "Bits Stored",
            "usage" : "M",
            "req" : "1",
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
            "entity" : "Image",
            "module" : "DX Image"
         }
      ],
      "(0018,1620)" : {
         "desc" : [
            "Required if Shutter Shape (0018,1600) is POLYGONAL.",
            "Multiple Values where the first set of two values are:",
            {
               "attrs" : {
                  "mark" : "none"
               },
               "el" : "itemizedlist",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "listitem",
                     "content" : [
                        "\n                      ",
                        {
                           "el" : "para",
                           "content" : [
                              "row of the origin vertex\\column of the origin vertex"
                           ],
                           "attrs" : {
                              "xml:id" : "para_d59cd0c0-b975-4ac4-adee-bb16895e809c"
                           }
                        },
                        "\n                    "
                     ]
                  },
                  "\n                  "
               ]
            },
            "Two or more pairs of values follow and are the row and column coordinates of the other vertices of the polygon shutter. Polygon shutters are implicitly closed from the last vertex to the origin vertex and all edges shall be non-intersecting except at the vertices."
         ],
         "entity" : "Image",
         "module" : "Display Shutter",
         "mod_tables" : [
            "table_C.7-17a"
         ],
         "name" : "Vertices of the Polygonal Shutter",
         "usage" : "U",
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,08ea)" : {
         "usage" : "M",
         "name" : "Measurement Units Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0008,0053)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Query/Retrieve View",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Image",
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
         "module" : "SOP Common"
      },
      "(0010,1001)" : {
         "req" : "3",
         "usage" : "M",
         "name" : "Other Patient Names",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "desc" : "Other names used to identify the patient.",
         "entity" : "Patient"
      },
      "(0088,0200)[<0>](0028,0006)" : {
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
         "entity" : "Image",
         "module" : "General Image",
         "name" : "Planar Configuration",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "req" : "1C"
      },
      "(0008,1080)" : {
         "module" : "Patient Study",
         "desc" : "Description of the admitting diagnosis (diagnoses)",
         "entity" : "Study",
         "req" : "3",
         "name" : "Admitting Diagnoses Description",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0018,0036)[<0>](0018,0038)" : {
         "mod_tables" : [
            "table_C.7-19"
         ],
         "name" : "Intervention Status",
         "usage" : "U",
         "req" : "2",
         "entity" : "Image",
         "desc" : [
            "Temporal relation of SOP Instance to intervention",
            {
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
               ],
               "type" : "variablelist"
            }
         ],
         "module" : "Intervention"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1150)" : {
         "req" : "1",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0008,1052)[<0>](0008,0080)" : {
         "entity" : "Series",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "module" : "General Series",
         "name" : "Institution Name",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "req" : "1C"
      },
      "(0040,0560)[<0>](0040,0554)" : {
         "name" : "Specimen UID",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "req" : "1",
         "entity" : "Image",
         "desc" : [
            "Unique Identifier for Specimen. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.22.1.2"
               }
            },
            "."
         ],
         "module" : "Specimen"
      },
      "(0018,1706)" : {
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
         "module" : "X-Ray Collimator",
         "usage" : "U",
         "name" : "Collimator Upper Horizontal Edge",
         "mod_tables" : [
            "table_C.8-28b"
         ],
         "req" : "1C"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0032)" : {
         "desc" : [
            "Universal or unique identifier for the Patient ID Assigning Authority. The authority identified by this attribute shall be the same as that of Issuer of Patient ID (0010,0021), if present.",
            {
               "content" : [
                  "\n                ",
                  {
                     "attrs" : {
                        "xml:id" : "para_8933ed06-5a13-4f47-a4fd-9e2d7cc913a6"
                     },
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
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Universal Entity ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "req" : "3"
      },
      "(fffa,fffa)[<0>](0400,0005)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "desc" : "A number used to identify which MAC Parameters Sequence item was used in the calculation of this Digital Signature.",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "MAC ID Number",
         "usage" : "M"
      },
      "(0008,0013)" : {
         "entity" : "Image",
         "desc" : [
            "Time the SOP Instance was created.",
            "This is the time that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Instance Creation Time",
         "usage" : "M",
         "req" : "3"
      },
      "(0008,1250)[<0>](0020,000e)" : {
         "entity" : "Series",
         "desc" : "Instance UID of Related Series",
         "module" : "General Series",
         "usage" : "M",
         "name" : "Series Instance UID",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "req" : "1"
      },
      "(0008,0096)[<0>](0040,1104)" : {
         "module" : "General Study",
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
                                 "attrs" : {
                                    "xml:id" : "para_6a265054-28ce-4b9d-a9a3-4379a2e9e70e"
                                 },
                                 "content" : [
                                    "This attribute may have internal format or structure in accordance with local agreement or profile. In the absence of such agreement or prior formatting, use of ITU-T E.123 is suggested."
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
         "entity" : "Study",
         "req" : "3",
         "name" : "Person's Telecom Information",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0018,1720)" : {
         "name" : "Vertices of the Polygonal Collimator",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-28b"
         ],
         "req" : "1C",
         "desc" : [
            "Required if a value of Collimator Shape (0018,1700) is POLYGONAL.",
            "Multiple Values where the first set of two values are:",
            "row of the origin vertex;",
            "column of the origin vertex.",
            "Two or more pairs of values follow and are the row and column coordinates of the other vertices of the polygon collimator. Polygon collimators are implicitly closed from the last vertex to the origin vertex and all edges shall be non-intersecting except at the vertices."
         ],
         "entity" : "Image",
         "module" : "X-Ray Collimator"
      },
      "(0040,0520)[<0>](0050,0013)" : {
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Container Component Thickness",
         "usage" : "U",
         "req" : "3",
         "desc" : "Thickness in mm of container component",
         "entity" : "Image",
         "module" : "Specimen"
      },
      "(0010,0216)[<0>](0010,0217)" : {
         "req" : "1",
         "name" : "Strain Source",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "entity" : "Patient",
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
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a168)" : {
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "name" : "Concept Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C"
      },
      "(0008,1115)[<0>](0020,000e)" : {
         "usage" : "U",
         "name" : "Series Instance UID",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "req" : "1",
         "entity" : "Image",
         "desc" : "Unique identifier of the Series containing the referenced Instances.",
         "module" : "Common Instance Reference"
      },
      "(0010,2292)" : {
         "req" : "2C",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient Breed Description",
         "usage" : "M",
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
            "Required if the patient is an animal and if Patient Breed Code Sequence (0010,2293) is empty. May be present otherwise."
         ],
         "entity" : "Patient"
      },
      "(0008,114a)" : {
         "module" : "General Image",
         "entity" : "Image",
         "desc" : [
            "Non-image composite SOP Instances that are significantly related to this Image, including waveforms that may or may not be temporally synchronized with this image.",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "name" : "Referenced Instance Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ]
      },
      "(0054,0410)" : {
         "desc" : [
            "Sequence that describes the orientation of the patient with respect to gravity.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.11.5.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "Image",
         "module" : "DX Positioning",
         "name" : "Patient Orientation Code Sequence",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-72"
         ],
         "req" : "3"
      },
      "(0018,7006)" : {
         "module" : "DX Detector",
         "entity" : "Image",
         "desc" : "Free text description of detector.",
         "req" : "3",
         "name" : "Detector Description",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-71b"
         ]
      },
      "(0028,2110)" : [
         {
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
            "entity" : "Image",
            "module" : "General Image",
            "name" : "Lossy Image Compression",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "req" : "3"
         },
         {
            "name" : "Lossy Image Compression",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-70"
            ],
            "req" : "1",
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
                  "type" : "variablelist",
                  "title" : "Enumerated Values:"
               },
               "Once this value has been set to 01 it shall not be reset.",
               [
                  "See ",
                  {
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.7.6.1.1.5"
                     },
                     "el" : "xref"
                  },
                  "."
               ]
            ],
            "module" : "DX Image"
         }
      ],
      "(0012,0030)" : {
         "usage" : "U",
         "name" : "Clinical Trial Site ID",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "req" : "2",
         "entity" : "Patient",
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
         "module" : "Clinical Trial Subject"
      },
      "(0008,009d)[<0>](0040,1104)" : {
         "module" : "General Study",
         "entity" : "Study",
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
                                 "attrs" : {
                                    "xml:id" : "para_6a265054-28ce-4b9d-a9a3-4379a2e9e70e"
                                 },
                                 "content" : [
                                    "This attribute may have internal format or structure in accordance with local agreement or profile. In the absence of such agreement or prior formatting, use of ITU-T E.123 is suggested."
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
               ]
            }
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person's Telecom Information",
         "usage" : "M"
      },
      "(0008,1062)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "name" : "Physician(s) Reading Study Identification Sequence",
         "module" : "General Study",
         "entity" : "Study",
         "desc" : "Identification of the physician(s) reading the Study. One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Name of Physician(s) Reading Study (0008,1060), if present."
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)" : {
         "req" : "3",
         "usage" : "M",
         "name" : "Assigning Facility Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "entity" : "Patient",
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
         ]
      },
      "(0028,2000)" : {
         "module" : "Image Pixel",
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
                     "attrs" : {
                        "xml:id" : "para_d69f5d22-89f7-4927-ba3e-806a769850dc"
                     },
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
         "req" : "3",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "usage" : "M",
         "name" : "ICC Profile"
      },
      "(4ffe,0001)[<0>](0400,0010)" : {
         "req" : "1",
         "usage" : "M",
         "name" : "MAC Calculation Transfer Syntax UID",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "desc" : [
            "The Transfer Syntax UID used to encode the values of the Data Elements included in the MAC calculation. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
            {
               "el" : "note",
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
               ]
            }
         ],
         "entity" : "Image"
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
         "module" : "General Series",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "entity" : "Series"
      },
      "(0018,9004)" : {
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
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.13.2.1.1"
                  }
               },
               " for further explanation."
            ]
         ],
         "entity" : "Image",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Content Qualification",
         "usage" : "M",
         "req" : "3"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0008,1155)" : {
         "module" : "Specimen",
         "entity" : "Image",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "usage" : "U",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0008,1160)" : {
         "req" : "1C",
         "usage" : "U",
         "name" : "Referenced Frame Number",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
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
                     ],
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
      "(0008,0051)[<0>](0040,0033)" : {
         "module" : "General Study",
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
         "entity" : "Study",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "name" : "Universal Entity ID Type",
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)" : {
         "entity" : "Patient",
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
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "name" : "Assigning Facility Sequence",
         "req" : "3"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0062,000b)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Referenced Segment Number",
         "usage" : "U",
         "module" : "Specimen",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "entity" : "Image"
      },
      "(0008,0110)[<0>](0008,0103)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme Version",
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : "The coding scheme version associated with the Coding Scheme Designator (0008,0102).",
         "entity" : "Image"
      },
      "(0050,0010)[<0>](0050,0017)" : {
         "req" : "2C",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "name" : "Device Diameter Units",
         "usage" : "U",
         "module" : "Device",
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
         "entity" : "Image"
      },
      "(0010,0213)" : {
         "entity" : "Patient",
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
         "module" : "Patient",
         "usage" : "M",
         "name" : "Strain Nomenclature",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a30a)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Numeric Value",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "module" : "General Series"
      },
      "(0008,1070)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "name" : "Operators' Name",
         "req" : "3",
         "entity" : "Series",
         "desc" : "Name(s) of the operator(s) supporting the Series.",
         "module" : "General Series"
      },
      "(0028,3010)[<0>](0028,3006)" : [
         {
            "req" : "1",
            "mod_tables" : [
               "table_C.8-70"
            ],
            "usage" : "M",
            "name" : "LUT Data",
            "module" : "DX Image",
            "desc" : "LUT Data in this Sequence.",
            "entity" : "Image"
         },
         {
            "module" : "VOI LUT",
            "desc" : "LUT Data in this Sequence.",
            "entity" : "Image",
            "req" : "1",
            "usage" : "C - Required if Presentation Intent Type (0008,0068) is FOR PRESENTATION. Shall not be present otherwise. See Note 8.",
            "name" : "LUT Data",
            "mod_tables" : [
               "table_C.11-2b"
            ]
         }
      ],
      "(0008,009d)[<0>](0040,1101)" : {
         "module" : "General Study",
         "entity" : "Study",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1",
         "usage" : "M",
         "name" : "Person Identification Code Sequence",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0028,0120)" : {
         "module" : "General Equipment",
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
                                 "el" : "para",
                                 "content" : [
                                    "The Value Representation of this Attribute is determined by the value of Pixel Representation (0028,0103)."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_6f2fdee2-7dad-437a-8654-b37b23363d43"
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
                                    "This Attribute is not used in Presentation State Instances; there is no means in a Presentation State to \"override\" any Pixel Padding Value specified in the referenced images."
                                 ],
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_b999d6e3-1cd0-4d28-8dc1-b515149c6197"
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
                                    "xml:id" : "para_26f7a207-e6e2-417b-bd79-9085f3fa60cb"
                                 },
                                 "content" : [
                                    "This Attribute does apply to RT Dose and Segmentation instances, since they include Pixel Data."
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
                                    "This Attribute does\n                          not apply when Float Pixel Data (7FE0,0008) or Double Float Pixel Data\n                          (7FE0,0009) are used instead of Pixel Data (7FE0,0010); Float Pixel\n                          Padding Value (0028,0122) or Double Float Pixel Padding Value\n                          (0028,0123), respectively, are used instead, and defined at the Image,\n                          not the Equipment, level."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_77a29ed0-edb8-45c2-a3d1-d07bc572e485"
                                 }
                              },
                              "\n                      "
                           ]
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
         "name" : "Pixel Padding Value",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ]
      },
      "(0008,009d)[<0>](0040,1103)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person's Telephone Numbers",
         "usage" : "M",
         "module" : "General Study",
         "entity" : "Study",
         "desc" : "Person's telephone number(s)"
      },
      "(0028,1041)" : {
         "module" : "DX Image",
         "desc" : [
            "The sign of the relationship between the Pixel sample values stored in Pixel Data (7FE0,0010) and the X-Ray beam intensity.",
            {
               "title" : "Enumerated Values:",
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
               ]
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
         "mod_tables" : [
            "table_C.8-70"
         ],
         "name" : "Pixel Intensity Relationship Sign",
         "usage" : "M"
      },
      "(0008,1030)" : {
         "req" : "3",
         "usage" : "M",
         "name" : "Study Description",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "desc" : "Institution-generated description or classification of the Study (component) performed.",
         "entity" : "Study"
      },
      "(0040,0560)[<0>](0040,0602)" : {
         "usage" : "U",
         "name" : "Specimen Detailed Description",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "req" : "3",
         "entity" : "Image",
         "desc" : "Detailed textual specimen description (may include ancestor specimen descriptions).",
         "module" : "Specimen"
      },
      "(0010,2298)" : {
         "entity" : "Patient",
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
         "module" : "Patient",
         "name" : "Responsible Person Role",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "1C"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0031)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "name" : "Local Namespace Entity ID",
         "usage" : "M",
         "module" : "General Series",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "Series"
      },
      "(0010,1100)[<0>](0040,e022)" : {
         "desc" : [
            "Details for retrieving instances from Media.",
            "Required if DICOM Retrieval Sequence (0040,E021), WADO Retrieval Sequence (0040,E023), and WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "This sequence shall only identify media known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "DICOM Media Retrieval Sequence",
         "usage" : "M",
         "req" : "1C"
      },
      "(0008,2228)" : {
         "module" : "DX Anatomy Imaged",
         "desc" : [
            "Sequence of Items that identifies the primary anatomic structure(s) of interest in this Instance.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Image",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-69",
            "table_10-6",
            "table_10-8"
         ],
         "usage" : "M",
         "name" : "Primary Anatomic Structure Sequence"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a160)" : {
         "module" : "General Image",
         "entity" : "Image",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "req" : "1C",
         "name" : "Text Value",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ]
      },
      "(0018,7022)" : {
         "module" : "DX Detector",
         "desc" : [
            [
               "Physical distance between the center of each detector element, specified by a numeric pair - row spacing value(delimiter) column spacing value in mm. See ",
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
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "This may not be the same as the Imager Pixel Spacing (0018,1164), and should not be assumed to describe the stored image."
                     ],
                     "attrs" : {
                        "xml:id" : "para_7c26ba93-41a1-420b-8b9f-77c9ccf7b22d"
                     }
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "entity" : "Image",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "usage" : "M",
         "name" : "Detector Element Spacing"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a121)" : {
         "usage" : "M",
         "name" : "Date",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "module" : "General Series"
      },
      "(0008,0096)[<0>](0040,1102)" : {
         "module" : "General Study",
         "entity" : "Study",
         "desc" : "Person's mailing address",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person's Address",
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a161)" : {
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "entity" : "Image",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Floating Point Value",
         "usage" : "U",
         "req" : "1C"
      },
      "(0100,0420)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "SOP Authorization DateTime",
         "module" : "SOP Common",
         "entity" : "Image",
         "desc" : "The date and time when the SOP Instance Status (0100,0410) was set to AO."
      },
      "(0400,0561)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Original Attributes Sequence",
         "req" : "3",
         "desc" : [
            "Sequence of Items containing all attributes that were removed or replaced by other values in the main data set.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Image",
         "module" : "SOP Common"
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
         "entity" : "Image",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "name" : "Certified Timestamp"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1104)" : {
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
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Person's Telecom Information",
         "req" : "3"
      },
      "(0008,1140)[<0>](0062,000b)" : {
         "module" : "General Image",
         "entity" : "Image",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3"
         ],
         "usage" : "M",
         "name" : "Referenced Segment Number"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1150)" : {
         "req" : "1",
         "usage" : "U",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ],
         "module" : "Common Instance Reference",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a043)" : {
         "req" : "1",
         "usage" : "U",
         "name" : "Concept Name Code Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Image"
      },
      "(0008,114a)[<0>](0008,1155)" : {
         "module" : "General Image",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Image",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "usage" : "M"
      },
      "(0008,1250)[<0>](0020,000d)" : {
         "module" : "General Series",
         "desc" : "Instance UID of Study to which the related Series belongs",
         "entity" : "Series",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Study Instance UID",
         "usage" : "M"
      },
      "(0018,5101)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.8-72"
         ],
         "usage" : "U",
         "name" : "View Position",
         "module" : "DX Positioning",
         "entity" : "Image",
         "desc" : [
            "Radiographic view of the image relative to the imaging subject's orientation.",
            [
               "Shall be consistent with View Code Sequence (0054,0220). See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.11.5.1.1",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ]
         ]
      },
      "(0028,1051)" : [
         {
            "req" : "1C",
            "mod_tables" : [
               "table_C.8-70"
            ],
            "name" : "Window Width",
            "usage" : "M",
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
            "entity" : "Image"
         },
         {
            "mod_tables" : [
               "table_C.11-2b"
            ],
            "usage" : "C - Required if Presentation Intent Type (0008,0068) is FOR PRESENTATION. Shall not be present otherwise. See Note 8.",
            "name" : "Window Width",
            "req" : "1C",
            "desc" : [
               [
                  "Window Width for display. See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.11.2.1.2"
                     }
                  },
                  " for further explanation."
               ],
               "Required if Window Center (0028,1050) is sent."
            ],
            "entity" : "Image",
            "module" : "VOI LUT"
         }
      ],
      "(0028,0100)" : [
         {
            "desc" : [
               "Number of bits allocated for each pixel sample. Each sample shall have the same number of bits allocated. Bits Allocated (0028,0100) shall be either 1, or a multiple of 8. See ",
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
            "module" : "Image Pixel",
            "name" : "Bits Allocated",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "req" : "1"
         },
         {
            "usage" : "M",
            "name" : "Bits Allocated",
            "mod_tables" : [
               "table_C.8-70"
            ],
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
            "module" : "DX Image"
         }
      ],
      "(0018,6000)" : {
         "req" : "3",
         "usage" : "M",
         "name" : "Sensitivity",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "module" : "DX Detector",
         "desc" : [
            "Detector sensitivity in manufacturer specific units.",
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
                           "content" : [
                              "\n                        ",
                              {
                                 "attrs" : {
                                    "xml:id" : "para_0936da47-cfae-4167-a653-765f69cfd218"
                                 },
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
                           "content" : [
                              "\n                        ",
                              {
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
               ],
               "el" : "note"
            }
         ],
         "entity" : "Image"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1155)" : {
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ],
         "module" : "Common Instance Reference",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Image"
      },
      "(0018,a001)[<0>](0008,0081)" : {
         "module" : "SOP Common",
         "desc" : "Address of the institution where the equipment that contributed to the composite instance is located.",
         "entity" : "Image",
         "req" : "3",
         "name" : "Institution Address",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)" : {
         "req" : "1",
         "name" : "Referenced Instance Sequence",
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "module" : "Common Instance Reference",
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Image"
      },
      "(0008,1062)[<0>](0008,0081)" : {
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Institution Address",
         "req" : "3"
      },
      "(0028,2002)" : {
         "req" : "3",
         "name" : "Color Space",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "module" : "Image Pixel",
         "entity" : "Image",
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
      "(0010,1100)[<0>](0040,e024)[<1>](0040,e031)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "Home Community ID",
         "usage" : "M",
         "module" : "Patient",
         "desc" : "Uniquely identifies a Community to which requests for the referenced instances can be directed.",
         "entity" : "Patient"
      },
      "(0040,0512)" : {
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Container Identifier",
         "usage" : "U",
         "req" : "1",
         "entity" : "Image",
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
         "module" : "Specimen"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Image",
         "module" : "Specimen",
         "usage" : "U",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ],
         "req" : "1"
      },
      "(0010,0034)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "desc" : [
            "Date of death of the named patient in the Alternative Calendar (0010,0035).",
            {
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_9f9d00e7-4c3c-4ecd-9b0f-c6dc916409e9"
                     },
                     "el" : "para",
                     "content" : [
                        "No format is specified for alternative calendar dates so none should be assumed."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "Patient's Death Date in Alternative Calendar"
      },
      "(0020,1002)" : {
         "mod_tables" : [
            "table_C.7-9"
         ],
         "name" : "Images in Acquisition",
         "usage" : "M",
         "req" : "3",
         "desc" : "Number of images that resulted from this acquisition of data",
         "entity" : "Image",
         "module" : "General Image"
      },
      "(0028,0303)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Longitudinal Temporal Information Modified",
         "req" : "3",
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
                  "el" : "olink",
                  "attrs" : {
                     "targetdoc" : "PS3.15",
                     "xrefstyle" : "select: labelnumber",
                     "targetptr" : "PS3.15"
                  }
               },
               "."
            ]
         ],
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0008,1050)" : {
         "module" : "General Series",
         "entity" : "Series",
         "desc" : "Name of the physician(s) administering the Series.",
         "req" : "3",
         "usage" : "M",
         "name" : "Performing Physician's Name",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0012,0031)" : {
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "name" : "Clinical Trial Site Name",
         "usage" : "U",
         "req" : "2",
         "entity" : "Patient",
         "desc" : [
            "Name of the site responsible for submitting clinical trial or research data. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.1.3.1.5",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            }
         ],
         "module" : "Clinical Trial Subject"
      },
      "(0040,0555)" : {
         "module" : "Acquisition Context",
         "entity" : "Image",
         "desc" : [
            "A sequence of Items that describes the conditions present during the acquisition of the data of the SOP Instance.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "req" : "2",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "usage" : "M - See ",
         "name" : "Acquisition Context Sequence"
      },
      "(0040,0515)[<0>](0040,0513)[<1>](0040,0033)" : {
         "usage" : "U",
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "req" : "1C",
         "entity" : "Image",
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
         "module" : "Specimen"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a163)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Rational Denominator Value",
         "usage" : "U",
         "module" : "Specimen",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "entity" : "Image"
      },
      "(0008,1060)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Name of Physician(s) Reading Study",
         "usage" : "M",
         "req" : "3",
         "entity" : "Study",
         "desc" : "Names of the physician(s) reading the Study.",
         "module" : "General Study"
      },
      "(0018,702b)" : {
         "entity" : "Image",
         "desc" : "Model name of the detector component of the acquisition system",
         "module" : "DX Detector",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "usage" : "M",
         "name" : "Detector Manufacturer's Model Name",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a123)" : {
         "entity" : "Series",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Person Name",
         "usage" : "M",
         "req" : "1C"
      },
      "(0028,0002)" : [
         {
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "name" : "Samples per Pixel",
            "usage" : "M",
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
            "module" : "Image Pixel"
         },
         {
            "req" : "1",
            "mod_tables" : [
               "table_C.8-70"
            ],
            "name" : "Samples per Pixel",
            "usage" : "M",
            "module" : "DX Image",
            "desc" : [
               "Number of samples in this image.",
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
            "entity" : "Image"
         }
      ],
      "(0010,1100)[<0>](0040,e022)[<1>](0088,0130)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "Storage Media File-Set ID",
         "usage" : "M",
         "req" : "2",
         "entity" : "Patient",
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the referenced instance(s) reside.",
         "module" : "Patient"
      },
      "(0100,0410)" : {
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
         "entity" : "Image",
         "module" : "SOP Common",
         "name" : "SOP Instance Status",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3"
      },
      "(0400,0561)[<0>](0400,0563)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Modifying System",
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : "Identification of the system that removed and/or replaced the attributes.",
         "entity" : "Image"
      },
      "(0040,0520)[<0>](0008,1090)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Manufacturer's Model Name",
         "usage" : "U",
         "module" : "Specimen",
         "desc" : "Manufacturer's model name of the container component.",
         "entity" : "Image"
      },
      "(0018,1470)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.8-32"
         ],
         "name" : "Tomo Angle",
         "usage" : "U",
         "module" : "X-Ray Tomography Acquisition",
         "entity" : "Image",
         "desc" : "Angle span in degrees of rotation of X-Ray Source during X-Ray acquisition."
      },
      "(0050,0010)[<0>](0050,0016)" : {
         "req" : "3",
         "name" : "Device Diameter",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "module" : "Device",
         "desc" : [
            "Unit diameter of device. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.12.1.1"
               }
            },
            "."
         ],
         "entity" : "Image"
      },
      "(0008,0021)" : {
         "entity" : "Series",
         "desc" : "Date the Series started.",
         "module" : "General Series",
         "usage" : "M",
         "name" : "Series Date",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0062,000b)" : {
         "usage" : "M",
         "name" : "Referenced Segment Number",
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
         "module" : "General Series"
      },
      "(0040,0560)[<0>](0040,0600)" : {
         "module" : "Specimen",
         "entity" : "Image",
         "desc" : "Short textual specimen description (may include ancestor specimen descriptions).",
         "req" : "3",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U",
         "name" : "Specimen Short Description"
      },
      "(0018,1608)" : {
         "entity" : "Image",
         "desc" : "Required if Shutter Shape (0018,1600) is RECTANGULAR. Location of the lower edge of the rectangular shutter with respect to pixels in the image given as row.",
         "module" : "Display Shutter",
         "mod_tables" : [
            "table_C.7-17a"
         ],
         "usage" : "U",
         "name" : "Shutter Lower Horizontal Edge",
         "req" : "1C"
      },
      "(0008,0106)" : {
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
         ],
         "entity" : "Image",
         "module" : "SOP Common",
         "name" : "Context Group Version",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1"
      },
      "(0010,0030)" : {
         "usage" : "M",
         "name" : "Patient's Birth Date",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "2",
         "entity" : "Patient",
         "desc" : "Birth date of the patient.",
         "module" : "Patient"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0008,1199)[<2>](0008,1155)" : {
         "entity" : "Image",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "req" : "1"
      },
      "(0008,1052)[<0>](0008,0082)" : {
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "name" : "Institution Code Sequence",
         "usage" : "M"
      },
      "(0040,8302)" : {
         "entity" : "Image",
         "desc" : [
            "Average entrance dose value measured in mGy at the surface of the patient\u00ad during the acquisition of this image.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "This may be an estimated value based on assumptions about the patient's body size and habitus."
                     ],
                     "attrs" : {
                        "xml:id" : "para_7c6a896d-5441-4065-997b-b89b6562bf5e"
                     }
                  },
                  "\n                  "
               ]
            }
         ],
         "module" : "X-Ray Acquisition Dose",
         "mod_tables" : [
            "table_C.8-33"
         ],
         "name" : "Entrance Dose in mGy",
         "usage" : "U",
         "req" : "3"
      },
      "(0008,1072)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Operator Identification Sequence",
         "usage" : "M",
         "module" : "General Series",
         "desc" : [
            "Identification of the operator(s) supporting the Series.",
            "One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Operators' Name (0008,1070), if present."
         ],
         "entity" : "Series"
      },
      "(0040,0520)[<0>](0050,001d)" : {
         "entity" : "Image",
         "desc" : "Diameter in mm of container component for cylindrical or circular components.",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U",
         "name" : "Container Component Diameter",
         "req" : "3"
      },
      "(0018,a001)[<0>](0008,0070)" : {
         "desc" : "Manufacturer of the equipment that contributed to the composite instance.",
         "entity" : "Image",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Manufacturer",
         "req" : "1"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a121)" : {
         "name" : "Date",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1C",
         "entity" : "Image",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "module" : "Specimen"
      },
      "(0088,0200)[<0>](0028,0002)" : {
         "req" : "1",
         "usage" : "M",
         "name" : "Samples per Pixel",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image",
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
         "entity" : "Image"
      },
      "(0018,1191)" : [
         {
            "req" : "3",
            "mod_tables" : [
               "table_C.8-33"
            ],
            "name" : "Anode Target Material",
            "usage" : "U",
            "module" : "X-Ray Acquisition Dose",
            "entity" : "Image",
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
                  "type" : "variablelist",
                  "title" : "Defined Terms:"
               }
            ]
         },
         {
            "module" : "X-Ray Generation",
            "entity" : "Image",
            "desc" : [
               "The primary material in the anode of the X-Ray source.",
               {
                  "type" : "variablelist",
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
                  "title" : "Defined Terms:"
               }
            ],
            "req" : "3",
            "usage" : "U",
            "name" : "Anode Target Material",
            "mod_tables" : [
               "table_C.8-34"
            ]
         }
      ],
      "(0040,0520)[<0>](0008,0070)" : {
         "desc" : "Manufacturer of the container component.",
         "entity" : "Image",
         "module" : "Specimen",
         "name" : "Manufacturer",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "req" : "3"
      },
      "(0010,0026)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "usage" : "M",
         "name" : "Source Patient Group Identification Sequence",
         "req" : "3",
         "entity" : "Patient",
         "desc" : [
            [
               "A sequence containing the value used for Patient ID (0010,0020) and related Attributes in the source composite instances that contained a group of subjects whose data was acquired at the same time, from which this composite instance was extracted. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.1.4.1.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Only a single Item is permitted in this sequence."
         ],
         "module" : "Patient"
      },
      "(0018,1405)" : {
         "module" : "X-Ray Acquisition Dose",
         "entity" : "Image",
         "desc" : [
            "Indication of the applied dose, in manufacturer specific units.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "orderedlist",
                     "content" : [
                        "\n                      ",
                        {
                           "content" : [
                              "\n                        ",
                              {
                                 "el" : "para",
                                 "content" : [
                                    "This value is intended to provide a single location where manufacturer specific information can be found for annotation on a display or film, that has meaning to a knowledgeable observer."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_adac430b-3276-46a4-9474-42d3f4f3ed85"
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
                                    "xml:id" : "para_86a4ba05-db44-405f-abce-86c4bad0b97f"
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
                                    "xml:id" : "para_203c72d8-0c09-4eb5-884f-81e035bc76e8"
                                 },
                                 "content" : [
                                    "DICOM specifies standard Attributes in ",
                                    {
                                       "el" : "xref",
                                       "attrs" : {
                                          "xrefstyle" : "select: label",
                                          "linkend" : "table_10-23"
                                       }
                                    },
                                    " 'Exposure Index Macro', which are recommended."
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
               ]
            }
         ],
         "req" : "3",
         "name" : "Relative X-Ray Exposure",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-33"
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a30a)" : {
         "module" : "Specimen",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "entity" : "Image",
         "req" : "1C",
         "name" : "Numeric Value",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0088,0200)[<0>](0028,0034)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "name" : "Pixel Aspect Ratio",
         "usage" : "M",
         "module" : "General Image",
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
         ]
      },
      "(0012,0081)" : {
         "module" : "Clinical Trial Subject",
         "desc" : "Name of the Ethics Committee or Institutional Review Board (IRB) or Institutional Animal Care and Use Committees (IACUC) responsible for approval of the Clinical Trial or research. Required if Clinical Trial Protocol Ethics Committee Approval Number (0012,0082) is present.",
         "entity" : "Patient",
         "req" : "1C",
         "usage" : "U",
         "name" : "Clinical Trial Protocol Ethics Committee Name",
         "mod_tables" : [
            "table_C.7-2b"
         ]
      },
      " (0010,0027) [<0>](0010,0021)" : {
         "usage" : "M",
         "name" : "Issuer of Patient ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "req" : "3",
         "entity" : "Patient",
         "desc" : [
            "Identifier of the Assigning Authority (system, organization, agency, or department) that issued the Patient ID.",
            {
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 4 subcomponent 1."
                     ],
                     "attrs" : {
                        "xml:id" : "para_fde39d36-34f5-4459-8bca-12b577233532"
                     }
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "module" : "Patient"
      },
      "(0060,3000)[<0>](0060,3006)" : {
         "name" : "Histogram Last Bin Value",
         "usage" : "U",
         "mod_tables" : [
            "table_C.11.5-1"
         ],
         "req" : "1",
         "desc" : [
            "The stored pixel value corresponding to the highest pixel value counted in the last bin. All image pixel values greater than this value are not included in the histogram.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "content" : [
                        "The Value Representation of this Attribute is determined by the value of Pixel Representation (0028,0103)."
                     ],
                     "attrs" : {
                        "xml:id" : "para_30a11957-6900-4944-886e-090bb2f39141"
                     }
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "entity" : "Image",
         "module" : "Image Histogram"
      },
      "(0012,0040)" : {
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U",
         "name" : "Clinical Trial Subject ID",
         "req" : "1C",
         "desc" : [
            "The assigned identifier for the clinical trial or research subject. See ",
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
         "module" : "Clinical Trial Subject"
      },
      "(0018,7065)" : {
         "name" : "Phototimer Setting",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-34"
         ],
         "req" : "3",
         "desc" : "Nominal percentage phototimer setting, where a more positive value indicates greater exposure and a more negative value indicates less exposure.",
         "entity" : "Image",
         "module" : "X-Ray Generation"
      },
      "(0054,0220)" : {
         "mod_tables" : [
            "table_C.8-72"
         ],
         "usage" : "U",
         "name" : "View Code Sequence",
         "req" : "3",
         "entity" : "Image",
         "desc" : [
            "Sequence that describes the projection of the anatomic region of interest on the image receptor.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_a52a7911-463d-407f-bafb-5d6adedb8299"
                     },
                     "el" : "para",
                     "content" : [
                        "It is strongly recommended that this Attribute be present, in order to ensure that images may be positioned correctly relative to one another for display."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
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
         "module" : "DX Positioning"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0033)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "name" : "Universal Entity ID Type",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Patient",
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
         "module" : "Patient"
      },
      "(0008,0300)[<0>](0008,0304)" : {
         "name" : "Nonidentifying Private Elements",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1C",
         "desc" : [
            "List of Private Data Elements in block that do not contain identifying\n                  information (are safe from identity leakage).",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once.",
            "Required if Block Identifying Information Status (0008,0303) equals MIXED."
         ],
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0010,0024)" : {
         "module" : "Patient",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "Patient",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "name" : "Issuer of Patient ID Qualifiers Sequence"
      },
      "(0018,11a0)" : [
         {
            "req" : "3",
            "usage" : "U",
            "name" : "Body Part Thickness",
            "mod_tables" : [
               "table_C.8-72"
            ],
            "module" : "DX Positioning",
            "desc" : "The average thickness in mm of the body part examined when compressed, if compression has been applied during exposure.",
            "entity" : "Image"
         },
         {
            "req" : "3",
            "mod_tables" : [
               "table_C.8-33"
            ],
            "usage" : "U",
            "name" : "Body Part Thickness",
            "module" : "X-Ray Acquisition Dose",
            "entity" : "Image",
            "desc" : "The average thickness in mm of the body part examined when compressed, if compression has been applied during exposure."
         }
      ],
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1150)" : {
         "module" : "General Series",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Series",
         "req" : "1",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(0008,0022)" : {
         "desc" : "The date the acquisition of data that resulted in this image started",
         "entity" : "Image",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M",
         "name" : "Acquisition Date",
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a040)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Value Type",
         "module" : "General Series",
         "entity" : "Series",
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
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)" : {
         "entity" : "Series",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Referenced SOP Sequence",
         "usage" : "M",
         "req" : "1C"
      },
      "(0008,0014)" : {
         "module" : "SOP Common",
         "desc" : "Uniquely identifies device that created the SOP Instance.",
         "entity" : "Image",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Instance Creator UID",
         "usage" : "M"
      },
      "(0028,3010)[<0>](0028,3003)" : [
         {
            "mod_tables" : [
               "table_C.8-70"
            ],
            "name" : "LUT Explanation",
            "usage" : "M",
            "req" : "3",
            "entity" : "Image",
            "desc" : "Free form text explanation of the meaning of the LUT.",
            "module" : "DX Image"
         },
         {
            "req" : "3",
            "mod_tables" : [
               "table_C.11-2b"
            ],
            "usage" : "C - Required if Presentation Intent Type (0008,0068) is FOR PRESENTATION. Shall not be present otherwise. See Note 8.",
            "name" : "LUT Explanation",
            "module" : "VOI LUT",
            "entity" : "Image",
            "desc" : "Free form text explanation of the meaning of the LUT."
         }
      ],
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a30a)" : {
         "module" : "General Series",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "entity" : "Series",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Numeric Value",
         "usage" : "M"
      },
      "(0040,9096)[<0>](0040,9214)" : {
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "name" : "Double Float Real World Value First Value Mapped",
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "Specifies the first stored value mapped for the Real Word Value Intercept (0040,9224) and Real World Value Slope (0040,9225) of this Item.",
            "Required if Real World Value First Value Mapped (0040,9216) is absent.",
            {
               "content" : [
                  "\n                        ",
                  {
                     "el" : "para",
                     "content" : [
                        "The same Attribute with a double float precision value is used whether or not Float Pixel Data (7FE0,0008) or Double Float Pixel Data (7FE0,0009) are present, an integer value is not sufficient."
                     ],
                     "attrs" : {
                        "xml:id" : "para_21eff4f3-31a1-4086-873d-2bb31aaf6698"
                     }
                  },
                  "\n                      "
               ],
               "el" : "note"
            }
         ],
         "entity" : "Image",
         "module" : "General Image"
      },
      "(fffa,fffa)[<0>](0400,0120)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "name" : "Signature",
         "module" : "SOP Common",
         "entity" : "Image",
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
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.12.1.1.3.1.2"
               },
               "el" : "xref"
            },
            "."
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a123)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Person Name",
         "usage" : "U",
         "req" : "1C",
         "entity" : "Image",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "module" : "Specimen"
      },
      "(0040,1012)" : {
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
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Reason For Performed Procedure Code Sequence",
         "usage" : "M",
         "req" : "3"
      },
      "(0010,1002)[<0>](0010,0022)" : {
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
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Type of Patient ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "1"
      },
      "(0018,1044)" : {
         "req" : "3",
         "name" : "Contrast/Bolus Total Dose",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "module" : "Contrast/Bolus",
         "entity" : "Image",
         "desc" : "Total amount in milliliters of the undiluted contrast agent"
      },
      " (0010,0027) [<0>](0010,0028)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "name" : "Subject Relative Position in Image",
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
         "desc" : [
            "The position in the image pixel data of the individual subject identified in this sequence relative to the other subjects. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.4.1.1.1"
               },
               "el" : "xref"
            },
            "."
         ]
      },
      "(0008,1120)" : {
         "name" : "Referenced Patient Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3",
         "entity" : "Patient",
         "desc" : [
            "A sequence that provides reference to a Patient SOP Class/Instance pair.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "Patient"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0008,1150)" : {
         "req" : "1",
         "usage" : "U",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "Specimen",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Image"
      },
      "(0088,0200)[<0>](0028,0106)" : {
         "req" : "3",
         "name" : "Smallest Image Pixel Value",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image",
         "entity" : "Image",
         "desc" : "The minimum actual pixel value encountered in this image."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a122)" : {
         "entity" : "Series",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "module" : "General Series",
         "usage" : "M",
         "name" : "Time",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C"
      },
      "(0008,1110)" : {
         "module" : "General Study",
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
         "entity" : "Study",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "name" : "Referenced Study Sequence"
      },
      "(0018,1138)" : {
         "usage" : "U",
         "name" : "Table Angle",
         "mod_tables" : [
            "table_C.8-72"
         ],
         "req" : "3",
         "desc" : [
            "Angle of table plane in degrees relative to horizontal plane [Gravity plane]. Positive values indicate that the head of the table is upward.",
            "Only meaningful if Table Type (0018,113A) is TILTING."
         ],
         "entity" : "Image",
         "module" : "DX Positioning"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,003a)" : {
         "module" : "Patient",
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
                     "content" : [
                        "Equivalent to HL7 v2 CX component 10 (Assigning Agency or Department)."
                     ],
                     "el" : "para"
                  },
                  "\n              "
               ]
            }
         ],
         "entity" : "Patient",
         "req" : "3",
         "name" : "Assigning Agency or Department Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ]
      },
      "(0040,0555)[<0>](0040,08ea)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "name" : "Measurement Units Code Sequence",
         "usage" : "M - See ",
         "module" : "Acquisition Context",
         "desc" : [
            "Units of measurement.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Numeric Value (0040,A30A) is sent. Shall not be present otherwise."
         ],
         "entity" : "Image"
      },
      "(0060,3000)" : {
         "req" : "1",
         "usage" : "U",
         "name" : "Histogram Sequence",
         "mod_tables" : [
            "table_C.11.5-1"
         ],
         "module" : "Image Histogram",
         "desc" : [
            "Defines a sequence of Histograms.",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Image"
      },
      "(60xx,1301)" : {
         "desc" : [
            "Number of pixels in ROI area.",
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
         "entity" : "Image",
         "module" : "Overlay Plane",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "name" : "ROI Area",
         "usage" : "C - Required if graphic annotation is present - See ",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a043)" : {
         "req" : "1",
         "usage" : "M",
         "name" : "Concept Name Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0008,0105)" : {
         "module" : "SOP Common",
         "desc" : [
            "The identifier of the Mapping Resource.",
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
         "entity" : "Image",
         "req" : "1",
         "name" : "Mapping Resource",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0018,7000)" : {
         "desc" : [
            "Whether or not the detector is operating within normal tolerances during this image acquisition.",
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
            {
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
               ],
               "el" : "note"
            }
         ],
         "entity" : "Image",
         "module" : "DX Detector",
         "name" : "Detector Conditions Nominal Flag",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "req" : "3"
      },
      "(0010,4000)" : {
         "desc" : "User-defined additional information about the patient.",
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient Comments",
         "usage" : "M",
         "req" : "3"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0082)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "name" : "Institution Code Sequence",
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0018,1490)" : {
         "name" : "Tomo Type",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-32"
         ],
         "req" : "3",
         "desc" : [
            "Type of tomography.",
            {
               "type" : "variablelist",
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
               "title" : "Defined Terms:"
            }
         ],
         "entity" : "Image",
         "module" : "X-Ray Tomography Acquisition"
      },
      "(0018,7004)" : {
         "req" : "2",
         "name" : "Detector Type",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "module" : "DX Detector",
         "desc" : [
            "The type of detector used to acquire this image.",
            {
               "type" : "variablelist",
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
               "title" : "Defined Terms:"
            }
         ],
         "entity" : "Image"
      },
      "(0018,1042)" : {
         "desc" : "Time of start of injection",
         "entity" : "Image",
         "module" : "Contrast/Bolus",
         "usage" : "U",
         "name" : "Contrast/Bolus Start Time",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "req" : "3"
      },
      "(0010,0010)" : {
         "usage" : "M",
         "name" : "Patient's Name",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "2",
         "desc" : "Patient's full name.",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a123)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Person Name",
         "usage" : "M",
         "module" : "General Series",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "entity" : "Series"
      },
      "(0008,1072)[<0>](0040,1103)" : {
         "desc" : "Person's telephone number(s)",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "name" : "Person's Telephone Numbers",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "req" : "3"
      },
      "(0010,0024)[<0>](0040,0033)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Universal Entity ID Type",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Patient",
         "desc" : [
            "Standard defining the format of the Universal Entity ID (0040,0032). Required if Universal Entity ID (0040,0032) is present.",
            {
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
         "module" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0062,000b)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Referenced Segment Number",
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a30a)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Numeric Value",
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "module" : "General Series"
      },
      "(0088,0200)[<0>](0028,0107)" : {
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "name" : "Largest Image Pixel Value",
         "usage" : "M",
         "req" : "3",
         "desc" : "The maximum actual pixel value encountered in this image.",
         "entity" : "Image",
         "module" : "General Image"
      },
      "(fffa,fffa)[<0>](0400,0305)" : {
         "req" : "1C",
         "name" : "Certified Timestamp Type",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
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
                           "el" : "olink",
                           "attrs" : {
                              "targetdoc" : "PS3.15",
                              "xrefstyle" : "select: labelnumber",
                              "targetptr" : "PS3.15"
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
         "entity" : "Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a040)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
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
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0400,0561)[<0>](0400,0565)" : {
         "module" : "SOP Common",
         "desc" : [
            "Reason for the attribute modification.",
            {
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
               ],
               "title" : "Defined Terms:"
            }
         ],
         "entity" : "Image",
         "req" : "1",
         "name" : "Reason for the Attribute Modification",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0400,0561)[<0>](0400,0564)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "desc" : "The source that provided the SOP Instance prior to the removal or replacement of the values. For example, this might be the Institution from which imported SOP Instances were received.",
         "req" : "2",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Source of Previous Values"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a162)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Rational Numerator Value",
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "module" : "General Series"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0031)" : {
         "req" : "1C",
         "usage" : "M",
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise."
      },
      "(0040,0253)" : {
         "module" : "General Series",
         "entity" : "Series",
         "desc" : "User or equipment generated identifier of that part of a Procedure that has been carried out within this step.",
         "req" : "3",
         "usage" : "M",
         "name" : "Performed Procedure Step ID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "name" : "Universal Entity ID",
         "usage" : "M",
         "module" : "Patient",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "Patient"
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0307)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Deidentification Action",
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : [
            "Recommended action to be performed during de-identification on elements listed in Identifying Private Elements (0008,0306) within this Item.",
            {
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
               ],
               "el" : "note"
            },
            {
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
               ],
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
                           "el" : "listitem",
                           "content" : [
                              "\n                      ",
                              {
                                 "attrs" : {
                                    "xml:id" : "para_62b4d252-a377-4a7b-9905-82f5437ccd6c"
                                 },
                                 "content" : [
                                    "Further explanation of these actions can be found in ",
                                    {
                                       "el" : "olink",
                                       "attrs" : {
                                          "targetdoc" : "PS3.15",
                                          "xrefstyle" : "template:PS3.15 Section %n %t",
                                          "targetptr" : "sect_E.3.1"
                                       }
                                    },
                                    "."
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
               ]
            }
         ],
         "entity" : "Image"
      },
      "(0028,0109)" : {
         "req" : "3",
         "name" : "Largest Pixel Value in Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "desc" : "The maximum value of all images in this Series."
      },
      "(0028,0034)" : {
         "module" : "Image Pixel",
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
         "entity" : "Image",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "usage" : "M",
         "name" : "Pixel Aspect Ratio"
      },
      "(0008,0090)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Referring Physician's Name",
         "usage" : "M",
         "req" : "2",
         "entity" : "Study",
         "desc" : "Name of the patient's referring physician",
         "module" : "General Study"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0039)" : {
         "module" : "Patient",
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
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "name" : "Assigning Jurisdiction Code Sequence",
         "usage" : "M"
      },
      "(0010,1100)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Referenced Patient Photo Sequence",
         "usage" : "M",
         "module" : "Patient",
         "desc" : [
            "A photo to confirm the identity of a patient.",
            "Only a single Item is permitted in this Sequence.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: labelnumber",
                     "linkend" : "sect_C.2.2.1.1"
                  }
               },
               "."
            ]
         ],
         "entity" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a161)" : {
         "req" : "1C",
         "usage" : "M",
         "name" : "Floating Point Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ]
      },
      "(0040,0275)[<0>](0040,100a)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M",
         "name" : "Reason for Requested Procedure Code Sequence",
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "Coded Reason for requesting this procedure.",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)" : {
         "entity" : "Series",
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
         ],
         "module" : "General Series",
         "name" : "Content Item Modifier Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "req" : "3"
      },
      "(0040,0520)[<0>](0050,0012)" : {
         "name" : "Container Component Type Code Sequence",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "req" : "1",
         "entity" : "Image",
         "desc" : [
            "Type of container component.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "Specimen"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Referenced SOP Sequence",
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ]
      },
      "(0018,0036)[<0>](0054,0302)" : {
         "req" : "3",
         "name" : "Administration Route Code Sequence",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-19"
         ],
         "module" : "Intervention",
         "entity" : "Image",
         "desc" : [
            "Sequence that identifies the Administration Route.",
            "Only a single Item is permitted in this Sequence."
         ]
      },
      "(0012,0020)" : {
         "usage" : "U",
         "name" : "Clinical Trial Protocol ID",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "req" : "1",
         "entity" : "Patient",
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
         "module" : "Clinical Trial Subject"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0008,1199)[<2>](0008,1160)" : {
         "module" : "General Image",
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
         "req" : "1C",
         "usage" : "M",
         "name" : "Referenced Frame Number",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1101)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "name" : "Person Identification Code Sequence",
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Image"
      },
      "(0028,0300)" : {
         "req" : "3",
         "name" : "Quality Control Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image",
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
               "If this Attribute is absent, then the image may or may not be a quality control or phantom image. The phantom device in the image can be described using the ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.12",
                     "xrefstyle" : "select: title"
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
         "entity" : "Image"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0032)" : {
         "req" : "3",
         "name" : "Universal Entity ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "entity" : "Patient",
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
                     ],
                     "attrs" : {
                        "xml:id" : "para_8933ed06-5a13-4f47-a4fd-9e2d7cc913a6"
                     }
                  },
                  "\n              "
               ]
            }
         ]
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1155)" : {
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0060,3000)[<0>](0060,3008)" : {
         "module" : "Image Histogram",
         "entity" : "Image",
         "desc" : "The number of consecutive stored pixel values included in a bin. All bins shall be of equal width.",
         "req" : "1",
         "usage" : "U",
         "name" : "Histogram Bin Width",
         "mod_tables" : [
            "table_C.11.5-1"
         ]
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1150)" : {
         "req" : "1",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-11"
         ],
         "module" : "General Series",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Series"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0039)" : {
         "module" : "Patient",
         "entity" : "Patient",
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
                     "content" : [
                        "Equivalent to HL7 v2 CX component 9 (Assigning Jurisdiction)."
                     ],
                     "el" : "para"
                  },
                  "\n              "
               ]
            }
         ],
         "req" : "3",
         "name" : "Assigning Jurisdiction Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0010,0216)" : {
         "usage" : "M",
         "name" : "Strain Stock Sequence",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3",
         "desc" : [
            "Information identifying an animal within a strain stock.",
            "Only a single Item is permitted in this sequence."
         ],
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0008,0051)" : {
         "module" : "General Study",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "Study",
         "req" : "3",
         "name" : "Issuer of Accession Number Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0018,a001)[<0>](0008,1072)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "desc" : [
            "Identification of the operator(s) of the contributing equipment.",
            "One or more Items are permitted in this Sequence.",
            "The number and order of Items shall correspond to the number and order of values of Operators' Name (0008,1070), if present."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Operator Identification Sequence"
      },
      "(0008,0122)" : {
         "req" : "3",
         "name" : "Mapping Resource Name",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
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
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a161)" : {
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "name" : "Floating Point Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C"
      },
      "(0040,0280)" : {
         "desc" : "User-defined comments on the Performed Procedure Step.",
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "name" : "Comments on the Performed Procedure Step",
         "usage" : "M",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a124)" : {
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "UID",
         "req" : "1C"
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
         "entity" : "Image",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M",
         "name" : "Blue Palette Color Lookup Table Data",
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,1001)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M",
         "name" : "Requested Procedure ID",
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "Identifier that identifies the Requested Procedure in the Imaging Service Request.",
            "Required if procedure was scheduled. May be present otherwise.",
            {
               "el" : "note",
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
               ]
            }
         ]
      },
      "(0040,0310)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.8-33"
         ],
         "name" : "Comments on Radiation Dose",
         "usage" : "U",
         "module" : "X-Ray Acquisition Dose",
         "desc" : "User-defined comments on any special conditions related to radiation dose encountered during the acquisition of this image.",
         "entity" : "Image"
      },
      "(4ffe,0001)" : {
         "entity" : "Image",
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
         "req" : "3"
      },
      "(0018,1190)" : {
         "name" : "Focal Spot(s)",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-34"
         ],
         "req" : "3",
         "desc" : "Nominal focal spot size in mm used to acquire this image.",
         "entity" : "Image",
         "module" : "X-Ray Generation"
      },
      "(0008,1111)[<0>](0008,1150)" : [
         {
            "req" : "1",
            "usage" : "M",
            "name" : "Referenced SOP Class UID",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-11"
            ],
            "module" : "General Series",
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "entity" : "Series"
         },
         {
            "module" : "DX Series",
            "entity" : "Series",
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "req" : "1",
            "usage" : "M",
            "name" : "Referenced SOP Class UID",
            "mod_tables" : [
               "table_C.8-68",
               "table_10-11"
            ]
         }
      ],
      "(0008,1049)[<0>](0008,0081)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Address",
         "usage" : "M",
         "module" : "General Study",
         "entity" : "Study",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable."
      },
      "(0010,1100)[<0>](0040,e024)[<1>](0040,e030)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "name" : "Repository Unique ID",
         "req" : "1",
         "entity" : "Patient",
         "desc" : "Uniquely identifies a Repository from which the referenced instances can be retrieved.",
         "module" : "Patient"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0032)" : {
         "module" : "Patient",
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
         "req" : "3",
         "usage" : "M",
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ]
      },
      "(0088,0200)[<0>](0028,1103)" : {
         "req" : "1C",
         "name" : "Blue Palette Color Lookup Table Descriptor",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image",
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
         "entity" : "Image"
      },
      "(0018,1413)" : [
         {
            "usage" : "M",
            "name" : "Deviation Index",
            "mod_tables" : [
               "table_C.8-71b",
               "table_10-23"
            ],
            "req" : "3",
            "desc" : "A scaled representation of the difference of the Exposure Index compared to the Target Exposure Index as defined in IEC 62494-1 and the report of AAPM TG 116.",
            "entity" : "Image",
            "module" : "DX Detector"
         },
         {
            "req" : "3",
            "name" : "Deviation Index",
            "usage" : "U",
            "mod_tables" : [
               "table_C.8-33",
               "table_10-23"
            ],
            "module" : "X-Ray Acquisition Dose",
            "entity" : "Image",
            "desc" : "A scaled representation of the difference of the Exposure Index compared to the Target Exposure Index as defined in IEC 62494-1 and the report of AAPM TG 116."
         }
      ],
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a120)" : {
         "entity" : "Image",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "module" : "Specimen",
         "usage" : "U",
         "name" : "DateTime",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1C"
      },
      "(0040,9096)[<0>](0028,3003)" : {
         "module" : "General Image",
         "entity" : "Image",
         "desc" : "Free form text explanation of the meaning of the transformation in this Item.",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "name" : "LUT Explanation",
         "usage" : "M"
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "entity" : "Image",
         "module" : "Overlay Plane",
         "usage" : "C - Required if graphic annotation is present - See ",
         "name" : "Overlay Type",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "req" : "1"
      },
      "(0018,1411)" : [
         {
            "req" : "3",
            "mod_tables" : [
               "table_C.8-71b",
               "table_10-23"
            ],
            "usage" : "M",
            "name" : "Exposure Index",
            "module" : "DX Detector",
            "entity" : "Image",
            "desc" : [
               "Measure of the detector response to radiation in the relevant image region of an image acquired with a digital x-ray imaging system as defined in IEC 62494-1.",
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
                                       "A string rather than binary Value Representation is used for this Attribute, in order to allow the sender to control the precision of the value as suggested in the report of AAPM Task Group 116."
                                    ],
                                    "el" : "para",
                                    "attrs" : {
                                       "xml:id" : "para_fed62ca5-6e4b-41de-8d9c-09631af0e579"
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
                                    "content" : [
                                       "This index value is scaled as defined by IEC 62494-1."
                                    ],
                                    "attrs" : {
                                       "xml:id" : "para_43f525df-4811-46e0-9074-796cd064a8ea"
                                    }
                                 },
                                 "\n                  "
                              ],
                              "el" : "listitem"
                           },
                           "\n                "
                        ],
                        "attrs" : {
                           "numeration" : "arabic"
                        }
                     },
                     "\n              "
                  ],
                  "el" : "note"
               }
            ]
         },
         {
            "module" : "X-Ray Acquisition Dose",
            "entity" : "Image",
            "desc" : [
               "Measure of the detector response to radiation in the relevant image region of an image acquired with a digital x-ray imaging system as defined in IEC 62494-1.",
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
                                       "A string rather than binary Value Representation is used for this Attribute, in order to allow the sender to control the precision of the value as suggested in the report of AAPM Task Group 116."
                                    ],
                                    "el" : "para",
                                    "attrs" : {
                                       "xml:id" : "para_fed62ca5-6e4b-41de-8d9c-09631af0e579"
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
                                    "content" : [
                                       "This index value is scaled as defined by IEC 62494-1."
                                    ],
                                    "attrs" : {
                                       "xml:id" : "para_43f525df-4811-46e0-9074-796cd064a8ea"
                                    }
                                 },
                                 "\n                  "
                              ],
                              "el" : "listitem"
                           },
                           "\n                "
                        ],
                        "attrs" : {
                           "numeration" : "arabic"
                        }
                     },
                     "\n              "
                  ]
               }
            ],
            "req" : "3",
            "mod_tables" : [
               "table_C.8-33",
               "table_10-23"
            ],
            "usage" : "U",
            "name" : "Exposure Index"
         }
      ],
      "(0018,a001)[<0>](0018,1050)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Spatial Resolution",
         "req" : "3",
         "entity" : "Image",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "module" : "SOP Common"
      },
      "(0018,1049)" : {
         "req" : "3",
         "name" : "Contrast/Bolus Ingredient Concentration",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "module" : "Contrast/Bolus",
         "desc" : "Milligrams of active ingredient per milliliter of (diluted) agent",
         "entity" : "Image"
      },
      "(0018,0060)" : [
         {
            "req" : "3",
            "mod_tables" : [
               "table_C.8-33"
            ],
            "name" : "KVP",
            "usage" : "U",
            "module" : "X-Ray Acquisition Dose",
            "desc" : "Peak kilo voltage output of the X-Ray generator used.",
            "entity" : "Image"
         },
         {
            "desc" : "Peak kilo voltage output of the X-Ray generator used.",
            "entity" : "Image",
            "module" : "X-Ray Generation",
            "name" : "KVP",
            "usage" : "U",
            "mod_tables" : [
               "table_C.8-34"
            ],
            "req" : "3"
         }
      ],
      "(0010,1002)[<0>](0010,0021)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Issuer of Patient ID",
         "usage" : "M",
         "req" : "3",
         "entity" : "Patient",
         "desc" : [
            "Identifier of the Assigning Authority (system, organization, agency, or department) that issued the Patient ID.",
            {
               "content" : [
                  "\n                ",
                  {
                     "attrs" : {
                        "xml:id" : "para_fde39d36-34f5-4459-8bca-12b577233532"
                     },
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
         "module" : "Patient"
      },
      "(0040,0513)" : {
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U",
         "name" : "Issuer of the Container Identifier Sequence",
         "req" : "2",
         "desc" : [
            "Organization that assigned the Container Identifier.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "entity" : "Image",
         "module" : "Specimen"
      },
      "(0018,5104)" : {
         "desc" : [
            "A Sequence that describes the radiographic method of patient, tube and detector positioning to achieve a well described projection or view.",
            "Only a single Item is permitted in this Sequence.",
            "Shall be consistent with the other Attributes in this Module, if present, but may more specifically describe the image acquisition."
         ],
         "entity" : "Image",
         "module" : "DX Positioning",
         "name" : "Projection Eponymous Name Code Sequence",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-72"
         ],
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a160)" : {
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "name" : "Text Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C"
      },
      "(0020,0020)" : [
         {
            "name" : "Patient Orientation",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-9"
            ],
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
                        "attrs" : {
                           "xml:id" : "para_09636c87-54b7-4fd6-ae07-683cdb9bf8a4"
                        },
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
            "module" : "General Image"
         },
         {
            "req" : "1C",
            "usage" : "M",
            "name" : "Patient Orientation",
            "mod_tables" : [
               "table_C.8-70"
            ],
            "module" : "DX Image",
            "desc" : [
               "Patient direction of the rows and columns of the image.",
               [
                  "See ",
                  {
                     "attrs" : {
                        "linkend" : "sect_C.7.6.1.1.1",
                        "xrefstyle" : "select: label"
                     },
                     "el" : "xref"
                  },
                  " for further explanation."
               ],
               "Required if View Code Sequence (0054,0220) is not present or is present with an Item value other than (G-8300, SRT, \"tissue specimen\") or (G-8310, SRT, \"tissue specimen from breast\"). May be present otherwise."
            ],
            "entity" : "Image"
         }
      ],
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0062,000b)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Referenced Segment Number",
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1160)" : {
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
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "name" : "Referenced Frame Number",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C"
      },
      "(0008,0030)" : {
         "module" : "General Study",
         "entity" : "Study",
         "desc" : "Time the Study started.",
         "req" : "2",
         "name" : "Study Time",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a122)" : {
         "module" : "Specimen",
         "entity" : "Image",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Time",
         "usage" : "U"
      },
      "(0018,a001)[<0>](0018,1020)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Software Versions",
         "req" : "3",
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
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a040)" : {
         "name" : "Value Type",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
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
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0028,1050)" : [
         {
            "req" : "1C",
            "usage" : "M",
            "name" : "Window Center",
            "mod_tables" : [
               "table_C.8-70"
            ],
            "module" : "DX Image",
            "entity" : "Image",
            "desc" : [
               "Defines a Window Center for display.",
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
               ],
               "Required if Presentation Intent Type (0008,0068) is FOR PRESENTATION and VOI LUT Sequence (0028,3010) is not present. May also be present if VOI LUT Sequence (0028,3010) is present."
            ]
         },
         {
            "mod_tables" : [
               "table_C.11-2b"
            ],
            "name" : "Window Center",
            "usage" : "C - Required if Presentation Intent Type (0008,0068) is FOR PRESENTATION. Shall not be present otherwise. See Note 8.",
            "req" : "1C",
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
            ],
            "entity" : "Image",
            "module" : "VOI LUT"
         }
      ],
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a040)" : {
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
         "module" : "General Series",
         "usage" : "M",
         "name" : "Value Type",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a163)" : {
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Rational Denominator Value",
         "usage" : "M",
         "req" : "1C"
      },
      "(0018,7050)" : [
         {
            "req" : "3",
            "usage" : "U",
            "name" : "Filter Material",
            "mod_tables" : [
               "table_C.8-33",
               "table_C.8-35a"
            ],
            "module" : "X-Ray Acquisition Dose",
            "entity" : "Image",
            "desc" : [
               "The X-Ray absorbing material used in the filter. May be multi-valued.",
               {
                  "title" : "Defined Terms:",
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
                  ]
               }
            ]
         },
         {
            "req" : "3",
            "mod_tables" : [
               "table_C.8-35a"
            ],
            "usage" : "U",
            "name" : "Filter Material",
            "module" : "X-Ray Filtration",
            "entity" : "Image",
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
            ]
         }
      ],
      "(0008,1049)[<0>](0040,1103)" : {
         "req" : "3",
         "name" : "Person's Telephone Numbers",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "entity" : "Study",
         "desc" : "Person's telephone number(s)"
      },
      "(0040,0250)" : {
         "module" : "General Series",
         "entity" : "Series",
         "desc" : "Date on which the Performed Procedure Step ended.",
         "req" : "3",
         "name" : "Performed Procedure Step End Date",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ]
      },
      "(0008,1110)[<0>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Study",
         "module" : "General Study",
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "req" : "1"
      },
      "(0018,1508)" : {
         "usage" : "U",
         "name" : "Positioner Type",
         "mod_tables" : [
            "table_C.8-72"
         ],
         "req" : "2",
         "entity" : "Image",
         "desc" : [
            {
               "title" : "Defined Terms:",
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
               "type" : "variablelist"
            },
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "orderedlist",
                     "content" : [
                        "\n                      ",
                        {
                           "content" : [
                              "\n                        ",
                              {
                                 "attrs" : {
                                    "xml:id" : "para_6b7478cf-e7fa-4485-ade3-d7ceaf6e587e"
                                 },
                                 "content" : [
                                    "The term CARM can apply to any positioner with 2 degrees of freedom of rotation of the X-Ray beam about the Imaging Subject."
                                 ],
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
                                    "xml:id" : "para_78309346-f766-40d1-8ac1-b07e3805c3cf"
                                 },
                                 "el" : "para",
                                 "content" : [
                                    "The term COLUMN can apply to any positioner with 1 degree of freedom of rotation of the X-Ray beam about the Imaging Subject."
                                 ]
                              },
                              "\n                      "
                           ]
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
         "module" : "DX Positioning"
      },
      "(0088,0200)[<0>](0028,0004)" : {
         "req" : "1",
         "name" : "Photometric Interpretation",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image",
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
         "entity" : "Image"
      },
      "(0008,0068)" : {
         "mod_tables" : [
            "table_C.8-68"
         ],
         "usage" : "M",
         "name" : "Presentation Intent Type",
         "req" : "1",
         "entity" : "Series",
         "desc" : [
            "Identifies the intent of the images that are contained within this Series.",
            {
               "title" : "Enumerated Values:",
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
               "type" : "variablelist"
            },
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.11.1.1.1"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "module" : "DX Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a162)" : {
         "module" : "General Series",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "name" : "Rational Numerator Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a122)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Time",
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ]
      },
      "(0018,a001)[<0>](0040,a170)" : {
         "desc" : [
            "Describes the purpose for which the related equipment is being referenced.",
            "Only a single Item shall be included in this Sequence.",
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
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Purpose of Reference Code Sequence",
         "req" : "1"
      },
      "(0010,0216)[<0>](0010,0215)" : {
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
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "name" : "Strain Source Registry Code Sequence",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "1"
      },
      "(60xx,0011)" : {
         "module" : "Overlay Plane",
         "entity" : "Image",
         "desc" : "Number of Columns in Overlay.",
         "req" : "1",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "usage" : "C - Required if graphic annotation is present - See ",
         "name" : "Overlay Columns"
      },
      " (0010,0027) [<0>](0018,5100)" : {
         "module" : "Patient",
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
         "entity" : "Patient",
         "req" : "3",
         "name" : "Patient Position",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ]
      },
      "(0008,1120)[<0>](0008,1155)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0018,1153)" : [
         {
            "req" : "3",
            "mod_tables" : [
               "table_C.8-33"
            ],
            "name" : "Exposure in \u00b5As",
            "usage" : "U",
            "module" : "X-Ray Acquisition Dose",
            "desc" : "The exposure expressed in \u00b5As, for example calculated from Exposure Time and X-Ray Tube Current.",
            "entity" : "Image"
         },
         {
            "name" : "Exposure in \u00b5As",
            "usage" : "U",
            "mod_tables" : [
               "table_C.8-34"
            ],
            "req" : "3",
            "desc" : "The exposure expressed in \u00b5As, for example calculated from Exposure Time and X-Ray Tube Current.",
            "entity" : "Image",
            "module" : "X-Ray Generation"
         }
      ],
      "(0008,0032)" : {
         "desc" : "The time the acquisition of data that resulted in this image started",
         "entity" : "Image",
         "module" : "General Image",
         "usage" : "M",
         "name" : "Acquisition Time",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "req" : "3"
      },
      "(0018,1200)" : {
         "usage" : "M",
         "name" : "Date of Last Calibration",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "req" : "3",
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
         "entity" : "Equipment",
         "module" : "General Equipment"
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0306)" : {
         "module" : "SOP Common",
         "desc" : [
            "List of Private Data Elements in block that may contain identifying\n                  information (are unsafe from identity leakage)..",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once."
         ],
         "entity" : "Image",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Identifying Private Elements",
         "usage" : "M"
      },
      "(0018,1710)" : {
         "module" : "X-Ray Collimator",
         "entity" : "Image",
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
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-28b"
         ],
         "name" : "Center of Circular Collimator",
         "usage" : "U"
      },
      "(0008,1120)[<0>](0008,1150)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "module" : "Patient",
         "entity" : "Patient",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)" : {
         "desc" : [
            "The place or location identifier where the identifier was first assigned to the patient. This component is not an inherent part of the identifier but rather part of the history of the identifier.",
            "Only a single Item is permitted in this Sequence.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "attrs" : {
                        "xml:id" : "para_6a16f809-6605-41ac-8d02-b6104b0bc0ad"
                     },
                     "content" : [
                        "Equivalent to HL7 v2 CX component 6 (Assigning Facility)."
                     ],
                     "el" : "para"
                  },
                  "\n              "
               ]
            }
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Assigning Facility Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "req" : "3"
      },
      "(0018,1600)" : {
         "module" : "Display Shutter",
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
                     "linkend" : "figure_C.7-4b",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "entity" : "Image",
         "req" : "1",
         "usage" : "U",
         "name" : "Shutter Shape",
         "mod_tables" : [
            "table_C.7-17a"
         ]
      },
      "(0008,1062)[<0>](0040,1101)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person Identification Code Sequence",
         "usage" : "M",
         "req" : "1",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Study",
         "module" : "General Study"
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
            "entity" : "Image",
            "module" : "Image Pixel",
            "usage" : "M",
            "name" : "High Bit",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "req" : "1"
         },
         {
            "mod_tables" : [
               "table_C.8-70"
            ],
            "usage" : "M",
            "name" : "High Bit",
            "req" : "1",
            "entity" : "Image",
            "desc" : [
               "Most significant bit for pixel sample data.",
               "Shall be one less than the value in Bit Stored (0028,0101)."
            ],
            "module" : "DX Image"
         }
      ],
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a163)" : {
         "module" : "General Series",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "entity" : "Series",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Rational Denominator Value"
      },
      "(0100,0426)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Authorization Equipment Certification Number",
         "module" : "SOP Common",
         "entity" : "Image",
         "desc" : "The certification number issued to the Application Entity that set the SOP Instance Status (0100,0410) to AO."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a121)" : {
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Date",
         "usage" : "M"
      },
      "(0008,2112)[<0>](0040,a170)" : {
         "module" : "General Image",
         "entity" : "Image",
         "desc" : [
            "Describes the purpose for which the reference is made, that is what role the source image or frame(s) played in the derivation of this image.",
            "Only a single Item is permitted in this Sequence."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "name" : "Purpose of Reference Code Sequence",
         "usage" : "M"
      },
      "(0008,001b)" : {
         "module" : "SOP Common",
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
         "entity" : "Image",
         "req" : "3",
         "name" : "Original Specialized SOP Class UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0018,1708)" : {
         "usage" : "U",
         "name" : "Collimator Lower Horizontal Edge",
         "mod_tables" : [
            "table_C.8-28b"
         ],
         "req" : "1C",
         "entity" : "Image",
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
         ],
         "module" : "X-Ray Collimator"
      },
      "(0008,0118)" : {
         "module" : "SOP Common",
         "desc" : "The unique identifier of the Mapping Resource",
         "entity" : "Image",
         "req" : "3",
         "name" : "Mapping Resource UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a168)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Concept Code Sequence",
         "usage" : "M",
         "module" : "General Series",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "entity" : "Series"
      },
      "(0010,0026)[<0>](0010,0024)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "usage" : "M",
         "module" : "Patient",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "Patient"
      },
      "(0008,1049)[<0>](0008,0080)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Institution Name",
         "req" : "1C",
         "entity" : "Study",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "module" : "General Study"
      },
      "(0018,1005)" : {
         "module" : "X-Ray Generation",
         "entity" : "Image",
         "desc" : "Identifier of the generator",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-34"
         ],
         "usage" : "U",
         "name" : "Generator ID"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)" : {
         "module" : "General Series",
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
         "usage" : "M",
         "name" : "Content Item Modifier Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a163)" : {
         "module" : "Specimen",
         "entity" : "Image",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "req" : "1C",
         "usage" : "U",
         "name" : "Rational Denominator Value",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0010,1100)[<0>](0040,e024)" : {
         "req" : "1C",
         "usage" : "M",
         "name" : "XDS Retrieval Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
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
         "entity" : "Patient"
      },
      "(0018,1531)" : {
         "req" : "3",
         "usage" : "U",
         "name" : "Detector Secondary Angle",
         "mod_tables" : [
            "table_C.8-72"
         ],
         "module" : "DX Positioning",
         "desc" : [
            "Angle of the X-Ray beam in the column direction in degrees relative to the normal to the detector plane. Positive values indicate that the X-Ray beam is tilted toward lower numbered rows. Negative values indicate that the X-Ray beam is tilted toward higher numbered rows.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.7.5",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ],
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.11.7",
                     "xrefstyle" : "select: label"
                  }
               },
               " for explanation if Positioner Type (0018,1508) is MAMMOGRAPHIC."
            ]
         ],
         "entity" : "Image"
      },
      "(0018,1412)" : [
         {
            "req" : "3",
            "mod_tables" : [
               "table_C.8-71b",
               "table_10-23"
            ],
            "usage" : "M",
            "name" : "Target Exposure Index",
            "module" : "DX Detector",
            "desc" : "The target value used to calculate Deviation Index (0018,1413) as defined in IEC 62494-1.",
            "entity" : "Image"
         },
         {
            "req" : "3",
            "mod_tables" : [
               "table_C.8-33",
               "table_10-23"
            ],
            "name" : "Target Exposure Index",
            "usage" : "U",
            "module" : "X-Ray Acquisition Dose",
            "desc" : "The target value used to calculate Deviation Index (0018,1413) as defined in IEC 62494-1.",
            "entity" : "Image"
         }
      ],
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1160)" : {
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
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Referenced Frame Number",
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
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.12.1.1.5"
                  }
               },
               " for further explanation."
            ]
         ],
         "entity" : "Image",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Contributing Equipment Sequence",
         "usage" : "M"
      },
      "(0010,1100)[<0>](0008,1199)" : {
         "name" : "Referenced SOP Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "req" : "1",
         "entity" : "Patient",
         "desc" : [
            "References to object instances.",
            "One or more Items shall be included in this Sequence"
         ],
         "module" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1160)" : {
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "Identifies the frame numbers within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1.",
            {
               "el" : "note",
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
               ]
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Referenced Frame Number"
      },
      "(0008,1200)[<0>](0020,000d)" : {
         "module" : "Common Instance Reference",
         "desc" : "Unique identifier of the Study containing the referenced Instances.",
         "entity" : "Image",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "name" : "Study Instance UID",
         "usage" : "U"
      },
      "(0008,1111)[<0>](0008,1155)" : [
         {
            "module" : "General Series",
            "entity" : "Series",
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "req" : "1",
            "usage" : "M",
            "name" : "Referenced SOP Instance UID",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-11"
            ]
         },
         {
            "module" : "DX Series",
            "entity" : "Series",
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "req" : "1",
            "mod_tables" : [
               "table_C.8-68",
               "table_10-11"
            ],
            "name" : "Referenced SOP Instance UID",
            "usage" : "M"
         }
      ],
      "(0008,1052)[<0>](0040,1102)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Person's Address",
         "req" : "3",
         "desc" : "Person's mailing address",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0010,0024)[<0>](0040,003a)" : {
         "module" : "Patient",
         "entity" : "Patient",
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
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Assigning Agency or Department Code Sequence",
         "usage" : "M"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a120)" : {
         "usage" : "M",
         "name" : "DateTime",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "entity" : "Image",
         "module" : "General Image"
      },
      "(0038,0014)[<0>](0040,0033)" : {
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
         "entity" : "Study",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "name" : "Universal Entity ID Type",
         "usage" : "U",
         "req" : "1C"
      },
      "(0028,0010)" : {
         "module" : "Image Pixel",
         "desc" : "Number of rows in the image.",
         "entity" : "Image",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "name" : "Rows",
         "usage" : "M"
      },
      "(0040,9096)[<0>](0040,9216)" : {
         "req" : "1C",
         "usage" : "M",
         "name" : "Real World Value First Value Mapped",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "module" : "General Image",
         "entity" : "Image",
         "desc" : [
            "Specifies the first stored value mapped for the Real Word Value Intercept (0040,9224) and Real World Value Slope (0040,9225) or Real World Value LUT (0040,9212) of this Item.",
            "Required if Pixel Data (7FE0,0010) or Real World Value LUT Data (0040,9212) is present or Double Float Real World Value First Value Mapped (0040,9214) is absent.",
            {
               "el" : "note",
               "content" : [
                  "\n                        ",
                  {
                     "attrs" : {
                        "xml:id" : "para_3508a2ea-51f7-4d12-952b-1fec9e9b31a0"
                     },
                     "el" : "para",
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
      "(0010,1100)[<0>](0040,e025)" : {
         "desc" : [
            "Details for retrieving instances via WADO-RS.",
            {
               "content" : [
                  "\n                ",
                  {
                     "attrs" : {
                        "xml:id" : "para_6afb22cc-92e8-4ec8-9a23-820f4c4a769b"
                     },
                     "content" : [
                        "Retrieval via WADO-URI is addressed in the WADO Retrieval Sequence (0040,E023). Retrieval via  WADO-WS is addressed in the XDS Retrieval Sequence (0040,E024)."
                     ],
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            },
            "Required if DICOM Retrieval Sequence (0040,E021), DICOM Media Retrieval Sequence (0040,E022), WADO Retrieval Sequence (0040,E023) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "WADO-RS Retrieval Sequence",
         "usage" : "M",
         "req" : "1C"
      },
      "(0010,1100)[<0>](0040,e023)[<1>](0040,e010)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "name" : "Retrieve URI",
         "req" : "1",
         "entity" : "Patient",
         "desc" : [
            [
               "URI/URL specifying the location of the referenced instance(s). Includes fully specified scheme, authority, path, and query in accordance with ",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_579dc3f3-c3f6-407b-b4bc-d6197e7cc820"
                     }
                  },
                  "\n"
               ],
               "el" : "note"
            }
         ],
         "module" : "Patient"
      },
      "(0040,0555)[<0>](0040,a136)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "name" : "Referenced Frame Numbers",
         "usage" : "M - See ",
         "module" : "Acquisition Context",
         "entity" : "Image",
         "desc" : [
            "References one or more frames in a Multi-frame SOP Instance. The first frame shall be denoted as frame number one.",
            "Required if this SOP Instance is a Multi-frame SOP Instance and the values in this Sequence item do not apply to all frames."
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a160)" : {
         "req" : "1C",
         "name" : "Text Value",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "entity" : "Series"
      },
      "(fffa,fffa)[<0>](0400,0401)" : {
         "desc" : [
            "The purpose of this Digital Signature.",
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "Image",
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Digital Signature Purpose Code Sequence",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "3"
      },
      "(0018,0036)" : {
         "module" : "Intervention",
         "desc" : [
            "Sequence describing interventional therapies or procedures.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Image",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-19"
         ],
         "usage" : "U",
         "name" : "Intervention Sequence"
      },
      "(0088,0200)[<0>](0028,1102)" : {
         "name" : "Green Palette Color Lookup Table Descriptor",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
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
         "entity" : "Image",
         "module" : "General Image"
      },
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1155)" : {
         "module" : "Common Instance Reference",
         "entity" : "Image",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ],
         "usage" : "U",
         "name" : "Referenced SOP Instance UID"
      },
      "(4ffe,0001)[<0>](0400,0015)" : {
         "desc" : [
            "The algorithm used in generating the MAC to be encrypted to form the Digital Signature.",
            {
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
               ],
               "type" : "variablelist"
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
                           "el" : "olink",
                           "attrs" : {
                              "xrefstyle" : "select: labelnumber",
                              "targetptr" : "PS3.15",
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
         "entity" : "Image",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "MAC Algorithm",
         "usage" : "M",
         "req" : "1"
      },
      "(0018,1712)" : {
         "req" : "1C",
         "name" : "Radius of Circular Collimator",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-28b"
         ],
         "module" : "X-Ray Collimator",
         "entity" : "Image",
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
         ]
      },
      "(0012,0082)" : {
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
         "desc" : "Approval number issued by committee described in Clinical Trial Protocol Ethics Committee Name (0012,0081).",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U",
         "name" : "Clinical Trial Protocol Ethics Committee Approval Number"
      },
      "(0018,1046)" : {
         "req" : "3",
         "usage" : "U",
         "name" : "Contrast Flow Rate",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "module" : "Contrast/Bolus",
         "entity" : "Image",
         "desc" : "Rate(s) of injection(s) in milliliters/sec"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0035)" : {
         "req" : "3",
         "usage" : "M",
         "name" : "Identifier Type Code",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "entity" : "Patient",
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
         ]
      },
      "(0040,0275)[<0>](0008,1110)" : {
         "name" : "Referenced Study Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "req" : "3",
         "entity" : "Series",
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
         "module" : "General Series"
      },
      "(0008,1062)[<0>](0040,1104)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Person's Telecom Information",
         "module" : "General Study",
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
               ]
            }
         ],
         "entity" : "Study"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)" : {
         "usage" : "U",
         "name" : "Specimen Preparation Step Content Item Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "req" : "1",
         "entity" : "Image",
         "desc" : [
            "Sequence of Content Items identifying the processes used in one preparation step to prepare the specimen for image acquisition.",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "Specimen"
      },
      "(0018,1160)" : [
         {
            "usage" : "U",
            "name" : "Filter Type",
            "mod_tables" : [
               "table_C.8-33",
               "table_C.8-35a"
            ],
            "req" : "3",
            "entity" : "Image",
            "desc" : [
               "Type of filter(s) inserted into the X-Ray beam (e.g., wedges).",
               {
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
                  ],
                  "title" : "Defined Terms:"
               },
               {
                  "content" : [
                     "\n                    ",
                     {
                        "attrs" : {
                           "xml:id" : "para_8dcc74da-d51d-4f3f-8d1a-3396a2a80792"
                        },
                        "content" : [
                           "Multiple type of filters can be expressed by a combination, e.g., BUTTERFLY+WEDGE."
                        ],
                        "el" : "para"
                     },
                     "\n                  "
                  ],
                  "el" : "note"
               }
            ],
            "module" : "X-Ray Acquisition Dose"
         },
         {
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
            "entity" : "Image",
            "module" : "X-Ray Filtration",
            "mod_tables" : [
               "table_C.8-35a"
            ],
            "usage" : "U",
            "name" : "Filter Type",
            "req" : "3"
         }
      ],
      "(0008,1072)[<0>](0008,0082)" : {
         "module" : "General Series",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Series",
         "req" : "1C",
         "name" : "Institution Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ]
      },
      "(0018,1491)" : {
         "entity" : "Image",
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
         "name" : "Tomo Class",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-32"
         ],
         "req" : "3"
      },
      "(0008,1090)" : {
         "name" : "Manufacturer's Model Name",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "req" : "3",
         "desc" : "Manufacturer's model name of the equipment that produced the composite instances.",
         "entity" : "Equipment",
         "module" : "General Equipment"
      },
      "(0088,0200)[<0>](0028,2002)" : {
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
         "entity" : "Image",
         "module" : "General Image",
         "name" : "Color Space",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "req" : "3"
      },
      "(0018,0036)[<0>](0018,0027)" : {
         "desc" : "Time of completion of administration of the intervention drug.",
         "entity" : "Image",
         "module" : "Intervention",
         "mod_tables" : [
            "table_C.7-19"
         ],
         "usage" : "U",
         "name" : "Intervention Drug Stop Time",
         "req" : "3"
      },
      "(0010,0020)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "desc" : [
            "Primary identifier for the patient.",
            {
               "el" : "note",
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
                              "linkend" : "sect_C.7.1.4.1.1",
                              "xrefstyle" : "select: label"
                           },
                           "el" : "xref"
                        },
                        "."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "req" : "2",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "Patient ID"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1155)" : {
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "General Series",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Series"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a161)" : {
         "name" : "Floating Point Value",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "entity" : "Image",
         "module" : "Specimen"
      },
      "(0018,1530)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.8-72"
         ],
         "usage" : "U",
         "name" : "Detector Primary Angle",
         "module" : "DX Positioning",
         "desc" : [
            "Angle of the X-Ray beam in the row direction in degrees relative to the normal to the detector plane. Positive values indicate that the X-Ray beam is tilted toward higher numbered columns. Negative values indicate that the X-Ray beam is tilted toward lower numbered columns.",
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
         "entity" : "Image"
      },
      "(0010,1000)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Other Patient IDs",
         "usage" : "M",
         "module" : "Patient",
         "desc" : "Other identification numbers or codes used to identify the patient.",
         "entity" : "Patient"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a161)" : {
         "name" : "Floating Point Value",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "entity" : "Image",
         "module" : "General Image"
      },
      "(0028,1201)" : {
         "req" : "1C",
         "usage" : "M",
         "name" : "Red Palette Color Lookup Table Data",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "module" : "Image Pixel",
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
         "entity" : "Image"
      },
      "(0040,0251)" : {
         "desc" : "Time at which the Performed Procedure Step ended.",
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "name" : "Performed Procedure Step End Time",
         "usage" : "M",
         "req" : "3"
      },
      "(0008,0300)" : {
         "entity" : "Image",
         "desc" : "Characteristics of Private Data Elements within the current SOP Instance",
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Private Data Element Characteristics Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3"
      },
      "(60xx,0050)" : {
         "req" : "1",
         "usage" : "C - Required if graphic annotation is present - See ",
         "name" : "Overlay Origin",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "module" : "Overlay Plane",
         "entity" : "Image",
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
                     "content" : [
                        "Values of 0\\0 indicate that the overlay pixels start 1 row above and one column to the left of the image pixels."
                     ],
                     "attrs" : {
                        "xml:id" : "para_698fb6e3-4667-46b4-9886-07e33aabd8b4"
                     }
                  },
                  "\n                "
               ]
            }
         ]
      },
      "(0008,0050)" : {
         "desc" : "A RIS generated number that identifies the order for the Study.",
         "entity" : "Study",
         "module" : "General Study",
         "name" : "Accession Number",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "2"
      },
      "(0008,1140)[<0>](0008,1155)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "module" : "General Image",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Image"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1103)" : {
         "entity" : "Image",
         "desc" : "Person's telephone number(s)",
         "module" : "SOP Common",
         "name" : "Person's Telephone Numbers",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "req" : "3"
      },
      "(0018,a001)[<0>](0018,1000)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Device Serial Number",
         "req" : "3",
         "entity" : "Image",
         "desc" : "Manufacturer's serial number of the equipment that contributed to the composite instance.",
         "module" : "SOP Common"
      },
      "(0040,0254)" : {
         "desc" : "Institution-generated description or classification of the Procedure Step that was performed.",
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "name" : "Performed Procedure Step Description",
         "usage" : "M",
         "req" : "3"
      },
      "(0038,0064)[<0>](0040,0033)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "name" : "Universal Entity ID Type",
         "usage" : "U",
         "module" : "Patient Study",
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
      "(0050,0004)" : {
         "module" : "DX Image",
         "entity" : "Image",
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
                  "attrs" : {
                     "xrefstyle" : "select: title",
                     "linkend" : "sect_C.7.6.12"
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
               },
               " for further explanation."
            ]
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Calibration Image",
         "mod_tables" : [
            "table_C.8-70"
         ]
      },
      "(0088,0200)" : {
         "name" : "Icon Image Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "req" : "3",
         "entity" : "Image",
         "desc" : [
            "This icon image is representative of the Image.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "General Image"
      },
      "(0028,0006)" : {
         "usage" : "M",
         "name" : "Planar Configuration",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "req" : "1C",
         "entity" : "Image",
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
         "module" : "Image Pixel"
      },
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1150)" : {
         "module" : "Common Instance Reference",
         "entity" : "Image",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ]
      },
      "(60xx,0102)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "usage" : "C - Required if graphic annotation is present - See ",
         "name" : "Overlay Bit Position",
         "module" : "Overlay Plane",
         "desc" : [
            "The value of this Attribute shall be 0.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
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
                     }
                  },
                  "\n                "
               ]
            }
         ],
         "entity" : "Image"
      },
      "(60xx,3000)" : {
         "module" : "Overlay Plane",
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
         "entity" : "Image",
         "req" : "1",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "name" : "Overlay Data",
         "usage" : "C - Required if graphic annotation is present - See "
      },
      "(0020,9172)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Conversion Source Attributes Sequence",
         "module" : "SOP Common",
         "entity" : "Image",
         "desc" : [
            "The set of images or other composite SOP Instances that were converted to this instance.",
            "If this instance was converted from a specific frame in the source instance, the reference shall include the Frame Number.",
            "One or more Items shall be included in this Sequence.",
            "Required if this instance was created by conversion, and Conversion Source Attributes Sequence (0020,9172) is not present in an Item of Shared Functional Groups Sequence (5200,9229) or Per-Frame Functional Groups Sequence (5200,9230)."
         ]
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0035)" : {
         "req" : "3",
         "usage" : "M",
         "name" : "Identifier Type Code",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "entity" : "Patient",
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
      "(0018,7005)" : {
         "module" : "DX Detector",
         "entity" : "Image",
         "desc" : [
            "The physical configuration of the detector.",
            {
               "title" : "Defined Terms:",
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
               ]
            }
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "name" : "Detector Configuration",
         "usage" : "M"
      },
      "(0008,1140)[<0>](0008,1160)" : {
         "entity" : "Image",
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
         "usage" : "M",
         "name" : "Referenced Frame Number",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3"
         ],
         "req" : "1C"
      },
      "(0028,1052)" : {
         "desc" : [
            "The value b in the relationship between stored values (SV) in Pixel Data (7FE0,0010) and the output units specified in Rescale Type (0028,1054).",
            "Output units = m*SV + b.",
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "0",
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
         ],
         "entity" : "Image",
         "module" : "DX Image",
         "mod_tables" : [
            "table_C.8-70"
         ],
         "name" : "Rescale Intercept",
         "usage" : "M",
         "req" : "1"
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
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "module" : "Patient Study"
      },
      "(0040,0515)[<0>](0040,0513)[<1>](0040,0031)" : {
         "module" : "Specimen",
         "entity" : "Image",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "usage" : "U",
         "name" : "Local Namespace Entity ID"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,003a)" : {
         "entity" : "Patient",
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
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "name" : "Assigning Agency or Department Code Sequence",
         "usage" : "M",
         "req" : "3"
      },
      "(0018,0015)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "name" : "Body Part Examined",
         "module" : "General Series",
         "desc" : [
            [
               "Text description of the part of the body examined. See ",
               {
                  "attrs" : {
                     "targetdoc" : "PS3.16",
                     "targetptr" : "chapter_L",
                     "xrefstyle" : "template:Annex %n \u201c%t\u201d in PS3.16"
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
                     "content" : [
                        "Some IODs support the Anatomic Region Sequence (0008,2218), which can provide a more comprehensive mechanism for specifying the body part being examined."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_c8ff54a1-69e9-4623-abb8-672af78baddf"
                     }
                  },
                  "\n                  "
               ]
            }
         ],
         "entity" : "Series"
      },
      "(0038,0014)[<0>](0040,0032)" : {
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "usage" : "U",
         "name" : "Universal Entity ID",
         "req" : "1C",
         "entity" : "Study",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "module" : "Patient Study"
      },
      "(0040,0560)[<0>](0040,0562)[<1>](0040,0032)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "name" : "Universal Entity ID",
         "usage" : "U",
         "req" : "1C",
         "entity" : "Image",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "module" : "Specimen"
      },
      "(0040,0515)[<0>](0040,0513)[<1>](0040,0032)" : {
         "req" : "1C",
         "usage" : "U",
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "module" : "Specimen",
         "entity" : "Image",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise."
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a120)" : {
         "req" : "1C",
         "name" : "DateTime",
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
         "entity" : "Image"
      },
      "(0008,0096)[<0>](0008,0082)" : {
         "usage" : "M",
         "name" : "Institution Code Sequence",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "1C",
         "entity" : "Study",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "General Study"
      },
      "(fffa,fffa)[<0>](0400,0100)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "desc" : "A UID that can be used to uniquely reference this signature.",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Digital Signature UID",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a160)" : {
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "req" : "1C",
         "usage" : "M",
         "name" : "Text Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0012,0064)" : {
         "entity" : "Patient",
         "desc" : [
            "A code describing the mechanism or method use to remove the patient's identity.",
            "One or more Items shall be included in this Sequence. Multiple items are used if successive de-identification steps have been performed or to describe options of a defined profile.",
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method (0012,0063) is not present. May be present otherwise."
         ],
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "De-identification Method Code Sequence",
         "req" : "1C"
      },
      "(0050,0010)[<0>](0008,0070)" : {
         "module" : "Device",
         "entity" : "Image",
         "desc" : "Manufacturer of the device",
         "req" : "3",
         "usage" : "U",
         "name" : "Manufacturer",
         "mod_tables" : [
            "table_C.7-18"
         ]
      },
      "(0008,0023)" : {
         "module" : "General Image",
         "entity" : "Image",
         "desc" : [
            "The date the image pixel data creation started.",
            "Required if image is part of a series in which the images are temporally related. May be present otherwise.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_2b4fa91b-7c4d-401b-9468-fa7b06ccb55a"
                     },
                     "el" : "para",
                     "content" : [
                        "This Attribute was formerly known as Image Date."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "req" : "2C",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "name" : "Content Date",
         "usage" : "M"
      },
      "(0018,0036)[<0>](0018,0029)" : {
         "req" : "3",
         "usage" : "U",
         "name" : "Intervention Drug Code Sequence",
         "mod_tables" : [
            "table_C.7-19"
         ],
         "module" : "Intervention",
         "desc" : [
            "Sequence that identifies the interventional drug.",
            "Only a single item is permitted in this Sequence."
         ],
         "entity" : "Image"
      },
      "(0050,0010)[<0>](0008,1090)" : {
         "desc" : "Manufacturer's model name of the device",
         "entity" : "Image",
         "module" : "Device",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "usage" : "U",
         "name" : "Manufacturer's Model Name",
         "req" : "3"
      },
      "(0010,1021)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "name" : "Patient's Size Code Sequence",
         "req" : "3",
         "entity" : "Study",
         "desc" : [
            "Patient's size category code",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "Patient Study"
      },
      "(0040,0555)[<0>](0040,a162)" : {
         "module" : "Acquisition Context",
         "entity" : "Image",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "usage" : "M - See ",
         "name" : "Rational Numerator Value",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ]
      },
      "(0018,1201)" : {
         "module" : "General Equipment",
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
         "entity" : "Equipment",
         "req" : "3",
         "name" : "Time of Last Calibration",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ]
      },
      "(0008,0016)" : {
         "req" : "1",
         "usage" : "M",
         "name" : "SOP Class UID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Image",
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
               "attrs" : {
                  "targetptr" : "PS3.4",
                  "xrefstyle" : "select: labelnumber",
                  "targetdoc" : "PS3.4"
               },
               "el" : "olink"
            },
            "."
         ]
      },
      "(0008,1200)[<0>](0008,1115)" : {
         "module" : "Common Instance Reference",
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Image",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "name" : "Referenced Series Sequence",
         "usage" : "U"
      },
      "(0018,7056)" : [
         {
            "module" : "X-Ray Acquisition Dose",
            "entity" : "Image",
            "desc" : "The minimum length (in mm) of the X-Ray beam path in the Filter Material that is not blocked by collimation. May be multi-valued, with values corresponding to the respective values in Filter Material (0018,7050).",
            "req" : "3",
            "usage" : "U",
            "name" : "Filter Beam Path Length Minimum",
            "mod_tables" : [
               "table_C.8-33",
               "table_C.8-35a"
            ]
         },
         {
            "module" : "X-Ray Filtration",
            "entity" : "Image",
            "desc" : "The minimum length (in mm) of the X-Ray beam path in the Filter Material that is not blocked by collimation. May be multi-valued, with values corresponding to the respective values in Filter Material (0018,7050).",
            "req" : "3",
            "mod_tables" : [
               "table_C.8-35a"
            ],
            "name" : "Filter Beam Path Length Minimum",
            "usage" : "U"
         }
      ],
      "(0010,1100)[<0>](0040,e023)" : {
         "name" : "WADO Retrieval Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "req" : "1C",
         "entity" : "Patient",
         "desc" : [
            "Details for retrieving instances available via WADO-URI.",
            {
               "el" : "note",
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
               ]
            },
            "Required if DICOM Retrieval Sequence (0040,E021), DICOM Media Retrieval Sequence (0040,E022), WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "Patient"
      },
      "(0040,0520)[<0>](0050,001c)" : {
         "entity" : "Image",
         "desc" : "Length in mm of container component.",
         "module" : "Specimen",
         "name" : "Container Component Length",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "req" : "3"
      },
      "(0028,1102)" : {
         "module" : "Image Pixel",
         "entity" : "Image",
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
         "req" : "1C",
         "usage" : "M",
         "name" : "Green Palette Color Lookup Table Descriptor",
         "mod_tables" : [
            "table_C.7-11b"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a123)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Person Name",
         "req" : "1C",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0008,2218)" : {
         "module" : "DX Anatomy Imaged",
         "entity" : "Image",
         "desc" : [
            "Sequence that identifies the anatomic region of interest in this Instance (i.e., external anatomy, surface anatomy, or general region of the body).",
            "Zero or one Item shall be included in this Sequence."
         ],
         "req" : "2",
         "usage" : "M",
         "name" : "Anatomic Region Sequence",
         "mod_tables" : [
            "table_C.8-69",
            "table_10-6"
         ]
      },
      "(0028,1054)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.8-70"
         ],
         "usage" : "M",
         "name" : "Rescale Type",
         "module" : "DX Image",
         "desc" : [
            "Specifies the output units of Rescale Slope (0028,1053) and Rescale Intercept (0028,1052).",
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "US",
                     "Unspecified"
                  ]
               ],
               "type" : "variablelist"
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
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0008,0050)" : {
         "entity" : "Series",
         "desc" : "An identifier of the Imaging Service Request for this Requested Procedure.",
         "module" : "General Series",
         "name" : "Accession Number",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "req" : "3"
      },
      "(0018,7028)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "name" : "Detector Active Origin",
         "usage" : "M",
         "module" : "DX Detector",
         "desc" : [
            "Offset of the TLHC of a rectangle circumscribing the active detector area from the TLHC of a rectangle circumscribing the physical detector area, measured in physical detector pixels as a row offset followed by a column offset.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.11.4.1.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "entity" : "Image"
      },
      "(0010,0024)[<0>](0040,0032)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Universal Entity ID",
         "usage" : "M",
         "req" : "3",
         "entity" : "Patient",
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
                     ],
                     "attrs" : {
                        "xml:id" : "para_8933ed06-5a13-4f47-a4fd-9e2d7cc913a6"
                     }
                  },
                  "\n              "
               ]
            }
         ],
         "module" : "Patient"
      },
      "(0018,700a)" : {
         "entity" : "Image",
         "desc" : "The ID or serial number of the detector used to acquire this image.",
         "module" : "DX Detector",
         "usage" : "M",
         "name" : "Detector ID",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "req" : "3"
      },
      "(0010,2294)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Breed Registration Sequence",
         "usage" : "M",
         "req" : "2C",
         "entity" : "Patient",
         "desc" : [
            "Information identifying an animal within a breed registry.",
            "Zero or more Items shall be included in this Sequence.",
            "Required if the patient is an animal."
         ],
         "module" : "Patient"
      },
      "(fffa,fffa)[<0>](0400,0105)" : {
         "req" : "1",
         "name" : "Digital Signature DateTime",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
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
         "entity" : "Image"
      },
      "(0050,0010)[<0>](0018,1000)" : {
         "entity" : "Image",
         "desc" : "Manufacturer's serial number of the device",
         "module" : "Device",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "usage" : "U",
         "name" : "Device Serial Number",
         "req" : "3"
      },
      "(0018,7054)" : [
         {
            "entity" : "Image",
            "desc" : "The maximum thickness in mm of the X-Ray absorbing material used in the filters. May be multi-valued, with values corresponding to the respective values in Filter Material (0018,7050).",
            "module" : "X-Ray Acquisition Dose",
            "mod_tables" : [
               "table_C.8-33",
               "table_C.8-35a"
            ],
            "usage" : "U",
            "name" : "Filter Thickness Maximum",
            "req" : "3"
         },
         {
            "req" : "3",
            "name" : "Filter Thickness Maximum",
            "usage" : "U",
            "mod_tables" : [
               "table_C.8-35a"
            ],
            "module" : "X-Ray Filtration",
            "desc" : "The maximum thickness in mm of the X-Ray absorbing material used in the filters. May be multi-valued, with values corresponding to the respective values in Filter Material (0018,7050).",
            "entity" : "Image"
         }
      ],
      "(0020,9172)[<0>](0062,000b)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "req" : "1C",
         "usage" : "M",
         "name" : "Referenced Segment Number",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ]
      },
      "(0008,0051)[<0>](0040,0031)" : {
         "module" : "General Study",
         "entity" : "Study",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "usage" : "M",
         "name" : "Local Namespace Entity ID"
      },
      "(0008,0201)" : {
         "module" : "SOP Common",
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
                                       "el" : "olink",
                                       "attrs" : {
                                          "xrefstyle" : "select: labelnumber",
                                          "targetptr" : "PS3.5",
                                          "targetdoc" : "PS3.5"
                                       }
                                    },
                                    " for the offset component of the DT Value Representation."
                                 ],
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
                                 "el" : "para",
                                 "content" : [
                                    "This Attribute does not apply to values with a DT Value Representation, that contains an explicitly encoded timezone offset."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_155b097e-395f-4748-981c-0255b00fe9a8"
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
                                 "attrs" : {
                                    "xml:id" : "para_1ab95f54-00ed-4128-a3f9-96f3f05669d0"
                                 },
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
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_6500ab52-60e5-4f8a-a3e5-fcedc8ddc8fc"
                                 }
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
                     "el" : "para",
                     "content" : [
                        "UTC = 5.00 a.m."
                     ],
                     "attrs" : {
                        "xml:id" : "para_a41cecaa-0d35-48a8-b71a-99ab42511778"
                     }
                  },
                  "\n                  ",
                  {
                     "el" : "para",
                     "content" : [
                        "Local Time = 3.00 a.m."
                     ],
                     "attrs" : {
                        "xml:id" : "para_50578448-3e31-49d4-87db-a9b392279794"
                     }
                  },
                  "\n                  ",
                  {
                     "attrs" : {
                        "xml:id" : "para_16002fc2-2776-41b6-b49f-74eb5e06324a"
                     },
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
         "entity" : "Image",
         "req" : "3",
         "usage" : "M",
         "name" : "Timezone Offset From UTC",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0062,000b)" : {
         "module" : "General Series",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "entity" : "Series",
         "req" : "1C",
         "name" : "Referenced Segment Number",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0010,1100)[<0>](0040,e021)[<1>](0008,0054)" : {
         "req" : "1",
         "usage" : "M",
         "name" : "Retrieve AE Title",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "module" : "Patient",
         "desc" : "Title of a DICOM Application Entity where the referenced instance(s) may be retrieved on the network.",
         "entity" : "Patient"
      },
      "(0028,0004)" : [
         {
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
            "module" : "Image Pixel",
            "name" : "Photometric Interpretation",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "req" : "1"
         },
         {
            "module" : "DX Image",
            "entity" : "Image",
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
            "req" : "1",
            "mod_tables" : [
               "table_C.8-70"
            ],
            "name" : "Photometric Interpretation",
            "usage" : "M"
         }
      ],
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0008,1155)" : {
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "Specimen",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Image"
      },
      "(0008,002a)" : {
         "mod_tables" : [
            "table_C.7-9"
         ],
         "name" : "Acquisition DateTime",
         "usage" : "M",
         "req" : "3",
         "desc" : [
            "The date and time that the acquisition of data that resulted in this image started.",
            {
               "el" : "note",
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
                           "attrs" : {
                              "linkend" : "sect_C.7.4.2",
                              "xrefstyle" : "select: title"
                           },
                           "el" : "xref"
                        },
                        " in Acquisition Time Synchronized (0018,1800)."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "entity" : "Image",
         "module" : "General Image"
      },
      "(0028,1056)" : {
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
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.11.2.1.2"
                  }
               },
               "."
            ]
         ],
         "entity" : "Image",
         "module" : "VOI LUT",
         "usage" : "C - Required if Presentation Intent Type (0008,0068) is FOR PRESENTATION. Shall not be present otherwise. See Note 8.",
         "name" : "VOI LUT Function",
         "mod_tables" : [
            "table_C.11-2b"
         ],
         "req" : "3"
      },
      "(0018,7044)" : {
         "desc" : "The pitch in mm of the X-Ray absorbing material used in the grid.",
         "entity" : "Image",
         "module" : "X-Ray Grid",
         "usage" : "U",
         "name" : "Grid Pitch",
         "mod_tables" : [
            "table_C.8-36b"
         ],
         "req" : "3"
      },
      "(0010,2210)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Anatomical Orientation Type",
         "usage" : "M",
         "module" : "General Series",
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
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.2.1.1"
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
         "entity" : "Series"
      },
      "(0018,a001)[<0>](0008,1070)" : {
         "module" : "SOP Common",
         "desc" : "Name(s) of the operator(s) of the contributing equipment.",
         "entity" : "Image",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Operators' Name"
      },
      "(0088,0200)[<0>](0028,0011)" : {
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M",
         "name" : "Columns",
         "req" : "1",
         "entity" : "Image",
         "desc" : "Number of columns in the image",
         "module" : "General Image"
      },
      "(0018,1610)" : {
         "req" : "1C",
         "usage" : "U",
         "name" : "Center of Circular Shutter",
         "mod_tables" : [
            "table_C.7-17a"
         ],
         "module" : "Display Shutter",
         "desc" : "Required if Shutter Shape (0018,1600) is CIRCULAR. Location of the center of the circular shutter with respect to pixels in the image given as row and column.",
         "entity" : "Image"
      },
      "(0400,0561)[<0>](0400,0562)" : {
         "req" : "1",
         "usage" : "M",
         "name" : "Attribute Modification DateTime",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : "Date and time the attributes were removed and/or replaced.",
         "entity" : "Image"
      },
      "(0012,0010)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U",
         "name" : "Clinical Trial Sponsor Name",
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
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
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a121)" : {
         "req" : "1C",
         "name" : "Date",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ]
      },
      "(0008,0033)" : {
         "module" : "General Image",
         "entity" : "Image",
         "desc" : [
            "The time the image pixel data creation started.",
            "Required if image is part of a series in which the images are temporally related. May be present otherwise."
         ],
         "req" : "2C",
         "usage" : "M",
         "name" : "Content Time",
         "mod_tables" : [
            "table_C.7-9"
         ]
      },
      "(fffa,fffa)[<0>](0400,0115)" : {
         "name" : "Certificate of Signer",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1",
         "entity" : "Image",
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
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_cbf16d70-7dfc-44e9-85f6-9cf9aea9f0eb"
                                 }
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
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_2d3ce9c9-555a-4be1-9e6d-e07eb84c4852"
                                 }
                              },
                              "\n                        "
                           ]
                        },
                        "\n                      "
                     ]
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ],
         "module" : "SOP Common"
      },
      "(0040,0560)[<0>](0008,2228)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-8"
         ],
         "name" : "Primary Anatomic Structure Sequence",
         "usage" : "U",
         "module" : "Specimen",
         "desc" : [
            "Sequence of Items that identifies the primary anatomic structure(s) of interest in this Instance.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Image"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "req" : "1C"
      },
      "(0008,1032)" : {
         "desc" : [
            "A Sequence that conveys the type of procedure performed.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Procedure Code Sequence",
         "usage" : "M",
         "req" : "3"
      },
      "(0040,0560)[<0>](0008,2228)[<1>](0008,2230)" : {
         "desc" : [
            "Sequence of Items that modifies the primary anatomic structure of interest in this Instance.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Image",
         "module" : "Specimen",
         "usage" : "U",
         "name" : "Primary Anatomic Structure Modifier Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-8"
         ],
         "req" : "3"
      },
      "(0018,a001)[<0>](0018,1201)" : {
         "req" : "3",
         "usage" : "M",
         "name" : "Time of Last Calibration",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
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
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a124)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "UID",
         "req" : "1C",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "entity" : "Series",
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
         ],
         "module" : "SOP Common"
      },
      "(0020,0012)" : {
         "entity" : "Image",
         "desc" : "A number identifying the single continuous gathering of data over a period of time that resulted in this image.",
         "module" : "General Image",
         "usage" : "M",
         "name" : "Acquisition Number",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "req" : "3"
      },
      "(0010,2203)" : {
         "module" : "Patient Study",
         "entity" : "Study",
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
         "req" : "2C",
         "usage" : "U",
         "name" : "Patient's Sex Neutered",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0050,0010)[<0>](0018,1003)" : {
         "entity" : "Image",
         "desc" : "User-supplied identifier for the device",
         "module" : "Device",
         "name" : "Device ID",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "req" : "3"
      },
      "(0088,0200)[<0>](0028,2000)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "name" : "ICC Profile",
         "usage" : "M",
         "module" : "General Image",
         "entity" : "Image",
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
                     "content" : [
                        "The profile applies only to Pixel Data (7FE0,0010) at the same level of the Data Set and not to any icons nested within sequences, which may or may not have their own ICC profile specified."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ]
      },
      "(0008,1048)" : {
         "name" : "Physician(s) of Record",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "3",
         "entity" : "Study",
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
         "module" : "General Study"
      },
      "(0012,0062)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient Identity Removed",
         "usage" : "M",
         "req" : "3",
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
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0018,a001)[<0>](0008,1090)" : {
         "req" : "3",
         "usage" : "M",
         "name" : "Manufacturer's Model Name",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : "Manufacturer's model name of the equipment that contributed to the composite instance.",
         "entity" : "Image"
      },
      "(0088,0200)[<0>](0028,1101)" : {
         "module" : "General Image",
         "entity" : "Image",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a124)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "UID",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "module" : "General Series"
      },
      "(0028,1055)" : [
         {
            "desc" : "Free form explanation of the meaning of the Window Center and Width. Multiple values correspond to multiple Window Center and Width values.",
            "entity" : "Image",
            "module" : "DX Image",
            "usage" : "M",
            "name" : "Window Center & Width Explanation",
            "mod_tables" : [
               "table_C.8-70"
            ],
            "req" : "3"
         },
         {
            "req" : "3",
            "mod_tables" : [
               "table_C.11-2b"
            ],
            "name" : "Window Center & Width Explanation",
            "usage" : "C - Required if Presentation Intent Type (0008,0068) is FOR PRESENTATION. Shall not be present otherwise. See Note 8.",
            "module" : "VOI LUT",
            "desc" : "Free form explanation of the meaning of the Window Center and Width. Multiple values correspond to multiple Window Center and Width values.",
            "entity" : "Image"
         }
      ],
      "(0018,1460)" : {
         "desc" : "Distance in mm between the table surface and the sharp image plane.",
         "entity" : "Image",
         "module" : "X-Ray Tomography Acquisition",
         "usage" : "U",
         "name" : "Tomo Layer Height",
         "mod_tables" : [
            "table_C.8-32"
         ],
         "req" : "1"
      },
      "(0018,1511)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.8-72"
         ],
         "name" : "Positioner Secondary Angle",
         "usage" : "U",
         "module" : "DX Positioning",
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
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.11.7"
                  },
                  "el" : "xref"
               },
               " for explanation if Positioner Type (0018,1508) is MAMMOGRAPHIC."
            ]
         ],
         "entity" : "Image"
      },
      "(0040,0555)[<0>](0040,a043)" : {
         "desc" : [
            "A concept that constrains the meaning of (i.e., defines the role of) the Observation Value. The \"Name\" component of a Name/Value pair.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Image",
         "module" : "Acquisition Context",
         "usage" : "M - See ",
         "name" : "Concept Name Code Sequence",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "req" : "1"
      },
      "(0040,0560)[<0>](0040,0551)" : {
         "module" : "Specimen",
         "entity" : "Image",
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
         "req" : "1",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Specimen Identifier",
         "usage" : "U"
      },
      "(0018,1480)" : {
         "entity" : "Image",
         "desc" : "Time in seconds the source has taken to rotate the Tomo Angle during X-Ray acquisition.",
         "module" : "X-Ray Tomography Acquisition",
         "mod_tables" : [
            "table_C.8-32"
         ],
         "name" : "Tomo Time",
         "usage" : "U",
         "req" : "3"
      },
      "(0018,700e)" : {
         "req" : "3",
         "usage" : "M",
         "name" : "Time of Last Detector Calibration",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "module" : "DX Detector",
         "entity" : "Image",
         "desc" : "The time at which the detector used to acquire this image as identified in Detector ID (0018,700A) was last calibrated."
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0020,000e)" : {
         "usage" : "U",
         "name" : "Series Instance UID",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "req" : "1",
         "entity" : "Image",
         "desc" : "Unique identifier of the Series containing the referenced Instances.",
         "module" : "Common Instance Reference"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0035)" : {
         "module" : "Patient",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_dc68c1a1-46db-4a55-bcba-f75b9d9a8ab4"
                     }
                  },
                  "\n              "
               ]
            }
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Identifier Type Code",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0040,0555)[<0>](0040,a30a)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "name" : "Numeric Value",
         "usage" : "M - See ",
         "module" : "Acquisition Context",
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a set of one or more numeric values.",
            "Required if the value that Concept Name Code Sequence (0040,A043) requires (implies) is a set of one or more integers or real numbers. Shall not be present otherwise."
         ],
         "entity" : "Image"
      },
      "(0088,0200)[<0>](0028,1201)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "name" : "Red Palette Color Lookup Table Data",
         "usage" : "M",
         "module" : "General Image",
         "entity" : "Image",
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
         ]
      },
      "(0088,0200)[<0>](0028,0102)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "name" : "High Bit",
         "usage" : "M",
         "module" : "General Image",
         "desc" : [
            "Most significant bit for pixel sample data. Each sample shall have the same high bit. High Bit (0028,0102) shall be one less than Bits Stored (0028,0101). See ",
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
         "entity" : "Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a120)" : {
         "entity" : "Series",
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
         "req" : "1C"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)" : {
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "entity" : "Image",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Referenced SOP Sequence",
         "usage" : "U",
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1160)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Referenced Frame Number",
         "usage" : "M",
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
                        "xml:id" : "para_e06e8e0c-e051-4fbc-bfa9-82d4a32dd706"
                     }
                  },
                  "\n              "
               ]
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,08ea)" : {
         "module" : "Specimen",
         "entity" : "Image",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "req" : "1C",
         "usage" : "U",
         "name" : "Measurement Units Code Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0008,114a)[<0>](0040,a170)" : {
         "module" : "General Image",
         "entity" : "Image",
         "desc" : [
            "Code describing the purpose of the reference to the Instance(s).",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1",
         "usage" : "M",
         "name" : "Purpose of Reference Code Sequence",
         "mod_tables" : [
            "table_C.7-9"
         ]
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0062,000b)" : {
         "desc" : "Identifies the Segment Number to which the reference applies. Required if the Referenced SOP Instance is a Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present.",
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "name" : "Referenced Segment Number",
         "req" : "1C"
      },
      "(0010,0033)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "Patient's Birth Date in Alternative Calendar",
         "module" : "Patient",
         "entity" : "Patient",
         "desc" : [
            "Date of birth of the named patient in the Alternative Calendar (0010,0035).",
            {
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_d088e7b4-910c-4c72-8abf-cfb5a85daa67"
                     },
                     "content" : [
                        "No format is specified for alternative calendar dates so none should be assumed."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a162)" : {
         "req" : "1C",
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
         ],
         "entity" : "Image"
      },
      "(0012,0083)" : {
         "entity" : "Study",
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
         "module" : "Clinical Trial Study",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "usage" : "U",
         "name" : "Consent for Clinical Trial Use Sequence",
         "req" : "3"
      },
      "(0040,0275)[<0>](0008,0051)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "name" : "Issuer of Accession Number Sequence",
         "usage" : "M",
         "req" : "3",
         "entity" : "Series",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "General Series"
      },
      "(0008,2228)[<0>](0008,2230)" : {
         "desc" : [
            "Sequence of Items that modifies the primary anatomic structure of interest in this Instance.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Image",
         "module" : "DX Anatomy Imaged",
         "mod_tables" : [
            "table_C.8-69",
            "table_10-6",
            "table_10-8"
         ],
         "usage" : "M",
         "name" : "Primary Anatomic Structure Modifier Sequence",
         "req" : "3"
      },
      "(0010,0200)" : {
         "entity" : "Patient",
         "desc" : [
            "Indicates whether or not the subject is a quality control phantom.",
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
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "Quality Control Subject",
         "req" : "3"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "req" : "1C",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0008,0300)[<0>](0008,0305)" : {
         "entity" : "Image",
         "desc" : "Actions to be performed on element within the block that are not safe from identify leakage.",
         "module" : "SOP Common",
         "name" : "Deidentification Action Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3"
      },
      "(0018,115e)" : {
         "entity" : "Image",
         "desc" : [
            "X-Ray dose, measured in dGy*cm*cm, to which the patient was exposed for the acquisition of this image plus any non-digitally recorded fluoroscopy that may have been performed to prepare for the acquisition of this image.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "orderedlist",
                     "content" : [
                        "\n                      ",
                        {
                           "content" : [
                              "\n                        ",
                              {
                                 "attrs" : {
                                    "xml:id" : "para_958825d1-4948-46d5-8946-3bf6c4bd2c44"
                                 },
                                 "el" : "para",
                                 "content" : [
                                    "The sum of the area dose product of all images of a Series or a Study may not result in the total area dose product to which the patient was exposed."
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
                                    "This may be an estimated value based on assumptions about the patient's body size and habitus."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_8cff0f75-217d-40f7-9cfa-54fdcbc208a5"
                                 }
                              },
                              "\n                      "
                           ]
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
         "module" : "X-Ray Acquisition Dose",
         "usage" : "U",
         "name" : "Image and Fluoroscopy Area Dose Product",
         "mod_tables" : [
            "table_C.8-33"
         ],
         "req" : "3"
      },
      "(0008,0096)[<0>](0008,0080)" : {
         "req" : "1C",
         "usage" : "M",
         "name" : "Institution Name",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "entity" : "Study",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present."
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a30a)" : {
         "name" : "Numeric Value",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "entity" : "Image",
         "module" : "General Image"
      },
      "(0008,0005)" : {
         "module" : "SOP Common",
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
         "req" : "1C",
         "usage" : "M",
         "name" : "Specific Character Set",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,3010)" : {
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
         "module" : "General Image",
         "usage" : "M",
         "name" : "Irradiation Event UID",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "req" : "3"
      },
      "(0018,0012)" : {
         "desc" : [
            "Sequence that identifies the contrast agent.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Image",
         "module" : "Contrast/Bolus",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "usage" : "U",
         "name" : "Contrast/Bolus Agent Sequence",
         "req" : "3"
      },
      "(0040,0316)" : {
         "req" : "3",
         "usage" : "U",
         "name" : "Organ Dose",
         "mod_tables" : [
            "table_C.8-33"
         ],
         "module" : "X-Ray Acquisition Dose",
         "desc" : [
            "Average organ dose value measured in dGy during the acquisition of this image.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "This may be an estimated value."
                     ],
                     "attrs" : {
                        "xml:id" : "para_580cf930-2537-44db-b1ce-25058ba0ef89"
                     }
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "entity" : "Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)" : {
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Referenced SOP Sequence"
      },
      "(0018,1702)" : {
         "usage" : "U",
         "name" : "Collimator Left Vertical Edge",
         "mod_tables" : [
            "table_C.8-28b"
         ],
         "req" : "1C",
         "entity" : "Image",
         "desc" : [
            "Required if a value of Collimator Shape (0018,1700) is RECTANGULAR. Location of the left edge of the rectangular collimator with respect to pixels in the image given as column. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.7.3.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "module" : "X-Ray Collimator"
      },
      "(0010,2294)[<0>](0010,2296)" : {
         "req" : "1",
         "name" : "Breed Registry Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "desc" : [
            "Identification of the organization with which an animal is registered.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Patient"
      },
      "(0008,001a)" : {
         "desc" : [
            "Uniquely identifies a Related General SOP Class for the SOP Class of this Instance. See ",
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
         "entity" : "Image",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Related General SOP Class UID",
         "usage" : "M",
         "req" : "3"
      },
      "(0040,0556)" : {
         "module" : "Acquisition Context",
         "desc" : "Free-text description of the image-acquisition context.",
         "entity" : "Image",
         "req" : "3",
         "name" : "Acquisition Context Description",
         "usage" : "M - See ",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ]
      },
      "(0028,1202)" : {
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "name" : "Green Palette Color Lookup Table Data",
         "usage" : "M",
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
         "entity" : "Image",
         "module" : "Image Pixel"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a043)" : {
         "req" : "1",
         "usage" : "M",
         "name" : "Concept Name Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Series"
      },
      "(0008,1140)[<0>](0040,a170)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M",
         "name" : "Purpose of Reference Code Sequence",
         "module" : "General Image",
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "Image"
      },
      "(0012,0063)" : {
         "req" : "1C",
         "usage" : "M",
         "name" : "De-identification Method",
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
                                 "attrs" : {
                                    "xml:id" : "para_1b4a5ea4-66da-478b-901c-5f7d6b806d29"
                                 },
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
                                       "el" : "olink",
                                       "attrs" : {
                                          "targetptr" : "DCM_109104",
                                          "targetdoc" : "PS3.16"
                                       }
                                    },
                                    "."
                                 ],
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_adf0139e-d0e5-457a-ac4d-5c9e20c50e35"
                                 }
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
            },
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method Code Sequence (0012,0064) is not present. May be present otherwise."
         ],
         "entity" : "Patient"
      },
      "(0028,0103)" : [
         {
            "module" : "Image Pixel",
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
            "usage" : "M",
            "name" : "Pixel Representation",
            "mod_tables" : [
               "table_C.7-11b"
            ]
         },
         {
            "usage" : "M",
            "name" : "Pixel Representation",
            "mod_tables" : [
               "table_C.8-70"
            ],
            "req" : "1",
            "entity" : "Image",
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
            "module" : "DX Image"
         }
      ],
      "(0040,0555)[<0>](0040,a163)" : {
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "usage" : "M - See ",
         "name" : "Rational Denominator Value",
         "req" : "1C",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "entity" : "Image",
         "module" : "Acquisition Context"
      },
      "(0008,009d)[<0>](0008,0081)" : {
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "entity" : "Study",
         "module" : "General Study",
         "name" : "Institution Address",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1150)" : {
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0033)" : {
         "req" : "1C",
         "usage" : "M",
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "desc" : [
            "Standard defining the format of the Universal Entity ID (0040,0032). Required if Universal Entity ID (0040,0032) is present.",
            {
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
      "(0018,1008)" : {
         "desc" : "Identifier of the gantry or positioner.",
         "entity" : "Equipment",
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Gantry ID",
         "usage" : "M",
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,08ea)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Measurement Units Code Sequence",
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ]
      },
      "(0050,0010)[<0>](0050,0019)" : {
         "req" : "3",
         "usage" : "U",
         "name" : "Inter-Marker Distance",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "module" : "Device",
         "desc" : [
            "Distance in mm between markers on calibrated device. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.12.1.1"
               }
            },
            "."
         ],
         "entity" : "Image"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a168)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Concept Code Sequence",
         "module" : "General Image",
         "entity" : "Image",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ]
      },
      "(0040,0515)" : {
         "desc" : "Sequence of alternate identifiers for the container that contains the specimen(s) being imaged. These may have been assigned, e.g., by the manufacturer, or by another institution that collected the specimen. One or more Items are permitted in this Sequence.",
         "entity" : "Image",
         "module" : "Specimen",
         "usage" : "U",
         "name" : "Alternate Container Identifier Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "req" : "3"
      },
      "(0010,1100)[<0>](0040,e022)[<1>](0088,0140)" : {
         "desc" : "Uniquely identifies the Storage Media on which the referenced instance(s) reside.",
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "Storage Media File-Set UID",
         "usage" : "M",
         "req" : "1"
      },
      "(0018,7064)" : {
         "entity" : "Image",
         "desc" : [
            "Whether the exposure was normally completed or not.",
            {
               "title" : "Defined Terms:",
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
               "type" : "variablelist"
            }
         ],
         "module" : "X-Ray Generation",
         "mod_tables" : [
            "table_C.8-34"
         ],
         "name" : "Exposure Status",
         "usage" : "U",
         "req" : "3"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0033)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "usage" : "M",
         "name" : "Universal Entity ID Type",
         "req" : "1C",
         "entity" : "Series",
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
         "module" : "General Series"
      },
      "(0018,0036)[<0>](0018,0035)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-19"
         ],
         "name" : "Intervention Drug Start Time",
         "usage" : "U",
         "module" : "Intervention",
         "entity" : "Image",
         "desc" : "Time of administration of the interventional drug."
      },
      "(0040,0555)[<0>](0040,a040)" : {
         "req" : "3",
         "name" : "Value Type",
         "usage" : "M - See ",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "module" : "Acquisition Context",
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
               "type" : "variablelist",
               "title" : "Defined Terms:"
            },
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_10.2"
                  }
               },
               "."
            ]
         ],
         "entity" : "Image"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0008,1199)[<2>](0062,000b)" : {
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Referenced Segment Number",
         "req" : "1C",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "entity" : "Image",
         "module" : "General Image"
      },
      "(0400,0500)[<0>](0400,0520)" : {
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
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Encrypted Content",
         "usage" : "M",
         "req" : "1"
      },
      "(0018,704c)" : {
         "module" : "X-Ray Grid",
         "desc" : "Focal distance in mm of a FOCUSED grid.",
         "entity" : "Image",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-36b"
         ],
         "name" : "Grid Focal Distance",
         "usage" : "U"
      },
      "(0008,1084)" : {
         "req" : "3",
         "usage" : "U",
         "name" : "Admitting Diagnoses Code Sequence",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "entity" : "Study",
         "desc" : [
            "A sequence that conveys the admitting diagnosis (diagnoses).",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M",
         "name" : "Protocol Context Sequence",
         "req" : "3",
         "entity" : "Series",
         "desc" : "Sequence that specifies the context for the Scheduled Protocol Code Sequence Item. One or more Items are permitted in this Sequence.",
         "module" : "General Series"
      },
      "(0010,2299)" : {
         "usage" : "M",
         "name" : "Responsible Organization",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "2C",
         "desc" : [
            "Name of organization with medical or welfare decision making authority for the patient.",
            "Required if patient is an animal. May be present otherwise."
         ],
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a162)" : {
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "usage" : "M",
         "name" : "Rational Numerator Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a120)" : {
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "req" : "1C",
         "name" : "DateTime",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0010,0035)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient's Alternative Calendar",
         "usage" : "M",
         "req" : "1C",
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
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0008,0060)" : [
         {
            "req" : "1",
            "mod_tables" : [
               "table_C.7-5a"
            ],
            "name" : "Modality",
            "usage" : "M",
            "module" : "General Series",
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
            "entity" : "Series"
         },
         {
            "desc" : [
               "Type of equipment that originally acquired the data used to create the images in this Series.",
               {
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
                  ],
                  "type" : "variablelist",
                  "title" : "Enumerated Values:"
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
            ],
            "entity" : "Series",
            "module" : "DX Series",
            "name" : "Modality",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-68"
            ],
            "req" : "1"
         }
      ],
      "(0008,0110)[<0>](0008,0116)" : {
         "name" : "Coding Scheme Responsible Organization",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "desc" : "Name of the organization responsible for the Coding Scheme. May include organizational contact information.",
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0018,a001)[<0>](0008,1010)" : {
         "desc" : "User defined name identifying the machine that contributed to the composite instance.",
         "entity" : "Image",
         "module" : "SOP Common",
         "name" : "Station Name",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3"
      },
      "(0018,7048)" : {
         "entity" : "Image",
         "desc" : [
            "Period in mSec of reciprocation cycle.",
            "Only meaningful if a value of Grid (0018,1166) is RECIPROCATING."
         ],
         "module" : "X-Ray Grid",
         "name" : "Grid Period",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-36b"
         ],
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a122)" : {
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Time"
      },
      "(0010,0021)" : {
         "module" : "Patient",
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
         "usage" : "M",
         "name" : "Issuer of Patient ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0038,0064)" : {
         "req" : "3",
         "usage" : "U",
         "name" : "Issuer of Service Episode ID Sequence",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "entity" : "Study",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Service Episode ID (0038,0060).",
            "Only a single Item is permitted in this Sequence."
         ]
      },
      "(0018,0010)" : {
         "usage" : "U",
         "name" : "Contrast/Bolus Agent",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "req" : "2",
         "entity" : "Image",
         "desc" : "Contrast or bolus agent",
         "module" : "Contrast/Bolus"
      },
      "(0008,1072)[<0>](0040,1102)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "name" : "Person's Address",
         "usage" : "M",
         "req" : "3",
         "entity" : "Series",
         "desc" : "Person's mailing address",
         "module" : "General Series"
      },
      "(0018,1612)" : {
         "usage" : "U",
         "name" : "Radius of Circular Shutter",
         "mod_tables" : [
            "table_C.7-17a"
         ],
         "req" : "1C",
         "entity" : "Image",
         "desc" : "Required if Shutter Shape (0018,1600) is CIRCULAR. Radius of the circular shutter with respect to pixels in the image given as a number of pixels along the row direction.",
         "module" : "Display Shutter"
      },
      "(0008,0020)" : {
         "module" : "General Study",
         "desc" : "Date the Study started.",
         "entity" : "Study",
         "req" : "2",
         "name" : "Study Date",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a122)" : {
         "entity" : "Series",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "module" : "General Series",
         "usage" : "M",
         "name" : "Time",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C"
      },
      "(0008,009d)[<0>](0008,0080)" : {
         "module" : "General Study",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "entity" : "Study",
         "req" : "1C",
         "name" : "Institution Name",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0008,2112)[<0>](0008,1160)" : {
         "entity" : "Image",
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
                        "xml:id" : "para_68450e47-9448-4ac5-82e8-4015a854968a"
                     }
                  },
                  "\n              "
               ],
               "el" : "note"
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "module" : "General Image",
         "usage" : "M",
         "name" : "Referenced Frame Number",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3"
         ],
         "req" : "1C"
      },
      "(0008,1062)[<0>](0008,0082)" : {
         "entity" : "Study",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "General Study",
         "usage" : "M",
         "name" : "Institution Code Sequence",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "1C"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1155)" : {
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "req" : "1",
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "General Series"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0008,1199)" : {
         "req" : "1C",
         "usage" : "M",
         "name" : "Referenced SOP Sequence",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "module" : "General Image",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "entity" : "Image"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0040,e001)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "HL7 Instance Identifier",
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "Instance Identifier of the encapsulated HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
            "Required if Type of Instances (0040,E020) is CDA."
         ],
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a124)" : {
         "entity" : "Image",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "name" : "UID",
         "usage" : "M",
         "req" : "1C"
      },
      "(0018,1151)" : [
         {
            "usage" : "U",
            "name" : "X-Ray Tube Current",
            "mod_tables" : [
               "table_C.8-33"
            ],
            "req" : "3",
            "entity" : "Image",
            "desc" : "X-Ray Tube Current in mA.",
            "module" : "X-Ray Acquisition Dose"
         },
         {
            "name" : "X-Ray Tube Current",
            "usage" : "U",
            "mod_tables" : [
               "table_C.8-34"
            ],
            "req" : "3",
            "desc" : "X-Ray Tube Current in mA.",
            "entity" : "Image",
            "module" : "X-Ray Generation"
         }
      ],
      "(0040,0275)[<0>](0020,000d)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M",
         "name" : "Study Instance UID",
         "module" : "General Series",
         "entity" : "Series",
         "desc" : "The unique identifier for the Study provided for this Requested Procedure."
      },
      "(0018,113a)" : {
         "req" : "3",
         "name" : "Table Type",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-72"
         ],
         "module" : "DX Positioning",
         "desc" : {
            "title" : "Defined Terms:",
            "type" : "variablelist",
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
            ]
         },
         "entity" : "Image"
      },
      "(4ffe,0001)[<0>](0400,0020)" : {
         "entity" : "Image",
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
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Data Elements Signed",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1"
      },
      "(0040,0303)" : {
         "desc" : [
            "Typical dimension of the exposed area at the detector plane. If Rectangular: row dimension followed by column; if Round: diameter. Measured in cm.",
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
                                 "attrs" : {
                                    "xml:id" : "para_54eb9a46-b0ed-4608-b584-8bf4c538d37a"
                                 },
                                 "content" : [
                                    "The exposed area should be consistent with values specified in the ",
                                    {
                                       "attrs" : {
                                          "linkend" : "sect_C.8.7.3",
                                          "xrefstyle" : "select: title"
                                       },
                                       "el" : "xref"
                                    },
                                    ", if present."
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
                                    "This may be an estimated value based on assumptions about the patient's body size and habitus."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_d94e1314-1af0-4e69-81b3-7b8cf2c900cc"
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
                                    "xml:id" : "para_fd47b876-4803-4e68-860f-2d47bd4f66d3"
                                 },
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
                                          "linkend" : "sect_C.4.16",
                                          "xrefstyle" : "select: label"
                                       },
                                       "el" : "xref"
                                    },
                                    ", ",
                                    {
                                       "attrs" : {
                                          "linkend" : "table_C.4-16",
                                          "xrefstyle" : "select: labelquotedtitle"
                                       },
                                       "el" : "xref"
                                    },
                                    ")."
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
               ],
               "el" : "note"
            }
         ],
         "entity" : "Image",
         "module" : "X-Ray Acquisition Dose",
         "usage" : "U",
         "name" : "Exposed Area",
         "mod_tables" : [
            "table_C.8-33"
         ],
         "req" : "3"
      },
      "(0018,1606)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-17a"
         ],
         "name" : "Shutter Upper Horizontal Edge",
         "usage" : "U",
         "module" : "Display Shutter",
         "entity" : "Image",
         "desc" : "Required if Shutter Shape (0018,1600) is RECTANGULAR. Location of the upper edge of the rectangular shutter with respect to pixels in the image given as row."
      },
      "(0054,0410)[<0>](0054,0412)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.8-72"
         ],
         "name" : "Patient Orientation Modifier Code Sequence",
         "usage" : "U",
         "module" : "DX Positioning",
         "desc" : [
            "Patient Orientation Modifier.",
            "Required if needed to fully specify the orientation of the patient with respect to gravity.",
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "Image"
      },
      "(0012,0083)[<0>](0012,0020)" : {
         "module" : "Clinical Trial Study",
         "entity" : "Study",
         "desc" : [
            "The identifier of the protocol for which consent to distribute has been granted.",
            [
               "Required if Distribution Type (0012,0084) is NAMED_PROTOCOL and the protocol is not that which is specified in Clinical Trial Protocol ID (0012,0020) in the ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.1.3",
                     "xrefstyle" : "select: title"
                  }
               },
               "."
            ]
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "name" : "Clinical Trial Protocol ID",
         "usage" : "U"
      },
      "(0040,a390)[<0>](0008,1150)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0018,11a2)" : {
         "req" : "3",
         "usage" : "U",
         "name" : "Compression Force",
         "mod_tables" : [
            "table_C.8-72"
         ],
         "module" : "DX Positioning",
         "entity" : "Image",
         "desc" : "The compression force applied to the body part during exposure, measured in Newtons."
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a123)" : {
         "usage" : "U",
         "name" : "Person Name",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "entity" : "Image",
         "module" : "Specimen"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "entity" : "Patient",
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
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M",
         "name" : "Universal Entity ID Type",
         "req" : "1C"
      },
      " (0010,0027) [<0>](0010,0020)" : {
         "entity" : "Patient",
         "desc" : "Primary identifier for an individual subject.",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "usage" : "M",
         "name" : "Patient ID",
         "req" : "1"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a163)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Rational Denominator Value",
         "usage" : "M",
         "module" : "General Series",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "entity" : "Series"
      },
      "(0018,1041)" : {
         "desc" : "Volume injected in milliliters of diluted contrast agent",
         "entity" : "Image",
         "module" : "Contrast/Bolus",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "name" : "Contrast/Bolus Volume",
         "usage" : "U",
         "req" : "3"
      },
      "(0040,0513)[<0>](0040,0031)" : {
         "usage" : "U",
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "req" : "1C",
         "entity" : "Image",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "module" : "Specimen"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a121)" : {
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
         "name" : "Date",
         "usage" : "M",
         "req" : "1C"
      },
      "(0008,0110)[<0>](0008,0115)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "desc" : "The coding scheme full common name",
         "req" : "3",
         "usage" : "M",
         "name" : "Coding Scheme Name",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,0300)[<0>](0008,0302)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Private Creator Reference",
         "req" : "1",
         "desc" : [
            "The value of the Private Creator Data Element value used to reserve the block\n                  of Private Data Elements whose characteristics are described in this Item.",
            {
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
               ],
               "el" : "note"
            }
         ],
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0008,0051)[<0>](0040,0032)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "usage" : "M",
         "name" : "Universal Entity ID",
         "module" : "General Study",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "Study"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a168)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Concept Code Sequence",
         "usage" : "U",
         "module" : "Specimen",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "entity" : "Image"
      },
      "(0008,1072)[<0>](0008,0081)" : {
         "usage" : "M",
         "name" : "Institution Address",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "req" : "3",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a121)" : {
         "module" : "General Image",
         "entity" : "Image",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "req" : "1C",
         "name" : "Date",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ]
      },
      "(0054,0220)[<0>](0054,0222)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.8-72"
         ],
         "usage" : "U",
         "name" : "View Modifier Code Sequence",
         "module" : "DX Positioning",
         "desc" : [
            "View modifier.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)" : {
         "entity" : "Series",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "module" : "General Series",
         "usage" : "M",
         "name" : "Referenced SOP Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,08ea)" : {
         "entity" : "Image",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "module" : "Specimen",
         "usage" : "U",
         "name" : "Measurement Units Code Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1C"
      },
      "(0008,0031)" : {
         "desc" : "Time the Series started.",
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Series Time",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "req" : "3"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a122)" : {
         "req" : "1C",
         "usage" : "M",
         "name" : "Time",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "module" : "General Image",
         "entity" : "Image",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ]
      },
      "(0008,1062)[<0>](0040,1102)" : {
         "req" : "3",
         "name" : "Person's Address",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "desc" : "Person's mailing address",
         "entity" : "Study"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a168)" : {
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "req" : "1C",
         "usage" : "M",
         "name" : "Concept Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0018,7011)" : {
         "desc" : "Total number of X-Ray exposures that have been made on the detector used to acquire this image as identified in Detector ID (0018,700A) since it was manufactured.",
         "entity" : "Image",
         "module" : "DX Detector",
         "mod_tables" : [
            "table_C.8-71b"
         ],
         "name" : "Exposures on Detector Since Manufactured",
         "usage" : "M",
         "req" : "3"
      },
      "(0050,0010)" : {
         "mod_tables" : [
            "table_C.7-18"
         ],
         "usage" : "U",
         "name" : "Device Sequence",
         "req" : "1",
         "entity" : "Image",
         "desc" : [
            "A sequence of items describing devices used that may be visible in the image.",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "Device"
      },
      "(0010,0026)[<0>](0010,0020)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "desc" : "Primary identifier for the group of subjects.",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "usage" : "M",
         "name" : "Patient ID"
      },
      "(0018,1043)" : {
         "usage" : "U",
         "name" : "Contrast/Bolus Stop Time",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "req" : "3",
         "desc" : "Time of end of contrast injection",
         "entity" : "Image",
         "module" : "Contrast/Bolus"
      },
      "(0008,1072)[<0>](0040,1104)" : {
         "usage" : "M",
         "name" : "Person's Telecom Information",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "req" : "3",
         "entity" : "Series",
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
                           "content" : [
                              "\n                    ",
                              {
                                 "attrs" : {
                                    "xml:id" : "para_96e493a8-b679-4f97-987f-4e08360642a4"
                                 },
                                 "content" : [
                                    "It is recommended that this attribute be treated as equivalent to HL7v2 (v2.5 or later) field ROL-12, and be formatted in accordance with the HL7v2 XTN data type (without escapes for HL7 message structure reserved characters). See additional notes in the Module invoking this Macro."
                                 ],
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
         "module" : "General Series"
      },
      "(0040,0560)[<0>](0040,0562)[<1>](0040,0033)" : {
         "req" : "1C",
         "name" : "Universal Entity ID Type",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "module" : "Specimen",
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
         "entity" : "Image"
      },
      "(0038,0014)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Issuer of Admission ID Sequence",
         "usage" : "U",
         "req" : "3",
         "entity" : "Study",
         "desc" : [
            "Identifier of the Assigning Authority that issued Admission ID (0038,0010).",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "Patient Study"
      },
      "(0040,0520)[<0>](0050,001a)" : {
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
         "entity" : "Image",
         "module" : "Specimen",
         "name" : "Container Component Material",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "req" : "3"
      },
      "(0010,1002)[<0>](0010,0024)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "usage" : "M",
         "req" : "3",
         "entity" : "Patient",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "Patient"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0008,1160)" : {
         "entity" : "Image",
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
         "module" : "Specimen",
         "name" : "Referenced Frame Number",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1C"
      },
      "(0010,1002)[<0>](0010,0020)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient ID",
         "usage" : "M",
         "req" : "1",
         "desc" : [
            "An identifier for the patient.",
            {
               "content" : [
                  "\n                    ",
                  {
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
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_f0c2cfdd-2ad9-4f36-9f8d-a8723d825eae"
                     }
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0008,0080)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "name" : "Institution Name",
         "req" : "3",
         "desc" : "Institution where the equipment that produced the composite instances is located.",
         "entity" : "Equipment",
         "module" : "General Equipment"
      },
      "(0012,0060)" : {
         "desc" : [
            "The name of the institution that is responsible for coordinating the medical imaging data for the clinical trial or research. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.3.2.1.1"
               },
               "el" : "xref"
            },
            "."
         ],
         "entity" : "Series",
         "module" : "Clinical Trial Series",
         "name" : "Clinical Trial Coordinating Center Name",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "req" : "2"
      },
      "(0040,9096)[<0>](0040,9212)" : {
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
         "name" : "Real World Value LUT Data",
         "usage" : "M",
         "req" : "1C"
      },
      "(0010,1030)" : {
         "module" : "Patient Study",
         "entity" : "Study",
         "desc" : "Weight of the Patient, in kilograms.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Patient's Weight",
         "usage" : "U"
      },
      "(0060,3000)[<0>](0060,3004)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.11.5-1"
         ],
         "name" : "Histogram First Bin Value",
         "usage" : "U",
         "module" : "Image Histogram",
         "entity" : "Image",
         "desc" : [
            "The stored pixel value corresponding to the lowest pixel value counted in the first bin. All image pixel values less than this value are not included in the histogram.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "attrs" : {
                        "xml:id" : "para_fbeefb32-91a3-43d7-926c-08f4c3f50472"
                     },
                     "content" : [
                        "The Value Representation of this Attribute is determined by the value of Pixel Representation (0028,0103)."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ]
      },
      "(0018,1400)" : {
         "entity" : "Image",
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
         "name" : "Acquisition Device Processing Description",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-70"
         ],
         "req" : "3"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a160)" : {
         "entity" : "Image",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Text Value",
         "usage" : "U",
         "req" : "1C"
      },
      "(0050,0010)[<0>](0050,0020)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "usage" : "U",
         "name" : "Device Description",
         "module" : "Device",
         "entity" : "Image",
         "desc" : "Further description in free form text describing the device."
      },
      "(0010,0026)[<0>](0010,0021)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M",
         "name" : "Issuer of Patient ID",
         "req" : "3",
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
                     ],
                     "attrs" : {
                        "xml:id" : "para_fde39d36-34f5-4459-8bca-12b577233532"
                     }
                  },
                  "\n              "
               ]
            }
         ],
         "module" : "Patient"
      },
      "(0040,a390)[<0>](0040,e001)" : {
         "module" : "SOP Common",
         "desc" : "Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
         "entity" : "Image",
         "req" : "1",
         "usage" : "M",
         "name" : "HL7 Instance Identifier",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0275)" : {
         "usage" : "M",
         "name" : "Request Attributes Sequence",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "req" : "3",
         "desc" : [
            "Sequence that contains attributes from the Imaging Service Request.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0088,0200)[<0>](0028,0010)" : {
         "req" : "1",
         "name" : "Rows",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image",
         "entity" : "Image",
         "desc" : "Number of rows in the image."
      },
      "(0040,0518)" : {
         "module" : "Specimen",
         "entity" : "Image",
         "desc" : [
            "Type of container that contains the specimen(s) being imaged.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "req" : "2",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Container Type Code Sequence",
         "usage" : "U"
      },
      "(0010,1100)[<0>](0040,e020)" : {
         "desc" : [
            "Type of object instances referenced.",
            {
               "title" : "Defined Terms:",
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
               "type" : "variablelist"
            }
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "name" : "Type of Instances",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "req" : "1"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0039)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M",
         "name" : "Assigning Jurisdiction Code Sequence",
         "req" : "3",
         "entity" : "Patient",
         "desc" : [
            "The geo-political body that assigned the patient identifier. Typically a code for a country or a state/province. Only a single Item is permitted in this Sequence.",
            {
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 9 (Assigning Jurisdiction)."
                     ],
                     "attrs" : {
                        "xml:id" : "para_da6e8d69-e95e-4320-b5c5-be5b4cbb811f"
                     }
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "module" : "Patient"
      },
      "(0040,9096)[<0>](0040,9225)" : {
         "name" : "Real World Value Slope",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "req" : "1C",
         "entity" : "Image",
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
            "Required if Float Pixel Data (7FE0,0008) or Double Float Pixel Data (7FE0,0009) are present or Real World Value LUT Data (0040,9212) is not present."
         ],
         "module" : "General Image"
      },
      "(0008,9215)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M",
         "name" : "Derivation Code Sequence",
         "module" : "General Image",
         "entity" : "Image",
         "desc" : [
            [
               "A coded description of how this image was derived. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.6.1.1.3",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            "One or more Items are permitted in this Sequence. More than one Item indicates that successive derivation steps have been applied."
         ]
      },
      "(fffa,fffa)" : {
         "desc" : [
            "Sequence holding Digital Signatures.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Image",
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Digital Signatures Sequence",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "3"
      },
      "(60xx,1302)" : {
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
         ],
         "entity" : "Image",
         "req" : "3",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "name" : "ROI Mean",
         "usage" : "C - Required if graphic annotation is present - See "
      },
      "(0060,3000)[<0>](0060,3010)" : {
         "usage" : "U",
         "name" : "Histogram Explanation",
         "mod_tables" : [
            "table_C.11.5-1"
         ],
         "req" : "3",
         "desc" : "Free form text explanation of the meaning of the LUT.",
         "entity" : "Image",
         "module" : "Image Histogram"
      },
      " (0010,0027) [<0>](0010,0024)" : {
         "module" : "Patient",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "Patient",
         "req" : "3",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ]
      },
      "(0008,0110)[<0>](0008,0112)" : {
         "module" : "SOP Common",
         "entity" : "Image",
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
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme Registry",
         "usage" : "M"
      },
      "(0008,1052)[<0>](0040,1103)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Person's Telephone Numbers",
         "req" : "3",
         "entity" : "Series",
         "desc" : "Person's telephone number(s)",
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
      "Can't handle table_8.8-1 (in table_C.7.6.14-1 after (0040,A043))",
      "Can't handle table_8.8-1 (in table_C.7.6.14-1 after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.7.6.14-1 after (0040,A168))",
      "Can't handle table_8.8-1 (in table_C.12-1 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_C.12-6 after (0400,0401))"
   ]
}
