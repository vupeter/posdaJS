var data = {
   "tags" : {
      "(0008,0070)" : [
         {
            "entity" : "Equipment",
            "req" : "2",
            "usage" : "M",
            "module" : "General Equipment",
            "name" : "Manufacturer",
            "desc" : "Manufacturer of the equipment that produced the composite instances.",
            "mod_tables" : [
               "table_C.7-8"
            ]
         },
         {
            "name" : "Manufacturer",
            "desc" : "Manufacturer of the equipment that produced the composite instances.",
            "mod_tables" : [
               "table_C.7-8b"
            ],
            "usage" : "U",
            "module" : "Enhanced General Equipment",
            "entity" : "Equipment",
            "req" : "1"
         }
      ],
      "(0008,002a)" : {
         "module" : "Enhanced PET Image",
         "usage" : "M",
         "entity" : "Image",
         "req" : "1C",
         "name" : "Acquisition DateTime",
         "mod_tables" : [
            "table_C.8.22-3"
         ],
         "desc" : [
            "The date and time that the acquisition of data started.",
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
                                 "attrs" : {
                                    "xml:id" : "para_17191a93-2542-48f2-be40-ee40e984ab88"
                                 },
                                 "content" : [
                                    "The synchronization of this time with an external clock is specified in the synchronization Module in Acquisition Time synchronized (0018,1800)."
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
                                    "xml:id" : "para_785647cc-698b-4c7f-811c-be217e1499a1"
                                 },
                                 "el" : "para",
                                 "content" : [
                                    "See ",
                                    {
                                       "el" : "xref",
                                       "attrs" : {
                                          "xrefstyle" : "select: label",
                                          "linkend" : "sect_C.7.6.16.2.2.1"
                                       }
                                    },
                                    " for an overview of all acquisition related timing attributes."
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
               ],
               "el" : "note"
            },
            "Required if Image Type (0008,0008) Value 1 of this frame is ORIGINAL and SOP Class UID is not \"1.2.840.10008.5.1.4.1.1.128.1\" (Legacy Converted), may be present otherwise."
         ]
      },
      "(0018,a001)[<0>](0040,a170)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "1",
         "name" : "Purpose of Reference Code Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         ]
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0032)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "name" : "Universal Entity ID",
         "module" : "General Series",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series"
      },
      "(0008,010f)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "name" : "Context Identifier",
         "req" : "1",
         "entity" : "Image",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0008,0110)[<0>](0008,0116)" : {
         "desc" : "Name of the organization responsible for the Coding Scheme. May include organizational contact information.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme Responsible Organization",
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "3",
         "entity" : "Image"
      },
      "(0088,0200)[<0>](0028,1102)" : {
         "module" : "Enhanced PET Image",
         "usage" : "M",
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
         ],
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.7-11b"
         ],
         "name" : "Green Palette Color Lookup Table Descriptor"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a160)" : {
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
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "module" : "General Series"
      },
      "(0008,1032)" : {
         "name" : "Procedure Code Sequence",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : [
            "A Sequence that conveys the type of procedure performed.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Study",
         "req" : "3",
         "usage" : "M",
         "module" : "General Study"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)" : {
         "req" : "3",
         "entity" : "Image",
         "module" : "Enhanced PET Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "Sequence of references to Digital Signatures in the referenced SOP Instance.",
            "One or more Items are permitted in this Sequence.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_1bb4c66e-0b5e-4f69-b0f2-4e353dc73212"
                     },
                     "content" : [
                        "The Attributes in this Sequence can be used to detect if the referenced SOP Instance has been altered."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "name" : "Referenced Digital Signature Sequence"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0010)" : {
         "name" : "MAC Calculation Transfer Syntax UID",
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "The Transfer Syntax UID used to encode the values of the Data Elements included in the MAC calculation. When computing the MAC, only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
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
                                    "xml:id" : "para_d3b7f806-4134-47a2-bf65-131f44d9fa2a"
                                 },
                                 "el" : "para",
                                 "content" : [
                                    "Certain Transfer Syntaxes, particularly those that are used with compressed data, allow the fragmentation of the pixel data to change. If such fragmentation changes, Digital Signatures generated with such Transfer Syntaxes could become invalid."
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
                                    "This does not constrain the transfer syntax used to transmit the object."
                                 ],
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_2a42563c-d7f6-4749-9a5a-b563109dea18"
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
         "usage" : "M",
         "module" : "Enhanced PET Image",
         "entity" : "Image",
         "req" : "1"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0033)" : {
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
         "entity" : "Patient",
         "req" : "1C",
         "usage" : "M",
         "module" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a120)" : {
         "req" : "1C",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "name" : "DateTime"
      },
      "(0028,0108)" : {
         "usage" : "M",
         "module" : "General Series",
         "req" : "3",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : "The minimum value of all images in this Series.",
         "name" : "Smallest Pixel Value in Series"
      },
      "(0008,9092)[<0>](0020,000d)" : {
         "entity" : "Image",
         "req" : "1",
         "module" : "Enhanced PET Image",
         "usage" : "M",
         "name" : "Study Instance UID",
         "desc" : "Unique identifier for the Study",
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a124)" : {
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "UID",
         "req" : "1C",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series"
      },
      "(0400,0500)[<0>](0400,0510)" : {
         "req" : "1",
         "entity" : "Image",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
         "name" : "Encrypted Content Transfer Syntax UID"
      },
      "(0020,0060)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : [
            "Laterality of (paired) body part examined. Required if the body part examined is a paired structure and Image Laterality (0020,0062) or Frame Laterality (0020,9072) or Measurement Laterality (0024,0113) are not sent.",
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
                     "attrs" : {
                        "xml:id" : "para_46e9d782-b47b-4339-b6ff-a11691e830db"
                     },
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
         "req" : "2C",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series"
      },
      "(0008,113a)" : {
         "name" : "Referenced Waveform Sequence",
         "mod_tables" : [
            "table_C.8.22-3"
         ],
         "desc" : [
            "References to waveforms acquired in conjunction with this image. These Waveforms may or may not be temporally synchronized with this image.",
            "One or more Items are permitted in this Sequence."
         ],
         "usage" : "M",
         "module" : "Enhanced PET Image",
         "entity" : "Image",
         "req" : "3"
      },
      "(0018,1803)" : {
         "module" : "Synchronization",
         "usage" : "U",
         "entity" : "Frame of Reference",
         "req" : "3",
         "name" : "NTP Source Address",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "desc" : [
            "IP Address of NTP, SNTP, or PTP time source. IPv4 addresses shall be in dotted decimal (e.g., 192.168.1.1). The IPv6 addresses shall be in colon separated hexadecimal (e.g., 12:34:56:78:9a:bc:de:f0).",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "Identity of this value in two instances acquired contemporaneously implies a common time base. The NTP Source Address might not persist over time."
                     ],
                     "attrs" : {
                        "xml:id" : "para_852085c5-e683-4675-bc1e-585f902895a5"
                     }
                  },
                  "\n                  "
               ]
            }
         ]
      },
      "(0040,0520)[<0>](0050,0013)" : {
         "entity" : "Image",
         "req" : "3",
         "module" : "Specimen",
         "usage" : "U",
         "name" : "Container Component Thickness",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "desc" : "Thickness in mm of container component"
      },
      "(0020,4000)" : {
         "desc" : "User-defined comments about the image",
         "mod_tables" : [
            "table_C.8.22-3"
         ],
         "name" : "Image Comments",
         "req" : "3",
         "entity" : "Image",
         "usage" : "M",
         "module" : "Enhanced PET Image"
      },
      "(0018,a001)[<0>](0018,1050)" : {
         "name" : "Spatial Resolution",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "entity" : "Image",
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1199)[<2>](0040,a170)" : {
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Purpose of Reference Code Sequence",
         "req" : "3",
         "entity" : "Image",
         "usage" : "M",
         "module" : "Enhanced PET Image"
      },
      "(0018,9170)" : {
         "entity" : "Image",
         "req" : "1C",
         "usage" : "U",
         "module" : "Respiratory Synchronization",
         "name" : "Respiratory Motion Compensation Technique",
         "desc" : [
            "Applied technique to reduce respiratory motion artifacts.",
            {
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
               "title" : "Defined Terms:",
               "type" : "variablelist"
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7.6.18-2"
         ]
      },
      "(0020,9250)" : {
         "req" : "1C",
         "entity" : "Image",
         "usage" : "U",
         "module" : "Respiratory Synchronization",
         "desc" : [
            "Characteristic of the respiratory signal used to the define the respiratory triggering.",
            {
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
               "title" : "Defined Terms:",
               "type" : "variablelist"
            },
            "Required if the value is not TIME, may be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7.6.18-2"
         ],
         "name" : "Respiratory Trigger Type"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0008,1160)" : {
         "usage" : "U",
         "module" : "Specimen",
         "req" : "1C",
         "entity" : "Image",
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
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Referenced Frame Number"
      },
      "(0008,0123)" : {
         "entity" : "Image",
         "req" : "3",
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Context Group Identification Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Sequence of items that map values of Context Identifier (0008,010F) to an external, private or local Context Group.",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,0054)" : {
         "usage" : "M",
         "module" : "Enhanced PET Image",
         "entity" : "Image",
         "req" : "3",
         "name" : "Retrieve AE Title",
         "desc" : "Title of the DICOM Application Entity where the Composite Object(s) may be retrieved on the network.",
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0404)" : {
         "entity" : "Image",
         "req" : "1",
         "usage" : "M",
         "module" : "Enhanced PET Image",
         "name" : "MAC",
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "The MAC generated as described in ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.12.1.1.3"
               },
               "el" : "xref"
            },
            ", but unencrypted and without inclusion of fields from the Digital Signatures Sequence. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.12.1.1.3.1.2"
               }
            },
            "."
         ]
      },
      "(0400,0561)[<0>](0400,0550)" : {
         "name" : "Modified Attributes Sequence",
         "desc" : [
            "Sequence that contains all the Attributes, with their previous values, that were modified or removed from the main data set.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Image",
         "req" : "1"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1155)" : {
         "module" : "Common Instance Reference",
         "usage" : "U",
         "req" : "1",
         "entity" : "Image",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a168)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "name" : "Concept Code Sequence",
         "usage" : "U",
         "module" : "Specimen",
         "req" : "1C",
         "entity" : "Image"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1104)" : {
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
                                 "content" : [
                                    "This attribute may have internal format or structure in accordance with local agreement or profile. In the absence of such agreement or prior formatting, use of ITU-T E.123 is suggested."
                                 ],
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
                                 "el" : "para",
                                 "content" : [
                                    "It is recommended that this attribute be treated as equivalent to HL7v2 (v2.5 or later) field ROL-12, and be formatted in accordance with the HL7v2 XTN data type (without escapes for HL7 message structure reserved characters). See additional notes in the Module invoking this Macro."
                                 ],
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
               ]
            }
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "name" : "Person's Telecom Information",
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "3",
         "entity" : "Image"
      },
      "(0008,0300)[<0>](0008,0305)" : {
         "name" : "Deidentification Action Sequence",
         "desc" : "Actions to be performed on element within the block that are not safe from identify leakage.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0008,0096)" : {
         "module" : "General Study",
         "usage" : "M",
         "entity" : "Study",
         "req" : "3",
         "name" : "Referring Physician Identification Sequence",
         "desc" : [
            "Identification of the patient's referring physician.",
            "Only a single item is permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0008,9121)" : {
         "name" : "Referenced Raw Data Sequence",
         "mod_tables" : [
            "table_C.8.22-3"
         ],
         "desc" : [
            "A sequence that identifies the set of Raw Data SOP Class/Instance pairs of the Raw data that were used to derive this Image.",
            "One or more Items are permitted in this Sequence.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_88702a9e-d88c-487f-abfc-0ac1806bf23e"
                     },
                     "el" : "para",
                     "content" : [
                        "The items of in this Sequence may identify raw data that has not been stored or encoded as a DICOM object. This allows recognition that images and spectra in different instances have been reconstructed from the same raw data. For such items the SOP Class UID would be \"1.2.840.10008.5.1.4.1.1.66\" (Raw Data SOP Class) and the SOP Instance UID would be any appropriate UID."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "usage" : "M",
         "module" : "Enhanced PET Image",
         "entity" : "Image",
         "req" : "3"
      },
      "(0028,0107)" : {
         "req" : "3",
         "entity" : "Image",
         "module" : "Image Pixel",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "desc" : "The maximum actual pixel value encountered in this image.",
         "name" : "Largest Image Pixel Value"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)" : {
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "References to Composite Object SOP Class/SOP Instance pairs that are part of the Study defined by Study Instance UID and the Series defined by Series Instance UID (0020,000E).",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Referenced SOP Sequence",
         "usage" : "M",
         "module" : "Enhanced PET Image",
         "req" : "1",
         "entity" : "Image"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)" : {
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "References to Composite Object SOP Class/SOP Instance pairs that are part of the Study defined by Study Instance UID and the Series defined by Series Instance UID (0020,000E).",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Referenced SOP Sequence",
         "req" : "1",
         "entity" : "Image",
         "module" : "Enhanced PET Image",
         "usage" : "M"
      },
      "(0040,0555)" : {
         "desc" : [
            "A sequence of Items that describes the conditions present during the acquisition of the data of the SOP Instance.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "name" : "Acquisition Context Sequence",
         "module" : "Acquisition Context",
         "usage" : "M",
         "req" : "2",
         "entity" : "Image"
      },
      "(0010,1100)[<0>](0008,1199)" : {
         "module" : "Patient",
         "usage" : "M",
         "req" : "1",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "desc" : [
            "References to object instances.",
            "One or more Items shall be included in this Sequence"
         ],
         "name" : "Referenced SOP Sequence"
      },
      "(0040,0275)[<0>](0008,0050)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "desc" : "An identifier of the Imaging Service Request for this Requested Procedure.",
         "name" : "Accession Number",
         "req" : "3",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series"
      },
      "(0012,0040)" : {
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
         ],
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "entity" : "Patient",
         "req" : "1C",
         "module" : "Clinical Trial Subject",
         "usage" : "U"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a30a)" : {
         "name" : "Numeric Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "entity" : "Series",
         "req" : "1C",
         "module" : "General Series",
         "usage" : "M"
      },
      "(0018,1086)" : {
         "name" : "Skip Beats",
         "desc" : "Number of beats prescribed to be skipped after each detected arrhythmia.",
         "mod_tables" : [
            "table_C.7.6.18-1"
         ],
         "usage" : "U",
         "module" : "Cardiac Synchronization",
         "entity" : "Image",
         "req" : "3"
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
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Strain Nomenclature",
         "req" : "3",
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M"
      },
      "(0020,9172)" : {
         "name" : "Conversion Source Attributes Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "The set of images or other composite SOP Instances that were converted to this instance.",
            "If this instance was converted from a specific frame in the source instance, the reference shall include the Frame Number.",
            "One or more Items shall be included in this Sequence.",
            "Required if this instance was created by conversion, and Conversion Source Attributes Sequence (0020,9172) is not present in an Item of Shared Functional Groups Sequence (5200,9229) or Per-Frame Functional Groups Sequence (5200,9230)."
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "1C"
      },
      "(0008,0110)[<0>](0008,0115)" : {
         "req" : "3",
         "entity" : "Image",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The coding scheme full common name",
         "name" : "Coding Scheme Name"
      },
      "(0008,9154)" : {
         "name" : "Source Image Evidence Sequence",
         "mod_tables" : [
            "table_C.8.22-3"
         ],
         "desc" : [
            [
               "Full set of Composite SOP Instances used as source image SOP Instances inside the frames of this Enhanced PET Image SOP Instance. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.13.2.1.2"
                  }
               },
               " for further explanation."
            ],
            "One or more Items shall be included in this Sequence.",
            "Required if the Source Image Sequence (0008,2112) is present."
         ],
         "module" : "Enhanced PET Image",
         "usage" : "M",
         "entity" : "Image",
         "req" : "1C"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0062,000b)" : {
         "req" : "1C",
         "entity" : "Patient",
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "desc" : "Identifies the Segment Number to which the reference applies. Required if the Referenced SOP Instance is a Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present.",
         "name" : "Referenced Segment Number"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0031)" : {
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1C",
         "name" : "Local Namespace Entity ID",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ]
      },
      "(0008,1062)" : {
         "req" : "3",
         "entity" : "Study",
         "usage" : "M",
         "module" : "General Study",
         "desc" : "Identification of the physician(s) reading the Study. One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Name of Physician(s) Reading Study (0008,1060), if present.",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Physician(s) Reading Study Identification Sequence"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1150)" : {
         "usage" : "M",
         "module" : "Enhanced PET Image",
         "req" : "1",
         "entity" : "Image",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,08ea)" : {
         "usage" : "U",
         "module" : "Specimen",
         "req" : "1C",
         "entity" : "Image",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Measurement Units Code Sequence"
      },
      "(0008,0050)" : {
         "usage" : "M",
         "module" : "General Study",
         "entity" : "Study",
         "req" : "2",
         "name" : "Accession Number",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "A RIS generated number that identifies the order for the Study."
      },
      "(0018,a001)[<0>](0008,0080)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Institution where the equipment that contributed to the composite instance is located.",
         "name" : "Institution Name",
         "req" : "3",
         "entity" : "Image",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0020,9221)" : {
         "req" : "1",
         "entity" : "Image",
         "usage" : "U",
         "module" : "Multi-frame Dimension",
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
         ],
         "name" : "Dimension Organization Sequence"
      },
      "(0008,0110)" : {
         "name" : "Coding Scheme Identification Sequence",
         "desc" : [
            "Sequence of items that map values of Coding Scheme Designator (0008,0102) to an external coding system registration, or to a private or local coding scheme.",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "req" : "3",
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0020,0011)" : {
         "desc" : "A number that identifies this Series.",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Series Number",
         "req" : "2",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M"
      },
      "(0010,1100)[<0>](0040,e022)[<1>](0088,0140)" : {
         "name" : "Storage Media File-Set UID",
         "desc" : "Uniquely identifies the Storage Media on which the referenced instance(s) reside.",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "entity" : "Patient",
         "req" : "1",
         "module" : "Patient",
         "usage" : "M"
      },
      "(0028,2114)" : {
         "module" : "Enhanced PET Image",
         "usage" : "M",
         "entity" : "Image",
         "req" : "1C",
         "name" : "Lossy Image Compression Method",
         "mod_tables" : [
            "table_C.8.22-3"
         ],
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
         ]
      },
      "(0018,0015)" : {
         "desc" : [
            [
               "Text description of the part of the body examined. See ",
               {
                  "attrs" : {
                     "targetptr" : "chapter_L",
                     "xrefstyle" : "template:Annex %n \u201c%t\u201d in PS3.16",
                     "targetdoc" : "PS3.16"
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
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Body Part Examined",
         "req" : "3",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series"
      },
      "(0008,1052)[<0>](0008,0081)" : {
         "req" : "3",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "name" : "Institution Address"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0082)" : {
         "req" : "1C",
         "entity" : "Image",
         "module" : "SOP Common",
         "usage" : "M",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "name" : "Institution Code Sequence"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0062,000b)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "name" : "Referenced Segment Number",
         "usage" : "U",
         "module" : "Specimen",
         "req" : "1C",
         "entity" : "Image"
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
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.22.1.2"
               }
            },
            "."
         ],
         "name" : "Specimen UID",
         "req" : "1",
         "entity" : "Image",
         "usage" : "U",
         "module" : "Specimen"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0404)" : {
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "The MAC generated as described in ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.12.1.1.3"
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
         "name" : "MAC",
         "req" : "1",
         "entity" : "Image",
         "usage" : "M",
         "module" : "Enhanced PET Image"
      },
      "(0038,0010)" : {
         "desc" : "Identifier of the visit as assigned by the healthcare provider",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Admission ID",
         "module" : "Patient Study",
         "usage" : "U",
         "req" : "3",
         "entity" : "Study"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0020,000e)" : {
         "desc" : "Unique identifier of a Series that is part of this Study and contains the referenced Composite Object(s).",
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "name" : "Series Instance UID",
         "module" : "Enhanced PET Image",
         "usage" : "M",
         "req" : "1",
         "entity" : "Image"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,003a)" : {
         "name" : "Assigning Agency or Department Code Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
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
         "module" : "Patient",
         "usage" : "M",
         "entity" : "Patient",
         "req" : "3"
      },
      "(0088,0200)[<0>](0028,1101)" : {
         "usage" : "M",
         "module" : "Enhanced PET Image",
         "entity" : "Image",
         "req" : "1C",
         "name" : "Red Palette Color Lookup Table Descriptor",
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.7-11b"
         ],
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
      "(0008,1111)" : [
         {
            "req" : "3",
            "entity" : "Series",
            "module" : "General Series",
            "usage" : "M",
            "desc" : [
               "Uniquely identifies the Performed Procedure Step SOP Instance to which the Series is related.",
               "Only a single Item is permitted in this Sequence."
            ],
            "mod_tables" : [
               "table_C.7-5a"
            ],
            "name" : "Referenced Performed Procedure Step Sequence"
         },
         {
            "usage" : "M",
            "module" : "Enhanced PET Series",
            "req" : "1C",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.8.22-1"
            ],
            "desc" : [
               "Uniquely identifies the Performed Procedure Step SOP Instance to which the Series is related.",
               "Only a single Item shall be included in this Sequence.",
               "Required if a Performed Procedure Step SOP Class was involved in the creation of this Series."
            ],
            "name" : "Referenced Performed Procedure Step Sequence"
         }
      ],
      "(0008,0300)" : {
         "desc" : "Characteristics of Private Data Elements within the current SOP Instance",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Private Data Element Characteristics Sequence",
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "3",
         "entity" : "Image"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0032)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "desc" : [
            "Universal or unique identifier for the Patient ID Assigning Authority. The authority identified by this attribute shall be the same as that of Issuer of Patient ID (0010,0021), if present.",
            {
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
               ],
               "el" : "note"
            }
         ],
         "name" : "Universal Entity ID",
         "req" : "3",
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,0054)" : {
         "name" : "Retrieve AE Title",
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "Title of the DICOM Application Entity where the Composite Object(s) may be retrieved on the network.",
         "module" : "Enhanced PET Image",
         "usage" : "M",
         "entity" : "Image",
         "req" : "3"
      },
      "(0088,0200)[<0>](0028,0006)" : {
         "req" : "1C",
         "entity" : "Image",
         "module" : "Enhanced PET Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.7-11b"
         ],
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
         "name" : "Planar Configuration"
      },
      "(0010,0026)[<0>](0010,0024)" : {
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "3",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ]
      },
      "(0010,2180)" : {
         "name" : "Occupation",
         "desc" : "Occupation of the Patient.",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "entity" : "Study",
         "req" : "3",
         "usage" : "U",
         "module" : "Patient Study"
      },
      "(0040,0245)" : {
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "req" : "3",
         "name" : "Performed Procedure Step Start Time",
         "desc" : "Time on which the Performed Procedure Step started.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ]
      },
      "(0040,0275)[<0>](0020,000d)" : {
         "entity" : "Series",
         "req" : "3",
         "usage" : "M",
         "module" : "General Series",
         "name" : "Study Instance UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "desc" : "The unique identifier for the Study provided for this Requested Procedure."
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a123)" : {
         "usage" : "U",
         "module" : "Specimen",
         "req" : "1C",
         "entity" : "Image",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Person Name"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0100)" : {
         "name" : "Digital Signature UID",
         "desc" : "The Unique Identifier of a Digital Signature held in the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M",
         "module" : "Enhanced PET Image",
         "entity" : "Image",
         "req" : "1"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a124)" : {
         "req" : "1C",
         "entity" : "Image",
         "module" : "Specimen",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "name" : "UID"
      },
      "(0010,1002)[<0>](0010,0024)" : {
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "req" : "3",
         "entity" : "Patient",
         "usage" : "M",
         "module" : "Patient"
      },
      "(0008,0106)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "1",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Context Group Version"
      },
      "(0010,0024)[<0>](0040,0035)" : {
         "entity" : "Patient",
         "req" : "3",
         "module" : "Patient",
         "usage" : "M",
         "name" : "Identifier Type Code",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0040,0275)[<0>](0040,0007)" : {
         "entity" : "Series",
         "req" : "3",
         "module" : "General Series",
         "usage" : "M",
         "name" : "Scheduled Procedure Step Description",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "desc" : "Institution-generated description or classification of the Scheduled Procedure Step to be performed."
      },
      "(0018,9004)" : [
         {
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
            ],
            "mod_tables" : [
               "table_C.8.22-3"
            ],
            "name" : "Content Qualification",
            "req" : "1",
            "entity" : "Image",
            "usage" : "M",
            "module" : "Enhanced PET Image"
         },
         {
            "name" : "Content Qualification",
            "mod_tables" : [
               "table_C.12-1"
            ],
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
            "usage" : "M",
            "module" : "SOP Common",
            "entity" : "Image",
            "req" : "3"
         }
      ],
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a168)" : {
         "module" : "Specimen",
         "usage" : "U",
         "entity" : "Image",
         "req" : "1C",
         "name" : "Concept Code Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ]
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0020,000e)" : {
         "usage" : "M",
         "module" : "Enhanced PET Image",
         "entity" : "Image",
         "req" : "1",
         "name" : "Series Instance UID",
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "Unique identifier of a Series that is part of this Study and contains the referenced Composite Object(s)."
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)" : {
         "usage" : "M",
         "module" : "Enhanced PET Image",
         "req" : "3",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "Sequence of references to Digital Signatures in the referenced SOP Instance.",
            "One or more Items are permitted in this Sequence.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "The Attributes in this Sequence can be used to detect if the referenced SOP Instance has been altered."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_1bb4c66e-0b5e-4f69-b0f2-4e353dc73212"
                     }
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "name" : "Referenced Digital Signature Sequence"
      },
      "(0040,0275)[<0>](0040,1001)" : {
         "name" : "Requested Procedure ID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
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
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "module" : "General Series"
      },
      "(0010,1100)[<0>](0040,e021)[<1>](0008,0054)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "desc" : "Title of a DICOM Application Entity where the referenced instance(s) may be retrieved on the network.",
         "name" : "Retrieve AE Title",
         "usage" : "M",
         "module" : "Patient",
         "req" : "1",
         "entity" : "Patient"
      },
      "(0010,1100)[<0>](0040,e025)" : {
         "name" : "WADO-RS Retrieval Sequence",
         "desc" : [
            "Details for retrieving instances via WADO-RS.",
            {
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "Retrieval via WADO-URI is addressed in the WADO Retrieval Sequence (0040,E023). Retrieval via  WADO-WS is addressed in the XDS Retrieval Sequence (0040,E024)."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_6afb22cc-92e8-4ec8-9a23-820f4c4a769b"
                     }
                  },
                  "\n              "
               ],
               "el" : "note"
            },
            "Required if DICOM Retrieval Sequence (0040,E021), DICOM Media Retrieval Sequence (0040,E022), WADO Retrieval Sequence (0040,E023) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "entity" : "Patient",
         "req" : "1C",
         "module" : "Patient",
         "usage" : "M"
      },
      "(0008,0051)[<0>](0040,0032)" : {
         "req" : "1C",
         "entity" : "Study",
         "module" : "General Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "name" : "Universal Entity ID"
      },
      "(0018,1050)" : {
         "module" : "General Equipment",
         "usage" : "M",
         "entity" : "Equipment",
         "req" : "3",
         "name" : "Spatial Resolution",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "mod_tables" : [
            "table_C.7-8"
         ]
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0404)" : {
         "entity" : "Image",
         "req" : "1",
         "usage" : "M",
         "module" : "Enhanced PET Image",
         "name" : "MAC",
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "The MAC generated as described in ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.12.1.1.3"
               },
               "el" : "xref"
            },
            ", but unencrypted and without inclusion of fields from the Digital Signatures Sequence. See ",
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
      "(0010,2298)" : {
         "name" : "Responsible Person Role",
         "mod_tables" : [
            "table_C.7-1"
         ],
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
         "usage" : "M",
         "entity" : "Patient",
         "req" : "1C"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "Specimen",
         "usage" : "U",
         "entity" : "Image",
         "req" : "1"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a161)" : {
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Floating Point Value",
         "req" : "1C",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M"
      },
      "(0010,2299)" : {
         "desc" : [
            "Name of organization with medical or welfare decision making authority for the patient.",
            "Required if patient is an animal. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Responsible Organization",
         "module" : "Patient",
         "usage" : "M",
         "req" : "2C",
         "entity" : "Patient"
      },
      "(0008,1049)[<0>](0040,1102)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Person's mailing address",
         "name" : "Person's Address",
         "req" : "3",
         "entity" : "Study",
         "usage" : "M",
         "module" : "General Study"
      },
      "(0020,9311)" : {
         "desc" : [
            "Dimension organization of the instance.",
            {
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
               "title" : "Defined Terms:",
               "type" : "variablelist"
            }
         ],
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "name" : "Dimension Organization Type",
         "module" : "Multi-frame Dimension",
         "usage" : "U",
         "req" : "3",
         "entity" : "Image"
      },
      "(0010,2294)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "Information identifying an animal within a breed registry.",
            "Zero or more Items shall be included in this Sequence.",
            "Required if the patient is an animal."
         ],
         "name" : "Breed Registration Sequence",
         "req" : "2C",
         "entity" : "Patient",
         "usage" : "M",
         "module" : "Patient"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0008,1150)" : {
         "module" : "Specimen",
         "usage" : "U",
         "req" : "1",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID"
      },
      "(0008,0081)" : {
         "module" : "General Equipment",
         "usage" : "M",
         "req" : "3",
         "entity" : "Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "desc" : "Mailing address of the institution where the equipment that produced the composite instances is located.",
         "name" : "Institution Address"
      },
      "(0008,0096)[<0>](0008,0082)" : {
         "name" : "Institution Code Sequence",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "M",
         "module" : "General Study",
         "entity" : "Study",
         "req" : "1C"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0088,0140)" : {
         "module" : "Enhanced PET Image",
         "usage" : "M",
         "entity" : "Image",
         "req" : "3",
         "name" : "Storage Media File-Set UID",
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "Uniquely identifies the Storage Media on which the Composite Object(s) reside."
      },
      "(0010,0026)[<0>](0010,0020)" : {
         "name" : "Patient ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "desc" : "Primary identifier for the group of subjects.",
         "entity" : "Patient",
         "req" : "1",
         "usage" : "M",
         "module" : "Patient"
      },
      "(0008,1090)" : [
         {
            "entity" : "Equipment",
            "req" : "3",
            "usage" : "M",
            "module" : "General Equipment",
            "name" : "Manufacturer's Model Name",
            "desc" : "Manufacturer's model name of the equipment that produced the composite instances.",
            "mod_tables" : [
               "table_C.7-8"
            ]
         },
         {
            "usage" : "U",
            "module" : "Enhanced General Equipment",
            "entity" : "Equipment",
            "req" : "1",
            "name" : "Manufacturer's Model Name",
            "mod_tables" : [
               "table_C.7-8b"
            ],
            "desc" : "Manufacturer's model name of the equipment that produced the composite instances."
         }
      ],
      "(0008,0105)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "1",
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
         ],
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0088,0200)[<0>](0028,0102)" : {
         "entity" : "Image",
         "req" : "1",
         "usage" : "M",
         "module" : "Enhanced PET Image",
         "name" : "High Bit",
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.7-11b"
         ],
         "desc" : [
            "Most significant bit for pixel sample data. Each sample shall have the same high bit. High Bit (0028,0102) shall be one less than Bits Stored (0028,0101). See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: labelnumber",
                  "targetptr" : "PS3.5",
                  "targetdoc" : "PS3.5"
               },
               "el" : "olink"
            },
            " for further explanation."
         ]
      },
      "(0010,0024)[<0>](0040,0033)" : {
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
                     "attrs" : {
                        "xml:id" : "para_cdc31146-8c35-4426-8c4c-509f0256519d"
                     },
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
         "name" : "Universal Entity ID Type",
         "req" : "1C",
         "entity" : "Patient",
         "usage" : "M",
         "module" : "Patient"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0120)" : {
         "name" : "Signature",
         "desc" : "The Signature Value identified by the Digital Signature UID within the Referenced SOP Instance UID.",
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M",
         "module" : "Enhanced PET Image",
         "entity" : "Image",
         "req" : "1"
      },
      "(0018,a001)[<0>](0008,0070)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Manufacturer of the equipment that contributed to the composite instance.",
         "name" : "Manufacturer",
         "req" : "1",
         "entity" : "Image",
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a121)" : {
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1C",
         "name" : "Date",
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
      "(0028,2000)" : {
         "req" : "3",
         "entity" : "Image",
         "module" : "Image Pixel",
         "usage" : "M",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_d69f5d22-89f7-4927-ba3e-806a769850dc"
                     }
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "name" : "ICC Profile"
      },
      "(0018,1081)" : {
         "name" : "Low R-R Value",
         "mod_tables" : [
            "table_C.7.6.18-1"
         ],
         "desc" : [
            "R-R interval low limit for beat rejection, in ms.",
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and Cardiac Synchronization Technique (0018,9037) equals PROSPECTIVE or RETROSPECTIVE.",
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and Cardiac Synchronization Technique (0018,9037) equals PROSPECTIVE or RETROSPECTIVE."
         ],
         "usage" : "U",
         "module" : "Cardiac Synchronization",
         "entity" : "Image",
         "req" : "2C"
      },
      "(0028,0103)" : {
         "mod_tables" : [
            "table_C.7-11b"
         ],
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
         "req" : "1",
         "entity" : "Image",
         "module" : "Image Pixel",
         "usage" : "M"
      },
      "(0400,0561)[<0>](0400,0562)" : {
         "entity" : "Image",
         "req" : "1",
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Attribute Modification DateTime",
         "desc" : "Date and time the attributes were removed and/or replaced.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1150)" : {
         "module" : "Enhanced PET Image",
         "usage" : "M",
         "entity" : "Image",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0008,0016)" : {
         "entity" : "Image",
         "req" : "1",
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "SOP Class UID",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
               "el" : "olink",
               "attrs" : {
                  "targetptr" : "PS3.4",
                  "xrefstyle" : "select: labelnumber",
                  "targetdoc" : "PS3.4"
               }
            },
            "."
         ]
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0040,e011)" : {
         "name" : "Retrieve Location UID",
         "desc" : "Unique identifier of the system where the Composite Object(s) may be retrieved on the network.",
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "entity" : "Image",
         "req" : "3",
         "module" : "Enhanced PET Image",
         "usage" : "M"
      },
      "(fffa,fffa)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "3",
         "name" : "Digital Signatures Sequence",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : [
            "Sequence holding Digital Signatures.",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0010,4000)" : {
         "desc" : "User-defined additional information about the patient.",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient Comments",
         "module" : "Patient",
         "usage" : "M",
         "req" : "3",
         "entity" : "Patient"
      },
      "(0018,9070)" : {
         "req" : "1C",
         "entity" : "Image",
         "usage" : "U",
         "module" : "Cardiac Synchronization",
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
                     "attrs" : {
                        "xml:id" : "para_d7ca2bf8-8847-414d-ae35-6145b3c61f88"
                     },
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
         "name" : "Cardiac RR Interval Specified"
      },
      "(0008,9205)" : {
         "module" : "Enhanced PET Image",
         "usage" : "M",
         "entity" : "Image",
         "req" : "1",
         "name" : "Pixel Presentation",
         "desc" : [
            "Indication of the presence or absence of color information that may be used during rendering. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.16.2.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for a description and Enumerated Values."
         ],
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.8-131"
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a161)" : {
         "module" : "Specimen",
         "usage" : "U",
         "req" : "1C",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "name" : "Floating Point Value"
      },
      "(0020,9222)[<0>](0020,9421)" : {
         "name" : "Dimension Description Label",
         "desc" : "Free text description that explains the meaning of the dimension.",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "usage" : "U",
         "module" : "Multi-frame Dimension",
         "entity" : "Image",
         "req" : "3"
      },
      "(fffa,fffa)[<0>](0400,0401)" : {
         "req" : "3",
         "entity" : "Image",
         "module" : "SOP Common",
         "usage" : "M",
         "desc" : [
            "The purpose of this Digital Signature.",
            "Only a single Item is permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Digital Signature Purpose Code Sequence"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a120)" : {
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "req" : "1C",
         "name" : "DateTime",
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
      "(0040,0555)[<0>](0040,a121)" : {
         "usage" : "M",
         "module" : "Acquisition Context",
         "entity" : "Image",
         "req" : "1C",
         "name" : "Date",
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
         "mod_tables" : [
            "table_C.7.6.14-1"
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,08ea)" : {
         "name" : "Measurement Units Code Sequence",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "usage" : "U",
         "entity" : "Image",
         "req" : "1C"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a163)" : {
         "name" : "Rational Denominator Value",
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
         "usage" : "U"
      },
      "(0008,1115)" : {
         "mod_tables" : [
            "table_C.12-8"
         ],
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this Sequence.",
            "Required if this Instance references Instances in this Study."
         ],
         "name" : "Referenced Series Sequence",
         "usage" : "U",
         "module" : "Common Instance Reference",
         "req" : "1C",
         "entity" : "Image"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1101)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "1",
         "entity" : "Image",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "name" : "Person Identification Code Sequence"
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-11"
         ],
         "entity" : "Series",
         "req" : "1",
         "module" : "General Series",
         "usage" : "M"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0088,0140)" : {
         "usage" : "M",
         "module" : "Enhanced PET Image",
         "req" : "3",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "Uniquely identifies the Storage Media on which the Composite Object(s) reside.",
         "name" : "Storage Media File-Set UID"
      },
      "(0018,0036)[<0>](0018,0035)" : {
         "module" : "Intervention",
         "usage" : "U",
         "req" : "3",
         "entity" : "Image",
         "desc" : "Time of administration of the interventional drug.",
         "mod_tables" : [
            "table_C.7-19"
         ],
         "name" : "Intervention Drug Start Time"
      },
      "(0008,1164)" : {
         "entity" : "Image",
         "req" : "1",
         "module" : "Frame Extraction",
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "name" : "Frame Extraction Sequence",
         "mod_tables" : [
            "table_C.12-9"
         ],
         "desc" : [
            "Sequence containing details of how this SOP Instance was extracted from a source multi-frame SOP Instance.",
            "If this instance was created from an instance that contains a Frame Extraction Sequence, then this sequence shall contain all of the items from the parent's Frame Extraction Sequence and a new item that describes this extraction.",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a163)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "name" : "Rational Denominator Value",
         "module" : "General Series",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series"
      },
      "(0028,1103)" : {
         "mod_tables" : [
            "table_C.7-11b"
         ],
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
         "name" : "Blue Palette Color Lookup Table Descriptor",
         "req" : "1C",
         "entity" : "Image",
         "usage" : "M",
         "module" : "Image Pixel"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0088,0130)" : {
         "req" : "3",
         "entity" : "Image",
         "usage" : "M",
         "module" : "Enhanced PET Image",
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the Composite Object (s) reside.",
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "name" : "Storage Media File-Set ID"
      },
      "(0012,0051)" : {
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "desc" : [
            "A description of a set of one or more studies that are grouped together to represent a clinical time point or submission in a clinical trial or research. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.2.3.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "name" : "Clinical Trial Time Point Description",
         "req" : "3",
         "entity" : "Study",
         "module" : "Clinical Trial Study",
         "usage" : "U"
      },
      "(0008,1052)" : {
         "desc" : [
            "Identification of the physician(s) administering the Series.",
            "One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Performing Physician's Name (0008,1050), if present."
         ],
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Performing Physician Identification Sequence",
         "module" : "General Series",
         "usage" : "M",
         "req" : "3",
         "entity" : "Series"
      },
      "(0008,1115)[<0>](0020,000e)" : {
         "name" : "Series Instance UID",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "desc" : "Unique identifier of the Series containing the referenced Instances.",
         "module" : "Common Instance Reference",
         "usage" : "U",
         "entity" : "Image",
         "req" : "1"
      },
      "(0010,1020)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Length or size of the Patient, in meters.",
         "name" : "Patient's Size",
         "usage" : "U",
         "module" : "Patient Study",
         "req" : "3",
         "entity" : "Study"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1199)" : {
         "desc" : [
            "References to Composite Object SOP Class/SOP Instance pairs that are part of the Study defined by Study Instance UID and the Series defined by Series Instance UID (0020,000E).",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "name" : "Referenced SOP Sequence",
         "usage" : "M",
         "module" : "Enhanced PET Image",
         "req" : "1",
         "entity" : "Image"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0040,a170)" : {
         "name" : "Purpose of Reference Code Sequence",
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "entity" : "Image",
         "req" : "3",
         "usage" : "M",
         "module" : "Enhanced PET Image"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1190)" : {
         "usage" : "M",
         "module" : "Enhanced PET Image",
         "req" : "3",
         "entity" : "Image",
         "desc" : "URL specifying the location of the referenced instance(s).",
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "name" : "Retrieve URL"
      },
      "(0088,0200)[<0>](0028,0106)" : {
         "entity" : "Image",
         "req" : "3",
         "module" : "Enhanced PET Image",
         "usage" : "M",
         "name" : "Smallest Image Pixel Value",
         "desc" : "The minimum actual pixel value encountered in this image.",
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.7-11b"
         ]
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0120)" : {
         "name" : "Signature",
         "desc" : "The Signature Value identified by the Digital Signature UID within the Referenced SOP Instance UID.",
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Enhanced PET Image",
         "usage" : "M",
         "entity" : "Image",
         "req" : "1"
      },
      "(0008,0030)" : {
         "name" : "Study Time",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "Time the Study started.",
         "usage" : "M",
         "module" : "General Study",
         "entity" : "Study",
         "req" : "2"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)" : {
         "req" : "1",
         "entity" : "Image",
         "module" : "Common Instance Reference",
         "usage" : "U",
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "name" : "Referenced Instance Sequence"
      },
      "(0088,0200)[<0>](0028,1201)" : {
         "name" : "Red Palette Color Lookup Table Data",
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.7-11b"
         ],
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
         "entity" : "Image",
         "req" : "1C",
         "module" : "Enhanced PET Image",
         "usage" : "M"
      },
      "(0038,0060)" : {
         "req" : "3",
         "entity" : "Study",
         "module" : "Patient Study",
         "usage" : "U",
         "desc" : "Identifier of the Service Episode as assigned by the healthcare provider",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Service Episode ID"
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
               ]
            }
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "name" : "Person's Telecom Information",
         "req" : "3",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1150)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M"
      },
      "(0010,0024)[<0>](0040,0036)" : {
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
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 6 (Assigning Facility)."
                     ],
                     "attrs" : {
                        "xml:id" : "para_6a16f809-6605-41ac-8d02-b6104b0bc0ad"
                     }
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "name" : "Assigning Facility Sequence",
         "req" : "3",
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M"
      },
      "(0400,0561)[<0>](0400,0563)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "1",
         "entity" : "Image",
         "desc" : "Identification of the system that removed and/or replaced the attributes.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Modifying System"
      },
      "(0040,0555)[<0>](0040,a040)" : {
         "entity" : "Image",
         "req" : "3",
         "module" : "Acquisition Context",
         "usage" : "M",
         "name" : "Value Type",
         "desc" : [
            "The type of the value encoded in this Item.",
            {
               "type" : "variablelist",
               "title" : "Defined Terms:",
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
                  "attrs" : {
                     "linkend" : "sect_10.2",
                     "xrefstyle" : "select: label"
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
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.22.1.2"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "If a single specimen is present in a container, the value of the Specimen Identifier and the value of the Container Identifier are typically the same."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Specimen Identifier",
         "module" : "Specimen",
         "usage" : "U",
         "req" : "1",
         "entity" : "Image"
      },
      "(0100,0424)" : {
         "desc" : "Any comments associated with the setting of the SOP Instance Status (0100,0410) to AO.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "SOP Authorization Comment",
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "3",
         "entity" : "Image"
      },
      "(0038,0014)[<0>](0040,0031)" : {
         "usage" : "U",
         "module" : "Patient Study",
         "req" : "1C",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "name" : "Local Namespace Entity ID"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "entity" : "Patient",
         "req" : "1C",
         "usage" : "M",
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
      "(2050,0020)" : {
         "desc" : [
            "Specifies an identity transformation for the Presentation LUT, such that the output of all grayscale transformations defined in the IOD containing this Module are defined to be P-Values.",
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "IDENTITY",
                     "output is in P-Values."
                  ]
               ],
               "type" : "variablelist"
            }
         ],
         "mod_tables" : [
            "table_C.8.22-3"
         ],
         "name" : "Presentation LUT Shape",
         "module" : "Enhanced PET Image",
         "usage" : "M",
         "req" : "1",
         "entity" : "Image"
      },
      "(0028,2002)" : {
         "req" : "3",
         "entity" : "Image",
         "usage" : "M",
         "module" : "Image Pixel",
         "mod_tables" : [
            "table_C.7-11b"
         ],
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
         "name" : "Color Space"
      },
      "(0008,1120)[<0>](0008,1150)" : {
         "entity" : "Patient",
         "req" : "1",
         "usage" : "M",
         "module" : "Patient",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)" : {
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "module" : "General Series",
         "name" : "Referenced SOP Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ]
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1150)" : {
         "module" : "Enhanced PET Image",
         "usage" : "M",
         "req" : "1",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0020,000e)" : {
         "module" : "Enhanced PET Image",
         "usage" : "M",
         "entity" : "Image",
         "req" : "1",
         "name" : "Series Instance UID",
         "desc" : "Unique identifier of a Series that is part of this Study and contains the referenced Composite Object(s).",
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      " (0010,0027) [<0>](0010,0020)" : {
         "name" : "Patient ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "desc" : "Primary identifier for an individual subject.",
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "1"
      },
      "(0040,0253)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "desc" : "User or equipment generated identifier of that part of a Procedure that has been carried out within this step.",
         "name" : "Performed Procedure Step ID",
         "req" : "3",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series"
      },
      "(0040,0244)" : {
         "desc" : "Date on which the Performed Procedure Step started.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "name" : "Performed Procedure Step Start Date",
         "req" : "3",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M"
      },
      "(0010,2160)" : {
         "module" : "Patient",
         "usage" : "M",
         "entity" : "Patient",
         "req" : "3",
         "name" : "Ethnic Group",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "Ethnic group or race of the patient."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a122)" : {
         "req" : "1C",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Time"
      },
      "(0012,0082)" : {
         "name" : "Clinical Trial Protocol Ethics Committee Approval Number",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "desc" : "Approval number issued by committee described in Clinical Trial Protocol Ethics Committee Name (0012,0081).",
         "module" : "Clinical Trial Subject",
         "usage" : "U",
         "entity" : "Patient",
         "req" : "3"
      },
      "(0028,1201)" : {
         "module" : "Image Pixel",
         "usage" : "M",
         "entity" : "Image",
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
         "mod_tables" : [
            "table_C.7-11b"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1160)" : {
         "req" : "1C",
         "entity" : "Series",
         "module" : "General Series",
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
         "name" : "Referenced Frame Number"
      },
      "(0010,1100)[<0>](0040,e020)" : {
         "entity" : "Patient",
         "req" : "1",
         "module" : "Patient",
         "usage" : "M",
         "name" : "Type of Instances",
         "desc" : [
            "Type of object instances referenced.",
            {
               "type" : "variablelist",
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
               "title" : "Defined Terms:"
            }
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ]
      },
      "(0038,0014)[<0>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7-4a",
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
         "entity" : "Study",
         "req" : "1C",
         "usage" : "U",
         "module" : "Patient Study"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1155)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a160)" : {
         "name" : "Text Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "module" : "General Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)" : {
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "req" : "3",
         "name" : "Content Item Modifier Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
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
         ]
      },
      "(0010,0026)[<0>](0010,0021)" : {
         "name" : "Issuer of Patient ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
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
         "module" : "Patient",
         "usage" : "M",
         "entity" : "Patient",
         "req" : "3"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0100)" : {
         "usage" : "M",
         "module" : "Enhanced PET Image",
         "req" : "1",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "The Unique Identifier of a Digital Signature held in the referenced SOP Instance.",
         "name" : "Digital Signature UID"
      },
      "(0018,a001)[<0>](0018,1201)" : {
         "entity" : "Image",
         "req" : "3",
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Time of Last Calibration",
         "mod_tables" : [
            "table_C.12-1"
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
         ]
      },
      " (0010,0027) " : {
         "name" : "Group of Patients Identification Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "desc" : [
            [
               "A sequence containing the identifiers and locations of the individual subjects whose data was acquired at the same time (as a group) and encoded in this composite instance. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.1.4.1.1"
                  }
               },
               "."
            ],
            "One or more Items are permitted in this sequence."
         ],
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "\n                  3 "
      },
      "(0040,0520)[<0>](0050,0012)" : {
         "req" : "1",
         "entity" : "Image",
         "module" : "Specimen",
         "usage" : "U",
         "desc" : [
            "Type of container component.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Container Component Type Code Sequence"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0033)" : {
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
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "req" : "1C",
         "module" : "Patient",
         "usage" : "M"
      },
      "(0008,1052)[<0>](0040,1102)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "desc" : "Person's mailing address",
         "name" : "Person's Address",
         "req" : "3",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M"
      },
      "(0008,1062)[<0>](0008,0082)" : {
         "module" : "General Study",
         "usage" : "M",
         "entity" : "Study",
         "req" : "1C",
         "name" : "Institution Code Sequence",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0012,0030)" : {
         "name" : "Clinical Trial Site ID",
         "desc" : [
            "The identifier of the site responsible for submitting clinical trial or research data. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.1.3.1.4",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "entity" : "Patient",
         "req" : "2",
         "usage" : "U",
         "module" : "Clinical Trial Subject"
      },
      "(0040,0513)[<0>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
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
         "entity" : "Image",
         "req" : "1C",
         "usage" : "U",
         "module" : "Specimen"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0033)" : {
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
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1C"
      },
      "(0010,1002)" : {
         "module" : "Patient",
         "usage" : "M",
         "req" : "3",
         "entity" : "Patient",
         "desc" : [
            "A sequence of identification numbers or codes used to identify the patient, which may or may not be human readable, and may or may not have been obtained from an implanted or attached device such as an RFID or barcode.",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Other Patient IDs Sequence"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0035)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
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
         "name" : "Identifier Type Code",
         "module" : "Patient",
         "usage" : "M",
         "req" : "3",
         "entity" : "Patient"
      },
      "(0018,a001)[<0>](0018,1000)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "3",
         "entity" : "Image",
         "desc" : "Manufacturer's serial number of the equipment that contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Device Serial Number"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a162)" : {
         "usage" : "M",
         "module" : "General Series",
         "req" : "1C",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "name" : "Rational Numerator Value"
      },
      "(0020,9172)[<0>](0062,000b)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "name" : "Referenced Segment Number",
         "req" : "1C",
         "entity" : "Image",
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0088,0130)" : {
         "name" : "Storage Media File-Set ID",
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the Composite Object (s) reside.",
         "module" : "Enhanced PET Image",
         "usage" : "M",
         "entity" : "Image",
         "req" : "3"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a043)" : {
         "module" : "Specimen",
         "usage" : "U",
         "req" : "1",
         "entity" : "Image",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Concept Name Code Sequence"
      },
      "(0008,1110)[<0>](0008,1150)" : {
         "usage" : "M",
         "module" : "General Study",
         "req" : "1",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID"
      },
      "(0010,0024)" : {
         "usage" : "M",
         "module" : "Patient",
         "req" : "3",
         "entity" : "Patient",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Issuer of Patient ID Qualifiers Sequence"
      },
      "(0020,9222)[<0>](0020,9164)" : {
         "usage" : "U",
         "module" : "Multi-frame Dimension",
         "entity" : "Image",
         "req" : "1C",
         "name" : "Dimension Organization UID",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "desc" : [
            [
               "Uniquely identifies a set of dimensions referenced within the containing SOP Instance. In particular the dimension described by this sequence item is associated with this Dimension Organization UID. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.17.2",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ],
            "Required if the value of Dimension Organization Sequence (0020,9221) contains Items"
         ]
      },
      "(0008,0020)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "Date the Study started.",
         "name" : "Study Date",
         "req" : "2",
         "entity" : "Study",
         "module" : "General Study",
         "usage" : "M"
      },
      "(0008,0005)" : {
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
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "1C",
         "entity" : "Image"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0100)" : {
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "The Unique Identifier of a Digital Signature held in the referenced SOP Instance.",
         "name" : "Digital Signature UID",
         "req" : "1",
         "entity" : "Image",
         "module" : "Enhanced PET Image",
         "usage" : "M"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0120)" : {
         "name" : "Signature",
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "The Signature Value identified by the Digital Signature UID within the Referenced SOP Instance UID.",
         "usage" : "M",
         "module" : "Enhanced PET Image",
         "entity" : "Image",
         "req" : "1"
      },
      "(fffa,fffa)[<0>](0400,0120)" : {
         "req" : "1",
         "entity" : "Image",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
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
         ],
         "name" : "Signature"
      },
      "(0040,0260)" : {
         "name" : "Performed Protocol Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "desc" : "Sequence describing the Protocol performed for this Procedure Step. One or more Items are permitted in this Sequence.",
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "req" : "3"
      },
      "(0040,0515)[<0>](0040,0513)[<1>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "Image",
         "req" : "1C",
         "module" : "Specimen",
         "usage" : "U"
      },
      "(fffa,fffa)[<0>](0400,0110)" : {
         "entity" : "Image",
         "req" : "1",
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Certificate Type",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
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
               ],
               "el" : "note"
            }
         ]
      },
      "(0040,0560)[<0>](0040,0602)" : {
         "entity" : "Image",
         "req" : "3",
         "module" : "Specimen",
         "usage" : "U",
         "name" : "Specimen Detailed Description",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "desc" : "Detailed textual specimen description (may include ancestor specimen descriptions)."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1150)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series"
      },
      "(0040,0275)[<0>](0008,1110)" : {
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "req" : "3",
         "name" : "Referenced Study Sequence",
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
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,08ea)" : {
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "req" : "1C",
         "name" : "Measurement Units Code Sequence",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0040,a170)" : {
         "entity" : "Image",
         "req" : "3",
         "usage" : "M",
         "module" : "Enhanced PET Image",
         "name" : "Purpose of Reference Code Sequence",
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a040)" : {
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
         "name" : "Value Type",
         "usage" : "U",
         "module" : "Specimen",
         "req" : "1",
         "entity" : "Image"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0035)" : {
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
         "name" : "Identifier Type Code",
         "req" : "3",
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M"
      },
      "(0040,0560)" : {
         "desc" : [
            "Sequence of identifiers and detailed description of the specimen(s) being imaged.",
            "One or more Items shall be included in this Sequence.",
            "Each specimen imaged in the Pixel Data shall be identified by an Item in this Sequence. Other specimens in/on the container, but not imaged in the Pixel Data, may also be identified by Items in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Specimen Description Sequence",
         "req" : "1",
         "entity" : "Image",
         "usage" : "U",
         "module" : "Specimen"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a121)" : {
         "usage" : "M",
         "module" : "General Series",
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Date"
      },
      "(0012,0081)" : {
         "name" : "Clinical Trial Protocol Ethics Committee Name",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "desc" : "Name of the Ethics Committee or Institutional Review Board (IRB) or Institutional Animal Care and Use Committees (IACUC) responsible for approval of the Clinical Trial or research. Required if Clinical Trial Protocol Ethics Committee Approval Number (0012,0082) is present.",
         "entity" : "Patient",
         "req" : "1C",
         "usage" : "U",
         "module" : "Clinical Trial Subject"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a121)" : {
         "name" : "Date",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "usage" : "U",
         "module" : "Specimen",
         "entity" : "Image",
         "req" : "1C"
      },
      "(0008,1111)[<0>](0008,1155)" : [
         {
            "module" : "General Series",
            "usage" : "M",
            "req" : "1",
            "entity" : "Series",
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-11"
            ],
            "name" : "Referenced SOP Instance UID"
         },
         {
            "name" : "Referenced SOP Instance UID",
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "mod_tables" : [
               "table_C.8.22-1",
               "table_10-11"
            ],
            "module" : "Enhanced PET Series",
            "usage" : "M",
            "entity" : "Series",
            "req" : "1"
         }
      ],
      "(0018,0036)[<0>](0018,003a)" : {
         "name" : "Intervention Description",
         "desc" : "Further description in free form text describing the therapy or other intervention.",
         "mod_tables" : [
            "table_C.7-19"
         ],
         "usage" : "U",
         "module" : "Intervention",
         "entity" : "Image",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a163)" : {
         "entity" : "Series",
         "req" : "1C",
         "module" : "General Series",
         "usage" : "M",
         "name" : "Rational Denominator Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ]
      },
      "(0010,1100)[<0>](0040,e023)[<1>](0040,e010)" : {
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
                     "el" : "para",
                     "content" : [
                        "The VR of this attribute has changed from UT to UR."
                     ],
                     "attrs" : {
                        "xml:id" : "para_579dc3f3-c3f6-407b-b4bc-d6197e7cc820"
                     }
                  },
                  "\n"
               ]
            }
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "Retrieve URI",
         "req" : "1",
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a040)" : {
         "usage" : "M",
         "module" : "General Series",
         "req" : "1",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
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
         "name" : "Value Type"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0040,e011)" : {
         "req" : "3",
         "entity" : "Image",
         "usage" : "M",
         "module" : "Enhanced PET Image",
         "desc" : "Unique identifier of the system where the Composite Object(s) may be retrieved on the network.",
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "name" : "Retrieve Location UID"
      },
      "(0008,1052)[<0>](0008,0080)" : {
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "name" : "Institution Name",
         "usage" : "M",
         "module" : "General Series",
         "req" : "1C",
         "entity" : "Series"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)" : {
         "module" : "Enhanced PET Image",
         "usage" : "M",
         "req" : "3",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "A MAC Calculation from data in the referenced SOP Instance that can be used as a data integrity check.",
            "Only a single Item is permitted in this Sequence.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_85131baf-ebaa-41ca-b044-07c75698df97"
                     },
                     "el" : "para",
                     "content" : [
                        "This Attribute may be used in place of Referenced Digital Signature Sequence (0400,0402), particularly if the SOP Instance does not have appropriate Digital Signatures that can be referenced."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "name" : "Referenced SOP Instance MAC Sequence"
      },
      "(0008,9092)[<0>](0008,1115)" : {
         "name" : "Referenced Series Sequence",
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3"
         ],
         "desc" : [
            "Sequence of Items where each Item includes the Attributes of a Series containing referenced Composite Object(s).",
            "One or more Items shall be included in this Sequence"
         ],
         "entity" : "Image",
         "req" : "1",
         "usage" : "M",
         "module" : "Enhanced PET Image"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0062,000b)" : {
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Referenced Segment Number",
         "req" : "1C",
         "entity" : "Image",
         "usage" : "U",
         "module" : "Specimen"
      },
      "(0008,1120)" : {
         "usage" : "M",
         "module" : "Patient",
         "req" : "3",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "A sequence that provides reference to a Patient SOP Class/Instance pair.",
            "Only a single Item is permitted in this Sequence."
         ],
         "name" : "Referenced Patient Sequence"
      },
      " (0010,0027) [<0>](0010,0024)" : {
         "usage" : "M",
         "module" : "Patient",
         "req" : "3",
         "entity" : "Patient",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "name" : "Issuer of Patient ID Qualifiers Sequence"
      },
      "(0038,0062)" : {
         "entity" : "Study",
         "req" : "3",
         "module" : "Patient Study",
         "usage" : "U",
         "name" : "Service Episode Description",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Description of the type of service episode."
      },
      "(0040,0555)[<0>](0040,a043)" : {
         "module" : "Acquisition Context",
         "usage" : "M",
         "entity" : "Image",
         "req" : "1",
         "name" : "Concept Name Code Sequence",
         "desc" : [
            "A concept that constrains the meaning of (i.e., defines the role of) the Observation Value. The \"Name\" component of a Name/Value pair.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7.6.14-1"
         ]
      },
      "(0010,1021)" : {
         "name" : "Patient's Size Code Sequence",
         "desc" : [
            "Patient's size category code",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "entity" : "Study",
         "req" : "3",
         "module" : "Patient Study",
         "usage" : "U"
      },
      "(0040,0555)[<0>](0040,a123)" : {
         "usage" : "M",
         "module" : "Acquisition Context",
         "req" : "1C",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a Person Name.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "The role of the person could be specified in Concept Name Code Sequence (0040,A043)."
                     ],
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
         "name" : "Person Name"
      },
      "(0010,1100)[<0>](0040,e024)" : {
         "usage" : "M",
         "module" : "Patient",
         "req" : "1C",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
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
         "name" : "XDS Retrieval Sequence"
      },
      "(0010,2210)" : {
         "name" : "Anatomical Orientation Type",
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
                     "linkend" : "sect_C.7.6.1.1.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
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
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "req" : "1C"
      },
      "(0088,0200)[<0>](0028,2000)" : {
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.7-11b"
         ],
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
                     "el" : "para",
                     "content" : [
                        "The profile applies only to Pixel Data (7FE0,0010) at the same level of the Data Set and not to any icons nested within sequences, which may or may not have their own ICC profile specified."
                     ],
                     "attrs" : {
                        "xml:id" : "para_d69f5d22-89f7-4927-ba3e-806a769850dc"
                     }
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "name" : "ICC Profile",
         "module" : "Enhanced PET Image",
         "usage" : "M",
         "req" : "3",
         "entity" : "Image"
      },
      "(0088,0200)[<0>](0028,0034)" : {
         "usage" : "M",
         "module" : "Enhanced PET Image",
         "entity" : "Image",
         "req" : "1C",
         "name" : "Pixel Aspect Ratio",
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
            "table_C.8.22-3",
            "table_C.7-11b"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a168)" : {
         "name" : "Concept Code Sequence",
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
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1160)" : {
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
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Referenced Frame Number",
         "req" : "1C",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0032)" : {
         "req" : "1C",
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "name" : "Universal Entity ID"
      },
      "(0020,000d)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "Unique identifier for the Study.",
         "name" : "Study Instance UID",
         "req" : "1",
         "entity" : "Study",
         "module" : "General Study",
         "usage" : "M"
      },
      "(0008,0031)" : {
         "entity" : "Series",
         "req" : "3",
         "module" : "General Series",
         "usage" : "M",
         "name" : "Series Time",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : "Time the Series started."
      },
      "(0008,0096)[<0>](0040,1104)" : {
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
                                 "el" : "para",
                                 "content" : [
                                    "This attribute may have internal format or structure in accordance with local agreement or profile. In the absence of such agreement or prior formatting, use of ITU-T E.123 is suggested."
                                 ],
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
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person's Telecom Information",
         "usage" : "M",
         "module" : "General Study",
         "req" : "3",
         "entity" : "Study"
      },
      "(0018,1200)" : {
         "entity" : "Equipment",
         "req" : "3",
         "module" : "General Equipment",
         "usage" : "M",
         "name" : "Date of Last Calibration",
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
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a043)" : {
         "name" : "Concept Name Code Sequence",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "req" : "1",
         "module" : "General Series",
         "usage" : "M"
      },
      "(0018,106c)" : {
         "entity" : "Frame of Reference",
         "req" : "1C",
         "module" : "Synchronization",
         "usage" : "U",
         "name" : "Synchronization Channel",
         "desc" : [
            [
               "Identifier of waveform channel that records the synchronization channel or trigger, see ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.4.2.1.3"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Required if synchronization channel or trigger is encoded in a waveform in this SOP Instance"
         ],
         "mod_tables" : [
            "table_C.7-7"
         ]
      },
      "(0008,9206)" : {
         "desc" : [
            "Indication if geometric manipulations are possible with frames in the SOP Instance. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.16.2.1.2"
               },
               "el" : "xref"
            },
            " for a description and Enumerated Values."
         ],
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.8-131"
         ],
         "name" : "Volumetric Properties",
         "usage" : "M",
         "module" : "Enhanced PET Image",
         "req" : "1",
         "entity" : "Image"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)" : {
         "module" : "Enhanced PET Image",
         "usage" : "M",
         "entity" : "Image",
         "req" : "3",
         "name" : "Referenced SOP Instance MAC Sequence",
         "desc" : [
            "A MAC Calculation from data in the referenced SOP Instance that can be used as a data integrity check.",
            "Only a single Item is permitted in this Sequence.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_85131baf-ebaa-41ca-b044-07c75698df97"
                     },
                     "el" : "para",
                     "content" : [
                        "This Attribute may be used in place of Referenced Digital Signature Sequence (0400,0402), particularly if the SOP Instance does not have appropriate Digital Signatures that can be referenced."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0040,0520)" : {
         "module" : "Specimen",
         "usage" : "U",
         "req" : "3",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "desc" : [
            "Description of one or more components of the container (e.g., description of the slide and of the coverslip).",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Container Component Sequence"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a161)" : {
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "module" : "General Series",
         "name" : "Floating Point Value",
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
      "(0008,1049)[<0>](0008,0080)" : {
         "req" : "1C",
         "entity" : "Study",
         "module" : "General Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "name" : "Institution Name"
      },
      "(0040,0515)[<0>](0040,0513)" : {
         "name" : "Issuer of the Container Identifier Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "desc" : [
            "Organization that assigned the Container Identifier.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "entity" : "Image",
         "req" : "2",
         "usage" : "U",
         "module" : "Specimen"
      },
      "(4ffe,0001)[<0>](0400,0010)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "1",
         "entity" : "Image",
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
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "MAC Calculation Transfer Syntax UID"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a120)" : {
         "entity" : "Image",
         "req" : "1C",
         "module" : "Specimen",
         "usage" : "U",
         "name" : "DateTime",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ]
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0020)" : {
         "module" : "Enhanced PET Image",
         "usage" : "M",
         "req" : "1",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3",
            "table_C.17-3a"
         ],
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
         "name" : "Data Elements Signed"
      },
      "(0040,a390)" : {
         "entity" : "Image",
         "req" : "1C",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "HL7 Structured Document Reference Sequence",
         "desc" : [
            "Sequence of items defining mapping between HL7 Instance Identifiers of unencapsulated HL7 Structured Documents referenced from the current SOP Instance as if they were DICOM Composite SOP Class Instances defined by SOP Class and Instance UID pairs. May also define a means of accessing the Documents.",
            "One or more Items shall be included in this Sequence.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.12.1.1.6",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Required if unencapsulated HL7 Structured Documents are referenced within the Instance. Every such document so referenced is required to have a corresponding Item in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0010,0218)" : {
         "entity" : "Patient",
         "req" : "3",
         "module" : "Patient",
         "usage" : "M",
         "name" : "Strain Additional Information",
         "desc" : [
            "Additional information about the strain of the patient that is not encoded in the formal nomenclature used in Strain Description (0010,0212). See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.1.1.4"
               },
               "el" : "xref"
            },
            "."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0040,0520)[<0>](0008,1090)" : {
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "desc" : "Manufacturer's model name of the container component.",
         "name" : "Manufacturer's Model Name",
         "req" : "3",
         "entity" : "Image",
         "usage" : "U",
         "module" : "Specimen"
      },
      "(0008,1062)[<0>](0008,0080)" : {
         "module" : "General Study",
         "usage" : "M",
         "entity" : "Study",
         "req" : "1C",
         "name" : "Institution Name",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)" : {
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_6a16f809-6605-41ac-8d02-b6104b0bc0ad"
                     }
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
      "(0008,1010)" : {
         "desc" : "User defined name identifying the machine that produced the composite instances.",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Station Name",
         "usage" : "M",
         "module" : "General Equipment",
         "req" : "3",
         "entity" : "Equipment"
      },
      "(0008,1072)[<0>](0040,1101)" : {
         "req" : "1",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Person Identification Code Sequence"
      },
      "(0008,009d)[<0>](0040,1102)" : {
         "desc" : "Person's mailing address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person's Address",
         "module" : "General Study",
         "usage" : "M",
         "req" : "3",
         "entity" : "Study"
      },
      "(0018,a001)[<0>](0008,1090)" : {
         "name" : "Manufacturer's Model Name",
         "desc" : "Manufacturer's model name of the equipment that contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Image",
         "req" : "3"
      },
      "(0010,0024)[<0>](0040,0032)" : {
         "usage" : "M",
         "module" : "Patient",
         "req" : "3",
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
         "name" : "Universal Entity ID"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a30a)" : {
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
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series"
      },
      "(0018,a001)[<0>](0008,0081)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "3",
         "entity" : "Image",
         "desc" : "Address of the institution where the equipment that contributed to the composite instance is located.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Institution Address"
      },
      "(0020,9172)[<0>](0008,1150)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ]
      },
      "(0018,1061)" : {
         "req" : "3",
         "entity" : "Frame of Reference",
         "usage" : "U",
         "module" : "Synchronization",
         "desc" : "Specifies equipment ID of trigger source and/or type of trigger",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "name" : "Trigger Source or Type"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "module" : "Specimen",
         "usage" : "U",
         "req" : "1",
         "entity" : "Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a160)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "name" : "Text Value",
         "req" : "1C",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "name" : "Universal Entity ID",
         "usage" : "M",
         "module" : "Patient",
         "req" : "1C",
         "entity" : "Patient"
      },
      "(0010,0216)[<0>](0010,0214)" : {
         "name" : "Strain Stock Number",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "The stock number of the strain of the patient issued by the organization identified by Strain Source (0010,0217). See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.1.1.1.4",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "entity" : "Patient",
         "req" : "1",
         "module" : "Patient",
         "usage" : "M"
      },
      "(0028,0101)" : [
         {
            "req" : "1",
            "entity" : "Image",
            "module" : "Image Pixel",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-11b"
            ],
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
            "name" : "Bits Stored"
         },
         {
            "name" : "Bits Stored",
            "mod_tables" : [
               "table_C.8.22-3"
            ],
            "desc" : "Number of bits stored for each pixel sample. Each sample shall have the same number of bits stored. This value shall be 16.",
            "entity" : "Image",
            "req" : "1",
            "usage" : "M",
            "module" : "Enhanced PET Image"
         }
      ],
      "(0010,1030)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Weight of the Patient, in kilograms.",
         "name" : "Patient's Weight",
         "usage" : "U",
         "module" : "Patient Study",
         "req" : "3",
         "entity" : "Study"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a30a)" : {
         "req" : "1C",
         "entity" : "Image",
         "module" : "Specimen",
         "usage" : "U",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Numeric Value"
      },
      "(0028,0302)" : {
         "module" : "Enhanced PET Image",
         "usage" : "M",
         "entity" : "Image",
         "req" : "3",
         "name" : "Recognizable Visual Features",
         "mod_tables" : [
            "table_C.8.22-3"
         ],
         "desc" : [
            "Indicates whether or not the image contains sufficiently recognizable visual features to allow the image or a reconstruction from a set of images to identify the patient.",
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
            "If this Attribute is absent, then the image may or may not contain recognizable visual features."
         ]
      },
      "(0088,0200)[<0>](0028,0103)" : {
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
            "table_C.8.22-3",
            "table_C.7-11b"
         ],
         "name" : "Pixel Representation",
         "module" : "Enhanced PET Image",
         "usage" : "M",
         "req" : "1",
         "entity" : "Image"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0088,0140)" : {
         "entity" : "Image",
         "req" : "3",
         "module" : "Enhanced PET Image",
         "usage" : "M",
         "name" : "Storage Media File-Set UID",
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "Uniquely identifies the Storage Media on which the Composite Object(s) reside."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a168)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "name" : "Concept Code Sequence",
         "usage" : "M",
         "module" : "General Series",
         "req" : "1C",
         "entity" : "Series"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "module" : "Patient",
         "req" : "1",
         "entity" : "Patient"
      },
      "(0008,9121)[<0>](0020,000d)" : {
         "desc" : "Unique identifier for the Study",
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3"
         ],
         "name" : "Study Instance UID",
         "module" : "Enhanced PET Image",
         "usage" : "M",
         "req" : "1",
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)" : {
         "entity" : "Image",
         "req" : "1C",
         "usage" : "U",
         "module" : "Specimen",
         "name" : "Referenced SOP Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ]
      },
      "(0008,0015)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "3",
         "name" : "Instance Coercion DateTime",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Date and time that the SOP Instance was last coerced by a Storage SCP (see ",
            {
               "el" : "olink",
               "attrs" : {
                  "targetdoc" : "PS3.4",
                  "xrefstyle" : "select: labelnumber",
                  "targetptr" : "PS3.4"
               }
            },
            ")."
         ]
      },
      "(0010,0200)" : {
         "module" : "Patient",
         "usage" : "M",
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
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Quality Control Subject"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a043)" : {
         "entity" : "Series",
         "req" : "1",
         "usage" : "M",
         "module" : "General Series",
         "name" : "Concept Name Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0008,1150)" : {
         "usage" : "U",
         "module" : "Specimen",
         "entity" : "Image",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(0010,2201)" : {
         "entity" : "Patient",
         "req" : "1C",
         "module" : "Patient",
         "usage" : "M",
         "name" : "Patient Species Description",
         "mod_tables" : [
            "table_C.7-1"
         ],
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
      "(0038,0014)[<0>](0040,0032)" : {
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "name" : "Universal Entity ID",
         "req" : "1C",
         "entity" : "Study",
         "usage" : "U",
         "module" : "Patient Study"
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
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M"
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
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "name" : "Pixel Data",
         "req" : "1C",
         "entity" : "Image",
         "module" : "Image Pixel",
         "usage" : "M"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "name" : "Local Namespace Entity ID",
         "req" : "1C",
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a168)" : {
         "req" : "1C",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series",
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
         "name" : "Concept Code Sequence"
      },
      "(0018,1008)" : {
         "desc" : "Identifier of the gantry or positioner.",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Gantry ID",
         "usage" : "M",
         "module" : "General Equipment",
         "req" : "3",
         "entity" : "Equipment"
      },
      "(0088,0200)" : {
         "usage" : "M",
         "module" : "Enhanced PET Image",
         "req" : "3",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8.22-3"
         ],
         "desc" : [
            "This icon image is representative of the Image.",
            "Only a single Item is permitted in this Sequence."
         ],
         "name" : "Icon Image Sequence"
      },
      "(0040,0560)[<0>](0040,0562)[<1>](0040,0033)" : {
         "module" : "Specimen",
         "usage" : "U",
         "entity" : "Image",
         "req" : "1C",
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
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ]
      },
      "(0040,0515)" : {
         "usage" : "U",
         "module" : "Specimen",
         "req" : "3",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "desc" : "Sequence of alternate identifiers for the container that contains the specimen(s) being imaged. These may have been assigned, e.g., by the manufacturer, or by another institution that collected the specimen. One or more Items are permitted in this Sequence.",
         "name" : "Alternate Container Identifier Sequence"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a160)" : {
         "entity" : "Image",
         "req" : "1C",
         "module" : "Specimen",
         "usage" : "U",
         "name" : "Text Value",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0020,9222)[<0>](0020,9213)" : {
         "name" : "Dimension Index Private Creator",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "desc" : [
            "Identification of the creator of a group of private data elements.",
            "Required if the Dimension Index Pointer (0020,9165) value is the Data Element Tag of a Private Attribute."
         ],
         "usage" : "U",
         "module" : "Multi-frame Dimension",
         "entity" : "Image",
         "req" : "1C"
      },
      "(0008,1164)[<0>](0008,1162)" : {
         "module" : "Frame Extraction",
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "req" : "1C",
         "entity" : "Image",
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
         "mod_tables" : [
            "table_C.12-9"
         ],
         "name" : "Calculated Frame List"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)" : {
         "name" : "Referenced SOP Sequence",
         "desc" : [
            "References to Composite Object SOP Class/SOP Instance pairs that are part of the Study defined by Study Instance UID and the Series defined by Series Instance UID (0020,000E).",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "entity" : "Image",
         "req" : "1",
         "module" : "Enhanced PET Image",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Software Versions",
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "3",
         "entity" : "Image"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0120)" : {
         "name" : "Signature",
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "The Signature Value identified by the Digital Signature UID within the Referenced SOP Instance UID.",
         "usage" : "M",
         "module" : "Enhanced PET Image",
         "entity" : "Image",
         "req" : "1"
      },
      "(0088,0200)[<0>](0028,1202)" : {
         "module" : "Enhanced PET Image",
         "usage" : "M",
         "entity" : "Image",
         "req" : "1C",
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
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.7-11b"
         ]
      },
      "(0040,0518)" : {
         "usage" : "U",
         "module" : "Specimen",
         "req" : "2",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "desc" : [
            "Type of container that contains the specimen(s) being imaged.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "name" : "Container Type Code Sequence"
      },
      "(0028,0002)" : [
         {
            "module" : "Image Pixel",
            "usage" : "M",
            "req" : "1",
            "entity" : "Image",
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
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "name" : "Samples per Pixel"
         },
         {
            "name" : "Samples per Pixel",
            "desc" : "Number of samples (planes) in this image. This value shall be 1.",
            "mod_tables" : [
               "table_C.8.22-3"
            ],
            "entity" : "Image",
            "req" : "1",
            "usage" : "M",
            "module" : "Enhanced PET Image"
         }
      ],
      "(0028,1102)" : {
         "req" : "1C",
         "entity" : "Image",
         "module" : "Image Pixel",
         "usage" : "M",
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
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "name" : "Green Palette Color Lookup Table Descriptor"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1155)" : {
         "entity" : "Series",
         "req" : "1",
         "usage" : "M",
         "module" : "General Series",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(0010,1100)[<0>](0040,e023)" : {
         "desc" : [
            "Details for retrieving instances available via WADO-URI.",
            {
               "content" : [
                  "\n                ",
                  {
                     "attrs" : {
                        "xml:id" : "para_87c7f326-107c-4a18-88b9-60712a9f7041"
                     },
                     "el" : "para",
                     "content" : [
                        "This sequence addresses use of the URI-based Web Access to DICOM Objects. Retrieval via the Web Services-based WADO-WS is addressed in the XDS Retrieval Sequence (0040,E024)."
                     ]
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
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0040,e001)" : {
         "usage" : "M",
         "module" : "Patient",
         "req" : "1C",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "desc" : [
            "Instance Identifier of the encapsulated HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
            "Required if Type of Instances (0040,E020) is CDA."
         ],
         "name" : "HL7 Instance Identifier"
      },
      "(0018,1000)" : [
         {
            "entity" : "Equipment",
            "req" : "3",
            "module" : "General Equipment",
            "usage" : "M",
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
            "mod_tables" : [
               "table_C.7-8"
            ]
         },
         {
            "name" : "Device Serial Number",
            "mod_tables" : [
               "table_C.7-8b"
            ],
            "desc" : "Manufacturer's serial number of the equipment that produced the composite instances.",
            "usage" : "U",
            "module" : "Enhanced General Equipment",
            "entity" : "Equipment",
            "req" : "1"
         }
      ],
      "(0012,0071)" : {
         "req" : "3",
         "entity" : "Series",
         "usage" : "U",
         "module" : "Clinical Trial Series",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "desc" : [
            "An identifier of the series in the context of a clinical trial or research. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.3.2.1.2"
               },
               "el" : "xref"
            },
            "."
         ],
         "name" : "Clinical Trial Series ID"
      },
      "(4ffe,0001)[<0>](0400,0015)" : {
         "entity" : "Image",
         "req" : "1",
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "MAC Algorithm",
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
                     "attrs" : {
                        "xml:id" : "para_c0347aea-ecd8-4c0b-8e2f-cedadc2aacd5"
                     },
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
               ]
            }
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0010,0219)" : {
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
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Strain Code Sequence",
         "req" : "3",
         "entity" : "Patient",
         "usage" : "M",
         "module" : "Patient"
      },
      "(0040,a390)[<0>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "1",
         "entity" : "Image"
      },
      "(0088,0200)[<0>](0028,1103)" : {
         "req" : "1C",
         "entity" : "Image",
         "usage" : "M",
         "module" : "Enhanced PET Image",
         "mod_tables" : [
            "table_C.8.22-3",
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
         "name" : "Blue Palette Color Lookup Table Descriptor"
      },
      "(0100,0420)" : {
         "name" : "SOP Authorization DateTime",
         "desc" : "The date and time when the SOP Instance Status (0100,0410) was set to AO.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0008,0300)[<0>](0008,0303)" : {
         "name" : "Block Identifying Information Status",
         "desc" : [
            [
               "Specifies whether some or all of the Private Data Elements in the block are safe from identity leakage as defined by ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "targetdoc" : "PS3.15",
                     "targetptr" : "sect_E.3.10",
                     "xrefstyle" : "template:PS3.15 Section %n %t"
                  }
               },
               "."
            ],
            {
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
               ],
               "type" : "variablelist"
            }
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "1"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0033)" : {
         "module" : "Patient",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
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
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_10.14"
                  }
               },
               " for Defined Terms."
            ]
         ],
         "name" : "Universal Entity ID Type"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,003a)" : {
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
         "usage" : "M",
         "module" : "Patient",
         "req" : "3",
         "entity" : "Patient"
      },
      "(0018,9171)" : {
         "entity" : "Image",
         "req" : "1C",
         "module" : "Respiratory Synchronization",
         "usage" : "U",
         "name" : "Respiratory Signal Source",
         "mod_tables" : [
            "table_C.7.6.18-2"
         ],
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
         ]
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1155)" : {
         "usage" : "M",
         "module" : "Enhanced PET Image",
         "req" : "1",
         "entity" : "Image",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1150)" : {
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ]
      },
      "(0020,0052)" : {
         "name" : "Frame of Reference UID",
         "desc" : [
            "Uniquely identifies the frame of reference for a Series. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.4.1.1.1"
               }
            },
            " for further explanation."
         ],
         "mod_tables" : [
            "table_C.7-6"
         ],
         "usage" : "M",
         "module" : "Frame of Reference",
         "entity" : "Frame of Reference",
         "req" : "1"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "usage" : "M",
         "module" : "Patient",
         "req" : "1C",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "name" : "Universal Entity ID"
      },
      "(0008,1072)[<0>](0040,1103)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "desc" : "Person's telephone number(s)",
         "name" : "Person's Telephone Numbers",
         "usage" : "M",
         "module" : "General Series",
         "req" : "3",
         "entity" : "Series"
      },
      "(0040,0520)[<0>](0050,001c)" : {
         "name" : "Container Component Length",
         "desc" : "Length in mm of container component.",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "entity" : "Image",
         "req" : "3",
         "module" : "Specimen",
         "usage" : "U"
      },
      "(0008,0051)" : {
         "name" : "Issuer of Accession Number Sequence",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "General Study",
         "usage" : "M",
         "entity" : "Study",
         "req" : "3"
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
               "title" : "Defined Terms:",
               "type" : "variablelist"
            }
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme Registry",
         "req" : "1C",
         "entity" : "Image",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0040,0555)[<0>](0040,a168)" : {
         "usage" : "M",
         "module" : "Acquisition Context",
         "entity" : "Image",
         "req" : "1C",
         "name" : "Concept Code Sequence",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a Coded Value.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Date (0040,A121), Time (0040,A122), Person Name (0040,A123), Text Value (0040,A160), and the pair of Numeric Value (0040,A30A) and Measurement Units Code Sequence (0040,08EA) are not present."
         ]
      },
      "(0010,1100)[<0>](0020,000d)" : {
         "desc" : [
            "Unique identifier for the Study.",
            "Required if Type of Instances (0040,E020) is DICOM"
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "Study Instance UID",
         "req" : "1C",
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0039)" : {
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "3",
         "name" : "Assigning Jurisdiction Code Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_da6e8d69-e95e-4320-b5c5-be5b4cbb811f"
                     }
                  },
                  "\n              "
               ]
            }
         ]
      },
      "(0010,0020)" : {
         "name" : "Patient ID",
         "desc" : [
            "Primary identifier for the patient.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
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
                     ],
                     "attrs" : {
                        "xml:id" : "para_bd933dd8-c95a-459e-a9cd-8b9c90650099"
                     }
                  },
                  "\n                  "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "req" : "2",
         "module" : "Patient",
         "usage" : "M"
      },
      "(0008,1110)[<0>](0008,1155)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "entity" : "Study",
         "usage" : "M",
         "module" : "General Study"
      },
      "(0020,9172)[<0>](0008,1160)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Image",
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
         ],
         "name" : "Referenced Frame Number"
      },
      "(4ffe,0001)" : {
         "req" : "3",
         "entity" : "Image",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : [
            "A sequence of items that describe the parameters used to calculate a MAC for use in Digital Signatures.",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "MAC Parameters Sequence"
      },
      "(0020,9222)[<0>](0020,9165)" : {
         "module" : "Multi-frame Dimension",
         "usage" : "U",
         "entity" : "Image",
         "req" : "1",
         "name" : "Dimension Index Pointer",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
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
         ]
      },
      "(0008,9154)[<0>](0008,1115)" : {
         "name" : "Referenced Series Sequence",
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3"
         ],
         "desc" : [
            "Sequence of Items where each Item includes the Attributes of a Series containing referenced Composite Object(s).",
            "One or more Items shall be included in this Sequence"
         ],
         "entity" : "Image",
         "req" : "1",
         "module" : "Enhanced PET Image",
         "usage" : "M"
      },
      "(0040,0515)[<0>](0040,0513)[<1>](0040,0032)" : {
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "name" : "Universal Entity ID",
         "req" : "1C",
         "entity" : "Image",
         "usage" : "U",
         "module" : "Specimen"
      },
      "(0008,1250)[<0>](0020,000d)" : [
         {
            "usage" : "M",
            "module" : "General Series",
            "entity" : "Series",
            "req" : "1",
            "name" : "Study Instance UID",
            "desc" : "Instance UID of Study to which the related Series belongs",
            "mod_tables" : [
               "table_C.7-5a"
            ]
         },
         {
            "desc" : "Instance UID of Study to which the related Series belongs",
            "mod_tables" : [
               "table_C.8.22-1"
            ],
            "name" : "Study Instance UID",
            "req" : "1",
            "entity" : "Series",
            "module" : "Enhanced PET Series",
            "usage" : "M"
         }
      ],
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0306)" : {
         "name" : "Identifying Private Elements",
         "desc" : [
            "List of Private Data Elements in block that may contain identifying\n                  information (are unsafe from identity leakage)..",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "req" : "1",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0012,0083)[<0>](0012,0085)" : {
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "desc" : [
            "Whether or not consent to distribute has been granted for the purpose described in Distribution Type (0012,0084).",
            {
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
               "title" : "Enumerated Values:",
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
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "Under some circumstances, consent may be withdrawn. The purpose of encoding this is to warn receiving systems that further distribution may not be appropriate, but no semantics are defined by the Standard for what action is appropriate under such circumstances, such as what to do with previously received images that had a value of YES."
                     ],
                     "attrs" : {
                        "xml:id" : "para_3a13f81e-d497-421f-aebd-f103e8f2243a"
                     }
                  },
                  "\n                  "
               ]
            }
         ],
         "name" : "Consent for Distribution Flag",
         "req" : "1",
         "entity" : "Study",
         "module" : "Clinical Trial Study",
         "usage" : "U"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0032)" : {
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
         "name" : "Universal Entity ID",
         "req" : "3",
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M"
      },
      "(0018,1064)" : {
         "mod_tables" : [
            "table_C.7.6.18-1"
         ],
         "desc" : [
            [
               "Description of type of framing performed. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.6.18.1.1.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for description and Defined Terms."
            ],
            "Required if type of framing is not time forward from trigger, may be present otherwise."
         ],
         "name" : "Cardiac Framing Type",
         "module" : "Cardiac Synchronization",
         "usage" : "U",
         "req" : "1C",
         "entity" : "Image"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1102)" : {
         "req" : "3",
         "entity" : "Image",
         "module" : "SOP Common",
         "usage" : "M",
         "desc" : "Person's mailing address",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "name" : "Person's Address"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a122)" : {
         "entity" : "Image",
         "req" : "1C",
         "usage" : "U",
         "module" : "Specimen",
         "name" : "Time",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0012,0063)" : {
         "name" : "De-identification Method",
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
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_1b4a5ea4-66da-478b-901c-5f7d6b806d29"
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
                                    "xml:id" : "para_adf0139e-d0e5-457a-ac4d-5c9e20c50e35"
                                 },
                                 "content" : [
                                    "The characteristics of the de-identifying equipment and/or the responsible operator of that equipment may be recorded as an additional item of the Contributing Equipment Sequence (0018,A001) in the ",
                                    {
                                       "el" : "xref",
                                       "attrs" : {
                                          "xrefstyle" : "select: title",
                                          "linkend" : "sect_C.12.1"
                                       }
                                    },
                                    ". De-identifying equipment may use a Purpose of Reference of ",
                                    {
                                       "el" : "olink",
                                       "content" : [
                                          "(109104, DCM, \"De-identifying Equipment\")"
                                       ],
                                       "attrs" : {
                                          "targetptr" : "DCM_109104",
                                          "targetdoc" : "PS3.16"
                                       }
                                    },
                                    "."
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
               ]
            },
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method Code Sequence (0012,0064) is not present. May be present otherwise."
         ],
         "entity" : "Patient",
         "req" : "1C",
         "module" : "Patient",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a040)" : {
         "module" : "General Series",
         "usage" : "M",
         "req" : "1",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
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
         "name" : "Value Type"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a121)" : {
         "name" : "Date",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "entity" : "Image",
         "req" : "1C",
         "module" : "Specimen",
         "usage" : "U"
      },
      "(0008,001a)" : {
         "entity" : "Image",
         "req" : "3",
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Related General SOP Class UID",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         ]
      },
      "(0010,2293)" : {
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
            "Zero or more Items shall be included in this Sequence.",
            "Required if the patient is an animal."
         ],
         "name" : "Patient Breed Code Sequence",
         "req" : "2C",
         "entity" : "Patient",
         "usage" : "M",
         "module" : "Patient"
      },
      "(0018,9085)" : {
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
         ],
         "name" : "Cardiac Signal Source",
         "usage" : "U",
         "module" : "Cardiac Synchronization",
         "req" : "1C",
         "entity" : "Image"
      },
      "(0040,0520)[<0>](0008,0070)" : {
         "module" : "Specimen",
         "usage" : "U",
         "entity" : "Image",
         "req" : "3",
         "name" : "Manufacturer",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "desc" : "Manufacturer of the container component."
      },
      "(0040,0555)[<0>](0040,a122)" : {
         "name" : "Time",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a time.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "The purpose or role of the time value could be specified in Concept Name Code Sequence (0040,A043)."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_090933a4-c189-49db-a4ad-938040f8b381"
                     }
                  },
                  "\n                  "
               ],
               "el" : "note"
            },
            "Required if the value that Concept Name Code Sequence (0040,A043) requires (implies) is a time. Shall not be present otherwise."
         ],
         "entity" : "Image",
         "req" : "1C",
         "module" : "Acquisition Context",
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a163)" : {
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Rational Denominator Value",
         "req" : "1C",
         "entity" : "Image",
         "usage" : "U",
         "module" : "Specimen"
      },
      "(0010,0032)" : {
         "module" : "Patient",
         "usage" : "M",
         "entity" : "Patient",
         "req" : "3",
         "name" : "Patient's Birth Time",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "Birth time of the Patient."
      },
      "(0040,1012)" : {
         "name" : "Reason For Performed Procedure Code Sequence",
         "desc" : [
            "Coded reason(s) for performing this procedure.",
            {
               "el" : "note",
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
               ]
            },
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "usage" : "M",
         "entity" : "Study",
         "req" : "3"
      },
      "(0020,000e)" : {
         "req" : "1",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series",
         "desc" : "Unique identifier of the Series.",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Series Instance UID"
      },
      "(0400,0561)[<0>](0400,0550)[0](gggg,eeee)" : {
         "name" : "Any Attribute from the main data set that was modified or removed.",
         "desc" : "May include Sequence Attributes and their Items.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "1"
      },
      "(0010,0021)" : {
         "entity" : "Patient",
         "req" : "3",
         "module" : "Patient",
         "usage" : "M",
         "name" : "Issuer of Patient ID",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0008,1160)" : {
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
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Referenced Frame Number",
         "usage" : "U",
         "module" : "Specimen",
         "req" : "1C",
         "entity" : "Image"
      },
      "(0088,0200)[<0>](0028,1203)" : {
         "mod_tables" : [
            "table_C.8.22-3",
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
         "name" : "Blue Palette Color Lookup Table Data",
         "module" : "Enhanced PET Image",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0008,0051)" : {
         "name" : "Issuer of Accession Number Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "Series",
         "req" : "3",
         "usage" : "M",
         "module" : "General Series"
      },
      "(0010,1001)" : {
         "name" : "Other Patient Names",
         "desc" : "Other names used to identify the patient.",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "req" : "3",
         "module" : "Patient",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1103)" : {
         "name" : "Person's Telephone Numbers",
         "desc" : "Person's telephone number(s)",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0062,000b)" : {
         "name" : "Referenced Segment Number",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "req" : "1C"
      },
      "(0008,1062)[<0>](0040,1103)" : {
         "desc" : "Person's telephone number(s)",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person's Telephone Numbers",
         "usage" : "M",
         "module" : "General Study",
         "req" : "3",
         "entity" : "Study"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)" : {
         "entity" : "Image",
         "req" : "3",
         "usage" : "M",
         "module" : "Enhanced PET Image",
         "name" : "Referenced Digital Signature Sequence",
         "desc" : [
            "Sequence of references to Digital Signatures in the referenced SOP Instance.",
            "One or more Items are permitted in this Sequence.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "The Attributes in this Sequence can be used to detect if the referenced SOP Instance has been altered."
                     ],
                     "attrs" : {
                        "xml:id" : "para_1bb4c66e-0b5e-4f69-b0f2-4e353dc73212"
                     }
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0010,1002)[<0>](0010,0020)" : {
         "name" : "Patient ID",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "An identifier for the patient.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_f0c2cfdd-2ad9-4f36-9f8d-a8723d825eae"
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
               ],
               "el" : "note"
            }
         ],
         "module" : "Patient",
         "usage" : "M",
         "entity" : "Patient",
         "req" : "1"
      },
      "(0018,a001)[<0>](0018,a003)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Description of the contribution the equipment made to the composite instance.",
         "name" : "Contribution Description",
         "req" : "3",
         "entity" : "Image",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)" : {
         "module" : "General Series",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
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
         "name" : "Referenced SOP Sequence"
      },
      "(0010,0024)[<0>](0040,0039)" : {
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Assigning Jurisdiction Code Sequence",
         "req" : "3",
         "entity" : "Patient",
         "usage" : "M",
         "module" : "Patient"
      },
      "(0040,0555)[<0>](0040,a161)" : {
         "entity" : "Image",
         "req" : "1C",
         "module" : "Acquisition Context",
         "usage" : "M",
         "name" : "Floating Point Value",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ]
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
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Certified Timestamp Type",
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Image"
      },
      "(0028,0006)" : {
         "name" : "Planar Configuration",
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
            "table_C.7-11b"
         ],
         "usage" : "M",
         "module" : "Image Pixel",
         "entity" : "Image",
         "req" : "1C"
      },
      "(0018,a001)[<0>](0008,1070)" : {
         "desc" : "Name(s) of the operator(s) of the contributing equipment.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Operators' Name",
         "req" : "3",
         "entity" : "Image",
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a124)" : {
         "name" : "UID",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "entity" : "Image",
         "req" : "1C",
         "module" : "Specimen",
         "usage" : "U"
      },
      "(0010,2203)" : {
         "entity" : "Study",
         "req" : "2C",
         "module" : "Patient Study",
         "usage" : "U",
         "name" : "Patient's Sex Neutered",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : [
            "Whether or not a procedure has been performed in an effort to render the patient sterile.",
            {
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
               ],
               "type" : "variablelist"
            },
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_c2f87128-b036-4f01-a73f-cfc3ce71eaeb"
                     },
                     "el" : "para",
                     "content" : [
                        "If this Attribute is present but has no value then the status is unknown."
                     ]
                  },
                  "\n                  "
               ]
            },
            "Required if patient is an animal. May be present otherwise."
         ]
      },
      "(0040,0280)" : {
         "req" : "3",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "desc" : "User-defined comments on the Performed Procedure Step.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "name" : "Comments on the Performed Procedure Step"
      },
      "(0028,0011)" : {
         "module" : "Image Pixel",
         "usage" : "M",
         "entity" : "Image",
         "req" : "1",
         "name" : "Columns",
         "desc" : "Number of columns in the image",
         "mod_tables" : [
            "table_C.7-11b"
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a162)" : {
         "usage" : "U",
         "module" : "Specimen",
         "entity" : "Image",
         "req" : "1C",
         "name" : "Rational Numerator Value",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0008,1200)" : {
         "module" : "Common Instance Reference",
         "usage" : "U",
         "entity" : "Image",
         "req" : "1C",
         "name" : "Studies Containing Other Referenced Instances Sequence",
         "desc" : [
            "Sequence of items each identifying a Study other than the Study of which this Instance is a part, which Studies contain Instances that are referenced elsewhere in this Instance.",
            "One or more Items shall be included in this Sequence.",
            "Required if this Instance references Instances in other Studies."
         ],
         "mod_tables" : [
            "table_C.12-8"
         ]
      },
      "(0008,0110)[<0>](0008,0102)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "1",
         "name" : "Coding Scheme Designator",
         "desc" : "The value of a Coding Scheme Designator, used in this SOP Instance, which is being mapped.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0010,0216)" : {
         "name" : "Strain Stock Sequence",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "Information identifying an animal within a strain stock.",
            "Only a single Item is permitted in this sequence."
         ],
         "module" : "Patient",
         "usage" : "M",
         "entity" : "Patient",
         "req" : "3"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0080)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "name" : "Institution Name",
         "req" : "1C",
         "entity" : "Image",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0008,0110)[<0>](0008,0114)" : {
         "entity" : "Image",
         "req" : "2C",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Coding Scheme External ID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The coding scheme identifier as defined in an external registry. Required if coding scheme is registered and Coding Scheme UID (0008,010C) is not present."
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a30a)" : {
         "entity" : "Image",
         "req" : "1C",
         "module" : "Specimen",
         "usage" : "U",
         "name" : "Numeric Value",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ]
      },
      "(0008,1049)" : {
         "entity" : "Study",
         "req" : "3",
         "usage" : "M",
         "module" : "General Study",
         "name" : "Physician(s) of Record Identification Sequence",
         "desc" : [
            "Identification of the physician(s) who are responsible for overall patient care at time of Study.",
            "One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Physician(s) of Record (0008,1048), if present."
         ],
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0040,0560)[<0>](0040,059a)" : {
         "entity" : "Image",
         "req" : "3",
         "usage" : "U",
         "module" : "Specimen",
         "name" : "Specimen Type Code Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "desc" : [
            "Specimen Type.",
            "Only a single Item is permitted in this Sequence."
         ]
      },
      "(0008,1048)" : {
         "name" : "Physician(s) of Record",
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
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "module" : "General Study",
         "entity" : "Study",
         "req" : "3"
      },
      "(0012,0021)" : {
         "usage" : "U",
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
         "req" : "2",
         "name" : "Clinical Trial Protocol Name",
         "mod_tables" : [
            "table_C.7-2b"
         ],
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
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0032)" : {
         "usage" : "M",
         "module" : "Patient",
         "req" : "3",
         "entity" : "Patient",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Universal Entity ID"
      },
      "(0008,0110)[<0>](0008,0103)" : {
         "req" : "3",
         "entity" : "Image",
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : "The coding scheme version associated with the Coding Scheme Designator (0008,0102).",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme Version"
      },
      "(0088,0200)[<0>](0028,0011)" : {
         "name" : "Columns",
         "desc" : "Number of columns in the image",
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.7-11b"
         ],
         "module" : "Enhanced PET Image",
         "usage" : "M",
         "entity" : "Image",
         "req" : "1"
      },
      "(0028,0301)" : {
         "entity" : "Image",
         "req" : "1C",
         "module" : "Enhanced PET Image",
         "usage" : "M",
         "name" : "Burned in Annotation",
         "mod_tables" : [
            "table_C.8.22-3"
         ],
         "desc" : [
            "Indicates that the image does not contain burned in annotations.",
            {
               "list" : [
                  [
                     "NO",
                     null
                  ]
               ],
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            },
            "This means that images that contain this Module shall not contain burned in annotations.",
            "Required if SOP Class UID is not \"1.2.840.10008.5.1.4.1.1.128.1\" (Legacy Converted), may be present otherwise."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a162)" : {
         "usage" : "M",
         "module" : "General Series",
         "req" : "1C",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "name" : "Rational Numerator Value"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a161)" : {
         "name" : "Floating Point Value",
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
         "req" : "1C",
         "module" : "General Series",
         "usage" : "M"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,0054)" : {
         "module" : "Enhanced PET Image",
         "usage" : "M",
         "entity" : "Image",
         "req" : "3",
         "name" : "Retrieve AE Title",
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "Title of the DICOM Application Entity where the Composite Object(s) may be retrieved on the network."
      },
      "(0040,0275)" : {
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "req" : "3",
         "name" : "Request Attributes Sequence",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : [
            "Sequence that contains attributes from the Imaging Service Request.",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)" : {
         "name" : "Specimen Preparation Step Content Item Sequence",
         "desc" : [
            "Sequence of Content Items identifying the processes used in one preparation step to prepare the specimen for image acquisition.",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "entity" : "Image",
         "req" : "1",
         "module" : "Specimen",
         "usage" : "U"
      },
      "(0040,0513)[<0>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "module" : "Specimen",
         "usage" : "U",
         "entity" : "Image",
         "req" : "1C"
      },
      "(0008,1080)" : {
         "entity" : "Study",
         "req" : "3",
         "usage" : "U",
         "module" : "Patient Study",
         "name" : "Admitting Diagnoses Description",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Description of the admitting diagnosis (diagnoses)"
      },
      "(0008,009d)[<0>](0040,1104)" : {
         "module" : "General Study",
         "usage" : "M",
         "entity" : "Study",
         "req" : "3",
         "name" : "Person's Telecom Information",
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
               ],
               "el" : "note"
            }
         ]
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "Patient",
         "req" : "1C",
         "module" : "Patient",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1150)" : {
         "req" : "1",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID"
      },
      "(0008,009d)" : {
         "usage" : "M",
         "module" : "General Study",
         "req" : "3",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : [
            "Identification of the consulting physician(s).",
            "One or more Items shall be included in this Sequence. If more than one Item, the number and order shall correspond to the value of Consulting Physician's Name (0008,009C), if present."
         ],
         "name" : "Consulting Physician Identification Sequence"
      },
      "(fffa,fffa)[<0>](0400,0310)" : {
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
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Certified Timestamp",
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "3",
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a161)" : {
         "name" : "Floating Point Value",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "entity" : "Image",
         "req" : "1C",
         "usage" : "U",
         "module" : "Specimen"
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
         "name" : "Time",
         "module" : "General Series",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series"
      },
      "(0008,0080)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "desc" : "Institution where the equipment that produced the composite instances is located.",
         "name" : "Institution Name",
         "usage" : "M",
         "module" : "General Equipment",
         "req" : "3",
         "entity" : "Equipment"
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
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "req" : "1C"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a121)" : {
         "name" : "Date",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "module" : "General Series"
      },
      "(0040,0515)[<0>](0040,0513)[<1>](0040,0033)" : {
         "module" : "Specimen",
         "usage" : "U",
         "req" : "1C",
         "entity" : "Image",
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
         "name" : "Universal Entity ID Type"
      },
      "(0018,1083)" : {
         "usage" : "U",
         "module" : "Cardiac Synchronization",
         "req" : "2C",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.18-1"
         ],
         "desc" : [
            "Number of R-R intervals acquired and used to create the image (not including the intervals rejected).",
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and Cardiac Synchronization Technique (0018,9037) equals other than NONE.",
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and Cardiac Synchronization Technique (0018,9037) equals other than NONE."
         ],
         "name" : "Intervals Acquired"
      },
      "(0012,0031)" : {
         "module" : "Clinical Trial Subject",
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
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "name" : "Clinical Trial Site Name"
      },
      "(0008,0060)" : [
         {
            "usage" : "M",
            "module" : "General Series",
            "req" : "1",
            "entity" : "Series",
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
            "name" : "Modality"
         },
         {
            "mod_tables" : [
               "table_C.8.22-1"
            ],
            "desc" : [
               "Type of equipment that originally acquired the data used to create the images in this Series.",
               {
                  "title" : "Enumerated Values:",
                  "list" : [
                     [
                        "PT",
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
            "name" : "Modality",
            "module" : "Enhanced PET Series",
            "usage" : "M",
            "req" : "1",
            "entity" : "Series"
         }
      ],
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "entity" : "Image",
         "module" : "Enhanced PET Image",
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a043)" : {
         "usage" : "U",
         "module" : "Specimen",
         "req" : "1",
         "entity" : "Image",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Concept Name Code Sequence"
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
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_10.6.1"
                  }
               },
               "."
            ]
         ],
         "name" : "Referenced Study Sequence",
         "module" : "General Study",
         "usage" : "M",
         "req" : "3",
         "entity" : "Study"
      },
      "(0008,009d)[<0>](0008,0080)" : {
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Name",
         "module" : "General Study",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Study"
      },
      "(0038,0064)" : {
         "req" : "3",
         "entity" : "Study",
         "usage" : "U",
         "module" : "Patient Study",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Service Episode ID (0038,0060).",
            "Only a single Item is permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Issuer of Service Episode ID Sequence"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0088,0130)" : {
         "req" : "3",
         "entity" : "Image",
         "usage" : "M",
         "module" : "Enhanced PET Image",
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the Composite Object (s) reside.",
         "name" : "Storage Media File-Set ID"
      },
      "(0008,1072)" : {
         "entity" : "Series",
         "req" : "3",
         "module" : "General Series",
         "usage" : "M",
         "name" : "Operator Identification Sequence",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : [
            "Identification of the operator(s) supporting the Series.",
            "One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Operators' Name (0008,1070), if present."
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a163)" : {
         "name" : "Rational Denominator Value",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "req" : "1C",
         "module" : "General Series",
         "usage" : "M"
      },
      "(0100,0410)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_b6227994-ee87-4d4f-9ba4-c3a82f2a705d"
                     }
                  },
                  "\n                "
               ]
            }
         ],
         "name" : "SOP Instance Status",
         "req" : "3",
         "entity" : "Image",
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a122)" : {
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Time",
         "req" : "1C",
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
         "name" : "Assigning Agency or Department Code Sequence",
         "module" : "Patient",
         "usage" : "M",
         "req" : "3",
         "entity" : "Patient"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0088,0130)" : {
         "usage" : "M",
         "module" : "Enhanced PET Image",
         "entity" : "Image",
         "req" : "3",
         "name" : "Storage Media File-Set ID",
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the Composite Object (s) reside."
      },
      "(0008,0096)[<0>](0040,1103)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Person's telephone number(s)",
         "name" : "Person's Telephone Numbers",
         "module" : "General Study",
         "usage" : "M",
         "req" : "3",
         "entity" : "Study"
      },
      "(0010,1002)[<0>](0010,0022)" : {
         "name" : "Type of Patient ID",
         "mod_tables" : [
            "table_C.7-1"
         ],
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
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_0c5465f7-fe2f-460e-8394-64ad149bdd60"
                     },
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
         "module" : "Patient",
         "usage" : "M",
         "entity" : "Patient",
         "req" : "1"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a124)" : {
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "UID",
         "req" : "1C",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series"
      },
      "(0008,009d)[<0>](0008,0082)" : {
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
         "entity" : "Study",
         "module" : "General Study",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a040)" : {
         "name" : "Value Type",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
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
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1"
      },
      "(0038,0064)[<0>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "usage" : "U",
         "module" : "Patient Study",
         "entity" : "Study",
         "req" : "1C"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1150)" : {
         "usage" : "M",
         "module" : "Enhanced PET Image",
         "entity" : "Image",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)" : {
         "req" : "3",
         "entity" : "Image",
         "usage" : "M",
         "module" : "Enhanced PET Image",
         "desc" : [
            "A MAC Calculation from data in the referenced SOP Instance that can be used as a data integrity check.",
            "Only a single Item is permitted in this Sequence.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_85131baf-ebaa-41ca-b044-07c75698df97"
                     },
                     "content" : [
                        "This Attribute may be used in place of Referenced Digital Signature Sequence (0400,0402), particularly if the SOP Instance does not have appropriate Digital Signatures that can be referenced."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "name" : "Referenced SOP Instance MAC Sequence"
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
         "name" : "Numeric Value",
         "req" : "1C",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series"
      },
      "(0012,0083)" : {
         "req" : "3",
         "entity" : "Study",
         "module" : "Clinical Trial Study",
         "usage" : "U",
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
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "name" : "Consent for Clinical Trial Use Sequence"
      },
      "(0040,a390)[<0>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Image",
         "req" : "1",
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "1C",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ]
      },
      "(0040,0254)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "desc" : "Institution-generated description or classification of the Procedure Step that was performed.",
         "name" : "Performed Procedure Step Description",
         "module" : "General Series",
         "usage" : "M",
         "req" : "3",
         "entity" : "Series"
      },
      "(0018,a001)[<0>](0018,a002)" : {
         "name" : "Contribution DateTime",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The Date & Time when the equipment contributed to the composite instance.",
         "entity" : "Image",
         "req" : "3",
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0010,2294)[<0>](0010,2295)" : {
         "name" : "Breed Registration Number",
         "desc" : "Identification number of an animal within the registry.",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "req" : "1",
         "module" : "Patient",
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "name" : "Referenced SOP Sequence",
         "req" : "1C",
         "entity" : "Image",
         "usage" : "U",
         "module" : "Specimen"
      },
      "(0008,103e)" : {
         "module" : "General Series",
         "usage" : "M",
         "req" : "3",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : "Description of the Series",
         "name" : "Series Description"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0040,e011)" : {
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "Unique identifier of the system where the Composite Object(s) may be retrieved on the network.",
         "name" : "Retrieve Location UID",
         "req" : "3",
         "entity" : "Image",
         "usage" : "M",
         "module" : "Enhanced PET Image"
      },
      "(0008,0021)" : {
         "entity" : "Series",
         "req" : "3",
         "usage" : "M",
         "module" : "General Series",
         "name" : "Series Date",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : "Date the Series started."
      },
      "(0040,a390)[<0>](0040,e001)" : {
         "desc" : "Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "HL7 Instance Identifier",
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "1",
         "entity" : "Image"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0081)" : {
         "name" : "Institution Address",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "entity" : "Image",
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0010,0216)[<0>](0010,0215)" : {
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
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Strain Source Registry Code Sequence",
         "usage" : "M",
         "module" : "Patient",
         "req" : "1",
         "entity" : "Patient"
      },
      "(0018,a001)[<0>](0008,1010)" : {
         "req" : "3",
         "entity" : "Image",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "User defined name identifying the machine that contributed to the composite instance.",
         "name" : "Station Name"
      },
      "(0008,0051)[<0>](0040,0031)" : {
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "name" : "Local Namespace Entity ID",
         "module" : "General Study",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Study"
      },
      "(0010,1100)[<0>](0040,e022)[<1>](0088,0130)" : {
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the referenced instance(s) reside.",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "Storage Media File-Set ID",
         "module" : "Patient",
         "usage" : "M",
         "req" : "2",
         "entity" : "Patient"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,0054)" : {
         "module" : "Enhanced PET Image",
         "usage" : "M",
         "entity" : "Image",
         "req" : "3",
         "name" : "Retrieve AE Title",
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "Title of the DICOM Application Entity where the Composite Object(s) may be retrieved on the network."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a163)" : {
         "name" : "Rational Denominator Value",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "module" : "General Series"
      },
      "(0018,1201)" : {
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
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Time of Last Calibration",
         "usage" : "M",
         "module" : "General Equipment",
         "req" : "3",
         "entity" : "Equipment"
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
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.7-11b"
         ],
         "name" : "Samples per Pixel",
         "req" : "1",
         "entity" : "Image",
         "usage" : "M",
         "module" : "Enhanced PET Image"
      },
      "(0020,0010)" : {
         "name" : "Study ID",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "User or equipment generated Study identifier.",
         "entity" : "Study",
         "req" : "2",
         "usage" : "M",
         "module" : "General Study"
      },
      "(0008,0118)" : {
         "desc" : "The unique identifier of the Mapping Resource",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Mapping Resource UID",
         "req" : "3",
         "entity" : "Image",
         "module" : "SOP Common",
         "usage" : "M"
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
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.7-11b"
         ],
         "name" : "Photometric Interpretation",
         "req" : "1",
         "entity" : "Image",
         "module" : "Enhanced PET Image",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a043)" : {
         "req" : "1",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Concept Name Code Sequence"
      },
      "(0040,0560)[<0>](0040,0562)[<1>](0040,0032)" : {
         "entity" : "Image",
         "req" : "1C",
         "usage" : "U",
         "module" : "Specimen",
         "name" : "Universal Entity ID",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ]
      },
      "(4ffe,0001)[<0>](0400,0020)" : {
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
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Data Elements Signed",
         "req" : "1",
         "entity" : "Image",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1155)" : {
         "usage" : "M",
         "module" : "Enhanced PET Image",
         "req" : "1",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID"
      },
      "(0008,1072)[<0>](0040,1102)" : {
         "name" : "Person's Address",
         "desc" : "Person's mailing address",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "entity" : "Series",
         "req" : "3",
         "usage" : "M",
         "module" : "General Series"
      },
      "(0010,2294)[<0>](0010,2296)" : {
         "desc" : [
            "Identification of the organization with which an animal is registered.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Breed Registry Code Sequence",
         "usage" : "M",
         "module" : "Patient",
         "req" : "1",
         "entity" : "Patient"
      },
      "(0008,0096)[<0>](0040,1102)" : {
         "name" : "Person's Address",
         "desc" : "Person's mailing address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "module" : "General Study",
         "entity" : "Study",
         "req" : "3"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1190)" : {
         "req" : "3",
         "entity" : "Image",
         "module" : "Enhanced PET Image",
         "usage" : "M",
         "desc" : "URL specifying the location of the referenced instance(s).",
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "name" : "Retrieve URL"
      },
      "(0008,0013)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Time the SOP Instance was created.",
            "This is the time that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "name" : "Instance Creation Time",
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "3",
         "entity" : "Image"
      },
      "(0028,0106)" : {
         "name" : "Smallest Image Pixel Value",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "desc" : "The minimum actual pixel value encountered in this image.",
         "entity" : "Image",
         "req" : "3",
         "usage" : "M",
         "module" : "Image Pixel"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0015)" : {
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3",
            "table_C.17-3a"
         ],
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_07b64781-f4ca-4d53-9b0b-e3d8032bb048"
                     }
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "name" : "MAC Algorithm",
         "req" : "1",
         "entity" : "Image",
         "module" : "Enhanced PET Image",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0009)" : {
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
                     ],
                     "attrs" : {
                        "xml:id" : "para_36129a24-d644-48ab-914d-1f3fbe916df6"
                     }
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "name" : "Scheduled Procedure Step ID",
         "req" : "1C",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M"
      },
      "(0020,0012)" : {
         "desc" : [
            "A number identifying the single continuous gathering of data over a period of time that resulted in this image, which may include multiple bed positions.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "This number is not required to be unique across SOP Instances in a series. See also the description of the Referenced Raw Data Sequence (0008,9121)."
                     ],
                     "attrs" : {
                        "xml:id" : "para_8cf1eee4-90e7-4dc6-868f-f43d7d41536d"
                     }
                  },
                  "\n                  "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.8.22-3"
         ],
         "name" : "Acquisition Number",
         "usage" : "M",
         "module" : "Enhanced PET Image",
         "req" : "3",
         "entity" : "Image"
      },
      "(0008,0008)" : {
         "usage" : "M",
         "module" : "Enhanced PET Image",
         "entity" : "Image",
         "req" : "1",
         "name" : "Image Type",
         "mod_tables" : [
            "table_C.8.22-3"
         ],
         "desc" : [
            "Image characteristics. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.22.3.1.1"
               },
               "el" : "xref"
            },
            "."
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a122)" : {
         "entity" : "Series",
         "req" : "1C",
         "module" : "General Series",
         "usage" : "M",
         "name" : "Time",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ]
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0010)" : {
         "name" : "MAC Calculation Transfer Syntax UID",
         "desc" : [
            "The Transfer Syntax UID used to encode the values of the Data Elements included in the MAC calculation. When computing the MAC, only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
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
                                    "xml:id" : "para_d3b7f806-4134-47a2-bf65-131f44d9fa2a"
                                 },
                                 "el" : "para",
                                 "content" : [
                                    "Certain Transfer Syntaxes, particularly those that are used with compressed data, allow the fragmentation of the pixel data to change. If such fragmentation changes, Digital Signatures generated with such Transfer Syntaxes could become invalid."
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
                                    "This does not constrain the transfer syntax used to transmit the object."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_2a42563c-d7f6-4749-9a5a-b563109dea18"
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
            }
         ],
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M",
         "module" : "Enhanced PET Image",
         "entity" : "Image",
         "req" : "1"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)" : {
         "name" : "Referenced SOP Sequence",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "module" : "General Series"
      },
      "(0020,0013)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Image",
         "req" : "3",
         "name" : "Instance Number",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "A number that identifies this Composite object instance."
      },
      "(0008,1164)[<0>](0008,1167)" : {
         "name" : "Multi-frame Source SOP Instance UID",
         "mod_tables" : [
            "table_C.12-9"
         ],
         "desc" : "SOP Instance from which the frames of this instance are extracted.",
         "entity" : "Image",
         "req" : "1",
         "module" : "Frame Extraction",
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request"
      },
      "(0010,0030)" : {
         "name" : "Patient's Birth Date",
         "desc" : "Birth date of the patient.",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "2"
      },
      "(0038,0064)[<0>](0040,0033)" : {
         "entity" : "Study",
         "req" : "1C",
         "usage" : "U",
         "module" : "Patient Study",
         "name" : "Universal Entity ID Type",
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
            "table_C.7-4a",
            "table_10-17"
         ]
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,003a)" : {
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
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "name" : "Assigning Agency or Department Code Sequence",
         "req" : "3",
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M"
      },
      "(0040,0555)[<0>](0040,a163)" : {
         "module" : "Acquisition Context",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "name" : "Rational Denominator Value"
      },
      "(0010,2292)" : {
         "name" : "Patient Breed Description",
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
         "entity" : "Patient",
         "req" : "2C",
         "module" : "Patient",
         "usage" : "M"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0015)" : {
         "req" : "1",
         "entity" : "Image",
         "usage" : "M",
         "module" : "Enhanced PET Image",
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "The algorithm used in generating the MAC.",
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
               "el" : "note",
               "content" : [
                  "\n                    ",
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
                        "xml:id" : "para_07b64781-f4ca-4d53-9b0b-e3d8032bb048"
                     }
                  },
                  "\n                  "
               ]
            }
         ],
         "name" : "MAC Algorithm"
      },
      "(fffa,fffa)[<0>](0400,0100)" : {
         "name" : "Digital Signature UID",
         "desc" : "A UID that can be used to uniquely reference this signature.",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Image",
         "req" : "1"
      },
      "(0008,1164)[<0>](0008,1161)" : {
         "desc" : [
            "A list of Frames that were extracted in the form of a simple list.",
            "Required if object extraction is based on a Frame Level Retrieve using the Simple Frame List (0008,1161) attribute.",
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
         "mod_tables" : [
            "table_C.12-9"
         ],
         "name" : "Simple Frame List",
         "req" : "1C",
         "entity" : "Image",
         "module" : "Frame Extraction",
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a124)" : {
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "req" : "1C",
         "name" : "UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a123)" : {
         "name" : "Person Name",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1C"
      },
      "(0008,0124)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "3",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Sequence of items that map values of Mapping Resource (0008,0105) to an external, private or local Mapping Resource.",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Mapping Resource Identification Sequence"
      },
      "(0008,1062)[<0>](0040,1104)" : {
         "name" : "Person's Telecom Information",
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
                           "content" : [
                              "\n                    ",
                              {
                                 "el" : "para",
                                 "content" : [
                                    "It is recommended that this attribute be treated as equivalent to HL7v2 (v2.5 or later) field ROL-12, and be formatted in accordance with the HL7v2 XTN data type (without escapes for HL7 message structure reserved characters). See additional notes in the Module invoking this Macro."
                                 ],
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
         "module" : "General Study",
         "usage" : "M",
         "entity" : "Study",
         "req" : "3"
      },
      "(0018,1800)" : {
         "entity" : "Frame of Reference",
         "req" : "1",
         "module" : "Synchronization",
         "usage" : "U",
         "name" : "Acquisition Time Synchronized",
         "desc" : [
            "Acquisition DateTime (0008,002A) synchronized with external time reference.",
            {
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            },
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.4.2.1.4"
                  }
               }
            ]
         ],
         "mod_tables" : [
            "table_C.7-7"
         ]
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "1C",
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise."
      },
      "(0008,1250)" : [
         {
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
                                    "el" : "para",
                                    "content" : [
                                       "For example, for a combined CT and PET acquisition, the CT images and PET images would be in separate series that could cross-reference each other with multiple purpose of reference codes meaning same anatomy, simultaneously acquired and same indication."
                                    ],
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
                                    "attrs" : {
                                       "xml:id" : "para_e9e67beb-8432-4dbc-9f6a-df5800189967"
                                    },
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
                              "content" : [
                                 "\n                        ",
                                 {
                                    "content" : [
                                       "This attribute is not intended for conveying localizer reference information, for which Referenced Image Sequence (0008,1140) should be used."
                                    ],
                                    "el" : "para",
                                    "attrs" : {
                                       "xml:id" : "para_7ef219a6-dfda-4b92-a778-37d54ca1cc2c"
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
                  ]
               }
            ],
            "mod_tables" : [
               "table_C.7-5a"
            ],
            "name" : "Related Series Sequence",
            "module" : "General Series",
            "usage" : "M",
            "req" : "3",
            "entity" : "Series"
         },
         {
            "req" : "1C",
            "entity" : "Series",
            "usage" : "M",
            "module" : "Enhanced PET Series",
            "mod_tables" : [
               "table_C.8.22-1"
            ],
            "desc" : [
               [
                  "Identifying the series that was used for attenuation purposes. See ",
                  {
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.7.3.1"
                     },
                     "el" : "xref"
                  }
               ],
               "Required if another series was used to perform attenuation correction and the SOP Class UID is not \"1.2.840.10008.5.1.4.1.1.128.1\" (Legacy Converted). May be present otherwise.",
               "One or more Items shall be included in this Sequence."
            ],
            "name" : "Related Series Sequence"
         }
      ],
      "(0008,1164)[<0>](0008,1163)" : {
         "mod_tables" : [
            "table_C.12-9"
         ],
         "desc" : [
            "The start and end times of the frames that were extracted.",
            "Required if object extraction is based on a Frame Level Retrieve using Time Range (0008,1163).",
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
         "name" : "Time Range",
         "req" : "1C",
         "entity" : "Image",
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "module" : "Frame Extraction"
      },
      "(0008,103f)" : {
         "usage" : "M",
         "module" : "General Series",
         "req" : "3",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : [
            "A coded description of the Series.",
            "Only a single Item is permitted in this Sequence."
         ],
         "name" : "Series Description Code Sequence"
      },
      "(0008,1049)[<0>](0040,1101)" : {
         "entity" : "Study",
         "req" : "1",
         "usage" : "M",
         "module" : "General Study",
         "name" : "Person Identification Code Sequence",
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
      "(0040,0520)[<0>](0050,001b)" : {
         "module" : "Specimen",
         "usage" : "U",
         "entity" : "Image",
         "req" : "3",
         "name" : "Container Component ID",
         "desc" : "Manufacturer's identifier of the container component, e.g., Lot Number and/or Version.",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      "(0400,0500)" : {
         "name" : "Encrypted Attributes Sequence",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "req" : "1C",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a123)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "name" : "Person Name",
         "req" : "1C",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M"
      },
      "(0008,1052)[<0>](0040,1104)" : {
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
                           "content" : [
                              "\n                    ",
                              {
                                 "el" : "para",
                                 "content" : [
                                    "This attribute may have internal format or structure in accordance with local agreement or profile. In the absence of such agreement or prior formatting, use of ITU-T E.123 is suggested."
                                 ],
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
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0062,000b)" : {
         "name" : "Referenced Segment Number",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "entity" : "Series",
         "req" : "1C",
         "module" : "General Series",
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "module" : "Patient",
         "usage" : "M",
         "entity" : "Patient",
         "req" : "1C"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a123)" : {
         "module" : "General Series",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "name" : "Person Name"
      },
      "(0008,001b)" : {
         "entity" : "Image",
         "req" : "3",
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Original Specialized SOP Class UID",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         ]
      },
      "(0008,1062)[<0>](0040,1102)" : {
         "req" : "3",
         "entity" : "Study",
         "module" : "General Study",
         "usage" : "M",
         "desc" : "Person's mailing address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person's Address"
      },
      "(0008,1250)[<0>](0020,000e)" : [
         {
            "desc" : "Instance UID of Related Series",
            "mod_tables" : [
               "table_C.7-5a"
            ],
            "name" : "Series Instance UID",
            "usage" : "M",
            "module" : "General Series",
            "req" : "1",
            "entity" : "Series"
         },
         {
            "desc" : "Instance UID of Related Series",
            "mod_tables" : [
               "table_C.8.22-1"
            ],
            "name" : "Series Instance UID",
            "req" : "1",
            "entity" : "Series",
            "module" : "Enhanced PET Series",
            "usage" : "M"
         }
      ],
      "(0018,1020)" : [
         {
            "mod_tables" : [
               "table_C.7-8"
            ],
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
            "name" : "Software Versions",
            "req" : "3",
            "entity" : "Equipment",
            "module" : "General Equipment",
            "usage" : "M"
         },
         {
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
            "mod_tables" : [
               "table_C.7-8b"
            ],
            "usage" : "U",
            "module" : "Enhanced General Equipment",
            "entity" : "Equipment",
            "req" : "1"
         }
      ],
      "(0008,009d)[<0>](0008,0081)" : {
         "req" : "3",
         "entity" : "Study",
         "usage" : "M",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "name" : "Institution Address"
      },
      "(0040,0555)[<0>](0040,a160)" : {
         "entity" : "Image",
         "req" : "1C",
         "usage" : "M",
         "module" : "Acquisition Context",
         "name" : "Text Value",
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a Text Observation Value.",
            "Required if Date (0040,A121), Time (0040,A122), and Person Name (0040,A123) do not fully describe the concept specified by Concept Name Code Sequence (0040,A043). Shall not be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7.6.14-1"
         ]
      },
      "(0020,0200)" : {
         "req" : "1",
         "entity" : "Frame of Reference",
         "usage" : "U",
         "module" : "Synchronization",
         "mod_tables" : [
            "table_C.7-7"
         ],
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
         "name" : "Synchronization Frame of Reference UID"
      },
      "(0018,9037)" : {
         "usage" : "U",
         "module" : "Cardiac Synchronization",
         "req" : "1C",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.18-1"
         ],
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
         "name" : "Cardiac Synchronization Technique"
      },
      "(0028,0303)" : {
         "entity" : "Image",
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Longitudinal Temporal Information Modified",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
                     "targetdoc" : "PS3.15",
                     "targetptr" : "PS3.15",
                     "xrefstyle" : "select: labelnumber"
                  },
                  "el" : "olink"
               },
               "."
            ]
         ]
      },
      "(0010,2202)" : {
         "name" : "Patient Species Code Sequence",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            [
               "The taxonomic rank value (e.g., genus, subgenus, species or subspecies) of the patient.\n                    See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.1.1.1.3"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Only a single Item shall be included in this Sequence.",
            "Required if the patient is an animal and if Patient Species Description (0010,2201) is not present. May be present otherwise."
         ],
         "entity" : "Patient",
         "req" : "1C",
         "usage" : "M",
         "module" : "Patient"
      },
      "(0028,0010)" : {
         "desc" : "Number of rows in the image.",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "name" : "Rows",
         "module" : "Image Pixel",
         "usage" : "M",
         "req" : "1",
         "entity" : "Image"
      },
      "(0010,0034)" : {
         "entity" : "Patient",
         "req" : "3",
         "usage" : "M",
         "module" : "Patient",
         "name" : "Patient's Death Date in Alternative Calendar",
         "mod_tables" : [
            "table_C.7-1"
         ],
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_9f9d00e7-4c3c-4ecd-9b0f-c6dc916409e9"
                     }
                  },
                  "\n                  "
               ]
            }
         ]
      },
      "(0008,1049)[<0>](0008,0082)" : {
         "req" : "1C",
         "entity" : "Study",
         "module" : "General Study",
         "usage" : "M",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Code Sequence"
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
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1150)" : {
         "module" : "Common Instance Reference",
         "usage" : "U",
         "req" : "1",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID"
      },
      "(fffa,fffa)[<0>](0400,0105)" : {
         "desc" : [
            "The date and time the Digital Signature was created. The time shall include an offset (i.e., time zone indication) from Coordinated Universal Time.",
            {
               "el" : "note",
               "content" : [
                  "\n                      ",
                  {
                     "attrs" : {
                        "xml:id" : "para_2c2ebaf6-e26c-4bf5-b5dd-cb4e0ed2cd56"
                     },
                     "content" : [
                        "This is not a certified timestamp, and hence is not completely verifiable. An application can compare this date and time with those of other signatures and the validity date of the certificate to gain confidence in the veracity of this date and time."
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
         ],
         "name" : "Digital Signature DateTime",
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "1",
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0600)" : {
         "name" : "Specimen Short Description",
         "desc" : "Short textual specimen description (may include ancestor specimen descriptions).",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "entity" : "Image",
         "req" : "3",
         "module" : "Specimen",
         "usage" : "U"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)" : {
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "Sequence of references to Digital Signatures in the referenced SOP Instance.",
            "One or more Items are permitted in this Sequence.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "The Attributes in this Sequence can be used to detect if the referenced SOP Instance has been altered."
                     ],
                     "attrs" : {
                        "xml:id" : "para_1bb4c66e-0b5e-4f69-b0f2-4e353dc73212"
                     }
                  },
                  "\n                  "
               ]
            }
         ],
         "name" : "Referenced Digital Signature Sequence",
         "req" : "3",
         "entity" : "Image",
         "module" : "Enhanced PET Image",
         "usage" : "M"
      },
      "(0010,1100)[<0>](0040,e021)" : {
         "entity" : "Patient",
         "req" : "1C",
         "usage" : "M",
         "module" : "Patient",
         "name" : "DICOM Retrieval Sequence",
         "desc" : [
            "Details for retrieving instances via the DICOM Retrieve Service.",
            "Required if DICOM Media Retrieval Sequence (0040,E022), WADO Retrieval Sequence (0040,E023), WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "This sequence shall only identify sources known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,08ea)" : {
         "module" : "General Series",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
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
         "name" : "Measurement Units Code Sequence"
      },
      "(0040,0260)[<0>](0040,0440)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "desc" : "Sequence that specifies the context for the Performed Protocol Code Sequence Item. One or more Items are permitted in this Sequence.",
         "name" : "Protocol Context Sequence",
         "module" : "General Series",
         "usage" : "M",
         "req" : "3",
         "entity" : "Series"
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
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Referenced Frame Number",
         "usage" : "M",
         "module" : "General Series",
         "req" : "1C",
         "entity" : "Series"
      },
      "(0038,0064)[<0>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "entity" : "Study",
         "req" : "1C",
         "usage" : "U",
         "module" : "Patient Study"
      },
      "(0028,0120)" : {
         "usage" : "M",
         "module" : "General Equipment",
         "entity" : "Equipment",
         "req" : "1C",
         "name" : "Pixel Padding Value",
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
                     "content" : [
                        "\n                      ",
                        {
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
                           ],
                           "el" : "listitem"
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
                           "el" : "listitem",
                           "content" : [
                              "\n                        ",
                              {
                                 "content" : [
                                    "This Attribute does apply to RT Dose and Segmentation instances, since they include Pixel Data."
                                 ],
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_26f7a207-e6e2-417b-bd79-9085f3fa60cb"
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
                                    "xml:id" : "para_77a29ed0-edb8-45c2-a3d1-d07bc572e485"
                                 },
                                 "content" : [
                                    "This Attribute does\n                          not apply when Float Pixel Data (7FE0,0008) or Double Float Pixel Data\n                          (7FE0,0009) are used instead of Pixel Data (7FE0,0010); Float Pixel\n                          Padding Value (0028,0122) or Double Float Pixel Padding Value\n                          (0028,0123), respectively, are used instead, and defined at the Image,\n                          not the Equipment, level."
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
               ]
            }
         ],
         "mod_tables" : [
            "table_C.7-8"
         ]
      },
      "(0028,0100)" : [
         {
            "desc" : [
               "Number of bits allocated for each pixel sample. Each sample shall have the same number of bits allocated. Bits Allocated (0028,0100) shall be either 1, or a multiple of 8. See ",
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
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "name" : "Bits Allocated",
            "req" : "1",
            "entity" : "Image",
            "module" : "Image Pixel",
            "usage" : "M"
         },
         {
            "name" : "Bits Allocated",
            "desc" : "Number of bits allocated for each pixel sample. Each sample shall have the same number of bits allocated. This value shall be 16.",
            "mod_tables" : [
               "table_C.8.22-3"
            ],
            "entity" : "Image",
            "req" : "1",
            "usage" : "M",
            "module" : "Enhanced PET Image"
         }
      ],
      "(0028,2110)" : {
         "name" : "Lossy Image Compression",
         "mod_tables" : [
            "table_C.8.22-3"
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
                     "linkend" : "sect_C.7.6.1.1.5",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ],
            "Required if SOP Class UID is not \"1.2.840.10008.5.1.4.1.1.128.1\" (Legacy Converted). May be present otherwise."
         ],
         "entity" : "Image",
         "req" : "1C",
         "usage" : "M",
         "module" : "Enhanced PET Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a120)" : {
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "DateTime",
         "module" : "General Series",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series"
      },
      "(0040,0555)[<0>](0040,a162)" : {
         "entity" : "Image",
         "req" : "1C",
         "module" : "Acquisition Context",
         "usage" : "M",
         "name" : "Rational Numerator Value",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ]
      },
      "(0008,113a)[<0>](0008,1115)" : {
         "module" : "Enhanced PET Image",
         "usage" : "M",
         "req" : "1",
         "entity" : "Image",
         "desc" : [
            "Sequence of Items where each Item includes the Attributes of a Series containing referenced Composite Object(s).",
            "One or more Items shall be included in this Sequence"
         ],
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3"
         ],
         "name" : "Referenced Series Sequence"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1160)" : {
         "entity" : "Patient",
         "req" : "1C",
         "module" : "Patient",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ]
      },
      "(0012,0050)" : {
         "name" : "Clinical Trial Time Point ID",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "desc" : [
            "An identifier specifying the one or more studies that are grouped together as a clinical time point or submission in a clinical trial or research. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.2.3.1.1"
               },
               "el" : "xref"
            },
            "."
         ],
         "entity" : "Study",
         "req" : "2",
         "usage" : "U",
         "module" : "Clinical Trial Study"
      },
      "(0020,9222)" : {
         "usage" : "U",
         "module" : "Multi-frame Dimension",
         "req" : "1",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "desc" : [
            "Identifies the sequence containing the indices used to specify the dimension of the multi-frame object.",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Dimension Index Sequence"
      },
      "(0040,0275)[<0>](0040,100a)" : {
         "entity" : "Series",
         "req" : "3",
         "usage" : "M",
         "module" : "General Series",
         "name" : "Reason for Requested Procedure Code Sequence",
         "desc" : [
            "Coded Reason for requesting this procedure.",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ]
      },
      "(0008,1049)[<0>](0008,0081)" : {
         "entity" : "Study",
         "req" : "3",
         "usage" : "M",
         "module" : "General Study",
         "name" : "Institution Address",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0400,0500)[<0>](0400,0520)" : {
         "entity" : "Image",
         "req" : "1",
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Encrypted Content",
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
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a160)" : {
         "name" : "Text Value",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "usage" : "U",
         "module" : "Specimen",
         "entity" : "Image",
         "req" : "1C"
      },
      "(0008,1111)[<0>](0008,1150)" : [
         {
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-11"
            ],
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "name" : "Referenced SOP Class UID",
            "req" : "1",
            "entity" : "Series",
            "usage" : "M",
            "module" : "General Series"
         },
         {
            "name" : "Referenced SOP Class UID",
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "mod_tables" : [
               "table_C.8.22-1",
               "table_10-11"
            ],
            "usage" : "M",
            "module" : "Enhanced PET Series",
            "entity" : "Series",
            "req" : "1"
         }
      ],
      "(0400,0561)[<0>](0400,0564)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "2",
         "entity" : "Image",
         "desc" : "The source that provided the SOP Instance prior to the removal or replacement of the values. For example, this might be the Institution from which imported SOP Instances were received.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Source of Previous Values"
      },
      "(0008,1052)[<0>](0008,0082)" : {
         "entity" : "Series",
         "req" : "1C",
         "module" : "General Series",
         "usage" : "M",
         "name" : "Institution Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a168)" : {
         "req" : "1C",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
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
         "name" : "Concept Code Sequence"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0020,000e)" : {
         "module" : "Common Instance Reference",
         "usage" : "U",
         "entity" : "Image",
         "req" : "1",
         "name" : "Series Instance UID",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "desc" : "Unique identifier of the Series containing the referenced Instances."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a30a)" : {
         "name" : "Numeric Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "req" : "1C"
      },
      "(0018,1084)" : {
         "req" : "2C",
         "entity" : "Image",
         "module" : "Cardiac Synchronization",
         "usage" : "U",
         "desc" : [
            "Number of R-R intervals rejected.",
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and Cardiac Synchronization Technique (0018,9037) equals other than NONE.",
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and Cardiac Synchronization Technique (0018,9037) equals other than NONE."
         ],
         "mod_tables" : [
            "table_C.7.6.18-1"
         ],
         "name" : "Intervals Rejected"
      },
      "(0040,0275)[<0>](0032,1060)" : {
         "entity" : "Series",
         "req" : "3",
         "module" : "General Series",
         "usage" : "M",
         "name" : "Requested Procedure Description",
         "desc" : "Institution-generated administrative description or classification of Requested Procedure.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ]
      },
      " (0010,0027) [<0>](0010,0028)" : {
         "entity" : "Patient",
         "req" : "3",
         "module" : "Patient",
         "usage" : "M",
         "name" : "Subject Relative Position in Image",
         "desc" : [
            "The position in the image pixel data of the individual subject identified in this sequence relative to the other subjects. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.4.1.1.1"
               }
            },
            "."
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ]
      },
      "(0008,1072)[<0>](0008,0081)" : {
         "usage" : "M",
         "module" : "General Series",
         "req" : "3",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "name" : "Institution Address"
      },
      "(0040,0275)[<0>](0040,1002)" : {
         "entity" : "Series",
         "req" : "3",
         "usage" : "M",
         "module" : "General Series",
         "name" : "Reason for the Requested Procedure",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "desc" : "Reason for requesting this procedure."
      },
      "(0018,9169)" : {
         "desc" : [
            "Cardiac arrhythmia rejection technique.",
            {
               "type" : "variablelist",
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
               "title" : "Defined Terms:"
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and Cardiac Synchronization Technique (0018,9037) equals PROSPECTIVE or RETROSPECTIVE.",
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and Cardiac Synchronization Technique (0018,9037) equals PROSPECTIVE or RETROSPECTIVE."
         ],
         "mod_tables" : [
            "table_C.7.6.18-1"
         ],
         "name" : "Cardiac Beat Rejection Technique",
         "req" : "1C",
         "entity" : "Image",
         "usage" : "U",
         "module" : "Cardiac Synchronization"
      },
      "(0008,1115)[<0>](0008,114a)" : {
         "module" : "Common Instance Reference",
         "usage" : "U",
         "req" : "1",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Referenced Instance Sequence"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)" : {
         "module" : "Patient",
         "usage" : "M",
         "req" : "3",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
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
                     "attrs" : {
                        "xml:id" : "para_6a16f809-6605-41ac-8d02-b6104b0bc0ad"
                     },
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 6 (Assigning Facility)."
                     ]
                  },
                  "\n              "
               ]
            }
         ],
         "name" : "Assigning Facility Sequence"
      },
      "(0020,1040)" : {
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
         "mod_tables" : [
            "table_C.7-6"
         ],
         "name" : "Position Reference Indicator",
         "req" : "2",
         "entity" : "Frame of Reference",
         "module" : "Frame of Reference",
         "usage" : "M"
      },
      "(0008,0122)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Image",
         "req" : "3",
         "name" : "Mapping Resource Name",
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
         ]
      },
      "(0018,106a)" : {
         "mod_tables" : [
            "table_C.7-7"
         ],
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
         "name" : "Synchronization Trigger",
         "usage" : "U",
         "module" : "Synchronization",
         "req" : "1",
         "entity" : "Frame of Reference"
      },
      "(0040,0560)[<0>](0040,0562)" : {
         "req" : "2",
         "entity" : "Image",
         "module" : "Specimen",
         "usage" : "U",
         "desc" : [
            "The name or code for the institution that has assigned the Specimen Identifier.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Issuer of the Specimen Identifier Sequence"
      },
      "(0040,0275)[<0>](0032,1064)" : {
         "name" : "Requested Procedure Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "desc" : [
            "A sequence that conveys the Procedure Type of the requested procedure.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "req" : "3"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)" : {
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "A MAC Calculation from data in the referenced SOP Instance that can be used as a data integrity check.",
            "Only a single Item is permitted in this Sequence.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "This Attribute may be used in place of Referenced Digital Signature Sequence (0400,0402), particularly if the SOP Instance does not have appropriate Digital Signatures that can be referenced."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_85131baf-ebaa-41ca-b044-07c75698df97"
                     }
                  },
                  "\n                  "
               ]
            }
         ],
         "name" : "Referenced SOP Instance MAC Sequence",
         "req" : "3",
         "entity" : "Image",
         "module" : "Enhanced PET Image",
         "usage" : "M"
      },
      "(4ffe,0001)[<0>](0400,0005)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "1",
         "entity" : "Image",
         "desc" : "A number, unique within this SOP Instance, used to identify this MAC Parameters Sequence (4FFE,0001) item from an Item of the Digital Signatures Sequence (FFFA,FFFA).",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "MAC ID Number"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0015)" : {
         "module" : "Enhanced PET Image",
         "usage" : "M",
         "entity" : "Image",
         "req" : "1",
         "name" : "MAC Algorithm",
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
                        "xml:id" : "para_07b64781-f4ca-4d53-9b0b-e3d8032bb048"
                     }
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0012,0083)[<0>](0012,0084)" : {
         "usage" : "U",
         "module" : "Clinical Trial Study",
         "entity" : "Study",
         "req" : "1C",
         "name" : "Distribution Type",
         "mod_tables" : [
            "table_C.7-4b"
         ],
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
         ]
      },
      "(0008,1049)[<0>](0040,1103)" : {
         "name" : "Person's Telephone Numbers",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Person's telephone number(s)",
         "entity" : "Study",
         "req" : "3",
         "usage" : "M",
         "module" : "General Study"
      },
      "(0040,0555)[<0>](0040,08ea)" : {
         "name" : "Measurement Units Code Sequence",
         "desc" : [
            "Units of measurement.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Numeric Value (0040,A30A) is sent. Shall not be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "entity" : "Image",
         "req" : "1C",
         "usage" : "M",
         "module" : "Acquisition Context"
      },
      "(0008,0090)" : {
         "module" : "General Study",
         "usage" : "M",
         "req" : "2",
         "entity" : "Study",
         "desc" : "Name of the patient's referring physician",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Referring Physician's Name"
      },
      "(0010,0212)" : {
         "module" : "Patient",
         "usage" : "M",
         "req" : "3",
         "entity" : "Patient",
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
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Strain Description"
      },
      "(0040,0513)[<0>](0040,0031)" : {
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "name" : "Local Namespace Entity ID",
         "module" : "Specimen",
         "usage" : "U",
         "req" : "1C",
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a120)" : {
         "entity" : "Image",
         "req" : "1C",
         "usage" : "U",
         "module" : "Specimen",
         "name" : "DateTime",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ]
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0020)" : {
         "req" : "1",
         "entity" : "Image",
         "usage" : "M",
         "module" : "Enhanced PET Image",
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3",
            "table_C.17-3a"
         ],
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
         "name" : "Data Elements Signed"
      },
      "(0010,0010)" : {
         "name" : "Patient's Name",
         "desc" : "Patient's full name.",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "req" : "2",
         "usage" : "M",
         "module" : "Patient"
      },
      "(0008,0051)[<0>](0040,0033)" : {
         "mod_tables" : [
            "table_C.7-3",
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
         "name" : "Universal Entity ID Type",
         "module" : "General Study",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Study"
      },
      "(0012,0020)" : {
         "usage" : "U",
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
         "req" : "1",
         "name" : "Clinical Trial Protocol ID",
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
         "mod_tables" : [
            "table_C.7-2b"
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
                     "content" : [
                        "The VR of this attribute has changed from UT to UR."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_398d64f0-0a7e-4cfe-b480-b482ee2cb7a7"
                     }
                  },
                  "\n"
               ]
            }
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Retrieve URI",
         "req" : "3",
         "entity" : "Image",
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0040,a170)" : {
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Purpose of Reference Code Sequence",
         "req" : "3",
         "entity" : "Image",
         "usage" : "M",
         "module" : "Enhanced PET Image"
      },
      "(0008,0096)[<0>](0008,0081)" : {
         "req" : "3",
         "entity" : "Study",
         "usage" : "M",
         "module" : "General Study",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Address"
      },
      "(0018,0036)[<0>](0018,0027)" : {
         "name" : "Intervention Drug Stop Time",
         "desc" : "Time of completion of administration of the intervention drug.",
         "mod_tables" : [
            "table_C.7-19"
         ],
         "module" : "Intervention",
         "usage" : "U",
         "entity" : "Image",
         "req" : "3"
      },
      "(0008,0300)[<0>](0008,0301)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "1",
         "name" : "Private Group Reference",
         "desc" : "Odd group number within which the Private Data Element block is reserved.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0018,1801)" : {
         "module" : "Synchronization",
         "usage" : "U",
         "entity" : "Frame of Reference",
         "req" : "3",
         "name" : "Time Source",
         "desc" : "ID of equipment or system providing time reference",
         "mod_tables" : [
            "table_C.7-7"
         ]
      },
      "(0018,0036)[<0>](0018,0038)" : {
         "name" : "Intervention Status",
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "mod_tables" : [
            "table_C.7-19"
         ],
         "module" : "Intervention",
         "usage" : "U",
         "entity" : "Image",
         "req" : "2"
      },
      "(0010,1100)[<0>](0040,e025)[<1>](0008,1190)" : {
         "module" : "Patient",
         "usage" : "M",
         "req" : "1",
         "entity" : "Patient",
         "desc" : "URL specifying the location of the referenced instance(s).",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "Retrieve URL"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)" : {
         "entity" : "Patient",
         "req" : "3",
         "usage" : "M",
         "module" : "Patient",
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
                     "content" : [
                        "Equivalent to HL7 v2 CX component 6 (Assigning Facility)."
                     ],
                     "attrs" : {
                        "xml:id" : "para_6a16f809-6605-41ac-8d02-b6104b0bc0ad"
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
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a122)" : {
         "entity" : "Image",
         "req" : "1C",
         "module" : "Specimen",
         "usage" : "U",
         "name" : "Time",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0020)" : {
         "usage" : "M",
         "module" : "Enhanced PET Image",
         "req" : "1",
         "entity" : "Image",
         "desc" : [
            "A list of Data Element Tags in the order they appear at the top level of the referenced SOP Instance that identify the Data Elements used in creating the MAC. See ",
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
            "table_C.8.22-3",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "name" : "Data Elements Signed"
      },
      "(0010,0216)[<0>](0010,0217)" : {
         "entity" : "Patient",
         "req" : "1",
         "usage" : "M",
         "module" : "Patient",
         "name" : "Strain Source",
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
         ]
      },
      "(0018,a001)[<0>](0018,1200)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Image",
         "req" : "3",
         "name" : "Date of Last Calibration",
         "mod_tables" : [
            "table_C.12-1"
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
      "(0012,0010)" : {
         "module" : "Clinical Trial Subject",
         "usage" : "U",
         "entity" : "Patient",
         "req" : "1",
         "name" : "Clinical Trial Sponsor Name",
         "desc" : [
            "The name of the clinical trial or research sponsor. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.3.1.1"
               }
            },
            "."
         ],
         "mod_tables" : [
            "table_C.7-2b"
         ]
      },
      "(0028,1203)" : {
         "name" : "Blue Palette Color Lookup Table Data",
         "mod_tables" : [
            "table_C.7-11b"
         ],
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
         "module" : "Image Pixel",
         "usage" : "M",
         "entity" : "Image",
         "req" : "1C"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1160)" : {
         "name" : "Referenced Frame Number",
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
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "req" : "1C",
         "module" : "General Series",
         "usage" : "M"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0010)" : {
         "module" : "Enhanced PET Image",
         "usage" : "M",
         "entity" : "Image",
         "req" : "1",
         "name" : "MAC Calculation Transfer Syntax UID",
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
                                 "attrs" : {
                                    "xml:id" : "para_d3b7f806-4134-47a2-bf65-131f44d9fa2a"
                                 },
                                 "content" : [
                                    "Certain Transfer Syntaxes, particularly those that are used with compressed data, allow the fragmentation of the pixel data to change. If such fragmentation changes, Digital Signatures generated with such Transfer Syntaxes could become invalid."
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
            "table_C.8.22-3",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0062,000b)" : {
         "req" : "1C",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Referenced Segment Number"
      },
      "(0012,0083)[<0>](0012,0020)" : {
         "module" : "Clinical Trial Study",
         "usage" : "U",
         "req" : "1C",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "desc" : [
            "The identifier of the protocol for which consent to distribute has been granted.",
            [
               "Required if Distribution Type (0012,0084) is NAMED_PROTOCOL and the protocol is not that which is specified in Clinical Trial Protocol ID (0012,0020) in the ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: title",
                     "linkend" : "sect_C.7.1.3"
                  }
               },
               "."
            ]
         ],
         "name" : "Clinical Trial Protocol ID"
      },
      "(0028,0004)" : [
         {
            "mod_tables" : [
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
            "name" : "Photometric Interpretation",
            "req" : "1",
            "entity" : "Image",
            "module" : "Image Pixel",
            "usage" : "M"
         },
         {
            "module" : "Enhanced PET Image",
            "usage" : "M",
            "entity" : "Image",
            "req" : "1",
            "name" : "Photometric Interpretation",
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
               },
               [
                  "See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.7.6.3.1.2"
                     }
                  },
                  " for definition of this term."
               ]
            ],
            "mod_tables" : [
               "table_C.8.22-3"
            ]
         }
      ],
      "(0008,1200)[<0>](0008,1115)" : {
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Referenced Series Sequence",
         "req" : "1",
         "entity" : "Image",
         "usage" : "U",
         "module" : "Common Instance Reference"
      },
      "(0008,1052)[<0>](0040,1103)" : {
         "module" : "General Series",
         "usage" : "M",
         "req" : "3",
         "entity" : "Series",
         "desc" : "Person's telephone number(s)",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "name" : "Person's Telephone Numbers"
      },
      "(0028,2112)" : {
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
         "mod_tables" : [
            "table_C.8.22-3"
         ],
         "name" : "Lossy Image Compression Ratio",
         "req" : "1C",
         "entity" : "Image",
         "module" : "Enhanced PET Image",
         "usage" : "M"
      },
      "(0018,9073)" : {
         "name" : "Acquisition Duration",
         "mod_tables" : [
            "table_C.8.22-3"
         ],
         "desc" : [
            [
               "The time in seconds needed to complete the acquisition of data. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.16.2.2.1",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ],
            "Required if Image Type (0008,0008) Value 1 of this frame is ORIGINAL and SOP Class UID is not \"1.2.840.10008.5.1.4.1.1.128.1\" (Legacy Converted), may be present otherwise."
         ],
         "entity" : "Image",
         "req" : "1C",
         "module" : "Enhanced PET Image",
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "entity" : "Patient",
         "req" : "1C",
         "usage" : "M",
         "module" : "Patient",
         "name" : "Universal Entity ID",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a161)" : {
         "usage" : "M",
         "module" : "General Series",
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Floating Point Value"
      },
      "(0088,0200)[<0>](0028,2002)" : {
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
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.7-11b"
         ],
         "module" : "Enhanced PET Image",
         "usage" : "M",
         "entity" : "Image",
         "req" : "3"
      },
      "(0008,1062)[<0>](0040,1101)" : {
         "req" : "1",
         "entity" : "Study",
         "usage" : "M",
         "module" : "General Study",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person Identification Code Sequence"
      },
      "(0040,0512)" : {
         "module" : "Specimen",
         "usage" : "U",
         "entity" : "Image",
         "req" : "1",
         "name" : "Container Identifier",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
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
         ]
      },
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "module" : "Common Instance Reference",
         "usage" : "U",
         "req" : "1",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1155)" : {
         "req" : "1",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID"
      },
      "(0040,0251)" : {
         "usage" : "M",
         "module" : "General Series",
         "req" : "3",
         "entity" : "Series",
         "desc" : "Time at which the Performed Procedure Step ended.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "name" : "Performed Procedure Step End Time"
      },
      "(0008,009d)[<0>](0040,1103)" : {
         "entity" : "Study",
         "req" : "3",
         "usage" : "M",
         "module" : "General Study",
         "name" : "Person's Telephone Numbers",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Person's telephone number(s)"
      },
      "(0010,0035)" : {
         "usage" : "M",
         "module" : "Patient",
         "req" : "1C",
         "entity" : "Patient",
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
         "name" : "Patient's Alternative Calendar"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0039)" : {
         "name" : "Assigning Jurisdiction Code Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
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
         "entity" : "Patient",
         "req" : "3",
         "module" : "Patient",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)" : {
         "name" : "Protocol Context Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "desc" : "Sequence that specifies the context for the Scheduled Protocol Code Sequence Item. One or more Items are permitted in this Sequence.",
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "req" : "3"
      },
      "(0010,1100)[<0>](0040,e024)[<1>](0040,e030)" : {
         "req" : "1",
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "desc" : "Uniquely identifies a Repository from which the referenced instances can be retrieved.",
         "name" : "Repository Unique ID"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a043)" : {
         "req" : "1",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Concept Name Code Sequence"
      },
      "(0010,1002)[<0>](0010,0021)" : {
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "3",
         "name" : "Issuer of Patient ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
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
         ]
      },
      "(0010,0033)" : {
         "name" : "Patient's Birth Date in Alternative Calendar",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "Date of birth of the named patient in the Alternative Calendar (0010,0035).",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_d088e7b4-910c-4c72-8abf-cfb5a85daa67"
                     },
                     "el" : "para",
                     "content" : [
                        "No format is specified for alternative calendar dates so none should be assumed."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "entity" : "Patient",
         "req" : "3",
         "usage" : "M",
         "module" : "Patient"
      },
      "(0018,a001)" : {
         "req" : "3",
         "entity" : "Image",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Contributing Equipment Sequence"
      },
      "(0008,0012)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Image",
         "req" : "3",
         "name" : "Instance Creation Date",
         "desc" : [
            "Date the SOP Instance was created.",
            "This is the date that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "1C",
         "name" : "Universal Entity ID Type",
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
         ]
      },
      "(0040,0515)[<0>](0040,0512)" : {
         "name" : "Container Identifier",
         "desc" : "The identifier for the container that contains the specimen(s) being imaged.",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "entity" : "Image",
         "req" : "1",
         "module" : "Specimen",
         "usage" : "U"
      },
      "(0038,0014)" : {
         "entity" : "Study",
         "req" : "3",
         "usage" : "U",
         "module" : "Patient Study",
         "name" : "Issuer of Admission ID Sequence",
         "desc" : [
            "Identifier of the Assigning Authority that issued Admission ID (0038,0010).",
            "Only a single Item is permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0008,113a)[<0>](0020,000d)" : {
         "desc" : "Unique identifier for the Study",
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3"
         ],
         "name" : "Study Instance UID",
         "usage" : "M",
         "module" : "Enhanced PET Image",
         "req" : "1",
         "entity" : "Image"
      },
      "(0008,1062)[<0>](0008,0081)" : {
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Address",
         "usage" : "M",
         "module" : "General Study",
         "req" : "3",
         "entity" : "Study"
      },
      "(0008,0096)[<0>](0040,1101)" : {
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
         "module" : "General Study",
         "usage" : "M",
         "entity" : "Study",
         "req" : "1"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a162)" : {
         "entity" : "Series",
         "req" : "1C",
         "module" : "General Series",
         "usage" : "M",
         "name" : "Rational Numerator Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a123)" : {
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Person Name",
         "req" : "1C",
         "entity" : "Image",
         "usage" : "U",
         "module" : "Specimen"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a162)" : {
         "entity" : "Image",
         "req" : "1C",
         "usage" : "U",
         "module" : "Specimen",
         "name" : "Rational Numerator Value",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ]
      },
      "(0028,1101)" : {
         "name" : "Red Palette Color Lookup Table Descriptor",
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
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "module" : "Image Pixel",
         "usage" : "M",
         "entity" : "Image",
         "req" : "1C"
      },
      "(0008,0110)[<0>](0008,010c)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The coding scheme UID identifier. Required if coding scheme is identified by an ISO 8824 object identifier compatible with the UI VR.",
         "name" : "Coding Scheme UID"
      },
      "(0040,0520)[<0>](0050,0015)" : {
         "req" : "3",
         "entity" : "Image",
         "usage" : "U",
         "module" : "Specimen",
         "desc" : "Width in mm of container component.",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Container Component Width"
      },
      "(0008,009d)[<0>](0040,1101)" : {
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
         "req" : "1",
         "entity" : "Study",
         "usage" : "M",
         "module" : "General Study"
      },
      "(0040,0555)[<0>](0040,a30a)" : {
         "entity" : "Image",
         "req" : "1C",
         "module" : "Acquisition Context",
         "usage" : "M",
         "name" : "Numeric Value",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a set of one or more numeric values.",
            "Required if the value that Concept Name Code Sequence (0040,A043) requires (implies) is a set of one or more integers or real numbers. Shall not be present otherwise."
         ]
      },
      "(0020,9256)" : {
         "module" : "Respiratory Synchronization",
         "usage" : "U",
         "req" : "1C",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.18-2"
         ],
         "desc" : [
            [
               "Respiratory trigger threshold in percent of the chest expansion for the frame relative to the last Respiratory-Peak. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.16.2.17.1"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            "Required if Respiratory Motion Compensation Technique (0018,9170) equals other than NONE, REALTIME or BREATH_HOLD and if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
         ],
         "name" : "Respiratory Trigger Delay Threshold"
      },
      "(0012,0062)" : {
         "entity" : "Patient",
         "req" : "3",
         "module" : "Patient",
         "usage" : "M",
         "name" : "Patient Identity Removed",
         "mod_tables" : [
            "table_C.7-1"
         ],
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
         "name" : "Person Name",
         "req" : "1C",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M"
      },
      "(0008,1120)[<0>](0008,1155)" : {
         "module" : "Patient",
         "usage" : "M",
         "entity" : "Patient",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ]
      },
      "(0028,1202)" : {
         "usage" : "M",
         "module" : "Image Pixel",
         "req" : "1C",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-11b"
         ],
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
         "name" : "Green Palette Color Lookup Table Data"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,08ea)" : {
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "module" : "General Series",
         "name" : "Measurement Units Code Sequence",
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
      "(0040,0520)[<0>](0050,001d)" : {
         "name" : "Container Component Diameter",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "desc" : "Diameter in mm of container component for cylindrical or circular components.",
         "entity" : "Image",
         "req" : "3",
         "usage" : "U",
         "module" : "Specimen"
      },
      "(0028,0034)" : {
         "mod_tables" : [
            "table_C.7-11b"
         ],
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
         "name" : "Pixel Aspect Ratio",
         "req" : "1C",
         "entity" : "Image",
         "usage" : "M",
         "module" : "Image Pixel"
      },
      "(0040,0560)[<0>](0008,2228)[<1>](0008,2230)" : {
         "name" : "Primary Anatomic Structure Modifier Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-8"
         ],
         "desc" : [
            "Sequence of Items that modifies the primary anatomic structure of interest in this Instance.",
            "One or more Items are permitted in this Sequence."
         ],
         "usage" : "U",
         "module" : "Specimen",
         "entity" : "Image",
         "req" : "3"
      },
      "(0088,0200)[<0>](0028,0010)" : {
         "name" : "Rows",
         "desc" : "Number of rows in the image.",
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.7-11b"
         ],
         "usage" : "M",
         "module" : "Enhanced PET Image",
         "entity" : "Image",
         "req" : "1"
      },
      "(fffa,fffa)[<0>](0400,0115)" : {
         "name" : "Certificate of Signer",
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
                     "xrefstyle" : "select: labelnumber",
                     "targetptr" : "PS3.15",
                     "targetdoc" : "PS3.15"
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
                     "el" : "orderedlist"
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "1"
      },
      "(0010,2297)" : {
         "name" : "Responsible Person",
         "desc" : [
            "Name of person with medical or welfare decision making authority for the patient.",
            "Required if the patient is an animal. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "2C"
      },
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1155)" : {
         "req" : "1",
         "entity" : "Image",
         "usage" : "U",
         "module" : "Common Instance Reference",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0035)" : {
         "name" : "Identifier Type Code",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "3"
      },
      "(0008,0300)[<0>](0008,0304)" : {
         "entity" : "Image",
         "req" : "1C",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Nonidentifying Private Elements",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "List of Private Data Elements in block that do not contain identifying\n                  information (are safe from identity leakage).",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once.",
            "Required if Block Identifying Information Status (0008,0303) equals MIXED."
         ]
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0020,000e)" : {
         "req" : "1",
         "entity" : "Image",
         "usage" : "M",
         "module" : "Enhanced PET Image",
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "Unique identifier of a Series that is part of this Study and contains the referenced Composite Object(s).",
         "name" : "Series Instance UID"
      },
      "(0008,1200)[<0>](0020,000d)" : {
         "usage" : "U",
         "module" : "Common Instance Reference",
         "entity" : "Image",
         "req" : "1",
         "name" : "Study Instance UID",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "desc" : "Unique identifier of the Study containing the referenced Instances."
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0010)" : {
         "name" : "MAC Calculation Transfer Syntax UID",
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "The Transfer Syntax UID used to encode the values of the Data Elements included in the MAC calculation. When computing the MAC, only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
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
                                 "attrs" : {
                                    "xml:id" : "para_d3b7f806-4134-47a2-bf65-131f44d9fa2a"
                                 },
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
                                 "el" : "para",
                                 "content" : [
                                    "This does not constrain the transfer syntax used to transmit the object."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_2a42563c-d7f6-4749-9a5a-b563109dea18"
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
         "entity" : "Image",
         "req" : "1",
         "module" : "Enhanced PET Image",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)" : {
         "name" : "Referenced SOP Sequence",
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
         "entity" : "Series",
         "req" : "1C",
         "module" : "General Series",
         "usage" : "M"
      },
      "(0040,0520)[<0>](0050,001a)" : {
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
         "usage" : "U",
         "module" : "Specimen",
         "req" : "3",
         "entity" : "Image"
      },
      "(0400,0561)[<0>](0400,0565)" : {
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Reason for the Attribute Modification",
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "1",
         "entity" : "Image"
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
         "name" : "High R-R Value",
         "req" : "2C",
         "entity" : "Image",
         "module" : "Cardiac Synchronization",
         "usage" : "U"
      },
      "(0008,1084)" : {
         "name" : "Admitting Diagnoses Code Sequence",
         "desc" : [
            "A sequence that conveys the admitting diagnosis (diagnoses).",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "usage" : "U",
         "entity" : "Study",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1155)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series"
      },
      "(0010,1100)[<0>](0040,e022)" : {
         "name" : "DICOM Media Retrieval Sequence",
         "desc" : [
            "Details for retrieving instances from Media.",
            "Required if DICOM Retrieval Sequence (0040,E021), WADO Retrieval Sequence (0040,E023), and WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "This sequence shall only identify media known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "1C"
      },
      "(0040,0513)" : {
         "module" : "Specimen",
         "usage" : "U",
         "req" : "2",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "desc" : [
            "Organization that assigned the Container Identifier.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "name" : "Issuer of the Container Identifier Sequence"
      },
      " (0010,0027) [<0>](0018,5100)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
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
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.3.1.1.2"
                  }
               },
               " for Defined Terms and further explanation."
            ]
         ],
         "name" : "Patient Position",
         "usage" : "M",
         "module" : "Patient",
         "req" : "3",
         "entity" : "Patient"
      },
      "(0008,9207)" : {
         "usage" : "M",
         "module" : "Enhanced PET Image",
         "entity" : "Image",
         "req" : "1",
         "name" : "Volume Based Calculation Technique",
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.8-131"
         ],
         "desc" : [
            "Method used for volume calculations with frames in the SOP Instance. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.16.2.1.3",
                  "xrefstyle" : "select: label"
               }
            },
            " for a description and Defined Terms."
         ]
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0015)" : {
         "req" : "1",
         "entity" : "Image",
         "module" : "Enhanced PET Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3",
            "table_C.17-3a"
         ],
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
               "content" : [
                  "\n                    ",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_07b64781-f4ca-4d53-9b0b-e3d8032bb048"
                     }
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "name" : "MAC Algorithm"
      },
      "(0008,1050)" : {
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "req" : "3",
         "name" : "Performing Physician's Name",
         "desc" : "Name of the physician(s) administering the Series.",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0307)" : {
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
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
                                    "Further explanation of these actions can be found in ",
                                    {
                                       "el" : "olink",
                                       "attrs" : {
                                          "targetptr" : "sect_E.3.1",
                                          "xrefstyle" : "template:PS3.15 Section %n %t",
                                          "targetdoc" : "PS3.15"
                                       }
                                    },
                                    "."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_62b4d252-a377-4a7b-9905-82f5437ccd6c"
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
            }
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Deidentification Action",
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "1",
         "entity" : "Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a040)" : {
         "entity" : "Series",
         "req" : "1",
         "usage" : "M",
         "module" : "General Series",
         "name" : "Value Type",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
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
         ]
      },
      "(0008,1052)[<0>](0040,1101)" : {
         "usage" : "M",
         "module" : "General Series",
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
         "name" : "Person Identification Code Sequence"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0404)" : {
         "desc" : [
            "The MAC generated as described in ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.12.1.1.3"
               },
               "el" : "xref"
            },
            ", but unencrypted and without inclusion of fields from the Digital Signatures Sequence. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.12.1.1.3.1.2"
               }
            },
            "."
         ],
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "name" : "MAC",
         "usage" : "M",
         "module" : "Enhanced PET Image",
         "req" : "1",
         "entity" : "Image"
      },
      "(0008,9121)[<0>](0008,1115)" : {
         "module" : "Enhanced PET Image",
         "usage" : "M",
         "entity" : "Image",
         "req" : "1",
         "name" : "Referenced Series Sequence",
         "desc" : [
            "Sequence of Items where each Item includes the Attributes of a Series containing referenced Composite Object(s).",
            "One or more Items shall be included in this Sequence"
         ],
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3"
         ]
      },
      "(0010,0026)" : {
         "usage" : "M",
         "module" : "Patient",
         "req" : "3",
         "entity" : "Patient",
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
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "name" : "Source Patient Group Identification Sequence"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M"
      },
      "(0010,0040)" : {
         "module" : "Patient",
         "usage" : "M",
         "req" : "2",
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient's Sex"
      },
      "(0018,0036)[<0>](0054,0302)" : {
         "desc" : [
            "Sequence that identifies the Administration Route.",
            "Only a single Item is permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-19"
         ],
         "name" : "Administration Route Code Sequence",
         "req" : "3",
         "entity" : "Image",
         "module" : "Intervention",
         "usage" : "U"
      },
      "(0008,1072)[<0>](0008,0080)" : {
         "name" : "Institution Name",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "req" : "1C"
      },
      "(0028,0102)" : [
         {
            "entity" : "Image",
            "req" : "1",
            "module" : "Image Pixel",
            "usage" : "M",
            "name" : "High Bit",
            "desc" : [
               "Most significant bit for pixel sample data. Each sample shall have the same high bit. High Bit (0028,0102) shall be one less than Bits Stored (0028,0101). See ",
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
            "mod_tables" : [
               "table_C.7-11b"
            ]
         },
         {
            "usage" : "M",
            "module" : "Enhanced PET Image",
            "req" : "1",
            "entity" : "Image",
            "desc" : "Most significant bit for pixel sample data. Each sample shall have the same high bit. Shall be one less than the value in Bits Stored (0028,0101).",
            "mod_tables" : [
               "table_C.8.22-3"
            ],
            "name" : "High Bit"
         }
      ],
      "(0020,9222)[<0>](0020,9167)" : {
         "desc" : [
            "Contains the Data Element Tag of the Functional Group Sequence that contains the Attribute that is referenced by the Dimension Index Pointer (0020,9165).",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.6.17.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            "Required if the value of Dimension Index Pointer (0020,9165) is the Data Element Tag of an Attribute that is contained within a Functional Group Sequence."
         ],
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "name" : "Functional Group Pointer",
         "module" : "Multi-frame Dimension",
         "usage" : "U",
         "req" : "1C",
         "entity" : "Image"
      },
      "(0008,0053)" : {
         "req" : "1C",
         "entity" : "Image",
         "module" : "SOP Common",
         "usage" : "M",
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
      "(0018,1030)" : {
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "req" : "3",
         "name" : "Protocol Name",
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
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0088,0140)" : {
         "desc" : "Uniquely identifies the Storage Media on which the Composite Object(s) reside.",
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "name" : "Storage Media File-Set UID",
         "module" : "Enhanced PET Image",
         "usage" : "M",
         "req" : "3",
         "entity" : "Image"
      },
      "(0008,9154)[<0>](0020,000d)" : {
         "desc" : "Unique identifier for the Study",
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3"
         ],
         "name" : "Study Instance UID",
         "module" : "Enhanced PET Image",
         "usage" : "M",
         "req" : "1",
         "entity" : "Image"
      },
      "(0020,9222)[<0>](0020,9238)" : {
         "entity" : "Image",
         "req" : "1C",
         "usage" : "U",
         "module" : "Multi-frame Dimension",
         "name" : "Functional Group Private Creator",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "desc" : [
            "Identification of the creator of a group of private data elements.",
            "Required if the Functional Group Pointer 0020,9167) value is the Data Element Tag of a Private Attribute."
         ]
      },
      "(0088,0200)[<0>](7fe0,0010)" : {
         "module" : "Enhanced PET Image",
         "usage" : "M",
         "entity" : "Image",
         "req" : "1C",
         "name" : "Pixel Data",
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.7-11b"
         ],
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
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1155)" : {
         "entity" : "Image",
         "req" : "1",
         "module" : "Enhanced PET Image",
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ]
      },
      "(0018,0036)" : {
         "name" : "Intervention Sequence",
         "mod_tables" : [
            "table_C.7-19"
         ],
         "desc" : [
            "Sequence describing interventional therapies or procedures.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Image",
         "req" : "3",
         "usage" : "U",
         "module" : "Intervention"
      },
      "(0008,009c)" : {
         "name" : "Consulting Physician's Name",
         "desc" : "Consulting physician(s) for this patient visit.",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "module" : "General Study",
         "entity" : "Study",
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a124)" : {
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1C",
         "name" : "UID",
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
      "(0400,0561)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "3",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Sequence of Items containing all attributes that were removed or replaced by other values in the main data set.",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Original Attributes Sequence"
      },
      "(0040,0555)[<0>](0040,a136)" : {
         "usage" : "M",
         "module" : "Acquisition Context",
         "entity" : "Image",
         "req" : "1C",
         "name" : "Referenced Frame Numbers",
         "desc" : [
            "References one or more frames in a Multi-frame SOP Instance. The first frame shall be denoted as frame number one.",
            "Required if this SOP Instance is a Multi-frame SOP Instance and the values in this Sequence item do not apply to all frames."
         ],
         "mod_tables" : [
            "table_C.7.6.14-1"
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0039)" : {
         "req" : "3",
         "entity" : "Patient",
         "usage" : "M",
         "module" : "Patient",
         "desc" : [
            "The geo-political body that assigned the patient identifier. Typically a code for a country or a state/province. Only a single Item is permitted in this Sequence.",
            {
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
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Assigning Jurisdiction Code Sequence"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a162)" : {
         "module" : "General Series",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Rational Numerator Value"
      },
      "(0020,9172)[<0>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Image",
         "req" : "1",
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0033)" : {
         "entity" : "Patient",
         "req" : "1C",
         "usage" : "M",
         "module" : "Patient",
         "name" : "Universal Entity ID Type",
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
                     "content" : [
                        "Equivalent to HL7 v2 CX component 4 subcomponent 3 (Universal ID Type)."
                     ],
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
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0100)" : {
         "entity" : "Image",
         "req" : "1",
         "usage" : "M",
         "module" : "Enhanced PET Image",
         "name" : "Digital Signature UID",
         "desc" : "The Unique Identifier of a Digital Signature held in the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0040,0560)[<0>](0040,0620)" : {
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
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
            "One or more Items shall be included in this Sequence.",
            "Required if multiple specimens present in the image. May be present otherwise."
         ],
         "name" : "Specimen Localization Content Item Sequence",
         "req" : "1C",
         "entity" : "Image",
         "module" : "Specimen",
         "usage" : "U"
      },
      "(0010,1100)" : {
         "req" : "3",
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "A photo to confirm the identity of a patient.",
            "Only a single Item is permitted in this Sequence.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: labelnumber",
                     "linkend" : "sect_C.2.2.1.1"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "name" : "Referenced Patient Photo Sequence"
      },
      "(0008,0300)[<0>](0008,0302)" : {
         "name" : "Private Creator Reference",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "The value of the Private Creator Data Element value used to reserve the block\n                  of Private Data Elements whose characteristics are described in this Item.",
            {
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
               ],
               "el" : "note"
            }
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "1"
      },
      "(0008,1250)[<0>](0040,a170)" : [
         {
            "module" : "General Series",
            "usage" : "M",
            "entity" : "Series",
            "req" : "2",
            "name" : "Purpose of Reference Code Sequence",
            "desc" : [
               "Describes the purpose for which the reference is made.",
               "Zero or more Items shall be included in this Sequence.",
               "When absent, implies that the reason for the reference is unknown."
            ],
            "mod_tables" : [
               "table_C.7-5a"
            ]
         },
         {
            "req" : "2",
            "entity" : "Series",
            "usage" : "M",
            "module" : "Enhanced PET Series",
            "desc" : [
               "Describes the purpose for which the reference is made.",
               "Zero or more Items shall be included in this Sequence.",
               "When absent, implies that the reason for the reference is unknown."
            ],
            "mod_tables" : [
               "table_C.8.22-1"
            ],
            "name" : "Purpose of Reference Code Sequence"
         }
      ],
      "(0032,1034)" : {
         "name" : "Requesting Service Code Sequence",
         "desc" : [
            "Institutional department where the request initiated.",
            "Only a single item is permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "module" : "General Study",
         "entity" : "Study",
         "req" : "3"
      },
      "(0008,9092)" : {
         "desc" : [
            [
               "Full set of Composite SOP Instances referring to image SOP Instances inside the frames of this Enhanced PET Image SOP Instance. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.13.2.1.2",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ],
            "One or more Items shall be included in this Sequence.",
            "Required if the Referenced Image Sequence (0008,1140) is present."
         ],
         "mod_tables" : [
            "table_C.8.22-3"
         ],
         "name" : "Referenced Image Evidence Sequence",
         "req" : "1C",
         "entity" : "Image",
         "usage" : "M",
         "module" : "Enhanced PET Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0062,000b)" : {
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Referenced Segment Number",
         "module" : "General Series",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series"
      },
      "(0012,0064)" : {
         "req" : "1C",
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "A code describing the mechanism or method use to remove the patient's identity.",
            "One or more Items shall be included in this Sequence. Multiple items are used if successive de-identification steps have been performed or to describe options of a defined profile.",
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method (0012,0063) is not present. May be present otherwise."
         ],
         "name" : "De-identification Method Code Sequence"
      },
      "(0040,0560)[<0>](0040,0562)[<1>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "entity" : "Image",
         "req" : "1C",
         "usage" : "U",
         "module" : "Specimen"
      },
      "(0012,0060)" : {
         "name" : "Clinical Trial Coordinating Center Name",
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
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "entity" : "Series",
         "req" : "2",
         "usage" : "U",
         "module" : "Clinical Trial Series"
      },
      "(0008,1070)" : {
         "usage" : "M",
         "module" : "General Series",
         "req" : "3",
         "entity" : "Series",
         "desc" : "Name(s) of the operator(s) supporting the Series.",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Operators' Name"
      },
      "(0088,0200)[<0>](0028,0101)" : {
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
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.7-11b"
         ],
         "name" : "Bits Stored",
         "module" : "Enhanced PET Image",
         "usage" : "M",
         "req" : "1",
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0008,2228)" : {
         "req" : "3",
         "entity" : "Image",
         "usage" : "U",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-8"
         ],
         "desc" : [
            "Sequence of Items that identifies the primary anatomic structure(s) of interest in this Instance.",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Primary Anatomic Structure Sequence"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0020)" : {
         "name" : "Data Elements Signed",
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "A list of Data Element Tags in the order they appear at the top level of the referenced SOP Instance that identify the Data Elements used in creating the MAC. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.12.1.1.3.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "entity" : "Image",
         "req" : "1",
         "module" : "Enhanced PET Image",
         "usage" : "M"
      },
      "(0028,0109)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : "The maximum value of all images in this Series.",
         "name" : "Largest Pixel Value in Series",
         "module" : "General Series",
         "usage" : "M",
         "req" : "3",
         "entity" : "Series"
      },
      "(0012,0072)" : {
         "req" : "3",
         "entity" : "Series",
         "module" : "Clinical Trial Series",
         "usage" : "U",
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
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "name" : "Clinical Trial Series Description"
      },
      "(0008,1072)[<0>](0008,0082)" : {
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "req" : "1C",
         "name" : "Institution Code Sequence",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ]
      },
      "(0008,0201)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "3",
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
                                       "attrs" : {
                                          "targetdoc" : "PS3.5",
                                          "targetptr" : "PS3.5",
                                          "xrefstyle" : "select: labelnumber"
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
                           "el" : "listitem",
                           "content" : [
                              "\n                      ",
                              {
                                 "content" : [
                                    "This Attribute does not apply to values with a DT Value Representation, that contains an explicitly encoded timezone offset."
                                 ],
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_155b097e-395f-4748-981c-0255b00fe9a8"
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
                                    "The corrected time may cross a 24 hour boundary. For example, if Local Time = 1.00 a.m. and Offset = +0200, then UTC = 11.00 p.m. (23.00) the day before."
                                 ],
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_1ab95f54-00ed-4128-a3f9-96f3f05669d0"
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_16002fc2-2776-41b6-b49f-74eb5e06324a"
                     }
                  },
                  "\n                "
               ]
            },
            "The local timezone offset is undefined if this Attribute is absent."
         ],
         "name" : "Timezone Offset From UTC"
      },
      "(0100,0426)" : {
         "entity" : "Image",
         "req" : "3",
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Authorization Equipment Certification Number",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The certification number issued to the Application Entity that set the SOP Instance Status (0100,0410) to AO."
      },
      "(0040,0275)[<0>](0040,0008)" : {
         "desc" : "Sequence describing the Scheduled Protocol following a specific coding scheme. One or more Items are permitted in this Sequence.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "name" : "Scheduled Protocol Code Sequence",
         "req" : "3",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M"
      },
      "(0040,051a)" : {
         "req" : "3",
         "entity" : "Image",
         "module" : "Specimen",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "desc" : "Description of the container.",
         "name" : "Container Description"
      },
      "(0008,1040)" : {
         "name" : "Institutional Department Name",
         "desc" : "Department in the institution where the equipment that produced the composite instances is located.",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "module" : "General Equipment",
         "entity" : "Equipment",
         "req" : "3"
      },
      "(0040,0250)" : {
         "module" : "General Series",
         "usage" : "M",
         "req" : "3",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "desc" : "Date on which the Performed Procedure Step ended.",
         "name" : "Performed Procedure Step End Date"
      },
      "(0018,a001)[<0>](0008,1040)" : {
         "req" : "3",
         "entity" : "Image",
         "module" : "SOP Common",
         "usage" : "M",
         "desc" : "Department in the institution where the equipment that contributed to the composite instance is located.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Institutional Department Name"
      },
      "(0008,1060)" : {
         "usage" : "M",
         "module" : "General Study",
         "req" : "3",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "Names of the physician(s) reading the Study.",
         "name" : "Name of Physician(s) Reading Study"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)" : {
         "usage" : "M",
         "module" : "General Series",
         "req" : "3",
         "entity" : "Series",
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
         "name" : "Content Item Modifier Sequence"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a120)" : {
         "entity" : "Series",
         "req" : "1C",
         "module" : "General Series",
         "usage" : "M",
         "name" : "DateTime",
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
      "(fffa,fffa)[<0>](0400,0005)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "1",
         "name" : "MAC ID Number",
         "desc" : "A number used to identify which MAC Parameters Sequence item was used in the calculation of this Digital Signature.",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1190)" : {
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "URL specifying the location of the referenced instance(s).",
         "name" : "Retrieve URL",
         "req" : "3",
         "entity" : "Image",
         "usage" : "M",
         "module" : "Enhanced PET Image"
      },
      "(0018,a001)[<0>](0008,1072)" : {
         "req" : "3",
         "entity" : "Image",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Identification of the operator(s) of the contributing equipment.",
            "One or more Items are permitted in this Sequence.",
            "The number and order of Items shall correspond to the number and order of values of Operators' Name (0008,1070), if present."
         ],
         "name" : "Operator Identification Sequence"
      },
      "(0008,0014)" : {
         "name" : "Instance Creator UID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Uniquely identifies device that created the SOP Instance.",
         "entity" : "Image",
         "req" : "3",
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0008,0018)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "1",
         "entity" : "Image",
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
         "name" : "SOP Instance UID"
      },
      "(0008,1030)" : {
         "desc" : "Institution-generated description or classification of the Study (component) performed.",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Study Description",
         "req" : "3",
         "entity" : "Study",
         "usage" : "M",
         "module" : "General Study"
      },
      "(0008,1049)[<0>](0040,1104)" : {
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
               ]
            }
         ],
         "module" : "General Study",
         "usage" : "M",
         "entity" : "Study",
         "req" : "3"
      },
      "(0020,9221)[<0>](0020,9164)" : {
         "usage" : "U",
         "module" : "Multi-frame Dimension",
         "req" : "1",
         "entity" : "Image",
         "desc" : [
            "Uniquely identifies a set of dimensions referenced within the containing SOP Instance. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.6.17.2",
                  "xrefstyle" : "select: label"
               }
            },
            " for further explanation."
         ],
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "name" : "Dimension Organization UID"
      },
      "(0010,1100)[<0>](0040,e024)[<1>](0040,e031)" : {
         "name" : "Home Community ID",
         "desc" : "Uniquely identifies a Community to which requests for the referenced instances can be directed.",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "3"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1190)" : {
         "name" : "Retrieve URL",
         "desc" : "URL specifying the location of the referenced instance(s).",
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "entity" : "Image",
         "req" : "3",
         "module" : "Enhanced PET Image",
         "usage" : "M"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0040,e011)" : {
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "Unique identifier of the system where the Composite Object(s) may be retrieved on the network.",
         "name" : "Retrieve Location UID",
         "module" : "Enhanced PET Image",
         "usage" : "M",
         "req" : "3",
         "entity" : "Image"
      },
      "(0040,0556)" : {
         "req" : "3",
         "entity" : "Image",
         "usage" : "M",
         "module" : "Acquisition Context",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "desc" : "Free-text description of the image-acquisition context.",
         "name" : "Acquisition Context Description"
      },
      "(0088,0200)[<0>](0028,0107)" : {
         "req" : "3",
         "entity" : "Image",
         "usage" : "M",
         "module" : "Enhanced PET Image",
         "desc" : "The maximum actual pixel value encountered in this image.",
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.7-11b"
         ],
         "name" : "Largest Image Pixel Value"
      },
      "(0018,5100)" : {
         "req" : "2C",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series",
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
         ],
         "name" : "Patient Position"
      },
      "(0010,1100)[<0>](0020,000e)" : {
         "name" : "Series Instance UID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "desc" : [
            "Unique identifier for the Series that is part of the Study identified in Study Instance UID (0020,000D), if present, and contains the referenced object instance(s).",
            "Required if Type of Instances (0040,E020) is DICOM"
         ],
         "entity" : "Patient",
         "req" : "1C",
         "module" : "Patient",
         "usage" : "M"
      },
      " (0010,0027) [<0>](0010,0021)" : {
         "name" : "Issuer of Patient ID",
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
                     "attrs" : {
                        "xml:id" : "para_fde39d36-34f5-4459-8bca-12b577233532"
                     },
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
         "entity" : "Patient",
         "req" : "3",
         "usage" : "M",
         "module" : "Patient"
      },
      "(0010,21b0)" : {
         "entity" : "Study",
         "req" : "3",
         "usage" : "U",
         "module" : "Patient Study",
         "name" : "Additional Patient History",
         "desc" : "Additional information about the Patient's medical history.",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0088,0200)[<0>](0028,0100)" : {
         "usage" : "M",
         "module" : "Enhanced PET Image",
         "req" : "1",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8.22-3",
            "table_C.7-11b"
         ],
         "desc" : [
            "Number of bits allocated for each pixel sample. Each sample shall have the same number of bits allocated. Bits Allocated (0028,0100) shall be either 1, or a multiple of 8. See ",
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
         "name" : "Bits Allocated"
      },
      "(0018,1802)" : {
         "mod_tables" : [
            "table_C.7-7"
         ],
         "desc" : [
            "Method of time distribution used to synchronize this equipment.",
            {
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "name" : "Time Distribution Protocol",
         "usage" : "U",
         "module" : "Synchronization",
         "req" : "3",
         "entity" : "Frame of Reference"
      },
      "(0018,0036)[<0>](0018,0029)" : {
         "name" : "Intervention Drug Code Sequence",
         "mod_tables" : [
            "table_C.7-19"
         ],
         "desc" : [
            "Sequence that identifies the interventional drug.",
            "Only a single item is permitted in this Sequence."
         ],
         "usage" : "U",
         "module" : "Intervention",
         "entity" : "Image",
         "req" : "3"
      },
      "(0040,0520)[<0>](0050,001e)" : {
         "entity" : "Image",
         "req" : "3",
         "module" : "Specimen",
         "usage" : "U",
         "name" : "Container Component Description",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "desc" : "Container component text description."
      },
      "(0010,1010)" : {
         "entity" : "Study",
         "req" : "3",
         "usage" : "U",
         "module" : "Patient Study",
         "name" : "Patient's Age",
         "desc" : "Age of the Patient.",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0008,0096)[<0>](0008,0080)" : {
         "name" : "Institution Name",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "usage" : "M",
         "entity" : "Study",
         "req" : "1C"
      },
      "(0010,1000)" : {
         "entity" : "Patient",
         "req" : "3",
         "module" : "Patient",
         "usage" : "M",
         "name" : "Other Patient IDs",
         "desc" : "Other identification numbers or codes used to identify the patient.",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a121)" : {
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Date",
         "req" : "1C",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a040)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
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
         "name" : "Value Type",
         "usage" : "U",
         "module" : "Specimen",
         "req" : "1",
         "entity" : "Image"
      },
      "(0008,0117)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "3",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "name" : "Context UID"
      },
      "(0012,0042)" : {
         "req" : "1C",
         "entity" : "Patient",
         "usage" : "U",
         "module" : "Clinical Trial Subject",
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
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "name" : "Clinical Trial Subject Reading ID"
      },
      "(0040,0560)[<0>](0040,0610)" : {
         "desc" : [
            "Sequence of Items identifying the process steps used to prepare the specimen for image acquisition. This includes description of all processing necessary to interpret the image.",
            "Zero or more Items shall be included in this Sequence.",
            "This Sequence includes description of the specimen sampling step from an ancestor specimen, potentially back to the original part collection.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.22.1.3",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ]
         ],
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Specimen Preparation Sequence",
         "module" : "Specimen",
         "usage" : "U",
         "req" : "2",
         "entity" : "Image"
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
      "Can't handle table_8.8-1 (in table_C.8.22-1 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.7-19 after (0018,0036))",
      "Can't handle table_8.8-1 (in table_C.7-19 after (0018,0029))",
      "Can't handle table_8.8-1 (in table_C.7-19 after (0054,0302))",
      "Can't handle table_8.8-1 (in table_C.7.6.14-1 after (0040,A043))",
      "Can't handle table_8.8-1 (in table_C.7.6.14-1 after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.7.6.14-1 after (0040,A168))",
      "Can't handle processing of table_C.7.6.16-1 in Image:Multi-frame Functional Groups of table_A.72-1",
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
      "Can't handle table_8.8-1 (in table_C.8.22-3:table_C.17-3:table_C.17-3a after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.8.22-3:table_C.17-3:table_C.17-3a after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.8.22-3:table_C.17-3:table_C.17-3a after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.8.22-3:table_C.17-3:table_C.17-3a after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.12-1 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_C.12-6 after (0400,0401))"
   ]
}
