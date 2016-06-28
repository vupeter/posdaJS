var data = {
   "tags" : {
      "(0008,1072)" : {
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "Identification of the operator(s) supporting the Series.",
            "One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Operators' Name (0008,1070), if present."
         ],
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "name" : "Operator Identification Sequence",
         "req" : "3"
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
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "name" : "Fill Pattern",
         "req" : "1C",
         "usage" : "C - Required if Graphic Annotations are to be applied"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a120)" : {
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "req" : "1C",
         "name" : "DateTime"
      },
      "(0008,1120)[<0>](0008,1155)" : {
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "module" : "Patient"
      },
      "(0008,1049)[<0>](0040,1101)" : {
         "entity" : "Study",
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
         "req" : "1"
      },
      "(0400,0561)[<0>](0400,0564)" : {
         "desc" : "The source that provided the SOP Instance prior to the removal or replacement of the values. For example, this might be the Institution from which imported SOP Instances were received.",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Source of Previous Values",
         "req" : "2"
      },
      "(0010,1002)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "desc" : [
            "A sequence of identification numbers or codes used to identify the patient, which may or may not be human readable, and may or may not have been obtained from an implanted or attached device such as an RFID or barcode.",
            "One or more Items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Other Patient IDs Sequence",
         "req" : "3",
         "usage" : "M"
      },
      "(0018,a001)" : {
         "name" : "Contributing Equipment Sequence",
         "req" : "3",
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
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.12.1.1.5",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ]
         ],
         "entity" : "Presentation State",
         "module" : "SOP Common"
      },
      "(0070,0001)[<0>](0008,1140)[<1>](0008,1155)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "module" : "Graphic Annotation",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.10-5",
            "table_10-3",
            "table_10-11"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a123)" : {
         "usage" : "M",
         "req" : "1C",
         "name" : "Person Name",
         "module" : "General Series",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0010,21b0)" : {
         "name" : "Additional Patient History",
         "req" : "3",
         "usage" : "U",
         "entity" : "Study",
         "desc" : "Additional information about the Patient's medical history.",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)[<2>](0070,0242)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "req" : "3",
         "name" : "Horizontal Alignment",
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
               "title" : "Enumerated Values:",
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
               ]
            },
            "Required if Bounding Box Top Left Hand Corner (0070,0010) is present."
         ],
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "entity" : "Presentation State",
         "module" : "Graphic Annotation"
      },
      "(0018,a001)[<0>](0018,a003)" : {
         "req" : "3",
         "name" : "Contribution Description",
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : "Description of the contribution the equipment made to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Presentation State"
      },
      "(0070,0402)" : {
         "entity" : "Presentation State",
         "desc" : [
            "A Sequence of Items, one identifying and describing transformations upon a set of underlying grayscale images, and the other identifying and describing transformations upon a set of superimposed grayscale images.",
            "Two Items shall be included in this sequence",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.11.14.1.1"
                  }
               },
               "."
            ]
         ],
         "mod_tables" : [
            "table_C.11.14-1"
         ],
         "module" : "Presentation State Blending",
         "req" : "1",
         "name" : "Blending Sequence",
         "usage" : "M"
      },
      "(0008,0060)" : [
         {
            "name" : "Modality",
            "req" : "1",
            "usage" : "M",
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
            "entity" : "Series",
            "mod_tables" : [
               "table_C.7-5a"
            ],
            "module" : "General Series"
         },
         {
            "name" : "Modality",
            "req" : "1",
            "usage" : "M",
            "module" : "Presentation Series",
            "mod_tables" : [
               "table_C.11.9-1"
            ],
            "desc" : [
               "Type of equipment that originally acquired the data.",
               {
                  "type" : "variablelist",
                  "title" : "Enumerated Values:",
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
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.7.3.1.1.1"
                     },
                     "el" : "xref"
                  },
                  "."
               ]
            ],
            "entity" : "Series"
         }
      ],
      "(0008,1072)[<0>](0040,1102)" : {
         "name" : "Person's Address",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "desc" : "Person's mailing address",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0008,1049)[<0>](0008,0081)" : {
         "usage" : "M",
         "name" : "Institution Address",
         "req" : "3",
         "entity" : "Study",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study"
      },
      "(0028,0109)" : {
         "usage" : "M",
         "name" : "Largest Pixel Value in Series",
         "req" : "3",
         "module" : "General Series",
         "entity" : "Series",
         "desc" : "The maximum value of all images in this Series.",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0232)[<2>](0070,0284)" : {
         "module" : "Graphic Annotation",
         "desc" : "Encodes the foreground opacity. The value is encoded as floating point alpha value (0.0-1.0).",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "entity" : "Presentation State",
         "name" : "Pattern On Opacity",
         "req" : "1",
         "usage" : "C - Required if Graphic Annotations are to be applied"
      },
      "(0008,1062)[<0>](0008,0082)" : {
         "module" : "General Study",
         "entity" : "Study",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "req" : "1C",
         "name" : "Institution Code Sequence"
      },
      "(0020,000e)" : {
         "usage" : "M",
         "req" : "1",
         "name" : "Series Instance UID",
         "desc" : "Unique identifier of the Series.",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0070,0086)" : {
         "module" : "Presentation State Identification",
         "desc" : "Identification of the person who created the content. Only a single item is permitted in this sequence.",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.11.10-1",
            "table_10-12"
         ],
         "usage" : "M",
         "name" : "Content Creator's Identification Code Sequence",
         "req" : "3"
      },
      "(0070,0404)[<0>](0008,1115)[<1>](0088,0130)" : {
         "usage" : "M",
         "req" : "3",
         "name" : "Storage Media File-Set ID",
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the Composite Object (s) reside.",
         "entity" : "Presentation State",
         "module" : "Presentation State Blending"
      },
      "(0040,0275)[<0>](0040,100a)" : {
         "name" : "Reason for Requested Procedure Code Sequence",
         "req" : "3",
         "usage" : "M",
         "desc" : [
            "Coded Reason for requesting this procedure.",
            "One or more Items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0040,0275)[<0>](0040,0009)" : {
         "entity" : "Series",
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
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "module" : "General Series",
         "name" : "Scheduled Procedure Step ID",
         "req" : "1C",
         "usage" : "M"
      },
      "(0400,0500)" : {
         "usage" : "M",
         "req" : "1C",
         "name" : "Encrypted Attributes Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Sequence of Items containing encrypted DICOM data.",
            "One or more Items shall be included in this sequence.",
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
         "entity" : "Presentation State",
         "module" : "SOP Common"
      },
      "(0010,2294)[<0>](0010,2296)" : {
         "desc" : [
            "Identification of the organization with which an animal is registered.",
            "Only a single Item shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "req" : "1",
         "name" : "Breed Registry Code Sequence"
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
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "entity" : "Presentation State",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "req" : "1",
         "name" : "Shadow Color CIELab Value"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0262)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "req" : "1C",
         "name" : "Diameter of Visibility",
         "module" : "Graphic Annotation",
         "desc" : [
            "Diameter of the circle around the CROSSHAIR origin where the CROSSHAIR is visible. The Compound Graphic Units (0070,0282) of the Diameter of Visibility (0070,0262) shall be DISPLAY.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.10.5.1.3.10",
                     "xrefstyle" : "select: label"
                  }
               }
            ],
            "Required if Compound Graphic Type (0070,0294) equals CROSSHAIR."
         ],
         "mod_tables" : [
            "table_C.10-5"
         ],
         "entity" : "Presentation State"
      },
      "(0038,0064)[<0>](0040,0031)" : {
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "Study",
         "usage" : "U",
         "req" : "1C",
         "name" : "Local Namespace Entity ID"
      },
      "(0070,0041)" : {
         "usage" : "C - Required if rotation or flipping are to be applied",
         "name" : "Image Horizontal Flip",
         "req" : "1",
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            },
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "No vertical flip is specified since the same result can be achieved by a combination of a 180 degree rotation and a horizontal flip."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ]
            }
         ],
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.10-6"
         ]
      },
      "(0012,0062)" : {
         "module" : "Patient",
         "desc" : [
            "The true identity of the patient has been removed from the Attributes and the Pixel Data",
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
            }
         ],
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3",
         "name" : "Patient Identity Removed",
         "usage" : "M"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)" : {
         "desc" : [
            "Sequence that describes the text style.",
            "Only a single item shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "name" : "Text Style Sequence",
         "req" : "3",
         "usage" : "C - Required if Graphic Annotations are to be applied"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0021)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "name" : "Number of Graphic Points",
         "req" : "1",
         "desc" : "Number of data points in this graphic.",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "module" : "Graphic Annotation"
      },
      "(0008,1072)[<0>](0040,1103)" : {
         "usage" : "M",
         "name" : "Person's Telephone Numbers",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "desc" : "Person's telephone number(s)",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0008,1062)[<0>](0040,1101)" : {
         "module" : "General Study",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "1",
         "name" : "Person Identification Code Sequence",
         "usage" : "M"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0233)[<2>](0070,0251)" : {
         "req" : "1",
         "name" : "Pattern On Color CIELab Value",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5c"
         ],
         "desc" : [
            [
               "A color triplet value used to encode the foreground color. The units are specified in PCS-Values, and the value is encoded as CIELab. See ",
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
         "entity" : "Presentation State",
         "module" : "Graphic Annotation"
      },
      "(0010,2294)[<0>](0010,2295)" : {
         "entity" : "Patient",
         "desc" : "Identification number of an animal within the registry.",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "usage" : "M",
         "req" : "1",
         "name" : "Breed Registration Number"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)" : {
         "req" : "3",
         "name" : "Protocol Context Sequence",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "desc" : "Sequence that specifies the context for the Scheduled Protocol Code Sequence Item. One or more Items are permitted in this sequence.",
         "entity" : "Series"
      },
      "(0010,0020)" : {
         "usage" : "M",
         "name" : "Patient ID",
         "req" : "2",
         "module" : "Patient",
         "desc" : "Primary hospital identification number or code for the patient.",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0070,0404)[<0>](0008,1115)[<1>](0088,0140)" : {
         "req" : "3",
         "name" : "Storage Media File-Set UID",
         "usage" : "M",
         "desc" : "Uniquely identifies the Storage Media on which the Composite Object(s) reside.",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Presentation State Blending"
      },
      "(0040,0260)" : {
         "req" : "3",
         "name" : "Performed Protocol Code Sequence",
         "usage" : "M",
         "module" : "General Series",
         "desc" : "Sequence describing the Protocol performed for this Procedure Step. One or more Items are permitted in this sequence.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "entity" : "Series"
      },
      "(0070,0402)[<0>](0028,3110)[<1>](0008,1140)[<2>](0008,1155)" : {
         "mod_tables" : [
            "table_C.11.14-1",
            "table_10-3",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Presentation State",
         "module" : "Presentation State Blending",
         "usage" : "M",
         "req" : "1",
         "name" : "Referenced SOP Instance UID"
      },
      "(0008,1250)" : {
         "usage" : "M",
         "name" : "Related Series Sequence",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : [
            "Identification of Series significantly related to this Series.",
            "One or more Items are permitted in this Sequence.",
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
                                 "content" : [
                                    "The related series may have different Frames of Reference and hence require some sort of registration before spatial coordinates can be directly compared."
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
                                 "el" : "para",
                                 "content" : [
                                    "This attribute is not intended for conveying localizer reference information, for which Referenced Image Sequence (0008,1140) should be used."
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
            }
         ],
         "entity" : "Series",
         "module" : "General Series"
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
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "name" : "Type of Patient ID",
         "req" : "1",
         "usage" : "M"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0233)[<2>](0070,0285)" : {
         "module" : "Graphic Annotation",
         "desc" : "Encodes the background opacity. The value is encoded as floating point alpha value (0.0-1.0).",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5c"
         ],
         "name" : "Pattern Off Opacity",
         "req" : "1",
         "usage" : "C - Required if Graphic Annotations are to be applied"
      },
      "(0070,0402)[<0>](0028,3110)[<1>](0008,1140)[<2>](0008,1160)" : {
         "req" : "1C",
         "name" : "Referenced Frame Number",
         "usage" : "M",
         "mod_tables" : [
            "table_C.11.14-1",
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
         ],
         "entity" : "Presentation State",
         "module" : "Presentation State Blending"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0232)[<2>](0070,0258)" : {
         "desc" : "Encodes the shadow opacity. The value is encoded as floating point alpha value (0.0-1.0).",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "module" : "Graphic Annotation",
         "name" : "Shadow Opacity",
         "req" : "1",
         "usage" : "C - Required if Graphic Annotations are to be applied"
      },
      "(0008,1111)" : {
         "req" : "3",
         "name" : "Referenced Performed Procedure Step Sequence",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : [
            "Uniquely identifies the Performed Procedure Step SOP Instance to which the Series is related.",
            "Only a single Item is permitted in this sequence."
         ],
         "entity" : "Series"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0232)[<2>](0070,0254)" : {
         "name" : "Line Dashing Style",
         "req" : "1",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "module" : "Graphic Annotation",
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
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "entity" : "Presentation State"
      },
      "(0010,1020)" : {
         "usage" : "U",
         "req" : "3",
         "name" : "Patient's Size",
         "desc" : "Length or size of the Patient, in meters.",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0006)" : {
         "req" : "1",
         "name" : "Unformatted Text Value",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "desc" : [
            [
               "Text data that is unformatted and whose manner of display within the defined bounding box or relative to the specified anchor point is implementation dependent. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.10.5.1.1"
                  }
               },
               "."
            ],
            "The text value may contain spaces, as well as multiple lines separated by CR LF, but otherwise no format control characters (such as horizontal or vertical tab and form feed) shall be present, even if permitted by the Value Representation of ST.",
            "The text shall be interpreted as specified by Specific Character Set (0008,0005) if present in the SOP Common Module.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "The text may contain single or multi-byte characters and use code extension techniques as described in ",
                        {
                           "el" : "olink",
                           "attrs" : {
                              "targetptr" : "PS3.5",
                              "targetdoc" : "PS3.5",
                              "xrefstyle" : "select: labelnumber"
                           }
                        },
                        " if permitted by the values of Specific Character Set (0008,0005)."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ]
            }
         ],
         "entity" : "Presentation State"
      },
      "(0012,0021)" : {
         "usage" : "U",
         "req" : "2",
         "name" : "Clinical Trial Protocol Name",
         "entity" : "Patient",
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
         "module" : "Clinical Trial Subject"
      },
      "(0008,0070)" : {
         "module" : "General Equipment",
         "desc" : "Manufacturer of the equipment that produced the composite instances.",
         "entity" : "Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "name" : "Manufacturer",
         "req" : "2"
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
         "entity" : "Presentation State",
         "module" : "SOP Common",
         "name" : "Operator Identification Sequence",
         "req" : "3",
         "usage" : "M"
      },
      "(0070,0001)[<0>](0008,1140)[<1>](0062,000b)" : {
         "entity" : "Presentation State",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "mod_tables" : [
            "table_C.10-5",
            "table_10-3"
         ],
         "module" : "Graphic Annotation",
         "name" : "Referenced Segment Number",
         "req" : "1C",
         "usage" : "C - Required if Graphic Annotations are to be applied"
      },
      "(0400,0561)[<0>](0400,0563)" : {
         "usage" : "M",
         "name" : "Modifying System",
         "req" : "1",
         "desc" : "Identification of the system that removed and/or replaced the attributes.",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0070,0402)[<0>](0008,1115)[<1>](0008,1140)[<2>](0062,000b)" : {
         "module" : "Presentation State Blending",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.11.11-1b",
            "table_10-3"
         ],
         "req" : "1C",
         "name" : "Referenced Segment Number",
         "usage" : "M"
      },
      "(0012,0083)[<0>](0012,0020)" : {
         "usage" : "U",
         "name" : "Clinical Trial Protocol ID",
         "req" : "1C",
         "module" : "Clinical Trial Study",
         "entity" : "Study",
         "desc" : [
            "The identifier of the protocol for which consent to distribute has been granted.",
            "Required if Distribution Type (0012,0084) is NAMED_PROTOCOL and the protocol is not that which is specified in Clinical Trial Protocol ID (0012,0020) in the Clinical Trial Subject Module."
         ],
         "mod_tables" : [
            "table_C.7-4b"
         ]
      },
      "(0040,0245)" : {
         "module" : "General Series",
         "entity" : "Series",
         "desc" : "Time on which the Performed Procedure Step started.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "name" : "Performed Procedure Step Start Time",
         "req" : "3",
         "usage" : "M"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0231)[<2>](0070,0244)" : {
         "req" : "1",
         "name" : "Shadow Style",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "desc" : [
            "The shadow style of the text to be displayed.",
            {
               "type" : "variablelist",
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
               ]
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
         ],
         "entity" : "Presentation State",
         "module" : "Graphic Annotation"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,003a)" : {
         "usage" : "M",
         "name" : "Assigning Agency or Department Code Sequence",
         "req" : "3",
         "module" : "Patient",
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
         "entity" : "Patient"
      },
      "(0008,1072)[<0>](0008,0081)" : {
         "usage" : "M",
         "name" : "Institution Address",
         "req" : "3",
         "module" : "General Series",
         "entity" : "Series",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ]
      },
      "(0070,0060)[<0>](0070,0062)" : {
         "module" : "Graphic Layer",
         "mod_tables" : [
            "table_C.10-7"
         ],
         "desc" : "An integer indicating the order in which it is recommended that the layer be rendered, if the display is capable of distinguishing. Lower numbered layers are to be rendered first.",
         "entity" : "Presentation State",
         "usage" : "C - Required if Graphic Annotation Module is present",
         "req" : "1",
         "name" : "Graphic Layer Order"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0021)" : {
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "desc" : "Number of data Items, e.g., points, in this Compound Graphic.",
         "entity" : "Presentation State",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "req" : "1",
         "name" : "Number of Graphic Points"
      },
      "(0008,103f)" : {
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "A coded description of the Series.",
            "Only a single Item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "req" : "3",
         "name" : "Series Description Code Sequence",
         "usage" : "M"
      },
      "(0012,0031)" : {
         "name" : "Clinical Trial Site Name",
         "req" : "2",
         "usage" : "U",
         "module" : "Clinical Trial Subject",
         "desc" : [
            "Name of the site responsible for submitting clinical trial data. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.3.1.5"
               }
            }
         ],
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-2b"
         ]
      },
      "(0008,1049)" : {
         "usage" : "M",
         "req" : "3",
         "name" : "Physician(s) of Record Identification Sequence",
         "module" : "General Study",
         "desc" : [
            "Identification of the physician(s) who are responsible for overall patient care at time of Study.",
            "One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Physician(s) of Record (0008,1048), if present."
         ],
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0231)[<2>](0070,0250)" : {
         "name" : "Italic",
         "req" : "1",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
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
         ],
         "entity" : "Presentation State"
      },
      "(0008,0030)" : {
         "usage" : "M",
         "name" : "Study Time",
         "req" : "2",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "Time the Study started.",
         "entity" : "Study"
      },
      "(0070,0086)[<0>](0040,1102)" : {
         "module" : "Presentation State Identification",
         "desc" : "Person's mailing address",
         "mod_tables" : [
            "table_C.11.10-1",
            "table_10-12",
            "table_10-1"
         ],
         "entity" : "Presentation State",
         "req" : "3",
         "name" : "Person's Address",
         "usage" : "M"
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
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "req" : "1",
         "name" : "Fill Mode"
      },
      "(0070,0402)[<0>](0020,000d)" : {
         "module" : "Presentation State Blending",
         "mod_tables" : [
            "table_C.11.14-1"
         ],
         "desc" : "Unique identifier for the Study that contains the images, which may differ from the Study in which the presentation state is contained.",
         "entity" : "Presentation State",
         "name" : "Study Instance UID",
         "req" : "1",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a162)" : {
         "req" : "1C",
         "name" : "Rational Numerator Value",
         "usage" : "M",
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
         "module" : "General Series"
      },
      "(0008,1062)" : {
         "usage" : "M",
         "name" : "Physician(s) Reading Study Identification Sequence",
         "req" : "3",
         "module" : "General Study",
         "desc" : "Identification of the physician(s) reading the Study. One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Name of Physician(s) Reading Study (0008,1060), if present.",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study"
      },
      "(0020,000d)" : {
         "usage" : "M",
         "req" : "1",
         "name" : "Study Instance UID",
         "module" : "General Study",
         "desc" : "Unique identifier for the Study.",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study"
      },
      "(fffa,fffa)[<0>](0400,0401)" : {
         "req" : "3",
         "name" : "Digital Signature Purpose Code Sequence",
         "usage" : "M",
         "desc" : [
            "The purpose of this Digital Signature.",
            "Only a single Item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Presentation State",
         "module" : "SOP Common"
      },
      "(0070,005a)[<0>](0070,0100)" : {
         "req" : "1",
         "name" : "Presentation Size Mode",
         "usage" : "M",
         "module" : "Displayed Area",
         "mod_tables" : [
            "table_C.10-4"
         ],
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
         "entity" : "Presentation State"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a30a)" : {
         "req" : "1C",
         "name" : "Numeric Value",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "entity" : "Series"
      },
      "(0018,0015)" : {
         "module" : "General Series",
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
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "name" : "Body Part Examined",
         "req" : "3"
      },
      "(0070,0402)[<0>](0028,1053)" : {
         "desc" : [
            "m in the equation specified by Rescale Intercept (0028,1052).",
            "Required if Rescale Intercept is present."
         ],
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.11-1b"
         ],
         "entity" : "Presentation State",
         "module" : "Presentation State Blending",
         "req" : "1C",
         "name" : "Rescale Slope",
         "usage" : "M"
      },
      "(0070,0402)[<0>](0070,0405)" : {
         "req" : "1",
         "name" : "Blending Position",
         "usage" : "M",
         "desc" : [
            "Whether or not the contents of the Item represent the superimposed or underlying image set.",
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "SUPERIMPOSED",
                     null
                  ],
                  [
                     "UNDERLYING",
                     null
                  ]
               ]
            }
         ],
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.11.14-1"
         ],
         "module" : "Presentation State Blending"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0231)[<2>](0070,0227)" : {
         "desc" : "Font name in a standard type.",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "module" : "Graphic Annotation",
         "name" : "Font Name",
         "req" : "3",
         "usage" : "C - Required if Graphic Annotations are to be applied"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0033)" : {
         "usage" : "M",
         "name" : "Universal Entity ID Type",
         "req" : "1C",
         "module" : "Patient",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "entity" : "Patient"
      },
      "(0070,0402)[<0>](0028,3000)[<1>](0028,3004)" : {
         "module" : "Presentation State Blending",
         "desc" : [
            "Specifies the output values of this Modality LUT.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.11.1.1.2",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ],
            "Required if the Modality LUT Sequence (0028,3000) is sent."
         ],
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.11-1b"
         ],
         "entity" : "Presentation State",
         "req" : "1C",
         "name" : "Modality LUT Type",
         "usage" : "M"
      },
      "(0010,0010)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "Patient's full name.",
         "entity" : "Patient",
         "req" : "2",
         "name" : "Patient's Name",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1155)" : {
         "usage" : "M",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "General Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a122)" : {
         "name" : "Time",
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series"
      },
      "(0018,a001)[<0>](0018,1000)" : {
         "entity" : "Presentation State",
         "desc" : "Manufacturer's serial number of the equipment that contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Device Serial Number",
         "req" : "3"
      },
      "(0070,0404)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0020)" : {
         "usage" : "M",
         "name" : "Data Elements Signed",
         "req" : "1",
         "entity" : "Presentation State",
         "desc" : [
            "A list of Data Element Tags in the order they appear at the top level of the referenced SOP Instance that identify the Data Elements used in creating the MAC. See ",
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
            "table_C.11.14-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Presentation State Blending"
      },
      "(0012,0071)" : {
         "module" : "Clinical Trial Series",
         "entity" : "Series",
         "desc" : [
            "An identifier of the series in the context of a clinical trial. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.3.2.1.2",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "usage" : "U",
         "name" : "Clinical Trial Series ID",
         "req" : "3"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0274)" : {
         "entity" : "Presentation State",
         "desc" : [
            "The alignment of the ticks with respect to the line.",
            {
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
               ],
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            },
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
            "Required if Compound Graphic Type (0070,0294) equals RULER, AXIS or CROSSHAIR."
         ],
         "mod_tables" : [
            "table_C.10-5"
         ],
         "module" : "Graphic Annotation",
         "name" : "Tick Alignment",
         "req" : "1C",
         "usage" : "C - Required if Graphic Annotations are to be applied"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0232)[<2>](0070,0252)" : {
         "module" : "Graphic Annotation",
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
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "entity" : "Presentation State",
         "name" : "Pattern Off Color CIELab Value",
         "req" : "3",
         "usage" : "C - Required if Graphic Annotations are to be applied"
      },
      "(0070,0060)" : {
         "usage" : "C - Required if Graphic Annotation Module is present",
         "req" : "1",
         "name" : "Graphic Layer Sequence",
         "module" : "Graphic Layer",
         "desc" : [
            "A sequence of Items each of which represents a single layer in which overlays, curves, graphics or text may be rendered.",
            "One or more Items shall be included in this sequence.",
            "An Item is required for each layer referenced from the Graphic Annotation Module or the Overlay Activation Module."
         ],
         "mod_tables" : [
            "table_C.10-7"
         ],
         "entity" : "Presentation State"
      },
      "(0070,005a)[<0>](0008,1140)[<1>](0062,000b)" : {
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "mod_tables" : [
            "table_C.10-4",
            "table_10-3"
         ],
         "entity" : "Presentation State",
         "module" : "Displayed Area",
         "usage" : "M",
         "req" : "1C",
         "name" : "Referenced Segment Number"
      },
      "(0070,0234)[<0>](0070,0295)" : {
         "module" : "Graphic Group",
         "desc" : "A unique number identifying the Graphic Group, i.e., the combined graphic object.",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.10-12"
         ],
         "usage" : "U",
         "req" : "1",
         "name" : "Graphic Group ID"
      },
      "(0038,0064)[<0>](0040,0032)" : {
         "req" : "1C",
         "name" : "Universal Entity ID",
         "usage" : "U",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "Study"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)" : {
         "name" : "Referenced SOP Sequence",
         "req" : "1C",
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
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0008,0201)" : {
         "usage" : "M",
         "req" : "3",
         "name" : "Timezone Offset From UTC",
         "entity" : "Presentation State",
         "desc" : [
            "Contains the offset from UTC to the timezone for all DA and TM Attributes present in this SOP Instance, and for all DT Attributes present in this SOP Instance that do not contain an explicitly encoded timezone offset.",
            "Encoded as an ASCII string in the format \"&ZZXX\". The components of this string, from left to right, are & = \"+\" or \"-\", and ZZ = Hours and XX = Minutes of offset. Leading space characters shall not be present.",
            "The offset for UTC shall be +0000; -0000 shall not be used.",
            {
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
                           "el" : "listitem",
                           "content" : [
                              "\n                      ",
                              {
                                 "el" : "para",
                                 "content" : [
                                    "This Attribute does not apply to values with a DT Value Representation, that contains an explicitly encoded timezone offset."
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
                                    "The corrected time may cross a 24 hour boundary. For example, if Local Time = 1.00 a.m. and Offset = +0200, then UTC = 11.00 p.m. (23.00) the day before."
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
                                 "content" : [
                                    "The \"+\" sign may not be omitted."
                                 ],
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
                     "content" : [
                        "UTC = 5.00 a.m."
                     ],
                     "el" : "para"
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
                     "el" : "para",
                     "content" : [
                        "Offset = -0200"
                     ]
                  },
                  "\n                "
               ]
            },
            "The local timezone offset is undefined if this Attribute is absent."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0287)[<2>](0070,0288)" : {
         "name" : "Tick Position",
         "req" : "1",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "desc" : "The position of the tick in the range 0.0 (start point) to 1.0 (end point).",
         "entity" : "Presentation State"
      },
      "(0040,0280)" : {
         "desc" : "User-defined comments on the Performed Procedure Step.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "entity" : "Series",
         "module" : "General Series",
         "req" : "3",
         "name" : "Comments on the Performed Procedure Step",
         "usage" : "M"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)[<2>](0070,0245)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "req" : "1",
         "name" : "Shadow Offset X",
         "module" : "Graphic Annotation",
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
         ],
         "entity" : "Presentation State"
      },
      "(0400,0561)[<0>](0400,0550)[0](gggg,eeee)" : {
         "usage" : "M",
         "name" : "Any Attribute from the main data set that was modified or removed.",
         "req" : "1",
         "module" : "SOP Common",
         "desc" : "May include Sequence Attributes and their Items.",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "usage" : "M",
         "name" : "Local Namespace Entity ID",
         "req" : "1C",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "Patient"
      },
      "(0070,0001)[<0>](0070,0209)" : {
         "module" : "Graphic Annotation",
         "desc" : [
            "A sequence of Items that describe Compound Graphics.",
            "One or more Items are permitted in this sequence.",
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
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "req" : "3",
         "name" : "Compound Graphic Sequence"
      },
      "(0008,1049)[<0>](0040,1102)" : {
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Person's mailing address",
         "entity" : "Study",
         "usage" : "M",
         "req" : "3",
         "name" : "Person's Address"
      },
      "(0100,0410)" : {
         "usage" : "M",
         "req" : "3",
         "name" : "SOP Instance Status",
         "module" : "SOP Common",
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
                     "el" : "para",
                     "content" : [
                        "Proper use of these flags is specified in Security Profiles. Implementations that do not conform to such Security Profiles may not necessarily handle these flags properly."
                     ]
                  },
                  "\n                "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Presentation State"
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
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "req" : "1C",
         "name" : "Font Name Type"
      },
      "(0008,1040)" : {
         "usage" : "M",
         "req" : "3",
         "name" : "Institutional Department Name",
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "desc" : "Department in the institution where the equipment that produced the composite instances is located.",
         "entity" : "Equipment"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0231)" : {
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "desc" : [
            "Sequence that describes the text style.",
            "Only a single item shall be included in this sequence."
         ],
         "entity" : "Presentation State",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "name" : "Text Style Sequence",
         "req" : "3"
      },
      "(0070,0402)[<0>](0028,3110)[<1>](0008,1140)" : {
         "module" : "Presentation State Blending",
         "desc" : [
            "Sequence of Items identifying images that are defined in the enclosing Item of Blending Sequence (0070,0402), to which this VOI LUT or Window Center and Width applies.",
            "One or more Items shall be included in this sequence.",
            "Required if the VOI LUT transformation in this Item does not apply to all the images and frames in the enclosing Item of Blending Sequence (0070,0402)."
         ],
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.11.14-1"
         ],
         "usage" : "M",
         "req" : "1C",
         "name" : "Referenced Image Sequence"
      },
      "(0018,a001)[<0>](0018,1050)" : {
         "module" : "SOP Common",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Spatial Resolution",
         "req" : "3"
      },
      "(0070,005a)[<0>](0008,1140)" : {
         "req" : "1C",
         "name" : "Referenced Image Sequence",
         "usage" : "M",
         "module" : "Displayed Area",
         "desc" : [
            "The subset of images and frames listed in the Presentation State Relationship Module, to which this displayed area selection applies.",
            "One or more Items shall be included in this sequence.",
            "Required if the displayed area selection in this Item does not apply to all the images and frames listed in the Presentation State Relationship Module."
         ],
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.10-4"
         ]
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0232)[<2>](0070,0245)" : {
         "entity" : "Presentation State",
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
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "module" : "Graphic Annotation",
         "name" : "Shadow Offset X",
         "req" : "1",
         "usage" : "C - Required if Graphic Annotations are to be applied"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0031)" : {
         "req" : "1C",
         "name" : "Local Namespace Entity ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "Series",
         "module" : "General Series"
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Presentation State",
         "module" : "SOP Common",
         "req" : "1",
         "name" : "Reason for the Attribute Modification",
         "usage" : "M"
      },
      "(0008,1049)[<0>](0040,1103)" : {
         "usage" : "M",
         "name" : "Person's Telephone Numbers",
         "req" : "3",
         "desc" : "Person's telephone number(s)",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0020)" : {
         "entity" : "Presentation State",
         "desc" : {
            "list" : [
               [
                  "2",
                  null
               ]
            ],
            "title" : "Enumerated Values:",
            "type" : "variablelist"
         },
         "mod_tables" : [
            "table_C.10-5"
         ],
         "module" : "Graphic Annotation",
         "name" : "Graphic Dimensions",
         "req" : "1",
         "usage" : "C - Required if Graphic Annotations are to be applied"
      },
      "(0040,a390)[<0>](0040,e010)" : {
         "module" : "SOP Common",
         "desc" : "Retrieval access path to HL7 Structured Document. Includes fully specified scheme, authority, path, and query in accordance with RFC 2396",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Presentation State",
         "usage" : "M",
         "name" : "Retrieve URI",
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a160)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "req" : "1C",
         "name" : "Text Value"
      },
      "(0010,2180)" : {
         "req" : "3",
         "name" : "Occupation",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Occupation of the Patient.",
         "entity" : "Study",
         "module" : "Patient Study"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)[<2>](0070,0258)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "req" : "1",
         "name" : "Shadow Opacity",
         "module" : "Graphic Annotation",
         "entity" : "Presentation State",
         "desc" : "Encodes the shadow opacity. The value is encoded as floating point alpha value (0.0-1.0).",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ]
      },
      "(0070,0060)[<0>](0070,0066)" : {
         "module" : "Graphic Layer",
         "mod_tables" : [
            "table_C.10-7"
         ],
         "desc" : [
            "A default single gray unsigned value in which it is recommended that the layer be rendered on a monochrome display. The units are specified in P-Values from a minimum of 0000H (black) up to a maximum of FFFFH (white).",
            {
               "content" : [
                  "\n                  ",
                  {
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
         "entity" : "Presentation State",
         "usage" : "C - Required if Graphic Annotation Module is present",
         "name" : "Graphic Layer Recommended Display Grayscale Value",
         "req" : "3"
      },
      "(0010,1002)[<0>](0010,0020)" : {
         "req" : "1",
         "name" : "Patient ID",
         "usage" : "M",
         "desc" : "An identification number or code used to identify the patient.",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0012,0050)" : {
         "module" : "Clinical Trial Study",
         "desc" : [
            "An identifier specifying the one or more studies that are grouped together as a clinical time point or submission in a clinical trial. See ",
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
         "entity" : "Study",
         "req" : "2",
         "name" : "Clinical Trial Time Point ID",
         "usage" : "U"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0015)" : {
         "module" : "Graphic Annotation",
         "desc" : [
            "Flag to indicate whether or not a visible indication (such as a line or arrow) of the relationship between the text and the anchor point is to be displayed.",
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
            "Required if Anchor Point (0070,0014) is present."
         ],
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "req" : "1C",
         "name" : "Anchor Point Visibility",
         "usage" : "C - Required if Graphic Annotations are to be applied"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a168)" : {
         "module" : "General Series",
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
         "entity" : "Series",
         "usage" : "M",
         "name" : "Concept Code Sequence",
         "req" : "1C"
      },
      "(0012,0042)" : {
         "name" : "Clinical Trial Subject Reading ID",
         "req" : "1C",
         "usage" : "U",
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
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
         ],
         "mod_tables" : [
            "table_C.7-2b"
         ]
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0232)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "name" : "Line Style Sequence",
         "req" : "3",
         "module" : "Graphic Annotation",
         "desc" : [
            "Sequence that describes the line style.",
            "Only a single item shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "entity" : "Presentation State"
      },
      "(0018,a001)[<0>](0008,0081)" : {
         "usage" : "M",
         "name" : "Institution Address",
         "req" : "3",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Address of the institution where the equipment that contributed to the composite instance is located.",
         "entity" : "Presentation State"
      },
      "(0040,a390)[<0>](0008,1155)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Presentation State",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M"
      },
      "(0400,0561)" : {
         "module" : "SOP Common",
         "entity" : "Presentation State",
         "desc" : [
            "Sequence of Items containing all attributes that were removed or replaced by other values in the main data set.",
            "One or more Items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Original Attributes Sequence"
      },
      "(0008,001a)" : {
         "name" : "Related General SOP Class UID",
         "req" : "3",
         "usage" : "M",
         "entity" : "Presentation State",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0008,1052)[<0>](0008,0082)" : {
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "req" : "1C",
         "name" : "Institution Code Sequence"
      },
      "(0040,0275)[<0>](0032,1064)" : {
         "desc" : [
            "A sequence that conveys the Procedure Type of the requested procedure.",
            "Only a single Item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "name" : "Requested Procedure Code Sequence",
         "req" : "3"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0261)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "req" : "1C",
         "name" : "Gap Length",
         "module" : "Graphic Annotation",
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
                     "linkend" : "sect_C.10.5.1.3",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Required if Compound Graphic Type (0070,0294) equals CUTLINE, INFINITELINE or CROSSHAIR."
         ],
         "entity" : "Presentation State"
      },
      "(0028,0108)" : {
         "name" : "Smallest Pixel Value in Series",
         "req" : "3",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : "The minimum value of all images in this Series.",
         "entity" : "Series"
      },
      "(0008,0051)[<0>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "req" : "1C",
         "usage" : "M",
         "module" : "General Study",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ]
      },
      "(0070,0404)[<0>](0008,1115)[<1>](0040,e011)" : {
         "module" : "Presentation State Blending",
         "entity" : "Presentation State",
         "desc" : "Unique identifier of the system where the Composite Object(s) may be retrieved on the network.",
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Retrieve Location UID"
      },
      "(0010,0024)[<0>](0040,0032)" : {
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
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "usage" : "M",
         "req" : "3",
         "name" : "Universal Entity ID"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0232)[<2>](0070,0258)" : {
         "module" : "Graphic Annotation",
         "desc" : "Encodes the shadow opacity. The value is encoded as floating point alpha value (0.0-1.0).",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "entity" : "Presentation State",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "req" : "1",
         "name" : "Shadow Opacity"
      },
      "(fffa,fffa)[<0>](0400,0120)" : {
         "module" : "SOP Common",
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
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1",
         "name" : "Signature",
         "usage" : "M"
      },
      "(0010,2294)" : {
         "desc" : [
            "Information identifying an animal within a breed registry.",
            "Zero or more Items shall be included in this sequence.",
            "Required if the patient is an animal."
         ],
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "usage" : "M",
         "name" : "Breed Registration Sequence",
         "req" : "2C"
      },
      "(0070,005a)[<0>](0070,0052)" : {
         "entity" : "Presentation State",
         "desc" : [
            "The top left (after spatial transformation) pixel in the referenced image to be displayed, given as column\\row. Column is the horizontal (before spatial transformation) offset (X) and row is the vertical (before spatial transformation) offset (Y) relative to the origin of the pixel data before spatial transformation, which is 1\\1. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "figure_C.10.4-1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "mod_tables" : [
            "table_C.10-4"
         ],
         "module" : "Displayed Area",
         "usage" : "M",
         "req" : "1",
         "name" : "Displayed Area Top Left Hand Corner"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0232)[<2>](0070,0252)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "name" : "Pattern Off Color CIELab Value",
         "req" : "3",
         "module" : "Graphic Annotation",
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
         "entity" : "Presentation State"
      },
      "(0040,0275)[<0>](0040,0008)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "desc" : "Sequence describing the Scheduled Protocol following a specific coding scheme. One or more Items are permitted in this sequence.",
         "entity" : "Series",
         "name" : "Scheduled Protocol Code Sequence",
         "req" : "3",
         "usage" : "M"
      },
      "(0070,0402)[<0>](0028,3000)[<1>](0028,3003)" : {
         "req" : "3",
         "name" : "LUT Explanation",
         "usage" : "M",
         "entity" : "Presentation State",
         "desc" : "Free form text explanation of the meaning of the LUT.",
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.11-1b"
         ],
         "module" : "Presentation State Blending"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)[<2>](0070,0248)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "name" : "Underlined",
         "req" : "1",
         "module" : "Graphic Annotation",
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
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "entity" : "Presentation State"
      },
      "(0070,0086)[<0>](0008,0082)" : {
         "module" : "Presentation State Identification",
         "mod_tables" : [
            "table_C.11.10-1",
            "table_10-12",
            "table_10-1"
         ],
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Presentation State",
         "req" : "1C",
         "name" : "Institution Code Sequence",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a043)" : {
         "module" : "General Series",
         "entity" : "Series",
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
         "name" : "Concept Name Code Sequence",
         "req" : "1"
      },
      "(0028,1203)" : {
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
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.7-22a"
         ],
         "module" : "Palette Color LUT",
         "usage" : "M",
         "req" : "1C",
         "name" : "Blue Palette Color Lookup Table Data"
      },
      "(0070,0001)[<0>](0008,1140)[<1>](0008,1160)" : {
         "entity" : "Presentation State",
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
            "table_C.10-5",
            "table_10-3"
         ],
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "name" : "Referenced Frame Number",
         "req" : "1C"
      },
      "(0070,0234)" : {
         "module" : "Graphic Group",
         "desc" : [
            "Sequence that describes the combined graphic object.",
            "One or more Items shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.10-12"
         ],
         "entity" : "Presentation State",
         "usage" : "U",
         "req" : "1",
         "name" : "Graphic Group Sequence"
      },
      "(0010,0024)[<0>](0040,0036)" : {
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
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "req" : "3",
         "name" : "Assigning Facility Sequence",
         "usage" : "M"
      },
      "(0008,0096)[<0>](0008,0080)" : {
         "module" : "General Study",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "usage" : "M",
         "req" : "1C",
         "name" : "Institution Name"
      },
      "(0008,1052)[<0>](0040,1103)" : {
         "usage" : "M",
         "req" : "3",
         "name" : "Person's Telephone Numbers",
         "desc" : "Person's telephone number(s)",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series"
      },
      "(0070,0083)" : {
         "name" : "Presentation Creation Time",
         "req" : "1",
         "usage" : "M",
         "module" : "Presentation State Identification",
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
         ],
         "entity" : "Presentation State"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a161)" : {
         "usage" : "M",
         "req" : "1C",
         "name" : "Floating Point Value",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0008,0096)[<0>](0040,1102)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Person's mailing address",
         "entity" : "Study",
         "module" : "General Study",
         "usage" : "M",
         "name" : "Person's Address",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a160)" : {
         "name" : "Text Value",
         "req" : "1C",
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
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1155)" : {
         "usage" : "M",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "General Series"
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
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "name" : "Major Ticks Sequence",
         "req" : "1C"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1102)" : {
         "module" : "SOP Common",
         "desc" : "Person's mailing address",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "req" : "3",
         "name" : "Person's Address",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0018,1020)" : {
         "req" : "3",
         "name" : "Software Versions",
         "usage" : "M",
         "entity" : "Presentation State",
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
         "module" : "SOP Common"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a121)" : {
         "entity" : "Series",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "usage" : "M",
         "req" : "1C",
         "name" : "Date"
      },
      "(0008,1062)[<0>](0040,1102)" : {
         "usage" : "M",
         "req" : "3",
         "name" : "Person's Address",
         "desc" : "Person's mailing address",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study"
      },
      "(0010,0024)[<0>](0040,0039)" : {
         "module" : "Patient",
         "entity" : "Patient",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Assigning Jurisdiction Code Sequence",
         "req" : "3",
         "usage" : "M"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0233)[<2>](0070,0252)" : {
         "name" : "Pattern Off Color CIELab Value",
         "req" : "3",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5c"
         ],
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
         "entity" : "Presentation State",
         "module" : "Graphic Annotation"
      },
      "(0008,1052)[<0>](0008,0081)" : {
         "entity" : "Series",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series",
         "req" : "3",
         "name" : "Institution Address",
         "usage" : "M"
      },
      "(0008,1072)[<0>](0040,1101)" : {
         "module" : "General Series",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "req" : "1",
         "name" : "Person Identification Code Sequence",
         "usage" : "M"
      },
      "(0070,0087)[<0>](0008,0006)" : {
         "entity" : "Presentation State",
         "desc" : "The language in which Content Description (0070,0081) within this sequence item is written. A single Item shall be present.",
         "mod_tables" : [
            "table_C.11.10-1",
            "table_10-12"
         ],
         "module" : "Presentation State Identification",
         "usage" : "M",
         "name" : "Language Code Sequence",
         "req" : "1"
      },
      "(0032,1034)" : {
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : [
            "Institutional department where the request initiated.",
            "Only a single item is permitted in this sequence."
         ],
         "entity" : "Study",
         "usage" : "M",
         "req" : "3",
         "name" : "Requesting Service Code Sequence"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0226)" : {
         "req" : "1",
         "name" : "Compound Graphic Instance ID",
         "usage" : "C - Required if Graphic Annotations are to be applied",
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
         "mod_tables" : [
            "table_C.10-5"
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0035)" : {
         "module" : "Patient",
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
                     "content" : [
                        "Equivalent to HL7 v2 CX component 5 (Identifier Type Code)."
                     ]
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "entity" : "Patient",
         "usage" : "M",
         "req" : "3",
         "name" : "Identifier Type Code"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0033)" : {
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
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "name" : "Universal Entity ID Type",
         "req" : "1C"
      },
      "(0070,0402)[<0>](0028,3000)" : {
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.11-1b"
         ],
         "desc" : [
            "Defines a sequence of Modality LUTs.",
            "Only a single Item shall be included in this sequence.",
            "Shall not be present if Rescale Intercept (0028,1052) is present."
         ],
         "entity" : "Presentation State",
         "module" : "Presentation State Blending",
         "usage" : "M",
         "req" : "1C",
         "name" : "Modality LUT Sequence"
      },
      "(0008,1084)" : {
         "req" : "3",
         "name" : "Admitting Diagnoses Code Sequence",
         "usage" : "U",
         "module" : "Patient Study",
         "desc" : [
            "A sequence that conveys the admitting diagnosis (diagnoses).",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "entity" : "Study"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1160)" : {
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
         ],
         "entity" : "Series",
         "module" : "General Series",
         "req" : "1C",
         "name" : "Referenced Frame Number",
         "usage" : "M"
      },
      "(0070,0404)[<0>](0008,1115)" : {
         "usage" : "M",
         "req" : "1",
         "name" : "Referenced Series Sequence",
         "module" : "Presentation State Blending",
         "desc" : [
            "Sequence of Items where each Item includes the Attributes of a Series containing referenced Composite Object(s).",
            "One or more Items shall be included in this sequence"
         ],
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.17-3"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,08ea)" : {
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
         ],
         "entity" : "Series",
         "req" : "1C",
         "name" : "Measurement Units Code Sequence",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a124)" : {
         "usage" : "M",
         "req" : "1C",
         "name" : "UID",
         "module" : "General Series",
         "entity" : "Series",
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
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a123)" : {
         "entity" : "Series",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "usage" : "M",
         "name" : "Person Name",
         "req" : "1C"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)[<2>](0070,0241)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied",
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
         "entity" : "Presentation State",
         "module" : "Graphic Annotation"
      },
      "(0070,005a)" : {
         "req" : "1",
         "name" : "Displayed Area Selection Sequence",
         "usage" : "M",
         "module" : "Displayed Area",
         "desc" : [
            "A sequence of Items each of which describes the displayed area selection for a group of images or frames. Sufficient Items shall be present to describe every image and frame listed in the Presentation State Relationship Module.",
            "One or more Items shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.10-4"
         ],
         "entity" : "Presentation State"
      },
      "(0008,1080)" : {
         "desc" : "Description of the admitting diagnosis (diagnoses)",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "usage" : "U",
         "name" : "Admitting Diagnoses Description",
         "req" : "3"
      },
      "(0008,1090)" : {
         "usage" : "M",
         "req" : "3",
         "name" : "Manufacturer's Model Name",
         "module" : "General Equipment",
         "entity" : "Equipment",
         "desc" : "Manufacturer's model name of the equipment that produced the composite instances.",
         "mod_tables" : [
            "table_C.7-8"
         ]
      },
      "(0040,0275)[<0>](0008,0050)" : {
         "usage" : "M",
         "req" : "3",
         "name" : "Accession Number",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "desc" : "An identifier of the Imaging Service Request for this Requested Procedure.",
         "entity" : "Series"
      },
      "(0070,0402)[<0>](0028,3110)[<1>](0028,3010)[<2>](0028,3003)" : {
         "req" : "3",
         "name" : "LUT Explanation",
         "usage" : "M",
         "module" : "Presentation State Blending",
         "entity" : "Presentation State",
         "desc" : "Free form text explanation of the meaning of the LUT.",
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.11-2b"
         ]
      },
      "(0038,0010)" : {
         "module" : "Patient Study",
         "entity" : "Study",
         "desc" : "Identifier of the visit as assigned by the healthcare provider",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "name" : "Admission ID",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a168)" : {
         "module" : "General Series",
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
         "entity" : "Series",
         "usage" : "M",
         "req" : "1C",
         "name" : "Concept Code Sequence"
      },
      "(0070,0404)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "module" : "Presentation State Blending",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0032)" : {
         "usage" : "M",
         "req" : "3",
         "name" : "Universal Entity ID",
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
                     ]
                  },
                  "\n              "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient"
      },
      "(0010,1002)[<0>](0010,0021)" : {
         "name" : "Issuer of Patient ID",
         "req" : "3",
         "usage" : "M",
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
         ],
         "module" : "Patient"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0232)[<2>](0070,0285)" : {
         "name" : "Pattern Off Opacity",
         "req" : "3",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "module" : "Graphic Annotation",
         "entity" : "Presentation State",
         "desc" : "Encodes the background opacity. The value is encoded as floating point alpha value (0.0-1.0).",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ]
      },
      "(0018,a001)[<0>](0008,1070)" : {
         "req" : "3",
         "name" : "Operators' Name",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Name(s) of the operator(s) of the contributing equipment.",
         "entity" : "Presentation State",
         "module" : "SOP Common"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1160)" : {
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
         "module" : "General Series",
         "usage" : "M",
         "req" : "1C",
         "name" : "Referenced Frame Number"
      },
      "(0040,0253)" : {
         "usage" : "M",
         "req" : "3",
         "name" : "Performed Procedure Step ID",
         "desc" : "User or equipment generated identifier of that part of a Procedure that has been carried out within this step.",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "module" : "General Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a122)" : {
         "module" : "General Series",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "req" : "1C",
         "name" : "Time"
      },
      "(0070,0404)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0015)" : {
         "module" : "Presentation State Blending",
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "The algorithm used in generating the MAC.",
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
                  "\n                    ",
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
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "entity" : "Presentation State",
         "usage" : "M",
         "req" : "1",
         "name" : "MAC Algorithm"
      },
      "(0008,0110)" : {
         "module" : "SOP Common",
         "desc" : [
            "Sequence of items that map values of Coding Scheme Designator (0008,0102) to an external coding system registration, or to a private or local coding scheme.",
            "One or more Items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Presentation State",
         "usage" : "M",
         "name" : "Coding Scheme Identification Sequence",
         "req" : "3"
      },
      "(0010,2202)" : {
         "req" : "1C",
         "name" : "Patient Species Code Sequence",
         "usage" : "M",
         "desc" : [
            "The species of the patient.",
            "Only a single Item shall be included in this sequence.",
            "Required if the patient is an animal and if Patient Species Description (0010,2201) is not present. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0008,0096)[<0>](0008,0082)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Study",
         "module" : "General Study",
         "req" : "1C",
         "name" : "Institution Code Sequence",
         "usage" : "M"
      },
      "(0070,0402)[<0>](0008,1115)[<1>](0008,1140)[<2>](0008,1160)" : {
         "req" : "1C",
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
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.11.11-1b",
            "table_10-3"
         ],
         "entity" : "Presentation State",
         "module" : "Presentation State Blending"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0232)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "name" : "Line Style Sequence",
         "req" : "3",
         "desc" : [
            "Sequence that describes the line style.",
            "Only a single item shall be included in this sequence."
         ],
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "module" : "Graphic Annotation"
      },
      "(0008,1111)[<0>](0008,1150)" : {
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-11"
         ]
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0232)[<2>](0070,0285)" : {
         "req" : "3",
         "name" : "Pattern Off Opacity",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "module" : "Graphic Annotation",
         "entity" : "Presentation State",
         "desc" : "Encodes the background opacity. The value is encoded as floating point alpha value (0.0-1.0).",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ]
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)[<2>](0070,0227)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "name" : "Font Name",
         "req" : "3",
         "desc" : "Font name in a standard type.",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "entity" : "Presentation State",
         "module" : "Graphic Annotation"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0273)" : {
         "req" : "1C",
         "name" : "Rotation Point",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "desc" : [
            "The rotation point of this Compound Graphic.",
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
            "Required if Rotation Angle (0070,0230) is present or if Compound Graphic Type (0070,0294) is CUTLINE or INFINITELINE."
         ],
         "entity" : "Presentation State"
      },
      "(0012,0010)" : {
         "usage" : "U",
         "name" : "Clinical Trial Sponsor Name",
         "req" : "1",
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
         "desc" : [
            "The name of the clinical trial sponsor. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.3.1.1"
               },
               "el" : "xref"
            },
            "."
         ],
         "mod_tables" : [
            "table_C.7-2b"
         ]
      },
      "(0018,a001)[<0>](0018,a002)" : {
         "name" : "Contribution DateTime",
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Presentation State",
         "desc" : "The Date & Time when the equipment contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,1072)[<0>](0008,0080)" : {
         "req" : "1C",
         "name" : "Institution Name",
         "usage" : "M",
         "entity" : "Series",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1150)" : {
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "module" : "General Series",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(0008,0015)" : {
         "module" : "SOP Common",
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
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Instance Coercion DateTime",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1150)" : {
         "module" : "General Series",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "entity" : "Series",
         "usage" : "M",
         "req" : "1",
         "name" : "Referenced SOP Class UID"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a30a)" : {
         "name" : "Numeric Value",
         "req" : "1C",
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
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0008,1030)" : {
         "req" : "3",
         "name" : "Study Description",
         "usage" : "M",
         "module" : "General Study",
         "entity" : "Study",
         "desc" : "Institution-generated description or classification of the Study (component) performed.",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0070,0404)[<0>](0008,1115)[<1>](0008,1199)" : {
         "module" : "Presentation State Blending",
         "desc" : [
            "References to Composite Object SOP Class/SOP Instance pairs that are part of the Study defined by Study Instance UID and the Series defined by Series Instance UID (0020,000E).",
            "One or more Items shall be included in this sequence."
         ],
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M",
         "name" : "Referenced SOP Sequence",
         "req" : "1"
      },
      "(0040,0275)[<0>](0040,0007)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "desc" : "Institution-generated description or classification of the Scheduled Procedure Step to be performed.",
         "entity" : "Series",
         "usage" : "M",
         "name" : "Scheduled Procedure Step Description",
         "req" : "3"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0004)" : {
         "desc" : [
            "Units of measure for the axes of the text anchor point annotation.",
            "Enumerated Values for Anchor Point Annotation Units (0070,0004) are the same as for Bounding Box Annotation Units (0070,0003).",
            "Required if Anchor Point (0070,0014) is present."
         ],
         "mod_tables" : [
            "table_C.10-5"
         ],
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "name" : "Anchor Point Annotation Units",
         "req" : "1C",
         "usage" : "C - Required if Graphic Annotations are to be applied"
      },
      "(0028,2000)" : {
         "entity" : "Presentation State",
         "desc" : "An ICC Profile encoding the transformation of device-dependent color stored pixel values into PCS-Values.",
         "mod_tables" : [
            "table_C.11.15-1"
         ],
         "module" : "ICC Profile",
         "name" : "ICC Profile",
         "req" : "1",
         "usage" : "M"
      },
      "(0070,0404)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)" : {
         "usage" : "M",
         "name" : "Referenced SOP Instance MAC Sequence",
         "req" : "3",
         "desc" : [
            "A MAC Calculation from data in the referenced SOP Instance that can be used as a data integrity check.",
            "Only a single Item is permitted in this Sequence.",
            {
               "content" : [
                  "\n                    ",
                  {
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
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Presentation State Blending"
      },
      "(0070,0402)[<0>](0028,3110)[<1>](0008,1140)[<2>](0062,000b)" : {
         "req" : "1C",
         "name" : "Referenced Segment Number",
         "usage" : "M",
         "module" : "Presentation State Blending",
         "mod_tables" : [
            "table_C.11.14-1",
            "table_10-3"
         ],
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "entity" : "Presentation State"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)" : {
         "module" : "General Series",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "name" : "Referenced SOP Sequence",
         "usage" : "M"
      },
      "(0040,0251)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "desc" : "Time at which the Performed Procedure Step ended.",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "req" : "3",
         "name" : "Performed Procedure Step End Time"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)[<2>](0070,0247)" : {
         "req" : "1",
         "name" : "Shadow Color CIELab Value",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "desc" : [
            "A color triplet value used to encode the Shadow Color. The units are specified in PCS-Values, and the value is encoded as CIELab. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.10.7.1.1"
               }
            },
            "."
         ],
         "entity" : "Presentation State"
      },
      "(0040,0254)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "desc" : "Institution-generated description or classification of the Procedure Step that was performed.",
         "entity" : "Series",
         "module" : "General Series",
         "req" : "3",
         "name" : "Performed Procedure Step Description",
         "usage" : "M"
      },
      "(0038,0014)[<0>](0040,0033)" : {
         "usage" : "U",
         "name" : "Universal Entity ID Type",
         "req" : "1C",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a",
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
         "entity" : "Study"
      },
      "(0012,0083)" : {
         "req" : "3",
         "name" : "Consent for Clinical Trial Use Sequence",
         "usage" : "U",
         "desc" : [
            "A Sequence that conveys information about consent for Clinical Trial use of the composite instances within this Study.",
            "One or more Items are permitted in this sequence.",
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
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "entity" : "Study",
         "module" : "Clinical Trial Study"
      },
      "(0070,0404)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0010)" : {
         "name" : "MAC Calculation Transfer Syntax UID",
         "req" : "1",
         "usage" : "M",
         "module" : "Presentation State Blending",
         "entity" : "Presentation State",
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
                                    "This does not constrain the transfer syntax used to transmit the object."
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
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0070,0001)[<0>](0008,1140)[<1>](0008,1150)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.10-5",
            "table_10-3",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Presentation State",
         "module" : "Graphic Annotation"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a160)" : {
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
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0018,1201)" : {
         "usage" : "M",
         "name" : "Time of Last Calibration",
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
         "entity" : "Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment"
      },
      "(fffa,fffa)[<0>](0400,0005)" : {
         "usage" : "M",
         "req" : "1",
         "name" : "MAC ID Number",
         "module" : "SOP Common",
         "entity" : "Presentation State",
         "desc" : "A number used to identify which MAC Parameters Sequence item was used in the calculation of this Digital Signature.",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)[<2>](0070,0244)" : {
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
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "module" : "Graphic Annotation",
         "name" : "Shadow Style",
         "req" : "1",
         "usage" : "C - Required if Graphic Annotations are to be applied"
      },
      "(0010,0024)[<0>](0040,0035)" : {
         "usage" : "M",
         "req" : "3",
         "name" : "Identifier Type Code",
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
         ],
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0023)" : {
         "desc" : [
            [
               "The shape of graphic that is to be drawn. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.10.5.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "mod_tables" : [
            "table_C.10-5"
         ],
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "req" : "1",
         "name" : "Graphic Type",
         "usage" : "C - Required if Graphic Annotations are to be applied"
      },
      "(0028,1221)" : {
         "module" : "Palette Color LUT",
         "desc" : [
            "Segmented Red Palette Color Lookup Table Data. Required if segmented data is used in an Image IOD; shall not be present in a Presentation State IOD or Color Palette IOD. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.9.2",
                  "xrefstyle" : "select: label"
               }
            },
            " for further explanation."
         ],
         "mod_tables" : [
            "table_C.7-22a"
         ],
         "entity" : "Presentation State",
         "name" : "Segmented Red Palette Color Lookup Table Data",
         "req" : "1C",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0020,000d)" : {
         "entity" : "Series",
         "desc" : "The unique identifier for the Study provided for this Requested Procedure.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "module" : "General Series",
         "usage" : "M",
         "req" : "3",
         "name" : "Study Instance UID"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0024)" : {
         "mod_tables" : [
            "table_C.10-5"
         ],
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
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "req" : "1C",
         "name" : "Graphic Filled"
      },
      "(0012,0020)" : {
         "name" : "Clinical Trial Protocol ID",
         "req" : "1",
         "usage" : "U",
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
         "entity" : "Patient",
         "module" : "Clinical Trial Subject"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0294)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "name" : "Compound Graphic Type",
         "req" : "1",
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
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "content" : [
                        "Implementers may add private graphic types."
                     ]
                  },
                  "\n                "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.10-5"
         ],
         "entity" : "Presentation State",
         "module" : "Graphic Annotation"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0082)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Presentation State",
         "req" : "1C",
         "name" : "Institution Code Sequence",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0033)" : {
         "req" : "1C",
         "name" : "Universal Entity ID Type",
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
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
         ]
      },
      "(0018,5100)" : {
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
         "entity" : "Series",
         "module" : "General Series",
         "req" : "2C",
         "name" : "Patient Position",
         "usage" : "M"
      },
      "(0008,1062)[<0>](0008,0080)" : {
         "req" : "1C",
         "name" : "Institution Name",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0233)" : {
         "name" : "Fill Style Sequence",
         "req" : "3",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "module" : "Graphic Annotation",
         "entity" : "Presentation State",
         "desc" : [
            "Sequence that describes the fill style.",
            "Only a single item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5c"
         ]
      },
      "(0070,0081)" : {
         "req" : "2",
         "name" : "Content Description",
         "usage" : "M",
         "module" : "Presentation State Identification",
         "desc" : "A description of the content of the SOP Instance.",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.11.10-1",
            "table_10-12"
         ]
      },
      "(0008,0096)[<0>](0040,1103)" : {
         "module" : "General Study",
         "desc" : "Person's telephone number(s)",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "usage" : "M",
         "name" : "Person's Telephone Numbers",
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)" : {
         "usage" : "M",
         "name" : "Referenced SOP Sequence",
         "req" : "1C",
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
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1150)" : {
         "usage" : "M",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a30a)" : {
         "usage" : "M",
         "name" : "Numeric Value",
         "req" : "1C",
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
         "module" : "General Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a123)" : {
         "entity" : "Series",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "name" : "Person Name",
         "req" : "1C",
         "usage" : "M"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)[<2>](0070,0250)" : {
         "desc" : [
            "Specifies whether or not the text shall be rendered italicized.",
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
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "module" : "Graphic Annotation",
         "name" : "Italic",
         "req" : "1",
         "usage" : "C - Required if Graphic Annotations are to be applied"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0233)[<2>](0070,0284)" : {
         "req" : "1",
         "name" : "Pattern On Opacity",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5c"
         ],
         "desc" : "Encodes the foreground opacity. The value is encoded as floating point alpha value (0.0-1.0).",
         "entity" : "Presentation State"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0231)[<2>](0070,0248)" : {
         "module" : "Graphic Annotation",
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
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "req" : "1",
         "name" : "Underlined"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "usage" : "M",
         "req" : "1C",
         "name" : "Universal Entity ID",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "Patient"
      },
      "(0012,0040)" : {
         "entity" : "Patient",
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
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject",
         "name" : "Clinical Trial Subject ID",
         "req" : "1C",
         "usage" : "U"
      },
      "(0010,0024)" : {
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "req" : "3",
         "name" : "Issuer of Patient ID Qualifiers Sequence"
      },
      "(0040,0275)[<0>](0032,1060)" : {
         "req" : "3",
         "name" : "Requested Procedure Description",
         "usage" : "M",
         "module" : "General Series",
         "desc" : "Institution-generated administrative description or classification of Requested Procedure.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0008,1110)" : {
         "module" : "General Series",
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
                  "attrs" : {
                     "linkend" : "sect_10.6.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "entity" : "Series",
         "usage" : "M",
         "req" : "3",
         "name" : "Referenced Study Sequence"
      },
      "(0020,9172)[<0>](0062,000b)" : {
         "entity" : "Presentation State",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "1C",
         "name" : "Referenced Segment Number"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0232)[<2>](0070,0255)" : {
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
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
                     "el" : "para"
                  },
                  "\n                      "
               ]
            },
            "Required if Line Dashing Style (0070,0254) has a value of DASHED."
         ],
         "entity" : "Presentation State",
         "name" : "Line Pattern",
         "req" : "1C",
         "usage" : "C - Required if Graphic Annotations are to be applied"
      },
      "(0008,1250)[<0>](0020,000e)" : {
         "usage" : "M",
         "name" : "Series Instance UID",
         "req" : "1",
         "desc" : "Instance UID of Related Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series"
      },
      "(0008,0051)[<0>](0040,0032)" : {
         "req" : "1C",
         "name" : "Universal Entity ID",
         "usage" : "M",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "module" : "General Study"
      },
      "(0008,0016)" : {
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
         ],
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "SOP Class UID",
         "req" : "1"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,08ea)" : {
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
         "module" : "General Series",
         "usage" : "M",
         "name" : "Measurement Units Code Sequence",
         "req" : "1C"
      },
      "(0010,2293)" : {
         "entity" : "Patient",
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
            "Zero or more Items shall be included in this sequence.",
            "Required if the patient is an animal."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "usage" : "M",
         "name" : "Patient Breed Code Sequence",
         "req" : "2C"
      },
      "(0070,005a)[<0>](0070,0102)" : {
         "usage" : "M",
         "name" : "Presentation Pixel Aspect Ratio",
         "req" : "1C",
         "module" : "Displayed Area",
         "desc" : [
            [
               "Ratio of the vertical size and the horizontal size of the pixels in the referenced image, to be used to display the referenced image, specified by a pair of integer values where the first value is the vertical pixel size and the second value is the horizontal pixel size. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.6.3.1.7",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Required if Presentation Pixel Spacing (0070,0101) is not present.",
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
                           "el" : "listitem",
                           "content" : [
                              "\n                      ",
                              {
                                 "content" : [
                                    "This value may be different from the aspect ratio specified by Pixel Aspect Ratio (0028,0034) in the referenced image, or implied by the values of Pixel Spacing (0028,0030) or Imager Pixel Spacing (0018,1164) specified in the referenced image, which are ignored."
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
                                    "This value must be specified even if the aspect ratio is 1:1."
                                 ],
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
            }
         ],
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.10-4"
         ]
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0287)[<2>](0070,0289)" : {
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "desc" : "The label of the tick.",
         "entity" : "Presentation State",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "req" : "1",
         "name" : "Tick Label"
      },
      "(0010,2297)" : {
         "module" : "Patient",
         "desc" : [
            "Name of person with medical decision making authority for the patient.",
            "Required if the patient is an animal. May be present otherwise."
         ],
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "Responsible Person",
         "req" : "2C"
      },
      "(0008,0096)[<0>](0040,1101)" : {
         "usage" : "M",
         "req" : "1",
         "name" : "Person Identification Code Sequence",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)" : {
         "module" : "General Series",
         "entity" : "Series",
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
         "req" : "1C",
         "name" : "Referenced SOP Sequence",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0032)" : {
         "usage" : "M",
         "req" : "1C",
         "name" : "Universal Entity ID",
         "entity" : "Series",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "module" : "General Series"
      },
      "(0070,0402)[<0>](0008,1115)[<1>](0008,1140)" : {
         "req" : "1",
         "name" : "Referenced Image Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.11.11-1b"
         ],
         "desc" : [
            "The set of images and frames to which the Presentation applies. These shall be of the Study defined by Study Instance UID (0020,000D) and the Series defined by Series Instance UID (0020,000E).",
            "One or more Items shall be included in this sequence.",
            "The referenced SOP Class shall be the same for all Images in any Item of this Referenced Series Sequence (0008,1115)."
         ],
         "entity" : "Presentation State",
         "module" : "Presentation State Blending"
      },
      "(fffa,fffa)[<0>](0400,0115)" : {
         "module" : "SOP Common",
         "entity" : "Presentation State",
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
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "req" : "1",
         "name" : "Certificate of Signer"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a123)" : {
         "usage" : "M",
         "name" : "Person Name",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0070,0402)[<0>](0008,1115)[<1>](0008,1140)[<2>](0008,1150)" : {
         "usage" : "M",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.11.11-1b",
            "table_10-3",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Presentation State",
         "module" : "Presentation State Blending"
      },
      "(0040,0275)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : [
            "Sequence that contains attributes from the Imaging Service Request.",
            "One or more Items are permitted in this sequence."
         ],
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "req" : "3",
         "name" : "Request Attributes Sequence"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0231)[<2>](0070,0258)" : {
         "name" : "Shadow Opacity",
         "req" : "1",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "module" : "Graphic Annotation",
         "entity" : "Presentation State",
         "desc" : "Encodes the shadow opacity. The value is encoded as floating point alpha value (0.0-1.0).",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ]
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0232)[<2>](0070,0247)" : {
         "req" : "1",
         "name" : "Shadow Color CIELab Value",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
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
         "entity" : "Presentation State"
      },
      "(4ffe,0001)[<0>](0400,0005)" : {
         "name" : "MAC ID Number",
         "req" : "1",
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : "A number, unique within this SOP Instance, used to identify this MAC Parameters Sequence (4FFE,0001) item from an Item of the Digital Signatures Sequence (FFFA,FFFA).",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Presentation State"
      },
      "(0010,0024)[<0>](0040,003a)" : {
         "req" : "3",
         "name" : "Assigning Agency or Department Code Sequence",
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(fffa,fffa)[<0>](0400,0110)" : {
         "usage" : "M",
         "req" : "1",
         "name" : "Certificate Type",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
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
         "entity" : "Presentation State",
         "module" : "SOP Common"
      },
      "(0008,0005)" : {
         "module" : "SOP Common",
         "entity" : "Presentation State",
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
         "usage" : "M",
         "req" : "1C",
         "name" : "Specific Character Set"
      },
      "(0070,0402)[<0>](0008,1115)[<1>](0020,000e)" : {
         "module" : "Presentation State Blending",
         "entity" : "Presentation State",
         "desc" : [
            "Unique identifier of a Series that is part of the Study defined by the Study Instance UID (0020,000D) in the enclosing data set.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "content" : [
                        "The Study Instance UID (0020,000D) value will be that of the presentation state itself, unless the macro is invoked from Blending Sequence (0070,0402) in the Presentation State Blending Module, in which case it will be explicitly specified."
                     ]
                  },
                  "\n                "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.11.11-1b"
         ],
         "name" : "Series Instance UID",
         "req" : "1",
         "usage" : "M"
      },
      "(0018,1030)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
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
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Protocol Name",
         "req" : "3",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a162)" : {
         "module" : "General Series",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "name" : "Rational Numerator Value",
         "req" : "1C",
         "usage" : "M"
      },
      "(0070,0404)[<0>](0008,1115)[<1>](0008,1199)[<2>](0040,a170)" : {
         "req" : "3",
         "name" : "Purpose of Reference Code Sequence",
         "usage" : "M",
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "One or more Items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "entity" : "Presentation State",
         "module" : "Presentation State Blending"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a121)" : {
         "usage" : "M",
         "name" : "Date",
         "req" : "1C",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "entity" : "Series"
      },
      "(0020,9172)[<0>](0008,1150)" : {
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Presentation State"
      },
      "(0070,0086)[<0>](0040,1101)" : {
         "module" : "Presentation State Identification",
         "entity" : "Presentation State",
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
         "name" : "Person Identification Code Sequence",
         "req" : "1",
         "usage" : "M"
      },
      "(0040,a390)" : {
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
         "entity" : "Presentation State",
         "module" : "SOP Common",
         "name" : "HL7 Structured Document Reference Sequence",
         "req" : "1C",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a163)" : {
         "entity" : "Series",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "usage" : "M",
         "req" : "1C",
         "name" : "Rational Denominator Value"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)[<2>](0070,0243)" : {
         "entity" : "Presentation State",
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
               "type" : "variablelist",
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
               ]
            },
            "Required if Bounding Box Top Left Hand Corner (0070,0010) is present."
         ],
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "name" : "Vertical Alignment",
         "req" : "3"
      },
      "(0070,0060)[<0>](0070,0002)" : {
         "mod_tables" : [
            "table_C.10-7"
         ],
         "desc" : [
            "A string that identifies the layer.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "This identifier may be used by other Attributes within the same presentation state instance to reference this layer. There is no requirement for the same identifiers to be used in different presentation states, and there is no mechanism for referencing layers in other presentation states. That is, a UID is not required."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "entity" : "Presentation State",
         "module" : "Graphic Layer",
         "req" : "1",
         "name" : "Graphic Layer",
         "usage" : "C - Required if Graphic Annotation Module is present"
      },
      "(0070,0404)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0404)" : {
         "module" : "Presentation State Blending",
         "mod_tables" : [
            "table_C.11.14-1",
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
                  "linkend" : "sect_C.12.1.1.3.1.2",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "entity" : "Presentation State",
         "usage" : "M",
         "name" : "MAC",
         "req" : "1"
      },
      "(0070,0402)[<0>](0028,3110)[<1>](0028,3010)" : {
         "usage" : "M",
         "req" : "1C",
         "name" : "VOI LUT Sequence",
         "module" : "Presentation State Blending",
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.11-2b"
         ],
         "desc" : [
            "Defines a sequence of VOI LUTs.",
            "One or more Items shall be included in this sequence.",
            "Required if Window Center (0028,1050) is not present. May be present otherwise."
         ],
         "entity" : "Presentation State"
      },
      "(0010,2210)" : {
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
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "name" : "Anatomical Orientation Type",
         "req" : "1C"
      },
      "(0012,0081)" : {
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "desc" : "Name of the Ethics Committee or Institutional Review Board (IRB) responsible for approval of the Clinical Trial. Required if Clinical Trial Protocol Ethics Committee Approval Number (0012,0082) is present.",
         "entity" : "Patient",
         "module" : "Clinical Trial Subject",
         "req" : "1C",
         "name" : "Clinical Trial Protocol Ethics Committee Name",
         "usage" : "U"
      },
      "(0008,1050)" : {
         "req" : "3",
         "name" : "Performing Physician's Name",
         "usage" : "M",
         "module" : "General Series",
         "desc" : "Name of the physician(s) administering the Series.",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0070,0087)" : {
         "req" : "3",
         "name" : "Alternate Content Description Sequence",
         "usage" : "M",
         "module" : "Presentation State Identification",
         "entity" : "Presentation State",
         "desc" : [
            "A sequence containing alternate descriptions suitable for presentation to the user, e.g., in different languages. One or more Items are permitted in this sequence.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "content" : [
                        "The values of Specific Character Set for the entire Data set need to be sufficient to encode all Items of this sequence correctly, e.g., using a single value with broad support such as UTF-8, or multiple values with escape sequences."
                     ]
                  },
                  "\n              "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.11.10-1",
            "table_10-12"
         ]
      },
      "(0008,1250)[<0>](0040,a170)" : {
         "req" : "2",
         "name" : "Purpose of Reference Code Sequence",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "Zero or more Items shall be included in this sequence.",
            "When absent, implies that the reason for the reference is unknown."
         ],
         "entity" : "Series"
      },
      "(0020,9172)" : {
         "desc" : [
            "The set of images or other composite SOP Instances that were converted to this instance.",
            "If this instance was converted from a specific frame in the source instance, the reference shall include the Frame Number.",
            "One or more Items shall be included in this sequence.",
            "Required if this instance was created by conversion, and Conversion Source Attributes Sequence (0020,9172) is not present in an Item of Shared Functional Groups Sequence (5200,9229) or Per-Frame Functional Groups Sequence (5200,9230)."
         ],
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "req" : "1C",
         "name" : "Conversion Source Attributes Sequence",
         "usage" : "M"
      },
      "(0008,1060)" : {
         "entity" : "Study",
         "desc" : "Names of the physician(s) reading the Study.",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "usage" : "M",
         "req" : "3",
         "name" : "Name of Physician(s) Reading Study"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)" : {
         "req" : "3",
         "name" : "Assigning Facility Sequence",
         "usage" : "M",
         "entity" : "Patient",
         "desc" : [
            "The place or location identifier where the identifier was first assigned to the patient. This component is not an inherent part of the identifier but rather part of the history of the identifier.",
            "Only a single Item is permitted in this sequence.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "Equivalent to HL7 v2 CX component 6 (Assigning Facility)."
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
         "module" : "Patient"
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1155)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Series",
         "module" : "General Series",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M"
      },
      "(0028,1101)" : {
         "name" : "Red Palette Color Lookup Table Descriptor",
         "req" : "1",
         "usage" : "M",
         "entity" : "Presentation State",
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
         "mod_tables" : [
            "table_C.7-22a"
         ],
         "module" : "Palette Color LUT"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0230)" : {
         "desc" : [
            "The rotation of this Compound Graphic in degrees. Value shall be in degrees, between 0 and 360.",
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
            ]
         ],
         "mod_tables" : [
            "table_C.10-5"
         ],
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "name" : "Rotation Angle",
         "req" : "3"
      },
      "(0028,0303)" : {
         "usage" : "M",
         "name" : "Longitudinal Temporal Information Modified",
         "req" : "3",
         "entity" : "Presentation State",
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
                     "targetdoc" : "PS3.15",
                     "targetptr" : "PS3.15",
                     "xrefstyle" : "select: labelnumber"
                  }
               },
               "."
            ]
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0038,0014)[<0>](0040,0031)" : {
         "module" : "Patient Study",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "name" : "Local Namespace Entity ID",
         "req" : "1C",
         "usage" : "U"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)" : {
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
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "module" : "General Series",
         "name" : "Content Item Modifier Sequence",
         "req" : "3",
         "usage" : "M"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0232)[<2>](0070,0255)" : {
         "req" : "1C",
         "name" : "Line Pattern",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "desc" : [
            "Pattern that defines the line dashing style. The Line Pattern is a 32 bit value. If the bit inside the pattern is set to 1 the foreground color is drawn, else the background color is drawn.",
            {
               "el" : "note",
               "content" : [
                  "\n                        ",
                  {
                     "el" : "para",
                     "content" : [
                        "For example, 00FFH defines the dashes with an equal size."
                     ]
                  },
                  "\n                      "
               ]
            },
            "Required if Line Dashing Style (0070,0254) has a value of DASHED."
         ],
         "entity" : "Presentation State",
         "module" : "Graphic Annotation"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a168)" : {
         "module" : "General Series",
         "entity" : "Series",
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
         "usage" : "M",
         "req" : "1C",
         "name" : "Concept Code Sequence"
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
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "req" : "1C",
         "name" : "Bounding Box Top Left Hand Corner"
      },
      "(0040,a390)[<0>](0008,1150)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Presentation State",
         "module" : "SOP Common",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "usage" : "M"
      },
      "(0070,0060)[<0>](0070,0401)" : {
         "usage" : "C - Required if Graphic Annotation Module is present",
         "req" : "3",
         "name" : "Graphic Layer Recommended Display CIELab Value",
         "mod_tables" : [
            "table_C.10-7"
         ],
         "desc" : [
            "A default color triplet value in which it is recommended that the layer be rendered on a color display. The units are specified in PCS-Values, and the value is encoded as CIELab. See ",
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
         "module" : "Graphic Layer"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0231)[<2>](0070,0247)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "req" : "1",
         "name" : "Shadow Color CIELab Value",
         "module" : "Graphic Annotation",
         "desc" : [
            "A color triplet value used to encode the Shadow Color. The units are specified in PCS-Values, and the value is encoded as CIELab. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.10.7.1.1"
               }
            },
            "."
         ],
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ]
      },
      "(0040,a390)[<0>](0040,e001)" : {
         "req" : "1",
         "name" : "HL7 Instance Identifier",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
         "entity" : "Presentation State",
         "module" : "SOP Common"
      },
      "(0070,0402)[<0>](0028,3110)" : {
         "module" : "Presentation State Blending",
         "entity" : "Presentation State",
         "desc" : [
            "Defines a sequence of VOI LUTs or Window Centers and Widths and to which images and frames they apply.",
            "No more than one VOI LUT Sequence containing a single Item or one pair of Window Center/Width values shall be specified for each image or frame.",
            "One or more Items shall be included in this sequence.",
            "Required if a VOI LUT is to be applied to referenced image(s)."
         ],
         "mod_tables" : [
            "table_C.11.14-1"
         ],
         "usage" : "M",
         "name" : "Softcopy VOI LUT Sequence",
         "req" : "1C"
      },
      "(0010,0032)" : {
         "usage" : "M",
         "req" : "3",
         "name" : "Patient's Birth Time",
         "module" : "Patient",
         "desc" : "Birth time of the Patient.",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0020,0010)" : {
         "module" : "General Study",
         "entity" : "Study",
         "desc" : "User or equipment generated Study identifier.",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "name" : "Study ID",
         "req" : "2"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a043)" : {
         "req" : "1",
         "name" : "Concept Name Code Sequence",
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1160)" : {
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
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "req" : "1C",
         "name" : "Referenced Frame Number"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0295)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "name" : "Graphic Group ID",
         "req" : "3",
         "module" : "Graphic Annotation",
         "desc" : "A number that defines the corresponding group object in the Graphic Group Sequence (0070,0234). If the attribute is not present the object does not belong to a group.",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.10-5"
         ]
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0232)[<2>](0070,0244)" : {
         "req" : "1",
         "name" : "Shadow Style",
         "usage" : "C - Required if Graphic Annotations are to be applied",
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
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "entity" : "Presentation State",
         "module" : "Graphic Annotation"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0231)[<2>](0070,0249)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "name" : "Bold",
         "req" : "1",
         "entity" : "Presentation State",
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
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "module" : "Graphic Annotation"
      },
      "(0008,1120)[<0>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "module" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a124)" : {
         "req" : "1C",
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
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a163)" : {
         "module" : "General Series",
         "entity" : "Series",
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
         "usage" : "M"
      },
      "(0070,0087)[<0>](0070,0081)" : {
         "usage" : "M",
         "name" : "Content Description",
         "req" : "1",
         "module" : "Presentation State Identification",
         "mod_tables" : [
            "table_C.11.10-1",
            "table_10-12"
         ],
         "desc" : "An alternate description that is used to identify this SOP Instance.",
         "entity" : "Presentation State"
      },
      "(fffa,fffa)" : {
         "entity" : "Presentation State",
         "desc" : [
            "Sequence holding Digital Signatures.",
            "One or more items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "req" : "3",
         "name" : "Digital Signatures Sequence",
         "usage" : "M"
      },
      "(4ffe,0001)[<0>](0400,0010)" : {
         "module" : "SOP Common",
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
         "entity" : "Presentation State",
         "req" : "1",
         "name" : "MAC Calculation Transfer Syntax UID",
         "usage" : "M"
      },
      "(0008,0031)" : {
         "name" : "Series Time",
         "req" : "3",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : "Time the Series started.",
         "entity" : "Series"
      },
      "(0070,0001)[<0>](0070,0008)" : {
         "module" : "Graphic Annotation",
         "entity" : "Presentation State",
         "desc" : [
            "Sequence that describes a text annotation.",
            "One or more Items shall be included in this sequence.",
            "Either one or both of Text Object Sequence (0070,0008) or Graphic Object Sequence (0070,0009) are required."
         ],
         "mod_tables" : [
            "table_C.10-5"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "name" : "Text Object Sequence",
         "req" : "1C"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0003)" : {
         "mod_tables" : [
            "table_C.10-5"
         ],
         "desc" : [
            "Units of measure for the axes of the text bounding box.",
            "Defines whether or not the annotation is Image or Displayed Area relative. Both dimensions shall have the same units.",
            {
               "list" : [
                  [
                     "PIXEL",
                     [
                        "Image relative position specified with sub-pixel resolution such that the origin, which is at the Top Left Hand Corner (TLHC) of the TLHC pixel is 0.0\\0.0, the Bottom Right Hand Corner (BRHC) of the TLHC pixel is 1.0\\1.0, and the BRHC of the BRHC pixel is Columns\\Rows (see ",
                        {
                           "attrs" : {
                              "linkend" : "figure_C.10.5-1",
                              "xrefstyle" : "select: label"
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            },
            "Required if Bounding Box Top Left Hand Corner (0070,0010) or Bounding Box Bottom Right Hand Corner (0070,0011) is present."
         ],
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "req" : "1C",
         "name" : "Bounding Box Annotation Units"
      },
      "(0010,0030)" : {
         "usage" : "M",
         "name" : "Patient's Birth Date",
         "req" : "2",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "Birth date of the patient.",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a043)" : {
         "name" : "Concept Name Code Sequence",
         "req" : "1",
         "usage" : "M",
         "entity" : "Series",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series"
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Presentation State",
         "req" : "3",
         "name" : "Original Specialized SOP Class UID",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0062,000b)" : {
         "module" : "General Series",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Referenced Segment Number",
         "req" : "1C",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0018,1201)" : {
         "req" : "3",
         "name" : "Time of Last Calibration",
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
      "(0010,0200)" : {
         "req" : "3",
         "name" : "Quality Control Subject",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
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
         "module" : "Patient"
      },
      "(0070,0404)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0100)" : {
         "name" : "Digital Signature UID",
         "req" : "1",
         "usage" : "M",
         "module" : "Presentation State Blending",
         "entity" : "Presentation State",
         "desc" : "The Unique Identifier of a Digital Signature held in the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0070,0080)" : {
         "name" : "Content Label",
         "req" : "1",
         "usage" : "M",
         "module" : "Presentation State Identification",
         "desc" : "A label that is used to identify this SOP Instance.",
         "mod_tables" : [
            "table_C.11.10-1",
            "table_10-12"
         ],
         "entity" : "Presentation State"
      },
      "(0008,0110)[<0>](0008,0102)" : {
         "usage" : "M",
         "name" : "Coding Scheme Designator",
         "req" : "1",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The value of a Coding Scheme Designator, used in this SOP Instance, which is being mapped.",
         "entity" : "Presentation State"
      },
      "(fffa,fffa)[<0>](0400,0100)" : {
         "name" : "Digital Signature UID",
         "req" : "1",
         "usage" : "M",
         "entity" : "Presentation State",
         "desc" : "A UID that can be used to uniquely reference this signature.",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "usage" : "M"
      },
      "(0008,1070)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : "Name(s) of the operator(s) supporting the Series.",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "req" : "3",
         "name" : "Operators' Name"
      },
      "(0070,0086)[<0>](0008,0081)" : {
         "mod_tables" : [
            "table_C.11.10-1",
            "table_10-12",
            "table_10-1"
         ],
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "entity" : "Presentation State",
         "module" : "Presentation State Identification",
         "req" : "3",
         "name" : "Institution Address",
         "usage" : "M"
      },
      "(0100,0426)" : {
         "usage" : "M",
         "name" : "Authorization Equipment Certification Number",
         "req" : "3",
         "module" : "SOP Common",
         "desc" : "The certification number issued to the Application Entity that set the SOP Instance Status (0100,0410) to AO.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Presentation State"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0080)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "entity" : "Presentation State",
         "usage" : "M",
         "req" : "1C",
         "name" : "Institution Name"
      },
      "(0070,0404)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)" : {
         "usage" : "M",
         "name" : "Referenced Digital Signature Sequence",
         "req" : "3",
         "module" : "Presentation State Blending",
         "desc" : [
            "Sequence of references to Digital Signatures in the referenced SOP Instance.",
            "One or more Items are permitted in this sequence.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "The Attributes in this sequence can be used to detect if the referenced SOP Instance has been altered."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0012,0064)" : {
         "usage" : "M",
         "req" : "1C",
         "name" : "De-identification Method Code Sequence",
         "desc" : [
            "A code describing the mechanism or method use to remove the patient's identity.",
            "One or more Items shall be included in this sequence. Multiple items are used if successive de-identification steps have been performed or to describe options of a defined profile.",
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method (0012,0063) is not present. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,08ea)" : {
         "usage" : "M",
         "req" : "1C",
         "name" : "Measurement Units Code Sequence",
         "module" : "General Series",
         "entity" : "Series",
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
      "(0010,1021)" : {
         "usage" : "U",
         "req" : "3",
         "name" : "Patient's Size Code Sequence",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : [
            "Patient's size category code",
            "One or more Items are permitted in this sequence."
         ],
         "entity" : "Study",
         "module" : "Patient Study"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0226)" : {
         "mod_tables" : [
            "table_C.10-5"
         ],
         "desc" : [
            "The identifier of the Compound Graphic represented, in part, by this Item.",
            "The value of this attribute shall be equal to the value of Compound Graphic Instance ID (0070,0226) of the corresponding Item in the Compound Graphic Sequence (0070,0209).",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.10.5.1.3.1"
                  }
               },
               "."
            ]
         ],
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "req" : "3",
         "name" : "Compound Graphic Instance ID"
      },
      "(0010,1002)[<0>](0010,0024)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this sequence."
         ],
         "entity" : "Patient",
         "usage" : "M",
         "req" : "3",
         "name" : "Issuer of Patient ID Qualifiers Sequence"
      },
      "(0040,0260)[<0>](0040,0440)" : {
         "module" : "General Series",
         "entity" : "Series",
         "desc" : "Sequence that specifies the context for the Performed Protocol Code Sequence Item. One or more Items are permitted in this sequence.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "usage" : "M",
         "name" : "Protocol Context Sequence",
         "req" : "3"
      },
      "(0018,1000)" : {
         "usage" : "M",
         "req" : "3",
         "name" : "Device Serial Number",
         "desc" : [
            "Manufacturer's serial number of the equipment that produced the composite instances.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
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
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment"
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1150)" : {
         "module" : "General Series",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-11"
         ],
         "entity" : "Series",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "req" : "1"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a040)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
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
         "usage" : "M",
         "req" : "1",
         "name" : "Value Type"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a120)" : {
         "usage" : "M",
         "req" : "1C",
         "name" : "DateTime",
         "module" : "General Series",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0232)[<2>](0070,0246)" : {
         "name" : "Shadow Offset Y",
         "req" : "1",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
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
         "entity" : "Presentation State"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0232)[<2>](0070,0244)" : {
         "req" : "1",
         "name" : "Shadow Style",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "desc" : [
            "The shadow style of the line to be displayed.",
            {
               "type" : "variablelist",
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
               ]
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
         ],
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "module" : "Graphic Annotation"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0020)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "name" : "Graphic Dimensions",
         "req" : "1",
         "module" : "Graphic Annotation",
         "entity" : "Presentation State",
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
         "mod_tables" : [
            "table_C.10-5"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a120)" : {
         "req" : "1C",
         "name" : "DateTime",
         "usage" : "M",
         "entity" : "Series",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series"
      },
      "(0018,1050)" : {
         "name" : "Spatial Resolution",
         "req" : "3",
         "usage" : "M",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "entity" : "Equipment",
         "module" : "General Equipment"
      },
      "(0038,0064)[<0>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "req" : "1C",
         "usage" : "U",
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
         "entity" : "Study",
         "module" : "Patient Study"
      },
      "(0070,0001)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "name" : "Graphic Annotation Sequence",
         "req" : "1",
         "module" : "Graphic Annotation",
         "desc" : [
            "A sequence of Items each of which represents a group of annotations composed of graphics or text or both.",
            "One or more Items shall be included in this sequence."
         ],
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.10-5"
         ]
      },
      "(4ffe,0001)[<0>](0400,0015)" : {
         "usage" : "M",
         "req" : "1",
         "name" : "MAC Algorithm",
         "module" : "SOP Common",
         "entity" : "Presentation State",
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
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0233)" : {
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5c"
         ],
         "desc" : [
            "Sequence that describes the fill style.",
            "Only a single item is permitted in this sequence."
         ],
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "name" : "Fill Style Sequence",
         "req" : "3",
         "usage" : "C - Required if Graphic Annotations are to be applied"
      },
      "(0018,a001)[<0>](0008,0080)" : {
         "desc" : "Institution where the equipment that contributed to the composite instance is located.",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "3",
         "name" : "Institution Name"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a160)" : {
         "req" : "1C",
         "name" : "Text Value",
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
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
      "(0008,1110)[<0>](0008,1155)" : {
         "usage" : "M",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "entity" : "Study",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "module" : "General Study"
      },
      "(0070,0404)[<0>](0020,000d)" : {
         "usage" : "M",
         "name" : "Study Instance UID",
         "req" : "1",
         "module" : "Presentation State Blending",
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.17-3"
         ],
         "desc" : "Unique identifier for the Study",
         "entity" : "Presentation State"
      },
      "(0008,0090)" : {
         "module" : "General Study",
         "desc" : "Name of the patient's referring physician",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "name" : "Referring Physician's Name",
         "req" : "2",
         "usage" : "M"
      },
      "(0008,0051)" : {
         "usage" : "M",
         "req" : "3",
         "name" : "Issuer of Accession Number Sequence",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this sequence."
         ],
         "entity" : "Study",
         "module" : "General Study"
      },
      "(fffa,fffa)[<0>](0400,0105)" : {
         "module" : "SOP Common",
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
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1",
         "name" : "Digital Signature DateTime",
         "usage" : "M"
      },
      "(0038,0060)" : {
         "module" : "Patient Study",
         "desc" : "Identifier of the Service Episode as assigned by the healthcare provider",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "entity" : "Study",
         "name" : "Service Episode ID",
         "req" : "3",
         "usage" : "U"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a30a)" : {
         "module" : "General Series",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "req" : "1C",
         "name" : "Numeric Value"
      },
      "(0020,9172)[<0>](0008,1160)" : {
         "req" : "1C",
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
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "module" : "SOP Common"
      },
      "(0018,1008)" : {
         "usage" : "M",
         "name" : "Gantry ID",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "desc" : "Identifier of the gantry or positioner.",
         "entity" : "Equipment",
         "module" : "General Equipment"
      },
      "(0070,005a)[<0>](0008,1140)[<1>](0008,1150)" : {
         "module" : "Displayed Area",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.10-4",
            "table_10-3",
            "table_10-11"
         ],
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "req" : "1"
      },
      "(0070,0086)[<0>](0008,0080)" : {
         "usage" : "M",
         "req" : "1C",
         "name" : "Institution Name",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "mod_tables" : [
            "table_C.11.10-1",
            "table_10-12",
            "table_10-1"
         ],
         "entity" : "Presentation State",
         "module" : "Presentation State Identification"
      },
      "(0020,0013)" : [
         {
            "module" : "Presentation State Identification",
            "desc" : "A number that identifies this SOP Instance.",
            "entity" : "Presentation State",
            "mod_tables" : [
               "table_C.11.10-1",
               "table_10-12"
            ],
            "name" : "Instance Number",
            "req" : "1",
            "usage" : "M"
         },
         {
            "entity" : "Presentation State",
            "desc" : "A number that identifies this Composite object instance.",
            "mod_tables" : [
               "table_C.12-1"
            ],
            "module" : "SOP Common",
            "usage" : "M",
            "name" : "Instance Number",
            "req" : "3"
         }
      ],
      "(0010,0021)" : {
         "module" : "Patient",
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
         "name" : "Issuer of Patient ID",
         "usage" : "M"
      },
      "(0040,0250)" : {
         "usage" : "M",
         "req" : "3",
         "name" : "Performed Procedure Step End Date",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "desc" : "Date on which the Performed Procedure Step ended.",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0232)[<2>](0070,0251)" : {
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
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
         "entity" : "Presentation State",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "req" : "1",
         "name" : "Pattern On Color CIELab Value"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0233)[<2>](0070,0284)" : {
         "module" : "Graphic Annotation",
         "desc" : "Encodes the foreground opacity. The value is encoded as floating point alpha value (0.0-1.0).",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5c"
         ],
         "entity" : "Presentation State",
         "name" : "Pattern On Opacity",
         "req" : "1",
         "usage" : "C - Required if Graphic Annotations are to be applied"
      },
      "(0070,0402)[<0>](0028,3000)[<1>](0028,3006)" : {
         "module" : "Presentation State Blending",
         "entity" : "Presentation State",
         "desc" : [
            "LUT Data in this Sequence.",
            "Required if the Modality LUT Sequence (0028,3000) is sent."
         ],
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.11-1b"
         ],
         "usage" : "M",
         "req" : "1C",
         "name" : "LUT Data"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0232)[<2>](0070,0254)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "name" : "Line Dashing Style",
         "req" : "1",
         "module" : "Graphic Annotation",
         "entity" : "Presentation State",
         "desc" : [
            "The dashing style of the line to be displayed.",
            {
               "type" : "variablelist",
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
               ]
            },
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.10.5.1.3.13.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a161)" : {
         "req" : "1C",
         "name" : "Floating Point Value",
         "usage" : "M",
         "entity" : "Series",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a121)" : {
         "module" : "General Series",
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
         "usage" : "M",
         "req" : "1C",
         "name" : "Date"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0232)[<2>](0070,0253)" : {
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "desc" : "Specifies the line thickness. The dimension for this attribute is defined by Graphic Annotation Units (0070,0005) or Compound Graphic Units (0070,0282).",
         "entity" : "Presentation State",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "req" : "1",
         "name" : "Line Thickness"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0062,000b)" : {
         "name" : "Referenced Segment Number",
         "req" : "1C",
         "usage" : "M",
         "module" : "General Series",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0012)" : {
         "mod_tables" : [
            "table_C.10-5"
         ],
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
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "name" : "Bounding Box Text Horizontal Justification",
         "req" : "1C",
         "usage" : "C - Required if Graphic Annotations are to be applied"
      },
      "(0070,0060)[<0>](0070,0068)" : {
         "module" : "Graphic Layer",
         "mod_tables" : [
            "table_C.10-7"
         ],
         "desc" : "A free text description of the contents of this layer.",
         "entity" : "Presentation State",
         "usage" : "C - Required if Graphic Annotation Module is present",
         "name" : "Graphic Layer Description",
         "req" : "3"
      },
      "(0070,0402)[<0>](0028,3110)[<1>](0028,1056)" : {
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.11-2b"
         ],
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
                     "linkend" : "sect_C.11.2.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "entity" : "Presentation State",
         "module" : "Presentation State Blending",
         "usage" : "M",
         "req" : "3",
         "name" : "VOI LUT Function"
      },
      "(0070,0082)" : {
         "req" : "1",
         "name" : "Presentation Creation Date",
         "usage" : "M",
         "entity" : "Presentation State",
         "desc" : [
            "Date on which this presentation was created.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "This date may be different from the date that the DICOM SOP Instance was created, since the presentation state information contained may have been recorded earlier."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.11.10-1"
         ],
         "module" : "Presentation State Identification"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a124)" : {
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "name" : "UID",
         "req" : "1C",
         "usage" : "M"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0282)" : {
         "module" : "Graphic Annotation",
         "entity" : "Presentation State",
         "desc" : [
            "Type of dimension used in attributes for the Compound Graphic when specifying distances and locations.",
            {
               "list" : [
                  [
                     "PIXEL",
                     [
                        "When an attribute value specifies a location, it shall be an image relative position specified with sub-pixel resolution such that the origin at the Top Left Hand Corner (TLHC) of the TLHC pixel is 0.0\\0.0, the Bottom Right Hand Corner (BRHC) of the TLHC pixel is 1.0\\1.0, and the BRHC of the BRHC pixel is Columns\\Rows (see ",
                        {
                           "attrs" : {
                              "linkend" : "figure_C.10.5-1",
                              "xrefstyle" : "select: label"
                           },
                           "el" : "xref"
                        },
                        "). The values must be within the range 0\\0 to Columns\\Rows. When an attribute value specifies a distance the distance shall be in pixels."
                     ]
                  ],
                  [
                     "DISPLAY",
                     "When an attribute value specifies a location, it shall be a fraction of Specified Displayed Area where 0.0\\0.0 is the TLHC and 1.0\\1.0 is the BRHC. The values must be within the range 0.0 to 1.0. When an attribute value specifies a distance the distance shall be in fraction of Specified Displayed Area."
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "mod_tables" : [
            "table_C.10-5"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "name" : "Compound Graphic Units",
         "req" : "1"
      },
      "(0010,0040)" : {
         "usage" : "M",
         "name" : "Patient's Sex",
         "req" : "2",
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
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0231)[<2>](0070,0243)" : {
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
               "type" : "variablelist",
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
               ]
            },
            "Required if Bounding Box Top Left Hand Corner (0070,0010) is present."
         ],
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "name" : "Vertical Alignment",
         "req" : "3"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0032)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Universal Entity ID",
         "req" : "1C",
         "usage" : "M"
      },
      "(0070,0234)[<0>](0070,0208)" : {
         "name" : "Graphic Group Description",
         "req" : "3",
         "usage" : "U",
         "mod_tables" : [
            "table_C.10-12"
         ],
         "desc" : "Description of the group.",
         "entity" : "Presentation State",
         "module" : "Graphic Group"
      },
      "(0012,0051)" : {
         "module" : "Clinical Trial Study",
         "desc" : [
            "A description of a set of one or more studies that are grouped together to represent a clinical time point or submission in a clinical trial. See ",
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
         "entity" : "Study",
         "usage" : "U",
         "req" : "3",
         "name" : "Clinical Trial Time Point Description"
      },
      "(0008,0021)" : {
         "req" : "3",
         "name" : "Series Date",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : "Date the Series started.",
         "entity" : "Series"
      },
      "(0070,0001)[<0>](0070,0009)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "req" : "1C",
         "name" : "Graphic Object Sequence",
         "module" : "Graphic Annotation",
         "desc" : [
            "Sequence that describes a graphic annotation.",
            "One or more Items shall be included in this sequence.",
            "Either one or both of Text Object Sequence (0070,0008) or Graphic Object Sequence (0070,0009) are required."
         ],
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.10-5"
         ]
      },
      "(0010,2299)" : {
         "name" : "Responsible Organization",
         "req" : "2C",
         "usage" : "M",
         "module" : "Patient",
         "desc" : [
            "Name of organization with medical decision making authority for the patient.",
            "Required if patient is an animal. May be present otherwise."
         ],
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0231)[<2>](0070,0229)" : {
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "desc" : "Generic font name as defined within CSS (Cascading Style Sheets). Default fontname, if the font specified in Font Name (0070,0227) is not present or can not be rendered.",
         "entity" : "Presentation State",
         "name" : "CSS Font Name",
         "req" : "1",
         "usage" : "C - Required if Graphic Annotations are to be applied"
      },
      "(0020,9172)[<0>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "module" : "SOP Common",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M"
      },
      "(0028,1222)" : {
         "desc" : [
            "Segmented Green Palette Color Lookup Table Data. Required if segmented data is used in an Image IOD; shall not be present in a Presentation State IOD. or Color Palette IOD See ",
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
         "mod_tables" : [
            "table_C.7-22a"
         ],
         "module" : "Palette Color LUT",
         "req" : "1C",
         "name" : "Segmented Green Palette Color Lookup Table Data",
         "usage" : "M"
      },
      "(0008,1010)" : {
         "module" : "General Equipment",
         "entity" : "Equipment",
         "desc" : "User defined name identifying the machine that produced the composite instances.",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Station Name",
         "req" : "3",
         "usage" : "M"
      },
      "(0400,0561)[<0>](0400,0550)" : {
         "module" : "SOP Common",
         "desc" : [
            "Sequence that contains all the Attributes, with their previous values, that were modified or removed from the main data set.",
            "Only a single Item shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Presentation State",
         "usage" : "M",
         "req" : "1",
         "name" : "Modified Attributes Sequence"
      },
      "(0010,2292)" : {
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
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "req" : "2C",
         "name" : "Patient Breed Description"
      },
      "(0028,1223)" : {
         "usage" : "M",
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
         "mod_tables" : [
            "table_C.7-22a"
         ],
         "entity" : "Presentation State",
         "module" : "Palette Color LUT"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0232)[<2>](0070,0253)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "name" : "Line Thickness",
         "req" : "1",
         "desc" : "Specifies the line thickness. The dimension for this attribute is defined by Graphic Annotation Units (0070,0005) or Compound Graphic Units (0070,0282).",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "entity" : "Presentation State",
         "module" : "Graphic Annotation"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a161)" : {
         "entity" : "Series",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "usage" : "M",
         "req" : "1C",
         "name" : "Floating Point Value"
      },
      "(0040,0275)[<0>](0040,1002)" : {
         "req" : "3",
         "name" : "Reason for the Requested Procedure",
         "usage" : "M",
         "entity" : "Series",
         "desc" : "Reason for requesting this procedure.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "module" : "General Series"
      },
      "(0040,0275)[<0>](0008,0051)" : {
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "entity" : "Series",
         "module" : "General Series",
         "req" : "3",
         "name" : "Issuer of Accession Number Sequence",
         "usage" : "M"
      },
      "(0020,0011)" : {
         "usage" : "M",
         "name" : "Series Number",
         "req" : "2",
         "desc" : "A number that identifies this Series.",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0070,0402)[<0>](0028,3110)[<1>](0028,3010)[<2>](0028,3006)" : {
         "req" : "1",
         "name" : "LUT Data",
         "usage" : "M",
         "module" : "Presentation State Blending",
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.11-2b"
         ],
         "desc" : "LUT Data in this Sequence.",
         "entity" : "Presentation State"
      },
      "(0008,0051)[<0>](0040,0033)" : {
         "entity" : "Study",
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
         "module" : "General Study",
         "usage" : "M",
         "req" : "1C",
         "name" : "Universal Entity ID Type"
      },
      "(0038,0064)" : {
         "desc" : [
            "Identifier of the Assigning Authority that issued the Service Episode ID (0038,0060).",
            "Only a single Item is permitted in this sequence."
         ],
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "name" : "Issuer of Service Episode ID Sequence",
         "req" : "3",
         "usage" : "U"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)" : {
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
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "name" : "Content Item Modifier Sequence",
         "req" : "3",
         "usage" : "M"
      },
      "(0070,0084)" : {
         "req" : "2",
         "name" : "Content Creator's Name",
         "usage" : "M",
         "desc" : "Name of operator (such as a technologist or physician) creating the content of the SOP Instance.",
         "mod_tables" : [
            "table_C.11.10-1",
            "table_10-12"
         ],
         "entity" : "Presentation State",
         "module" : "Presentation State Identification"
      },
      "(0070,0234)[<0>](0070,0207)" : {
         "name" : "Graphic Group Label",
         "req" : "1",
         "usage" : "U",
         "module" : "Graphic Group",
         "mod_tables" : [
            "table_C.10-12"
         ],
         "desc" : "Name used to identify the Graphic Group, i.e., the combined graphic object.",
         "entity" : "Presentation State"
      },
      "(0008,1032)" : {
         "desc" : [
            "A Sequence that conveys the type of procedure performed.",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "module" : "General Study",
         "usage" : "M",
         "req" : "3",
         "name" : "Procedure Code Sequence"
      },
      "(fffa,fffa)[<0>](0400,0310)" : {
         "usage" : "M",
         "req" : "3",
         "name" : "Certified Timestamp",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
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
         "entity" : "Presentation State",
         "module" : "SOP Common"
      },
      "(0008,0020)" : {
         "module" : "General Study",
         "desc" : "Date the Study started.",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "name" : "Study Date",
         "req" : "2"
      },
      "(0038,0062)" : {
         "entity" : "Study",
         "desc" : "Description of the type of service episode.",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "name" : "Service Episode Description",
         "req" : "3",
         "usage" : "U"
      },
      "(0028,1199)" : {
         "module" : "Palette Color LUT",
         "mod_tables" : [
            "table_C.7-22a"
         ],
         "desc" : [
            "Palette Color Lookup Table UID. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.9.1"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "entity" : "Presentation State",
         "req" : "3",
         "name" : "Palette Color Lookup Table UID",
         "usage" : "M"
      },
      "(0008,1049)[<0>](0008,0082)" : {
         "module" : "General Study",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "req" : "1C",
         "name" : "Institution Code Sequence",
         "usage" : "M"
      },
      "(0040,1012)" : {
         "name" : "Reason For Performed Procedure Code Sequence",
         "req" : "3",
         "usage" : "M",
         "entity" : "Study",
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
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study"
      },
      "(0008,0110)[<0>](0008,0103)" : {
         "usage" : "M",
         "name" : "Coding Scheme Version",
         "req" : "3",
         "entity" : "Presentation State",
         "desc" : "The coding scheme version associated with the Coding Scheme Designator (0008,0102).",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0070,005a)[<0>](0070,0101)" : {
         "name" : "Presentation Pixel Spacing",
         "req" : "1C",
         "usage" : "M",
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
                     "content" : [
                        "\n                    ",
                        {
                           "content" : [
                              "\n                      ",
                              {
                                 "content" : [
                                    "This value may be different from Pixel Spacing (0028,0030) or Imager Pixel Spacing (0018,1164) specified in the referenced image, which are ignored, since some form of calibration may have been performed (for example by reference to an object of known size in the image)."
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
                                    "If the row and column spacing are different, then the pixel aspect ratio of the image is not 1:1."
                                 ],
                                 "el" : "para"
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
            "Required if Presentation Size Mode (0070,0100) is TRUE SIZE, in which case the values will correspond to the physical distance between the center of each pixel on the display device.",
            "May be present if Presentation Size Mode (0070,0100) is SCALE TO FIT or MAGNIFY, in which case the values are used to compute the aspect ratio of the image pixels."
         ],
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.10-4"
         ],
         "module" : "Displayed Area"
      },
      "(0008,1048)" : {
         "module" : "General Study",
         "entity" : "Study",
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
         "req" : "3",
         "name" : "Physician(s) of Record",
         "usage" : "M"
      },
      "(0010,1010)" : {
         "module" : "Patient Study",
         "desc" : "Age of the Patient.",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "req" : "3",
         "name" : "Patient's Age"
      },
      "(0008,0110)[<0>](0008,0114)" : {
         "req" : "2C",
         "name" : "Coding Scheme External ID",
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : "The coding scheme identifier as defined in an external registry. Required if coding scheme is registered and Coding Scheme UID (0008,010C) is not present.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Presentation State"
      },
      "(0028,1103)" : {
         "name" : "Blue Palette Color Lookup Table Descriptor",
         "req" : "1",
         "usage" : "M",
         "module" : "Palette Color LUT",
         "mod_tables" : [
            "table_C.7-22a"
         ],
         "desc" : [
            "Specifies the format of the Blue Palette Color Lookup table Data (0028,1203). See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.6.3.1.5",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "entity" : "Presentation State"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)[<2>](0070,0246)" : {
         "entity" : "Presentation State",
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
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "name" : "Shadow Offset Y",
         "req" : "1"
      },
      "(0070,0404)" : {
         "req" : "3",
         "name" : "Referenced Spatial Registration Sequence",
         "usage" : "M",
         "module" : "Presentation State Blending",
         "desc" : [
            "A reference to Spatial Registration Instances that may be used to register the underlying and superimposed images.",
            "One or more Items are permitted in this sequence.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "content" : [
                        "A Spatial Registration Instance may identify registration between frames of reference, or between explicitly identified images. In the latter case, the list of images referenced by the Presentation State, not the list of images referenced by the Spatial Registration Instance, are to be blended."
                     ]
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.11.14-1"
         ]
      },
      "(0008,1062)[<0>](0008,0081)" : {
         "module" : "General Study",
         "entity" : "Study",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Address",
         "req" : "3",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0018,1200)" : {
         "usage" : "M",
         "name" : "Date of Last Calibration",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "entity" : "Presentation State",
         "module" : "SOP Common"
      },
      "(0018,a001)[<0>](0008,1010)" : {
         "desc" : "User defined name identifying the machine that contributed to the composite instance.",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "req" : "3",
         "name" : "Station Name",
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
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
         "entity" : "Patient"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0031)" : {
         "req" : "1C",
         "name" : "Local Namespace Entity ID",
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "Patient"
      },
      "(0070,0402)[<0>](0028,3110)[<1>](0008,1140)[<2>](0008,1150)" : {
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "module" : "Presentation State Blending",
         "entity" : "Presentation State",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.11.14-1",
            "table_10-3",
            "table_10-11"
         ]
      },
      "(0008,0096)[<0>](0008,0081)" : {
         "module" : "General Study",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "3",
         "name" : "Institution Address",
         "usage" : "M"
      },
      "(0012,0082)" : {
         "module" : "Clinical Trial Subject",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "desc" : "Approval number issued by committee described in Clinical Trial Protocol Ethics Committee Name (0012,0081).",
         "entity" : "Patient",
         "usage" : "U",
         "req" : "3",
         "name" : "Clinical Trial Protocol Ethics Committee Approval Number"
      },
      "(0010,2298)" : {
         "usage" : "M",
         "name" : "Responsible Person Role",
         "req" : "1C",
         "module" : "Patient",
         "entity" : "Patient",
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
         ]
      },
      "(0100,0424)" : {
         "usage" : "M",
         "name" : "SOP Authorization Comment",
         "req" : "3",
         "desc" : "Any comments associated with the setting of the SOP Instance Status (0100,0410) to AO.",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0062,000b)" : {
         "req" : "1C",
         "name" : "Referenced Segment Number",
         "usage" : "M",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)[<2>](0070,0229)" : {
         "desc" : "Generic font name as defined within CSS (Cascading Style Sheets). Default fontname, if the font specified in Font Name (0070,0227) is not present or can not be rendered.",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "req" : "1",
         "name" : "CSS Font Name"
      },
      "(0070,0403)" : {
         "desc" : [
            "A value from 0.0 to 1.0 indicating the relative opacity of the pixels of the superimposed image, where 1.0 means that pixels of the superimposed image completely replace the pixels of the underlying image, and 0.0 means that the pixels of the underlying image completely replace the pixels of the superimposed image.",
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
               " for a detailed description of the blending operation."
            ]
         ],
         "mod_tables" : [
            "table_C.11.14-1"
         ],
         "entity" : "Presentation State",
         "module" : "Presentation State Blending",
         "usage" : "M",
         "name" : "Relative Opacity",
         "req" : "1"
      },
      "(0018,1200)" : {
         "entity" : "Equipment",
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
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
         "name" : "Date of Last Calibration",
         "req" : "3",
         "usage" : "M"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0022)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "req" : "1",
         "name" : "Graphic Data",
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
         "entity" : "Presentation State",
         "module" : "Graphic Annotation"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0014)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "name" : "Anchor Point",
         "req" : "1C",
         "desc" : [
            "Location of a point in the image or Specified Displayed Area to which the Unformatted Text Value (0070,0006) is related, in Anchor Point Annotation Units (0070,0004), given as column\\row. Column is the horizontal offset and row is the vertical offset.",
            "Required if Bounding Box Top Left Hand Corner (0070,0010) and Bounding Box Bottom Right Hand Corner (0070,0011) are not present. May be present otherwise."
         ],
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "module" : "Graphic Annotation"
      },
      "(0070,0404)[<0>](0008,1115)[<1>](0008,0054)" : {
         "name" : "Retrieve AE Title",
         "req" : "3",
         "usage" : "M",
         "module" : "Presentation State Blending",
         "entity" : "Presentation State",
         "desc" : "Title of the DICOM Application Entity where the Composite Object(s) may be retrieved on the network.",
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a040)" : {
         "module" : "General Series",
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
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "req" : "1",
         "name" : "Value Type"
      },
      "(0012,0083)[<0>](0012,0084)" : {
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
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.2.3.1.2"
                  }
               },
               "."
            ],
            "Required if Consent for Distribution Flag (0012,0085) equals YES or WITHDRAWN."
         ],
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "entity" : "Study",
         "module" : "Clinical Trial Study",
         "usage" : "U",
         "name" : "Distribution Type",
         "req" : "1C"
      },
      "(0070,005a)[<0>](0070,0103)" : {
         "usage" : "M",
         "req" : "1C",
         "name" : "Presentation Pixel Magnification Ratio",
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
                     "content" : [
                        "\n                    ",
                        {
                           "el" : "listitem",
                           "content" : [
                              "\n                      ",
                              {
                                 "el" : "para",
                                 "content" : [
                                    "A value of 1.0 would imply that one pixel in the referenced image would be displayed as one pixel on the display (i.e., it would not be interpolated if the aspect ratio of the image pixels is 1:1)."
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
                                    "A value of 2.0 would imply that one pixel in the referenced image would be displayed as 4 pixels on the display (i.e., up-sampled by a factor of 2 in each of the row and column directions)."
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
                                    "A value of 0.5 would imply that 4 pixels in the referenced image would be displayed as 1 pixel on the display (i.e., down-sampled by a factor of 2 in each of the row and column directions)."
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
                                 "el" : "para",
                                 "content" : [
                                    "If the source pixels have an aspect ratio of other than 1:1, then they are assumed to have been interpolated to a display pixel aspect ratio of 1:1 prior to magnification."
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
               ]
            }
         ],
         "entity" : "Presentation State",
         "module" : "Displayed Area"
      },
      "(0070,0001)[<0>](0008,1140)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "req" : "1C",
         "name" : "Referenced Image Sequence",
         "desc" : [
            "The subset of images and frames listed in the Presentation State Relationship Module, to which this graphic annotation applies.",
            "One or more Items shall be included in this sequence.",
            "Required if graphic annotations in this Item do not apply to all the images and frames listed in the Presentation State Relationship Module."
         ],
         "mod_tables" : [
            "table_C.10-5"
         ],
         "entity" : "Presentation State",
         "module" : "Graphic Annotation"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0081)" : {
         "req" : "3",
         "name" : "Institution Address",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "entity" : "Presentation State"
      },
      "(0008,0081)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "desc" : "Mailing address of the institution where the equipment that produced the composite instances is located.",
         "entity" : "Equipment",
         "module" : "General Equipment",
         "usage" : "M",
         "name" : "Institution Address",
         "req" : "3"
      },
      "(0008,1250)[<0>](0020,000d)" : {
         "desc" : "Instance UID of Study to which the related Series belongs",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "name" : "Study Instance UID",
         "req" : "1",
         "usage" : "M"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0233)[<2>](0070,0252)" : {
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5c"
         ],
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
         "entity" : "Presentation State",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "name" : "Pattern Off Color CIELab Value",
         "req" : "3"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0278)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "req" : "1C",
         "name" : "Show Tick Label",
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            },
            "Required if Compound Graphic Type (0070,0294) equals RULER, AXIS or CROSSHAIR."
         ],
         "mod_tables" : [
            "table_C.10-5"
         ],
         "entity" : "Presentation State"
      },
      "(0070,0086)[<0>](0040,1103)" : {
         "usage" : "M",
         "req" : "3",
         "name" : "Person's Telephone Numbers",
         "mod_tables" : [
            "table_C.11.10-1",
            "table_10-12",
            "table_10-1"
         ],
         "desc" : "Person's telephone number(s)",
         "entity" : "Presentation State",
         "module" : "Presentation State Identification"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1155)" : {
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "module" : "General Series",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "entity" : "Series"
      },
      "(0008,0053)" : {
         "module" : "SOP Common",
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            },
            "Required if the instance has ever been converted from its source form as the result of a C-MOVE operation with a specific view."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "1C",
         "name" : "Query/Retrieve View"
      },
      "(0010,1000)" : {
         "usage" : "M",
         "name" : "Other Patient IDs",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "Other identification numbers or codes used to identify the patient.",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0008,1049)[<0>](0008,0080)" : {
         "name" : "Institution Name",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0008,1110)[<0>](0008,1150)" : {
         "module" : "General Study",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "entity" : "Study",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "req" : "1"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a120)" : {
         "usage" : "M",
         "name" : "DateTime",
         "req" : "1C",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "entity" : "Series"
      },
      "(0070,0404)[<0>](0008,1115)[<1>](0020,000e)" : {
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "Unique identifier of a Series that is part of this Study and contains the referenced Composite Object(s).",
         "entity" : "Presentation State",
         "module" : "Presentation State Blending",
         "usage" : "M",
         "req" : "1",
         "name" : "Series Instance UID"
      },
      "(fffa,fffa)[<0>](0400,0305)" : {
         "module" : "SOP Common",
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
         "entity" : "Presentation State",
         "usage" : "M",
         "name" : "Certified Timestamp Type",
         "req" : "1C"
      },
      "(0008,1052)[<0>](0040,1102)" : {
         "module" : "General Series",
         "desc" : "Person's mailing address",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "entity" : "Series",
         "usage" : "M",
         "req" : "3",
         "name" : "Person's Address"
      },
      "(0008,0018)" : {
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
                  "xrefstyle" : "select: labelnumber",
                  "targetptr" : "PS3.4",
                  "targetdoc" : "PS3.4"
               }
            },
            "."
         ],
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "1",
         "name" : "SOP Instance UID"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)[<2>](0070,0249)" : {
         "name" : "Bold",
         "req" : "1",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "module" : "Graphic Annotation",
         "entity" : "Presentation State",
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ]
      },
      "(0070,005a)[<0>](0008,1140)[<1>](0008,1155)" : {
         "usage" : "M",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.10-4",
            "table_10-3",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Presentation State",
         "module" : "Displayed Area"
      },
      "(0040,0244)" : {
         "usage" : "M",
         "req" : "3",
         "name" : "Performed Procedure Step Start Date",
         "module" : "General Series",
         "desc" : "Date on which the Performed Procedure Step started.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "entity" : "Series"
      },
      "(0012,0063)" : {
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
                                 "content" : [
                                    "The characteristics of the de-identifying equipment and/or the responsible operator of that equipment may be recorded as an additional item of the Contributing Equipment Sequence (0018,A001) in the SOP Common Module. De-identifying equipment may use a Purpose of Reference of (109104,DCM,\"De-identifying Equipment\")."
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
            },
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method Code Sequence (0012,0064) is not present. May be present otherwise."
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "req" : "1C",
         "name" : "De-identification Method"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1160)" : {
         "req" : "1C",
         "name" : "Referenced Frame Number",
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
                     "el" : "para"
                  },
                  "\n              "
               ]
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0022)" : {
         "name" : "Graphic Data",
         "req" : "1",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "desc" : [
            "Coordinates that specify this graphic annotation.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.10.5.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "module" : "Graphic Annotation"
      },
      "(0070,0402)[<0>](0028,3110)[<1>](0028,1051)" : {
         "module" : "Presentation State Blending",
         "entity" : "Presentation State",
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
            "Required if Window Center (0028,1050) is sent."
         ],
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.11-2b"
         ],
         "req" : "1C",
         "name" : "Window Width",
         "usage" : "M"
      },
      "(0400,0500)[<0>](0400,0510)" : {
         "module" : "SOP Common",
         "desc" : "Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Presentation State",
         "req" : "1",
         "name" : "Encrypted Content Transfer Syntax UID",
         "usage" : "M"
      },
      "(0008,0110)[<0>](0008,0116)" : {
         "usage" : "M",
         "req" : "3",
         "name" : "Coding Scheme Responsible Organization",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Name of the organization responsible for the Coding Scheme. May include organizational contact information.",
         "entity" : "Presentation State",
         "module" : "SOP Common"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a124)" : {
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
         "entity" : "Series",
         "req" : "1C",
         "name" : "UID",
         "usage" : "M"
      },
      "(0010,2160)" : {
         "usage" : "M",
         "req" : "3",
         "name" : "Ethnic Group",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "Ethnic group or race of the patient.",
         "entity" : "Patient"
      },
      "(0008,0012)" : {
         "desc" : [
            "Date the SOP Instance was created.",
            "This is the date that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Presentation State",
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Instance Creation Date",
         "req" : "3"
      },
      "(0028,1201)" : {
         "usage" : "M",
         "req" : "1C",
         "name" : "Red Palette Color Lookup Table Data",
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
         "entity" : "Presentation State",
         "module" : "Palette Color LUT"
      },
      "(0018,a001)[<0>](0008,1090)" : {
         "module" : "SOP Common",
         "desc" : "Manufacturer's model name of the equipment that contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Presentation State",
         "usage" : "M",
         "req" : "3",
         "name" : "Manufacturer's Model Name"
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
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "req" : "1C",
         "name" : "Rational Denominator Value"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0295)" : {
         "mod_tables" : [
            "table_C.10-5"
         ],
         "desc" : [
            "A number identifying the group from the Graphic Group Sequence (0070,0234) to which this Item belongs. If this attribute is not present, this Item does not belong to a group.",
            "If Compound Graphic Instance ID (0070,0226) is present in this Item, the value of Graphic Group ID (0070,0295) shall be the same as the value of Graphic Group ID (0070,0295) of the corresponding Item in the Compound Graphic Sequence (0070,0209) with the same Compound Graphic Instance ID (0070,0226)."
         ],
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "name" : "Graphic Group ID",
         "req" : "3"
      },
      "(0012,0060)" : {
         "usage" : "U",
         "name" : "Clinical Trial Coordinating Center Name",
         "req" : "2",
         "module" : "Clinical Trial Series",
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
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5b"
         ]
      },
      "(0008,0110)[<0>](0008,0112)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "entity" : "Presentation State",
         "usage" : "M",
         "name" : "Coding Scheme Registry",
         "req" : "1C"
      },
      "(0012,0030)" : {
         "req" : "2",
         "name" : "Clinical Trial Site ID",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "desc" : [
            "The identifier of the site responsible for submitting clinical trial data. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.3.1.4"
               },
               "el" : "xref"
            },
            "."
         ],
         "entity" : "Patient",
         "module" : "Clinical Trial Subject"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0024)" : {
         "desc" : [
            [
               "Whether or not the closed graphics element is displayed as filled (in some unspecified manner that shall be distinguishable from an outline) or as an outline. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.10.5.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ],
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
            "Required if Graphic Data (0070,0022) is \"closed\", that is Graphic Type (0070,0023) is CIRCLE or ELLIPSE, or Graphic Type (0070,0023) is POLYLINE or INTERPOLATED and the first data point is the same as the last data point."
         ],
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "module" : "Graphic Annotation",
         "name" : "Graphic Filled",
         "req" : "1C",
         "usage" : "C - Required if Graphic Annotations are to be applied"
      },
      "(0070,0402)[<0>](0008,1115)[<1>](0008,1140)[<2>](0008,1155)" : {
         "usage" : "M",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "module" : "Presentation State Blending",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.11.11-1b",
            "table_10-3",
            "table_10-11"
         ]
      },
      "(0070,0402)[<0>](0028,3110)[<1>](0028,3010)[<2>](0028,3002)" : {
         "usage" : "M",
         "name" : "LUT Descriptor",
         "req" : "1",
         "module" : "Presentation State Blending",
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
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.11-2b"
         ],
         "entity" : "Presentation State"
      },
      "(0018,a001)[<0>](0008,0070)" : {
         "module" : "SOP Common",
         "entity" : "Presentation State",
         "desc" : "Manufacturer of the equipment that contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "1",
         "name" : "Manufacturer"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0233)[<2>](0070,0256)" : {
         "desc" : [
            "A binary fill pattern. A set bit corresponds to foreground. An unset bit corresponds to background.",
            "A 128 byte value defining a 32x32 1 bit matrix. This fill pattern is replicated in tiles inside the boundaries of the graphic type.",
            "The most significant bit corresponds to the leftmost pixel in the row.",
            "The fill pattern relates to display pixels where one bit value corresponds to one display pixel.",
            "Required if Fill Mode (0070,0257) equals STIPPELED."
         ],
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5c"
         ],
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "name" : "Fill Pattern",
         "req" : "1C"
      },
      "(0008,1052)" : {
         "name" : "Performing Physician Identification Sequence",
         "req" : "3",
         "usage" : "M",
         "desc" : [
            "Identification of the physician(s) administering the Series.",
            "One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Performing Physician's Name (0008,1050), if present."
         ],
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0008,1072)[<0>](0008,0082)" : {
         "usage" : "M",
         "req" : "1C",
         "name" : "Institution Code Sequence",
         "module" : "General Series",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ]
      },
      "(0008,0110)[<0>](0008,0115)" : {
         "module" : "SOP Common",
         "desc" : "The coding scheme full common name",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Presentation State",
         "name" : "Coding Scheme Name",
         "req" : "3",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a040)" : {
         "usage" : "M",
         "name" : "Value Type",
         "req" : "1",
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
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0233)[<2>](0070,0251)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "name" : "Pattern On Color CIELab Value",
         "req" : "1",
         "module" : "Graphic Annotation",
         "entity" : "Presentation State",
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
         ],
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5c"
         ]
      },
      "(0010,1030)" : {
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Weight of the Patient, in kilograms.",
         "entity" : "Study",
         "req" : "3",
         "name" : "Patient's Weight",
         "usage" : "U"
      },
      "(0008,1111)[<0>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a162)" : {
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
         "module" : "General Series",
         "name" : "Rational Numerator Value",
         "req" : "1C",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a040)" : {
         "usage" : "M",
         "name" : "Value Type",
         "req" : "1",
         "module" : "General Series",
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
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0008,0080)" : {
         "usage" : "M",
         "name" : "Institution Name",
         "req" : "3",
         "entity" : "Equipment",
         "desc" : "Institution where the equipment that produced the composite instances is located.",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0233)[<2>](0070,0285)" : {
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5c"
         ],
         "desc" : "Encodes the background opacity. The value is encoded as floating point alpha value (0.0-1.0).",
         "entity" : "Presentation State",
         "req" : "1",
         "name" : "Pattern Off Opacity",
         "usage" : "C - Required if Graphic Annotations are to be applied"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1150)" : {
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "General Series"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0232)[<2>](0070,0284)" : {
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "desc" : "Encodes the foreground opacity. The value is encoded as floating point alpha value (0.0-1.0).",
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "req" : "1",
         "name" : "Pattern On Opacity"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a043)" : {
         "name" : "Concept Name Code Sequence",
         "req" : "1",
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
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0070,0402)[<0>](0028,3110)[<1>](0028,1050)" : {
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
         ],
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.11-2b"
         ],
         "entity" : "Presentation State",
         "module" : "Presentation State Blending",
         "usage" : "M",
         "req" : "1C",
         "name" : "Window Center"
      },
      "(0010,4000)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "User-defined additional information about the patient.",
         "entity" : "Patient",
         "req" : "3",
         "name" : "Patient Comments",
         "usage" : "M"
      },
      "(0070,0402)[<0>](0028,1052)" : {
         "usage" : "M",
         "name" : "Rescale Intercept",
         "req" : "1C",
         "desc" : [
            "The value b in relationship between stored values (SV) and the output units specified in Rescale Type (0028,1054).",
            "Output units = m*SV + b.",
            "Required if Modality LUT Sequence (0028,3000) is not present. Shall not be present otherwise."
         ],
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.11-1b"
         ],
         "entity" : "Presentation State",
         "module" : "Presentation State Blending"
      },
      "(0008,1052)[<0>](0008,0080)" : {
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series",
         "req" : "1C",
         "name" : "Institution Name",
         "usage" : "M"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0231)[<2>](0070,0245)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "req" : "1",
         "name" : "Shadow Offset X",
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
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
         "entity" : "Presentation State"
      },
      "(0070,0001)[<0>](0070,0002)" : {
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "desc" : [
            "The layer defined in the Graphic Layer Module ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.10.7",
                  "xrefstyle" : "select: label"
               }
            },
            " in which the graphics or text is to be rendered."
         ],
         "entity" : "Presentation State",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "name" : "Graphic Layer",
         "req" : "1"
      },
      "(0008,1120)" : {
         "desc" : [
            "A sequence that provides reference to a Patient SOP Class/Instance pair.",
            "Only a single Item is permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "req" : "3",
         "name" : "Referenced Patient Sequence"
      },
      "(0028,1202)" : {
         "desc" : [
            "Green Palette Color Lookup Table Data. Required if segmented data is NOT used in an Image IOD, or if the IOD is a Presentation State IOD or Color Palette IOD. See ",
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
            "table_C.7-22a"
         ],
         "entity" : "Presentation State",
         "module" : "Palette Color LUT",
         "usage" : "M",
         "name" : "Green Palette Color Lookup Table Data",
         "req" : "1C"
      },
      "(0070,005a)[<0>](0048,0301)" : {
         "desc" : [
            [
               "For a referenced multi-frame image, specifies whether the Displayed Area Top Left Hand Corner (0070,0052) and Displayed Area Bottom Right Hand Corner (0070,0053) are to be interpreted relative to the individual frame pixel origins, or relative to the Total Pixel Matrix origin (see ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.12.4.1.4",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               ")."
            ],
            "Required if the value of Referenced SOP Class UID (0008,1150) within Referenced Image Sequence (0008,1140) is 1.2.840.10008.5.1.4.1.1.77.1.6 (VL Whole Slide Microscopy Image). May be present otherwise.",
            {
               "title" : "Enumerated Values:",
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
               ]
            },
            "If not present, TLHC and BRHC are defined relative to the frame pixel origins."
         ],
         "mod_tables" : [
            "table_C.10-4"
         ],
         "entity" : "Presentation State",
         "module" : "Displayed Area",
         "usage" : "M",
         "name" : "Pixel Origin Interpretation",
         "req" : "1C"
      },
      "(4ffe,0001)" : {
         "module" : "SOP Common",
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
         "req" : "3",
         "name" : "MAC Parameters Sequence"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a168)" : {
         "usage" : "M",
         "req" : "1C",
         "name" : "Concept Code Sequence",
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
         "entity" : "Series"
      },
      "(0008,0014)" : {
         "module" : "SOP Common",
         "desc" : "Uniquely identifies device that created the SOP Instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Presentation State",
         "name" : "Instance Creator UID",
         "req" : "3",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a121)" : {
         "usage" : "M",
         "name" : "Date",
         "req" : "1C",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "entity" : "Series"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0226)" : {
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
         ],
         "mod_tables" : [
            "table_C.10-5"
         ],
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "name" : "Compound Graphic Instance ID",
         "req" : "3"
      },
      "(4ffe,0001)[<0>](0400,0020)" : {
         "usage" : "M",
         "req" : "1",
         "name" : "Data Elements Signed",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
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
         "entity" : "Presentation State"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0231)[<2>](0070,0242)" : {
         "entity" : "Presentation State",
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
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "module" : "Graphic Annotation",
         "req" : "3",
         "name" : "Horizontal Alignment",
         "usage" : "C - Required if Graphic Annotations are to be applied"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0232)[<2>](0070,0251)" : {
         "req" : "1",
         "name" : "Pattern On Color CIELab Value",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "module" : "Graphic Annotation",
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
         "entity" : "Presentation State"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a122)" : {
         "req" : "1C",
         "name" : "Time",
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
         "entity" : "Series"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0005)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "name" : "Graphic Annotation Units",
         "req" : "1",
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "desc" : [
            "Units of measure for the axes of the graphic annotation.",
            "Enumerated Values for Graphic Annotation Units (0070,0005) are the same as for Bounding Box Annotation Units (0070,0003)."
         ],
         "entity" : "Presentation State"
      },
      "(0070,0042)" : {
         "req" : "1",
         "name" : "Image Rotation",
         "usage" : "C - Required if rotation or flipping are to be applied",
         "desc" : [
            "How far to rotate the image clockwise in degrees, before any Image Horizontal Flip (0070,0041) is applied.",
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
            {
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "content" : [
                        "Negative values are not permitted since the Value Representation is unsigned."
                     ]
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.10-6"
         ],
         "module" : "Spatial Transformation"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1103)" : {
         "req" : "3",
         "name" : "Person's Telephone Numbers",
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : "Person's telephone number(s)",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ]
      },
      "(0008,103e)" : {
         "usage" : "M",
         "name" : "Series Description",
         "req" : "3",
         "module" : "General Series",
         "entity" : "Series",
         "desc" : "Description of the Series",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0010,2203)" : {
         "name" : "Patient's Sex Neutered",
         "req" : "2C",
         "usage" : "U",
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
                     "content" : [
                        "If this Attribute is present but has no value then the status is unknown."
                     ]
                  },
                  "\n                  "
               ]
            },
            "Required if patient is an animal. May be present otherwise."
         ],
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study"
      },
      "(0008,1052)[<0>](0040,1101)" : {
         "usage" : "M",
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
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0295)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "name" : "Graphic Group ID",
         "req" : "3",
         "module" : "Graphic Annotation",
         "desc" : [
            "A number identifying the group from the Graphic Group Sequence (0070,0234) to which this Item belongs. If this attribute is not present, this Item does not belong to a group.",
            "If Compound Graphic Instance ID (0070,0226) is present in this Item, the value of Graphic Group ID (0070,0295) shall be the same as the value of Graphic Group ID (0070,0295) of the corresponding Item in the Compound Graphic Sequence (0070,0209) with the same Compound Graphic Instance ID (0070,0226)."
         ],
         "mod_tables" : [
            "table_C.10-5"
         ],
         "entity" : "Presentation State"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0231)[<2>](0070,0246)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "name" : "Shadow Offset Y",
         "req" : "1",
         "entity" : "Presentation State",
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
         "module" : "Graphic Annotation"
      },
      "(0400,0561)[<0>](0400,0562)" : {
         "usage" : "M",
         "name" : "Attribute Modification DateTime",
         "req" : "1",
         "desc" : "Date and time the attributes were removed and/or replaced.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Presentation State",
         "module" : "SOP Common"
      },
      "(0070,005a)[<0>](0070,0053)" : {
         "usage" : "M",
         "req" : "1",
         "name" : "Displayed Area Bottom Right Hand Corner",
         "module" : "Displayed Area",
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
         "mod_tables" : [
            "table_C.10-4"
         ],
         "entity" : "Presentation State"
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
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0011)" : {
         "module" : "Graphic Annotation",
         "desc" : [
            "Location of the Bottom Right Hand Corner (BRHC) of the bounding box in which Unformatted Text Value (0070,0006) is to be displayed, in Bounding Box Annotation Units (0070,0003), given as column\\row. Column is the horizontal offset and row is the vertical offset.",
            "Required if Anchor Point (0070,0014) is not present. May be present otherwise.",
            "Required if Bounding Box Top Left Hand Corner (0070,0010) is present."
         ],
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "name" : "Bounding Box Bottom Right Hand Corner",
         "req" : "1C"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a162)" : {
         "usage" : "M",
         "req" : "1C",
         "name" : "Rational Numerator Value",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0018,a001)[<0>](0008,1040)" : {
         "desc" : "Department in the institution where the equipment that contributed to the composite instance is located.",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Institutional Department Name",
         "req" : "3"
      },
      "(0008,0110)[<0>](0008,010c)" : {
         "usage" : "M",
         "req" : "1C",
         "name" : "Coding Scheme UID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The coding scheme UID identifier. Required if coding scheme is identified by an ISO 8824 object identifier compatible with the UI VR.",
         "entity" : "Presentation State",
         "module" : "SOP Common"
      },
      "(0070,0404)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1155)" : {
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Presentation State",
         "module" : "Presentation State Blending",
         "usage" : "M",
         "req" : "1",
         "name" : "Referenced SOP Instance UID"
      },
      "(0008,1062)[<0>](0040,1103)" : {
         "req" : "3",
         "name" : "Person's Telephone Numbers",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Person's telephone number(s)",
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0070,0404)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0120)" : {
         "req" : "1",
         "name" : "Signature",
         "usage" : "M",
         "entity" : "Presentation State",
         "desc" : "The Signature Value identified by the Digital Signature UID within the Referenced SOP Instance UID.",
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Presentation State Blending"
      },
      "(0070,0402)[<0>](0028,3000)[<1>](0028,3002)" : {
         "module" : "Presentation State Blending",
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
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.11-1b"
         ],
         "req" : "1C",
         "name" : "LUT Descriptor",
         "usage" : "M"
      },
      "(0028,1102)" : {
         "req" : "1",
         "name" : "Green Palette Color Lookup Table Descriptor",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-22a"
         ],
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
         ],
         "entity" : "Presentation State",
         "module" : "Palette Color LUT"
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
                  "linkend" : "sect_C.12.1.1.4.2",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "entity" : "Presentation State",
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "1",
         "name" : "Encrypted Content"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0279)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "req" : "1C",
         "name" : "Tick Label Alignment",
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5"
         ],
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
                  "attrs" : {
                     "linkend" : "sect_C.10.5.1.3",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Required if Compound Graphic Type (0070,0294) equals RULER, AXIS. or CROSSHAIR."
         ],
         "entity" : "Presentation State"
      },
      "(0070,0402)[<0>](0008,1115)" : {
         "usage" : "M",
         "name" : "Referenced Series Sequence",
         "req" : "1",
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.11.11-1b"
         ],
         "desc" : [
            "Sequence of Items where each Item includes the Attributes of one Series to which the Presentation applies.",
            "One or more Items shall be included in this sequence."
         ],
         "entity" : "Presentation State",
         "module" : "Presentation State Blending"
      },
      "(0070,0402)[<0>](0028,3110)[<1>](0028,1055)" : {
         "name" : "Window Center & Width Explanation",
         "req" : "3",
         "usage" : "M",
         "module" : "Presentation State Blending",
         "desc" : "Free form explanation of the meaning of the Window Center and Width. Multiple values correspond to multiple Window Center and Width values.",
         "mod_tables" : [
            "table_C.11.14-1",
            "table_C.11-2b"
         ],
         "entity" : "Presentation State"
      },
      "(0010,1001)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "Other names used to identify the patient.",
         "entity" : "Patient",
         "module" : "Patient",
         "req" : "3",
         "name" : "Other Patient Names",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0040,a170)" : {
         "req" : "1",
         "name" : "Purpose of Reference Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "entity" : "Presentation State",
         "module" : "SOP Common"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0062,000b)" : {
         "usage" : "M",
         "req" : "1C",
         "name" : "Referenced Segment Number",
         "entity" : "Series",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series"
      },
      "(0038,0014)" : {
         "module" : "Patient Study",
         "desc" : [
            "Identifier of the Assigning Authority that issued Admission ID (0038,0010).",
            "Only a single Item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "entity" : "Study",
         "req" : "3",
         "name" : "Issuer of Admission ID Sequence",
         "usage" : "U"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a122)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "entity" : "Series",
         "usage" : "M",
         "req" : "1C",
         "name" : "Time"
      },
      "(0028,0120)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
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
                                    "The Value Representation of this Attribute is determined by the value of Pixel Representation (0028,0103)."
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
                     "el" : "orderedlist",
                     "attrs" : {
                        "numeration" : "arabic"
                     }
                  },
                  "\n                  "
               ]
            }
         ],
         "entity" : "Equipment",
         "module" : "General Equipment",
         "name" : "Pixel Padding Value",
         "req" : "1C",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a163)" : {
         "usage" : "M",
         "name" : "Rational Denominator Value",
         "req" : "1C",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1101)" : {
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common",
         "req" : "1",
         "name" : "Person Identification Code Sequence",
         "usage" : "M"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0231)[<2>](0070,0241)" : {
         "module" : "Graphic Annotation",
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
         ],
         "entity" : "Presentation State",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "req" : "1",
         "name" : "Text Color CIELab Value"
      },
      "(0012,0072)" : {
         "entity" : "Series",
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
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "module" : "Clinical Trial Series",
         "usage" : "U",
         "req" : "3",
         "name" : "Clinical Trial Series Description"
      },
      "(0070,005a)[<0>](0008,1140)[<1>](0008,1160)" : {
         "module" : "Displayed Area",
         "entity" : "Presentation State",
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
            "table_C.10-4",
            "table_10-3"
         ],
         "usage" : "M",
         "name" : "Referenced Frame Number",
         "req" : "1C"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)[<2>](0070,0228)" : {
         "entity" : "Presentation State",
         "desc" : [
            {
               "list" : [
                  [
                     "ISO_32000",
                     null
                  ]
               ],
               "type" : "variablelist",
               "title" : "Defined Terms:"
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
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "name" : "Font Name Type",
         "req" : "1C"
      },
      "(0008,0096)" : {
         "usage" : "M",
         "req" : "3",
         "name" : "Referring Physician Identification Sequence",
         "module" : "General Study",
         "desc" : [
            "Identification of the patient's referring physician.",
            "Only a single item is permitted in this sequence."
         ],
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0039)" : {
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
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "req" : "3",
         "name" : "Assigning Jurisdiction Code Sequence",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a161)" : {
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
         "module" : "General Series",
         "name" : "Floating Point Value",
         "req" : "1C",
         "usage" : "M"
      },
      "(0070,0402)[<0>](0028,1054)" : {
         "usage" : "M",
         "name" : "Rescale Type",
         "req" : "1C",
         "entity" : "Presentation State",
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
            "table_C.11.14-1",
            "table_C.11-1b"
         ],
         "module" : "Presentation State Blending"
      },
      "(0100,0420)" : {
         "usage" : "M",
         "name" : "SOP Authorization DateTime",
         "req" : "3",
         "module" : "SOP Common",
         "entity" : "Presentation State",
         "desc" : "The date and time when the SOP Instance Status (0100,0410) was set to AO.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0020,0060)" : {
         "req" : "2C",
         "name" : "Laterality",
         "usage" : "M",
         "module" : "General Series",
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
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0232)[<2>](0070,0245)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "req" : "1",
         "name" : "Shadow Offset X",
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
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,08ea)" : {
         "module" : "General Series",
         "entity" : "Series",
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
         "usage" : "M",
         "req" : "1C",
         "name" : "Measurement Units Code Sequence"
      },
      "(0010,0024)[<0>](0040,0033)" : {
         "req" : "1C",
         "name" : "Universal Entity ID Type",
         "usage" : "M",
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
                     "linkend" : "sect_10.14",
                     "xrefstyle" : "select: label"
                  }
               },
               " for Defined Terms."
            ]
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient"
      },
      "(0040,0275)[<0>](0040,1001)" : {
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
         ],
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "req" : "1C",
         "name" : "Requested Procedure ID"
      },
      "(0008,1110)" : {
         "module" : "General Study",
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
         ],
         "usage" : "M",
         "name" : "Referenced Study Sequence",
         "req" : "3"
      },
      "(0008,0013)" : {
         "desc" : [
            "Time the SOP Instance was created.",
            "This is the time that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Presentation State",
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "3",
         "name" : "Instance Creation Time"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0232)[<2>](0070,0246)" : {
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "desc" : [
            "Floating point value that defines the shadow offset in Y direction in Graphic Annotation Units (0070,0005). See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.10.5.1.3.13.2",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "entity" : "Presentation State",
         "req" : "1",
         "name" : "Shadow Offset Y",
         "usage" : "C - Required if Graphic Annotations are to be applied"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0233)[<2>](0070,0257)" : {
         "module" : "Graphic Annotation",
         "entity" : "Presentation State",
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
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
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5c"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied",
         "name" : "Fill Mode",
         "req" : "1"
      },
      "(0012,0083)[<0>](0012,0085)" : {
         "req" : "1",
         "name" : "Consent for Distribution Flag",
         "usage" : "U",
         "entity" : "Study",
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
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "module" : "Clinical Trial Study"
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
         "mod_tables" : [
            "table_C.7-8"
         ],
         "entity" : "Equipment",
         "module" : "General Equipment",
         "usage" : "M",
         "req" : "3",
         "name" : "Software Versions"
      },
      "(0010,2201)" : {
         "usage" : "M",
         "req" : "1C",
         "name" : "Patient Species Description",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "The species of the patient.",
            "Required if the patient is an animal and if Patient Species Code Sequence (0010,2202) is not present. May be present otherwise."
         ],
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0008,0050)" : {
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "A RIS generated number that identifies the order for the Study.",
         "entity" : "Study",
         "req" : "2",
         "name" : "Accession Number",
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
      "Can't handle table_8.8-1 (in table_C.11.14-1:table_C.17-3:table_C.17-3a after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.12-1 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_C.12-6 after (0400,0401))"
   ]
}