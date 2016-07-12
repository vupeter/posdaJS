var data = {
   "tags" : {
      "(0018,a001)[<0>](0008,0080)" : {
         "desc" : "Institution where the equipment that contributed to the composite instance is located.",
         "module" : "SOP Common",
         "entity" : "Presentation State",
         "req" : "3",
         "name" : "Institution Name",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0010,2294)" : {
         "desc" : [
            "Information identifying an animal within a breed registry.",
            "Zero or more Items shall be included in this Sequence.",
            "Required if the patient is an animal."
         ],
         "module" : "Patient",
         "req" : "2C",
         "name" : "Breed Registration Sequence",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(0008,1072)[<0>](0008,0082)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "module" : "General Series",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1C",
         "name" : "Institution Code Sequence",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a162)" : {
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
         "module" : "General Series",
         "req" : "1C",
         "name" : "Rational Numerator Value",
         "entity" : "Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a162)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "name" : "Rational Numerator Value",
         "req" : "1C",
         "module" : "General Series",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ]
      },
      "(0010,1021)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "req" : "3",
         "name" : "Patient's Size Code Sequence",
         "entity" : "Study",
         "desc" : [
            "Patient's size category code",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "Patient Study"
      },
      "(0008,1030)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "name" : "Study Description",
         "req" : "3",
         "desc" : "Institution-generated description or classification of the Study (component) performed.",
         "module" : "General Study"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0039)" : {
         "module" : "Patient",
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
         ],
         "name" : "Assigning Jurisdiction Code Sequence",
         "req" : "3",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M"
      },
      "(0100,0426)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Authorization Equipment Certification Number",
         "req" : "3",
         "entity" : "Presentation State",
         "desc" : "The certification number issued to the Application Entity that set the SOP Instance Status (0100,0410) to AO.",
         "module" : "SOP Common"
      },
      "(0070,005a)[<0>](0048,0301)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.10-4"
         ],
         "entity" : "Presentation State",
         "req" : "1C",
         "name" : "Pixel Origin Interpretation",
         "desc" : [
            [
               "For a referenced multi-frame image, specifies whether the Displayed Area Top Left Hand Corner (0070,0052) and Displayed Area Bottom Right Hand Corner (0070,0053) are to be interpreted relative to the individual frame pixel origins, or relative to the Total Pixel Matrix origin (see ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.12.4.1.4"
                  },
                  "el" : "xref"
               },
               ")."
            ],
            "Required if the value of Referenced SOP Class UID (0008,1150) within Referenced Image Sequence (0008,1140) is 1.2.840.10008.5.1.4.1.1.77.1.6 (VL Whole Slide Microscopy Image). May be present otherwise.",
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "FRAME",
                     "relative to individual frame"
                  ],
                  [
                     "VOLUME",
                     "relative to Total Image Matrix"
                  ]
               ]
            },
            "If not present, TLHC and BRHC are defined relative to the frame pixel origins."
         ],
         "module" : "Displayed Area"
      },
      "(0008,1049)[<0>](0008,0080)" : {
         "name" : "Institution Name",
         "req" : "1C",
         "entity" : "Study",
         "module" : "General Study",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0062,000b)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "name" : "Referenced Segment Number",
         "req" : "1C",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "module" : "General Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)" : {
         "req" : "1C",
         "name" : "Referenced SOP Sequence",
         "entity" : "Series",
         "module" : "General Series",
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
         "usage" : "M"
      },
      "(0070,0402)[<0>](0028,3110)[<1>](0008,1140)[<2>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "entity" : "Presentation State",
         "module" : "Presentation State Blending",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.11.14-1",
            "table_10-3",
            "table_10-11"
         ],
         "usage" : "M"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0282)" : {
         "mod_tables" : [
            "table_C.10-5"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "module" : "Graphic Annotation",
         "desc" : [
            "Type of dimension used in attributes for the Compound Graphic when specifying distances and locations.",
            {
               "title" : "Enumerated Values:",
               "type" : "variablelist",
               "list" : [
                  [
                     "PIXEL",
                     [
                        "When an attribute value specifies a location, it shall be an image relative position specified with sub-pixel resolution such that the origin at the Top Left Hand Corner (TLHC) of the TLHC pixel is 0.0\\0.0, the Bottom Right Hand Corner (BRHC) of the TLHC pixel is 1.0\\1.0, and the BRHC of the BRHC pixel is Columns\\Rows (see ",
                        {
                           "el" : "xref",
                           "attrs" : {
                              "xrefstyle" : "select: label",
                              "linkend" : "figure_C.10.5-1"
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
         "name" : "Compound Graphic Units",
         "req" : "1",
         "entity" : "Presentation State"
      },
      "(0070,0083)" : {
         "mod_tables" : [
            "table_C.11.10-1"
         ],
         "usage" : "M",
         "desc" : [
            "Time at which this presentation was created.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "attrs" : {
                        "xml:id" : "para_bc36ae88-f947-4ed7-a806-cfe9f96550ab"
                     },
                     "el" : "para",
                     "content" : [
                        "This time may be different from the time that the DICOM SOP Instance was created, since the presentation state information contained may have been recorded earlier."
                     ]
                  },
                  "\n                "
               ]
            }
         ],
         "module" : "Presentation State Identification",
         "name" : "Presentation Creation Time",
         "req" : "1",
         "entity" : "Presentation State"
      },
      "(0008,001b)" : {
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
         "module" : "SOP Common",
         "req" : "3",
         "name" : "Original Specialized SOP Class UID",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0010,0216)[<0>](0010,0215)" : {
         "entity" : "Patient",
         "req" : "1",
         "name" : "Strain Source Registry Code Sequence",
         "desc" : [
            [
               "Identification of the organization that is the registry of sources of animals. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.1.1.1.4"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Only a single Item is permitted in this sequence."
         ],
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0020,9172)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Presentation State",
         "name" : "Conversion Source Attributes Sequence",
         "req" : "1C",
         "module" : "SOP Common",
         "desc" : [
            "The set of images or other composite SOP Instances that were converted to this instance.",
            "If this instance was converted from a specific frame in the source instance, the reference shall include the Frame Number.",
            "One or more Items shall be included in this Sequence.",
            "Required if this instance was created by conversion, and Conversion Source Attributes Sequence (0020,9172) is not present in an Item of Shared Functional Groups Sequence (5200,9229) or Per-Frame Functional Groups Sequence (5200,9230)."
         ]
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0233)[<2>](0070,0252)" : {
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5c"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "name" : "Pattern Off Color CIELab Value",
         "req" : "3",
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
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
         ]
      },
      "(0070,0404)[<0>](0008,1115)[<1>](0040,e011)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Presentation State Blending",
         "desc" : "Unique identifier of the system where the Composite Object(s) may be retrieved on the network.",
         "entity" : "Presentation State",
         "name" : "Retrieve Location UID",
         "req" : "3"
      },
      "(0008,1120)[<0>](0008,1150)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "1",
         "name" : "Referenced SOP Class UID"
      },
      "(0028,1221)" : {
         "desc" : [
            "Segmented Red Palette Color Lookup Table Data. Required if segmented data is used in an Image IOD; shall not be present in a Presentation State IOD or Color Palette IOD. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.9.2"
               }
            },
            " for further explanation."
         ],
         "module" : "Palette Color Lookup Table",
         "entity" : "Presentation State",
         "name" : "Segmented Red Palette Color Lookup Table Data",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-22a"
         ]
      },
      "(0070,0404)[<0>](0008,1115)[<1>](0008,1190)" : {
         "desc" : "URL specifying the location of the referenced instance(s).",
         "module" : "Presentation State Blending",
         "entity" : "Presentation State",
         "name" : "Retrieve URL",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0233)[<2>](0070,0285)" : {
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5c"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "desc" : "Encodes the background opacity. The value is encoded as floating point alpha value (0.0-1.0).",
         "module" : "Graphic Annotation",
         "name" : "Pattern Off Opacity",
         "req" : "1",
         "entity" : "Presentation State"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0287)[<2>](0070,0288)" : {
         "module" : "Graphic Annotation",
         "desc" : "The position of the tick in the range 0.0 (start point) to 1.0 (end point).",
         "req" : "1",
         "name" : "Tick Position",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied"
      },
      "(0008,1250)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "name" : "Related Series Sequence",
         "req" : "3",
         "entity" : "Series",
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
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_e9e67beb-8432-4dbc-9f6a-df5800189967"
                                 },
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
                                 "attrs" : {
                                    "xml:id" : "para_7ef219a6-dfda-4b92-a778-37d54ca1cc2c"
                                 },
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
         ]
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1155)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "Patient",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "entity" : "Patient"
      },
      "(0020,9172)[<0>](0008,1160)" : {
         "name" : "Referenced Frame Number",
         "req" : "1C",
         "entity" : "Presentation State",
         "module" : "SOP Common",
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
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "usage" : "M"
      },
      "(0070,005a)[<0>](0070,0100)" : {
         "entity" : "Presentation State",
         "name" : "Presentation Size Mode",
         "req" : "1",
         "module" : "Displayed Area",
         "desc" : [
            "Manner of selection of display size.",
            {
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
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            },
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.10.4"
                  }
               },
               " for further explanation."
            ]
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.10-4"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a120)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "req" : "1C",
         "name" : "DateTime",
         "entity" : "Series",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "module" : "General Series"
      },
      "(0008,0300)[<0>](0008,0302)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "1",
         "name" : "Private Creator Reference",
         "entity" : "Presentation State",
         "module" : "SOP Common",
         "desc" : [
            "The value of the Private Creator Data Element value used to reserve the block\n                  of Private Data Elements whose characteristics are described in this Item.",
            {
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
               ],
               "el" : "note"
            }
         ]
      },
      "(0008,0096)[<0>](0040,1101)" : {
         "req" : "1",
         "name" : "Person Identification Code Sequence",
         "entity" : "Study",
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
         "usage" : "M"
      },
      "(0010,0024)[<0>](0040,0032)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "name" : "Universal Entity ID",
         "req" : "3",
         "entity" : "Patient",
         "module" : "Patient",
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
         ]
      },
      "(0008,0118)" : {
         "name" : "Mapping Resource UID",
         "req" : "3",
         "entity" : "Presentation State",
         "desc" : "The unique identifier of the Mapping Resource",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(fffa,fffa)[<0>](0400,0105)" : {
         "entity" : "Presentation State",
         "name" : "Digital Signature DateTime",
         "req" : "1",
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
                     "attrs" : {
                        "xml:id" : "para_2c2ebaf6-e26c-4bf5-b5dd-cb4e0ed2cd56"
                     },
                     "el" : "para"
                  },
                  "\n                    "
               ]
            }
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0070,0404)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0020)" : {
         "entity" : "Presentation State",
         "name" : "Data Elements Signed",
         "req" : "1",
         "module" : "Presentation State Blending",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0070,0402)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.11.14-1"
         ],
         "entity" : "Presentation State",
         "name" : "Blending Sequence",
         "req" : "1",
         "desc" : [
            "A Sequence of Items, one identifying and describing transformations upon a set of underlying grayscale images, and the other identifying and describing transformations upon a set of superimposed grayscale images.",
            "Two Items shall be included in this Sequence",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.11.14.1.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "module" : "Presentation State Blending"
      },
      "(0070,0086)[<0>](0040,1101)" : {
         "name" : "Person Identification Code Sequence",
         "req" : "1",
         "entity" : "Presentation State",
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
         ],
         "usage" : "M"
      },
      "(0400,0561)[<0>](0400,0550)[0](gggg,eeee)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Presentation State",
         "req" : "1",
         "name" : "Any Attribute from the main data set that was modified or removed.",
         "module" : "SOP Common",
         "desc" : "May include Sequence Attributes and their Items."
      },
      "(0008,103f)" : {
         "desc" : [
            "A coded description of the Series.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "General Series",
         "name" : "Series Description Code Sequence",
         "req" : "3",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1072)" : {
         "module" : "SOP Common",
         "desc" : [
            "Identification of the operator(s) of the contributing equipment.",
            "One or more Items are permitted in this Sequence.",
            "The number and order of Items shall correspond to the number and order of values of Operators' Name (0008,1070), if present."
         ],
         "name" : "Operator Identification Sequence",
         "req" : "3",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0295)" : {
         "entity" : "Presentation State",
         "name" : "Graphic Group ID",
         "req" : "3",
         "desc" : "A number that defines the corresponding group object in the Graphic Group Sequence (0070,0234). If the attribute is not present the object does not belong to a group.",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "mod_tables" : [
            "table_C.10-5"
         ]
      },
      "(0008,1062)[<0>](0040,1104)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "name" : "Person's Telecom Information",
         "req" : "3",
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
         ]
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0039)" : {
         "module" : "Patient",
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
         ],
         "entity" : "Patient",
         "req" : "3",
         "name" : "Assigning Jurisdiction Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ]
      },
      "(0040,0275)[<0>](0040,0009)" : {
         "desc" : [
            "Identifier that identifies the Scheduled Procedure Step.",
            "Required if procedure was scheduled.",
            {
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
               ],
               "el" : "note"
            }
         ],
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Scheduled Procedure Step ID",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ]
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0233)[<2>](0070,0251)" : {
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5c"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "req" : "1",
         "name" : "Pattern On Color CIELab Value",
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
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
                     "linkend" : "sect_8.4",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "entity" : "Presentation State",
         "name" : "Mapping Resource",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0010,0216)[<0>](0010,0217)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "module" : "Patient",
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
         "name" : "Strain Source",
         "req" : "1",
         "entity" : "Patient"
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
         "module" : "Graphic Annotation",
         "name" : "Shadow Offset Y",
         "req" : "1",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied"
      },
      "(0400,0500)[<0>](0400,0520)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
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
         "entity" : "Presentation State",
         "name" : "Encrypted Content",
         "req" : "1"
      },
      "(0008,1049)[<0>](0040,1104)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "name" : "Person's Telecom Information",
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
               ]
            }
         ],
         "module" : "General Study"
      },
      "(0070,0081)" : {
         "entity" : "Presentation State",
         "req" : "2",
         "name" : "Content Description",
         "desc" : "A description of the content of the SOP Instance.",
         "module" : "Presentation State Identification",
         "usage" : "M",
         "mod_tables" : [
            "table_C.11.10-1",
            "table_10-12"
         ]
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1150)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "entity" : "Patient",
         "module" : "Patient",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0012,0063)" : {
         "module" : "Patient",
         "desc" : [
            "A description or label of the mechanism or method use to remove the patient's identity. May be multi-valued if successive de-identification steps have been performed.",
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
                                 "attrs" : {
                                    "xml:id" : "para_1b4a5ea4-66da-478b-901c-5f7d6b806d29"
                                 },
                                 "el" : "para",
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
                           "el" : "listitem",
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
                                       "el" : "xref",
                                       "attrs" : {
                                          "linkend" : "sect_C.12.1",
                                          "xrefstyle" : "select: title"
                                       }
                                    },
                                    ". De-identifying equipment may use a Purpose of Reference of ",
                                    {
                                       "el" : "olink",
                                       "attrs" : {
                                          "targetdoc" : "PS3.16",
                                          "targetptr" : "DCM_109104"
                                       },
                                       "content" : [
                                          "(109104, DCM, \"De-identifying Equipment\")"
                                       ]
                                    },
                                    "."
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
            },
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method Code Sequence (0012,0064) is not present. May be present otherwise."
         ],
         "entity" : "Patient",
         "name" : "De-identification Method",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0008,1040)" : {
         "desc" : "Department in the institution where the equipment that produced the composite instances is located.",
         "module" : "General Equipment",
         "entity" : "Equipment",
         "name" : "Institutional Department Name",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ]
      },
      "(0010,0200)" : {
         "req" : "3",
         "name" : "Quality Control Subject",
         "entity" : "Patient",
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
                     "linkend" : "sect_C.7.6.1",
                     "xrefstyle" : "select: title"
                  },
                  "el" : "xref"
               },
               ", which is used to describe an image acquired."
            ]
         ],
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0295)" : {
         "entity" : "Presentation State",
         "name" : "Graphic Group ID",
         "req" : "3",
         "module" : "Graphic Annotation",
         "desc" : [
            "A number identifying the group from the Graphic Group Sequence (0070,0234) to which this Item belongs. If this attribute is not present, this Item does not belong to a group.",
            "If Compound Graphic Instance ID (0070,0226) is present in this Item, the value of Graphic Group ID (0070,0295) shall be the same as the value of Graphic Group ID (0070,0295) of the corresponding Item in the Compound Graphic Sequence (0070,0209) with the same Compound Graphic Instance ID (0070,0226)."
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "mod_tables" : [
            "table_C.10-5"
         ]
      },
      "(0070,0001)[<0>](0008,1140)[<1>](0008,1150)" : {
         "module" : "Graphic Annotation",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.10-5",
            "table_10-3",
            "table_10-11"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0035)" : {
         "module" : "Patient",
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
         "name" : "Identifier Type Code",
         "req" : "3",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M"
      },
      "(0040,0280)" : {
         "module" : "General Series",
         "desc" : "User-defined comments on the Performed Procedure Step.",
         "req" : "3",
         "name" : "Comments on the Performed Procedure Step",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "usage" : "M"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0021)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "entity" : "Presentation State",
         "req" : "1",
         "name" : "Number of Graphic Points",
         "module" : "Graphic Annotation",
         "desc" : "Number of data points in this graphic."
      },
      "(0018,1201)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "name" : "Time of Last Calibration",
         "req" : "3",
         "entity" : "Equipment",
         "module" : "General Equipment",
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
         ]
      },
      "(0008,1050)" : {
         "module" : "General Series",
         "desc" : "Name of the physician(s) administering the Series.",
         "name" : "Performing Physician's Name",
         "req" : "3",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0232)[<2>](0070,0284)" : {
         "module" : "Graphic Annotation",
         "desc" : "Encodes the foreground opacity. The value is encoded as floating point alpha value (0.0-1.0).",
         "entity" : "Presentation State",
         "req" : "1",
         "name" : "Pattern On Opacity",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ]
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0033)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M",
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
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0062,000b)" : {
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
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1C",
         "name" : "Referenced Segment Number"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0082)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "entity" : "Presentation State",
         "req" : "1C",
         "name" : "Institution Code Sequence",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "SOP Common"
      },
      "(4ffe,0001)[<0>](0400,0020)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
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
         "module" : "SOP Common",
         "req" : "1",
         "name" : "Data Elements Signed",
         "entity" : "Presentation State"
      },
      "(4ffe,0001)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Presentation State",
         "name" : "MAC Parameters Sequence",
         "req" : "3",
         "module" : "SOP Common",
         "desc" : [
            "A sequence of items that describe the parameters used to calculate a MAC for use in Digital Signatures.",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0070,0402)[<0>](0028,3110)[<1>](0028,3010)" : {
         "name" : "VOI LUT Sequence",
         "req" : "1C",
         "entity" : "Presentation State",
         "desc" : [
            "Defines a sequence of VOI LUTs.",
            "One or more Items shall be included in this Sequence.",
            "Required if Window Center (0028,1050) is not present. May be present otherwise."
         ],
         "module" : "Presentation State Blending",
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.11-2b"
         ],
         "usage" : "M"
      },
      "(0070,0402)[<0>](0028,3110)[<1>](0028,1050)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.11-2b"
         ],
         "entity" : "Presentation State",
         "req" : "1C",
         "name" : "Window Center",
         "module" : "Presentation State Blending",
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
      "(0070,0402)[<0>](0008,1115)[<1>](0008,1140)[<2>](0062,000b)" : {
         "req" : "1C",
         "name" : "Referenced Segment Number",
         "entity" : "Presentation State",
         "module" : "Presentation State Blending",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.11.11-1b",
            "table_10-3"
         ],
         "usage" : "M"
      },
      "(0010,0034)" : {
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
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Patient's Death Date in Alternative Calendar",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0010,0035)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "name" : "Patient's Alternative Calendar",
         "req" : "1C",
         "module" : "Patient",
         "desc" : [
            "The Alternative Calendar used for Patient's Birth Date in Alternative Calendar (0010,0033) and Patient's Death Date in Alternative Calendar (0010,0034).",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.1.5"
                  },
                  "el" : "xref"
               },
               " for Defined Terms."
            ],
            "Required if either Patient's Birth Date in Alternative Calendar (0010,0033) or Patient's Alternative Death Date in Calendar (0010,0034) is present."
         ]
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0233)[<2>](0070,0256)" : {
         "desc" : [
            "A binary fill pattern. A set bit corresponds to foreground. An unset bit corresponds to background.",
            "A 128 byte value defining a 32x32 1 bit matrix. This fill pattern is replicated in tiles inside the boundaries of the graphic type.",
            "The most significant bit corresponds to the leftmost pixel in the row.",
            "The fill pattern relates to display pixels where one bit value corresponds to one display pixel.",
            "Required if Fill Mode (0070,0257) equals STIPPELED."
         ],
         "module" : "Graphic Annotation",
         "entity" : "Presentation State",
         "req" : "1C",
         "name" : "Fill Pattern",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5c"
         ]
      },
      "(0008,010f)" : {
         "usage" : "M",
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
         "module" : "SOP Common",
         "entity" : "Presentation State",
         "name" : "Context Identifier",
         "req" : "1"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0032)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Universal Entity ID",
         "req" : "1C"
      },
      "(fffa,fffa)[<0>](0400,0100)" : {
         "module" : "SOP Common",
         "desc" : "A UID that can be used to uniquely reference this signature.",
         "entity" : "Presentation State",
         "name" : "Digital Signature UID",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0040,0260)[<0>](0040,0440)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "module" : "General Series",
         "desc" : "Sequence that specifies the context for the Performed Protocol Code Sequence Item. One or more Items are permitted in this Sequence.",
         "entity" : "Series",
         "req" : "3",
         "name" : "Protocol Context Sequence"
      },
      "(0038,0064)[<0>](0040,0032)" : {
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "module" : "Patient Study",
         "entity" : "Study",
         "name" : "Universal Entity ID",
         "req" : "1C",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ]
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0232)[<2>](0070,0254)" : {
         "name" : "Line Dashing Style",
         "req" : "1",
         "entity" : "Presentation State",
         "desc" : [
            "The dashing style of the line to be displayed.",
            {
               "title" : "Enumerated Values:",
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
               ]
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
         ],
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied"
      },
      "(0010,0024)[<0>](0040,003a)" : {
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
                     "attrs" : {
                        "xml:id" : "para_d5f050e9-c374-464c-bbc6-c76b57d065fd"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ]
            }
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "3",
         "name" : "Assigning Agency or Department Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0008,1052)[<0>](0040,1101)" : {
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Person Identification Code Sequence",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a121)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Date",
         "req" : "1C",
         "entity" : "Series",
         "module" : "General Series",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ]
      },
      "(0070,0001)[<0>](0070,0002)" : {
         "module" : "Graphic Annotation",
         "desc" : [
            "The layer defined in the ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.10.7",
                  "xrefstyle" : "select: title"
               }
            },
            " in which the graphics or text is to be rendered."
         ],
         "entity" : "Presentation State",
         "name" : "Graphic Layer",
         "req" : "1",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "mod_tables" : [
            "table_C.10-5"
         ]
      },
      "(0008,1090)" : {
         "req" : "3",
         "name" : "Manufacturer's Model Name",
         "entity" : "Equipment",
         "desc" : "Manufacturer's model name of the equipment that produced the composite instances.",
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0004)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "entity" : "Presentation State",
         "req" : "1C",
         "name" : "Anchor Point Annotation Units",
         "desc" : [
            "Units of measure for the axes of the text anchor point annotation.",
            "Enumerated Values for Anchor Point Annotation Units (0070,0004) are the same as for Bounding Box Annotation Units (0070,0003).",
            "Required if Anchor Point (0070,0014) is present."
         ],
         "module" : "Graphic Annotation"
      },
      "(0040,0253)" : {
         "desc" : "User or equipment generated identifier of that part of a Procedure that has been carried out within this step.",
         "module" : "General Series",
         "name" : "Performed Procedure Step ID",
         "req" : "3",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "usage" : "M"
      },
      "(0040,1012)" : {
         "module" : "General Study",
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
         "entity" : "Study",
         "req" : "3",
         "name" : "Reason For Performed Procedure Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0028,2002)" : {
         "module" : "ICC Profile",
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
         "entity" : "Presentation State",
         "name" : "Color Space",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.11.15-1"
         ]
      },
      "(0400,0561)[<0>](0400,0564)" : {
         "desc" : "The source that provided the SOP Instance prior to the removal or replacement of the values. For example, this might be the Institution from which imported SOP Instances were received.",
         "module" : "SOP Common",
         "req" : "2",
         "name" : "Source of Previous Values",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0008,0300)[<0>](0008,0305)" : {
         "entity" : "Presentation State",
         "name" : "Deidentification Action Sequence",
         "req" : "3",
         "desc" : "Actions to be performed on element within the block that are not safe from identify leakage.",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,0050)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "desc" : "A RIS generated number that identifies the order for the Study.",
         "module" : "General Study",
         "name" : "Accession Number",
         "req" : "2",
         "entity" : "Study"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a043)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "req" : "1",
         "name" : "Concept Name Code Sequence",
         "module" : "General Series",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0070,0402)[<0>](0008,1115)[<1>](0008,1140)[<2>](0008,1150)" : {
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.11.11-1b",
            "table_10-3",
            "table_10-11"
         ],
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "Presentation State Blending",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "entity" : "Presentation State"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1160)" : {
         "entity" : "Series",
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
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0070,0402)[<0>](0070,0405)" : {
         "desc" : [
            "Whether or not the contents of the Item represent the superimposed or underlying image set.",
            {
               "list" : [
                  [
                     "SUPERIMPOSED",
                     null
                  ],
                  [
                     "UNDERLYING",
                     null
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "module" : "Presentation State Blending",
         "name" : "Blending Position",
         "req" : "1",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.11.14-1"
         ],
         "usage" : "M"
      },
      "(0008,0070)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "desc" : "Manufacturer of the equipment that produced the composite instances.",
         "module" : "General Equipment",
         "req" : "2",
         "name" : "Manufacturer",
         "entity" : "Equipment"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1160)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "module" : "Patient",
         "desc" : [
            "Identifies the frame numbers within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1.",
            {
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
               ],
               "el" : "note"
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "name" : "Referenced Frame Number",
         "req" : "1C",
         "entity" : "Patient"
      },
      "(0008,0300)[<0>](0008,0303)" : {
         "entity" : "Presentation State",
         "name" : "Block Identifying Information Status",
         "req" : "1",
         "module" : "SOP Common",
         "desc" : [
            [
               "Specifies whether some or all of the Private Data Elements in the block are safe from identity leakage as defined by ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "xrefstyle" : "template:PS3.15 Section %n %t",
                     "targetptr" : "sect_E.3.10",
                     "targetdoc" : "PS3.15"
                  }
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
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0010,1100)[<0>](0040,e023)" : {
         "entity" : "Patient",
         "name" : "WADO Retrieval Sequence",
         "req" : "1C",
         "module" : "Patient",
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
                     "attrs" : {
                        "xml:id" : "para_87c7f326-107c-4a18-88b9-60712a9f7041"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ]
            },
            "Required if DICOM Retrieval Sequence (0040,E021), DICOM Media Retrieval Sequence (0040,E022), WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "One or more Items shall be included in this Sequence."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ]
      },
      "(0028,1223)" : {
         "entity" : "Presentation State",
         "name" : "Segmented Blue Palette Color Lookup Table Data",
         "req" : "1C",
         "desc" : [
            "Segmented Blue Palette Color Lookup Table Data. Required if segmented data is used in an Image IOD; shall not be present in a Presentation State IOD or Color Palette IOD. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.9.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "module" : "Palette Color Lookup Table",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-22a"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,08ea)" : {
         "entity" : "Series",
         "req" : "1C",
         "name" : "Measurement Units Code Sequence",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)" : {
         "entity" : "Patient",
         "name" : "Assigning Facility Sequence",
         "req" : "3",
         "module" : "Patient",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ]
      },
      "(0008,0110)[<0>](0008,0115)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The coding scheme full common name",
         "module" : "SOP Common",
         "entity" : "Presentation State",
         "req" : "3",
         "name" : "Coding Scheme Name"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0232)[<2>](0070,0246)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "entity" : "Presentation State",
         "name" : "Shadow Offset Y",
         "req" : "1",
         "module" : "Graphic Annotation",
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
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a160)" : {
         "entity" : "Series",
         "req" : "1C",
         "name" : "Text Value",
         "module" : "General Series",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a123)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Person Name",
         "req" : "1C"
      },
      "(0008,1250)[<0>](0020,000d)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series",
         "req" : "1",
         "name" : "Study Instance UID",
         "module" : "General Series",
         "desc" : "Instance UID of Study to which the related Series belongs"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0232)[<2>](0070,0258)" : {
         "req" : "1",
         "name" : "Shadow Opacity",
         "entity" : "Presentation State",
         "desc" : "Encodes the shadow opacity. The value is encoded as floating point alpha value (0.0-1.0).",
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied"
      },
      "(0038,0064)" : {
         "entity" : "Study",
         "req" : "3",
         "name" : "Issuer of Service Episode ID Sequence",
         "module" : "Patient Study",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Service Episode ID (0038,0060).",
            "Only a single Item is permitted in this Sequence."
         ],
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0400,0561)[<0>](0400,0562)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "1",
         "name" : "Attribute Modification DateTime",
         "entity" : "Presentation State",
         "desc" : "Date and time the attributes were removed and/or replaced.",
         "module" : "SOP Common"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0035)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
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
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Identifier Type Code",
         "req" : "3"
      },
      "(0008,1048)" : {
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
         "name" : "Physician(s) of Record",
         "req" : "3",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M"
      },
      "(0070,0402)[<0>](0028,3110)[<1>](0028,1055)" : {
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.11-2b"
         ],
         "usage" : "M",
         "desc" : "Free form explanation of the meaning of the Window Center and Width. Multiple values correspond to multiple Window Center and Width values.",
         "module" : "Presentation State Blending",
         "req" : "3",
         "name" : "Window Center & Width Explanation",
         "entity" : "Presentation State"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a121)" : {
         "module" : "General Series",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "name" : "Date",
         "req" : "1C",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0010,2294)[<0>](0010,2296)" : {
         "req" : "1",
         "name" : "Breed Registry Code Sequence",
         "entity" : "Patient",
         "module" : "Patient",
         "desc" : [
            "Identification of the organization with which an animal is registered.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(0070,0404)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.11.14-1"
         ],
         "entity" : "Presentation State",
         "name" : "Referenced Spatial Registration Sequence",
         "req" : "3",
         "module" : "Presentation State Blending",
         "desc" : [
            "A reference to Spatial Registration Instances that may be used to register the underlying and superimposed images.",
            "One or more Items are permitted in this Sequence.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "A Spatial Registration Instance may identify registration between frames of reference, or between explicitly identified images. In the latter case, the list of images referenced by the Presentation State, not the list of images referenced by the Spatial Registration Instance, are to be blended."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_d12ce53f-abac-48e6-a6f1-f0d1fa4b23a4"
                     }
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ]
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
                     "attrs" : {
                        "xml:id" : "para_fde39d36-34f5-4459-8bca-12b577233532"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ]
            }
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "3",
         "name" : "Issuer of Patient ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0231)[<2>](0070,0258)" : {
         "req" : "1",
         "name" : "Shadow Opacity",
         "entity" : "Presentation State",
         "desc" : "Encodes the shadow opacity. The value is encoded as floating point alpha value (0.0-1.0).",
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied"
      },
      "(0028,1201)" : {
         "mod_tables" : [
            "table_C.7-22a"
         ],
         "usage" : "M",
         "name" : "Red Palette Color Lookup Table Data",
         "req" : "1C",
         "entity" : "Presentation State",
         "module" : "Palette Color Lookup Table",
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
         ]
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0226)" : {
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
         "module" : "Graphic Annotation",
         "entity" : "Presentation State",
         "req" : "3",
         "name" : "Compound Graphic Instance ID",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "mod_tables" : [
            "table_C.10-5"
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1104)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Person's Telecom Information",
         "req" : "3",
         "entity" : "Presentation State",
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
         "module" : "SOP Common"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0033)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "entity" : "Patient",
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
         ],
         "module" : "Patient"
      },
      "(0008,0013)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Instance Creation Time",
         "entity" : "Presentation State",
         "module" : "SOP Common",
         "desc" : [
            "Time the SOP Instance was created.",
            "This is the time that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ]
      },
      "(0010,0030)" : {
         "entity" : "Patient",
         "name" : "Patient's Birth Date",
         "req" : "2",
         "module" : "Patient",
         "desc" : "Birth date of the patient.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0070,0086)[<0>](0040,1102)" : {
         "desc" : "Person's mailing address",
         "module" : "Presentation State Identification",
         "entity" : "Presentation State",
         "name" : "Person's Address",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.11.10-1",
            "table_10-12",
            "table_10-1"
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
         "req" : "1C",
         "entity" : "Series",
         "module" : "General Series",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ]
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)[<2>](0070,0246)" : {
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "req" : "1",
         "name" : "Shadow Offset Y",
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "desc" : [
            "Floating point value that defines the shadow offset in Y direction in Anchor Point Annotation Units (0070,0004) if used in Text Object Sequence Item or in Graphic Annotation Units (0070,0005) if used in Graphic Object Sequence Item. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.10.5.1.3.13.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            }
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a043)" : {
         "name" : "Concept Name Code Sequence",
         "req" : "1",
         "entity" : "Series",
         "module" : "General Series",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0012,0072)" : {
         "req" : "3",
         "name" : "Clinical Trial Series Description",
         "entity" : "Series",
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
      "(0010,1100)[<0>](0008,1199)" : {
         "entity" : "Patient",
         "name" : "Referenced SOP Sequence",
         "req" : "1",
         "desc" : [
            "References to object instances.",
            "One or more Items shall be included in this Sequence"
         ],
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ]
      },
      "(0400,0561)[<0>](0400,0565)" : {
         "module" : "SOP Common",
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
               "type" : "variablelist",
               "title" : "Defined Terms:"
            }
         ],
         "entity" : "Presentation State",
         "req" : "1",
         "name" : "Reason for the Attribute Modification",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0032)" : {
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
                     "attrs" : {
                        "xml:id" : "para_8933ed06-5a13-4f47-a4fd-9e2d7cc913a6"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ]
            }
         ],
         "entity" : "Patient",
         "req" : "3",
         "name" : "Universal Entity ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a168)" : {
         "module" : "General Series",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "name" : "Concept Code Sequence",
         "req" : "1C",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1040)" : {
         "entity" : "Presentation State",
         "req" : "3",
         "name" : "Institutional Department Name",
         "desc" : "Department in the institution where the equipment that contributed to the composite instance is located.",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0018,a001)[<0>](0018,a002)" : {
         "name" : "Contribution DateTime",
         "req" : "3",
         "entity" : "Presentation State",
         "desc" : "The Date & Time when the equipment contributed to the composite instance.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0226)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "module" : "Graphic Annotation",
         "desc" : [
            "A number that identifies the Compound Graphic described in this Item. The value shall be unique within this SOP instance.",
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
         "entity" : "Presentation State",
         "name" : "Compound Graphic Instance ID",
         "req" : "1"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0010)" : {
         "mod_tables" : [
            "table_C.10-5"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "module" : "Graphic Annotation",
         "desc" : [
            "Location of the Top Left Hand Corner (TLHC) of the bounding box in which Unformatted Text Value (0070,0006) is to be displayed, in Bounding Box Annotation Units (0070,0003), given as column\\row. Column is the horizontal offset and row is the vertical offset.",
            "Required if Anchor Point (0070,0014) is not present. May be present otherwise.",
            "Required if Bounding Box Bottom Right Hand Corner (0070,0011) is present."
         ],
         "name" : "Bounding Box Top Left Hand Corner",
         "req" : "1C",
         "entity" : "Presentation State"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0232)[<2>](0070,0255)" : {
         "module" : "Graphic Annotation",
         "desc" : [
            "Pattern that defines the line dashing style. The Line Pattern is a 32 bit value. If the bit inside the pattern is set to 1 the foreground color is drawn, else the background color is drawn.",
            {
               "content" : [
                  "\n                        ",
                  {
                     "content" : [
                        "For example, 00FFH defines the dashes with an equal size."
                     ],
                     "attrs" : {
                        "xml:id" : "para_d72be373-7a7e-43ca-86b7-e209489ad5c6"
                     },
                     "el" : "para"
                  },
                  "\n                      "
               ],
               "el" : "note"
            },
            "Required if Line Dashing Style (0070,0254) has a value of DASHED."
         ],
         "entity" : "Presentation State",
         "name" : "Line Pattern",
         "req" : "1C",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ]
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
                                          "xrefstyle" : "select: labelnumber",
                                          "targetptr" : "PS3.5",
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
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_1ab95f54-00ed-4128-a3f9-96f3f05669d0"
                                 },
                                 "content" : [
                                    "The corrected time may cross a 24 hour boundary. For example, if Local Time = 1.00 a.m. and Offset = +0200, then UTC = 11.00 p.m. (23.00) the day before."
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
                     "attrs" : {
                        "xml:id" : "para_16002fc2-2776-41b6-b49f-74eb5e06324a"
                     },
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
         "entity" : "Presentation State",
         "req" : "3",
         "name" : "Timezone Offset From UTC",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,1032)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "req" : "3",
         "name" : "Procedure Code Sequence",
         "desc" : [
            "A Sequence that conveys the type of procedure performed.",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "General Study"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a161)" : {
         "entity" : "Series",
         "name" : "Floating Point Value",
         "req" : "1C",
         "module" : "General Series",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0040,0275)[<0>](0020,000d)" : {
         "name" : "Study Instance UID",
         "req" : "3",
         "entity" : "Series",
         "desc" : "The unique identifier for the Study provided for this Requested Procedure.",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M"
      },
      "(0008,009d)" : {
         "entity" : "Study",
         "name" : "Consulting Physician Identification Sequence",
         "req" : "3",
         "module" : "General Study",
         "desc" : [
            "Identification of the consulting physician(s).",
            "One or more Items shall be included in this Sequence. If more than one Item, the number and order shall correspond to the value of Consulting Physician's Name (0008,009C), if present."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0012,0040)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "entity" : "Patient",
         "name" : "Clinical Trial Subject ID",
         "req" : "1C",
         "module" : "Clinical Trial Subject",
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
         ]
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0023)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "mod_tables" : [
            "table_C.10-5"
         ],
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "module" : "Graphic Annotation",
         "entity" : "Presentation State",
         "req" : "1",
         "name" : "Graphic Type"
      },
      "(0070,0402)[<0>](0028,3000)[<1>](0028,3002)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.11-1b"
         ],
         "module" : "Presentation State Blending",
         "desc" : [
            "Specifies the format of the LUT Data in this Sequence.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.11.1.1"
                  }
               },
               " for further explanation."
            ]
         ],
         "entity" : "Presentation State",
         "req" : "1",
         "name" : "LUT Descriptor"
      },
      "(0010,1100)[<0>](0020,000e)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "desc" : [
            "Unique identifier for the Series that is part of the Study identified in Study Instance UID (0020,000D), if present, and contains the referenced object instance(s).",
            "Required if Type of Instances (0040,E020) is DICOM"
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Series Instance UID",
         "req" : "1C"
      },
      "(0038,0062)" : {
         "entity" : "Study",
         "name" : "Service Episode Description",
         "req" : "3",
         "desc" : "Description of the type of service episode.",
         "module" : "Patient Study",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0070,0404)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)" : {
         "module" : "Presentation State Blending",
         "desc" : [
            "Sequence of references to Digital Signatures in the referenced SOP Instance.",
            "One or more Items are permitted in this Sequence.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "The Attributes in this Sequence can be used to detect if the referenced SOP Instance has been altered."
                     ],
                     "attrs" : {
                        "xml:id" : "para_1bb4c66e-0b5e-4f69-b0f2-4e353dc73212"
                     },
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "name" : "Referenced Digital Signature Sequence",
         "req" : "3",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M"
      },
      "(0070,0001)[<0>](0008,1140)" : {
         "entity" : "Presentation State",
         "req" : "1C",
         "name" : "Referenced Image Sequence",
         "desc" : [
            [
               "The subset of images and frames listed in the ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: title",
                     "linkend" : "sect_C.11.11"
                  }
               },
               ", to which this graphic annotation applies."
            ],
            "One or more Items shall be included in this Sequence.",
            [
               "Required if graphic annotations in this Item do not apply to all the images and frames listed in the ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.11.11",
                     "xrefstyle" : "select: title"
                  }
               },
               "."
            ]
         ],
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "mod_tables" : [
            "table_C.10-5"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1155)" : {
         "module" : "General Series",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Series",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(0008,1070)" : {
         "module" : "General Series",
         "desc" : "Name(s) of the operator(s) supporting the Series.",
         "req" : "3",
         "name" : "Operators' Name",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0231)[<2>](0070,0227)" : {
         "module" : "Graphic Annotation",
         "desc" : "Font name in a standard type.",
         "entity" : "Presentation State",
         "name" : "Font Name",
         "req" : "3",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1150)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "entity" : "Series",
         "module" : "General Series",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0070,0402)[<0>](0008,1115)[<1>](0020,000e)" : {
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.11.11-1b"
         ],
         "usage" : "M",
         "name" : "Series Instance UID",
         "req" : "1",
         "entity" : "Presentation State",
         "desc" : [
            "Unique identifier of a Series that is part of the Study defined by the Study Instance UID (0020,000D) in the enclosing data set.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "The Study Instance UID (0020,000D) value will be that of the presentation state itself, unless the macro is invoked from Blending Sequence (0070,0402) in the ",
                        {
                           "el" : "xref",
                           "attrs" : {
                              "linkend" : "sect_C.11.14",
                              "xrefstyle" : "select: title"
                           }
                        },
                        ", in which case it will be explicitly specified."
                     ],
                     "attrs" : {
                        "xml:id" : "para_8e6f8130-b38c-4ee9-a366-c41dfe640dcc"
                     },
                     "el" : "para"
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "module" : "Presentation State Blending"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)[<2>](0070,0229)" : {
         "desc" : "Generic font name as defined within CSS (Cascading Style Sheets). Default fontname, if the font specified in Font Name (0070,0227) is not present or can not be rendered.",
         "module" : "Graphic Annotation",
         "name" : "CSS Font Name",
         "req" : "1",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied"
      },
      "(0070,0402)[<0>](0020,000d)" : {
         "req" : "1",
         "name" : "Study Instance UID",
         "entity" : "Presentation State",
         "desc" : "Unique identifier for the Study that contains the images, which may differ from the Study in which the presentation state is contained.",
         "module" : "Presentation State Blending",
         "mod_tables" : [
            "table_C.11.14-1"
         ],
         "usage" : "M"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0062,000b)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "module" : "Patient",
         "desc" : "Identifies the Segment Number to which the reference applies. Required if the Referenced SOP Instance is a Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present.",
         "name" : "Referenced Segment Number",
         "req" : "1C",
         "entity" : "Patient"
      },
      "(0010,0024)[<0>](0040,0035)" : {
         "entity" : "Patient",
         "req" : "3",
         "name" : "Identifier Type Code",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_dc68c1a1-46db-4a55-bcba-f75b9d9a8ab4"
                     }
                  },
                  "\n              "
               ]
            }
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      " (0010,0027) [<0>](0018,5100)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "usage" : "M",
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
         "module" : "Patient",
         "name" : "Patient Position",
         "req" : "3",
         "entity" : "Patient"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0232)[<2>](0070,0244)" : {
         "name" : "Shadow Style",
         "req" : "1",
         "entity" : "Presentation State",
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            },
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.10.5.1.3.13.2"
                  }
               }
            ]
         ],
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a122)" : {
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1C",
         "name" : "Time",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
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
         "entity" : "Presentation State",
         "name" : "Query/Retrieve View",
         "req" : "1C"
      },
      "(0010,1002)" : {
         "module" : "Patient",
         "desc" : [
            "A sequence of identification numbers or codes used to identify the patient, which may or may not be human readable, and may or may not have been obtained from an implanted or attached device such as an RFID or barcode.",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Other Patient IDs Sequence",
         "req" : "3",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0021)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "entity" : "Presentation State",
         "req" : "1",
         "name" : "Number of Graphic Points",
         "desc" : "Number of data Items, e.g., points, in this Compound Graphic.",
         "module" : "Graphic Annotation"
      },
      "(0040,0275)[<0>](0040,100a)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "entity" : "Series",
         "name" : "Reason for Requested Procedure Code Sequence",
         "req" : "3",
         "module" : "General Series",
         "desc" : [
            "Coded Reason for requesting this procedure.",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0010,2298)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "Relationship of Responsible Person to the patient.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.1.1.1.2"
                  },
                  "el" : "xref"
               },
               " for Defined Terms."
            ],
            "Required if Responsible Person is present and has a value."
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "1C",
         "name" : "Responsible Person Role"
      },
      "(0008,1120)" : {
         "desc" : [
            "A sequence that provides reference to a Patient SOP Class/Instance pair.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "Patient",
         "req" : "3",
         "name" : "Referenced Patient Sequence",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a160)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "module" : "General Series",
         "req" : "1C",
         "name" : "Text Value",
         "entity" : "Series"
      },
      "(0040,a390)[<0>](0008,1155)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "entity" : "Presentation State",
         "module" : "SOP Common",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0070,0001)[<0>](0008,1140)[<1>](0062,000b)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "mod_tables" : [
            "table_C.10-5",
            "table_10-3"
         ],
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "module" : "Graphic Annotation",
         "entity" : "Presentation State",
         "name" : "Referenced Segment Number",
         "req" : "1C"
      },
      "(0038,0060)" : {
         "module" : "Patient Study",
         "desc" : "Identifier of the Service Episode as assigned by the healthcare provider",
         "entity" : "Study",
         "req" : "3",
         "name" : "Service Episode ID",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ]
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
         "module" : "General Study",
         "req" : "3",
         "name" : "Referring Physician Identification Sequence",
         "entity" : "Study"
      },
      "(0010,0024)[<0>](0040,0039)" : {
         "mod_tables" : [
            "table_C.7-1",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_da6e8d69-e95e-4320-b5c5-be5b4cbb811f"
                     }
                  },
                  "\n              "
               ]
            }
         ],
         "module" : "Patient",
         "req" : "3",
         "name" : "Assigning Jurisdiction Code Sequence",
         "entity" : "Patient"
      },
      "(0008,1110)[<0>](0008,1155)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "module" : "General Study",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Study",
         "name" : "Referenced SOP Instance UID",
         "req" : "1"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "module" : "Patient",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "Patient",
         "name" : "Local Namespace Entity ID",
         "req" : "1C"
      },
      "(0040,0275)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "name" : "Request Attributes Sequence",
         "req" : "3",
         "entity" : "Series",
         "desc" : [
            "Sequence that contains attributes from the Imaging Service Request.",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "General Series"
      },
      "(0008,1062)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "name" : "Physician(s) Reading Study Identification Sequence",
         "req" : "3",
         "module" : "General Study",
         "desc" : "Identification of the physician(s) reading the Study. One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Name of Physician(s) Reading Study (0008,1060), if present."
      },
      "(0008,1062)[<0>](0040,1103)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "desc" : "Person's telephone number(s)",
         "entity" : "Study",
         "req" : "3",
         "name" : "Person's Telephone Numbers"
      },
      "(0008,0020)" : {
         "entity" : "Study",
         "name" : "Study Date",
         "req" : "2",
         "module" : "General Study",
         "desc" : "Date the Study started.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0008,1052)[<0>](0008,0080)" : {
         "module" : "General Series",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "entity" : "Series",
         "name" : "Institution Name",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ]
      },
      "(0008,1072)[<0>](0008,0081)" : {
         "req" : "3",
         "name" : "Institution Address",
         "entity" : "Series",
         "module" : "General Series",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0040,a390)[<0>](0008,1150)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "entity" : "Presentation State",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "SOP Common"
      },
      "(0010,2180)" : {
         "desc" : "Occupation of the Patient.",
         "module" : "Patient Study",
         "entity" : "Study",
         "req" : "3",
         "name" : "Occupation",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a30a)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "req" : "1C",
         "name" : "Numeric Value",
         "module" : "General Series",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ]
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0033)" : {
         "module" : "General Series",
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
         "req" : "1C",
         "name" : "Universal Entity ID Type",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "usage" : "M"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0274)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "entity" : "Presentation State",
         "name" : "Tick Alignment",
         "req" : "1C",
         "module" : "Graphic Annotation",
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
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.10.5.1.3",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ],
            "Required if Compound Graphic Type (0070,0294) equals RULER, AXIS or CROSSHAIR."
         ]
      },
      "(0070,0402)[<0>](0028,1054)" : {
         "module" : "Presentation State Blending",
         "desc" : [
            "Specifies the output units of Rescale Slope (0028,1053) and Rescale Intercept (0028,1052).",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.11.1.1.2"
                  }
               },
               " for further explanation."
            ],
            "Required if Rescale Intercept is present."
         ],
         "entity" : "Presentation State",
         "name" : "Rescale Type",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.11-1b"
         ]
      },
      "(0070,0001)[<0>](0070,0009)" : {
         "mod_tables" : [
            "table_C.10-5"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "module" : "Graphic Annotation",
         "desc" : [
            "Sequence that describes a graphic annotation.",
            "One or more Items shall be included in this Sequence.",
            "Either one or both of Text Object Sequence (0070,0008) or Graphic Object Sequence (0070,0009) are required."
         ],
         "name" : "Graphic Object Sequence",
         "req" : "1C",
         "entity" : "Presentation State"
      },
      "(0070,0402)[<0>](0028,3110)[<1>](0028,3010)[<2>](0028,3003)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.11-2b"
         ],
         "desc" : "Free form text explanation of the meaning of the LUT.",
         "module" : "Presentation State Blending",
         "entity" : "Presentation State",
         "name" : "LUT Explanation",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,08ea)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Measurement Units Code Sequence",
         "req" : "1C",
         "entity" : "Series",
         "module" : "General Series",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ]
      },
      "(0070,0404)[<0>](0008,1115)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.17-3"
         ],
         "desc" : [
            "Sequence of Items where each Item includes the Attributes of a Series containing referenced Composite Object(s).",
            "One or more Items shall be included in this Sequence"
         ],
         "module" : "Presentation State Blending",
         "entity" : "Presentation State",
         "req" : "1",
         "name" : "Referenced Series Sequence"
      },
      "(0070,0404)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0120)" : {
         "name" : "Signature",
         "req" : "1",
         "entity" : "Presentation State",
         "module" : "Presentation State Blending",
         "desc" : "The Signature Value identified by the Digital Signature UID within the Referenced SOP Instance UID.",
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M"
      },
      "(0070,0402)[<0>](0008,1115)[<1>](0008,1140)[<2>](0008,1155)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.11.11-1b",
            "table_10-3",
            "table_10-11"
         ],
         "entity" : "Presentation State",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "Presentation State Blending"
      },
      "(0400,0561)[<0>](0400,0563)" : {
         "module" : "SOP Common",
         "desc" : "Identification of the system that removed and/or replaced the attributes.",
         "entity" : "Presentation State",
         "name" : "Modifying System",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0028,2000)" : {
         "mod_tables" : [
            "table_C.11.15-1"
         ],
         "usage" : "M",
         "desc" : "An ICC Profile encoding the transformation of device-dependent color stored pixel values into PCS-Values.",
         "module" : "ICC Profile",
         "name" : "ICC Profile",
         "req" : "1",
         "entity" : "Presentation State"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)" : {
         "entity" : "Presentation State",
         "req" : "3",
         "name" : "Text Style Sequence",
         "desc" : [
            "Sequence that describes the text style.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ]
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,003a)" : {
         "module" : "Patient",
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
         "req" : "3",
         "name" : "Assigning Agency or Department Code Sequence",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M"
      },
      "(0008,0018)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
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
                  "targetptr" : "PS3.4",
                  "targetdoc" : "PS3.4",
                  "xrefstyle" : "select: labelnumber"
               },
               "el" : "olink"
            },
            "."
         ],
         "entity" : "Presentation State",
         "name" : "SOP Instance UID",
         "req" : "1"
      },
      "(0070,0402)[<0>](0028,3000)[<1>](0028,3003)" : {
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.11-1b"
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "LUT Explanation",
         "entity" : "Presentation State",
         "desc" : "Free form text explanation of the meaning of the LUT.",
         "module" : "Presentation State Blending"
      },
      "(0070,0402)[<0>](0008,1115)[<1>](0008,1140)[<2>](0008,1160)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.11.11-1b",
            "table_10-3"
         ],
         "entity" : "Presentation State",
         "name" : "Referenced Frame Number",
         "req" : "1C",
         "module" : "Presentation State Blending",
         "desc" : [
            "Identifies the frame numbers within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1.",
            {
               "el" : "note",
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
               ]
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ]
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)[<2>](0070,0241)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "desc" : [
            [
               "A default color triplet value used to specify the text color in which it is recommended that the text be rendered on a color display. The units are specified in PCS-Values, and the value is encoded as CIELab. See ",
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
         "module" : "Graphic Annotation",
         "entity" : "Presentation State",
         "req" : "1",
         "name" : "Text Color CIELab Value"
      },
      "(0012,0020)" : {
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U",
         "req" : "1",
         "name" : "Clinical Trial Protocol ID",
         "entity" : "Patient",
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
         "module" : "Clinical Trial Subject"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a124)" : {
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
      "(0010,1030)" : {
         "entity" : "Study",
         "req" : "3",
         "name" : "Patient's Weight",
         "desc" : "Weight of the Patient, in kilograms.",
         "module" : "Patient Study",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0070,0403)" : {
         "req" : "1",
         "name" : "Relative Opacity",
         "entity" : "Presentation State",
         "module" : "Presentation State Blending",
         "desc" : [
            "A value from 0.0 to 1.0 indicating the relative opacity of the pixels of the superimposed image, where 1.0 means that pixels of the superimposed image completely replace the pixels of the underlying image, and 0.0 means that the pixels of the underlying image completely replace the pixels of the superimposed image.",
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
               " for a detailed description of the blending operation."
            ]
         ],
         "mod_tables" : [
            "table_C.11.14-1"
         ],
         "usage" : "M"
      },
      "(0070,0402)[<0>](0028,3000)[<1>](0028,3006)" : {
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.11-1b"
         ],
         "usage" : "M",
         "desc" : "LUT Data in this Sequence.",
         "module" : "Presentation State Blending",
         "name" : "LUT Data",
         "req" : "1",
         "entity" : "Presentation State"
      },
      "(0010,2160)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "desc" : "Ethnic group or race of the patient.",
         "module" : "Patient",
         "req" : "3",
         "name" : "Ethnic Group",
         "entity" : "Patient"
      },
      "(0008,1250)[<0>](0040,a170)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "module" : "General Series",
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "Zero or more Items shall be included in this Sequence.",
            "When absent, implies that the reason for the reference is unknown."
         ],
         "req" : "2",
         "name" : "Purpose of Reference Code Sequence",
         "entity" : "Series"
      },
      "(0018,a001)[<0>](0018,1050)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "name" : "Spatial Resolution",
         "req" : "3",
         "entity" : "Presentation State"
      },
      "(0008,1080)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "desc" : "Description of the admitting diagnosis (diagnoses)",
         "module" : "Patient Study",
         "req" : "3",
         "name" : "Admitting Diagnoses Description",
         "entity" : "Study"
      },
      "(0008,0110)[<0>](0008,0116)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Presentation State",
         "req" : "3",
         "name" : "Coding Scheme Responsible Organization",
         "module" : "SOP Common",
         "desc" : "Name of the organization responsible for the Coding Scheme. May include organizational contact information."
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0233)[<2>](0070,0252)" : {
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5c"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "desc" : [
            "A color triplet value used to encode the background color. The units are specified in PCS-Values, and the value is encoded as CIELab. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.10.7.1.1"
               }
            },
            "."
         ],
         "module" : "Graphic Annotation",
         "name" : "Pattern Off Color CIELab Value",
         "req" : "3",
         "entity" : "Presentation State"
      },
      "(0028,0108)" : {
         "desc" : "The minimum value of all images in this Series.",
         "module" : "General Series",
         "entity" : "Series",
         "req" : "3",
         "name" : "Smallest Pixel Value in Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0010,1100)[<0>](0040,e024)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "module" : "Patient",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_020ae95c-9384-49b9-b460-e9625c404c63"
                     }
                  },
                  "\n              "
               ]
            },
            "Required if DICOM Retrieval Sequence (0040,E021), DICOM Media Retrieval Sequence (0040,E022), WADO-RS Retrieval Sequence (0040,E025) and WADO Retrieval Sequence (0040,E023) are not present. May be present otherwise.",
            "This sequence shall only identify repositories known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1C",
         "name" : "XDS Retrieval Sequence",
         "entity" : "Patient"
      },
      "(0018,a001)[<0>](0008,1070)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : "Name(s) of the operator(s) of the contributing equipment.",
         "req" : "3",
         "name" : "Operators' Name",
         "entity" : "Presentation State"
      },
      "(fffa,fffa)[<0>](0400,0005)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "desc" : "A number used to identify which MAC Parameters Sequence item was used in the calculation of this Digital Signature.",
         "module" : "SOP Common",
         "req" : "1",
         "name" : "MAC ID Number",
         "entity" : "Presentation State"
      },
      "(0008,1062)[<0>](0040,1101)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "module" : "General Study",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Person Identification Code Sequence",
         "req" : "1",
         "entity" : "Study"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0232)[<2>](0070,0251)" : {
         "module" : "Graphic Annotation",
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
         "req" : "1",
         "name" : "Pattern On Color CIELab Value",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ]
      },
      "(0012,0083)[<0>](0012,0084)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "entity" : "Study",
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
                     "linkend" : "sect_C.7.2.3.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Required if Consent for Distribution Flag (0012,0085) equals YES or WITHDRAWN."
         ],
         "module" : "Clinical Trial Study"
      },
      "(0012,0021)" : {
         "req" : "2",
         "name" : "Clinical Trial Protocol Name",
         "entity" : "Patient",
         "module" : "Clinical Trial Subject",
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
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1102)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Person's Address",
         "req" : "3",
         "entity" : "Presentation State",
         "desc" : "Person's mailing address",
         "module" : "SOP Common"
      },
      "(0012,0081)" : {
         "desc" : "Name of the Ethics Committee or Institutional Review Board (IRB) or Institutional Animal Care and Use Committees (IACUC) responsible for approval of the Clinical Trial or research. Required if Clinical Trial Protocol Ethics Committee Approval Number (0012,0082) is present.",
         "module" : "Clinical Trial Subject",
         "name" : "Clinical Trial Protocol Ethics Committee Name",
         "req" : "1C",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,003a)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Assigning Agency or Department Code Sequence",
         "entity" : "Patient",
         "module" : "Patient",
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
                     "attrs" : {
                        "xml:id" : "para_d5f050e9-c374-464c-bbc6-c76b57d065fd"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ]
            }
         ]
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0231)[<2>](0070,0248)" : {
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "module" : "Graphic Annotation",
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "req" : "1",
         "name" : "Underlined",
         "entity" : "Presentation State"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0022)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "desc" : [
            "Numerical data Items that specify this Compound Graphic (points, vectors and scalars).",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.10.5.1.3"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "module" : "Graphic Annotation",
         "entity" : "Presentation State",
         "name" : "Graphic Data",
         "req" : "1"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0024)" : {
         "desc" : [
            "Indicates whether or not the Compound Graphics is displayed as filled.",
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            },
            "Required if Compound Graphic Type (0070,0294) equals RECTANGLE or ELLIPSE."
         ],
         "module" : "Graphic Annotation",
         "entity" : "Presentation State",
         "name" : "Graphic Filled",
         "req" : "1C",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "mod_tables" : [
            "table_C.10-5"
         ]
      },
      "(0018,a001)[<0>](0018,a003)" : {
         "req" : "3",
         "name" : "Contribution Description",
         "entity" : "Presentation State",
         "module" : "SOP Common",
         "desc" : "Description of the contribution the equipment made to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a160)" : {
         "module" : "General Series",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "req" : "1C",
         "name" : "Text Value",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0233)[<2>](0070,0285)" : {
         "entity" : "Presentation State",
         "name" : "Pattern Off Opacity",
         "req" : "1",
         "module" : "Graphic Annotation",
         "desc" : "Encodes the background opacity. The value is encoded as floating point alpha value (0.0-1.0).",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5c"
         ]
      },
      "(0010,1002)[<0>](0010,0021)" : {
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
         "name" : "Issuer of Patient ID",
         "req" : "3",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M"
      },
      "(0010,1100)[<0>](0040,e021)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "entity" : "Patient",
         "name" : "DICOM Retrieval Sequence",
         "req" : "1C",
         "desc" : [
            "Details for retrieving instances via the DICOM Retrieve Service.",
            "Required if DICOM Media Retrieval Sequence (0040,E022), WADO Retrieval Sequence (0040,E023), WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "This sequence shall only identify sources known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a162)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "req" : "1C",
         "name" : "Rational Numerator Value",
         "entity" : "Series",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "module" : "General Series"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0233)[<2>](0070,0257)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied",
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
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.10.5.1.3.14.1"
                  }
               },
               "."
            ]
         ],
         "module" : "Graphic Annotation",
         "entity" : "Presentation State",
         "req" : "1",
         "name" : "Fill Mode"
      },
      "(0070,005a)[<0>](0070,0052)" : {
         "req" : "1",
         "name" : "Displayed Area Top Left Hand Corner",
         "entity" : "Presentation State",
         "module" : "Displayed Area",
         "desc" : [
            "The top left (after spatial transformation) pixel in the referenced image to be displayed, given as column\\row. Column is the horizontal (before spatial transformation) offset (X) and row is the vertical (before spatial transformation) offset (Y) relative to the origin of the pixel data before spatial transformation, which is 1\\1. See ",
            {
               "attrs" : {
                  "linkend" : "figure_C.10.4-1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "mod_tables" : [
            "table_C.10-4"
         ],
         "usage" : "M"
      },
      "(0018,1050)" : {
         "module" : "General Equipment",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "entity" : "Equipment",
         "req" : "3",
         "name" : "Spatial Resolution",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ]
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0033)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M",
         "module" : "Patient",
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
         "req" : "1C",
         "entity" : "Patient"
      },
      "(0040,0275)[<0>](0008,1110)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
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
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_10.6.1"
                  }
               },
               "."
            ]
         ],
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Referenced Study Sequence",
         "req" : "3"
      },
      "(0070,0087)[<0>](0070,0081)" : {
         "name" : "Content Description",
         "req" : "1",
         "entity" : "Presentation State",
         "module" : "Presentation State Identification",
         "desc" : "An alternate description that is used to identify this SOP Instance.",
         "mod_tables" : [
            "table_C.11.10-1",
            "table_10-12"
         ],
         "usage" : "M"
      },
      "(0008,009d)[<0>](0040,1101)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "name" : "Person Identification Code Sequence",
         "req" : "1",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "General Study"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Local Namespace Entity ID",
         "req" : "1C"
      },
      "(0070,005a)[<0>](0070,0053)" : {
         "req" : "1",
         "name" : "Displayed Area Bottom Right Hand Corner",
         "entity" : "Presentation State",
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
         "module" : "Displayed Area",
         "mod_tables" : [
            "table_C.10-4"
         ],
         "usage" : "M"
      },
      "(0008,1111)[<0>](0008,1150)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-11"
         ],
         "entity" : "Series",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "General Series"
      },
      "(0010,1010)" : {
         "name" : "Patient's Age",
         "req" : "3",
         "entity" : "Study",
         "desc" : "Age of the Patient.",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a121)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "req" : "1C",
         "name" : "Date",
         "entity" : "Series",
         "module" : "General Series",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ]
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0231)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "module" : "Graphic Annotation",
         "desc" : [
            "Sequence that describes the text style.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Presentation State",
         "req" : "3",
         "name" : "Text Style Sequence"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a161)" : {
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
         ],
         "entity" : "Series",
         "name" : "Floating Point Value",
         "req" : "1C"
      },
      "(0010,0216)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "req" : "3",
         "name" : "Strain Stock Sequence",
         "module" : "Patient",
         "desc" : [
            "Information identifying an animal within a strain stock.",
            "Only a single Item is permitted in this sequence."
         ]
      },
      "(0010,0024)[<0>](0040,0036)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "name" : "Assigning Facility Sequence",
         "req" : "3",
         "entity" : "Patient",
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
         "module" : "Patient"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0033)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
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
         "name" : "Universal Entity ID Type",
         "req" : "1C",
         "entity" : "Patient"
      },
      "(0008,1072)[<0>](0008,0080)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "entity" : "Series",
         "req" : "1C",
         "name" : "Institution Name"
      },
      "(0070,0086)[<0>](0008,0081)" : {
         "mod_tables" : [
            "table_C.11.10-1",
            "table_10-12",
            "table_10-1"
         ],
         "usage" : "M",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "module" : "Presentation State Identification",
         "name" : "Institution Address",
         "req" : "3",
         "entity" : "Presentation State"
      },
      "(0008,1049)[<0>](0008,0081)" : {
         "req" : "3",
         "name" : "Institution Address",
         "entity" : "Study",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0062,000b)" : {
         "name" : "Referenced Segment Number",
         "req" : "1C",
         "entity" : "Series",
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
         "usage" : "M"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0015)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "entity" : "Presentation State",
         "req" : "1C",
         "name" : "Anchor Point Visibility",
         "module" : "Graphic Annotation",
         "desc" : [
            "Flag to indicate whether or not a visible indication (such as a line or arrow) of the relationship between the text and the anchor point is to be displayed.",
            {
               "title" : "Enumerated Values:",
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
               ]
            },
            "Required if Anchor Point (0070,0014) is present."
         ]
      },
      "(0070,0080)" : {
         "mod_tables" : [
            "table_C.11.10-1",
            "table_10-12"
         ],
         "usage" : "M",
         "desc" : "A label that is used to identify this SOP Instance.",
         "module" : "Presentation State Identification",
         "req" : "1",
         "name" : "Content Label",
         "entity" : "Presentation State"
      },
      "(0018,1000)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "name" : "Device Serial Number",
         "req" : "3",
         "entity" : "Equipment",
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
      "(0070,0402)[<0>](0028,3110)[<1>](0028,3010)[<2>](0028,3002)" : {
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.11-2b"
         ],
         "usage" : "M",
         "name" : "LUT Descriptor",
         "req" : "1",
         "entity" : "Presentation State",
         "module" : "Presentation State Blending",
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
         ]
      },
      "(0008,1010)" : {
         "entity" : "Equipment",
         "req" : "3",
         "name" : "Station Name",
         "module" : "General Equipment",
         "desc" : "User defined name identifying the machine that produced the composite instances.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ]
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0031)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "usage" : "M",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "module" : "General Series",
         "name" : "Local Namespace Entity ID",
         "req" : "1C",
         "entity" : "Series"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0231)[<2>](0070,0242)" : {
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "desc" : [
            [
               "Specifies the horizontal position of the text relative to the vertical edges of the bounding box. Horizontal Alignment shall override the Bounding Box Text Horizontal Justification (0070,0012) of the Text Object Sequence Item. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.10.5.1.3.12.1"
                  }
               }
            ],
            {
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            },
            "Required if Bounding Box Top Left Hand Corner (0070,0010) is present."
         ],
         "module" : "Graphic Annotation",
         "name" : "Horizontal Alignment",
         "req" : "3",
         "entity" : "Presentation State"
      },
      "(0032,1034)" : {
         "module" : "General Study",
         "desc" : [
            "Institutional department where the request initiated.",
            "Only a single item is permitted in this Sequence."
         ],
         "entity" : "Study",
         "name" : "Requesting Service Code Sequence",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0010,2201)" : {
         "req" : "1C",
         "name" : "Patient Species Description",
         "entity" : "Patient",
         "module" : "Patient",
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
            "Required if the patient is an animal and if Patient Species Code Sequence (0010,2202) is not present. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(0020,0013)" : [
         {
            "entity" : "Presentation State",
            "req" : "1",
            "name" : "Instance Number",
            "module" : "Presentation State Identification",
            "desc" : "A number that identifies this SOP Instance.",
            "usage" : "M",
            "mod_tables" : [
               "table_C.11.10-1",
               "table_10-12"
            ]
         },
         {
            "entity" : "Presentation State",
            "name" : "Instance Number",
            "req" : "3",
            "desc" : "A number that identifies this Composite object instance.",
            "module" : "SOP Common",
            "usage" : "M",
            "mod_tables" : [
               "table_C.12-1"
            ]
         }
      ],
      "(0070,0404)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0010)" : {
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M",
         "name" : "MAC Calculation Transfer Syntax UID",
         "req" : "1",
         "entity" : "Presentation State",
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
                                 "content" : [
                                    "Certain Transfer Syntaxes, particularly those that are used with compressed data, allow the fragmentation of the pixel data to change. If such fragmentation changes, Digital Signatures generated with such Transfer Syntaxes could become invalid."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_d3b7f806-4134-47a2-bf65-131f44d9fa2a"
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
         "module" : "Presentation State Blending"
      },
      "(0100,0424)" : {
         "module" : "SOP Common",
         "desc" : "Any comments associated with the setting of the SOP Instance Status (0100,0410) to AO.",
         "req" : "3",
         "name" : "SOP Authorization Comment",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0008,009d)[<0>](0040,1102)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "req" : "3",
         "name" : "Person's Address",
         "module" : "General Study",
         "desc" : "Person's mailing address"
      },
      "(0020,9172)[<0>](0008,1155)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "usage" : "M",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "entity" : "Presentation State",
         "module" : "SOP Common",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0010,0218)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "Additional information about the strain of the patient that is not encoded in the formal nomenclature used in Strain Description (0010,0212). See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.1.1.1.4",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Strain Additional Information",
         "req" : "3"
      },
      "(0070,0060)[<0>](0070,0062)" : {
         "module" : "Graphic Layer",
         "desc" : "An integer indicating the order in which it is recommended that the layer be rendered, if the display is capable of distinguishing. Lower numbered layers are to be rendered first.",
         "name" : "Graphic Layer Order",
         "req" : "1",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.10-7"
         ],
         "usage" : "C - Required if  is present"
      },
      "(0020,9172)[<0>](0062,000b)" : {
         "entity" : "Presentation State",
         "name" : "Referenced Segment Number",
         "req" : "1C",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ]
      },
      "(0008,1052)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "name" : "Performing Physician Identification Sequence",
         "req" : "3",
         "entity" : "Series",
         "desc" : [
            "Identification of the physician(s) administering the Series.",
            "One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Performing Physician's Name (0008,1050), if present."
         ],
         "module" : "General Series"
      },
      "(0010,1100)[<0>](0040,e025)" : {
         "req" : "1C",
         "name" : "WADO-RS Retrieval Sequence",
         "entity" : "Patient",
         "module" : "Patient",
         "desc" : [
            "Details for retrieving instances via WADO-RS.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "attrs" : {
                        "xml:id" : "para_6afb22cc-92e8-4ec8-9a23-820f4c4a769b"
                     },
                     "el" : "para",
                     "content" : [
                        "Retrieval via WADO-URI is addressed in the WADO Retrieval Sequence (0040,E023). Retrieval via  WADO-WS is addressed in the XDS Retrieval Sequence (0040,E024)."
                     ]
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
         "usage" : "M"
      },
      "(0018,1200)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "module" : "General Equipment",
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
         "req" : "3",
         "name" : "Date of Last Calibration",
         "entity" : "Equipment"
      },
      "(0008,1052)[<0>](0008,0082)" : {
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Institution Code Sequence",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1160)" : {
         "module" : "General Series",
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
         "req" : "1C",
         "name" : "Referenced Frame Number",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0008,0050)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "desc" : "An identifier of the Imaging Service Request for this Requested Procedure.",
         "module" : "General Series",
         "entity" : "Series",
         "req" : "3",
         "name" : "Accession Number"
      },
      "(0028,1101)" : {
         "entity" : "Presentation State",
         "name" : "Red Palette Color Lookup Table Descriptor",
         "req" : "1",
         "desc" : [
            "Specifies the format of the Red Palette Color Lookup Table Data (0028,1201). See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.3.1.5"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "module" : "Palette Color Lookup Table",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-22a"
         ]
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0024)" : {
         "module" : "Graphic Annotation",
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
         ],
         "entity" : "Presentation State",
         "name" : "Graphic Filled",
         "req" : "1C",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "mod_tables" : [
            "table_C.10-5"
         ]
      },
      "(0040,0275)[<0>](0032,1064)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "module" : "General Series",
         "desc" : [
            "A sequence that conveys the Procedure Type of the requested procedure.",
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "Series",
         "req" : "3",
         "name" : "Requested Procedure Code Sequence"
      },
      "(0010,2292)" : {
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
         "name" : "Patient Breed Description",
         "req" : "2C",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(fffa,fffa)[<0>](0400,0310)" : {
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
         "module" : "SOP Common",
         "req" : "3",
         "name" : "Certified Timestamp",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M"
      },
      "(0010,0024)[<0>](0040,0033)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "name" : "Universal Entity ID Type",
         "req" : "1C",
         "entity" : "Patient",
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
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_10.14",
                     "xrefstyle" : "select: label"
                  }
               },
               " for Defined Terms."
            ]
         ],
         "module" : "Patient"
      },
      "(0008,0021)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series",
         "req" : "3",
         "name" : "Series Date",
         "module" : "General Series",
         "desc" : "Date the Series started."
      },
      "(0040,0275)[<0>](0008,0051)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "entity" : "Series",
         "name" : "Issuer of Accession Number Sequence",
         "req" : "3",
         "module" : "General Series",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this Sequence."
         ]
      },
      "(0070,0086)[<0>](0040,1104)" : {
         "mod_tables" : [
            "table_C.11.10-1",
            "table_10-12",
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
         ],
         "module" : "Presentation State Identification",
         "req" : "3",
         "name" : "Person's Telecom Information",
         "entity" : "Presentation State"
      },
      "(0010,2294)[<0>](0010,2295)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "Identification number of an animal within the registry.",
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Breed Registration Number",
         "req" : "1"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0261)" : {
         "mod_tables" : [
            "table_C.10-5"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "module" : "Graphic Annotation",
         "desc" : [
            "Diameter of the circle around Rotation Point (0070,0273) where the CUTLINE or INFINITELINE is not rendered.",
            "Diameter of the circle around the origin, specified by Graphic Data (0070,0022) where the CROSSHAIR is not rendered.",
            "The Compound Graphic Units (0070,0282) of Gap Length (0070,0261) shall be DISPLAY.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.10.5.1.3",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Required if Compound Graphic Type (0070,0294) equals CUTLINE, INFINITELINE or CROSSHAIR."
         ],
         "req" : "1C",
         "name" : "Gap Length",
         "entity" : "Presentation State"
      },
      "(0040,0275)[<0>](0040,0008)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Scheduled Protocol Code Sequence",
         "entity" : "Series",
         "module" : "General Series",
         "desc" : "Sequence describing the Scheduled Protocol following a specific coding scheme. One or more Items are permitted in this Sequence."
      },
      "(0008,1110)[<0>](0008,1150)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "General Study",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "entity" : "Study"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)" : {
         "module" : "Patient",
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
         "name" : "Assigning Facility Sequence",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M"
      },
      "(0070,0404)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0100)" : {
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M",
         "req" : "1",
         "name" : "Digital Signature UID",
         "entity" : "Presentation State",
         "desc" : "The Unique Identifier of a Digital Signature held in the referenced SOP Instance.",
         "module" : "Presentation State Blending"
      },
      "(0010,0010)" : {
         "req" : "2",
         "name" : "Patient's Name",
         "entity" : "Patient",
         "desc" : "Patient's full name.",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(0010,2293)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "req" : "2C",
         "name" : "Patient Breed Code Sequence",
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
         "module" : "Patient"
      },
      "(0028,1202)" : {
         "name" : "Green Palette Color Lookup Table Data",
         "req" : "1C",
         "entity" : "Presentation State",
         "desc" : [
            "Green Palette Color Lookup Table Data. Required if segmented data is NOT used in an Image IOD, or if the IOD is a Presentation State IOD or Color Palette IOD. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.6.3.1.6",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "module" : "Palette Color Lookup Table",
         "mod_tables" : [
            "table_C.7-22a"
         ],
         "usage" : "M"
      },
      "(0010,1100)[<0>](0020,000d)" : {
         "req" : "1C",
         "name" : "Study Instance UID",
         "entity" : "Patient",
         "module" : "Patient",
         "desc" : [
            "Unique identifier for the Study.",
            "Required if Type of Instances (0040,E020) is DICOM"
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a162)" : {
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
         "entity" : "Series",
         "req" : "1C",
         "name" : "Rational Numerator Value"
      },
      "(0018,a001)[<0>](0008,1090)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : "Manufacturer's model name of the equipment that contributed to the composite instance.",
         "entity" : "Presentation State",
         "name" : "Manufacturer's Model Name",
         "req" : "3"
      },
      "(0008,0300)[<0>](0008,0304)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "desc" : [
            "List of Private Data Elements in block that do not contain identifying\n                  information (are safe from identity leakage).",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once.",
            "Required if Block Identifying Information Status (0008,0303) equals MIXED."
         ],
         "module" : "SOP Common",
         "name" : "Nonidentifying Private Elements",
         "req" : "1C",
         "entity" : "Presentation State"
      },
      "(0010,0026)[<0>](0010,0021)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
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
         "req" : "3",
         "entity" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a163)" : {
         "module" : "General Series",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "name" : "Rational Denominator Value",
         "req" : "1C",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0070,0402)[<0>](0008,1115)[<1>](0008,1140)" : {
         "desc" : [
            "The set of images and frames to which the Presentation applies. These shall be of the Study defined by Study Instance UID (0020,000D) and the Series defined by Series Instance UID (0020,000E).",
            "One or more Items shall be included in this Sequence.",
            "The referenced SOP Class shall be the same for all Images in any Item of this Referenced Series Sequence (0008,1115)."
         ],
         "module" : "Presentation State Blending",
         "entity" : "Presentation State",
         "req" : "1",
         "name" : "Referenced Image Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.11.11-1b"
         ]
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0231)[<2>](0070,0244)" : {
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "module" : "Graphic Annotation",
         "desc" : [
            "The shadow style of the text to be displayed.",
            {
               "title" : "Enumerated Values:",
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
               ]
            },
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.10.5.1.3.13.1"
                  },
                  "el" : "xref"
               }
            ]
         ],
         "name" : "Shadow Style",
         "req" : "1",
         "entity" : "Presentation State"
      },
      "(0070,0402)[<0>](0028,3110)[<1>](0008,1140)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.11.14-1"
         ],
         "desc" : [
            "Sequence of Items identifying images that are defined in the enclosing Item of Blending Sequence (0070,0402), to which this VOI LUT or Window Center and Width applies.",
            "One or more Items shall be included in this Sequence.",
            "Required if the VOI LUT transformation in this Item does not apply to all the images and frames in the enclosing Item of Blending Sequence (0070,0402)."
         ],
         "module" : "Presentation State Blending",
         "entity" : "Presentation State",
         "req" : "1C",
         "name" : "Referenced Image Sequence"
      },
      "(0012,0082)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "entity" : "Patient",
         "req" : "3",
         "name" : "Clinical Trial Protocol Ethics Committee Approval Number",
         "desc" : "Approval number issued by committee described in Clinical Trial Protocol Ethics Committee Name (0012,0081).",
         "module" : "Clinical Trial Subject"
      },
      "(0010,0219)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "req" : "3",
         "name" : "Strain Code Sequence",
         "module" : "Patient",
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
         ]
      },
      "(0070,0001)[<0>](0070,0008)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "module" : "Graphic Annotation",
         "desc" : [
            "Sequence that describes a text annotation.",
            "One or more Items shall be included in this Sequence.",
            "Either one or both of Text Object Sequence (0070,0008) or Graphic Object Sequence (0070,0009) are required."
         ],
         "entity" : "Presentation State",
         "name" : "Text Object Sequence",
         "req" : "1C"
      },
      "(0008,1060)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "name" : "Name of Physician(s) Reading Study",
         "req" : "3",
         "entity" : "Study",
         "desc" : "Names of the physician(s) reading the Study.",
         "module" : "General Study"
      },
      "(0010,0033)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "desc" : [
            "Date of birth of the named patient in the Alternative Calendar (0010,0035).",
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
                        "xml:id" : "para_d088e7b4-910c-4c72-8abf-cfb5a85daa67"
                     }
                  },
                  "\n                  "
               ]
            }
         ],
         "entity" : "Patient",
         "req" : "3",
         "name" : "Patient's Birth Date in Alternative Calendar"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0232)[<2>](0070,0246)" : {
         "name" : "Shadow Offset Y",
         "req" : "1",
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "desc" : [
            "Floating point value that defines the shadow offset in Y direction in Graphic Annotation Units (0070,0005). See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.10.5.1.3.13.2"
               },
               "el" : "xref"
            },
            "."
         ],
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied"
      },
      "(0008,103e)" : {
         "module" : "General Series",
         "desc" : "Description of the Series",
         "name" : "Series Description",
         "req" : "3",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a"
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
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Concept Code Sequence",
         "req" : "1C"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a043)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "req" : "1",
         "name" : "Concept Name Code Sequence",
         "entity" : "Series",
         "module" : "General Series",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0306)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Identifying Private Elements",
         "req" : "1",
         "entity" : "Presentation State",
         "module" : "SOP Common",
         "desc" : [
            "List of Private Data Elements in block that may contain identifying\n                  information (are unsafe from identity leakage)..",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once."
         ]
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M",
         "req" : "1C",
         "name" : "Universal Entity ID",
         "entity" : "Patient",
         "module" : "Patient",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise."
      },
      "(0400,0561)[<0>](0400,0550)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "desc" : [
            "Sequence that contains all the Attributes, with their previous values, that were modified or removed from the main data set.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "SOP Common",
         "req" : "1",
         "name" : "Modified Attributes Sequence",
         "entity" : "Presentation State"
      },
      "(0010,2297)" : {
         "desc" : [
            "Name of person with medical or welfare decision making authority for the patient.",
            "Required if the patient is an animal. May be present otherwise."
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Responsible Person",
         "req" : "2C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0070,0060)[<0>](0070,0066)" : {
         "entity" : "Presentation State",
         "req" : "3",
         "name" : "Graphic Layer Recommended Display Grayscale Value",
         "desc" : [
            "A default single gray unsigned value in which it is recommended that the layer be rendered on a monochrome display. The units are specified in P-Values from a minimum of 0000H (black) up to a maximum of FFFFH (white).",
            {
               "content" : [
                  "\n                  ",
                  {
                     "attrs" : {
                        "xml:id" : "para_befb1458-69b2-4738-9246-1ffb5f4d350c"
                     },
                     "el" : "para",
                     "content" : [
                        "The maximum P-Value for this Attribute may be different from the maximum P-Value from the output of the Presentation LUT, which may be less than 16 bits in depth."
                     ]
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "module" : "Graphic Layer",
         "usage" : "C - Required if  is present",
         "mod_tables" : [
            "table_C.10-7"
         ]
      },
      "(0400,0561)" : {
         "desc" : [
            "Sequence of Items containing all attributes that were removed or replaced by other values in the main data set.",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "SOP Common",
         "req" : "3",
         "name" : "Original Attributes Sequence",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0233)[<2>](0070,0257)" : {
         "module" : "Graphic Annotation",
         "desc" : [
            "The texture of the closed object to be displayed.",
            {
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            },
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.10.5.1.3.14.1"
                  }
               },
               "."
            ]
         ],
         "entity" : "Presentation State",
         "name" : "Fill Mode",
         "req" : "1",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5c"
         ]
      },
      "(0010,2299)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "req" : "2C",
         "name" : "Responsible Organization",
         "desc" : [
            "Name of organization with medical or welfare decision making authority for the patient.",
            "Required if patient is an animal. May be present otherwise."
         ],
         "module" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1155)" : {
         "module" : "General Series",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Series",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(0018,a001)[<0>](0040,a170)" : {
         "entity" : "Presentation State",
         "name" : "Purpose of Reference Code Sequence",
         "req" : "1",
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
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0231)[<2>](0070,0249)" : {
         "desc" : [
            "Specifies whether or not the text shall be rendered in bold.",
            {
               "title" : "Enumerated Values:",
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
               ]
            }
         ],
         "module" : "Graphic Annotation",
         "req" : "1",
         "name" : "Bold",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied"
      },
      "(0008,0096)[<0>](0008,0081)" : {
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "module" : "General Study",
         "name" : "Institution Address",
         "req" : "3",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0008,0122)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
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
         "name" : "Mapping Resource Name",
         "req" : "3",
         "entity" : "Presentation State"
      },
      "(0008,0110)[<0>](0008,0102)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "desc" : "The value of a Coding Scheme Designator, used in this SOP Instance, which is being mapped.",
         "module" : "SOP Common",
         "req" : "1",
         "name" : "Coding Scheme Designator",
         "entity" : "Presentation State"
      },
      "(0018,a001)[<0>](0018,1200)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Date of Last Calibration",
         "req" : "3",
         "entity" : "Presentation State",
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
      "(0010,2202)" : {
         "entity" : "Patient",
         "req" : "1C",
         "name" : "Patient Species Code Sequence",
         "module" : "Patient",
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
            "Only a single Item shall be included in this Sequence.",
            "Required if the patient is an animal and if Patient Species Description (0010,2201) is not present. May be present otherwise."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a040)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
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
         "name" : "Value Type",
         "req" : "1",
         "entity" : "Series"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "req" : "1C",
         "name" : "Local Namespace Entity ID",
         "entity" : "Patient",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)[<2>](0070,0243)" : {
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied",
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            },
            "Required if Bounding Box Top Left Hand Corner (0070,0010) is present."
         ],
         "module" : "Graphic Annotation",
         "req" : "3",
         "name" : "Vertical Alignment",
         "entity" : "Presentation State"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0231)[<2>](0070,0245)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "module" : "Graphic Annotation",
         "desc" : [
            "Floating point value that defines the shadow offset in X direction in Anchor Point Annotation Units (0070,0004) if used in Text Object Sequence Item or in Graphic Annotation Units (0070,0005) if used in Graphic Object Sequence Item. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.10.5.1.3.13.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            }
         ],
         "entity" : "Presentation State",
         "name" : "Shadow Offset X",
         "req" : "1"
      },
      "(0012,0060)" : {
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "usage" : "U",
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
         "module" : "Clinical Trial Series",
         "req" : "2",
         "name" : "Clinical Trial Coordinating Center Name",
         "entity" : "Series"
      },
      "(0070,005a)[<0>](0070,0102)" : {
         "mod_tables" : [
            "table_C.10-4"
         ],
         "usage" : "M",
         "desc" : [
            [
               "Ratio of the vertical size and the horizontal size of the pixels in the referenced image, to be used to display the referenced image, specified by a pair of integer values where the first value is the vertical pixel size and the second value is the horizontal pixel size. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.3.1.7"
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
                     "el" : "orderedlist",
                     "content" : [
                        "\n                    ",
                        {
                           "content" : [
                              "\n                      ",
                              {
                                 "content" : [
                                    "This value may be different from the aspect ratio specified by Pixel Aspect Ratio (0028,0034) in the referenced image, or implied by the values of Pixel Spacing (0028,0030) or Imager Pixel Spacing (0018,1164) specified in the referenced image, which are ignored."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_b5005f7b-391d-4be0-ab15-405c0c6cfbe4"
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
                                 "content" : [
                                    "This value must be specified even if the aspect ratio is 1:1."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_54875bde-8e88-4796-8e82-2ac2abc5faf5"
                                 },
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
            }
         ],
         "module" : "Displayed Area",
         "req" : "1C",
         "name" : "Presentation Pixel Aspect Ratio",
         "entity" : "Presentation State"
      },
      "(0018,a001)[<0>](0008,1010)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : "User defined name identifying the machine that contributed to the composite instance.",
         "entity" : "Presentation State",
         "name" : "Station Name",
         "req" : "3"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0020)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "desc" : {
            "title" : "Enumerated Values:",
            "type" : "variablelist",
            "list" : [
               [
                  "2",
                  null
               ]
            ]
         },
         "module" : "Graphic Annotation",
         "entity" : "Presentation State",
         "name" : "Graphic Dimensions",
         "req" : "1"
      },
      "(0010,1002)[<0>](0010,0022)" : {
         "module" : "Patient",
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
                     "attrs" : {
                        "xml:id" : "para_0c5465f7-fe2f-460e-8394-64ad149bdd60"
                     },
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "entity" : "Patient",
         "req" : "1",
         "name" : "Type of Patient ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0070,0402)[<0>](0028,1052)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.11-1b"
         ],
         "desc" : [
            "The value b in relationship between stored values (SV) and the output units specified in Rescale Type (0028,1054).",
            "Output units = m*SV + b.",
            "Required if Modality LUT Sequence (0028,3000) is not present. Shall not be present otherwise."
         ],
         "module" : "Presentation State Blending",
         "entity" : "Presentation State",
         "name" : "Rescale Intercept",
         "req" : "1C"
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0307)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Presentation State",
         "name" : "Deidentification Action",
         "req" : "1",
         "module" : "SOP Common",
         "desc" : [
            "Recommended action to be performed during de-identification on elements listed in Identifying Private Elements (0008,0306) within this Item.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "A specific type of action is suggested in order to minimize the impact of\n                    de-identification on the behavior of recipients that use the Private Data\n                    Elements."
                     ],
                     "attrs" : {
                        "xml:id" : "para_d169d5a7-02bb-4199-80d3-99e87cbc8c6d"
                     },
                     "el" : "para"
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
                           "content" : [
                              "\n                      ",
                              {
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_79bc3e05-de52-489c-8337-4fe4bb188ec4"
                                 },
                                 "content" : [
                                    "No C (clean) action is specified, since replacement with values of\n                        similar meaning known not to contain identifying information and consistent\n                        with the VR requires an understanding of the meaning of the value of the\n                        element. Whether or not to clean rather than remove or replace values is at\n                        the discretion of the implementer."
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
                                    "xml:id" : "para_d1ef55e5-ae5a-41bf-a17e-aee8ee6c841f"
                                 },
                                 "el" : "para",
                                 "content" : [
                                    "No suggested dummy value is provided, since the encoding of the value would depend on the VR of the data element."
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
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_62b4d252-a377-4a7b-9905-82f5437ccd6c"
                                 },
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
               ],
               "el" : "note"
            }
         ]
      },
      "(0070,0001)[<0>](0008,1140)[<1>](0008,1160)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "mod_tables" : [
            "table_C.10-5",
            "table_10-3"
         ],
         "entity" : "Presentation State",
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
                        "xml:id" : "para_68450e47-9448-4ac5-82e8-4015a854968a"
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
         "module" : "Graphic Annotation"
      },
      "(0028,1203)" : {
         "mod_tables" : [
            "table_C.7-22a"
         ],
         "usage" : "M",
         "name" : "Blue Palette Color Lookup Table Data",
         "req" : "1C",
         "entity" : "Presentation State",
         "desc" : [
            "Blue Palette Color Lookup Table Data. Required if segmented data is NOT used in an Image IOD, or if the IOD is a Presentation State IOD or Color Palette IOD. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.6.3.1.6",
                  "xrefstyle" : "select: label"
               }
            },
            " for further explanation."
         ],
         "module" : "Palette Color Lookup Table"
      },
      "(0038,0014)[<0>](0040,0032)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "entity" : "Study",
         "req" : "1C",
         "name" : "Universal Entity ID",
         "module" : "Patient Study",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise."
      },
      "(fffa,fffa)[<0>](0400,0120)" : {
         "req" : "1",
         "name" : "Signature",
         "entity" : "Presentation State",
         "module" : "SOP Common",
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
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M"
      },
      "(0010,1100)[<0>](0040,e024)[<1>](0040,e031)" : {
         "module" : "Patient",
         "desc" : "Uniquely identifies a Community to which requests for the referenced instances can be directed.",
         "req" : "3",
         "name" : "Home Community ID",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0231)[<2>](0070,0241)" : {
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "name" : "Text Color CIELab Value",
         "req" : "1",
         "entity" : "Presentation State",
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
         ],
         "module" : "Graphic Annotation"
      },
      "(0008,1084)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "desc" : [
            "A sequence that conveys the admitting diagnosis (diagnoses).",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Study",
         "req" : "3",
         "name" : "Admitting Diagnoses Code Sequence"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M",
         "name" : "Universal Entity ID Type",
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
         "module" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a122)" : {
         "entity" : "Series",
         "req" : "1C",
         "name" : "Time",
         "module" : "General Series",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0400,0500)[<0>](0400,0510)" : {
         "desc" : "Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
         "module" : "SOP Common",
         "entity" : "Presentation State",
         "name" : "Encrypted Content Transfer Syntax UID",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,0080)" : {
         "entity" : "Equipment",
         "name" : "Institution Name",
         "req" : "3",
         "module" : "General Equipment",
         "desc" : "Institution where the equipment that produced the composite instances is located.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a120)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "entity" : "Series",
         "name" : "DateTime",
         "req" : "1C"
      },
      "(0070,0404)[<0>](0008,1115)[<1>](0088,0140)" : {
         "module" : "Presentation State Blending",
         "desc" : "Uniquely identifies the Storage Media on which the Composite Object(s) reside.",
         "req" : "3",
         "name" : "Storage Media File-Set UID",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0232)[<2>](0070,0285)" : {
         "entity" : "Presentation State",
         "req" : "3",
         "name" : "Pattern Off Opacity",
         "module" : "Graphic Annotation",
         "desc" : "Encodes the background opacity. The value is encoded as floating point alpha value (0.0-1.0).",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ]
      },
      "(0012,0064)" : {
         "entity" : "Patient",
         "name" : "De-identification Method Code Sequence",
         "req" : "1C",
         "module" : "Patient",
         "desc" : [
            "A code describing the mechanism or method use to remove the patient's identity.",
            "One or more Items shall be included in this Sequence. Multiple items are used if successive de-identification steps have been performed or to describe options of a defined profile.",
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method (0012,0063) is not present. May be present otherwise."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0008,0110)" : {
         "entity" : "Presentation State",
         "req" : "3",
         "name" : "Coding Scheme Identification Sequence",
         "module" : "SOP Common",
         "desc" : [
            "Sequence of items that map values of Coding Scheme Designator (0008,0102) to an external coding system registration, or to a private or local coding scheme.",
            "One or more Items are permitted in this Sequence."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
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
         "module" : "Graphic Annotation",
         "entity" : "Presentation State",
         "req" : "1",
         "name" : "Italic",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ]
      },
      "(0038,0014)[<0>](0040,0033)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
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
         "module" : "Patient Study",
         "entity" : "Study",
         "req" : "1C",
         "name" : "Universal Entity ID Type"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a123)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "module" : "General Series",
         "req" : "1C",
         "name" : "Person Name",
         "entity" : "Series"
      },
      "(0020,0010)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "desc" : "User or equipment generated Study identifier.",
         "entity" : "Study",
         "name" : "Study ID",
         "req" : "2"
      },
      " (0010,0027) " : {
         "module" : "Patient",
         "desc" : [
            [
               "A sequence containing the identifiers and locations of the individual subjects whose data was acquired at the same time (as a group) and encoded in this composite instance. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.1.4.1.1"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "One or more Items are permitted in this sequence."
         ],
         "req" : "\n                  3 ",
         "name" : "Group of Patients Identification Sequence",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "usage" : "M"
      },
      "(0070,0402)[<0>](0028,3110)" : {
         "mod_tables" : [
            "table_C.11.14-1"
         ],
         "usage" : "M",
         "desc" : [
            "Defines a sequence of VOI LUTs or Window Centers and Widths and to which images and frames they apply.",
            "No more than one VOI LUT Sequence containing a single Item or one pair of Window Center/Width values shall be specified for each image or frame.",
            "One or more Items shall be included in this Sequence.",
            "Required if a VOI LUT is to be applied to referenced image(s)."
         ],
         "module" : "Presentation State Blending",
         "name" : "Softcopy VOI LUT Sequence",
         "req" : "1C",
         "entity" : "Presentation State"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a123)" : {
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "module" : "General Series",
         "name" : "Person Name",
         "req" : "1C",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)[<2>](0070,0249)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "entity" : "Presentation State",
         "req" : "1",
         "name" : "Bold",
         "module" : "Graphic Annotation",
         "desc" : [
            "Specifies whether or not the text shall be rendered in bold.",
            {
               "title" : "Enumerated Values:",
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
               ]
            }
         ]
      },
      "(0008,1049)[<0>](0040,1101)" : {
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "General Study",
         "req" : "1",
         "name" : "Person Identification Code Sequence",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0020)" : {
         "req" : "1",
         "name" : "Patient ID",
         "entity" : "Patient",
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
               ]
            }
         ],
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(0012,0042)" : {
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
         "entity" : "Patient",
         "req" : "1C",
         "name" : "Clinical Trial Subject Reading ID",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-2b"
         ]
      },
      "(0040,0251)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "entity" : "Series",
         "name" : "Performed Procedure Step End Time",
         "req" : "3",
         "desc" : "Time at which the Performed Procedure Step ended.",
         "module" : "General Series"
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
         "module" : "SOP Common",
         "req" : "1C",
         "name" : "Encrypted Attributes Sequence",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0008,1072)[<0>](0040,1102)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "entity" : "Series",
         "req" : "3",
         "name" : "Person's Address",
         "desc" : "Person's mailing address",
         "module" : "General Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1150)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "entity" : "Series",
         "module" : "General Series",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0070,0404)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0404)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "entity" : "Presentation State",
         "req" : "1",
         "name" : "MAC",
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
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.12.1.1.3.1.2"
               }
            },
            "."
         ],
         "module" : "Presentation State Blending"
      },
      "(0008,1120)[<0>](0008,1155)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "usage" : "M",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "entity" : "Patient",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "Patient"
      },
      "(0008,1062)[<0>](0008,0081)" : {
         "module" : "General Study",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "name" : "Institution Address",
         "req" : "3",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0028,1199)" : {
         "module" : "Palette Color Lookup Table",
         "desc" : [
            "Palette Color Lookup Table UID. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.9.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "entity" : "Presentation State",
         "req" : "3",
         "name" : "Palette Color Lookup Table UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-22a"
         ]
      },
      "(0008,009d)[<0>](0008,0080)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "module" : "General Study",
         "req" : "1C",
         "name" : "Institution Name",
         "entity" : "Study"
      },
      "(0070,0086)[<0>](0008,0080)" : {
         "mod_tables" : [
            "table_C.11.10-1",
            "table_10-12",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Institution Name",
         "req" : "1C",
         "entity" : "Presentation State",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "module" : "Presentation State Identification"
      },
      "(0028,0109)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "desc" : "The maximum value of all images in this Series.",
         "module" : "General Series",
         "name" : "Largest Pixel Value in Series",
         "req" : "3",
         "entity" : "Series"
      },
      "(0070,0234)[<0>](0070,0208)" : {
         "mod_tables" : [
            "table_C.10-12"
         ],
         "usage" : "U",
         "req" : "3",
         "name" : "Graphic Group Description",
         "entity" : "Presentation State",
         "module" : "Graphic Group",
         "desc" : "Description of the group."
      },
      "(0070,0060)[<0>](0070,0002)" : {
         "name" : "Graphic Layer",
         "req" : "1",
         "entity" : "Presentation State",
         "module" : "Graphic Layer",
         "desc" : [
            "A string that identifies the layer.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_0d188544-2fb7-43fa-ab14-7d8918bab397"
                     },
                     "content" : [
                        "This identifier may be used by other Attributes within the same presentation state instance to reference this layer. There is no requirement for the same identifiers to be used in different presentation states, and there is no mechanism for referencing layers in other presentation states. That is, a UID is not required."
                     ]
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.10-7"
         ],
         "usage" : "C - Required if  is present"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M",
         "name" : "Universal Entity ID Type",
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
         ]
      },
      "(0012,0062)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
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
         "entity" : "Patient",
         "req" : "3",
         "name" : "Patient Identity Removed"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0035)" : {
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
                     "attrs" : {
                        "xml:id" : "para_dc68c1a1-46db-4a55-bcba-f75b9d9a8ab4"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ]
            }
         ],
         "name" : "Identifier Type Code",
         "req" : "3",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M"
      },
      "(4ffe,0001)[<0>](0400,0015)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "name" : "MAC Algorithm",
         "req" : "1",
         "entity" : "Presentation State",
         "module" : "SOP Common",
         "desc" : [
            "The algorithm used in generating the MAC to be encrypted to form the Digital Signature.",
            {
               "title" : "Defined Terms:",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_c0347aea-ecd8-4c0b-8e2f-cedadc2aacd5"
                     }
                  },
                  "\n                    "
               ]
            }
         ]
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0232)[<2>](0070,0245)" : {
         "module" : "Graphic Annotation",
         "desc" : [
            "Floating point value that defines the shadow offset in X direction in Graphic Annotation Units (0070,0005). See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.10.5.1.3.13.2"
               },
               "el" : "xref"
            },
            "."
         ],
         "entity" : "Presentation State",
         "req" : "1",
         "name" : "Shadow Offset X",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ]
      },
      "(0010,2210)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "desc" : [
            "The anatomical orientation type used in instances generated by this equipment.",
            {
               "type" : "variablelist",
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
               ]
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
               "el" : "note",
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
               ]
            }
         ],
         "entity" : "Series",
         "req" : "1C",
         "name" : "Anatomical Orientation Type"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1103)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Person's Telephone Numbers",
         "req" : "3",
         "entity" : "Presentation State",
         "desc" : "Person's telephone number(s)",
         "module" : "SOP Common"
      },
      "(fffa,fffa)[<0>](0400,0305)" : {
         "name" : "Certified Timestamp Type",
         "req" : "1C",
         "entity" : "Presentation State",
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
                        "xml:id" : "para_cae60b6b-4fad-4c20-981d-247bbf9c6471"
                     },
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
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M"
      },
      "(0070,0087)" : {
         "mod_tables" : [
            "table_C.11.10-1",
            "table_10-12"
         ],
         "usage" : "M",
         "name" : "Alternate Content Description Sequence",
         "req" : "3",
         "entity" : "Presentation State",
         "module" : "Presentation State Identification",
         "desc" : [
            "A sequence containing alternate descriptions suitable for presentation to the user, e.g., in different languages. One or more Items are permitted in this Sequence.",
            {
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "The values of Specific Character Set for the entire Data set need to be sufficient to encode all Items of this sequence correctly, e.g., using a single value with broad support such as UTF-8, or multiple values with escape sequences."
                     ],
                     "attrs" : {
                        "xml:id" : "para_3d164798-44f3-4257-89fd-277d3c965c3d"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ]
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0226)" : {
         "mod_tables" : [
            "table_C.10-5"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "req" : "3",
         "name" : "Compound Graphic Instance ID",
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "desc" : [
            "The identifier of the Compound Graphic represented, in part, by this Item.",
            "The value of this attribute shall be equal to the value of Compound Graphic Instance ID (0070,0226) of the corresponding Item in the Compound Graphic Sequence (0070,0209).",
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
         ]
      },
      "(0010,0026)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
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
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Source Patient Group Identification Sequence",
         "req" : "3"
      },
      "(0018,a001)[<0>](0018,1020)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Presentation State",
         "req" : "3",
         "name" : "Software Versions",
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
         "module" : "SOP Common"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)" : {
         "req" : "3",
         "name" : "Content Item Modifier Sequence",
         "entity" : "Series",
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
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a30a)" : {
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "module" : "General Series",
         "req" : "1C",
         "name" : "Numeric Value",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a168)" : {
         "entity" : "Series",
         "req" : "1C",
         "name" : "Concept Code Sequence",
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
         ]
      },
      "(0100,0410)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
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
                     "attrs" : {
                        "xml:id" : "para_b6227994-ee87-4d4f-9ba4-c3a82f2a705d"
                     },
                     "el" : "para",
                     "content" : [
                        "Proper use of these flags is specified in Security Profiles. Implementations that do not conform to such Security Profiles may not necessarily handle these flags properly."
                     ]
                  },
                  "\n                "
               ]
            }
         ],
         "req" : "3",
         "name" : "SOP Instance Status",
         "entity" : "Presentation State"
      },
      "(0012,0083)[<0>](0012,0085)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "module" : "Clinical Trial Study",
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
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.2.3.1.2",
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
                        "Under some circumstances, consent may be withdrawn. The purpose of encoding this is to warn receiving systems that further distribution may not be appropriate, but no semantics are defined by the Standard for what action is appropriate under such circumstances, such as what to do with previously received images that had a value of YES."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_3a13f81e-d497-421f-aebd-f103e8f2243a"
                     }
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "entity" : "Study",
         "req" : "1",
         "name" : "Consent for Distribution Flag"
      },
      "(0010,1100)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
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
         "req" : "3",
         "name" : "Referenced Patient Photo Sequence",
         "entity" : "Patient"
      },
      "(0070,0404)[<0>](0008,1115)[<1>](0008,1199)[<2>](0040,a170)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "Presentation State Blending",
         "entity" : "Presentation State",
         "req" : "3",
         "name" : "Purpose of Reference Code Sequence"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0232)[<2>](0070,0251)" : {
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "desc" : [
            [
               "A color triplet value used to encode the foreground. The units are specified in PCS-Values, and the value is encoded as CIELab. See ",
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
         "name" : "Pattern On Color CIELab Value",
         "req" : "1",
         "entity" : "Presentation State"
      },
      "(0028,0120)" : {
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
                                    "xml:id" : "para_77a29ed0-edb8-45c2-a3d1-d07bc572e485"
                                 },
                                 "el" : "para",
                                 "content" : [
                                    "This Attribute does\n                          not apply when Float Pixel Data (7FE0,0008) or Double Float Pixel Data\n                          (7FE0,0009) are used instead of Pixel Data (7FE0,0010); Float Pixel\n                          Padding Value (0028,0122) or Double Float Pixel Padding Value\n                          (0028,0123), respectively, are used instead, and defined at the Image,\n                          not the Equipment, level."
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
            }
         ],
         "module" : "General Equipment",
         "req" : "1C",
         "name" : "Pixel Padding Value",
         "entity" : "Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a163)" : {
         "req" : "1C",
         "name" : "Rational Denominator Value",
         "entity" : "Series",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0233)[<2>](0070,0251)" : {
         "entity" : "Presentation State",
         "name" : "Pattern On Color CIELab Value",
         "req" : "1",
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
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5c"
         ]
      },
      "(0070,0402)[<0>](0028,3110)[<1>](0008,1140)[<2>](0008,1160)" : {
         "req" : "1C",
         "name" : "Referenced Frame Number",
         "entity" : "Presentation State",
         "module" : "Presentation State Blending",
         "desc" : [
            "Identifies the frame numbers within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1.",
            {
               "el" : "note",
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
               ]
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "mod_tables" : [
            "table_C.11.14-1",
            "table_10-3"
         ],
         "usage" : "M"
      },
      "(0018,5100)" : {
         "module" : "General Series",
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
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a040)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "req" : "1",
         "name" : "Value Type",
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "module" : "General Series"
      },
      "(0008,0110)[<0>](0008,010c)" : {
         "entity" : "Presentation State",
         "req" : "1C",
         "name" : "Coding Scheme UID",
         "desc" : "The coding scheme UID identifier. Required if coding scheme is identified by an ISO 8824 object identifier compatible with the UI VR.",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,1250)[<0>](0020,000e)" : {
         "req" : "1",
         "name" : "Series Instance UID",
         "entity" : "Series",
         "module" : "General Series",
         "desc" : "Instance UID of Related Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0039)" : {
         "usage" : "M",
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
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "3",
         "name" : "Assigning Jurisdiction Code Sequence"
      },
      "(0020,000e)" : {
         "desc" : "Unique identifier of the Series.",
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1",
         "name" : "Series Instance UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a124)" : {
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "module" : "General Series",
         "req" : "1C",
         "name" : "UID",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0010,1100)[<0>](0040,e023)[<1>](0040,e010)" : {
         "req" : "1",
         "name" : "Retrieve URI",
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
      "(0040,0260)[<0>](0040,0440)[<1>](0040,08ea)" : {
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1C",
         "name" : "Measurement Units Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a122)" : {
         "name" : "Time",
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0070,0402)[<0>](0028,1053)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.11-1b"
         ],
         "desc" : [
            "m in the equation specified by Rescale Intercept (0028,1052).",
            "Required if Rescale Intercept is present."
         ],
         "module" : "Presentation State Blending",
         "entity" : "Presentation State",
         "name" : "Rescale Slope",
         "req" : "1C"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a160)" : {
         "entity" : "Series",
         "req" : "1C",
         "name" : "Text Value",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0008,0051)[<0>](0040,0033)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
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
         "module" : "General Study",
         "entity" : "Study",
         "name" : "Universal Entity ID Type",
         "req" : "1C"
      },
      "(0070,005a)[<0>](0008,1140)[<1>](0008,1160)" : {
         "module" : "Displayed Area",
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
                        "xml:id" : "para_68450e47-9448-4ac5-82e8-4015a854968a"
                     }
                  },
                  "\n              "
               ],
               "el" : "note"
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "req" : "1C",
         "name" : "Referenced Frame Number",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.10-4",
            "table_10-3"
         ],
         "usage" : "M"
      },
      "(4ffe,0001)[<0>](0400,0010)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "req" : "1",
         "name" : "MAC Calculation Transfer Syntax UID",
         "entity" : "Presentation State",
         "module" : "SOP Common",
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
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a124)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "name" : "UID",
         "req" : "1C",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "module" : "General Series"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0278)" : {
         "req" : "1C",
         "name" : "Show Tick Label",
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
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
         "mod_tables" : [
            "table_C.10-5"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied"
      },
      "(0012,0010)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject",
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
         ],
         "entity" : "Patient",
         "req" : "1",
         "name" : "Clinical Trial Sponsor Name"
      },
      "(0018,a001)[<0>](0008,0070)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : "Manufacturer of the equipment that contributed to the composite instance.",
         "name" : "Manufacturer",
         "req" : "1",
         "entity" : "Presentation State"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "entity" : "Patient",
         "name" : "Universal Entity ID",
         "req" : "1C",
         "module" : "Patient",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ]
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)[<2>](0070,0258)" : {
         "module" : "Graphic Annotation",
         "desc" : "Encodes the shadow opacity. The value is encoded as floating point alpha value (0.0-1.0).",
         "req" : "1",
         "name" : "Shadow Opacity",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied"
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1155)" : {
         "entity" : "Series",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-11"
         ]
      },
      "(0008,009d)[<0>](0040,1103)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "name" : "Person's Telephone Numbers",
         "req" : "3",
         "desc" : "Person's telephone number(s)",
         "module" : "General Study"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a040)" : {
         "req" : "1",
         "name" : "Value Type",
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
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0070,0404)[<0>](0008,1115)[<1>](0008,1199)" : {
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M",
         "desc" : [
            "References to Composite Object SOP Class/SOP Instance pairs that are part of the Study defined by Study Instance UID and the Series defined by Series Instance UID (0020,000E).",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "Presentation State Blending",
         "req" : "1",
         "name" : "Referenced SOP Sequence",
         "entity" : "Presentation State"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a161)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "name" : "Floating Point Value",
         "req" : "1C",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "module" : "General Series"
      },
      "(0010,2203)" : {
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
         "module" : "Patient Study",
         "entity" : "Study",
         "req" : "2C",
         "name" : "Patient's Sex Neutered",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0070,0087)[<0>](0008,0006)" : {
         "module" : "Presentation State Identification",
         "desc" : "The language in which Content Description (0070,0081) within this Sequence item is written. A single Item shall be present.",
         "entity" : "Presentation State",
         "name" : "Language Code Sequence",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.11.10-1",
            "table_10-12"
         ]
      },
      "(0070,0060)[<0>](0070,0401)" : {
         "module" : "Graphic Layer",
         "desc" : [
            "A default color triplet value in which it is recommended that the layer be rendered on a color display. The units are specified in PCS-Values, and the value is encoded as CIELab. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.10.7.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "entity" : "Presentation State",
         "name" : "Graphic Layer Recommended Display CIELab Value",
         "req" : "3",
         "usage" : "C - Required if  is present",
         "mod_tables" : [
            "table_C.10-7"
         ]
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0232)[<2>](0070,0252)" : {
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "desc" : [
            "A color triplet value used to encode the color of parts of the line that are off, i.e., the background. The units are specified in PCS-Values, and the value is encoded as CIELab. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.10.7.1.1"
               }
            },
            "."
         ],
         "module" : "Graphic Annotation",
         "name" : "Pattern Off Color CIELab Value",
         "req" : "3",
         "entity" : "Presentation State"
      },
      "(0008,0012)" : {
         "name" : "Instance Creation Date",
         "req" : "3",
         "entity" : "Presentation State",
         "module" : "SOP Common",
         "desc" : [
            "Date the SOP Instance was created.",
            "This is the date that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a30a)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "name" : "Numeric Value",
         "req" : "1C",
         "module" : "General Series",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a120)" : {
         "module" : "General Series",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "name" : "DateTime",
         "req" : "1C",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0038,0064)[<0>](0040,0033)" : {
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "module" : "Patient Study",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ]
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0232)" : {
         "entity" : "Presentation State",
         "name" : "Line Style Sequence",
         "req" : "3",
         "module" : "Graphic Annotation",
         "desc" : [
            "Sequence that describes the line style.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ]
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0279)" : {
         "entity" : "Presentation State",
         "name" : "Tick Label Alignment",
         "req" : "1C",
         "desc" : [
            "The alignment of the label with respect to the tick.",
            {
               "title" : "Enumerated Values:",
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
               ]
            },
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
            ],
            "Required if Compound Graphic Type (0070,0294) equals RULER, AXIS. or CROSSHAIR."
         ],
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "mod_tables" : [
            "table_C.10-5"
         ]
      },
      "(0070,005a)[<0>](0070,0103)" : {
         "desc" : [
            "Ratio of displayed pixels to source pixels, specified in one dimension.",
            "Required if Presentation Size Mode (0070,0100) is MAGNIFY.",
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
                                    "A value of 1.0 would imply that one pixel in the referenced image would be displayed as one pixel on the display (i.e., it would not be interpolated if the aspect ratio of the image pixels is 1:1)."
                                 ],
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_1d792703-1c0d-4b6e-9b1d-41d30d3663d2"
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
                                    "A value of 2.0 would imply that one pixel in the referenced image would be displayed as 4 pixels on the display (i.e., up-sampled by a factor of 2 in each of the row and column directions)."
                                 ],
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_d6d1222c-48c5-44c7-838b-ebe21643872c"
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
                                 "attrs" : {
                                    "xml:id" : "para_3aa44ae0-e6bd-4a52-987d-b968dfcddb6e"
                                 },
                                 "content" : [
                                    "A value of 0.5 would imply that 4 pixels in the referenced image would be displayed as 1 pixel on the display (i.e., down-sampled by a factor of 2 in each of the row and column directions)."
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
                                    "If the source pixels have an aspect ratio of other than 1:1, then they are assumed to have been interpolated to a display pixel aspect ratio of 1:1 prior to magnification."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_d2c687d8-cf4c-43d7-a265-377736387f90"
                                 },
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
            }
         ],
         "module" : "Displayed Area",
         "entity" : "Presentation State",
         "req" : "1C",
         "name" : "Presentation Pixel Magnification Ratio",
         "usage" : "M",
         "mod_tables" : [
            "table_C.10-4"
         ]
      },
      "(0070,0402)[<0>](0028,3110)[<1>](0028,3010)[<2>](0028,3006)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.11-2b"
         ],
         "entity" : "Presentation State",
         "name" : "LUT Data",
         "req" : "1",
         "desc" : "LUT Data in this Sequence.",
         "module" : "Presentation State Blending"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0032)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Universal Entity ID",
         "entity" : "Patient",
         "module" : "Patient",
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
         ]
      },
      "(0040,a390)[<0>](0040,e010)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
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
                     "attrs" : {
                        "xml:id" : "para_398d64f0-0a7e-4cfe-b480-b482ee2cb7a7"
                     },
                     "content" : [
                        "The VR of this attribute has changed from UT to UR."
                     ]
                  },
                  "\n"
               ]
            }
         ],
         "req" : "3",
         "name" : "Retrieve URI",
         "entity" : "Presentation State"
      },
      "(0008,0051)" : {
         "name" : "Issuer of Accession Number Sequence",
         "req" : "3",
         "entity" : "Study",
         "module" : "General Study",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a120)" : {
         "entity" : "Series",
         "req" : "1C",
         "name" : "DateTime",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0018,0015)" : {
         "module" : "General Series",
         "desc" : [
            [
               "Text description of the part of the body examined. See ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "xrefstyle" : "template:Annex %n \u201c%t\u201d in PS3.16",
                     "targetdoc" : "PS3.16",
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
                     "attrs" : {
                        "xml:id" : "para_c8ff54a1-69e9-4623-abb8-672af78baddf"
                     },
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "entity" : "Series",
         "req" : "3",
         "name" : "Body Part Examined",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0070,005a)[<0>](0008,1140)" : {
         "mod_tables" : [
            "table_C.10-4"
         ],
         "usage" : "M",
         "desc" : [
            [
               "The subset of images and frames listed in the ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.11.11",
                     "xrefstyle" : "select: title"
                  }
               },
               ", to which this displayed area selection applies."
            ],
            "One or more Items shall be included in this Sequence.",
            [
               "Required if the displayed area selection in this Item does not apply to all the images and frames listed in the ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.11.11",
                     "xrefstyle" : "select: title"
                  }
               },
               "."
            ]
         ],
         "module" : "Displayed Area",
         "name" : "Referenced Image Sequence",
         "req" : "1C",
         "entity" : "Presentation State"
      },
      "(0008,1072)[<0>](0040,1101)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "entity" : "Series",
         "req" : "1",
         "name" : "Person Identification Code Sequence",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "General Series"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0232)[<2>](0070,0253)" : {
         "desc" : "Specifies the line thickness. The dimension for this attribute is defined by Graphic Annotation Units (0070,0005) or Compound Graphic Units (0070,0282).",
         "module" : "Graphic Annotation",
         "entity" : "Presentation State",
         "req" : "1",
         "name" : "Line Thickness",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ]
      },
      "(0070,0041)" : {
         "usage" : "C - Required if rotation or flipping are to be applied",
         "mod_tables" : [
            "table_C.10-6"
         ],
         "module" : "Spatial Transformation",
         "desc" : [
            "Whether or not to flip the image horizontally after any Image Rotation has been applied such that the left side of the image becomes the right side.",
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
            },
            {
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_c7a32424-a3d2-41e2-a5ed-87347c8dc7cb"
                     },
                     "content" : [
                        "No vertical flip is specified since the same result can be achieved by a combination of a 180 degree rotation and a horizontal flip."
                     ]
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "entity" : "Presentation State",
         "name" : "Image Horizontal Flip",
         "req" : "1"
      },
      "(0070,0402)[<0>](0028,3110)[<1>](0028,1056)" : {
         "module" : "Presentation State Blending",
         "desc" : [
            "Describes a VOI LUT function to apply to the values of Window Center (0028,1050) and Window Width (0028,1051).",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.11.2.1.3"
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
               "type" : "variablelist",
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
         "entity" : "Presentation State",
         "name" : "VOI LUT Function",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.11-2b"
         ]
      },
      "(0010,1100)[<0>](0040,e022)[<1>](0088,0140)" : {
         "desc" : "Uniquely identifies the Storage Media on which the referenced instance(s) reside.",
         "module" : "Patient",
         "req" : "1",
         "name" : "Storage Media File-Set UID",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M"
      },
      "(0010,1100)[<0>](0040,e024)[<1>](0040,e030)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "module" : "Patient",
         "desc" : "Uniquely identifies a Repository from which the referenced instances can be retrieved.",
         "req" : "1",
         "name" : "Repository Unique ID",
         "entity" : "Patient"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0231)[<2>](0070,0229)" : {
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "desc" : "Generic font name as defined within CSS (Cascading Style Sheets). Default fontname, if the font specified in Font Name (0070,0227) is not present or can not be rendered.",
         "module" : "Graphic Annotation",
         "name" : "CSS Font Name",
         "req" : "1",
         "entity" : "Presentation State"
      },
      "(0038,0014)[<0>](0040,0031)" : {
         "entity" : "Study",
         "req" : "1C",
         "name" : "Local Namespace Entity ID",
         "module" : "Patient Study",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ]
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0232)[<2>](0070,0254)" : {
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "module" : "Graphic Annotation",
         "desc" : [
            "The dashing style of the line to be displayed.",
            {
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            },
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.10.5.1.3.13.1"
                  }
               },
               "."
            ]
         ],
         "req" : "1",
         "name" : "Line Dashing Style",
         "entity" : "Presentation State"
      },
      " (0010,0027) [<0>](0010,0020)" : {
         "desc" : "Primary identifier for an individual subject.",
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "1",
         "name" : "Patient ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ]
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0233)[<2>](0070,0284)" : {
         "desc" : "Encodes the foreground opacity. The value is encoded as floating point alpha value (0.0-1.0).",
         "module" : "Graphic Annotation",
         "entity" : "Presentation State",
         "req" : "1",
         "name" : "Pattern On Opacity",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5c"
         ]
      },
      "(0012,0071)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "entity" : "Series",
         "req" : "3",
         "name" : "Clinical Trial Series ID",
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
         "module" : "Clinical Trial Series"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0295)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "module" : "Graphic Annotation",
         "desc" : [
            "A number identifying the group from the Graphic Group Sequence (0070,0234) to which this Item belongs. If this attribute is not present, this Item does not belong to a group.",
            "If Compound Graphic Instance ID (0070,0226) is present in this Item, the value of Graphic Group ID (0070,0295) shall be the same as the value of Graphic Group ID (0070,0295) of the corresponding Item in the Compound Graphic Sequence (0070,0209) with the same Compound Graphic Instance ID (0070,0226)."
         ],
         "entity" : "Presentation State",
         "req" : "3",
         "name" : "Graphic Group ID"
      },
      "(0012,0030)" : {
         "name" : "Clinical Trial Site ID",
         "req" : "2",
         "entity" : "Patient",
         "module" : "Clinical Trial Subject",
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
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U"
      },
      " (0010,0027) [<0>](0010,0028)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "usage" : "M",
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
         "module" : "Patient",
         "req" : "3",
         "name" : "Subject Relative Position in Image",
         "entity" : "Patient"
      },
      "(0008,1049)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Physician(s) of Record Identification Sequence",
         "entity" : "Study",
         "module" : "General Study",
         "desc" : [
            "Identification of the physician(s) who are responsible for overall patient care at time of Study.",
            "One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Physician(s) of Record (0008,1048), if present."
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "req" : "3",
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
         "module" : "Patient"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0287)[<2>](0070,0289)" : {
         "desc" : "The label of the tick.",
         "module" : "Graphic Annotation",
         "name" : "Tick Label",
         "req" : "1",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(0018,a001)[<0>](0018,1000)" : {
         "desc" : "Manufacturer's serial number of the equipment that contributed to the composite instance.",
         "module" : "SOP Common",
         "req" : "3",
         "name" : "Device Serial Number",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0010,0024)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "req" : "3",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "Patient"
      },
      "(0040,0260)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "module" : "General Series",
         "desc" : "Sequence describing the Protocol performed for this Procedure Step. One or more Items are permitted in this Sequence.",
         "entity" : "Series",
         "req" : "3",
         "name" : "Performed Protocol Code Sequence"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0012)" : {
         "module" : "Graphic Annotation",
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            },
            "Required if Bounding Box Top Left Hand Corner (0070,0010) is present."
         ],
         "req" : "1C",
         "name" : "Bounding Box Text Horizontal Justification",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied"
      },
      "(0038,0014)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "req" : "3",
         "name" : "Issuer of Admission ID Sequence",
         "entity" : "Study",
         "module" : "Patient Study",
         "desc" : [
            "Identifier of the Assigning Authority that issued Admission ID (0038,0010).",
            "Only a single Item is permitted in this Sequence."
         ]
      },
      "(0070,0060)[<0>](0070,0068)" : {
         "entity" : "Presentation State",
         "name" : "Graphic Layer Description",
         "req" : "3",
         "desc" : "A free text description of the contents of this layer.",
         "module" : "Graphic Layer",
         "usage" : "C - Required if  is present",
         "mod_tables" : [
            "table_C.10-7"
         ]
      },
      "(0012,0083)[<0>](0012,0020)" : {
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "usage" : "U",
         "name" : "Clinical Trial Protocol ID",
         "req" : "1C",
         "entity" : "Study",
         "module" : "Clinical Trial Study",
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
         ]
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0232)[<2>](0070,0244)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "entity" : "Presentation State",
         "name" : "Shadow Style",
         "req" : "1",
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
                     "linkend" : "sect_C.10.5.1.3.13.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               }
            ]
         ],
         "module" : "Graphic Annotation"
      },
      "(0070,0402)[<0>](0028,3110)[<1>](0008,1140)[<2>](0008,1155)" : {
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "entity" : "Presentation State",
         "module" : "Presentation State Blending",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.11.14-1",
            "table_10-3",
            "table_10-11"
         ],
         "usage" : "M"
      },
      "(fffa,fffa)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Presentation State",
         "req" : "3",
         "name" : "Digital Signatures Sequence",
         "desc" : [
            "Sequence holding Digital Signatures.",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "SOP Common"
      },
      "(0008,009d)[<0>](0008,0081)" : {
         "name" : "Institution Address",
         "req" : "3",
         "entity" : "Study",
         "module" : "General Study",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0070,005a)[<0>](0008,1140)[<1>](0062,000b)" : {
         "entity" : "Presentation State",
         "req" : "1C",
         "name" : "Referenced Segment Number",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "module" : "Displayed Area",
         "usage" : "M",
         "mod_tables" : [
            "table_C.10-4",
            "table_10-3"
         ]
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0231)[<2>](0070,0243)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "module" : "Graphic Annotation",
         "desc" : [
            [
               "Specifies the vertical position of the text relative to the horizontal edges of the bounding box. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.10.5.1.3.12.1"
                  }
               }
            ],
            {
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            },
            "Required if Bounding Box Top Left Hand Corner (0070,0010) is present."
         ],
         "entity" : "Presentation State",
         "req" : "3",
         "name" : "Vertical Alignment"
      },
      "(0008,1072)[<0>](0040,1104)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "module" : "General Series",
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
                     ]
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "name" : "Person's Telecom Information",
         "req" : "3",
         "entity" : "Series"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1101)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1",
         "name" : "Person Identification Code Sequence",
         "entity" : "Presentation State"
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
                     "attrs" : {
                        "xml:id" : "para_bd933dd8-c95a-459e-a9cd-8b9c90650099"
                     },
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(0008,0096)[<0>](0040,1102)" : {
         "desc" : "Person's mailing address",
         "module" : "General Study",
         "entity" : "Study",
         "req" : "3",
         "name" : "Person's Address",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0008,009d)[<0>](0040,1104)" : {
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
         "module" : "General Study",
         "entity" : "Study",
         "name" : "Person's Telecom Information",
         "req" : "3"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0287)" : {
         "name" : "Major Ticks Sequence",
         "req" : "1C",
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "desc" : [
            "The sequence of major ticks on the AXIS object.",
            "Two or more Items shall be present.",
            "Required if Compound Graphic Type (0070,0294) equals AXIS."
         ],
         "mod_tables" : [
            "table_C.10-5"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied"
      },
      "(0070,005a)[<0>](0008,1140)[<1>](0008,1150)" : {
         "module" : "Displayed Area",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Presentation State",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.10-4",
            "table_10-3",
            "table_10-11"
         ]
      },
      "(0008,0096)[<0>](0008,0082)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "General Study",
         "entity" : "Study",
         "name" : "Institution Code Sequence",
         "req" : "1C"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)[<2>](0070,0228)" : {
         "module" : "Graphic Annotation",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_f9bd128a-6616-4a5b-8fd9-6a7343ebd276"
                     }
                  },
                  "\n                      "
               ]
            }
         ],
         "req" : "1C",
         "name" : "Font Name Type",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied"
      },
      "(0070,0402)[<0>](0008,1115)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.11.11-1b"
         ],
         "entity" : "Presentation State",
         "req" : "1",
         "name" : "Referenced Series Sequence",
         "desc" : [
            "Sequence of Items where each Item includes the Attributes of one Series to which the Presentation applies.",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "Presentation State Blending"
      },
      "(fffa,fffa)[<0>](0400,0110)" : {
         "name" : "Certificate Type",
         "req" : "1",
         "entity" : "Presentation State",
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
               ]
            }
         ],
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0273)" : {
         "req" : "1C",
         "name" : "Rotation Point",
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "desc" : [
            "The rotation point of this Compound Graphic.",
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
            "Required if Rotation Angle (0070,0230) is present or if Compound Graphic Type (0070,0294) is CUTLINE or INFINITELINE."
         ],
         "mod_tables" : [
            "table_C.10-5"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0062,000b)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "module" : "General Series",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "name" : "Referenced Segment Number",
         "req" : "1C",
         "entity" : "Series"
      },
      "(0008,0031)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "module" : "General Series",
         "desc" : "Time the Series started.",
         "name" : "Series Time",
         "req" : "3",
         "entity" : "Series"
      },
      "(0028,0303)" : {
         "module" : "SOP Common",
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
                     "targetptr" : "PS3.15",
                     "targetdoc" : "PS3.15",
                     "xrefstyle" : "select: labelnumber"
                  },
                  "el" : "olink"
               },
               "."
            ]
         ],
         "entity" : "Presentation State",
         "name" : "Longitudinal Temporal Information Modified",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      " (0010,0027) [<0>](0010,0024)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "req" : "3",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "module" : "Patient",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ]
      },
      " (0010,0027) [<0>](0010,0021)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M",
         "name" : "Issuer of Patient ID",
         "req" : "3",
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
                     "attrs" : {
                        "xml:id" : "para_fde39d36-34f5-4459-8bca-12b577233532"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ]
      },
      "(0070,0001)[<0>](0070,0209)" : {
         "name" : "Compound Graphic Sequence",
         "req" : "3",
         "entity" : "Presentation State",
         "desc" : [
            "A sequence of Items that describe Compound Graphics.",
            "One or more Items are permitted in this Sequence.",
            "For each Compound Graphic there shall be an alternate rendering encoded as Items in the Text Object Sequence (0070,0008) and Graphic Object Sequence (0070,0009) linked by the Compound Graphic Instance ID (0070,0226).",
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
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1150)" : {
         "entity" : "Series",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)[<2>](0070,0247)" : {
         "module" : "Graphic Annotation",
         "desc" : [
            "A color triplet value used to encode the Shadow Color. The units are specified in PCS-Values, and the value is encoded as CIELab. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.10.7.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "name" : "Shadow Color CIELab Value",
         "req" : "1",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied"
      },
      "(0008,009c)" : {
         "desc" : "Consulting physician(s) for this patient visit.",
         "module" : "General Study",
         "name" : "Consulting Physician's Name",
         "req" : "3",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M"
      },
      "(0018,1020)" : {
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
         "module" : "General Equipment",
         "name" : "Software Versions",
         "req" : "3",
         "entity" : "Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M"
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
                  "attrs" : {
                     "linkend" : "sect_C.7.3.1.1.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for Defined Terms."
            ],
            "module" : "General Series",
            "entity" : "Series",
            "name" : "Modality",
            "req" : "1"
         },
         {
            "usage" : "M",
            "mod_tables" : [
               "table_C.11.9-1"
            ],
            "desc" : [
               "Type of equipment that originally acquired the data.",
               {
                  "title" : "Enumerated Values:",
                  "type" : "variablelist",
                  "list" : [
                     [
                        "PR",
                        "Presentation State"
                     ]
                  ]
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
                  "."
               ]
            ],
            "module" : "Presentation Series",
            "entity" : "Series",
            "name" : "Modality",
            "req" : "1"
         }
      ],
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0232)[<2>](0070,0247)" : {
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
         "module" : "Graphic Annotation",
         "entity" : "Presentation State",
         "name" : "Shadow Color CIELab Value",
         "req" : "1",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ]
      },
      "(0018,a001)[<0>](0018,1201)" : {
         "usage" : "M",
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
         "module" : "SOP Common",
         "entity" : "Presentation State",
         "req" : "3",
         "name" : "Time of Last Calibration"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0006)" : {
         "mod_tables" : [
            "table_C.10-5"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "req" : "1",
         "name" : "Unformatted Text Value",
         "entity" : "Presentation State",
         "desc" : [
            [
               "Text data that is unformatted and whose manner of display within the defined bounding box or relative to the specified anchor point is implementation dependent. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.10.5.1.1",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ],
            "The text value may contain spaces, as well as multiple lines separated by CR LF, but otherwise no format control characters (such as horizontal or vertical tab and form feed) shall be present, even if permitted by the Value Representation of ST.",
            [
               "The text shall be interpreted as specified by Specific Character Set (0008,0005) if present in the ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.12.1",
                     "xrefstyle" : "select: title"
                  },
                  "el" : "xref"
               },
               "."
            ],
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "The text may contain single or multi-byte characters and use code extension techniques as described in ",
                        {
                           "attrs" : {
                              "targetdoc" : "PS3.5",
                              "targetptr" : "PS3.5",
                              "xrefstyle" : "select: labelnumber"
                           },
                           "el" : "olink"
                        },
                        " if permitted by the values of Specific Character Set (0008,0005)."
                     ],
                     "attrs" : {
                        "xml:id" : "para_2671b17d-3bd6-48d8-8f8a-1bc0765a82e0"
                     },
                     "el" : "para"
                  },
                  "\n                "
               ]
            }
         ],
         "module" : "Graphic Annotation"
      },
      "(0008,1111)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "name" : "Referenced Performed Procedure Step Sequence",
         "req" : "3",
         "entity" : "Series",
         "module" : "General Series",
         "desc" : [
            "Uniquely identifies the Performed Procedure Step SOP Instance to which the Series is related.",
            "Only a single Item is permitted in this Sequence."
         ]
      },
      "(0010,1100)[<0>](0040,e022)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "module" : "Patient",
         "desc" : [
            "Details for retrieving instances from Media.",
            "Required if DICOM Retrieval Sequence (0040,E021), WADO Retrieval Sequence (0040,E023), and WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "This sequence shall only identify media known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1C",
         "name" : "DICOM Media Retrieval Sequence",
         "entity" : "Patient"
      },
      "(0008,1052)[<0>](0040,1103)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Person's Telephone Numbers",
         "entity" : "Series",
         "desc" : "Person's telephone number(s)",
         "module" : "General Series"
      },
      "(0020,9172)[<0>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "SOP Common",
         "entity" : "Presentation State",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "entity" : "Patient",
         "name" : "Universal Entity ID",
         "req" : "1C",
         "module" : "Patient",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise."
      },
      "(0040,0275)[<0>](0040,0007)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Scheduled Procedure Step Description",
         "entity" : "Series",
         "desc" : "Institution-generated description or classification of the Scheduled Procedure Step to be performed.",
         "module" : "General Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a043)" : {
         "req" : "1",
         "name" : "Concept Name Code Sequence",
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
      "(0040,0275)[<0>](0040,1002)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "desc" : "Reason for requesting this procedure.",
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Reason for the Requested Procedure",
         "req" : "3"
      },
      "(0008,1111)[<0>](0008,1155)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-11"
         ],
         "usage" : "M",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "entity" : "Series",
         "module" : "General Series",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0070,0234)" : {
         "desc" : [
            "Sequence that describes the combined graphic object.",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "Graphic Group",
         "req" : "1",
         "name" : "Graphic Group Sequence",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.10-12"
         ],
         "usage" : "U"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0022)" : {
         "module" : "Graphic Annotation",
         "desc" : [
            "Coordinates that specify this graphic annotation.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.10.5.1.2"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "entity" : "Presentation State",
         "name" : "Graphic Data",
         "req" : "1",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "mod_tables" : [
            "table_C.10-5"
         ]
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0032)" : {
         "module" : "Patient",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "Patient",
         "req" : "1C",
         "name" : "Universal Entity ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ]
      },
      "(0040,0254)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "module" : "General Series",
         "desc" : "Institution-generated description or classification of the Procedure Step that was performed.",
         "entity" : "Series",
         "req" : "3",
         "name" : "Performed Procedure Step Description"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0233)" : {
         "module" : "Graphic Annotation",
         "desc" : [
            "Sequence that describes the fill style.",
            "Only a single item is permitted in this Sequence."
         ],
         "entity" : "Presentation State",
         "req" : "3",
         "name" : "Fill Style Sequence",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5c"
         ]
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0003)" : {
         "module" : "Graphic Annotation",
         "desc" : [
            "Units of measure for the axes of the text bounding box.",
            "Defines whether or not the annotation is Image or Displayed Area relative. Both dimensions shall have the same units.",
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "PIXEL",
                     [
                        "Image relative position specified with sub-pixel resolution such that the origin, which is at the Top Left Hand Corner (TLHC) of the TLHC pixel is 0.0\\0.0, the Bottom Right Hand Corner (BRHC) of the TLHC pixel is 1.0\\1.0, and the BRHC of the BRHC pixel is Columns\\Rows (see ",
                        {
                           "el" : "xref",
                           "attrs" : {
                              "linkend" : "figure_C.10.5-1",
                              "xrefstyle" : "select: label"
                           }
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
                              "xrefstyle" : "select: label",
                              "linkend" : "sect_C.8.12.4.1.3"
                           }
                        },
                        "). The values must be within the range 0.0\\0.0 to Total Pixel Matrix Columns\\Total Pixel Matrix Rows. MATRIX may be used only if the value of Referenced SOP Class UID (0008,1150) within Referenced Image Sequence (0008,1140) is 1.2.840.10008.5.1.4.1.1.77.1.6 (VL Whole Slide Microscopy Image)."
                     ]
                  ]
               ]
            },
            "Required if Bounding Box Top Left Hand Corner (0070,0010) or Bounding Box Bottom Right Hand Corner (0070,0011) is present."
         ],
         "name" : "Bounding Box Annotation Units",
         "req" : "1C",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied"
      },
      "(0008,009d)[<0>](0008,0082)" : {
         "entity" : "Study",
         "req" : "1C",
         "name" : "Institution Code Sequence",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "General Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)[<2>](0070,0244)" : {
         "module" : "Graphic Annotation",
         "desc" : [
            "The shadow style of the text to be displayed.",
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
               "type" : "variablelist",
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
         ],
         "name" : "Shadow Style",
         "req" : "1",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied"
      },
      "(0008,0016)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
                  "targetdoc" : "PS3.4",
                  "targetptr" : "PS3.4"
               }
            },
            "."
         ],
         "module" : "SOP Common",
         "entity" : "Presentation State",
         "name" : "SOP Class UID",
         "req" : "1"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)[<2>](0070,0242)" : {
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "name" : "Horizontal Alignment",
         "req" : "3",
         "entity" : "Presentation State",
         "desc" : [
            [
               "Specifies the horizontal position of the text relative to the vertical edges of the bounding box. Horizontal Alignment shall override the Bounding Box Text Horizontal Justification (0070,0012) of the Text Object Sequence Item. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.10.5.1.3.12.1"
                  }
               }
            ],
            {
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            },
            "Required if Bounding Box Top Left Hand Corner (0070,0010) is present."
         ],
         "module" : "Graphic Annotation"
      },
      "(0070,0402)[<0>](0028,3110)[<1>](0028,1051)" : {
         "entity" : "Presentation State",
         "req" : "1C",
         "name" : "Window Width",
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
         "module" : "Presentation State Blending",
         "usage" : "M",
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.11-2b"
         ]
      },
      "(0070,0404)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0015)" : {
         "module" : "Presentation State Blending",
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
               "type" : "variablelist",
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
                     "attrs" : {
                        "xml:id" : "para_07b64781-f4ca-4d53-9b0b-e3d8032bb048"
                     },
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "name" : "MAC Algorithm",
         "req" : "1",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M"
      },
      "(0070,0234)[<0>](0070,0295)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.10-12"
         ],
         "module" : "Graphic Group",
         "desc" : "A unique number identifying the Graphic Group, i.e., the combined graphic object.",
         "entity" : "Presentation State",
         "req" : "1",
         "name" : "Graphic Group ID"
      },
      "(0008,0110)[<0>](0008,0112)" : {
         "entity" : "Presentation State",
         "name" : "Coding Scheme Registry",
         "req" : "1C",
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
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a163)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "module" : "General Series",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "req" : "1C",
         "name" : "Rational Denominator Value",
         "entity" : "Series"
      },
      "(0040,a390)[<0>](0040,e001)" : {
         "entity" : "Presentation State",
         "name" : "HL7 Instance Identifier",
         "req" : "1",
         "desc" : "Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a168)" : {
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1C",
         "name" : "Concept Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
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
         "entity" : "Study",
         "name" : "Referenced Study Sequence",
         "req" : "3"
      },
      "(0010,0032)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "req" : "3",
         "name" : "Patient's Birth Time",
         "module" : "Patient",
         "desc" : "Birth time of the Patient."
      },
      "(0008,0123)" : {
         "desc" : [
            "Sequence of items that map values of Context Identifier (0008,010F) to an external, private or local Context Group.",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "SOP Common",
         "entity" : "Presentation State",
         "req" : "3",
         "name" : "Context Group Identification Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0010,0212)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
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
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "3",
         "name" : "Strain Description"
      },
      "(0040,0275)[<0>](0032,1060)" : {
         "desc" : "Institution-generated administrative description or classification of Requested Procedure.",
         "module" : "General Series",
         "req" : "3",
         "name" : "Requested Procedure Description",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M"
      },
      "(0008,001a)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Presentation State",
         "req" : "3",
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
         "module" : "SOP Common"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1160)" : {
         "entity" : "Series",
         "name" : "Referenced Frame Number",
         "req" : "1C",
         "module" : "General Series",
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
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0008,1049)[<0>](0040,1103)" : {
         "req" : "3",
         "name" : "Person's Telephone Numbers",
         "entity" : "Study",
         "desc" : "Person's telephone number(s)",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0232)[<2>](0070,0285)" : {
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "name" : "Pattern Off Opacity",
         "req" : "3",
         "entity" : "Presentation State",
         "desc" : "Encodes the background opacity. The value is encoded as floating point alpha value (0.0-1.0).",
         "module" : "Graphic Annotation"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0231)[<2>](0070,0228)" : {
         "module" : "Graphic Annotation",
         "desc" : [
            {
               "title" : "Defined Terms:",
               "type" : "variablelist",
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
                     "attrs" : {
                        "xml:id" : "para_f9bd128a-6616-4a5b-8fd9-6a7343ebd276"
                     },
                     "el" : "para"
                  },
                  "\n                      "
               ]
            }
         ],
         "entity" : "Presentation State",
         "req" : "1C",
         "name" : "Font Name Type",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ]
      },
      "(0008,1062)[<0>](0040,1102)" : {
         "entity" : "Study",
         "name" : "Person's Address",
         "req" : "3",
         "desc" : "Person's mailing address",
         "module" : "General Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0008,1052)[<0>](0040,1104)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
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
                     ]
                  },
                  "\n              "
               ]
            }
         ],
         "module" : "General Series",
         "name" : "Person's Telecom Information",
         "req" : "3",
         "entity" : "Series"
      },
      "(0010,0213)" : {
         "entity" : "Patient",
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
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0008,1049)[<0>](0040,1102)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "name" : "Person's Address",
         "req" : "3",
         "desc" : "Person's mailing address",
         "module" : "General Study"
      },
      "(0038,0064)[<0>](0040,0031)" : {
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "usage" : "U",
         "req" : "1C",
         "name" : "Local Namespace Entity ID",
         "entity" : "Study",
         "module" : "Patient Study",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise."
      },
      "(0070,0402)[<0>](0028,3000)[<1>](0028,3004)" : {
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.11-1b"
         ],
         "usage" : "M",
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
            ]
         ],
         "module" : "Presentation State Blending",
         "name" : "Modality LUT Type",
         "req" : "1",
         "entity" : "Presentation State"
      },
      "(0008,0300)" : {
         "entity" : "Presentation State",
         "req" : "3",
         "name" : "Private Data Element Characteristics Sequence",
         "desc" : "Characteristics of Private Data Elements within the current SOP Instance",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a124)" : {
         "module" : "General Series",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "req" : "1C",
         "name" : "UID",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)[<2>](0070,0248)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "desc" : [
            "Specifies whether or not the text shall be rendered underlined.",
            {
               "title" : "Enumerated Values:",
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
               ]
            }
         ],
         "module" : "Graphic Annotation",
         "entity" : "Presentation State",
         "req" : "1",
         "name" : "Underlined"
      },
      "(0070,0402)[<0>](0028,3000)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.11-1b"
         ],
         "entity" : "Presentation State",
         "req" : "1C",
         "name" : "Modality LUT Sequence",
         "module" : "Presentation State Blending",
         "desc" : [
            "Defines a sequence of Modality LUTs.",
            "Only a single Item shall be included in this Sequence.",
            "Shall not be present if Rescale Intercept (0028,1052) is present."
         ]
      },
      "(0010,21b0)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "req" : "3",
         "name" : "Additional Patient History",
         "entity" : "Study",
         "desc" : "Additional information about the Patient's medical history.",
         "module" : "Patient Study"
      },
      "(0028,1102)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-22a"
         ],
         "entity" : "Presentation State",
         "name" : "Green Palette Color Lookup Table Descriptor",
         "req" : "1",
         "module" : "Palette Color Lookup Table",
         "desc" : [
            "Specifies the format of the Green Palette Color Lookup Table Data (0028,1202). See ",
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
      "(0010,1100)[<0>](0040,e021)[<1>](0008,0054)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "entity" : "Patient",
         "req" : "1",
         "name" : "Retrieve AE Title",
         "module" : "Patient",
         "desc" : "Title of a DICOM Application Entity where the referenced instance(s) may be retrieved on the network."
      },
      "(0070,005a)[<0>](0070,0101)" : {
         "module" : "Displayed Area",
         "desc" : [
            [
               "Physical distance between the center of each pixel in the referenced image (before spatial transformation), specified by a numeric pair - adjacent row spacing (delimiter) adjacent column spacing in mm. See ",
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
                                 "attrs" : {
                                    "xml:id" : "para_5aaa7c82-2a2a-4907-8795-c4f96b35d3f4"
                                 },
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
                                 "attrs" : {
                                    "xml:id" : "para_7b070d90-65d8-4103-9440-686e60e41212"
                                 },
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
               ],
               "el" : "note"
            },
            "Required if Presentation Size Mode (0070,0100) is TRUE SIZE, in which case the values will correspond to the physical distance between the center of each pixel on the display device.",
            "May be present if Presentation Size Mode (0070,0100) is SCALE TO FIT or MAGNIFY, in which case the values are used to compute the aspect ratio of the image pixels."
         ],
         "name" : "Presentation Pixel Spacing",
         "req" : "1C",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.10-4"
         ],
         "usage" : "M"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0020)" : {
         "mod_tables" : [
            "table_C.10-5"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "module" : "Graphic Annotation",
         "desc" : {
            "type" : "variablelist",
            "title" : "Enumerated Values:",
            "list" : [
               [
                  "2",
                  null
               ]
            ]
         },
         "name" : "Graphic Dimensions",
         "req" : "1",
         "entity" : "Presentation State"
      },
      "(0010,0040)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "req" : "2",
         "name" : "Patient's Sex",
         "module" : "Patient",
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
         ]
      },
      "(0008,0096)[<0>](0040,1104)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
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
               ]
            }
         ],
         "entity" : "Study",
         "name" : "Person's Telecom Information",
         "req" : "3"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0232)[<2>](0070,0258)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "entity" : "Presentation State",
         "name" : "Shadow Opacity",
         "req" : "1",
         "module" : "Graphic Annotation",
         "desc" : "Encodes the shadow opacity. The value is encoded as floating point alpha value (0.0-1.0)."
      },
      "(0008,0051)[<0>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "req" : "1C",
         "entity" : "Study",
         "module" : "General Study",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "usage" : "M"
      },
      "(0020,000d)" : {
         "desc" : "Unique identifier for the Study.",
         "module" : "General Study",
         "name" : "Study Instance UID",
         "req" : "1",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M"
      },
      "(0028,1103)" : {
         "mod_tables" : [
            "table_C.7-22a"
         ],
         "usage" : "M",
         "req" : "1",
         "name" : "Blue Palette Color Lookup Table Descriptor",
         "entity" : "Presentation State",
         "desc" : [
            "Specifies the format of the Blue Palette Color Lookup table Data (0028,1203). See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.3.1.5"
               }
            },
            " for further explanation."
         ],
         "module" : "Palette Color Lookup Table"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)" : {
         "req" : "1C",
         "name" : "Referenced SOP Sequence",
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
      "(0070,0404)[<0>](0008,1115)[<1>](0088,0130)" : {
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the Composite Object (s) reside.",
         "module" : "Presentation State Blending",
         "entity" : "Presentation State",
         "req" : "3",
         "name" : "Storage Media File-Set ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0008,1072)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Operator Identification Sequence",
         "entity" : "Series",
         "desc" : [
            "Identification of the operator(s) supporting the Series.",
            "One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Operators' Name (0008,1070), if present."
         ],
         "module" : "General Series"
      },
      "(0008,1062)[<0>](0008,0082)" : {
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "General Study",
         "name" : "Institution Code Sequence",
         "req" : "1C",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0008,0005)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Presentation State",
         "name" : "Specific Character Set",
         "req" : "1C",
         "module" : "SOP Common",
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
         ]
      },
      "(0010,0026)[<0>](0010,0020)" : {
         "entity" : "Patient",
         "name" : "Patient ID",
         "req" : "1",
         "desc" : "Primary identifier for the group of subjects.",
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ]
      },
      "(0070,0404)[<0>](0008,1115)[<1>](0020,000e)" : {
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M",
         "req" : "1",
         "name" : "Series Instance UID",
         "entity" : "Presentation State",
         "module" : "Presentation State Blending",
         "desc" : "Unique identifier of a Series that is part of this Study and contains the referenced Composite Object(s)."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)" : {
         "module" : "General Series",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "entity" : "Series",
         "name" : "Referenced SOP Sequence",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0010,4000)" : {
         "module" : "Patient",
         "desc" : "User-defined additional information about the patient.",
         "entity" : "Patient",
         "name" : "Patient Comments",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0070,0086)[<0>](0008,0082)" : {
         "mod_tables" : [
            "table_C.11.10-1",
            "table_10-12",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Institution Code Sequence",
         "req" : "1C",
         "entity" : "Presentation State",
         "module" : "Presentation State Identification",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0070,0001)[<0>](0008,1140)[<1>](0008,1155)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "mod_tables" : [
            "table_C.10-5",
            "table_10-3",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "Graphic Annotation",
         "entity" : "Presentation State",
         "name" : "Referenced SOP Instance UID",
         "req" : "1"
      },
      "(0018,1030)" : {
         "req" : "3",
         "name" : "Protocol Name",
         "entity" : "Series",
         "module" : "General Series",
         "desc" : [
            "User-defined description of the conditions under which the Series was performed.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "This attribute conveys series-specific protocol identification and may or may not be identical to the one presented in the Performed Protocol Code Sequence (0040,0260)."
                     ],
                     "attrs" : {
                        "xml:id" : "para_0dde755c-c6af-40da-92ed-f526337bb396"
                     },
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M"
      },
      "(0010,1100)[<0>](0040,e020)" : {
         "module" : "Patient",
         "desc" : [
            "Type of object instances referenced.",
            {
               "title" : "Defined Terms:",
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
               ]
            }
         ],
         "name" : "Type of Instances",
         "req" : "1",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0032)" : {
         "entity" : "Patient",
         "req" : "3",
         "name" : "Universal Entity ID",
         "module" : "Patient",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a161)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "entity" : "Series",
         "name" : "Floating Point Value",
         "req" : "1C"
      },
      "(0008,0081)" : {
         "req" : "3",
         "name" : "Institution Address",
         "entity" : "Equipment",
         "module" : "General Equipment",
         "desc" : "Mailing address of the institution where the equipment that produced the composite instances is located.",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M"
      },
      "(0040,0245)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "entity" : "Series",
         "req" : "3",
         "name" : "Performed Procedure Step Start Time",
         "desc" : "Time on which the Performed Procedure Step started.",
         "module" : "General Series"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0230)" : {
         "module" : "Graphic Annotation",
         "desc" : [
            "The rotation of this Compound Graphic in degrees. Value shall be in degrees, between 0 and 360.",
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
            ]
         ],
         "name" : "Rotation Angle",
         "req" : "3",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0014)" : {
         "module" : "Graphic Annotation",
         "desc" : [
            "Location of a point in the image or Specified Displayed Area to which the Unformatted Text Value (0070,0006) is related, in Anchor Point Annotation Units (0070,0004), given as column\\row. Column is the horizontal offset and row is the vertical offset.",
            "Required if Bounding Box Top Left Hand Corner (0070,0010) and Bounding Box Bottom Right Hand Corner (0070,0011) are not present. May be present otherwise."
         ],
         "entity" : "Presentation State",
         "req" : "1C",
         "name" : "Anchor Point",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "mod_tables" : [
            "table_C.10-5"
         ]
      },
      "(0070,0404)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1155)" : {
         "entity" : "Presentation State",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "Presentation State Blending",
         "usage" : "M",
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ]
      },
      "(0008,1049)[<0>](0008,0082)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "req" : "1C",
         "name" : "Institution Code Sequence",
         "module" : "General Study",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a163)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Rational Denominator Value",
         "req" : "1C",
         "entity" : "Series",
         "module" : "General Series",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ]
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)[<2>](0070,0245)" : {
         "entity" : "Presentation State",
         "req" : "1",
         "name" : "Shadow Offset X",
         "module" : "Graphic Annotation",
         "desc" : [
            "Floating point value that defines the shadow offset in X direction in Anchor Point Annotation Units (0070,0004) if used in Text Object Sequence Item or in Graphic Annotation Units (0070,0005) if used in Graphic Object Sequence Item. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.10.5.1.3.13.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            }
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ]
      },
      "(0012,0051)" : {
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "usage" : "U",
         "desc" : [
            "A description of a set of one or more studies that are grouped together to represent a clinical time point or submission in a clinical trial or research. See ",
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
         "name" : "Clinical Trial Time Point Description",
         "req" : "3",
         "entity" : "Study"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "req" : "1C",
         "entity" : "Patient",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M"
      },
      "(0008,1052)[<0>](0040,1102)" : {
         "module" : "General Series",
         "desc" : "Person's mailing address",
         "entity" : "Series",
         "name" : "Person's Address",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ]
      },
      "(fffa,fffa)[<0>](0400,0115)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
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
                                 "attrs" : {
                                    "xml:id" : "para_2d3ce9c9-555a-4be1-9e6d-e07eb84c4852"
                                 },
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
         "entity" : "Presentation State",
         "req" : "1",
         "name" : "Certificate of Signer"
      },
      "(0012,0083)" : {
         "module" : "Clinical Trial Study",
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
         "entity" : "Study",
         "req" : "3",
         "name" : "Consent for Clinical Trial Use Sequence",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4b"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a123)" : {
         "name" : "Person Name",
         "req" : "1C",
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
         "usage" : "M"
      },
      "(0012,0050)" : {
         "entity" : "Study",
         "req" : "2",
         "name" : "Clinical Trial Time Point ID",
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
         "module" : "Clinical Trial Study",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4b"
         ]
      },
      "(0008,0015)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Date and time that the SOP Instance was last coerced by a Storage SCP (see ",
            {
               "attrs" : {
                  "targetdoc" : "PS3.4",
                  "targetptr" : "PS3.4",
                  "xrefstyle" : "select: labelnumber"
               },
               "el" : "olink"
            },
            ")."
         ],
         "module" : "SOP Common",
         "entity" : "Presentation State",
         "name" : "Instance Coercion DateTime",
         "req" : "3"
      },
      "(0070,0060)" : {
         "module" : "Graphic Layer",
         "desc" : [
            "A sequence of Items each of which represents a single layer in which overlays, curves, graphics or text may be rendered.",
            "One or more Items shall be included in this Sequence.",
            [
               "An Item is required for each layer referenced from the ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.10.5",
                     "xrefstyle" : "select: title"
                  }
               },
               " or the ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: title",
                     "linkend" : "sect_C.11.7"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "entity" : "Presentation State",
         "name" : "Graphic Layer Sequence",
         "req" : "1",
         "usage" : "C - Required if  is present",
         "mod_tables" : [
            "table_C.10-7"
         ]
      },
      "(0008,0096)[<0>](0008,0080)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "module" : "General Study",
         "name" : "Institution Name",
         "req" : "1C",
         "entity" : "Study"
      },
      "(0070,0234)[<0>](0070,0207)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.10-12"
         ],
         "desc" : "Name used to identify the Graphic Group, i.e., the combined graphic object.",
         "module" : "Graphic Group",
         "entity" : "Presentation State",
         "req" : "1",
         "name" : "Graphic Group Label"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0005)" : {
         "name" : "Graphic Annotation Units",
         "req" : "1",
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "desc" : [
            "Units of measure for the axes of the graphic annotation.",
            "Enumerated Values for Graphic Annotation Units (0070,0005) are the same as for Bounding Box Annotation Units (0070,0003)."
         ],
         "mod_tables" : [
            "table_C.10-5"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied"
      },
      "(0070,0082)" : {
         "module" : "Presentation State Identification",
         "desc" : [
            "Date on which this presentation was created.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "This date may be different from the date that the DICOM SOP Instance was created, since the presentation state information contained may have been recorded earlier."
                     ],
                     "attrs" : {
                        "xml:id" : "para_65edff7b-a56e-4bd4-86d8-f4dfa39610e2"
                     },
                     "el" : "para"
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "name" : "Presentation Creation Date",
         "req" : "1",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.11.10-1"
         ],
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,003a)" : {
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
         "module" : "Patient",
         "name" : "Assigning Agency or Department Code Sequence",
         "req" : "3",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M"
      },
      "(0008,0124)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Presentation State",
         "name" : "Mapping Resource Identification Sequence",
         "req" : "3",
         "module" : "SOP Common",
         "desc" : [
            "Sequence of items that map values of Mapping Resource (0008,0105) to an external, private or local Mapping Resource.",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0233)[<2>](0070,0256)" : {
         "entity" : "Presentation State",
         "req" : "1C",
         "name" : "Fill Pattern",
         "module" : "Graphic Annotation",
         "desc" : [
            "A binary fill pattern. A set bit corresponds to foreground. An unset bit corresponds to background.",
            "A 128 byte value defining a 32x32 1 bit matrix. This fill pattern is replicated in tiles inside the boundaries of the graphic type.",
            "The most significant bit corresponds to the leftmost pixel in the row.",
            "The fill pattern relates to display pixels where one bit value corresponds to one display pixel.",
            "Required if Fill Mode (0070,0257) equals STIPPELED."
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5c"
         ]
      },
      "(0070,0404)[<0>](0020,000d)" : {
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.17-3"
         ],
         "usage" : "M",
         "desc" : "Unique identifier for the Study",
         "module" : "Presentation State Blending",
         "name" : "Study Instance UID",
         "req" : "1",
         "entity" : "Presentation State"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0231)[<2>](0070,0247)" : {
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
         "module" : "Graphic Annotation",
         "name" : "Shadow Color CIELab Value",
         "req" : "1",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M"
      },
      "(0010,1020)" : {
         "module" : "Patient Study",
         "desc" : "Length or size of the Patient, in meters.",
         "entity" : "Study",
         "req" : "3",
         "name" : "Patient's Size",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0040,0244)" : {
         "module" : "General Series",
         "desc" : "Date on which the Performed Procedure Step started.",
         "req" : "3",
         "name" : "Performed Procedure Step Start Date",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0080)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Institution Name",
         "req" : "1C",
         "entity" : "Presentation State",
         "module" : "SOP Common",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present."
      },
      "(0020,0060)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "desc" : [
            "Laterality of (paired) body part examined. Required if the body part examined is a paired structure and Image Laterality (0020,0062) or Frame Laterality (0020,9072) or Measurement Laterality (0024,0113) are not sent.",
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
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
         "module" : "General Series",
         "req" : "2C",
         "name" : "Laterality",
         "entity" : "Series"
      },
      "(0020,0011)" : {
         "desc" : "A number that identifies this Series.",
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Series Number",
         "req" : "2",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0008,0300)[<0>](0008,0301)" : {
         "module" : "SOP Common",
         "desc" : "Odd group number within which the Private Data Element block is reserved.",
         "entity" : "Presentation State",
         "req" : "1",
         "name" : "Private Group Reference",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0070,0084)" : {
         "req" : "2",
         "name" : "Content Creator's Name",
         "entity" : "Presentation State",
         "desc" : "Name of operator (such as a technologist or physician) creating the content of the SOP Instance.",
         "module" : "Presentation State Identification",
         "mod_tables" : [
            "table_C.11.10-1",
            "table_10-12"
         ],
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,0081)" : {
         "module" : "SOP Common",
         "desc" : "Address of the institution where the equipment that contributed to the composite instance is located.",
         "req" : "3",
         "name" : "Institution Address",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0018,9004)" : {
         "entity" : "Presentation State",
         "name" : "Content Qualification",
         "req" : "3",
         "module" : "SOP Common",
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
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.13.2.1.1"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,0090)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "name" : "Referring Physician's Name",
         "req" : "2",
         "module" : "General Study",
         "desc" : "Name of the patient's referring physician"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0232)[<2>](0070,0245)" : {
         "req" : "1",
         "name" : "Shadow Offset X",
         "entity" : "Presentation State",
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
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0040,e001)" : {
         "name" : "HL7 Instance Identifier",
         "req" : "1C",
         "entity" : "Patient",
         "module" : "Patient",
         "desc" : [
            "Instance Identifier of the encapsulated HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
            "Required if Type of Instances (0040,E020) is CDA."
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1150)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "entity" : "Series",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "module" : "General Series",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)[<2>](0070,0250)" : {
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "req" : "1",
         "name" : "Italic",
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "desc" : [
            "Specifies whether or not the text shall be rendered italicized.",
            {
               "title" : "Enumerated Values:",
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
               ]
            }
         ]
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0232)[<2>](0070,0255)" : {
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "name" : "Line Pattern",
         "req" : "1C",
         "entity" : "Presentation State",
         "desc" : [
            "Pattern that defines the line dashing style. The Line Pattern is a 32 bit value. If the bit inside the pattern is set to 1 the foreground color is drawn, else the background color is drawn.",
            {
               "el" : "note",
               "content" : [
                  "\n                        ",
                  {
                     "content" : [
                        "For example, 00FFH defines the dashes with an equal size."
                     ],
                     "attrs" : {
                        "xml:id" : "para_d72be373-7a7e-43ca-86b7-e209489ad5c6"
                     },
                     "el" : "para"
                  },
                  "\n                      "
               ]
            },
            "Required if Line Dashing Style (0070,0254) has a value of DASHED."
         ],
         "module" : "Graphic Annotation"
      },
      "(0038,0010)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "req" : "3",
         "name" : "Admission ID",
         "entity" : "Study",
         "module" : "Patient Study",
         "desc" : "Identifier of the visit as assigned by the healthcare provider"
      },
      "(0008,0030)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "name" : "Study Time",
         "req" : "2",
         "entity" : "Study",
         "desc" : "Time the Study started.",
         "module" : "General Study"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,08ea)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "req" : "1C",
         "name" : "Measurement Units Code Sequence",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "module" : "General Series"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0233)" : {
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5c"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "req" : "3",
         "name" : "Fill Style Sequence",
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "desc" : [
            "Sequence that describes the fill style.",
            "Only a single item is permitted in this Sequence."
         ]
      },
      "(0070,0042)" : {
         "usage" : "C - Required if rotation or flipping are to be applied",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_c7b27490-fc1c-4738-b72f-a7e27350b392"
                     },
                     "content" : [
                        "Negative values are not permitted since the Value Representation is unsigned."
                     ]
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "module" : "Spatial Transformation",
         "entity" : "Presentation State",
         "name" : "Image Rotation",
         "req" : "1"
      },
      "(0010,0216)[<0>](0010,0214)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
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
         "module" : "Patient",
         "req" : "1",
         "name" : "Strain Stock Number",
         "entity" : "Patient"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0233)[<2>](0070,0284)" : {
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5c"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "req" : "1",
         "name" : "Pattern On Opacity",
         "entity" : "Presentation State",
         "desc" : "Encodes the foreground opacity. The value is encoded as floating point alpha value (0.0-1.0).",
         "module" : "Graphic Annotation"
      },
      "(0070,0404)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "entity" : "Presentation State",
         "name" : "Referenced SOP Instance MAC Sequence",
         "req" : "3",
         "module" : "Presentation State Blending",
         "desc" : [
            "A MAC Calculation from data in the referenced SOP Instance that can be used as a data integrity check.",
            "Only a single Item is permitted in this Sequence.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_85131baf-ebaa-41ca-b044-07c75698df97"
                     },
                     "content" : [
                        "This Attribute may be used in place of Referenced Digital Signature Sequence (0400,0402), particularly if the SOP Instance does not have appropriate Digital Signatures that can be referenced."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ]
      },
      "(0040,0250)" : {
         "name" : "Performed Procedure Step End Date",
         "req" : "3",
         "entity" : "Series",
         "desc" : "Date on which the Performed Procedure Step ended.",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "entity" : "Series",
         "req" : "3",
         "name" : "Protocol Context Sequence",
         "desc" : "Sequence that specifies the context for the Scheduled Protocol Code Sequence Item. One or more Items are permitted in this Sequence.",
         "module" : "General Series"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0232)[<2>](0070,0284)" : {
         "entity" : "Presentation State",
         "req" : "1",
         "name" : "Pattern On Opacity",
         "module" : "Graphic Annotation",
         "desc" : "Encodes the foreground opacity. The value is encoded as floating point alpha value (0.0-1.0).",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ]
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0011)" : {
         "entity" : "Presentation State",
         "name" : "Bounding Box Bottom Right Hand Corner",
         "req" : "1C",
         "module" : "Graphic Annotation",
         "desc" : [
            "Location of the Bottom Right Hand Corner (BRHC) of the bounding box in which Unformatted Text Value (0070,0006) is to be displayed, in Bounding Box Annotation Units (0070,0003), given as column\\row. Column is the horizontal offset and row is the vertical offset.",
            "Required if Anchor Point (0070,0014) is not present. May be present otherwise.",
            "Required if Bounding Box Top Left Hand Corner (0070,0010) is present."
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "mod_tables" : [
            "table_C.10-5"
         ]
      },
      "(0008,0106)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Presentation State",
         "name" : "Context Group Version",
         "req" : "1",
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
         "module" : "SOP Common"
      },
      "(0008,0014)" : {
         "module" : "SOP Common",
         "desc" : "Uniquely identifies device that created the SOP Instance.",
         "name" : "Instance Creator UID",
         "req" : "3",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a121)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "name" : "Date",
         "req" : "1C",
         "module" : "General Series",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ]
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)[<2>](0070,0227)" : {
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "module" : "Graphic Annotation",
         "desc" : "Font name in a standard type.",
         "req" : "3",
         "name" : "Font Name",
         "entity" : "Presentation State"
      },
      "(0100,0420)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "SOP Authorization DateTime",
         "entity" : "Presentation State",
         "desc" : "The date and time when the SOP Instance Status (0100,0410) was set to AO.",
         "module" : "SOP Common"
      },
      "(0070,005a)" : {
         "entity" : "Presentation State",
         "req" : "1",
         "name" : "Displayed Area Selection Sequence",
         "module" : "Displayed Area",
         "desc" : [
            [
               "A sequence of Items each of which describes the displayed area selection for a group of images or frames. Sufficient Items shall be present to describe every image and frame listed in the ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: title",
                     "linkend" : "sect_C.11.11"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "One or more Items shall be included in this Sequence."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.10-4"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a122)" : {
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "module" : "General Series",
         "name" : "Time",
         "req" : "1C",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0008,1052)[<0>](0008,0081)" : {
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "module" : "General Series",
         "name" : "Institution Address",
         "req" : "3",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a040)" : {
         "req" : "1",
         "name" : "Value Type",
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
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0008,0110)[<0>](0008,0103)" : {
         "module" : "SOP Common",
         "desc" : "The coding scheme version associated with the Coding Scheme Designator (0008,0102).",
         "entity" : "Presentation State",
         "req" : "3",
         "name" : "Coding Scheme Version",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0028,1222)" : {
         "desc" : [
            "Segmented Green Palette Color Lookup Table Data. Required if segmented data is used in an Image IOD; shall not be present in a Presentation State IOD. or Color Palette IOD See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.9.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "module" : "Palette Color Lookup Table",
         "name" : "Segmented Green Palette Color Lookup Table Data",
         "req" : "1C",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.7-22a"
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)" : {
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
         "entity" : "Series",
         "req" : "3",
         "name" : "Content Item Modifier Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ]
      },
      "(0012,0031)" : {
         "entity" : "Patient",
         "name" : "Clinical Trial Site Name",
         "req" : "2",
         "desc" : [
            "Name of the site responsible for submitting clinical trial or research data. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.1.3.1.5",
                  "xrefstyle" : "select: label"
               }
            }
         ],
         "module" : "Clinical Trial Subject",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-2b"
         ]
      },
      "(0008,0110)[<0>](0008,0114)" : {
         "entity" : "Presentation State",
         "name" : "Coding Scheme External ID",
         "req" : "2C",
         "module" : "SOP Common",
         "desc" : "The coding scheme identifier as defined in an external registry. Required if coding scheme is registered and Coding Scheme UID (0008,010C) is not present.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0232)[<2>](0070,0247)" : {
         "module" : "Graphic Annotation",
         "desc" : [
            "A color triplet value used to encode the Shadow Color. The units are specified in PCS-Values, and the value is encoded as CIELab. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.10.7.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "req" : "1",
         "name" : "Shadow Color CIELab Value",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied"
      },
      "(0018,1008)" : {
         "desc" : "Identifier of the gantry or positioner.",
         "module" : "General Equipment",
         "name" : "Gantry ID",
         "req" : "3",
         "entity" : "Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M"
      },
      "(0008,0051)[<0>](0040,0032)" : {
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "module" : "General Study",
         "entity" : "Study",
         "req" : "1C",
         "name" : "Universal Entity ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ]
      },
      "(0008,1072)[<0>](0040,1103)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "entity" : "Series",
         "req" : "3",
         "name" : "Person's Telephone Numbers",
         "desc" : "Person's telephone number(s)",
         "module" : "General Series"
      },
      "(0070,005a)[<0>](0008,1140)[<1>](0008,1155)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.10-4",
            "table_10-3",
            "table_10-11"
         ],
         "entity" : "Presentation State",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "module" : "Displayed Area",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0070,0404)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1150)" : {
         "entity" : "Presentation State",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "module" : "Presentation State Blending",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ]
      },
      "(fffa,fffa)[<0>](0400,0401)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : [
            "The purpose of this Digital Signature.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "SOP Common",
         "entity" : "Presentation State",
         "req" : "3",
         "name" : "Digital Signature Purpose Code Sequence"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0081)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "module" : "SOP Common",
         "entity" : "Presentation State",
         "name" : "Institution Address",
         "req" : "3"
      },
      "(0010,1000)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "desc" : "Other identification numbers or codes used to identify the patient.",
         "entity" : "Patient",
         "name" : "Other Patient IDs",
         "req" : "3"
      },
      "(4ffe,0001)[<0>](0400,0005)" : {
         "name" : "MAC ID Number",
         "req" : "1",
         "entity" : "Presentation State",
         "module" : "SOP Common",
         "desc" : "A number, unique within this SOP Instance, used to identify this MAC Parameters Sequence (4FFE,0001) item from an Item of the Digital Signatures Sequence (FFFA,FFFA).",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,1001)" : {
         "module" : "General Series",
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
         ],
         "name" : "Requested Procedure ID",
         "req" : "1C",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0232)[<2>](0070,0253)" : {
         "entity" : "Presentation State",
         "req" : "1",
         "name" : "Line Thickness",
         "desc" : "Specifies the line thickness. The dimension for this attribute is defined by Graphic Annotation Units (0070,0005) or Compound Graphic Units (0070,0282).",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
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
         "name" : "Referenced SOP Sequence",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0008,1062)[<0>](0008,0080)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "req" : "1C",
         "name" : "Institution Name",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "module" : "General Study"
      },
      "(0070,0001)" : {
         "entity" : "Presentation State",
         "req" : "1",
         "name" : "Graphic Annotation Sequence",
         "module" : "Graphic Annotation",
         "desc" : [
            "A sequence of Items each of which represents a group of annotations composed of graphics or text or both.",
            "One or more Items shall be included in this Sequence."
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "mod_tables" : [
            "table_C.10-5"
         ]
      },
      "(0070,0086)" : {
         "desc" : "Identification of the person who created the content. Only a single item is permitted in this Sequence.",
         "module" : "Presentation State Identification",
         "entity" : "Presentation State",
         "req" : "3",
         "name" : "Content Creator's Identification Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.11.10-1",
            "table_10-12"
         ]
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0262)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "desc" : [
            "Diameter of the circle around the CROSSHAIR origin where the CROSSHAIR is visible. The Compound Graphic Units (0070,0282) of the Diameter of Visibility (0070,0262) shall be DISPLAY.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.10.5.1.3.10",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               }
            ],
            "Required if Compound Graphic Type (0070,0294) equals CROSSHAIR."
         ],
         "module" : "Graphic Annotation",
         "entity" : "Presentation State",
         "req" : "1C",
         "name" : "Diameter of Visibility"
      },
      "(0018,a001)" : {
         "usage" : "M",
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
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.12.1.1.5"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "module" : "SOP Common",
         "entity" : "Presentation State",
         "name" : "Contributing Equipment Sequence",
         "req" : "3"
      },
      "(0010,0026)[<0>](0010,0024)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "req" : "3",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1160)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
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
         "module" : "General Series"
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1150)" : {
         "entity" : "Series",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "module" : "General Series",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-11"
         ]
      },
      "(0008,0117)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : [
            "The unique identifier of the Context Group.",
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
         "req" : "3",
         "name" : "Context UID",
         "entity" : "Presentation State"
      },
      "(0010,1002)[<0>](0010,0024)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "Patient",
         "req" : "3",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "entity" : "Patient"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0294)" : {
         "mod_tables" : [
            "table_C.10-5"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "name" : "Compound Graphic Type",
         "req" : "1",
         "entity" : "Presentation State",
         "desc" : [
            "The shape of this Compound Graphic.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.10.5.1.3",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ],
            {
               "type" : "variablelist",
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
               ]
            },
            {
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_d200444f-236a-4a2f-a60a-70abb9ea44e8"
                     },
                     "content" : [
                        "Implementers may add private graphic types."
                     ]
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "module" : "Graphic Annotation"
      },
      "(0010,1001)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "Other Patient Names",
         "req" : "3",
         "entity" : "Patient",
         "desc" : "Other names used to identify the patient.",
         "module" : "Patient"
      },
      "(0008,0096)[<0>](0040,1103)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Person's telephone number(s)",
         "module" : "General Study",
         "entity" : "Study",
         "req" : "3",
         "name" : "Person's Telephone Numbers"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0232)[<2>](0070,0252)" : {
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "desc" : [
            "A color triplet value used to encode the color of parts of the line that are off, i.e., the background. The units are specified in PCS-Values, and the value is encoded as CIELab. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.10.7.1.1"
               },
               "el" : "xref"
            },
            "."
         ],
         "module" : "Graphic Annotation",
         "req" : "3",
         "name" : "Pattern Off Color CIELab Value",
         "entity" : "Presentation State"
      },
      "(0070,0402)[<0>](0028,3110)[<1>](0008,1140)[<2>](0062,000b)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.11.14-1",
            "table_10-3"
         ],
         "module" : "Presentation State Blending",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "entity" : "Presentation State",
         "req" : "1C",
         "name" : "Referenced Segment Number"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0232)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "desc" : [
            "Sequence that describes the line style.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "Graphic Annotation",
         "entity" : "Presentation State",
         "req" : "3",
         "name" : "Line Style Sequence"
      },
      "(0070,0086)[<0>](0040,1103)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.11.10-1",
            "table_10-12",
            "table_10-1"
         ],
         "module" : "Presentation State Identification",
         "desc" : "Person's telephone number(s)",
         "entity" : "Presentation State",
         "req" : "3",
         "name" : "Person's Telephone Numbers"
      },
      "(0010,1100)[<0>](0040,e022)[<1>](0088,0130)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "name" : "Storage Media File-Set ID",
         "req" : "2",
         "entity" : "Patient",
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the referenced instance(s) reside.",
         "module" : "Patient"
      },
      "(0070,0404)[<0>](0008,1115)[<1>](0008,0054)" : {
         "desc" : "Title of the DICOM Application Entity where the Composite Object(s) may be retrieved on the network.",
         "module" : "Presentation State Blending",
         "req" : "3",
         "name" : "Retrieve AE Title",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M"
      },
      "(0010,1100)[<0>](0040,e025)[<1>](0008,1190)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "entity" : "Patient",
         "name" : "Retrieve URL",
         "req" : "1",
         "module" : "Patient",
         "desc" : "URL specifying the location of the referenced instance(s)."
      },
      "(0040,a390)" : {
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
         "module" : "SOP Common",
         "req" : "1C",
         "name" : "HL7 Structured Document Reference Sequence",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
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
      "Can't handle table_8.8-1 (in table_C.11.10-1:table_10-12 after (0008,0006))",
      "Can't handle table_8.8-1 (in table_C.11.10-1:table_10-12:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.11.10-1:table_10-12:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.11.14-1:table_C.17-3:table_C.17-3a after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.12-1 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_C.12-6 after (0400,0401))"
   ]
}
